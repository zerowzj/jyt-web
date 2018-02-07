package com.company.jytweb.service.user;

import com.company.jytweb.dao.userbase.UserBaseDao;
import com.company.jytweb.dao.userbase.UserBaseEO;
import com.company.jytweb.dao.userjytinfo.UserJytInfoDao;
import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;
import com.company.jytweb.support.jyt.JytCookie;
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
//        Resp<String> resp = SignInApi.signIn(jytLoginName, jytLoginPwd);
//        int resCode = resp.getResCode();
//        if (resCode != 0) {
//            throw new IllegalStateException("绑定失败");
//        }
        //
        UserJytInfoEO ujiEO = userJytInfoDao.getByUbId(ubId);
        boolean isUpdate = true;
        if (ujiEO == null) {
            ujiEO = new UserJytInfoEO();
            isUpdate = false;
        }
        ujiEO.setUjiUbId(ubId);
        ujiEO.setUjiJytLoginName(jytLoginName);
        ujiEO.setUjiJytLoginPwd(jytLoginPwd);
        ujiEO.setUjiJytCookie(jytCookie);
        //
        if (isUpdate) {
            userJytInfoDao.update(ujiEO);
        } else {
            userJytInfoDao.insert(ujiEO);
        }
    }

    @Override
    public UserJytInfoEO getJytInfo(Long ubId) {
        return userJytInfoDao.getByUbId(ubId);
    }
}
