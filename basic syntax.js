/*
Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case

Example
For "the quick brown fox"; Print "The Quick Brown Fox"
For "java script"; Print "Java Script"
Input: str
Output: Converts the first letter of each word of the string in upper case
Suggestion
*/
function uc_first(word){
    var firstChar = word.charAt(0).toUpperCase();
    var rest = word.slice(1);
    return firstChar.concat(rest);
}
function run(str) {
    var arr = str.split(" ");
    for(var i=0; i < arr.length; i++){
        arr[i] = uc_first(arr[i]);
    }
    console.log(arr.join(" "));
}