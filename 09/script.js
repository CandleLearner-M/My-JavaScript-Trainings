function outer(counter = 0) {
  const inner1 = function () {
    counter++;
    console.log(counter);
  };
  const inner2 = function () {
    counter++;
    console.log(counter);
  };
  return { inner1, inner2 };
}


const {inner1, inner2} = outer();
inner1();
inner2();
inner1();