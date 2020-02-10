var name1 = prompt("Choose A Name?");
var name2 = prompt("Choose A Name?");
var name3 = prompt("Choose A Name?");

if (name1.length > name2.length && name1.length > name3.length)
  {
    console.log(name1 + "has the longest name")
  }

else if (name1.length < name2.length && name2.length > name3.length) {
  console.log(name2 + "has the longest name")
}
else if (name3.length > name2.length && name3.length > name1.length) {
  console.log(name3 + "has the longest name")
}

else if (name1.length === name2.length && name1.length > name3.length) {
  console.log("It is a tie between" name1 + "and" + name2)
}
else if (name1.length === name3.length && name3.length > name2.length) {
  console.log("It is a tie between" name1 + "and" + name3)
}
else if (name2.length === name3.length && name3.length > name1.length) {
  console.log("It is a tie between" name2 + "and" + name3)
}

else (name1.length === name2.length && name1.length === name3.length) {
  console.log("All three names" name1 + "and" name2 + "and" + name3)
}
