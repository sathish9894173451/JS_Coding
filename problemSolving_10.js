// Input: citations = [3,0,6,1,5]
// Output: 3
// Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively.
// Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3.

function hIndex(citations) {
    citations.sort((a, b) => b - a); // Sort the citations array in descending order
    let hIndex = 0;
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] >= i + 1) {
            hIndex = i + 1; // Update hIndex if the current citation count is at least i + 1
        } else {
            break; // No need to continue checking since the citations are sorted
        }
    }
    return hIndex;
}

// Test the function
const citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations)); // Output: 3
