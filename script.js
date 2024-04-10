function stringChop(str, size) {
    // If the input string is null or empty, return an empty array
    if (!str) return [];

    // Initialize an empty array to store the chunks
    const chunks = [];

    // Loop through the input string with a step of 'size'
    for (let i = 0; i < str.length; i += size) {
        // Extract a chunk of length 'size' starting from index 'i'
        const chunk = str.slice(i, i + size);
        // Push the chunk into the 'chunks' array
        chunks.push(chunk);
    }

    return chunks;
}

// Example usage:
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size."), 10);
alert(stringChop(str, size));
