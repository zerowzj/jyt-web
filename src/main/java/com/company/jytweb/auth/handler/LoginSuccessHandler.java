package com.company.jytweb.auth.handler;

import com.company.jytweb.auth.user.CustomUserDetails;
import com.company.jytweb.web.support.SessionUtil;
import com.company.jytweb.web.support.SessionUserInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 认证成功处理器
 *
 * @author wangzhj
 */
public class LoginSuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {

    private static final Logger LOGGER = LoggerFactory.getLogger(LoginSuccessHandler.class);

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
                                        Authentication authentication) throws ServletException, IOException {
        //获取认证信息
        UsernamePasswordAuthenticationToken token = (UsernamePasswordAuthenticationToken) authentication;
        CustomUserDetails userDetails = (CustomUserDetails) token.getPrincipal();
        LOGGER.info("===>用户[{}]登录成功!", userDetails.getUsername());

        //TODO
        SessionUserInfo userInfo = new SessionUserInfo();
        userInfo.setUbId(userDetails.getUbId());
        SessionUtil.setUserInfo(request, userInfo);

        //执行父逻辑
        super.onAuthenticationSuccess(request, response, authentication);
    }
}
