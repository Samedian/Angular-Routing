import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

//This page will handle routing to reduce code on one page(app.module.ts)
const appRoute : Routes = [
    {path:'', component: HomeComponent} // To set Bydefault path keep it empty
    ,{path:'users', component: UsersComponent, children: [{path:':id/:name', component: UserComponent}]}
    // here users/:id(colon) will determine that id is dynamic
    ,{path:'server', component:ServersComponent,children: [{path:':id', component:ServerComponent},{path:':id/:edit', component:EditServerComponent}]}
    // Keep error page at last and below are different types to assign path value
    ,{path:'pageNotFound', component:PageNotFoundComponent}
    ,{path:'something', redirectTo:'pageNotFound'}
    ,{path:'**', component:PageNotFoundComponent}
  ]
@NgModule({
    imports: [      
        RouterModule.forRoot(appRoute) // to import router
      ],
      exports: [RouterModule]
      
})
export class AppRoutingModule{
   
}