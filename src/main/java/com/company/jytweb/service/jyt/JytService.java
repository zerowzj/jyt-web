package com.company.jytweb.service.jyt;

import com.company.jytweb.support.jyt.card.Card;
import com.company.jytweb.support.jyt.hospital.Hospital;

import java.util.List;
import java.util.Map;

/**
 * JYT服务
 *
 * @author wangzhj
 */
public interface JytService {

    /**
     * 获取医保卡列表
     *
     * @return List
     */
    List<Card> getCardLt();

    /**
     * 获取医院列表
     *
     * @return List
     */
    List<Hospital> getHosLt();
}
