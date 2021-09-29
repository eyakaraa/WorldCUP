import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbSearchService } from '@nebular/theme';
import { Observable, of } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { JwtClientService } from '../../@core/API/jwt-client.service';
import { MatchService } from '../../@core/API/match.service';
import { Match } from '../../@core/data/entities/Match';
import { FlagData, Pays } from '../../@core/data/flag';

@Component({
  selector: 'ngx-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  addMatch=false;
  showPrice=false;
  token:string;
  pays: Pays[];
  matchs: Match[];
  submitted:boolean = false;
  match:Match=new Match();
  erreur:boolean=false;
  updatematch:boolean=false;
  
  addForm:FormGroup;
  updateForm:FormGroup;
  p: number = 1;
  searchText: string;
  private alive = true;
  erreurInvalidEq1:boolean=false;
  erreurInvalidEq2:boolean=false;
  erreurInvalidPrix:boolean=false;
  erreurInvalidDate:boolean=false;
  erreurInvalidSpectateur:boolean=false;
  erreurInvalidStade:boolean=false;
  options: string[]=[];
  type:number;
  filteredOptions$: Observable<string[]>;
  @ViewChild('autoInput1') input;
  @ViewChild('autoInput2') input2;
  selectedItem = '1';
  options2: string[]=[];
  filteredOptions2$: Observable<string[]>;
  constructor(private formBilder:FormBuilder, public flagService: FlagData,private searchService: NbSearchService,private route:ActivatedRoute,private matchService:MatchService,private JwtClientService:JwtClientService,) {
    this.JwtClientService.canActivate(window.location.pathname);
    let addFormControls={
      equipe1 : new FormControl('', [
          Validators.required
        
        ]),
        equipe2 : new FormControl('', [
          Validators.required
          
        ]),
        prix : new FormControl('', [
          Validators.required
          
        ]),
        date : new FormControl('', [
          Validators.required
          
        ])
        ,spectateurs : new FormControl('', [
          Validators.required
          
        ])
        ,stade : new FormControl('', [
          Validators.required
          
        ]),
    }
  this.addForm=formBilder.group(addFormControls);
    this.searchService.onSearchSubmit()
    .subscribe((data: any) => {
      this.searchText = data.term;
    });
    this.flagService.getCode().pipe(takeWhile(() => this.alive)).subscribe((resp: any) => {
      this.pays = resp;
      console.log(this.pays);
     
      for (let key of Object.keys(this.pays)) {
        var name = this.pays[key];
        this.options.push(name);
        this.options2.push(name);
    }
    this.filteredOptions$ = of(this.options);
    this.filteredOptions2$ = of(this.options);
    });
  }

  get getEquipe1(){
    return this.addForm.get('equipe1');
}
get getEquipe2(){
  return this.addForm.get('equipe2');
}
get getPrix(){
  return this.addForm.get('prix');
}

get getDate(){
  return this.addForm.get('date');
}
get getSpectateurs(){
  return this.addForm.get('spectateurs');
}
get getStade(){
  return this.addForm.get('stade');
}


  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filteredOptions$ = this.getFilteredOptions(this.input.nativeElement.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
  }


  private filter2(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options2.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions2(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter2(filterString)),
    );
  }

  onChange2() {
    this.filteredOptions2$ = this.getFilteredOptions2(this.input2.nativeElement.value);
  }

  onSelectionChange2($event) {
    this.filteredOptions2$ = this.getFilteredOptions2($event);
  }



  ngOnInit(): void {
    this.token=localStorage.getItem("token");
    console.log(this.token);
    this.matchService.getAllMatch(this.token).subscribe(
    data=>{
   this.matchs=JSON.parse(data);
   console.log(this.match);
   },
 
   error => {
     console.log(error); 

   }
   );  
   
   
  
  
}
deleteMatch(id:number){
  
  
  this.matchService.deleteMatch(this.token,id).subscribe(
    data => {
      console.log(data);
      this.matchs.splice(id);
     window.location.reload();

    }
    , 
    error =>{
      console.log(error);
      this.erreur=true;
     
     
    }
  );
}


onSubmit(){
 
  console.log(this.match);
  this.erreurInvalidEq1=false;
  this.erreurInvalidEq2=false;
  this.erreurInvalidPrix=false;
  this.erreurInvalidDate=false;
  this.erreurInvalidSpectateur=false;
  this.erreurInvalidStade=false;
  console.log(this.getDate.value);
console.log(this.match._dateMatch);
  let existeDisabled=false;
  if (this.getEquipe1.invalid===true)
  {
 this.erreurInvalidEq1=true;
 this.getEquipe1.reset();
 existeDisabled=true;
 }
 if (this.getEquipe2.invalid===true)
 {
this.erreurInvalidEq2=true;
this.getEquipe2.reset();
existeDisabled=true;
}
if (this.getPrix.invalid===true)
  {
 this.erreurInvalidPrix=true;
 this.getPrix.reset();
 existeDisabled=true;
 }
 if (this.getDate.invalid===true)
  {
 this.erreurInvalidDate=true;
 this.getDate.reset();
 existeDisabled=true;
 }
 if (this.getSpectateurs.invalid===true)
  {
 this.erreurInvalidSpectateur=true;
 this.getSpectateurs.reset();
 existeDisabled=true;
 }
 if (this.getStade.invalid===true)
  {
 this.erreurInvalidStade=true;
 this.getStade.reset();
 existeDisabled=true;
 }
 if(existeDisabled){
  return;
}
if(this.type==0){
  let token = localStorage.getItem("token");
  this.submitted=true;
  this.matchService.createMatch(token,this.match).subscribe(
  data=>{
    console.log(data);
    window.location.reload();
  }
  ,
  error=>{
    console.log(error);
   
  });
}else{
  this.matchService.updateMatch(this.token,this.updatedMatch).subscribe(
    data => {
      console.log(data);
   window.location.reload();

    }
    , 
    error =>{
      console.log(error);
  
     
     
    }
  );
}
}
onSubmitModif(){
  console.log(this.updatedMatch);
   this.matchService.updateMatch(this.token,this.updatedMatch).subscribe(
    data => {
      console.log(data);
   window.location.reload();

    }
    , 
    error =>{
      console.log(error);
  
     
     
    }
  );
}



addmatch(){
  this.addMatch=true;
  this.updatematch=false;
  this.type=0;

}


updatedMatch:Match=new Match();
updateleMatch(match:Match){
  this.type=1;
   this.updatedMatch=match;
   this.match=match;
  console.log(this.updatedMatch);
  this.updatedMatch.id=match.id;
  

  console.log(formatDate(this.updatedMatch._dateMatch,'MM/dd/yyyyTh:mm','en'));
  //this.updatematch=true;
  this.addMatch=true;

 /* this.matchService.afficherUnMatch(this.token,id).subscribe(
    data=>this.match=data,error=>console.log(error)
  );*/


}

ngOnDestroy() {
  this.alive = false;
}

  }



   
   

   
   