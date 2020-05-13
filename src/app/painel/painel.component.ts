import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Frase } from '../shared/fase.model';
import { FRASES } from './frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

   frases: Frase[] = FRASES;
   instrucao: string = 'Traduza a frase'
   resposta: string = '';

   rodada:number = 0
   rodadaFrase: Frase;
   progresso:number = 0;

   tentativas:number = 3;
   
   @Output() encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
    this.atualizaRodada()
  }
  atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }
  verificarReposta():void{
      //Realiza o teste de tradução.
    if(this.rodadaFrase.frasePtbr == this.resposta){
      alert(' A tradução está correta!!')

      //troca pergunda da rodada
      this.rodada++
      
      //incrementa barra de progresso
      this.progresso = this.progresso + (100 / this.frases.length);      

      if(this.rodada == 4){
        this.encerrarJogo.emit('vitoria')
      }

      this.atualizaRodada()
    }else{
      alert('A tradução está errada!!');

      //diminuir a variavel tentativas 
      this.tentativas--;
      
      //verificação se o usuario possui vidas.
      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }

      //limpar a resposta
      this.atualizaRodada()
    }  
  }
  atualizaRodada():void{
    //define a frase da rodada
    this.rodadaFrase = this.frases[this.rodada];
    
    //limpar a resposta
    this.resposta = '';
  }
}
