const data = require("./Public_Info.json");
console.log(data);

const info = require("./Student.json");
console.log(info);

console.log(data.public[0].name);
console.log(data.student[1].School);

console.log(info);
delete info.student[0].name;
console.log(info);

console.log(data.student[1].name);
data.student[1].name = "Jonny";
console.log(data.student[1].name);

console.log("For Loop-1 : ");
for(x in data)
{
    console.log(x);
}

console.log("For Loop-2 : ");
for(x in data)
{
    console.log(data[x]);
}
