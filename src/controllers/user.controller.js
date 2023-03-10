
const createUser = async (req, res) =>{
    try{
        const newUser = req.body;
        const result = await UsersServices.create(newUser) 
    }catch (error){
        
    }
}