package com.company.jytweb.support;

import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.support.jyt.JytCookie;
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.github.benmanes.caffeine.cache.RemovalCause;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import java.util.concurrent.TimeUnit;

/**
 * JytCookie缓存
 *
 * @author wangzhj
 */
public class JytCookieCacheX {

    private static final Logger LOGGER = LoggerFactory.getLogger(JytCookieCacheX.class);

    @Autowired
    private UserJytInfoDao userJytInfoDao;

    public static JytCookieCacheX JYT_COOKIE_CACHE;

    private static Cache<Long, JytCookie> CACHE = Caffeine.newBuilder()
            .maximumSize(10000)
            .expireAfterWrite(20, TimeUnit.SECONDS)
            .recordStats()
            .removalListener((Long key, JytCookie value, RemovalCause cause) -> {
                        LOGGER.info("key=[{}] was removed, because of [{}]", key, cause.name());
                    }
            ).build();

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
        JytCookie cookie = CACHE.get(ubId, key -> {
            UserJytInfoEO ujiEO = JYT_COOKIE_CACHE.userJytInfoDao.getByUbId(key);
            return new JytCookie(ujiEO.getUjiJytCookie());
        });
        return cookie;
    }

    /**
     * 删除JytCookie
     *
     * @param ubId
     */
    public static void remove(Long ubId) {
        CACHE.invalidate(ubId);
    }

    /**
     * 删除JytCookie
     */
    public static void status() {
    }
}
