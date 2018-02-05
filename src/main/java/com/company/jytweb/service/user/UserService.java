package com.company.jytweb.service.user;

/**
 * 用户服务
 *
 * @author wangzhj
 */
public interface UserService {

    /**
     * 注册基本信息
     *
     * @param loginName
     * @param loginPwd
     */
    void checkInUser(String loginName, String loginPwd);

    /**
     * 注册京医通信息
     *
     * @param jytLoginName
     * @param jytLoginPwd
     * @param jytCookie
     */
    void checkInJytInfo(String jytLoginName, String jytLoginPwd, String jytCookie);
}
