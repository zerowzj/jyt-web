package com.company.jytweb.support.jyt.card;

import java.io.Serializable;

/**
 * 医保卡信息
 *
 * @author wangzhj
 */
public class Card implements Serializable {

    /* 卡号 */
    private String cardNo;
    /* 卡类型 */
    private String cardType;
    /* 卡状态 */
    private String status;
    /* 用户姓名 */
    private String userName;
    /* 证件类型 */
    private String idType;
    /* 证件号 */
    private String idNo;
    /* 联系电话 */
    private String phone;
    /* 余额 */
    private Double balance;
    /* 创建医院 */
    private String createHospital;
    /* 创建时间 */
    private String createTime;
    /* 实体卡号 */
    private String entityCardNo;
    /* 生日 */
    private String birthday;
    /* 性别 */
    private String sex;
    /*  */
    private Boolean recentUsed;

    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public String getCardType() {
        return cardType;
    }

    public void setCardType(String cardType) {
        this.cardType = cardType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getIdType() {
        return idType;
    }

    public void setIdType(String idType) {
        this.idType = idType;
    }

    public String getIdNo() {
        return idNo;
    }

    public void setIdNo(String idNo) {
        this.idNo = idNo;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public String getCreateHospital() {
        return createHospital;
    }

    public void setCreateHospital(String createHospital) {
        this.createHospital = createHospital;
    }

    public String getCreateTime() {
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getEntityCardNo() {
        return entityCardNo;
    }

    public void setEntityCardNo(String entityCardNo) {
        this.entityCardNo = entityCardNo;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Boolean getRecentUsed() {
        return recentUsed;
    }

    public void setRecentUsed(Boolean recentUsed) {
        this.recentUsed = recentUsed;
    }
}
