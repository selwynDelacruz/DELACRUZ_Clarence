import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { AuthenticationService } from "src/app/authentication.service";

@Component ({
    templateUrl: 'custom-page-with-id.html',
    styleUrls: ['custom-page-with-id.scss']
})
export class MyCustomPageWithIDPage implements OnInit {
    id: any;

    constructor (private route: ActivatedRoute, private router: Router, private authenticate:AuthenticationService) {}
    goBacktoHomePage(){
        this.authenticate.authenticate = true;
        this.router.navigate(["HomePage"]);
      }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
    }

}