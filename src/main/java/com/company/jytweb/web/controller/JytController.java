package com.company.jytweb.web.controller;

import com.company.jytweb.service.jyt.JytService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@RequestMapping("/jyt")
public class JytController {

    @Autowired
    private JytService jytService;

    @RequestMapping("/dept")
    public Map<String, String> de() {

        return null;
    }
}
