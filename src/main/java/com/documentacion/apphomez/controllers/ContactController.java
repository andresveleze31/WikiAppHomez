package com.documentacion.apphomez.controllers;

import com.documentacion.apphomez.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/grupo15")

public class ContactController {

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/contacto")
    public String home(Model model) {
        return "contacto";
    }

    @PostMapping("/registro")
    public String procesarFormulario(@RequestParam String nombres, @RequestParam String apellidos, @RequestParam String correo, @RequestParam int semestre, @RequestParam String mensaje ){
        contactRepository.guardarIntereasado(nombres,apellidos,correo,semestre,mensaje);
        return "redirect:/home";
    }

}
