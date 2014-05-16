myjs里存放我们自己写的代码，除了这个目录里的代码，其它目录的代码都是网上下载的，有可能会在升级时覆盖。

要求全部符合seajs规范。 首先下面建立一个utils和stuff目录，分别存放每个单页面app所要用到的helper包和杂项包。
然后其它的目录基本上是一个子目录表示一个单页面app，单页面app用Backbone开发，每个app目录里面做如下约定。
1. main.js 用来引导整个app，包含了seajs.config和seajs.use的调用，具体下面会看到。
2. app.js 用来做Backbone的初始化工作，包含Backbone的Router的定义，以及驱动路由的Backbone.History.start()语句。
3. *-view.js 用来实现app的每个View。
4. *.tpl 用来存放view使用的模板文件，使用seajs按需异步加载。
5. *.css 用来存放app UI所需要的样式文件，使用seajs按需异步加载。

依赖关系
每个app基本上是一个独立的个体，实现高内聚，尽量少的外部依赖。除了本目录内的view,model, tpl的依赖外，再就是第三方组件(Backbone,Mustache等)的依赖了和项目公共组件的依赖了如require('../utils/xxx.js')。
也就是说如果有多个app使用的共用代码，也保存在myjs目录下，并建立子目录进行命名空间划分，如stuff,utils,xxxhelper等。 这样下来一个网站有很多个app，整个文件目录也很有条理，不会乱。
