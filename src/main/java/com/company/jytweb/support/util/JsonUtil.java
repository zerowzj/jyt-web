package com.company.jytweb.support.util;

import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JsonUtil {

    /**
     * 对象转Json
     *
     * @param obj
     * @return String
     */
    public static String toJson(Object obj) {
        ObjectMapper mapper = new ObjectMapper();
        String str = null;
        try {
            str = mapper.writeValueAsString(obj);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return str;
    }

    /**
     * Json转对象
     *
     * @param str
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
     * @param str
     * @param clazz
     * @param clazz
     */
    public static <T> T fromJson(String str, Class<T> clazz, Class<?> clazz1) {
        ObjectMapper mapper = new ObjectMapper();
        T t = null;
        try {
            JavaType javaType = mapper.getTypeFactory().constructParametricType(clazz, clazz1);
            t = mapper.readValue(str, javaType);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return t;
    }


}
