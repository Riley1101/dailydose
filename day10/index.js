function cook(type, meat, spoon) {
    let _spoon = spoon;
    let _meat = meat;
    let _type = type
    //
    // etc
    //
    console.log(_spoon, _meat, _type)
}

cook('Chicken', 10, 2);

cook('Pork', 4, 12);


function calc(first, second, sign) {
    if (sign === 'add') {
        return (first + second)
    } else if (sign === 'minus') {
        return (first - second)
    } else {
        return ('enter only plus or minus')
    }
}

let result = calc(1, 2, 'add')
console.log(result * 2)

let a = 10

function sum() {
    let b = 11
    console.log(b, 'i am in the function')

    function mini() {
        console.log(' i am mini function')
    }

    mini()

}
sum()

let arr = ['apple', 'orange', 'banana', 'something']
let arr2 = []
console.log(arr2)

for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i])
}

console.log(arr2)

arr2 = arr2.slice(0, 4)
console.log(arr2)

arr2 = arr2.splice(0, 2)
console.log(arr2)

function user(name, phone, age, hobby) {
    return {
        name: name,
        ph: phone,
        age: age,
        hobby: function () {
            console.log(`i like to ${hobby}`)
        }
    }
}

let person_one = user('RIley', '02847', 21, 'walk')
let person_two = user('Eileen', '02847', 21, 'sleep')

console.log(person_one)
person_one.hobby()
person_two.hobby()
let obj = {}
obj.name = 'GG'
console.log(obj)