package com.documentacion.apphomez.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/proyecto")
public class ProyectoController {

    @GetMapping("/descripcion")
    public String home(Model model) {
        return "descripcion";
    }

    @GetMapping("/equipo")
    public String equipo(Model model) {
        return "equipo";
    }
}
