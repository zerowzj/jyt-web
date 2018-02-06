package com.company.jytweb.web.controller;

import com.company.jytweb.service.jyt.JytService;
import com.company.jytweb.service.register.RegisterService;
import com.company.jytweb.support.jyt.card.Card;
import com.company.jytweb.support.jyt.hospital.Hospital;
import com.google.common.collect.Maps;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/register")
public class RegisterController {

    @Autowired
    private JytService jytService;
    @Autowired
    private RegisterService registerService;

    /**
     * 跳转到JYT绑定页面
     */
    @RequestMapping("/to_reg")
    public ModelAndView toReg(HttpServletRequest request) {
        Map<String, Object> data = Maps.newHashMap();
        //医保卡列表
        List<Card> cardLt = jytService.getCardLt();
        data.put("cardLt", cardLt);
        //医院列表
        List<Hospital> hosLt = jytService.getHosLt();
        data.put("hosLt", hosLt);
        return new ModelAndView("/register/reg", data);
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
