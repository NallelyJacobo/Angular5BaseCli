import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class loginService{
    
    private usuario: string='NallelyJacobo';
    private password: string='nallely';
    constructor(private router: Router){}

    validarUsuario(usuario: string, password: string){
        if(this.usuario==usuario && this.password==password){
            return true;
        }else{
            return false;
        }
    }
}