let numbers = ["banana", 20, "Apple", 50];
function messageAdding (action){
console.log(`length of array before ${action} value is ${numbers.length}`);}
 
function controllArray () {

    let choice = prompt(`Choose an option: push, pop, unshift, shift, print, exit.`);
    switch (choice) {
      case "push":
        console.log(`lenght of array before add value is ${numbers.length}`)
        let element = prompt("Enter a new element to add to the end of the array:");
        numbers.push(element);
        console.log(`Added ${element} to the end of the array.`);
        console.log("Current array state:", numbers);
       controllArray();
        break;
      
      case "pop":
        let removedelement = numbers.pop();
        console.log(`Removed ${removedelement} from the end of the array.`);
        console.log("Current array state:", numbers);
        controllArray();
        break;
      
      case "unshift":
        let elementBeginning = prompt("Enter a new element to add to the beginning of the array:");
        numbers.unshift(element);
        console.log(`Added ${elementBeginning} to the beginning of the array.`);
        console.log("Current array state:", numbers);
        controllArray();
        break;
      
      case "shift":
        let removedelementBeginning = numbers.shift();
        console.log(`Removed ${removedelementBeginning} from the beginning of the array.`);
        console.log("Current array state:", numbers);
        controllArray ();
        break;
      
      case "print":
        console.log("Current array elements");
        for (let i = 0; i < numbers.length; i++) {
          console.log(numbers[i]);
        }
        controllArray();
        break;
        case "exit":
          
          break;
      default:
        console.log("this option is not unvailable.");
        break;
      }
      }
      controllArray();
    
      