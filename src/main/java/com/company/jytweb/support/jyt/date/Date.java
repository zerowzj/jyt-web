package com.company.jytweb.support.jyt.date;

import java.io.Serializable;

public class Date implements Serializable {

    /* 医院编码 */
    private String date;
    /* 医院编码 */
    private String status;
    /* 医院编码 */
    private Long waitOpenTime;
    /* 医院编码 */
    private Long openTimestamp;

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Long getWaitOpenTime() {
        return waitOpenTime;
    }

    public void setWaitOpenTime(Long waitOpenTime) {
        this.waitOpenTime = waitOpenTime;
    }

    public Long getOpenTimestamp() {
        return openTimestamp;
    }

    public void setOpenTimestamp(Long openTimestamp) {
        this.openTimestamp = openTimestamp;
    }
}
