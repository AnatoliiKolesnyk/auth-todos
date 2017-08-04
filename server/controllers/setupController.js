const Todo = require("../models/todoModel");

module.exports = function(app, requireAuth) {
    app.post("/api/setupTodos", requireAuth, (req, res) => {

        // Seed DB
        const starterTodos = [
            {
                username: "test",
                todo: "Buy milk",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "test",
                todo: "Feed dog",
                isDone: false,
                hasAttachment: false
            },
            {
                username: "test",
                todo: "Learn Node",
                isDone: false,
                hasAttachment: false
            },
        ];

        Todo.create(starterTodos, (err, result) => {
            if (err) {
                throw err;
            }
            res.send(result);
        });

    });
};
