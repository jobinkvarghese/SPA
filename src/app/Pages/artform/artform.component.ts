import { Component } from '@angular/core';
//import { data } from 'src/assets/data';
import { Router } from '@angular/router';
// import { ActivatedRoute } from '@angular/router';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-artform',
  templateUrl: './artform.component.html',
  styleUrls: ['./artform.component.css']
})

export class ArtformComponent {
  constructor(private router: Router, private hero:HeroService){}
  artform=this.hero.givData();
  // ngOninit():void{
  //  this.artforms=data;

   gotohere(id:any){
    localStorage.setItem('id', id);
    this.router.navigate(['/singlepage']);
   }
  // artform=data
  // ngOninit():void{
  //   this.artform=data
  }

 

 
 
 
