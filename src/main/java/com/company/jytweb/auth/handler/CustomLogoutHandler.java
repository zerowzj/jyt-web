package com.company.jytweb.auth.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 注销处理器
 *
 * @author wangzhj
 */
public class CustomLogoutHandler implements LogoutHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomLogoutHandler.class);

    @Override
    public void logout(HttpServletRequest request, HttpServletResponse response, Authentication authentication) {

        LOGGER.info("用户退出！");
        //设置未认证
        authentication.setAuthenticated(false);
    }
}
