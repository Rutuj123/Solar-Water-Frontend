import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-solution',
  imports: [CommonModule,RouterModule],
  templateUrl: './solution.html',
  styleUrl: './solution.css',
})
export class Solution {
steps=[
  {
    icon:'☀️',
    Title:'Solar Power Generation',
    description: 'Solar panels generate clean and renewable energy.'
  },
  {
    icon: '⚡',
     title: 'Powering Filtration Unit',
     description: 'Generated power runs the water purification system.'
  },
  {
      icon: '💧',
      title: 'Multi-Stage Filtration',
      description: 'Water passes through RO/UV filters to remove impurities.'
    },
    {
      icon: '🚰',
      title: 'Clean Drinking Water',
      description: 'Safe and purified water is ready for consumption.'
    }
];
benefits=[
  {
    icon: '💸',
    title: 'Low Running Cost',
    description: 'No electricity bills and minimal maintenance.'
  },
  {
     icon: '🌍',
     title:'Eco-Friendly',
     description:'Uses renewable solar energy and reduces carbon footprint.'
  },
  {
     icon: '🏡',
      title: 'Works Anywhere',
      description: 'Ideal for rural and remote areas with no power supply.'
  }
];
useCases=[
  'Rural Villages',
  'Government Schools',
  'Hospitals',
  'Construction Sites',
  'Farms & Dairies'
];
constructor(private router:Router){};
goToProducts(){
  this.router.navigate(['/products']);
}
goToContact(){
  this.router.navigate(['/contact']);
}
}
