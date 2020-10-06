// 点一下a标签，平滑滚到那里。
! function () {
    var view = document.querySelector('nav.menu')
    var controller = {
        view: null,
        aTags: null,
        init: function (view) {
            this.view = view
            this.initAnimation()
            this.bindEvents()
        },
        initAnimation: function () { // Setup the animation loop. 缓入动画，点击关于之类慢慢移动过去
            function animate(time) {
                requestAnimationFrame(animate)
                TWEEN.update(time)
            }
            requestAnimationFrame(animate)
        },
        scrollToElement: function (element) {

            let top = element.offsetTop
            let currentTop = window.scrollY
            let targetTop = top - 68
            let s = targetTop - currentTop //路程
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
                y: currentTop // 起始位置
            }
            const tween = new TWEEN.Tween(coords)
                .to({
                    y: targetTop
                }, t) // Move to (300, 200) in t/1000 second. t为毫秒 结束位置和时间
                .easing(TWEEN.Easing.Quadratic.InOut) // Use an easing function to make the animation smooth. 缓动类型
                .onUpdate(() => { // coords.y已经变了
                    // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y) // 如何更新界面

                })
                .start() // Start the tween immediately.
        },
        bindEvents: function () {
            let aTags = this.view.querySelectorAll('ul >li > a')
            for (let i = 0; i < aTags.length; i++) {
                aTags[i].onclick = (x) => {
                    x.preventDefault()
                    let a = x.currentTarget
                    let href = a.getAttribute('href') // '#siteAbout'
                    let element = document.querySelector(href)
                    this.scrollToElement(element)
                }
            }
        }

    }
    controller.init(view)
}.call()