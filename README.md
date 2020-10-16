<https://yingapp.herokuapp.com>

点击右上角图标，在对话框下边输入xtml，然后输入用户信息 [user.js](https://github.com/yingapp/idea/blob/main/user.js)。

字段添加，对话框中输入'/',浏览到需要修改的目录后，在输入'/字段名称'，回车，输入字段值，回车。
字段删除，对话框中输入'/',浏览到需要修改的目录后，在输入'/字段名称'，回车，再次回车。
字段修改, 对话框中输入'/',浏览到需要修改的目录后，输入字段值，回车。
搜索， 输入'//'，回车，再输入关键词搜索

路径结构：

--- profile   用户基本数据
 |- alias     字段别名
 |- intents   意图数据
 |- spread    广播设置


意图（包含数据和应用的集合），参考[sound](https://github.com/yingapp/sound)
文件webtorrent中继，参考[relay](https://github.com/yingapp/relay)