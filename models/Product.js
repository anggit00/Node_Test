const mongoose = require ("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title : { type: String, required:true, unique:true},
        desc : {type: String, require:true},
        img: {type:String, require:true},
        categotieas: {type:Array },
        size: {type:string},
        color: {type:string},
        Price: {type:Number, require:true},
        },
        {timestamps : true}
    );

    module.exports = mongoose.model("Product", ProductSchema)