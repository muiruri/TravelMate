package com.github.muiruri.travelmate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by kenny on 01/08/2017.
 */
@Controller
@RequestMapping("/")
public class PageController {

    @RequestMapping("/")
    public String index() {
        return "index";
    }

    @RequestMapping("index")
    public String indexPage() {
        return "index";
    }

    @RequestMapping("directions")
    public String directions() {
        return "directions";
    }
}
