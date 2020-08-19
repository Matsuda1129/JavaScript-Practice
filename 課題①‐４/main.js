'use strict'
 const showTasks = () => {
  console.log("==========================");
  console.log("現在持っているのタスク一覧");
  console.log("==========================");
}

const tasks = ['[内容]机を片付ける、[ジャンル]掃除','[内容]牛乳を買う、[ジャンル]買い物','[内容]散歩する、[ジャンル]運動する'];

showTasks();
tasks.forEach((task, index) => {
  console.log(`${index}:${task}`);
});
  


let addCon = prompt("タスクを入力をしてください");

let addGen = prompt("ジャンルを入力してください")

alert("新しいタスクを追加しました。")

let task = "[内容]"+ addCon + "、[ジャンル]" + addGen

tasks.push(task);

showTasks();


tasks.forEach((task, index) => {
  console.log(`${index}:${task}`);
 });
 
 prompt("確認,追加,削除,終了の４つのいずれかを入力してください")
 