package com.company.jytweb.web.controller;

import com.company.jytweb.auth.UserInfos;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.service.user.UserService;
import com.company.jytweb.support.JytCookieCache;
import com.company.jytweb.support.jyt.JytCookie;
import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/to_bind")
    public ModelAndView toBind(HttpServletRequest request) {
        Long ubId = UserInfos.getUbId();
        UserJytInfoEO ujiEO = userService.getJytInfo(ubId);
        //
        Map<String, Object> data = Maps.newHashMap();
        data.put("jytLoginName", ujiEO.getUjiJytLoginName());
        data.put("jytLoginPwd", ujiEO.getUjiJytLoginPwd());
        data.put("jytCookie", ujiEO.getUjiJytCookie());
        return new ModelAndView("user/bind", data);
    }

    @RequestMapping("/bind_jyt")
    @ResponseBody
    public Map<String, Object> bind(HttpServletRequest request) {
        Long ubId = UserInfos.getUbId();
        JytCookie cookie = JytCookieCache.get(ubId);
        System.out.println(cookie.getUcp());
        Map<String, Object> data = Maps.newHashMap();
        return data;
    }
}
