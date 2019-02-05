import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DatosService {

  constructor(private Http: HttpClient) { }
}
