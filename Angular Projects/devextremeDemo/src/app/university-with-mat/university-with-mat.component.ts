import { Component, OnInit, ViewChild } from '@angular/core';
import { College, RequestUniversity, University } from 'src/app/Entities/Entities';
import { CollegeServiceService } from 'src/app/Services/college-service.service';
import { UniversityServiceService } from 'src/app/Services/university-service.service';
//import * as ExcelJS from 'exceljs';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import jsPDF from 'jspdf';
import { DxDataGridComponent } from 'devextreme-angular';



@Component({
  selector: 'app-university-with-mat',
  templateUrl: './university-with-mat.component.html',
  styleUrls: ['./university-with-mat.component.css']
})
export class UniversityWithMatComponent implements OnInit {
  universities:University[]=[]
  universityAdresses:string[]=[]
  selectedAddress:string=''
  selectedStartTime:string=''
  selectedEndTime:string=''
  selectedId:number=0
  selectedCid:number=0
  selectedCaddress:String=''
  expandedUniversityId:number=0
  colleges:College[]=[]
  private originalUniversityData:{[key:number]:University}={}
  private originalCollegeData:{[key:number]:College}={}
  allRatings:String[]=['A','B','C','D'] 

  universityId:number=0

  tempcid !: number;


  isCreatingUniversity:boolean=false;
  newUniversity:University={
    uid:0,
    uname:'',
    uaddress:'',
    email:'',
    phonenumber:'',
    editMode:true,
    lastUpdatedOn:''

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
    // uid:0,
    rating:''
    
  }

  selectedIndex : number = 0


  
  constructor(
    public universityService:UniversityServiceService,
    public collegeService:CollegeServiceService,
    
  
  ) { }

  ngOnInit(): void {
    
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

  public onSearch(event:any){
    console.log("In OnSearch");
    

    if(this.selectedAddress==='Select University Address')
      {
        this.selectedAddress=''
      }
    const req:RequestUniversity=new RequestUniversity(this.selectedId,this.selectedAddress,this.selectedCid,this.selectedAddress,this.selectedStartTime,this.selectedEndTime)
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
    const req:RequestUniversity=new RequestUniversity(uid,this.selectedAddress,this.selectedCid,this.selectedCaddress,this.selectedStartTime,this.selectedEndTime)
    console.log(req);
    this.collegeService.getAllCollegesByCriteria(req).subscribe(
      data=>{
        this.colleges=data
        console.log(this.colleges);
        
      }
    )
    
  }


  // university update create cancel delete functionality 

  public updateUniversities(event:any):void
  {
    this.universityService.CreateAndUpdateUniversity(event.data).subscribe(
      updatedUniversity=>{
        //university.editMode=false;
        //delete University.originalData;
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

  updateCollege(event:any)
  {
    this.collegeService.createAndUpdateCollege(event.data).subscribe(
      data=>{
        //college.editMode=false;
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

  public saveUnivesity(event:any):void{
    this.universityService.CreateAndUpdateUniversity(event.data).subscribe(
      data=>{
        this.isCreatingUniversity=false;
        this.newUniversity={
          uid: 0,
          uname: '',
          uaddress: '',
          email: '',
          phonenumber: '',
          editMode: true,
          lastUpdatedOn:''
        }
        this.onSearch(event)
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
      editMode: true,
      lastUpdatedOn:''
    }
  }


  // Delete University 

  public deleteUniversity(event:any):void{
    this.universityService.deleteUniversity(event.data.uid).subscribe(
      //()=>this.universities=this.universities.filter(university=>university.uid!==event.data.uid)
      ()=>
      {
        console.log('deleted Uid : ' +event.data.uid);
        
      });
      
    
  }


  // Creating new College

  startCreatingcollege(uid:number):void{
    this.selectedUniversityForNewCollege=uid;
    this.isCreatingColle=true;
  }
  public saveCollege(event:any)
  {

    //this.newCollege.uid=event.data.uid;
    //this.expandedUniversityId=event.data.uid
    
    
    //const tempevent=(event.data.cid,event.data.cname,event.data.caddress,event.data.email,event.data.phonenumber)
    event.data.cid = this.tempcid;
    this.collegeService.createCollege(event.data,this.universityId).subscribe(
      data=>{
       // this.colleges.push(data);
        //this.isCreatingColle=false;
        //this.newCollege = { cid: 0, cname: '', caddress: '', email: '', phonenumber: '', uid: this.selectedUniversityForNewCollege, editMode: true };
      },
      error=>{
        console.log(error);
        
      }
      


      
      
    )
    

  }
  public cancelNewCollege(): void {
    this.isCreatingColle = false;
    this.newCollege = { cid: 0, cname: '', caddress: '', email: '', phonenumber: '',  editMode: true, rating:'' };
  }



   // Delete College 

   public deleteCollege(event:any):void{
    this.collegeService.deleteCollege(event.data.cid).subscribe(
      //()=>this.colleges=this.colleges.filter(college=>college.cid!==deletecid)
    )
  }

  onUniversityRowClick(event:any)
  {
    this.universityId=event.data.uid;
    console.log('Current University ID is '+this.universityId);
    this.selectedIndex=1
    
    this.toggleColleges(this.universityId);
  }


    


   onTabChange(event:number)
   {
    this.selectedIndex=event
    console.log('checking selected event ');
    
    console.log(event);
    
   }





  

  
 
}
