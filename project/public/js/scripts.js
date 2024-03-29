$(document).ready(function() {
    var owl = $('#rainbow-list');
    if (owl.find('.item').length > 6) {
        owl.owlCarousel({
            items: 5,
            margin: 14,
            dots: true,
            autoplay: true,
            autoplayTimeout: 4000,
            loop: true,
            nav: true,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
        owl.find('.owl-next').html("<i class='fa fa-angle-right'></i>");
        owl.find('.owl-prev').html("<i class='fa fa-angle-left'></i>");
    } else {
        owl.owlCarousel({
            items: 5,
            margin: 14,
            dots: true,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
        owl.find('.owl-next').html("<i class='fa fa-angle-right'></i>");
        owl.find('.owl-prev').html("<i class='fa fa-angle-left'></i>");
    }
});
$(document).ready(function() {
    var owl = $('#plain-list');
    owl.owlCarousel({
        items: 5,
        margin: 14,
        dots: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            500: {
                items: 2,
                nav: true
            },
            768: {
                items: 3,
                nav: true
            },
            992: {
                items: 4,
                nav: true
            },
            1200: {
                items: 5,
                nav: true,
            }
        }
    });
    owl.find('.owl-next').html("<i class='fa fa-angle-right'></i>");
    owl.find('.owl-prev').html("<i class='fa fa-angle-left'></i>");
});
$(document).ready(function() {
    var owl = $('.Topsellers');
    owl.owlCarousel({
        items: 5,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            500: {
                items: 1,
                nav: true
            },
            768: {
                items: 1,
                nav: true
            },
            992: {
                items: 1,
                nav: true
            },
            1200: {
                items: 1,
                nav: true,
            }
        }
    });
    owl.find('.owl-next').html("<i class='fa fa-angle-right'></i>");
    owl.find('.owl-prev').html("<i class='fa fa-angle-left'></i>");
});

$(document).ready(function() {
    $('.ajax_add_to_cart').click(function() {
        var quantity = quantity || 1;
        var variant_id = $(this).attr('data-variant');
        var params = {
            type: 'POST',
            url: '/cart/add.js',
            data: 'quantity=' + quantity + '&id=' + variant_id,
            dataType: 'json',
            success: function(line_item) {
                $('#view-cart > div:not(#clone-item,.text-mini-cart,.cart-check-mini)').remove();
                getCartView();
                Haravan.onItemAdded(line_item);
                $('#cart-modal').modal('show');
            },
            error: function(XMLHttpRequest, textStatus) {
                Haravan.onError(XMLHttpRequest, textStatus);
            }
        };
        jQuery.ajax(params);
    });
    $('#quick-shop-add').click(function(e) {
        if (typeof e !== 'undefined') e.preventDefault();
        var $this = $(this);
        var form = $this.parents('form');
        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: form.serialize(),
            dataType: 'json',
            success: function(line_item) {
                $('#view-cart > div:not(#clone-item,.text-mini-cart,.cart-check-mini)').remove();
                getCartView();
                Haravan.onItemAdded(line_item);
                $('#cart-modal').modal('show');
            },
            error: function(XMLHttpRequest, textStatus) {
                Haravan.onError(XMLHttpRequest, textStatus);
            }


        });
       
        $('#quick-view-modal').modal('hide');
    });
});
$(document).ready(function() {
    Haravan.onItemAdded = function(line_item) {
        console.log(line_item);
        var cart = null;

        jQuery.getJSON('/cart.js', function(cart, textStatus) {
            if (cart) {
                var total_line = 0;
                var total_line = line_item.quantity * line_item.price;
                if (line_item.image != null)
                    $('.layer_cart_img').html("<img src=" + Haravan.resizeImage(line_item.image, 'medium') + ">");
                else
                    $('.layer_cart_img').html("<img src='//hstatic.net/0/0/global/noDefaultImage6_large.gif'>");
                vt = line_item.variant_options;
                if (vt.indexOf('Default Title') != -1)
                    vt = '';
                $('.item-title a').html(line_item.product_title + '<br><span>' + vt + '</span>').attr('href', line_item.url);
                $('.item-total').html(Haravan.formatMoney(cart.total_price, "") + "đ");
                $('.item-price').html(Haravan.formatMoney(line_item.price, "") + "đ");
                $('.cart-count').html(cart.item_count);
                $('.layer_cart_img').attr('href', line_item.url);
                $('.item-quantity').html('<strong>Số lượng:</strong>' + line_item.quantity);
            }
        })
    }
});





$(document).ready(function() {
    jQuery(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    jQuery('.scrollToTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    function addItem(form_id) {
        $.ajax({
            type: 'POST',
            url: '/cart/add.js',
            dataType: 'json',
            data: $('#' + form_id).serialize(),
            success: Haravan.onSuccess,
            error: Haravan.onError
        });
    }

    $(".addtocart").click(function(e) {

        var elem = $(this)
        $(elem).prop("disabled", true)

        e.preventDefault();
        addItem('add-item-form');

    });

    Haravan.onSuccess = function() {

        var elem = $('.addtocart');

        elem.removeAttr("disabled");

        var quantity = parseInt(jQuery('[name="quantity"]').val(), 10) || 1;

        function animate() {

            $("#cart-animation").show();
            var addtocartWidth = elem.outerWidth() / 2
            var addtocartHeight = elem.outerHeight() / 2

            var addtocartLeft = elem.offset().left + addtocartWidth;
            var addtocartTop = $(elem).offset().top + addtocartHeight;

            var buttonAreaWidth = $("#cart-target").outerWidth();
            var buttonAreaHeight = $("#cart-target").outerHeight();

            var buttonAreaLeft = ($("#cart-target").offset().left + buttonAreaWidth / 2 - $("#cart-animation").outerWidth() / 2) - 4;
            var buttonAreaTop = ($("#cart-target").offset().top + buttonAreaWidth / 2 - $("#cart-animation").outerHeight() / 2) - 4;

            var path = {
                start: {
                    x: addtocartLeft,
                    y: addtocartTop,
                    angle: 190.012,
                    length: 0.2
                },
                end: {
                    x: buttonAreaLeft,
                    y: buttonAreaTop,
                    angle: 90.012,
                    length: 0.50
                }
            };

            $('#cart-animation').text(quantity).animate({
                    path: new $.path.bezier(path)
                },
                1200,
                function() {
                    $("#cart-animation").fadeOut(500, function() {
                        $(elem).prop("disabled", false)
                        var cartCount = parseInt($('#cart-count').text()) + quantity;
                        $('#cart-count').text(cartCount)
                    })
                }
            );
        }

        animate();
    };

    Haravan.onError = function(XMLHttpRequest, textStatus) {
        
        var data = eval('(' + XMLHttpRequest.responseText + ')');
        if (!!data.message) {
            alert(data.message + '(' + data.status + '): ' + data.description);
        } else {
            alert('Error : ' + Haravan.fullMessagesFromErrors(data).join('; ') + '.');
        }

        $('.addtocart').removeAttr("disabled");
    };

    Haravan.fullMessagesFromErrors = function(errors) {
        var fullMessages = [];
        jQuery.each(errors, function(attribute, messages) {
            jQuery.each(messages, function(index, message) {
                fullMessages.push(attribute + ' ' + message);
            });
        });
        return fullMessages;
    };

})

jQuery(document).ready(function() {

    if ($('.slides li').size() > 1) {

        $('.flexslider').flexslider({
            animation: "slide",
            slideshow: true,
            animationDuration: 700,
            slideshowSpeed: 6000,
            animation: "fade",
            controlsContainer: ".flex-controls",
            controlNav: true,
            keyboardNav: true
        });
        

    }

    $("select.loc_on_change").change(function() {
        if ($(this).attr("value") == "#") return false;
        window.location = $(this).attr("value");
    });


});

jQuery(document).ready(function($) {



    $("nav.mobile select").change(function() {
        window.location = jQuery(this).val();
    });
    $('#product .thumbs a').click(function() {

        $('#placeholder').attr('href', $(this).attr('href'));
        $('#placeholder img').attr('src', $(this).attr('data-original-image'))

        $('#zoom-image').attr('href', $(this).attr('href'));
        return false;
    });

    $('input[type="submit"], input.btn, button').click(function() { // 
        $(this).blur();
    })

    $("li.dropdown").hover(function() {
        $(this).children('.dropdown').show();
        $(this).children('.dropdown').stop();
        $(this).children('.dropdown').animate({
            opacity: 1.0
        }, 200);
    }, function() {
        $(this).children('.dropdown').stop();
        $(this).children('.dropdown').animate({
            opacity: 0.0
        }, 400, function() {
            $(this).hide();
        });
    });

});

;
(function($) {

    $.path = {};

    var V = {
        rotate: function(p, degrees) {
            var radians = degrees * Math.PI / 180,
                c = Math.cos(radians),
                s = Math.sin(radians);
            return [c * p[0] - s * p[1], s * p[0] + c * p[1]];
        },
        scale: function(p, n) {
            return [n * p[0], n * p[1]];
        },
        add: function(a, b) {
            return [a[0] + b[0], a[1] + b[1]];
        },
        minus: function(a, b) {
            return [a[0] - b[0], a[1] - b[1]];
        }
    };

    $.path.bezier = function(params, rotate) {
        params.start = $.extend({
            angle: 0,
            length: 0.3333
        }, params.start);
        params.end = $.extend({
            angle: 0,
            length: 0.3333
        }, params.end);

        this.p1 = [params.start.x, params.start.y];
        this.p4 = [params.end.x, params.end.y];

        var v14 = V.minus(this.p4, this.p1),
            v12 = V.scale(v14, params.start.length),
            v41 = V.scale(v14, -1),
            v43 = V.scale(v41, params.end.length);

        v12 = V.rotate(v12, params.start.angle);
        this.p2 = V.add(this.p1, v12);

        v43 = V.rotate(v43, params.end.angle);
        this.p3 = V.add(this.p4, v43);

        this.f1 = function(t) {
            return (t * t * t);
        };
        this.f2 = function(t) {
            return (3 * t * t * (1 - t));
        };
        this.f3 = function(t) {
            return (3 * t * (1 - t) * (1 - t));
        };
        this.f4 = function(t) {
            return ((1 - t) * (1 - t) * (1 - t));
        };

        /* p from 0 to 1 */
        this.css = function(p) {
            var f1 = this.f1(p),
                f2 = this.f2(p),
                f3 = this.f3(p),
                f4 = this.f4(p),
                css = {};
            if (rotate) {
                css.prevX = this.x;
                css.prevY = this.y;
            }
            css.x = this.x = (this.p1[0] * f1 + this.p2[0] * f2 + this.p3[0] * f3 + this.p4[0] * f4 + .5) | 0;
            css.y = this.y = (this.p1[1] * f1 + this.p2[1] * f2 + this.p3[1] * f3 + this.p4[1] * f4 + .5) | 0;
            css.left = css.x + "px";
            css.top = css.y + "px";
            return css;
        };
    };

    $.path.arc = function(params, rotate) {
        for (var i in params) {
            this[i] = params[i];
        }

        this.dir = this.dir || 1;

        while (this.start > this.end && this.dir > 0) {
            this.start -= 360;
        }

        while (this.start < this.end && this.dir < 0) {
            this.start += 360;
        }

        this.css = function(p) {
            var a = (this.start * (p) + this.end * (1 - (p))) * Math.PI / 180,
                css = {};

            if (rotate) {
                css.prevX = this.x;
                css.prevY = this.y;
            }
            css.x = this.x = (Math.sin(a) * this.radius + this.center[0] + .5) | 0;
            css.y = this.y = (Math.cos(a) * this.radius + this.center[1] + .5) | 0;
            css.left = css.x + "px";
            css.top = css.y + "px";
            return css;
        };
    };

    $.fx.step.path = function(fx) {
        var css = fx.end.css(1 - fx.pos);
        if (css.prevX != null) {
            $.cssHooks.transform.set(fx.elem, "rotate(" + Math.atan2(css.prevY - css.y, css.prevX - css.x) + ")");
        }
        fx.elem.style.top = css.top;
        fx.elem.style.left = css.left;
    };

})(jQuery);


function getCartAjax() {
    var cart = null;
    $('#cartform').hide();
    $('#myCart #exampleModalLabel').text("Giỏ hàng");
    jQuery.getJSON('/cart.js', function(cart, textStatus) {
        if (cart) {
            $('#cartform').show();
            $('.line-item:not(.original)').remove();
            $.each(cart.items, function(i, item) {
                var total_line = 0;
                var total_line = item.quantity * item.price;
                tr = $('.original').clone().removeClass('original').appendTo('table#cart-table tbody');
                if (item.image != null)
                    tr.find('.item-image').html("<img src=" + Haravan.resizeImage(item.image, 'small') + ">");
                else
                    tr.find('.item-image').html("<img src='//hstatic.net/0/0/global/noDefaultImage6_large.gif'>");
                vt = item.variant_options;
                if (vt.indexOf('Default Title') != -1)
                    vt = '';
                tr.find('.item-title a').html(item.product_title + '<br><span>' + vt + '</span>').attr('href', item.url);
                tr.find('.item-quantity').html("<input id='quantity1' name='updates[]' min='1' type='number' value=" + item.quantity + " class='' />");
                if (typeof(formatMoney) != 'undefined') {
                    tr.find('.item-price').html(Haravan.formatMoney(total_line, formatMoney));
                } else {
                    tr.find('.item-price').html(Haravan.formatMoney(total_line, ''));
                }
                tr.find('.item-delete').html("<a href='#' onclick='deleteCart(" + item.variant_id + ")' >Xóa</a>");
            });
            if (typeof(formatMoney) != 'undefined') {
                $('.item-total').html(Haravan.formatMoney(cart.total_price, formatMoney));
            } else {
                $('.item-total').html(Haravan.formatMoney(cart.total_price, ''));
            }
            $('.modal-title b').html(cart.item_count);
            $('*[id=cart-count]').html(cart.item_count);
            if (cart.item_count == 0) {
              
                $('#myCart #cartform').addClass('hidden');
                $('#myCart #exampleModalLabel').html('Giỏ hàng của bạn đang trống. Mời bạn tiếp tục mua hàng.');
            } else {
                $('#myCart #exampleModalLabel').html('Bạn có ' + cart.item_count + ' sản phẩm trong giỏ hàng.');
                $('#myCart #cartform').removeClass('hidden');
                $('#myCart button').removeAttr('disabled');
            }

        } else {
            $('#myCart #exampleModalLabel').html('Giỏ hàng của bạn đang trống. Mời bạn tiếp tục mua hàng.');
            $('#cartform').hide();
        }
    });

}
$(document).ready(function() {
    $('#cart-target a').click(function(event) {
        event.preventDefault();
        getCartAjax();

        $('#myCart').modal('show');
        $('.modal-backdrop').css({
            'height': $(document).height(),
            'z-index': '99'
        });
    });
    $('a[data-spy=scroll]').click(function() {
        event.preventDefault();
        $('body').animate({
            scrollTop: ($($(this).attr('href')).offset().top - 20) + 'px'
        }, 500);
    })

    $('#update-cart-modal').click(function(event) {
        event.preventDefault();
        if (jQuery('#cartform').serialize().length <= 5) return;
        $(this).html('Đang cập nhật');
        var params = {
            type: 'POST',
            url: '/cart/update.js',
            data: jQuery('#cartform').serialize(),
            dataType: 'json',
            success: function(cart) {
                if ((typeof callback) === 'function') {
                    callback(cart);
                } else {

                    getCartAjax();
                }

                $('#update-cart-modal').html('Cập nhật');
            },
            error: function(XMLHttpRequest, textStatus) {
                Haravan.onError(XMLHttpRequest, textStatus);
            }
        };
        jQuery.ajax(params);
    });
});

function deleteCart(variant_id) {
    var params = {
        type: 'POST',
        url: '/cart/change.js',
        data: 'quantity=0&id=' + variant_id,
        dataType: 'json',
        success: function(cart) {
            getCartAjax();
        },
        error: function(XMLHttpRequest, textStatus) {
            Haravan.onError(XMLHttpRequest, textStatus);
        }
    };
    jQuery.ajax(params);
}
$('#checkout').click(function() {
    $('#cartform').submit();
})

$(function() {
    $(window).resize(function() {
        $('#info').text("Page width: " + $(this).width());
    });
    $(window).trigger('resize');
});