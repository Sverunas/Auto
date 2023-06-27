package com.auto.servisas.meistras;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/meistrus")
public class MeistrasController {

    private final MeistrasService meistrasService;

    @Autowired
    public MeistrasController(MeistrasService meistrasService) {
        this.meistrasService = meistrasService;
    }

    @GetMapping
    public List<Meistras> getMeistrus() {
        return meistrasService.getMeistrus();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Meistras> getMeistrusById(@PathVariable Long id) {
        Meistras meistras = meistrasService.getMeistrusById(id);
        if (meistras != null) {
            return ResponseEntity.ok().body(meistras);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Meistras> createMeistrus(@Valid @RequestBody Meistras meistras) {
        Meistras createdMeistras = meistrasService.createMeistras(meistras);
        return new ResponseEntity<>(createdMeistras, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Meistras> updateMeistrus(@PathVariable Long id, @RequestBody Meistras updatedMeistras) {
        Meistras existingMeistras = meistrasService.getMeistrusById(id);
        if (existingMeistras != null) {
            Meistras updatedMeistrasData = meistrasService.updateMeistrus(existingMeistras, updatedMeistras);
            return ResponseEntity.ok().body(updatedMeistrasData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMeistrus(@PathVariable Long id) {
        boolean deleteResult = meistrasService.deleteMeistrus(id);
        if (deleteResult) {
            return ResponseEntity.ok("Meistras successfully deleted!");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
