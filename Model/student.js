const mongoose=require("mongoose");


const Student=mongoose.Schema({
    usn:{type:String,required:true},
    name:{type:String,required:true},
    email:{type:String,required:true},
    contact_number:{type:String,required:true},
    attended_class:{type:String,required:true},
    percent:{type:String,required:true}
})


module.exports=mongoose.model("Students",Student);