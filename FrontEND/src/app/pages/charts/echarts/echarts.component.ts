import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../../@core/API/match.service';
import { UserSService } from '../../../@core/API/user.service';
import { Match } from '../../../@core/data/entities/Match';
import { UserS } from '../../../@core/data/entities/UserS';
import { AuthGuard } from '../../../auth/auth.guard';

@Component({
  selector: 'ngx-echarts',
  styleUrls: ['./echarts.component.scss'],
  templateUrl: './echarts.component.html',
})
export class EchartsComponent implements OnInit{
  matchs:Match[];
  nbMatchs:number;
  users:UserS[];
  nbUsers:number;
  constructor(private userService:UserSService,private authGuard:AuthGuard,private matchService:MatchService){
    this.authGuard.canActivate();
  }
  ngOnInit(): void {
    let token=localStorage.getItem("token");
    this.userService.getAllUser(token).subscribe(
      data =>{
        this.users=JSON.parse(data);
         this.nbUsers=this.users.length;
      }
    );
    this.matchService.getAllMatch(token).subscribe(
      data =>{
        this.matchs=JSON.parse(data);
        this.nbMatchs=this.matchs.length;
      }
    );
  }
  

}
