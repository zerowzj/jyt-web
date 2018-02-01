package com.company.jytweb.support.jyt.department;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

public class DepartmentData implements Serializable {

    /* 医院级别 */
    private String hosLevel;
    /* 医院地址 */
    private String hosAddress;
    /*  */
    private String lng;
    /*  */
    private String lat;
    /* 医院名称 */
    private String name;
    /* 图标 */
    private String logo;
    /* 是否开通 */
    private Boolean open;
    /*  */
    private String advanceDay;
    /*  */
    private String curOpenRegTime;
    /*  */
    private String lastOpenRegTime;
    /*  */
    private Boolean noticeBoardStatus;
    /*  */
    private String noticeBoardBrief;
    /*  */
    private String noticeBoardDetail;
    /* 科室 */
    private List<Department> departments;
    /*  */
    private Map<String, Object> hosLabel;

    public String getHosLevel() {
        return hosLevel;
    }

    public void setHosLevel(String hosLevel) {
        this.hosLevel = hosLevel;
    }

    public String getHosAddress() {
        return hosAddress;
    }

    public void setHosAddress(String hosAddress) {
        this.hosAddress = hosAddress;
    }

    public String getLng() {
        return lng;
    }

    public void setLng(String lng) {
        this.lng = lng;
    }

    public String getLat() {
        return lat;
    }

    public void setLat(String lat) {
        this.lat = lat;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public Boolean getOpen() {
        return open;
    }

    public void setOpen(Boolean open) {
        this.open = open;
    }

    public String getAdvanceDay() {
        return advanceDay;
    }

    public void setAdvanceDay(String advanceDay) {
        this.advanceDay = advanceDay;
    }

    public String getCurOpenRegTime() {
        return curOpenRegTime;
    }

    public void setCurOpenRegTime(String curOpenRegTime) {
        this.curOpenRegTime = curOpenRegTime;
    }

    public String getLastOpenRegTime() {
        return lastOpenRegTime;
    }

    public void setLastOpenRegTime(String lastOpenRegTime) {
        this.lastOpenRegTime = lastOpenRegTime;
    }

    public Boolean getNoticeBoardStatus() {
        return noticeBoardStatus;
    }

    public void setNoticeBoardStatus(Boolean noticeBoardStatus) {
        this.noticeBoardStatus = noticeBoardStatus;
    }

    public String getNoticeBoardBrief() {
        return noticeBoardBrief;
    }

    public void setNoticeBoardBrief(String noticeBoardBrief) {
        this.noticeBoardBrief = noticeBoardBrief;
    }

    public String getNoticeBoardDetail() {
        return noticeBoardDetail;
    }

    public void setNoticeBoardDetail(String noticeBoardDetail) {
        this.noticeBoardDetail = noticeBoardDetail;
    }

    public List<Department> getDepartments() {
        return departments;
    }

    public void setDepartments(List<Department> departments) {
        this.departments = departments;
    }

    public Map<String, Object> getHosLabel() {
        return hosLabel;
    }

    public void setHosLabel(Map<String, Object> hosLabel) {
        this.hosLabel = hosLabel;
    }
}
