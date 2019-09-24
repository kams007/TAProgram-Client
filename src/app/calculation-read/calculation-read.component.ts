import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';
import CalculationHistory from '../calculation-history';

@Component({
  selector: 'app-calculation-read',
  templateUrl: './calculation-read.component.html',
  styleUrls: ['./calculation-read.component.css']
})
export class CalculationReadComponent implements OnInit {
  columnDefs = [
    {headerName: 'First Number', field: 'FirstNumber',width:500},
    {headerName: 'Second Number', field: 'SecondNumber',width:500},
    {headerName: 'Sum Result', field: 'SummationResult',width:500},
    {headerName: 'User Name', field: 'UserName',width:300},
    {headerName: 'Date of Calculation', field: 'CalculationDate',width:300}
];

rowData = [];
list:CalculationHistory[];
  constructor(private cs: CalculationService) { }

  ngOnInit() {
    this.cs.refreshList().subscribe(res=>{
      this.list=res as CalculationHistory[];
      this.rowData= this.list;
    })
  }

}
