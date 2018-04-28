import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class loginService{
    validarUsuario(usuario: String){
        if(usuario.length > 5 && usuario.length < 15){
            return true;
        }else{
            return false;
        }
    }

    /*passwordValido(password: String){ //Contiene mayusculas, minusculas y numeros
        if(){}
    }*/

    confirmarPassword(password:String){ 
    }

    //correo()

    //nomnbre

    //checkbox
}