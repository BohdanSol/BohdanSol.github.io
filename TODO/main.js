function addTodo() {
	var todo_p = document.createElement('p');
	var input = document.getElementById('todoInput').value;
	var text = document.createTextNode(input);
	todo_p.appendChild(text);
	if (input === '') {
		alert('You must write something!');
	} else {
		document.getElementById('todos').appendChild(todo_p);
	}
	document.getElementById('todoInput').value = '';
	var todo = document.getElementsByTagName('p');
	for (i = 0; i < todo.length; i++) {
		todo[i].addEventListener('click', function() {
			if (this.classList.contains('done')) {
				this.classList.remove('done');
			} else {
				this.classList.add('done');
			}
		});
		todo[i].addEventListener('dblclick', function() {
			this.style.display = 'none';
		});
	}
}
