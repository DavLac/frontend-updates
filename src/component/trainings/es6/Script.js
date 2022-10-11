
async function es6Exec () {
    await runScript();
}

const runScript = () => new Promise((success) => {
    console.log("------------------ EXECUTING ES6 SCRIPT ------------------");

    // -----------------------------------------------------------------------------
    console.log("\n### Block visibility ###");
    {
        var i = 10;
        var i = 20;
        console.log(`inner= ${i}`);
    }
    console.log(`outer= ${i}`);

    // -----------------------------------------------------------------------------
    console.log("\n### Classes + Constructors + Inheritance ###");
    class Animal {
        constructor(legs) {
            this.legs = legs;
        }
        walk() {
            console.log(`Mamals have ${this.legs} legs`);
        }
    }

    class Bird extends Animal {
        constructor(legs) {
            super(legs);
        }
        fly() {
            console.log('flying');
        }
    }


    let bird = new Bird(2);

    bird.walk();
    bird.fly();

    // -----------------------------------------------------------------------------
    console.log("\n### Desctructuring ###");
    let animal =['dog','cat','rabbit'];
    let [first, second, third] = animal; //destructuring
    console.log(`${first} - ${second} - ${third}`);
    let [first2] = animal; //destructuring
    console.log(first2);

    // -----------------------------------------------------------------------------
    console.log("\n### Defining objects ###");
    const key1 = "val1";
    const key2 = "val2";
    const key3 = "val3";
    // ES5 var object1 = { key1:key1, key2:key2, key3:key3 };
    const object = { key1, key2, key3 };
    console.log(object);

    // -----------------------------------------------------------------------------
    console.log("\n### Template literals ###");
    const keyA = "val1";
    const keyB = "val2";
    const keyC = "val3";
    console.log(`${keyA} - ${keyB} - ${keyC}`);

    // -----------------------------------------------------------------------------
    console.log("\n### Functionnal programming ###");
    const words = ["1st short", "2nd short", "Too long object"];
    words
        .filter(word => word.length <= 10)
        .map(word => console.log(`${word} - length=${word.length}`));

    // -----------------------------------------------------------------------------
    console.log("\n### Spread operator ###"); 
    let a=[1,2,3];
    let b=[4,5,6 , ...a];
    console.log(b);

    // -----------------------------------------------------------------------------
    console.log("\n### Rest operator ###"); 
    const add = (...a) => {
        let sum = 0;
        
        for (let a1 of a) sum += a1;
        
        return sum
    }
        
    console.log(add(5)); // returns 5
    console.log(add(1, 2)); // returns 3
    console.log(add(1, 2, 3, 4, 5)); // returns 15

    // -----------------------------------------------------------------------------
    console.log("\n### Generators : function* - yield* ###"); 
    console.log("# Generator 1"); 
    function* gen() {
        console.log('1st');
        yield 1;
        console.log('2nd');
        yield 2;
    }
    let gen1 = gen();
    console.log(gen1);
    console.log(gen1.next());
    console.log(gen1.next());
    console.log(gen1.next());

    console.log("# Generator 2"); 
    function* infinite() {
        let index = 0;
        while (true) {
        yield index++;
        }
    }

    const inf = infinite();
    console.log(inf.next().value); // 0
    console.log(inf.next().value); // 1
    console.log(inf.next().value); // 2

    // -----------------------------------------------------------------------------
    console.log("\n### For OF loop - arrays + add/del array element ###"); 
    let animals = ['cat', 'dog'];

    // adding duck
    animals.push('duck');

    // deleting cat
    const index = animals.indexOf('cat');
    animals.splice(index, 1);

    for (const a of animals) {
        console.log(a);
    } 

    // -----------------------------------------------------------------------------
    console.log("\n### For IN loop - objects ###"); 
    const dog = {
        name: "dog",
        age: 5
    };

    for (const d in dog) {
        console.log(`${d} = ${dog[d]}`);
    } 

    // -----------------------------------------------------------------------------
    console.log("\n### Map and Set - add, update, delete, list ###"); 
    console.log("# Maps");
    let map = new Map();
    map.set(1, "pig");
    map.set(2, "dog");
    map.set(3, "cat");
    map.set(1, "duck");
    map.delete(1);

    map.forEach((value, key) => {
        console.log(`${key} > ${value}`);
    });

    console.log(`Map has '1' ? > ${map.has(1)}`);
    console.log(`Map has '2' ? > ${map.has(2)}`);

    console.log("# Sets");
    // no duplicate
    let set = new Set();
    set.add("pig");
    set.add("dog");
    set.add("cat");
    set.add("pig"); // no duplicate
    set.delete("dog");

    set.forEach((val) => {
        console.log(`${val}`);
    });

    console.log(`Set has 'pig' ? > ${set.has("pig")}`);
    console.log(`Set has 'dog' ? > ${set.has("dog")}`);

    // -----------------------------------------------------------------------------
    console.log("\n### Promises ###"); 

    const callPromise = (id, seconds, success) => new Promise((resolve, reject) => {
            console.log(`Promise START: ${id} - ${seconds}sec`);
            setTimeout(() => {
                if(success === true) {
                    resolve(`Promise END on success: ${id}`);
                } else {
                    reject(`Promise END on error: ${id}`);
                }
            }, seconds * 1000);
        }
     )
     .then(response => console.log(response))
     .catch(error => console.log(error));

    // 'async' = return a promise. 'await' = wait for promise
    async function callPromiseAsync (id, seconds, success) {
        const result = await callPromise(id, seconds, success);
    }

    callPromise("1st", 2, true);
    callPromise("2nd", 4, false);
    callPromiseAsync("3rd", 3, true);
    callPromiseAsync("4th", 5, false).then(() => {
        console.log("END of promises, continue script...");
        
        // -----------------------------------------------------------------------------
        console.log("\n### END OF THE SCRIPT ###"); 
        success();
    });
});

const scripts = {
    es6Exec
}

export default scripts;