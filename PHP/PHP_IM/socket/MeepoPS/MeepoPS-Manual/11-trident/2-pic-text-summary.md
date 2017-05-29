# Trident流程分析图文版

1. Confluence、Transfer、Business分别启动。

2. Transfer和Business启动后主动链接到Confluence。如下图(黄色空心大箭头):
![Transfer和Business链接到Confluence](Image/2-1.png?raw=true "Transfer和Business链接到Confluence")

3. Confluence给每一个Business告知当前可用的Transfer的IP和端口, 随后Business主动链接到Transfer。如下图(绿色细线):
![Transfer和Business两两互联](Image/2-2.png?raw=true "Transfer和Business两两互联")

4. Trident启动完毕。

5. 用户来啦。普通用户会链接到Transfer上。如下图(蓝色):
![用户来啦](Image/2-3.png?raw=true "用户来啦")

6. 用户发消息喽。用户A发送的消息首先会进入到Transfer, Transfer再根据权重随机选择一个Business, 将消息转发到Business。如下图(橘黄色):
![用户发消息喽](Image/2-4.png?raw=true "用户发消息喽")

7. Business收到消息后进行业务逻辑的处理。如果是WebServer、机器人客服等业务, 则原路返回消息给Transfer。Transfer收到Business的消息后原路返回给用户A。如下图(橘黄色):
![Business返回](Image/2-5.png?raw=true "Business返回")

8. 如果是聊天类的应用, 步骤(7)就会有不一样了, 因为聊天类应用涉及到私聊(用户A发送给用户B)、群发(用户A群发给用户B和用户C)的场景, 下面逐一画图。

9. 聊天应用之私聊。 现在用户A要发送消息给用户B的流程: 用户A发送消息给Transfer, 消息包含了内容、消息类型(私聊)、接收方ID(用户B的ID, ID由MeepoPS提供)。
    Transfer收到消息后根据权重随机选择一个Business将消息转发(此步同上), Business收到消息一看, 呀, 是私聊某个ID的, 此时, MeepoPS会根据ID自动找到这个用户B是在哪台Transfer上。最后Business将消息发送给用户B。如下图(橘黄色):
![聊天应用之私聊](Image/2-6.png?raw=true "聊天应用之私聊")

10. 聊天应用之群发。 现在用户A要发送消息给所有用户的流程: 用户A发送消息给Transfer, 消息包含了内容、消息类型(群发)。
    Transfer收到消息后根据权重随机选择一个Business将消息转发(此步同上), Business收到消息一看, 呀, 是群发的, 此时, Business将消息发送给所有的Transfer。
    Transfer收到消息后发送给链接到该Transfer的所有用户。如下图(橘黄色):
![聊天应用之群发](Image/2-7.png?raw=true "聊天应用之群发")