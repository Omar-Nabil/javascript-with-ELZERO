// /*
//     String Challenge
//     All Solutions Must Be In One Chain
//     You Can Use Concatenate
// */

// let a = "Elzero Web School";

// // Include This Method In Your Solution [slice, charAt]
// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // Zero

// // 8 H
// console.log(a.slice(-4, -3).repeat(8).toUpperCase()); // HHHHHHHH

// // Return Array
// console.log(a.split(" ", 1)); // ["Elzero"]

// // Use Only "substr" Method + Template Literals In Your Solution
// console.log(a.substr(0, 6) + " " + a.substr(-6, 6)); // Elzero School

// // Solution Must Be Dynamic Because String May Changes
// console.log(a.charAt(0).toLowerCase() + a.slice(2, a.length).toUpperCase()); // eLZERO WEB SCHOOl


// one

// let userName = "Elzero";
// console.log(userName.slice("l", 1).toLowerCase()); // e
// console.log(userName.charAt(0).toLowerCase()); // e
// console.log(userName[0].toLocaleLowerCase()); // e
// console.log(userName.substring(0, 1).toLowerCase()); // e
// console.log(userName.substr(0, 1).toLocaleLowerCase()); // e
// console.log(userName[0].toLocaleLowerCase().repeat(3)); // eee

// two

// let word = "Elzero";
// let letterZ = "z";
// let letterE = "e";
// let letterO = "O";

// console.log(word.includes("z")); // True
// console.log(word.startsWith("E")); // True
// console.log(word.endsWith("o")); // True