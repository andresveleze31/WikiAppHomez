package com.documentacion.apphomez.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/componente")
public class ComponenteController {

    @GetMapping("/proyecto")
    public String proyecto(Model model) {
        return "componenteproyecto";
    }

    @GetMapping("/arquitectura")
    public String arquitectura(Model model) {
        return "componentearquitectura";
    }

    @GetMapping("/desarrollo")
    public String desarrollo(Model model) {
        return "componentedesarrollo";
    }

    @GetMapping("/requerimientos")
    public String requerimientos(Model model) {
        return "componenterequerimientos";
    }

    @GetMapping("/contacto")
    public String contacto(Model model) {
        return "componentecontacto";
    }
}
