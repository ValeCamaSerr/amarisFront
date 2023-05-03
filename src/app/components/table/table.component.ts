import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() recieveList: Employee[] = [];
  employeeList: Employee[] = [];
  showTable: boolean = false;
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes['recieveList'].previousValue != changes['recieveList'].currentValue){
      this.employeeList = changes['recieveList'].currentValue
      this.showTable = true;
    }
    
  }
}
