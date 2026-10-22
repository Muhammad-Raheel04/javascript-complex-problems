// combine skills of all users in one array

const users = [
    {
        name: "Ali",
        skills: ["JS", "React"]
    },
    {
        name: "Ahmed",
        skills: ["Node.js", "Express"]
    }
]

// map alone will give nested array
// we need to flat them to one level
// so instead user flatMap that applies
// both and provides a single array of skills

const allSkills = users.flatMap(user => user.skills);

console.log(allSkills)
