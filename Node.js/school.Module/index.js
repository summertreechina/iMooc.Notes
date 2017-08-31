let class_1 = require('./class.js');

// class_1.add('Nn', ['xfd', 'bfm', 'gfs']);

exports.add = function(classes) {
	classes.forEach(function(item, index) {
		// let _class = item;
		let teacher_name = item.teacher_name;
		let students = item.students;

		class_1.add(teacher_name, students);
	})

}