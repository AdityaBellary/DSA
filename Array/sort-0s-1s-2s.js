function sortNums(array){
    let low = 0
    let mid = 0
    let high = array.length - 1
    while(mid <= high){
        if (array[mid] == 0){
            [array[low], array[mid]] = [array[mid], array[low]]
            mid += 1
        }else if (array[mid] == 1){
            mid += 1
        }else{
            [array[mid], array[high]] = [array[high], array[mid]]
            high -= 1
        }
    }
    return array
}

var array = [2,0,2,1,1,0]
console.log(sortNums(array));