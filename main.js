for (let i = 0; i < 5; i++) {
    console.log(i);
}
for (let i = 1; i < 11; i++) {
    console.log(i);
}
for (let i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
let c = 0;
for (let i = 1; i < 11; i++) {
    c += i;
}
console.log(c);

let count = 0;
while (count < 3) {
    console.log("Count:", count);
    count++;
}
let number = 5;
while (number >= 0) {
    console.log("Number:", number);
    number--;
}

let doValue = 0;
do {
    console.log("Value:", doValue);
    doValue++;
} while (doValue < 3);

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}
for (let i = 1; i < 11; i++) {
    if (i == 5) {
        continue;
    }
    if (i == 8) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
for (let i = 1; i <= 4; i++) {
  let s = "";
  for (let j = 1; j <= i; j++) {
    s += "*";
  }
  console.log(s);
}