# 链接

### 链接是什么
- 每一个链接, 都是一个不同对象. 
- 每一个链接, 都是传输层协议类的对象. 比如Tcp协议类的对象.
- 每一个链接, 我们认为等同于是一个客户端
- 我们在Api接口类的介绍中提到过, 所有的接口类都有一个通用属性clientList. clientList是所有客户端(链接)的列表, clientList的每个元素的key是每个链接的ID, 每个元素的值都是一个不同的链接.
- 我们在Api接口类的介绍中提到过, 有一个回调函数叫做callbackConnect, 在有新链接加入时触发. 这个回调函数接收一个参数: $connect. 而这个$connect就是一个链接.
- 我们在Api接口类的介绍中提到过, 有一个回调函数叫做callbackNewData, 在收到新消息时触发. 这个回调函数接收两个个参数: $connect和$data. 而这个$connect就是一个链接. 表示$connect这个链接发来了一个消息$data.
- 在示例中, 我们经常会看到三个变量, $client, $clientList和$connect. $client和$connect都是表示客户端(链接)的对象, $clientList是$client的集合.
- 既然链接就是一个对象, 那么这个肯定有可以调用的属性和方法. 这些属性在MeepoPS就已经赋好值, 您直接使用即可.
