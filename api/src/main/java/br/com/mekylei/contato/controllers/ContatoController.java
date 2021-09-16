package br.com.mekylei.contato.controllers;

import br.com.mekylei.contato.dtos.ContatoDto;
import br.com.mekylei.contato.models.Contato;
import br.com.mekylei.contato.repository.ContatoRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("/contatos")
public class ContatoController {

    @Autowired
    private ContatoRepository contatoRepository;

    /**
     * Cria um novo contato
     * @param contatoDto Informações do contato
     * @return Os dados do contato criado e o status 201
     */
    @PostMapping
    @Transactional
    public ResponseEntity<Contato> cria(@RequestBody @Valid ContatoDto contatoDto) {
        Contato contato = new Contato();
        BeanUtils.copyProperties(contatoDto, contato);
        this.contatoRepository.save(contato);

        return new ResponseEntity<>(contato, HttpStatus.CREATED);
    }
}
