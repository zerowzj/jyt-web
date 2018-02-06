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

    private static final Logger logger = LoggerFactory.getLogger(LoginFailureHandler.class);

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
                                        AuthenticationException exception) throws IOException, ServletException {
        exception.printStackTrace();
        logger.warn("用户[{}]登录系统失败！", CustomLoginFilter.getLoginName(request));
        if (exception instanceof UsernameNotFoundException || exception instanceof BadCredentialsException) {
            logger.error("用户名/密码错误");
//           ServletUtil.setSessionObj(request, "msg", "用户名/密码错误！");
        } else {
            logger.error("未知错误");
//           ServletUtil.setSessionObj(request, "msg", "未知错误，请联系系统管理员！");
        }

        super.onAuthenticationFailure(request, response, exception);
    }

    private String getLoginName(HttpServletRequest request) {
        return request.getParameter("loginName");
    }
}
