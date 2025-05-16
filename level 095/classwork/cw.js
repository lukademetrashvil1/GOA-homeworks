const box = document.getElementById('myBox');

// ძირითადი ფუნქცია კლიკისთვის
function handleClick() {
  // წაშალე ივენთ ლისენერი სანამ ანიმაცია მიმდინარეობს
  box.removeEventListener('click', handleClick);

  // 1 წამში გააქრე
  box.style.opacity = '0';

  // დააყოვნე 1 წამი სანამ opacity გადავა 0-ზე
  setTimeout(() => {
    // გაჩერება (დარჩეს გაქრობით 1 წამი)
    setTimeout(() => {
      // 1 წამში ისევ გამოჩენა
      box.style.opacity = '1';

      // კიდევ 1 წამი და დავაბრუნოთ ივენთი
      setTimeout(() => {
        box.addEventListener('click', handleClick); // დაბრუნება
      }, 1000);

    }, 1000);
  }, 1000);
}

// თავიდანვე დავამატოთ კლიკის ივენთი
box.addEventListener('click', handleClick);