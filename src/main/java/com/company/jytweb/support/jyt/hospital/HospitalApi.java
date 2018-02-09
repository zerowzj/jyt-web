package com.company.jytweb.support.jyt.hospital;

import com.company.jytweb.support.jyt.JytHeaders;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.util.JsonUtil;
import com.github.kevinsawicki.http.HttpRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * 医院Api
 *
 * @author wangzhj
 */
public class HospitalApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(HospitalApi.class);

    private static final String URL = "https://wechat.benmu-health.com/mobile/wx/product/hospitals";

    /**
     * 获取医院列表
     *
     * @return Resp<HospitalData>
     */
    public static Resp<HospitalData> getHospitalLt() {
        //请求
        HttpRequest request = HttpRequest.post(URL);
        JytHeaders.build(request);
        //响应
        String body = request.body();
        Resp<HospitalData> resp = JsonUtil.fromJson(body, Resp.class, HospitalData.class);
        LOGGER.info(body);
        return resp;
    }
}
