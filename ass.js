// 1,Check whether a number is divisible by 3 and 5

let num=15;

if(num%3==0 && num%5==0){
    console.log("It is divisible by 3 and 5")
}
else{
    console.log("It is not divisible by 3 and 5")

}

// 2,Check whether a student passed in either subject

// let maths=35
// let science=20

let maths=35;
let science=20;
if(maths>=55 || science>=10){
    console.log("STUDENT ARE PASSED")
}
else{
    ("STUDENT ARE FAILED")
}

// 3,Login validation:

let username='admin'

let password='12345'

if("username==admin && password==12345"){
   console.log ("Login is successfull")
}
else{
    console.log("Login is unsuccesfull")
}

// 4,Check whether a username is either "admin" or "manager".

let user='admin'

if('user==admin || user==manager'){
    console.log("Access is granted")
}
else{
    ("access is denaied")
}

// 5,Check whether a person is eligible for a senior citizen discount (age 60 or above).

let age = 65;

if (age >= 60) {
    console.log("Eligible for senior citizen discount");
}
else {
    console.log("Not eligible for discount");
}

