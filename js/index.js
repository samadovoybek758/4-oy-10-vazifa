// Obyektlar aloqador masalala.
// 1-masala
// let person ={
//     name : "Ilhom",
//     age : "24",
//     work : "web developer",
// }
// console.log(person);


// 2-masala
// let person ={
//     name : "Ilhom",
//     age : "24",
//     work : "web developer",
// }
// person.name= "vali";

// console.log(person);


// 3-masala
// let person ={
//     name : "Ilhom",
//     age : "24",
//     work : "web developer",
// }
// person.homeLOcation = "Amir Temur strret"

// console.log(person);


// 4-masala
// let person ={
//     name : "Ilhom",
//     age : "24",
//     work : "web developer",
// }
// delete person.work;
// console.log(person);


// 5-masala
// let person ={
//     name : "Ilhom",
//     age : "24",
//     work : "web developer",
// }
// person.call = {
//     mobil : +9989951234567,
//     call : +998901234567
// }
// console.log(person);


// 6-masala
// let person = {
//     name : "Ilhom",
//     age : "24",
//     work : "web developer",
// }
// for (let a in person) {
//     console.log(a + ':', person[a]);
// }

// 7-masala
// let person ={
//     name : "Ilhom",
//     age : "24",
//     work : "web developer",
// }
// console.log(person.age);



// 8-masala
// function a(name,age,work) {
//     let res ={}
//     res.name = name;
//     res.age = age;
//     res.work = work
    
//     return res
// }
// console.log(a("vali",24,"web developer"));



// Umumlashtiruvchi masalalar.



// 1-masala
// function tree(str) {
//     let res = str.split("");

//     let result =0;
//     for (let i = 0; i < res.length; i++) {
//         if (res[i]==3) {
//             result++
//         }
        
//     }
//     return result
// }
// console.log(tree("43566473"));


// 2-masala
// function tub(n) {
//     let result = [];
//     for (let i = 1; i < n; i++) {
//         if (i%2==1) {
//             result.push(i)
//         }
//     }

//     return result
// }
// console.log(tub(9));


// 3-masala
// function delateelement(str) {
//     let res = str.split("")

//     let result = [];
//     for (let i = 0; i < res.length; i++) {
//         if (res[i] != "*") {
//             result.push(res[i])
//         }
//     }
//     let str2 =result.join("")
//     return str2
// }
// console.log(delateelement("sa*l*om*"));


// 4-masala
// function delateelement(str) {
//     let res = str.split("");
//     res.pop();
//     res.pop();
//     let str2 = res.join('')

//     return str2
// }
// console.log(delateelement("salom"));

// 5-masala
let arr = [1,5,8,3,456,5]



// 6-masala
// function change(str) {
//     let res =str.split("");
//     return res
// }
// console.log(change("salom"));



// 7-masala
// let arr =[1,2,3,4,5,6]
// function change(arr) {
//     let res =arr.join("");
//     return res
// }
// console.log(change(arr));


// 8-masala
// let str ="salom hammaga men dasturchiman";
// function find(str,element) {
//     let res = str.includes(element)

//     return res
// }
// console.log(find(str,"men"));


// 9-masala


// 10-masala
// let arr =['salom',"hello","world","people"];
// function add(arr) {
//     let str = ""
//     arr.forEach( function(value) {
//         str =str.concat(value)
//     });
//     return str
// }
// console.log(add(arr));


// 11-masala
// let arr =['helloeverdsf','wordl','people']
// function most(arr) {
//     let maxuzunlik = 0;
//     let uzunsuz = '';
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i].length > maxuzunlik) {
//             maxuzunlik = arr[i].length;
//             uzunsuz = arr[i]
//        }
//     }
//     return uzunsuz
// }
// console.log(most(arr));




// 12-masala
// let arr =[1,2,true,"salom","hammaga"];
// function change(arr) {
//     arr = arr.reverse();
//     let str = arr.join("")

//     return str
// }
// console.log(change(arr));



// 13-masala
// let str = "uzbekiston poytaxti Toshkent"
// function change(str) {
//     let res = []
//     res =str.split(" ");

//     return res
// }
// console.log(change(str));


// 14-masala
// let str = "uzbekiston poytaxti Toshkent";
// function change(arr) {
//     let res = []
//     res =str.split(" ");

//     res = res.reverse();
//     let str2 = res.join("")

//     return str2
// }
// console.log(change(str));


// 15-masala
// let arr = ['hello','world','hello','everyone'];
// function tomassive(arr) {
//     let res =[]
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i].length)
        
//     }
//     return res
// }
// console.log(tomassive(arr));


// 16-masala
let str = "s#{[alo%m!";
function delet(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i)>64 && str.charCodeAt(i) < 90 || str.charCodeAt(i) >96 && str.charCodeAt(i)<123 ) {
            result+=str[i]
        }
    }
    return result
}
console.log(delet(str));



// 17-masala
// let str = "hello world";
// let str2 = "  "
// function a(str,str2,element,element2) {
//     let res = str.slice(element,element2);
//     let result = res.concat(str2);
//     return result
// }
// console.log(a(str,str2,3,8));



// 18-masala
// let arr = ["hello","world","person"];
// function capitaliza(arr) {
//     let res =[];

//     res = arr.map(function(value) {
//         return value[0].toUpperCase + value.slice()
//     })
//     return res
// }
// console.log(capitaliza(arr));



// 19-masala
// let arr =['computer','combinatorika','piramida'];
// function ret(arr,element) {
//     let res = []
//     arr = arr.forEach(function (value) {
//         if (value.includes(element)== true) {
//             res.push( value)
//         }
//     });
//     return res
// }
// console.log(ret(arr,"co"));


// 20-masala!!!!!!!!!!!!!1
// let str = "hello world person";
// function reve(str) {
//     let res = str.split(' ');
//     let result = []
//     res.forEach(function (value) {
//         return result.push(value.unshift())
//     });
//     return  result
// }
// console.log(reve(str));