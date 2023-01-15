import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  items = [
    {name:'Ticket Booking',logo:'airplane_ticket'}, 
    {name:'Driving Licensce',logo:'drive_eta'},
    {name:'Passport Photo',logo:'photo_camera'},
    {name:'Flex Printing', logo:'imagesearch_roller'}
  ];
  staffs = [
    {name:'Ajoy Rabha', about: 'Head',imgUrl:'assets/ajoy.jpeg', profile:'https://www.facebook.com/ajoy.rabha.94'},
    {name: 'Bhubaneswar Daimary', about: 'Member staff', imgUrl:'assets/bhub.jpeg',profile:'https://www.facebook.com/bhubaneswar.daimary'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
