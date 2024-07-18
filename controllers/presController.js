const prescription = require('../models/presModel');

exports.addPrescriptionController = async(req,res)=>{
    const {email,userId} = req.payload
    console.log(req.payload)

    const {firstName,lastName,age,gender,sickNotes,footNotes,medications} = req.body
    console.log(firstName,lastName,age,gender,
        sickNotes,footNotes,medications)
    try{
        const newPresc = new prescription ({
            docId:userId,
            patient: `${firstName} ${lastName}`,
            age,
            gender,
            medicines:medications,
            diagnosis:sickNotes,
            remarks:footNotes
        })

        await newPresc.save()
        console.log(newPresc)
        res.status(200).json({message: 'Ok.'})
    }catch(error){
        res.status(500).json(error)
    }
}