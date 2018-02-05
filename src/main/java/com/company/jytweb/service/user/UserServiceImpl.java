package com.company.jytweb.service.user;

import com.company.jytweb.dao.userbase.UserBaseDao;
import com.company.jytweb.dao.userbase.UserBaseEO;
import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.support.JytCookie;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.jyt.signin.SignInApi;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserBaseDao userBaseDao;
    @Autowired
    protected UserJytInfoDao userJytInfoDao;

    @Override
    public void checkInUser(String loginName, String loginPwd) {
        UserBaseEO ubEO = new UserBaseEO();
        ubEO.setUbLoginName(loginName);
        ubEO.setUbLoginPwd(loginPwd);
        ubEO.setUbStatus("");
        ubEO.setUbType("");
        ubEO.setUbBeginTime(DateTime.now().toDate());
        //
        userBaseDao.insert(ubEO);
    }

    @Override
    public void bindJytInfo(Long ubId, String jytLoginName, String jytLoginPwd, String jytCookie) {
        //
        Resp<String> resp = SignInApi.signIn(jytLoginName, jytLoginPwd);
        int resCode = resp.getResCode();
        if (resCode != 0) {
            throw new IllegalStateException("");
        }
        //
        UserJytInfoEO ujiEO = new UserJytInfoEO();
        boolean is_update = true;
        if (ujiEO == null) {
            ujiEO = new UserJytInfoEO();
            is_update = false;
        }
        ujiEO.setUjiJytLoginName(jytLoginName);
        ujiEO.setUjiJytLoginPwd(jytLoginPwd);
        ujiEO.setUjiJytCookie(jytCookie);
        JytCookie cookie = new JytCookie(jytCookie);
        ujiEO.setUjiJytHeaderUcp(cookie.getUcp());
        ujiEO.setUjiJytHeaderAttention(cookie.getAttention());
        ujiEO.setUjiJytHeaderLgd(cookie.getLgd());
        //
        if (is_update) {
            userJytInfoDao.update(ujiEO);
        } else {
            userJytInfoDao.update(ujiEO);
        }
    }
}
