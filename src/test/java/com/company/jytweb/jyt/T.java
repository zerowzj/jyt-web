package com.company.jytweb.jyt;

import java.util.concurrent.Executor;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class T {

    static Executor EXEC = Executors.newFixedThreadPool(4);

    public static void main(String[] args) throws Exception {
        for (; ; ) {
            EXEC.execute(() -> {
                System.out.println(Thread.currentThread().getName() + "==");
            });
            TimeUnit.MILLISECONDS.sleep(100);
        }
    }
}
