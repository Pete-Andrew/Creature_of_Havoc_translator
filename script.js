
document.getElementById('inputSentance').style.height="200px";
document.getElementById('inputSentance').style.fontSize="14pt";

document.getElementById('outputSentance').style.height="200px";
document.getElementById('outputSentance').style.fontSize="14pt";

// decoder wraps all the function
function decoder () {

// gets the string from the inputSentance input box
var inputString = document.getElementById("inputSentance").value;

// outputArray is the string that has been tunred into an array
var outputArray = [];
//translated String = vowels have been turned into spaces, these will eventully become spaces
var translatedString = [];
//nospaceString = white space has been removed
var noSpaceString = [];

//turns the original string into an array
function stringToArray (inputString) { 
	for (i=0; i < inputString.length; i++) {
      
   outputArray.push(inputString.charAt(i));  
   }
}

stringToArray(inputString); 
console.log("Decoder: stringToArray: the string has been turned into an array = " + outputArray); 

//replaces vowels with * that will represent blank space.
function replaceVowels (outputArray) { 
	for (i=0; i < outputArray.length; i++) {
  	if (outputArray[i] == "a") {
        translatedString.push("*")
        i++;}
		if (outputArray[i] == "e") {
        translatedString.push("*") 
        i++;}
    if (outputArray[i] == "i") {
        translatedString.push("*")
        i++;}
    if (outputArray[i] == "o") {
        translatedString.push("*")
        i++;}
    if (outputArray[i] == "u") {
        translatedString.push("*");
  			i++;}            
		if (outputArray[i] == ".") {
        translatedString.push(". ");
  			i++;}   
    
    else {
    		translatedString.push(outputArray[i]);
    }   
  }
}

 replaceVowels (outputArray); 
 console.log("Decoder: translatedString: word spaces have been replaced by asterisks = " + translatedString);
 
 //removespaces
  function removeWhiteSpace () {
  	for (i=0; i < translatedString.length; i++) {
   			if (translatedString[i] == " ") {
         noSpaceString.push(); 
         }
         else { noSpaceString.push(translatedString[i]); 
       }
    }
 }
  
  removeWhiteSpace(); 
  console.log("Decoder: noSpaceString: white space removed = " + noSpaceString);
 
 //adds vowels to relevant spaces, e replaces f etc.. 
 // this causes problems as not all the consonants need replacing.  
 
 function placeVowels (noSpaceString) { 
 
 		var modified = 
    noSpaceString.map(e => e
    .replace("f", "e")
    .replace("b", "a")
    .replace("j", "i")
    .replace("p", "o")
    .replace("v", "u") 
    .replace("*", " ")
    
    ); 
    
    console.log("Decoder: consonants have been replaced with appropriate vowels = " + modified); 
 		sortPunctuation(modified)
 }
 
 placeVowels(noSpaceString); 
 
 function sortPunctuation (modified) {
          
          const finalString = modified
          .toString()
          .split(",")
          .join("")
                    
          console.log("Decoder: final decoded output = " + finalString);
          
          //takes the final string and puts it in the output box
          document.getElementById("outputSentance").value = finalString;

 }
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function encoder () {
  
  var outputString = document.getElementById("outputSentance").value;
  var englishToTranslateString = outputString.split("");
  var vowelsReplaced = ""
  var vowelsReplacedArray = [];
  var vowelArray = ["a","e","i","o","u"];

  //remove exiting vowels from the string
  function removeVowels () {
    var vowelsReplaced = 
    englishToTranslateString.map(e => e
    .replace("e","f")
    .replace("a", "b")
    .replace("i", "j")
    .replace("o", "p")
    .replace("u", "v") 
        
    ); 
    
    console.log("Encoder: vowels have been replaced with appropriate consonants = " + vowelsReplaced); 
    replaceSpaceWithVowels(vowelsReplaced)
  }
  
  removeVowels (); 
  
//replace spaces with vowels - make a random vowel generator
  function replaceSpaceWithVowels (vowelsReplaced) { 
    for (i=0; i < vowelsReplaced.length; i++) {
      if (vowelsReplaced[i] == " ") {
        // this picks a random vowel from the vowels array.
        vowelsReplacedArray.push(vowelArray[Math.floor(Math.random() * 5)]);
        // blurb.push("a");
        }
        else { 
          vowelsReplacedArray.push(vowelsReplaced[i]);
          }
      console.log("this is working " + vowelsReplacedArray);
    }
  }
  
  replaceSpaceWithVowels(vowelsReplaced)

  //add random spaces
  //This next bit was written with the help of chat GTP to see if it could help me with coding. It did. 

  function addRandomBlankSpaces(array) {
    //creates a blank array to push the new array to
    const result = []; 
    // creates a boolean variable, assigns it false
    let prevIsSpace = false;

    //looks at the array. If there is not a space previously and math random gives a number < 0.25 then push a blank space to the array and set previous space to true
    //for loop is used for iterating over the sequence. In this case the vowelsReplacedArray. 
  for (const item of array) {     
    if (!prevIsSpace && Math.random() < 0.25) {
      result.push(" ");           // Add a blank space with a 25% probability
      prevIsSpace = true;         //sets the prevIsSpace to true so that the for loop won't add another space after an existing one. 
    }
    
    //if the above code doesn't generate a blank space 'result.push(item)' will push a letter from the existing array to the new one and reset the prevIsSpace to false
    //so a space can potentially be placed next time. 

    result.push(item);  
    prevIsSpace = false;
  }

  return result;

}
// creates a variable that equals the result of the 'addRandomBlankSpaced' function above with the 'vowelsReplacedArray' passed into it. 
var codeWithRandomSpaces = addRandomBlankSpaces(vowelsReplacedArray);

console.log("code with random spaces " + codeWithRandomSpaces);

   //convert the array to a string

  function convertedToCode () {
          
    const encodedFinalString = codeWithRandomSpaces
    .toString()
    .split(",")
    .join("")
              
    console.log("Decoder: final decoded output = " + encodedFinalString);
    document.getElementById("inputSentance").value = encodedFinalString;
  }
  convertedToCode();
}  
  




/* Notes: 
 
There are three rules to this code: 
1. each vowel has been replaced by the following letter, e.g. b = a, f = e, etc...
2. exisitng vowels represent spaces
3. actual spaces are random and mean nothing

*/


