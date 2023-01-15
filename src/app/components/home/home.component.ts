import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactComponent } from '../contact/contact.component';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = "CYBER HUB";
  homeImgPath = ''
  homeImages: string[]= ['assets/homeImages/img1.jpeg','assets/homeImages/img2.png','assets/homeImages/img3.png']
  items = [
    {name:'Ticket Booking',logo:'airplane_ticket'}, 
    {name:'Driving Licensce',logo:'drive_eta'},
    {name:'Passport Photo',logo:'photo_camera'},
    {name:'Flex Printing', logo:'imagesearch_roller'}
  ];
  staffs = [
    {name:'Ajoy Rabha', about:'head',imgUrl:'assets/ajoy.jpeg', profile:'https://www.facebook.com/ajoy.rabha.94'},
    {name: 'Bhubaneswar Daimary', about: 'Member staff', imgUrl:'assets/bhub.jpeg',profile:'https://www.facebook.com/bhubaneswar.daimary'}
  ]

  constructor(
    private router: Router,
    private dialog: MatDialog
    ) {
  //   this.http.get(this.homeImgPath).subscribe((data)=>{
  //     // do something with the files
  //     console.log(data);
  // },
  // (err: HttpErrorResponse) => {
  //     console.log (err.message);
  // });
  
  }

  ngOnInit(): void {
  }

  contact(){
    // this.router.navigate(['/contact'])
    let dialogRef = this.dialog.open(ContactComponent,{
      width:'50vw',
      height:'70vh'
    })
  }

}
