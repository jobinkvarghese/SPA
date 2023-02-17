import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  constructor(private hero:HeroService){}
  data=this.hero.givData()
  
  single :any
  ngOnInit(){
    let id= Number(localStorage.getItem('id'))
    this.single=data.filter(e => e.id==id)//filteration //arrrow function
    console.log("name",this.single)
  }
  // artform=data
  // ngOninit():void{
  //   this.artform=data
  // }
  

}
