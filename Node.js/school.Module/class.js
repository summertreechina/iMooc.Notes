let student = require('./student.js');
let teacher = require('./teacher.js');

// teacher.add('Name');

function add(teacher_name, students) {
	teacher.add(teacher_name);
	students.forEach((item, index) => {
		student.add(item);
	});
}

exports.add = add;

// module.exports = add;

// 想让模块成为特别的对象类型，使用module.export;
// 想让模块成为传统的模块实例，使用export.  
// module.export是真实存在的东西，
// export是module.export的辅助方法。
// module.export最终返回给调用者；
// export挂载属性和方法，然后把属性赋给module.export
// 如果module.export已经有了属性，那么export上的属性会被忽略
// 推荐export方式































