if (window.scrollY === 0) { //只有在最上面刷新才会动，或第一次打开才动
    //找到特殊标签，每个添加offset类，滑到的时候动一下，注意第一个要一开始就动一下。
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }
    //先执行一次，保证第一个关于会动。注意时间设定要大于等于上面的加载动画时间。
    //找到离用户最近的，移除offset
    setTimeout(function () {
        findClosestAndRemoveOffset()
    }, 1500)
}
// 滚动鼠标时出现的情况，再找到最近的，移除offset
window.addEventListener('scroll', function (x) {
    findClosestAndRemoveOffset()
})



function findClosestAndRemoveOffset() {
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 0; i < specialTags.length; i++) {
        if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                window.scrollY)) {
            minIndex = i
        }
    }

    // minIndex为距离窗口顶部最近元素。找到它后，1让他不偏移 2.让他所属的nav中a标签highlight
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let brotherAndMe = li.parentNode.children
    for (let i = 0; i < brotherAndMe.length; i++) {
        brotherAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}