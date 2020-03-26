import { Component, OnInit } from '@angular/core';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-farm-create',
  templateUrl: './farm-create.component.html',
  styleUrls: ['./farm-create.component.css']
})
export class FarmCreateComponent implements OnInit {
  detailFarm: any= {};
  title: string;
  id: string;
  constructor(
    private firebaseService: FirsbaseServiceService, 
     private route: ActivatedRoute, 
     private router: Router,
  ) { }

  ngOnInit() {
    this.title = 'Add Wiki';
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getdetailFarmByKey(this.id);
      this.title = 'Edit wiki';
    }
  }
  addDetailFarm(data: NgForm){
    if (this.id) {
      this.firebaseService.editDetailFarm(this.id, data.value).then(this.goToHome);
    } else {
      this.firebaseService.addDetailFarm(data.value).then(this.goToHome);
    }
}
getdetailFarmByKey(id) {
  this.firebaseService.getDetailFarm(id).subscribe((data) => {
    this.detailFarm = data;
  });
}

goToHome = () => {
  this.router.navigate(['auth','download']);
}

}
