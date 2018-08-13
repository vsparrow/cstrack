let firstHalf =  [1, 2, 6, 7, 8]
let secondHalf =  [3, 4, 5, 9, 10]


function findMin(a1,a2){ //take 2 arrays find lowest
  //both arrays are already sorted!
  let min1 = a1[0]
  let min2 = a2[0]
  let min = null
  // min1 < min2 ? min = min1 : min = min2
  min1 < min2 ? min = a1.shift() : min = a2.shift()
  return min
}

// console.log(findMin(firstHalf, secondHalf));
console.log(firstHalf);
console.log(secondHalf);


let merge = (a1,a2)=>{
  let sorted = []
  while(a1.length > 0 && a2.length > 0){
  //go through each array and find min overall
  sorted.push(findMin(a1,a2))
  //push min to new array
  }
  //return merged array
  return sorted.concat(a1).concat(a2)
}

console.log(merge(firstHalf,secondHalf));
// console.log(firstHalf);
// console.log(secondHalf);



// let unsortedArray = [5, 6, -1, 1, 3]
// let sorted = []
//
//
// //find minimum of array and remove it
// //iteration is better than recursive, why?
// //  we need to return the minimum while maintaining the original array less minimum
// let minAndRemove = (array)=>{
//   // console.log(array);
//   //base case
//   if(array.length == 1){return array.pop()}
//   let minIndex = 0
//   for(i=1;i<array.length;i++){
//     if (array[i] < array[minIndex]){minIndex = i}
//   }
//   // console.log(` minIndex is ${array[minIndex]} at ${minIndex}`);
//   let min = array[minIndex]
//   array.splice(minIndex,1) //remove element
//   return min
// }
//
// // console.log(minAndRemove(unsortedArray)); //-1
// // console.log(unsortedArray);   //5,6,1,3 after above
// let selectSort = (array)=>{
//   let sorted = []
//   while(array.length > 0){
//     sorted.push(minAndRemove(array))
//   }
//   return sorted
// }
// //this resursive selectSort works, but relies on external array to push to
// // let selectSort = (array)=>{
// //   //find minimmim
// //   //push minimum to sorted array
// //   //base case
// //   if(array.length < 2 ) {sorted.push(array[0]); return "done"}
// //   sorted.push(minAndRemove(array))
// //   // return sortedArray
// //   return selectSort(array)
// // }
//
// console.log(selectSort(unsortedArray));
// console.log(sorted);
// console.log(unsortedArray);
//
//
// let sumUpTo=(n)=>{
//   if(n>1) {
//     return (sumUpTo(n-1)+n)
//   }
//   else {return n}
// }
//
// console.log(sumUpTo(5))

// let sayDownFrom= (n)=>{
//   console.log(n);
//   if(n>1){return sayDownFrom(n-1)}
//   else {    return true  }
// }
//
// sayDownFrom(5)
//

// //binary search function
// //assumes string is sorted AND string contains char
// //there is an error if word NOT found
// let binarySearch  = (string,char)=>{
//   let start = 0
//   let end = string.length - 1
//   let guessPosition = parseInt((end - start)/2)
//   let counter = 0
//   while(start != end){
//     console.log(`start is ${start} * end is ${end} * guessPosition is ${guessPosition}`);
//     // console.log(string[guessPosition] > char); //this is true
//     // console.log(s);
//     if(string[guessPosition]<char){
//       console.log("guess too low");
//       start = guessPosition
//       guessPosition = Math.round((start + (end - start)/2))
//     }
//     else if(string[guessPosition]> char){
//       console.log("too high");
//       end = guessPosition
//       guessPosition = parseInt(start + (end - start)/2)
//     }
//     else if(string[guessPosition]==char){
//       console.log("found char at " + guessPosition);
//       return true
//     }
//     // else {
//     //   console.log("error not found");
//     //   return false
//     // }
//     // break;
//     counter ++
//     if(counter > 20) {return "ERROR"}
//   }
//   console.log( "loop finished")
//   return false
//   // console.log(guessPosition);
//   // return "done"
// }
//
// // console.log(binarySearch("wow","a"));
// let string = "aabeeeeeeffhhiiiijkmmooorsssssstttttttwww"
// console.log(binarySearch(string,"l"));
//
//
// // // .includes //remake this string method
// //
// let stringIncludes = (string,char)=>{
//   // let matches = false;
//   for(i=0; i< string.length; i++){
//     if(string[i] == char){return true}
//   }
//   return false
// }
// //
// // console.log(stringIncludes("something", "i"))
// // console.log(stringIncludes("something", "y"))
