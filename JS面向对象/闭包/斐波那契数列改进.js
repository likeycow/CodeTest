var data = [1, 1];

var count = 0;
function fibo(n) {
	count++;
	var v = data[n];
	if (v === undefined) {
		v = fibo(n - 1) + fibo(n - 2);
		data[n] = v;
	}
	return v;
}

fibo(100);
console.log(count);    //199