package com.company.jytweb.service.jyt;

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
    List<Map<String, Object>> getCardLt();

    /**
     * 获取医院列表
     *
     * @return List
     */
    List<Map<String, Object>> getHosLt();
}
