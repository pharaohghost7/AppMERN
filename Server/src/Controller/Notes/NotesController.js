const notesController = {}
const notes = require('../../Models/Notes/Notes.Models')

notesController.obtener= async(req, res) =>{
    let Notes = await notes.find();
    res.json(Notes)
}

notesController.crear = async(req, res) =>{

    try {
        const {
            name,
            email,
            note
        } = req.body;

        const Notes = notes({
            name,
            email,
            note
        })
        const noteSave = await Notes.save();
        res.status(201).send({noteSave})
    } catch (error) {

        res.status(500).send({message: error.mensage});
        
    }

}

notesController.actualizar = async (id, req, res) =>{
    
    
        
       try {
        let NotesUpdate =   await notes.findById({_id:id},()=>{
            const {
                name,
                email,
                note
            } = req.body;
            let NotesUpdate = notes({
                name: name,
                email: email,
                note: note
            })
            let notesUpdate =  NotesUpdate.save();
            
        },{upsert:true})

        res.status(200).send(NotesUpdate)
       } catch (error) {
        res.status(500).send({message: error.mensage});
        
       }
       


        
        
    
    
    
}

module.exports = notesController;