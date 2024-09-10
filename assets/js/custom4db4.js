$(function(){
	        $('.formCapt').ebcaptcha();
	    }); 
 
 
 (function($){

	jQuery.fn.ebcaptcha = function(options){

		var element = this; 
		var submit = $(this).find('button[type=submit]');
		$('<label id="ebcaptchatext"></label>').insertBefore(submit);
		$('<input type="text" class="textbox" id="ebcaptchainput" required data-error="Please solve the math problem."/><div class="help-block with-errors"></div><br/><br/>').insertBefore(submit);
		var input = this.find('#ebcaptchainput'); 
		var label = this.find('#ebcaptchatext'); 
		
		$(element).find('button[type=submit]').attr('disabled','disabled'); 

		
		var randomNr1 = 0; 
		var randomNr2 = 0;
		var totalNr = 0;


		randomNr1 = Math.floor(Math.random()*10);
		randomNr2 = Math.floor(Math.random()*10);
		totalNr = randomNr1 + randomNr2;
		var texti = randomNr1+" + "+randomNr2+" = ";
		//var texti = "What is "+randomNr1+" + "+randomNr2;
		$(label).text(texti);
		
	
		$(input).keyup(function(){

			var nr = $(this).val();
			if(nr==totalNr)
			{
				$(element).find('button[type=submit]').removeAttr('disabled');				
			}
			else{
				$(element).find('button[type=submit]').attr('disabled','disabled');
			}
			
		});

		$(document).keypress(function(e)
		{
			if(e.which==13)
			{
				if((element).find('button[type=submit]').is(':disabled')===true)
				{
					e.preventDefault();
					return false;
				}
			}

		});

	};

})(jQuery);
/*Has num val*/
function setButtonURL() {
    Tawk_API.toggle();
    return false;
}
function toggleChat() {
    Tawk_API.toggle();
    return false;
}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
        return true;
}
$('.scrollPack').slimScroll({
    distance: '20px',
    opacity: 1,
    height : '350px',
    alwaysVisible: true,
    color: '#d3dcde'
});
/*Has num val end*/
$(document).ready(function() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        dots: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });
    // $('.facility_phone_number').keyup(function(){
    //     $('.facility_phone_number').mask('+1 (999) 999-9999');
    // });
    $(".menu-open").on("click", function() {
        $("body").toggleClass("menu-open")
    });
    // $(".menu-bottom").click(function() {
    //     $(this).toggleClass("click")
    // });
    $(window).scroll(function(){
        if ($(window).width() > 825) {
        if ($(window).scrollTop() >= 150) {
            $('header').addClass('sticky-header');
            $(".main-logo img").attr("src", "https://www.tech4states.com/assets/img/logo.svg");
        }
        else {
            $('header').removeClass('sticky-header');
            $(".main-logo img").attr("src", "https://www.tech4states.com/assets/img/logo-white.svg");
        }
    }
    });
    $(".popup-default-click").click(function() {}),
    $('.various').click(function() {
        var packn = $(this).attr('title');
        $(".hidden-fields .has-Pack").val(packn);
        var packset = $(this).attr('data-set');
        $(".hidden-fields .packname").val(packset);
        var packn2 = $(this).attr('name');
        $(".hidden-fields .packp").val(packn2);
    });
    var key = '5XpThOAEkfgOvEJ';
    var currentIP = $("meta[name=ip2loc]").attr('content');
    $.ajax({
        method: 'get',
        url: 'https://pro.ip-api.com/json/' + currentIP,
        data: {key: key},
        success: function (data) {
            if (data) {
                $('input[name=ip2loc_ip]').val(data.query);
                $('input[name=ip2loc_isp]').val(data.isp);
                $('input[name=ip2loc_org]').val(data.org);
                $('input[name=ctry]').val(data.country);
                $('input[name=ip2loc_region]').val(data.regionName);
                $('input[name=ip2loc_city]').val(data.city);
            }
        }
    });
    // Mobile Menu
    $('.hamburger').click(function() {
        $(this).toggleClass('open');
        $('.mob-menu').toggleClass('open');
        $('body').toggleClass('over-hidden');
    });

    /* Tabbing Function */
    $('[data-targetit]').on('click', function(e) {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        var target = $(this).data('targetit');
        $('.' + target).siblings('[class^="box-"]').hide();
        $('.' + target).fadeIn();
        $('.pricing-slider').slick("setPosition", 0);
        $('.responsive-slider').slick("setPosition", 0);
    });
    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".set .content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-chevron-up")
                .addClass("fa-chevron-down");
        } else {
            $(".set > a i")
                .removeClass("fa-chevron-up")
                .addClass("fa-chevron-down");
            $(this)
                .find("i")
                .removeClass("fa-chevron-down")
                .addClass("fa-chevron-up");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".set .content").slideUp(200);
            $(this)
                .siblings(".set .content")
                .slideDown(200);
        }
    });
    $(".area-service .service-type-listing li").hover(function() {
        $('.area-service .service-type-listing li').removeClass('active');
    }, function() {
        $('.area-service .service-type-listing li:nth-child(1)').addClass('active');
    });

    // Dropdown Nav
    $('li.dropdown-nav').hover(function() {
        $(this).children('ul').stop(true, false, true).slideToggle(300);
    });

    // Accordian
    $('.accordian h4').click(function() {
        $('.accordian li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.accordian li div').slideUp();
        $(this).parent('li').find('div').slideDown();
    });

    // Popup Default
    $('.popup-default-click').click(function() {
      $('body').addClass('over-hidden');
      $('.overlay').fadeIn();
      $('.popup-default').fadeIn();
    });
    
    $('.popup-close, .overlay').click(function() {
      closePopup();
    });

    // CTA-1 Slider
    $('.test-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
    });
// T-FRANCE Slider
    $('.france-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Pricing Slider
    $('.pricing-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
  });
      // logo Slider
    $('.logo-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
  });
    $('.blog-slider').slick({
        dots: false,
        arrows: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

  // Industries we served Slider
  $('.weserved-slider').slick({
		dots: true,
		arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 825,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
	
	// Testimonial Slider
    $('.testimonial-slider').slick({
		dots: true,
		arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 825,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $('.main-services-slider').slick({
      dots: true,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current').siblings().removeClass('current');
    });
});


if ($(window).width() < 825) {
  $('.responsive-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    
});
}

// Move Background
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    translate = "translate(" + x + "px, " + y + "px) scale(1.0)";
    $(".moving-banner-item").css({
        "-webit-transform": translate,
        "-moz-transform": translate,
        transform: translate,
    });
    window.requestAnimationFrame(moveBackground);
}
$(window).on("mousemove click", function (e) {
    var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
});
moveBackground();

$('body').on('click', '.scroll-to-pricing', function() {
  goToScroll('pricing');
});

function goToScroll(e) {
  $('html, body').animate({
    scrollTop: $("." + e).offset().top
  }, 1500);
}

function closePopup() {
    $('.popup').hide();
    $('body').removeClass('over-hidden');
    $('.overlay').fadeOut();
}
$(document).ready(function() {
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
    var scene = document.getElementById('scene1');
    var parallax = new Parallax(scene);
    var scene = document.getElementById('scene2');
    var parallax = new Parallax(scene);
    var scene = document.getElementById('scene3');
    var parallax = new Parallax(scene);
});
  // Read More Button
  function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
