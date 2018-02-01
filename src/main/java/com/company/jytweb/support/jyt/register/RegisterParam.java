package com.company.jytweb.support.jyt.register;

import java.io.Serializable;

/**
 * 挂号参数
 *
 * @author wangzhj
 */
public class RegisterParam implements Serializable {

    /* 医院编号 */
    private String hosCode;
    /* 一级科室编码 */
    private String firstDeptCode;
    /* 二级科室编码 */
    private String secondDeptCode;
    /* 一级科室编号 */
    private Long firstDeptId;
    /* 二级科室编号 */
    private Long secondDeptId;

    /* 号源编号 */
    private String productId;
    /* 医生职称 */
    private String productType;
    /* 看病时段 */
    private String productTimeType;
    /* 医生编号 */
    private Long doctorId;
    /* 看病时间 */
    private String treatmentDay;
    /*  */
    private String orderProductType;
    /*  */
    private String orderFrom;

    /* 医保卡号 */
    private String cardNo;
}
