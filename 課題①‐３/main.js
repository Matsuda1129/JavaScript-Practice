"use strict"

function show() {
  console.log("==========================");
  console.log("現在持っているのタスク一覧");
  console.log("==========================");
}

const tasks = ['掃除','買い物','散歩'];

show();
tasks.forEach((task, index) => {
  console.log(`${index}:${task}`);
});


let task = prompt("タスクを入力をしてください");

alert("新しいタスクを追加しました。")

show();

tasks.push(task);
  
tasks.forEach((task, index) => {
 console.log(`${index}:${task}`);
});

prompt("確認,追加,削除,終了の４つのいずれかを入力してください")

