const findTheOldest = function(people) {
    let currentYear = (new Date().getFullYear());
    for(person of people) {
        if("yearOfDeath" in person) person.lifeLength = person.yearOfDeath - person.yearOfBirth;
        else person.lifeLength = currentYear - person.yearOfBirth;
    }
    people.sort((a, b) => a.lifeLength < b.lifeLength ? 1 : -1);
    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
