var add = function (n1, n2, showResult) {
    if (showResult)
        console.log(showResult);
    return n1 + n2;
};
var num1 = 10;
var num2 = 1.2;
var showResult = true;
var result = add(num1, num2, showResult);
console.log(result);
// objects in typescript
var person = {
    name: "Gaurav",
    age: 20
};
console.log(person);
// enums
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
//implicit type assignment
var superPerson = {
    name: "Gaurav",
    age: 20,
    hobbies: ["Coding", "Sleeping"],
    role: Role.ADMIN
};
for (var _i = 0, _a = superPerson.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
}
