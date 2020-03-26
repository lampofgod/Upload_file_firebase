import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FirsbaseServiceService } from 'src/app/service/firsbase-service.service';
import { ImageService } from 'src/app/shareds/services/image.service';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { url } from 'inspector';
import { AngularFireObject, AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {
  //detailImg: DetailImg = new DetailImg();
  title: string;
  id: string;
  // date; 
  // farmName;
  // imgUrl;
  // imgname;

  items:Observable<any[]>;
  detailImg: DetailImg = new DetailImg();

  //detailImg: any= {};

   // Main task 
   task: AngularFireUploadTask;

   // Progress monitoring
   percentage: Observable<number>;
 
   snapshot: Observable<any>;
 
   // Download URL
   downloadURL: Observable<string>;
   isUpload:boolean  = false;
  constructor(private db: AngularFireDatabase,
    private service:ImageService,
    private firebaseService: FirsbaseServiceService, 
     private route: ActivatedRoute, 
     private router: Router,
     private storage: AngularFireStorage
      
   

  ) { 
    this.items = db.list('imageDetail', ref=> ref.orderByChild('time')).snapshotChanges().map(result=>{
      return result.reverse();
    }) ;
  }

  ngOnInit() {
    this.service.getImageDetailList();
    this.title = 'Add Wiki';
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getdetailImgByKey(this.id);
      this.title = 'Edit wiki';
    }
  }

onClickSubmit(){
  let itemRef = this.firebaseService.addDetailImg('ImageDetail');
  itemRef.push(this.detailImg);
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
    this.detailImg.date= data;
    this.detailImg.farmName= data;
    this.detailImg.imgUrl= data;
    this.detailImg.imgname= data;
  });
}

goToHome = () => {
  this.router.navigate(['auth','process']);
}

startUpload(event: FileList) {
  // The File object
  const file = event.item(0)

  // Client-side validation example
  if (file.type.split('/')[0] !== 'image') { 
    console.error('unsupported file type :( ')
    return;
  }
  // The storage path
  const path = `test/${new Date().getTime()}_${file.name}`;
  console.log("test path:"+ path);
  
  // Totally optional metadata
  const customMetadata = { app: 'My AngularFire-powered PWA!' };

  // The main task
  this.task = this.storage.upload(path, file, { customMetadata })
  const ref = this.storage.ref(path)
  
    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
     
      tap(snap => {
        console.log(snap)
        if (snap.bytesTransferred === snap.totalBytes) {
          finalize(()=>{
            this.downloadURL = ref.getDownloadURL()
            this.downloadURL.subscribe((url)=>{
              this.detailImg.imgUrl = url.toString();
              this.detailImg.imgname = path;
              this.isUpload = true;
              console.log(555555555555555);
              console.log(`"imgUrl": ${this.detailImg.imgUrl}`)
  
  
            })
          })
        
        }
      })
    )
    this.snapshot.subscribe();
    //this.downloadURL  =this.task.downloadURL();
}

}
class DetailImg{
  date=""; 
  farmName="";
  imgUrl="";
  imgname="";
}


