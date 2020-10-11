// Controller({
//         init: function (view, model) {
//             this.xxx()        注意：bindEvents比较通用，在下面调用了就不用在这里调用了
//             this.yyy()
//         },
//         xxx() {}, // for循环放入
//         yyy() {}
//     }

// )

window.Controller = function (options) { // options是一个对象
    var init = options.init

    let object = {
        view: null,
        model: null,
        init: function (view, model) { //init 只赋值 *******
            this.view = view
            this.model = model
            // this.model.init()
            init.call(this, view, model) // object的init调用options的init，这个this是message-submit中的controller.ini(view, model)的controller
            this.bindEvents.call(this)
        }
    }
    for (let key in options) { // 这个很重要，除了init，其他都要，不然this.bindEvents.call(this)没法执行
        if (key !== 'init') {
            object[key] = options[key]
        }
    }
    return object
}