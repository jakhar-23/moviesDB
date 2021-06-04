const mongoose = require ('mongoose')
mongoose.connect("mongodb://localhost:3000/MoviesDB", {useNewUrlParser: true, useUnifiedTopology: true});





const moviesSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    image:
    {
        data: Buffer,
        contentType: String
    
    },
    summary: 
    {
        type: String,
        required: true
    }


        
})

const Movie = mongoose.model("Movie", moviesSchema);

Movie.create({
    name: "Harry Potter and the Order of the Phoenix",
    img: "https://bit.ly/2IcnSwz",
    summary: "Harry Potter and Dumbledore's warning about the return ofLord Voldemort is not heeded by the wizard authorities who, in turn, look toundermine Dumbledore's authority at Hogwarts and discredit Harry.",
              
              
  function(err, cat){
   if(err){
       console.log(err);

   }else{
       console.log(cat);
   }
}   
});
Movie.create({
    name: "The Lord of the Rings: The Fellowship of the Ring",
img: "https://bit.ly/2tC1Lcg",
summary: "A young hobbit, Frodo, who has found the One Ring thatbelongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.",


 function(err, cat){
   if(err){
       console.log(err);

   }else{
       console.log(cat);
   }
}   
});
Movie.create({
    name: "Avengers: Endgame",
    img: "https://bit.ly/2Pzczlb",
    summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, theemaining Avengers -- Thor, Black Widow, Captain America, and Bruce Banner --must figure out a way to bring back their vanquished allies for an epic showdown "



,  function(err, cat){
   if(err){
       console.log(err);

   }else{
       console.log(cat);
   }
}   
});
Movie.find({}, function(err, movies){
    if(err){
        console.log("OH NO , ERROR!");
        console.log(err);
    }else{
       
        console.log(movies);
    }
});