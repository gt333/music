define(function(require, exprot,modal) {
    'use strict';
    var $=require('sui');
        $(document).on(' pageInit', '#main', function(e, pageId, $page){
        $.ajax({
           url:'http://tingapi.ting.baidu.com/v1/restserver/ting?format=json&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=1&size=20&offset=0',
           type:'GET',
           dataType:'jsonp',
           success:function(res){
               console.log(res)
                var temp='';
               $.each(res.song_list,function(k,v){
                temp +='<li class="item-content ">\
							<div class="item-inner">\
								<div class="item-title">\
									<span>'+v.author+'——'+v.album_title+'</span>\
								</div>\
							</div>\
						</li>'

               })
               $page.find('.list-block ul').html(temp)
           }
        });
    })
});