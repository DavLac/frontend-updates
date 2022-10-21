
async function es6Exec () {
    await runScript();
}

const runScript = () => new Promise((success) => {
    console.log("------------------ EXECUTING ES6 SCRIPT ------------------");

    // -----------------------------------------------------------------------------
    console.log("\n### Block visibility ----------------------------------------------------");
    /*
        var = global scope, same memory allocation
        let/const = Script and Block memory allocation
    */
    console.log("# VAR");
    var i = 5;  // ---> global scope
    {
        var i = 10; // ---> global scope
        console.log(`inner block= ${i}`); // 10
    }
    console.log(`outer block= ${i}`); // 10

    var f = 10;
    function myFunc () {
        var f = 20;
        console.log(`inner func= ${f}`); // 20
        function myFuncChild () {
            var f = 30;
            console.log(`inner func child= ${f}`); // 30
        }
        myFuncChild();
    }
    myFunc();
    console.log(`outer func= ${f}`); // 10

    console.log("# LET and CONST");
    const o = 1; // Script scope
    {
        let o = 2; // Block scope
        {
            const o = 3; // Block scope
            {
                let o = 4; // Block scope
                console.log(o); // 4
            }
            console.log(o); // 3
        }
        console.log(o); // 2
    }
    console.log(o); // 1

    // -----------------------------------------------------------------------------
    console.log("\n### const and Object.freeze ----------------------------------------------------");
    const constObj = {key1: 'val1'};
    constObj.key1 = 'val2'; // can modify it
    Object.freeze(constObj);
    // constObj.key1 = 'val3'; -> not possible : TypeError: Cannot assign to read only property 'key1' of object '#<Object>'

    // -----------------------------------------------------------------------------
    console.log("\n### Closure - inner functions ----------------------------------------------------");
    function init() {
        var name = 'Mozilla'; // name is a local variable created by init
        function displayName() {
          // displayName() is the inner function, a closure
          console.log(name); // use variable declared in the parent function
        }
        displayName(); // <- defined
      }
      // displayName(); // <- not defined, will throw : 'displayName' is not defined error
      init();

    // -----------------------------------------------------------------------------
    console.log("\n### Hoisting ----------------------------------------------------");
    console.log("# Function - call function before being declared");
    catName("Tiger"); // call function before being declared
    function catName (name) {  // not working with arrow functions !!!! -> throw UnReferenced error
        console.log(`My cat's name is ${name}`);
    }

    console.log("# Variables");
    console.log(`Before init = ${num}`); // Returns 'undefined' from hoisted var declaration (not 6)
    var num = 6; // Initialization and declaration. ---> NOT WORKING WITH LET -> throw UnRefferenced error
    console.log(`After init = ${num}`); // 6

    // -----------------------------------------------------------------------------
    console.log("\n### .reduce ----------------------------------------------------");
    const intArray = [1, 2, 3, 4];

    const sum = intArray.reduce((previous, current) => previous + current);
    console.log(`Sum with reduce of ${intArray} = ${sum}`);

    // -----------------------------------------------------------------------------
    console.log("\n### static keyword ----------------------------------------------------");
    class ClassWithStaticMethod {
        static staticProperty = 'someValue';
        static staticMethod() {
          return 'static method has been called.';
        }
        static {
          console.log('Call class static block');
        }
      }
      
      console.log(`Call static class PROPERTY= ${ClassWithStaticMethod.staticProperty}`);
      console.log(`Call static class METHOD= ${ClassWithStaticMethod.staticMethod}`);
      /*
        output:
        "Call class static block" -> static block, run first
        "Call static class PROPERTY= someValue"
        "Call static class METHOD= static method has been called."
      */

    // -----------------------------------------------------------------------------
    console.log("\n### Classes + Constructors + Class methods + Inheritance ----------------------------------------------------");
    class Animal {
        constructor(legs) {
            this.legs = legs;
        }
        walk() {
            console.log(`Parent method call : Mamals have ${this.legs} legs`);
        }
    }

    class Bird extends Animal {
        constructor(legs) {
            super(legs);
        }
        fly() {
            console.log('Child method call : flying');
        }
    }

    let bird = new Bird(2);

    console.log("Parent method called from child class");
    bird.walk(); // Parent method call : Mamals have 2 legs
    bird.fly(); // Child method call : flying

    // -----------------------------------------------------------------------------
    console.log("\n### Desctructuring ----------------------------------------------------");
    let animal =['dog', 'cat', 'rabbit', 'duck'];
    let [first, second, third] = animal; //destructuring
    console.log(`Desctructuring 3 first elements of array ${animal} -> ${first} - ${second} - ${third}`); // dog - cat - rabbit
    let [first2] = animal; //destructuring
    console.log(`Desctructuring first element of array ${animal} -> ${first2}`); // dog

    // -----------------------------------------------------------------------------
    console.log("\n### Defining objects with key = val ----------------------------------------------------");
    const key1 = "val1";
    const key2 = "val2";
    const key3 = "val3";
    // ES5 var object1 = { key1:key1, key2:key2, key3:key3 }
    const object = { key1, key2, key3 };
    console.log(object); // {key1:val1, key2:val2, key3:val3}

    // -----------------------------------------------------------------------------
    console.log("\n### Template literals ----------------------------------------------------");
    const keyA = "val1";
    const keyB = "val2";
    const keyC = "val3";
    console.log(`${keyA} - ${keyB} - ${keyC}`);

    // -----------------------------------------------------------------------------
    console.log("\n### Functionnal programming map/filter ----------------------------------------------------");
    const words = ["1st short", "2nd short", "Too long object"];
    words
        .filter(word => word.length <= 10)
        .map(word => console.log(`${word} - length=${word.length}`))
        .sort();

    // -----------------------------------------------------------------------------
    console.log("\n### Spread operator ----------------------------------------------------"); 
    let a=[1,2,3];
    let b=[4,5,6 , ...a];
    console.log(b); // 4, 5, 6, 1, 2, 3

    const obj1 = { key1: 'val1', key2: 'val2' };
    console.log(obj1); // {key1:val1, key2:val2}
    const obj2 = { key3: 'val3', ...obj1 }; // spread operator
    console.log(obj2); // {key3:val3, key1:val1, key2:val2}
    const obj3 = { key3: 'val3', obj1 }; // spread operator
    console.log(obj3); // {key3:val3, obj1{key1:val1, key2:val2}}
    console.log([...'batman']); // ['b', 'a', 't', 'm', 'a', 'n']

    // -----------------------------------------------------------------------------
    console.log("\n### Rest operator ----------------------------------------------------"); 
    const add = (...a) => {
        let sum = 0;
        
        for (let a1 of a) sum += a1;
        
        return sum
    }
        
    console.log(add(5)); // returns 5
    console.log(add(1, 2)); // returns 3
    console.log(add(1, 2, 3, 4, 5)); // returns 15

    // -----------------------------------------------------------------------------
    console.log("\n### Generators : function* - yield* ----------------------------------------------------"); 
    console.log("# Generator 1"); 
    function* gen() {
        console.log('1st');
        yield 1;
        console.log('2nd');
        yield 2;
    }
    let gen1 = gen();
    console.log(gen1); // generator status = suspended
    console.log(gen1.next()); // {value=1, done=false}
    console.log(gen1.next()); // {value=2, done=false}
    console.log(gen1.next()); // {value=undefined, done=true}

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
    console.log("\n### For OF loop - arrays + add/del array element ----------------------------------------------------"); 
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
    console.log("\n### For IN loop - objects ----------------------------------------------------"); 
    const dog = {
        name: "dog",
        age: 5
    };

    console.log("Stream over object keys with FOR..IN");
    for (const d in dog) { // with FOR..IN
        console.log(`${d} = ${dog[d]}`);
    } 

    console.log("Stream over object keys with FOR..OF equivalent");
    for (const [key, value] of Object.entries(dog)) { // equivalent with FOR..ON
        console.log(`${key} = ${value}`);
    } 

    // -----------------------------------------------------------------------------
    console.log("\n### try, catch, finally ----------------------------------------------------"); 

    try {
        console.log("Try: throwing new Error('My error')");
        throw new Error("My error");
    } catch (error) {
        console.log(`Error catched: ${error}`);
    } finally {
        console.log("Execute finally");
    }

    // -----------------------------------------------------------------------------
    console.log("\n### Map and Set - add/update/delete list ----------------------------------------------------"); 
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
    console.log("\n### Function call/apply/bind ----------------------------------------------------"); 
    console.log("## simple object");
    const person1 = {name: 'bob', age: 18};
    const person2 = {name: 'martin', age: 24};
    
    const arrFunc = () => console.log(`args name = ${this.name}`);
    function func () { console.log(`args name = ${this.name}, args=${JSON.stringify(arguments)}`);} // display arguments of func

    console.log("# CALL");
    // arrFunc.call(person1); --> will not recognize person1, arrow functions have their own context
    // throw TypeError: Cannot read properties of undefined (reading 'name')

    // Call function with selected arg using this
    func.call(person1); //args name = bob, args={}
    func.call(person1, 'hello', 'world'); // args name = bob, args={"0":"hello","1":"world"}
    func.call(person2, 'hello', 'world'); // args name = martin, args={"0":"hello","1":"world"}

    console.log("# APPLY");
    func.apply(person1); //args name = bob, args={}
    func.apply(person1, ['hello', 'world']); // apply: can only have 1 array args. if not will have this error : TypeError: CreateListFromArrayLike called on non-object

    console.log("# BIND");
    const bindPerson1 = func.bind(person1); //do nothing
    const bindPerson1WithArgs = func.bind(person1, 'hello', 'world'); // do nothing
    bindPerson1(); // call bind
    bindPerson1WithArgs(); // call bind with args

    console.log("## class");
    const Shape = function(shapeName) {
        this.shapeName = shapeName;
        this.showName1 = function() { console.log(this.shapeName); };
        this.showName2 = () => { console.log(this.shapeName); };
      };
      
      const circle = new Shape('Circle');
      const square = new Shape('Square');
      
      circle.showName1(); // Circle
      circle.showName2(); // Square
      
      // The regular function can have its 'this' value changed, but the arrow function cannot
      circle.showName1.call(square); // Square (because "this" is now the square object)
      circle.showName2.call(square); // Circle
      
      circle.showName1.apply(square); // Square (because 'this' is now the square object)
      circle.showName2.apply(square); // Circle
      
      circle.showName1.bind(square); // Square (because 'this' is now the square object)
      circle.showName2.bind(square); // Circle
      
      var showNameFromPic1 = circle.showName1;
      // showNameFromPic1(); // undefined (because 'this' is now the pic object)
      
      var showNameFromPic2 = circle.showName2;
      showNameFromPic2(); // Circle

    // -----------------------------------------------------------------------------
    console.log("\n### Proxy - override basic operations ----------------------------------------------------"); 
      const handler = {
        get: (target, name) => (name in target) ? target[name] : "not found"
      }; // if target is (not) existing, do something
      
      const myObj = new Proxy({}, handler);
      myObj.prop1 = 2;
      myObj.prop2 = undefined;
      
      console.log(myObj.prop1, myObj.prop2); //  2, undefined
      console.log('prop3' in myObj, myObj.prop3); //  false, 'not found' --> prop3 not found

    // -----------------------------------------------------------------------------
    console.log("\n### Promises ----------------------------------------------------"); 

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
     .then(response => console.log(`Then success response: ${response}`))
     .catch(error => console.log(`Catch error response: ${error}`));

    // 'async' = return a promise. 'await' = wait for promise
    async function callPromiseAsync (id, seconds, success) {
        return await callPromise(id, seconds, success);
    }

    callPromise("1st", 2, true);
    callPromise("2nd", 4, false);
    callPromiseAsync("3rd", 3, true);
    callPromiseAsync("4th", 5, false).then(() => {
        console.log("END of promises, continue script...");
        
        // -----------------------------------------------------------------------------
        console.log("\n### Promise.race : timeout ----------------------------------------------------"); 
        const p1Call = (id, duration) => new Promise((resolve) => {
            console.log(`@ Promise ${id} START with ${duration}sec duration`);
            setTimeout(() => {
                resolve(`Resolve promise ${id}`);
            }, duration*1000)
        });
        const p2Timeout = (id, timeout) => new Promise((resolve, reject) => {
            console.log(`@ Promise-timeout ${id} START with ${timeout}sec duration`);
            setTimeout(() => {
                reject(`Reject promise ${id} (TIMEOUT)`);
            }, timeout*1000)
        });

        async function timeout (id, duration, timeout) {
            console.log(`@@ Promise.race ${id} START : main call ${duration}sec duration and ${timeout}sec timeout`);
            return await Promise.race([p1Call(id, duration), p2Timeout(id, timeout)]);
        } 

        timeout("1st", 1, 5).then(response => console.log(`@@ Promise.race 1st FINISHED: ${response}`));
        timeout("2nd", 2, 1)
            .catch(error => {
                console.log(`@@ Promise.race 2nd FINISHED: ${error}`);
                console.log("END of promise.race, continue script...");

                // -----------------------------------------------------------------------------
                console.log("\n### END OF THE SCRIPT ###"); 
                success();
                });
    });
});

const scripts = {
    es6Exec
}

export default scripts;