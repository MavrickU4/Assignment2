import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    name: String, 
    year: String, 
    director: String,
    genre: String,
    runtime: Number
}, {
    timestamps: true,
    collection: 'contacts'
});

export default mongoose.model('Contacts', ContactSchema);