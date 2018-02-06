package com.company.jytweb.support.jyt.registerno;

import com.company.jytweb.support.jyt.JytHeaders;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.util.JsonUtil;
import com.github.kevinsawicki.http.HttpRequest;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * 号源API
 *
 * @author wangzhj
 */
public class RegisterNoApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(RegisterNoApi.class);

    private static final String URL = "https://wechat.benmu-health.com/mobile/wx/product/dic/detail";

    /**
     * @param hosCode
     * @param firstDeptCode
     * @param secondDeptCode
     * @param date
     * @param status
     * @param extra
     */
    public static Resp<RegisterNoData> get(String hosCode, String firstDeptCode, String secondDeptCode,
                                           String date, String status, Boolean extra) {
        //
        Map<String, Object> params = Maps.newTreeMap();
        params.put("_", "1517302552681");
        params.put("hosCode", hosCode);
        params.put("firstDeptCode", firstDeptCode);
        params.put("secondDeptCode", secondDeptCode);
        params.put("date", date);
        params.put("status", status);
        params.put("extra", extra);
        params.put("xa7w6pf", "3d28548367c6ea75a974eae28b032184");
        //
//        HttpRequest request = HttpRequest.get("https://wechat.benmu-health.com/mobile/wx/product/dic/detail?_=1517302552681&hosCode=H111511&firstDeptCode=mn_fst_nk_852c7b&secondDeptCode=190&date=2018-01-30&status=SOLD_OUT&extra=true&xa7w6pf=3d28548367c6ea75a974eae28b032184 ", params, true);
        HttpRequest request = HttpRequest.get(URL, params, true);
        JytHeaders.build(request);
        LOGGER.info(request.toString());
        String body = request.body();
        LOGGER.info(body);
        Resp<RegisterNoData> resp = JsonUtil.fromJson(body, Resp.class, RegisterNoData.class);
        return resp;
    }

    public static void main(String[] args) {
        get("H111511", "mn_fst_nk_852c7b", "190", "2018-01-30", "SOLD_OUT", true);
    }
}
