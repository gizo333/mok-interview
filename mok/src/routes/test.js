function findFirstUniqueNumber(arr) {
  const countMap = new Map();
 
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (const num of arr) {
    if (countMap.get(num) === 1) {
      return num;
    }
  }
  return null;
}

const arr = [4, 2, 3, 4, 2, 1, 1, 2, 3, 66, 5, 3];
const firstUnique = findFirstUniqueNumber(arr);
console.log(firstUnique);
