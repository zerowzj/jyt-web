package com.company.jytweb.support;

import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.support.jyt.JytCookie;
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import com.google.common.base.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.annotation.PostConstruct;
import java.util.concurrent.TimeUnit;

public class JytCookieCache {

    private static final Logger LOGGER = LoggerFactory.getLogger(JytCookieCache.class);

    @Autowired
    private UserJytInfoDao userJytInfoDao;

    public static JytCookieCache JYT_COOKIE_CACHE;

    private static Cache<Long, JytCookie> CACHE = Caffeine.newBuilder()
            .maximumSize(10000)
            .expireAfterWrite(10, TimeUnit.MINUTES)
            .build();

    @PostConstruct
    public void init() {
        JYT_COOKIE_CACHE = this;
    }

    /**
     * @param ubId
     * @return JytCookie
     */
    public static JytCookie get(Long ubId) {
        JytCookie cookie = CACHE.getIfPresent(ubId);
        if (cookie == null) {
            UserJytInfoEO ujiEO = JYT_COOKIE_CACHE.userJytInfoDao.getByUbId(ubId);
            if (ujiEO != null && !Strings.isNullOrEmpty(ujiEO.getUjiJytCookie())) {
                cookie = new JytCookie(ujiEO.getUjiJytCookie());
            }
        }
        return cookie;
    }
}
