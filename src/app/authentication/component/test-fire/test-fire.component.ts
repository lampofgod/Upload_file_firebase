import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { getProvince } from 'src/data/Province';
import { getDistricts } from 'src/data/Districts';
import { getSubDistricts } from 'src/data/SubDistricts';

@Component({
  selector: 'app-test-fire',
  templateUrl: './test-fire.component.html',
  styleUrls: ['./test-fire.component.css']
})
export class TestFireComponent implements OnInit {
  
  title: string;
  pro = getProvince();
  dis = getDistricts();
  sub = getSubDistricts();
  // a = findDistricts(1)
  disShow = this.dis
  subDisShow = this.sub
 

  ngOnInit() {
  
  }
  
  findDistricts(event) {
    let findDis = this.dis
    const result =  findDis.filter( (provinceName) => {
      return provinceName.PROVINCE_ID == event.target.value
    })
    console.log(result)
    this.disShow = result
  }

  findSubDistricts(event) {
    let findSubDis = this.sub
    const result =  findSubDis.filter( (disName) => {
      return disName.DISTRICT_ID == event.target.value
    })
    console.log(result)
    this.subDisShow = result
  }
 
}
