package com.company.jytweb.web.ctrler;

import com.company.jytweb.support.JytCookieCache;
import com.company.jytweb.support.jyt.JytCookie;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class BindCtrler {

    @RequestMapping("/refresh")
    public void refresh() {
        JytCookieCache.refresh(111L);

        JytCookie cookie = JytCookieCache.get(111L);
        System.out.println(cookie.getUcp());
    }

    @RequestMapping("/bind")
    public void bind() {
        JytCookie cookie = JytCookieCache.get(111L);
        System.out.println(cookie.getUcp());
    }
}
