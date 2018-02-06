package com.company.jytweb.dao.userjytinfo;

import com.company.jytweb.support.db.BaseEO;

/**
 * 用户JYT信息EO
 *
 * @author wangzhj
 */
public class UserJytInfoEO extends BaseEO {

    /* 编号 */
    private Long ujiId;
    /* 用户编号 */
    private Long ujiUbId;
    /* JYT登录名 */
    private String ujiJytLoginName;
    /* JYT登录密码 */
    private String ujiJytLoginPwd;
    /* JYTCookie */
    private String ujiJytCookie;

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
}
