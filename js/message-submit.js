// const {
//     Controller
// } = require("swiper");

! function () {
    var view = View('section.message')

    var model = { //model是与数据相关的
        // 获取数据，出于一些原因（写在简书）这部分在data-import中
        fetch: function () {

        },
        // 创建数据
        save: function (name, content) {
            var Message = AV.Object.extend('Message');
            var message = new Message();
            return message.save({ // Promise对象
                'name': name,
                content: content
            })
        }
    }

    var controller = Controller({
        form: null,
        init: function (view, controller) {
            // this.messageList = view.querySelector('#messageList')
            this.form = view.querySelector('#postMessageForm')
        },
        bindEvents: function () {
            // let myForm = document.querySelector('#postMessageForm')
            // 注意form表单提交submit包括点击确认啊，回车什么的
            this.form.addEventListener('submit', (e) => {
                e.preventDefault() // 不然默认刷新一下页面
                this.saveMessage()
            })
        },
        saveMessage: function () {
            let myForm = this.form
            let name = myForm.querySelector('input[name=name]').value
            let content = myForm.querySelector('input[name=content]').value
            this.model.save(name, content).then(function (object) {
                let li = document.createElement('li')
                li.textContent = `${object.attributes.name}: ${object.attributes.content}`
                let messageList = document.querySelector('#messageList')
                messageList.append(li)
                myForm.querySelector('input[name=content]').value = ''
                // console.log('11', object)
            }).then(() => {}, (error) => {
                console.log(error)
            })
        }
    })

    // var controller = {
    //     view: null,
    //     model: null,
    //     form: null,
    //     init: function (view, model) {
    //         this.view = view
    //         this.model = model
    //         this.form = view.querySelector('#postMessageForm')
    //         this.bindEvents()
    //     },
    //     bindEvents: function () {
    //         // let myForm = document.querySelector('#postMessageForm')
    //         // 注意form表单提交submit包括点击确认啊，回车什么的
    //         this.form.addEventListener('submit', (e) => {
    //             e.preventDefault() // 不然默认刷新一下页面
    //             this.saveMessage()
    //         })
    //     },
    //     saveMessage: function () {
    //         let myForm = this.form
    //         let name = myForm.querySelector('input[name=name]').value
    //         let content = myForm.querySelector('input[name=content]').value
    //         this.model.save(name, content).then(function (object) {
    //             let li = document.createElement('li')
    //             li.textContent = `${object.attributes.name}: ${object.attributes.content}`
    //             let messageList = document.querySelector('#messageList')
    //             messageList.append(li)
    //             myForm.querySelector('input[name=content]').value = ''
    //             // console.log('11', object)
    //         }).then(() => {}, (error) => {
    //             console.log(error)
    //         })
    //     }
    // }
    controller.init(view, model)
}.call()