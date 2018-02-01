package com.company.jytweb.support.jyt;

import java.io.Serializable;

/**
 * 响应
 *
 * @author wangzhj
 */
public class Resp<T> implements Serializable {

    /* 结果码 */
    private int resCode;
    /* 信息 */
    private String msg;
    /* 数据 */
    private T data;

    public int getResCode() {
        return resCode;
    }

    public void setResCode(int resCode) {
        this.resCode = resCode;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
