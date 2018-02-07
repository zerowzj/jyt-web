package com.company.jytweb.support.jyt.register;

import java.io.Serializable;

/**
 * 挂号参数
 *
 * @author wangzhj
 */
public class RegisterParam implements Serializable {

    /* >>>>>>>>>>>>>>>>>>>> */
    /*       就诊人          */
    /* >>>>>>>>>>>>>>>>>>>> */
    /* 医保卡号 */
    private String cardNo;
    /* >>>>>>>>>>>>>>>>>>>> */
    /*      就诊科室         */
    /* >>>>>>>>>>>>>>>>>>>> */
    /* 医院编号 */
    private String hosCode;
    /* 一级科室编码 */
    private String firstDeptCode;
    /* 一级科室编号 */
    private Long firstDeptId;
    /* 二级科室编码 */
    private String secondDeptCode;
    /* 二级科室编号 */
    private Long secondDeptId;
    /* >>>>>>>>>>>>>>>>>>>> */
    /*      就诊时段         */
    /* >>>>>>>>>>>>>>>>>>>> */
    /* 就诊时间 */
    private String treatmentDay;
    /* 就诊时段 */
    private String productTimeType;
    /*  */
    private String regHour;
    /* >>>>>>>>>>>>>>>>>>>> */
    /*       医生信息        */
    /* >>>>>>>>>>>>>>>>>>>> */
    /* 医生职称 */
    private String productType;
    /* 医生编号 */
    private Long doctorId;
    /* >>>>>>>>>>>>>>>>>>>> */
    /*                      */
    /* >>>>>>>>>>>>>>>>>>>> */
    /* 号源编号 */
    private String productId;
    /*  */
    private String orderProductType;
    /*  */
    private String orderFrom;
    /*  */
    private String price;

    public String getCardNo() {
        return cardNo;
    }

    public void setCardNo(String cardNo) {
        this.cardNo = cardNo;
    }

    public String getHosCode() {
        return hosCode;
    }

    public void setHosCode(String hosCode) {
        this.hosCode = hosCode;
    }

    public String getFirstDeptCode() {
        return firstDeptCode;
    }

    public void setFirstDeptCode(String firstDeptCode) {
        this.firstDeptCode = firstDeptCode;
    }

    public Long getFirstDeptId() {
        return firstDeptId;
    }

    public void setFirstDeptId(Long firstDeptId) {
        this.firstDeptId = firstDeptId;
    }

    public String getSecondDeptCode() {
        return secondDeptCode;
    }

    public void setSecondDeptCode(String secondDeptCode) {
        this.secondDeptCode = secondDeptCode;
    }

    public Long getSecondDeptId() {
        return secondDeptId;
    }

    public void setSecondDeptId(Long secondDeptId) {
        this.secondDeptId = secondDeptId;
    }

    public String getTreatmentDay() {
        return treatmentDay;
    }

    public void setTreatmentDay(String treatmentDay) {
        this.treatmentDay = treatmentDay;
    }

    public String getProductTimeType() {
        return productTimeType;
    }

    public void setProductTimeType(String productTimeType) {
        this.productTimeType = productTimeType;
    }

    public String getRegHour() {
        return regHour;
    }

    public void setRegHour(String regHour) {
        this.regHour = regHour;
    }

    public String getProductType() {
        return productType;
    }

    public void setProductType(String productType) {
        this.productType = productType;
    }

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getOrderProductType() {
        return orderProductType;
    }

    public void setOrderProductType(String orderProductType) {
        this.orderProductType = orderProductType;
    }

    public String getOrderFrom() {
        return orderFrom;
    }

    public void setOrderFrom(String orderFrom) {
        this.orderFrom = orderFrom;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
