package com.company.jytweb.support.jyt.signin;

import com.company.jytweb.support.JytConstants;
import com.company.jytweb.support.jyt.Resp;
import com.company.jytweb.support.util.JsonUtil;
import com.github.kevinsawicki.http.HttpRequest;
import com.google.common.collect.Maps;
import org.apache.commons.codec.digest.DigestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

/**
 * 登录Api
 *
 * @author wangzhj
 */
public class SignInApi {

    private static final Logger LOGGER = LoggerFactory.getLogger(SignInApi.class);

    private static final String URL = "https://wechat.benmu-health.com/mobile/wx/user/sign/in";

    /**
     * 登录
     *
     * @param phone
     * @param pwd
     * @return Resp<String>
     */
    public static Resp<String> signIn(String phone, String pwd) {
        //参数
        Map<String, Object> params = Maps.newHashMap();
        params.put("phone", phone);
        params.put("password", DigestUtils.md5Hex(pwd));
        //请求
        HttpRequest request = HttpRequest.get(URL, params, false)
                .userAgent(JytConstants.USER_AGENT);
        request.header(JytConstants.HEADER_NAME_COOKIE, "")
                .header(JytConstants.HEADER_NAME_UCP, "lw7OO71jLwQVfTfMD4QoKXImsz1sYudnN-uu--3_t0VVunIxXrjwwB6vF37o_yvZneAlvw..");
        //响应
        String body = request.body();
        LOGGER.info(body);
        Resp<String> resp = JsonUtil.fromJson(body, Resp.class, String.class);
        return resp;
    }

    public static void main(String[] args) {
        signIn("15210207356", "wzj0211432");
    }
}
