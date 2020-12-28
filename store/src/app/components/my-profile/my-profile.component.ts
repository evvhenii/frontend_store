import { Component, OnInit } from '@angular/core';
import { MyProfile } from '../../../models/my-profile';
import { UserService } from '../../services/user/user.service';


@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  myProfile: MyProfile = {name:'', surname:'', email:'', gender:'', birthDay: new Date(), imageUrl:''};

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  	this.getMyProfile();
  }

  getMyProfile(): void {
    this.userService.getMyProfile()
    .subscribe(myProfile => {this.myProfile = myProfile;});
  }

}
