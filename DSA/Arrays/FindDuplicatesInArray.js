const duplicateArray = [5, 10, 15, 5, 10, 20];
const duplicates = [];
const count = {};

// Step 1: Count occurrences manually
for (let i = 0; i < duplicateArray.length; i++) {
  const item = duplicateArray[i];

  // If first time seeing the item, initialize count
  if (count[item] === undefined) {
    count[item] = 1;
  } else {
    count[item]++;

    // Step 2: Add to duplicates if count becomes 2 (only once)
    if (count[item] === 2) {
      duplicates.push(item);
    }
  }
}

console.log("Duplicates:", duplicates);
