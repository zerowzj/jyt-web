package com.company.jytweb.web.support;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 异常解析器
 *
 * @author wangzhj
 */
@ControllerAdvice
public class ExceptionResolver {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionResolver.class);

    @ExceptionHandler(Throwable.class)
    public Object resolveException(HttpServletRequest request, HttpServletResponse response,
                                   Exception ex) {
        ex.printStackTrace();
        LOGGER.info("发生异常", ex);
        return null;
    }
}
