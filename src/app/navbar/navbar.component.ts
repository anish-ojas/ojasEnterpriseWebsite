import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }
  gohome(){
    document.body.scrollTo(0,0)
  }
  goabout(){

    document.body.scrollTo(0,1050)

  }
  goservice(){
    document.body.scrollTo(0,450)
  }

}
