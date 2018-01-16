(function($){

    $('.second-nav').find('li').hover(function(){
         var _this = $(this);
         var isSelf = false;
         var objectHover;
        _this.find('.blue-horizontal-line').each(function(){
                  objectHover = $(this);
                  if($(this).hasClass('active')) {
                    isSelf = true;   
                  }
         })
         if(isSelf) {
          return ;
         }
         objectHover.addClass('active');
     }, function(){
         var _this = $(this);
         var isSelf = false;
         var objectHover;
        _this.find('.blue-horizontal-line').each(function(){
                  objectHover = $(this);
                  name = $(this).attr('name');
                  if($(this).hasClass('current')) {
                    isSelf = true;   
                  }
         })
         if(isSelf) {
          return ;
         }
         objectHover.removeClass('active');
     });
     
     
      //左侧边栏菜单hover事件
  
     $('.side-bar').find('li[node-type="side-li"]').hover(function(){
         var _this = $(this);
         if(!_this.hasClass('li-active')) {
           _this.css('background-color', '#3a3939');
         }
     }, function() {
         var _this = $(this);
         if(!_this.hasClass('li-active')) {
           _this.css('background-color', 'black');
         }
     });
     
     $('.over-view').hover(function(){
         $(this).css('background-color', '#3a3939');
      }, function(){
        $(this).css('background-color', 'black');
     });
     
     $('.over-view').on('click', function(){
         if(isVip=='true') {
            window.location.href="http://changyan.kuaizhan.com/vip/overview";
         } else {
            window.location.href="http://changyan.kuaizhan.com/overview";
         }
     });
     
     $('.forum-setting-li').on('click', function(){
         if(isVip=='true') {
            window.location.href="http://changyan.kuaizhan.com/vip/forum/list";
         } else {
            window.location.href="http://changyan.kuaizhan.com/forum/list";
         }
     });
     
     $('.right-sub-li').hover(function(){
         if($(this).hasClass('current')){
           return ;
         }
         $(this).css('background-color', '#4ea5ef');
     }, function(){
         if($(this).hasClass('current')){
           return ;
         }
         $(this).css('background-color', '#3a3939');
     });
     
     $.fn.foldSubMenu = function(className){
       $('.side-bar-ul').find('ul').each(function(){
          if(!$(this).hasClass('hide')) {
            if($(this).attr('class') == className) {
            } else {
              $(this).addClass('hide');
              $(this).slideUp();
            }
          }
       });
       
       var li_name = className.substr(0, className.length-3)+'li';
       $('.side-bar').find('li[node-type="side-li"]').each(function(){
          if(!$(this).hasClass(li_name)){
            $(this).find('.open-arrow').removeClass().addClass("close-arrow");
          }
          
          if(!$(this).hasClass(li_name) && $(this).hasClass('li-active')) {
            $(this).removeClass('li-active');
            $(this).css('background-color','black');
          }
       });
       
       if($('.over-view').hasClass('li-active')) {
          $('.over-view').removeClass('li-active');
          $('.over-view').css('background-color', 'black');
       }
     }
     
     $('.comment-audit-li').on('click', function(){
         if($('.comment-audit-nav').hasClass('hide')) {
            $('.comment-audit-nav').slideDown();
            $('.comment-audit-li .close-arrow').removeClass().addClass("open-arrow");
            $('.comment-audit-li').addClass('li-active');
            $('.comment-audit-li').css('background-color','#474747');
            $('.comment-audit-nav').removeClass('hide');
         } else {
            $('.comment-audit-nav').slideUp();
            $('.comment-audit-li .open-arrow').removeClass().addClass("close-arrow");
            $('.comment-audit-li').removeClass('li-active');
            $('.comment-audit-nav').addClass('hide');
         }
         $(this).foldSubMenu('comment-audit-nav');
     })
     
     $('.comment-manage-li').on('click', function(){
         var _this = $(this);
         if($('.comment-manage-nav').hasClass('hide')) {
            $('.comment-manage-nav').slideDown();
            $('.comment-manage-li .close-arrow').removeClass().addClass("open-arrow");
            $('.comment-manage-li').addClass('li-active');
            $('.comment-manage-li').css('background-color','#474747'); 
            $('.comment-manage-nav').removeClass('hide');
         } else {
            $('.comment-manage-nav').slideUp();
            $('.comment-manage-li .open-arrow').removeClass().addClass("close-arrow");
            $('.comment-manage-li').removeClass('li-active');
            $('.comment-manage-nav').addClass('hide');
         }
         $(this).foldSubMenu('comment-manage-nav');
     })
     
     $('.comment-stat-li').on('click', function(){
         if($('.comment-stat-nav').hasClass('hide')) {
            $('.comment-stat-nav').slideDown();
            $('.comment-stat-li .close-arrow').removeClass().addClass("open-arrow");
            $('.comment-stat-li').addClass('li-active');
            $('.comment-stat-li').css('background-color','#474747');
            $('.comment-stat-nav').removeClass('hide');
         } else {
            $('.comment-stat-nav').slideUp();
            $('.comment-stat-li .open-arrow').removeClass().addClass("close-arrow");
            $('.comment-stat-li').removeClass('li-active');
            $('.comment-stat-nav').addClass('hide');
         }
         $(this).foldSubMenu('comment-stat-nav');
     })
     
     $('.labs-plugin-li').on('click', function(){
         if($('.labs-plugin-nav').hasClass('hide')) {
            $('.labs-plugin-nav').slideDown();
            $('.labs-plugin-li .close-arrow').removeClass().addClass("open-arrow");
            $('.labs-plugin-li').addClass('li-active');
            $('.labs-plugin-li').css('background-color','#474747');
            $('.labs-plugin-nav').removeClass('hide');
         } else {
            $('.labs-plugin-nav').slideUp();
            $('.labs-plugin-li .open-arrow').removeClass().addClass("close-arrow");
            $('.labs-plugin-li').removeClass('li-active');
            $('.labs-plugin-nav').addClass('hide');
         }
          $(this).foldSubMenu('labs-plugin-nav');
     })
     
     $('.common-setting-li').on('click', function(){
         if($('.common-setting-nav').hasClass('hide')) {
            $('.common-setting-nav').slideDown();
            $('.common-setting-li .close-arrow').removeClass().addClass("open-arrow");
            $('.common-setting-li').addClass('li-active');
            $('.common-setting-li').css('background-color','#474747');
            $('.common-setting-nav').removeClass('hide');
         } else {
            $('.common-setting-nav').slideUp();
            $('.common-setting-li .open-arrow').removeClass().addClass("close-arrow");
            $('.common-setting-li').removeClass('li-active');
            $('.common-setting-nav').addClass('hide');
         }
         $(this).foldSubMenu('common-setting-nav');
     })
     
     $('.install-changyan-li').on('click', function(){
         if($('.install-changyan-nav').hasClass('hide')) {
            $('.install-changyan-nav').slideDown();
            $('.install-changyan-li .close-arrow').removeClass().addClass("open-arrow");
            $('.install-changyan-li').addClass('li-active');
            $('.install-changyan-li').css('background-color','#474747');
            $('.install-changyan-nav').removeClass('hide');
         } else {
            $('.install-changyan-nav').slideUp();
            $('.install-changyan-li .open-arrow').removeClass().addClass("close-arrow");
            $('.install-changyan-li').removeClass('li-active');
            $('.install-changyan-nav').addClass('hide');
         }
         $(this).foldSubMenu('install-changyan-nav');
     })
     
     $('.advert-manage-li').on('click', function(){
         if($('.advert-manage-nav').hasClass('hide')) {
            $('.advert-manage-nav').slideDown();
            $('.advert-manage-li .close-arrow').removeClass().addClass("open-arrow");
            $('.advert-manage-li').addClass('li-active');
            $('.advert-manage-li').css('background-color','#474747');
            $('.advert-manage-nav').removeClass('hide');
         } else {
            $('.advert-manage-nav').slideUp();
            $('.advert-manage-li .open-arrow').removeClass().addClass("close-arrow");
            $('.advert-manage-li').removeClass('li-active');
            $('.advert-manage-nav').addClass('hide');
         }
         $(this).foldSubMenu('advert-manage-nav');
     })
     
     $('.zhanghao-manage-li').on('click', function(){
         if($('.zhanghao-manage-nav').hasClass('hide')) {
            $('.zhanghao-manage-nav').slideDown();
            $('.zhanghao-manage-li .close-arrow').removeClass().addClass("open-arrow");
            $('.zhanghao-manage-li').addClass('li-active');
            $('.zhanghao-manage-li').css('background-color','#474747');
            $('.zhanghao-manage-nav').removeClass('hide');
         } else {
            $('.zhanghao-manage-nav').slideUp();
            $('.zhanghao-manage-li .open-arrow').removeClass().addClass("close-arrow");
            $('.zhanghao-manage-li').removeClass('li-active');
            $('.zhanghao-manage-nav').addClass('hide');
         }
         $(this).foldSubMenu('zhanghao-manage-nav');
     })
     
     $('.notice-manage-li').on('click', function(){
         if($('.notice-manage-nav').hasClass('hide')) {
            $('.notice-manage-nav').slideDown();
            $('.notice-manage-li .close-arrow').removeClass().addClass("open-arrow");
            $('.notice-manage-li').addClass('li-active');
            $('.notice-manage-li').css('background-color','#474747');
            $('.notice-manage-nav').removeClass('hide');
         } else {
            $('.notice-manage-nav').slideUp();
            $('.notice-manage-li .open-arrow').removeClass().addClass("close-arrow");
            $('.notice-manage-nav').addClass('hide');
         }
         $(this).foldSubMenu('notice-manage-nav');
     })
     
     $('.vip-manage-li').on('click', function(){
         if($('.vip-manage-nav').hasClass('hide')) {
            $('.vip-manage-nav').slideDown();
            $('.vip-manage-li .close-arrow').removeClass().addClass("open-arrow");
            $('.vip-manage-li').addClass('li-active');
            $('.vip-manage-li').css('background-color','#474747');
            $('.vip-manage-nav').removeClass('hide');
         } else {
            $('.vip-manage-nav').slideUp();
            $('.vip-manage-li .open-arrow').removeClass().addClass("close-arrow");
            $('.vip-manage-nav').addClass('hide');
         }
         $(this).foldSubMenu('vip-manage-nav');
     })
     
     $('.head-logo').on('click', function(){
         window.location.href='http://changyan.kuaizhan.com';
     });     
       
     var height = $(window).height();
     var content_height = $('.content').height();
     height = (height >= content_height ? height-55 : content_height);
     if(height <= 950) {
        height = 950;
     }
     $('.side-bar').css('height', height);
     $('.container-self').css('height', height);

})(jQuery);