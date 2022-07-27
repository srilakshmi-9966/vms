
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from './employee-dash board.model';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  allRestoData: any;
  showAdd!: boolean;
  showBtn!: boolean;
  submitted: boolean = false;
  constructor(private formbuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      // email: ['',  [Validators.required,Validators.email]],
      email: ['',
        Validators.required,
     
    Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],

      mobile: [' '],
      salary: ['']
    })
    this.getAll();

  }
  clickAddResto() {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  addResto() {
    if (this.formValue.valid) {
      this.submitted = false;
      this.employeeModelObj.firstName = this.formValue.value.firstName;
      this.employeeModelObj.lastName = this.formValue.value.lastName;
      this.employeeModelObj.email = this.formValue.value.email;
      this.employeeModelObj.mobile = this.formValue.value.mobile;
      this.employeeModelObj.salary = this.formValue.value.salary;

      this.api.postResto(this.employeeModelObj).subscribe(res => {
        console.log(res);
        alert('Record added successfully');
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAll();
      }, _err => {
        alert('something went worng')
      })
    }
    else {
      this.submitted = true;
      return;
    }

  }

  getAll() {
    this.api.getResto().subscribe(res => {
      this.allRestoData = res;
    })
  }

  deleteRest(data: any) {
    this.api.deleteResto(data.id).subscribe((res: any) => {
      alert('Record deleted successfully');
      this.getAll();
    })
  }

  onEditResto(data: any) {
    this.showAdd = false;
    this.showBtn = true;
    this.employeeModelObj.id = data.id,
      this.formValue.controls['firstName'].setValue(data.firstName),
      this.formValue.controls['email'].setValue(data.email),
      this.formValue.controls['mobile'].setValue(data.mobile),
      this.formValue.controls['lastName'].setValue(data.lastName),
      this.formValue.controls['salary'].setValue(data.salary)

  }

  updateResto() {
    this.employeeModelObj.firstName = this.formValue.value.firstName;
    this.employeeModelObj.lastName = this.formValue.value.lastName;
    this.employeeModelObj.email = this.formValue.value.email;
    this.employeeModelObj.mobile = this.formValue.value.mobile;
    this.employeeModelObj.salary = this.formValue.value.salary;

    this.api.updateRestor(this.employeeModelObj, this.employeeModelObj.id).subscribe((res: any) => {
      alert('record updated sucessfully');
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAll();
    })

  }

}



