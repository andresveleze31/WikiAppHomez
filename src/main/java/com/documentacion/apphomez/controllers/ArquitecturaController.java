package com.documentacion.apphomez.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/grupo15/arquitectura")
public class ArquitecturaController {

    @GetMapping("/diagramac4")
    public String diagramac4(Model model) {
        return "diagramac4";
    }

    @GetMapping("/modelos")
    public String modelos(Model model) {
        return "modelos";
    }

    @GetMapping("/despliegue")
    public String despliegue(Model model) {
        return "despliegue";
    }
}
