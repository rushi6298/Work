import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { College, RequestUniversity } from '../Entities/Entities';

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
    return this.http.post<College>(`http://localhost:8080/createCollegeWithUid/${uid}`,college);

  }

  

}
