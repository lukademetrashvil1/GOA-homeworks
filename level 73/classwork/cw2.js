// ობიექტი ორი key-value წყვილით
const numbers = {
    "რიგი_0": [2, 4, 6, 8, 10], // ლუწი რიცხვები
    "რიგი_1": [1, 3, 5, 7, 9]   // კენტი რიცხვები
  };
  
  // გადავუყვეთ ორივე მასივს ერთდროულად
  for (let i = 0; i < numbers["რიგი_0"].length; i++) {
    console.log(numbers["რიგი_0"][i], numbers["რიგი_1"][i]);
  }
  