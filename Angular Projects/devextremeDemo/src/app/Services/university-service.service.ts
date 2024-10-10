import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { College, Page, RequestNewUniversity, RequestUniversity, University } from '../Entities/Entities';

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
    return this.http.get<string[]>(`http://localhost:8080/getAllUniversitiesAdresses`)
  }
  public getAllUniversitiesByCriteria(req:RequestUniversity)
  {
    return this.http.post<University[]>(`http://localhost:8080/getAllUniversitiesByCriteria`,req)

  }

  public CreateAndUpdateUniversity(university:University)
  {
    console.log("university here is "+university);
    
    return this.http.post<University>(`http://localhost:8080/createAndUpdateUniversity`,university)
  }
  
  public deleteUniversity(uid:number)
  {
    return this.http.delete<void>(`http://localhost:8080/deleteUniversity/${uid}`)
  }

  public getAllUniversitiesByCriteriaWithPagination(req:RequestUniversity, pageNumber:number,pageSize:number)
  {
    console.log(pageNumber,pageSize,'in pagination method');
    
    return this.http.post<Page<University>>(`http://localhost:8080/getAllUniversitiesByCriteriaWithPagination/${pageNumber}/${pageSize}`,req)

  }

  public searchInWithPagination(filters:any,pageNumber:number,pageSize:number)
  {
    return this.http.get<Page<University>>(`http://localhost:8080/searchInColumnsWithPagination/${pageNumber}/${pageSize}`,{ params: filters});
  }

  public downloadExcel(req:RequestUniversity)
  {
    return this.http.post(`http://localhost:8080/downloadexcel`,req,{responseType:'blob'}) 
  }

  public searchWithEachAndEveryColumn(req:RequestNewUniversity,page:number,pageSize:number)
  {
    console.log(req);
    
    return this.http.post<Page<University>>(`http://localhost:8080/searchWithEachAndEveryColumn/${page}/${pageSize}`,req)

  }
 


}
