import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  wikis: any[];
  DetailUser: any[];
  constructor(
    private router: Router, 
    private firebaseService: FirsbaseServiceService,
    
    ) {
      
     }

  ngOnInit() {
    this.firebaseService.getDetailuserList().subscribe(items => {
      this.DetailUser = items;
    });
  }
  delDetailUser(data) {
    this.firebaseService.removeDetailUser(data.key);
  }

  editDetailUser(data) {
   this.router.navigate(['auth',`/editWiki/${data.key}`]);
   
  }
}
