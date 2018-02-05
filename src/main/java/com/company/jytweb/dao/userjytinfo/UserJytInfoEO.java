package com.company.jytweb.dao.userjytinfo;

import com.company.jytweb.support.db.BaseEO;

/**
 * 用户京医通信息EO
 *
 * @author wangzhj
 */
public class UserJytInfoEO extends BaseEO {

    /* 编号 */
    private Long ujiId;
    /* 用户编号 */
    private Long ujiUbId;
    /* 京医通登录名 */
    private String ujiJytLoginName;
    /* 京医通登录密码 */
    private String ujiJytLoginPwd;
    /* 京医通Cookie */
    private String ujiJytCookie;
    /*  */
    private String ujiJytHeaderUcp;
    /*  */
    private String ujiJytHeaderAttention;
    /*  */
    private String ujiJytHeaderLgd;

    public Long getUjiId() {
        return ujiId;
    }

    public void setUjiId(Long ujiId) {
        this.ujiId = ujiId;
    }

    public Long getUjiUbId() {
        return ujiUbId;
    }

    public void setUjiUbId(Long ujiUbId) {
        this.ujiUbId = ujiUbId;
    }

    public String getUjiJytLoginName() {
        return ujiJytLoginName;
    }

    public void setUjiJytLoginName(String ujiJytLoginName) {
        this.ujiJytLoginName = ujiJytLoginName;
    }

    public String getUjiJytLoginPwd() {
        return ujiJytLoginPwd;
    }

    public void setUjiJytLoginPwd(String ujiJytLoginPwd) {
        this.ujiJytLoginPwd = ujiJytLoginPwd;
    }

    public String getUjiJytCookie() {
        return ujiJytCookie;
    }

    public void setUjiJytCookie(String ujiJytCookie) {
        this.ujiJytCookie = ujiJytCookie;
    }

    public String getUjiJytHeaderUcp() {
        return ujiJytHeaderUcp;
    }

    public void setUjiJytHeaderUcp(String ujiJytHeaderUcp) {
        this.ujiJytHeaderUcp = ujiJytHeaderUcp;
    }

    public String getUjiJytHeaderAttention() {
        return ujiJytHeaderAttention;
    }

    public void setUjiJytHeaderAttention(String ujiJytHeaderAttention) {
        this.ujiJytHeaderAttention = ujiJytHeaderAttention;
    }

    public String getUjiJytHeaderLgd() {
        return ujiJytHeaderLgd;
    }

    public void setUjiJytHeaderLgd(String ujiJytHeaderLgd) {
        this.ujiJytHeaderLgd = ujiJytHeaderLgd;
    }
}
