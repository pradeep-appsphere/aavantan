import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
 public gotoLogin(){
        this.navCtrl.push(TabsPage);
    }
 goBack(){
        this.navCtrl.pop();
    }

}