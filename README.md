# Practice_JavaScrip
#practice_string

function run() {

	var str = "JavaScript";
	str.charAt(0); // returns "J"

	str.charAt(str.length-1); // returns "t"

	'ABC'.charCodeAt(0); // returns 65

	"Java".concat("Script"); // returns "JavaScript"

	"JavaScript".indexOf("J"); // returns 0
	"JavaScript".indexOf("X"); // returns -1

	'canal'.lastIndexOf('a'); // returns 3
	'canal'.lastIndexOf('x'); // returns -1

	"Ab".replace('b', 'a'); // returns Aa

	"Mozilla".substr(1, 2); // returns "oz"
	"Mozilla".substr(0, 4); // returns "Mozi"

	"Mozilla".substring(1, 3); // returns "oz"

	var str = 'The quick brown fox jumps over the lazy dog.';

	str.slice(31); // returns "the lazy dog."
	str.slice(4, 19); // returns "quick brown fox"
	str.slice(-4);// returns "dog."

	"Abc".toLowerCase(); // returns "abc"

	"Abc".toUpperCase(); // returns "ABC"

	"The quick brown fox".split(' '); // returns ['The', 'quick', 'brown', 'fox']
	"11,22".split(','); // returns ['11', '22']

	str = 'To be, or not to be, that is the question.';

	str.includes('To be'); 	// true
	str.includes('question');    // true
	str.includes('nonexistent'); // false
	str.includes('To be', 1);	// false
	str.includes('TO BE');	// false
	str.includes('');	// true
	console.log("done");
}
