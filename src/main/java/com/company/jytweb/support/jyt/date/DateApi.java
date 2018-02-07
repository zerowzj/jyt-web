package com.company.jytweb.support.jyt.date;

import com.company.jytweb.support.jyt.JytHeaders;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.util.JsonUtil;
import com.github.kevinsawicki.http.HttpRequest;
import com.google.common.base.CharMatcher;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * 医保卡Api
 *
 * @author wangzhj
 */
public class DateApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(DateApi.class);

    private static final String URL = "https://wechat.benmu-health.com/mobile/wx/product/list";

    /**
     * 获取医保卡列表
     *
     * @param hosCode
     * @param firstDeptCode
     * @param secondDeptCode
     * @return Resp<CardData>
     */
    public static Resp<DateData> getDateLt(String hosCode, String firstDeptCode, String secondDeptCode) {
        //参数
        Map<String, Object> params = Maps.newHashMap();
        params.put("hosCode", hosCode);
        params.put("firstDeptCode", firstDeptCode);
        params.put("secondDeptCode", secondDeptCode);
        //请求
        HttpRequest request = HttpRequest.get(URL, params, false);
        JytHeaders.build(request);
        //响应
        String body = request.body();
        LOGGER.info(body);
        Resp<DateData> resp = JsonUtil.fromJson(body, Resp.class, DateData.class);
        return resp;
    }

    public static void main(String[] args) {
//        get(null);
        System.out.println(CharMatcher.whitespace());
    }
}
