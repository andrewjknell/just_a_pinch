import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    getRecipes(istr,qstr) {
        console.log(istr);
        return this._http.get(`/api/${istr}/${qstr}`)
        
    }
}
