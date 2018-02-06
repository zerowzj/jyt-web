package com.company.jytweb.auth;

import java.util.Map;

public class UserInfos {

    private static ThreadLocal<Map<String, Object>> THREAD_LOCAL = new ThreadLocal();

    private static final String KEY_UB_ID = "UB_ID";

    /**
     * 获取UB ID
     */
    public static void setUbId(Long ubId) {
        THREAD_LOCAL.get().put(KEY_UB_ID, ubId);
    }

    /**
     * 获取UB ID
     */
    public static Long getUbId() {
        Long ubId = (Long) THREAD_LOCAL.get().get(KEY_UB_ID);
        return ubId;
    }

    public static void clear() {
        THREAD_LOCAL.remove();
    }
}
