package com.company.jytweb.support.jyt.department;

import java.io.Serializable;
import java.util.List;

/**
 * 科室信息
 *
 * @author wangzhj
 */
public class Department implements Serializable {

    /* 科室编号 */
    private Long id;
    /* 科室编码 */
    private String departCode;
    /* 医院编码 */
    private String hosCode;
    /* 科室名称 */
    private String name;
    /*  */
    private Integer priority;
    /* 所属科室编号 */
    private Long parentId;
    /* 所属科室编码 */
    private String parentDepartCode;
    /*  */
    private List<Department> subDepartments;
    /*  */
    private Boolean virtual;
    /*  */
    private Boolean popup;
    /*  */
    private List virtualDepartInfoList;
    /*  */
    private Long vL1Id;
    /*  */
    private Long vL2Id;
    /*  */
    private String vL1DepartCode;
    /*  */
    private String vL2DepartCode;
    /*  */
    private String vL1Name;
    /*  */
    private String vL2Name;
    /*  */
    private String virtualType;
    /*  */
    private String keyword;
    /*  */
    private Boolean importantDept;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDepartCode() {
        return departCode;
    }

    public void setDepartCode(String departCode) {
        this.departCode = departCode;
    }

    public String getHosCode() {
        return hosCode;
    }

    public void setHosCode(String hosCode) {
        this.hosCode = hosCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getPriority() {
        return priority;
    }

    public void setPriority(Integer priority) {
        this.priority = priority;
    }

    public Long getParentId() {
        return parentId;
    }

    public void setParentId(Long parentId) {
        this.parentId = parentId;
    }

    public String getParentDepartCode() {
        return parentDepartCode;
    }

    public void setParentDepartCode(String parentDepartCode) {
        this.parentDepartCode = parentDepartCode;
    }

    public List<Department> getSubDepartments() {
        return subDepartments;
    }

    public void setSubDepartments(List<Department> subDepartments) {
        this.subDepartments = subDepartments;
    }

    public Boolean getVirtual() {
        return virtual;
    }

    public void setVirtual(Boolean virtual) {
        this.virtual = virtual;
    }

    public Boolean getPopup() {
        return popup;
    }

    public void setPopup(Boolean popup) {
        this.popup = popup;
    }

    public List getVirtualDepartInfoList() {
        return virtualDepartInfoList;
    }

    public void setVirtualDepartInfoList(List virtualDepartInfoList) {
        this.virtualDepartInfoList = virtualDepartInfoList;
    }

    public Long getvL1Id() {
        return vL1Id;
    }

    public void setvL1Id(Long vL1Id) {
        this.vL1Id = vL1Id;
    }

    public Long getvL2Id() {
        return vL2Id;
    }

    public void setvL2Id(Long vL2Id) {
        this.vL2Id = vL2Id;
    }

    public String getvL1DepartCode() {
        return vL1DepartCode;
    }

    public void setvL1DepartCode(String vL1DepartCode) {
        this.vL1DepartCode = vL1DepartCode;
    }

    public String getvL2DepartCode() {
        return vL2DepartCode;
    }

    public void setvL2DepartCode(String vL2DepartCode) {
        this.vL2DepartCode = vL2DepartCode;
    }

    public String getvL1Name() {
        return vL1Name;
    }

    public void setvL1Name(String vL1Name) {
        this.vL1Name = vL1Name;
    }

    public String getvL2Name() {
        return vL2Name;
    }

    public void setvL2Name(String vL2Name) {
        this.vL2Name = vL2Name;
    }

    public String getVirtualType() {
        return virtualType;
    }

    public void setVirtualType(String virtualType) {
        this.virtualType = virtualType;
    }

    public String getKeyword() {
        return keyword;
    }

    public void setKeyword(String keyword) {
        this.keyword = keyword;
    }

    public Boolean getImportantDept() {
        return importantDept;
    }

    public void setImportantDept(Boolean importantDept) {
        this.importantDept = importantDept;
    }
}
