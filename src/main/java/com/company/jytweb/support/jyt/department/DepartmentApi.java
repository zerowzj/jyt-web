package com.company.jytweb.support.jyt.department;

import com.company.jytweb.support.jyt.Constants;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.util.JsonUtil;
import com.github.kevinsawicki.http.HttpRequest;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * 科室Api
 *
 * @author wangzhj
 */
public class DepartmentApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(DepartmentApi.class);

    private static final String URL = "https://wechat.benmu-health.com/mobile/wx/product/departments";

    /**
     * 获取科室列表
     *
     * @param hosCode 医院编码
     * @return
     */
    public static Resp<DepartmentData> getDeptLt(String hosCode) {
        //参数
        Map<String, String> params = Maps.newHashMap();
        params.put("hosCode", hosCode);
        //请求
        HttpRequest request = HttpRequest.get(URL, params, false)
                .userAgent(Constants.USER_AGENT);
        request.header(Constants.HEADER_UCP, "Jq24qwPy5-crmvSyCtKZ3dWKbDdswHeWMX7VGVDpmKvUK4BpPg05VEsdMxXD-0lV0GNNNA..");
        //响应
        String body = request.body();
        LOGGER.info(body);
        Resp<DepartmentData> resp = JsonUtil.fromJson(body, Resp.class, DepartmentData.class);
        return resp;
    }

    public static void main(String[] args) {
        getDeptLt("H111511");
    }
}
