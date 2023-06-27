package com.auto.servisas.meistras;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.auto.servisas.servisai.*;
import com.auto.servisas.servisai.*;
import com.auto.servisas.exeption.*;

@Service
public class MeistrasService {

	@Autowired
	private MeistrasRepository meistrasRepository;


	
	@Autowired
	private ServisaiRepository servisaiRepository;

	public List<Meistras> getMeistrus() {
		return meistrasRepository.findAll();
	}

	public Meistras getMeistrusById(Long id) throws ResourceNotFoundException {
		return meistrasRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Expense does not exist with id: " + id));
	}

	public Meistras createMeistras(Meistras meistras) throws ResourceNotFoundException {
		String servisaiName = meistras.getServisai();
		Servisai servisai = servisaiRepository.findServisaiByNamePvd(servisaiName)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with name: " + servisaiName));
		meistras.setServisai(servisai);
		return meistrasRepository.save(meistras);
	}

	public ResponseEntity<Meistras> updateMeistras(Long id, Meistras updatedMeistras) throws ResourceNotFoundException {
		Meistras meistras = meistrasRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Expense does not exist with id: " + id));
		meistras.setVardas(updatedMeistras.getVardas());
		meistras.setPavarde(updatedMeistras.getPavarde());
		meistras.setSpec(updatedMeistras.getSpec());
		String servisaiName = updatedMeistras.getServisaiName();
		Servisai serviai = servisaiRepository.findServisaiByNamePvd(servisaiName)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with name: " + servisaiName));
		meistras.setServisai(servisai);
		Meistras savedMeistras = meistrasRepository.save(meistras);
		return ResponseEntity.ok(savedMeistras);
	}

	public void deleteMeistras(Long id) throws ResourceNotFoundException {
		Meistras meistras = meistrasRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Expense does not exist with id: " + id));
		meistrasRepository.delete(meistras);
	}
}
