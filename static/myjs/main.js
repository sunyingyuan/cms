/**
 * 1. 首先alias里声明第三方的依赖，这里以后要想升级组件版本，或者使用调试版本的话就修改这里。
 * 2. preload里加载必要的seajs插件，最常用的就是用来加载模板和css的插件了。
 * 3. map里做一个各种文件的映射，如果app升级后记着修改这里的版本号用来清空缓存。
 * 4. seajs.use里直接使用app目录下的app.js文件，并约定每个app.js都export一个init方法, 调用init最好在document.ready的回调里，因为这时候layout的dom都加载好了，app里可能会用到。 而且jquery是在html里载入的，这里可以放心的使用$(function(){})。
 */
seajs.config({
	alias: {
		"underscore": "underscore/1.4.4/underscore-debug",
		"backbone": "backbone/0.9.2/backbone-debug",
		"mustache": "mustache/0.5.0/mustache-debug",
		"cookie": "cookie/1.0.2/cookie-debug",
		"moment": "moment/1.7.2/moment-debug"
	},
	preload: ['seajs/plugin-text'],
	map: [
		['.tpl', '.tpl?201304261457'],
		['.js', '.js?201304261457']
	]
});

seajs.use(['/static/myjs/add-domain/app'], function(main){
	$(function(){
		main.init();
	});
});