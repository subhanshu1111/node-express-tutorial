module.exports.items = ["item1", "item2"];
const person = {
  name: "bob",
};

module.exports.singlePerson = person;
// We can also export the items and person object in the same line:
// module.exports = {
//     items:['item1','item2'],
//     person: {
//         name:'bob',
//     },
// }
