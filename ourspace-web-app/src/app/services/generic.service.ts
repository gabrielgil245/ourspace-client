import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  _localClientDomain: string = 'http://localhost:4200';
  _localServerDomain: string = 'http://localhost:9000';

  constructor() { }
}
