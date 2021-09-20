import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericService } from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class GetAllLikesByUserService {

  constructor(private httpCli: HttpClient, private genericService: GenericService) { }

  getAllLikesByUserId(userId:number){
    return this.httpCli.get<any>(`${this.genericService.getLocalServerDomain()}/ourspaceserver/api/like/${userId}`, {withCredentials: true});
  }
}
