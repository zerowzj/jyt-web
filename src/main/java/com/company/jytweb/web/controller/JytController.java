package com.company.jytweb.web.controller;

import com.company.jytweb.auth.UserInfos;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.service.user.UserService;
import com.company.jytweb.support.JytCookieCache;
import com.company.jytweb.support.jyt.JytCookie;
import com.company.jytweb.support.util.SessionUtil;
import com.company.jytweb.web.SessionUserInfo;
import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping("/jyt")
public class JytController {

    @Autowired
    private UserService userService;

    @RequestMapping("/toBind")
    public ModelAndView toBind(HttpServletRequest request) {
        Long ubId = UserInfos.getUbId();
        UserJytInfoEO ujiEO = userService.getJytInfo(ubId);
        SessionUserInfo userInfo = SessionUtil.getUserInfo(request);
        //
        Map<String, Object> data = Maps.newHashMap();
        data.put("jytLoginName", ujiEO.getUjiJytLoginName());
        data.put("jytLoginPwd", ujiEO.getUjiJytLoginPwd());
        data.put("jytCookie", ujiEO.getUjiJytCookie());
        return new ModelAndView("/jyt/bind", data);
    }

    @RequestMapping("/bind")
    @ResponseBody
    public Map<String, Object> bind(HttpServletRequest request) {
        JytCookie cookie = JytCookieCache.get(1111L);
        System.out.println(cookie.getUcp());
        Map<String, Object> data = Maps.newHashMap();

        return data;
    }
}
