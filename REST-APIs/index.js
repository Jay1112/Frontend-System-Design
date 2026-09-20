import express from 'express';

const app = express();
const PORT = 8080;

app.use(express.json());

let todos = [
    { id: "1", title: "Communication Protocols", type: "system design" },
    { id: "2", title: "REST APIs", type: "backend" }
]

app.get("/api/v1/todos",(req, res) => {
    res.status(200).json(todos)
})

app.post("/api/v1/todos/create",(req, res) => {
    const { todo } = req.body;
    console.log(todo)
    if(!todo){
        res.status(400).json({
            "message" : "todo is missing"
        });
        return;
    }

    todos = [
        ...todos,
        todo
    ]
    res.status(201).json({
        message: "Todo created successfully"
    })
})

app.put("/api/v1/todos/:id/replace",(req, res) => {
    const { todo } = req.body;
    const todoId = req.params.id;

    if(!todo || !todoId){
        return res.status(400).json({
            "message" : "not enough data"
        });
    }

    const index = todos.findIndex((item) => item.id === todoId);
    if(index === -1){
        return res.status(404).json({
            message: "Todo Item not found"
        })
    }
    todos[index] = {
        ...todo
    }
    return res.status(200).json({
        message: "Todo replaced successfully"
    })
})

app.patch("/api/v1/todos/:id/update",(req, res) => {
    const { todo } = req.body;
    const todoId = req.params.id;

    if(!todo || !todoId){
        return res.status(400).json({
            "message" : "not enough data"
        });
    }

    const index = todos.findIndex((item) => item.id === todoId);
    if(index === -1){
        return res.status(404).json({
            message: "Todo Item not found"
        })
    }
    todos[index] = {
        ...todos[index],
        ...todo,
        id: todoId
    }
    return res.status(200).json({
        message: "Todo updated successfully"
    })
})

app.delete("/api/v1/todos/:id/delete",(req, res) => {
    const todoId = req.params.id;

    if(!todoId){
        return res.status(400).json({
            "message" : "not enough data"
        });
    }

    const index = todos.findIndex((item) => item.id === todoId);
    if(index === -1){
        return res.status(404).json({
            message: "Todo Item not found"
        })
    }
    todos = todos.filter((item) => item.id !== todoId);
    return res.status(200).json({
        message: "Todo deleted successfully"
    })
})

app.listen(PORT,() => {
    console.log(`Server is running on ${PORT}`)
});
