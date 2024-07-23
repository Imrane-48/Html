let numbers = ["banana", 20, "Apple", , 50];

    let choice = prompt(`Choose an option: push, pop, unshift, shift`);
    console.log(`prompt choice ${choice}`)
    choice = parseInt(choice);
    console.log(`choice ${choice}`)
    switch (choice) {
      case 1:
        let element = prompt("Enter a new element to add to the end of the array:");
        numbers.push(element);
        console.log(`Added ${element} to the end of the array.`);
        console.log("Current array state:", numbers);
        break;
      
      case 2:
        let removedelement = numbers.pop();
        console.log(`Removed ${removedelement} from the end of the array.`);
        console.log("Current array state:", numbers);
        break;
      
      case 3:
        let elementBeginning = prompt("Enter a new element to add to the beginning of the array:");
        numbers.unshift(element);
        console.log(`Added ${elementBeginning} to the beginning of the array.`);
        console.log("Current array state:", numbers);
        break;
      
      case 4:
        let removedelementBeginning = numbers.shift();
        console.log(`Removed ${removedelementBeginning} from the beginning of the array.`);
        console.log("Current array state:", numbers);
        break;
      
      case 5:
        console.log("Current array elements");
        for (let i = 0; i < numbers.length; i++) {
          console.log(numbers[i]);
        }
        break;
      
      default:
        console.log("this option is not unvailable.");
        break;}