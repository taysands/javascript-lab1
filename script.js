const name1 = prompt("Please tell me your name");
const name2 = prompt("Please tell me your name");
const name3 = prompt("Please tell me your name");
if (name1.length > name2.length && name1.length > name3.length) {
  console.log(name1 + "has the longest name");
} else if (name1.length < name2.length && name2.length > name3.length) {
  console.log(name2 + "has the longest name");
} else if (name3.length > name2.length && name3.length > name1.length) {
  console.log(name3 + "has the longest name");
} else if (name1.length === name2.length && name1.length > name3.length) {
  console.log("It is a tie between" + name1 + "and" + name2);
} else if (name1.length === name3.length && name3.length > name2.length) {
  console.log("It is a tie between" + name1 + "and" + name3);
} else if (name2.length === name3.length && name3.length > name1.length) {
  console.log("It is a tie between" + name1 + "," + name2 + "and" + name3);
}
