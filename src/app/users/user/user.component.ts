import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  // to store subscribe value which will help us to unsubscribe
  paramSubscription: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // after subscribe we will get dynamic data on change of anything 
    // we need to unsubscribe value after subscribe to prevent memory leakage
    this.paramSubscription = this.route.params.subscribe((params : Params) =>  this.user = {
      id : this.route.snapshot.params['id'],
      name : this.route.snapshot.params['name']
    });   
  }
  ngOnDestroy(){
    this.paramSubscription.unsubscribe();
  }
}
