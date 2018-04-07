// start with strings, numbers and booleans
let age1 = 21;
let age2 = age1;
console.log(age1, age2);
age1 = 24;
console.log(age1, age2);

let name1 = "Kapil";
let name2 = name1;
console.log(name1, name2);
name1 = "Pallavi";
console.log(name1, name2);

let bool1 = true;
let bool2 = bool1;
console.log(bool1, bool2);
bool1 = false;
console.log(bool1, bool2);

// Let's say we have an array
const players = ["Pallavi", "Kapil", "Dinesh", "Sakshi", "Anita"];
console.log("Here's players array: ");
console.log('players: ', players);

// and we want to make a copy of it.
const team = players;
console.log("Here's team 1: ");
console.log('team: ', team);

// You might think we can just do something like this:
// team[3] = "Sandeep";
console.log(players, team);

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
console.log("Here's team 2: ");
console.log('team2: ', team2);

// one way

// or create a new array and concat the old one in
const team3 = [].concat(players);
console.log("Here's team 3: ");
console.log('team3: ', team3);

// or use the new ES6 Spread
const team4 = [...players];
console.log("Here's team 4: ");
console.log('team4: ', team4);
team4[4] = "Sandeep";
console.log('team4: ', team4);

const team5 = Array.from(players);
console.log("Here's team 5: ");
console.log('team5: ', team5);
team5[4] = "Sandbox ";
console.log('team5: ', team5);



// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: "Kapil",
    age: 24
};
console.log("Here's person object: ");
console.log('person: ', person);

// and think we make a copy:
const captain = person;
captain.name = "Pallavi";
captain.number = 99;
console.log("Here's captain object: ");
console.log('person: ', person);
console.log('captain: ', captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, {batch: 'SeaGulls'});
console.log('person: ', person);
console.log('captain: ', captain);
console.log('cap2: ', cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};
console.log('cap3: ', cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const kap = {
    name: 'Kapil',
    age: 24,
    social: {
        twitter: 'kapil5harma',
        github: 'kapil5harma'
    }
}
const kap2 = {...kap};
console.log("\n Copied");
console.log('kap: ', kap);
console.log('kap2: ', kap2);
// But if you change social.twitter of kap2, it'll change social.twitter of kap because spread and Object.assign, both copy  the object only till one level.
kap2.social.twitter = "changed-while-spreading";
console.log("\n Changed");
console.log('kap: ', kap.social);
console.log('kap2: ', kap2.social);


// Little hack to actually deep copy an object but it takes a toll on performance this way, if object has a very large number of entries. So think before using this hack. 
const kap3 = JSON.parse(JSON.stringify(kap));
console.log("\n Copied using hack: ");
console.log('kap3: ', kap3);
// Now if you change social.twitter of kap3, it won't change social.twitter of kap
kap3.social.twitter = "not-changed-when-copied-using-hack";
console.log("\n Not changed, if using the hack: ");
console.log('kap: ', kap.social);
console.log('kap3: ', kap3.social);

