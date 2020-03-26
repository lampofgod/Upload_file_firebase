import { Component, OnInit } from '@angular/core';
import {AngularFireStorage , AngularFireUploadTask} from 'angularfire2/storage'
import {Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  task: AngularFireUploadTask
  percentage: Observable<number>
  snapshot: Observable<any>
  // downloadURL: Observable<string>
  isHovering: boolean

  constructor(private storage:AngularFireStorage ) { }

  toggleHover(event: boolean ){
    this.isHovering = event
  }
  /**
   * 
   * @param event 
   * Upload process below
   */
  startUpload(event: FileList) {
    const file = event.item(0)
    // This condition for check file type if type is not image => reject
    if(file.type.split('/')[0] !== 'image'){
       console.error('unsupported file type')
       return
    }
    // path param is location file => you can change filename here 
    const path = `test/${new Date().getTime()}_${file.name}`
    const customMetadata = {app: 'My AngularFire-powered PWA!'}
    this.task = this.storage.upload(path, file , {customMetadata})

    //if you want to show upload percent use param percentage
    this.percentage = this.task.percentageChanges()
    this.snapshot = this.task.snapshotChanges()
    console.log(this.task)
    // this.downloadURL = this.task.dowloadURL()
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

  ngOnInit() {
  }

}
