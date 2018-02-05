package com.company.jytweb.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

/**
 * 异常解析器
 *
 * @author wangzhj
 */
@ControllerAdvice
public class ExceptionResolver {

    private static final Logger LOGGER = LoggerFactory.getLogger(ExceptionResolver.class);

    @ExceptionHandler(Throwable.class)
    public Object resolveException(Exception ex) {
        LOGGER.error("发生异常", ex);

        return null;
    }
}
