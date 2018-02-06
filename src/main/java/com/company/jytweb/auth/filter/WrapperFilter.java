package com.company.jytweb.auth.filter;

import com.company.jytweb.auth.UserInfoCxt;
import com.company.jytweb.support.util.SessionUtil;
import com.company.jytweb.web.support.SessionUserInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 看门狗
 *
 * @author wangzhj
 */
public class WrapperFilter extends OncePerRequestFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(WrapperFilter.class);

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        //
        try {
            SessionUserInfo userInfo = SessionUtil.getUserInfo(request);
            if (userInfo != null) {
                UserInfoCxt.setUbId(userInfo.getUbId());
            }
            //继续执行
            filterChain.doFilter(request, response);
        } finally {
            UserInfoCxt.clear();
        }
    }
}
