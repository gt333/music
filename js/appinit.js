define( function(require, exports) {
    var $=require('sui');
    exports.init=function(){
		require('index.js');
        require('ranking.js');
        require('root.js');
        $(document).on('pageInit', function(e, pageId, $page){
			var form = $page.find('form');
			if(form.length){
				var button = $page.find('.button');
				button.on('tap', function(){
					var me = $(this);
					if(!me.hasClass('disabled')){
						form.submit()
					}
				})
			}
		})
        $.init();
    };
});