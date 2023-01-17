import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServiceType } from '../models/ServiceTypes';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  private readonly endpoint = 'servicetype';
  constructor(private http: HttpClient) { }

  getAllServiceTypes() {
    return this.http.get<ServiceType[]>(`${environment.apiUrl}/${this.endpoint}/getall`);

  }
  getServiceTypeByName(selectedType: string){
    return this.http.get<ServiceType[]>(`${environment.apiUrl}/${this.endpoint}/getbyname/${selectedType}`);
  }


}
