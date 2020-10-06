if (window.scrollY > 0) { // 初始状态就不在页面最上面
    setTimeout(function () {
        topNavBar.classList.add('sticky')
    }, 1500)
}

window.addEventListener('scroll', function (xxx) {
    if (window.scrollY > 0) {
        topNavBar.classList.add('sticky')
    } else {
        topNavBar.classList.remove('sticky')
    }
})