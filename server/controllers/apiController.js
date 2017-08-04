const Todo = require("../models/todoModel");

module.exports = (app, requireAuth) => {
    app.get("/api/todos/:uname", requireAuth, (req, res) => {

        Todo.find({ username: req.params.uname }, (err, todos) => {
            if (err) {
                throw err;
            }
            res.send(todos);
        });

    });

    app.get("/api/todo/:id", requireAuth, (req, res) => {

        Todo.findById({ _id: req.params.id }, (err, todo) => {
            if (err) {
                throw err;
            }
            res.send(todo);
        });

    });

    app.post("/api/todo", requireAuth, (req, res) => {

        const todo = new Todo({
            username: "test",
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment,
        });
        todo.save(err => {
            if (err) {
                throw err;
            }
            res.send(todo);
        });

    });

    app.put("/api/todo/:id", requireAuth, (req, res) => {
        if (!req.params.id) {
            res.status = 404;
            res.send("No appropriate todo was found");
        }
        Todo.findByIdAndUpdate(req.params.id,
            {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment,
            }, (err, todo) => {
                if (err) {
                    throw err;
                }
                res.send(todo);
            }
        );
    });

    app.delete("/api/todo/:id", requireAuth, (req, res) => {

        Todo.findByIdAndRemove(req.params.id, err => {
            if (err) {
                throw err;
            }
            res.send(`Todo with ID ${req.params.id} was deleted successfuly`);
        });

    });
};
