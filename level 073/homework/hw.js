const people = [
    {
      name: "გიორგი",
      age: 28,
      height: 180,
      gender: "კაცი"
    },
    {
      name: "ნინო",
      age: 25,
      height: 165,
      gender: "ქალი"
    },
    {
      name: "თამარი",
      age: 35,
      height: 170,
      gender: "ქალი"
    },
    {
      name: "ლევანი",
      age: 22,
      height: 175,
      gender: "კაცი"
    }
  ];
  
  people.forEach(person => {
    console.log(`1) ადამიანი:
      სახელი: ${person.name},
      ასაკი: ${person.age},
      სიმაღლე: ${person.height},
      სქესი: ${person.gender}`);
  });
  