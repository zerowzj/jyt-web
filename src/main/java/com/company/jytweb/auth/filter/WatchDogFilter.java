package com.company.jytweb.auth.filter;

import com.company.jytweb.auth.Uris;
import com.google.common.base.Stopwatch;
import com.google.common.base.Strings;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

/**
 * 看门狗
 *
 * @author wangzhj
 */
public class WatchDogFilter extends OncePerRequestFilter {

    private static final Logger LOGGER = LoggerFactory.getLogger(WatchDogFilter.class);

    private static final String HEADER_NAME_REQUEST_ID = "Request-Id";

    private static final String REQUEST_ID = "request_id";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String uri = request.getRequestURI();
        //==> Uri
        if (Uris.isLegal(uri)) {
            //
            Stopwatch stopwatch = Stopwatch.createStarted();
            try {
                String requestId = request.getHeader(HEADER_NAME_REQUEST_ID);
                if (Strings.isNullOrEmpty(requestId)) {
                    requestId = String.valueOf(UUID.randomUUID().hashCode() & 0x7fffffff);
                }
                MDC.put(REQUEST_ID, requestId);

                filterChain.doFilter(request, response);
            } finally {
                LOGGER.info("uri[{}] cost [{} ms]", uri, stopwatch.elapsed(TimeUnit.MILLISECONDS));
                MDC.clear();
            }
        } else {
            filterChain.doFilter(request, response);
        }
    }
}
