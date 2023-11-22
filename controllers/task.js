const Task = require('../models/task');

module.exports = {
	index: (req, res) => {
		Task.find()
			.then((tasks) => {
				console.log(tasks);
				// res.send(`<h2>${tasks[0]}</h2>`);
				res.render('todo.ejs', {
					todoTasks: tasks,
				});
			})
			.catch((er) => {
				console.log(er);
			});
	},
	create: (req, res) => {
		const task = new Task({
			title: req.body.title,
		});

		task.save().then(() => {
			console.log('New Task record is inserted');
			res.redirect('/');
		});
	},
	edit: (req, res) => {
		const id = req.params.id;
		Task.find()
			.then((tasks) => {
				res.render('todoEdit.ejs', {
					todoTasks: tasks,
					idTask: id,
				});
			})
			.catch((er) => console.log(er));
	},
	update: (req, res) => {
		const id = req.params.id;

		Task.findByIdAndUpdate(id, {
			title: req.body.title,
		})
			.then(() => res.redirect('/'))
			.catch((e) => console.log(e));
	},
	delete: (req, res) => {
		Task.deleteOne({ _id: req.params.id })
			.then((task) => {
				console.log(task);
				res.redirect('/');
			})
			.catch((e) => console.log(e));
	},
};
