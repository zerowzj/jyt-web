package com.company.jytweb.service;

import com.company.jytweb.service.user.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath*:spring/spring-context.xml"})
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void checkInUser_test() {
        String loginName = "15210207356";
        String loginPwd = "wzj0211432";
        userService.checkInUser(loginName, loginPwd);
    }

    @Test
    public void bindJytInfo_test() {
        Long ubId = 111L;
        String jytLoginName = "15210207356";
        String jytLoginPwd = "wzj0211432";
        String jytCookie = "__jsluid=f68a74d134d3c1b3686bff581a884065; gr_user_id=e142bf87-c54c-40aa-82a0-98830fdc4cd2; _ucp=xlf2k3rQR3QENziaZHI35J0Nb4L-lq1YiDA7qvtEwU4ehFkeI_5zlU-aJQRc2o6pnUOW-w..; _attention=1; gr_session_id_baad359c5e3b60a1=21eacd2b-ba2f-4845-ad67-74ea6f3c0ac0";
        userService.bindJytInfo(ubId, jytLoginName, jytLoginPwd, jytCookie);
    }
}
