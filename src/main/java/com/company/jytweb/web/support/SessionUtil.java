package com.company.jytweb.web.support;

import com.company.jytweb.web.support.SessionUserInfo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Session Util
 *
 * @author wangzhj
 */
public abstract class SessionUtil {

    private static final String SESSION_USER_INFO_KEY = "com.company.jytweb.web.support.SessionUserInfo";

    /**
     * 设置SessionUserInfo
     *
     * @param request
     * @param userInfo
     */
    public static void setUserInfo(HttpServletRequest request, SessionUserInfo userInfo) {
        get(request).setAttribute(SESSION_USER_INFO_KEY, userInfo);
    }

    /**
     * 获取SessionUserInfo
     *
     * @param request
     * @return SessionUserInfo
     */
    public static SessionUserInfo getUserInfo(HttpServletRequest request) {
        return (SessionUserInfo) get(request).getAttribute(SESSION_USER_INFO_KEY);
    }

    private static HttpSession get(HttpServletRequest request) {
        return request.getSession();
    }
}
