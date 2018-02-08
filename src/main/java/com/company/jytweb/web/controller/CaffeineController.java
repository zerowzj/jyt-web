package com.company.jytweb.web.controller;

import com.company.jytweb.support.JytCookieCache;
import com.company.jytweb.support.jyt.JytCookie;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/caffeine")
public class CaffeineController {

    private static final Logger LOGGER = LoggerFactory.getLogger(CaffeineController.class);

    @RequestMapping("/get")
    public void get(Long ubId) {
        if (ubId == null) {
            ubId = 1L;
        }
//        JytCookie cookie = JytCookieCacheX.get(ubId);
        JytCookie cookie = JytCookieCache.get(ubId);
        LOGGER.info("====> {}", cookie.getCookie());
    }

    @RequestMapping("/remove")
    public void remove(Long ubId) {
        if (ubId == null) {
            ubId = 1L;
        }
//        JytCookieCacheX.remove(ubId);
        JytCookieCache.remove(ubId);
    }

    @RequestMapping("/refresh")
    public void refresh(Long ubId) {
        if (ubId == null) {
            ubId = 1L;
        }
        JytCookieCache.refresh(ubId);
    }

    @RequestMapping("/status")
    public void status() {
        JytCookieCache.status();
    }
}
