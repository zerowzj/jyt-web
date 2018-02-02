package com.company.jytweb.auth.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 登录过滤器
 *
 * @author wangzhj
 */
public class CustomLoginFilter extends UsernamePasswordAuthenticationFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomLoginFilter.class);

    private static final String CAPTCHA_PARAM_NAME = "authCode";

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        LOGGER.info("AAAAAAA");
        //获取验证码
        String captcha = obtainCaptcha(request);
        //验证
//        String captchaKey = getCaptchaKey(request);
        /*boolean flag = imageCaptchaService.validateResponseForID(captchaKey, inputCaptcha);
        if (!flag){
            throw new CaptchaException("验证码错误");
        }*/
        //
        return super.attemptAuthentication(request, response);
    }

    //获取验证码
    private String obtainCaptcha(HttpServletRequest request) {
        return request.getParameter(CAPTCHA_PARAM_NAME);
    }

    //获取
    private String getCaptchaKey(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        String value = null;
        for (Cookie cookie : cookies) {
            String cookieName = cookie.getName();
            if ("captcha_key".equals(cookieName)) {
                value = cookie.getValue();
                break;
            }
        }
        return value;
    }
}
