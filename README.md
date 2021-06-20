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

#Math methods
function run() {

	Math.abs(-3); // returns 3
	Math.abs(4); // returns 4

	Math.acos(-2);  // NaN
	Math.acos(-1);  // 3.141592653589793
	Math.acos(0);   // 1.5707963267948966
	Math.acos(0.5); // 1.0471975511965979
	Math.acos(1);   // 0
	Math.acos(2);   // NaN

	Math.asin(-2);  // NaN
	Math.asin(-1);  // -1.5707963267948966 (-pi/2)
	Math.asin(0);   // 0
	Math.asin(0.5); // 0.5235987755982989
	Math.asin(1);   // 1.5707963267948966 (pi/2)
	Math.asin(2);   // NaN

	Math.atan(1);   // 0.7853981633974483
	Math.atan(0);   // 0
	Math.atan(-0);  // -0

	Math.cbrt(8);  // 2

	Math.ceil(1);  // 1
	Math.ceil(1.01);  // 2

	Math.floor(5.95);  // 5
	Math.floor(5);  // 5

	Math.hypot(3, 4); // 5
	Math.hypot(5, 12); // 13

	Math.max(1, 3, 2); // 3
	Math.max(-1, -3, -2); // -1

	Math.min(1, 3, 2); // 1
	Math.min(-1, -3, -2); // -2

	Math.pow(2, 3);    // 8
	Math.pow(7, 2);    // 49
	Math.pow(7, 3);    // 343

	Math.random(); // random number

	Math.round(5.95); // 6
	Math.round(5.5); // 6
	Math.round(5.05); // 5

	Math.sqrt(4); // 2
	Math.sqrt(9); // 3

	Math.trunc(13.37); // 13
	Math.trunc(-0.123); // 0
	Math.trunc(0.123); // 0
}
