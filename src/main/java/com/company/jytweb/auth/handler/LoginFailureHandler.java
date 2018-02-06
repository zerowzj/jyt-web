package com.company.jytweb.auth.handler;

import com.company.jytweb.auth.filter.CustomLoginFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 认证失败处理器
 *
 * @author wangzhj
 */
public class LoginFailureHandler extends SimpleUrlAuthenticationFailureHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginFailureHandler.class);

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        LOGGER.warn("用户[{}]登录系统失败！", CustomLoginFilter.getLoginName(request));

        //TODO
        if (exception instanceof UsernameNotFoundException || exception instanceof BadCredentialsException) {
            LOGGER.error("用户名/密码错误");
        } else {
            LOGGER.error("未知错误");
        }

        //执行父逻辑
        super.onAuthenticationFailure(request, response, exception);
    }
}
