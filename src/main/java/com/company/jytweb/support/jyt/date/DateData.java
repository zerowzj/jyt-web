package com.company.jytweb.support.jyt.date;

import java.io.Serializable;
import java.util.List;

public class DateData implements Serializable {

    /* */
    private List<Date> dateList;
    /* */
    private String today;

    public List<Date> getDateList() {
        return dateList;
    }

    public void setDateList(List<Date> dateList) {
        this.dateList = dateList;
    }

    public String getToday() {
        return today;
    }

    public void setToday(String today) {
        this.today = today;
    }
}
