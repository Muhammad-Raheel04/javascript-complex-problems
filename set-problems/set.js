// A JavaScript Set is a collection of
// unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive 
// values or objects.

const letters = new Set();

letters.add("R");
letters.add("a");
letters.add("h");
letters.add("e");
letters.add("e"); // each value can occur only once so this gonna skip
letters.add("l");

const text = [...letters].join("");
console.log(text)

// JavaScript Set methods
// setA.union(setB)
// setA.intersection(setB)
// setA.difference(setB)
// setA.symmetricDifference(setB)
// setA.isSubsetOf(setB)
// setA.isSupersetOf(setB)
// setA.isDisjointFrom(setB)