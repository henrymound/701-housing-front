import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore
  ) { }

  // search_by_building (building_ID){
  //     return firestore.collection("rooms").where("Building ID", "==", building_ID).get();
  // }

  // getAvatars(){
  //     return this.db.collection('/avatar').valueChanges()
  // }
  //
  // getUser(userKey){
  //   return this.db.collection('users').doc(userKey).snapshotChanges();
  // }
  //
  // updateUser(userKey, value){
  //   value.nameToSearch = value.name.toLowerCase();
  //   return this.db.collection('users').doc(userKey).set(value);
  // }
  //
  // deleteUser(userKey){
  //   return this.db.collection('users').doc(userKey).delete();
  // }

  getRooms(){
    //return this.db.collection('rooms').snapshotChanges();
    return this.firestore.collection('rooms').snapshotChanges();
    //return this.db.collection('rooms',ref => ref.where('Cap', '>=', '0')
    //  .where('Cap', '<=', '0' + '\uf8ff'))
    //  .snapshotChanges()
  }

  getRoomsByCapacity(capacity){
    //return this.db.collection('rooms').snapshotChanges();
    return this.firestore.collection('rooms',ref => ref.where('Cap', '>=', capacity).where('Cap', '<=', capacity)).snapshotChanges();
    //return this.db.collection('rooms',ref => ref.where('Cap', '>=', '0')
    //  .where('Cap', '<=', '0' + '\uf8ff'))
    //  .snapshotChanges()
  }

  // getUsers(){
  //   return this.db.collection('users').snapshotChanges();
  // }
  //
  // searchUsers(searchValue){
  //   return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }
  //
  // searchUsersByAge(value){
  //   return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }
  //
  //
  // createUser(value, avatar){
  //   return this.db.collection('users').add({
  //     name: value.name,
  //     nameToSearch: value.name.toLowerCase(),
  //     surname: value.surname,
  //     age: parseInt(value.age),
  //     avatar: avatar
  //   });
  // }
}
