
let count = document.getElementById("up");


document.getElementById("countup").addEventListener("click", function () {
    let convNo = Number(count.innerHTML);
    convNo = convNo + 1;
    return count.innerHTML = convNo
})


document.getElementById("countdown").addEventListener("click", function () {
    let convNo = Number(count.innerHTML);
    convNo = convNo - 1;
    return count.innerHTML = convNo
})


document.getElementById("reset").addEventListener("click", function () {
    return count.innerHTML = 0;
})