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