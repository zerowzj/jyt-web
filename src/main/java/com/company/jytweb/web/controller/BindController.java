package com.company.jytweb.web.controller;

import com.company.jytweb.support.JytCookieCache;
import com.company.jytweb.support.jyt.JytCookie;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/jyt")
public class BindController {

    @RequestMapping("/toBind")
    public ModelAndView refresh(HttpServletRequest request) {
        return new ModelAndView("/jyt/bind");
    }

    @RequestMapping("/bind")
    public void bind() {
        JytCookie cookie = JytCookieCache.get(1111L);
        System.out.println(cookie.getUcp());
    }
}
