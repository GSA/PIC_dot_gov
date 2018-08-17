/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: https://www.ianlunn.co.uk/
Plugin URL: https://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
https://www.opensource.org/licenses/mit-license.php
https://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;

		//get the starting position of each element to have parallax applied to it
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}

		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;

		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}

				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);
;
/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | https://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * https://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);;
/*
 * jQuery mmenu v4.3.6
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * Dual licensed under the MIT license:
 * https://en.wikipedia.org/wiki/MIT_License
 */
!function(e){function n(n,s,t){if(t){if("object"!=typeof n&&(n={}),"boolean"!=typeof n.isMenu){var o=t.children();n.isMenu=1==o.length&&o.is(s.panelNodetype)}return n}n=e.extend(!0,{},e[i].defaults,n),("top"==n.position||"bottom"==n.position)&&("back"==n.zposition||"next"==n.zposition)&&(e[i].deprecated('Using position "'+n.position+'" in combination with zposition "'+n.zposition+'"','zposition "front"'),n.zposition="front");for(var a=["position","zposition","modal","moveBackground"],l=0,d=a.length;d>l;l++)"undefined"!=typeof n[a[l]]&&(e[i].deprecated('The option "'+a[l]+'"',"offCanvas."+a[l]),n.offCanvas=n.offCanvas||{},n.offCanvas[a[l]]=n[a[l]]);return n}function s(n){n=e.extend(!0,{},e[i].configuration,n);for(var s=["panel","list","selected","label","spacer"],t=0,o=s.length;o>t;t++)"undefined"!=typeof n[s[t]+"Class"]&&(e[i].deprecated('The configuration option "'+s[t]+'Class"',"classNames."+s[t]),n.classNames[s[t]]=n[s[t]+"Class"]);if("undefined"!=typeof n.counterClass&&(e[i].deprecated('The configuration option "counterClass"',"classNames.counters.counter"),n.classNames.counters=n.classNames.counters||{},n.classNames.counters.counter=n.counterClass),"undefined"!=typeof n.collapsedClass&&(e[i].deprecated('The configuration option "collapsedClass"',"classNames.labels.collapsed"),n.classNames.labels=n.classNames.labels||{},n.classNames.labels.collapsed=n.collapsedClass),"undefined"!=typeof n.header)for(var s=["panelHeader","panelNext","panelPrev"],t=0,o=s.length;o>t;t++)"undefined"!=typeof n.header[s[t]+"Class"]&&(e[i].deprecated('The configuration option "header.'+s[t]+'Class"',"classNames.header."+s[t]),n.classNames.header=n.classNames.header||{},n.classNames.header[s[t]]=n.header[s[t]+"Class"]);for(var s=["pageNodetype","pageSelector","menuWrapperSelector","menuInjectMethod"],t=0,o=s.length;o>t;t++)"undefined"!=typeof n[s[t]]&&(e[i].deprecated('The configuration option "'+s[t]+'"',"offCanvas."+s[t]),n.offCanvas=n.offCanvas||{},n.offCanvas[s[t]]=n[s[t]]);return n}function t(){r=!0,u.$wndw=e(window),u.$html=e("html"),u.$body=e("body"),e.each([a,l,d],function(e,n){n.add=function(e){e=e.split(" ");for(var s in e)n[e[s]]=n.mm(e[s])}}),a.mm=function(e){return"mm-"+e},a.add("wrapper menu ismenu inline panel list subtitle selected label spacer current highest hidden opened subopened subopen fullsubopen subclose"),a.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},l.mm=function(e){return"mm-"+e},l.add("parent"),d.mm=function(e){return e+".mm"},d.add("toggle open close setSelected transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend scroll resize click keydown keyup"),e[i]._c=a,e[i]._d=l,e[i]._e=d,e[i].glbl=u}var i="mmenu",o="4.3.6";if(!e[i]){var a={},l={},d={},r=!1,u={$wndw:null,$html:null,$body:null};e[i]=function(e,n,s){return this.$menu=e,this.opts=n,this.conf=s,this.vars={},this._init(),this},e[i].uniqueId=0,e[i].prototype={_init:function(){if(this.opts=n(this.opts,this.conf,this.$menu),this._initMenu(),this._initPanels(),this._initLinks(),this._bindCustomEvents(),e[i].addons)for(var s=0;s<e[i].addons.length;s++)"function"==typeof this["_addon_"+e[i].addons[s]]&&this["_addon_"+e[i].addons[s]]()},_bindCustomEvents:function(){var n=this,s=this.$menu.find(this.opts.isMenu&&!this.opts.slidingSubmenus?"ul, ol":"."+a.panel);s.off(d.toggle+" "+d.open+" "+d.close).on(d.toggle+" "+d.open+" "+d.close,function(e){e.stopPropagation()}),this.opts.slidingSubmenus?s.on(d.open,function(){return n._openSubmenuHorizontal(e(this))}):s.on(d.toggle,function(){var n=e(this);return n.triggerHandler(n.parent().hasClass(a.opened)?d.close:d.open)}).on(d.open,function(){return e(this).parent().addClass(a.opened),"open"}).on(d.close,function(){return e(this).parent().removeClass(a.opened),"close"})},_initMenu:function(){this.opts.offCanvas&&this.conf.clone&&(this.$menu=this.$menu.clone(!0),this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",a.mm(e(this).attr("id")))})),this.$menu.contents().each(function(){3==e(this)[0].nodeType&&e(this).remove()}),this.$menu.parent().addClass(a.wrapper);var n=[a.menu];n.push(a.mm(this.opts.slidingSubmenus?"horizontal":"vertical")),this.opts.classes&&n.push(this.opts.classes),this.opts.isMenu&&n.push(a.ismenu),this.$menu.addClass(n.join(" "))},_initPanels:function(){var n=this;this.__refactorClass(e("."+this.conf.classNames.list,this.$menu),this.conf.classNames.list,"list"),this.opts.isMenu&&e("ul, ol",this.$menu).not(".mm-nolist").addClass(a.list);var s=e("."+a.list+" > li",this.$menu);this.__refactorClass(s,this.conf.classNames.selected,"selected"),this.__refactorClass(s,this.conf.classNames.label,"label"),this.__refactorClass(s,this.conf.classNames.spacer,"spacer"),s.off(d.setSelected).on(d.setSelected,function(n,t){n.stopPropagation(),s.removeClass(a.selected),"boolean"!=typeof t&&(t=!0),t&&e(this).addClass(a.selected)}),this.__refactorClass(e("."+this.conf.classNames.panel,this.$menu),this.conf.classNames.panel,"panel"),this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("."+a.list).children().children().filter(this.conf.panelNodetype)).addClass(a.panel);var t=e("."+a.panel,this.$menu);t.each(function(){var s=e(this),t=s.attr("id")||n.__getUniqueId();s.attr("id",t)}),t.find("."+a.panel).each(function(){var s=e(this),t=s.is("ul, ol")?s:s.find("ul ,ol").first(),i=s.parent(),o=i.find("> a, > span"),d=i.closest("."+a.panel);if(s.data(l.parent,i),i.parent().is("."+a.list)){var r=e('<a class="'+a.subopen+'" href="#'+s.attr("id")+'" />').insertBefore(o);o.is("a")||r.addClass(a.fullsubopen),n.opts.slidingSubmenus&&t.prepend('<li class="'+a.subtitle+'"><a class="'+a.subclose+'" href="#'+d.attr("id")+'">'+o.text()+"</a></li>")}});var i=this.opts.slidingSubmenus?d.open:d.toggle;if(t.each(function(){var s=e(this),t=s.attr("id");e('a[href="#'+t+'"]',n.$menu).off(d.click).on(d.click,function(e){e.preventDefault(),s.trigger(i)})}),this.opts.slidingSubmenus){var o=e("."+a.list+" > li."+a.selected,this.$menu);o.parents("li").removeClass(a.selected).end().add(o.parents("li")).each(function(){var n=e(this),s=n.find("> ."+a.panel);s.length&&(n.parents("."+a.panel).addClass(a.subopened),s.addClass(a.opened))}).closest("."+a.panel).addClass(a.opened).parents("."+a.panel).addClass(a.subopened)}else{var o=e("li."+a.selected,this.$menu);o.parents("li").removeClass(a.selected).end().add(o.parents("li")).addClass(a.opened)}var r=t.filter("."+a.opened);r.length||(r=t.first()),r.addClass(a.opened).last().addClass(a.current),this.opts.slidingSubmenus&&t.not(r.last()).addClass(a.hidden).end().find("."+a.panel).appendTo(this.$menu)},_initLinks:function(){var n=this;e("."+a.list+" > li > a",this.$menu).not("."+a.subopen).not("."+a.subclose).not('[rel="external"]').not('[target="_blank"]').off(d.click).on(d.click,function(s){var t=e(this),i=t.attr("href")||"";n.__valueOrFn(n.opts.onClick.setSelected,t)&&t.parent().trigger(d.setSelected);var o=n.__valueOrFn(n.opts.onClick.preventDefault,t,"#"==i.slice(0,1));o&&s.preventDefault(),n.__valueOrFn(n.opts.onClick.blockUI,t,!o)&&u.$html.addClass(a.blocking),n.__valueOrFn(n.opts.onClick.close,t,o)&&n.$menu.triggerHandler(d.close)})},_openSubmenuHorizontal:function(n){if(n.hasClass(a.current))return!1;var s=e("."+a.panel,this.$menu),t=s.filter("."+a.current);return s.removeClass(a.highest).removeClass(a.current).not(n).not(t).addClass(a.hidden),n.hasClass(a.opened)?t.addClass(a.highest).removeClass(a.opened).removeClass(a.subopened):(n.addClass(a.highest),t.addClass(a.subopened)),n.removeClass(a.hidden).addClass(a.current),setTimeout(function(){n.removeClass(a.subopened).addClass(a.opened)},this.conf.openingInterval),"open"},_update:function(e){if(this.updates||(this.updates=[]),"function"==typeof e)this.updates.push(e);else for(var n=0,s=this.updates.length;s>n;n++)this.updates[n].call(this,e)},__valueOrFn:function(e,n,s){return"function"==typeof e?e.call(n[0]):"undefined"==typeof e&&"undefined"!=typeof s?s:e},__refactorClass:function(e,n,s){e.filter("."+n).removeClass(n).addClass(a[s])},__transitionend:function(e,n,s){var t=!1,i=function(){t||n.call(e[0]),t=!0};e.one(d.transitionend,i),e.one(d.webkitTransitionEnd,i),setTimeout(i,1.1*s)},__getUniqueId:function(){return a.mm(e[i].uniqueId++)}},e.fn[i]=function(o,a){return r||t(),o=n(o,a),a=s(a),this.each(function(){var n=e(this);n.data(i)||n.data(i,new e[i](n,o,a))})},e[i].version=o,e[i].defaults={classes:"",slidingSubmenus:!0,onClick:{setSelected:!0}},e[i].configuration={panelNodetype:"ul, ol, div",transitionDuration:400,openingInterval:25,classNames:{panel:"Panle",list:"List",selected:"Selected",label:"Label",spacer:"Spacer"}},function(){var n=window.document,s=window.navigator.userAgent,t="ontouchstart"in n,o="WebkitOverflowScrolling"in n.documentElement.style,a=function(){return s.indexOf("Android")>=0?2.4>parseFloat(s.slice(s.indexOf("Android")+8)):!1}();e[i].support={touch:t,oldAndroidBrowser:a,overflowscrolling:function(){return t?o?!0:a?!1:!0:!0}()}}(),e[i].debug=function(){},e[i].deprecated=function(e,n){"undefined"!=typeof console&&"undefined"!=typeof console.warn&&console.warn("MMENU: "+e+" is deprecated, use "+n+" instead.")}}}(jQuery);
/*
 * jQuery mmenu offCanvas addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function o(e){return e}function t(e){return"string"!=typeof e.pageSelector&&(e.pageSelector="> "+e.pageNodetype),e}function n(){d=!0,s=e[r]._c,i=e[r]._d,a=e[r]._e,s.add("offcanvas modal background opening blocker page"),i.add("style"),a.add("opening opened closing closed setPage"),p=e[r].glbl,p.$allMenus=(p.$allMenus||e()).add(this.$menu),p.$wndw.on(a.keydown,function(e){return p.$html.hasClass(s.opened)&&9==e.keyCode?(e.preventDefault(),!1):void 0});var o=0;p.$wndw.on(a.resize,function(e,t){if(t||p.$html.hasClass(s.opened)){var n=p.$wndw.height();(t||n!=o)&&(o=n,p.$page.css("minHeight",n))}})}var s,i,a,p,r="mmenu",l="offCanvas",d=!1;e[r].prototype["_addon_"+l]=function(){if(!this.opts[l])return this;d||n(),this.opts[l]=o(this.opts[l]),this.conf[l]=t(this.conf[l]),"boolean"!=typeof this.vars.opened&&(this.vars.opened=!1);var e=this.opts[l],i=this.conf[l],a=[s.offcanvas];"left"!=e.position&&a.push(s.mm(e.position)),"back"!=e.zposition&&a.push(s.mm(e.zposition)),this.$menu.addClass(a.join(" ")).parent().removeClass(s.wrapper),this[l+"_initPage"](p.$page),this[l+"_initBlocker"](),this[l+"_initOpenClose"](),this[l+"_bindCustomEvents"](),this.$menu[i.menuInjectMethod+"To"](i.menuWrapperSelector)},e[r].addons=e[r].addons||[],e[r].addons.push(l),e[r].defaults[l]={position:"left",zposition:"back",modal:!1,moveBackground:!0},e[r].configuration[l]={pageNodetype:"div",pageSelector:null,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[r].prototype.open=function(){if(this.vars.opened)return!1;var e=this;return this._openSetup(),setTimeout(function(){e._openFinish()},25),"open"},e[r].prototype._openSetup=function(){p.$allMenus.not(this.$menu).trigger(a.close),p.$page.data(i.style,p.$page.attr("style")||""),p.$wndw.trigger(a.resize,[!0]);var e=[s.opened];this.opts[l].modal&&e.push(s.modal),this.opts[l].moveBackground&&e.push(s.background),"left"!=this.opts[l].position&&e.push(s.mm(this.opts[l].position)),"back"!=this.opts[l].zposition&&e.push(s.mm(this.opts[l].zposition)),this.opts.classes&&e.push(this.opts.classes),p.$html.addClass(e.join(" ")),this.$menu.addClass(s.current+" "+s.opened)},e[r].prototype._openFinish=function(){var e=this;this.__transitionend(p.$page,function(){e.$menu.trigger(a.opened)},this.conf.transitionDuration),this.vars.opened=!0,p.$html.addClass(s.opening),this.$menu.trigger(a.opening)},e[r].prototype.close=function(){if(!this.vars.opened)return!1;var e=this;return this.__transitionend(p.$page,function(){e.$menu.removeClass(s.current).removeClass(s.opened),p.$html.removeClass(s.opened).removeClass(s.modal).removeClass(s.background).removeClass(s.mm(e.opts[l].position)).removeClass(s.mm(e.opts[l].zposition)),e.opts.classes&&p.$html.removeClass(e.opts.classes),p.$page.attr("style",p.$page.data(i.style)),e.vars.opened=!1,e.$menu.trigger(a.closed)},this.conf.transitionDuration),p.$html.removeClass(s.opening),this.$menu.trigger(a.closing),"close"},e[r].prototype[l+"_initBlocker"]=function(){var o=this;p.$blck||(p.$blck=e('<div id="'+s.blocker+'" />').appendTo(p.$body)),p.$blck.off(a.touchstart).on(a.touchstart,function(e){e.preventDefault(),e.stopPropagation(),p.$blck.trigger(a.mousedown)}).on(a.mousedown,function(e){e.preventDefault(),p.$html.hasClass(s.modal)||o.close()})},e[r].prototype[l+"_initPage"]=function(o){o||(o=e(this.conf[l].pageSelector,p.$body),o.length>1&&(e[r].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf[l].pageNodetype+">."),o=o.wrapAll("<"+this.conf[l].pageNodetype+" />").parent())),o.addClass(s.page),p.$page=o},e[r].prototype[l+"_initOpenClose"]=function(){var o=this,t=this.$menu.attr("id");t&&t.length&&(this.conf.clone&&(t=s.umm(t)),e('a[href="#'+t+'"]').off(a.click).on(a.click,function(e){e.preventDefault(),o.open()}));var t=p.$page.attr("id");t&&t.length&&e('a[href="#'+t+'"]').on(a.click,function(e){e.preventDefault(),o.close()})},e[r].prototype[l+"_bindCustomEvents"]=function(){var e=this,o=a.open+" "+a.opening+" "+a.opened+" "+a.close+" "+a.closing+" "+a.closed+" "+a.setPage;this.$menu.off(o).on(o,function(e){e.stopPropagation()}),this.$menu.on(a.open,function(){e.open()}).on(a.close,function(){e.close()}).on(a.setPage,function(o,t){e[l+"_initPage"](t),e[l+"_initOpenClose"]()})}}(jQuery);
/*
 * jQuery mmenu counters addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(t){function n(n){return"boolean"==typeof n&&(n={add:n,update:n}),"object"!=typeof n&&(n={}),n=t.extend(!0,{},t[i].defaults[c],n),n.count&&(t[i].deprecated('the option "count" for counters','the option "update"'),n.update=n.count),n}function e(t){return t}function o(){d=!0,s=t[i]._c,a=t[i]._d,u=t[i]._e,s.add("counter search noresultsmsg"),r=t[i].glbl}var s,a,u,r,i="mmenu",c="counters",d=!1;t[i].prototype["_addon_"+c]=function(){d||o(),this.opts[c]=n(this.opts[c]),this.conf[c]=e(this.conf[c]);var u=this,r=this.opts[c];if(this.conf[c],this.__refactorClass(t("em",this.$menu),this.conf.classNames[c].counter,"counter"),r.add&&t("."+s.panel,this.$menu).each(function(){var n=t(this),e=n.data(a.parent);if(e){var o=t('<em class="'+s.counter+'" />'),u=e.find("> a."+s.subopen);u.parent().find("em."+s.counter).length||u.before(o)}}),r.update){var i=t("em."+s.counter,this.$menu);i.each(function(){var n=t(this),e=t(n.next().attr("href"),u.$menu);if(e.is("."+s.list)||(e=e.find("> ."+s.list)),e.length){var o=function(){var t=e.children().not("."+s.label).not("."+s.subtitle).not("."+s.hidden).not("."+s.search).not("."+s.noresultsmsg);n.html(t.length)};o(),u._update(o)}})}},t[i].addons=t[i].addons||[],t[i].addons.push(c),t[i].defaults[c]={add:!1,update:!1},t[i].configuration.classNames[c]={counter:"Counter"}}(jQuery);
/*
 * jQuery mmenu dragOpen addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={open:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[p].defaults[g],t)}function a(e){return e}function o(){f=!0,s=e[p]._c,i=e[p]._d,r=e[p]._e,s.add("dragging"),r.add("dragleft dragright dragup dragdown dragend"),d=e[p].glbl}function n(e,t,a){return t>e&&(e=t),e>a&&(e=a),e}var s,i,r,d,p="mmenu",g="dragOpen",f=!1;e[p].prototype["_addon_"+g]=function(){if(e.fn.hammer){f||o(),this.opts[g]=t(this.opts[g]),this.conf[g]=a(this.conf[g]);var i=this,p=this.opts[g],h=this.conf[g];if(p.open){var c=0,l=!1,u=0,v=0,m="width";switch(this.opts.offCanvas.position){case"left":case"right":m="width";break;default:m="height"}switch(this.opts.offCanvas.position){case"left":var _={events:r.dragleft+" "+r.dragright,open_dir:"right",close_dir:"left",delta:"deltaX",page:"pageX",negative:!1};break;case"right":var _={events:r.dragleft+" "+r.dragright,open_dir:"left",close_dir:"right",delta:"deltaX",page:"pageX",negative:!0};break;case"top":var _={events:r.dragup+" "+r.dragdown,open_dir:"down",close_dir:"up",delta:"deltaY",page:"pageY",negative:!1};break;case"bottom":var _={events:r.dragup+" "+r.dragdown,open_dir:"up",close_dir:"down",delta:"deltaY",page:"pageY",negative:!0}}var w=this.__valueOrFn(p.pageNode,this.$menu,d.$page);"string"==typeof w&&(w=e(w));var b=d.$page.find("."+s.mm("fixed-top")+", ."+s.mm("fixed-bottom")),$=d.$page;switch(this.opts.offCanvas.zposition){case"back":$=$.add(b);break;case"front":$=this.$menu;break;case"next":$=$.add(this.$menu).add(b)}w.hammer().on(r.touchstart+" "+r.mousedown,function(e){if("touchstart"==e.type)var t=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],a=t[_.page];else if("mousedown"==e.type)var a=e[_.page];switch(i.opts.offCanvas.position){case"right":case"bottom":a>=d.$wndw[m]()-p.maxStartPos&&(c=1);break;default:a<=p.maxStartPos&&(c=1)}}).on(_.events+" "+r.dragend,function(e){c>0&&(e.gesture.preventDefault(),e.stopPropagation())}).on(_.events,function(e){var t=_.negative?-e.gesture[_.delta]:e.gesture[_.delta];if(l=t>u?_.open_dir:_.close_dir,u=t,u>p.threshold&&1==c){if(d.$html.hasClass(s.opened))return;c=2,i._openSetup(),i.vars.opened=!0,d.$html.addClass(s.dragging),v=n(d.$wndw[m]()*h[m].perc,h[m].min,h[m].max)}2==c&&$.css(i.opts.offCanvas.position,n(u,10,v)-("front"==i.opts.offCanvas.zposition?v:0))}).on(r.dragend,function(){2==c&&(d.$html.removeClass(s.dragging),$.css(i.opts.offCanvas.position,""),l==_.open_dir?i._openFinish():i.close()),c=0})}}},e[p].addons=e[p].addons||[],e[p].addons.push(g),e[p].defaults[g]={open:!1,maxStartPos:100,threshold:50},e[p].configuration[g]={width:{perc:.8,min:140,max:440},height:{perc:.8,min:140,max:880}}}(jQuery);
/*
 * jQuery mmenu header addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function t(t){return"boolean"==typeof t&&(t={add:t,update:t}),"object"!=typeof t&&(t={}),t=e.extend(!0,{},e[i].defaults[h],t)}function a(e){return e}function n(){c=!0,s=e[i]._c,r=e[i]._d,o=e[i]._e,s.add("header hasheader prev next title titletext"),d=e[i].glbl}var s,r,o,d,i="mmenu",h="header",c=!1;e[i].prototype["_addon_"+h]=function(){c||n(),this.opts[h]=t(this.opts[h]),this.conf[h]=a(this.conf[h]);var r=this,i=this.opts[h];if(this.conf[h],i.add){var l=i.content?i.content:'<a class="'+s.prev+'" href="#"></a><span class="'+s.title+'"></span><a class="'+s.next+'" href="#"></a>';e('<div class="'+s.header+'" />').prependTo(this.$menu).append(l)}var f=e("div."+s.header,this.$menu);if(f.length&&this.$menu.addClass(s.hasheader),i.update&&f.length){var p=f.find("."+s.title),u=f.find("."+s.prev),v=f.find("."+s.next),m=!1;d.$page&&(m="#"+d.$page.attr("id")),u.add(v).on(o.click,function(t){t.preventDefault(),t.stopPropagation();var a=e(this).attr("href");"#"!==a&&(m&&a==m?r.$menu.trigger(o.close):e(a,r.$menu).trigger(o.open))}),e("."+s.panel,this.$menu).each(function(){var t=e(this),a=e("."+r.conf.classNames[h].panelHeader,t).text(),n=e("."+r.conf.classNames[h].panelPrev,t).attr("href"),d=e("."+r.conf.classNames[h].panelNext,t).attr("href");a||(a=e("."+s.subclose,t).text()),a||(a=i.title),n||(n=e("."+s.subclose,t).attr("href"));var c=function(){p[a?"show":"hide"]().text(a),u[n?"show":"hide"]().attr("href",n),v[d?"show":"hide"]().attr("href",d)};t.on(o.open,function(){c()}),t.hasClass(s.current)&&c()})}},e[i].addons=e[i].addons||[],e[i].addons.push(h),e[i].defaults[h]={add:!1,content:!1,update:!1,title:"Menu"},e[i].configuration.classNames[h]={panelHeader:"Header",panelNext:"Next",panelPrev:"Prev"}}(jQuery);
/*
 * jQuery mmenu labels addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(l){function s(s){return"boolean"==typeof s&&(s={collapse:s}),"object"!=typeof s&&(s={}),s=l.extend(!0,{},l[p].defaults[d],s)}function e(l){return l}function a(){i=!0,o=l[p]._c,n=l[p]._d,t=l[p]._e,o.add("collapsed"),c=l[p].glbl}var o,n,t,c,p="mmenu",d="labels",i=!1;l[p].prototype["_addon_"+d]=function(){i||a(),this.opts[d]=s(this.opts[d]),this.conf[d]=e(this.conf[d]);var n=this.opts[d];this.conf[d],n.collapse&&(this.__refactorClass(l("li",this.$menu),this.conf.classNames[d].collapsed,"collapsed"),l("."+o.label,this.$menu).each(function(){var s=l(this),e=s.nextUntil("."+o.label,"all"==n.collapse?null:"."+o.collapsed);"all"==n.collapse&&(s.addClass(o.opened),e.removeClass(o.collapsed)),e.length&&(s.wrapInner("<span />"),l('<a href="#" class="'+o.subopen+" "+o.fullsubopen+'" />').prependTo(s).on(t.click,function(l){l.preventDefault(),s.toggleClass(o.opened),e[s.hasClass(o.opened)?"removeClass":"addClass"](o.collapsed)}))}))},l[p].addons=l[p].addons||[],l[p].addons.push(d),l[p].defaults[d]={collapse:!1},l[p].configuration.classNames[d]={collapsed:"Collapsed"}}(jQuery);
/*
 * jQuery mmenu searchfield addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(e){function s(s){return"boolean"==typeof s&&(s={add:s,search:s}),"object"!=typeof s&&(s={}),s=e.extend(!0,{},e[d].defaults[c],s),"boolean"!=typeof s.showLinksOnly&&(s.showLinksOnly="menu"==s.addTo),s}function n(e){return e}function t(){h=!0,o=e[d]._c,r=e[d]._d,i=e[d]._e,o.add("search hassearch noresultsmsg noresults nosubresults counter"),i.add("search reset change"),l=e[d].glbl}function a(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var o,r,i,l,d="mmenu",c="searchfield",h=!1;e[d].prototype["_addon_"+c]=function(){h||t(),this.opts[c]=s(this.opts[c]),this.conf[c]=n(this.conf[c]);var l=this,d=this.opts[c];if(this.conf[c],d.add){switch(d.addTo){case"menu":var u=this.$menu;break;case"panels":var u=e("."+o.panel,this.$menu);break;default:var u=e(d.addTo,this.$menu).filter("."+o.panel)}u.length&&u.each(function(){var s=e(this),n=s.is("."+o.list)?"li":"div",t=e("<"+n+' class="'+o.search+'" />');if(t.append('<input placeholder="'+d.placeholder+'" type="text" autocomplete="off" />'),s.is("."+o.menu))t.prependTo(l.$menu);else{var a=s.children().first(),r=a.is("."+o.subtitle)?"After":"Before";t["insert"+r](a)}d.noResults&&(s.is("."+o.menu)&&(s=s.find("."+o.panel).first()),n=s.is("."+o.list)?"li":"div",e("<"+n+' class="'+o.noresultsmsg+'" />').html(d.noResults).appendTo(s))})}if(this.$menu.children("div."+o.search).length&&this.$menu.addClass(o.hassearch),d.search){var f=e("."+o.search,this.$menu);f.length&&f.each(function(){var s=e(this);if("menu"==d.addTo)var n=e("."+o.panel,l.$menu),t=l.$menu;else var n=s.closest("."+o.panel),t=n;var c=n.add(n.children("."+o.list)),h=s.find("input"),u=e("> li",c),f=u.filter("."+o.label),p=u.not("."+o.subtitle).not("."+o.label).not("."+o.search).not("."+o.noresultsmsg),m="> a";d.showLinksOnly||(m+=", > span"),h.off(i.keyup+" "+i.change).on(i.keyup,function(e){a(e.keyCode)||s.trigger(i.search)}).on(i.change,function(){s.trigger(i.search)}),s.off(i.reset+" "+i.search).on(i.reset+" "+i.search,function(e){e.stopPropagation()}).on(i.reset,function(){s.trigger(i.search,[""])}).on(i.search,function(s,a){"string"==typeof a?h.val(a):a=h.val(),a=a.toLowerCase(),n.scrollTop(0),p.add(f).addClass(o.hidden),p.each(function(){var s=e(this);e(m,s).text().toLowerCase().indexOf(a)>-1&&s.add(s.prevAll("."+o.label).first()).removeClass(o.hidden)}),e(n.get().reverse()).each(function(s){var n=e(this),t=n.data(r.parent);if(t){var a=n.add(n.find("> ."+o.list)).find("> li").not("."+o.subtitle).not("."+o.search).not("."+o.noresultsmsg).not("."+o.label).not("."+o.hidden);a.length?t.removeClass(o.hidden).removeClass(o.nosubresults).prevAll("."+o.label).first().removeClass(o.hidden):"menu"==d.addTo&&(n.hasClass(o.opened)&&setTimeout(function(){t.trigger(i.open)},1.5*(s+1)*l.conf.openingInterval),t.addClass(o.nosubresults))}}),t[p.not("."+o.hidden).length?"removeClass":"addClass"](o.noresults),l._update()})})}},e[d].addons=e[d].addons||[],e[d].addons.push(c),e[d].defaults[c]={add:!1,addTo:"menu",search:!1,placeholder:"Search",noResults:"No results found."}}(jQuery);
/*
 * jQuery mmenu toggles addon
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 */
!function(t){function n(t){return t}function s(t){return t}function e(){g=!0,o=t[r]._c,i=t[r]._d,a=t[r]._e,o.add("toggle"),l=t[r].glbl}var o,i,a,l,r="mmenu",d="toggles",g=!1;t[r].prototype["_addon_"+d]=function(){g||e(),this.opts[d]=n(this.opts[d]),this.conf[d]=s(this.conf[d]);var i=this;this.opts[d],this.conf[d],this.__refactorClass(t("input",this.$menu),this.conf.classNames[d].toggle,"toggle"),t("."+o.toggle,this.$menu).each(function(){var n=t(this),s=n.parent(),e=n.attr("id")||i.__getUniqueId();n.attr("id",e),s.prepend(n),t('<label for="'+e+'" class="'+o.toggle+'"><div></div></label>').insertBefore(s.children().last())})},t[r].addons=t[r].addons||[],t[r].addons.push(d),t[r].defaults[d]={},t[r].configuration.classNames[d]={toggle:"Toggle"}}(jQuery);;
/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);;
﻿/*!
 * FooTable - Awesome Responsive Tables
 * Version : 2.0.1.5
 * https://fooplugins.com/plugins/footable-jquery/
 *
 * Requires jQuery - https://jquery.com/
 *
 * Copyright 2014 Steven Usher & Brad Vincent
 * Released under the MIT license
 * You are free to use FooTable in commercial projects as long as this copyright header is left intact.
 *
 * Date: 26 Aug 2014
 */
(function ($, w, undefined) {
    w.footable = {
        options: {
            delay: 100, // The number of millseconds to wait before triggering the react event
            breakpoints: { // The different screen resolution breakpoints
                phone: 480,
                tablet: 1024
            },
            parsers: {  // The default parser to parse the value out of a cell (values are used in building up row detail)
                alpha: function (cell) {
                    return $(cell).data('value') || $.trim($(cell).text());
                },
                numeric: function (cell) {
                    var val = $(cell).data('value') || $(cell).text().replace(/[^0-9.\-]/g, '');
                    val = parseFloat(val);
                    if (isNaN(val)) val = 0;
                    return val;
                }
            },
            addRowToggle: true,
            calculateWidthOverride: null,
            toggleSelector: ' > tbody > tr:not(.footable-row-detail)', //the selector to show/hide the detail row
            columnDataSelector: '> thead > tr:last-child > th, > thead > tr:last-child > td', //the selector used to find the column data in the thead
            detailSeparator: ':', //the separator character used when building up the detail row
            toggleHTMLElement: '<span />', // override this if you want to insert a click target rather than use a background image.
            createGroupedDetail: function (data) {
                var groups = { '_none': { 'name': null, 'data': [] } };
                for (var i = 0; i < data.length; i++) {
                    var groupid = data[i].group;
                    if (groupid !== null) {
                        if (!(groupid in groups))
                            groups[groupid] = { 'name': data[i].groupName || data[i].group, 'data': [] };

                        groups[groupid].data.push(data[i]);
                    } else {
                        groups._none.data.push(data[i]);
                    }
                }
                return groups;
            },
            createDetail: function (element, data, createGroupedDetail, separatorChar, classes) {
                /// <summary>This function is used by FooTable to generate the detail view seen when expanding a collapsed row.</summary>
                /// <param name="element">This is the div that contains all the detail row information, anything could be added to it.</param>
                /// <param name="data">
                ///  This is an array of objects containing the cell information for the current row.
                ///  These objects look like the below:
                ///    obj = {
                ///      'name': String, // The name of the column
                ///      'value': Object, // The value parsed from the cell using the parsers. This could be a string, a number or whatever the parser outputs.
                ///      'display': String, // This is the actual HTML from the cell, so if you have images etc you want moved this is the one to use and is the default value used.
                ///      'group': String, // This is the identifier used in the data-group attribute of the column.
                ///      'groupName': String // This is the actual name of the group the column belongs to.
                ///    }
                /// </param>
                /// <param name="createGroupedDetail">The grouping function to group the data</param>
                /// <param name="separatorChar">The separator charactor used</param>
                /// <param name="classes">The array of class names used to build up the detail row</param>

                var groups = createGroupedDetail(data);
                for (var group in groups) {
                    if (groups[group].data.length === 0) continue;
                    if (group !== '_none') element.append('<div class="' + classes.detailInnerGroup + '">' + groups[group].name + '</div>');

                    for (var j = 0; j < groups[group].data.length; j++) {
                        var separator = (groups[group].data[j].name) ? separatorChar : '';
                        element.append('<div class="' + classes.detailInnerRow + '"><div class="' + classes.detailInnerName + '">' + groups[group].data[j].name + separator + '</div><div class="' + classes.detailInnerValue + '">' + groups[group].data[j].display + '</div></div>');
                    }
                }
            },
            classes: {
                main: 'footable',
                loading: 'footable-loading',
                loaded: 'footable-loaded',
                toggle: 'footable-toggle',
                disabled: 'footable-disabled',
                detail: 'footable-row-detail',
                detailCell: 'footable-row-detail-cell',
                detailInner: 'footable-row-detail-inner',
                detailInnerRow: 'footable-row-detail-row',
                detailInnerGroup: 'footable-row-detail-group',
                detailInnerName: 'footable-row-detail-name',
                detailInnerValue: 'footable-row-detail-value',
                detailShow: 'footable-detail-show'
            },
            triggers: {
                initialize: 'footable_initialize',                      //trigger this event to force FooTable to reinitialize
                resize: 'footable_resize',                              //trigger this event to force FooTable to resize
                redraw: 'footable_redraw',								//trigger this event to force FooTable to redraw
                toggleRow: 'footable_toggle_row',                       //trigger this event to force FooTable to toggle a row
                expandFirstRow: 'footable_expand_first_row',            //trigger this event to force FooTable to expand the first row
                expandAll: 'footable_expand_all',                       //trigger this event to force FooTable to expand all rows
                collapseAll: 'footable_collapse_all'                    //trigger this event to force FooTable to collapse all rows
            },
            events: {
                alreadyInitialized: 'footable_already_initialized',     //fires when the FooTable has already been initialized
                initializing: 'footable_initializing',                  //fires before FooTable starts initializing
                initialized: 'footable_initialized',                    //fires after FooTable has finished initializing
                resizing: 'footable_resizing',                          //fires before FooTable resizes
                resized: 'footable_resized',                            //fires after FooTable has resized
                redrawn: 'footable_redrawn',                            //fires after FooTable has redrawn
                breakpoint: 'footable_breakpoint',                      //fires inside the resize function, when a breakpoint is hit
                columnData: 'footable_column_data',                     //fires when setting up column data. Plugins should use this event to capture their own info about a column
                rowDetailUpdating: 'footable_row_detail_updating',      //fires before a detail row is updated
                rowDetailUpdated: 'footable_row_detail_updated',        //fires when a detail row is being updated
                rowCollapsed: 'footable_row_collapsed',                 //fires when a row is collapsed
                rowExpanded: 'footable_row_expanded',                   //fires when a row is expanded
                rowRemoved: 'footable_row_removed',                     //fires when a row is removed
                reset: 'footable_reset'                                 //fires when FooTable is reset
            },
            debug: false, // Whether or not to log information to the console.
            log: null
        },

        version: {
            major: 0, minor: 5,
            toString: function () {
                return w.footable.version.major + '.' + w.footable.version.minor;
            },
            parse: function (str) {
                version = /(\d+)\.?(\d+)?\.?(\d+)?/.exec(str);
                return {
                    major: parseInt(version[1], 10) || 0,
                    minor: parseInt(version[2], 10) || 0,
                    patch: parseInt(version[3], 10) || 0
                };
            }
        },

        plugins: {
            _validate: function (plugin) {
                ///<summary>Simple validation of the <paramref name="plugin"/> to make sure any members called by FooTable actually exist.</summary>
                ///<param name="plugin">The object defining the plugin, this should implement a string property called "name" and a function called "init".</param>

                if (!$.isFunction(plugin)) {
                  if (w.footable.options.debug === true) console.error('Validation failed, expected type "function", received type "{0}".', typeof plugin);
                  return false;
                }
                var p = new plugin();
                if (typeof p['name'] !== 'string') {
                    if (w.footable.options.debug === true) console.error('Validation failed, plugin does not implement a string property called "name".', p);
                    return false;
                }
                if (!$.isFunction(p['init'])) {
                    if (w.footable.options.debug === true) console.error('Validation failed, plugin "' + p['name'] + '" does not implement a function called "init".', p);
                    return false;
                }
                if (w.footable.options.debug === true) console.log('Validation succeeded for plugin "' + p['name'] + '".', p);
                return true;
            },
            registered: [], // An array containing all registered plugins.
            register: function (plugin, options) {
                ///<summary>Registers a <paramref name="plugin"/> and its default <paramref name="options"/> with FooTable.</summary>
                ///<param name="plugin">The plugin that should implement a string property called "name" and a function called "init".</param>
                ///<param name="options">The default options to merge with the FooTable's base options.</param>

                if (w.footable.plugins._validate(plugin)) {
                    w.footable.plugins.registered.push(plugin);
                    if (typeof options === 'object') $.extend(true, w.footable.options, options);
                }
            },
            load: function(instance){
              var loaded = [], registered, i;
              for(i = 0; i < w.footable.plugins.registered.length; i++){
                try {
                  registered = w.footable.plugins.registered[i];
                  loaded.push(new registered(instance));
                } catch (err) {
                  if (w.footable.options.debug === true) console.error(err);
                }
              }
              return loaded;
            },
            init: function (instance) {
                ///<summary>Loops through all registered plugins and calls the "init" method supplying the current <paramref name="instance"/> of the FooTable as the first parameter.</summary>
                ///<param name="instance">The current instance of the FooTable that the plugin is being initialized for.</param>

                for (var i = 0; i < instance.plugins.length; i++) {
                    try {
                      instance.plugins[i]['init'](instance);
                    } catch (err) {
                        if (w.footable.options.debug === true) console.error(err);
                    }
                }
            }
        }
    };

    var instanceCount = 0;

    $.fn.footable = function (options) {
        ///<summary>The main constructor call to initialize the plugin using the supplied <paramref name="options"/>.</summary>
        ///<param name="options">
        ///<para>A JSON object containing user defined options for the plugin to use. Any options not supplied will have a default value assigned.</para>
        ///<para>Check the documentation or the default options object above for more information on available options.</para>
        ///</param>

        options = options || {};
        var o = $.extend(true, {}, w.footable.options, options); //merge user and default options
        return this.each(function () {
            instanceCount++;
            var footable = new Footable(this, o, instanceCount);
			$(this).data('footable', footable);
        });
    };

    //helper for using timeouts
    function Timer() {
        ///<summary>Simple timer object created around a timeout.</summary>
        var t = this;
        t.id = null;
        t.busy = false;
        t.start = function (code, milliseconds) {
            ///<summary>Starts the timer and waits the specified amount of <paramref name="milliseconds"/> before executing the supplied <paramref name="code"/>.</summary>
            ///<param name="code">The code to execute once the timer runs out.</param>
            ///<param name="milliseconds">The time in milliseconds to wait before executing the supplied <paramref name="code"/>.</param>

            if (t.busy) {
                return;
            }
            t.stop();
            t.id = setTimeout(function () {
                code();
                t.id = null;
                t.busy = false;
            }, milliseconds);
            t.busy = true;
        };
        t.stop = function () {
            ///<summary>Stops the timer if its runnning and resets it back to its starting state.</summary>

            if (t.id !== null) {
                clearTimeout(t.id);
                t.id = null;
                t.busy = false;
            }
        };
    }

    function Footable(t, o, id) {
        ///<summary>Inits a new instance of the plugin.</summary>
        ///<param name="t">The main table element to apply this plugin to.</param>
        ///<param name="o">The options supplied to the plugin. Check the defaults object to see all available options.</param>
        ///<param name="id">The id to assign to this instance of the plugin.</param>

        var ft = this;
        ft.id = id;
        ft.table = t;
        ft.options = o;
        ft.breakpoints = [];
        ft.breakpointNames = '';
        ft.columns = {};
        ft.plugins = w.footable.plugins.load(ft);

        var opt = ft.options,
            cls = opt.classes,
            evt = opt.events,
            trg = opt.triggers,
            indexOffset = 0;

        // This object simply houses all the timers used in the FooTable.
        ft.timers = {
            resize: new Timer(),
            register: function (name) {
                ft.timers[name] = new Timer();
                return ft.timers[name];
            }
        };

        ft.init = function () {
            var $window = $(w), $table = $(ft.table);

            w.footable.plugins.init(ft);

            if ($table.hasClass(cls.loaded)) {
                //already loaded FooTable for the table, so don't init again
                ft.raise(evt.alreadyInitialized);
                return;
            }

            //raise the initializing event
            ft.raise(evt.initializing);

            $table.addClass(cls.loading);

            // Get the column data once for the life time of the plugin
            $table.find(opt.columnDataSelector).each(function () {
                var data = ft.getColumnData(this);
                ft.columns[data.index] = data;
            });

            // Create a nice friendly array to work with out of the breakpoints object.
            for (var name in opt.breakpoints) {
                ft.breakpoints.push({ 'name': name, 'width': opt.breakpoints[name] });
                ft.breakpointNames += (name + ' ');
            }

            // Sort the breakpoints so the smallest is checked first
            ft.breakpoints.sort(function (a, b) {
                return a['width'] - b['width'];
            });

            $table
                .unbind(trg.initialize)
                //bind to FooTable initialize trigger
                .bind(trg.initialize, function () {
                    //remove previous "state" (to "force" a resize)
                    $table.removeData('footable_info');
                    $table.data('breakpoint', '');

                    //trigger the FooTable resize
                    $table.trigger(trg.resize);

                    //remove the loading class
                    $table.removeClass(cls.loading);

                    //add the FooTable and loaded class
                    $table.addClass(cls.loaded).addClass(cls.main);

                    //raise the initialized event
                    ft.raise(evt.initialized);
                })
                .unbind(trg.redraw)
                //bind to FooTable redraw trigger
                .bind(trg.redraw, function () {
                    ft.redraw();
                })
                .unbind(trg.resize)
                //bind to FooTable resize trigger
                .bind(trg.resize, function () {
                    ft.resize();
                })
                .unbind(trg.expandFirstRow)
                //bind to FooTable expandFirstRow trigger
                .bind(trg.expandFirstRow, function () {
                    $table.find(opt.toggleSelector).first().not('.' + cls.detailShow).trigger(trg.toggleRow);
                })
                .unbind(trg.expandAll)
                //bind to FooTable expandFirstRow trigger
                .bind(trg.expandAll, function () {
                    $table.find(opt.toggleSelector).not('.' + cls.detailShow).trigger(trg.toggleRow);
                })
                .unbind(trg.collapseAll)
                //bind to FooTable expandFirstRow trigger
                .bind(trg.collapseAll, function () {
                    $table.find('.' + cls.detailShow).trigger(trg.toggleRow);
                });

            //trigger a FooTable initialize
            $table.trigger(trg.initialize);

            //bind to window resize
            $window
                .bind('resize.footable', function () {
                    ft.timers.resize.stop();
                    ft.timers.resize.start(function () {
                        ft.raise(trg.resize);
                    }, opt.delay);
                });
        };

        ft.addRowToggle = function () {
            if (!opt.addRowToggle) return;

            var $table = $(ft.table),
                hasToggleColumn = false;

            //first remove all toggle spans
            $table.find('span.' + cls.toggle).remove();

            for (var c in ft.columns) {
                var col = ft.columns[c];
                if (col.toggle) {
                    hasToggleColumn = true;
                    var selector = '> tbody > tr:not(.' + cls.detail + ',.' + cls.disabled + ') > td:nth-child(' + (parseInt(col.index, 10) + 1) + '),' +
											'> tbody > tr:not(.' + cls.detail + ',.' + cls.disabled + ') > th:nth-child(' + (parseInt(col.index, 10) + 1) + ')';
                    $table.find(selector).not('.' + cls.detailCell).prepend($(opt.toggleHTMLElement).addClass(cls.toggle));
                    return;
                }
            }
            //check if we have an toggle column. If not then add it to the first column just to be safe
            if (!hasToggleColumn) {
                $table
                    .find('> tbody > tr:not(.' + cls.detail + ',.' + cls.disabled + ') > td:first-child')
										.add('> tbody > tr:not(.' + cls.detail + ',.' + cls.disabled + ') > th:first-child')
                    .not('.' + cls.detailCell)
                    .prepend($(opt.toggleHTMLElement).addClass(cls.toggle));
            }
        };

        ft.setColumnClasses = function () {
            $table = $(ft.table);
            for (var c in ft.columns) {
                var col = ft.columns[c];
                if (col.className !== null) {
                    var selector = '', first = true;
                    $.each(col.matches, function (m, match) { //support for colspans
                        if (!first) selector += ', ';
                        selector += '> tbody > tr:not(.' + cls.detail + ') > td:nth-child(' + (parseInt(match, 10) + 1) + ')';
                        first = false;
                    });
                    //add the className to the cells specified by data-class="blah"
                    $table.find(selector).not('.' + cls.detailCell).addClass(col.className);
                }
            }
        };

        //moved this out into it's own function so that it can be called from other add-ons
        ft.bindToggleSelectors = function () {
            var $table = $(ft.table);

            if (!ft.hasAnyBreakpointColumn()) return;

            $table.find(opt.toggleSelector).unbind(trg.toggleRow).bind(trg.toggleRow, function (e) {
                var $row = $(this).is('tr') ? $(this) : $(this).parents('tr:first');
                ft.toggleDetail($row);
            });

            $table.find(opt.toggleSelector).unbind('click.footable').bind('click.footable', function (e) {
                if ($table.is('.breakpoint') && $(e.target).is('td,th,.'+ cls.toggle)) {
                    $(this).trigger(trg.toggleRow);
                }
            });
        };

        ft.parse = function (cell, column) {
            var parser = opt.parsers[column.type] || opt.parsers.alpha;
            return parser(cell);
        };

        ft.getColumnData = function (th) {
            var $th = $(th), hide = $th.data('hide'), index = $th.index();
            hide = hide || '';
            hide = jQuery.map(hide.split(','), function (a) {
                return jQuery.trim(a);
            });
            var data = {
                'index': index,
                'hide': { },
                'type': $th.data('type') || 'alpha',
                'name': $th.data('name') || $.trim($th.text()),
                'ignore': $th.data('ignore') || false,
                'toggle': $th.data('toggle') || false,
                'className': $th.data('class') || null,
                'matches': [],
                'names': { },
                'group': $th.data('group') || null,
                'groupName': null
            };

            if (data.group !== null) {
                var $group = $(ft.table).find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]').first();
                data.groupName = ft.parse($group, { 'type': 'alpha' });
            }

            var pcolspan = parseInt($th.prev().attr('colspan') || 0, 10);
            indexOffset += pcolspan > 1 ? pcolspan - 1 : 0;
            var colspan = parseInt($th.attr('colspan') || 0, 10), curindex = data.index + indexOffset;
            if (colspan > 1) {
                var names = $th.data('names');
                names = names || '';
                names = names.split(',');
                for (var i = 0; i < colspan; i++) {
                    data.matches.push(i + curindex);
                    if (i < names.length) data.names[i + curindex] = names[i];
                }
            } else {
                data.matches.push(curindex);
            }

            data.hide['default'] = ($th.data('hide') === "all") || ($.inArray('default', hide) >= 0);

            var hasBreakpoint = false;
            for (var name in opt.breakpoints) {
                data.hide[name] = ($th.data('hide') === "all") || ($.inArray(name, hide) >= 0);
                hasBreakpoint = hasBreakpoint || data.hide[name];
            }
            data.hasBreakpoint = hasBreakpoint;
            var e = ft.raise(evt.columnData, { 'column': { 'data': data, 'th': th } });
            return e.column.data;
        };

        ft.getViewportWidth = function () {
            return window.innerWidth || (document.body ? document.body.offsetWidth : 0);
        };

        ft.calculateWidth = function ($table, info) {
            if (jQuery.isFunction(opt.calculateWidthOverride)) {
                return opt.calculateWidthOverride($table, info);
            }
            if (info.viewportWidth < info.width) info.width = info.viewportWidth;
            if (info.parentWidth < info.width) info.width = info.parentWidth;
            return info;
        };

        ft.hasBreakpointColumn = function (breakpoint) {
            for (var c in ft.columns) {
                if (ft.columns[c].hide[breakpoint]) {
                    if (ft.columns[c].ignore) {
                        continue;
                    }
                    return true;
                }
            }
            return false;
        };

        ft.hasAnyBreakpointColumn = function () {
            for (var c in ft.columns) {
                if (ft.columns[c].hasBreakpoint) {
                    return true;
                }
            }
            return false;
        };

        ft.resize = function () {
            var $table = $(ft.table);

            if (!$table.is(':visible')) {
                return;
            } //we only care about FooTables that are visible

            if (!ft.hasAnyBreakpointColumn()) {
                return;
            } //we only care about FooTables that have breakpoints

            var info = {
                'width': $table.width(),                  //the table width
                'viewportWidth': ft.getViewportWidth(),   //the width of the viewport
                'parentWidth': $table.parent().width()    //the width of the parent
            };

            info = ft.calculateWidth($table, info);

            var pinfo = $table.data('footable_info');
            $table.data('footable_info', info);
            ft.raise(evt.resizing, { 'old': pinfo, 'info': info });

            // This (if) statement is here purely to make sure events aren't raised twice as mobile safari seems to do
            if (!pinfo || (pinfo && pinfo.width && pinfo.width !== info.width)) {

                var current = null, breakpoint;
                for (var i = 0; i < ft.breakpoints.length; i++) {
                    breakpoint = ft.breakpoints[i];
                    if (breakpoint && breakpoint.width && info.width <= breakpoint.width) {
                        current = breakpoint;
                        break;
                    }
                }

                var breakpointName = (current === null ? 'default' : current['name']),
                    hasBreakpointFired = ft.hasBreakpointColumn(breakpointName),
                    previousBreakpoint = $table.data('breakpoint');

                $table
                    .data('breakpoint', breakpointName)
                    .removeClass('default breakpoint').removeClass(ft.breakpointNames)
                    .addClass(breakpointName + (hasBreakpointFired ? ' breakpoint' : ''));

                //only do something if the breakpoint has changed
                if (breakpointName !== previousBreakpoint) {
                    //trigger a redraw
                    $table.trigger(trg.redraw);
                    //raise a breakpoint event
                    ft.raise(evt.breakpoint, { 'breakpoint': breakpointName, 'info': info });
                }
            }

            ft.raise(evt.resized, { 'old': pinfo, 'info': info });
        };

        ft.redraw = function () {
            //add the toggler to each row
            ft.addRowToggle();

            //bind the toggle selector click events
            ft.bindToggleSelectors();

            //set any cell classes defined for the columns
            ft.setColumnClasses();

            var $table = $(ft.table),
                breakpointName = $table.data('breakpoint'),
                hasBreakpointFired = ft.hasBreakpointColumn(breakpointName);

            $table
                .find('> tbody > tr:not(.' + cls.detail + ')').data('detail_created', false).end()
                .find('> thead > tr:last-child > th')
                .each(function () {
                    var data = ft.columns[$(this).index()], selector = '', first = true;
                    $.each(data.matches, function (m, match) {
                        if (!first) {
                            selector += ', ';
                        }
                        var count = match + 1;
                        selector += '> tbody > tr:not(.' + cls.detail + ') > td:nth-child(' + count + ')';
                        selector += ', > tfoot > tr:not(.' + cls.detail + ') > td:nth-child(' + count + ')';
                        selector += ', > colgroup > col:nth-child(' + count + ')';
                        first = false;
                    });

                    selector += ', > thead > tr[data-group-row="true"] > th[data-group="' + data.group + '"]';
                    var $column = $table.find(selector).add(this);
                    if (breakpointName !== '') {
                      if (data.hide[breakpointName] === false) $column.addClass('footable-visible').show();
                      else $column.removeClass('footable-visible').hide();
                    }

                    if ($table.find('> thead > tr.footable-group-row').length === 1) {
                        var $groupcols = $table.find('> thead > tr:last-child > th[data-group="' + data.group + '"]:visible, > thead > tr:last-child > th[data-group="' + data.group + '"]:visible'),
                            $group = $table.find('> thead > tr.footable-group-row > th[data-group="' + data.group + '"], > thead > tr.footable-group-row > td[data-group="' + data.group + '"]'),
                            groupspan = 0;

                        $.each($groupcols, function () {
                            groupspan += parseInt($(this).attr('colspan') || 1, 10);
                        });

                        if (groupspan > 0) $group.attr('colspan', groupspan).show();
                        else $group.hide();
                    }
                })
                .end()
                .find('> tbody > tr.' + cls.detailShow).each(function () {
                    ft.createOrUpdateDetailRow(this);
                });

            $table.find('> tbody > tr.' + cls.detailShow + ':visible').each(function () {
                var $next = $(this).next();
                if ($next.hasClass(cls.detail)) {
                    if (!hasBreakpointFired) $next.hide();
                    else $next.show();
                }
            });

            // adding .footable-first-column and .footable-last-column to the first and last th and td of each row in order to allow
            // for styling if the first or last column is hidden (which won't work using :first-child or :last-child)
            $table.find('> thead > tr > th.footable-last-column, > tbody > tr > td.footable-last-column').removeClass('footable-last-column');
            $table.find('> thead > tr > th.footable-first-column, > tbody > tr > td.footable-first-column').removeClass('footable-first-column');
            $table.find('> thead > tr, > tbody > tr')
                .find('> th.footable-visible:last, > td.footable-visible:last')
                .addClass('footable-last-column')
                .end()
                .find('> th.footable-visible:first, > td.footable-visible:first')
                .addClass('footable-first-column');

            ft.raise(evt.redrawn);
        };

        ft.toggleDetail = function (row) {
            var $row = (row.jquery) ? row : $(row),
                $next = $row.next();

            //check if the row is already expanded
            if ($row.hasClass(cls.detailShow)) {
                $row.removeClass(cls.detailShow);

                //only hide the next row if it's a detail row
                if ($next.hasClass(cls.detail)) $next.hide();

                ft.raise(evt.rowCollapsed, { 'row': $row[0] });

            } else {
                ft.createOrUpdateDetailRow($row[0]);
                $row.addClass(cls.detailShow)
					.next().show();

                ft.raise(evt.rowExpanded, { 'row': $row[0] });
            }
        };

        ft.removeRow = function (row) {
            var $row = (row.jquery) ? row : $(row);
            if ($row.hasClass(cls.detail)) {
                $row = $row.prev();
            }
            var $next = $row.next();
            if ($row.data('detail_created') === true) {
                //remove the detail row
                $next.remove();
            }
            $row.remove();

            //raise event
            ft.raise(evt.rowRemoved);
        };

        ft.appendRow = function (row) {
            var $row = (row.jquery) ? row : $(row);
            $(ft.table).find('tbody').append($row);

            //redraw the table
            ft.redraw();
        };

        ft.getColumnFromTdIndex = function (index) {
            /// <summary>Returns the correct column data for the supplied index taking into account colspans.</summary>
            /// <param name="index">The index to retrieve the column data for.</param>
            /// <returns type="json">A JSON object containing the column data for the supplied index.</returns>
            var result = null;
            for (var column in ft.columns) {
                if ($.inArray(index, ft.columns[column].matches) >= 0) {
                    result = ft.columns[column];
                    break;
                }
            }
            return result;
        };

        ft.createOrUpdateDetailRow = function (actualRow) {
            var $row = $(actualRow), $next = $row.next(), $detail, values = [];
            if ($row.data('detail_created') === true) return true;

            if ($row.is(':hidden')) return false; //if the row is hidden for some reason (perhaps filtered) then get out of here
            ft.raise(evt.rowDetailUpdating, { 'row': $row, 'detail': $next });
            $row.find('> td:hidden').each(function () {
                var index = $(this).index(), column = ft.getColumnFromTdIndex(index), name = column.name;
                if (column.ignore === true) return true;

                if (index in column.names) name = column.names[index];
                values.push({ 'name': name, 'value': ft.parse(this, column), 'display': $.trim($(this).html()), 'group': column.group, 'groupName': column.groupName });
                return true;
            });
            if (values.length === 0) return false; //return if we don't have any data to show
            var colspan = $row.find('> td:visible').length;
            var exists = $next.hasClass(cls.detail);
            if (!exists) { // Create
                $next = $('<tr class="' + cls.detail + '"><td class="' + cls.detailCell + '"><div class="' + cls.detailInner + '"></div></td></tr>');
                $row.after($next);
            }
            $next.find('> td:first').attr('colspan', colspan);
            $detail = $next.find('.' + cls.detailInner).empty();
            opt.createDetail($detail, values, opt.createGroupedDetail, opt.detailSeparator, cls);
            $row.data('detail_created', true);
            ft.raise(evt.rowDetailUpdated, { 'row': $row, 'detail': $next });
            return !exists;
        };

        ft.raise = function (eventName, args) {

            if (ft.options.debug === true && $.isFunction(ft.options.log)) ft.options.log(eventName, 'event');

            args = args || { };
            var def = { 'ft': ft };
            $.extend(true, def, args);
            var e = $.Event(eventName, def);
            if (!e.ft) {
                $.extend(true, e, def);
            } //pre jQuery 1.6 which did not allow data to be passed to event object constructor
            $(ft.table).trigger(e);
            return e;
        };

        //reset the state of FooTable
        ft.reset = function() {
            var $table = $(ft.table);
            $table.removeData('footable_info')
                .data('breakpoint', '')
                .removeClass(cls.loading)
                .removeClass(cls.loaded);

            $table.find(opt.toggleSelector).unbind(trg.toggleRow).unbind('click.footable');

            $table.find('> tbody > tr').removeClass(cls.detailShow);

            $table.find('> tbody > tr.' + cls.detail).remove();

            ft.raise(evt.reset);
        };

        ft.init();
        return ft;
    }
})(jQuery, window);
;
