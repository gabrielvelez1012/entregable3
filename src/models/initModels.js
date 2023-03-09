const Users = require('./user.model');
const Todos = require('./todo.model');
const Category = require('./category.model')

const initModels = () =>{
    Users.hasMany(Todos, {foreignKey: 'user_id'});
    Todos.belongsTo(Users, {foreignKey: 'user_id'});

    Category.hasMany(Todos, {foreignKey: 'category_id'});
    Todos.belongsTo(Category, {foreignKey: 'category_id'});
}

module.exports = initModels;