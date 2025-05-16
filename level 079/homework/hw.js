function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Yes";
    } else {
        return "No";
    }
}

const years = [2100, 2104, 2400];

years.forEach(year => {
    console.log(isLeapYear(year));
});
