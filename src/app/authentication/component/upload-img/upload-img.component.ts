import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/shareds/services/image.service';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload-img',
  templateUrl: './upload-img.component.html',
  styleUrls: ['./upload-img.component.css']
})
export class UploadImgComponent implements OnInit {
  detailImg: any= {};
  title: string;
  id: string;
  
  constructor(
    private service:ImageService,
    private firebaseService: FirsbaseServiceService, 
     private route: ActivatedRoute, 
     private router: Router,
     
  ) { }

  ngOnInit() {
    this.service.getImageDetailList();
    this.title = 'Add Wiki';
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getdetailImgByKey(this.id);
      this.title = 'Edit wiki';
    }

  }

  
  addDetailImg(data: NgForm){
    if (this.id) {
      this.firebaseService.editDetailImg(this.id, data.value).then(this.goToHome);
    } else {
      this.firebaseService.addDetailImg(data.value).then(this.goToHome);
    }
    
}
getdetailImgByKey(id) {
  this.firebaseService.getDetailUser(id).subscribe((data) => {
    this.detailImg = data;
  });
}

goToHome = () => {
  this.router.navigate(['auth','process']);
}

}
