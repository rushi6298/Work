import { FOCUS_MONITOR_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { filter } from 'rxjs';
import { College, RequestNewUniversity, RequestUniversity, University } from 'src/app/Entities/Entities';
import { CollegeServiceService } from 'src/app/Services/college-service.service';
import { UniversityServiceService } from 'src/app/Services/university-service.service';

@Component({
  selector: 'app-column-search',
  templateUrl: './column-search.component.html',
  styleUrls: ['./column-search.component.css']
})
export class ColumnSearchComponent implements OnInit {


  currentFilterValue:string=''

  universityBySearchIn:University[]=[]
  universitiesPaging:University[]=[]
  universities:University[]=[]
  universityAdresses:string[]=[]
  selectedName:string=''
  selectedAddress:string=''
  selectedStartTime:string=''
  selectedEndTime:string=''
  selectedId:number=0
  selectedCid:number=0
  selectedCaddress:String=''
  selectedNameFilter:string=''
  selectedAddressFilter:string=''
  selectedEmailFilter:string=''
  selectedPhonenumberFilter:string=''
   selectedLastUpdatedOnFilter:string=''
   filterUniversity:University[]=[]
  
  expandedUniversityId:number=0
  colleges:College[]=[]
  private originalUniversityData:{[key:number]:University}={}
  private originalCollegeData:{[key:number]:College}={}
  allRatings:String[]=['A','B','C','D'] 

  searchMode:boolean=false;

  universityId:number=0

  request:RequestNewUniversity={
    uid:0,
    uname:'',
    uaddress:'',
    cid:0,
    caddress:'',
    startTime:'',
    endTime:'',
    nameFilter:'',
    addressfilter:'',
    emailFilter:'',
    phoneFilter:'',
    lastUpdatedFilter:''

  }

  tempcid !: number;

  req:RequestUniversity={
    uid:0,
    uaddress:'',
    cid:0,
    caddress:'',
    startTime:'',
    endTime:''

  }


  


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


  totalElementsUniversity:number=0
  selectedIndex : number = 0
  pageNumberUniversity=0
  pageSizeUniversity=6
  pageSizeArrayUniversity:number[]=[3,6,9,12]
  totalItems: number = 0;

  searchIn:string=''



  totalElementsCollege:number=0
  //selectedIndex : number = 0
  pageNumberCollege=0
  pageSizeCollege=3

  universitiesDataSource!:DataSource



  universityDataSourceBool:boolean=false

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  constructor(
    public universityService:UniversityServiceService,
    public collegeService:CollegeServiceService,
  ) { }

  ngOnInit(): void {
    this.getAllUniversitiesAddress()
    this.initializeDataSource();
    //this.onSearchColumnWise()
    //this.getCollegesByCriteriaWithPagination()
    //this.pageChangeCollege()
  }
  
  // All Universities Table
  // public getAllUniversities(){
  //   this.universityService.getAllUniversities().subscribe(
  //     data=>{
  //       this.universities=data;
  //       console.log(this.universities);
        
  //     }
  //   )
  // }

  
  // Search Universities by Selected address

  public onSearch(event:any){
    console.log("In OnSearch");
    

    const req:RequestUniversity=new RequestUniversity(this.selectedId,this.selectedAddress,this.selectedCid,this.selectedCaddress,this.selectedStartTime,this.selectedEndTime)
    console.log(req);
    
    
    this.universityService.getAllUniversitiesByCriteria(req).subscribe(
      data=>{
        this.universities=data
        console.log(this.universities);
        
      }
    )
    
  }
  public onSearchColumnWise(){
    const req:RequestNewUniversity=new RequestNewUniversity(this.selectedId,this.selectedName,this.selectedAddress,this.selectedCid,this.selectedCaddress,this.selectedStartTime,this.selectedEndTime,this.selectedNameFilter,this.selectedAddressFilter,this.selectedEmailFilter,this.selectedPhonenumberFilter,this.selectedLastUpdatedOnFilter)

    console.log(req);
    console.log(this.pageSizeUniversity);
    console.log(this.pageNumberUniversity);
    
    
    this.universityService.searchWithEachAndEveryColumn(req,this.pageNumberUniversity,this.pageSizeUniversity).subscribe(
      data=>{
        this.universities=data.content;
        console.log(this.universities);
        this.totalElementsUniversity=data.totalElements
        //this.pageSizeUniversity=data.totalPages
        console.log("Total Size is......"+this.pageSizeUniversity);
        this.universityDataSourceBool=false
        this.searchMode=true;

        
        
        //console.log(this.totalElementsUniversity);
        
        
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
    this.getCollegesByCriteriaWithPagination()
    this.selectedIndex=1
    
   // this.toggleColleges(this.universityId);
  }


    


   onTabChange(event:number)
   {
    this.selectedIndex=event
    console.log('checking selected event ');
    
    console.log(event);
    
   }

   loadUniversities(){
    console.log('in the start of loadUni');
    
    const req:RequestUniversity =new RequestUniversity(this.selectedId,this.selectedAddress,this.selectedCid,this.selectedAddress, this.selectedStartTime,this.selectedEndTime)
    this.universityService.getAllUniversitiesByCriteriaWithPagination(req,this.pageNumberUniversity,this.pageSizeUniversity,).subscribe(
      data=>{
        this.universities=data.content
        this.totalElementsUniversity=data.totalElements
       
      }
    )

   }

   onPageChange(event: any) {
    // this.universityService.getAllUniversitiesByCriteriaWithPagination(new RequestUniversity(this.selectedId, this.selectedAddress, this.selectedCid, this.selectedCaddress), event.pageIndex, event.pageSize)
    //   .subscribe(data => {
    //     this.universitiesPaging = data.content;
    //     this.paginator.length = data.totalElements;
    //   });
    this.loadUniversities();
  }

   onSearchWithPagination()
   {
    console.log(' clicked on onSearchWithPagination');
    
    this.loadUniversities()
   }

   pageChangeUniversity(event:any)
   {
    this.pageNumberUniversity=event.pageIndex
    this.pageSizeUniversity=event.pageSize
    this.loadUniversities();
   }

   public getCollegesByCriteriaWithPagination()
  {
    // in getCollegesByCriteria method
    console.log('get colleges by pagination university id is '+this.universityId);
    
    const req:RequestUniversity=new RequestUniversity(this.universityId,this.selectedAddress,this.selectedCid,this.selectedCaddress,this.selectedStartTime,this.selectedEndTime)

    console.log(req);
    this.collegeService.getAllCollegesByCriteriaWithPagination(req,this.pageNumberCollege,this.pageSizeCollege).subscribe(
      data=>{
        console.log('data is '+data.content);
        
        this.colleges=data.content
        this.totalElementsCollege=data.totalElements

        console.log(this.colleges);
        
      }
    )
    
  }

   pageChangeCollege(event:any)
   {
    console.log('in page change college');
    
    this.pageNumberCollege=event.pageIndex;
    this.pageSizeCollege=event.pageSize;
    this.getCollegesByCriteriaWithPagination()
    //this.onUniversityRowClick()

    
   }
   public searchInWithPagination(){
    this.universityService.searchInWithPagination(this.searchIn,this.pageNumberUniversity,this.pageSizeUniversity).subscribe(
      data=>{
        this.universities=data.content;
        console.log(this.universityBySearchIn);
        this.totalElementsUniversity=data.totalElements 
        


      }
    )
   }

  filters = {
    uname: '',
    uaddress: '',
    email: '',
    phonenumber: '',
    universityType: '',
    foundedYear: ''
  };

  onSearchTermChange() {
    this.loadUniversitiesByColumns(1);
  }

  loadUniversitiesByColumns(page: number) {
    const params = {
      ...this.filters
    };

    this.universityService.searchInWithPagination(params,this.pageNumberUniversity,this.pageSizeUniversity).subscribe(
      (data) => {
        this.universities = data.content;
        this.totalElementsUniversity = data.totalElements;
    });
  }

  exportGridToExcel() {
    this.req = {
      uid: 0,
      cid: 0,
      uaddress: this.selectedAddress,
      caddress: '',
      //universityTypes: this.selectedUniversityTypes,
      startTime : this.selectedStartTime,
      endTime : this.selectedEndTime
    };
    this.universityService.downloadExcel(this.req).subscribe(
      (response: Blob) => {
        const fileName = 'university_data.xlsx';
        const blob = new Blob([response], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      (error) => {
        console.error("Error exporting data to Excel", error);
      }
    );
  }

  // changeUname=(filterValue:string,  selectedFilterOperations: any )=>{
  //   console.log("calculateFilterExpression calling...", filterValue);

  //  this.currentFilterValue=filterValue

  //  if(filterValue==="")
  //  {
  //   return ["","=",""]
  //  }

    
  //   if (!filterValue ) {
  //       this.selectedNameFilter = '';
  //       console.log('no filter value....');
  //       this.onSearchColumnWise();
        
        
  //       this.onSearchColumnWise();
  //   } else if (filterValue === this.selectedNameFilter) {
  //       return;
  //   } else {
  //       this.selectedNameFilter = filterValue;
  //   }

  //   this.onSearchColumnWise();
      
  //   }



  changeUname = (filterValue: string, selectedFilterOperations: any) => {
    console.log("calculateFilterExpression for University Name...", filterValue);

    // Update the current filter value
    this.currentFilterValue = filterValue;

    // If the filter value is empty, reset the filter
    if (filterValue === "") {
        this.selectedNameFilter = '';
        this.onSearchColumnWise();
        return ["", "=", ""];
    }

    // If there's no filter value, reset and perform search
    if (!filterValue) {
        this.selectedNameFilter = '';
        console.log('No filter value provided.');
        this.onSearchColumnWise();
        return;
    } 

    // If the filter value is the same as the current one, skip further processing
    if (filterValue === this.selectedNameFilter) {
        return;
    } else {
        this.selectedNameFilter = filterValue;
    }

    // Trigger the search or data refresh logic
    this.onSearchColumnWise();
    
    // Return a custom filter expression if needed
    return [filterValue, "contains", filterValue];
}

    
    changeEmail=(filterValue:string,  selectedFilterOperations: any )=>{
    console.log("calculateFilterExpression calling...", filterValue);
    if(filterValue == this.selectedEmailFilter)
    {
      return 
    }
    this.selectedEmailFilter=filterValue
    this.onSearchColumnWise();
    
  }
  
  changePhoneNumber=(filterValue:string,  selectedFilterOperations: any )=>{
    console.log("calculateFilterExpression calling...", filterValue);
    if(filterValue == this.selectedPhonenumberFilter)
    {
      return 
    }
    this.selectedPhonenumberFilter=filterValue
    this.onSearchColumnWise();
    
  }

  changeUAddresses=(filterValue:string,  selectedFilterOperations: any )=>{
    console.log("calculateFilterExpression calling...", filterValue);
    if(filterValue == this.selectedAddressFilter)
    {
      return 
    }
    this.selectedAddressFilter=filterValue
    this.onSearchColumnWise();
    
  }
  changeLastUpdatedOn=(filterValue:string,  selectedFilterOperations: any )=>{
    console.log("calculateFilterExpression calling...", filterValue);
    if(filterValue == this.selectedLastUpdatedOnFilter)
    {
      return 
    }
    
    
    this.selectedLastUpdatedOnFilter=filterValue
    this.onSearchColumnWise();
    
  }
  

  initializeDataSource() {
    console.log("Data from Backend.........");
    this.universityDataSourceBool=true
    const isNotEmpty = (value: unknown) =>
      value !== undefined && value !== null && value !== '';
  
    this.universitiesDataSource = new DataSource({
      store: new CustomStore({
        key: 'uid',
        load: (loadOptions) => {
          const page = Math.floor((loadOptions.skip ?? 0) / (loadOptions.take ?? 10));
          const pageSize = loadOptions.take ?? 10;
          let params: HttpParams = new HttpParams();
  
          ['filter', 'group', 'groupSummary', 'parentIds', 'requireGroupCount', 
            'requireTotalCount', 'searchExpr', 'searchOperation', 'searchValue', 
            'select', 'totalSummary', 'userData'
          ].forEach(function (i) {
            const optionValue = (loadOptions as any)[i];
            if (i in loadOptions && isNotEmpty(optionValue)) {
              params = params.set(i, JSON.stringify(optionValue));
            }
          });

          this.request = {
            uid: 0,
            cid: 0,
            uname:'',

            uaddress: '',  
            caddress: '',
            //universityTypes: this.selectedUniversityTypes || [],
            startTime: this.selectedStartTime,
            endTime: this.selectedEndTime,
            nameFilter: '',
            //addressFilter: '',
            addressfilter:'',
            
            phoneFilter: '',
            emailFilter: '',
            
            lastUpdatedFilter: this.selectedLastUpdatedOnFilter
          };
  
          // Extract and parse the filter value from params
          const filterValue = params.get('filter');
          let filters: any = [];
          
          if (filterValue) {
            try {
              filters = JSON.parse(filterValue);
              console.log("Parsed Filters:", filters);
          
              // Case for a simple single filter (not an array of conditions)
              if (filters.length === 3 && !Array.isArray(filters[0])) {
                console.log("Single condition filter");
                const [field, operation, value] = filters;
                console.log(`Field: ${field}, Operation: ${operation}, Value: ${value}`);
          
                switch (field) {
                  case 'uaddress':
                    this.request.addressfilter = value;
                    break;
                  case 'phonenumber':
                    this.request.phoneFilter = value;
                    break;
                  case 'uname':
                    this.request.nameFilter = value;
                    break;
                  case 'email':
                    this.request.emailFilter = value;
                    break;
                  // case 'foundedYear':
                  //   this.request.foundedYearFilter = value;
                  //   break;
                  // case 'universityType':
                  //   this.request.universityTypeFilter = value;
                  //   break;
                  default:
                    console.log("Unhandled field:", field);
                    break;
                }
              } else {
                console.log("Composite filter or multiple conditions");
          
                filters.forEach((filterCondition: any) => {
                  if (Array.isArray(filterCondition) && filterCondition.length === 3) {
                    const [field, operation, value] = filterCondition;
                    console.log(`Field: ${field}, Operation: ${operation}, Value: ${value}`);
          
                    switch (field) {
                      case 'uaddress':
                        this.request.addressfilter = value;
                        break;
                      case 'phonenumber':
                        this.request.phoneFilter = value;
                        break;
                      case 'uname':
                        this.request.nameFilter = value;
                        break;
                      case 'email':
                        this.request.emailFilter = value;
                        break;
                      // case 'foundedYear':
                      //   this.request.foundedYearFilter = value;
                      //   break;
                      // case 'universityType':
                      //   this.request.universityTypeFilter = value;
                      //   break;
                      default:
                        console.log("Unhandled field:", field);
                        break;
                    }
                  }
                });
              }
            } catch (e) {
              console.error('Error parsing filter:', e);
            }
          }                 
  
          console.log("Request parameters:", this.request);
  
          // Call the service and return a promise
          return this.universityService
            .searchWithEachAndEveryColumn(this.request, page, pageSize)
            .toPromise()
            .then((data) => {
              if (data && Array.isArray(data.content) && typeof data.totalElements === 'number') {
                this.universities = data.content;
                
                return {
                  
                  
                  data: data.content,
                  totalCount: data.totalElements,
                };
              } else {
                return {
                  data: [],
                  totalCount: 0,
                };
              }
            })
            .catch((error) => {
              console.error('Error loading data', error);
              return {
                data: [],
                totalCount: 0,
              };
            });
        },
      }),
      paginate: true,
      pageSize: this.pageSizeUniversity,
    });
  }


}

