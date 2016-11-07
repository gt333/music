define(function(require,exports,modal){
    var $=require('sui');
    $(document).on(' pageInit', '#ranking', function(e, pageId, $page){
       console.log( $('.list-block a'));
       
        $page.on('click','.list-block a',function(){
            console.log('ff')
            var $this=$(this), url=$this.attr('data-href'),dataId=$this.attr('data-id');
            $.router.load(url+'.html?'+dataId,true);
        })
    })
})