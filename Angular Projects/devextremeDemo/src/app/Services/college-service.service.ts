import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { College, Page, RequestUniversity } from '../Entities/Entities';

@Injectable({
  providedIn: 'root'
})
export class CollegeServiceService {

  constructor(
    private http:HttpClient
  ) {}
  // public getCollegesByUid(uid:number)
  // {
  //   return this.http.get<College[]>(`http://localhost:8080/getCollegeByUid/${uid}`);
  // }

  public getAllCollegesByCriteria(req:RequestUniversity)
  {
    return this.http.post<College[]>(`http://localhost:8080/getAllCollegesByCriteria`,req);
  }

  public deleteCollege(cid:number)
  {
    return this.http.delete<void>(`http://localhost:8080/deleteCollege/${cid}`)
  }

  public createAndUpdateCollege(college:College)
  {
    return this.http.post<College>(`http://localhost:8080/updateCollege`,college);

  }

  public createCollege(college:College,uid:number)
  {
   // college.uid = 0;
    console.log(uid);
    
    return this.http.post<College>(`http://localhost:8080/createCollegeWithUid/${uid}`,college);

  }

  public getAllCollegesByCriteriaWithPagination(req:RequestUniversity, pageNumber:number,pageSize:number)
  {
    console.log(pageNumber,pageSize,'in pagination method');
    
    return this.http.post<Page<College>>(`http://localhost:8080/getAllCollegesByCriteriaWithPagination/${pageNumber}/${pageSize}`,req)

  }

  

}
