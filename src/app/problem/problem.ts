import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule ,Router} from '@angular/router';

@Component({
  selector: 'app-problem',
  imports: [CommonModule,RouterModule],
  templateUrl: './problem.html',
  styleUrl: './problem.css',
})
export class Problem {
  constructor(private routes:Router){};
problems=[
  {
  icon:'🚱',
  title:'Unsafe Drinking Water',
  description:'Groundwater contains high fluoride and harmful impurities.High fluoride and TDS levels make groundwater unsafe.',
  },
  {
    icon: '⚡',
    title: 'Unreliable Electricity',
    description: 'Frequent power cuts make electric purifiers ineffective.'
  },
  {
    icon: '💸',
      title: 'High Operating Cost',
      description: 'Electric RO systems are expensive to maintain and run.'
  }
];
goToSolution(){
this.routes.navigate(['/solution']);
}
}
