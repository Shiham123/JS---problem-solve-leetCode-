// first problem solve ===========================================

/*
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
*/


// second problem =========================

/*
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
*/