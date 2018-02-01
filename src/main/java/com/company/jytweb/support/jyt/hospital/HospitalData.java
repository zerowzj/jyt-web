package com.company.jytweb.support.jyt.hospital;

import java.io.Serializable;
import java.util.List;

/**
 *
 *
 */
public class HospitalData implements Serializable {

    /* 医院个数 */
    private Integer hospitalCount;
    /* 医务室个数 */
    private Integer infirmaryCount;
    /* */
    private String grey;

    private List<Hospital> hospitals;

    public Integer getHospitalCount() {
        return hospitalCount;
    }

    public void setHospitalCount(Integer hospitalCount) {
        this.hospitalCount = hospitalCount;
    }

    public Integer getInfirmaryCount() {
        return infirmaryCount;
    }

    public void setInfirmaryCount(Integer infirmaryCount) {
        this.infirmaryCount = infirmaryCount;
    }

    public String getGrey() {
        return grey;
    }

    public void setGrey(String grey) {
        this.grey = grey;
    }

    public List<Hospital> getHospitals() {
        return hospitals;
    }

    public void setHospitals(List<Hospital> hospitals) {
        this.hospitals = hospitals;
    }
}
