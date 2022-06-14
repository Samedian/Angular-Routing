import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  data: number;
  paramSubscription: Subscription;
  constructor(private serversService: ServersService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
      // after subscribe we will get dynamic data on change of anything 
    // we need to unsubscribe value after subscribe to prevent memory leakage
    this.paramSubscription = this.route.params.subscribe((params : Params) => {
      this.data = +this.route.snapshot.params['id'],//to typecast in integer
      console.log(this.data);
      this.server = this.serversService.getServer(this.data)
    }); 
    
  }

  reloadPage(){
    this.router.navigate(['server'], {relativeTo : this.route});// Absolute path if we write /server and Relative Path when written just server
    
    console.log(this.router.navigate(['server']));
  }
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
}
