import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { App } from '../models/app.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(private Http: HttpClient){

    }

    getApps(): Observable<Array<App>> {
        return this.Http.post<any>(environment.api, environment.query).pipe(
            map(data => data.data.GetApps as Array<App>)
        );
    }

}