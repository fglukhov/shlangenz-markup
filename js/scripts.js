$(window).resize(function () {
  pupMakeup();
});

$(window).scroll(function () {
  var menu = $(".header .main-menu");
  var submenu = $(".header .main-submenu");
  menuOffset = $(".header-top").height() - menu.height();
  scrollTop = $(window).scrollTop();
  
  if (scrollTop > menuOffset) {
    if (!$(".header-bottom").hasClass("header-bottom-fixed")) {
      menu.addClass("menu-fixed");
      submenu.addClass("submenu-fixed");
      $(".header-bottom").addClass("header-bottom-fixed");
      $(".main-menu").append("<div class='fadeout' />");
      $(".fadeout").css("height",menu.height() - 2);
      $(".header-bottom .main-submenu").css("top",menu.height());
      $(".fadeout").fadeOut(300,function () {
        $(".main-menu").css("background-color","#2c3135");
      });
    }
  } else {
    menu.removeClass("menu-fixed");
    submenu.removeClass("submenu-fixed");
    $(".header-bottom").removeClass("header-bottom-fixed");
    $(".header-bottom .main-submenu").css("top","auto");
    $(".fadeout").fadeIn(300,function () {
      //$(".fadeout").remove();
    });
  }
  
});

$(document).ready(function () {

  $(".common-form .field-group").each(function() {
    var items = $(this).children(".form-item");
    var sectionSize = items.size();
    items.each(function () {
      $(this).css("z-index",sectionSize - $(this).index());
    });
  });
  

  $("input:text").each(function () {
    var input = $(this);
    $(this).parents(".form-item").find(".placeholder").click(function() {
      input.focus();
    });
    $(this).wrap("<div class='input-wrapper'></div>");
    $(this).focus(function () {
      $(this).parents(".form-item").find(".placeholder").hide();
    });
    $(this).blur(function () {
      if ($(this).val() == "") {
        $(this).parents(".form-item").find(".placeholder").show();
      }
    });
  });

  /* Order form validation */
  
  if ($(".order-form .form-text").length) {
  
    $(".order-form form").validate({
      rules: {
        order_email: {
          required: true,
          email: true
        }
      },
      messages: {
        order_comp_name: "Введите название компании",
        order_fio: "Введите ФИО представителя",
        order_email: "Введите правильный адрес",
        order_phone: "Введите номер телефона",
        order_request_number: "Введите номер запроса"
      },
      errorPlacement: function(error, element) {
        element.parents(".input-wrapper").addClass("input-wrapper-error");
        error.insertAfter(element);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).parents(".input-wrapper").removeClass("input-wrapper-error");
        $(element).removeClass(errorClass);
      }
    });
  
  }
  

  if ($(".common-form").length) {
    formMakeup();
  }
  
  $(".partners-list .item").each(function () {
    if (!$(this).find(".lnk").length) {
      $(this).addClass("no-link");
      $(this).click(function () {
        return false;
      });
    }
    
  });
  
  $(".r-col h2").first().css("margin-top",16);
  
  $("ol li").each(function () {
    $(this).html("<span>" + $(this).html() + "<span>")
  });
  
  /* IE PIE buttons fix */
  
  $(".form-item").each(function () {
    var item = $(this);
    item = item.hide();
    var t = setTimeout(function () {
      item.show()
    },100);
  });
  
  $(".button").each(function () {
    var item = $(this);
    item = item.hide();
    var t = setTimeout(function () {
      item.show()
    },100);
  });
  
  $(".form-hint").hover(function () {
    $(this).find(".form-hint-window").show().css("left",$(this).find(".form-hint-trigger").position().left + 5).css("top",$(this).find(".form-hint-trigger").position().top - 15);
    // $(".form-item").css("z-index","");
    // $(this).parents(".form-item").css("z-index",20);
  },function () {
    $(this).find(".form-hint-window").hide();
  });

  

  if ($(".common-form").length) {
    $(".common-form input, .common-form select, .common-form textarea").uniform();
  }
  
  if ($(".cat-slide").length) {
    $(".cat-slide .slide-descr").css("margin-top", (250-$(".cat-slide .slide-descr").outerHeight())/2);
  }
  
  if ($(".product-card .gallery").length) {
    productGallery();
  }
  
  if ($(".docs-list").length) {
    $(".docs-list .pic a").hover(function () {
      $(this).append("<div class='zoom'></div>");
       $(".docs-list .zoom").on("click",function () {
        $(this).parents(".item").find(".pic a").click();
      });
    },function () {
      $(this).children(".zoom").remove();
    });
    $(".docs-list .item .pic").children("a").fancybox();
  }
  
  $("table.params-table").each(function () {
    var table = $(this);
    var thead = $(this).children("thead");
    var tbody = $(this).children("tbody");
    table.wrap("<div class='params-table-wrapper'><div class='params-table-cont'></div></div>");
    table.parents(".params-table-cont").before("<div class='params-table-top'></div>")
    table.parents(".params-table-wrapper").append("<div class='params-table-bottom'></div>")
  });
  
  if ($(".cv-form .form-file").length) {
    $(".cv-form .form-file").uniform({
      fileDefaultHtml: "<span style='color:#468dab;font-size:14px;font-family:PTSansRegular;margin:-5px 0 0 0;display:block;line-height:17px;'>Прикрепите файл со своим резюме.<br>Желательные форматы данных — doc, pdf.<span>",
      fileButtonHtml: "Прикрепить файл"
    });
  }
  
  $(".file").click();
  
  $(".order-type-radios input").change(function () {
    if ($(this).is(":checked")) {
      $(".order-type-radios label").removeClass("label-selected");
      $(this).parents("label").addClass("label-selected");
    }
  });
  
  $("div.uploader span.action").on("click",function () {
    $(this).parents(".form-item").find("input").click();
    //$("#cv-form-file").click();
  });
  
  if ($(".cv-form .form-submit").length) {
    $(".cv-form .form-submit").uniform();
  }
    
  $(".main-slider").each(function () {
    $(this).mainSlider();
  });
  
  $(".project-slider").each(function () {
    $(this).projectSlider();
  });
  
  $(".vacancy-item").last().addClass("vacancy-item-last");
  
  $(".popup .close").click(function () {
    closePopup();
  });
  
  $(".send-cv-button").click(function () {
    $("body").append("<div class='tint'></div>");
    
    $(".cv-popup").show();
    pupMakeup();
    $(".cv-form .button").css("margin-left",-1);
    var t = setTimeout(function () {
      $(".cv-form .button").css("margin-left",0);
     },100);
    
    jQuery(document).keydown(function(e){
      if (e == null) { // ie
        keycode = event.keyCode;
      } else { // mozilla
        keycode = e.which;
      }
      
      if(keycode == 27){ // escape, close box
        closePopup()
      }
      
    });
    
    $(".tint").on("click", function () {
      closePopup()
    });
    
  });
  
  $(".sd-phone a").click(function () {
    $("body").append("<div class='tint'></div>");
    
    $(".callback-popup").show();
    pupMakeup();
    
    jQuery(document).keydown(function(e){
      if (e == null) { // ie
        keycode = event.keyCode;
      } else { // mozilla
        keycode = e.which;
      }
      
      if(keycode == 27){ // escape, close box
        closePopup()
      }
      
    });
    
    $(".tint").on("click", function () {
      closePopup()
    });
    
    return false;
    
  });
  
  $(".mc-menu li").on("click",function () {
  
    if (!$(this).hasClass("act")) {
      var linkAct = $(".mc-menu .act");
      linkAct.after("<li class='item fantom-inact' style='position:absolute;left:" + linkAct.position().left + "px'>" + linkAct.html() + "</li>");
      linkAct.fadeOut(300,function () {
        linkAct.next(".fantom-inact").remove();
        linkAct.removeClass("act").show();
        //linkAct.show();
      });
    
      var link = $(this);
      link.after("<li class='item act fantom-act' style='position:absolute;display:none;left:" + link.position().left +  "px;' >" + link.html() + "</li>");
      link.next(".fantom-act").fadeIn(300,function () {
        link.next(".fantom-act").remove();
        link.addClass("act");
      });
      $(".mc-content:visible").fadeOut(300,function () {
        $(".mc-content#" + link.attr("ref")).fadeIn(300);
      });
      //$(".mc-menu li").removeClass("act");
      //$(".cont-act").fadeOut(1000);
      //$("cont-act").removeClass("cont-act");
    }
  });
  
  $(".main-projects .descr").each(function () {
    if ($(this).height() + 8 < $(this).children(".d-cont").height()) {
      $(this).append("<div class='ellipsis'>...</div>")
    }
  });

  $("ul").each(function () {
    $(this).find("li").first().addClass("first");
    $(this).find("li").last().addClass("last");
  });
  
  $("table").each(function () {
    $(this).find("tr").first().addClass("first");
    $(this).find("tr").last().addClass("last");
  });
  
  $(".mm-top").each(function () {
    var trigger = $(this);
    var ref = $(this).find("a").attr("ref");
    var submenu = $(".main-submenu#"+ref);
    
    var triggerHover = 0;
    var submenuHover = 0;
    var animation = 0;
    
    submenu.hover(function () {
      submenuHover = 1;
      trigger.addClass("mm-top-hover");
    },function () {
      submenuHover = 0;
    });
    
    trigger.hover(function () {
      triggerHover = 1;
      trigger.addClass("mm-top-hover");
      if (animation) {
        submenu.stop();
        submenu.animate({
          marginTop:0,
          opacity:1
        },300,function () {
          animation = 0;
        });
      }
      
    },function () {
      trigger.removeClass("mm-top-hover");
      triggerHover = 0;
    });
    
    
    
    $(document).mousemove(function () {
    
      var t = setTimeout(function () {
        if (triggerHover && !animation && submenu.css("display") != "block") {
          submenu.stop();
          animation = 1;
          submenu.show().animate({
            marginTop:0,
            opacity:1
          },400,function () {
            animation = 0;
            clearTimeout(t);
          });
        }
        
        if (!triggerHover && !submenuHover && !animation && submenu.css("display") == "block") {
          trigger.removeClass("mm-top-hover");
          submenu.stop();
          animation = 1;
          submenu.animate({
            marginTop:-35,
            opacity:0
          },400,function () {
            animation = 0;
            submenu.hide();
            clearTimeout(t);
          });
        }
        
      },100);
    
      
      
    });
    
  });
  
});

(function( jQuery ) {
  jQuery.fn.mainSlider = function() {
    var slider = $(this);
    var slides = slider.children(".slide");
    var sliderSize = slides.size();
    
    slider.append("<div class='lister'></div>");
    
    var lister = slider.children(".lister");
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    sliderMakeup();
    
    if (sliderSize > 1) {
    
      for (i=1;i<=sliderSize;i++) {
        lister.append("<div class='item'>" + i + "</div>")
      }
      
      var listerItems = lister.children(".item");
      
      listerItems.eq(0).addClass("act");
      
      
      
      listerItems.on("click",function () {
        if (!$(this).hasClass("act")) {
          listerItems.removeClass("act");
          $(this).addClass("act");
          slides.fadeOut(250).removeClass("slide-act");
          slides.eq($(this).index()).fadeIn(250).addClass("slide-act");
          sliderMakeup();
        }
      });
      
      listerItems.bind("mouseover",function () {
        $(this).click();
      });
      
      var play = 1;
      
      slider.bind("mouseover",function () {
        play = 0;
      });
      slider.bind("mouseout",function () {
        play = 1;
      });
      
      if (play) {
        var t = setInterval(function () {
          if (play) {
            if (lister.find(".act").index() < sliderSize-1) {
              lister.find(".act").next(".item").click();
            } else {
              listerItems.eq(0).click();
            }
          }
        },5000);
      }
    }
  }
})( jQuery );

(function( jQuery ) {
  jQuery.fn.projectSlider = function() {
    var slider = $(this);
    var slides = slider.children(".slide");
    var sliderSize = slides.size();
    
    slider.append("<div class='lister'></div>");
    
    var lister = slider.children(".lister");
    
    slides.hide();
    slides.eq(0).show().addClass("slide-act");
    
    if (sliderSize > 1) {
    
      for (i=1;i<=sliderSize;i++) {
        lister.append("<div class='item'>" + i + "</div>")
      }
      
      var listerItems = lister.children(".item");
      
      listerItems.eq(0).addClass("act");
      
      listerItems.on("click",function () {
        if (!$(this).hasClass("act")) {
          listerItems.removeClass("act");
          $(this).addClass("act");
          slides.fadeOut(250).removeClass("slide-act");
          slides.eq($(this).index()).fadeIn(250).addClass("slide-act");
        }
      });
      
      listerItems.bind("mouseover",function () {
        $(this).click();
      });
      
      var play = 1;
      
      slider.bind("mouseover",function () {
        play = 0;
      });
      slider.bind("mouseout",function () {
        play = 1;
      });
      
      if (play) {
        var t = setInterval(function () {
          if (play) {
            if (lister.find(".act").index() < sliderSize-1) {
              lister.find(".act").next(".item").click();
            } else {
              listerItems.eq(0).click();
            }
          }
        },5000);
      }
      
    }
    
  }
})( jQuery );


function sliderMakeup() {
  $(".slide-act .slide-descr").css("margin-top", (250-$(".slide-act .slide-descr").outerHeight())/2);
}

function pupMakeup () {
  $(".tint").css("height",$(".wrapper").height()).css("width",$(".wrapper").width());
  $(".popup").css("top",$(window).scrollTop() + ($(window).height()-$(".popup").height())/2).css("left",($(window).width()-$(".popup").width())/2 - 20);
}

function productGallery() {
  var picContainer = $(".product-card .product-pic-img");
  var thumbLinks = $(".product-thumbs a");
  
  thumbLinks.each(function () {
    $(this).attr("index",$(this).index())
  })
  
  var thumbsClone = thumbLinks.clone();
  
  thumbLinks.parents(".product-thumbs").after(thumbsClone);
  
  thumbsClone.fancybox().hide();
  
  thumbLinks.click(function () {
    picContainer.html("<a index='" + $(this).attr("index") + "' href='" + $(this).attr("rel") +  "'><img src='" + $(this).attr("medsize") + "' /></a>");
    return false;
  });
  
  thumbLinks.eq(0).click();
  
  picContainer.parents(".pic-wrapper").find(".product-pic-mask").on("click",function () {
    thumbsClone.eq(parseInt($(this).parents(".pic-wrapper").find("a").attr("index"))).click();
  });
  
}

function formMakeup() {
  $(".form-item").each(function () {
    if ($(this).find(".form-hint").length && $(this).find(".form-postfix").length) {
      $(this).addClass("form-item-postfix");
    }
    if ($(this).find(".form-hint").length && !$(this).find(".form-postfix").length) {
      $(this).addClass("form-item-hint");
    }
    if (!$(this).find(".form-hint").length && $(this).find(".form-postfix").length) {
      $(this).addClass("form-item-postfix");
    }
    
  });
}

function closePopup() {
  $(".tint").remove();
  $(".popup").hide();
}