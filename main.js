function calPositiveNumber() {
  var sum = 0;
  for (n = 0; sum <= 10000; sum = sum + n) {
    n = n + 1;
  }
  document.getElementById("txtNum").innerHTML = `Kết quả phép tính là ${n}`;
}

console.log(n);

function calSumDoubleMulti(x, n) {
  var numX = document.getElementById("numX").value;
  var numN = document.getElementById("numN").value;
  var result = 0;
  for (var i = 1; i <= numN; i++) {
    result += numX ** i;
  }
  document.getElementById("noti1").style.display = "block";
  document.getElementById("noti1").innerHTML = `Kết quả phép tính là ${result}`;
}

calSumDoubleMulti(2, 8);

function calFactorial(n) {
  var numZ = document.getElementById("numZ").value;
  var result = 1;
  for (var i = 1; i <= numZ; i++) {
    result *= i;
  }
  document.getElementById("noti3").style.display = "block";
  document.getElementById(
    "noti3"
  ).innerHTML = `kết quả phép tính là ${result} `;
}

calFactorial(3);

function changeColorDiv() {
  for (i = 1; i <= 10; i++) {
    document.getElementById("xxx").style.height = "max-content";
    if (i % 2 === 0) {
      document.getElementById(
        "xxx"
      ).innerHTML += `<div class='w-100 btn d-block btn-primary'>div ${i}</div>`;
    } else {
      document.getElementById(
        "xxx"
      ).innerHTML += `<div class='w-100 btn d-block btn-danger'>div ${i}</div>`;
    }
  }
}
