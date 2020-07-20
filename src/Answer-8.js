// “id” : 4, “name” : “abc”,
//  “id” : 10, “name” : “ab2”,
//  “id” : 5, “name” : “abc3”,
//  “id” : 6, “name” : “abc5”
// }

// Answer number : 8

let jsonObject = [
    {"id":4,"name":"abc"},
    {"id":10,"name":"ab2"},
    {"id":5,"name":"abc3"},
    {"id":6,"name":"abc5"}
]
//given JSON object is not valid

jsonObject.sort((obj1,obj2) => (obj1.id > obj1.id) ? 1:-1)