/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
		return jQuery;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var $ = __webpack_require__(0);

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../../css-loader/index.js?sourceMap!./../../../sass-loader/lib/loader.js?sourceMap!./_bootstrap.scss", function() {
			var newContent = require("!!./../../../css-loader/index.js?sourceMap!./../../../sass-loader/lib/loader.js?sourceMap!./_bootstrap.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(2) + ");\n  src: url(" + __webpack_require__(2) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(9) + ") format(\"woff2\"), url(" + __webpack_require__(8) + ") format(\"woff\"), url(" + __webpack_require__(5) + ") format(\"truetype\"), url(" + __webpack_require__(6) + "#glyphicons_halflingsregular) format(\"svg\"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: \"*\"; }\n\n.glyphicon-plus:before {\n  content: \"+\"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\"; }\n\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n\n.glyphicon-pencil:before {\n  content: \"\\270F\"; }\n\n.glyphicon-glass:before {\n  content: \"\\E001\"; }\n\n.glyphicon-music:before {\n  content: \"\\E002\"; }\n\n.glyphicon-search:before {\n  content: \"\\E003\"; }\n\n.glyphicon-heart:before {\n  content: \"\\E005\"; }\n\n.glyphicon-star:before {\n  content: \"\\E006\"; }\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\"; }\n\n.glyphicon-user:before {\n  content: \"\\E008\"; }\n\n.glyphicon-film:before {\n  content: \"\\E009\"; }\n\n.glyphicon-th-large:before {\n  content: \"\\E010\"; }\n\n.glyphicon-th:before {\n  content: \"\\E011\"; }\n\n.glyphicon-th-list:before {\n  content: \"\\E012\"; }\n\n.glyphicon-ok:before {\n  content: \"\\E013\"; }\n\n.glyphicon-remove:before {\n  content: \"\\E014\"; }\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\"; }\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\"; }\n\n.glyphicon-off:before {\n  content: \"\\E017\"; }\n\n.glyphicon-signal:before {\n  content: \"\\E018\"; }\n\n.glyphicon-cog:before {\n  content: \"\\E019\"; }\n\n.glyphicon-trash:before {\n  content: \"\\E020\"; }\n\n.glyphicon-home:before {\n  content: \"\\E021\"; }\n\n.glyphicon-file:before {\n  content: \"\\E022\"; }\n\n.glyphicon-time:before {\n  content: \"\\E023\"; }\n\n.glyphicon-road:before {\n  content: \"\\E024\"; }\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\"; }\n\n.glyphicon-download:before {\n  content: \"\\E026\"; }\n\n.glyphicon-upload:before {\n  content: \"\\E027\"; }\n\n.glyphicon-inbox:before {\n  content: \"\\E028\"; }\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\"; }\n\n.glyphicon-repeat:before {\n  content: \"\\E030\"; }\n\n.glyphicon-refresh:before {\n  content: \"\\E031\"; }\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\"; }\n\n.glyphicon-lock:before {\n  content: \"\\E033\"; }\n\n.glyphicon-flag:before {\n  content: \"\\E034\"; }\n\n.glyphicon-headphones:before {\n  content: \"\\E035\"; }\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\"; }\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\"; }\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\"; }\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\"; }\n\n.glyphicon-barcode:before {\n  content: \"\\E040\"; }\n\n.glyphicon-tag:before {\n  content: \"\\E041\"; }\n\n.glyphicon-tags:before {\n  content: \"\\E042\"; }\n\n.glyphicon-book:before {\n  content: \"\\E043\"; }\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\"; }\n\n.glyphicon-print:before {\n  content: \"\\E045\"; }\n\n.glyphicon-camera:before {\n  content: \"\\E046\"; }\n\n.glyphicon-font:before {\n  content: \"\\E047\"; }\n\n.glyphicon-bold:before {\n  content: \"\\E048\"; }\n\n.glyphicon-italic:before {\n  content: \"\\E049\"; }\n\n.glyphicon-text-height:before {\n  content: \"\\E050\"; }\n\n.glyphicon-text-width:before {\n  content: \"\\E051\"; }\n\n.glyphicon-align-left:before {\n  content: \"\\E052\"; }\n\n.glyphicon-align-center:before {\n  content: \"\\E053\"; }\n\n.glyphicon-align-right:before {\n  content: \"\\E054\"; }\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\"; }\n\n.glyphicon-list:before {\n  content: \"\\E056\"; }\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\"; }\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\"; }\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\"; }\n\n.glyphicon-picture:before {\n  content: \"\\E060\"; }\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\"; }\n\n.glyphicon-adjust:before {\n  content: \"\\E063\"; }\n\n.glyphicon-tint:before {\n  content: \"\\E064\"; }\n\n.glyphicon-edit:before {\n  content: \"\\E065\"; }\n\n.glyphicon-share:before {\n  content: \"\\E066\"; }\n\n.glyphicon-check:before {\n  content: \"\\E067\"; }\n\n.glyphicon-move:before {\n  content: \"\\E068\"; }\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\"; }\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\"; }\n\n.glyphicon-backward:before {\n  content: \"\\E071\"; }\n\n.glyphicon-play:before {\n  content: \"\\E072\"; }\n\n.glyphicon-pause:before {\n  content: \"\\E073\"; }\n\n.glyphicon-stop:before {\n  content: \"\\E074\"; }\n\n.glyphicon-forward:before {\n  content: \"\\E075\"; }\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\"; }\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\"; }\n\n.glyphicon-eject:before {\n  content: \"\\E078\"; }\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\"; }\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\"; }\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\"; }\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\"; }\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\"; }\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\"; }\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\"; }\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\"; }\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\"; }\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\"; }\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\"; }\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\"; }\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\"; }\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\"; }\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\"; }\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\"; }\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\"; }\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\"; }\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\"; }\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\"; }\n\n.glyphicon-gift:before {\n  content: \"\\E102\"; }\n\n.glyphicon-leaf:before {\n  content: \"\\E103\"; }\n\n.glyphicon-fire:before {\n  content: \"\\E104\"; }\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\"; }\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\"; }\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\"; }\n\n.glyphicon-plane:before {\n  content: \"\\E108\"; }\n\n.glyphicon-calendar:before {\n  content: \"\\E109\"; }\n\n.glyphicon-random:before {\n  content: \"\\E110\"; }\n\n.glyphicon-comment:before {\n  content: \"\\E111\"; }\n\n.glyphicon-magnet:before {\n  content: \"\\E112\"; }\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\"; }\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\"; }\n\n.glyphicon-retweet:before {\n  content: \"\\E115\"; }\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\"; }\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\"; }\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\"; }\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\"; }\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\"; }\n\n.glyphicon-hdd:before {\n  content: \"\\E121\"; }\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\"; }\n\n.glyphicon-bell:before {\n  content: \"\\E123\"; }\n\n.glyphicon-certificate:before {\n  content: \"\\E124\"; }\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\"; }\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\"; }\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\"; }\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\"; }\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\"; }\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\"; }\n\n.glyphicon-globe:before {\n  content: \"\\E135\"; }\n\n.glyphicon-wrench:before {\n  content: \"\\E136\"; }\n\n.glyphicon-tasks:before {\n  content: \"\\E137\"; }\n\n.glyphicon-filter:before {\n  content: \"\\E138\"; }\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\"; }\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\"; }\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\"; }\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\"; }\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\"; }\n\n.glyphicon-link:before {\n  content: \"\\E144\"; }\n\n.glyphicon-phone:before {\n  content: \"\\E145\"; }\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\"; }\n\n.glyphicon-usd:before {\n  content: \"\\E148\"; }\n\n.glyphicon-gbp:before {\n  content: \"\\E149\"; }\n\n.glyphicon-sort:before {\n  content: \"\\E150\"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\"; }\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\"; }\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\"; }\n\n.glyphicon-expand:before {\n  content: \"\\E158\"; }\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\"; }\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\"; }\n\n.glyphicon-log-in:before {\n  content: \"\\E161\"; }\n\n.glyphicon-flash:before {\n  content: \"\\E162\"; }\n\n.glyphicon-log-out:before {\n  content: \"\\E163\"; }\n\n.glyphicon-new-window:before {\n  content: \"\\E164\"; }\n\n.glyphicon-record:before {\n  content: \"\\E165\"; }\n\n.glyphicon-save:before {\n  content: \"\\E166\"; }\n\n.glyphicon-open:before {\n  content: \"\\E167\"; }\n\n.glyphicon-saved:before {\n  content: \"\\E168\"; }\n\n.glyphicon-import:before {\n  content: \"\\E169\"; }\n\n.glyphicon-export:before {\n  content: \"\\E170\"; }\n\n.glyphicon-send:before {\n  content: \"\\E171\"; }\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\"; }\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\"; }\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\"; }\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\"; }\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\"; }\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\"; }\n\n.glyphicon-transfer:before {\n  content: \"\\E178\"; }\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\"; }\n\n.glyphicon-header:before {\n  content: \"\\E180\"; }\n\n.glyphicon-compressed:before {\n  content: \"\\E181\"; }\n\n.glyphicon-earphone:before {\n  content: \"\\E182\"; }\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\"; }\n\n.glyphicon-tower:before {\n  content: \"\\E184\"; }\n\n.glyphicon-stats:before {\n  content: \"\\E185\"; }\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\"; }\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\"; }\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\"; }\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\"; }\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\"; }\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\"; }\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\"; }\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\"; }\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\"; }\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\"; }\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\"; }\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\"; }\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\"; }\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\"; }\n\n.glyphicon-cd:before {\n  content: \"\\E201\"; }\n\n.glyphicon-save-file:before {\n  content: \"\\E202\"; }\n\n.glyphicon-open-file:before {\n  content: \"\\E203\"; }\n\n.glyphicon-level-up:before {\n  content: \"\\E204\"; }\n\n.glyphicon-copy:before {\n  content: \"\\E205\"; }\n\n.glyphicon-paste:before {\n  content: \"\\E206\"; }\n\n.glyphicon-alert:before {\n  content: \"\\E209\"; }\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\"; }\n\n.glyphicon-king:before {\n  content: \"\\E211\"; }\n\n.glyphicon-queen:before {\n  content: \"\\E212\"; }\n\n.glyphicon-pawn:before {\n  content: \"\\E213\"; }\n\n.glyphicon-bishop:before {\n  content: \"\\E214\"; }\n\n.glyphicon-knight:before {\n  content: \"\\E215\"; }\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\"; }\n\n.glyphicon-tent:before {\n  content: \"\\26FA\"; }\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\"; }\n\n.glyphicon-bed:before {\n  content: \"\\E219\"; }\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\"; }\n\n.glyphicon-erase:before {\n  content: \"\\E221\"; }\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\"; }\n\n.glyphicon-lamp:before {\n  content: \"\\E223\"; }\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\"; }\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\"; }\n\n.glyphicon-scissors:before {\n  content: \"\\E226\"; }\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\"; }\n\n.glyphicon-btc:before {\n  content: \"\\E227\"; }\n\n.glyphicon-xbt:before {\n  content: \"\\E227\"; }\n\n.glyphicon-yen:before {\n  content: \"\\A5\"; }\n\n.glyphicon-jpy:before {\n  content: \"\\A5\"; }\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-rub:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-scale:before {\n  content: \"\\E230\"; }\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\"; }\n\n.glyphicon-education:before {\n  content: \"\\E233\"; }\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\"; }\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\"; }\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\"; }\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\"; }\n\n.glyphicon-oil:before {\n  content: \"\\E238\"; }\n\n.glyphicon-grain:before {\n  content: \"\\E239\"; }\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\"; }\n\n.glyphicon-text-size:before {\n  content: \"\\E241\"; }\n\n.glyphicon-text-color:before {\n  content: \"\\E242\"; }\n\n.glyphicon-text-background:before {\n  content: \"\\E243\"; }\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\"; }\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\"; }\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\"; }\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\"; }\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\"; }\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\"; }\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\"; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\"; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\"; }\n\n.glyphicon-console:before {\n  content: \"\\E254\"; }\n\n.glyphicon-superscript:before {\n  content: \"\\E255\"; }\n\n.glyphicon-subscript:before {\n  content: \"\\E256\"; }\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\"; }\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\"; }\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\"; }\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014   \\A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\A0   \\2014'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203A'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n", "", {"version":3,"sources":["/./node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_normalize.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_print.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_glyphicons.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_scaffolding.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_vendor-prefixes.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_variables.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_tab-focus.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_image.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_type.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_text-emphasis.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_background-variant.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_clearfix.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_text-overflow.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_code.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_grid.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_grid-framework.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_tables.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_table-row.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_forms.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_forms.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_buttons.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_buttons.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_opacity.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_component-animations.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_dropdowns.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_nav-divider.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_reset-filter.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_button-groups.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_border-radius.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_input-groups.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_navs.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_navbar.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_nav-vertical-align.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_breadcrumbs.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_pagination.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_pagination.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_pager.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_labels.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_labels.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_badges.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_jumbotron.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_thumbnails.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_alerts.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_alerts.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_progress-bars.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_gradients.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_progress-bar.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_media.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_list-group.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_list-group.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_panels.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_panels.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_responsive-embed.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_wells.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_close.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_modals.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_tooltip.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_reset-text.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_popovers.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_carousel.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_utilities.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_center-block.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_hide-text.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/_responsive-utilities.scss","/./node_modules/bootstrap-sass/assets/stylesheets/node_modules/bootstrap-sass/assets/stylesheets/bootstrap/mixins/_responsive-visibility.scss"],"names":[],"mappings":"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;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AASpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,eAAgB,EAAK;;AACpE;EAA+C,eAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;AACpE;EAA+C,iBAAgB,EAAK;;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cwDzC;;AAGH;;;;;EAKM,oBdhEsC,EciEvC;;AAUL;EAEE,iBAAyC;EACzC,oBAA4C;EAE5C,iBAAgB;EAChB,iBAAqD,EAOtD;EAbD;;;;;IAUI,gBAAe;IACf,iBAAgB,EACjB;;ACxPD;;;EACE,afkJ+G;EejJ/G,kBf6B4B;Ee5B5B,gBfpBoD;EeqBpD,iBfiC2B;EehC3B,mBfoC2B,EenC5B;;AAED;;;EACE,af0I+G;EezI/G,kBfyI+G,EexIhH;;AAED;;;;;;;EAEE,aAAY,EACb;;ADqPH;EAEI,adpH+G;EcqH/G,kBdzO4B;Ec0O5B,gBd1RoD;Ec2RpD,iBdrO2B;EcsO3B,mBdlO2B,EcmO5B;;AAPH;EASI,ad3H+G;Ec4H/G,kBd5H+G,Ec6HhH;;AAXH;;EAcI,aAAY,EACb;;AAfH;EAiBI,adnI+G;EcoI/G,iBAAsD;EACtD,kBdzP4B;Ec0P5B,gBd1SoD;Ec2SpD,iBdrP2B,EcsP5B;;AC3RD;;;EACE,afgJ8G;Ee/I9G,mBf0B4B;EezB5B,gBfrBoD;EesBpD,qBfgCiC;Ee/BjC,mBfmC2B,EelC5B;;AAED;;;EACE,afwI8G;EevI9G,kBfuI8G,EetI/G;;AAED;;;;;;;EAEE,aAAY,EACb;;AD+QH;EAEI,adhJ8G;EciJ9G,mBdtQ4B;EcuQ5B,gBdrToD;EcsTpD,qBdhQiC;EciQjC,mBd7P2B,Ec8P5B;;AAPH;EASI,advJ8G;EcwJ9G,kBdxJ8G,EcyJ/G;;AAXH;;EAcI,aAAY,EACb;;AAfH;EAiBI,ad/J8G;EcgK9G,iBAAsD;EACtD,mBdtR4B;EcuR5B,gBdrUoD;EcsUpD,qBdhRiC,EciRlC;;AAQH;EAEE,mBAAkB,EAMnB;EARD;IAMI,sBAA0C,EAC3C;;AAGH;EACE,mBAAkB;EAClB,OAAM;EACN,SAAQ;EACR,WAAU;EACV,eAAc;EACd,Yd9LyF;Ec+LzF,ad/LyF;EcgMzF,kBdhMyF;EciMzF,mBAAkB;EAClB,qBAAoB,EACrB;;AACD;;;;;EAGE,YdrMgH;EcsMhH,adtMgH;EcuMhH,kBdvMgH,EcwMjH;;AACD;;;;;EAGE,Yd1MiH;Ec2MjH,ad3MiH;Ec4MjH,kBd5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AWD;EACE;IACE,uBAAsB,EACvB;EACD;IACE,wBAAuB;IACzB,oB3BhBgE,E2BqB/D;IAPD;MAKI,gBAAe,EAChB,EAAA;;AASL;EACE,0B3BzBwC;E2B0BxC,sB3BzBiE,E2ByJlE;EAlID;IAKI,Y3BzB2C,E2B+B5C;IAXH;MAQM,e3BlB6E;M2BmB7E,8B3BlBgD,E2BmBjD;EAVL;IAcI,Y3BvCmC,E2BwCpC;EAfH;IAmBM,Y3BvCyC,E2B8C1C;IA1BL;MAuBQ,Y3B1CuC;M2B2CvC,8B3B1C8C,E2B2C/C;EAzBP;IA+BQ,Y3BhDuC;I2BiDvC,0B3BhDmE,E2BiDpE;EAjCP;IAuCQ,Y3BtDuC;I2BuDvC,8B3BtD8C,E2BuD/C;EAzCP;IA8CI,mB3BlD2C,E2B0D5C;IAtDH;MAiDM,uB3BvDyC,E2BwD1C;IAlDL;MAoDM,uB3BzDyC,E2B0D1C;EArDL;;IA0DI,sB3BjF+D,E2BkFhE;EA3DH;IAoEQ,0B3BpFmE;I2BqFnE,Y3BtFuC,E2BuFxC;EAGH;IAzEJ;MA6EU,Y3BjGqC,E2BuGtC;MAnFT;QAgFY,Y3BnGmC;Q2BoGnC,8B3BnG0C,E2BoG3C;IAlFX;MAwFY,Y3BzGmC;M2B0GnC,0B3BzG+D,E2B0GhE;IA1FX;MAgGY,Y3B/GmC;M2BgHnC,8B3B/G0C,E2BgH3C,EAAA;EAlGX;IA8GI,Y3BlI2C,E2BsI5C;IAlHH;MAgHM,Y3BnIyC,E2BoI1C;EAjHL;IAqHI,Y3BzI2C,E2BqJ5C;IAjIH;MAwHM,Y3B3IyC,E2B4I1C;IAzHL;;;MA8HQ,Y3B7IuC,E2B8IxC;;AAOP;EACE,uB3BrI8C;E2BsI9C,sB3BrIyE,E2BsQ1E;EAnID;IAKI,e3BrIiE,E2B2IlE;IAXH;MAQM,Y3B9H0C;M2B+H1C,8B3B9HiD,E2B+HlD;EAVL;IAcI,e3BnJiE,E2BoJlE;EAfH;IAmBM,e3BnJ+D,E2B0JhE;IA1BL;MAuBQ,Y3BtJwC;M2BuJxC,8B3BtJ+C,E2BuJhD;EAzBP;IA+BQ,Y3B9JwC;I2B+JxC,0B3B5JmE,E2B6JpE;EAjCP;IAuCQ,Y3BlKwC;I2BmKxC,8B3BlK+C,E2BmKhD;EAzCP;IA+CI,mB3B/J4C,E2BuK7C;IAvDH;MAkDM,uB3BpK0C,E2BqK3C;IAnDL;MAqDM,uB3BtK0C,E2BuK3C;EAtDL;;IA2DI,sBAA4C,EAC7C;EA5DH;IAoEQ,0B3BhMmE;I2BiMnE,Y3BpMwC,E2BqMzC;EAGH;IAzEJ;MA6EU,sB3BhNiE,E2BiNlE;IA9ET;MAgFU,0B3BnNiE,E2BoNlE;IAjFT;MAmFU,e3BnN2D,E2ByN5D;MAzFT;QAsFY,Y3BrNoC;Q2BsNpC,8B3BrN2C,E2BsN5C;IAxFX;MA8FY,Y3B7NoC;M2B8NpC,0B3B3N+D,E2B4NhE;IAhGX;MAsGY,Y3BjOoC;M2BkOpC,8B3BjO2C,E2BkO5C,EAAA;EAxGX;IA+GI,e3B/OiE,E2BmPlE;IAnHH;MAiHM,Y3BhP0C,E2BiP3C;EAlHL;IAsHI,e3BtPiE,E2BkQlE;IAlIH;MAyHM,Y3BxP0C,E2ByP3C;IA1HL;;;MA+HQ,Y3B1PwC,E2B2PzC;;AE7oBP;EACE,kB7BqxBkC;E6BpxBlC,oB7B0DoE;E6BzDpE,iBAAgB;EAChB,0B7BoxBqC;E6BnxBrC,mB7BmG6B,E6BlF9B;EAtBD;IAQI,sBAAqB,EAStB;IAjBH;MAaM,gBAA2C;MAC3C,eAAc;MACd,Y7B2wB8B,E6B1wB/B;EAhBL;IAoBI,e7BX+C,E6BYhD;;ACvBH;EACE,sBAAqB;EACrB,gBAAe;EACf,eAA+B;EAC/B,mB9BsG6B,E8BlC9B;EAxED;IAOI,gBAAe,EA0BhB;IAjCH;;MAUM,mBAAkB;MAClB,YAAW;MACX,kB9BgF0B;M8B/E1B,qB9B+C+B;M8B9C/B,sBAAqB;MACrB,e9BDuC;M8BEvC,uB9BobqC;M8BnbrC,uB9BobqC;M8BnbrC,kBAAiB,EAClB;IAnBL;;MAuBQ,eAAc;MNXpB,+BxB8F6B;MwB7F1B,4BxB6F0B,E8BjFxB;IAzBP;;MNIE,gCxBsG6B;MwBrG1B,6BxBqG0B,E8B3ExB;EA/BP;;;IAuCM,WAAU;IACV,e9BP0C;I8BQ1C,0B9B7B6C;I8B8B7C,mB9B+ZqC,E8B9ZtC;EA3CL;;;;IAmDM,WAAU;IACV,Y9BuZqC;I8BtZrC,0B9BvCuC;I8BwCvC,sB9BxCuC;I8ByCvC,gBAAe,EAC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BAAe,EAChB;EA/ET;;;;;;;;IAuFU,iBAAgB,EACjB;EAxFT;;;;;;;;IAgGU,iBAAgB,EACjB;;AAjGT;EAsGI,UAAS;EACT,iBAAgB,EACjB;;AASH;EACE,oB9C7JoE,E8CwLrE;EA5BD;IAKI,iBAAgB;IAChB,mB9CtH2B,E8C2H5B;IAXH;MASM,gBAAe,EAChB;EAVL;IAcI,iBAAgB,EAMjB;IApBH;;MAkBM,2B9C6d4B,E8C5d7B;EAnBL;IAuBI,cAAa,EAId;IA3BH;MAyBM,8B9Csd4B,E8Crd7B;;AAML;EC1PE,mB/C6sBgC,E8CjdjC;EC1PK;IACF,e/CM6C;I+CL7C,0B/C0sBiC;I+CzsBjC,mB/CwsB8B,E+C/rB/B;IAPqB;MAClB,uB/CqsB4B,E+CpsB7B;IACD;MACE,e/CmsB+B;M+ClsB/B,0B/CH2C,E+CI5C;EAGmB;IAClB,0B/C4rB4B,E+C3rB7B;;AD2OL;EC7PE,sB/Cc2C,E8CiP5C;EC7PK;IACF,Y/C6sB8B;I+C5sB9B,0B/CUyC;I+CTzC,sB/CSyC,E+CA1C;IAPqB;MAClB,0B/CMuC,E+CLxC;IACD;MACE,e/CGuC;M+CFvC,uB/CosB4B,E+CnsB7B;EAGmB;IAClB,6B/CHuC,E+CIxC;;AD8OL;EChQE,sB/Csf6E,E8CpP9E;EChQK;IACF,e/CifoC;I+ChfpC,0B/CifoC;I+ChfpC,sB/Cif2E,E+Cxe5E;IAPqB;MAClB,0B/C8eyE,E+C7e1E;IACD;MACE,e/C0ekC;M+CzelC,0B/CwekC,E+CvenC;EAGmB;IAClB,6B/CqeyE,E+Cpe1E;;ADiPL;ECnQE,sB/C0f0E,E8CrP3E;ECnQK;IACF,e/CqfoC;I+CpfpC,0B/CqfoC;I+CpfpC,sB/CqfwE,E+C5ezE;IAPqB;MAClB,0B/CkfsE,E+CjfvE;IACD;MACE,e/C8ekC;M+C7elC,0B/C4ekC,E+C3enC;EAGmB;IAClB,6B/CyesE,E+CxevE;;ADoPL;ECtQE,sB/C8f6E,E8CtP9E;ECtQK;IACF,e/CyfoC;I+CxfpC,0B/CyfoC;I+CxfpC,sB/Cyf2E,E+Chf5E;IAPqB;MAClB,0B/CsfyE,E+Crf1E;IACD;MA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","file":"_bootstrap.scss","sourcesContent":["@charset \"UTF-8\";\n/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(\"../fonts/bootstrap/glyphicons-halflings-regular.eot\");\n  src: url(\"../fonts/bootstrap/glyphicons-halflings-regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"../fonts/bootstrap/glyphicons-halflings-regular.woff2\") format(\"woff2\"), url(\"../fonts/bootstrap/glyphicons-halflings-regular.woff\") format(\"woff\"), url(\"../fonts/bootstrap/glyphicons-halflings-regular.ttf\") format(\"truetype\"), url(\"../fonts/bootstrap/glyphicons-halflings-regular.svg#glyphicons_halflingsregular\") format(\"svg\"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: \"\\002a\"; }\n\n.glyphicon-plus:before {\n  content: \"\\002b\"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20ac\"; }\n\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n\n.glyphicon-pencil:before {\n  content: \"\\270f\"; }\n\n.glyphicon-glass:before {\n  content: \"\\e001\"; }\n\n.glyphicon-music:before {\n  content: \"\\e002\"; }\n\n.glyphicon-search:before {\n  content: \"\\e003\"; }\n\n.glyphicon-heart:before {\n  content: \"\\e005\"; }\n\n.glyphicon-star:before {\n  content: \"\\e006\"; }\n\n.glyphicon-star-empty:before {\n  content: \"\\e007\"; }\n\n.glyphicon-user:before {\n  content: \"\\e008\"; }\n\n.glyphicon-film:before {\n  content: \"\\e009\"; }\n\n.glyphicon-th-large:before {\n  content: \"\\e010\"; }\n\n.glyphicon-th:before {\n  content: \"\\e011\"; }\n\n.glyphicon-th-list:before {\n  content: \"\\e012\"; }\n\n.glyphicon-ok:before {\n  content: \"\\e013\"; }\n\n.glyphicon-remove:before {\n  content: \"\\e014\"; }\n\n.glyphicon-zoom-in:before {\n  content: \"\\e015\"; }\n\n.glyphicon-zoom-out:before {\n  content: \"\\e016\"; }\n\n.glyphicon-off:before {\n  content: \"\\e017\"; }\n\n.glyphicon-signal:before {\n  content: \"\\e018\"; }\n\n.glyphicon-cog:before {\n  content: \"\\e019\"; }\n\n.glyphicon-trash:before {\n  content: \"\\e020\"; }\n\n.glyphicon-home:before {\n  content: \"\\e021\"; }\n\n.glyphicon-file:before {\n  content: \"\\e022\"; }\n\n.glyphicon-time:before {\n  content: \"\\e023\"; }\n\n.glyphicon-road:before {\n  content: \"\\e024\"; }\n\n.glyphicon-download-alt:before {\n  content: \"\\e025\"; }\n\n.glyphicon-download:before {\n  content: \"\\e026\"; }\n\n.glyphicon-upload:before {\n  content: \"\\e027\"; }\n\n.glyphicon-inbox:before {\n  content: \"\\e028\"; }\n\n.glyphicon-play-circle:before {\n  content: \"\\e029\"; }\n\n.glyphicon-repeat:before {\n  content: \"\\e030\"; }\n\n.glyphicon-refresh:before {\n  content: \"\\e031\"; }\n\n.glyphicon-list-alt:before {\n  content: \"\\e032\"; }\n\n.glyphicon-lock:before {\n  content: \"\\e033\"; }\n\n.glyphicon-flag:before {\n  content: \"\\e034\"; }\n\n.glyphicon-headphones:before {\n  content: \"\\e035\"; }\n\n.glyphicon-volume-off:before {\n  content: \"\\e036\"; }\n\n.glyphicon-volume-down:before {\n  content: \"\\e037\"; }\n\n.glyphicon-volume-up:before {\n  content: \"\\e038\"; }\n\n.glyphicon-qrcode:before {\n  content: \"\\e039\"; }\n\n.glyphicon-barcode:before {\n  content: \"\\e040\"; }\n\n.glyphicon-tag:before {\n  content: \"\\e041\"; }\n\n.glyphicon-tags:before {\n  content: \"\\e042\"; }\n\n.glyphicon-book:before {\n  content: \"\\e043\"; }\n\n.glyphicon-bookmark:before {\n  content: \"\\e044\"; }\n\n.glyphicon-print:before {\n  content: \"\\e045\"; }\n\n.glyphicon-camera:before {\n  content: \"\\e046\"; }\n\n.glyphicon-font:before {\n  content: \"\\e047\"; }\n\n.glyphicon-bold:before {\n  content: \"\\e048\"; }\n\n.glyphicon-italic:before {\n  content: \"\\e049\"; }\n\n.glyphicon-text-height:before {\n  content: \"\\e050\"; }\n\n.glyphicon-text-width:before {\n  content: \"\\e051\"; }\n\n.glyphicon-align-left:before {\n  content: \"\\e052\"; }\n\n.glyphicon-align-center:before {\n  content: \"\\e053\"; }\n\n.glyphicon-align-right:before {\n  content: \"\\e054\"; }\n\n.glyphicon-align-justify:before {\n  content: \"\\e055\"; }\n\n.glyphicon-list:before {\n  content: \"\\e056\"; }\n\n.glyphicon-indent-left:before {\n  content: \"\\e057\"; }\n\n.glyphicon-indent-right:before {\n  content: \"\\e058\"; }\n\n.glyphicon-facetime-video:before {\n  content: \"\\e059\"; }\n\n.glyphicon-picture:before {\n  content: \"\\e060\"; }\n\n.glyphicon-map-marker:before {\n  content: \"\\e062\"; }\n\n.glyphicon-adjust:before {\n  content: \"\\e063\"; }\n\n.glyphicon-tint:before {\n  content: \"\\e064\"; }\n\n.glyphicon-edit:before {\n  content: \"\\e065\"; }\n\n.glyphicon-share:before {\n  content: \"\\e066\"; }\n\n.glyphicon-check:before {\n  content: \"\\e067\"; }\n\n.glyphicon-move:before {\n  content: \"\\e068\"; }\n\n.glyphicon-step-backward:before {\n  content: \"\\e069\"; }\n\n.glyphicon-fast-backward:before {\n  content: \"\\e070\"; }\n\n.glyphicon-backward:before {\n  content: \"\\e071\"; }\n\n.glyphicon-play:before {\n  content: \"\\e072\"; }\n\n.glyphicon-pause:before {\n  content: \"\\e073\"; }\n\n.glyphicon-stop:before {\n  content: \"\\e074\"; }\n\n.glyphicon-forward:before {\n  content: \"\\e075\"; }\n\n.glyphicon-fast-forward:before {\n  content: \"\\e076\"; }\n\n.glyphicon-step-forward:before {\n  content: \"\\e077\"; }\n\n.glyphicon-eject:before {\n  content: \"\\e078\"; }\n\n.glyphicon-chevron-left:before {\n  content: \"\\e079\"; }\n\n.glyphicon-chevron-right:before {\n  content: \"\\e080\"; }\n\n.glyphicon-plus-sign:before {\n  content: \"\\e081\"; }\n\n.glyphicon-minus-sign:before {\n  content: \"\\e082\"; }\n\n.glyphicon-remove-sign:before {\n  content: \"\\e083\"; }\n\n.glyphicon-ok-sign:before {\n  content: \"\\e084\"; }\n\n.glyphicon-question-sign:before {\n  content: \"\\e085\"; }\n\n.glyphicon-info-sign:before {\n  content: \"\\e086\"; }\n\n.glyphicon-screenshot:before {\n  content: \"\\e087\"; }\n\n.glyphicon-remove-circle:before {\n  content: \"\\e088\"; }\n\n.glyphicon-ok-circle:before {\n  content: \"\\e089\"; }\n\n.glyphicon-ban-circle:before {\n  content: \"\\e090\"; }\n\n.glyphicon-arrow-left:before {\n  content: \"\\e091\"; }\n\n.glyphicon-arrow-right:before {\n  content: \"\\e092\"; }\n\n.glyphicon-arrow-up:before {\n  content: \"\\e093\"; }\n\n.glyphicon-arrow-down:before {\n  content: \"\\e094\"; }\n\n.glyphicon-share-alt:before {\n  content: \"\\e095\"; }\n\n.glyphicon-resize-full:before {\n  content: \"\\e096\"; }\n\n.glyphicon-resize-small:before {\n  content: \"\\e097\"; }\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\e101\"; }\n\n.glyphicon-gift:before {\n  content: \"\\e102\"; }\n\n.glyphicon-leaf:before {\n  content: \"\\e103\"; }\n\n.glyphicon-fire:before {\n  content: \"\\e104\"; }\n\n.glyphicon-eye-open:before {\n  content: \"\\e105\"; }\n\n.glyphicon-eye-close:before {\n  content: \"\\e106\"; }\n\n.glyphicon-warning-sign:before {\n  content: \"\\e107\"; }\n\n.glyphicon-plane:before {\n  content: \"\\e108\"; }\n\n.glyphicon-calendar:before {\n  content: \"\\e109\"; }\n\n.glyphicon-random:before {\n  content: \"\\e110\"; }\n\n.glyphicon-comment:before {\n  content: \"\\e111\"; }\n\n.glyphicon-magnet:before {\n  content: \"\\e112\"; }\n\n.glyphicon-chevron-up:before {\n  content: \"\\e113\"; }\n\n.glyphicon-chevron-down:before {\n  content: \"\\e114\"; }\n\n.glyphicon-retweet:before {\n  content: \"\\e115\"; }\n\n.glyphicon-shopping-cart:before {\n  content: \"\\e116\"; }\n\n.glyphicon-folder-close:before {\n  content: \"\\e117\"; }\n\n.glyphicon-folder-open:before {\n  content: \"\\e118\"; }\n\n.glyphicon-resize-vertical:before {\n  content: \"\\e119\"; }\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\e120\"; }\n\n.glyphicon-hdd:before {\n  content: \"\\e121\"; }\n\n.glyphicon-bullhorn:before {\n  content: \"\\e122\"; }\n\n.glyphicon-bell:before {\n  content: \"\\e123\"; }\n\n.glyphicon-certificate:before {\n  content: \"\\e124\"; }\n\n.glyphicon-thumbs-up:before {\n  content: \"\\e125\"; }\n\n.glyphicon-thumbs-down:before {\n  content: \"\\e126\"; }\n\n.glyphicon-hand-right:before {\n  content: \"\\e127\"; }\n\n.glyphicon-hand-left:before {\n  content: \"\\e128\"; }\n\n.glyphicon-hand-up:before {\n  content: \"\\e129\"; }\n\n.glyphicon-hand-down:before {\n  content: \"\\e130\"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\e131\"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\e132\"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\e133\"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\e134\"; }\n\n.glyphicon-globe:before {\n  content: \"\\e135\"; }\n\n.glyphicon-wrench:before {\n  content: \"\\e136\"; }\n\n.glyphicon-tasks:before {\n  content: \"\\e137\"; }\n\n.glyphicon-filter:before {\n  content: \"\\e138\"; }\n\n.glyphicon-briefcase:before {\n  content: \"\\e139\"; }\n\n.glyphicon-fullscreen:before {\n  content: \"\\e140\"; }\n\n.glyphicon-dashboard:before {\n  content: \"\\e141\"; }\n\n.glyphicon-paperclip:before {\n  content: \"\\e142\"; }\n\n.glyphicon-heart-empty:before {\n  content: \"\\e143\"; }\n\n.glyphicon-link:before {\n  content: \"\\e144\"; }\n\n.glyphicon-phone:before {\n  content: \"\\e145\"; }\n\n.glyphicon-pushpin:before {\n  content: \"\\e146\"; }\n\n.glyphicon-usd:before {\n  content: \"\\e148\"; }\n\n.glyphicon-gbp:before {\n  content: \"\\e149\"; }\n\n.glyphicon-sort:before {\n  content: \"\\e150\"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\e151\"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\e152\"; }\n\n.glyphicon-sort-by-order:before {\n  content: \"\\e153\"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\e154\"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\e155\"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\e156\"; }\n\n.glyphicon-unchecked:before {\n  content: \"\\e157\"; }\n\n.glyphicon-expand:before {\n  content: \"\\e158\"; }\n\n.glyphicon-collapse-down:before {\n  content: \"\\e159\"; }\n\n.glyphicon-collapse-up:before {\n  content: \"\\e160\"; }\n\n.glyphicon-log-in:before {\n  content: \"\\e161\"; }\n\n.glyphicon-flash:before {\n  content: \"\\e162\"; }\n\n.glyphicon-log-out:before {\n  content: \"\\e163\"; }\n\n.glyphicon-new-window:before {\n  content: \"\\e164\"; }\n\n.glyphicon-record:before {\n  content: \"\\e165\"; }\n\n.glyphicon-save:before {\n  content: \"\\e166\"; }\n\n.glyphicon-open:before {\n  content: \"\\e167\"; }\n\n.glyphicon-saved:before {\n  content: \"\\e168\"; }\n\n.glyphicon-import:before {\n  content: \"\\e169\"; }\n\n.glyphicon-export:before {\n  content: \"\\e170\"; }\n\n.glyphicon-send:before {\n  content: \"\\e171\"; }\n\n.glyphicon-floppy-disk:before {\n  content: \"\\e172\"; }\n\n.glyphicon-floppy-saved:before {\n  content: \"\\e173\"; }\n\n.glyphicon-floppy-remove:before {\n  content: \"\\e174\"; }\n\n.glyphicon-floppy-save:before {\n  content: \"\\e175\"; }\n\n.glyphicon-floppy-open:before {\n  content: \"\\e176\"; }\n\n.glyphicon-credit-card:before {\n  content: \"\\e177\"; }\n\n.glyphicon-transfer:before {\n  content: \"\\e178\"; }\n\n.glyphicon-cutlery:before {\n  content: \"\\e179\"; }\n\n.glyphicon-header:before {\n  content: \"\\e180\"; }\n\n.glyphicon-compressed:before {\n  content: \"\\e181\"; }\n\n.glyphicon-earphone:before {\n  content: \"\\e182\"; }\n\n.glyphicon-phone-alt:before {\n  content: \"\\e183\"; }\n\n.glyphicon-tower:before {\n  content: \"\\e184\"; }\n\n.glyphicon-stats:before {\n  content: \"\\e185\"; }\n\n.glyphicon-sd-video:before {\n  content: \"\\e186\"; }\n\n.glyphicon-hd-video:before {\n  content: \"\\e187\"; }\n\n.glyphicon-subtitles:before {\n  content: \"\\e188\"; }\n\n.glyphicon-sound-stereo:before {\n  content: \"\\e189\"; }\n\n.glyphicon-sound-dolby:before {\n  content: \"\\e190\"; }\n\n.glyphicon-sound-5-1:before {\n  content: \"\\e191\"; }\n\n.glyphicon-sound-6-1:before {\n  content: \"\\e192\"; }\n\n.glyphicon-sound-7-1:before {\n  content: \"\\e193\"; }\n\n.glyphicon-copyright-mark:before {\n  content: \"\\e194\"; }\n\n.glyphicon-registration-mark:before {\n  content: \"\\e195\"; }\n\n.glyphicon-cloud-download:before {\n  content: \"\\e197\"; }\n\n.glyphicon-cloud-upload:before {\n  content: \"\\e198\"; }\n\n.glyphicon-tree-conifer:before {\n  content: \"\\e199\"; }\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\e200\"; }\n\n.glyphicon-cd:before {\n  content: \"\\e201\"; }\n\n.glyphicon-save-file:before {\n  content: \"\\e202\"; }\n\n.glyphicon-open-file:before {\n  content: \"\\e203\"; }\n\n.glyphicon-level-up:before {\n  content: \"\\e204\"; }\n\n.glyphicon-copy:before {\n  content: \"\\e205\"; }\n\n.glyphicon-paste:before {\n  content: \"\\e206\"; }\n\n.glyphicon-alert:before {\n  content: \"\\e209\"; }\n\n.glyphicon-equalizer:before {\n  content: \"\\e210\"; }\n\n.glyphicon-king:before {\n  content: \"\\e211\"; }\n\n.glyphicon-queen:before {\n  content: \"\\e212\"; }\n\n.glyphicon-pawn:before {\n  content: \"\\e213\"; }\n\n.glyphicon-bishop:before {\n  content: \"\\e214\"; }\n\n.glyphicon-knight:before {\n  content: \"\\e215\"; }\n\n.glyphicon-baby-formula:before {\n  content: \"\\e216\"; }\n\n.glyphicon-tent:before {\n  content: \"\\26fa\"; }\n\n.glyphicon-blackboard:before {\n  content: \"\\e218\"; }\n\n.glyphicon-bed:before {\n  content: \"\\e219\"; }\n\n.glyphicon-apple:before {\n  content: \"\\f8ff\"; }\n\n.glyphicon-erase:before {\n  content: \"\\e221\"; }\n\n.glyphicon-hourglass:before {\n  content: \"\\231b\"; }\n\n.glyphicon-lamp:before {\n  content: \"\\e223\"; }\n\n.glyphicon-duplicate:before {\n  content: \"\\e224\"; }\n\n.glyphicon-piggy-bank:before {\n  content: \"\\e225\"; }\n\n.glyphicon-scissors:before {\n  content: \"\\e226\"; }\n\n.glyphicon-bitcoin:before {\n  content: \"\\e227\"; }\n\n.glyphicon-btc:before {\n  content: \"\\e227\"; }\n\n.glyphicon-xbt:before {\n  content: \"\\e227\"; }\n\n.glyphicon-yen:before {\n  content: \"\\00a5\"; }\n\n.glyphicon-jpy:before {\n  content: \"\\00a5\"; }\n\n.glyphicon-ruble:before {\n  content: \"\\20bd\"; }\n\n.glyphicon-rub:before {\n  content: \"\\20bd\"; }\n\n.glyphicon-scale:before {\n  content: \"\\e230\"; }\n\n.glyphicon-ice-lolly:before {\n  content: \"\\e231\"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\e232\"; }\n\n.glyphicon-education:before {\n  content: \"\\e233\"; }\n\n.glyphicon-option-horizontal:before {\n  content: \"\\e234\"; }\n\n.glyphicon-option-vertical:before {\n  content: \"\\e235\"; }\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\e236\"; }\n\n.glyphicon-modal-window:before {\n  content: \"\\e237\"; }\n\n.glyphicon-oil:before {\n  content: \"\\e238\"; }\n\n.glyphicon-grain:before {\n  content: \"\\e239\"; }\n\n.glyphicon-sunglasses:before {\n  content: \"\\e240\"; }\n\n.glyphicon-text-size:before {\n  content: \"\\e241\"; }\n\n.glyphicon-text-color:before {\n  content: \"\\e242\"; }\n\n.glyphicon-text-background:before {\n  content: \"\\e243\"; }\n\n.glyphicon-object-align-top:before {\n  content: \"\\e244\"; }\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\e245\"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\e246\"; }\n\n.glyphicon-object-align-left:before {\n  content: \"\\e247\"; }\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\e248\"; }\n\n.glyphicon-object-align-right:before {\n  content: \"\\e249\"; }\n\n.glyphicon-triangle-right:before {\n  content: \"\\e250\"; }\n\n.glyphicon-triangle-left:before {\n  content: \"\\e251\"; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\e252\"; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\e253\"; }\n\n.glyphicon-console:before {\n  content: \"\\e254\"; }\n\n.glyphicon-superscript:before {\n  content: \"\\e255\"; }\n\n.glyphicon-subscript:before {\n  content: \"\\e256\"; }\n\n.glyphicon-menu-left:before {\n  content: \"\\e257\"; }\n\n.glyphicon-menu-right:before {\n  content: \"\\e258\"; }\n\n.glyphicon-menu-down:before {\n  content: \"\\e259\"; }\n\n.glyphicon-menu-up:before {\n  content: \"\\e260\"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014 \\00A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\00A0 \\2014'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/ \";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203a'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n","/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n\n// Core variables and mixins\n@import \"bootstrap/variables\";\n@import \"bootstrap/mixins\";\n\n// Reset and dependencies\n@import \"bootstrap/normalize\";\n@import \"bootstrap/print\";\n@import \"bootstrap/glyphicons\";\n\n// Core CSS\n@import \"bootstrap/scaffolding\";\n@import \"bootstrap/type\";\n@import \"bootstrap/code\";\n@import \"bootstrap/grid\";\n@import \"bootstrap/tables\";\n@import \"bootstrap/forms\";\n@import \"bootstrap/buttons\";\n\n// Components\n@import \"bootstrap/component-animations\";\n@import \"bootstrap/dropdowns\";\n@import \"bootstrap/button-groups\";\n@import \"bootstrap/input-groups\";\n@import \"bootstrap/navs\";\n@import \"bootstrap/navbar\";\n@import \"bootstrap/breadcrumbs\";\n@import \"bootstrap/pagination\";\n@import \"bootstrap/pager\";\n@import \"bootstrap/labels\";\n@import \"bootstrap/badges\";\n@import \"bootstrap/jumbotron\";\n@import \"bootstrap/thumbnails\";\n@import \"bootstrap/alerts\";\n@import \"bootstrap/progress-bars\";\n@import \"bootstrap/media\";\n@import \"bootstrap/list-group\";\n@import \"bootstrap/panels\";\n@import \"bootstrap/responsive-embed\";\n@import \"bootstrap/wells\";\n@import \"bootstrap/close\";\n\n// Components w/ JavaScript\n@import \"bootstrap/modals\";\n@import \"bootstrap/tooltip\";\n@import \"bootstrap/popovers\";\n@import \"bootstrap/carousel\";\n\n// Utility classes\n@import \"bootstrap/utilities\";\n@import \"bootstrap/responsive-utilities\";\n","/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\n//\n// 1. Set default font family to sans-serif.\n// 2. Prevent iOS and IE text size adjust after device orientation change,\n//    without disabling user zoom.\n//\n\nhtml {\n  font-family: sans-serif; // 1\n  -ms-text-size-adjust: 100%; // 2\n  -webkit-text-size-adjust: 100%; // 2\n}\n\n//\n// Remove default margin.\n//\n\nbody {\n  margin: 0;\n}\n\n// HTML5 display definitions\n// ==========================================================================\n\n//\n// Correct `block` display not defined for any HTML5 element in IE 8/9.\n// Correct `block` display not defined for `details` or `summary` in IE 10/11\n// and Firefox.\n// Correct `block` display not defined for `main` in IE 11.\n//\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\n//\n// 1. Correct `inline-block` display not defined in IE 8/9.\n// 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\n//\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block; // 1\n  vertical-align: baseline; // 2\n}\n\n//\n// Prevent modern browsers from displaying `audio` without controls.\n// Remove excess height in iOS 5 devices.\n//\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n//\n// Address `[hidden]` styling not present in IE 8/9/10.\n// Hide the `template` element in IE 8/9/10/11, Safari, and Firefox < 22.\n//\n\n[hidden],\ntemplate {\n  display: none;\n}\n\n// Links\n// ==========================================================================\n\n//\n// Remove the gray background color from active links in IE 10.\n//\n\na {\n  background-color: transparent;\n}\n\n//\n// Improve readability of focused elements when they are also in an\n// active/hover state.\n//\n\na:active,\na:hover {\n  outline: 0;\n}\n\n// Text-level semantics\n// ==========================================================================\n\n//\n// Address styling not present in IE 8/9/10/11, Safari, and Chrome.\n//\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\n//\n// Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\n//\n\nb,\nstrong {\n  font-weight: bold;\n}\n\n//\n// Address styling not present in Safari and Chrome.\n//\n\ndfn {\n  font-style: italic;\n}\n\n//\n// Address variable `h1` font-size and margin within `section` and `article`\n// contexts in Firefox 4+, Safari, and Chrome.\n//\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n//\n// Address styling not present in IE 8/9.\n//\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\n//\n// Address inconsistent and variable font size in all browsers.\n//\n\nsmall {\n  font-size: 80%;\n}\n\n//\n// Prevent `sub` and `sup` affecting `line-height` in all browsers.\n//\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n// Embedded content\n// ==========================================================================\n\n//\n// Remove border when inside `a` element in IE 8/9/10.\n//\n\nimg {\n  border: 0;\n}\n\n//\n// Correct overflow not hidden in IE 9/10/11.\n//\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n// Grouping content\n// ==========================================================================\n\n//\n// Address margin not present in IE 8/9 and Safari.\n//\n\nfigure {\n  margin: 1em 40px;\n}\n\n//\n// Address differences between Firefox and other browsers.\n//\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\n//\n// Contain overflow in all browsers.\n//\n\npre {\n  overflow: auto;\n}\n\n//\n// Address odd `em`-unit font size rendering in all browsers.\n//\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n// Forms\n// ==========================================================================\n\n//\n// Known limitation: by default, Chrome and Safari on OS X allow very limited\n// styling of `select`, unless a `border` property is set.\n//\n\n//\n// 1. Correct color not being inherited.\n//    Known issue: affects color of disabled elements.\n// 2. Correct font properties not being inherited.\n// 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\n//\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit; // 1\n  font: inherit; // 2\n  margin: 0; // 3\n}\n\n//\n// Address `overflow` set to `hidden` in IE 8/9/10/11.\n//\n\nbutton {\n  overflow: visible;\n}\n\n//\n// Address inconsistent `text-transform` inheritance for `button` and `select`.\n// All other form control elements do not inherit `text-transform` values.\n// Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\n// Correct `select` style inheritance in Firefox.\n//\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n//\n// 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\n//    and `video` controls.\n// 2. Correct inability to style clickable `input` types in iOS.\n// 3. Improve usability and consistency of cursor style between image-type\n//    `input` and others.\n//\n\nbutton,\nhtml input[type=\"button\"], // 1\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button; // 2\n  cursor: pointer; // 3\n}\n\n//\n// Re-set default cursor for disabled elements.\n//\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\n//\n// Remove inner padding and border in Firefox 4+.\n//\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n//\n// Address Firefox 4+ setting `line-height` on `input` using `!important` in\n// the UA stylesheet.\n//\n\ninput {\n  line-height: normal;\n}\n\n//\n// It's recommended that you don't attempt to style these elements.\n// Firefox's implementation doesn't respect box-sizing, padding, or width.\n//\n// 1. Address box sizing set to `content-box` in IE 8/9/10.\n// 2. Remove excess padding in IE 8/9/10.\n//\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box; // 1\n  padding: 0; // 2\n}\n\n//\n// Fix the cursor style for Chrome's increment/decrement buttons. For certain\n// `font-size` values of the `input`, it causes the cursor style of the\n// decrement button to change from `default` to `text`.\n//\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n//\n// 1. Address `appearance` set to `searchfield` in Safari and Chrome.\n// 2. Address `box-sizing` set to `border-box` in Safari and Chrome.\n//\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield; // 1\n  box-sizing: content-box; //2\n}\n\n//\n// Remove inner padding and search cancel button in Safari and Chrome on OS X.\n// Safari (but not Chrome) clips the cancel button when the search input has\n// padding (and `textfield` appearance).\n//\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n//\n// Define consistent border, margin, and padding.\n//\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n//\n// 1. Correct `color` not being inherited in IE 8/9/10/11.\n// 2. Remove padding so people aren't caught out if they zero out fieldsets.\n//\n\nlegend {\n  border: 0; // 1\n  padding: 0; // 2\n}\n\n//\n// Remove default vertical scrollbar in IE 8/9/10/11.\n//\n\ntextarea {\n  overflow: auto;\n}\n\n//\n// Don't inherit the `font-weight` (applied by a rule above).\n// NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\n//\n\noptgroup {\n  font-weight: bold;\n}\n\n// Tables\n// ==========================================================================\n\n//\n// Remove most spacing between table cells.\n//\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n","/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n\n// ==========================================================================\n// Print styles.\n// Inlined to avoid the additional HTTP request: h5bp.com/r\n// ==========================================================================\n\n@media print {\n    *,\n    *:before,\n    *:after {\n        background: transparent !important;\n        color: #000 !important; // Black prints faster: h5bp.com/s\n        box-shadow: none !important;\n        text-shadow: none !important;\n    }\n\n    a,\n    a:visited {\n        text-decoration: underline;\n    }\n\n    a[href]:after {\n        content: \" (\" attr(href) \")\";\n    }\n\n    abbr[title]:after {\n        content: \" (\" attr(title) \")\";\n    }\n\n    // Don't show links that are fragment identifiers,\n    // or use the `javascript:` pseudo protocol\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\";\n    }\n\n    pre,\n    blockquote {\n        border: 1px solid #999;\n        page-break-inside: avoid;\n    }\n\n    thead {\n        display: table-header-group; // h5bp.com/t\n    }\n\n    tr,\n    img {\n        page-break-inside: avoid;\n    }\n\n    img {\n        max-width: 100% !important;\n    }\n\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3;\n    }\n\n    h2,\n    h3 {\n        page-break-after: avoid;\n    }\n\n    // Bootstrap specific changes start\n\n    // Bootstrap components\n    .navbar {\n        display: none;\n    }\n    .btn,\n    .dropup > .btn {\n        > .caret {\n            border-top-color: #000 !important;\n        }\n    }\n    .label {\n        border: 1px solid #000;\n    }\n\n    .table {\n        border-collapse: collapse !important;\n\n        td,\n        th {\n            background-color: #fff !important;\n        }\n    }\n    .table-bordered {\n        th,\n        td {\n            border: 1px solid #ddd !important;\n        }\n    }\n\n    // Bootstrap specific changes end\n}\n","//\n// Glyphicons for Bootstrap\n//\n// Since icons are fonts, they can be placed anywhere text is placed and are\n// thus automatically sized to match the surrounding child. To use, create an\n// inline element with the appropriate classes, like so:\n//\n// <a href=\"#\"><span class=\"glyphicon glyphicon-star\"></span> Star</a>\n\n@at-root {\n  // Import the fonts\n  @font-face {\n    font-family: 'Glyphicons Halflings';\n    src: url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.eot'), '#{$icon-font-path}#{$icon-font-name}.eot'));\n    src: url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.eot?#iefix'), '#{$icon-font-path}#{$icon-font-name}.eot?#iefix')) format('embedded-opentype'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.woff2'), '#{$icon-font-path}#{$icon-font-name}.woff2')) format('woff2'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.woff'), '#{$icon-font-path}#{$icon-font-name}.woff')) format('woff'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.ttf'), '#{$icon-font-path}#{$icon-font-name}.ttf')) format('truetype'),\n         url(if($bootstrap-sass-asset-helper, twbs-font-path('#{$icon-font-path}#{$icon-font-name}.svg##{$icon-font-svg-id}'), '#{$icon-font-path}#{$icon-font-name}.svg##{$icon-font-svg-id}')) format('svg');\n  }\n}\n\n// Catchall baseclass\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n// Individual icons\n.glyphicon-asterisk               { &:before { content: \"\\002a\"; } }\n.glyphicon-plus                   { &:before { content: \"\\002b\"; } }\n.glyphicon-euro,\n.glyphicon-eur                    { &:before { content: \"\\20ac\"; } }\n.glyphicon-minus                  { &:before { content: \"\\2212\"; } }\n.glyphicon-cloud                  { &:before { content: \"\\2601\"; } }\n.glyphicon-envelope               { &:before { content: \"\\2709\"; } }\n.glyphicon-pencil                 { &:before { content: \"\\270f\"; } }\n.glyphicon-glass                  { &:before { content: \"\\e001\"; } }\n.glyphicon-music                  { &:before { content: \"\\e002\"; } }\n.glyphicon-search                 { &:before { content: \"\\e003\"; } }\n.glyphicon-heart                  { &:before { content: \"\\e005\"; } }\n.glyphicon-star                   { &:before { content: \"\\e006\"; } }\n.glyphicon-star-empty             { &:before { content: \"\\e007\"; } }\n.glyphicon-user                   { &:before { content: \"\\e008\"; } }\n.glyphicon-film                   { &:before { content: \"\\e009\"; } }\n.glyphicon-th-large               { &:before { content: \"\\e010\"; } }\n.glyphicon-th                     { &:before { content: \"\\e011\"; } }\n.glyphicon-th-list                { &:before { content: \"\\e012\"; } }\n.glyphicon-ok                     { &:before { content: \"\\e013\"; } }\n.glyphicon-remove                 { &:before { content: \"\\e014\"; } }\n.glyphicon-zoom-in                { &:before { content: \"\\e015\"; } }\n.glyphicon-zoom-out               { &:before { content: \"\\e016\"; } }\n.glyphicon-off                    { &:before { content: \"\\e017\"; } }\n.glyphicon-signal                 { &:before { content: \"\\e018\"; } }\n.glyphicon-cog                    { &:before { content: \"\\e019\"; } }\n.glyphicon-trash                  { &:before { content: \"\\e020\"; } }\n.glyphicon-home                   { &:before { content: \"\\e021\"; } }\n.glyphicon-file                   { &:before { content: \"\\e022\"; } }\n.glyphicon-time                   { &:before { content: \"\\e023\"; } }\n.glyphicon-road                   { &:before { content: \"\\e024\"; } }\n.glyphicon-download-alt           { &:before { content: \"\\e025\"; } }\n.glyphicon-download               { &:before { content: \"\\e026\"; } }\n.glyphicon-upload                 { &:before { content: \"\\e027\"; } }\n.glyphicon-inbox                  { &:before { content: \"\\e028\"; } }\n.glyphicon-play-circle            { &:before { content: \"\\e029\"; } }\n.glyphicon-repeat                 { &:before { content: \"\\e030\"; } }\n.glyphicon-refresh                { &:before { content: \"\\e031\"; } }\n.glyphicon-list-alt               { &:before { content: \"\\e032\"; } }\n.glyphicon-lock                   { &:before { content: \"\\e033\"; } }\n.glyphicon-flag                   { &:before { content: \"\\e034\"; } }\n.glyphicon-headphones             { &:before { content: \"\\e035\"; } }\n.glyphicon-volume-off             { &:before { content: \"\\e036\"; } }\n.glyphicon-volume-down            { &:before { content: \"\\e037\"; } }\n.glyphicon-volume-up              { &:before { content: \"\\e038\"; } }\n.glyphicon-qrcode                 { &:before { content: \"\\e039\"; } }\n.glyphicon-barcode                { &:before { content: \"\\e040\"; } }\n.glyphicon-tag                    { &:before { content: \"\\e041\"; } }\n.glyphicon-tags                   { &:before { content: \"\\e042\"; } }\n.glyphicon-book                   { &:before { content: \"\\e043\"; } }\n.glyphicon-bookmark               { &:before { content: \"\\e044\"; } }\n.glyphicon-print                  { &:before { content: \"\\e045\"; } }\n.glyphicon-camera                 { &:before { content: \"\\e046\"; } }\n.glyphicon-font                   { &:before { content: \"\\e047\"; } }\n.glyphicon-bold                   { &:before { content: \"\\e048\"; } }\n.glyphicon-italic                 { &:before { content: \"\\e049\"; } }\n.glyphicon-text-height            { &:before { content: \"\\e050\"; } }\n.glyphicon-text-width             { &:before { content: \"\\e051\"; } }\n.glyphicon-align-left             { &:before { content: \"\\e052\"; } }\n.glyphicon-align-center           { &:before { content: \"\\e053\"; } }\n.glyphicon-align-right            { &:before { content: \"\\e054\"; } }\n.glyphicon-align-justify          { &:before { content: \"\\e055\"; } }\n.glyphicon-list                   { &:before { content: \"\\e056\"; } }\n.glyphicon-indent-left            { &:before { content: \"\\e057\"; } }\n.glyphicon-indent-right           { &:before { content: \"\\e058\"; } }\n.glyphicon-facetime-video         { &:before { content: \"\\e059\"; } }\n.glyphicon-picture                { &:before { content: \"\\e060\"; } }\n.glyphicon-map-marker             { &:before { content: \"\\e062\"; } }\n.glyphicon-adjust                 { &:before { content: \"\\e063\"; } }\n.glyphicon-tint                   { &:before { content: \"\\e064\"; } }\n.glyphicon-edit                   { &:before { content: \"\\e065\"; } }\n.glyphicon-share                  { &:before { content: \"\\e066\"; } }\n.glyphicon-check                  { &:before { content: \"\\e067\"; } }\n.glyphicon-move                   { &:before { content: \"\\e068\"; } }\n.glyphicon-step-backward          { &:before { content: \"\\e069\"; } }\n.glyphicon-fast-backward          { &:before { content: \"\\e070\"; } }\n.glyphicon-backward               { &:before { content: \"\\e071\"; } }\n.glyphicon-play                   { &:before { content: \"\\e072\"; } }\n.glyphicon-pause                  { &:before { content: \"\\e073\"; } }\n.glyphicon-stop                   { &:before { content: \"\\e074\"; } }\n.glyphicon-forward                { &:before { content: \"\\e075\"; } }\n.glyphicon-fast-forward           { &:before { content: \"\\e076\"; } }\n.glyphicon-step-forward           { &:before { content: \"\\e077\"; } }\n.glyphicon-eject                  { &:before { content: \"\\e078\"; } }\n.glyphicon-chevron-left           { &:before { content: \"\\e079\"; } }\n.glyphicon-chevron-right          { &:before { content: \"\\e080\"; } }\n.glyphicon-plus-sign              { &:before { content: \"\\e081\"; } }\n.glyphicon-minus-sign             { &:before { content: \"\\e082\"; } }\n.glyphicon-remove-sign            { &:before { content: \"\\e083\"; } }\n.glyphicon-ok-sign                { &:before { content: \"\\e084\"; } }\n.glyphicon-question-sign          { &:before { content: \"\\e085\"; } }\n.glyphicon-info-sign              { &:before { content: \"\\e086\"; } }\n.glyphicon-screenshot             { &:before { content: \"\\e087\"; } }\n.glyphicon-remove-circle          { &:before { content: \"\\e088\"; } }\n.glyphicon-ok-circle              { &:before { content: \"\\e089\"; } }\n.glyphicon-ban-circle             { &:before { content: \"\\e090\"; } }\n.glyphicon-arrow-left             { &:before { content: \"\\e091\"; } }\n.glyphicon-arrow-right            { &:before { content: \"\\e092\"; } }\n.glyphicon-arrow-up               { &:before { content: \"\\e093\"; } }\n.glyphicon-arrow-down             { &:before { content: \"\\e094\"; } }\n.glyphicon-share-alt              { &:before { content: \"\\e095\"; } }\n.glyphicon-resize-full            { &:before { content: \"\\e096\"; } }\n.glyphicon-resize-small           { &:before { content: \"\\e097\"; } }\n.glyphicon-exclamation-sign       { &:before { content: \"\\e101\"; } }\n.glyphicon-gift                   { &:before { content: \"\\e102\"; } }\n.glyphicon-leaf                   { &:before { content: \"\\e103\"; } }\n.glyphicon-fire                   { &:before { content: \"\\e104\"; } }\n.glyphicon-eye-open               { &:before { content: \"\\e105\"; } }\n.glyphicon-eye-close              { &:before { content: \"\\e106\"; } }\n.glyphicon-warning-sign           { &:before { content: \"\\e107\"; } }\n.glyphicon-plane                  { &:before { content: \"\\e108\"; } }\n.glyphicon-calendar               { &:before { content: \"\\e109\"; } }\n.glyphicon-random                 { &:before { content: \"\\e110\"; } }\n.glyphicon-comment                { &:before { content: \"\\e111\"; } }\n.glyphicon-magnet                 { &:before { content: \"\\e112\"; } }\n.glyphicon-chevron-up             { &:before { content: \"\\e113\"; } }\n.glyphicon-chevron-down           { &:before { content: \"\\e114\"; } }\n.glyphicon-retweet                { &:before { content: \"\\e115\"; } }\n.glyphicon-shopping-cart          { &:before { content: \"\\e116\"; } }\n.glyphicon-folder-close           { &:before { content: \"\\e117\"; } }\n.glyphicon-folder-open            { &:before { content: \"\\e118\"; } }\n.glyphicon-resize-vertical        { &:before { content: \"\\e119\"; } }\n.glyphicon-resize-horizontal      { &:before { content: \"\\e120\"; } }\n.glyphicon-hdd                    { &:before { content: \"\\e121\"; } }\n.glyphicon-bullhorn               { &:before { content: \"\\e122\"; } }\n.glyphicon-bell                   { &:before { content: \"\\e123\"; } }\n.glyphicon-certificate            { &:before { content: \"\\e124\"; } }\n.glyphicon-thumbs-up              { &:before { content: \"\\e125\"; } }\n.glyphicon-thumbs-down            { &:before { content: \"\\e126\"; } }\n.glyphicon-hand-right             { &:before { content: \"\\e127\"; } }\n.glyphicon-hand-left              { &:before { content: \"\\e128\"; } }\n.glyphicon-hand-up                { &:before { content: \"\\e129\"; } }\n.glyphicon-hand-down              { &:before { content: \"\\e130\"; } }\n.glyphicon-circle-arrow-right     { &:before { content: \"\\e131\"; } }\n.glyphicon-circle-arrow-left      { &:before { content: \"\\e132\"; } }\n.glyphicon-circle-arrow-up        { &:before { content: \"\\e133\"; } }\n.glyphicon-circle-arrow-down      { &:before { content: \"\\e134\"; } }\n.glyphicon-globe                  { &:before { content: \"\\e135\"; } }\n.glyphicon-wrench                 { &:before { content: \"\\e136\"; } }\n.glyphicon-tasks                  { &:before { content: \"\\e137\"; } }\n.glyphicon-filter                 { &:before { content: \"\\e138\"; } }\n.glyphicon-briefcase              { &:before { content: \"\\e139\"; } }\n.glyphicon-fullscreen             { &:before { content: \"\\e140\"; } }\n.glyphicon-dashboard              { &:before { content: \"\\e141\"; } }\n.glyphicon-paperclip              { &:before { content: \"\\e142\"; } }\n.glyphicon-heart-empty            { &:before { content: \"\\e143\"; } }\n.glyphicon-link                   { &:before { content: \"\\e144\"; } }\n.glyphicon-phone                  { &:before { content: \"\\e145\"; } }\n.glyphicon-pushpin                { &:before { content: \"\\e146\"; } }\n.glyphicon-usd                    { &:before { content: \"\\e148\"; } }\n.glyphicon-gbp                    { &:before { content: \"\\e149\"; } }\n.glyphicon-sort                   { &:before { content: \"\\e150\"; } }\n.glyphicon-sort-by-alphabet       { &:before { content: \"\\e151\"; } }\n.glyphicon-sort-by-alphabet-alt   { &:before { content: \"\\e152\"; } }\n.glyphicon-sort-by-order          { &:before { content: \"\\e153\"; } }\n.glyphicon-sort-by-order-alt      { &:before { content: \"\\e154\"; } }\n.glyphicon-sort-by-attributes     { &:before { content: \"\\e155\"; } }\n.glyphicon-sort-by-attributes-alt { &:before { content: \"\\e156\"; } }\n.glyphicon-unchecked              { &:before { content: \"\\e157\"; } }\n.glyphicon-expand                 { &:before { content: \"\\e158\"; } }\n.glyphicon-collapse-down          { &:before { content: \"\\e159\"; } }\n.glyphicon-collapse-up            { &:before { content: \"\\e160\"; } }\n.glyphicon-log-in                 { &:before { content: \"\\e161\"; } }\n.glyphicon-flash                  { &:before { content: \"\\e162\"; } }\n.glyphicon-log-out                { &:before { content: \"\\e163\"; } }\n.glyphicon-new-window             { &:before { content: \"\\e164\"; } }\n.glyphicon-record                 { &:before { content: \"\\e165\"; } }\n.glyphicon-save                   { &:before { content: \"\\e166\"; } }\n.glyphicon-open                   { &:before { content: \"\\e167\"; } }\n.glyphicon-saved                  { &:before { content: \"\\e168\"; } }\n.glyphicon-import                 { &:before { content: \"\\e169\"; } }\n.glyphicon-export                 { &:before { content: \"\\e170\"; } }\n.glyphicon-send                   { &:before { content: \"\\e171\"; } }\n.glyphicon-floppy-disk            { &:before { content: \"\\e172\"; } }\n.glyphicon-floppy-saved           { &:before { content: \"\\e173\"; } }\n.glyphicon-floppy-remove          { &:before { content: \"\\e174\"; } }\n.glyphicon-floppy-save            { &:before { content: \"\\e175\"; } }\n.glyphicon-floppy-open            { &:before { content: \"\\e176\"; } }\n.glyphicon-credit-card            { &:before { content: \"\\e177\"; } }\n.glyphicon-transfer               { &:before { content: \"\\e178\"; } }\n.glyphicon-cutlery                { &:before { content: \"\\e179\"; } }\n.glyphicon-header                 { &:before { content: \"\\e180\"; } }\n.glyphicon-compressed             { &:before { content: \"\\e181\"; } }\n.glyphicon-earphone               { &:before { content: \"\\e182\"; } }\n.glyphicon-phone-alt              { &:before { content: \"\\e183\"; } }\n.glyphicon-tower                  { &:before { content: \"\\e184\"; } }\n.glyphicon-stats                  { &:before { content: \"\\e185\"; } }\n.glyphicon-sd-video               { &:before { content: \"\\e186\"; } }\n.glyphicon-hd-video               { &:before { content: \"\\e187\"; } }\n.glyphicon-subtitles              { &:before { content: \"\\e188\"; } }\n.glyphicon-sound-stereo           { &:before { content: \"\\e189\"; } }\n.glyphicon-sound-dolby            { &:before { content: \"\\e190\"; } }\n.glyphicon-sound-5-1              { &:before { content: \"\\e191\"; } }\n.glyphicon-sound-6-1              { &:before { content: \"\\e192\"; } }\n.glyphicon-sound-7-1              { &:before { content: \"\\e193\"; } }\n.glyphicon-copyright-mark         { &:before { content: \"\\e194\"; } }\n.glyphicon-registration-mark      { &:before { content: \"\\e195\"; } }\n.glyphicon-cloud-download         { &:before { content: \"\\e197\"; } }\n.glyphicon-cloud-upload           { &:before { content: \"\\e198\"; } }\n.glyphicon-tree-conifer           { &:before { content: \"\\e199\"; } }\n.glyphicon-tree-deciduous         { &:before { content: \"\\e200\"; } }\n.glyphicon-cd                     { &:before { content: \"\\e201\"; } }\n.glyphicon-save-file              { &:before { content: \"\\e202\"; } }\n.glyphicon-open-file              { &:before { content: \"\\e203\"; } }\n.glyphicon-level-up               { &:before { content: \"\\e204\"; } }\n.glyphicon-copy                   { &:before { content: \"\\e205\"; } }\n.glyphicon-paste                  { &:before { content: \"\\e206\"; } }\n// The following 2 Glyphicons are omitted for the time being because\n// they currently use Unicode codepoints that are outside the\n// Basic Multilingual Plane (BMP). Older buggy versions of WebKit can't handle\n// non-BMP codepoints in CSS string escapes, and thus can't display these two icons.\n// Notably, the bug affects some older versions of the Android Browser.\n// More info: https://github.com/twbs/bootstrap/issues/10106\n// .glyphicon-door                   { &:before { content: \"\\1f6aa\"; } }\n// .glyphicon-key                    { &:before { content: \"\\1f511\"; } }\n.glyphicon-alert                  { &:before { content: \"\\e209\"; } }\n.glyphicon-equalizer              { &:before { content: \"\\e210\"; } }\n.glyphicon-king                   { &:before { content: \"\\e211\"; } }\n.glyphicon-queen                  { &:before { content: \"\\e212\"; } }\n.glyphicon-pawn                   { &:before { content: \"\\e213\"; } }\n.glyphicon-bishop                 { &:before { content: \"\\e214\"; } }\n.glyphicon-knight                 { &:before { content: \"\\e215\"; } }\n.glyphicon-baby-formula           { &:before { content: \"\\e216\"; } }\n.glyphicon-tent                   { &:before { content: \"\\26fa\"; } }\n.glyphicon-blackboard             { &:before { content: \"\\e218\"; } }\n.glyphicon-bed                    { &:before { content: \"\\e219\"; } }\n.glyphicon-apple                  { &:before { content: \"\\f8ff\"; } }\n.glyphicon-erase                  { &:before { content: \"\\e221\"; } }\n.glyphicon-hourglass              { &:before { content: \"\\231b\"; } }\n.glyphicon-lamp                   { &:before { content: \"\\e223\"; } }\n.glyphicon-duplicate              { &:before { content: \"\\e224\"; } }\n.glyphicon-piggy-bank             { &:before { content: \"\\e225\"; } }\n.glyphicon-scissors               { &:before { content: \"\\e226\"; } }\n.glyphicon-bitcoin                { &:before { content: \"\\e227\"; } }\n.glyphicon-btc                    { &:before { content: \"\\e227\"; } }\n.glyphicon-xbt                    { &:before { content: \"\\e227\"; } }\n.glyphicon-yen                    { &:before { content: \"\\00a5\"; } }\n.glyphicon-jpy                    { &:before { content: \"\\00a5\"; } }\n.glyphicon-ruble                  { &:before { content: \"\\20bd\"; } }\n.glyphicon-rub                    { &:before { content: \"\\20bd\"; } }\n.glyphicon-scale                  { &:before { content: \"\\e230\"; } }\n.glyphicon-ice-lolly              { &:before { content: \"\\e231\"; } }\n.glyphicon-ice-lolly-tasted       { &:before { content: \"\\e232\"; } }\n.glyphicon-education              { &:before { content: \"\\e233\"; } }\n.glyphicon-option-horizontal      { &:before { content: \"\\e234\"; } }\n.glyphicon-option-vertical        { &:before { content: \"\\e235\"; } }\n.glyphicon-menu-hamburger         { &:before { content: \"\\e236\"; } }\n.glyphicon-modal-window           { &:before { content: \"\\e237\"; } }\n.glyphicon-oil                    { &:before { content: \"\\e238\"; } }\n.glyphicon-grain                  { &:before { content: \"\\e239\"; } }\n.glyphicon-sunglasses             { &:before { content: \"\\e240\"; } }\n.glyphicon-text-size              { &:before { content: \"\\e241\"; } }\n.glyphicon-text-color             { &:before { content: \"\\e242\"; } }\n.glyphicon-text-background        { &:before { content: \"\\e243\"; } }\n.glyphicon-object-align-top       { &:before { content: \"\\e244\"; } }\n.glyphicon-object-align-bottom    { &:before { content: \"\\e245\"; } }\n.glyphicon-object-align-horizontal{ &:before { content: \"\\e246\"; } }\n.glyphicon-object-align-left      { &:before { content: \"\\e247\"; } }\n.glyphicon-object-align-vertical  { &:before { content: \"\\e248\"; } }\n.glyphicon-object-align-right     { &:before { content: \"\\e249\"; } }\n.glyphicon-triangle-right         { &:before { content: \"\\e250\"; } }\n.glyphicon-triangle-left          { &:before { content: \"\\e251\"; } }\n.glyphicon-triangle-bottom        { &:before { content: \"\\e252\"; } }\n.glyphicon-triangle-top           { &:before { content: \"\\e253\"; } }\n.glyphicon-console                { &:before { content: \"\\e254\"; } }\n.glyphicon-superscript            { &:before { content: \"\\e255\"; } }\n.glyphicon-subscript              { &:before { content: \"\\e256\"; } }\n.glyphicon-menu-left              { &:before { content: \"\\e257\"; } }\n.glyphicon-menu-right             { &:before { content: \"\\e258\"; } }\n.glyphicon-menu-down              { &:before { content: \"\\e259\"; } }\n.glyphicon-menu-up                { &:before { content: \"\\e260\"; } }\n","//\n// Scaffolding\n// --------------------------------------------------\n\n\n// Reset the box-sizing\n//\n// Heads up! This reset may cause conflicts with some third-party widgets.\n// For recommendations on resolving such conflicts, see\n// http://getbootstrap.com/getting-started/#third-box-sizing\n* {\n  @include box-sizing(border-box);\n}\n*:before,\n*:after {\n  @include box-sizing(border-box);\n}\n\n\n// Body reset\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\nbody {\n  font-family: $font-family-base;\n  font-size: $font-size-base;\n  line-height: $line-height-base;\n  color: $text-color;\n  background-color: $body-bg;\n}\n\n// Reset fonts for relevant elements\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\n\n// Links\n\na {\n  color: $link-color;\n  text-decoration: none;\n\n  &:hover,\n  &:focus {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n  }\n\n  &:focus {\n    @include tab-focus;\n  }\n}\n\n\n// Figures\n//\n// We reset this here because previously Normalize had no `figure` margins. This\n// ensures we don't break anyone's use of the element.\n\nfigure {\n  margin: 0;\n}\n\n\n// Images\n\nimg {\n  vertical-align: middle;\n}\n\n// Responsive images (ensure images don't scale beyond their parents)\n.img-responsive {\n  @include img-responsive;\n}\n\n// Rounded corners\n.img-rounded {\n  border-radius: $border-radius-large;\n}\n\n// Image thumbnails\n//\n// Heads up! This is mixin-ed into thumbnails.less for `.thumbnail`.\n.img-thumbnail {\n  padding: $thumbnail-padding;\n  line-height: $line-height-base;\n  background-color: $thumbnail-bg;\n  border: 1px solid $thumbnail-border;\n  border-radius: $thumbnail-border-radius;\n  @include transition(all .2s ease-in-out);\n\n  // Keep them at most 100% wide\n  @include img-responsive(inline-block);\n}\n\n// Perfect circle\n.img-circle {\n  border-radius: 50%; // set radius in percents\n}\n\n\n// Horizontal rules\n\nhr {\n  margin-top:    $line-height-computed;\n  margin-bottom: $line-height-computed;\n  border: 0;\n  border-top: 1px solid $hr-border;\n}\n\n\n// Only display content to screen readers\n//\n// See: http://a11yproject.com/posts/how-to-hide-content\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0,0,0,0);\n  border: 0;\n}\n\n// Use in conjunction with .sr-only to only display content when it's focused.\n// Useful for \"Skip to main content\" links; see http://www.w3.org/TR/2013/NOTE-WCAG20-TECHS-20130905/G1\n// Credit: HTML5 Boilerplate\n\n.sr-only-focusable {\n  &:active,\n  &:focus {\n    position: static;\n    width: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    clip: auto;\n  }\n}\n\n\n// iOS \"clickable elements\" fix for role=\"button\"\n//\n// Fixes \"clickability\" issue (and more generally, the firing of events such as focus as well)\n// for traditionally non-focusable elements with role=\"button\"\n// see https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n","// Vendor Prefixes\n//\n// All vendor mixins are deprecated as of v3.2.0 due to the introduction of\n// Autoprefixer in our Gruntfile. They have been removed in v4.\n\n// - Animations\n// - Backface visibility\n// - Box shadow\n// - Box sizing\n// - Content columns\n// - Hyphens\n// - Placeholder text\n// - Transformations\n// - Transitions\n// - User Select\n\n\n// Animations\n@mixin animation($animation) {\n  -webkit-animation: $animation;\n       -o-animation: $animation;\n          animation: $animation;\n}\n@mixin animation-name($name) {\n  -webkit-animation-name: $name;\n          animation-name: $name;\n}\n@mixin animation-duration($duration) {\n  -webkit-animation-duration: $duration;\n          animation-duration: $duration;\n}\n@mixin animation-timing-function($timing-function) {\n  -webkit-animation-timing-function: $timing-function;\n          animation-timing-function: $timing-function;\n}\n@mixin animation-delay($delay) {\n  -webkit-animation-delay: $delay;\n          animation-delay: $delay;\n}\n@mixin animation-iteration-count($iteration-count) {\n  -webkit-animation-iteration-count: $iteration-count;\n          animation-iteration-count: $iteration-count;\n}\n@mixin animation-direction($direction) {\n  -webkit-animation-direction: $direction;\n          animation-direction: $direction;\n}\n@mixin animation-fill-mode($fill-mode) {\n  -webkit-animation-fill-mode: $fill-mode;\n          animation-fill-mode: $fill-mode;\n}\n\n// Backface visibility\n// Prevent browsers from flickering when using CSS 3D transforms.\n// Default value is `visible`, but can be changed to `hidden`\n\n@mixin backface-visibility($visibility) {\n  -webkit-backface-visibility: $visibility;\n     -moz-backface-visibility: $visibility;\n          backface-visibility: $visibility;\n}\n\n// Drop shadows\n//\n// Note: Deprecated `.box-shadow()` as of v3.1.0 since all of Bootstrap's\n// supported browsers that have box shadow capabilities now support it.\n\n@mixin box-shadow($shadow...) {\n  -webkit-box-shadow: $shadow; // iOS <4.3 & Android <4.1\n          box-shadow: $shadow;\n}\n\n// Box sizing\n@mixin box-sizing($boxmodel) {\n  -webkit-box-sizing: $boxmodel;\n     -moz-box-sizing: $boxmodel;\n          box-sizing: $boxmodel;\n}\n\n// CSS3 Content Columns\n@mixin content-columns($column-count, $column-gap: $grid-gutter-width) {\n  -webkit-column-count: $column-count;\n     -moz-column-count: $column-count;\n          column-count: $column-count;\n  -webkit-column-gap: $column-gap;\n     -moz-column-gap: $column-gap;\n          column-gap: $column-gap;\n}\n\n// Optional hyphenation\n@mixin hyphens($mode: auto) {\n  word-wrap: break-word;\n  -webkit-hyphens: $mode;\n     -moz-hyphens: $mode;\n      -ms-hyphens: $mode; // IE10+\n       -o-hyphens: $mode;\n          hyphens: $mode;\n}\n\n// Placeholder text\n@mixin placeholder($color: $input-color-placeholder) {\n  // Firefox\n  &::-moz-placeholder {\n    color: $color;\n    opacity: 1; // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526\n  }\n  &:-ms-input-placeholder { color: $color; } // Internet Explorer 10+\n  &::-webkit-input-placeholder  { color: $color; } // Safari and Chrome\n}\n\n// Transformations\n@mixin scale($ratio...) {\n  -webkit-transform: scale($ratio);\n      -ms-transform: scale($ratio); // IE9 only\n       -o-transform: scale($ratio);\n          transform: scale($ratio);\n}\n\n@mixin scaleX($ratio) {\n  -webkit-transform: scaleX($ratio);\n      -ms-transform: scaleX($ratio); // IE9 only\n       -o-transform: scaleX($ratio);\n          transform: scaleX($ratio);\n}\n@mixin scaleY($ratio) {\n  -webkit-transform: scaleY($ratio);\n      -ms-transform: scaleY($ratio); // IE9 only\n       -o-transform: scaleY($ratio);\n          transform: scaleY($ratio);\n}\n@mixin skew($x, $y) {\n  -webkit-transform: skewX($x) skewY($y);\n      -ms-transform: skewX($x) skewY($y); // See https://github.com/twbs/bootstrap/issues/4885; IE9+\n       -o-transform: skewX($x) skewY($y);\n          transform: skewX($x) skewY($y);\n}\n@mixin translate($x, $y) {\n  -webkit-transform: translate($x, $y);\n      -ms-transform: translate($x, $y); // IE9 only\n       -o-transform: translate($x, $y);\n          transform: translate($x, $y);\n}\n@mixin translate3d($x, $y, $z) {\n  -webkit-transform: translate3d($x, $y, $z);\n          transform: translate3d($x, $y, $z);\n}\n@mixin rotate($degrees) {\n  -webkit-transform: rotate($degrees);\n      -ms-transform: rotate($degrees); // IE9 only\n       -o-transform: rotate($degrees);\n          transform: rotate($degrees);\n}\n@mixin rotateX($degrees) {\n  -webkit-transform: rotateX($degrees);\n      -ms-transform: rotateX($degrees); // IE9 only\n       -o-transform: rotateX($degrees);\n          transform: rotateX($degrees);\n}\n@mixin rotateY($degrees) {\n  -webkit-transform: rotateY($degrees);\n      -ms-transform: rotateY($degrees); // IE9 only\n       -o-transform: rotateY($degrees);\n          transform: rotateY($degrees);\n}\n@mixin perspective($perspective) {\n  -webkit-perspective: $perspective;\n     -moz-perspective: $perspective;\n          perspective: $perspective;\n}\n@mixin perspective-origin($perspective) {\n  -webkit-perspective-origin: $perspective;\n     -moz-perspective-origin: $perspective;\n          perspective-origin: $perspective;\n}\n@mixin transform-origin($origin) {\n  -webkit-transform-origin: $origin;\n     -moz-transform-origin: $origin;\n      -ms-transform-origin: $origin; // IE9 only\n          transform-origin: $origin;\n}\n\n\n// Transitions\n\n@mixin transition($transition...) {\n  -webkit-transition: $transition;\n       -o-transition: $transition;\n          transition: $transition;\n}\n@mixin transition-property($transition-property...) {\n  -webkit-transition-property: $transition-property;\n          transition-property: $transition-property;\n}\n@mixin transition-delay($transition-delay) {\n  -webkit-transition-delay: $transition-delay;\n          transition-delay: $transition-delay;\n}\n@mixin transition-duration($transition-duration...) {\n  -webkit-transition-duration: $transition-duration;\n          transition-duration: $transition-duration;\n}\n@mixin transition-timing-function($timing-function) {\n  -webkit-transition-timing-function: $timing-function;\n          transition-timing-function: $timing-function;\n}\n@mixin transition-transform($transition...) {\n  -webkit-transition: -webkit-transform $transition;\n     -moz-transition: -moz-transform $transition;\n       -o-transition: -o-transform $transition;\n          transition: transform $transition;\n}\n\n\n// User select\n// For selecting text on the page\n\n@mixin user-select($select) {\n  -webkit-user-select: $select;\n     -moz-user-select: $select;\n      -ms-user-select: $select; // IE10+\n          user-select: $select;\n}\n","$bootstrap-sass-asset-helper: false !default;\n//\n// Variables\n// --------------------------------------------------\n\n\n//== Colors\n//\n//## Gray and brand colors for use across Bootstrap.\n\n$gray-base:              #000 !default;\n$gray-darker:            lighten($gray-base, 13.5%) !default; // #222\n$gray-dark:              lighten($gray-base, 20%) !default;   // #333\n$gray:                   lighten($gray-base, 33.5%) !default; // #555\n$gray-light:             lighten($gray-base, 46.7%) !default; // #777\n$gray-lighter:           lighten($gray-base, 93.5%) !default; // #eee\n\n$brand-primary:         darken(#428bca, 6.5%) !default; // #337ab7\n$brand-success:         #5cb85c !default;\n$brand-info:            #5bc0de !default;\n$brand-warning:         #f0ad4e !default;\n$brand-danger:          #d9534f !default;\n\n\n//== Scaffolding\n//\n//## Settings for some of the most global styles.\n\n//** Background color for `<body>`.\n$body-bg:               #fff !default;\n//** Global text color on `<body>`.\n$text-color:            $gray-dark !default;\n\n//** Global textual link color.\n$link-color:            $brand-primary !default;\n//** Link hover color set via `darken()` function.\n$link-hover-color:      darken($link-color, 15%) !default;\n//** Link hover decoration.\n$link-hover-decoration: underline !default;\n\n\n//== Typography\n//\n//## Font, line-height, and color for body text, headings, and more.\n\n$font-family-sans-serif:  \"Helvetica Neue\", Helvetica, Arial, sans-serif !default;\n$font-family-serif:       Georgia, \"Times New Roman\", Times, serif !default;\n//** Default monospace fonts for `<code>`, `<kbd>`, and `<pre>`.\n$font-family-monospace:   Menlo, Monaco, Consolas, \"Courier New\", monospace !default;\n$font-family-base:        $font-family-sans-serif !default;\n\n$font-size-base:          14px !default;\n$font-size-large:         ceil(($font-size-base * 1.25)) !default; // ~18px\n$font-size-small:         ceil(($font-size-base * 0.85)) !default; // ~12px\n\n$font-size-h1:            floor(($font-size-base * 2.6)) !default; // ~36px\n$font-size-h2:            floor(($font-size-base * 2.15)) !default; // ~30px\n$font-size-h3:            ceil(($font-size-base * 1.7)) !default; // ~24px\n$font-size-h4:            ceil(($font-size-base * 1.25)) !default; // ~18px\n$font-size-h5:            $font-size-base !default;\n$font-size-h6:            ceil(($font-size-base * 0.85)) !default; // ~12px\n\n//** Unit-less `line-height` for use in components like buttons.\n$line-height-base:        1.428571429 !default; // 20/14\n//** Computed \"line-height\" (`font-size` * `line-height`) for use with `margin`, `padding`, etc.\n$line-height-computed:    floor(($font-size-base * $line-height-base)) !default; // ~20px\n\n//** By default, this inherits from the `<body>`.\n$headings-font-family:    inherit !default;\n$headings-font-weight:    500 !default;\n$headings-line-height:    1.1 !default;\n$headings-color:          inherit !default;\n\n\n//== Iconography\n//\n//## Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.\n\n//** Load fonts from this directory.\n\n// [converter] If $bootstrap-sass-asset-helper if used, provide path relative to the assets load path.\n// [converter] This is because some asset helpers, such as Sprockets, do not work with file-relative paths.\n$icon-font-path: if($bootstrap-sass-asset-helper, \"bootstrap/\", \"../fonts/bootstrap/\") !default;\n\n//** File name for all font files.\n$icon-font-name:          \"glyphicons-halflings-regular\" !default;\n//** Element ID within SVG icon file.\n$icon-font-svg-id:        \"glyphicons_halflingsregular\" !default;\n\n\n//== Components\n//\n//## Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).\n\n$padding-base-vertical:     6px !default;\n$padding-base-horizontal:   12px !default;\n\n$padding-large-vertical:    10px !default;\n$padding-large-horizontal:  16px !default;\n\n$padding-small-vertical:    5px !default;\n$padding-small-horizontal:  10px !default;\n\n$padding-xs-vertical:       1px !default;\n$padding-xs-horizontal:     5px !default;\n\n$line-height-large:         1.3333333 !default; // extra decimals for Win 8.1 Chrome\n$line-height-small:         1.5 !default;\n\n$border-radius-base:        4px !default;\n$border-radius-large:       6px !default;\n$border-radius-small:       3px !default;\n\n//** Global color for active items (e.g., navs or dropdowns).\n$component-active-color:    #fff !default;\n//** Global background color for active items (e.g., navs or dropdowns).\n$component-active-bg:       $brand-primary !default;\n\n//** Width of the `border` for generating carets that indicate dropdowns.\n$caret-width-base:          4px !default;\n//** Carets increase slightly in size for larger components.\n$caret-width-large:         5px !default;\n\n\n//== Tables\n//\n//## Customizes the `.table` component with basic values, each used across all table variations.\n\n//** Padding for `<th>`s and `<td>`s.\n$table-cell-padding:            8px !default;\n//** Padding for cells in `.table-condensed`.\n$table-condensed-cell-padding:  5px !default;\n\n//** Default background color used for all tables.\n$table-bg:                      transparent !default;\n//** Background color used for `.table-striped`.\n$table-bg-accent:               #f9f9f9 !default;\n//** Background color used for `.table-hover`.\n$table-bg-hover:                #f5f5f5 !default;\n$table-bg-active:               $table-bg-hover !default;\n\n//** Border color for table and cell borders.\n$table-border-color:            #ddd !default;\n\n\n//== Buttons\n//\n//## For each of Bootstrap's buttons, define text, background and border color.\n\n$btn-font-weight:                normal !default;\n\n$btn-default-color:              #333 !default;\n$btn-default-bg:                 #fff !default;\n$btn-default-border:             #ccc !default;\n\n$btn-primary-color:              #fff !default;\n$btn-primary-bg:                 $brand-primary !default;\n$btn-primary-border:             darken($btn-primary-bg, 5%) !default;\n\n$btn-success-color:              #fff !default;\n$btn-success-bg:                 $brand-success !default;\n$btn-success-border:             darken($btn-success-bg, 5%) !default;\n\n$btn-info-color:                 #fff !default;\n$btn-info-bg:                    $brand-info !default;\n$btn-info-border:                darken($btn-info-bg, 5%) !default;\n\n$btn-warning-color:              #fff !default;\n$btn-warning-bg:                 $brand-warning !default;\n$btn-warning-border:             darken($btn-warning-bg, 5%) !default;\n\n$btn-danger-color:               #fff !default;\n$btn-danger-bg:                  $brand-danger !default;\n$btn-danger-border:              darken($btn-danger-bg, 5%) !default;\n\n$btn-link-disabled-color:        $gray-light !default;\n\n// Allows for customizing button radius independently from global border radius\n$btn-border-radius-base:         $border-radius-base !default;\n$btn-border-radius-large:        $border-radius-large !default;\n$btn-border-radius-small:        $border-radius-small !default;\n\n\n//== Forms\n//\n//##\n\n//** `<input>` background color\n$input-bg:                       #fff !default;\n//** `<input disabled>` background color\n$input-bg-disabled:              $gray-lighter !default;\n\n//** Text color for `<input>`s\n$input-color:                    $gray !default;\n//** `<input>` border color\n$input-border:                   #ccc !default;\n\n// TODO: Rename `$input-border-radius` to `$input-border-radius-base` in v4\n//** Default `.form-control` border radius\n// This has no effect on `<select>`s in some browsers, due to the limited stylability of `<select>`s in CSS.\n$input-border-radius:            $border-radius-base !default;\n//** Large `.form-control` border radius\n$input-border-radius-large:      $border-radius-large !default;\n//** Small `.form-control` border radius\n$input-border-radius-small:      $border-radius-small !default;\n\n//** Border color for inputs on focus\n$input-border-focus:             #66afe9 !default;\n\n//** Placeholder text color\n$input-color-placeholder:        #999 !default;\n\n//** Default `.form-control` height\n$input-height-base:              ($line-height-computed + ($padding-base-vertical * 2) + 2) !default;\n//** Large `.form-control` height\n$input-height-large:             (ceil($font-size-large * $line-height-large) + ($padding-large-vertical * 2) + 2) !default;\n//** Small `.form-control` height\n$input-height-small:             (floor($font-size-small * $line-height-small) + ($padding-small-vertical * 2) + 2) !default;\n\n//** `.form-group` margin\n$form-group-margin-bottom:       15px !default;\n\n$legend-color:                   $gray-dark !default;\n$legend-border-color:            #e5e5e5 !default;\n\n//** Background color for textual input addons\n$input-group-addon-bg:           $gray-lighter !default;\n//** Border color for textual input addons\n$input-group-addon-border-color: $input-border !default;\n\n//** Disabled cursor for form controls and buttons.\n$cursor-disabled:                not-allowed !default;\n\n\n//== Dropdowns\n//\n//## Dropdown menu container and contents.\n\n//** Background for the dropdown menu.\n$dropdown-bg:                    #fff !default;\n//** Dropdown menu `border-color`.\n$dropdown-border:                rgba(0,0,0,.15) !default;\n//** Dropdown menu `border-color` **for IE8**.\n$dropdown-fallback-border:       #ccc !default;\n//** Divider color for between dropdown items.\n$dropdown-divider-bg:            #e5e5e5 !default;\n\n//** Dropdown link text color.\n$dropdown-link-color:            $gray-dark !default;\n//** Hover color for dropdown links.\n$dropdown-link-hover-color:      darken($gray-dark, 5%) !default;\n//** Hover background for dropdown links.\n$dropdown-link-hover-bg:         #f5f5f5 !default;\n\n//** Active dropdown menu item text color.\n$dropdown-link-active-color:     $component-active-color !default;\n//** Active dropdown menu item background color.\n$dropdown-link-active-bg:        $component-active-bg !default;\n\n//** Disabled dropdown menu item background color.\n$dropdown-link-disabled-color:   $gray-light !default;\n\n//** Text color for headers within dropdown menus.\n$dropdown-header-color:          $gray-light !default;\n\n//** Deprecated `$dropdown-caret-color` as of v3.1.0\n$dropdown-caret-color:           #000 !default;\n\n\n//-- Z-index master list\n//\n// Warning: Avoid customizing these values. They're used for a bird's eye view\n// of components dependent on the z-axis and are designed to all work together.\n//\n// Note: These variables are not generated into the Customizer.\n\n$zindex-navbar:            1000 !default;\n$zindex-dropdown:          1000 !default;\n$zindex-popover:           1060 !default;\n$zindex-tooltip:           1070 !default;\n$zindex-navbar-fixed:      1030 !default;\n$zindex-modal-background:  1040 !default;\n$zindex-modal:             1050 !default;\n\n\n//== Media queries breakpoints\n//\n//## Define the breakpoints at which your layout will change, adapting to different screen sizes.\n\n// Extra small screen / phone\n//** Deprecated `$screen-xs` as of v3.0.1\n$screen-xs:                  480px !default;\n//** Deprecated `$screen-xs-min` as of v3.2.0\n$screen-xs-min:              $screen-xs !default;\n//** Deprecated `$screen-phone` as of v3.0.1\n$screen-phone:               $screen-xs-min !default;\n\n// Small screen / tablet\n//** Deprecated `$screen-sm` as of v3.0.1\n$screen-sm:                  768px !default;\n$screen-sm-min:              $screen-sm !default;\n//** Deprecated `$screen-tablet` as of v3.0.1\n$screen-tablet:              $screen-sm-min !default;\n\n// Medium screen / desktop\n//** Deprecated `$screen-md` as of v3.0.1\n$screen-md:                  992px !default;\n$screen-md-min:              $screen-md !default;\n//** Deprecated `$screen-desktop` as of v3.0.1\n$screen-desktop:             $screen-md-min !default;\n\n// Large screen / wide desktop\n//** Deprecated `$screen-lg` as of v3.0.1\n$screen-lg:                  1200px !default;\n$screen-lg-min:              $screen-lg !default;\n//** Deprecated `$screen-lg-desktop` as of v3.0.1\n$screen-lg-desktop:          $screen-lg-min !default;\n\n// So media queries don't overlap when required, provide a maximum\n$screen-xs-max:              ($screen-sm-min - 1) !default;\n$screen-sm-max:              ($screen-md-min - 1) !default;\n$screen-md-max:              ($screen-lg-min - 1) !default;\n\n\n//== Grid system\n//\n//## Define your custom responsive grid.\n\n//** Number of columns in the grid.\n$grid-columns:              12 !default;\n//** Padding between columns. Gets divided in half for the left and right.\n$grid-gutter-width:         30px !default;\n// Navbar collapse\n//** Point at which the navbar becomes uncollapsed.\n$grid-float-breakpoint:     $screen-sm-min !default;\n//** Point at which the navbar begins collapsing.\n$grid-float-breakpoint-max: ($grid-float-breakpoint - 1) !default;\n\n\n//== Container sizes\n//\n//## Define the maximum width of `.container` for different screen sizes.\n\n// Small screen / tablet\n$container-tablet:             (720px + $grid-gutter-width) !default;\n//** For `$screen-sm-min` and up.\n$container-sm:                 $container-tablet !default;\n\n// Medium screen / desktop\n$container-desktop:            (940px + $grid-gutter-width) !default;\n//** For `$screen-md-min` and up.\n$container-md:                 $container-desktop !default;\n\n// Large screen / wide desktop\n$container-large-desktop:      (1140px + $grid-gutter-width) !default;\n//** For `$screen-lg-min` and up.\n$container-lg:                 $container-large-desktop !default;\n\n\n//== Navbar\n//\n//##\n\n// Basics of a navbar\n$navbar-height:                    50px !default;\n$navbar-margin-bottom:             $line-height-computed !default;\n$navbar-border-radius:             $border-radius-base !default;\n$navbar-padding-horizontal:        floor(($grid-gutter-width / 2)) !default;\n$navbar-padding-vertical:          (($navbar-height - $line-height-computed) / 2) !default;\n$navbar-collapse-max-height:       340px !default;\n\n$navbar-default-color:             #777 !default;\n$navbar-default-bg:                #f8f8f8 !default;\n$navbar-default-border:            darken($navbar-default-bg, 6.5%) !default;\n\n// Navbar links\n$navbar-default-link-color:                #777 !default;\n$navbar-default-link-hover-color:          #333 !default;\n$navbar-default-link-hover-bg:             transparent !default;\n$navbar-default-link-active-color:         #555 !default;\n$navbar-default-link-active-bg:            darken($navbar-default-bg, 6.5%) !default;\n$navbar-default-link-disabled-color:       #ccc !default;\n$navbar-default-link-disabled-bg:          transparent !default;\n\n// Navbar brand label\n$navbar-default-brand-color:               $navbar-default-link-color !default;\n$navbar-default-brand-hover-color:         darken($navbar-default-brand-color, 10%) !default;\n$navbar-default-brand-hover-bg:            transparent !default;\n\n// Navbar toggle\n$navbar-default-toggle-hover-bg:           #ddd !default;\n$navbar-default-toggle-icon-bar-bg:        #888 !default;\n$navbar-default-toggle-border-color:       #ddd !default;\n\n\n//=== Inverted navbar\n// Reset inverted navbar basics\n$navbar-inverse-color:                      lighten($gray-light, 15%) !default;\n$navbar-inverse-bg:                         #222 !default;\n$navbar-inverse-border:                     darken($navbar-inverse-bg, 10%) !default;\n\n// Inverted navbar links\n$navbar-inverse-link-color:                 lighten($gray-light, 15%) !default;\n$navbar-inverse-link-hover-color:           #fff !default;\n$navbar-inverse-link-hover-bg:              transparent !default;\n$navbar-inverse-link-active-color:          $navbar-inverse-link-hover-color !default;\n$navbar-inverse-link-active-bg:             darken($navbar-inverse-bg, 10%) !default;\n$navbar-inverse-link-disabled-color:        #444 !default;\n$navbar-inverse-link-disabled-bg:           transparent !default;\n\n// Inverted navbar brand label\n$navbar-inverse-brand-color:                $navbar-inverse-link-color !default;\n$navbar-inverse-brand-hover-color:          #fff !default;\n$navbar-inverse-brand-hover-bg:             transparent !default;\n\n// Inverted navbar toggle\n$navbar-inverse-toggle-hover-bg:            #333 !default;\n$navbar-inverse-toggle-icon-bar-bg:         #fff !default;\n$navbar-inverse-toggle-border-color:        #333 !default;\n\n\n//== Navs\n//\n//##\n\n//=== Shared nav styles\n$nav-link-padding:                          10px 15px !default;\n$nav-link-hover-bg:                         $gray-lighter !default;\n\n$nav-disabled-link-color:                   $gray-light !default;\n$nav-disabled-link-hover-color:             $gray-light !default;\n\n//== Tabs\n$nav-tabs-border-color:                     #ddd !default;\n\n$nav-tabs-link-hover-border-color:          $gray-lighter !default;\n\n$nav-tabs-active-link-hover-bg:             $body-bg !default;\n$nav-tabs-active-link-hover-color:          $gray !default;\n$nav-tabs-active-link-hover-border-color:   #ddd !default;\n\n$nav-tabs-justified-link-border-color:            #ddd !default;\n$nav-tabs-justified-active-link-border-color:     $body-bg !default;\n\n//== Pills\n$nav-pills-border-radius:                   $border-radius-base !default;\n$nav-pills-active-link-hover-bg:            $component-active-bg !default;\n$nav-pills-active-link-hover-color:         $component-active-color !default;\n\n\n//== Pagination\n//\n//##\n\n$pagination-color:                     $link-color !default;\n$pagination-bg:                        #fff !default;\n$pagination-border:                    #ddd !default;\n\n$pagination-hover-color:               $link-hover-color !default;\n$pagination-hover-bg:                  $gray-lighter !default;\n$pagination-hover-border:              #ddd !default;\n\n$pagination-active-color:              #fff !default;\n$pagination-active-bg:                 $brand-primary !default;\n$pagination-active-border:             $brand-primary !default;\n\n$pagination-disabled-color:            $gray-light !default;\n$pagination-disabled-bg:               #fff !default;\n$pagination-disabled-border:           #ddd !default;\n\n\n//== Pager\n//\n//##\n\n$pager-bg:                             $pagination-bg !default;\n$pager-border:                         $pagination-border !default;\n$pager-border-radius:                  15px !default;\n\n$pager-hover-bg:                       $pagination-hover-bg !default;\n\n$pager-active-bg:                      $pagination-active-bg !default;\n$pager-active-color:                   $pagination-active-color !default;\n\n$pager-disabled-color:                 $pagination-disabled-color !default;\n\n\n//== Jumbotron\n//\n//##\n\n$jumbotron-padding:              30px !default;\n$jumbotron-color:                inherit !default;\n$jumbotron-bg:                   $gray-lighter !default;\n$jumbotron-heading-color:        inherit !default;\n$jumbotron-font-size:            ceil(($font-size-base * 1.5)) !default;\n$jumbotron-heading-font-size:    ceil(($font-size-base * 4.5)) !default;\n\n\n//== Form states and alerts\n//\n//## Define colors for form feedback states and, by default, alerts.\n\n$state-success-text:             #3c763d !default;\n$state-success-bg:               #dff0d8 !default;\n$state-success-border:           darken(adjust-hue($state-success-bg, -10), 5%) !default;\n\n$state-info-text:                #31708f !default;\n$state-info-bg:                  #d9edf7 !default;\n$state-info-border:              darken(adjust-hue($state-info-bg, -10), 7%) !default;\n\n$state-warning-text:             #8a6d3b !default;\n$state-warning-bg:               #fcf8e3 !default;\n$state-warning-border:           darken(adjust-hue($state-warning-bg, -10), 5%) !default;\n\n$state-danger-text:              #a94442 !default;\n$state-danger-bg:                #f2dede !default;\n$state-danger-border:            darken(adjust-hue($state-danger-bg, -10), 5%) !default;\n\n\n//== Tooltips\n//\n//##\n\n//** Tooltip max width\n$tooltip-max-width:           200px !default;\n//** Tooltip text color\n$tooltip-color:               #fff !default;\n//** Tooltip background color\n$tooltip-bg:                  #000 !default;\n$tooltip-opacity:             .9 !default;\n\n//** Tooltip arrow width\n$tooltip-arrow-width:         5px !default;\n//** Tooltip arrow color\n$tooltip-arrow-color:         $tooltip-bg !default;\n\n\n//== Popovers\n//\n//##\n\n//** Popover body background color\n$popover-bg:                          #fff !default;\n//** Popover maximum width\n$popover-max-width:                   276px !default;\n//** Popover border color\n$popover-border-color:                rgba(0,0,0,.2) !default;\n//** Popover fallback border color\n$popover-fallback-border-color:       #ccc !default;\n\n//** Popover title background color\n$popover-title-bg:                    darken($popover-bg, 3%) !default;\n\n//** Popover arrow width\n$popover-arrow-width:                 10px !default;\n//** Popover arrow color\n$popover-arrow-color:                 $popover-bg !default;\n\n//** Popover outer arrow width\n$popover-arrow-outer-width:           ($popover-arrow-width + 1) !default;\n//** Popover outer arrow color\n$popover-arrow-outer-color:           fade_in($popover-border-color, 0.05) !default;\n//** Popover outer arrow fallback color\n$popover-arrow-outer-fallback-color:  darken($popover-fallback-border-color, 20%) !default;\n\n\n//== Labels\n//\n//##\n\n//** Default label background color\n$label-default-bg:            $gray-light !default;\n//** Primary label background color\n$label-primary-bg:            $brand-primary !default;\n//** Success label background color\n$label-success-bg:            $brand-success !default;\n//** Info label background color\n$label-info-bg:               $brand-info !default;\n//** Warning label background color\n$label-warning-bg:            $brand-warning !default;\n//** Danger label background color\n$label-danger-bg:             $brand-danger !default;\n\n//** Default label text color\n$label-color:                 #fff !default;\n//** Default text color of a linked label\n$label-link-hover-color:      #fff !default;\n\n\n//== Modals\n//\n//##\n\n//** Padding applied to the modal body\n$modal-inner-padding:         15px !default;\n\n//** Padding applied to the modal title\n$modal-title-padding:         15px !default;\n//** Modal title line-height\n$modal-title-line-height:     $line-height-base !default;\n\n//** Background color of modal content area\n$modal-content-bg:                             #fff !default;\n//** Modal content border color\n$modal-content-border-color:                   rgba(0,0,0,.2) !default;\n//** Modal content border color **for IE8**\n$modal-content-fallback-border-color:          #999 !default;\n\n//** Modal backdrop background color\n$modal-backdrop-bg:           #000 !default;\n//** Modal backdrop opacity\n$modal-backdrop-opacity:      .5 !default;\n//** Modal header border color\n$modal-header-border-color:   #e5e5e5 !default;\n//** Modal footer border color\n$modal-footer-border-color:   $modal-header-border-color !default;\n\n$modal-lg:                    900px !default;\n$modal-md:                    600px !default;\n$modal-sm:                    300px !default;\n\n\n//== Alerts\n//\n//## Define alert colors, border radius, and padding.\n\n$alert-padding:               15px !default;\n$alert-border-radius:         $border-radius-base !default;\n$alert-link-font-weight:      bold !default;\n\n$alert-success-bg:            $state-success-bg !default;\n$alert-success-text:          $state-success-text !default;\n$alert-success-border:        $state-success-border !default;\n\n$alert-info-bg:               $state-info-bg !default;\n$alert-info-text:             $state-info-text !default;\n$alert-info-border:           $state-info-border !default;\n\n$alert-warning-bg:            $state-warning-bg !default;\n$alert-warning-text:          $state-warning-text !default;\n$alert-warning-border:        $state-warning-border !default;\n\n$alert-danger-bg:             $state-danger-bg !default;\n$alert-danger-text:           $state-danger-text !default;\n$alert-danger-border:         $state-danger-border !default;\n\n\n//== Progress bars\n//\n//##\n\n//** Background color of the whole progress component\n$progress-bg:                 #f5f5f5 !default;\n//** Progress bar text color\n$progress-bar-color:          #fff !default;\n//** Variable for setting rounded corners on progress bar.\n$progress-border-radius:      $border-radius-base !default;\n\n//** Default progress bar color\n$progress-bar-bg:             $brand-primary !default;\n//** Success progress bar color\n$progress-bar-success-bg:     $brand-success !default;\n//** Warning progress bar color\n$progress-bar-warning-bg:     $brand-warning !default;\n//** Danger progress bar color\n$progress-bar-danger-bg:      $brand-danger !default;\n//** Info progress bar color\n$progress-bar-info-bg:        $brand-info !default;\n\n\n//== List group\n//\n//##\n\n//** Background color on `.list-group-item`\n$list-group-bg:                 #fff !default;\n//** `.list-group-item` border color\n$list-group-border:             #ddd !default;\n//** List group border radius\n$list-group-border-radius:      $border-radius-base !default;\n\n//** Background color of single list items on hover\n$list-group-hover-bg:           #f5f5f5 !default;\n//** Text color of active list items\n$list-group-active-color:       $component-active-color !default;\n//** Background color of active list items\n$list-group-active-bg:          $component-active-bg !default;\n//** Border color of active list elements\n$list-group-active-border:      $list-group-active-bg !default;\n//** Text color for content within active list items\n$list-group-active-text-color:  lighten($list-group-active-bg, 40%) !default;\n\n//** Text color of disabled list items\n$list-group-disabled-color:      $gray-light !default;\n//** Background color of disabled list items\n$list-group-disabled-bg:         $gray-lighter !default;\n//** Text color for content within disabled list items\n$list-group-disabled-text-color: $list-group-disabled-color !default;\n\n$list-group-link-color:         #555 !default;\n$list-group-link-hover-color:   $list-group-link-color !default;\n$list-group-link-heading-color: #333 !default;\n\n\n//== Panels\n//\n//##\n\n$panel-bg:                    #fff !default;\n$panel-body-padding:          15px !default;\n$panel-heading-padding:       10px 15px !default;\n$panel-footer-padding:        $panel-heading-padding !default;\n$panel-border-radius:         $border-radius-base !default;\n\n//** Border color for elements within panels\n$panel-inner-border:          #ddd !default;\n$panel-footer-bg:             #f5f5f5 !default;\n\n$panel-default-text:          $gray-dark !default;\n$panel-default-border:        #ddd !default;\n$panel-default-heading-bg:    #f5f5f5 !default;\n\n$panel-primary-text:          #fff !default;\n$panel-primary-border:        $brand-primary !default;\n$panel-primary-heading-bg:    $brand-primary !default;\n\n$panel-success-text:          $state-success-text !default;\n$panel-success-border:        $state-success-border !default;\n$panel-success-heading-bg:    $state-success-bg !default;\n\n$panel-info-text:             $state-info-text !default;\n$panel-info-border:           $state-info-border !default;\n$panel-info-heading-bg:       $state-info-bg !default;\n\n$panel-warning-text:          $state-warning-text !default;\n$panel-warning-border:        $state-warning-border !default;\n$panel-warning-heading-bg:    $state-warning-bg !default;\n\n$panel-danger-text:           $state-danger-text !default;\n$panel-danger-border:         $state-danger-border !default;\n$panel-danger-heading-bg:     $state-danger-bg !default;\n\n\n//== Thumbnails\n//\n//##\n\n//** Padding around the thumbnail image\n$thumbnail-padding:           4px !default;\n//** Thumbnail background color\n$thumbnail-bg:                $body-bg !default;\n//** Thumbnail border color\n$thumbnail-border:            #ddd !default;\n//** Thumbnail border radius\n$thumbnail-border-radius:     $border-radius-base !default;\n\n//** Custom text color for thumbnail captions\n$thumbnail-caption-color:     $text-color !default;\n//** Padding around the thumbnail caption\n$thumbnail-caption-padding:   9px !default;\n\n\n//== Wells\n//\n//##\n\n$well-bg:                     #f5f5f5 !default;\n$well-border:                 darken($well-bg, 7%) !default;\n\n\n//== Badges\n//\n//##\n\n$badge-color:                 #fff !default;\n//** Linked badge text color on hover\n$badge-link-hover-color:      #fff !default;\n$badge-bg:                    $gray-light !default;\n\n//** Badge text color in active nav link\n$badge-active-color:          $link-color !default;\n//** Badge background color in active nav link\n$badge-active-bg:             #fff !default;\n\n$badge-font-weight:           bold !default;\n$badge-line-height:           1 !default;\n$badge-border-radius:         10px !default;\n\n\n//== Breadcrumbs\n//\n//##\n\n$breadcrumb-padding-vertical:   8px !default;\n$breadcrumb-padding-horizontal: 15px !default;\n//** Breadcrumb background color\n$breadcrumb-bg:                 #f5f5f5 !default;\n//** Breadcrumb text color\n$breadcrumb-color:              #ccc !default;\n//** Text color of current page in the breadcrumb\n$breadcrumb-active-color:       $gray-light !default;\n//** Textual separator for between breadcrumb elements\n$breadcrumb-separator:          \"/\" !default;\n\n\n//== Carousel\n//\n//##\n\n$carousel-text-shadow:                        0 1px 2px rgba(0,0,0,.6) !default;\n\n$carousel-control-color:                      #fff !default;\n$carousel-control-width:                      15% !default;\n$carousel-control-opacity:                    .5 !default;\n$carousel-control-font-size:                  20px !default;\n\n$carousel-indicator-active-bg:                #fff !default;\n$carousel-indicator-border-color:             #fff !default;\n\n$carousel-caption-color:                      #fff !default;\n\n\n//== Close\n//\n//##\n\n$close-font-weight:           bold !default;\n$close-color:                 #000 !default;\n$close-text-shadow:           0 1px 0 #fff !default;\n\n\n//== Code\n//\n//##\n\n$code-color:                  #c7254e !default;\n$code-bg:                     #f9f2f4 !default;\n\n$kbd-color:                   #fff !default;\n$kbd-bg:                      #333 !default;\n\n$pre-bg:                      #f5f5f5 !default;\n$pre-color:                   $gray-dark !default;\n$pre-border-color:            #ccc !default;\n$pre-scrollable-max-height:   340px !default;\n\n\n//== Type\n//\n//##\n\n//** Horizontal offset for forms and lists.\n$component-offset-horizontal: 180px !default;\n//** Text muted color\n$text-muted:                  $gray-light !default;\n//** Abbreviations and acronyms border color\n$abbr-border-color:           $gray-light !default;\n//** Headings small color\n$headings-small-color:        $gray-light !default;\n//** Blockquote small color\n$blockquote-small-color:      $gray-light !default;\n//** Blockquote font size\n$blockquote-font-size:        ($font-size-base * 1.25) !default;\n//** Blockquote border color\n$blockquote-border-color:     $gray-lighter !default;\n//** Page header border color\n$page-header-border-color:    $gray-lighter !default;\n//** Width of horizontal description list titles\n$dl-horizontal-offset:        $component-offset-horizontal !default;\n//** Point at which .dl-horizontal becomes horizontal\n$dl-horizontal-breakpoint:    $grid-float-breakpoint !default;\n//** Horizontal line color.\n$hr-border:                   $gray-lighter !default;\n","// WebKit-style focus\n\n@mixin tab-focus() {\n  // WebKit-specific. Other browsers will keep their default outline style.\n  // (Initially tried to also force default via `outline: initial`,\n  // but that seems to erroneously remove the outline in Firefox altogether.)\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n","// Image Mixins\n// - Responsive image\n// - Retina image\n\n\n// Responsive image\n//\n// Keep images from scaling beyond the width of their parents.\n@mixin img-responsive($display: block) {\n  display: $display;\n  max-width: 100%; // Part 1: Set a maximum relative to the parent\n  height: auto; // Part 2: Scale the height according to the width, otherwise you get stretching\n}\n\n\n// Retina image\n//\n// Short retina mixin for setting background-image and -size. Note that the\n// spelling of `min--moz-device-pixel-ratio` is intentional.\n@mixin img-retina($file-1x, $file-2x, $width-1x, $height-1x) {\n  background-image: url(if($bootstrap-sass-asset-helper, twbs-image-path(\"#{$file-1x}\"), \"#{$file-1x}\"));\n\n  @media\n  only screen and (-webkit-min-device-pixel-ratio: 2),\n  only screen and (   min--moz-device-pixel-ratio: 2),\n  only screen and (     -o-min-device-pixel-ratio: 2/1),\n  only screen and (        min-device-pixel-ratio: 2),\n  only screen and (                min-resolution: 192dpi),\n  only screen and (                min-resolution: 2dppx) {\n    background-image: url(if($bootstrap-sass-asset-helper, twbs-image-path(\"#{$file-2x}\"), \"#{$file-2x}\"));\n    background-size: $width-1x $height-1x;\n  }\n}\n","//\n// Typography\n// --------------------------------------------------\n\n\n// Headings\n// -------------------------\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: $headings-font-family;\n  font-weight: $headings-font-weight;\n  line-height: $headings-line-height;\n  color: $headings-color;\n\n  small,\n  .small {\n    font-weight: normal;\n    line-height: 1;\n    color: $headings-small-color;\n  }\n}\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: $line-height-computed;\n  margin-bottom: ($line-height-computed / 2);\n\n  small,\n  .small {\n    font-size: 65%;\n  }\n}\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: ($line-height-computed / 2);\n  margin-bottom: ($line-height-computed / 2);\n\n  small,\n  .small {\n    font-size: 75%;\n  }\n}\n\nh1, .h1 { font-size: $font-size-h1; }\nh2, .h2 { font-size: $font-size-h2; }\nh3, .h3 { font-size: $font-size-h3; }\nh4, .h4 { font-size: $font-size-h4; }\nh5, .h5 { font-size: $font-size-h5; }\nh6, .h6 { font-size: $font-size-h6; }\n\n\n// Body text\n// -------------------------\n\np {\n  margin: 0 0 ($line-height-computed / 2);\n}\n\n.lead {\n  margin-bottom: $line-height-computed;\n  font-size: floor(($font-size-base * 1.15));\n  font-weight: 300;\n  line-height: 1.4;\n\n  @media (min-width: $screen-sm-min) {\n    font-size: ($font-size-base * 1.5);\n  }\n}\n\n\n// Emphasis & misc\n// -------------------------\n\n// Ex: (12px small font / 14px base font) * 100% = about 85%\nsmall,\n.small {\n  font-size: floor((100% * $font-size-small / $font-size-base));\n}\n\nmark,\n.mark {\n  background-color: $state-warning-bg;\n  padding: .2em;\n}\n\n// Alignment\n.text-left           { text-align: left; }\n.text-right          { text-align: right; }\n.text-center         { text-align: center; }\n.text-justify        { text-align: justify; }\n.text-nowrap         { white-space: nowrap; }\n\n// Transformation\n.text-lowercase      { text-transform: lowercase; }\n.text-uppercase      { text-transform: uppercase; }\n.text-capitalize     { text-transform: capitalize; }\n\n// Contextual colors\n.text-muted {\n  color: $text-muted;\n}\n\n@include text-emphasis-variant('.text-primary', $brand-primary);\n\n@include text-emphasis-variant('.text-success', $state-success-text);\n\n@include text-emphasis-variant('.text-info', $state-info-text);\n\n@include text-emphasis-variant('.text-warning', $state-warning-text);\n\n@include text-emphasis-variant('.text-danger', $state-danger-text);\n\n// Contextual backgrounds\n// For now we'll leave these alongside the text classes until v4 when we can\n// safely shift things around (per SemVer rules).\n.bg-primary {\n  // Given the contrast here, this is the only class to have its color inverted\n  // automatically.\n  color: #fff;\n}\n@include bg-variant('.bg-primary', $brand-primary);\n\n@include bg-variant('.bg-success', $state-success-bg);\n\n@include bg-variant('.bg-info', $state-info-bg);\n\n@include bg-variant('.bg-warning', $state-warning-bg);\n\n@include bg-variant('.bg-danger', $state-danger-bg);\n\n\n// Page header\n// -------------------------\n\n.page-header {\n  padding-bottom: (($line-height-computed / 2) - 1);\n  margin: ($line-height-computed * 2) 0 $line-height-computed;\n  border-bottom: 1px solid $page-header-border-color;\n}\n\n\n// Lists\n// -------------------------\n\n// Unordered and Ordered lists\nul,\nol {\n  margin-top: 0;\n  margin-bottom: ($line-height-computed / 2);\n  ul,\n  ol {\n    margin-bottom: 0;\n  }\n}\n\n// List options\n\n// [converter] extracted from `.list-unstyled` for libsass compatibility\n@mixin list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n// [converter] extracted as `@mixin list-unstyled` for libsass compatibility\n.list-unstyled {\n  @include list-unstyled;\n}\n\n\n// Inline turns list items into inline-block\n.list-inline {\n  @include list-unstyled;\n  margin-left: -5px;\n\n  > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n\n// Description Lists\ndl {\n  margin-top: 0; // Remove browser default\n  margin-bottom: $line-height-computed;\n}\ndt,\ndd {\n  line-height: $line-height-base;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0; // Undo browser default\n}\n\n// Horizontal description lists\n//\n// Defaults to being stacked without any of the below styles applied, until the\n// grid breakpoint is reached (default of ~768px).\n\n.dl-horizontal {\n  dd {\n    @include clearfix; // Clear the floated `dt` if an empty `dd` is present\n  }\n\n  @media (min-width: $dl-horizontal-breakpoint) {\n    dt {\n      float: left;\n      width: ($dl-horizontal-offset - 20);\n      clear: left;\n      text-align: right;\n      @include text-overflow;\n    }\n    dd {\n      margin-left: $dl-horizontal-offset;\n    }\n  }\n}\n\n\n// Misc\n// -------------------------\n\n// Abbreviations and acronyms\nabbr[title],\n// Add data-* attribute to help out our tooltip plugin, per https://github.com/twbs/bootstrap/issues/5257\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted $abbr-border-color;\n}\n.initialism {\n  font-size: 90%;\n  @extend .text-uppercase;\n}\n\n// Blockquotes\nblockquote {\n  padding: ($line-height-computed / 2) $line-height-computed;\n  margin: 0 0 $line-height-computed;\n  font-size: $blockquote-font-size;\n  border-left: 5px solid $blockquote-border-color;\n\n  p,\n  ul,\n  ol {\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n\n  // Note: Deprecated small and .small as of v3.1.0\n  // Context: https://github.com/twbs/bootstrap/issues/11660\n  footer,\n  small,\n  .small {\n    display: block;\n    font-size: 80%; // back to default font-size\n    line-height: $line-height-base;\n    color: $blockquote-small-color;\n\n    &:before {\n      content: '\\2014 \\00A0'; // em dash, nbsp\n    }\n  }\n}\n\n// Opposite alignment of blockquote\n//\n// Heads up: `blockquote.pull-right` has been deprecated as of v3.1.0.\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid $blockquote-border-color;\n  border-left: 0;\n  text-align: right;\n\n  // Account for citation\n  footer,\n  small,\n  .small {\n    &:before { content: ''; }\n    &:after {\n      content: '\\00A0 \\2014'; // nbsp, em dash\n    }\n  }\n}\n\n// Addresses\naddress {\n  margin-bottom: $line-height-computed;\n  font-style: normal;\n  line-height: $line-height-base;\n}\n","// Typography\n\n// [converter] $parent hack\n@mixin text-emphasis-variant($parent, $color) {\n  #{$parent} {\n    color: $color;\n  }\n  a#{$parent}:hover,\n  a#{$parent}:focus {\n    color: darken($color, 10%);\n  }\n}\n","// Contextual backgrounds\n\n// [converter] $parent hack\n@mixin bg-variant($parent, $color) {\n  #{$parent} {\n    background-color: $color;\n  }\n  a#{$parent}:hover,\n  a#{$parent}:focus {\n    background-color: darken($color, 10%);\n  }\n}\n","// Clearfix\n//\n// For modern browsers\n// 1. The space content is one way to avoid an Opera bug when the\n//    contenteditable attribute is included anywhere else in the document.\n//    Otherwise it causes space to appear at the top and bottom of elements\n//    that are clearfixed.\n// 2. The use of `table` rather than `block` is only necessary if using\n//    `:before` to contain the top-margins of child elements.\n//\n// Source: http://nicolasgallagher.com/micro-clearfix-hack/\n\n@mixin clearfix() {\n  &:before,\n  &:after {\n    content: \" \"; // 1\n    display: table; // 2\n  }\n  &:after {\n    clear: both;\n  }\n}\n","// Text overflow\n// Requires inline-block or block for proper styling\n\n@mixin text-overflow() {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n","//\n// Code (inline and block)\n// --------------------------------------------------\n\n\n// Inline and block code styles\ncode,\nkbd,\npre,\nsamp {\n  font-family: $font-family-monospace;\n}\n\n// Inline code\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: $code-color;\n  background-color: $code-bg;\n  border-radius: $border-radius-base;\n}\n\n// User input typically entered via keyboard\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: $kbd-color;\n  background-color: $kbd-bg;\n  border-radius: $border-radius-small;\n  box-shadow: inset 0 -1px 0 rgba(0,0,0,.25);\n\n  kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none;\n  }\n}\n\n// Blocks of code\npre {\n  display: block;\n  padding: (($line-height-computed - 1) / 2);\n  margin: 0 0 ($line-height-computed / 2);\n  font-size: ($font-size-base - 1); // 14px to 13px\n  line-height: $line-height-base;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: $pre-color;\n  background-color: $pre-bg;\n  border: 1px solid $pre-border-color;\n  border-radius: $border-radius-base;\n\n  // Account for some code outputs that place code tags in pre tags\n  code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0;\n  }\n}\n\n// Enable scrollable blocks of code\n.pre-scrollable {\n  max-height: $pre-scrollable-max-height;\n  overflow-y: scroll;\n}\n","//\n// Grid system\n// --------------------------------------------------\n\n\n// Container widths\n//\n// Set the container width, and override it for fixed navbars in media queries.\n\n.container {\n  @include container-fixed;\n\n  @media (min-width: $screen-sm-min) {\n    width: $container-sm;\n  }\n  @media (min-width: $screen-md-min) {\n    width: $container-md;\n  }\n  @media (min-width: $screen-lg-min) {\n    width: $container-lg;\n  }\n}\n\n\n// Fluid container\n//\n// Utilizes the mixin meant for fixed width containers, but without any defined\n// width for fluid, full width layouts.\n\n.container-fluid {\n  @include container-fixed;\n}\n\n\n// Row\n//\n// Rows contain and clear the floats of your columns.\n\n.row {\n  @include make-row;\n}\n\n\n// Columns\n//\n// Common styles for small and large grid columns\n\n@include make-grid-columns;\n\n\n// Extra small grid\n//\n// Columns, offsets, pushes, and pulls for extra small devices like\n// smartphones.\n\n@include make-grid(xs);\n\n\n// Small grid\n//\n// Columns, offsets, pushes, and pulls for the small device range, from phones\n// to tablets.\n\n@media (min-width: $screen-sm-min) {\n  @include make-grid(sm);\n}\n\n\n// Medium grid\n//\n// Columns, offsets, pushes, and pulls for the desktop device range.\n\n@media (min-width: $screen-md-min) {\n  @include make-grid(md);\n}\n\n\n// Large grid\n//\n// Columns, offsets, pushes, and pulls for the large desktop device range.\n\n@media (min-width: $screen-lg-min) {\n  @include make-grid(lg);\n}\n","// Grid system\n//\n// Generate semantic grid columns with these mixins.\n\n// Centered container element\n@mixin container-fixed($gutter: $grid-gutter-width) {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left:  floor(($gutter / 2));\n  padding-right: ceil(($gutter / 2));\n  @include clearfix;\n}\n\n// Creates a wrapper for a series of columns\n@mixin make-row($gutter: $grid-gutter-width) {\n  margin-left:  ceil(($gutter / -2));\n  margin-right: floor(($gutter / -2));\n  @include clearfix;\n}\n\n// Generate the extra small columns\n@mixin make-xs-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  float: left;\n  width: percentage(($columns / $grid-columns));\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n}\n@mixin make-xs-column-offset($columns) {\n  margin-left: percentage(($columns / $grid-columns));\n}\n@mixin make-xs-column-push($columns) {\n  left: percentage(($columns / $grid-columns));\n}\n@mixin make-xs-column-pull($columns) {\n  right: percentage(($columns / $grid-columns));\n}\n\n// Generate the small columns\n@mixin make-sm-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n\n  @media (min-width: $screen-sm-min) {\n    float: left;\n    width: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-sm-column-offset($columns) {\n  @media (min-width: $screen-sm-min) {\n    margin-left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-sm-column-push($columns) {\n  @media (min-width: $screen-sm-min) {\n    left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-sm-column-pull($columns) {\n  @media (min-width: $screen-sm-min) {\n    right: percentage(($columns / $grid-columns));\n  }\n}\n\n// Generate the medium columns\n@mixin make-md-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n\n  @media (min-width: $screen-md-min) {\n    float: left;\n    width: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-md-column-offset($columns) {\n  @media (min-width: $screen-md-min) {\n    margin-left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-md-column-push($columns) {\n  @media (min-width: $screen-md-min) {\n    left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-md-column-pull($columns) {\n  @media (min-width: $screen-md-min) {\n    right: percentage(($columns / $grid-columns));\n  }\n}\n\n// Generate the large columns\n@mixin make-lg-column($columns, $gutter: $grid-gutter-width) {\n  position: relative;\n  min-height: 1px;\n  padding-left:  ($gutter / 2);\n  padding-right: ($gutter / 2);\n\n  @media (min-width: $screen-lg-min) {\n    float: left;\n    width: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-lg-column-offset($columns) {\n  @media (min-width: $screen-lg-min) {\n    margin-left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-lg-column-push($columns) {\n  @media (min-width: $screen-lg-min) {\n    left: percentage(($columns / $grid-columns));\n  }\n}\n@mixin make-lg-column-pull($columns) {\n  @media (min-width: $screen-lg-min) {\n    right: percentage(($columns / $grid-columns));\n  }\n}\n","// Framework grid generation\n//\n// Used only by Bootstrap to generate the correct number of grid classes given\n// any value of `$grid-columns`.\n\n// [converter] This is defined recursively in LESS, but Sass supports real loops\n@mixin make-grid-columns($i: 1, $list: \".col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}\") {\n  @for $i from (1 + 1) through $grid-columns {\n    $list: \"#{$list}, .col-xs-#{$i}, .col-sm-#{$i}, .col-md-#{$i}, .col-lg-#{$i}\";\n  }\n  #{$list} {\n    position: relative;\n    // Prevent columns from collapsing when empty\n    min-height: 1px;\n    // Inner gutter via padding\n    padding-left:  ceil(($grid-gutter-width / 2));\n    padding-right: floor(($grid-gutter-width / 2));\n  }\n}\n\n\n// [converter] This is defined recursively in LESS, but Sass supports real loops\n@mixin float-grid-columns($class, $i: 1, $list: \".col-#{$class}-#{$i}\") {\n  @for $i from (1 + 1) through $grid-columns {\n    $list: \"#{$list}, .col-#{$class}-#{$i}\";\n  }\n  #{$list} {\n    float: left;\n  }\n}\n\n\n@mixin calc-grid-column($index, $class, $type) {\n  @if ($type == width) and ($index > 0) {\n    .col-#{$class}-#{$index} {\n      width: percentage(($index / $grid-columns));\n    }\n  }\n  @if ($type == push) and ($index > 0) {\n    .col-#{$class}-push-#{$index} {\n      left: percentage(($index / $grid-columns));\n    }\n  }\n  @if ($type == push) and ($index == 0) {\n    .col-#{$class}-push-0 {\n      left: auto;\n    }\n  }\n  @if ($type == pull) and ($index > 0) {\n    .col-#{$class}-pull-#{$index} {\n      right: percentage(($index / $grid-columns));\n    }\n  }\n  @if ($type == pull) and ($index == 0) {\n    .col-#{$class}-pull-0 {\n      right: auto;\n    }\n  }\n  @if ($type == offset) {\n    .col-#{$class}-offset-#{$index} {\n      margin-left: percentage(($index / $grid-columns));\n    }\n  }\n}\n\n// [converter] This is defined recursively in LESS, but Sass supports real loops\n@mixin loop-grid-columns($columns, $class, $type) {\n  @for $i from 0 through $columns {\n    @include calc-grid-column($i, $class, $type);\n  }\n}\n\n\n// Create grid for specific class\n@mixin make-grid($class) {\n  @include float-grid-columns($class);\n  @include loop-grid-columns($grid-columns, $class, width);\n  @include loop-grid-columns($grid-columns, $class, pull);\n  @include loop-grid-columns($grid-columns, $class, push);\n  @include loop-grid-columns($grid-columns, $class, offset);\n}\n","//\n// Tables\n// --------------------------------------------------\n\n\ntable {\n  background-color: $table-bg;\n}\ncaption {\n  padding-top: $table-cell-padding;\n  padding-bottom: $table-cell-padding;\n  color: $text-muted;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n\n\n// Baseline styles\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: $line-height-computed;\n  // Cells\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        padding: $table-cell-padding;\n        line-height: $line-height-base;\n        vertical-align: top;\n        border-top: 1px solid $table-border-color;\n      }\n    }\n  }\n  // Bottom align for column headings\n  > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid $table-border-color;\n  }\n  // Remove top border from thead by default\n  > caption + thead,\n  > colgroup + thead,\n  > thead:first-child {\n    > tr:first-child {\n      > th,\n      > td {\n        border-top: 0;\n      }\n    }\n  }\n  // Account for multiple tbody instances\n  > tbody + tbody {\n    border-top: 2px solid $table-border-color;\n  }\n\n  // Nesting\n  .table {\n    background-color: $body-bg;\n  }\n}\n\n\n// Condensed table w/ half padding\n\n.table-condensed {\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        padding: $table-condensed-cell-padding;\n      }\n    }\n  }\n}\n\n\n// Bordered version\n//\n// Add borders all around the table and between all the columns.\n\n.table-bordered {\n  border: 1px solid $table-border-color;\n  > thead,\n  > tbody,\n  > tfoot {\n    > tr {\n      > th,\n      > td {\n        border: 1px solid $table-border-color;\n      }\n    }\n  }\n  > thead > tr {\n    > th,\n    > td {\n      border-bottom-width: 2px;\n    }\n  }\n}\n\n\n// Zebra-striping\n//\n// Default zebra-stripe styles (alternating gray and transparent backgrounds)\n\n.table-striped {\n  > tbody > tr:nth-of-type(odd) {\n    background-color: $table-bg-accent;\n  }\n}\n\n\n// Hover effect\n//\n// Placed here since it has to come after the potential zebra striping\n\n.table-hover {\n  > tbody > tr:hover {\n    background-color: $table-bg-hover;\n  }\n}\n\n\n// Table cell sizing\n//\n// Reset default table behavior\n\ntable col[class*=\"col-\"] {\n  position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)\n  float: none;\n  display: table-column;\n}\ntable {\n  td,\n  th {\n    &[class*=\"col-\"] {\n      position: static; // Prevent border hiding in Firefox and IE9-11 (see https://github.com/twbs/bootstrap/issues/11623)\n      float: none;\n      display: table-cell;\n    }\n  }\n}\n\n\n// Table backgrounds\n//\n// Exact selectors below required to override `.table-striped` and prevent\n// inheritance to nested tables.\n\n// Generate the contextual variants\n@include table-row-variant('active', $table-bg-active);\n@include table-row-variant('success', $state-success-bg);\n@include table-row-variant('info', $state-info-bg);\n@include table-row-variant('warning', $state-warning-bg);\n@include table-row-variant('danger', $state-danger-bg);\n\n\n// Responsive tables\n//\n// Wrap your tables in `.table-responsive` and we'll make them mobile friendly\n// by enabling horizontal scrolling. Only applies <768px. Everything above that\n// will display normally.\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; // Workaround for IE9 bug (see https://github.com/twbs/bootstrap/issues/14837)\n\n  @media screen and (max-width: $screen-xs-max) {\n    width: 100%;\n    margin-bottom: ($line-height-computed * 0.75);\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid $table-border-color;\n\n    // Tighten up spacing\n    > .table {\n      margin-bottom: 0;\n\n      // Ensure the content doesn't wrap\n      > thead,\n      > tbody,\n      > tfoot {\n        > tr {\n          > th,\n          > td {\n            white-space: nowrap;\n          }\n        }\n      }\n    }\n\n    // Special overrides for the bordered tables\n    > .table-bordered {\n      border: 0;\n\n      // Nuke the appropriate borders so that the parent can handle them\n      > thead,\n      > tbody,\n      > tfoot {\n        > tr {\n          > th:first-child,\n          > td:first-child {\n            border-left: 0;\n          }\n          > th:last-child,\n          > td:last-child {\n            border-right: 0;\n          }\n        }\n      }\n\n      // Only nuke the last row's bottom-border in `tbody` and `tfoot` since\n      // chances are there will be only one `tr` in a `thead` and that would\n      // remove the border altogether.\n      > tbody,\n      > tfoot {\n        > tr:last-child {\n          > th,\n          > td {\n            border-bottom: 0;\n          }\n        }\n      }\n\n    }\n  }\n}\n","// Tables\n\n@mixin table-row-variant($state, $background) {\n  // Exact selectors below required to override `.table-striped` and prevent\n  // inheritance to nested tables.\n  .table > thead > tr,\n  .table > tbody > tr,\n  .table > tfoot > tr {\n    > td.#{$state},\n    > th.#{$state},\n    &.#{$state} > td,\n    &.#{$state} > th {\n      background-color: $background;\n    }\n  }\n\n  // Hover states for `.table-hover`\n  // Note: this is not available for cells or rows within `thead` or `tfoot`.\n  .table-hover > tbody > tr {\n    > td.#{$state}:hover,\n    > th.#{$state}:hover,\n    &.#{$state}:hover > td,\n    &:hover > .#{$state},\n    &.#{$state}:hover > th {\n      background-color: darken($background, 5%);\n    }\n  }\n}\n","//\n// Forms\n// --------------------------------------------------\n\n\n// Normalize non-controls\n//\n// Restyle and baseline non-control form elements.\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  // Chrome and Firefox set a `min-width: min-content;` on fieldsets,\n  // so we reset that to ensure it behaves more like a standard block element.\n  // See https://github.com/twbs/bootstrap/issues/12359.\n  min-width: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: $line-height-computed;\n  font-size: ($font-size-base * 1.5);\n  line-height: inherit;\n  color: $legend-color;\n  border: 0;\n  border-bottom: 1px solid $legend-border-color;\n}\n\nlabel {\n  display: inline-block;\n  max-width: 100%; // Force IE8 to wrap long content (see https://github.com/twbs/bootstrap/issues/13141)\n  margin-bottom: 5px;\n  font-weight: bold;\n}\n\n\n// Normalize form controls\n//\n// While most of our form styles require extra classes, some basic normalization\n// is required to ensure optimum display with or without those classes to better\n// address browser inconsistencies.\n\n// Override content-box in Normalize (* isn't specific enough)\ninput[type=\"search\"] {\n  @include box-sizing(border-box);\n}\n\n// Position radios and checkboxes better\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9; // IE8-9\n  line-height: normal;\n}\n\ninput[type=\"file\"] {\n  display: block;\n}\n\n// Make range inputs behave like textual form controls\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\n\n// Make multiple select elements height not fixed\nselect[multiple],\nselect[size] {\n  height: auto;\n}\n\n// Focus for file, radio, and checkbox\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  @include tab-focus;\n}\n\n// Adjust output element\noutput {\n  display: block;\n  padding-top: ($padding-base-vertical + 1);\n  font-size: $font-size-base;\n  line-height: $line-height-base;\n  color: $input-color;\n}\n\n\n// Common form controls\n//\n// Shared size and type resets for form controls. Apply `.form-control` to any\n// of the following form controls:\n//\n// select\n// textarea\n// input[type=\"text\"]\n// input[type=\"password\"]\n// input[type=\"datetime\"]\n// input[type=\"datetime-local\"]\n// input[type=\"date\"]\n// input[type=\"month\"]\n// input[type=\"time\"]\n// input[type=\"week\"]\n// input[type=\"number\"]\n// input[type=\"email\"]\n// input[type=\"url\"]\n// input[type=\"search\"]\n// input[type=\"tel\"]\n// input[type=\"color\"]\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: $input-height-base; // Make inputs at least the height of their button counterpart (base line-height + padding + border)\n  padding: $padding-base-vertical $padding-base-horizontal;\n  font-size: $font-size-base;\n  line-height: $line-height-base;\n  color: $input-color;\n  background-color: $input-bg;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid $input-border;\n  border-radius: $input-border-radius; // Note: This has no effect on <select>s in some browsers, due to the limited stylability of <select>s in CSS.\n  @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075));\n  @include transition(border-color ease-in-out .15s, box-shadow ease-in-out .15s);\n\n  // Customize the `:focus` state to imitate native WebKit styles.\n  @include form-control-focus;\n\n  // Placeholder\n  @include placeholder;\n\n  // Unstyle the caret on `<select>`s in IE10+.\n  &::-ms-expand {\n    border: 0;\n    background-color: transparent;\n  }\n\n  // Disabled and read-only inputs\n  //\n  // HTML5 says that controls under a fieldset > legend:first-child won't be\n  // disabled if the fieldset is disabled. Due to implementation difficulty, we\n  // don't honor that edge case; we style them as disabled anyway.\n  &[disabled],\n  &[readonly],\n  fieldset[disabled] & {\n    background-color: $input-bg-disabled;\n    opacity: 1; // iOS fix for unreadable disabled content; see https://github.com/twbs/bootstrap/issues/11655\n  }\n\n  &[disabled],\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n  }\n\n  // [converter] extracted textarea& to textarea.form-control\n}\n\n// Reset height for `textarea`s\ntextarea.form-control {\n  height: auto;\n}\n\n\n// Search inputs in iOS\n//\n// This overrides the extra rounded corners on search inputs in iOS so that our\n// `.form-control` class can properly style them. Note that this cannot simply\n// be added to `.form-control` as it's not specific enough. For details, see\n// https://github.com/twbs/bootstrap/issues/11586.\n\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n\n\n// Special styles for iOS temporal inputs\n//\n// In Mobile Safari, setting `display: block` on temporal inputs causes the\n// text within the input to become vertically misaligned. As a workaround, we\n// set a pixel line-height that matches the given height of the input, but only\n// for Safari. See https://bugs.webkit.org/show_bug.cgi?id=139848\n//\n// Note that as of 9.3, iOS doesn't support `week`.\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"],\n  input[type=\"time\"],\n  input[type=\"datetime-local\"],\n  input[type=\"month\"] {\n    &.form-control {\n      line-height: $input-height-base;\n    }\n\n    &.input-sm,\n    .input-group-sm & {\n      line-height: $input-height-small;\n    }\n\n    &.input-lg,\n    .input-group-lg & {\n      line-height: $input-height-large;\n    }\n  }\n}\n\n\n// Form groups\n//\n// Designed to help with the organization and spacing of vertical forms. For\n// horizontal forms, use the predefined grid classes.\n\n.form-group {\n  margin-bottom: $form-group-margin-bottom;\n}\n\n\n// Checkboxes and radios\n//\n// Indent the labels to position radios/checkboxes as hanging controls.\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n  label {\n    min-height: $line-height-computed; // Ensure the input doesn't jump when there is no text\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer;\n  }\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; // Move up sibling radios or checkboxes for tighter spacing\n}\n\n// Radios and checkboxes on same line\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; // space out consecutive inline controls\n}\n\n// Apply same disabled cursor tweak as for inputs\n// Some special care is needed because <label>s don't inherit their parent's `cursor`.\n//\n// Note: Neither radios nor checkboxes can be readonly.\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  &[disabled],\n  &.disabled,\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n  }\n}\n// These classes are used directly on <label>s\n.radio-inline,\n.checkbox-inline {\n  &.disabled,\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n  }\n}\n// These classes are used on elements with <label> descendants\n.radio,\n.checkbox {\n  &.disabled,\n  fieldset[disabled] & {\n    label {\n      cursor: $cursor-disabled;\n    }\n  }\n}\n\n\n// Static form control text\n//\n// Apply class to a `p` element to make any string of text align with labels in\n// a horizontal form layout.\n\n.form-control-static {\n  // Size it appropriately next to real form controls\n  padding-top: ($padding-base-vertical + 1);\n  padding-bottom: ($padding-base-vertical + 1);\n  // Remove default margin from `p`\n  margin-bottom: 0;\n  min-height: ($line-height-computed + $font-size-base);\n\n  &.input-lg,\n  &.input-sm {\n    padding-left: 0;\n    padding-right: 0;\n  }\n}\n\n\n// Form control sizing\n//\n// Build on `.form-control` with modifier classes to decrease or increase the\n// height and font-size of form controls.\n//\n// The `.form-group-* form-control` variations are sadly duplicated to avoid the\n// issue documented in https://github.com/twbs/bootstrap/issues/15074.\n\n@include input-size('.input-sm', $input-height-small, $padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $input-border-radius-small);\n.form-group-sm {\n  .form-control {\n    height: $input-height-small;\n    padding: $padding-small-vertical $padding-small-horizontal;\n    font-size: $font-size-small;\n    line-height: $line-height-small;\n    border-radius: $input-border-radius-small;\n  }\n  select.form-control {\n    height: $input-height-small;\n    line-height: $input-height-small;\n  }\n  textarea.form-control,\n  select[multiple].form-control {\n    height: auto;\n  }\n  .form-control-static {\n    height: $input-height-small;\n    min-height: ($line-height-computed + $font-size-small);\n    padding: ($padding-small-vertical + 1) $padding-small-horizontal;\n    font-size: $font-size-small;\n    line-height: $line-height-small;\n  }\n}\n\n@include input-size('.input-lg', $input-height-large, $padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $input-border-radius-large);\n.form-group-lg {\n  .form-control {\n    height: $input-height-large;\n    padding: $padding-large-vertical $padding-large-horizontal;\n    font-size: $font-size-large;\n    line-height: $line-height-large;\n    border-radius: $input-border-radius-large;\n  }\n  select.form-control {\n    height: $input-height-large;\n    line-height: $input-height-large;\n  }\n  textarea.form-control,\n  select[multiple].form-control {\n    height: auto;\n  }\n  .form-control-static {\n    height: $input-height-large;\n    min-height: ($line-height-computed + $font-size-large);\n    padding: ($padding-large-vertical + 1) $padding-large-horizontal;\n    font-size: $font-size-large;\n    line-height: $line-height-large;\n  }\n}\n\n\n// Form control feedback states\n//\n// Apply contextual and semantic states to individual form controls.\n\n.has-feedback {\n  // Enable absolute positioning\n  position: relative;\n\n  // Ensure icons don't overlap text\n  .form-control {\n    padding-right: ($input-height-base * 1.25);\n  }\n}\n// Feedback icon (requires .glyphicon classes)\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2; // Ensure icon is above input groups\n  display: block;\n  width: $input-height-base;\n  height: $input-height-base;\n  line-height: $input-height-base;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: $input-height-large;\n  height: $input-height-large;\n  line-height: $input-height-large;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: $input-height-small;\n  height: $input-height-small;\n  line-height: $input-height-small;\n}\n\n// Feedback states\n.has-success {\n  @include form-control-validation($state-success-text, $state-success-text, $state-success-bg);\n}\n.has-warning {\n  @include form-control-validation($state-warning-text, $state-warning-text, $state-warning-bg);\n}\n.has-error {\n  @include form-control-validation($state-danger-text, $state-danger-text, $state-danger-bg);\n}\n\n// Reposition feedback icon if input has visible label above\n.has-feedback label {\n\n  & ~ .form-control-feedback {\n    top: ($line-height-computed + 5); // Height of the `label` and its margin\n  }\n  &.sr-only ~ .form-control-feedback {\n    top: 0;\n  }\n}\n\n\n// Help text\n//\n// Apply to any element you wish to create light text for placement immediately\n// below a form control. Use for general help, formatting, or instructional text.\n\n.help-block {\n  display: block; // account for any element using help-block\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: lighten($text-color, 25%); // lighten the text some for contrast\n}\n\n\n// Inline forms\n//\n// Make forms appear inline(-block) by adding the `.form-inline` class. Inline\n// forms begin stacked on extra small (mobile) devices and then go inline when\n// viewports reach <768px.\n//\n// Requires wrapping inputs and labels with `.form-group` for proper display of\n// default HTML form controls and our custom form controls (e.g., input groups).\n//\n// Heads up! This is mixin-ed into `.navbar-form` in navbars.less.\n\n// [converter] extracted from `.form-inline` for libsass compatibility\n@mixin form-inline {\n\n  // Kick in the inline\n  @media (min-width: $screen-sm-min) {\n    // Inline-block all the things for \"inline\"\n    .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle;\n    }\n\n    // In navbar-form, allow folks to *not* use `.form-group`\n    .form-control {\n      display: inline-block;\n      width: auto; // Prevent labels from stacking above inputs in `.form-group`\n      vertical-align: middle;\n    }\n\n    // Make static controls behave like regular ones\n    .form-control-static {\n      display: inline-block;\n    }\n\n    .input-group {\n      display: inline-table;\n      vertical-align: middle;\n\n      .input-group-addon,\n      .input-group-btn,\n      .form-control {\n        width: auto;\n      }\n    }\n\n    // Input groups need that 100% width though\n    .input-group > .form-control {\n      width: 100%;\n    }\n\n    .control-label {\n      margin-bottom: 0;\n      vertical-align: middle;\n    }\n\n    // Remove default margin on radios/checkboxes that were used for stacking, and\n    // then undo the floating of radios and checkboxes to match.\n    .radio,\n    .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle;\n\n      label {\n        padding-left: 0;\n      }\n    }\n    .radio input[type=\"radio\"],\n    .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0;\n    }\n\n    // Re-override the feedback icon.\n    .has-feedback .form-control-feedback {\n      top: 0;\n    }\n  }\n}\n// [converter] extracted as `@mixin form-inline` for libsass compatibility\n.form-inline {\n  @include form-inline;\n}\n\n\n\n// Horizontal forms\n//\n// Horizontal forms are built on grid classes and allow you to create forms with\n// labels on the left and inputs on the right.\n\n.form-horizontal {\n\n  // Consistent vertical alignment of radios and checkboxes\n  //\n  // Labels also get some reset styles, but that is scoped to a media query below.\n  .radio,\n  .checkbox,\n  .radio-inline,\n  .checkbox-inline {\n    margin-top: 0;\n    margin-bottom: 0;\n    padding-top: ($padding-base-vertical + 1); // Default padding plus a border\n  }\n  // Account for padding we're adding to ensure the alignment and of help text\n  // and other content below items\n  .radio,\n  .checkbox {\n    min-height: ($line-height-computed + ($padding-base-vertical + 1));\n  }\n\n  // Make form groups behave like rows\n  .form-group {\n    @include make-row;\n  }\n\n  // Reset spacing and right align labels, but scope to media queries so that\n  // labels on narrow viewports stack the same as a default form example.\n  @media (min-width: $screen-sm-min) {\n    .control-label {\n      text-align: right;\n      margin-bottom: 0;\n      padding-top: ($padding-base-vertical + 1); // Default padding plus a border\n    }\n  }\n\n  // Validation states\n  //\n  // Reposition the icon because it's now within a grid column and columns have\n  // `position: relative;` on them. Also accounts for the grid gutter padding.\n  .has-feedback .form-control-feedback {\n    right: floor(($grid-gutter-width / 2));\n  }\n\n  // Form group sizes\n  //\n  // Quick utility class for applying `.input-lg` and `.input-sm` styles to the\n  // inputs and labels within a `.form-group`.\n  .form-group-lg {\n    @media (min-width: $screen-sm-min) {\n      .control-label {\n        padding-top: ($padding-large-vertical + 1);\n        font-size: $font-size-large;\n      }\n    }\n  }\n  .form-group-sm {\n    @media (min-width: $screen-sm-min) {\n      .control-label {\n        padding-top: ($padding-small-vertical + 1);\n        font-size: $font-size-small;\n      }\n    }\n  }\n}\n","// Form validation states\n//\n// Used in forms.less to generate the form validation CSS for warnings, errors,\n// and successes.\n\n@mixin form-control-validation($text-color: #555, $border-color: #ccc, $background-color: #f5f5f5) {\n  // Color the label and help text\n  .help-block,\n  .control-label,\n  .radio,\n  .checkbox,\n  .radio-inline,\n  .checkbox-inline,\n  &.radio label,\n  &.checkbox label,\n  &.radio-inline label,\n  &.checkbox-inline label  {\n    color: $text-color;\n  }\n  // Set the border and box shadow on specific inputs to match\n  .form-control {\n    border-color: $border-color;\n    @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075)); // Redeclare so transitions work\n    &:focus {\n      border-color: darken($border-color, 10%);\n      $shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 6px lighten($border-color, 20%);\n      @include box-shadow($shadow);\n    }\n  }\n  // Set validation states also for addons\n  .input-group-addon {\n    color: $text-color;\n    border-color: $border-color;\n    background-color: $background-color;\n  }\n  // Optional feedback icon\n  .form-control-feedback {\n    color: $text-color;\n  }\n}\n\n\n// Form control focus state\n//\n// Generate a customized focus state and for any input with the specified color,\n// which defaults to the `$input-border-focus` variable.\n//\n// We highly encourage you to not customize the default value, but instead use\n// this to tweak colors on an as-needed basis. This aesthetic change is based on\n// WebKit's default styles, but applicable to a wider range of browsers. Its\n// usability and accessibility should be taken into account with any change.\n//\n// Example usage: change the default blue border and shadow to white for better\n// contrast against a dark gray background.\n@mixin form-control-focus($color: $input-border-focus) {\n  $color-rgba: rgba(red($color), green($color), blue($color), .6);\n  &:focus {\n    border-color: $color;\n    outline: 0;\n    @include box-shadow(inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px $color-rgba);\n  }\n}\n\n// Form control sizing\n//\n// Relative text size, padding, and border-radii changes for form controls. For\n// horizontal sizing, wrap controls in the predefined grid classes. `<select>`\n// element gets special love because it's special, and that's a fact!\n// [converter] $parent hack\n@mixin input-size($parent, $input-height, $padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {\n  #{$parent} {\n    height: $input-height;\n    padding: $padding-vertical $padding-horizontal;\n    font-size: $font-size;\n    line-height: $line-height;\n    border-radius: $border-radius;\n  }\n\n  select#{$parent} {\n    height: $input-height;\n    line-height: $input-height;\n  }\n\n  textarea#{$parent},\n  select[multiple]#{$parent} {\n    height: auto;\n  }\n}\n","//\n// Buttons\n// --------------------------------------------------\n\n\n// Base styles\n// --------------------------------------------------\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0; // For input.btn\n  font-weight: $btn-font-weight;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid transparent;\n  white-space: nowrap;\n  @include button-size($padding-base-vertical, $padding-base-horizontal, $font-size-base, $line-height-base, $btn-border-radius-base);\n  @include user-select(none);\n\n  &,\n  &:active,\n  &.active {\n    &:focus,\n    &.focus {\n      @include tab-focus;\n    }\n  }\n\n  &:hover,\n  &:focus,\n  &.focus {\n    color: $btn-default-color;\n    text-decoration: none;\n  }\n\n  &:active,\n  &.active {\n    outline: 0;\n    background-image: none;\n    @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));\n  }\n\n  &.disabled,\n  &[disabled],\n  fieldset[disabled] & {\n    cursor: $cursor-disabled;\n    @include opacity(.65);\n    @include box-shadow(none);\n  }\n\n  // [converter] extracted a& to a.btn\n}\n\na.btn {\n  &.disabled,\n  fieldset[disabled] & {\n    pointer-events: none; // Future-proof disabling of clicks on `<a>` elements\n  }\n}\n\n\n// Alternate buttons\n// --------------------------------------------------\n\n.btn-default {\n  @include button-variant($btn-default-color, $btn-default-bg, $btn-default-border);\n}\n.btn-primary {\n  @include button-variant($btn-primary-color, $btn-primary-bg, $btn-primary-border);\n}\n// Success appears as green\n.btn-success {\n  @include button-variant($btn-success-color, $btn-success-bg, $btn-success-border);\n}\n// Info appears as blue-green\n.btn-info {\n  @include button-variant($btn-info-color, $btn-info-bg, $btn-info-border);\n}\n// Warning appears as orange\n.btn-warning {\n  @include button-variant($btn-warning-color, $btn-warning-bg, $btn-warning-border);\n}\n// Danger and error appear as red\n.btn-danger {\n  @include button-variant($btn-danger-color, $btn-danger-bg, $btn-danger-border);\n}\n\n\n// Link buttons\n// -------------------------\n\n// Make a button look and behave like a link\n.btn-link {\n  color: $link-color;\n  font-weight: normal;\n  border-radius: 0;\n\n  &,\n  &:active,\n  &.active,\n  &[disabled],\n  fieldset[disabled] & {\n    background-color: transparent;\n    @include box-shadow(none);\n  }\n  &,\n  &:hover,\n  &:focus,\n  &:active {\n    border-color: transparent;\n  }\n  &:hover,\n  &:focus {\n    color: $link-hover-color;\n    text-decoration: $link-hover-decoration;\n    background-color: transparent;\n  }\n  &[disabled],\n  fieldset[disabled] & {\n    &:hover,\n    &:focus {\n      color: $btn-link-disabled-color;\n      text-decoration: none;\n    }\n  }\n}\n\n\n// Button Sizes\n// --------------------------------------------------\n\n.btn-lg {\n  // line-height: ensure even-numbered height of button next to large input\n  @include button-size($padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $btn-border-radius-large);\n}\n.btn-sm {\n  // line-height: ensure proper height of button next to small input\n  @include button-size($padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $btn-border-radius-small);\n}\n.btn-xs {\n  @include button-size($padding-xs-vertical, $padding-xs-horizontal, $font-size-small, $line-height-small, $btn-border-radius-small);\n}\n\n\n// Block button\n// --------------------------------------------------\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n// Vertically space out multiple block buttons\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\n// Specificity overrides\ninput[type=\"submit\"],\ninput[type=\"reset\"],\ninput[type=\"button\"] {\n  &.btn-block {\n    width: 100%;\n  }\n}\n","// Button variants\n//\n// Easily pump out default styles, as well as :hover, :focus, :active,\n// and disabled options for all buttons\n\n@mixin button-variant($color, $background, $border) {\n  color: $color;\n  background-color: $background;\n  border-color: $border;\n\n  &:focus,\n  &.focus {\n    color: $color;\n    background-color: darken($background, 10%);\n        border-color: darken($border, 25%);\n  }\n  &:hover {\n    color: $color;\n    background-color: darken($background, 10%);\n        border-color: darken($border, 12%);\n  }\n  &:active,\n  &.active,\n  .open > &.dropdown-toggle {\n    color: $color;\n    background-color: darken($background, 10%);\n        border-color: darken($border, 12%);\n\n    &:hover,\n    &:focus,\n    &.focus {\n      color: $color;\n      background-color: darken($background, 17%);\n          border-color: darken($border, 25%);\n    }\n  }\n  &:active,\n  &.active,\n  .open > &.dropdown-toggle {\n    background-image: none;\n  }\n  &.disabled,\n  &[disabled],\n  fieldset[disabled] & {\n    &:hover,\n    &:focus,\n    &.focus {\n      background-color: $background;\n          border-color: $border;\n    }\n  }\n\n  .badge {\n    color: $background;\n    background-color: $color;\n  }\n}\n\n// Button sizes\n@mixin button-size($padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {\n  padding: $padding-vertical $padding-horizontal;\n  font-size: $font-size;\n  line-height: $line-height;\n  border-radius: $border-radius;\n}\n","// Opacity\n\n@mixin opacity($opacity) {\n  opacity: $opacity;\n  // IE8 filter\n  $opacity-ie: ($opacity * 100);\n  filter: alpha(opacity=$opacity-ie);\n}\n","//\n// Component animations\n// --------------------------------------------------\n\n// Heads up!\n//\n// We don't use the `.opacity()` mixin here since it causes a bug with text\n// fields in IE7-8. Source: https://github.com/twbs/bootstrap/pull/3552.\n\n.fade {\n  opacity: 0;\n  @include transition(opacity .15s linear);\n  &.in {\n    opacity: 1;\n  }\n}\n\n.collapse {\n  display: none;\n\n  &.in      { display: block; }\n  // [converter] extracted tr&.in to tr.collapse.in\n  // [converter] extracted tbody&.in to tbody.collapse.in\n}\n\ntr.collapse.in    { display: table-row; }\n\ntbody.collapse.in { display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  @include transition-property(height, visibility);\n  @include transition-duration(.35s);\n  @include transition-timing-function(ease);\n}\n","//\n// Dropdown menus\n// --------------------------------------------------\n\n\n// Dropdown arrow/caret\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top:   $caret-width-base dashed;\n  border-top:   $caret-width-base solid \\9; // IE8\n  border-right: $caret-width-base solid transparent;\n  border-left:  $caret-width-base solid transparent;\n}\n\n// The dropdown wrapper (div)\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n// Prevent the focus on the dropdown toggle when closing dropdowns\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n// The dropdown menu (ul)\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: $zindex-dropdown;\n  display: none; // none by default, but block on \"open\" of the menu\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0; // override default ul\n  list-style: none;\n  font-size: $font-size-base;\n  text-align: left; // Ensures proper alignment if parent has it changed (e.g., modal footer)\n  background-color: $dropdown-bg;\n  border: 1px solid $dropdown-fallback-border; // IE8 fallback\n  border: 1px solid $dropdown-border;\n  border-radius: $border-radius-base;\n  @include box-shadow(0 6px 12px rgba(0,0,0,.175));\n  background-clip: padding-box;\n\n  // Aligns the dropdown menu to right\n  //\n  // Deprecated as of 3.1.0 in favor of `.dropdown-menu-[dir]`\n  &.pull-right {\n    right: 0;\n    left: auto;\n  }\n\n  // Dividers (basically an hr) within the dropdown\n  .divider {\n    @include nav-divider($dropdown-divider-bg);\n  }\n\n  // Links within the dropdown menu\n  > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: $line-height-base;\n    color: $dropdown-link-color;\n    white-space: nowrap; // prevent links from randomly breaking onto new lines\n  }\n}\n\n// Hover/Focus state\n.dropdown-menu > li > a {\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: $dropdown-link-hover-color;\n    background-color: $dropdown-link-hover-bg;\n  }\n}\n\n// Active state\n.dropdown-menu > .active > a {\n  &,\n  &:hover,\n  &:focus {\n    color: $dropdown-link-active-color;\n    text-decoration: none;\n    outline: 0;\n    background-color: $dropdown-link-active-bg;\n  }\n}\n\n// Disabled state\n//\n// Gray out text and ensure the hover/focus state remains gray\n\n.dropdown-menu > .disabled > a {\n  &,\n  &:hover,\n  &:focus {\n    color: $dropdown-link-disabled-color;\n  }\n\n  // Nuke hover/focus effects\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    background-color: transparent;\n    background-image: none; // Remove CSS gradient\n    @include reset-filter;\n    cursor: $cursor-disabled;\n  }\n}\n\n// Open state for the dropdown\n.open {\n  // Show the menu\n  > .dropdown-menu {\n    display: block;\n  }\n\n  // Remove the outline when :focus is triggered\n  > a {\n    outline: 0;\n  }\n}\n\n// Menu positioning\n//\n// Add extra class to `.dropdown-menu` to flip the alignment of the dropdown\n// menu with the parent.\n.dropdown-menu-right {\n  left: auto; // Reset the default from `.dropdown-menu`\n  right: 0;\n}\n// With v3, we enabled auto-flipping if you have a dropdown within a right\n// aligned nav component. To enable the undoing of that, we provide an override\n// to restore the default dropdown menu alignment.\n//\n// This is only for left-aligning a dropdown menu within a `.navbar-right` or\n// `.pull-right` nav component.\n.dropdown-menu-left {\n  left: 0;\n  right: auto;\n}\n\n// Dropdown section headers\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: $font-size-small;\n  line-height: $line-height-base;\n  color: $dropdown-header-color;\n  white-space: nowrap; // as with > li > a\n}\n\n// Backdrop to catch body clicks on mobile, etc.\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: ($zindex-dropdown - 10);\n}\n\n// Right aligned dropdowns\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n// Allow for dropdowns to go bottom up (aka, dropup-menu)\n//\n// Just add .dropup after the standard .dropdown class and you're set, bro.\n// TODO: abstract this so that the navbar fixed styles are not placed here?\n\n.dropup,\n.navbar-fixed-bottom .dropdown {\n  // Reverse the caret\n  .caret {\n    border-top: 0;\n    border-bottom: $caret-width-base dashed;\n    border-bottom: $caret-width-base solid \\9; // IE8\n    content: \"\";\n  }\n  // Different positioning for bottom up menu\n  .dropdown-menu {\n    top: auto;\n    bottom: 100%;\n    margin-bottom: 2px;\n  }\n}\n\n\n// Component alignment\n//\n// Reiterate per navbar.less and the modified component alignment there.\n\n@media (min-width: $grid-float-breakpoint) {\n  .navbar-right {\n    .dropdown-menu {\n      right: 0; left: auto;\n    }\n    // Necessary for overrides of the default right aligned menu.\n    // Will remove come v4 in all likelihood.\n    .dropdown-menu-left {\n      left: 0; right: auto;\n    }\n  }\n}\n","// Horizontal dividers\n//\n// Dividers (basically an hr) within dropdowns and nav lists\n\n@mixin nav-divider($color: #e5e5e5) {\n  height: 1px;\n  margin: (($line-height-computed / 2) - 1) 0;\n  overflow: hidden;\n  background-color: $color;\n}\n","// Reset filters for IE\n//\n// When you need to remove a gradient background, do not forget to use this to reset\n// the IE filter for IE9 and below.\n\n@mixin reset-filter() {\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n","//\n// Button groups\n// --------------------------------------------------\n\n// Make the div behave like a button\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; // match .btn alignment given font-size hack above\n  > .btn {\n    position: relative;\n    float: left;\n    // Bring the \"active\" button to the front\n    &:hover,\n    &:focus,\n    &:active,\n    &.active {\n      z-index: 2;\n    }\n  }\n}\n\n// Prevent double borders when buttons are next to each other\n.btn-group {\n  .btn + .btn,\n  .btn + .btn-group,\n  .btn-group + .btn,\n  .btn-group + .btn-group {\n    margin-left: -1px;\n  }\n}\n\n// Optional: Group multiple button groups together for a toolbar\n.btn-toolbar {\n  margin-left: -5px; // Offset the first child's margin\n  @include clearfix;\n\n  .btn,\n  .btn-group,\n  .input-group {\n    float: left;\n  }\n  > .btn,\n  > .btn-group,\n  > .input-group {\n    margin-left: 5px;\n  }\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n// Set corners individual because sometimes a single button can be in a .btn-group and we need :first-child and :last-child to both match\n.btn-group > .btn:first-child {\n  margin-left: 0;\n  &:not(:last-child):not(.dropdown-toggle) {\n    @include border-right-radius(0);\n  }\n}\n// Need .dropdown-toggle since :last-child doesn't apply, given that a .dropdown-menu is used immediately after it\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  @include border-left-radius(0);\n}\n\n// Custom edits for including btn-groups within btn-groups (useful for including dropdown buttons within a btn-group)\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) {\n  > .btn:last-child,\n  > .dropdown-toggle {\n    @include border-right-radius(0);\n  }\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  @include border-left-radius(0);\n}\n\n// On active and open, don't show outline\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n\n// Sizing\n//\n// Remix the default button sizing classes into new ones for easier manipulation.\n\n.btn-group-xs > .btn { @extend .btn-xs; }\n.btn-group-sm > .btn { @extend .btn-sm; }\n.btn-group-lg > .btn { @extend .btn-lg; }\n\n\n// Split button dropdowns\n// ----------------------\n\n// Give the line between buttons some depth\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px;\n}\n\n// The clickable button for toggling the menu\n// Remove the gradient and set the same inset shadow as the :active state\n.btn-group.open .dropdown-toggle {\n  @include box-shadow(inset 0 3px 5px rgba(0,0,0,.125));\n\n  // Show no shadow for `.btn-link` since it has no other button styles.\n  &.btn-link {\n    @include box-shadow(none);\n  }\n}\n\n\n// Reposition the caret\n.btn .caret {\n  margin-left: 0;\n}\n// Carets in other button sizes\n.btn-lg .caret {\n  border-width: $caret-width-large $caret-width-large 0;\n  border-bottom-width: 0;\n}\n// Upside down carets for .dropup\n.dropup .btn-lg .caret {\n  border-width: 0 $caret-width-large $caret-width-large;\n}\n\n\n// Vertical button groups\n// ----------------------\n\n.btn-group-vertical {\n  > .btn,\n  > .btn-group,\n  > .btn-group > .btn {\n    display: block;\n    float: none;\n    width: 100%;\n    max-width: 100%;\n  }\n\n  // Clear floats so dropdown menus can be properly placed\n  > .btn-group {\n    @include clearfix;\n    > .btn {\n      float: none;\n    }\n  }\n\n  > .btn + .btn,\n  > .btn + .btn-group,\n  > .btn-group + .btn,\n  > .btn-group + .btn-group {\n    margin-top: -1px;\n    margin-left: 0;\n  }\n}\n\n.btn-group-vertical > .btn {\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n  &:first-child:not(:last-child) {\n    @include border-top-radius($btn-border-radius-base);\n    @include border-bottom-radius(0);\n  }\n  &:last-child:not(:first-child) {\n    @include border-top-radius(0);\n    @include border-bottom-radius($btn-border-radius-base);\n  }\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) {\n  > .btn:last-child,\n  > .dropdown-toggle {\n    @include border-bottom-radius(0);\n  }\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  @include border-top-radius(0);\n}\n\n\n// Justified button groups\n// ----------------------\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n  > .btn,\n  > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%;\n  }\n  > .btn-group .btn {\n    width: 100%;\n  }\n\n  > .btn-group .dropdown-menu {\n    left: auto;\n  }\n}\n\n\n// Checkbox and radio options\n//\n// In order to support the browser's form validation feedback, powered by the\n// `required` attribute, we have to \"hide\" the inputs via `clip`. We cannot use\n// `display: none;` or `visibility: hidden;` as that also hides the popover.\n// Simply visually hiding the inputs via `opacity` would leave them clickable in\n// certain cases which is prevented by using `clip` and `pointer-events`.\n// This way, we ensure a DOM element is visible to position the popover from.\n//\n// See https://github.com/twbs/bootstrap/pull/12794 and\n// https://github.com/twbs/bootstrap/pull/14559 for more information.\n\n[data-toggle=\"buttons\"] {\n  > .btn,\n  > .btn-group > .btn {\n    input[type=\"radio\"],\n    input[type=\"checkbox\"] {\n      position: absolute;\n      clip: rect(0,0,0,0);\n      pointer-events: none;\n    }\n  }\n}\n","// Single side border-radius\n\n@mixin border-top-radius($radius) {\n  border-top-right-radius: $radius;\n   border-top-left-radius: $radius;\n}\n@mixin border-right-radius($radius) {\n  border-bottom-right-radius: $radius;\n     border-top-right-radius: $radius;\n}\n@mixin border-bottom-radius($radius) {\n  border-bottom-right-radius: $radius;\n   border-bottom-left-radius: $radius;\n}\n@mixin border-left-radius($radius) {\n  border-bottom-left-radius: $radius;\n     border-top-left-radius: $radius;\n}\n","//\n// Input groups\n// --------------------------------------------------\n\n// Base styles\n// -------------------------\n.input-group {\n  position: relative; // For dropdowns\n  display: table;\n  border-collapse: separate; // prevent input groups from inheriting border styles from table cells when placed within a table\n\n  // Undo padding and float of grid classes\n  &[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .form-control {\n    // Ensure that the input is always above the *appended* addon button for\n    // proper border colors.\n    position: relative;\n    z-index: 2;\n\n    // IE9 fubars the placeholder attribute in text inputs and the arrows on\n    // select elements in input groups. To fix it, we float the input. Details:\n    // https://github.com/twbs/bootstrap/issues/11561#issuecomment-28936855\n    float: left;\n\n    width: 100%;\n    margin-bottom: 0;\n\n    &:focus {\n      z-index: 3;\n    }\n  }\n}\n\n// Sizing options\n//\n// Remix the default form control sizing classes into new ones for easier\n// manipulation.\n\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  @extend .input-lg;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  @extend .input-sm;\n}\n\n\n// Display as table-cell\n// -------------------------\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n\n  &:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n}\n// Addon and addon wrapper for buttons\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; // Match the inputs\n}\n\n// Text input groups\n// -------------------------\n.input-group-addon {\n  padding: $padding-base-vertical $padding-base-horizontal;\n  font-size: $font-size-base;\n  font-weight: normal;\n  line-height: 1;\n  color: $input-color;\n  text-align: center;\n  background-color: $input-group-addon-bg;\n  border: 1px solid $input-group-addon-border-color;\n  border-radius: $input-border-radius;\n\n  // Sizing\n  &.input-sm {\n    padding: $padding-small-vertical $padding-small-horizontal;\n    font-size: $font-size-small;\n    border-radius: $input-border-radius-small;\n  }\n  &.input-lg {\n    padding: $padding-large-vertical $padding-large-horizontal;\n    font-size: $font-size-large;\n    border-radius: $input-border-radius-large;\n  }\n\n  // Nuke default margins from checkboxes and radios to vertically center within.\n  input[type=\"radio\"],\n  input[type=\"checkbox\"] {\n    margin-top: 0;\n  }\n}\n\n// Reset rounded corners\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  @include border-right-radius(0);\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  @include border-left-radius(0);\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n// Button input groups\n// -------------------------\n.input-group-btn {\n  position: relative;\n  // Jankily prevent input button groups from wrapping with `white-space` and\n  // `font-size` in combination with `inline-block` on buttons.\n  font-size: 0;\n  white-space: nowrap;\n\n  // Negative margin for spacing, position for bringing hovered/focused/actived\n  // element above the siblings.\n  > .btn {\n    position: relative;\n    + .btn {\n      margin-left: -1px;\n    }\n    // Bring the \"active\" button to the front\n    &:hover,\n    &:focus,\n    &:active {\n      z-index: 2;\n    }\n  }\n\n  // Negative margin to only have a 1px border between the two\n  &:first-child {\n    > .btn,\n    > .btn-group {\n      margin-right: -1px;\n    }\n  }\n  &:last-child {\n    > .btn,\n    > .btn-group {\n      z-index: 2;\n      margin-left: -1px;\n    }\n  }\n}\n","//\n// Navs\n// --------------------------------------------------\n\n\n// Base class\n// --------------------------------------------------\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0; // Override default ul/ol\n  list-style: none;\n  @include clearfix;\n\n  > li {\n    position: relative;\n    display: block;\n\n    > a {\n      position: relative;\n      display: block;\n      padding: $nav-link-padding;\n      &:hover,\n      &:focus {\n        text-decoration: none;\n        background-color: $nav-link-hover-bg;\n      }\n    }\n\n    // Disabled state sets text to gray and nukes hover/tab effects\n    &.disabled > a {\n      color: $nav-disabled-link-color;\n\n      &:hover,\n      &:focus {\n        color: $nav-disabled-link-hover-color;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: $cursor-disabled;\n      }\n    }\n  }\n\n  // Open dropdowns\n  .open > a {\n    &,\n    &:hover,\n    &:focus {\n      background-color: $nav-link-hover-bg;\n      border-color: $link-color;\n    }\n  }\n\n  // Nav dividers (deprecated with v3.0.1)\n  //\n  // This should have been removed in v3 with the dropping of `.nav-list`, but\n  // we missed it. We don't currently support this anywhere, but in the interest\n  // of maintaining backward compatibility in case you use it, it's deprecated.\n  .nav-divider {\n    @include nav-divider;\n  }\n\n  // Prevent IE8 from misplacing imgs\n  //\n  // See https://github.com/h5bp/html5-boilerplate/issues/984#issuecomment-3985989\n  > li > a > img {\n    max-width: none;\n  }\n}\n\n\n// Tabs\n// -------------------------\n\n// Give the tabs something to sit on\n.nav-tabs {\n  border-bottom: 1px solid $nav-tabs-border-color;\n  > li {\n    float: left;\n    // Make the list-items overlay the bottom border\n    margin-bottom: -1px;\n\n    // Actual tabs (as links)\n    > a {\n      margin-right: 2px;\n      line-height: $line-height-base;\n      border: 1px solid transparent;\n      border-radius: $border-radius-base $border-radius-base 0 0;\n      &:hover {\n        border-color: $nav-tabs-link-hover-border-color $nav-tabs-link-hover-border-color $nav-tabs-border-color;\n      }\n    }\n\n    // Active state, and its :hover to override normal :hover\n    &.active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $nav-tabs-active-link-hover-color;\n        background-color: $nav-tabs-active-link-hover-bg;\n        border: 1px solid $nav-tabs-active-link-hover-border-color;\n        border-bottom-color: transparent;\n        cursor: default;\n      }\n    }\n  }\n  // pulling this in mainly for less shorthand\n  &.nav-justified {\n    @extend .nav-justified;\n    @extend .nav-tabs-justified;\n  }\n}\n\n\n// Pills\n// -------------------------\n.nav-pills {\n  > li {\n    float: left;\n\n    // Links rendered as pills\n    > a {\n      border-radius: $nav-pills-border-radius;\n    }\n    + li {\n      margin-left: 2px;\n    }\n\n    // Active state\n    &.active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $nav-pills-active-link-hover-color;\n        background-color: $nav-pills-active-link-hover-bg;\n      }\n    }\n  }\n}\n\n\n// Stacked pills\n.nav-stacked {\n  > li {\n    float: none;\n    + li {\n      margin-top: 2px;\n      margin-left: 0; // no need for this gap between nav items\n    }\n  }\n}\n\n\n// Nav variations\n// --------------------------------------------------\n\n// Justified nav links\n// -------------------------\n\n.nav-justified {\n  width: 100%;\n\n  > li {\n    float: none;\n    > a {\n      text-align: center;\n      margin-bottom: 5px;\n    }\n  }\n\n  > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto;\n  }\n\n  @media (min-width: $screen-sm-min) {\n    > li {\n      display: table-cell;\n      width: 1%;\n      > a {\n        margin-bottom: 0;\n      }\n    }\n  }\n}\n\n// Move borders to anchors instead of bottom of list\n//\n// Mixin for adding on top the shared `.nav-justified` styles for our tabs\n.nav-tabs-justified {\n  border-bottom: 0;\n\n  > li > a {\n    // Override margin from .nav-tabs\n    margin-right: 0;\n    border-radius: $border-radius-base;\n  }\n\n  > .active > a,\n  > .active > a:hover,\n  > .active > a:focus {\n    border: 1px solid $nav-tabs-justified-link-border-color;\n  }\n\n  @media (min-width: $screen-sm-min) {\n    > li > a {\n      border-bottom: 1px solid $nav-tabs-justified-link-border-color;\n      border-radius: $border-radius-base $border-radius-base 0 0;\n    }\n    > .active > a,\n    > .active > a:hover,\n    > .active > a:focus {\n      border-bottom-color: $nav-tabs-justified-active-link-border-color;\n    }\n  }\n}\n\n\n// Tabbable tabs\n// -------------------------\n\n// Hide tabbable panes to start, show them when `.active`\n.tab-content {\n  > .tab-pane {\n    display: none;\n  }\n  > .active {\n    display: block;\n  }\n}\n\n\n// Dropdowns\n// -------------------------\n\n// Specific dropdowns\n.nav-tabs .dropdown-menu {\n  // make dropdown border overlap tab border\n  margin-top: -1px;\n  // Remove the top rounded corners here since there is a hard edge above the menu\n  @include border-top-radius(0);\n}\n","//\n// Navbars\n// --------------------------------------------------\n\n\n// Wrapper and base class\n//\n// Provide a static navbar from which we expand to create full-width, fixed, and\n// other navbar variations.\n\n.navbar {\n  position: relative;\n  min-height: $navbar-height; // Ensure a navbar always shows (e.g., without a .navbar-brand in collapsed mode)\n  margin-bottom: $navbar-margin-bottom;\n  border: 1px solid transparent;\n\n  // Prevent floats from breaking the navbar\n  @include clearfix;\n\n  @media (min-width: $grid-float-breakpoint) {\n    border-radius: $navbar-border-radius;\n  }\n}\n\n\n// Navbar heading\n//\n// Groups `.navbar-brand` and `.navbar-toggle` into a single component for easy\n// styling of responsive aspects.\n\n.navbar-header {\n  @include clearfix;\n\n  @media (min-width: $grid-float-breakpoint) {\n    float: left;\n  }\n}\n\n\n// Navbar collapse (body)\n//\n// Group your navbar content into this for easy collapsing and expanding across\n// various device sizes. By default, this content is collapsed when <768px, but\n// will expand past that for a horizontal display.\n//\n// To start (on mobile devices) the navbar links, forms, and buttons are stacked\n// vertically and include a `max-height` to overflow in case you have too much\n// content for the user's viewport.\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: $navbar-padding-horizontal;\n  padding-left:  $navbar-padding-horizontal;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255,255,255,.1);\n  @include clearfix;\n  -webkit-overflow-scrolling: touch;\n\n  &.in {\n    overflow-y: auto;\n  }\n\n  @media (min-width: $grid-float-breakpoint) {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n\n    &.collapse {\n      display: block !important;\n      height: auto !important;\n      padding-bottom: 0; // Override default setting\n      overflow: visible !important;\n    }\n\n    &.in {\n      overflow-y: visible;\n    }\n\n    // Undo the collapse side padding for navbars with containers to ensure\n    // alignment of right-aligned contents.\n    .navbar-fixed-top &,\n    .navbar-static-top &,\n    .navbar-fixed-bottom & {\n      padding-left: 0;\n      padding-right: 0;\n    }\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  .navbar-collapse {\n    max-height: $navbar-collapse-max-height;\n\n    @media (max-device-width: $screen-xs-min) and (orientation: landscape) {\n      max-height: 200px;\n    }\n  }\n}\n\n\n// Both navbar header and collapse\n//\n// When a container is present, change the behavior of the header and collapse.\n\n.container,\n.container-fluid {\n  > .navbar-header,\n  > .navbar-collapse {\n    margin-right: -$navbar-padding-horizontal;\n    margin-left:  -$navbar-padding-horizontal;\n\n    @media (min-width: $grid-float-breakpoint) {\n      margin-right: 0;\n      margin-left:  0;\n    }\n  }\n}\n\n\n//\n// Navbar alignment options\n//\n// Display the navbar across the entirety of the page or fixed it to the top or\n// bottom of the page.\n\n// Static top (unfixed, but 100% wide) navbar\n.navbar-static-top {\n  z-index: $zindex-navbar;\n  border-width: 0 0 1px;\n\n  @media (min-width: $grid-float-breakpoint) {\n    border-radius: 0;\n  }\n}\n\n// Fix the top/bottom navbars when screen real estate supports it\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: $zindex-navbar-fixed;\n\n  // Undo the rounded corners\n  @media (min-width: $grid-float-breakpoint) {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0; // override .navbar defaults\n  border-width: 1px 0 0;\n}\n\n\n// Brand/project name\n\n.navbar-brand {\n  float: left;\n  padding: $navbar-padding-vertical $navbar-padding-horizontal;\n  font-size: $font-size-large;\n  line-height: $line-height-computed;\n  height: $navbar-height;\n\n  &:hover,\n  &:focus {\n    text-decoration: none;\n  }\n\n  > img {\n    display: block;\n  }\n\n  @media (min-width: $grid-float-breakpoint) {\n    .navbar > .container &,\n    .navbar > .container-fluid & {\n      margin-left: -$navbar-padding-horizontal;\n    }\n  }\n}\n\n\n// Navbar toggle\n//\n// Custom button for toggling the `.navbar-collapse`, powered by the collapse\n// JavaScript plugin.\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: $navbar-padding-horizontal;\n  padding: 9px 10px;\n  @include navbar-vertical-align(34px);\n  background-color: transparent;\n  background-image: none; // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214\n  border: 1px solid transparent;\n  border-radius: $border-radius-base;\n\n  // We remove the `outline` here, but later compensate by attaching `:hover`\n  // styles to `:focus`.\n  &:focus {\n    outline: 0;\n  }\n\n  // Bars\n  .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px;\n  }\n  .icon-bar + .icon-bar {\n    margin-top: 4px;\n  }\n\n  @media (min-width: $grid-float-breakpoint) {\n    display: none;\n  }\n}\n\n\n// Navbar nav links\n//\n// Builds on top of the `.nav` components with its own modifier class to make\n// the nav the full height of the horizontal nav (above 768px).\n\n.navbar-nav {\n  margin: ($navbar-padding-vertical / 2) (-$navbar-padding-horizontal);\n\n  > li > a {\n    padding-top:    10px;\n    padding-bottom: 10px;\n    line-height: $line-height-computed;\n  }\n\n  @media (max-width: $grid-float-breakpoint-max) {\n    // Dropdowns get custom display when collapsed\n    .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none;\n      > li > a,\n      .dropdown-header {\n        padding: 5px 15px 5px 25px;\n      }\n      > li > a {\n        line-height: $line-height-computed;\n        &:hover,\n        &:focus {\n          background-image: none;\n        }\n      }\n    }\n  }\n\n  // Uncollapse the nav\n  @media (min-width: $grid-float-breakpoint) {\n    float: left;\n    margin: 0;\n\n    > li {\n      float: left;\n      > a {\n        padding-top:    $navbar-padding-vertical;\n        padding-bottom: $navbar-padding-vertical;\n      }\n    }\n  }\n}\n\n\n// Navbar form\n//\n// Extension of the `.form-inline` with some extra flavor for optimum display in\n// our navbars.\n\n.navbar-form {\n  margin-left: -$navbar-padding-horizontal;\n  margin-right: -$navbar-padding-horizontal;\n  padding: 10px $navbar-padding-horizontal;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  $shadow: inset 0 1px 0 rgba(255,255,255,.1), 0 1px 0 rgba(255,255,255,.1);\n  @include box-shadow($shadow);\n\n  // Mixin behavior for optimum display\n  @include form-inline;\n\n  .form-group {\n    @media (max-width: $grid-float-breakpoint-max) {\n      margin-bottom: 5px;\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n  }\n\n  // Vertically center in expanded, horizontal navbar\n  @include navbar-vertical-align($input-height-base);\n\n  // Undo 100% width for pull classes\n  @media (min-width: $grid-float-breakpoint) {\n    width: auto;\n    border: 0;\n    margin-left: 0;\n    margin-right: 0;\n    padding-top: 0;\n    padding-bottom: 0;\n    @include box-shadow(none);\n  }\n}\n\n\n// Dropdown menus\n\n// Menu position and menu carets\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  @include border-top-radius(0);\n}\n// Menu position and menu caret support for dropups via extra dropup class\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  @include border-top-radius($navbar-border-radius);\n  @include border-bottom-radius(0);\n}\n\n\n// Buttons in navbars\n//\n// Vertically center a button within a navbar (when *not* in a form).\n\n.navbar-btn {\n  @include navbar-vertical-align($input-height-base);\n\n  &.btn-sm {\n    @include navbar-vertical-align($input-height-small);\n  }\n  &.btn-xs {\n    @include navbar-vertical-align(22);\n  }\n}\n\n\n// Text in navbars\n//\n// Add a class to make any element properly align itself vertically within the navbars.\n\n.navbar-text {\n  @include navbar-vertical-align($line-height-computed);\n\n  @media (min-width: $grid-float-breakpoint) {\n    float: left;\n    margin-left: $navbar-padding-horizontal;\n    margin-right: $navbar-padding-horizontal;\n  }\n}\n\n\n// Component alignment\n//\n// Repurpose the pull utilities as their own navbar utilities to avoid specificity\n// issues with parents and chaining. Only do this when the navbar is uncollapsed\n// though so that navbar contents properly stack and align in mobile.\n//\n// Declared after the navbar components to ensure more specificity on the margins.\n\n@media (min-width: $grid-float-breakpoint) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n  margin-right: -$navbar-padding-horizontal;\n\n    ~ .navbar-right {\n      margin-right: 0;\n    }\n  }\n}\n\n\n// Alternate navbars\n// --------------------------------------------------\n\n// Default navbar\n.navbar-default {\n  background-color: $navbar-default-bg;\n  border-color: $navbar-default-border;\n\n  .navbar-brand {\n    color: $navbar-default-brand-color;\n    &:hover,\n    &:focus {\n      color: $navbar-default-brand-hover-color;\n      background-color: $navbar-default-brand-hover-bg;\n    }\n  }\n\n  .navbar-text {\n    color: $navbar-default-color;\n  }\n\n  .navbar-nav {\n    > li > a {\n      color: $navbar-default-link-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-hover-color;\n        background-color: $navbar-default-link-hover-bg;\n      }\n    }\n    > .active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-active-color;\n        background-color: $navbar-default-link-active-bg;\n      }\n    }\n    > .disabled > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-disabled-color;\n        background-color: $navbar-default-link-disabled-bg;\n      }\n    }\n  }\n\n  .navbar-toggle {\n    border-color: $navbar-default-toggle-border-color;\n    &:hover,\n    &:focus {\n      background-color: $navbar-default-toggle-hover-bg;\n    }\n    .icon-bar {\n      background-color: $navbar-default-toggle-icon-bar-bg;\n    }\n  }\n\n  .navbar-collapse,\n  .navbar-form {\n    border-color: $navbar-default-border;\n  }\n\n  // Dropdown menu items\n  .navbar-nav {\n    // Remove background color from open dropdown\n    > .open > a {\n      &,\n      &:hover,\n      &:focus {\n        background-color: $navbar-default-link-active-bg;\n        color: $navbar-default-link-active-color;\n      }\n    }\n\n    @media (max-width: $grid-float-breakpoint-max) {\n      // Dropdowns get custom display when collapsed\n      .open .dropdown-menu {\n        > li > a {\n          color: $navbar-default-link-color;\n          &:hover,\n          &:focus {\n            color: $navbar-default-link-hover-color;\n            background-color: $navbar-default-link-hover-bg;\n          }\n        }\n        > .active > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-default-link-active-color;\n            background-color: $navbar-default-link-active-bg;\n          }\n        }\n        > .disabled > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-default-link-disabled-color;\n            background-color: $navbar-default-link-disabled-bg;\n          }\n        }\n      }\n    }\n  }\n\n\n  // Links in navbars\n  //\n  // Add a class to ensure links outside the navbar nav are colored correctly.\n\n  .navbar-link {\n    color: $navbar-default-link-color;\n    &:hover {\n      color: $navbar-default-link-hover-color;\n    }\n  }\n\n  .btn-link {\n    color: $navbar-default-link-color;\n    &:hover,\n    &:focus {\n      color: $navbar-default-link-hover-color;\n    }\n    &[disabled],\n    fieldset[disabled] & {\n      &:hover,\n      &:focus {\n        color: $navbar-default-link-disabled-color;\n      }\n    }\n  }\n}\n\n// Inverse navbar\n\n.navbar-inverse {\n  background-color: $navbar-inverse-bg;\n  border-color: $navbar-inverse-border;\n\n  .navbar-brand {\n    color: $navbar-inverse-brand-color;\n    &:hover,\n    &:focus {\n      color: $navbar-inverse-brand-hover-color;\n      background-color: $navbar-inverse-brand-hover-bg;\n    }\n  }\n\n  .navbar-text {\n    color: $navbar-inverse-color;\n  }\n\n  .navbar-nav {\n    > li > a {\n      color: $navbar-inverse-link-color;\n\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-hover-color;\n        background-color: $navbar-inverse-link-hover-bg;\n      }\n    }\n    > .active > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-active-color;\n        background-color: $navbar-inverse-link-active-bg;\n      }\n    }\n    > .disabled > a {\n      &,\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-disabled-color;\n        background-color: $navbar-inverse-link-disabled-bg;\n      }\n    }\n  }\n\n  // Darken the responsive nav toggle\n  .navbar-toggle {\n    border-color: $navbar-inverse-toggle-border-color;\n    &:hover,\n    &:focus {\n      background-color: $navbar-inverse-toggle-hover-bg;\n    }\n    .icon-bar {\n      background-color: $navbar-inverse-toggle-icon-bar-bg;\n    }\n  }\n\n  .navbar-collapse,\n  .navbar-form {\n    border-color: darken($navbar-inverse-bg, 7%);\n  }\n\n  // Dropdowns\n  .navbar-nav {\n    > .open > a {\n      &,\n      &:hover,\n      &:focus {\n        background-color: $navbar-inverse-link-active-bg;\n        color: $navbar-inverse-link-active-color;\n      }\n    }\n\n    @media (max-width: $grid-float-breakpoint-max) {\n      // Dropdowns get custom display\n      .open .dropdown-menu {\n        > .dropdown-header {\n          border-color: $navbar-inverse-border;\n        }\n        .divider {\n          background-color: $navbar-inverse-border;\n        }\n        > li > a {\n          color: $navbar-inverse-link-color;\n          &:hover,\n          &:focus {\n            color: $navbar-inverse-link-hover-color;\n            background-color: $navbar-inverse-link-hover-bg;\n          }\n        }\n        > .active > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-inverse-link-active-color;\n            background-color: $navbar-inverse-link-active-bg;\n          }\n        }\n        > .disabled > a {\n          &,\n          &:hover,\n          &:focus {\n            color: $navbar-inverse-link-disabled-color;\n            background-color: $navbar-inverse-link-disabled-bg;\n          }\n        }\n      }\n    }\n  }\n\n  .navbar-link {\n    color: $navbar-inverse-link-color;\n    &:hover {\n      color: $navbar-inverse-link-hover-color;\n    }\n  }\n\n  .btn-link {\n    color: $navbar-inverse-link-color;\n    &:hover,\n    &:focus {\n      color: $navbar-inverse-link-hover-color;\n    }\n    &[disabled],\n    fieldset[disabled] & {\n      &:hover,\n      &:focus {\n        color: $navbar-inverse-link-disabled-color;\n      }\n    }\n  }\n}\n","// Navbar vertical align\n//\n// Vertically center elements in the navbar.\n// Example: an element has a height of 30px, so write out `.navbar-vertical-align(30px);` to calculate the appropriate top margin.\n\n@mixin navbar-vertical-align($element-height) {\n  margin-top: (($navbar-height - $element-height) / 2);\n  margin-bottom: (($navbar-height - $element-height) / 2);\n}\n","//\n// Breadcrumbs\n// --------------------------------------------------\n\n\n.breadcrumb {\n  padding: $breadcrumb-padding-vertical $breadcrumb-padding-horizontal;\n  margin-bottom: $line-height-computed;\n  list-style: none;\n  background-color: $breadcrumb-bg;\n  border-radius: $border-radius-base;\n\n  > li {\n    display: inline-block;\n\n    + li:before {\n      // [converter] Workaround for https://github.com/sass/libsass/issues/1115\n      $nbsp: \"\\00a0\";\n      content: \"#{$breadcrumb-separator}#{$nbsp}\"; // Unicode space added since inline-block means non-collapsing white-space\n      padding: 0 5px;\n      color: $breadcrumb-color;\n    }\n  }\n\n  > .active {\n    color: $breadcrumb-active-color;\n  }\n}\n","//\n// Pagination (multiple pages)\n// --------------------------------------------------\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: $line-height-computed 0;\n  border-radius: $border-radius-base;\n\n  > li {\n    display: inline; // Remove list-style and block-level defaults\n    > a,\n    > span {\n      position: relative;\n      float: left; // Collapse white-space\n      padding: $padding-base-vertical $padding-base-horizontal;\n      line-height: $line-height-base;\n      text-decoration: none;\n      color: $pagination-color;\n      background-color: $pagination-bg;\n      border: 1px solid $pagination-border;\n      margin-left: -1px;\n    }\n    &:first-child {\n      > a,\n      > span {\n        margin-left: 0;\n        @include border-left-radius($border-radius-base);\n      }\n    }\n    &:last-child {\n      > a,\n      > span {\n        @include border-right-radius($border-radius-base);\n      }\n    }\n  }\n\n  > li > a,\n  > li > span {\n    &:hover,\n    &:focus {\n      z-index: 2;\n      color: $pagination-hover-color;\n      background-color: $pagination-hover-bg;\n      border-color: $pagination-hover-border;\n    }\n  }\n\n  > .active > a,\n  > .active > span {\n    &,\n    &:hover,\n    &:focus {\n      z-index: 3;\n      color: $pagination-active-color;\n      background-color: $pagination-active-bg;\n      border-color: $pagination-active-border;\n      cursor: default;\n    }\n  }\n\n  > .disabled {\n    > span,\n    > span:hover,\n    > span:focus,\n    > a,\n    > a:hover,\n    > a:focus {\n      color: $pagination-disabled-color;\n      background-color: $pagination-disabled-bg;\n      border-color: $pagination-disabled-border;\n      cursor: $cursor-disabled;\n    }\n  }\n}\n\n// Sizing\n// --------------------------------------------------\n\n// Large\n.pagination-lg {\n  @include pagination-size($padding-large-vertical, $padding-large-horizontal, $font-size-large, $line-height-large, $border-radius-large);\n}\n\n// Small\n.pagination-sm {\n  @include pagination-size($padding-small-vertical, $padding-small-horizontal, $font-size-small, $line-height-small, $border-radius-small);\n}\n","// Pagination\n\n@mixin pagination-size($padding-vertical, $padding-horizontal, $font-size, $line-height, $border-radius) {\n  > li {\n    > a,\n    > span {\n      padding: $padding-vertical $padding-horizontal;\n      font-size: $font-size;\n      line-height: $line-height;\n    }\n    &:first-child {\n      > a,\n      > span {\n        @include border-left-radius($border-radius);\n      }\n    }\n    &:last-child {\n      > a,\n      > span {\n        @include border-right-radius($border-radius);\n      }\n    }\n  }\n}\n","//\n// Pager pagination\n// --------------------------------------------------\n\n\n.pager {\n  padding-left: 0;\n  margin: $line-height-computed 0;\n  list-style: none;\n  text-align: center;\n  @include clearfix;\n  li {\n    display: inline;\n    > a,\n    > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: $pager-bg;\n      border: 1px solid $pager-border;\n      border-radius: $pager-border-radius;\n    }\n\n    > a:hover,\n    > a:focus {\n      text-decoration: none;\n      background-color: $pager-hover-bg;\n    }\n  }\n\n  .next {\n    > a,\n    > span {\n      float: right;\n    }\n  }\n\n  .previous {\n    > a,\n    > span {\n      float: left;\n    }\n  }\n\n  .disabled {\n    > a,\n    > a:hover,\n    > a:focus,\n    > span {\n      color: $pager-disabled-color;\n      background-color: $pager-bg;\n      cursor: $cursor-disabled;\n    }\n  }\n}\n","//\n// Labels\n// --------------------------------------------------\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: $label-color;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n\n  // [converter] extracted a& to a.label\n\n  // Empty labels collapse automatically (not available in IE8)\n  &:empty {\n    display: none;\n  }\n\n  // Quick fix for labels in buttons\n  .btn & {\n    position: relative;\n    top: -1px;\n  }\n}\n\n// Add hover effects, but only for links\na.label {\n  &:hover,\n  &:focus {\n    color: $label-link-hover-color;\n    text-decoration: none;\n    cursor: pointer;\n  }\n}\n\n// Colors\n// Contextual variations (linked labels get darker on :hover)\n\n.label-default {\n  @include label-variant($label-default-bg);\n}\n\n.label-primary {\n  @include label-variant($label-primary-bg);\n}\n\n.label-success {\n  @include label-variant($label-success-bg);\n}\n\n.label-info {\n  @include label-variant($label-info-bg);\n}\n\n.label-warning {\n  @include label-variant($label-warning-bg);\n}\n\n.label-danger {\n  @include label-variant($label-danger-bg);\n}\n","// Labels\n\n@mixin label-variant($color) {\n  background-color: $color;\n\n  &[href] {\n    &:hover,\n    &:focus {\n      background-color: darken($color, 10%);\n    }\n  }\n}\n","//\n// Badges\n// --------------------------------------------------\n\n\n// Base class\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: $font-size-small;\n  font-weight: $badge-font-weight;\n  color: $badge-color;\n  line-height: $badge-line-height;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: $badge-bg;\n  border-radius: $badge-border-radius;\n\n  // Empty badges collapse automatically (not available in IE8)\n  &:empty {\n    display: none;\n  }\n\n  // Quick fix for badges in buttons\n  .btn & {\n    position: relative;\n    top: -1px;\n  }\n\n  .btn-xs &,\n  .btn-group-xs > .btn & {\n    top: 0;\n    padding: 1px 5px;\n  }\n\n  // [converter] extracted a& to a.badge\n\n  // Account for badges in navs\n  .list-group-item.active > &,\n  .nav-pills > .active > a > & {\n    color: $badge-active-color;\n    background-color: $badge-active-bg;\n  }\n\n  .list-group-item > & {\n    float: right;\n  }\n\n  .list-group-item > & + & {\n    margin-right: 5px;\n  }\n\n  .nav-pills > li > a > & {\n    margin-left: 3px;\n  }\n}\n\n// Hover state, but only for links\na.badge {\n  &:hover,\n  &:focus {\n    color: $badge-link-hover-color;\n    text-decoration: none;\n    cursor: pointer;\n  }\n}\n","//\n// Jumbotron\n// --------------------------------------------------\n\n\n.jumbotron {\n  padding-top:    $jumbotron-padding;\n  padding-bottom: $jumbotron-padding;\n  margin-bottom: $jumbotron-padding;\n  color: $jumbotron-color;\n  background-color: $jumbotron-bg;\n\n  h1,\n  .h1 {\n    color: $jumbotron-heading-color;\n  }\n\n  p {\n    margin-bottom: ($jumbotron-padding / 2);\n    font-size: $jumbotron-font-size;\n    font-weight: 200;\n  }\n\n  > hr {\n    border-top-color: darken($jumbotron-bg, 10%);\n  }\n\n  .container &,\n  .container-fluid & {\n    border-radius: $border-radius-large; // Only round corners at higher resolutions if contained in a container\n    padding-left:  ($grid-gutter-width / 2);\n    padding-right: ($grid-gutter-width / 2);\n  }\n\n  .container {\n    max-width: 100%;\n  }\n\n  @media screen and (min-width: $screen-sm-min) {\n    padding-top:    ($jumbotron-padding * 1.6);\n    padding-bottom: ($jumbotron-padding * 1.6);\n\n    .container &,\n    .container-fluid & {\n      padding-left:  ($jumbotron-padding * 2);\n      padding-right: ($jumbotron-padding * 2);\n    }\n\n    h1,\n    .h1 {\n      font-size: $jumbotron-heading-font-size;\n    }\n  }\n}\n","//\n// Thumbnails\n// --------------------------------------------------\n\n\n// Mixin and adjust the regular image class\n.thumbnail {\n  display: block;\n  padding: $thumbnail-padding;\n  margin-bottom: $line-height-computed;\n  line-height: $line-height-base;\n  background-color: $thumbnail-bg;\n  border: 1px solid $thumbnail-border;\n  border-radius: $thumbnail-border-radius;\n  @include transition(border .2s ease-in-out);\n\n  > img,\n  a > img {\n    @include img-responsive;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  // [converter] extracted a&:hover, a&:focus, a&.active to a.thumbnail:hover, a.thumbnail:focus, a.thumbnail.active\n\n  // Image captions\n  .caption {\n    padding: $thumbnail-caption-padding;\n    color: $thumbnail-caption-color;\n  }\n}\n\n// Add a hover state for linked versions only\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: $link-color;\n}\n","//\n// Alerts\n// --------------------------------------------------\n\n\n// Base styles\n// -------------------------\n\n.alert {\n  padding: $alert-padding;\n  margin-bottom: $line-height-computed;\n  border: 1px solid transparent;\n  border-radius: $alert-border-radius;\n\n  // Headings for larger alerts\n  h4 {\n    margin-top: 0;\n    // Specified for the h4 to prevent conflicts of changing $headings-color\n    color: inherit;\n  }\n\n  // Provide class for links that match alerts\n  .alert-link {\n    font-weight: $alert-link-font-weight;\n  }\n\n  // Improve alignment and spacing of inner content\n  > p,\n  > ul {\n    margin-bottom: 0;\n  }\n\n  > p + p {\n    margin-top: 5px;\n  }\n}\n\n// Dismissible alerts\n//\n// Expand the right padding and account for the close button's positioning.\n\n.alert-dismissable, // The misspelled .alert-dismissable was deprecated in 3.2.0.\n.alert-dismissible {\n  padding-right: ($alert-padding + 20);\n\n  // Adjust close link position\n  .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit;\n  }\n}\n\n// Alternate styles\n//\n// Generate contextual modifier classes for colorizing the alert.\n\n.alert-success {\n  @include alert-variant($alert-success-bg, $alert-success-border, $alert-success-text);\n}\n\n.alert-info {\n  @include alert-variant($alert-info-bg, $alert-info-border, $alert-info-text);\n}\n\n.alert-warning {\n  @include alert-variant($alert-warning-bg, $alert-warning-border, $alert-warning-text);\n}\n\n.alert-danger {\n  @include alert-variant($alert-danger-bg, $alert-danger-border, $alert-danger-text);\n}\n","// Alerts\n\n@mixin alert-variant($background, $border, $text-color) {\n  background-color: $background;\n  border-color: $border;\n  color: $text-color;\n\n  hr {\n    border-top-color: darken($border, 5%);\n  }\n  .alert-link {\n    color: darken($text-color, 10%);\n  }\n}\n","//\n// Progress bars\n// --------------------------------------------------\n\n\n// Bar animations\n// -------------------------\n\n// WebKit\n@-webkit-keyframes progress-bar-stripes {\n  from  { background-position: 40px 0; }\n  to    { background-position: 0 0; }\n}\n\n// Spec and IE10+\n@keyframes progress-bar-stripes {\n  from  { background-position: 40px 0; }\n  to    { background-position: 0 0; }\n}\n\n\n// Bar itself\n// -------------------------\n\n// Outer container\n.progress {\n  overflow: hidden;\n  height: $line-height-computed;\n  margin-bottom: $line-height-computed;\n  background-color: $progress-bg;\n  border-radius: $progress-border-radius;\n  @include box-shadow(inset 0 1px 2px rgba(0,0,0,.1));\n}\n\n// Bar of progress\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: $font-size-small;\n  line-height: $line-height-computed;\n  color: $progress-bar-color;\n  text-align: center;\n  background-color: $progress-bar-bg;\n  @include box-shadow(inset 0 -1px 0 rgba(0,0,0,.15));\n  @include transition(width .6s ease);\n}\n\n// Striped bars\n//\n// `.progress-striped .progress-bar` is deprecated as of v3.2.0 in favor of the\n// `.progress-bar-striped` class, which you just add to an existing\n// `.progress-bar`.\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  @include gradient-striped;\n  background-size: 40px 40px;\n}\n\n// Call animation for the active one\n//\n// `.progress.active .progress-bar` is deprecated as of v3.2.0 in favor of the\n// `.progress-bar.active` approach.\n.progress.active .progress-bar,\n.progress-bar.active {\n  @include animation(progress-bar-stripes 2s linear infinite);\n}\n\n\n// Variations\n// -------------------------\n\n.progress-bar-success {\n  @include progress-bar-variant($progress-bar-success-bg);\n}\n\n.progress-bar-info {\n  @include progress-bar-variant($progress-bar-info-bg);\n}\n\n.progress-bar-warning {\n  @include progress-bar-variant($progress-bar-warning-bg);\n}\n\n.progress-bar-danger {\n  @include progress-bar-variant($progress-bar-danger-bg);\n}\n","// Gradients\n\n\n\n// Horizontal gradient, from left to right\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n// Color stops are not available in IE9 and below.\n@mixin gradient-horizontal($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {\n  background-image: -webkit-linear-gradient(left, $start-color $start-percent, $end-color $end-percent); // Safari 5.1-6, Chrome 10+\n  background-image: -o-linear-gradient(left, $start-color $start-percent, $end-color $end-percent); // Opera 12\n  background-image: linear-gradient(to right, $start-color $start-percent, $end-color $end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=1); // IE9 and down\n}\n\n// Vertical gradient, from top to bottom\n//\n// Creates two color stops, start and end, by specifying a color and position for each color stop.\n// Color stops are not available in IE9 and below.\n@mixin gradient-vertical($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%) {\n  background-image: -webkit-linear-gradient(top, $start-color $start-percent, $end-color $end-percent);  // Safari 5.1-6, Chrome 10+\n  background-image: -o-linear-gradient(top, $start-color $start-percent, $end-color $end-percent);  // Opera 12\n  background-image: linear-gradient(to bottom, $start-color $start-percent, $end-color $end-percent); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n  background-repeat: repeat-x;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=0); // IE9 and down\n}\n\n@mixin gradient-directional($start-color: #555, $end-color: #333, $deg: 45deg) {\n  background-repeat: repeat-x;\n  background-image: -webkit-linear-gradient($deg, $start-color, $end-color); // Safari 5.1-6, Chrome 10+\n  background-image: -o-linear-gradient($deg, $start-color, $end-color); // Opera 12\n  background-image: linear-gradient($deg, $start-color, $end-color); // Standard, IE10, Firefox 16+, Opera 12.10+, Safari 7+, Chrome 26+\n}\n@mixin gradient-horizontal-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {\n  background-image: -webkit-linear-gradient(left, $start-color, $mid-color $color-stop, $end-color);\n  background-image: -o-linear-gradient(left, $start-color, $mid-color $color-stop, $end-color);\n  background-image: linear-gradient(to right, $start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=1); // IE9 and down, gets no color-stop at all for proper fallback\n}\n@mixin gradient-vertical-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f) {\n  background-image: -webkit-linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-image: -o-linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-image: linear-gradient($start-color, $mid-color $color-stop, $end-color);\n  background-repeat: no-repeat;\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#{ie-hex-str($start-color)}', endColorstr='#{ie-hex-str($end-color)}', GradientType=0); // IE9 and down, gets no color-stop at all for proper fallback\n}\n@mixin gradient-radial($inner-color: #555, $outer-color: #333) {\n  background-image: -webkit-radial-gradient(circle, $inner-color, $outer-color);\n  background-image: radial-gradient(circle, $inner-color, $outer-color);\n  background-repeat: no-repeat;\n}\n@mixin gradient-striped($color: rgba(255,255,255,.15), $angle: 45deg) {\n  background-image: -webkit-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n  background-image: linear-gradient($angle, $color 25%, transparent 25%, transparent 50%, $color 50%, $color 75%, transparent 75%, transparent);\n}\n","// Progress bars\n\n@mixin progress-bar-variant($color) {\n  background-color: $color;\n\n  // Deprecated parent class requirement as of v3.2.0\n  .progress-striped & {\n    @include gradient-striped;\n  }\n}\n",".media {\n  // Proper spacing between instances of .media\n  margin-top: 15px;\n\n  &:first-child {\n    margin-top: 0;\n  }\n}\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden;\n}\n\n.media-body {\n  width: 10000px;\n}\n\n.media-object {\n  display: block;\n\n  // Fix collapse in webkit from max-width: 100% and display: table-cell.\n  &.img-thumbnail {\n    max-width: none;\n  }\n}\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n\n.media-middle {\n  vertical-align: middle;\n}\n\n.media-bottom {\n  vertical-align: bottom;\n}\n\n// Reset margins on headings for tighter default spacing\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n// Media list variation\n//\n// Undo default ul/ol styles\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n","//\n// List groups\n// --------------------------------------------------\n\n\n// Base class\n//\n// Easily usable on <ul>, <ol>, or <div>.\n\n.list-group {\n  // No need to set list-style: none; since .list-group-item is block level\n  margin-bottom: 20px;\n  padding-left: 0; // reset padding because ul and ol\n}\n\n\n// Individual list items\n//\n// Use on `li`s or `div`s within the `.list-group` parent.\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  // Place the border on the list items and negative margin up for better styling\n  margin-bottom: -1px;\n  background-color: $list-group-bg;\n  border: 1px solid $list-group-border;\n\n  // Round the first and last items\n  &:first-child {\n    @include border-top-radius($list-group-border-radius);\n  }\n  &:last-child {\n    margin-bottom: 0;\n    @include border-bottom-radius($list-group-border-radius);\n  }\n}\n\n\n// Interactive list items\n//\n// Use anchor or button elements instead of `li`s or `div`s to create interactive items.\n// Includes an extra `.active` modifier class for showing selected items.\n\na.list-group-item,\nbutton.list-group-item {\n  color: $list-group-link-color;\n\n  .list-group-item-heading {\n    color: $list-group-link-heading-color;\n  }\n\n  // Hover state\n  &:hover,\n  &:focus {\n    text-decoration: none;\n    color: $list-group-link-hover-color;\n    background-color: $list-group-hover-bg;\n  }\n}\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n\n.list-group-item {\n  // Disabled state\n  &.disabled,\n  &.disabled:hover,\n  &.disabled:focus {\n    background-color: $list-group-disabled-bg;\n    color: $list-group-disabled-color;\n    cursor: $cursor-disabled;\n\n    // Force color to inherit for custom content\n    .list-group-item-heading {\n      color: inherit;\n    }\n    .list-group-item-text {\n      color: $list-group-disabled-text-color;\n    }\n  }\n\n  // Active class on item itself, not parent\n  &.active,\n  &.active:hover,\n  &.active:focus {\n    z-index: 2; // Place active items above their siblings for proper border styling\n    color: $list-group-active-color;\n    background-color: $list-group-active-bg;\n    border-color: $list-group-active-border;\n\n    // Force color to inherit for custom content\n    .list-group-item-heading,\n    .list-group-item-heading > small,\n    .list-group-item-heading > .small {\n      color: inherit;\n    }\n    .list-group-item-text {\n      color: $list-group-active-text-color;\n    }\n  }\n}\n\n\n// Contextual variants\n//\n// Add modifier classes to change text and background color on individual items.\n// Organizationally, this must come after the `:hover` states.\n\n@include list-group-item-variant(success, $state-success-bg, $state-success-text);\n@include list-group-item-variant(info, $state-info-bg, $state-info-text);\n@include list-group-item-variant(warning, $state-warning-bg, $state-warning-text);\n@include list-group-item-variant(danger, $state-danger-bg, $state-danger-text);\n\n\n// Custom content options\n//\n// Extra classes for creating well-formatted content within `.list-group-item`s.\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n","// List Groups\n\n@mixin list-group-item-variant($state, $background, $color) {\n  .list-group-item-#{$state} {\n    color: $color;\n    background-color: $background;\n\n    // [converter] extracted a&, button& to a.list-group-item-#{$state}, button.list-group-item-#{$state}\n  }\n\n  a.list-group-item-#{$state},\n  button.list-group-item-#{$state} {\n    color: $color;\n\n    .list-group-item-heading {\n      color: inherit;\n    }\n\n    &:hover,\n    &:focus {\n      color: $color;\n      background-color: darken($background, 5%);\n    }\n    &.active,\n    &.active:hover,\n    &.active:focus {\n      color: #fff;\n      background-color: $color;\n      border-color: $color;\n    }\n  }\n}\n","//\n// Panels\n// --------------------------------------------------\n\n\n// Base class\n.panel {\n  margin-bottom: $line-height-computed;\n  background-color: $panel-bg;\n  border: 1px solid transparent;\n  border-radius: $panel-border-radius;\n  @include box-shadow(0 1px 1px rgba(0,0,0,.05));\n}\n\n// Panel contents\n.panel-body {\n  padding: $panel-body-padding;\n  @include clearfix;\n}\n\n// Optional heading\n.panel-heading {\n  padding: $panel-heading-padding;\n  border-bottom: 1px solid transparent;\n  @include border-top-radius(($panel-border-radius - 1));\n\n  > .dropdown .dropdown-toggle {\n    color: inherit;\n  }\n}\n\n// Within heading, strip any `h*` tag of its default margins for spacing.\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: ceil(($font-size-base * 1.125));\n  color: inherit;\n\n  > a,\n  > small,\n  > .small,\n  > small > a,\n  > .small > a {\n    color: inherit;\n  }\n}\n\n// Optional footer (stays gray in every modifier class)\n.panel-footer {\n  padding: $panel-footer-padding;\n  background-color: $panel-footer-bg;\n  border-top: 1px solid $panel-inner-border;\n  @include border-bottom-radius(($panel-border-radius - 1));\n}\n\n\n// List groups in panels\n//\n// By default, space out list group content from panel headings to account for\n// any kind of custom content between the two.\n\n.panel {\n  > .list-group,\n  > .panel-collapse > .list-group {\n    margin-bottom: 0;\n\n    .list-group-item {\n      border-width: 1px 0;\n      border-radius: 0;\n    }\n\n    // Add border top radius for first one\n    &:first-child {\n      .list-group-item:first-child {\n        border-top: 0;\n        @include border-top-radius(($panel-border-radius - 1));\n      }\n    }\n\n    // Add border bottom radius for last one\n    &:last-child {\n      .list-group-item:last-child {\n        border-bottom: 0;\n        @include border-bottom-radius(($panel-border-radius - 1));\n      }\n    }\n  }\n  > .panel-heading + .panel-collapse > .list-group {\n    .list-group-item:first-child {\n      @include border-top-radius(0);\n    }\n  }\n}\n// Collapse space between when there's no additional content.\n.panel-heading + .list-group {\n  .list-group-item:first-child {\n    border-top-width: 0;\n  }\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n\n// Tables in panels\n//\n// Place a non-bordered `.table` within a panel (not within a `.panel-body`) and\n// watch it go full width.\n\n.panel {\n  > .table,\n  > .table-responsive > .table,\n  > .panel-collapse > .table {\n    margin-bottom: 0;\n\n    caption {\n      padding-left: $panel-body-padding;\n      padding-right: $panel-body-padding;\n    }\n  }\n  // Add border top radius for first one\n  > .table:first-child,\n  > .table-responsive:first-child > .table:first-child {\n    @include border-top-radius(($panel-border-radius - 1));\n\n    > thead:first-child,\n    > tbody:first-child {\n      > tr:first-child {\n        border-top-left-radius: ($panel-border-radius - 1);\n        border-top-right-radius: ($panel-border-radius - 1);\n\n        td:first-child,\n        th:first-child {\n          border-top-left-radius: ($panel-border-radius - 1);\n        }\n        td:last-child,\n        th:last-child {\n          border-top-right-radius: ($panel-border-radius - 1);\n        }\n      }\n    }\n  }\n  // Add border bottom radius for last one\n  > .table:last-child,\n  > .table-responsive:last-child > .table:last-child {\n    @include border-bottom-radius(($panel-border-radius - 1));\n\n    > tbody:last-child,\n    > tfoot:last-child {\n      > tr:last-child {\n        border-bottom-left-radius: ($panel-border-radius - 1);\n        border-bottom-right-radius: ($panel-border-radius - 1);\n\n        td:first-child,\n        th:first-child {\n          border-bottom-left-radius: ($panel-border-radius - 1);\n        }\n        td:last-child,\n        th:last-child {\n          border-bottom-right-radius: ($panel-border-radius - 1);\n        }\n      }\n    }\n  }\n  > .panel-body + .table,\n  > .panel-body + .table-responsive,\n  > .table + .panel-body,\n  > .table-responsive + .panel-body {\n    border-top: 1px solid $table-border-color;\n  }\n  > .table > tbody:first-child > tr:first-child th,\n  > .table > tbody:first-child > tr:first-child td {\n    border-top: 0;\n  }\n  > .table-bordered,\n  > .table-responsive > .table-bordered {\n    border: 0;\n    > thead,\n    > tbody,\n    > tfoot {\n      > tr {\n        > th:first-child,\n        > td:first-child {\n          border-left: 0;\n        }\n        > th:last-child,\n        > td:last-child {\n          border-right: 0;\n        }\n      }\n    }\n    > thead,\n    > tbody {\n      > tr:first-child {\n        > td,\n        > th {\n          border-bottom: 0;\n        }\n      }\n    }\n    > tbody,\n    > tfoot {\n      > tr:last-child {\n        > td,\n        > th {\n          border-bottom: 0;\n        }\n      }\n    }\n  }\n  > .table-responsive {\n    border: 0;\n    margin-bottom: 0;\n  }\n}\n\n\n// Collapsible panels (aka, accordion)\n//\n// Wrap a series of panels in `.panel-group` to turn them into an accordion with\n// the help of our collapse JavaScript plugin.\n\n.panel-group {\n  margin-bottom: $line-height-computed;\n\n  // Tighten up margin so it's only between panels\n  .panel {\n    margin-bottom: 0;\n    border-radius: $panel-border-radius;\n\n    + .panel {\n      margin-top: 5px;\n    }\n  }\n\n  .panel-heading {\n    border-bottom: 0;\n\n    + .panel-collapse > .panel-body,\n    + .panel-collapse > .list-group {\n      border-top: 1px solid $panel-inner-border;\n    }\n  }\n\n  .panel-footer {\n    border-top: 0;\n    + .panel-collapse .panel-body {\n      border-bottom: 1px solid $panel-inner-border;\n    }\n  }\n}\n\n\n// Contextual variations\n.panel-default {\n  @include panel-variant($panel-default-border, $panel-default-text, $panel-default-heading-bg, $panel-default-border);\n}\n.panel-primary {\n  @include panel-variant($panel-primary-border, $panel-primary-text, $panel-primary-heading-bg, $panel-primary-border);\n}\n.panel-success {\n  @include panel-variant($panel-success-border, $panel-success-text, $panel-success-heading-bg, $panel-success-border);\n}\n.panel-info {\n  @include panel-variant($panel-info-border, $panel-info-text, $panel-info-heading-bg, $panel-info-border);\n}\n.panel-warning {\n  @include panel-variant($panel-warning-border, $panel-warning-text, $panel-warning-heading-bg, $panel-warning-border);\n}\n.panel-danger {\n  @include panel-variant($panel-danger-border, $panel-danger-text, $panel-danger-heading-bg, $panel-danger-border);\n}\n","// Panels\n\n@mixin panel-variant($border, $heading-text-color, $heading-bg-color, $heading-border) {\n  border-color: $border;\n\n  & > .panel-heading {\n    color: $heading-text-color;\n    background-color: $heading-bg-color;\n    border-color: $heading-border;\n\n    + .panel-collapse > .panel-body {\n      border-top-color: $border;\n    }\n    .badge {\n      color: $heading-bg-color;\n      background-color: $heading-text-color;\n    }\n  }\n  & > .panel-footer {\n    + .panel-collapse > .panel-body {\n      border-bottom-color: $border;\n    }\n  }\n}\n","// Embeds responsive\n//\n// Credit: Nicolas Gallagher and SUIT CSS.\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n\n  .embed-responsive-item,\n  iframe,\n  embed,\n  object,\n  video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0;\n  }\n}\n\n// Modifier class for 16:9 aspect ratio\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n// Modifier class for 4:3 aspect ratio\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n","//\n// Wells\n// --------------------------------------------------\n\n\n// Base class\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: $well-bg;\n  border: 1px solid $well-border;\n  border-radius: $border-radius-base;\n  @include box-shadow(inset 0 1px 1px rgba(0,0,0,.05));\n  blockquote {\n    border-color: #ddd;\n    border-color: rgba(0,0,0,.15);\n  }\n}\n\n// Sizes\n.well-lg {\n  padding: 24px;\n  border-radius: $border-radius-large;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: $border-radius-small;\n}\n","//\n// Close icons\n// --------------------------------------------------\n\n\n.close {\n  float: right;\n  font-size: ($font-size-base * 1.5);\n  font-weight: $close-font-weight;\n  line-height: 1;\n  color: $close-color;\n  text-shadow: $close-text-shadow;\n  @include opacity(.2);\n\n  &:hover,\n  &:focus {\n    color: $close-color;\n    text-decoration: none;\n    cursor: pointer;\n    @include opacity(.5);\n  }\n\n  // [converter] extracted button& to button.close\n}\n\n// Additional properties for button version\n// iOS requires the button element instead of an anchor tag.\n// If you want the anchor version, it requires `href=\"#\"`.\n// See https://developer.mozilla.org/en-US/docs/Web/Events/click#Safari_Mobile\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n","//\n// Modals\n// --------------------------------------------------\n\n// .modal-open      - body class for killing the scroll\n// .modal           - container to scroll within\n// .modal-dialog    - positioning shell for the actual modal\n// .modal-content   - actual modal w/ bg and corners and shit\n\n// Kill the scroll on the body\n.modal-open {\n  overflow: hidden;\n}\n\n// Container that the modal scrolls within\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-modal;\n  -webkit-overflow-scrolling: touch;\n\n  // Prevent Chrome on Windows from adding a focus outline. For details, see\n  // https://github.com/twbs/bootstrap/pull/10951.\n  outline: 0;\n\n  // When fading in the modal, animate it to slide down\n  &.fade .modal-dialog {\n    @include translate(0, -25%);\n    @include transition-transform(0.3s ease-out);\n  }\n  &.in .modal-dialog { @include translate(0, 0) }\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n// Shell div to position the modal with bottom padding\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n// Actual modal\n.modal-content {\n  position: relative;\n  background-color: $modal-content-bg;\n  border: 1px solid $modal-content-fallback-border-color; //old browsers fallback (ie8 etc)\n  border: 1px solid $modal-content-border-color;\n  border-radius: $border-radius-large;\n  @include box-shadow(0 3px 9px rgba(0,0,0,.5));\n  background-clip: padding-box;\n  // Remove focus outline from opened modal\n  outline: 0;\n}\n\n// Modal background\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: $zindex-modal-background;\n  background-color: $modal-backdrop-bg;\n  // Fade for backdrop\n  &.fade { @include opacity(0); }\n  &.in { @include opacity($modal-backdrop-opacity); }\n}\n\n// Modal header\n// Top section of the modal w/ title and dismiss\n.modal-header {\n  padding: $modal-title-padding;\n  border-bottom: 1px solid $modal-header-border-color;\n  @include clearfix;\n}\n// Close icon\n.modal-header .close {\n  margin-top: -2px;\n}\n\n// Title text within header\n.modal-title {\n  margin: 0;\n  line-height: $modal-title-line-height;\n}\n\n// Modal body\n// Where all modal content resides (sibling of .modal-header and .modal-footer)\n.modal-body {\n  position: relative;\n  padding: $modal-inner-padding;\n}\n\n// Footer (for actions)\n.modal-footer {\n  padding: $modal-inner-padding;\n  text-align: right; // right align buttons\n  border-top: 1px solid $modal-footer-border-color;\n  @include clearfix; // clear it in case folks use .pull-* classes on buttons\n\n  // Properly space out buttons\n  .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; // account for input[type=\"submit\"] which gets the bottom margin like all other inputs\n  }\n  // but override that for button groups\n  .btn-group .btn + .btn {\n    margin-left: -1px;\n  }\n  // and override it for block buttons as well\n  .btn-block + .btn-block {\n    margin-left: 0;\n  }\n}\n\n// Measure scrollbar width for padding body during modal show/hide\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n// Scale up the modal\n@media (min-width: $screen-sm-min) {\n  // Automatically set modal's width for larger viewports\n  .modal-dialog {\n    width: $modal-md;\n    margin: 30px auto;\n  }\n  .modal-content {\n    @include box-shadow(0 5px 15px rgba(0,0,0,.5));\n  }\n\n  // Modal sizes\n  .modal-sm { width: $modal-sm; }\n}\n\n@media (min-width: $screen-md-min) {\n  .modal-lg { width: $modal-lg; }\n}\n","//\n// Tooltips\n// --------------------------------------------------\n\n\n// Base class\n.tooltip {\n  position: absolute;\n  z-index: $zindex-tooltip;\n  display: block;\n  // Our parent element can be arbitrary since tooltips are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text;\n  font-size: $font-size-small;\n\n  @include opacity(0);\n\n  &.in     { @include opacity($tooltip-opacity); }\n  &.top    { margin-top:  -3px; padding: $tooltip-arrow-width 0; }\n  &.right  { margin-left:  3px; padding: 0 $tooltip-arrow-width; }\n  &.bottom { margin-top:   3px; padding: $tooltip-arrow-width 0; }\n  &.left   { margin-left: -3px; padding: 0 $tooltip-arrow-width; }\n}\n\n// Wrapper for the tooltip content\n.tooltip-inner {\n  max-width: $tooltip-max-width;\n  padding: 3px 8px;\n  color: $tooltip-color;\n  text-align: center;\n  background-color: $tooltip-bg;\n  border-radius: $border-radius-base;\n}\n\n// Arrows\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n// Note: Deprecated .top-left, .top-right, .bottom-left, and .bottom-right as of v3.3.1\n.tooltip {\n  &.top .tooltip-arrow {\n    bottom: 0;\n    left: 50%;\n    margin-left: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-top-color: $tooltip-arrow-color;\n  }\n  &.top-left .tooltip-arrow {\n    bottom: 0;\n    right: $tooltip-arrow-width;\n    margin-bottom: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-top-color: $tooltip-arrow-color;\n  }\n  &.top-right .tooltip-arrow {\n    bottom: 0;\n    left: $tooltip-arrow-width;\n    margin-bottom: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-top-color: $tooltip-arrow-color;\n  }\n  &.right .tooltip-arrow {\n    top: 50%;\n    left: 0;\n    margin-top: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width $tooltip-arrow-width $tooltip-arrow-width 0;\n    border-right-color: $tooltip-arrow-color;\n  }\n  &.left .tooltip-arrow {\n    top: 50%;\n    right: 0;\n    margin-top: -$tooltip-arrow-width;\n    border-width: $tooltip-arrow-width 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-left-color: $tooltip-arrow-color;\n  }\n  &.bottom .tooltip-arrow {\n    top: 0;\n    left: 50%;\n    margin-left: -$tooltip-arrow-width;\n    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-bottom-color: $tooltip-arrow-color;\n  }\n  &.bottom-left .tooltip-arrow {\n    top: 0;\n    right: $tooltip-arrow-width;\n    margin-top: -$tooltip-arrow-width;\n    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-bottom-color: $tooltip-arrow-color;\n  }\n  &.bottom-right .tooltip-arrow {\n    top: 0;\n    left: $tooltip-arrow-width;\n    margin-top: -$tooltip-arrow-width;\n    border-width: 0 $tooltip-arrow-width $tooltip-arrow-width;\n    border-bottom-color: $tooltip-arrow-color;\n  }\n}\n","@mixin reset-text() {\n  font-family: $font-family-base;\n  // We deliberately do NOT reset font-size.\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: $line-height-base;\n  text-align: left; // Fallback for where `start` is not supported\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n}\n","//\n// Popovers\n// --------------------------------------------------\n\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: $zindex-popover;\n  display: none;\n  max-width: $popover-max-width;\n  padding: 1px;\n  // Our parent element can be arbitrary since popovers are by default inserted as a sibling of their target element.\n  // So reset our font and text properties to avoid inheriting weird values.\n  @include reset-text;\n  font-size: $font-size-base;\n\n  background-color: $popover-bg;\n  background-clip: padding-box;\n  border: 1px solid $popover-fallback-border-color;\n  border: 1px solid $popover-border-color;\n  border-radius: $border-radius-large;\n  @include box-shadow(0 5px 10px rgba(0,0,0,.2));\n\n  // Offset the popover to account for the popover arrow\n  &.top     { margin-top: -$popover-arrow-width; }\n  &.right   { margin-left: $popover-arrow-width; }\n  &.bottom  { margin-top: $popover-arrow-width; }\n  &.left    { margin-left: -$popover-arrow-width; }\n}\n\n.popover-title {\n  margin: 0; // reset heading margin\n  padding: 8px 14px;\n  font-size: $font-size-base;\n  background-color: $popover-title-bg;\n  border-bottom: 1px solid darken($popover-title-bg, 5%);\n  border-radius: ($border-radius-large - 1) ($border-radius-large - 1) 0 0;\n}\n\n.popover-content {\n  padding: 9px 14px;\n}\n\n// Arrows\n//\n// .arrow is outer, .arrow:after is inner\n\n.popover > .arrow {\n  &,\n  &:after {\n    position: absolute;\n    display: block;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n  }\n}\n.popover > .arrow {\n  border-width: $popover-arrow-outer-width;\n}\n.popover > .arrow:after {\n  border-width: $popover-arrow-width;\n  content: \"\";\n}\n\n.popover {\n  &.top > .arrow {\n    left: 50%;\n    margin-left: -$popover-arrow-outer-width;\n    border-bottom-width: 0;\n    border-top-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-top-color: $popover-arrow-outer-color;\n    bottom: -$popover-arrow-outer-width;\n    &:after {\n      content: \" \";\n      bottom: 1px;\n      margin-left: -$popover-arrow-width;\n      border-bottom-width: 0;\n      border-top-color: $popover-arrow-color;\n    }\n  }\n  &.right > .arrow {\n    top: 50%;\n    left: -$popover-arrow-outer-width;\n    margin-top: -$popover-arrow-outer-width;\n    border-left-width: 0;\n    border-right-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-right-color: $popover-arrow-outer-color;\n    &:after {\n      content: \" \";\n      left: 1px;\n      bottom: -$popover-arrow-width;\n      border-left-width: 0;\n      border-right-color: $popover-arrow-color;\n    }\n  }\n  &.bottom > .arrow {\n    left: 50%;\n    margin-left: -$popover-arrow-outer-width;\n    border-top-width: 0;\n    border-bottom-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-bottom-color: $popover-arrow-outer-color;\n    top: -$popover-arrow-outer-width;\n    &:after {\n      content: \" \";\n      top: 1px;\n      margin-left: -$popover-arrow-width;\n      border-top-width: 0;\n      border-bottom-color: $popover-arrow-color;\n    }\n  }\n\n  &.left > .arrow {\n    top: 50%;\n    right: -$popover-arrow-outer-width;\n    margin-top: -$popover-arrow-outer-width;\n    border-right-width: 0;\n    border-left-color: $popover-arrow-outer-fallback-color; // IE8 fallback\n    border-left-color: $popover-arrow-outer-color;\n    &:after {\n      content: \" \";\n      right: 1px;\n      border-right-width: 0;\n      border-left-color: $popover-arrow-color;\n      bottom: -$popover-arrow-width;\n    }\n  }\n}\n","//\n// Carousel\n// --------------------------------------------------\n\n\n// Wrapper for the slide container and indicators\n.carousel {\n  position: relative;\n}\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n\n  > .item {\n    display: none;\n    position: relative;\n    @include transition(.6s ease-in-out left);\n\n    // Account for jankitude on images\n    > img,\n    > a > img {\n      @include img-responsive;\n      line-height: 1;\n    }\n\n    // WebKit CSS3 transforms for supported devices\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      @include transition-transform(0.6s ease-in-out);\n      @include backface-visibility(hidden);\n      @include perspective(1000px);\n\n      &.next,\n      &.active.right {\n        @include translate3d(100%, 0, 0);\n        left: 0;\n      }\n      &.prev,\n      &.active.left {\n        @include translate3d(-100%, 0, 0);\n        left: 0;\n      }\n      &.next.left,\n      &.prev.right,\n      &.active {\n        @include translate3d(0, 0, 0);\n        left: 0;\n      }\n    }\n  }\n\n  > .active,\n  > .next,\n  > .prev {\n    display: block;\n  }\n\n  > .active {\n    left: 0;\n  }\n\n  > .next,\n  > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  > .next {\n    left: 100%;\n  }\n  > .prev {\n    left: -100%;\n  }\n  > .next.left,\n  > .prev.right {\n    left: 0;\n  }\n\n  > .active.left {\n    left: -100%;\n  }\n  > .active.right {\n    left: 100%;\n  }\n\n}\n\n// Left/right controls for nav\n// ---------------------------\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: $carousel-control-width;\n  @include opacity($carousel-control-opacity);\n  font-size: $carousel-control-font-size;\n  color: $carousel-control-color;\n  text-align: center;\n  text-shadow: $carousel-text-shadow;\n  background-color: rgba(0, 0, 0, 0); // Fix IE9 click-thru bug\n  // We can't have this transition here because WebKit cancels the carousel\n  // animation if you trip this while in the middle of another animation.\n\n  // Set gradients for backgrounds\n  &.left {\n    @include gradient-horizontal($start-color: rgba(0,0,0,.5), $end-color: rgba(0,0,0,.0001));\n  }\n  &.right {\n    left: auto;\n    right: 0;\n    @include gradient-horizontal($start-color: rgba(0,0,0,.0001), $end-color: rgba(0,0,0,.5));\n  }\n\n  // Hover/focus state\n  &:hover,\n  &:focus {\n    outline: 0;\n    color: $carousel-control-color;\n    text-decoration: none;\n    @include opacity(.9);\n  }\n\n  // Toggles\n  .icon-prev,\n  .icon-next,\n  .glyphicon-chevron-left,\n  .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block;\n  }\n  .icon-prev,\n  .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px;\n  }\n  .icon-next,\n  .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px;\n  }\n  .icon-prev,\n  .icon-next {\n    width:  20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif;\n  }\n\n\n  .icon-prev {\n    &:before {\n      content: '\\2039';// SINGLE LEFT-POINTING ANGLE QUOTATION MARK (U+2039)\n    }\n  }\n  .icon-next {\n    &:before {\n      content: '\\203a';// SINGLE RIGHT-POINTING ANGLE QUOTATION MARK (U+203A)\n    }\n  }\n}\n\n// Optional indicator pips\n//\n// Add an unordered list with the following class and add a list item for each\n// slide your carousel holds.\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center;\n\n  li {\n    display: inline-block;\n    width:  10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid $carousel-indicator-border-color;\n    border-radius: 10px;\n    cursor: pointer;\n\n    // IE8-9 hack for event handling\n    //\n    // Internet Explorer 8-9 does not support clicks on elements without a set\n    // `background-color`. We cannot use `filter` since that's not viewed as a\n    // background color by the browser. Thus, a hack is needed.\n    // See https://developer.mozilla.org/en-US/docs/Web/Events/click#Internet_Explorer\n    //\n    // For IE8, we set solid black as it doesn't support `rgba()`. For IE9, we\n    // set alpha transparency for the best results possible.\n    background-color: #000 \\9; // IE8\n    background-color: rgba(0,0,0,0); // IE9\n  }\n  .active {\n    margin: 0;\n    width:  12px;\n    height: 12px;\n    background-color: $carousel-indicator-active-bg;\n  }\n}\n\n// Optional captions\n// -----------------------------\n// Hidden by default for smaller viewports\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: $carousel-caption-color;\n  text-align: center;\n  text-shadow: $carousel-text-shadow;\n  & .btn {\n    text-shadow: none; // No shadow for button elements in carousel-caption\n  }\n}\n\n\n// Scale up controls for tablets and up\n@media screen and (min-width: $screen-sm-min) {\n\n  // Scale up the controls a smidge\n  .carousel-control {\n    .glyphicon-chevron-left,\n    .glyphicon-chevron-right,\n    .icon-prev,\n    .icon-next {\n      width: ($carousel-control-font-size * 1.5);\n      height: ($carousel-control-font-size * 1.5);\n      margin-top: ($carousel-control-font-size / -2);\n      font-size: ($carousel-control-font-size * 1.5);\n    }\n    .glyphicon-chevron-left,\n    .icon-prev {\n      margin-left: ($carousel-control-font-size / -2);\n    }\n    .glyphicon-chevron-right,\n    .icon-next {\n      margin-right: ($carousel-control-font-size / -2);\n    }\n  }\n\n  // Show and left align the captions\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px;\n  }\n\n  // Move up the indicators\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n","//\n// Utility classes\n// --------------------------------------------------\n\n\n// Floats\n// -------------------------\n\n.clearfix {\n  @include clearfix;\n}\n.center-block {\n  @include center-block;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n\n\n// Toggling content\n// -------------------------\n\n// Note: Deprecated .hide in favor of .hidden or .sr-only (as appropriate) in v3.0.1\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  @include text-hide;\n}\n\n\n// Hide from screenreaders and browsers\n//\n// Credit: HTML5 Boilerplate\n\n.hidden {\n  display: none !important;\n}\n\n\n// For Affix plugin\n// -------------------------\n\n.affix {\n  position: fixed;\n}\n","// Center-align a block level element\n\n@mixin center-block() {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n","// CSS image replacement\n//\n// Heads up! v3 launched with only `.hide-text()`, but per our pattern for\n// mixins being reused as classes with the same name, this doesn't hold up. As\n// of v3.0.1 we have added `.text-hide()` and deprecated `.hide-text()`.\n//\n// Source: https://github.com/h5bp/html5-boilerplate/commit/aa0396eae757\n\n// Deprecated as of v3.0.1 (has been removed in v4)\n@mixin hide-text() {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n// New mixin to use as of v3.0.1\n@mixin text-hide() {\n  @include hide-text;\n}\n","//\n// Responsive: Utility classes\n// --------------------------------------------------\n\n\n// IE10 in Windows (Phone) 8\n//\n// Support for responsive views via media queries is kind of borked in IE10, for\n// Surface/desktop in split view and for Windows Phone 8. This particular fix\n// must be accompanied by a snippet of JavaScript to sniff the user agent and\n// apply some conditional CSS to *only* the Surface/desktop Windows 8. Look at\n// our Getting Started page for more information on this bug.\n//\n// For more information, see the following:\n//\n// Issue: https://github.com/twbs/bootstrap/issues/10497\n// Docs: http://getbootstrap.com/getting-started/#support-ie10-width\n// Source: http://timkadlec.com/2013/01/windows-phone-8-and-device-width/\n// Source: http://timkadlec.com/2012/10/ie10-snap-mode-and-responsive-design/\n\n@at-root {\n  @-ms-viewport {\n    width: device-width;\n  }\n}\n\n\n// Visibility utilities\n// Note: Deprecated .visible-xs, .visible-sm, .visible-md, and .visible-lg as of v3.2.0\n\n@include responsive-invisibility('.visible-xs');\n@include responsive-invisibility('.visible-sm');\n@include responsive-invisibility('.visible-md');\n@include responsive-invisibility('.visible-lg');\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n\n@media (max-width: $screen-xs-max) {\n  @include responsive-visibility('.visible-xs');\n}\n.visible-xs-block {\n  @media (max-width: $screen-xs-max) {\n    display: block !important;\n  }\n}\n.visible-xs-inline {\n  @media (max-width: $screen-xs-max) {\n    display: inline !important;\n  }\n}\n.visible-xs-inline-block {\n  @media (max-width: $screen-xs-max) {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n  @include responsive-visibility('.visible-sm');\n}\n.visible-sm-block {\n  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n    display: block !important;\n  }\n}\n.visible-sm-inline {\n  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n    display: inline !important;\n  }\n}\n.visible-sm-inline-block {\n  @media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n  @include responsive-visibility('.visible-md');\n}\n.visible-md-block {\n  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n    display: block !important;\n  }\n}\n.visible-md-inline {\n  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n    display: inline !important;\n  }\n}\n.visible-md-inline-block {\n  @media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n    display: inline-block !important;\n  }\n}\n\n@media (min-width: $screen-lg-min) {\n  @include responsive-visibility('.visible-lg');\n}\n.visible-lg-block {\n  @media (min-width: $screen-lg-min) {\n    display: block !important;\n  }\n}\n.visible-lg-inline {\n  @media (min-width: $screen-lg-min) {\n    display: inline !important;\n  }\n}\n.visible-lg-inline-block {\n  @media (min-width: $screen-lg-min) {\n    display: inline-block !important;\n  }\n}\n\n@media (max-width: $screen-xs-max) {\n  @include responsive-invisibility('.hidden-xs');\n}\n\n@media (min-width: $screen-sm-min) and (max-width: $screen-sm-max) {\n  @include responsive-invisibility('.hidden-sm');\n}\n\n@media (min-width: $screen-md-min) and (max-width: $screen-md-max) {\n  @include responsive-invisibility('.hidden-md');\n}\n\n@media (min-width: $screen-lg-min) {\n  @include responsive-invisibility('.hidden-lg');\n}\n\n\n// Print utilities\n//\n// Media queries are placed on the inside to be mixin-friendly.\n\n// Note: Deprecated .visible-print as of v3.2.0\n\n@include responsive-invisibility('.visible-print');\n\n@media print {\n  @include responsive-visibility('.visible-print');\n}\n.visible-print-block {\n  display: none !important;\n\n  @media print {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n\n  @media print {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n\n  @media print {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  @include responsive-invisibility('.hidden-print');\n}\n","// Responsive utilities\n\n//\n// More easily include all the states for responsive-utilities.less.\n// [converter] $parent hack\n@mixin responsive-visibility($parent) {\n  #{$parent} {\n    display: block !important;\n  }\n  table#{$parent}  { display: table !important; }\n  tr#{$parent}     { display: table-row !important; }\n  th#{$parent},\n  td#{$parent}     { display: table-cell !important; }\n}\n\n// [converter] $parent hack\n@mixin responsive-invisibility($parent) {\n  #{$parent} {\n    display: none !important;\n  }\n}\n"],"sourceRoot":"webpack://"}]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a0180954d7d374e153899d0974b25225.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/*** IMPORTS FROM imports-loader ***/
var $ = __webpack_require__(0);

exports = module.exports = __webpack_require__(1)();
// imports


// module
exports.push([module.i, "/*\n * Start Bootstrap - Landing Page (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-weight: 700;\n}\n\n.topnav {\n    font-size: 14px; \n}\n\n.lead {\n    font-size: 18px;\n    font-weight: 400;\n}\n\n.intro-header {\n    padding-top: 50px; /* If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */\n    padding-bottom: 50px;\n    text-align: center;\n    color: #f8f8f8;\n    background: url(" + __webpack_require__(13) + ") no-repeat center center;\n    background-size: cover;\n}\n\n.intro-message {\n    position: relative;\n    padding-top: 20%;\n    padding-bottom: 20%;\n}\n\n.intro-message > h1 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n    font-size: 5em;\n}\n\n.intro-divider {\n    width: 400px;\n    border-top: 1px solid #f8f8f8;\n    border-bottom: 1px solid rgba(0,0,0,0.2);\n}\n\n.intro-message > h3 {\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n}\n\n@media(max-width:767px) {\n    .intro-message {\n        padding-bottom: 15%;\n    }\n\n    .intro-message > h1 {\n        font-size: 3em;\n    }\n\n    ul.intro-social-buttons > li {\n        display: block;\n        margin-bottom: 20px;\n        padding: 0;\n    }\n\n    ul.intro-social-buttons > li:last-child {\n        margin-bottom: 0;\n    }\n\n    .intro-divider {\n        width: 100%;\n    }\n}\n\n.network-name {\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 2px;\n}\n\n.content-section-a {\n    padding: 50px 0;\n    background-color: #f8f8f8;\n}\n\n.content-section-b {\n    padding: 50px 0;\n    border-top: 1px solid #e7e7e7;\n    border-bottom: 1px solid #e7e7e7;\n}\n\n.section-heading {\n    margin-bottom: 30px;\n}\n\n.section-heading-spacer {\n    float: left;\n    width: 200px;\n    border-top: 3px solid #e7e7e7;\n}\n\n.banner {\n    padding: 100px 0;\n    color: #f8f8f8;\n    background: url(" + __webpack_require__(12) + ") no-repeat center center;\n    background-size: cover;\n}\n\n.banner h2 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n    font-size: 3em;\n}\n\n.banner ul {\n    margin-bottom: 0;\n}\n\n.banner-social-buttons {\n    float: right;\n    margin-top: 0;\n}\n\n@media(max-width:1199px) {\n    ul.banner-social-buttons {\n        float: left;\n        margin-top: 15px;\n    }\n}\n\n@media(max-width:767px) {\n    .banner h2 {\n        margin: 0;\n        text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n        font-size: 3em;\n    }\n\n    ul.banner-social-buttons > li {\n        display: block;\n        margin-bottom: 20px;\n        padding: 0;\n    }\n\n    ul.banner-social-buttons > li:last-child {\n        margin-bottom: 0;\n    }\n}\n\nfooter {\n    padding: 50px 0;\n    background-color: #f8f8f8;\n}\n\np.copyright {\n    margin: 15px 0 0;\n}", "", {"version":3,"sources":["/./css/page1-theme/css/landing-page.css"],"names":[],"mappings":"AAAA;;;;GAIG;;AAEH;;IAEI,YAAY;IACZ,aAAa;CAChB;;AAED;;;;;;;IAOI,gEAAgE;IAChE,iBAAiB;CACpB;;AAED;IACI,gBAAgB;CACnB;;AAED;IACI,gBAAgB;IAChB,iBAAiB;CACpB;;AAED;IACI,kBAAkB,CAAC,uHAAuH;IAC1I,qBAAqB;IACrB,mBAAmB;IACnB,eAAe;IACf,kEAA6D;IAC7D,uBAAuB;CAC1B;;AAED;IACI,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;CACvB;;AAED;IACI,UAAU;IACV,yCAAyC;IACzC,eAAe;CAClB;;AAED;IACI,aAAa;IACb,8BAA8B;IAC9B,yCAAyC;CAC5C;;AAED;IACI,yCAAyC;CAC5C;;AAED;IACI;QACI,oBAAoB;KACvB;;IAED;QACI,eAAe;KAClB;;IAED;QACI,eAAe;QACf,oBAAoB;QACpB,WAAW;KACd;;IAED;QACI,iBAAiB;KACpB;;IAED;QACI,YAAY;KACf;CACJ;;AAED;IACI,0BAA0B;IAC1B,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;CACvB;;AAED;IACI,gBAAgB;IAChB,0BAA0B;CAC7B;;AAED;IACI,gBAAgB;IAChB,8BAA8B;IAC9B,iCAAiC;CACpC;;AAED;IACI,oBAAoB;CACvB;;AAED;IACI,YAAY;IACZ,aAAa;IACb,8BAA8B;CACjC;;AAED;IACI,iBAAiB;IACjB,eAAe;IACf,kEAA8D;IAC9D,uBAAuB;CAC1B;;AAED;IACI,UAAU;IACV,yCAAyC;IACzC,eAAe;CAClB;;AAED;IACI,iBAAiB;CACpB;;AAED;IACI,aAAa;IACb,cAAc;CACjB;;AAED;IACI;QACI,YAAY;QACZ,iBAAiB;KACpB;CACJ;;AAED;IACI;QACI,UAAU;QACV,yCAAyC;QACzC,eAAe;KAClB;;IAED;QACI,eAAe;QACf,oBAAoB;QACpB,WAAW;KACd;;IAED;QACI,iBAAiB;KACpB;CACJ;;AAED;IACI,gBAAgB;IAChB,0BAA0B;CAC7B;;AAED;IACI,iBAAiB;CACpB","file":"landing-page.css","sourcesContent":["/*\n * Start Bootstrap - Landing Page (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n\nbody,\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    font-family: \"Lato\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;\n    font-weight: 700;\n}\n\n.topnav {\n    font-size: 14px; \n}\n\n.lead {\n    font-size: 18px;\n    font-weight: 400;\n}\n\n.intro-header {\n    padding-top: 50px; /* If you're making other pages, make sure there is 50px of padding to make sure the navbar doesn't overlap content! */\n    padding-bottom: 50px;\n    text-align: center;\n    color: #f8f8f8;\n    background: url(../img/intro-bg.jpg) no-repeat center center;\n    background-size: cover;\n}\n\n.intro-message {\n    position: relative;\n    padding-top: 20%;\n    padding-bottom: 20%;\n}\n\n.intro-message > h1 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n    font-size: 5em;\n}\n\n.intro-divider {\n    width: 400px;\n    border-top: 1px solid #f8f8f8;\n    border-bottom: 1px solid rgba(0,0,0,0.2);\n}\n\n.intro-message > h3 {\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n}\n\n@media(max-width:767px) {\n    .intro-message {\n        padding-bottom: 15%;\n    }\n\n    .intro-message > h1 {\n        font-size: 3em;\n    }\n\n    ul.intro-social-buttons > li {\n        display: block;\n        margin-bottom: 20px;\n        padding: 0;\n    }\n\n    ul.intro-social-buttons > li:last-child {\n        margin-bottom: 0;\n    }\n\n    .intro-divider {\n        width: 100%;\n    }\n}\n\n.network-name {\n    text-transform: uppercase;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 2px;\n}\n\n.content-section-a {\n    padding: 50px 0;\n    background-color: #f8f8f8;\n}\n\n.content-section-b {\n    padding: 50px 0;\n    border-top: 1px solid #e7e7e7;\n    border-bottom: 1px solid #e7e7e7;\n}\n\n.section-heading {\n    margin-bottom: 30px;\n}\n\n.section-heading-spacer {\n    float: left;\n    width: 200px;\n    border-top: 3px solid #e7e7e7;\n}\n\n.banner {\n    padding: 100px 0;\n    color: #f8f8f8;\n    background: url(../img/banner-bg.jpg) no-repeat center center;\n    background-size: cover;\n}\n\n.banner h2 {\n    margin: 0;\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n    font-size: 3em;\n}\n\n.banner ul {\n    margin-bottom: 0;\n}\n\n.banner-social-buttons {\n    float: right;\n    margin-top: 0;\n}\n\n@media(max-width:1199px) {\n    ul.banner-social-buttons {\n        float: left;\n        margin-top: 15px;\n    }\n}\n\n@media(max-width:767px) {\n    .banner h2 {\n        margin: 0;\n        text-shadow: 2px 2px 3px rgba(0,0,0,0.6);\n        font-size: 3em;\n    }\n\n    ul.banner-social-buttons > li {\n        display: block;\n        margin-bottom: 20px;\n        padding: 0;\n    }\n\n    ul.banner-social-buttons > li:last-child {\n        margin-bottom: 0;\n    }\n}\n\nfooter {\n    padding: 50px 0;\n    background-color: #f8f8f8;\n}\n\np.copyright {\n    margin: 15px 0 0;\n}"],"sourceRoot":"webpack://"}]);

// exports



/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ef05e42f7cf5f63a807d2273da70932d.jpg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "36bef19ad606e86d29469a6a0bafccea.jpg";

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

__webpack_require__(10);

/***/ })
/******/ ]);