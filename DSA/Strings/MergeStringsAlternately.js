// This type of problem usually appears under:

// 1️⃣ Strings Manipulation
// 2️⃣ Array Manipulation
// 3️⃣ Two Pointer Technique (sometimes)
// 4️⃣ Pattern / Frequency counting
// 5️⃣ Data Compression logic

// String Manipulation
var word1 = "abc";
var word2 = "pqr";
//Output: "apbqcr"
var output = "";

for (let i=0; i<word1.length; i++){
    output += word1[i] + word2[i]
}
console.log(output);
