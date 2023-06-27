package com.auto.servisas.servisai;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "servisai")
public class Servisai {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @Column(name = "servisoPvd")
    private String namePvd;

    @Column(name = "servisoAdr")
    private String nameAdr;

    @Column(name = "servisoDir")
    private String nameDir;
}
