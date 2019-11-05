import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultReturn } from '../resultReturn';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  buildingTypeList = ["Academic Interest House", "Special Interest House", "Superblock", "Social House", "Residential Dorm"]
  commonsList = ["Wonnacott", "Brainerd", "Ross", "Atwater", "Cook"]
  schoolyearList = ["First-year", "Sophomore / Sophomore Feb", "Junior / Junior Feb", "Senior / Senior Feb / Super-Senior Feb"]

  modelResult = new ResultReturn("", "", "", []);

  searched: Boolean = false;

  onSearch() {this.searched = true};

  searchClick() {
    this.searched = !this.searched;
  }

  get diagnostic() { return JSON.stringify(this.modelResult); }
  /*
  testVar(someVar) {
    if(!someVar)
    {
      let someString: string = "input var is null";
      return someString;
    }
    if(someVar)
    {
      let someString: string = "input var is NOT null";
      return someString;
    }
  }*/

}
