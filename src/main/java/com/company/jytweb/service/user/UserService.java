package com.company.jytweb.service.user;

/**
 * 用户服务
 *
 * @author wangzhj
 */
public interface UserService {

    /**
     * 注册用户
     *
     * @param loginName
     * @param loginPwd
     */
    void checkInUser(String loginName, String loginPwd);

    /**
     * 绑定京医通
     *
     * @param ubId
     * @param jytLoginName
     * @param jytLoginPwd
     * @param jytCookie
     */
    void bindJytInfo(Long ubId, String jytLoginName, String jytLoginPwd, String jytCookie);
}
