// ! function () {           // 没法使用，拿不到DOM。。。
//     var view = document.querySelector('section.message')
//     var controller = {
//         view: null,
//         messageList: null,
//         init: function (view) {
//             this.view = view
//             this.messageList = view.querySelector("#messageList")
//             this.initAV()
//             this.loadMessages()
//         },
//         initAV: function () {
//             AV.init({
//                 appId: "sGEeXThjIGNgADzjmPEkH8ap-gzGzoHsz",
//                 appKey: "3G7BY7LcR8WuAkKktzehAcrN",
//             })
//         },
//         loadMessages: function () {
//             var query = new AV.Query('Message');
//             query.find().then((messages) => {

//                 let array = messages.map((item) => {
//                     return item.attributes
//                 })
//                 // console.log(array)
//                 array.forEach((item) => {
//                     let li = document.createElement('li')
//                     li.textContent = `${item.name}: ${item.content}`
//                     // let messageList = document.querySelector('#messageList')
//                     this.messageList.append(li)
//                     messageList.append(li)
//                 })
//             }, function (error) {
//                 alert('提交失败') //注意这是第一个find相关的

//             }).then(() => {}, (error) => { //第一个then执行后的结果相关，对就() => {}，错就打出来
//                 console.log(error)
//             });
//         }
//     }
//     controller.init(view)
// }.call()


// 留言板功能之数据库导入。。只能放head里面，不然window.scrollY到这片区域为0
AV.init({
    appId: "sGEeXThjIGNgADzjmPEkH8ap-gzGzoHsz",
    appKey: "3G7BY7LcR8WuAkKktzehAcrN",
});

// var test = document.querySelector('section.message')   //这里拿不到
// console.log('aa', test)

var query = new AV.Query('Message');
query.find().then((messages) => {
    // console.log(messages)

    // var test = document.querySelector('section.message') //但是这里能拿到！！！
    // console.log('bb', test)

    let array = messages.map((item) => {
        return item.attributes
    })
    // console.log(array)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.textContent = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)

        // var test = document.querySelector('section.message')
        // console.log('aa', test)

    })
}, function (error) {
    alert('提交失败') //注意这是第一个find相关的

}).then(() => {}, (error) => { //第一个then执行后的结果相关，对就() => {}，错就打出来
    console.log(error)
});

// let test = document.querySelector('section.message') // 这里居然先于上个bb执行。。。
// console.log('aaaaaaaaaaaaaaaaaa', test)


// console.log('aaa', window.screenY)