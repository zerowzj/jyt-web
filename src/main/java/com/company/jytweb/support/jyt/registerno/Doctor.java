package com.company.jytweb.support.jyt.registerno;

import java.io.Serializable;

/**
 * 医生信息
 *
 * @author wangzhj
 */
public class Doctor implements Serializable {

    /* 医生编号 */
    private Long doctorId;
    /* 医生编码 */
    private String code;
    /* 医生姓名 */
    private String name;
    /* 医生职称 */
    private String title;
    /*  */
    private String specialtyDesc;
    /*  */
    private Boolean special;

    public Long getDoctorId() {
        return doctorId;
    }

    public void setDoctorId(Long doctorId) {
        this.doctorId = doctorId;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSpecialtyDesc() {
        return specialtyDesc;
    }

    public void setSpecialtyDesc(String specialtyDesc) {
        this.specialtyDesc = specialtyDesc;
    }

    public Boolean getSpecial() {
        return special;
    }

    public void setSpecial(Boolean special) {
        this.special = special;
    }
}
