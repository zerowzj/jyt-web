package com.company.jytweb.service.user;

import com.company.jytweb.dao.userjytinfo.UserJytInfoEO;

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
     * 绑定JYT信息
     *
     * @param ubId
     * @param jytLoginName
     * @param jytLoginPwd
     * @param jytCookie
     */
    void bindJytInfo(Long ubId, String jytLoginName, String jytLoginPwd, String jytCookie);

    /**
     * 获取JYT信息
     *
     * @param ubId
     */
    UserJytInfoEO getJytInfo(Long ubId);
}
