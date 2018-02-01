package com.company.jytweb.support.jyt.registerno;

import com.company.jytweb.support.jyt.registerno.Doctor;

import java.io.Serializable;
import java.util.List;

public class RegisterNo implements Serializable {

    /*  */
    private String productId;
    /*  */
    private String date;
    /*  */
    private String type;
    /*  */
    private Integer orderProductType;
    /*  */
    private Doctor doctorInfo;
    /*  */
    private String remark;
    /*  */
    private Integer price;
    /*  */
    private Integer inventory;
    /*  */
    private String showTimeType;
    /*  */
    private List treatEffectiveTimeRanges;
    /*  */
    private String status;
    /*  */
    private Boolean hidePrice;
    /*  */
    private String priceType;
    /*  */
    private String sourceExtParam;
    /*  */
    private List regNoTimes;
    /*  */
    private String specialInfo;
    /*  */
    private String inventoryV2;
    /*  */
    private String priceV2;
    /*  */
    private String dic;
    /*  */
    private Boolean revolution;

    public String getProductId() {
        return productId;
    }

    public void setProductId(String productId) {
        this.productId = productId;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getOrderProductType() {
        return orderProductType;
    }

    public void setOrderProductType(Integer orderProductType) {
        this.orderProductType = orderProductType;
    }

    public Doctor getDoctorInfo() {
        return doctorInfo;
    }

    public void setDoctorInfo(Doctor doctorInfo) {
        this.doctorInfo = doctorInfo;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }

    public Integer getPrice() {
        return price;
    }

    public void setPrice(Integer price) {
        this.price = price;
    }

    public Integer getInventory() {
        return inventory;
    }

    public void setInventory(Integer inventory) {
        this.inventory = inventory;
    }

    public String getShowTimeType() {
        return showTimeType;
    }

    public void setShowTimeType(String showTimeType) {
        this.showTimeType = showTimeType;
    }

    public List getTreatEffectiveTimeRanges() {
        return treatEffectiveTimeRanges;
    }

    public void setTreatEffectiveTimeRanges(List treatEffectiveTimeRanges) {
        this.treatEffectiveTimeRanges = treatEffectiveTimeRanges;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Boolean getHidePrice() {
        return hidePrice;
    }

    public void setHidePrice(Boolean hidePrice) {
        this.hidePrice = hidePrice;
    }

    public String getPriceType() {
        return priceType;
    }

    public void setPriceType(String priceType) {
        this.priceType = priceType;
    }

    public String getSourceExtParam() {
        return sourceExtParam;
    }

    public void setSourceExtParam(String sourceExtParam) {
        this.sourceExtParam = sourceExtParam;
    }

    public List getRegNoTimes() {
        return regNoTimes;
    }

    public void setRegNoTimes(List regNoTimes) {
        this.regNoTimes = regNoTimes;
    }

    public String getSpecialInfo() {
        return specialInfo;
    }

    public void setSpecialInfo(String specialInfo) {
        this.specialInfo = specialInfo;
    }

    public String getInventoryV2() {
        return inventoryV2;
    }

    public void setInventoryV2(String inventoryV2) {
        this.inventoryV2 = inventoryV2;
    }

    public String getPriceV2() {
        return priceV2;
    }

    public void setPriceV2(String priceV2) {
        this.priceV2 = priceV2;
    }

    public String getDic() {
        return dic;
    }

    public void setDic(String dic) {
        this.dic = dic;
    }

    public Boolean getRevolution() {
        return revolution;
    }

    public void setRevolution(Boolean revolution) {
        this.revolution = revolution;
    }
}
