package com.company.jytweb.auth.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 登录
 *
 * @author wangzhj
 */
public class CustomLoginFilter extends UsernamePasswordAuthenticationFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomLoginFilter.class);

    /*  */
    public static String PARAM_NAME_USER_NAME;

    @PostConstruct
    public void init() {
        PARAM_NAME_USER_NAME = getUsernameParameter();
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        return super.attemptAuthentication(request, response);
    }

    public static String getLoginName(HttpServletRequest request) {
        return request.getParameter(PARAM_NAME_USER_NAME);
    }
}
