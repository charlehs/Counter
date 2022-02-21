"use strict";

let countEl = document.getElementById("count-el");
let count = 0;

let saveBtn = document.getElementById("save-btn");
let prevNums = document.getElementById("prev-el");
let nums = [];

let resetBtn = document.getElementById("reset-btn");

let addBtn = document.getElementById("increment-btn");
let subBtn = document.getElementById("decrement-btn");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  if (count >= 1) {
    count -= 1;
    countEl.textContent = count;
  }
}

function reset() {
  count = 0;
  countEl.textContent = count;
}

function save() {
  nums.push(count);
  prevNums.textContent = nums;
  count = 0;
  countEl.textContent = count;
}
