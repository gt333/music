seajs.config({
	base : '/music/js/',
	paths : {
		'lib' : '../lib/'
	},
	alias : {
		'zepto' : 'lib/zepto',
		'sui' : 'lib/sm'
	}
});
seajs.use('js/appinit',function(app){
    app.init();
})