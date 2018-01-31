package com.company.jytweb.dao.userbase;

import com.company.jytweb.support.db.BaseEO;

/**
 * 用户基本信息EO
 *
 * @author wangzhj
 */
public class UserBaseEO extends BaseEO {

    /**
     * 用户编号
     */
    private Long ubId;
    /**
     * 登录名
     */
    private String ubLoginName;
    /**
     * 登录密码
     */
    private String ubLoginPwd;
    /**
     * 用户类型
     */
    private String ubType;
    /**
     * 用户状态
     */
    private String ubStatus;

    public Long getUbId() {
        return ubId;
    }

    public void setUbId(Long ubId) {
        this.ubId = ubId;
    }

    public String getUbLoginName() {
        return ubLoginName;
    }

    public void setUbLoginName(String ubLoginName) {
        this.ubLoginName = ubLoginName;
    }

    public String getUbLoginPwd() {
        return ubLoginPwd;
    }

    public void setUbLoginPwd(String ubLoginPwd) {
        this.ubLoginPwd = ubLoginPwd;
    }

    public String getUbType() {
        return ubType;
    }

    public void setUbType(String ubType) {
        this.ubType = ubType;
    }

    public String getUbStatus() {
        return ubStatus;
    }

    public void setUbStatus(String ubStatus) {
        this.ubStatus = ubStatus;
    }
}
