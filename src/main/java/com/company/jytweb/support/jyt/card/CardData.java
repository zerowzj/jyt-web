package com.company.jytweb.support.jyt.card;

import java.io.Serializable;
import java.util.List;

/**
 *
 *
 * @author wangzhj
 */
public class CardData implements Serializable {

    /* 医保卡列表 */
    private List<Card> cardDetailList;
    /*  */
    private Boolean scSwitch;

    public List<Card> getCardDetailList() {
        return cardDetailList;
    }

    public void setCardDetailList(List<Card> cardDetailList) {
        this.cardDetailList = cardDetailList;
    }

    public Boolean getScSwitch() {
        return scSwitch;
    }

    public void setScSwitch(Boolean scSwitch) {
        this.scSwitch = scSwitch;
    }
}
