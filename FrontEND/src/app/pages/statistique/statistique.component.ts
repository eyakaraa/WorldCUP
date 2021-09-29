import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../../@core/API/jwt-client.service';

@Component({
  selector: 'ngx-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {

  constructor(private JwtClientService:JwtClientService) {
    this.JwtClientService.canActivate(window.location.pathname);
  }

  ngOnInit(): void {
  }

}
