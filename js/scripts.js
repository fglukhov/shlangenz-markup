$(window).resize(function () {
  pupMakeup();
});

$(document).ready(function () {

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
    $(".form-item").css("z-index",1);
    $(this).parents(".form-item").css("z-index",1000);
  },function () {
    $(this).find(".form-hint-window").hide();
  });

  $("input:text").each(function () {
    $(this).wrap("<div class='input-wrapper'></div>").addClass("initial");
    var initVal = $(this).val();
    $(this).focus(function () {
      if ($(this).val() == initVal) {
        $(this).removeClass("initial").val("");
      }
    });
    $(this).blur(function () {
      if ($(this).val() == "") {
        $(this).addClass("initial").val(initVal);
      }
      
    });
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
    $(".docs-list .pic").hover(function () {
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
  
  $(".mc-menu li").click(function () {
    $(".mc-menu li").removeClass("act");
    $(this).addClass("act");
    $(".mc-content").hide();
    $(".mc-content#" + $(this).attr("ref")).show();
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
    
    trigger.bind("mouseenter",function () {
      trigger.addClass("mm-top-hover");
      submenu.show();
    });
    
    trigger.bind("mouseleave",function () {
      trigger.removeClass("mm-top-hover");
      submenu.hide();
      submenu.bind("mouseenter",function () {
        trigger.addClass("mm-top-hover");
        submenu.show();
      });
    });
    
    submenu.bind("mouseleave",function () {
      trigger.removeClass("mm-top-hover");
      submenu.hide();
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
    
    for (i=1;i<=sliderSize;i++) {
      lister.append("<div class='item'>" + i + "</div>")
    }
    
    var listerItems = lister.children(".item");
    
    listerItems.eq(0).addClass("act");
    
    sliderMakeup();
    
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
  thumbLinks.click(function () {
    picContainer.html("<a href='" + $(this).attr("rel") +  "'><img src='" + $(this).attr("href") + "' /></a>");
    return false;
  });
  thumbLinks.eq(0).click();
  picContainer.find("a").fancybox();
  
  picContainer.parents(".pic-wrapper").find(".product-pic-mask").on("click",function () {
    picContainer.find("a").click();
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