import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  @Output()
  employeeList:  EventEmitter<any> = new EventEmitter();
  idEmployee: string = "";
  constructor(private apiService: ApiService){}
  
  search(){
    if(parseInt(this.idEmployee) != 0 && this.idEmployee != null && this.idEmployee != "")
    {
      this.apiService.getEmployee(parseInt(this.idEmployee)).subscribe(
        res => this.employeeList.emit([res])
      );
    }else{
      this.apiService.getEmployeesList().subscribe(
        res => 
        this.employeeList.emit(res)
      );
    }
    
  }
  
}
