import React, { useState } from 'react';

function App() {
  const [logo, setLogo] = useState('react'); // სტარტული ლოგო არის React

  const handleClick = (language) => {
    setLogo(language); // ლოგოს შეცვლა ღილაკის დაჭერით
  };

  // კონსოლში ინფორმაციის დაბეჭდვა .repeat() მეთოდით
  const handleRepeat = (input, count) => {
    console.log(input.repeat(count)); // გამოსაქვეყნებელი შედეგი
  };

  // array-ს ელემენტების შეერთება forEach-ით (კალკულატორი)
  const arraySum = [1, 2, 3, 4, 5];
  let sum = 0;
  arraySum.forEach((item) => {
    sum += item;
  });

  return (
    <div className="App">
      <h1>React Logo Switcher</h1>
      <div>
        <img
          src={`/${logo}.png`} // ატვირთეთ ლოგოები /public папკაში (react.png, javascript.png, html.png, css.png)
          alt="Logo"
          width={150}
        />
      </div>
      <div>
        <button onClick={() => handleClick('react')}>React</button>
        <button onClick={() => handleClick('javascript')}>JavaScript</button>
        <button onClick={() => handleClick('html')}>HTML</button>
        <button onClick={() => handleClick('css')}>CSS</button>
      </div>
      <div>
        <input
          type="text"
          id="inputText"
          placeholder="Enter text"
        />
        <input
          type="number"
          id="repeatCount"
          placeholder="Repeat count"
        />
        <button
          onClick={() =>
            handleRepeat(
              document.getElementById('inputText').value,
              Number(document.getElementById('repeatCount').value)
            )
          }
        >
          Repeat
        </button>
      </div>
      <div>
        <h3>Sum of Array (using forEach): {sum}</h3>
      </div>
    </div>
  );
}

export default App;
