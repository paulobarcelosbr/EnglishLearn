import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'codeUdemy';
  jogoEmAndamento = true;
  resultado: string;

  encerrarJogo(resultado: string): void{
    this.jogoEmAndamento = false;
    this.resultado = resultado;
  }
  public reiniciarJogo(): void{
    this.jogoEmAndamento = true;
    this.resultado = undefined;
  }
}
