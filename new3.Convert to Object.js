function newConvertToObject(string){
let objectSTR=JSON.parse(string);
let entries=Object.entries(objectSTR)
for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
}

    console.log();
}
newConvertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
//newConvertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
