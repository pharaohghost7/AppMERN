const UserController ={};
const user = require('../../Models/Usuarios/usuariosModels');

UserController.obtener = async(req, res) =>{
    let users = await user.find();
    console.log(users);
    res.json(users);
}

UserController.crear = async(req, res)=>{
    try{
        const {
            Username,
            nombres,
            email,
            edad
        } = req.body
        const User = user({
            Username,
            nombres,
            email,
            edad
        });

        const userSave = await User.save();
        console.log(userSave);
        res.status(201).send({userSave})

    } catch (error) {

        res.status(500).send({message: error.mensage});
        
    }
}


module.exports = UserController;