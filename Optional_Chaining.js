const info = {
  name: "Aubdur Rob Anik",
  university: {
    id: "18101073",
    semester: "4-2",
    subject: {
      cse: [101, 102, 205, 301],
      eee: [103, 201],
    },
  },
};

const value = info.university?.semester;
console.log(value);

const vlu = info.university?.status;
console.log(vlu);

const vlu1 = info.university?.subject?.eee;
console.log(vlu1);

const vlu2 = info.university?.project?.eee;
console.log(vlu2);

//function

function printIndex(arr) {
  const index = 34;
  console.log(arr?.[index]);
}

printIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
