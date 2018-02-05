package com.company.jytweb.support.jyt.card;

import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.util.JsonUtil;
import com.company.jytweb.support.jyt.JytConstants;
import com.github.kevinsawicki.http.HttpRequest;
import com.google.common.base.CharMatcher;
import com.google.common.base.Strings;
import com.google.common.collect.Maps;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * 医保卡Api
 *
 * @author wangzhj
 */
public class CardApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(CardApi.class);

    private static final String URL = "https://wechat.benmu-health.com/mobile/wx/card/select";

    /**
     * 获取医保卡列表
     *
     * @param cardNo
     * @return Resp<CardData>
     */
    public static Resp<CardData> getCardLt(String cardNo) {
        //参数
        Map<String, Object> params = Maps.newHashMap();
        if (Strings.isNullOrEmpty(cardNo)) {
            params.put("queryAll", true);
            params.put("cardNo", CharMatcher.whitespace());
        } else {
            params.put("queryAll", false);
            params.put("cardNo", cardNo);
        }
        //请求
        HttpRequest request = HttpRequest.get(URL, params, false)
                .userAgent(JytConstants.USER_AGENT_VALUE);
        request.header(JytConstants.HEADER_NAME_COOKIE, "")
                .header(JytConstants.HEADER_NAME_UCP, "Jq24qwPy5-crmvSyCtKZ3dWKbDdswHeWMX7VGVDpmKvUK4BpPg05VEsdMxXD-0lV0GNNNA..");
        //响应
        String body = request.body();
        LOGGER.info(body);
        Resp<CardData> resp = JsonUtil.fromJson(body, Resp.class, CardData.class);
        return resp;
    }

    public static void main(String[] args) {
//        get(null);
        System.out.println(CharMatcher.whitespace());
    }
}
