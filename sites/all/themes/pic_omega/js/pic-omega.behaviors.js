(function ($) {

  /**
   * The recommended way for producing HTML markup through JavaScript is to write
   * theming functions. These are similiar to the theming functions that you might
   * know from 'phptemplate' (the default PHP templating engine used by most
   * Drupal themes including Omega). JavaScript theme functions accept arguments
   * and can be overriden by sub-themes.
   *
   * In most cases, there is no good reason to NOT wrap your markup producing
   * JavaScript in a theme function.
   */
  Drupal.theme.prototype.picOmegaExampleButton = function (path, title) {
    // Create an anchor element with jQuery.
    return $('<a href="' + path + '" title="' + title + '">' + title + '</a>');
  };

  /**
   * Behaviors are Drupal's way of applying JavaScript to a page. In short, the
   * advantage of Behaviors over a simple 'document.ready()' lies in how it
   * interacts with content loaded through Ajax. Opposed to the
   * 'document.ready()' event which is only fired once when the page is
   * initially loaded, behaviors get re-executed whenever something is added to
   * the page through Ajax.
   *
   * You can attach as many behaviors as you wish. In fact, instead of overloading
   * a single behavior with multiple, completely unrelated tasks you should create
   * a separate behavior for every separate task.
   *
   * In most cases, there is no good reason to NOT wrap your JavaScript code in a
   * behavior.
   *
   * @param context
   *   The context for which the behavior is being executed. This is either the
   *   full page or a piece of HTML that was just added through Ajax.
   * @param settings
   *   An array of settings (added through drupal_add_js()). Instead of accessing
   *   Drupal.settings directly you should use this because of potential
   *   modifications made by the Ajax callback that also produced 'context'.
   */
  Drupal.behaviors.picOmegaExampleBehavior = {
    attach: function (context, settings) {
      // By using the 'context' variable we make sure that our code only runs on
      // the relevant HTML. Furthermore, by using jQuery.once() we make sure that
      // we don't run the same piece of code for an HTML snippet that we already
      // processed previously. By using .once('foo') all processed elements will
      // get tagged with a 'foo-processed' class, causing all future invocations
      // of this behavior to ignore them.
      $('.some-selector', context).once('foo', function () {
        // Now, we are invoking the previously declared theme function using two
        // settings as arguments.
        var $anchor = Drupal.theme('picOmegaExampleButton', settings.myExampleLinkPath, settings.myExampleLinkTitle);

        // The anchor is then appended to the current element.
        $anchor.appendTo(this);
      });
    }
  };
  Drupal.behaviors.parallax = {
    attach: function(context, settings) {
      //.parallax(xPosition, speedFactor, outerHeight) options:
      //xPosition - Horizontal position of the element
      //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
      //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
      $('.page-home .pane-fpid-11', context).parallax('50%', -0.3);
      $('.page-home .pane-fpid-10', context).parallax('50%', -0.3);
      $('.page-home .pane-fpid-12', context).parallax('50%', -0.1);
      $('.page-who-we-are-the-community .pane-fieldable-panels-pane:first-child').parallax('50%', -1.0);
    }
  };

  Drupal.behaviors.twitterTimeline = {
    attach: function (context, settings) {
      !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
    }
  };

  Drupal.behaviors.mobileMenu = {
    attach: function(context, settings) {
      $('#block-menu-block-2', context).mmenu({}, {
        clone: true,
        classNames: {
          selected: 'active-trail'
        }
      });
    }
  };

  Drupal.behaviors.flexslider = {
    attach: function(context, settings) {
      $('.view-project-slider-home-page .item-list', context).flexslider({
        slideshow: false,
        controlNav: true
      });

      var searchClone = $('#block-search-form').clone();
      $('#mm-block-menu-block-2', context).prepend(searchClone);

      var setOurStaffSlider = function() {
        var responsiveItemWidth = (window.innerWidth >= 768) ? 250 : 0;
        var responsiveMinItems = (window.innerWidth >= 768) ? 3 : 1;
        var responsiveMaxItems = (window.innerWidth >= 768) ? 3 : 0;

        $('.view-our-staff-home .item-list', context).flexslider({
          slideshow: false,
          controlNav: false,
          animation: 'slide',
          itemWidth: responsiveItemWidth,
          minItems: responsiveMinItems,
          maxItems: responsiveMaxItems,
          move: 1
        });
      };

      setOurStaffSlider();
    }
  };

  Drupal.behaviors.smoothScrollFront = {
    attach: function (context, settings) {
      $('.front #block-menu-block-2 li', context).filter('.menu-mlid-305').smoothScroll('#fpid-10');
      $('.front #block-menu-block-2 li', context).filter('.menu-mlid-437').smoothScroll('#fpid-12');
    }
  };

  // TODO if url has an element id appended to it, adjust scrolltop to accommodate for nav bars
  Drupal.behaviors.tryptichLinks = {
    attach: function (context, settings) {

      var hash = window.location.hash;
      var safeHash = escape(hash.substring(1));
      if ( safeHash ) {
               var targetOffset = $("#" + safeHash).offset().top - 120;
               $('html,body').animate({scrollTop: targetOffset}, 800);
    	}
    	$('a[href^="#"]').on('click', function(event){
    	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            event.preventDefault();
            $('html,body').animate({scrollTop:$(this.hash).offset().top - 120}, 800);
          }
      });
    }
  };

  Drupal.behaviors.footable = {
    attach: function (context, settings) {
      $('.view-staff-list .footable', context).footable({
        breakpoints: {
          phone: 480 - 1,
          tablet: 768 - 1
        },
        calculateWidthOverride: function() {
          return {width: $(window).width()};
        }
      });
    }
  };

  $.fn.smoothScroll = function(target) {
    return this.each(function() {
      $(this).children('a').click(function(e) {
        e.preventDefault();
        var targetOffset = $(target).offset();
        $('body,html').animate({
          scrollTop: targetOffset.top
        })
      });
    });
  }

})(jQuery);
