package com.company.jytweb.support.jyt.hospital;

import java.io.Serializable;

/**
 * 医院信息
 *
 * @author wangzhj
 */
public class Hospital implements Serializable {

    /* 医院编码 */
    private String hosCode;
    /* 医院名称 */
    private String hosName;
    /* 医院级别 */
    private String hosLevel;
    /* 所在城区 */
    private String countyName;
    /* 图标 */
    private String smallLogo;
    /* 是否已开通 */
    private Boolean open;
    /*  */
    private String openView;
    /*  */
    private Long distance;

    public String getHosCode() {
        return hosCode;
    }

    public void setHosCode(String hosCode) {
        this.hosCode = hosCode;
    }

    public String getHosName() {
        return hosName;
    }

    public void setHosName(String hosName) {
        this.hosName = hosName;
    }

    public String getHosLevel() {
        return hosLevel;
    }

    public void setHosLevel(String hosLevel) {
        this.hosLevel = hosLevel;
    }

    public String getCountyName() {
        return countyName;
    }

    public void setCountyName(String countyName) {
        this.countyName = countyName;
    }

    public String getSmallLogo() {
        return smallLogo;
    }

    public void setSmallLogo(String smallLogo) {
        this.smallLogo = smallLogo;
    }

    public Boolean getOpen() {
        return open;
    }

    public void setOpen(Boolean open) {
        this.open = open;
    }

    public String getOpenView() {
        return openView;
    }

    public void setOpenView(String openView) {
        this.openView = openView;
    }

    public Long getDistance() {
        return distance;
    }

    public void setDistance(Long distance) {
        this.distance = distance;
    }
}
