const mongoose=require("mongoose");


const userSchema= mongoose.Schema({
firstname:{type:String,required:true,length:({min:3,max:30})},
lastname:{type:String,required:true,length:({min:3,max:30})},
age:{type:String,required:true},
email:{type:String,required:true,unique:true,},
profileImage:{type:String, required:1},

},{
    versionKey:false,
    timestamps:true,
})

const User=mongoose.model("user",userSchema);

const bookSchema=mongoose.Schema({
    likes:{type:String,default:0},
    coverimage:{type:String,required:true},
    content:{type:String,require:true},
},{
    versionKey:false,
    timestamps:true,
})

const Book=mongoose.model("book",bookSchema);

const publicationShema=mongoose.Schema({
    name:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
})

const Publication=mongoose.model("publication",publicationShema);

const commentSchema=mongoose.Schema({
    body:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
})

const Comment=mongoose.model("comment",commentSchema);