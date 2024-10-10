import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { USERS } from '../mock/Users';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all Users', () => {
    service.getAllUsers().subscribe((users: any) => {
      expect(users).toBeTruthy(); // making confirm data is coming 
      expect(users.length).toBe(3); // making confirm that data length is 3  
      const secondUser = users.find((user: any) => user.id === 2);
      expect(secondUser.name).toBe('Nanny Potter');
    });

    const mockReq = httpTestingController.expectOne('api/users');
    expect(mockReq.request.method).toEqual('GET');
    mockReq.flush(Object.values(USERS));
  });

  it('Should get User By Id',()=>{
    const id=1
    service.getUserById(id).subscribe((user:any)=>{
      expect(user).toBeTruthy(); // data is coming confirmation
      expect(user.name).toBe('Harry Potter');
    })
    const mockReq = httpTestingController.expectOne(`api/users/${id}`)
    expect(mockReq.request.method).toEqual('GET')
    mockReq.flush(USERS[1])
  })

  it("should Update the user",()=>{
    let changes={age:22}
    const id=1
    service.updateUser(id,changes).subscribe((user:any)=>{
      expect(user).toBeTruthy(); // data is coming confirmation
      expect(user.id).toBe(1)
    });
    const mockReq=httpTestingController.expectOne(`api/users/${id}`)
    expect(mockReq.request.method).toEqual('PUT');
    let modifiedUser=USERS[1]
    expect(mockReq.request.body.age).toEqual(changes.age)
    modifiedUser.age=25
    
    mockReq.flush(modifiedUser);
    console.log(USERS[1]);
    console.log(mockReq.request.body.age);
    

    
    

  })




  afterEach(()=>{
    httpTestingController.verify();

  });



});
