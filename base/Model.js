// 注意：本代码用不到，因为我更改了代码结构出现神奇问题（见简书）..不过思路可以借鉴
// var model = Model({resourceName:'表名'})  //生成model对象
// model.init()
// model.fetch()
// model.save({
//     name: 'xxx',
//     content: 'xxx'
// })

window.Model = function (options) {
    let resourceName = options.resourceName
    return {
        init: function () {
            AV.init({
                appId: "sGEeXThjIGNgADzjmPEkH8ap-gzGzoHsz",
                appKey: "3G7BY7LcR8WuAkKktzehAcrN",
            });
        },
        fetch: function () {
            var query = new AV.Query('Message');
            return query.find()
        },
        // this.model.save({   这是在那边controller里面写的，但是我没用到这个，可以参考一下//message-submit里面也有
        //     'name': name,
        //     'content': content    
        // })
        save: function (Object) {
            var XXX = AV.Object.extend(resourceName);
            var xx = new XXX();
            return xx.save(Object)
        }
    }
}