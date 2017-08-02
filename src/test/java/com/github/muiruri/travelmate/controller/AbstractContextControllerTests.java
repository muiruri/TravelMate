package com.github.muiruri.travelmate.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.context.WebApplicationContext;

/**
 * Created by kenny on 01/08/2017.
 */
@WebAppConfiguration
@ContextConfiguration("classpath:mvc-dispatcher-servlet.xml")
public class AbstractContextControllerTests {

    @Autowired
    protected WebApplicationContext wac;

}
