const {Schema,model}=require('mongoose');

const FoodSchema=new Schema({
    title:String,
    image:String,
    description:String,
    tags:[String]
})

const Feed= model ("Feed",FoodSchema);

module.exports={
    Feed
}