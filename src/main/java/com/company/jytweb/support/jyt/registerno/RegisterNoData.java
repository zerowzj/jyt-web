package com.company.jytweb.support.jyt.registerno;

import java.io.Serializable;
import java.util.List;

public class RegisterNoData implements Serializable {

    /* 医院编码 */
    private String hosCode;
    /*  */
    private String evaluation;
    /* 上午号源 */
    private List<RegisterNo> amList;
    /* 下午号源 */
    private List<RegisterNo> pmList;
    /* 晚上号源 */
    private List<RegisterNo> nightList;
    /* 全天号源 */
    private List<RegisterNo> allDayList;
    /*  */
    private List refSourceNo;
    /* 当前类型 */
    private String currentType;
    /* 日期 */
    private String queryDate;
    /*  */
    private String weekDisplay;
    /*  */
    private String dic;

    public String getHosCode() {
        return hosCode;
    }

    public void setHosCode(String hosCode) {
        this.hosCode = hosCode;
    }

    public List<RegisterNo> getAmList() {
        return amList;
    }

    public void setAmList(List<RegisterNo> amList) {
        this.amList = amList;
    }

    public List<RegisterNo> getPmList() {
        return pmList;
    }

    public void setPmList(List<RegisterNo> pmList) {
        this.pmList = pmList;
    }

    public List<RegisterNo> getNightList() {
        return nightList;
    }

    public void setNightList(List<RegisterNo> nightList) {
        this.nightList = nightList;
    }

    public List<RegisterNo> getAllDayList() {
        return allDayList;
    }

    public void setAllDayList(List<RegisterNo> allDayList) {
        this.allDayList = allDayList;
    }

    public String getCurrentType() {
        return currentType;
    }

    public void setCurrentType(String currentType) {
        this.currentType = currentType;
    }

    public String getQueryDate() {
        return queryDate;
    }

    public void setQueryDate(String queryDate) {
        this.queryDate = queryDate;
    }

    public String getWeekDisplay() {
        return weekDisplay;
    }

    public void setWeekDisplay(String weekDisplay) {
        this.weekDisplay = weekDisplay;
    }

    public String getDic() {
        return dic;
    }

    public void setDic(String dic) {
        this.dic = dic;
    }

    public String getEvaluation() {
        return evaluation;
    }

    public void setEvaluation(String evaluation) {
        this.evaluation = evaluation;
    }

    public List getRefSourceNo() {
        return refSourceNo;
    }

    public void setRefSourceNo(List refSourceNo) {
        this.refSourceNo = refSourceNo;
    }
}
