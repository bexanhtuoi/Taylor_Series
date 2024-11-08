const factor = (n) => {
  if (n == 0) {
    return 1;
  }
  return n * factor(n - 1);
};
const func_1 = (x, epsilon) => {
  let func_1_x = 1;
  let i = 1;
  let func_1_n = x ** i / factor(i);
  while (func_1_n >= epsilon) {
    func_1_n = x ** i / factor(i);
    func_1_x += func_1_n;
    i++;
  }
  return func_1_x;
};

const func_2 = (x, epsilon) => {
  if (x < -1 || x > 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  let i = 0;
  let func_2_x = 0;
  let func_2_n = ((i + 1) * (i + 2) * x ** i) / 2;

  while (func_2_n >= epsilon) {
    func_2_n = ((i + 1) * (i + 2) * x ** i) / 2;
    if (i % 2 == 0) {
      func_2_x += func_2_n;
    } else {
      func_2_x -= func_2_n;
    }
    i++;
  }
  return func_2_x;
};

const func_3 = (x, epsilon) => {
  if (x <= -1 || x > 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  let func_3_x = 0;
  let i = 1;
  let func_3_n = x ** i / i;
  while (func_3_n >= epsilon) {
    func_3_n = x ** i / i;
    func_3_x -= func_3_n;
    i++;
  }
  return func_3_x;
};

const func_4 = (x, epsilon) => {
  if (x < -1 || x > 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  let i = 1;
  let func_4_x = 1;
  let a = 1 / 2;
  let func_4_n = a * x ** i;

  while (Math.abs(func_4_n) >= epsilon) {
    let a = 1 / 2;
    for (let j = 1; j < i; j++) {
      a *= 1 / 2 - j;
    }
    a /= factor(i);

    func_4_n = a * x ** i;
    func_4_x += func_4_n;
    i++;
  }
  return func_4_x;
};

const func_5 = (x, epsilon) => {
  if (x < -1 || x > 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  let i = 1;
  let func_5_x = 1;
  let a = -1 / 2;
  let func_5_n = a * x ** i;

  while (Math.abs(func_5_n) >= epsilon) {
    let a = -1 / 2;
    for (let j = 1; j < i; j++) {
      a *= -1 / 2 - j;
    }
    a /= factor(i);

    func_5_n = a * x ** i;
    func_5_x += func_5_n;
    i++;
  }
  return func_5_x;
};

const func_6 = (x, epsilon) => {
  x = (x * Math.PI) / 180;
  let func_6_x = 0;
  let i = 0;
  let sign = 1;
  let n = 2 * i + 1;
  let func_6_n = x ** n / factor(n);
  while (Math.abs(func_6_n) >= epsilon) {
    func_6_x += sign * func_6_n;

    i++;
    n = 2 * i + 1;
    func_6_n = x ** n / factor(n);

    sign = -sign;
  }
  return func_6_x;
};

const func_7 = (x, epsilon) => {
  x = (x * Math.PI) / 180;
  let func_7_x = 0;
  let i = 0;
  let sign = 1;
  let n = 2 * i;
  let func_7_n = x ** n / factor(n);
  while (Math.abs(func_7_n) >= epsilon) {
    func_7_x += sign * func_7_n;

    i++;
    n = 2 * i;
    func_7_n = x ** n / factor(n);

    sign = -sign;
  }
  return func_7_x;
};

const func_8 = (x, epsilon) => {
  if (x < -1 || x > 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  let func_8_x = 0;
  let i = 0;
  let up = factor(2 * i);
  let down = 4 ** i * factor(i) ** 2 * (2 * i + 1);
  let n = up / down;
  let func_8_n = n * x ** (2 * i + 1);

  while (Math.abs(func_8_n) >= epsilon) {
    func_8_x += func_8_n;

    i++;
    up = factor(2 * i);
    down = 4 ** i * factor(i) ** 2 * (2 * i + 1);
    n = up / down;
    func_8_n = (up / down) * x ** (2 * i + 1);
  }
  return (func_8_x * 180) / Math.PI;
};

const func_9 = (x, epsilon) => {
  x = (x * Math.PI) / 180;
  let func_9_x = 0;
  let i = 0;
  let sign = 1;
  let n = 2 * i;
  let func_9_n = x ** n / factor(n + 1);
  while (Math.abs(func_9_n) >= epsilon) {
    func_9_x += sign * func_9_n;

    i++;
    n = 2 * i;
    func_9_n = x ** n / factor(n + 1);

    sign = -sign;
  }
  return func_9_x;
};

const func_10 = (x, epsilon) => {
  if (x < -1 || x > 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  //x = (x * Math.PI) / 180;
  let func_10_x = 0;
  let i = 0;
  let sign = 1;
  let n = 2 * i + 1;
  let func_10_n = x ** n / n;

  while (Math.abs(func_10_n) >= epsilon) {
    func_10_x += sign * func_10_n;

    i++;
    n = 2 * i + 1;
    func_10_n = x ** n / n;

    sign = -sign;
  }
  return (func_10_x * 180) / Math.PI;
};

const func_11 = (x, epsilon) => {
  if (x < -1 || x >= 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  //x = (x * Math.PI) / 180;
  let func_11_x = 0;
  let i = 0;
  let sign = 1;
  let n = i + 1;
  let func_11_n = x ** n / n;

  while (Math.abs(func_11_n) >= epsilon) {
    func_11_x += sign * func_11_n;

    i++;
    n = i + 1;
    func_11_n = x ** n / n;

    sign = -sign;
  }
  return func_11_x;
};

const func_12 = (x, epsilon) => {
  if (x < -1 || x > 1) {
    return alert("kiểm tra lại điều kiện hàm");
  }
  //x = (x * Math.PI) / 180;
  let func_12_x = 0;
  let i = 0;
  let n = 2 * i + 1;
  let func_12_n = x ** n / n;

  while (Math.abs(func_12_n) >= epsilon) {
    func_12_x += func_12_n;

    i++;
    n = 2 * i + 1;
    func_12_n = x ** n / n;
  }
  return 2 * func_12_x;
};

const func_13 = (x, epsilon) => {
  let func_13_x = 0;
  let i = 0;
  let n = 2 * i + 1;
  let func_13_n = x ** n / factor(n);
  while (Math.abs(func_13_n) >= epsilon) {
    func_13_x += func_13_n;

    i++;
    n = 2 * i + 1;
    func_13_n = x ** n / factor(n);
  }
  return func_13_x;
};

const func_14 = (x, epsilon) => {
  let func_14_x = 0;
  let i = 0;
  let n = 2 * i + 1;
  let func_14_n = x ** n / factor(n);
  while (Math.abs(func_14_n) >= epsilon) {
    func_14_x += func_14_n;

    i++;
    n = 2 * i + 1;
    func_14_n = x ** n / factor(n);
  }
  return func_14_x;
};

const calculateTaylor = () => {
  let x = parseFloat(document.getElementById("xValue").value);
  let terms = parseInt(document.getElementById("terms").value);
  if (terms == 1) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_1(x, 10 ** -8)}`;
  } else if (terms == 2) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_2(x, 10 ** -8)}`;
  } else if (terms == 3) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_3(x, 10 ** -8)}`;
  } else if (terms == 4) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_4(x, 10 ** -8)}`;
  } else if (terms == 5) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_5(x, 10 ** -8)}`;
  } else if (terms == 6) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_6(x, 10 ** -8)}`;
  } else if (terms == 7) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_7(x, 10 ** -8)}`;
  } else if (terms == 8) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_8(x, 10 ** -8)}`;
  } else if (terms == 9) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_9(x, 10 ** -8)}`;
  } else if (terms == 10) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_10(x, 10 ** -8)}`;
  } else if (terms == 11) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_11(x, 10 ** -8)}`;
  } else if (terms == 12) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_12(x, 10 ** -8)}`;
  } else if (terms == 13) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_13(x, 10 ** -8)}`;
  } else if (terms == 14) {
    document.getElementById(
      "result"
    ).textContent = `Giá trị chuỗi Taylor là: ${func_14(x, 10 ** -8)}`;
  }
};
