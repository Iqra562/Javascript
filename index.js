// find min and max 

// const array = [9,3,5,6,3,8,9];

function FindMinAndMax(arg){
    let max = array[0]
    let min = array[0]
    for(let i =1 ; i< array.length; i++){
    if(arg[i] > max){
     max = arg[i]
    }
    if(arg[i] < min){
    min = arg[i]
    }
    }
    return{
        max,min
    }
}
const result = FindMinAndMax(array)

console.log(result.max,result.min)


// Remove duplicates from an array 

const array = [2,3,4,5,2,4,6,7,5,7,6]
const cleanArray = [];

for(let i=1;i< array.length; i++){
  if(!cleanArray.includes(array[i])){
  cleanArray.push(array[i])
  }
}

console.log(cleanArray)

// indexOf() always returns the index of the first occurrence of the value in   array.
function removeDuplicates(arr){
return arr.filter((item,index)=>arr.indexOf(item) === index);
}

const arrayWithDuplicates = [1,2,4,3,2,5,1,5,4,7];
const uniqueArray = removeDuplicates(arrayWithDuplicates)
console.log(uniqueArray)


// REMOVE duplicates from sorted array 

// Why This Is Powerful:

// Time complexity: O(n)
// Space complexity: O(1)
// (no extra array created)

// it is more efficient than:
// filter + indexOf → O(n²)

// Set → O(n) but uses extra memory

function removeDuplicatesFromSortedArray(nums){
    let uniqueIndex = 1;
    for(let currentIndex = 1; currentIndex  < nums.length;currentIndex ++){
      if(nums[currentIndex] !== nums[currentIndex -1]){
  nums[uniqueIndex] = nums[currentIndex];
  uniqueIndex++
      }
    }
console.log(uniqueIndex,'unique')
return uniqueIndex;
}

let nums1= [1,1,1,2,2,3,3,3,3,3,4,4,4,4,5,5,5,5]
let nums2= [0,1,1,2]

let length1 =removeDuplicatesFromSortedArray(nums1) 
// let length2 = removeDuplicatesFromSortedArray(nums2)
console.log(nums1.slice(0,length1))
// console.log(nums2.slice(0,length2))
