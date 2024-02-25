package com.documentacion.apphomez.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/requerimientos")
public class RequerimientosController {

    @GetMapping("/funcionales")
    public String funcionales(Model model) {
        return "funcionales";
    }

    @GetMapping("/nofuncionales")
    public String nofuncionales(Model model) {
        return "nofuncionales";
    }

}
