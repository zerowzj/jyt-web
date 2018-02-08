package com.company.jytweb.support;

import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.support.jyt.JytCookie;
import com.github.benmanes.caffeine.cache.CacheLoader;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.LoadingCache;
import com.github.benmanes.caffeine.cache.RemovalCause;
import com.github.benmanes.caffeine.cache.stats.CacheStats;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.CheckForNull;
import javax.annotation.Nonnull;
import javax.annotation.PostConstruct;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

/**
 * JytCookie缓存
 *
 * @author wangzhj
 */
public class JytCookieCache {

    private static final Logger LOGGER = LoggerFactory.getLogger(JytCookieCache.class);

    @Autowired
    private UserJytInfoDao userJytInfoDao;

    public static JytCookieCache JYT_COOKIE_CACHE;

    private static LoadingCache<Long, JytCookie> CACHE = Caffeine.newBuilder()
            .maximumSize(10000)
            .expireAfterWrite(20, TimeUnit.SECONDS)
            .recordStats()
            .removalListener((Long key, JytCookie value, RemovalCause cause) -> {
                        LOGGER.info("key=[{}] was removed, because of [{}]", key, cause.name());
                    }
            )
            .build(new CacheLoader<Long, JytCookie>() {
                @CheckForNull
                @Override
                public JytCookie load(@Nonnull Long key) throws Exception {
                    UserJytInfoEO ujiEO = JYT_COOKIE_CACHE.userJytInfoDao.getByUbId(key);
                    JytCookie cookie = null;
                    if (ujiEO != null) {
                        LOGGER.info("got key=[{}] from db.", key);
                        cookie = new JytCookie(ujiEO.getUjiJytCookie());
                    } else {
                        LOGGER.info("key=[{}] not exist in db!!!", key);
                    }
                    return cookie;
                }

               /* @CheckForNull
                @Override
                public JytCookie reload(@Nonnull Long key, @Nonnull JytCookie oldValue) throws Exception {
                    LOGGER.info("===>");
                    LOGGER.info("===> reload key=[{}] from db!!!", key);
                    LOGGER.info("===>");
                    UserJytInfoEO ujiEO = JYT_COOKIE_CACHE.userJytInfoDao.getByUbId(key);
                    return new JytCookie(ujiEO.getUjiJytCookie());
                }*/
            });

    public static ScheduledThreadPoolExecutor executor = (ScheduledThreadPoolExecutor) Executors.newScheduledThreadPool(1);

    @PostConstruct
    public void init() {
        JYT_COOKIE_CACHE = this;
    }

    static {
//        new Thread(() -> {
//            while (true) {
//                status();
//                try {
//                    TimeUnit.SECONDS.sleep(10);
//                } catch (Exception ex) {
//                    ex.printStackTrace();
//                }
//            }
//        }).start();
    }

    /**
     * 获取JytCookie
     *
     * @param ubId
     * @return JytCookie
     */
    public static JytCookie get(Long ubId) {
        JytCookie cookie = CACHE.get(ubId);
        return cookie;
    }

    /**
     * 移除JytCookie
     *
     * @param ubId
     */
    public static void remove(Long ubId) {
        CACHE.invalidate(ubId);
    }

    /**
     * 刷新JytCookie
     *
     * @param ubId
     * @return JytCookie
     */
    public static void refresh(Long ubId) {
        CACHE.refresh(ubId);
    }

    /**
     * JytCookie
     */
    public static void status() {
        CacheStats status = CACHE.stats();
        LOGGER.info("hitCount: {}", status.hitCount());
    }
}
