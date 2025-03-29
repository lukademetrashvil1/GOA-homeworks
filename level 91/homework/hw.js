document.getElementById('addMissionBtn').addEventListener('click', function() {
    const input = document.getElementById('missionInput');
    const value = parseInt(input.value);

    if (isNaN(value)) return;  // თუ რიცხვი არასწორია, გაჩერდი

    const missionDiv = document.createElement('div');
    missionDiv.classList.add('mission');

    // დაბოლოების ადგილის განსაზღვრა
    let colorDiv;
    if (value % 2 === 0) {
        colorDiv = document.createElement('div');
        colorDiv.classList.add('circle');
        colorDiv.style.backgroundColor = '#3498db';  // ლურჯი წრე
    } else {
        colorDiv = document.createElement('div');
        colorDiv.classList.add('square');
        colorDiv.style.backgroundColor = '#e74c3c';  // წითელი კვადრატი
    }

    // შეამოწმეთ რიცხვის ბოლო ციფრი
    const lastDigit = value % 10;
    let lastDigitColor = '';
    switch(lastDigit) {
        case 1:
            lastDigitColor = 'red';
            break;
        case 2:
            lastDigitColor = 'green';
            break;
        case 3:
            lastDigitColor = 'blue';
            break;
        default:
            lastDigitColor = 'gray';
    }

    // ახალი კონტეინერის "თავი"
    const headDiv = document.createElement('div');
    headDiv.classList.add(lastDigitColor);
    headDiv.textContent = value;

    // ახალი კონტეინერის "ბოლო" ნაწილი
    const tailDiv = document.createElement('div');
    tailDiv.classList.add(lastDigitColor);
    tailDiv.textContent = value;

    // თუ რიცხვი მეტია 20-ზე, დაამატეთ ბოლოში იგივე რიცხვი
    if (value > 20) {
        missionDiv.appendChild(headDiv);
        missionDiv.appendChild(tailDiv);
    } else {
        missionDiv.appendChild(tailDiv);
        missionDiv.appendChild(headDiv);
    }

    // ბოლოს დაამატეთ colorDiv (წრე ან კვადრატი)
    missionDiv.appendChild(colorDiv);

    // დაამატეთ კონტეინერი სიაში
    const missionsList = document.getElementById('missionsList');
    missionsList.prepend(missionDiv); // თუ 20-ზე ნაკლები, დაამატეთ თავში

    // სუფთა გვაწვდის
    input.value = '';
});
