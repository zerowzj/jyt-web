package com.company.jytweb.auth;

import com.google.common.collect.Maps;

import java.util.Map;

/**
 * 用户信息上下文
 *
 * @author wangzhj
 */
public class UserInfoCxt {

    private static ThreadLocal<Map<String, Object>> THREAD_LOCAL = new ThreadLocal() {
        @Override
        protected Map<String, Object> initialValue() {
            return Maps.newHashMap();
        }
    };

    private static final String KEY_UB_ID = "UB_ID";

    /**
     * 设置UB ID
     *
     * @param ubId
     */
    public static void setUbId(Long ubId) {
        THREAD_LOCAL.get().put(KEY_UB_ID, ubId);
    }

    /**
     * 获取UB ID
     *
     * @return Long
     */
    public static Long getUbId() {
        Long ubId = (Long) THREAD_LOCAL.get().get(KEY_UB_ID);
        return ubId;
    }

    /**
     * 清除
     */
    public static void clear() {
        THREAD_LOCAL.remove();
    }
}
