const noSpaces = function (str) {
  return str.replaceAll(' ', '');
}

const transformer = function (str, func) {
  console.log(`Original text: ${str}`);
  console.log(` Transformed String: ${func(str)}, this was transformed by ${func.name}`);
}

transformer('Mostafa is The best one!');