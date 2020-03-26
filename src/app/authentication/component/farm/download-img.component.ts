import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';

@Component({
  selector: 'app-download-img',
  templateUrl: './download-img.component.html',
  styleUrls: ['./download-img.component.css']
})
export class DownloadImgComponent implements OnInit {

  DetailFarm:any[];
  constructor(
    private router: Router, 
    private firebaseService: FirsbaseServiceService,
  ) { }

  ngOnInit() {
    this.firebaseService.getDetailFarmList().subscribe(items => {
      this.DetailFarm = items;
    });
  }

  delDetailFarm(data) {
    this.firebaseService.removeDetailFarm(data.key);
  }

  editDetailFarm(data) {
   this.router.navigate(['auth',`/editWiki/${data.key}`]);
   
  }
}
