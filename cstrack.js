//binary search function
//assumes string is sorted AND string contains char
let binarySearch  = (string,char)=>{
  let start = 0
  let end = string.length - 1
  let guessPosition = parseInt((end - start)/2)
  let counter = 0
  while(start != end){
    console.log(`start is ${start} * end is ${end} * guessPosition is ${guessPosition}`);
    // console.log(string[guessPosition] > char); //this is true
    // console.log(s);
    if(string[guessPosition]<char){
      console.log("guess too low");
      start = guessPosition
      guessPosition = parseInt(start + (end - start)/2)
    }
    else if(string[guessPosition]> char){
      console.log("too high");
      end = guessPosition
      guessPosition = parseInt(start + (end - start)/2)
    }
    else if(string[guessPosition]==char){
      console.log("found char at " + guessPosition);
      return true
    }
    // else {
    //   console.log("error not found");
    //   return false
    // }
    // break;
    counter ++
    if(counter > 1000) {return "ERROR"}
  }
  console.log( "loop finished")
  return false
  // console.log(guessPosition);
  // return "done"
}

// console.log(binarySearch("wow","a"));
let string = "aabeeeeeeffhhiiiijkmmooorsssssstttttttwww"
console.log(binarySearch(string,"k"));


// // .includes //remake this string method
//
let stringIncludes = (string,char)=>{
  // let matches = false;
  for(i=0; i< string.length; i++){
    if(string[i] == char){return true}
  }
  return false
}
//
// console.log(stringIncludes("something", "i"))
// console.log(stringIncludes("something", "y"))
