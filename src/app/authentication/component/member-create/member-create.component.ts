import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-create',
  templateUrl: './member-create.component.html',
  styleUrls: ['./member-create.component.css']
})
export class MemberCreateComponent implements OnInit {
  detailUser: any= {};
  title: string;
  id: string;
  date;
  public birthdate: Date;
  public age: number;
  constructor(
    private firebaseService: FirsbaseServiceService, 
     private route: ActivatedRoute, 
     private router: Router,
     
     //private RouteLists:Routes
    ) {
      
     }

  ngOnInit() {
    this.title = 'Add Wiki';
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getdetailUserByKey(this.id);
      this.title = 'Edit wiki';
    }
  }
  public CalculateAge(): void
  {
  if(this.birthdate){
    var timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    console.log( this.age);
  }
  }

  // updateDate(date){
  //   this.date = this.firebaseService.formatDate(date);
  // }
  addDetailUser(data: NgForm){
    
    if (this.id) {
      this.firebaseService.editDetailUser(this.id, data.value).then(this.goToHome);
    } else {
      this.firebaseService.addDetailUser(data.value).then(this.goToHome);
      this.CalculateAge;
      //this.updateDate;
    }
}
getdetailUserByKey(id) {
  this.firebaseService.getDetailUser(id).subscribe((data) => {
    this.detailUser = data;
  });
}

goToHome = () => {
  this.router.navigate(['auth','memberList']);
}

}
