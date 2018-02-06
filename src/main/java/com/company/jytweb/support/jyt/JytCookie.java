package com.company.jytweb.support.jyt;

import com.google.common.base.Splitter;
import com.google.common.base.Strings;

import java.util.Map;

/**
 * JYT Cookie
 *
 * @author wangzhj
 */
public class JytCookie {

    /* Key Name Ucp */
    private static final String KEY_NAME_UCP = "_ucp";
    /* Key Name Attention */
    private static final String KEY_NAME_ATTENTION = "_attention";
    /* Key Name Lgd */
    private static final String KEY_NAME_LGD = "_lgd";

    private String cookie;

    private Map<String, String> cookies;

    public JytCookie(String cookie) {
        if (Strings.isNullOrEmpty(cookie)) {
            throw new IllegalArgumentException("cookie is null or empty");
        }
        cookies = Splitter.on(";").trimResults().withKeyValueSeparator("=").split(cookie);
        this.cookie = cookie;
    }

    /**
     * 获取Cookie
     *
     * @return String
     */
    public String getCookie() {
        return this.cookie;
    }

    /**
     * 获取Ucp
     *
     * @return String
     */
    public String getUcp() {
        return cookies.get(KEY_NAME_UCP);
    }

    /**
     * 获取Attention
     *
     * @return String
     */
    public String getAttention() {
        return cookies.get(KEY_NAME_ATTENTION);
    }

    /**
     * 获取Lgd
     *
     * @return String
     */
    public String getLgd() {
        return cookies.get(KEY_NAME_LGD);
    }

    public static void main(String[] args) {
        String str = "__jsluid=273f0a1e12bf37723cc806c612d54a4b; gr_user_id=91cab4c5-d7ce-442e-a876-0da46dea73c1; _ucp=lw7OO71jLwQVfTfMD4QoKXImsz1sYudnN-uu--3_t0VVunIxXrjwwB6vF37o_yvZneAlvw..; _attention=1; _lgd=1; m-uni-ticket=k5tM6QDIQ7BBD84TJAG5Qfvq_RpcN0K9qp1h9qffuQyZhBOPIvU_70bLd3hLMXtwMA1J3g..; gr_session_id_baad359c5e3b60a1=51002463-7486-4d1f-bd4b-f7b1d8435cad";
        JytCookie cookie = new JytCookie(str);
        System.out.println(cookie.getUcp());
        System.out.println(cookie.getAttention());
        System.out.println(cookie.getLgd());
    }
}
