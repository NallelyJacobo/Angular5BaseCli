import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hub.service';
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  gitHubDataList: Array<GitHubModel>;
  constructor(private _gitHubService: GitHubService) {
    this.gitHubDataList = new Array<GitHubModel>();
  }

  ngOnInit() {
  }

  onSearchUser(userName: string){
    this._gitHubService
    .getUserInfo(userName)
    .subscribe( x => {
      this.gitHubDataList.push(x);
    });
  }

  //evento borrar elemento por click
  deleteClick(evento: GitHubModel){
    this.gitHubDataList = this.gitHubDataList.filter(x => x != evento);
  }
}

/*nombreFuncion(variable: tipoDato){
  acciones
}*/

export class SelectOverviewExample {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}