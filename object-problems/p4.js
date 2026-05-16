const scores = {
    math: 85,
    science: 92,
    english: 78,
    history: 88
};

// Using Object methods, create:
// 1. Array of subject names
// 2. Array of score values
// 3. Array of [subject, score] pairs
// 4. New object with all scores increased by 5
// 5. Object containing only scores >= 85

const subjectNames=Object.keys(scores);
console.log(subjectNames);

const scoreValues=Object.values(scores);
console.log(scoreValues);

const subjectScorePairs=Object.entries(scores);
console.log(subjectScorePairs);

const incrementScores=Object.fromEntries(
    Object.entries(scores).map(([item,value])=>[item,value+5]) 
)
console.log(incrementScores);

const scoresGreaterThan85=Object.fromEntries(
    Object.entries(scores).filter(([_,value])=>value>=85)
)
console.log(scoresGreaterThan85);