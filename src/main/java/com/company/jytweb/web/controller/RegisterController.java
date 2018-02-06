package com.company.jytweb.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/register")
public class RegisterController {

    @RequestMapping("/toCheckin")
    public ModelAndView toBind(HttpServletRequest request) {
        return new ModelAndView("/jyt/bind");
    }
}
