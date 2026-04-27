import figlet from "figlet";

figlet("Raju Mankar", function(error, data){
  if(error){
    console.log("somehing went wrong")
    console.log(error)
    return;
  }
  else{
     console.log(data)
  }
 


})
function sample() {
  console.log("Aniket Mankar")
}

// module.exports = sample;