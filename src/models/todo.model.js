const { DataTypes } = require("sequelize");
const db = require('../utils/database');

const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:  false
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull:  false,
        field: "user_id"
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull:  false,
        field: "category_id"
    }
},{
    timestamps: true,
    updatedAt: false,
    createdAt: "taskcreate_at"
});

module.exports = Todos;