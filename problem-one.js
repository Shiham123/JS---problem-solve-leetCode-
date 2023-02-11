// first problem solve ===========================================


const arr = [1,2,3,4]
function sum(num, target){
  for(let i = 0; i < num.length; i++){
  
    for(let j = i + 1; j < num.length; j++){
    
      let pointer = arr[i] + arr[j]
      if(pointer === target){
        return [i, j]
      }
    }
  }
  return false 
}

sum(arr, 6)

<<<<<<< HEAD
// Frist problem solution an alternative solution

function sumIndex(arr, value){
  for(let i = 0; i < arr.length; i++){
    let remainValue = value - arr[i] 

    for(let j = i + 1; j < arr.length; j++){
      if(remainValue === arr[j]) return [i, j]
    }
  }
  return false
}

sumIndex([1,2,3,4],7)
=======
>>>>>>> 21c0696bb942abafe9077955f53e12ca7e08d2fd


// second problem =========================


var removeDuplicates = function(nums) {
  let k = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++;
      nums[k] = nums[i];
    }
  }
  return k
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
<<<<<<< HEAD


=======
>>>>>>> 21c0696bb942abafe9077955f53e12ca7e08d2fd
