! function () {
    var view = document.querySelector('#topNavBar')

    var controller = {
        view: null,
        init: function (view) { //init 只赋值 *******
            this.view = view
            this.bindEvents() //绑定事件
            // this.bindEvents.call(this)
        },
        bindEvents: function () {
            var view = this.view
            if (window.scrollY > 0) { // 初始状态就不在页面最上面
                setTimeout(function () {
                    this.active()
                }.bind(this), 1500) // 注意bind(xxx)，使得新函数的this指定为xxx
            }

            window.addEventListener('scroll', (xxx) => {
                if (window.scrollY > 0) {
                    this.active()
                } else {
                    this.deactive()
                }
            })
            // 箭头函数没有this
        },
        active: function () {
            this.view.classList.add('sticky')
        },
        deactive: function () {
            this.view.classList.remove('sticky')
        }

    }
    controller.init(view)
    // controller.init.call(controller, view)
}.call()