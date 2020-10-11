// 鼠标进入导航的li（关于等时），会有小红条，而且在作品那里有显示作品1-3
! function () {
    let view = View('nav.menu > ul >li')
    var controller = {
        view: null,
        init: function () {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            for (let i = 0; i < this.view.length; i++) {
                // 鼠标进入就反应
                this.view[i].onmouseenter = function (x) {
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
                this.view[i].onmouseleave = function (x) {
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
        }
    }
    controller.init(view)
}.call()