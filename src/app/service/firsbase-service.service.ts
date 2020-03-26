import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { Book } from '../authentication/component/test-fire/Book';
@Injectable({
  providedIn: 'root'
})
export class FirsbaseServiceService {
  //wikiList: AngularFireList<any>;
  detailList:AngularFireList<any>;
  detailFarmList:AngularFireList<any>;
  detailImgList:AngularFireList<any>;
  detailProcessList:AngularFireList<any>;
  
  imageDetailList: AngularFireList<any>;

  items:Observable<any[]>;
  detailImg: DetailImg = new DetailImg();


  //  books: AngularFireList <any[]>; ; //from Firebase
  //  bookDetails: AngularFireObject <any>; //from Firebase
  // favoriteBooks: Observable<any>;
  // unreadBooks: Observable<any>;
  // // booksByCategory: Observable<any>;


  
  constructor( private db: AngularFireDatabase,
    private afAuth: AngularFireAuth) { 
      //this.wikiList = db.list('wikis');
      this.detailList = db.list('DetailUser');
      this.detailFarmList = db.list('Detailfarm');
      this.detailImgList = db.list('ImageDetail');
      this.detailProcessList = db.list('DetailProcess');
      //this.books = db.list('books');
      //this.imageDetailList = db.list('imageDetails');

      this.items = db.list('imageDetail', ref=> ref.orderByChild('time')).snapshotChanges().map(result=>{
        return result.reverse();
      })
    }

    onClickSubmit(detailImg){
      let itemRef = this.db.list('imageDetail');
      itemRef.push(this.detailImg);

    }



    //DetailProcessImage//
    getDetailProcessList(): Observable<any[]> {
      return this.detailProcessList.snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      });
    }
  
    getDetailProcess(id): Observable<any> {
      return this.db.object('DetailProcess/' + id).snapshotChanges().map(res => {
        return res.payload.val();
      });
    }

    addDetailProcess(data) {
      return this.detailProcessList.push(data);
    }
  
     
    editDetailProcess(id, data) {
      return this.detailProcessList.update(id, data);
    }

        //testFireImage//
    getImageDetailList() {
      this.detailImgList = this.db.list('detaillmg');
    }
  
    insertImageDetails(data) {
      this.detailImgList.push(data);
    }

    //DetailImg//

    getDetailImgList(): Observable<any[]> {
      // this.detailImgList = this.firebase.list('imageDetails');
      return this.detailImgList.snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      });
    }
  
    getDetailImg(id): Observable<any> {
      return this.db.object('ImageDetail/' + id).snapshotChanges().map(res => {
        return res.payload.val();
      });
    }

    addDetailImg(data) {
      return this.detailImgList.push(data);
    }
  
     
    editDetailImg(id, data) {
      return this.detailImgList.update(id, data);
    }

        
    //Detailuser//
    getDetailuserList(): Observable<any[]> {
      return this.detailList.snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      });
    }
  
    getDetailUser(id): Observable<any> {
      return this.db.object('DetailUser/' + id).snapshotChanges().map(res => {
        return res.payload.val();
      });
    }

    addDetailUser(data) {
      
      return this.detailList.push(data);
    }

     removeDetailUser(id): void {
      this.detailList.remove(id);
    }
  
    editDetailUser(id, data) {
      return this.detailList.update(id, data);
    }


    //DetailFarm//
    getDetailFarmList(): Observable<any[]> {
      return this.detailFarmList.snapshotChanges().map(actions => {
        return actions.map(action => ({ key: action.key, value: action.payload.val() }));
      });
    }
  
    getDetailFarm(id): Observable<any> {
      return this.db.object('Detailfarm/' + id).snapshotChanges().map(res => {
        return res.payload.val();
      });
    }

    addDetailFarm(data) {
      return this.detailFarmList.push(data);
    }

     removeDetailFarm(id): void {
      this.detailFarmList.remove(id);
    }
  
    editDetailFarm(id, data) {
      return this.detailFarmList.update(id, data);
    }

    



    
}
class DetailImg{
  date=""; 
  farmName="";
  imgUrl="";
  imgname="";
}



 // testFire
    // getBooks() {
    //   this.books = this.db.list('/books') as AngularFireList<Book[]>;
    //   return this.books;
    // }
  
      
    // getFavoriteBooks() {
    //   this.favoriteBooks = this.db.list('/books').snapshotChanges().map(books => {
    //     const topRatedBooks = books.filter(item => item.rate > 4 );
    //     return topRatedBooks;
    //   })
    //   return this.favoriteBooks;
    // }
  
    // getUnreadBooks(){
    //   this.unreadBooks = this.db.list('/books').snapshotChanges().map(books =>{
    //     const unreadBooks = books.filter(item => item.dateread == null);
    //     return unreadBooks;
    //   })
    //   return this.unreadBooks;
    // }
  
    // getBookDetails(id){
    //   this.bookDetails = this.db.object('/books/'+id) as AngularFireObject<Book>;
    //   return this.bookDetails;     
    // }
  
    // updateBook(id, bookDetails){
    //   var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    //   return this.books.update(id,filteredBook);
    // }
  
    // addBook(bookDetails){
    //   // var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    //   // console.log('Filtered Book - ',filteredBook);
    //   // return this.books.push(filteredBook);
    //   return this.books.push(bookDetails);

    // }
  
    // deleteBook(id){
    //   return this.books.remove(id);
    // }


    //Date
    // formatDate(date:Date): string{
    //   const day = date.getDate();
    //   const month = date.getDate() +1;
    //   const year = date.getFullYear();

    //   return `${year}-${month}-${day}`; 
    // }

    //book
    // getBooks(){
    //   this.books = this.db.list('/books') as AngularFireList<any[]>;
    //   return this.books;
    // }

    // getBookDetails(id){
    //   this.bookDetails= this.db.object('/books'+id)as AngularFireObject<any>;
    //   return this.bookDetails;
    // }