import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

import { ContatoService } from './contato.service';
import { Contato } from './interfaces';
import { MensagemService } from './shared/mensagem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'contato';
  public formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatoService: ContatoService,
    private service: MensagemService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]],
    });
  }

  /**
   * Cadastra um novo contato
   */
  public cadastrar(directive: FormGroupDirective): void {
    if (this.formulario.valid) {
      const contato = this.formulario.getRawValue() as Contato;

      this.contatoService.cadastra(contato).subscribe(
        () => {
          this.service.exibirMensagem('O novo contato foi salvo com sucesso!');
          this.limpar(directive);
        },
        (erro) => {
          console.log(erro);
        }
      );
    }
  }

  /**
   * Reseta o formulário
   */
  private limpar(directive: FormGroupDirective): void {
    this.formulario.reset();
    directive.resetForm();
  }
}
