function rentalCarCost(d) {
    const dailyRate = 40; // Daily rental cost
      let totalCost = d * dailyRate; // Total cost without any discount
      
      if (d >= 7) {
          totalCost -= 50; // $50 discount for 7 or more days
      } else if (d >= 3) {
          totalCost -= 20; // $20 discount for 3 or more days
      }
      
      return totalCost;
  }
  
  // Example usage:
  console.log(rentalCarCost(1)); // $40 (no discount)
  console.log(rentalCarCost(3)); // $100 ($20 discount)
  console.log(rentalCarCost(7)); // $230 ($50 discount)
  console.log(rentalCarCost(10)); // $350 ($50 discount)