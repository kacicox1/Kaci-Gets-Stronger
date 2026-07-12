const plan=[
["Day 1","Work - Rest"],["Day 2","Work - Rest"],["Day 3","Work - Rest"],
["Day 4","Upper Body & Arms"],["Day 5","Work - Rest"],["Day 6","Work - Rest"],
["Day 7","Work - Rest"],["Day 8","Walk + Stretch"],
["Day 9","Full Body Strength"],["Day 10","Arms + Core"],
["Day 11","Work - Rest"],["Day 12","Walk / Yoga"],
["Day 13","Lower Body + Core"],["Day 14","Fun Movement"]
];
let i=Number(localStorage.getItem("rotation")||0);
function render(){
document.getElementById("day").textContent=plan[i][0];
document.getElementById("workout").textContent=plan[i][1];
}
function nextDay(){i=(i+1)%14;localStorage.setItem("rotation",i);render();}
render();
