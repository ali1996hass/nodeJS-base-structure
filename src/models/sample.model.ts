import mongoose from 'mongoose';


const sampleSchema = new mongoose.Schema({
    field1: {
        type: String,
        required: 'this field is required'
    },
    field2: {
        type: String,
    },
    CreatedDate: {
        type: String,
    },
    CreatedBy: {
        type: String,
    },
});

mongoose.model('Sample', sampleSchema);