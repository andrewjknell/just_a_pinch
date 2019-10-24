import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) { }

    getRecipes(istr,qstr) {
        return this._http.get(`/api/${istr}/${qstr}`)
        
    }
}
