package com.company.jytweb.support.jyt.register;

import com.company.jytweb.support.jyt.JytHeaders;
import com.company.jytweb.support.util.JsonUtil;
import com.github.kevinsawicki.http.HttpRequest;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * 挂号Api
 *
 * @author wangzhj
 */
public class RegisterApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(RegisterApi.class);

    private static final String URL = "https://wechat.benmu-health.com/mobile/wx/order/save";

    /**
     * 挂号
     *
     * @param param
     */
    public static void register(RegisterParam param) {
        Map<String, Object> params = Maps.newHashMap();
        params.put("productId", "MD5_b231a85bd655eb244b46aaf4f704bda8");
        params.put("doctorId", "916443");
        params.put("hosCode", "H111511");
        params.put("firstDeptCode", "mn_fst_nk_852c7b");
        params.put("secondDeptCode", "181");
        params.put("firstDeptId", "743693");
        params.put("secondDeptId", "5414");
        params.put("productType", "VICE");
        params.put("price", "0");
        params.put("treatmentDay", "2018-01-30");
        params.put("regHour", "");
        params.put("productTimeType", "PM");
        params.put("orderProductType", "0");
        params.put("orderFrom", "REGISTER");
        params.put("cardNo", "11046100300X");

        HttpRequest request = HttpRequest.post(URL);
        JytHeaders.build(request)
                .send(JsonUtil.toJson(params));
        LOGGER.info(request.body());
    }

    public static void main(String[] args) {
        register(null);
    }
}
