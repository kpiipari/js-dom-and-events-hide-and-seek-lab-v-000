function getFirstSelector(selector) {
    return document.querySelector(`${selector}`);
}

function nestedTarget() {
    return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n) {
    const list = document
        .getElementById("app")
        .querySelectorAll(".ranked-list li");
    for (let i = 0; i < list.length; i++) {
        list[i].innerHTML = parseInt(list[i].innerHTML) + n;
    }
}
function deepestChild() {
    let list = document.getElementById("grand-node").querySelectorAll("div");
    let deepestChild;
    for (let i of list) {
        deepestChild = i;
    }
    return deepestChild;
}
