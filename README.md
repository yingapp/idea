# 如何使用
  
访问<https://yingapp.herokuapp.com>，输入密码新建用户后，点击右上角图标，完成初始信息输入后，在对话框中输入关键词搜索，比如搜素声音，如果存在就直接加载该意图  

## 字段操作  
### 添加  
对话框中输入'/',浏览到需要修改的目录后，在输入'/字段名称'，回车，输入字段值，回车。  
  
### 删除  
对话框中输入'/',浏览到需要删除的目录后，回车。  
  
### 修改
对话框中输入'/',浏览到需要修改的目录后，输入字段值，回车。  

### 清除并修改全部
确保在根目录，输入'//'后回车，再输入xtml回车，然后输入用户信息 [user.js](https://github.com/yingapp/idea/blob/main/user.js)。
    
## 搜索
确保在根目录，输入'//'后回车，再输入关键词搜索  
  
## 路径结构    
profile   用户基本数据  
alias     字段别名  
intents   意图数据  
spread    广播设置  

## 意图范例
参考[sound](https://github.com/yingapp/sound)  
对应用户数据设置，参考[user.js](https://github.com/yingapp/idea/blob/main/user.js) 中intents字段  
修改app的url为js或html  
打开对话框，输入'/',浏览至需要修改的url，比如'/intents/音乐/apps/音乐/url'后，点击输入框右侧输入类型切换按钮，切换至文件输入，点击‘文件’，选择单个js或html文件。操作完成后，url的值变成对应的hash。html需要将所有资源包括js文件放入进去。采用这种方式共享给ying后，其他用户搜索到引用时，通过webtorrent进行文件传播，不再需要静态服务器了。

## webtorrent中继  
参考[relay](https://github.com/yingapp/relay)  

