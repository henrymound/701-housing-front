import { Pipe, PipeTransform } from '@angular/core';
import { Room } from "./room";
import { ResultReturn } from './resultReturn';

@Pipe({
  name: 'filter'
})


export class FilterPipe implements PipeTransform {
  //transform(dummyRooms: any[]): any[] {
  transform(dummyRooms: Room[], bInput: any, oInput: any, yInput: any, bool0: any, bool1: any, bool2: any, bool3: any, bool4: any, bool5: any): Room[] {
    //we're parsing through any given room[] array, but are calling the array dummyRooms for continuity's sake
    if (dummyRooms && dummyRooms.length){
     return dummyRooms.filter(room =>{
       return true;
     })
    }
    else{
      return dummyRooms;
    }
  }

}


// export class FilterPipe implements PipeTransform {
//   transform(dummyRooms: Room[], bInput: any, oInput: any, yInput: any, bool0: any, bool1: any, bool2: any, bool3: any, bool4: any, bool5: any): Room[] {
//     // we're parsing through any given room[] array, but are calling the array dummyRooms for continuity's sake
//     if (dummyRooms && dummyRooms.length){
//       return dummyRooms.filter(room =>{
//         // the structure of this filter is to check if there exists an input from a list,
//         // and then filter it out if a room object's attribute (ex. room.year) !== the dropdown.
//         if (bInput && room.bType !== bInput) {
//           return false;
//         }
//         //For some reason, HTMLElement.value kept returning Strings,
//         //so we're just making sure our inputs are numbers.
//         if (Number(oInput) && room.occupancy !== Number(oInput)) {
//           return false;
//         }
//         if (yInput && room.year !== yInput) {
//           return false;
//         }
//         if (bool0 && room.checkKitchen !== bool0) {
//           return false;
//         }
//         if (bool1 && room.checkLaundry !== bool1) {
//           return false;
//         }
//         if (bool2 && room.checkCA !== bool2) {
//           return false;
//         }
//         if (bool3 && room.checkEle !== bool3) {
//           return false;
//         }
//         if (bool4 && room.checkLawn !== bool4) {
//           return false;
//         }
//         if (bool5 && room.checkPortch !== bool5) {
//           return false;
//         }
//         return true;
//       })
//     }
//     else{
//       return dummyRooms;
//     }
//   }
//
// }
