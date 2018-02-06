package com.company.jytweb.web.interceptor;

import com.company.jytweb.auth.UserInfoCxt;
import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.jyt.signin.SignInApi;
import com.google.common.base.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * JYT绑定拦截器
 *
 * @author wangzhj
 */
public class JytBindInterceptor extends HandlerInterceptorAdapter {

    private static final Logger LOGGER = LoggerFactory.getLogger(JytBindInterceptor.class);

    private static final String JYT_BIND_LOCATION = "/jyt/toBind";

    @Autowired
    private UserJytInfoDao userJytInfoDao;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler) throws Exception {
        Long ubId = UserInfoCxt.getUbId();
        UserJytInfoEO ujiEO = userJytInfoDao.getByUbId(ubId);
        if (ujiEO == null || Strings.isNullOrEmpty(ujiEO.getUjiJytCookie())) {
            LOGGER.info("用户[{}]未绑定JYT账户，需要绑定！", ubId);
            response.sendRedirect(JYT_BIND_LOCATION);
            return false;
        } else {
            String phone = ujiEO.getUjiJytLoginName();
            String pwd = ujiEO.getUjiJytLoginPwd();
            Resp<String> resp = SignInApi.signIn(phone, pwd);
            if (!resp.ok()) {
                LOGGER.info("用户[{}]绑定Jyt账户cookie失效，需要重新绑定！", ubId);
                response.sendRedirect(JYT_BIND_LOCATION);
                return false;
            }
        }
        return true;
    }
}


