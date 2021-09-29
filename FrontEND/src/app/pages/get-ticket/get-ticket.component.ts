import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { JwtClientService } from '../../@core/API/jwt-client.service';
import { MatchService } from '../../@core/API/match.service';
import { Match } from '../../@core/data/entities/Match';
import { Router } from '@angular/router';
import { NbSearchService } from '@nebular/theme';
import { AuthGuard } from '../../auth/auth.guard';

@Component({
  selector: 'ngx-get-ticket',
  templateUrl: './get-ticket.component.html',
  styleUrls: ['./get-ticket.component.scss']
})
export class GetTicketComponent implements OnInit {
  show=false;
  showPrice=false;
  matchForm:FormGroup;
  token:string;
  match: Match[];
  
  p: number = 1;
  searchText: string;
  previous: string;
  constructor(private router:Router,private searchService: NbSearchService,private formBuilder: FormBuilder,private authGuard:AuthGuard,private matchService:MatchService) {
    this.authGuard.canActivate();
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
    this.matchForm=formBuilder.group(matchFormControl);
 
 
 
 
 
  }

   get ticket(){
     return this.matchForm.get('ticket');

   }
  ngOnInit(): void {
    let token=localStorage.getItem("token");
   this.matchService.getAllMatch(token).subscribe(
   data=>{
  this.match=JSON.parse(data);
  //console.log(this.match);
  },

  error => {
    console.log(error); 
  }
  );  
}

M:Match;
voirtickets(match:Match){
  this.show = true;

   console.log(match);
   this.M=match;
}
elementCourant:elementPanier;
Panier:elementPanier[] = [];
P:elementPanier[]=[];
onSubmit(){
  console.log(this.ticket.value);
  let panierStorage:string;
  this.P=JSON.parse(localStorage.getItem("panier"));
  if(this.P!==null){
   
let i=-1;
console.log(this.M.id);
    for (var _i = 0; _i < this.P.length; _i++) {
      console.log(this.P[_i].match.id);
      if(this.P[_i].match.id==this.M.id){
         i=_i;
      }
     
    }

    console.log(i);
    if(i!=-1){
     let v= this.ticket.value;
     console.log(this.P[i]);
    this.P[i].ticket=this.P[i].ticket+v;
    localStorage.removeItem("panier");
    localStorage.setItem("panier",JSON.stringify(this.P));
    this.show = false;
    return;
    }
   panierStorage=localStorage.getItem("panier");
   this.Panier=JSON.parse(panierStorage);
   
 
  }
  this.elementCourant=new elementPanier(this.M,this.ticket.value)
  this.Panier.push(this.elementCourant);
  panierStorage=JSON.stringify(this.Panier);
  localStorage.removeItem("panier");
  localStorage.setItem("panier",panierStorage);
  this.show = false;
  console.log(localStorage.getItem("panier"));

}



}

export class elementPanier{
  match:Match;
  ticket:number;

  constructor( match:Match,ticket:number){
    this.match=match;
    this.ticket=ticket;
  }

}
