import { OnInit, OnDestroy, Component } from "@angular/core";
import {Router} from '@angular/router';

@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html', 
    styleUrls: ['./registro.component.css']
})

export class RegistroComponent {

    usuario: string;
    password: string;
    confpass: string;
    correo: string;
    nombre: string;
    
    constructor(private router: Router){}
    ngOnInit(){}
    ngOnDestroy(){}

    registro(usuario: string, password: string, confpass: string, correo: string, nombre: string){
    }
}