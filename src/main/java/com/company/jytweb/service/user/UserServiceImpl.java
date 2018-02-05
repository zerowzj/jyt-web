package com.company.jytweb.service.user;

import com.company.jytweb.dao.userbase.UserBaseDao;
import com.company.jytweb.dao.userbase.UserBaseEO;
import org.joda.time.DateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service("userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserBaseDao userBaseDao;

    @Override
    public void checkInUser(String loginName, String loginPwd) {
        UserBaseEO ubEO = new UserBaseEO();
        ubEO.setUbLoginName(loginName);
        ubEO.setUbLoginPwd(loginPwd);
        ubEO.setUbStatus("");
        ubEO.setUbType("");
        ubEO.setUbBeginTime(DateTime.now().toDate());
        userBaseDao.insert(ubEO);
    }

    @Override
    public void checkInJytInfo(String jytLoginName, String jytLoginPwd, String jytCookie) {

    }
}
