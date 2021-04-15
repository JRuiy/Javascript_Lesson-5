function makeBuffer() {

	var massege = " ";

	return {
		add : function(value) {
			massege += value + " "; 
		},
		reset : function() {
			massege = " ";
		},
		print : function() {
			console.log(massege);
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