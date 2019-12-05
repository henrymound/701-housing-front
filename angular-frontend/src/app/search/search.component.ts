import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultReturn } from '../resultReturn';
import { ROOMS, roomBools} from '../dummy-data';
import { Room } from '../room';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  items: Array<any>;
  //items: Array<any>;
  //items: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    //this.getData();
    this.firebaseService.getRooms().subscribe(data => {

     this.items = data.map(e => {
       return {
         buildingName: e.payload.doc.id,
         roomID: e.payload.doc.data()['Suite ID'],
         occupancy: e.payload.doc.data()['Cap'],
         sqft: e.payload.doc.data()['SqFt'],
         bType: e.payload.doc.data()['Cap'],
         year: e.payload.doc.data()['Cap'],
         description: e.payload.doc.data()['Capacity'],
         checkKitchen: true,
         checkLaundry: true,
         checkCA: true,
         checkEle: true,
         checkLawn: true,
         checkPortch: true,
       };
     })
     console.log(this.items);
   });
  }

  getData(){
    this.firebaseService.getRooms()
    .subscribe(result => {
      this.items = result;
      //this.age_filtered_items = result;
      //this.name_filtered_items = result;
    })
  }


  buildingTypeList = ["Academic Interest House", "Special Interest House", "Superblock", "Social House", "Residential Dorm"]
  commonsList = ["Wonnacott", "Brainerd", "Ross", "Atwater", "Cook"]
  schoolyearList = ["First-year", "Sophomore", "Junior / Senior"]
  ammenityList = [
    {name: 'Kitchen', value: 'kitchen', checked: false},
    {name: 'Laundry', value: 'laundry', checked: false},
    {name: 'Common Area', value: 'common-area', checked: false},
    {name: 'Elevator', value: 'elevator', checked: false},
    {name: 'Lawn', value: 'lawn', checked: false},
    {name: 'Portch', value: 'portch', checked: false},
  ]
  //dummyRooms = search_by_capacity("Single");
  //dummyRooms = ROOMS;
  dummyRooms = this.items;
  roomBools2 = roomBools;

  modelResult = new ResultReturn("", null, "", []);

  searched: Boolean = true;
  searchClick() {
    this.searched = !this.searched;
    // this.firebaseService.getRooms().subscribe(result => {
    //   this.items = result;
    //   //this.age_filtered_items = result;
    //   //this.name_filtered_items = result;
    // })
  }

  /*onSelect(someBoolean: Boolean): void {
    someBoolean = !someBoolean;
  }*/

  selectedRoom: Room;
  onSelect(someRoom: Room): void {
    /*if (this.selectedRoom == someRoom){this.selectedRoom = null}*/
    this.selectedRoom = someRoom;

  }


}
