package com.company.jytweb.web.interceptor;

import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.google.common.base.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 绑定拦截器
 *
 * @author wangzhj
 */
public class BindInterceptor extends HandlerInterceptorAdapter {

    private static final Logger LOGGER = LoggerFactory.getLogger(BindInterceptor.class);

    private static final String BIND_PAGE = "";

    @Autowired
    private UserJytInfoDao userJytInfoDao;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler) throws Exception {
//        UserJytInfoEO ujiEO = userJytInfoDao.getByUbId(null);
//        if (ujiEO == null || Strings.isNullOrEmpty(ujiEO.getUjiJytCookie())) {
//            response.sendRedirect("");
//            return false;
//        }
        return true;
    }
}


