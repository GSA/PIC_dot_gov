/*! jQuery Migrate v3.0.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b){"use strict";function c(c){var d=b.console;e[c]||(e[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function d(a,b,d,e){Object.defineProperty(a,b,{configurable:!0,enumerable:!0,get:function(){return c(e),d}})}a.migrateVersion="3.0.0",function(){var c=b.console&&b.console.log&&function(){b.console.log.apply(b.console,arguments)},d=/^[12]\./;c&&(a&&!d.test(a.fn.jquery)||c("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),a.migrateWarnings&&c("JQMIGRATE: Migrate plugin loaded multiple times"),c("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion))}();var e={};a.migrateWarnings=[],void 0===a.migrateTrace&&(a.migrateTrace=!0),a.migrateReset=function(){e={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&c("jQuery is not compatible with Quirks Mode");var f=a.fn.init,g=a.isNumeric,h=a.find,i=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,j=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;a.fn.init=function(a){var b=Array.prototype.slice.call(arguments);return"string"==typeof a&&"#"===a&&(c("jQuery( '#' ) is not a valid selector"),b[0]=[]),f.apply(this,b)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&i.test(a))try{document.querySelector(a)}catch(d){a=a.replace(j,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),c("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){c("Attribute selector with '#' was not fixed: "+b[0])}}return h.apply(this,b)};var k;for(k in h)Object.prototype.hasOwnProperty.call(h,k)&&(a.find[k]=h[k]);a.fn.size=function(){return c("jQuery.fn.size() is deprecated; use the .length property"),this.length},a.parseJSON=function(){return c("jQuery.parseJSON is deprecated; use JSON.parse"),JSON.parse.apply(null,arguments)},a.isNumeric=function(b){function d(b){var c=b&&b.toString();return!a.isArray(b)&&c-parseFloat(c)+1>=0}var e=g(b),f=d(b);return e!==f&&c("jQuery.isNumeric() should not be called on constructed objects"),f},d(a,"unique",a.uniqueSort,"jQuery.unique is deprecated, use jQuery.uniqueSort"),d(a.expr,"filters",a.expr.pseudos,"jQuery.expr.filters is now jQuery.expr.pseudos"),d(a.expr,":",a.expr.pseudos,'jQuery.expr[":"] is now jQuery.expr.pseudos');var l=a.ajax;a.ajax=function(){var a=l.apply(this,arguments);return a.promise&&(d(a,"success",a.done,"jQXHR.success is deprecated and removed"),d(a,"error",a.fail,"jQXHR.error is deprecated and removed"),d(a,"complete",a.always,"jQXHR.complete is deprecated and removed")),a};var m=a.fn.removeAttr,n=a.fn.toggleClass,o=/\S+/g;a.fn.removeAttr=function(b){var d=this;return a.each(b.match(o),function(b,e){a.expr.match.bool.test(e)&&(c("jQuery.fn.removeAttr no longer sets boolean properties: "+e),d.prop(e,!1))}),m.apply(this,arguments)},a.fn.toggleClass=function(b){return void 0!==b&&"boolean"!=typeof b?n.apply(this,arguments):(c("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var c=this.getAttribute&&this.getAttribute("class")||"";c&&a.data(this,"__className__",c),this.setAttribute&&this.setAttribute("class",c||b===!1?"":a.data(this,"__className__")||"")}))};var p=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return p=!0,a=d.apply(this,arguments),p=!1,a})}),a.swap=function(a,b,d,e){var f,g,h={};p||c("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=d.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f};var q=a.data;a.data=function(b,d,e){var f;return d&&d!==a.camelCase(d)&&(f=a.hasData(b)&&q.call(this,b),f&&d in f)?(c("jQuery.data() always sets/gets camelCased names: "+d),arguments.length>2&&(f[d]=e),f[d]):q.apply(this,arguments)};var r=a.Tween.prototype.run;a.Tween.prototype.run=function(b){a.easing[this.easing].length>1&&(c('easing function "jQuery.easing.'+this.easing.toString()+'" should use only first argument'),a.easing[this.easing]=a.easing[this.easing].bind(a.easing,b,this.options.duration*b,0,1,this.options.duration)),r.apply(this,arguments)};var s=a.fn.load,t=a.event.fix;a.event.props=[],a.event.fixHooks={},a.event.fix=function(b){var d,e=b.type,f=this.fixHooks[e],g=a.event.props;if(g.length)for(c("jQuery.event.props are deprecated and removed: "+g.join());g.length;)a.event.addProp(g.pop());if(f&&!f._migrated_&&(f._migrated_=!0,c("jQuery.event.fixHooks are deprecated and removed: "+e),(g=f.props)&&g.length))for(;g.length;)a.event.addProp(g.pop());return d=t.call(this,b),f&&f.filter?f.filter(d,b):d},a.each(["load","unload","error"],function(b,d){a.fn[d]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===d&&"string"==typeof a[0]?s.apply(this,a):(c("jQuery.fn."+d+"() is deprecated"),a.splice(0,0,d),arguments.length?this.on.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a(function(){a(document).triggerHandler("ready")}),a.event.special.ready={setup:function(){this===document&&c("'ready' event is deprecated")}},a.fn.extend({bind:function(a,b,d){return c("jQuery.fn.bind() is deprecated"),this.on(a,null,b,d)},unbind:function(a,b){return c("jQuery.fn.unbind() is deprecated"),this.off(a,null,b)},delegate:function(a,b,d,e){return c("jQuery.fn.delegate() is deprecated"),this.on(b,a,d,e)},undelegate:function(a,b,d){return c("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(a,"**"):this.off(b,a||"**",d)}});var u=a.fn.offset;a.fn.offset=function(){var b,d=this[0],e={top:0,left:0};return d&&d.nodeType?(b=(d.ownerDocument||document).documentElement,a.contains(b,d)?u.apply(this,arguments):(c("jQuery.fn.offset() requires an element connected to a document"),e)):(c("jQuery.fn.offset() requires a valid DOM element"),e)};var v=a.param;a.param=function(b,d){var e=a.ajaxSettings&&a.ajaxSettings.traditional;return void 0===d&&e&&(c("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),d=e),v.call(this,b,d)};var w=a.fn.andSelf||a.fn.addBack;a.fn.andSelf=function(){return c("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)};var x=a.Deferred,y=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var d=x(),e=d.promise();return d.pipe=e.pipe=function(){var b=arguments;return c("deferred.pipe() is deprecated"),a.Deferred(function(c){a.each(y,function(f,g){var h=a.isFunction(b[f])&&b[f];d[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[g[0]+"With"](this===e?c.promise():this,h?[b]:arguments)})}),b=null}).promise()},b&&b.call(d,d),d}}(jQuery,window);
;

/**
 * jQuery Once Plugin v1.2
 * https://plugins.jquery.com/project/once
 *
 * Dual licensed under the MIT and GPL licenses:
 *   https://www.opensource.org/licenses/mit-license.php
 *   https://www.gnu.org/licenses/gpl.html
 */

(function ($) {
  var cache = {}, uuid = 0;

  /**
   * Filters elements by whether they have not yet been processed.
   *
   * @param id
   *   (Optional) If this is a string, then it will be used as the CSS class
   *   name that is applied to the elements for determining whether it has
   *   already been processed. The elements will get a class in the form of
   *   "id-processed".
   *
   *   If the id parameter is a function, it will be passed off to the fn
   *   parameter and the id will become a unique identifier, represented as a
   *   number.
   *
   *   When the id is neither a string or a function, it becomes a unique
   *   identifier, depicted as a number. The element's class will then be
   *   represented in the form of "jquery-once-#-processed".
   *
   *   Take note that the id must be valid for usage as an element's class name.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   */
  $.fn.once = function (id, fn) {
    if (typeof id != 'string') {
      // Generate a numeric ID if the id passed can't be used as a CSS class.
      if (!(id in cache)) {
        cache[id] = ++uuid;
      }
      // When the fn parameter is not passed, we interpret it from the id.
      if (!fn) {
        fn = id;
      }
      id = 'jquery-once-' + cache[id];
    }
    // Remove elements from the set that have already been processed.
    var name = id + '-processed';
    var elements = this.not('.' + name).addClass(name);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };

  /**
   * Filters elements that have been processed once already.
   *
   * @param id
   *   A required string representing the name of the class which should be used
   *   when filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function.
   * @param fn
   *   (Optional) If given, this function will be called for each element that
   *   has not yet been processed. The function's return value follows the same
   *   logic as $.each(). Returning true will continue to the next matched
   *   element in the set, while returning false will entirely break the
   *   iteration.
   */
  $.fn.removeOnce = function (id, fn) {
    var name = id + '-processed';
    var elements = this.filter('.' + name).removeClass(name);

    return $.isFunction(fn) ? elements.each(fn) : elements;
  };
})(jQuery);
;

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'locale': {} };

// Allow other JavaScript libraries to use $.
jQuery.noConflict();

(function ($) {

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See https://bugs.jquery.com/ticket/9521
 */
var jquery_init = $.fn.init;
$.fn.init = function (selector, context, rootjQuery) {
  // If the string contains a "#" before a "<", treat it as invalid HTML.
  if (selector && typeof selector === 'string') {
    var hash_position = selector.indexOf('#');
    if (hash_position >= 0) {
      var bracket_position = selector.indexOf('<');
      if (bracket_position > hash_position) {
        throw 'Syntax error, unrecognized expression: ' + selector;
      }
    }
  }
  return jquery_init.call(this, selector, context, rootjQuery);
};
$.fn.init.prototype = jquery_init.prototype;

/**
 * Pre-filter Ajax requests to guard against XSS attacks.
 *
 * See https://github.com/jquery/jquery/issues/2432
 */
if ($.ajaxPrefilter) {
  // For newer versions of jQuery, use an Ajax prefilter to prevent
  // auto-executing script tags from untrusted domains. This is similar to the
  // fix that is built in to jQuery 3.0 and higher.
  $.ajaxPrefilter(function (s) {
    if (s.crossDomain) {
      s.contents.script = false;
    }
  });
}
else if ($.httpData) {
  // For the version of jQuery that ships with Drupal core, override
  // jQuery.httpData to prevent auto-detecting "script" data types from
  // untrusted domains.
  var jquery_httpData = $.httpData;
  $.httpData = function (xhr, type, s) {
    // @todo Consider backporting code from newer jQuery versions to check for
    //   a cross-domain request here, rather than using Drupal.urlIsLocal() to
    //   block scripts from all URLs that are not on the same site.
    if (!type && !Drupal.urlIsLocal(s.url)) {
      var content_type = xhr.getResponseHeader('content-type') || '';
      if (content_type.indexOf('javascript') >= 0) {
        // Default to a safe data type.
        type = 'text';
      }
    }
    return jquery_httpData.call(this, xhr, type, s);
  };
  $.httpData.prototype = jquery_httpData.prototype;
}

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-JavaScript UIs. Behaviors are registered in the Drupal.behaviors
 * object using the method 'attach' and optionally also 'detach' as follows:
 * @code
 *    Drupal.behaviors.behaviorName = {
 *      attach: function (context, settings) {
 *        ...
 *      },
 *      detach: function (context, settings, trigger) {
 *        ...
 *      }
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/Ajax in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use
 * @code
 *   $(selector).once('behavior-name', function () {
 *     ...
 *   });
 * @endcode
 * to ensure the behavior is attached only once to a given element. (Doing so
 * enables the reprocessing of given elements, which may be needed on occasion
 * despite the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 */
Drupal.attachBehaviors = function (context, settings) {
  context = context || document;
  settings = settings || Drupal.settings;
  // Execute all of them.
  $.each(Drupal.behaviors, function () {
    if ($.isFunction(this.attach)) {
      this.attach(context, settings);
    }
  });
};

/**
 * Detach registered behaviors from a page element.
 *
 * Developers implementing AHAH/Ajax in their solutions should call this
 * function before page content is about to be removed, feeding in an element
 * to be processed, in order to allow special behaviors to detach from the
 * content.
 *
 * Such implementations should look for the class name that was added in their
 * corresponding Drupal.behaviors.behaviorName.attach implementation, i.e.
 * behaviorName-processed, to ensure the behavior is detached only from
 * previously processed elements.
 *
 * @param context
 *   An element to detach behaviors from. If none is given, the document element
 *   is used.
 * @param settings
 *   An object containing settings for the current context. If none given, the
 *   global Drupal.settings object is used.
 * @param trigger
 *   A string containing what's causing the behaviors to be detached. The
 *   possible triggers are:
 *   - unload: (default) The context element is being removed from the DOM.
 *   - move: The element is about to be moved within the DOM (for example,
 *     during a tabledrag row swap). After the move is completed,
 *     Drupal.attachBehaviors() is called, so that the behavior can undo
 *     whatever it did in response to the move. Many behaviors won't need to
 *     do anything simply in response to the element being moved, but because
 *     IFRAME elements reload their "src" when being moved within the DOM,
 *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
 *     take some action.
 *   - serialize: When an Ajax form is submitted, this is called with the
 *     form as the context. This provides every behavior within the form an
 *     opportunity to ensure that the field elements have correct content
 *     in them before the form is serialized. The canonical use-case is so
 *     that WYSIWYG editors can update the hidden textarea to which they are
 *     bound.
 *
 * @see Drupal.attachBehaviors
 */
Drupal.detachBehaviors = function (context, settings, trigger) {
  context = context || document;
  settings = settings || Drupal.settings;
  trigger = trigger || 'unload';
  // Execute all of them.
  $.each(Drupal.behaviors, function () {
    if ($.isFunction(this.detach)) {
      this.detach(context, settings, trigger);
    }
  });
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 *
 * @ingroup sanitization
 */
Drupal.checkPlain = function (str) {
  var character, regex,
      replace = { '&': '&amp;', "'": '&#39;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  str = String(str);
  for (character in replace) {
    if (replace.hasOwnProperty(character)) {
      regex = new RegExp(character, 'g');
      str = str.replace(regex, replace[character]);
    }
  }
  return str;
};

/**
 * Replace placeholders with sanitized values in a string.
 *
 * @param str
 *   A string with placeholders.
 * @param args
 *   An object of replacements pairs to make. Incidences of any key in this
 *   array are replaced with the corresponding value. Based on the first
 *   character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *
 * @see Drupal.t()
 * @ingroup sanitization
 */
Drupal.formatString = function(str, args) {
  // Transform arguments before inserting them.
  for (var key in args) {
    if (args.hasOwnProperty(key)) {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
          break;
        // Pass-through.
        case '!':
          break;
        // Escaped and placeholder.
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    }
  }

  return Drupal.stringReplace(str, args, null);
};

/**
 * Replace substring.
 *
 * The longest keys will be tried first. Once a substring has been replaced,
 * its new value will not be searched again.
 *
 * @param {String} str
 *   A string with placeholders.
 * @param {Object} args
 *   Key-value pairs.
 * @param {Array|null} keys
 *   Array of keys from the "args".  Internal use only.
 *
 * @return {String}
 *   Returns the replaced string.
 */
Drupal.stringReplace = function (str, args, keys) {
  if (str.length === 0) {
    return str;
  }

  // If the array of keys is not passed then collect the keys from the args.
  if (!$.isArray(keys)) {
    keys = [];
    for (var k in args) {
      if (args.hasOwnProperty(k)) {
        keys.push(k);
      }
    }

    // Order the keys by the character length. The shortest one is the first.
    keys.sort(function (a, b) { return a.length - b.length; });
  }

  if (keys.length === 0) {
    return str;
  }

  // Take next longest one from the end.
  var key = keys.pop();
  var fragments = str.split(key);

  if (keys.length) {
    for (var i = 0; i < fragments.length; i++) {
      // Process each fragment with a copy of remaining keys.
      fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
    }
  }

  return fragments.join(args[key]);
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *
 * @param options
 *   - 'context' (defaults to the empty context): The context the source string
 *     belongs to.
 *
 * @return
 *   The translated string.
 */
Drupal.t = function (str, args, options) {
  options = options || {};
  options.context = options.context || '';

  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[options.context] && Drupal.locale.strings[options.context][str]) {
    str = Drupal.locale.strings[options.context][str];
  }

  if (args) {
    str = Drupal.formatString(str, args);
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   See Drupal.formatString().
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @param options
 *   The options to pass to the Drupal.t() function.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function (count, singular, plural, args, options) {
  args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args, options);
  }
  else if (index == 1) {
    return Drupal.t(plural, args, options);
  }
  else {
    args['@count[' + index + ']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count[' + index + ']'), args, options);
  }
};

/**
 * Returns the passed in URL as an absolute URL.
 *
 * @param url
 *   The URL string to be normalized to an absolute URL.
 *
 * @return
 *   The normalized, absolute URL.
 *
 * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
 * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
 * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
 */
Drupal.absoluteUrl = function (url) {
  var urlParsingNode = document.createElement('a');

  // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
  // strings may throw an exception.
  try {
    url = decodeURIComponent(url);
  } catch (e) {}

  urlParsingNode.setAttribute('href', url);

  // IE <= 7 normalizes the URL when assigned to the anchor node similar to
  // the other browsers.
  return urlParsingNode.cloneNode(false).href;
};

/**
 * Returns true if the URL is within Drupal's base path.
 *
 * @param url
 *   The URL string to be tested.
 *
 * @return
 *   Boolean true if local.
 *
 * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
 */
Drupal.urlIsLocal = function (url) {
  // Always use browser-derived absolute URLs in the comparison, to avoid
  // attempts to break out of the base path using directory traversal.
  var absoluteUrl = Drupal.absoluteUrl(url);
  var protocol = location.protocol;

  // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
  // as local as well.
  if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
    protocol = 'https:';
  }
  var baseUrl = protocol + '//' + location.host + Drupal.settings.basePath.slice(0, -1);

  // Decoding non-UTF-8 strings may throw an exception.
  try {
    absoluteUrl = decodeURIComponent(absoluteUrl);
  } catch (e) {}
  try {
    baseUrl = decodeURIComponent(baseUrl);
  } catch (e) {}

  // The given URL matches the site's base URL, or has a path under the site's
  // base URL.
  return absoluteUrl === baseUrl || absoluteUrl.indexOf(baseUrl + '/') === 0;
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML for text that should be emphasized and
 * displayed as a placeholder inside a sentence, call
 * Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function (func) {
  var args = Array.prototype.slice.apply(arguments, [1]);

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  $('<div id="freeze-height"></div>').css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).appendTo('body');
};

/**
 * Unfreeze the body height.
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Encodes a Drupal path for use in a URL.
 *
 * For aesthetic reasons slashes are not escaped.
 */
Drupal.encodePath = function (item, uri) {
  uri = uri || location.href;
  return encodeURIComponent(item).replace(/%2F/g, '/');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof element.selectionStart != 'number' && document.selection) {
    // The current selection.
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Add a global variable which determines if the window is being unloaded.
 *
 * This is primarily used by Drupal.displayAjaxError().
 */
Drupal.beforeUnloadCalled = false;
$(window).bind('beforeunload pagehide', function () {
    Drupal.beforeUnloadCalled = true;
});

/**
 * Displays a JavaScript error from an Ajax response when appropriate to do so.
 */
Drupal.displayAjaxError = function (message) {
  // Skip displaying the message if the user deliberately aborted (for example,
  // by reloading the page or navigating to a different page) while the Ajax
  // request was still ongoing. See, for example, the discussion at
  // https://stackoverflow.com/questions/699941/handle-ajax-error-when-a-user-clicks-refresh.
  if (!Drupal.beforeUnloadCalled) {
    alert(message);
  }
};

/**
 * Build an error message from an Ajax response.
 */
Drupal.ajaxError = function (xmlhttp, uri, customMessage) {
  var statusCode, statusText, pathText, responseText, readyStateText, message;
  if (xmlhttp.status) {
    statusCode = "\n" + Drupal.t("An AJAX HTTP error occurred.") +  "\n" + Drupal.t("HTTP Result Code: !status", {'!status': xmlhttp.status});
  }
  else {
    statusCode = "\n" + Drupal.t("An AJAX HTTP request terminated abnormally.");
  }
  statusCode += "\n" + Drupal.t("Debugging information follows.");
  pathText = "\n" + Drupal.t("Path: !uri", {'!uri': uri} );
  statusText = '';
  // In some cases, when statusCode == 0, xmlhttp.statusText may not be defined.
  // Unfortunately, testing for it with typeof, etc, doesn't seem to catch that
  // and the test causes an exception. So we need to catch the exception here.
  try {
    statusText = "\n" + Drupal.t("StatusText: !statusText", {'!statusText': $.trim(xmlhttp.statusText)});
  }
  catch (e) {}

  responseText = '';
  // Again, we don't have a way to know for sure whether accessing
  // xmlhttp.responseText is going to throw an exception. So we'll catch it.
  try {
    responseText = "\n" + Drupal.t("ResponseText: !responseText", {'!responseText': $.trim(xmlhttp.responseText) } );
  } catch (e) {}

  // Make the responseText more readable by stripping HTML tags and newlines.
  responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi,"");
  responseText = responseText.replace(/[\n]+\s+/g,"\n");

  // We don't need readyState except for status == 0.
  readyStateText = xmlhttp.status == 0 ? ("\n" + Drupal.t("ReadyState: !readyState", {'!readyState': xmlhttp.readyState})) : "";

  // Additional message beyond what the xmlhttp object provides.
  customMessage = customMessage ? ("\n" + Drupal.t("CustomMessage: !customMessage", {'!customMessage': customMessage})) : "";

  message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
  return message;
};

// Class indicating that JS is enabled; used for styling purpose.
$('html').addClass('js');

// 'js enabled' cookie.
document.cookie = 'has_js=1; path=/';

/**
 * Additions to jQuery.support.
 */
$(function () {
  /**
   * Boolean indicating whether or not position:fixed is supported.
   */
  if (jQuery.support.positionFixed === undefined) {
    var el = $('<div style="position:fixed; top:10px" />').appendTo(document.body);
    jQuery.support.positionFixed = el[0].offsetTop === 10;
    el.remove();
  }
});

//Attach all behaviors.
$(function () {
  Drupal.attachBehaviors(document, Drupal.settings);
});

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function (str) {
    return '<em class="placeholder">' + Drupal.checkPlain(str) + '</em>';
  }
};

})(jQuery);
;
(function ($) {
  $('html').removeClass('no-js');
})(jQuery);
;
