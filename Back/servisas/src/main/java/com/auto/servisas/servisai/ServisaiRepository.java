package com.auto.servisas.servisai;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface ServisaiRepository extends JpaRepository<Servisai, Long>{

	Optional<Servisai> findServisaiByNamePvd(String namePvd);

	
	
}
