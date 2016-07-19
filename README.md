# shimeru
Light blog  
这是一个利用ajax进行静态加载的轻博客.示例页面[(=>)](https://windring.github.io/shimeru/ "")

安装:上传[shimeru](https://github.com/windring/shimeru "")到服务器  
```
│  index.html  #主页
├─md
│      hello-world.md #你的博客文章
└─su
        sdfsa.cd  #存放文章信息
        su.css  #主要样式表
        su.js  #主要功能
```

新文章:
* 在md目录下创建并编辑新的文章`filename.md`.
* 更新文章列表.编辑`su/*.cd`文件,创建新行,格式:  
  ```
  文章标题| |日期信息| |分类| |null| |filename
  ```  
  注:使用`| |`进行分隔.文章分类尚未实现.

使用多说评论:  
* 前往多说,创建新的评论管理站点[(=>)](http://duoshuo.com/create-site/ ""),得到多说短域名.
* 编辑`su/su.js`文件,
  更改行`var myshort="shimeru";//在多说设置的短域名`

使用文章路径加密:  
* 关闭服务器的目录索引.
* 创建文章,随机命名**filename**.cd,前往斯坦福加密库实例页面[(=>)](http://bitwiseshiftleft.github.io/sjcl/demo/ "")或shimeru运行页面,进入F12控制台,运行
  `sjcl.encrypt("yourKey",filename)`,获取加密字串.  
  注：**"yourKey"**为下一步加密问题的答案。
* 编辑`su/*cd`,创建新行,格式:  
  ```
  文章标题| |日期信息| |分类| |提问问题| |加密字串(不包含{}外的"")
  ```

可选：
* 加密`*.cd`文件名

额外使用的技术:  
* jqurey
* 斯坦福加密库

License:  
  the Apache 2.0