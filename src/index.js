/*
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言は不可
// var val2 = "let変数を再宣言は不可";
// console.log(val2);

// constで定義したオブジェクトはプロパティ変更は可能
// const val4 = {
//   name : "xx",
//   age : 30,
// };

// val4.age = "yy";
// val4.address = "Yokohama";
// console.log(val4);

// constで定義した配列はプロパティの変更は可能

/*
 * テンプレート文字列
 */
// const name = "xx";
// const age = 30;
// // 「私の名前はxxです。年齢は30歳です。」
// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/*
 * アロー関数
 */
// function func1(str) {
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func1("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/*
 * 分割代入
 */
// const myProfile = {
//   name: "xx",
//   age: 30
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ["xx", 30];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "zz") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文 ...
 */

// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// イコールで配列をコピーすると参照が同じため、両方変わる。

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["xx", "yy", "zz"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
//console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });

// console.log(newNumArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件Trueの時：条件がfalseの時
// const val1 = 1 > 0 ? "tureです" : "falseです";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

/**
 * 論理演算しの本当の意味を知ろう
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueになります");
// }

// \\ は左側がfalseなら右側を返す
// const num = null;
// const fee = num || "金額未設定";
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "何か設定された";
// console.log(fee2);
