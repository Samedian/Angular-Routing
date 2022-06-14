import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService, private route: Router) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }
  onLoadServer(id: number){
    // to build url
    this.route.navigate(['/server',id],{queryParams: {allowEdit: '1'}, fragment: 'loading'});    
  }
}
