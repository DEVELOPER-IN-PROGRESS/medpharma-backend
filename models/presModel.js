const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    docId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    patient: {
        type:String,
        required:true,
    },
    age:{
        type: Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    medicines: [{
        name: String,
        dosage: String,
        frequency: String,
        duration: String
    }],
    diagnosis:{
        type:String
    },
    remarks:{
        type:String
    },
    visitdate:{ type: Date, default: Date.now }

})

const prescription = mongoose.model('prescription',prescriptionSchema)
module.exports = prescription;