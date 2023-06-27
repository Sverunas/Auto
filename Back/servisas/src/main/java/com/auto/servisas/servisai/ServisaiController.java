package com.auto.servisas.servisai;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/servisai")
public class ServisaiController {
	
	@Autowired
private final ServisaiService servisaiService;
    
	@Autowired
    public ModelMapper modelMapper;

    public ServisaiController(ServisaiService servisaiService) {
        this.servisaiService = servisaiService;

    }

    @GetMapping
    public ResponseEntity<List<Servisai>> getServisus() {
        List<Servisai> servisaiList = servisaiService.getServisus();
        return ResponseEntity.ok(servisaiList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Servisai> getServisusById(@PathVariable Long id) {
        Servisai servisai = servisaiService.getServisusById(id);
        return ResponseEntity.ok(servisai);
    }

    @PostMapping
    public ResponseEntity<Servisai> createServisus(@RequestBody Servisai servisai) {
        Servisai createdServisai = servisaiService.createServisus(servisai);
        return new ResponseEntity<>(createdServisai, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Servisai> updateServisus(@PathVariable Long id, @RequestBody Servisai updatedServisai) {
        ResponseEntity<Servisai> updatedServisaiResponse = servisaiService.updateServisus(id, updatedServisai);
        return ResponseEntity.ok(updatedServisaiResponse.getBody());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteServisus(@PathVariable Long id) {
        servisaiService.deleteServisus(id);
        return ResponseEntity.ok("Expense servisai successfully deleted!");
    }
}
