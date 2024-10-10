import { Component, OnInit } from '@angular/core';
import { College, RequestUniversity, University } from 'src/app/Entities/Entities';
import { CollegeServiceService } from 'src/app/Services/college-service.service';
import { UniversityServiceService } from 'src/app/Services/university-service.service';

@Component({
  selector: 'app-university-search',
  templateUrl: './university-search.component.html',
  styleUrls: ['./university-search.component.css']
})
export class UniversitySearchComponent implements OnInit {
  universities:University[]=[]
  universityAdresses:String[]=[]
  selectedAddress:String=''
  selectedId:number=0
  selectedCid:number=0
  selectedCaddress:String=''
  expandedUniversityId:number=0
  colleges:College[]=[]
  private originalUniversityData:{[key:number]:University}={}
  private originalCollegeData:{[key:number]:College}={}


  isCreatingUniversity:boolean=false;
  newUniversity:University={
    uid:0,
    uname:'',
    uaddress:'',
    email:'',
    phonenumber:'',
    editMode:true

  }



  selectedUniversityForNewCollege: number =0;
  isCreatingColle:boolean=false;
  newCollege:College={
    cid:0,
    cname:'',
    caddress:'',
    editMode:true,
    email:'',
    phonenumber:'',
    uid:0
    
  }


  constructor(
    public universityService:UniversityServiceService,
    public collegeService:CollegeServiceService,
    

  ) { }

  ngOnInit(): void {
    //this.getAllUniversities()
    this.getAllUniversitiesAddress()
    this.selectedAddress='Select University Address'

  }

  // All Universities Table
  public getAllUniversities(){
    this.universityService.getAllUniversities().subscribe(
      data=>{
        this.universities=data;
        console.log(this.universities);
        
      }
    )
  }

  
  public highlightRow(event:MouseEvent)
  {
    const target=event.currentTarget as HTMLElement;
    target.style.backgroundColor='#e9ecef';

  }
  public removeHighlight(event:MouseEvent)
  {
    const target=event.currentTarget as HTMLElement;
    target.style.backgroundColor='';

  }

  // Getting All Universities Addresses 

  public getAllUniversitiesAddress()
  {
    this.universityService.getAllUniversityAdresses().subscribe(
      data=>{
        this.universityAdresses=data
        console.log(this.universityAdresses);
        
      }
    )
  }

  // Search Universities by Selected address

  public onSearch(){
    console.log("In OnSearch");
    

    if(this.selectedAddress==='Select University Address')
      {
        this.selectedAddress=''
      }
    const req:RequestUniversity=new RequestUniversity(this.selectedId,this.selectedAddress,this.selectedCid,this.selectedAddress)
    console.log(req);
    
    
    this.universityService.getAllUniversitiesByCriteria(req).subscribe(
      data=>{
        this.universities=data
        console.log(this.universities);
        
      }
    )
    
  }

  public toggleColleges(uid: number): void {
    if (this.expandedUniversityId === uid) {
      // Collapse the currently expanded row
      this.expandedUniversityId = 0;
    } else {
      // Expand the selected row and fetch colleges
      this.expandedUniversityId = uid;
      this.getCollegesByCriteria(uid);
    }
  }
  
  // public getCollegesByUid(uid:number)
  // {
  //   this.collegeServiceService.getCollegesByUid(uid).subscribe(
  //     data=>{
  //       this.colleges=data;
  //       console.log(this.colleges);
        
  //     }
  //   )
  // } 


  public getCollegesByCriteria(uid:number)
  {
    // in getCollegesByCriteria method
    const req:RequestUniversity=new RequestUniversity(uid,this.selectedAddress,this.selectedCid,this.selectedCaddress)
    console.log(req);
    this.collegeService.getAllCollegesByCriteria(req).subscribe(
      data=>{
        this.colleges=data
        console.log(this.colleges);
        
      }
    )
    
  }


  // university update create cancel delete functionality 

  public updateUniversities(university:University):void
  {
    this.universityService.CreateAndUpdateUniversity(university).subscribe(
      updatedUniversity=>{
        university.editMode=false;
        //delete University.originalData;
      },
      (err)=>{
        alert("Update failed: " + ( "Server error occurred..please check the fields and validation.."));
      }

    )
  }
  public editUniversities(university:University):void
  {
    this.originalUniversityData[university.uid]={...university}

    university.editMode=true;
  }

  cancelUniversities(university:University):void
  {
    const originalData = this.originalUniversityData[university.uid];
    if(originalData)
    {
      Object.assign(university,originalData);
      university.editMode=false
    }

  }


  //  college update create cancel delete functionality  

  updateCollege(college:College)
  {
    this.collegeService.createAndUpdateCollege(college).subscribe(
      data=>{
        college.editMode=false;
      }
    )
  }
  public editCollege(college:College):void
  {
    this.originalCollegeData[college.cid]={...college}
    college.editMode=true

  }
  public cancelColleges(college:College)
  {
    const originalData=this.originalCollegeData[college.cid]
    if(originalData)
    {
      Object.assign(college,originalData)
      college.editMode=false;
    }
  }


  // creating new university

  public startCreatinguniversity():void{
    this.isCreatingUniversity=true;
    

  }

  public saveUnivesity():void{
    this.universityService.CreateAndUpdateUniversity(this.newUniversity).subscribe(
      data=>{
        this.universities.push(data);
        this.isCreatingUniversity=false;
        this.newUniversity={
          uid: 0,
          uname: '',
          uaddress: '',
          email: '',
          phonenumber: '',
          editMode: true
        }
      }
    )
  }
  public cancelNewUniversity():void{
    this.isCreatingUniversity=false;
    this.newUniversity={
      uid: 0,
      uname: '',
      uaddress: '',
      email: '',
      phonenumber: '',
      editMode: true
    }
  }


  // Delete University 

  public deleteUniversity(deleteuid:number):void{
    this.universityService.deleteUniversity(deleteuid).subscribe(
      ()=>this.universities=this.universities.filter(university=>university.uid!==deleteuid)
    )
  }


  // Creating new College

  startCreatingcollege(uid:number):void{
    this.selectedUniversityForNewCollege=uid;
    this.isCreatingColle=true;
  }
  public saveCollege():void
  {

    this.newCollege.uid=this.selectedUniversityForNewCollege;
    this.collegeService.createCollege(this.newCollege,this.selectedUniversityForNewCollege).subscribe(
      data=>{
        this.colleges.push(data);
        this.isCreatingColle=false;
        this.newCollege = { cid: 0, cname: '', caddress: '', email: '', phonenumber: '', uid: this.selectedUniversityForNewCollege, editMode: true };
      }
    )

  }
  public cancelNewCollege(): void {
    this.isCreatingColle = false;
    this.newCollege = { cid: 0, cname: '', caddress: '', email: '', phonenumber: '', uid: this.selectedUniversityForNewCollege, editMode: true };
  }



   // Delete College 

   public deleteCollege(deletecid:number):void{
    this.collegeService.deleteCollege(deletecid).subscribe(
      ()=>this.colleges=this.colleges.filter(college=>college.cid!==deletecid)
    )
  }
  
 



  

}