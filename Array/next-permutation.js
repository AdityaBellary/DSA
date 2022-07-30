var nextPermutation = (array) => {
    var smallest = Infinity
    array.forEach((element, index) => {
        if(index != 0){
            if(element < smallest){
                smallest = element
            }
        }
    });
    var newArray = []
    for(var i = 0; i < array.length; i++){
        if (array[i] != smallest){
            newArray.push(array[i])
        }
    }
    newArray.sort()
    newArray.unshift(smallest)
    console.log(newArray);
}

let array = [1,3,2]
nextPermutation(array)
let array1 = [3,2,1]
nextPermutation(array1)