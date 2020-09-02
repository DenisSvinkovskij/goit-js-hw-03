const findBestEmployee = employees => {
  'use strict';
  // Write code under this line

  const keys = Object.keys(employees);
  let result = '';
  let maxValue = 0;

  for (const key of keys) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      result = key;
    }
    console.log(employees);
    console.log(keys);
  }

  return result;
  // const entries = Object.entries(employees);
  // let result = entries[0];

  // for (const entry of entries) {
  //   if (entry[1] < result[1]) {
  //     continue;
  //   } else {
  //     result = entry[0];
  //   }
  // }

  // for (let i = 0; i < entries.length; i += 1) {
  //   result = entries[0][1];
  //   if (entries[i][1] < result) {
  //     continue;
  //   }
  //   result = entries[i][0];
  // }

  return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
