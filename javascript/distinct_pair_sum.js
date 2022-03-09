function distinctPairSum(arr, k) {
  const ans = {};

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] === k) {
      if (!(`[${arr[i]}, ${arr[i + 1]}]` in ans)) {
        ans[`[${arr[i]}, ${arr[i + 1]}]`] = [arr[i], arr[i + 1]];
      }
      i++;
    }
  }

  return Object.values(ans);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [[1, 1], [2, 0]]");
  console.log("=>", distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2));

  console.log("");

  console.log("Expecting: [[2, 8]]");
  console.log("=>", distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
}

module.exports = distinctPairSum;

/*
Initialize an empty object called ans

Loop arr.length - 1 times
  If current iteration + next iteration equals to k
    If ordered pair is not in the object ans
      Put the ordered pair in the object ans
    Increment i

Return the values of ans
*/

/*
An empty object is initialized to store the correct ordered pairs and to quickly search if a current correct ordered pairs already exists.
A for loop is created to iterate the length of arr - 1 times because the current iteration will always be compared to the next.
The IF statement checks if the ordered pair sum is equal to k and increments i so the next iteration will be skipped. This is because the only possible outcomes of the next iteration will either be a correct ordered pair that already exists or an incorrect ordered pair.
The nested IF statement checks if the ordered pair does not exists already. Then the ordered pair is stored in ans.
When the FOR loop is completed, the the values of ans are returned in an array. 
*/