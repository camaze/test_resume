// 点一下a标签，平滑滚到那里。
// 下面这行获取所有满足的li
let liTags = document.querySelectorAll('nav.menu > ul >li')

// Setup the animation loop. 缓入动画，点击关于之类慢慢移动过去
function animate(time) {
    requestAnimationFrame(animate)
    TWEEN.update(time)
}
requestAnimationFrame(animate)

for (let i = 0; i < liTags.length; i++) {
    // 鼠标进入就反应
    liTags[i].onmouseenter = function (x) {
        let li = x.currentTarget
        li.classList.add('active')
        // let brother = li.getElementsByTagName('ul')[0]
        // brother.classList.add('active')

        // let brother = a.nextSibling
        // 害怕取到文本节点
        // while (brother.tagName !== 'UL') {
        //     brother = brother.nextSibling
        // }

    }
    liTags[i].onmouseleave = function (x) {
        let li = x.currentTarget
        li.classList.remove('active')
        // let brother = li.getElementsByTagName('ul')[0]

        // brother.classList.remove('active')
        // 害怕取到文本节点
        // while (brother.tagName !== 'UL') {
        //     brother = brother.nextSibling
        // }
    }
}
let aTags = document.querySelectorAll('nav.menu >ul >li > a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault()
        let a = x.currentTarget
        let href = a.getAttribute('href') // '#siteAbout'
        let element = document.querySelector(href)
        let top = element.offsetTop
        let currentTop = window.scrollY
        let targetTop = top - 68
        let s = targetTop - currentTop
        var t = Math.abs((s / 100) * 300)
        if (t > 500) {
            t = 500
        }

        // 点击关于等的动画效果到指定页面
        // let n = 25 // 一共动25次
        // let duration = 500 / n // 多少时间动一次  ， 要求0.5秒（500毫秒）到达指定位置
        // let currentTop = window.scrollY
        // let targetTop = top - 68
        // let perDistance = (targetTop - currentTop) / n
        // let i = 0
        // let id = setInterval(() => {
        //     if (i == n) {
        //         window.clearInterval(id) // 咋砸了闹钟
        //         return
        //     }
        //     i++
        //     window.scrollTo(0, currentTop + perDistance * i)
        // }, duration)
        // window.scrollTo(0, top - 68)
        const coords = {
            y: currentTop
        }
        const tween = new TWEEN.Tween(coords)
            .to({
                y: targetTop
            }, t) // Move to (300, 200) in t/1000 second. t为毫秒
            .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth.
            .onUpdate(() => {
                // Called after tween.js updates 'coords'.
                window.scrollTo(0, coords.y)

            })
            .start() // Start the tween immediately.
    }
}