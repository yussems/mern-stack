const mongoose = require('mongoose')

const goalsSchema =  mongoose.Schema({
    text:{
        type:String,
        required:[true, 'please add text Value']
    }
},{
    timestamps:true
})
module.exports = mongoose.model('goals',goalsSchema)