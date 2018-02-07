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

    /* Cookie */
    private String cookie;
    /* Cookie Map */
    private Map<String, String> cookies;

    public JytCookie(String cookie) {
        if (Strings.isNullOrEmpty(cookie)) {
            throw new IllegalArgumentException("cookie is null or empty");
        }
        cookies = Splitter.on(";")
                .trimResults()
                .withKeyValueSeparator("=")
                .split(cookie);
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
}
