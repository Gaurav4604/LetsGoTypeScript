const add = (n1: number, n2: number, showResult: boolean): number => {
    if(showResult)
        console.log(showResult);
        
    return n1 + n2;
}

const num1 = 10;
const num2 = 1.2;
const showResult = true;

const result = add(num1, num2, showResult);
console.log(result);

// objects in typescript
const person: {
    name: string,
    age: number
} = {
    name: "Gaurav",
    age: 20
};

console.log(person);

// enums
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
};


//implicit type assignment
const superPerson: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role
} = {
    name:  "Gaurav",
    age: 20,
    hobbies: ["Coding", "Sleeping"],
    role: Role.ADMIN,
};

for (const hobby of superPerson.hobbies){
    console.log(hobby.toLowerCase());
    
}