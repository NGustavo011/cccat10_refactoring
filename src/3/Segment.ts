export default class Segment {
    constructor(readonly distance: number, readonly date: Date){
        if (!this.isValidDistance()) {
            throw new Error("Invalid distance");
        }
        if (!this.isValidDate()) {
            throw new Error("Invalid date");
        }
    }

    isValidDistance(){
        return this.distance != null && this.distance != undefined && typeof this.distance === "number" && this.distance > 0;
    }
    
    isValidDate(){
        return this.date != null && this.date != undefined && this.date instanceof Date && this.date.toString() !== "Invalid Date";
    }

    isSunday(){
        return this.date.getDay() === 0;
    }
    
    isOvernight(){
        return this.date.getHours() >= 22 || this.date.getHours() <= 6;
    }

    isPeakTime(){
        return (this.date.getHours() >= 7 && this.date.getHours() <= 8) || (this.date.getHours()>=18 && this.date.getHours()<=19)
    }

    isFirstDay(){
        return this.date.getDate()===1
    }
}