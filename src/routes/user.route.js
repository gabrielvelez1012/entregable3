const { Router } = require('express');
const Category = require('../models/category.model');
const Todos = require('../models/todo.model');
const Users = require('../models/user.model');
// SELECT * FROM users JOIN todos ON user_id=todos.user_id;

const router = Router();

router.get("/api/v1/users/:id/todos", async (req, res) => {
    try {
        const  {id} = req.params;
        const userTodos = await Users.findByPk(id, 
            {
                attributes: ["username"],
            include:{
                model: Todos,
                attributes: ["title"],
                include:{
                    model: Category,
                    attributes: ["name"]
                }
            }
        });

        res.json(userTodos);
    }catch (error) {
        res.status(400).json(error);
    }
         
});
module.exports = router;