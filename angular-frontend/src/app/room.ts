export class Room {
    constructor(
        public buildingName: string,
        public roomID: string,
        public occupancy: number,
        public sqft: number,
        public bType: string,
        public year: string,
        public description: string,
        public checkKitchen: boolean,
        public checkLaundry: boolean,
        public checkCA: boolean,
        public checkEle: boolean,
        public checkLawn: boolean,
        public checkPortch: boolean,
    ) { }
}

