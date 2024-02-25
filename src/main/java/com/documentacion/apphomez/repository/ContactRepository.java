package com.documentacion.apphomez.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ContactRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public void guardarIntereasado(String nombre, String apellidos, String correo, int semestres, String mensaje) {
        String sql = "INSERT INTO interesado (nombre, apellido, email, semestre, mensaje ) VALUES (?, ?, ?, ?, ?)";
        jdbcTemplate.update(sql, nombre, apellidos, correo, semestres, mensaje);
    }
}
