function closestLeapYear(year) {
    if (isLeapYear(year) === "Yes") {
        return year;
    } else {
        let previousYear = year - 1;
        let nextYear = year + 1;

        while (isLeapYear(previousYear) === "No") {
            previousYear--;
        }
        while (isLeapYear(nextYear) === "No") {
            nextYear++;
        }

        // Return the closest leap year
        if (Math.abs(year - previousYear) <= Math.abs(year - nextYear)) {
            return previousYear;
        } else {
            return nextYear;
        }
    }
}

console.log(closestLeapYear(2100));  // Output: 2400
