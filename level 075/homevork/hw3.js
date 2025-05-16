function Athlete(name, age, sport, trainingHours) {
    this.name = name;
    this.age = age;
    this.sport = sport;
    this.trainingHours = trainingHours;

    this.requiredWeeklyHours = function() {
        return this.trainingHours * 7 * 1.2;  // 20%-იანი ზრდა
    };
}

// მაგალითი:
const athlete = new Athlete("John", 25, "Running", 2);
console.log(athlete.requiredWeeklyHours());  // 16.8 (2 * 7 * 1.2)
