import {Component, OnInit, OnDestroy} from '@angular/core';
import { GitHubModel } from '../model/git-hub-model';

@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-card.component.html',
    styleUrls: ['./git-hub-card.component.css']
})
export class GitHubCardComponent implements OnInit, OnDestroy {

    gitHubData: GitHubModel; //Importar la clase de Github
    constructor(){
        this.gitHubData = new GitHubModel();
        this.gitHubData.avatar_url = 'data:image/png;base64,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';
        this.gitHubData.followers = 1;
        this.gitHubData.following = 1;
        this.gitHubData.login = 'NallelyJacobo';
        this.gitHubData.name = 'Nallely Jacobo';
    }
    ngOnInit(){
    }
    ngOnDestroy(){
    }
}