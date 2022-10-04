import mongoose from 'mongoose';
import PassportLocalMongoose from 'passport-local-mongoose';
//npm install passport-local-mongoose
const { PassportLocalSchema} = mongoose;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: String,
    username: String, 
    emailAddress: String
},{
    timestamps:true,
    collection: 'users'
});

//For password Encryption 
UserSchema.plugin(PassportLocalMongoose);
export default mongoose.model('User', UserSchema);