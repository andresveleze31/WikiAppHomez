package com.documentacion.apphomez.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grupo15/desarrollo")
public class DesarrolloController {

    @GetMapping("/endpoints")
    public String endpoints(Model model) {
        return "endpoints";
    }

    @GetMapping("/pruebasfront")
    public String front(Model model) {
        return "pruebasfront";
    }

    @GetMapping("/pruebasback")
    public String back(Model model) {
        return "pruebasback";
    }

    @GetMapping("/versiones")
    public String versiones(Model model) {
        return "versiones";
    }

}
