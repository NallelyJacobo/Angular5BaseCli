import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

const _getUsersUrl = 'http://10.11.1.100:8080/users';
//const _getUsersUrl = 'https://api.github.com/users';

@Injectable()
export class GitHubService{

    constructor(private _httpClient: HttpClient){}
    getUserInfo(userName: string){
        return this._httpClient
        .get(`${_getUsersUrl}/${userName}`,{responseType: 'json'})
        .map((x: any) => {
            let githubObj = new GitHubModel();
            githubObj.avatar_url = x.avatar_url;
            githubObj.login = x.login;
            githubObj.name = x.name;
            githubObj.followers = x.followers;
            githubObj.following = x.following;
            return githubObj;
        })
        .catch(this.handleError)
    }
    handleError(error:any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() || 'Server error');
    }
}