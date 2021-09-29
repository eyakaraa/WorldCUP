import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtClientService } from '../../@core/API/jwt-client.service';
import { MatchService } from '../../@core/API/match.service';
import { Match } from '../../@core/data/entities/Match';
import { UserS } from '../../@core/data/entities/UserS';
import { AuthGuard } from '../../auth/auth.guard';
import { AuthService } from '../../auth/auth.service';
import { elementPanier } from '../get-ticket/get-ticket.component';

@Component({
  selector: 'ngx-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class profilComponent implements OnInit {
  user:UserS;
  p: number = 1;
  searchText: string;
  
    constructor(private auth:AuthGuard,private router:Router,private authservice:AuthService) {
        this.auth.canActivate();
        this.user=this.authservice.userData;
      }

    
    
      Panier:elementPanier[]=[];
        ngOnInit(): void {
          
          this.Panier=JSON.parse(localStorage.getItem("Matchs"));
         
       
      
      }
    }
    



   
   

   
   