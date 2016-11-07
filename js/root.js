define(function(require, exports) {
    var $=require('sui');
   $(document).on('pageInit', function(e, pageId, $page){
       $page.on('click' ,'#nav a',function(){
           var url=$(this).attr('data-href');
           $.router.load(url,true)
       })
    })
});