function makeBuffer() {

	var massege = [];

	return {
		add : function(value) {
			massege.push(String(value));
		},
		reset : function() {
			massege.length = 0;
		},
		print : function() {
			var str = massege.join(" ");
			console.log(str);
		}
	}
}

var buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('Вчити');
buffer.add('Потрібно!');
buffer.print();
buffer.reset();
buffer.print();
buffer.add('JavaScript');
buffer.print();