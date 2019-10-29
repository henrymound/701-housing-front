export class Room {
    constructor(
        public buildingName: string,
        public roomID: string,
        public occupancy: number,
        public sqft: number,
        /* bType: string,
        commons: string,
        year: string; */
        public description: string,
    ) { }
}