const izoku = {
  name: "Deku",
  alias: "Izoku midoriya",
  age: 15,
  powers: ["super strength", "flight", "danger sense", "smoke", "Blackwhip"],

  introduce: function () {
    console.log(`Hello, I am ${this.name}, also known as ${this.alias}.`);
  },

  use: function (power) {
    console.log(`${this.name} is using ${this.power}!`);
    console.log(`${this.name} doesn't have the power of ${this.power}.`);
  },
};
izoku.haircolor = Green;
izoku.job = superhero;
izoku.school = UA;
 
console.log (izoku)
delete izoku.job
console.log ("after deleting izoku job " )