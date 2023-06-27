package com.auto.servisas.meistras;

import com.auto.servisas.servisai.Servisai;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "meistrai")
public class Meistras {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private Long id;

    @NotNull(message = "This field is required")
    @Column(name = "vardas")
    private String vardas;

    @NotNull(message = "This field is required")
    @Column(name = "pavarde")
    private String pavarde;

    @NotNull(message = "This field is required")
    @Column(name = "spec")
    private String spec;

    @NotNull(message = "This field is required")
    @Column(name = "miestas")
    private String miestas;

    @ManyToOne
    @JoinColumn(name = "servisai_id", referencedColumnName = "id")
    private Servisai servisai;

    public void assignServisai(Servisai servisai) {
        this.servisai = servisai;
    }
}
