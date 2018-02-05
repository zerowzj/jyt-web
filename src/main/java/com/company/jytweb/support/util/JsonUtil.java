package com.company.jytweb.support.util;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Json Util
 *
 * @author wangzhj
 */
public abstract class JsonUtil {

    /**
     * 对象转Json
     *
     * @param t
     * @return String
     */
    public static <T> String toJson(T t) {
        ObjectMapper mapper = new ObjectMapper();
        String str = null;
        try {
            str = mapper.writeValueAsString(t);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return str;
    }

    /**
     * Json转对象
     *
     * @param str
     * @param clazz
     * @return T
     */
    public static <T> T fromJson(String str, Class<T> clazz) {
        ObjectMapper mapper = new ObjectMapper();
        T t = null;
        try {
            t = mapper.readValue(str, clazz);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return t;
    }

    /**
     * Json转对象
     *
     * @param str
     * @param parametrized
     * @param parameterClazz
     * @return T
     */
    public static <T> T fromJson(String str, Class<T> parametrized, Class<?> parameterClazz) {
        ObjectMapper mapper = new ObjectMapper();
        T t = null;
        try {
            JavaType javaType = mapper.getTypeFactory()
                    .constructParametricType(parametrized, parameterClazz);
            t = mapper.readValue(str, javaType);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return t;
    }
}
