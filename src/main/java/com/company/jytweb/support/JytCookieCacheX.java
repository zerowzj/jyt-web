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
                        LOGGER.info("key=[{}] removed, because of [{}]", key, cause.name().toLowerCase());
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
            JytCookie myCookie = null;
            if (ujiEO != null) {
                LOGGER.info("got key=[{}] from db.", key);
                myCookie = new JytCookie(ujiEO.getUjiJytCookie());
            } else {
                LOGGER.info("key=[{}] not exist in db!!!", key);
            }
            return myCookie;
        });
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
}
