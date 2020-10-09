// 留言板功能
AV.init({
    appId: "sGEeXThjIGNgADzjmPEkH8ap-gzGzoHsz",
    appKey: "3G7BY7LcR8WuAkKktzehAcrN",
});

var query = new AV.Query('Message');
query.find().then((messages) => {

    let array = messages.map((item) => {
        return item.attributes
    })
    // console.log(array)
    array.forEach((item) => {
        let li = document.createElement('li')
        li.textContent = `${item.name}: ${item.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
    })
}, function (error) {
    alert('提交失败') //注意这是第一个find相关的

}).then(() => {}, (error) => { //第一个then执行后的结果相关，对就() => {}，错就打出来
    console.log(error)
});


let myForm = document.querySelector('#postMessageForm')

// 注意form表单提交submit包括点击确认啊，回车什么的
myForm.addEventListener('submit', function (e) {
    e.preventDefault() // 不然默认刷新一下页面
    let name = myForm.querySelector('input[name=name]').value
    let content = myForm.querySelector('input[name=content]').value
    var Message = AV.Object.extend('Message');
    var message = new Message();
    message.save({
        'name': name,
        content: content
    }).then(function (object) {
        let li = document.createElement('li')
        li.textContent = `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.append(li)
        myForm.querySelector('input[name=content]').value = ''
        console.log('11', object)
    }).then(() => {}, (error) => {
        console.log(error)
    })
})



/*
// 创建TestObject表
var X = AV.Object.extend('ccc ');
// 表中创建一行数据
var o = new X();
// 数据内容为 words: 'hello wordl' 保存
// 如果保存成功
o.save({
    words: 'hello world'
}).then(function (Object) {
    alert('LeanCloud Rocks!');
    console.log(Object)
    console.log(arguments)
})   */