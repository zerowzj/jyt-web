package com.company.jytweb.auth.user;

import com.company.jytweb.dao.userbase.UserBaseDao;
import com.company.jytweb.dao.userbase.UserBaseEO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

/**
 * 用户详情服务
 *
 * @author wangzhj
 */
public class CustomUserDetailsService implements UserDetailsService {

    private static final Logger LOGGER = LoggerFactory.getLogger(CustomUserDetailsService.class);

    @Autowired
    private UserBaseDao userBaseDao;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        UserBaseEO ubEO = userBaseDao.getByLoginName(username);
        if (ubEO == null) {
            throw new UsernameNotFoundException("");
        }
        //用户详情
        CustomUserDetails userDetails = new CustomUserDetails(username, ubEO.getUbLoginPwd());
        userDetails.setUbId(ubEO.getUbId());
        //返回
        return userDetails;
    }
}
