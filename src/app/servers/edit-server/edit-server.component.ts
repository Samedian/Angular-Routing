import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  data: number;
  serverName = '';
  serverStatus = '';
  paramSubscription : Subscription;
  // ActivatedRoute - to find current value of active url
  constructor(private serversService: ServersService, private route:ActivatedRoute) {

   }

  ngOnInit() {
    this.paramSubscription = this.route.params.subscribe((params : Params) => {
      this.data = +this.route.snapshot.params['id'];
      console.log(this.route.snapshot.queryParams);
      console.log(this.route.snapshot.fragment);
      this.server = this.serversService.getServer(this.data);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    }); 
   
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
}
