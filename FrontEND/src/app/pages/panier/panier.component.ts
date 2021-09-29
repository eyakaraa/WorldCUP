import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NbSearchService } from '@nebular/theme';
import { JwtClientService } from '../../@core/API/jwt-client.service';
import { Match } from '../../@core/data/entities/Match';
import { UserS } from '../../@core/data/entities/UserS';
import { AuthGuard } from '../../auth/auth.guard';
import { AuthService } from '../../auth/auth.service';
import { elementPanier } from '../get-ticket/get-ticket.component';

@Component({
  selector: 'ngx-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {

//  matchForm:FormGroup;

  p: number = 1;
  Totale=0;
  searchText: string;
  test=false;
  constructor(private formBuilder: FormBuilder,private searchService: NbSearchService,private authGuard:AuthGuard) {
    this.authGuard.canActivate();
    

    this.Panier=JSON.parse(localStorage.getItem("panier"));
    if(this.Panier==null){
     this.test=true;
     return;
    }
    this.Panier.forEach(element => {
      this.Totale=this.Totale+(element.match.prix*element.ticket);
    });
    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.searchText = data.term;
    });
    let matchFormControl ={
      ticket : new FormControl('',[
        Validators.required,
        Validators.maxLength(2)
      ]),
    }
  //  this.matchForm=formBuilder.group(matchFormControl);
  }
 /* get ticket(){
    return this.matchForm.get('ticket');

  } 
*/
sup(p){
  let i=this.Panier.indexOf(p);
  this.Panier[i].ticket=this.Panier[i].ticket-1;
  if(this.Panier[i].ticket==0){
    this.del(p);
    return;
  }
  localStorage.removeItem("panier");
  localStorage.setItem("panier",JSON.stringify(this.Panier));
  this.Totale=0;
  this.Panier.forEach(element => {
    this.Totale=this.Totale+(element.match.prix*element.ticket);
  });
}
Matchs:elementPanier[]=[];
achat(){
  this.Matchs=JSON.parse(localStorage.getItem("Matchs"));
  console.log(this.Matchs);
  if(this.Matchs==null){
    localStorage.setItem("Matchs",JSON.stringify(this.Panier));
    localStorage.removeItem("panier");
    
  
  }else{
    this.Panier.forEach(element => {
      console.log(element);
      this.Matchs.push(element);
    });
    localStorage.setItem("Matchs",JSON.stringify(this.Matchs));
    localStorage.removeItem("panier");
 
  }
  window.location.reload();
 
}
add(p){
  let i=this.Panier.indexOf(p);
  this.Panier[i].ticket=this.Panier[i].ticket+1;
  localStorage.removeItem("panier");
  localStorage.setItem("panier",JSON.stringify(this.Panier));
  this.Totale=0;
  this.Panier.forEach(element => {
    this.Totale=this.Totale+(element.match.prix*element.ticket);
  });

}
 del(p:elementPanier){
this.Panier.splice(this.Panier.indexOf(p), 1);
localStorage.removeItem("panier");
localStorage.setItem("panier",JSON.stringify(this.Panier));
this.Totale=0;
this.Panier.forEach(element => {
  this.Totale=this.Totale+(element.match.prix*element.ticket);
});
 }
  Panier:elementPanier[]=[];
   Match:Match[]=[];
  ngOnInit(): void {
    let newPanier:string;
    if(localStorage.getItem("panier")!==null){
    this.Panier=JSON.parse(localStorage.getItem("panier"));
    console.log(this.Panier);
    this.Panier.forEach(element => {
      this.Match.push(element.match);
    });
  }
  newPanier=JSON.stringify(this.Panier);
  localStorage.removeItem("panier");
  localStorage.setItem("panier",newPanier);
  console.log(localStorage.getItem("panier"));


  

  }
}
