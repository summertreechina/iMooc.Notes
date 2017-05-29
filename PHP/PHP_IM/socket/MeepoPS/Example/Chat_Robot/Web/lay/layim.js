/*
 @Author：赵丹
 @Date: 2016-07-25
 @email: zhaodan-it@360.cn
 修改自LayIM1.0
 */
;!function(win, undefined){

var xxim = {};
//节点
xxim.renode = function(){
    var node = xxim.node = {
        tabs: $('#xxim_tabs>span')
    };
};

var ws = new WebSocket('ws://127.0.0.1:19910');
ws.onopen = function() {
     ws.send('前端JS触发onopen事件, 链接完成');
};
//聊天窗口
xxim.popchat = function(){

    var node = xxim.node, log = {};

    log.success = function(layero){
        xxim.transmit();
    };

    ws.onmessage = function(e){
        var log = {};
        //聊天模版
        log.html = function(param){
            return '<li class="clearFix">'
                +'<span class="arrow"></span>'
                +'<div class="layim_chatsay">'+param.content+'</div>'
                +'</li>';
        };
        log.contentBox = $('.content_box');
        log.imarea = $('#content ul');
        //解析json
        var response = JSON.parse(e.data);
        //判断错误码
        if(response.errno !== 0) {
            log.imarea.append(log.html({
                content:response.errmsg
            }));
            log.contentBox.scrollTop(log.imarea[0].scrollHeight);
            return;
        }
        //判断服务端返回值
        //如果是response.data.content是空字符串
        if(response.data.content === '') {
            response.data.content = '没有查询到相关问题, 请咨询人工客服';
        }
        log.imarea.append(log.html({
            content:response.data.content
        }));
        log.contentBox.scrollTop(log.imarea[0].scrollHeight);
    };
    $.layer({
        type: 1,
        shade: [0],
        success: function(layero){
            log.success(layero);
        }
    })
};
//消息传输
xxim.transmit = function(drag){
    var node = xxim.node, log = {};
    node.sendbtn = $('#sendbtn');
    node.imwrite = $('#write');
    //发送
    log.send = function(){
        var data = {
            content: node.imwrite.val(),
            _: +new Date
        };
        if(data.content.replace(/\s/g, '') === ''){
            layer.tips('说点啥呗！', '#write', 2);
            node.imwrite.focus();
        } else {
            //聊天模版
            log.html = function(param, type){
                return '<li class="'+ (type === 'me' ? 'layim_chateme clearFix' : '') +'">'
                        + function(){
                            if(type === 'me'){
                                return '<span></span>';
                            } else {
                                return '<span class="arrow"></span>'
                            }
                        }()
                    +'<div class="layim_chatsay">'+ param.content +'</div>'
                +'</li>';
            };
            log.contentBox = $('.content_box');
            log.imarea = $('#content ul');
            log.imarea.append(log.html({
                content: data.content
            }, 'me'));
            var val = node.imwrite.val().replace(/\s/g,'');
            ws.send(val);
            node.imwrite.val('').focus();
            log.contentBox.scrollTop(log.imarea[0].scrollHeight);
        }
    };
    node.sendbtn.on('click', function(){
        log.send();
    });

    node.imwrite.keyup(function(e){
        if(e.keyCode === 13){
            log.send();
        }
    });
};
    xxim.renode();
    xxim.popchat();
}(window);