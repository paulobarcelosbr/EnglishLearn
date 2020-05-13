export class Coracao{
    constructor(
       public cheio: boolean,
       public urlCorcaoCheio = '/assets/images/coracao_cheio.png',
       public urlCorcaoVazio = '/assets/images/coracao_vazio.png'
    ){}

    exibeCoracao(): string{
        if (this.cheio){
            return this.urlCorcaoCheio;
        } else{
            return this.urlCorcaoVazio;
        }
    }
}
