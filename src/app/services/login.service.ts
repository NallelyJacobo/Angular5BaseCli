import {Injectable} from '@angular/core';

@Injectable()
export class loginService{
    
    private usuario: string='NallelyJacobo';
    private password: string='nallely';
    constructor(){}

    validarUsuario(usuario: string, password: string){
        if(this.usuario==usuario && this.password==password){
            return true;
        }else{
            return false;
        }
    }
}