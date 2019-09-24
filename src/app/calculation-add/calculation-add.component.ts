import { Component, OnInit } from '@angular/core';
import { CalculationService } from '../calculation.service';
import Calculation from '../Calculation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-calculation-add',
  templateUrl: './calculation-add.component.html',
  styleUrls: ['./calculation-add.component.css']
})
export class CalculationAddComponent implements OnInit {

  model: Calculation;
  constructor(private cs: CalculationService, private toaster: ToastrService) { this.model = new Calculation() }

  doCalculation() {
    this.cs.doCalculation(this.model).subscribe((res) => {
      this.model = res as Calculation;
      this.toaster.success('Calculation Successfully Complete.', 'Calculation');
    }, (error) => {
      this.toaster.error('Calculation goes wrong.', 'Calculation');
    });
  }

  ngOnInit() {
  }

}
