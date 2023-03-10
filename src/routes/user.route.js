const { Router } = require('express');

// SELECT * FROM users JOIN todos ON user_id=todos.user_id;

const router = Router();

router.post('/api/v1/user', createUser)

module.exports = router;