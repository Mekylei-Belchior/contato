package br.com.mekylei.contato.dtos;

import javax.validation.constraints.NotBlank;

public class ContatoDto {
    @NotBlank
    private String nome;
    @NotBlank
    private String email;
    @NotBlank
    private String telefone;

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getTelefone() {
        return telefone;
    }
}
