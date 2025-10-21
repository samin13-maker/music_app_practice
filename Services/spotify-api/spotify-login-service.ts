import 
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SpotifyLoginService{
    private token: string | undefined

    constructor(
        private _http:HttpClient
    ){ }

    getToken(): string {
        const body = new HttpParams()
            .set("grant_type", "client_credentials")
            .set("client_id", "92687d4c29d24745abfd9ecb361ea67b")
            .set("cliente_secret", "74313af9193f4386815ae393d0563b8a")
        this._http.post<any>(
            "https://accounts.spotify.com/api/token",
            body.toString(),
            {
                headers: {'Content-Type': "application/x-www-form-urlencoded"}
            }
        ).subscribe((data)=>{
            this.token =data.access_token
            console.log(this.token)
        });

        return this.token;
    }

}