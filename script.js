let arr1 = [5, 10, 15, 20, 25];

console.log(arr1[0]);
console.log(arr1[4]);

// Because arrays begin at index 0, the beginning item of the array is at index 0 and the last item
// is at (length of the array - 1).

for (let item of arr1) {
    console.log(item);
}

arr1.push(30, 35, 40, 45, 50);
console.log(arr1);
// The new items appear at the end of the array and the array is now [5, 10, 15, 20, 25, 30, 35, 40, 45, 50].

arr1.pop();
arr1.pop();
arr1.pop();

// After using the pop() statement 3 times, the array is now [5, 10, 15, 20, 25, 30, 35].

let myString = "abracadabra";
console.log(myString.length);