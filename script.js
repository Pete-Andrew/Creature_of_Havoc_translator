
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
    .replace("f","e")
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

  //convert the array to a string

  function convertedToCode () {
          
    const encodedFinalString = vowelsReplacedArray
    .toString()
    .split(",")
    .join("")
              
    console.log("Decoder: final decoded output = " + encodedFinalString);
    document.getElementById("inputSentance").value = encodedFinalString;
  }
  convertedToCode();
}  
  
  //add random spaces

  

/* Notes: 
 
There are three rules to this code: 
1. each vowel has been replaced by the following letter, e.g. b = a, f = e, etc...
2. exisitng vowels represent spaces
3. actual spaces are random and mean nothing

*/