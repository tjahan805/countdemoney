function initialize() {
    total = 0;
    penny_count = 0;
    nickel_count = 0;
    dime_count = 0;
    quarter_count = 0;
  
    penny_value = 0;
    nickel_value = 0;
    dime_value = 0;
    quarter_value = 0;
  
    outputTotal = document.getElementById("totalout");
    outputPennyCount = document.getElementById("pcount");
    outputNickelCount = document.getElementById("ncount");
    outputDimeCount = document.getElementById("dcount");
    outputQuarterCount = document.getElementById("qcount");
  
    outputPennyValue = document.getElementById("pvalue");
    outputNickelValue = document.getElementById("nvalue");
    outputDimeValue = document.getElementById("dvalue");
    outputQuarterValue = document.getElementById("qvalue");
  
  }
  function add1() {
    penny_count++;
    penny_value += 0.01;
    total += 0.01;
    displayTotal();
  }
  function subtract1() {
    if (penny_count > 0) {
      penny_count -= 1; // penny_count = penny_count - 1
      penny_value -= 0.01;
      total -= 0.01;
      displayTotal();
    }
  }
  function add5() {
    nickel_count++;
    nickel_value += 0.05;
    total += 0.05;
    displayTotal();
  }
  function subtract5() {
    if (nickel_count > 0) {
      nickel_count -= 1; // penny_count = penny_count - 1
      nickel_value -= 0.05;
      total -= 0.05;
      displayTotal();
    }
  
  }
  function add10() {
    dime_count++;
    dime_value += 0.10;
    total += 0.10;
    displayTotal();
  }
  function subtract10() {
    if (dime_count > 0) {
      dime_count -= 1; // penny_count = penny_count - 1
      dime_value -= 0.10;
      total -= 0.10;
      displayTotal();
    }
  
  }
  function add25() {
    quarter_count++;
    quarter_value += 0.25;
    total += 0.25;
    displayTotal();
  }
  function subtract25() {
    if (quarter_count > 0) {
      quarter_count -= 1; // penny_count = penny_count - 1
      quarter_value -= 0.25;
      total -= 0.25;
      displayTotal();
    }
  
  }
  function restart() {
    total = 0;
    penny_count = 0;
    nickel_count = 0;
    dime_count = 0;
    quarter_count = 0;
  
    penny_value = 0;
    nickel_value = 0;
    dime_value = 0;
    quarter_value = 0;
    displayTotal();
  }
  function displayTotal() {
    total = Math.round(100 * total) / 100;
    penny_value = Math.round(100 * penny_value) / 100;
    nickel_value = Math.round(100 * nickel_value) / 100;
    dime_value = Math.round(100 * dime_value) / 100;
    quarter_value = Math.round(100 * quarter_value) / 100;
    if (total < 0) {
      total = 0;
      penny_count = 0;
      nickel_count = 0;
      dime_count = 0;
      quarter_count = 0;
      penny_value = 0;
      nickel_value = 0;
      dime_value = 0;
      quarter_value = 0;
    }
    if (penny_count < 0) {
      penny_count = 0;
    }
    if (nickel_count < 0) {
      nickel_count = 0;
    }
    if (dime_count < 0) {
      dime_count = 0;
    }
    if (quarter_count < 0) {
      quarter_count = 0;
    }
    if (penny_value < 0) {
      penny_value = 0;
    }
    if (nickel_value < 0) {
      nickel_value = 0;
    }
    if (dime_value < 0) {
      dime_value = 0;
    }
    if (quarter_value < 0) {
      quarter_value = 0;
    }
  
    outputTotal.innerHTML = "Total: $" + total;
    outputPennyCount.innerHTML = "# of Pennies: " + penny_count;
    outputNickelCount.innerHTML = "# of Nickels: " + nickel_count;
    outputDimeCount.innerHTML = "# of Dimes: " + dime_count;
    outputQuarterCount.innerHTML = "# of Quarters: " + quarter_count;
    outputPennyValue.innerHTML = "Penny Value: " + penny_value;
    outputNickelValue.innerHTML = "Nickel Value: " + nickel_value;
    outputDimeValue.innerHTML = "Dime Value: " + dime_value;
    outputQuarterValue.innerHTML = "Quarter Value: " + quarter_value;
  
  }