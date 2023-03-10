
const Users = require('../models/user.model')

class UsersServices {
    static async create(newUser){
        try {
            const userCreated = await Users.create(newUser)
        } catch (error) {
            
        }
    }
}