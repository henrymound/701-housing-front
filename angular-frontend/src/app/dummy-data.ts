import { Room } from "./room"

export const ROOMS: Room[] = [
    {buildingName: "ATA", roomID: "B212E", occupancy: 4, sqft: 1136, description: "example Atwater suite.", bType: "Residential Dorm", year:"Junior / Senior", checkEle: true, checkKitchen: false, checkCA: true, checkLaundry: true, checkLawn: false, checkPortch: false},
    {buildingName: "BTC", roomID: "305", occupancy: 2, sqft: 184, description: "example Battell double.", bType: "Residential Dorm", year:"First-year", checkEle: false, checkKitchen: true, checkCA: false, checkLaundry: false, checkLawn: false, checkPortch: false},
    {buildingName: "LGW", roomID: "101", occupancy: 1, sqft: 144, description: "example Language House single.", bType: "Academic Interest House", year:"Sophomore", checkEle: false, checkKitchen: true, checkCA: true, checkLaundry: true, checkLawn: true, checkPortch: true}
]

var roomBools = [];
var lengthOfInput = ROOMS.length;
for (var i = 0; i < lengthOfInput; i++){
    roomBools.push(false)
}

export {roomBools};

