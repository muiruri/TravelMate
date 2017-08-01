package com.github.muiruri.travelmate.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Created by kenny on 01/08/2017.
 */
@RestController
@RequestMapping("/exchange")
public class ExchangeRateController {

    @RequestMapping(value = "/rates/{date}")
    public void loadRate(@PathVariable("date") String date) {

    }
}
