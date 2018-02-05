package com.company.jytweb.support;

import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.support.jyt.JytCookie;
import com.github.benmanes.caffeine.cache.CacheLoader;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.LoadingCache;
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
public class JytCookieCache {

    private static final Logger LOGGER = LoggerFactory.getLogger(JytCookieCache.class);

    @Autowired
    private UserJytInfoDao userJytInfoDao;

    /*  */
    public static JytCookieCache JYT_COOKIE_CACHE;
    /*  */
    private static LoadingCache<Long, JytCookie> CACHE = Caffeine.newBuilder()
            .maximumSize(10000)
            .expireAfterWrite(10, TimeUnit.SECONDS)
            .build(new CacheLoader<Long, JytCookie>() {
                @CheckForNull
                @Override
                public JytCookie load(@Nonnull Long key) throws Exception {
                    LOGGER.info("sadfffffffffffffffffffffffffffload...");
                    UserJytInfoEO ujiEO = JYT_COOKIE_CACHE.userJytInfoDao.getByUbId(key);
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
        JytCookie cookie = CACHE.getIfPresent(ubId);
//        if (cookie == null) {
//            LOGGER.info("===> get jyt cookie of [ub={}] from db", ubId);
//            UserJytInfoEO ujiEO = JYT_COOKIE_CACHE.userJytInfoDao.getByUbId(ubId);
//            if (ujiEO != null) {
//                cookie = new JytCookie(ujiEO.getUjiJytCookie());
//                CACHE.put(ubId, cookie);
//            }
//        }
        return cookie;
    }
}
