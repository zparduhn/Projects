var randomArray = function(size){
  var array = [];
  for (var i = 0; i < size; i++) {
    array.push(parseInt(Math.random() * 100));
  }
  return array;
}

//console.log("test:", randomArray(5))

// function bubbleSort(array){
//   function swap(a, b){
//     var tmp = array[a];
//     array[a] = array[b];
//     array[b] = tmp;
//   }
//   var swapped = true;
//   while(swapped){
//     swapped = false;
//     for (var i=0; i<array.length-1; i++){
//       if(array[i] > array[i+1]){
//         swap(i, i+1)
//         swapped = true;
//       }
//     }
//   }
// }

// var a = randomArray(50000);
// console.time("bubbleSort");
// bubbleSort(a);
// console.timeEnd("bubbleSort");
//console.log("sorted with bubble sort: ", a)
//O(n^2) - quadratic

function bucketSort(array){
  //Phase 1:
  var buckets = [];
  for(var number=0; number <=100; number++){
    buckets[number] = 0;
  }
  //phase 2:
  for (var i=0; i <array.lenght; i++){
    var number = array[i];
    buckets[number]++;
  }
  //pashe 3:
  var index=0;
  for(var number =0; number<=100; number ++){
    var quantity = buckets[number]
    for (var count = 0; count<quantity; count++){
      array[index] = number;
      index++;
    }
  }
}

var a = randomArray(100000000);
console.time("bucketSort");
bucketSort(a);
console.timeEnd("bucketSort");
