const catobject = {
  name: "曉之伊邪那岐 → 曉光之伊邪那岐",
  攻擊頻率: 7.27,
  攻擊間隔: 5.47,
  KB: 3,
  召喚金額: [3000, 4500, 6000],
  跑速: 12,
  再生產: 124.53,
  射程: 350,
  rule: {
    HP: {
      base: 51800,
      per10: 37000,
      per20: 74000,
    },
    ATK: {
      base: [12600, 12600, 12600],
      per10: [9000, 9000, 9000],
    },
    DPS: {
      base: 5201,
      per10: 3716,
    },
  },
};

document.querySelector(".cat-name").innerText = catobject.name;
// document.querySelector(".HP").innerText = catobject.HP;
// const hpCells = document.querySelectorAll("td.HP");
// hpCells[0].innerText = catobject.rule.HP.base;
// hpCells[1].innerText = catobject.rule.HP.base + catobject.rule.HP.per10;
// hpCells[2].innerText = catobject.rule.HP.base + catobject.rule.HP.per20;

// document.querySelectorAll("tbody tr")[2].children[1].innerText =
//   catobject.rule.ATK.base.join("/");
// document.querySelectorAll("tbody tr")[2].children[2].innerText =
//   catobject.rule.ATK.per10.join("/");
