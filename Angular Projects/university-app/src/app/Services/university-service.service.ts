import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { College, RequestUniversity, University } from '../Entities/Entities';

@Injectable({
  providedIn: 'root'
})
export class UniversityServiceService {

  constructor(
    private http:HttpClient
  ) { }

  public getAllUniversities(){
    return this.http.get<University[]>(`http://localhost:8080/getAllUniversities`)
  }
  public getAllUniversityAdresses(){
    return this.http.get<String[]>(`http://localhost:8080/getAllUniversitiesAdresses`)
  }
  public getAllUniversitiesByCriteria(req:RequestUniversity)
  {
    return this.http.post<University[]>(`http://localhost:8080/getAllUniversitiesByCriteria`,req)

  }

  public CreateAndUpdateUniversity(university:University)
  {
    return this.http.post<University>(`http://localhost:8080/createAndUpdateUniversity`,university)
  }
  
  public deleteUniversity(uid:number)
  {
    return this.http.delete<void>(`http://localhost:8080/deleteUniversity/${uid}`)
  }
 
}
