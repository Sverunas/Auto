package com.auto.servisas.servisai;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.auto.servisas.servisai.*;
import com.auto.servisas.exeption.ResourceAlreadyExistExeption;
import com.auto.servisas.exeption.ResourceNotFoundException;

@Service

public class ServisaiService {
	@Autowired
	private ServisaiRepository servisaiRepository;

	public List<Servisai> getServisus() {

		return servisaiRepository.findAll();
	}

	public Servisai getServisusById(Long id) throws ResourceNotFoundException {

		Servisai servisaiById = servisaiRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id:" + id));

		return servisaiById;
	}

	public Servisai createServisus(Servisai servisai) {

		if (servisaiRepository.findServisaiByNamePvd(servisai.getNamePvd()).isPresent()) {
			throw new ResourceAlreadyExistExeption("Servisas already exist");

		} else {

			return servisaiRepository.save(servisai);
		}
	}

	public ResponseEntity<Servisai> updateServisus(Long id, Servisai servisaiDetails) {

		Servisai servisai = servisaiRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Category does not exist with id: " + id));

		if (servisaiRepository.findServisaiByNamePvd(servisaiDetails.getNamePvd()).isPresent()) {
			throw new ResourceAlreadyExistExeption("Category already exist");

		} else {

			servisai.setNamePvd(servisaiDetails.getNamePvd());

			Servisai updatedServisai = servisaiRepository.save(servisai);

			return ResponseEntity.ok(updatedServisai);
		}
	}

	public void deleteServisus(Long id) {

		servisaiRepository.deleteById(id);

	}

}
