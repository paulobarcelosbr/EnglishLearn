export class Coracao{
    constructor(
       public cheio:boolean,
       public urlCorcaoCheio:string = '/assets/images/coracao_cheio.png',
       public urlCorcaoVazio:string = '/assets/images/coracao_vazio.png'
    ){}

    exibeCoracao():string{
        if(this.cheio){
            return this.urlCorcaoCheio
        } else{
            return this.urlCorcaoVazio
        }
    }
}