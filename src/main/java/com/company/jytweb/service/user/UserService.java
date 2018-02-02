package com.company.jytweb.service.user;

/**
 * 用户服务
 *
 * @author wangzhj
 */
public interface UserService {

    /**
     * 用户注册
     *
     * @param loginName
     * @param loginPwd
     */
    void checkIn(String loginName, String loginPwd);
}
