import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {

  names = ['Marius', 'Lina', 'Berni', 'Hans']
  images= ['assets/img/hamster/2.jpg', 'assets/img/hamster/3.jpg', 'assets/img/hamster/4.jpg', 'assets/img/hamster/5.jpg']
  texts = ['1.5 Jahre alt', 'gräbt gerne', 'Hamsterrad-Freak', 'spielt gerne']


  constructor() { }

  ngOnInit(): void {
  }

}
