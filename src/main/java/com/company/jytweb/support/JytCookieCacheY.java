package com.company.jytweb.support;

import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.support.jyt.JytCookie;
import com.github.benmanes.caffeine.cache.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.CheckForNull;
import javax.annotation.Nonnull;
import javax.annotation.PostConstruct;
import java.util.concurrent.TimeUnit;

/**
 * JytCookie缓存
 *
 * @author wangzhj
 */
public class JytCookieCacheY {

    private static final Logger LOGGER = LoggerFactory.getLogger(JytCookieCacheY.class);

    @Autowired
    private UserJytInfoDao userJytInfoDao;

    public static JytCookieCacheY JYT_COOKIE_CACHE;

    private static AsyncLoadingCache<Long, JytCookie> CACHE = Caffeine.newBuilder()
            .maximumSize(10000)
            .expireAfterWrite(20, TimeUnit.SECONDS)
            .recordStats()
            .removalListener((Long key, JytCookie value, RemovalCause cause) -> {
                        LOGGER.info("key=[{}] was removed, because of [{}]", key, cause.name());
                    }
            )
            .buildAsync(new CacheLoader<Long, JytCookie>() {
                @CheckForNull
                @Override
                public JytCookie load(@Nonnull Long key) throws Exception {
                    return null;
                }
            });

    @PostConstruct
    public void init() {
        JYT_COOKIE_CACHE = this;
    }

    /**
     * 获取JytCookie
     *
     * @param ubId
     * @return JytCookie
     */
    public static JytCookie get(Long ubId) {
        JytCookie cookie = null;
        return cookie;
    }

    /**
     * 刷新JytCookie
     *
     * @param ubId
     * @return JytCookie
     */
    public static void refresh(Long ubId) {
    }

    /**
     * 删除JytCookie
     *
     * @param ubId
     */
    public static void remove(Long ubId) {
    }

    /**
     * 删除JytCookie
     */
    public static void status() {
    }
}
