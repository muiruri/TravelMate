package com.github.muiruri.travelmate.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.support.DependencyInjectionTestExecutionListener;
import org.springframework.test.context.support.DirtiesContextTestExecutionListener;
import org.springframework.test.context.transaction.TransactionalTestExecutionListener;
import org.springframework.test.context.web.ServletTestExecutionListener;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * Created by kenny on 01/08/2017.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@TestExecutionListeners(listeners={ServletTestExecutionListener.class,
        DependencyInjectionTestExecutionListener.class,
        DirtiesContextTestExecutionListener.class,
        TransactionalTestExecutionListener.class,
        })
public class PageControllerTests extends AbstractContextControllerTests {

    private MockMvc mockMvc;

    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    }

    /**
     *  Tests loading of index page
     * @throws Exception
     */
    @Test
    public void getHome() throws Exception {
        this.mockMvc.perform(get("/index")).andExpect(status().isOk());
    }

    /**
     *  Tests loading of directions page
     * @throws Exception
     */
    @Test
    public void getDirections() throws Exception {
        this.mockMvc.perform(get("/directions")).andExpect(status().isOk());
    }

    /**
     *  Tests loading of news page
     * @throws Exception
     */
    @Test
    public void getNews() throws Exception {
        this.mockMvc.perform(get("/news")).andExpect(status().isOk());
    }

}
