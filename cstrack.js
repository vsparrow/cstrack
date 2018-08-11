// .includes //remake this string method

let includes = (string,char)=>{
  // let matches = false;
  for(i=0; i< string.length; i++){
    if(string[i] == char){return true}
  }
  return false
}

console.log(includes("something", "i"))
console.log(includes("something", "y"))
