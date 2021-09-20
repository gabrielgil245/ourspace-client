import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private _localServerDomain: string = 'http://localhost:9000';

  constructor() { }

  getLocalServerDomain() {
    return this._localServerDomain;
  }
}
