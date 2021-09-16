package br.com.mekylei.contato.repository;

import br.com.mekylei.contato.models.Contato;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContatoRepository extends MongoRepository<Contato, String> {

}
