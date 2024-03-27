import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { LoginAuthenticationService } from '../login-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(
    private router : Router, 
    private alertcontroller : AlertController,
    private authentication : LoginAuthenticationService,
    private toastcontroller : ToastController) { }

  ngOnInit() {
    console.log();
  }
  username : string = '';
  password : string = '';

  accounts: any[] = [
    { accountUsername : 'admin', accountPassword : '123' },
    { accountUsername : 'user', accountPassword : 'password' }
  ];

  verifyAccount(username : string, password : string){
    return this.accounts.some(
      (account) =>
        account.accountUsername === username &&
        account.accountPassword === password
    );
  }

  login(){
    if (this.verifyAccount(this.username, this.password)) {
      this.success()
    }
    else {
      this.failedToast()
    }
  }

  async failedToast(){
    const toast = await this.toastcontroller.create({
      message: 'Sorry, we dont recognize this account',
      duration: 2000
    });
    toast.present();
  }

  async success() {
    const alert = await this.alertcontroller.create({
      header: 'Success!',
      message: 'You are successfuly login',
      buttons: [
        {
          text: 'Okie',
          handler: () => {
            localStorage.setItem('username', this.username);

            this.goto();
          },
        },
      ],
    });

    await alert.present();
  }

  goto() {
    this.router.navigate(['dashboard/home']);
  }
}
