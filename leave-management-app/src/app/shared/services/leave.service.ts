import { Injectable } from '@angular/core';
import { LeaveDTO } from '../types/custom-types';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  public leaveApplicant: LeaveDTO;
  url = environment.apiUrl;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = ({ headers: this.headers });

  constructor(private httpClient: HttpClient) { }

  applyLeave(leaveDTO: LeaveDTO): Observable<any> {
    return this.httpClient.post(this.url + 'leave/applyLeave', leaveDTO, this.options);
  }
}
