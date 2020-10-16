# 如何使用
  
访问[ying](https://yingapp.herokuapp.com)
  
点击右上角图标，在对话框，输入关键词搜索意图，比如搜素声音，如果存在就直接加载该意图  

## 字段操作  
### 添加  
对话框中输入'/',浏览到需要修改的目录后，在输入'/字段名称'，回车，输入字段值，回车。  
  
### 删除  
对话框中输入'/',浏览到需要修改的目录后，在输入'/字段名称'，回车，再次回车。  
  
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

## webtorrent中继  
参考[relay](https://github.com/yingapp/relay)  
