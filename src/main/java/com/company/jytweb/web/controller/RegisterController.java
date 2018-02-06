package com.company.jytweb.web.controller;

import com.company.jytweb.service.register.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private RegisterService registerService;

    /**
     * 跳转到JYT绑定页面
     */
    @RequestMapping("/to_reg")
    public ModelAndView toReg(HttpServletRequest request) {
        //医保卡列表
        //医院列表
        return new ModelAndView("/register/reg");
    }

    /**
     * 跳转到JYT绑定页面
     */
    @RequestMapping("/reg")
    public ModelAndView reg(HttpServletRequest request) {
        //医保卡列表
        //医院列表
        return new ModelAndView("/register/reg");
    }

    /**
     * 跳转到JYT绑定页面
     */
    @RequestMapping("/list")
    public ModelAndView list(HttpServletRequest request) {
        return new ModelAndView("/register/regList");
    }
}
