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
    /* 二级科室编码 */
    private String secondDeptCode;
    /* 一级科室编号 */
    private Long firstDeptId;
    /* 二级科室编号 */
    private Long secondDeptId;

    /* >>>>>>>>>>>>>>>>>>>> */
    /*      就诊时段         */
    /* >>>>>>>>>>>>>>>>>>>> */
    /* 就诊时间 */
    private String treatmentDay;
    /* 就诊时段 */
    private String productTimeType;

    /* >>>>>>>>>>>>>>>>>>>> */
    /*       医生信息        */
    /* >>>>>>>>>>>>>>>>>>>> */
    /* 医生职称 */
    private String productType;
    /* 医生编号 */
    private Long doctorId;

    /* 号源编号 */
    private String productId;
    /*  */
    private String orderProductType;
    /*  */
    private String orderFrom;
    /*  */
    private String price;
    /*  */
    private String regHour;

}
