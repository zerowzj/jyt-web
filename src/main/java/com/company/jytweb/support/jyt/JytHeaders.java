package com.company.jytweb.support.jyt;

import com.company.jytweb.auth.UserInfoCxt;
import com.company.jytweb.support.JytCookieCache;
import com.github.kevinsawicki.http.HttpRequest;

/**
 * JYT Header
 *
 * @author wangzhj
 */
public class JytHeaders {

    /* User Agent Value */
    private static String USER_AGENT_VALUE = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36 MicroMessenger/6.5.2.501 NetType/WIFI WindowsWechat QBCore/3.43.691.400 QQBrowser/9.0.2524.400";

    /* Cookie Header Name*/
    private static String HEADER_NAME_COOKIE = "Cookie";
    /* Ucp Header Name*/
    private static String HEADER_NAME_UCP = "ucp";
    /* Attention Header Name*/
    private static String HEADER_NAME_ATTENTION = "attention";
    /* Lgd Header Name*/
    private static String HEADER_NAME_LGD = "lgd";

    /**
     * 构造
     *
     * @param request
     * @return HttpRequest
     */
    public static HttpRequest build(HttpRequest request) {
        Long ubId = UserInfoCxt.getUbId();
        JytCookie cookie = JytCookieCache.get(ubId);
        request.userAgent(USER_AGENT_VALUE)
                .header(HEADER_NAME_COOKIE, cookie.getCookie())
                .header(HEADER_NAME_UCP, cookie.getUcp())
                .header(HEADER_NAME_ATTENTION, cookie.getAttention())
                .header(HEADER_NAME_LGD, cookie.getLgd());
        return request;
    }
}
