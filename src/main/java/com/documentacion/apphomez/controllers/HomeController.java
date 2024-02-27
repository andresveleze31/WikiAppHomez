package com.documentacion.apphomez.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/grupo15")
    public String index(Model model) {
        return "index";
    }

    @GetMapping("/grupo15/home")
    public String home(Model model) {
        return "index";
    }
}
