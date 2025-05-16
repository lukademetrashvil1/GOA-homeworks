// ფუნქცია რომელიც იღებს ობიექტს და აბრუნებს მასივს
function createArrayFromObject(obj) {
    // კითხულობს quantity და element
    const quantity = obj.quantity;
    const element = obj.element;
    
    // აბრუნებს მასივს სადაც element არის quantity-ჯერ
    return new Array(quantity).fill(element);
  }
  
  // ტესტირება
  const obj = {
    quantity: 4,
    element: "apple"
  };
  
  const result = createArrayFromObject(obj);
  console.log(result); // ["apple", "apple", "apple", "apple"]
  