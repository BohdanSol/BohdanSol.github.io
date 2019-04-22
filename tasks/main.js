function generateFibbonacciSequence(n) {
	if (n == 0) {
		return null;
	} else if (n == 1) {
		return 1;
	} else {
		var fibo = [ 1, 1 ];
		for (i = 2; i < n; i++) {
			fibo[i] = fibo[i - 1] + fibo[i - 2];
		}
	}
	return fibo;
}
console.log(generateFibbonacciSequence(10));

function shuffleArray(names) {
	if (names.length == 1) {
		return names;
	} else {
		var oldArray = names;
		var newArray = [];
		while (oldArray.length >= 1) {
			var randomVar = Math.floor(Math.random() * oldArray.length);
			newArray.push(oldArray[randomVar]);
			oldArray.splice(randomVar, 1);
		}
	}
	return newArray;
}
console.log(shuffleArray([ 'Андрій', 'Марія', 'Василь', 'Петро' ]));

function countOddEvenNumbers(n) {
	var result = { odd: 0, even: 0 };
	var str = String(n);
	for (var i = 0; i <= str.length - 1; i++) {
		if (!(+str[i] % 2) || str[i] == '0') {
			result.even += 1;
		} else {
			result.odd += 1;
		}
	}
	return result;
}
console.log(countOddEvenNumbers(1234567890));
