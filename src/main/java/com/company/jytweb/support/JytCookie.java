package com.company.jytweb.support;

import com.google.common.base.Splitter;
import com.google.common.base.Strings;

import java.util.Map;

/**
 * 京医通Cookie
 *
 * @author wangzhj
 */
public class JytCookie {

    private Map<String, String> cookies;

    private static final String KEY_NAME_UCP = "_ucp";

    private static final String KEY_NAME_ATTENTION = "_attention";

    public JytCookie(String cookie) {
        if (Strings.isNullOrEmpty(cookie)) {
            throw new IllegalArgumentException("");
        }
        cookies = Splitter.on(";").trimResults().withKeyValueSeparator("=").split(cookie);
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

}
