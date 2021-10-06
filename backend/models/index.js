import mongoose from 'mongoose';
mongoose.pluralize(null);

const monumentSchema = mongoose.Schema({
    name: {type : String},
    city: {type : String},
    state: {type : String},
    hint: {type : [String]},
    option: {type : [String]},
    desc: {type : String},
    coordinates: {type : [Number]},
    image: {type : String},

})

const Monument = mongoose.model('Monument', monumentSchema)

export default Monument;