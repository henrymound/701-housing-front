import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultReturn } from '../resultReturn';
import { ROOMS, roomBools} from '../dummy-data';
import { Room } from '../room';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

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
  dummyRooms = ROOMS;
  roomBools2 = roomBools;

  modelResult = new ResultReturn("", null, "", []);

  searched: Boolean = true;
  searchClick() {
    this.searched = !this.searched;
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
