function sayhello(nameofperson, age) {
  console.log("Hi! my name is " + nameofperson + " and I am " + age);
}

sayhello();
sayhello("khw");
sayhello("khw", 23);

function plus(firstnum, secondnum) {
  console.log(firstnum + secondnum);
}

// console.log(firstnum, secondnum); // 에러

plus(60, 8);

function divide(firstnum, secondnum) {
  console.log(firstnum / secondnum);
}

divide(60, 8);

const player = {
  name: "khw",
  sayhello: function (othername) {
    console.log("hello! " + othername);
  },
};

console.log(player.name);
player.sayhello("lyn");
player.sayhello("nico");
