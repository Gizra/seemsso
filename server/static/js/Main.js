
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _eeue56$elm_all_dict$AllDict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_eeue56$elm_all_dict$AllDict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _eeue56$elm_all_dict$AllDict$keys = function (dict) {
	return A3(
		_eeue56$elm_all_dict$AllDict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$AllDict$values = function (dict) {
	return A3(
		_eeue56$elm_all_dict$AllDict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$AllDict$toList = function (dict) {
	return A3(
		_eeue56$elm_all_dict$AllDict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _eeue56$elm_all_dict$AllDict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_eeue56$elm_all_dict$AllDict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _eeue56$elm_all_dict$AllDict$isBBlack = function (dict) {
	var _p2 = dict;
	_v8_2:
	do {
		if (_p2.ctor === 'RBNode_elm_builtin') {
			if (_p2._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v8_2;
			}
		} else {
			if (_p2._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v8_2;
			}
		}
	} while(false);
	return false;
};
var _eeue56$elm_all_dict$AllDict$showFlag = function (f) {
	var _p3 = f;
	switch (_p3.ctor) {
		case 'Insert':
			return 'Insert';
		case 'Remove':
			return 'Remove';
		default:
			return 'Same';
	}
};
var _eeue56$elm_all_dict$AllDict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p4 = dict;
			if (_p4.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v11 = A2(_eeue56$elm_all_dict$AllDict$sizeHelp, n + 1, _p4._4),
					_v12 = _p4._3;
				n = _v11;
				dict = _v12;
				continue sizeHelp;
			}
		}
	});
var _eeue56$elm_all_dict$AllDict$size = function (dict) {
	return A2(_eeue56$elm_all_dict$AllDict$sizeHelp, 0, dict);
};
var _eeue56$elm_all_dict$AllDict$isEmpty = function (dict) {
	var _p5 = dict;
	if (_p5.ctor === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var _eeue56$elm_all_dict$AllDict$getOrd = function (dict) {
	getOrd:
	while (true) {
		var _p6 = dict;
		if (_p6.ctor === 'RBEmpty_elm_builtin') {
			return _p6._1;
		} else {
			var _v15 = _p6._3;
			dict = _v15;
			continue getOrd;
		}
	}
};
var _eeue56$elm_all_dict$AllDict$getHelper = F2(
	function (targetKey, dict) {
		getHelper:
		while (true) {
			var ord = _eeue56$elm_all_dict$AllDict$getOrd(dict);
			var _p7 = dict;
			if (_p7.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p8 = A2(
					_elm_lang$core$Basics$compare,
					ord(targetKey),
					ord(_p7._1));
				switch (_p8.ctor) {
					case 'LT':
						var _v18 = targetKey,
							_v19 = _p7._3;
						targetKey = _v18;
						dict = _v19;
						continue getHelper;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p7._2);
					default:
						var _v20 = targetKey,
							_v21 = _p7._4;
						targetKey = _v20;
						dict = _v21;
						continue getHelper;
				}
			}
		}
	});
var _eeue56$elm_all_dict$AllDict$get = F2(
	function (targetKey, dict) {
		return A2(_eeue56$elm_all_dict$AllDict$getHelper, targetKey, dict);
	});
var _eeue56$elm_all_dict$AllDict$member = F2(
	function (key, dict) {
		var _p9 = A2(_eeue56$elm_all_dict$AllDict$getHelper, key, dict);
		if (_p9.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _eeue56$elm_all_dict$AllDict$max = function (dict) {
	max:
	while (true) {
		var _p10 = dict;
		if (_p10.ctor === 'RBNode_elm_builtin') {
			if (_p10._4.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: _p10._1, _1: _p10._2};
			} else {
				var _v24 = _p10._4;
				dict = _v24;
				continue max;
			}
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'AllDict',
				{
					start: {line: 157, column: 5},
					end: {line: 165, column: 51}
				},
				_p10)('(max Empty) is not defined');
		}
	}
};
var _eeue56$elm_all_dict$AllDict$min = function (dict) {
	min:
	while (true) {
		var _p12 = dict;
		if (_p12.ctor === 'RBNode_elm_builtin') {
			if ((_p12._3.ctor === 'RBEmpty_elm_builtin') && (_p12._3._0.ctor === 'LBlack')) {
				return {ctor: '_Tuple2', _0: _p12._1, _1: _p12._2};
			} else {
				var _v26 = _p12._3;
				dict = _v26;
				continue min;
			}
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'AllDict',
				{
					start: {line: 145, column: 5},
					end: {line: 153, column: 51}
				},
				_p12)('(min Empty) is not defined');
		}
	}
};
var _eeue56$elm_all_dict$AllDict$fullEq = F2(
	function (first, second) {
		return _elm_lang$core$Native_Utils.eq(
			_eeue56$elm_all_dict$AllDict$toList(first),
			_eeue56$elm_all_dict$AllDict$toList(second)) && _elm_lang$core$Native_Utils.eq(
			_eeue56$elm_all_dict$AllDict$getOrd(first),
			_eeue56$elm_all_dict$AllDict$getOrd(second));
	});
var _eeue56$elm_all_dict$AllDict$eq = F2(
	function (first, second) {
		return _elm_lang$core$Native_Utils.eq(
			_eeue56$elm_all_dict$AllDict$toList(first),
			_eeue56$elm_all_dict$AllDict$toList(second));
	});
var _eeue56$elm_all_dict$AllDict$showLColor = function (color) {
	var _p14 = color;
	if (_p14.ctor === 'LBlack') {
		return 'LBlack';
	} else {
		return 'LBBlack';
	}
};
var _eeue56$elm_all_dict$AllDict$showNColor = function (c) {
	var _p15 = c;
	switch (_p15.ctor) {
		case 'Red':
			return 'Red';
		case 'Black':
			return 'Black';
		case 'BBlack':
			return 'BBlack';
		default:
			return 'NBlack';
	}
};
var _eeue56$elm_all_dict$AllDict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Utils.crash(
			'AllDict',
			{
				start: {line: 365, column: 3},
				end: {line: 365, column: 14}
			})(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _eeue56$elm_all_dict$AllDict$showNColor(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/Elm/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _eeue56$elm_all_dict$AllDict$NBlack = {ctor: 'NBlack'};
var _eeue56$elm_all_dict$AllDict$BBlack = {ctor: 'BBlack'};
var _eeue56$elm_all_dict$AllDict$Black = {ctor: 'Black'};
var _eeue56$elm_all_dict$AllDict$blackish = function (t) {
	var _p16 = t;
	if (_p16.ctor === 'RBNode_elm_builtin') {
		var _p17 = _p16._0;
		return _elm_lang$core$Native_Utils.eq(_p17, _eeue56$elm_all_dict$AllDict$Black) || _elm_lang$core$Native_Utils.eq(_p17, _eeue56$elm_all_dict$AllDict$BBlack);
	} else {
		return true;
	}
};
var _eeue56$elm_all_dict$AllDict$Red = {ctor: 'Red'};
var _eeue56$elm_all_dict$AllDict$moreBlack = function (color) {
	var _p18 = color;
	switch (_p18.ctor) {
		case 'Black':
			return _eeue56$elm_all_dict$AllDict$BBlack;
		case 'Red':
			return _eeue56$elm_all_dict$AllDict$Black;
		case 'NBlack':
			return _eeue56$elm_all_dict$AllDict$Red;
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'AllDict',
				{
					start: {line: 339, column: 5},
					end: {line: 343, column: 73}
				},
				_p18)('Can\'t make a double black node more black!');
	}
};
var _eeue56$elm_all_dict$AllDict$lessBlack = function (color) {
	var _p20 = color;
	switch (_p20.ctor) {
		case 'BBlack':
			return _eeue56$elm_all_dict$AllDict$Black;
		case 'Black':
			return _eeue56$elm_all_dict$AllDict$Red;
		case 'Red':
			return _eeue56$elm_all_dict$AllDict$NBlack;
		default:
			return _elm_lang$core$Native_Utils.crashCase(
				'AllDict',
				{
					start: {line: 348, column: 5},
					end: {line: 352, column: 75}
				},
				_p20)('Can\'t make a negative black node less black!');
	}
};
var _eeue56$elm_all_dict$AllDict$LBBlack = {ctor: 'LBBlack'};
var _eeue56$elm_all_dict$AllDict$LBlack = {ctor: 'LBlack'};
var _eeue56$elm_all_dict$AllDict$RBEmpty_elm_builtin = F2(
	function (a, b) {
		return {ctor: 'RBEmpty_elm_builtin', _0: a, _1: b};
	});
var _eeue56$elm_all_dict$AllDict$empty = function (ord) {
	return A2(_eeue56$elm_all_dict$AllDict$RBEmpty_elm_builtin, _eeue56$elm_all_dict$AllDict$LBlack, ord);
};
var _eeue56$elm_all_dict$AllDict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _eeue56$elm_all_dict$AllDict$ensureBlackRoot = function (dict) {
	var _p22 = dict;
	_v32_2:
	do {
		if (_p22.ctor === 'RBNode_elm_builtin') {
			switch (_p22._0.ctor) {
				case 'Red':
					return A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, _p22._1, _p22._2, _p22._3, _p22._4);
				case 'Black':
					return dict;
				default:
					break _v32_2;
			}
		} else {
			break _v32_2;
		}
	} while(false);
	return dict;
};
var _eeue56$elm_all_dict$AllDict$lessBlackTree = function (dict) {
	var _p23 = dict;
	if (_p23.ctor === 'RBNode_elm_builtin') {
		return A5(
			_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin,
			_eeue56$elm_all_dict$AllDict$lessBlack(_p23._0),
			_p23._1,
			_p23._2,
			_p23._3,
			_p23._4);
	} else {
		if (_p23._0.ctor === 'LBBlack') {
			return A2(_eeue56$elm_all_dict$AllDict$RBEmpty_elm_builtin, _eeue56$elm_all_dict$AllDict$LBlack, _p23._1);
		} else {
			return dict;
		}
	}
};
var _eeue56$elm_all_dict$AllDict$blacken = function (t) {
	var _p24 = t;
	if (_p24.ctor === 'RBEmpty_elm_builtin') {
		return A2(_eeue56$elm_all_dict$AllDict$RBEmpty_elm_builtin, _eeue56$elm_all_dict$AllDict$LBlack, _p24._1);
	} else {
		return A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, _p24._1, _p24._2, _p24._3, _p24._4);
	}
};
var _eeue56$elm_all_dict$AllDict$redden = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Utils.crashCase(
			'AllDict',
			{
				start: {line: 486, column: 5},
				end: {line: 488, column: 69}
			},
			_p25)('can\'t make a Leaf red');
	} else {
		return A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Red, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _eeue56$elm_all_dict$AllDict$balance_node = function (t) {
	var assemble = function (col) {
		return function (xk) {
			return function (xv) {
				return function (yk) {
					return function (yv) {
						return function (zk) {
							return function (zv) {
								return function (a) {
									return function (b) {
										return function (c) {
											return function (d) {
												return A5(
													_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin,
													_eeue56$elm_all_dict$AllDict$lessBlack(col),
													yk,
													yv,
													A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, xk, xv, a, b),
													A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, zk, zv, c, d));
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
	if (_eeue56$elm_all_dict$AllDict$blackish(t)) {
		var _p27 = t;
		_v36_6:
		do {
			_v36_5:
			do {
				_v36_4:
				do {
					_v36_3:
					do {
						_v36_2:
						do {
							_v36_1:
							do {
								_v36_0:
								do {
									if (_p27.ctor === 'RBNode_elm_builtin') {
										if (_p27._3.ctor === 'RBNode_elm_builtin') {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._3._0.ctor) {
													case 'Red':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																			break _v36_2;
																		} else {
																			if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																				break _v36_3;
																			} else {
																				break _v36_6;
																			}
																		}
																	}
																}
															case 'NBlack':
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		if (((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) {
																			break _v36_4;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															default:
																if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																	break _v36_0;
																} else {
																	if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																		break _v36_1;
																	} else {
																		break _v36_6;
																	}
																}
														}
													case 'NBlack':
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		if (((_p27._0.ctor === 'BBlack') && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															case 'NBlack':
																if (_p27._0.ctor === 'BBlack') {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Black')) {
																			break _v36_5;
																		} else {
																			break _v36_6;
																		}
																	}
																} else {
																	break _v36_6;
																}
															default:
																if (((_p27._0.ctor === 'BBlack') && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																	break _v36_5;
																} else {
																	break _v36_6;
																}
														}
													default:
														switch (_p27._4._0.ctor) {
															case 'Red':
																if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																	break _v36_2;
																} else {
																	if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																		break _v36_3;
																	} else {
																		break _v36_6;
																	}
																}
															case 'NBlack':
																if (((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	break _v36_6;
																}
															default:
																break _v36_6;
														}
												}
											} else {
												switch (_p27._3._0.ctor) {
													case 'Red':
														if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
															break _v36_0;
														} else {
															if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																break _v36_1;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((_p27._0.ctor === 'BBlack') && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
															break _v36_5;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											}
										} else {
											if (_p27._4.ctor === 'RBNode_elm_builtin') {
												switch (_p27._4._0.ctor) {
													case 'Red':
														if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
															break _v36_2;
														} else {
															if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																break _v36_3;
															} else {
																break _v36_6;
															}
														}
													case 'NBlack':
														if (((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) {
															break _v36_4;
														} else {
															break _v36_6;
														}
													default:
														break _v36_6;
												}
											} else {
												break _v36_6;
											}
										}
									} else {
										break _v36_6;
									}
								} while(false);
								return assemble(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
							} while(false);
							return assemble(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
						} while(false);
						return assemble(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
					} while(false);
					return assemble(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
				} while(false);
				var _p29 = _p27._4._4;
				var _p28 = _p29;
				if ((_p28.ctor === 'RBNode_elm_builtin') && (_p28._0.ctor === 'Black')) {
					return A5(
						_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin,
						_eeue56$elm_all_dict$AllDict$Black,
						_p27._4._3._1,
						_p27._4._3._2,
						A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
						A5(
							_eeue56$elm_all_dict$AllDict$balance,
							_eeue56$elm_all_dict$AllDict$Black,
							_p27._4._1,
							_p27._4._2,
							_p27._4._3._4,
							_eeue56$elm_all_dict$AllDict$redden(_p29)));
				} else {
					return t;
				}
			} while(false);
			var _p31 = _p27._3._3;
			var _p30 = _p31;
			if ((_p30.ctor === 'RBNode_elm_builtin') && (_p30._0.ctor === 'Black')) {
				return A5(
					_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin,
					_eeue56$elm_all_dict$AllDict$Black,
					_p27._3._4._1,
					_p27._3._4._2,
					A5(
						_eeue56$elm_all_dict$AllDict$balance,
						_eeue56$elm_all_dict$AllDict$Black,
						_p27._3._1,
						_p27._3._2,
						_eeue56$elm_all_dict$AllDict$redden(_p31),
						_p27._3._4._3),
					A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
			} else {
				return t;
			}
		} while(false);
		return t;
	} else {
		return t;
	}
};
var _eeue56$elm_all_dict$AllDict$balance = F5(
	function (c, k, v, l, r) {
		return _eeue56$elm_all_dict$AllDict$balance_node(
			A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, c, k, v, l, r));
	});
var _eeue56$elm_all_dict$AllDict$bubble = F5(
	function (c, k, v, l, r) {
		return (_eeue56$elm_all_dict$AllDict$isBBlack(l) || _eeue56$elm_all_dict$AllDict$isBBlack(r)) ? A5(
			_eeue56$elm_all_dict$AllDict$balance,
			_eeue56$elm_all_dict$AllDict$moreBlack(c),
			k,
			v,
			_eeue56$elm_all_dict$AllDict$lessBlackTree(l),
			_eeue56$elm_all_dict$AllDict$lessBlackTree(r)) : A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _eeue56$elm_all_dict$AllDict$remove_max = F5(
	function (c, k, v, l, r) {
		var _p32 = r;
		if (_p32.ctor === 'RBEmpty_elm_builtin') {
			return A3(_eeue56$elm_all_dict$AllDict$rem, c, l, r);
		} else {
			return A5(
				_eeue56$elm_all_dict$AllDict$bubble,
				c,
				k,
				v,
				l,
				A5(_eeue56$elm_all_dict$AllDict$remove_max, _p32._0, _p32._1, _p32._2, _p32._3, _p32._4));
		}
	});
var _eeue56$elm_all_dict$AllDict$rem = F3(
	function (c, l, r) {
		var _p33 = {ctor: '_Tuple2', _0: l, _1: r};
		if (_p33._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p33._1.ctor === 'RBEmpty_elm_builtin') {
				var _p35 = _p33._0._1;
				var _p34 = c;
				switch (_p34.ctor) {
					case 'Red':
						return A2(_eeue56$elm_all_dict$AllDict$RBEmpty_elm_builtin, _eeue56$elm_all_dict$AllDict$LBlack, _p35);
					case 'Black':
						return A2(_eeue56$elm_all_dict$AllDict$RBEmpty_elm_builtin, _eeue56$elm_all_dict$AllDict$LBBlack, _p35);
					default:
						return _eeue56$elm_all_dict$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p38 = _p33._1._0;
				var _p37 = _p33._0._0;
				var _p36 = {ctor: '_Tuple3', _0: c, _1: _p37, _2: _p38};
				if ((((_p36.ctor === '_Tuple3') && (_p36._0.ctor === 'Black')) && (_p36._1.ctor === 'LBlack')) && (_p36._2.ctor === 'Red')) {
					return A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, _p33._1._1, _p33._1._2, _p33._1._3, _p33._1._4);
				} else {
					return A4(
						_eeue56$elm_all_dict$AllDict$reportRemBug,
						'Black/LBlack/Red',
						c,
						_eeue56$elm_all_dict$AllDict$showLColor(_p37),
						_eeue56$elm_all_dict$AllDict$showNColor(_p38));
				}
			}
		} else {
			if (_p33._1.ctor === 'RBEmpty_elm_builtin') {
				var _p41 = _p33._1._0;
				var _p40 = _p33._0._0;
				var _p39 = {ctor: '_Tuple3', _0: c, _1: _p40, _2: _p41};
				if ((((_p39.ctor === '_Tuple3') && (_p39._0.ctor === 'Black')) && (_p39._1.ctor === 'Red')) && (_p39._2.ctor === 'LBlack')) {
					return A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Black, _p33._0._1, _p33._0._2, _p33._0._3, _p33._0._4);
				} else {
					return A4(
						_eeue56$elm_all_dict$AllDict$reportRemBug,
						'Black/Red/LBlack',
						c,
						_eeue56$elm_all_dict$AllDict$showNColor(_p40),
						_eeue56$elm_all_dict$AllDict$showLColor(_p41));
				}
			} else {
				var _p47 = _p33._0._2;
				var _p46 = _p33._0._4;
				var _p45 = _p33._0._3;
				var _p44 = _p33._0._1;
				var _p43 = _p33._0._0;
				var l_ = A5(_eeue56$elm_all_dict$AllDict$remove_max, _p43, _p44, _p47, _p45, _p46);
				var r = A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _p33._1._0, _p33._1._1, _p33._1._2, _p33._1._3, _p33._1._4);
				var l = A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _p43, _p44, _p47, _p45, _p46);
				var _p42 = _eeue56$elm_all_dict$AllDict$max(l);
				var k = _p42._0;
				var v = _p42._1;
				return A5(_eeue56$elm_all_dict$AllDict$bubble, c, k, v, l_, r);
			}
		}
	});
var _eeue56$elm_all_dict$AllDict$map = F2(
	function (f, dict) {
		var _p48 = dict;
		if (_p48.ctor === 'RBEmpty_elm_builtin') {
			return A2(_eeue56$elm_all_dict$AllDict$RBEmpty_elm_builtin, _p48._0, _p48._1);
		} else {
			var _p49 = _p48._1;
			return A5(
				_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin,
				_p48._0,
				_p49,
				A2(f, _p49, _p48._2),
				A2(_eeue56$elm_all_dict$AllDict$map, f, _p48._3),
				A2(_eeue56$elm_all_dict$AllDict$map, f, _p48._4));
		}
	});
var _eeue56$elm_all_dict$AllDict$Same = {ctor: 'Same'};
var _eeue56$elm_all_dict$AllDict$Remove = {ctor: 'Remove'};
var _eeue56$elm_all_dict$AllDict$Insert = {ctor: 'Insert'};
var _eeue56$elm_all_dict$AllDict$update = F3(
	function (k, alter, dict) {
		var ord = _eeue56$elm_all_dict$AllDict$getOrd(dict);
		var empty_ = _eeue56$elm_all_dict$AllDict$empty(ord);
		var up = function (dict) {
			var _p50 = dict;
			if (_p50.ctor === 'RBEmpty_elm_builtin') {
				var _p51 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p51.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _eeue56$elm_all_dict$AllDict$Same, _1: empty_};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _eeue56$elm_all_dict$AllDict$Insert,
						_1: A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _eeue56$elm_all_dict$AllDict$Red, k, _p51._0, empty_, empty_)
					};
				}
			} else {
				var _p62 = _p50._2;
				var _p61 = _p50._4;
				var _p60 = _p50._3;
				var _p59 = _p50._1;
				var _p58 = _p50._0;
				var _p52 = A2(
					_elm_lang$core$Basics$compare,
					ord(k),
					ord(_p59));
				switch (_p52.ctor) {
					case 'EQ':
						var _p53 = alter(
							_elm_lang$core$Maybe$Just(_p62));
						if (_p53.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _eeue56$elm_all_dict$AllDict$Remove,
								_1: A3(_eeue56$elm_all_dict$AllDict$rem, _p58, _p60, _p61)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _eeue56$elm_all_dict$AllDict$Same,
								_1: A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _p58, _p59, _p53._0, _p60, _p61)
							};
						}
					case 'LT':
						var _p54 = up(_p60);
						var flag = _p54._0;
						var newLeft = _p54._1;
						var _p55 = flag;
						switch (_p55.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$AllDict$Same,
									_1: A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _p58, _p59, _p62, newLeft, _p61)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$AllDict$Insert,
									_1: A5(_eeue56$elm_all_dict$AllDict$balance, _p58, _p59, _p62, newLeft, _p61)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$AllDict$Remove,
									_1: A5(_eeue56$elm_all_dict$AllDict$bubble, _p58, _p59, _p62, newLeft, _p61)
								};
						}
					default:
						var _p56 = up(_p61);
						var flag = _p56._0;
						var newRight = _p56._1;
						var _p57 = flag;
						switch (_p57.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$AllDict$Same,
									_1: A5(_eeue56$elm_all_dict$AllDict$RBNode_elm_builtin, _p58, _p59, _p62, _p60, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$AllDict$Insert,
									_1: A5(_eeue56$elm_all_dict$AllDict$balance, _p58, _p59, _p62, _p60, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _eeue56$elm_all_dict$AllDict$Remove,
									_1: A5(_eeue56$elm_all_dict$AllDict$bubble, _p58, _p59, _p62, _p60, newRight)
								};
						}
				}
			}
		};
		var _p63 = up(dict);
		var flag = _p63._0;
		var updatedDict = _p63._1;
		var _p64 = flag;
		switch (_p64.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _eeue56$elm_all_dict$AllDict$ensureBlackRoot(updatedDict);
			default:
				return _eeue56$elm_all_dict$AllDict$blacken(updatedDict);
		}
	});
var _eeue56$elm_all_dict$AllDict$insert = F3(
	function (key, value, dict) {
		return A3(
			_eeue56$elm_all_dict$AllDict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _eeue56$elm_all_dict$AllDict$singleton = F3(
	function (ord, key, value) {
		return A3(
			_eeue56$elm_all_dict$AllDict$insert,
			key,
			value,
			_eeue56$elm_all_dict$AllDict$empty(ord));
	});
var _eeue56$elm_all_dict$AllDict$union = F2(
	function (t1, t2) {
		return A3(_eeue56$elm_all_dict$AllDict$foldl, _eeue56$elm_all_dict$AllDict$insert, t2, t1);
	});
var _eeue56$elm_all_dict$AllDict$fromList = F2(
	function (ord, assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p65, dict) {
					var _p66 = _p65;
					return A3(_eeue56$elm_all_dict$AllDict$insert, _p66._0, _p66._1, dict);
				}),
			_eeue56$elm_all_dict$AllDict$empty(ord),
			assocs);
	});
var _eeue56$elm_all_dict$AllDict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_eeue56$elm_all_dict$AllDict$insert, key, value, dict) : dict;
			});
		return A3(
			_eeue56$elm_all_dict$AllDict$foldl,
			add,
			_eeue56$elm_all_dict$AllDict$empty(
				_eeue56$elm_all_dict$AllDict$getOrd(dictionary)),
			dictionary);
	});
var _eeue56$elm_all_dict$AllDict$intersect = F2(
	function (t1, t2) {
		return A2(
			_eeue56$elm_all_dict$AllDict$filter,
			F2(
				function (k, _p67) {
					return A2(_eeue56$elm_all_dict$AllDict$member, k, t2);
				}),
			t1);
	});
var _eeue56$elm_all_dict$AllDict$partition = F2(
	function (predicate, dict) {
		var ord = _eeue56$elm_all_dict$AllDict$getOrd(dict);
		var add = F3(
			function (key, value, _p68) {
				var _p69 = _p68;
				var _p71 = _p69._1;
				var _p70 = _p69._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_eeue56$elm_all_dict$AllDict$insert, key, value, _p70),
					_1: _p71
				} : {
					ctor: '_Tuple2',
					_0: _p70,
					_1: A3(_eeue56$elm_all_dict$AllDict$insert, key, value, _p71)
				};
			});
		return A3(
			_eeue56$elm_all_dict$AllDict$foldl,
			add,
			{
				ctor: '_Tuple2',
				_0: _eeue56$elm_all_dict$AllDict$empty(ord),
				_1: _eeue56$elm_all_dict$AllDict$empty(ord)
			},
			dict);
	});
var _eeue56$elm_all_dict$AllDict$remove = F2(
	function (key, dict) {
		return A3(
			_eeue56$elm_all_dict$AllDict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _eeue56$elm_all_dict$AllDict$diff = F2(
	function (t1, t2) {
		return A3(
			_eeue56$elm_all_dict$AllDict$foldl,
			F3(
				function (k, v, t) {
					return A2(_eeue56$elm_all_dict$AllDict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$core$Set$foldr = F3(
	function (f, b, _p0) {
		var _p1 = _p0;
		return A3(
			_elm_lang$core$Dict$foldr,
			F3(
				function (k, _p2, b) {
					return A2(f, k, b);
				}),
			b,
			_p1._0);
	});
var _elm_lang$core$Set$foldl = F3(
	function (f, b, _p3) {
		var _p4 = _p3;
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, _p5, b) {
					return A2(f, k, b);
				}),
			b,
			_p4._0);
	});
var _elm_lang$core$Set$toList = function (_p6) {
	var _p7 = _p6;
	return _elm_lang$core$Dict$keys(_p7._0);
};
var _elm_lang$core$Set$size = function (_p8) {
	var _p9 = _p8;
	return _elm_lang$core$Dict$size(_p9._0);
};
var _elm_lang$core$Set$member = F2(
	function (k, _p10) {
		var _p11 = _p10;
		return A2(_elm_lang$core$Dict$member, k, _p11._0);
	});
var _elm_lang$core$Set$isEmpty = function (_p12) {
	var _p13 = _p12;
	return _elm_lang$core$Dict$isEmpty(_p13._0);
};
var _elm_lang$core$Set$Set_elm_builtin = function (a) {
	return {ctor: 'Set_elm_builtin', _0: a};
};
var _elm_lang$core$Set$empty = _elm_lang$core$Set$Set_elm_builtin(_elm_lang$core$Dict$empty);
var _elm_lang$core$Set$singleton = function (k) {
	return _elm_lang$core$Set$Set_elm_builtin(
		A2(
			_elm_lang$core$Dict$singleton,
			k,
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Set$insert = F2(
	function (k, _p14) {
		var _p15 = _p14;
		return _elm_lang$core$Set$Set_elm_builtin(
			A3(
				_elm_lang$core$Dict$insert,
				k,
				{ctor: '_Tuple0'},
				_p15._0));
	});
var _elm_lang$core$Set$fromList = function (xs) {
	return A3(_elm_lang$core$List$foldl, _elm_lang$core$Set$insert, _elm_lang$core$Set$empty, xs);
};
var _elm_lang$core$Set$map = F2(
	function (f, s) {
		return _elm_lang$core$Set$fromList(
			A2(
				_elm_lang$core$List$map,
				f,
				_elm_lang$core$Set$toList(s)));
	});
var _elm_lang$core$Set$remove = F2(
	function (k, _p16) {
		var _p17 = _p16;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$remove, k, _p17._0));
	});
var _elm_lang$core$Set$union = F2(
	function (_p19, _p18) {
		var _p20 = _p19;
		var _p21 = _p18;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$union, _p20._0, _p21._0));
	});
var _elm_lang$core$Set$intersect = F2(
	function (_p23, _p22) {
		var _p24 = _p23;
		var _p25 = _p22;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$intersect, _p24._0, _p25._0));
	});
var _elm_lang$core$Set$diff = F2(
	function (_p27, _p26) {
		var _p28 = _p27;
		var _p29 = _p26;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(_elm_lang$core$Dict$diff, _p28._0, _p29._0));
	});
var _elm_lang$core$Set$filter = F2(
	function (p, _p30) {
		var _p31 = _p30;
		return _elm_lang$core$Set$Set_elm_builtin(
			A2(
				_elm_lang$core$Dict$filter,
				F2(
					function (k, _p32) {
						return p(k);
					}),
				_p31._0));
	});
var _elm_lang$core$Set$partition = F2(
	function (p, _p33) {
		var _p34 = _p33;
		var _p35 = A2(
			_elm_lang$core$Dict$partition,
			F2(
				function (k, _p36) {
					return p(k);
				}),
			_p34._0);
		var p1 = _p35._0;
		var p2 = _p35._1;
		return {
			ctor: '_Tuple2',
			_0: _elm_lang$core$Set$Set_elm_builtin(p1),
			_1: _elm_lang$core$Set$Set_elm_builtin(p2)
		};
	});

var _elm_community$list_extra$List_Extra$greedyGroupsOfWithStep = F3(
	function (size, step, xs) {
		var okayXs = _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$List$length(xs),
			0) > 0;
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		return (okayArgs && okayXs) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$greedyGroupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$greedyGroupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$groupsOfWithStep = F3(
	function (size, step, xs) {
		var okayArgs = (_elm_lang$core$Native_Utils.cmp(size, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(step, 0) > 0);
		var xs_ = A2(_elm_lang$core$List$drop, step, xs);
		var group = A2(_elm_lang$core$List$take, size, xs);
		var okayLength = _elm_lang$core$Native_Utils.eq(
			size,
			_elm_lang$core$List$length(group));
		return (okayArgs && okayLength) ? {
			ctor: '::',
			_0: group,
			_1: A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, step, xs_)
		} : {ctor: '[]'};
	});
var _elm_community$list_extra$List_Extra$groupsOf = F2(
	function (size, xs) {
		return A3(_elm_community$list_extra$List_Extra$groupsOfWithStep, size, size, xs);
	});
var _elm_community$list_extra$List_Extra$zip5 = _elm_lang$core$List$map5(
	F5(
		function (v0, v1, v2, v3, v4) {
			return {ctor: '_Tuple5', _0: v0, _1: v1, _2: v2, _3: v3, _4: v4};
		}));
var _elm_community$list_extra$List_Extra$zip4 = _elm_lang$core$List$map4(
	F4(
		function (v0, v1, v2, v3) {
			return {ctor: '_Tuple4', _0: v0, _1: v1, _2: v2, _3: v3};
		}));
var _elm_community$list_extra$List_Extra$zip3 = _elm_lang$core$List$map3(
	F3(
		function (v0, v1, v2) {
			return {ctor: '_Tuple3', _0: v0, _1: v1, _2: v2};
		}));
var _elm_community$list_extra$List_Extra$zip = _elm_lang$core$List$map2(
	F2(
		function (v0, v1) {
			return {ctor: '_Tuple2', _0: v0, _1: v1};
		}));
var _elm_community$list_extra$List_Extra$isPrefixOf = F2(
	function (prefix, xs) {
		var _p0 = {ctor: '_Tuple2', _0: prefix, _1: xs};
		if (_p0._0.ctor === '[]') {
			return true;
		} else {
			if (_p0._1.ctor === '[]') {
				return false;
			} else {
				return _elm_lang$core$Native_Utils.eq(_p0._0._0, _p0._1._0) && A2(_elm_community$list_extra$List_Extra$isPrefixOf, _p0._0._1, _p0._1._1);
			}
		}
	});
var _elm_community$list_extra$List_Extra$isSuffixOf = F2(
	function (suffix, xs) {
		return A2(
			_elm_community$list_extra$List_Extra$isPrefixOf,
			_elm_lang$core$List$reverse(suffix),
			_elm_lang$core$List$reverse(xs));
	});
var _elm_community$list_extra$List_Extra$selectSplit = function (xs) {
	var _p1 = xs;
	if (_p1.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p5 = _p1._1;
		var _p4 = _p1._0;
		return {
			ctor: '::',
			_0: {
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _p4,
				_2: _p5
			},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p2) {
					var _p3 = _p2;
					return {
						ctor: '_Tuple3',
						_0: {ctor: '::', _0: _p4, _1: _p3._0},
						_1: _p3._1,
						_2: _p3._2
					};
				},
				_elm_community$list_extra$List_Extra$selectSplit(_p5))
		};
	}
};
var _elm_community$list_extra$List_Extra$select = function (xs) {
	var _p6 = xs;
	if (_p6.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p10 = _p6._1;
		var _p9 = _p6._0;
		return {
			ctor: '::',
			_0: {ctor: '_Tuple2', _0: _p9, _1: _p10},
			_1: A2(
				_elm_lang$core$List$map,
				function (_p7) {
					var _p8 = _p7;
					return {
						ctor: '_Tuple2',
						_0: _p8._0,
						_1: {ctor: '::', _0: _p9, _1: _p8._1}
					};
				},
				_elm_community$list_extra$List_Extra$select(_p10))
		};
	}
};
var _elm_community$list_extra$List_Extra$tailsHelp = F2(
	function (e, list) {
		var _p11 = list;
		if (_p11.ctor === '::') {
			var _p12 = _p11._0;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: e, _1: _p12},
				_1: {ctor: '::', _0: _p12, _1: _p11._1}
			};
		} else {
			return {ctor: '[]'};
		}
	});
var _elm_community$list_extra$List_Extra$tails = A2(
	_elm_lang$core$List$foldr,
	_elm_community$list_extra$List_Extra$tailsHelp,
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$isInfixOf = F2(
	function (infix, xs) {
		return A2(
			_elm_lang$core$List$any,
			_elm_community$list_extra$List_Extra$isPrefixOf(infix),
			_elm_community$list_extra$List_Extra$tails(xs));
	});
var _elm_community$list_extra$List_Extra$inits = A2(
	_elm_lang$core$List$foldr,
	F2(
		function (e, acc) {
			return {
				ctor: '::',
				_0: {ctor: '[]'},
				_1: A2(
					_elm_lang$core$List$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(e),
					acc)
			};
		}),
	{
		ctor: '::',
		_0: {ctor: '[]'},
		_1: {ctor: '[]'}
	});
var _elm_community$list_extra$List_Extra$groupWhileTransitively = F2(
	function (cmp, xs_) {
		var _p13 = xs_;
		if (_p13.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p13._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: {
						ctor: '::',
						_0: _p13._0,
						_1: {ctor: '[]'}
					},
					_1: {ctor: '[]'}
				};
			} else {
				var _p15 = _p13._0;
				var _p14 = A2(_elm_community$list_extra$List_Extra$groupWhileTransitively, cmp, _p13._1);
				if (_p14.ctor === '::') {
					return A2(cmp, _p15, _p13._1._0) ? {
						ctor: '::',
						_0: {ctor: '::', _0: _p15, _1: _p14._0},
						_1: _p14._1
					} : {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: _p15,
							_1: {ctor: '[]'}
						},
						_1: _p14
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$stripPrefix = F2(
	function (prefix, xs) {
		var step = F2(
			function (e, m) {
				var _p16 = m;
				if (_p16.ctor === 'Nothing') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if (_p16._0.ctor === '[]') {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						return _elm_lang$core$Native_Utils.eq(e, _p16._0._0) ? _elm_lang$core$Maybe$Just(_p16._0._1) : _elm_lang$core$Maybe$Nothing;
					}
				}
			});
		return A3(
			_elm_lang$core$List$foldl,
			step,
			_elm_lang$core$Maybe$Just(xs),
			prefix);
	});
var _elm_community$list_extra$List_Extra$dropWhileRight = function (p) {
	return A2(
		_elm_lang$core$List$foldr,
		F2(
			function (x, xs) {
				return (p(x) && _elm_lang$core$List$isEmpty(xs)) ? {ctor: '[]'} : {ctor: '::', _0: x, _1: xs};
			}),
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$takeWhileRight = function (p) {
	var step = F2(
		function (x, _p17) {
			var _p18 = _p17;
			var _p19 = _p18._0;
			return (p(x) && _p18._1) ? {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: x, _1: _p19},
				_1: true
			} : {ctor: '_Tuple2', _0: _p19, _1: false};
		});
	return function (_p20) {
		return _elm_lang$core$Tuple$first(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: {ctor: '[]'},
					_1: true
				},
				_p20));
	};
};
var _elm_community$list_extra$List_Extra$splitAt = F2(
	function (n, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_lang$core$List$take, n, xs),
			_1: A2(_elm_lang$core$List$drop, n, xs)
		};
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying_ = F3(
	function (listOflengths, list, accu) {
		groupsOfVarying_:
		while (true) {
			var _p21 = {ctor: '_Tuple2', _0: listOflengths, _1: list};
			if (((_p21.ctor === '_Tuple2') && (_p21._0.ctor === '::')) && (_p21._1.ctor === '::')) {
				var _p22 = A2(_elm_community$list_extra$List_Extra$splitAt, _p21._0._0, list);
				var head = _p22._0;
				var tail = _p22._1;
				var _v11 = _p21._0._1,
					_v12 = tail,
					_v13 = {ctor: '::', _0: head, _1: accu};
				listOflengths = _v11;
				list = _v12;
				accu = _v13;
				continue groupsOfVarying_;
			} else {
				return _elm_lang$core$List$reverse(accu);
			}
		}
	});
var _elm_community$list_extra$List_Extra$groupsOfVarying = F2(
	function (listOflengths, list) {
		return A3(
			_elm_community$list_extra$List_Extra$groupsOfVarying_,
			listOflengths,
			list,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$unfoldr = F2(
	function (f, seed) {
		var _p23 = f(seed);
		if (_p23.ctor === 'Nothing') {
			return {ctor: '[]'};
		} else {
			return {
				ctor: '::',
				_0: _p23._0._0,
				_1: A2(_elm_community$list_extra$List_Extra$unfoldr, f, _p23._0._1)
			};
		}
	});
var _elm_community$list_extra$List_Extra$scanr1 = F2(
	function (f, xs_) {
		var _p24 = xs_;
		if (_p24.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p24._1.ctor === '[]') {
				return {
					ctor: '::',
					_0: _p24._0,
					_1: {ctor: '[]'}
				};
			} else {
				var _p25 = A2(_elm_community$list_extra$List_Extra$scanr1, f, _p24._1);
				if (_p25.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, _p24._0, _p25._0),
						_1: _p25
					};
				} else {
					return {ctor: '[]'};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanr = F3(
	function (f, acc, xs_) {
		var _p26 = xs_;
		if (_p26.ctor === '[]') {
			return {
				ctor: '::',
				_0: acc,
				_1: {ctor: '[]'}
			};
		} else {
			var _p27 = A3(_elm_community$list_extra$List_Extra$scanr, f, acc, _p26._1);
			if (_p27.ctor === '::') {
				return {
					ctor: '::',
					_0: A2(f, _p26._0, _p27._0),
					_1: _p27
				};
			} else {
				return {ctor: '[]'};
			}
		}
	});
var _elm_community$list_extra$List_Extra$scanl1 = F2(
	function (f, xs_) {
		var _p28 = xs_;
		if (_p28.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			return A3(_elm_lang$core$List$scanl, f, _p28._0, _p28._1);
		}
	});
var _elm_community$list_extra$List_Extra$indexedFoldr = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p29) {
				var _p30 = _p29;
				var _p31 = _p30._0;
				return {
					ctor: '_Tuple2',
					_0: _p31 - 1,
					_1: A3(func, _p31, x, _p30._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldr,
				step,
				{
					ctor: '_Tuple2',
					_0: _elm_lang$core$List$length(list) - 1,
					_1: acc
				},
				list));
	});
var _elm_community$list_extra$List_Extra$indexedFoldl = F3(
	function (func, acc, list) {
		var step = F2(
			function (x, _p32) {
				var _p33 = _p32;
				var _p34 = _p33._0;
				return {
					ctor: '_Tuple2',
					_0: _p34 + 1,
					_1: A3(func, _p34, x, _p33._1)
				};
			});
		return _elm_lang$core$Tuple$second(
			A3(
				_elm_lang$core$List$foldl,
				step,
				{ctor: '_Tuple2', _0: 0, _1: acc},
				list));
	});
var _elm_community$list_extra$List_Extra$foldr1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p35 = m;
						if (_p35.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, x, _p35._0);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldr, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$foldl1 = F2(
	function (f, xs) {
		var mf = F2(
			function (x, m) {
				return _elm_lang$core$Maybe$Just(
					function () {
						var _p36 = m;
						if (_p36.ctor === 'Nothing') {
							return x;
						} else {
							return A2(f, _p36._0, x);
						}
					}());
			});
		return A3(_elm_lang$core$List$foldl, mf, _elm_lang$core$Maybe$Nothing, xs);
	});
var _elm_community$list_extra$List_Extra$interweaveHelp = F3(
	function (l1, l2, acc) {
		interweaveHelp:
		while (true) {
			var _p37 = {ctor: '_Tuple2', _0: l1, _1: l2};
			_v24_1:
			do {
				if (_p37._0.ctor === '::') {
					if (_p37._1.ctor === '::') {
						var _v25 = _p37._0._1,
							_v26 = _p37._1._1,
							_v27 = A2(
							_elm_lang$core$Basics_ops['++'],
							acc,
							{
								ctor: '::',
								_0: _p37._0._0,
								_1: {
									ctor: '::',
									_0: _p37._1._0,
									_1: {ctor: '[]'}
								}
							});
						l1 = _v25;
						l2 = _v26;
						acc = _v27;
						continue interweaveHelp;
					} else {
						break _v24_1;
					}
				} else {
					if (_p37._1.ctor === '[]') {
						break _v24_1;
					} else {
						return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._1);
					}
				}
			} while(false);
			return A2(_elm_lang$core$Basics_ops['++'], acc, _p37._0);
		}
	});
var _elm_community$list_extra$List_Extra$interweave = F2(
	function (l1, l2) {
		return A3(
			_elm_community$list_extra$List_Extra$interweaveHelp,
			l1,
			l2,
			{ctor: '[]'});
	});
var _elm_community$list_extra$List_Extra$permutations = function (xs_) {
	var _p38 = xs_;
	if (_p38.ctor === '[]') {
		return {
			ctor: '::',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		};
	} else {
		var f = function (_p39) {
			var _p40 = _p39;
			return A2(
				_elm_lang$core$List$map,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					})(_p40._0),
				_elm_community$list_extra$List_Extra$permutations(_p40._1));
		};
		return A2(
			_elm_lang$core$List$concatMap,
			f,
			_elm_community$list_extra$List_Extra$select(_p38));
	}
};
var _elm_community$list_extra$List_Extra$isPermutationOf = F2(
	function (permut, xs) {
		return A2(
			_elm_lang$core$List$member,
			permut,
			_elm_community$list_extra$List_Extra$permutations(xs));
	});
var _elm_community$list_extra$List_Extra$subsequencesNonEmpty = function (xs) {
	var _p41 = xs;
	if (_p41.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		var _p42 = _p41._0;
		var f = F2(
			function (ys, r) {
				return {
					ctor: '::',
					_0: ys,
					_1: {
						ctor: '::',
						_0: {ctor: '::', _0: _p42, _1: ys},
						_1: r
					}
				};
			});
		return {
			ctor: '::',
			_0: {
				ctor: '::',
				_0: _p42,
				_1: {ctor: '[]'}
			},
			_1: A3(
				_elm_lang$core$List$foldr,
				f,
				{ctor: '[]'},
				_elm_community$list_extra$List_Extra$subsequencesNonEmpty(_p41._1))
		};
	}
};
var _elm_community$list_extra$List_Extra$subsequences = function (xs) {
	return {
		ctor: '::',
		_0: {ctor: '[]'},
		_1: _elm_community$list_extra$List_Extra$subsequencesNonEmpty(xs)
	};
};
var _elm_community$list_extra$List_Extra$isSubsequenceOf = F2(
	function (subseq, xs) {
		return A2(
			_elm_lang$core$List$member,
			subseq,
			_elm_community$list_extra$List_Extra$subsequences(xs));
	});
var _elm_community$list_extra$List_Extra$transpose = function (ll) {
	transpose:
	while (true) {
		var _p43 = ll;
		if (_p43.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			if (_p43._0.ctor === '[]') {
				var _v32 = _p43._1;
				ll = _v32;
				continue transpose;
			} else {
				var _p44 = _p43._1;
				var tails = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$tail, _p44);
				var heads = A2(_elm_lang$core$List$filterMap, _elm_lang$core$List$head, _p44);
				return {
					ctor: '::',
					_0: {ctor: '::', _0: _p43._0._0, _1: heads},
					_1: _elm_community$list_extra$List_Extra$transpose(
						{ctor: '::', _0: _p43._0._1, _1: tails})
				};
			}
		}
	}
};
var _elm_community$list_extra$List_Extra$intercalate = function (xs) {
	return function (_p45) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$intersperse, xs, _p45));
	};
};
var _elm_community$list_extra$List_Extra$filterNot = F2(
	function (pred, list) {
		return A2(
			_elm_lang$core$List$filter,
			function (_p46) {
				return !pred(_p46);
			},
			list);
	});
var _elm_community$list_extra$List_Extra$removeAt = F2(
	function (index, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return l;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p47 = tail;
			if (_p47.ctor === 'Nothing') {
				return l;
			} else {
				return A2(_elm_lang$core$List$append, head, _p47._0);
			}
		}
	});
var _elm_community$list_extra$List_Extra$stableSortWith = F2(
	function (pred, list) {
		var predWithIndex = F2(
			function (_p49, _p48) {
				var _p50 = _p49;
				var _p51 = _p48;
				var result = A2(pred, _p50._0, _p51._0);
				var _p52 = result;
				if (_p52.ctor === 'EQ') {
					return A2(_elm_lang$core$Basics$compare, _p50._1, _p51._1);
				} else {
					return result;
				}
			});
		var listWithIndex = A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, a) {
					return {ctor: '_Tuple2', _0: a, _1: i};
				}),
			list);
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(_elm_lang$core$List$sortWith, predWithIndex, listWithIndex));
	});
var _elm_community$list_extra$List_Extra$setAt = F3(
	function (index, value, l) {
		if (_elm_lang$core$Native_Utils.cmp(index, 0) < 0) {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			var tail = _elm_lang$core$List$tail(
				A2(_elm_lang$core$List$drop, index, l));
			var head = A2(_elm_lang$core$List$take, index, l);
			var _p53 = tail;
			if (_p53.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(
						_elm_lang$core$List$append,
						head,
						{ctor: '::', _0: value, _1: _p53._0}));
			}
		}
	});
var _elm_community$list_extra$List_Extra$remove = F2(
	function (x, xs) {
		var _p54 = xs;
		if (_p54.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p56 = _p54._1;
			var _p55 = _p54._0;
			return _elm_lang$core$Native_Utils.eq(x, _p55) ? _p56 : {
				ctor: '::',
				_0: _p55,
				_1: A2(_elm_community$list_extra$List_Extra$remove, x, _p56)
			};
		}
	});
var _elm_community$list_extra$List_Extra$updateIfIndex = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$indexedMap,
			F2(
				function (i, x) {
					return predicate(i) ? update(x) : x;
				}),
			list);
	});
var _elm_community$list_extra$List_Extra$updateAt = F3(
	function (index, update, list) {
		return ((_elm_lang$core$Native_Utils.cmp(index, 0) < 0) || (_elm_lang$core$Native_Utils.cmp(
			index,
			_elm_lang$core$List$length(list)) > -1)) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
			A3(
				_elm_community$list_extra$List_Extra$updateIfIndex,
				F2(
					function (x, y) {
						return _elm_lang$core$Native_Utils.eq(x, y);
					})(index),
				update,
				list));
	});
var _elm_community$list_extra$List_Extra$updateIf = F3(
	function (predicate, update, list) {
		return A2(
			_elm_lang$core$List$map,
			function (item) {
				return predicate(item) ? update(item) : item;
			},
			list);
	});
var _elm_community$list_extra$List_Extra$replaceIf = F3(
	function (predicate, replacement, list) {
		return A3(
			_elm_community$list_extra$List_Extra$updateIf,
			predicate,
			_elm_lang$core$Basics$always(replacement),
			list);
	});
var _elm_community$list_extra$List_Extra$findIndices = function (p) {
	return function (_p57) {
		return A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$filter,
				function (_p58) {
					var _p59 = _p58;
					return p(_p59._1);
				},
				A2(
					_elm_lang$core$List$indexedMap,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p57)));
	};
};
var _elm_community$list_extra$List_Extra$findIndex = function (p) {
	return function (_p60) {
		return _elm_lang$core$List$head(
			A2(_elm_community$list_extra$List_Extra$findIndices, p, _p60));
	};
};
var _elm_community$list_extra$List_Extra$splitWhen = F2(
	function (predicate, list) {
		return A2(
			_elm_lang$core$Maybe$map,
			function (i) {
				return A2(_elm_community$list_extra$List_Extra$splitAt, i, list);
			},
			A2(_elm_community$list_extra$List_Extra$findIndex, predicate, list));
	});
var _elm_community$list_extra$List_Extra$elemIndices = function (x) {
	return _elm_community$list_extra$List_Extra$findIndices(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$elemIndex = function (x) {
	return _elm_community$list_extra$List_Extra$findIndex(
		F2(
			function (x, y) {
				return _elm_lang$core$Native_Utils.eq(x, y);
			})(x));
};
var _elm_community$list_extra$List_Extra$find = F2(
	function (predicate, list) {
		find:
		while (true) {
			var _p61 = list;
			if (_p61.ctor === '[]') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p62 = _p61._0;
				if (predicate(_p62)) {
					return _elm_lang$core$Maybe$Just(_p62);
				} else {
					var _v41 = predicate,
						_v42 = _p61._1;
					predicate = _v41;
					list = _v42;
					continue find;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$notMember = function (x) {
	return function (_p63) {
		return !A2(_elm_lang$core$List$member, x, _p63);
	};
};
var _elm_community$list_extra$List_Extra$andThen = _elm_lang$core$List$concatMap;
var _elm_community$list_extra$List_Extra$lift2 = F3(
	function (f, la, lb) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return {
							ctor: '::',
							_0: A2(f, a, b),
							_1: {ctor: '[]'}
						};
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift3 = F4(
	function (f, la, lb, lc) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return {
									ctor: '::',
									_0: A3(f, a, b, c),
									_1: {ctor: '[]'}
								};
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$lift4 = F5(
	function (f, la, lb, lc, ld) {
		return A2(
			_elm_community$list_extra$List_Extra$andThen,
			function (a) {
				return A2(
					_elm_community$list_extra$List_Extra$andThen,
					function (b) {
						return A2(
							_elm_community$list_extra$List_Extra$andThen,
							function (c) {
								return A2(
									_elm_community$list_extra$List_Extra$andThen,
									function (d) {
										return {
											ctor: '::',
											_0: A4(f, a, b, c, d),
											_1: {ctor: '[]'}
										};
									},
									ld);
							},
							lc);
					},
					lb);
			},
			la);
	});
var _elm_community$list_extra$List_Extra$andMap = F2(
	function (l, fl) {
		return A3(
			_elm_lang$core$List$map2,
			F2(
				function (x, y) {
					return x(y);
				}),
			fl,
			l);
	});
var _elm_community$list_extra$List_Extra$uniqueHelp = F3(
	function (f, existing, remaining) {
		uniqueHelp:
		while (true) {
			var _p64 = remaining;
			if (_p64.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				var _p66 = _p64._1;
				var _p65 = _p64._0;
				var computedFirst = f(_p65);
				if (A2(_elm_lang$core$Set$member, computedFirst, existing)) {
					var _v44 = f,
						_v45 = existing,
						_v46 = _p66;
					f = _v44;
					existing = _v45;
					remaining = _v46;
					continue uniqueHelp;
				} else {
					return {
						ctor: '::',
						_0: _p65,
						_1: A3(
							_elm_community$list_extra$List_Extra$uniqueHelp,
							f,
							A2(_elm_lang$core$Set$insert, computedFirst, existing),
							_p66)
					};
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$uniqueBy = F2(
	function (f, list) {
		return A3(_elm_community$list_extra$List_Extra$uniqueHelp, f, _elm_lang$core$Set$empty, list);
	});
var _elm_community$list_extra$List_Extra$allDifferentBy = F2(
	function (f, list) {
		return _elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(list),
			_elm_lang$core$List$length(
				A2(_elm_community$list_extra$List_Extra$uniqueBy, f, list)));
	});
var _elm_community$list_extra$List_Extra$allDifferent = function (list) {
	return A2(_elm_community$list_extra$List_Extra$allDifferentBy, _elm_lang$core$Basics$identity, list);
};
var _elm_community$list_extra$List_Extra$unique = function (list) {
	return A3(_elm_community$list_extra$List_Extra$uniqueHelp, _elm_lang$core$Basics$identity, _elm_lang$core$Set$empty, list);
};
var _elm_community$list_extra$List_Extra$dropWhile = F2(
	function (predicate, list) {
		dropWhile:
		while (true) {
			var _p67 = list;
			if (_p67.ctor === '[]') {
				return {ctor: '[]'};
			} else {
				if (predicate(_p67._0)) {
					var _v48 = predicate,
						_v49 = _p67._1;
					predicate = _v48;
					list = _v49;
					continue dropWhile;
				} else {
					return list;
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$takeWhile = function (predicate) {
	var takeWhileMemo = F2(
		function (memo, list) {
			takeWhileMemo:
			while (true) {
				var _p68 = list;
				if (_p68.ctor === '[]') {
					return _elm_lang$core$List$reverse(memo);
				} else {
					var _p69 = _p68._0;
					if (predicate(_p69)) {
						var _v51 = {ctor: '::', _0: _p69, _1: memo},
							_v52 = _p68._1;
						memo = _v51;
						list = _v52;
						continue takeWhileMemo;
					} else {
						return _elm_lang$core$List$reverse(memo);
					}
				}
			}
		});
	return takeWhileMemo(
		{ctor: '[]'});
};
var _elm_community$list_extra$List_Extra$span = F2(
	function (p, xs) {
		return {
			ctor: '_Tuple2',
			_0: A2(_elm_community$list_extra$List_Extra$takeWhile, p, xs),
			_1: A2(_elm_community$list_extra$List_Extra$dropWhile, p, xs)
		};
	});
var _elm_community$list_extra$List_Extra$break = function (p) {
	return _elm_community$list_extra$List_Extra$span(
		function (_p70) {
			return !p(_p70);
		});
};
var _elm_community$list_extra$List_Extra$groupWhile = F2(
	function (eq, xs_) {
		var _p71 = xs_;
		if (_p71.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var _p73 = _p71._0;
			var _p72 = A2(
				_elm_community$list_extra$List_Extra$span,
				eq(_p73),
				_p71._1);
			var ys = _p72._0;
			var zs = _p72._1;
			return {
				ctor: '::',
				_0: {ctor: '::', _0: _p73, _1: ys},
				_1: A2(_elm_community$list_extra$List_Extra$groupWhile, eq, zs)
			};
		}
	});
var _elm_community$list_extra$List_Extra$group = _elm_community$list_extra$List_Extra$groupWhile(
	F2(
		function (x, y) {
			return _elm_lang$core$Native_Utils.eq(x, y);
		}));
var _elm_community$list_extra$List_Extra$minimumBy = F2(
	function (f, ls) {
		var minBy = F2(
			function (x, _p74) {
				var _p75 = _p74;
				var _p76 = _p75._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p76) < 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p75._0, _1: _p76};
			});
		var _p77 = ls;
		if (_p77.ctor === '::') {
			if (_p77._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p77._0);
			} else {
				var _p78 = _p77._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							minBy,
							{
								ctor: '_Tuple2',
								_0: _p78,
								_1: f(_p78)
							},
							_p77._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$maximumBy = F2(
	function (f, ls) {
		var maxBy = F2(
			function (x, _p79) {
				var _p80 = _p79;
				var _p81 = _p80._1;
				var fx = f(x);
				return (_elm_lang$core$Native_Utils.cmp(fx, _p81) > 0) ? {ctor: '_Tuple2', _0: x, _1: fx} : {ctor: '_Tuple2', _0: _p80._0, _1: _p81};
			});
		var _p82 = ls;
		if (_p82.ctor === '::') {
			if (_p82._1.ctor === '[]') {
				return _elm_lang$core$Maybe$Just(_p82._0);
			} else {
				var _p83 = _p82._0;
				return _elm_lang$core$Maybe$Just(
					_elm_lang$core$Tuple$first(
						A3(
							_elm_lang$core$List$foldl,
							maxBy,
							{
								ctor: '_Tuple2',
								_0: _p83,
								_1: f(_p83)
							},
							_p82._1)));
			}
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$list_extra$List_Extra$uncons = function (xs) {
	var _p84 = xs;
	if (_p84.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: _p84._0, _1: _p84._1});
	}
};
var _elm_community$list_extra$List_Extra$swapAt = F3(
	function (index1, index2, l) {
		swapAt:
		while (true) {
			if (_elm_lang$core$Native_Utils.eq(index1, index2)) {
				return _elm_lang$core$Maybe$Just(l);
			} else {
				if (_elm_lang$core$Native_Utils.cmp(index1, index2) > 0) {
					var _v59 = index2,
						_v60 = index1,
						_v61 = l;
					index1 = _v59;
					index2 = _v60;
					l = _v61;
					continue swapAt;
				} else {
					if (_elm_lang$core$Native_Utils.cmp(index1, 0) < 0) {
						return _elm_lang$core$Maybe$Nothing;
					} else {
						var _p85 = A2(_elm_community$list_extra$List_Extra$splitAt, index1, l);
						var part1 = _p85._0;
						var tail1 = _p85._1;
						var _p86 = A2(_elm_community$list_extra$List_Extra$splitAt, index2 - index1, tail1);
						var head2 = _p86._0;
						var tail2 = _p86._1;
						return A3(
							_elm_lang$core$Maybe$map2,
							F2(
								function (_p88, _p87) {
									var _p89 = _p88;
									var _p90 = _p87;
									return _elm_lang$core$List$concat(
										{
											ctor: '::',
											_0: part1,
											_1: {
												ctor: '::',
												_0: {ctor: '::', _0: _p90._0, _1: _p89._1},
												_1: {
													ctor: '::',
													_0: {ctor: '::', _0: _p89._0, _1: _p90._1},
													_1: {ctor: '[]'}
												}
											}
										});
								}),
							_elm_community$list_extra$List_Extra$uncons(head2),
							_elm_community$list_extra$List_Extra$uncons(tail2));
					}
				}
			}
		}
	});
var _elm_community$list_extra$List_Extra$iterate = F2(
	function (f, x) {
		var _p91 = f(x);
		if (_p91.ctor === 'Just') {
			return {
				ctor: '::',
				_0: x,
				_1: A2(_elm_community$list_extra$List_Extra$iterate, f, _p91._0)
			};
		} else {
			return {
				ctor: '::',
				_0: x,
				_1: {ctor: '[]'}
			};
		}
	});
var _elm_community$list_extra$List_Extra$getAt = F2(
	function (idx, xs) {
		return (_elm_lang$core$Native_Utils.cmp(idx, 0) < 0) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, idx, xs));
	});
var _elm_community$list_extra$List_Extra_ops = _elm_community$list_extra$List_Extra_ops || {};
_elm_community$list_extra$List_Extra_ops['!!'] = _elm_lang$core$Basics$flip(_elm_community$list_extra$List_Extra$getAt);
var _elm_community$list_extra$List_Extra$init = function () {
	var maybe = F2(
		function (d, f) {
			return function (_p92) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					d,
					A2(_elm_lang$core$Maybe$map, f, _p92));
			};
		});
	return A2(
		_elm_lang$core$List$foldr,
		function (x) {
			return function (_p93) {
				return _elm_lang$core$Maybe$Just(
					A3(
						maybe,
						{ctor: '[]'},
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							})(x),
						_p93));
			};
		},
		_elm_lang$core$Maybe$Nothing);
}();
var _elm_community$list_extra$List_Extra$last = _elm_community$list_extra$List_Extra$foldl1(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));

var _Gizra$elm_dictlist$AllDictList$unsafeGet = F2(
	function (key, dict) {
		var _p0 = A2(_eeue56$elm_all_dict$AllDict$get, key, dict);
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return _elm_lang$core$Native_Utils.crashCase(
				'AllDictList',
				{
					start: {line: 1254, column: 5},
					end: {line: 1259, column: 81}
				},
				_p0)('Internal error: AllDictList list not in sync with dict');
		}
	});
var _Gizra$elm_dictlist$AllDictList$toDict = function (_p2) {
	var _p3 = _p2;
	return A3(_eeue56$elm_all_dict$AllDict$foldl, _elm_lang$core$Dict$insert, _elm_lang$core$Dict$empty, _p3._0);
};
var _Gizra$elm_dictlist$AllDictList$toAllDict = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _Gizra$elm_dictlist$AllDictList$keys = function (_p6) {
	var _p7 = _p6;
	return _p7._1;
};
var _Gizra$elm_dictlist$AllDictList$foldr = F3(
	function (func, accum, _p8) {
		var _p9 = _p8;
		var go = F2(
			function (key, acc) {
				var _p10 = A2(_eeue56$elm_all_dict$AllDict$get, key, _p9._0);
				if (_p10.ctor === 'Just') {
					return A3(func, key, _p10._0, acc);
				} else {
					return _elm_lang$core$Native_Utils.crashCase(
						'AllDictList',
						{
							start: {line: 1046, column: 13},
							end: {line: 1051, column: 89}
						},
						_p10)('Internal error: AllDictList list not in sync with dict');
				}
			});
		return A3(_elm_lang$core$List$foldr, go, accum, _p9._1);
	});
var _Gizra$elm_dictlist$AllDictList$values = function (dictList) {
	return A3(
		_Gizra$elm_dictlist$AllDictList$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dictList);
};
var _Gizra$elm_dictlist$AllDictList$toList = function (dict) {
	return A3(
		_Gizra$elm_dictlist$AllDictList$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _Gizra$elm_dictlist$AllDictList$foldl = F3(
	function (func, accum, _p12) {
		var _p13 = _p12;
		var go = F2(
			function (key, acc) {
				return A3(
					func,
					key,
					A2(_Gizra$elm_dictlist$AllDictList$unsafeGet, key, _p13._0),
					acc);
			});
		return A3(_elm_lang$core$List$foldl, go, accum, _p13._1);
	});
var _Gizra$elm_dictlist$AllDictList$merge = F6(
	function (leftFunc, bothFunc, rightFunc, leftDict, _p14, initialResult) {
		var _p15 = _p14;
		var _p24 = _p15._0;
		var goRight = F3(
			function (remainingRight, rightKey, accumRight) {
				var _p16 = A2(_eeue56$elm_all_dict$AllDict$get, rightKey, remainingRight);
				if (_p16.ctor === 'Just') {
					return A3(rightFunc, rightKey, _p16._0, accumRight);
				} else {
					return accumRight;
				}
			});
		var goLeft = F3(
			function (leftKey, leftValue, _p17) {
				var _p18 = _p17;
				var _p21 = _p18._0;
				var _p20 = _p18._1;
				var _p19 = A2(_eeue56$elm_all_dict$AllDict$get, leftKey, _p24);
				if (_p19.ctor === 'Just') {
					return {
						ctor: '_Tuple2',
						_0: A2(_eeue56$elm_all_dict$AllDict$remove, leftKey, _p21),
						_1: A4(bothFunc, leftKey, leftValue, _p19._0, _p20)
					};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _p21,
						_1: A3(leftFunc, leftKey, leftValue, _p20)
					};
				}
			});
		return function (_p22) {
			var _p23 = _p22;
			return A3(
				_elm_lang$core$List$foldl,
				goRight(_p23._0),
				_p23._1,
				_p15._1);
		}(
			A3(
				_Gizra$elm_dictlist$AllDictList$foldl,
				goLeft,
				{ctor: '_Tuple2', _0: _p24, _1: initialResult},
				leftDict));
	});
var _Gizra$elm_dictlist$AllDictList$isEmpty = function (_p25) {
	var _p26 = _p25;
	return _elm_lang$core$List$isEmpty(_p26._1);
};
var _Gizra$elm_dictlist$AllDictList$size = function (_p27) {
	var _p28 = _p27;
	return _eeue56$elm_all_dict$AllDict$size(_p28._0);
};
var _Gizra$elm_dictlist$AllDictList$member = F2(
	function (key, _p29) {
		var _p30 = _p29;
		return A2(_eeue56$elm_all_dict$AllDict$member, key, _p30._0);
	});
var _Gizra$elm_dictlist$AllDictList$get = F2(
	function (key, _p31) {
		var _p32 = _p31;
		return A2(_eeue56$elm_all_dict$AllDict$get, key, _p32._0);
	});
var _Gizra$elm_dictlist$AllDictList$getOrd = function (_p33) {
	var _p34 = _p33;
	return _eeue56$elm_all_dict$AllDict$getOrd(_p34._0);
};
var _Gizra$elm_dictlist$AllDictList$fullEq = F2(
	function (first, second) {
		return _elm_lang$core$Native_Utils.eq(
			_Gizra$elm_dictlist$AllDictList$toList(first),
			_Gizra$elm_dictlist$AllDictList$toList(second)) && _elm_lang$core$Native_Utils.eq(
			_Gizra$elm_dictlist$AllDictList$getOrd(first),
			_Gizra$elm_dictlist$AllDictList$getOrd(second));
	});
var _Gizra$elm_dictlist$AllDictList$eq = F2(
	function (first, second) {
		return _elm_lang$core$Native_Utils.eq(
			_Gizra$elm_dictlist$AllDictList$toList(first),
			_Gizra$elm_dictlist$AllDictList$toList(second));
	});
var _Gizra$elm_dictlist$AllDictList$getAt = F2(
	function (index, _p35) {
		var _p36 = _p35;
		return A2(
			_elm_lang$core$Maybe$andThen,
			function (key) {
				return A2(
					_elm_lang$core$Maybe$map,
					function (value) {
						return {ctor: '_Tuple2', _0: key, _1: value};
					},
					A2(_eeue56$elm_all_dict$AllDict$get, key, _p36._0));
			},
			A2(_elm_community$list_extra$List_Extra$getAt, index, _p36._1));
	});
var _Gizra$elm_dictlist$AllDictList$getKeyAt = F2(
	function (index, _p37) {
		var _p38 = _p37;
		return A2(_elm_community$list_extra$List_Extra$getAt, index, _p38._1);
	});
var _Gizra$elm_dictlist$AllDictList$indexOfKey = F2(
	function (key, _p39) {
		var _p40 = _p39;
		return A2(_elm_community$list_extra$List_Extra$elemIndex, key, _p40._1);
	});
var _Gizra$elm_dictlist$AllDictList$next = F2(
	function (key, dictlist) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			function (index) {
				return A2(_Gizra$elm_dictlist$AllDictList$getAt, index + 1, dictlist);
			},
			A2(_Gizra$elm_dictlist$AllDictList$indexOfKey, key, dictlist));
	});
var _Gizra$elm_dictlist$AllDictList$previous = F2(
	function (key, dictlist) {
		return A2(
			_elm_lang$core$Maybe$andThen,
			function (index) {
				return A2(_Gizra$elm_dictlist$AllDictList$getAt, index - 1, dictlist);
			},
			A2(_Gizra$elm_dictlist$AllDictList$indexOfKey, key, dictlist));
	});
var _Gizra$elm_dictlist$AllDictList$atRelativePosition = F2(
	function (position, dictlist) {
		var _p41 = position;
		if (_p41.ctor === 'BeforeKey') {
			return A2(_Gizra$elm_dictlist$AllDictList$previous, _p41._0, dictlist);
		} else {
			return A2(_Gizra$elm_dictlist$AllDictList$next, _p41._0, dictlist);
		}
	});
var _Gizra$elm_dictlist$AllDictList$minimum = function (_p42) {
	var _p43 = _p42;
	var go = F3(
		function (_p44, value, acc) {
			var _p45 = acc;
			if (_p45.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Just(value);
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(_elm_lang$core$Basics$min, _p45._0, value));
			}
		});
	return A3(_eeue56$elm_all_dict$AllDict$foldl, go, _elm_lang$core$Maybe$Nothing, _p43._0);
};
var _Gizra$elm_dictlist$AllDictList$maximum = function (_p46) {
	var _p47 = _p46;
	var go = F3(
		function (_p48, value, acc) {
			var _p49 = acc;
			if (_p49.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Just(value);
			} else {
				return _elm_lang$core$Maybe$Just(
					A2(_elm_lang$core$Basics$max, _p49._0, value));
			}
		});
	return A3(_eeue56$elm_all_dict$AllDict$foldl, go, _elm_lang$core$Maybe$Nothing, _p47._0);
};
var _Gizra$elm_dictlist$AllDictList$product = function (_p50) {
	var _p51 = _p50;
	return A3(
		_eeue56$elm_all_dict$AllDict$foldl,
		_elm_lang$core$Basics$always(
			F2(
				function (x, y) {
					return x * y;
				})),
		1,
		_p51._0);
};
var _Gizra$elm_dictlist$AllDictList$sum = function (_p52) {
	var _p53 = _p52;
	return A3(
		_eeue56$elm_all_dict$AllDict$foldl,
		_elm_lang$core$Basics$always(
			F2(
				function (x, y) {
					return x + y;
				})),
		0,
		_p53._0);
};
var _Gizra$elm_dictlist$AllDictList$any = F2(
	function (func, _p54) {
		var _p55 = _p54;
		var go = function (innerList) {
			go:
			while (true) {
				var _p56 = innerList;
				if (_p56.ctor === '[]') {
					return false;
				} else {
					var _p57 = _p56._0;
					if (A2(
						func,
						_p57,
						A2(_Gizra$elm_dictlist$AllDictList$unsafeGet, _p57, _p55._0))) {
						return true;
					} else {
						var _v29 = _p56._1;
						innerList = _v29;
						continue go;
					}
				}
			}
		};
		return go(_p55._1);
	});
var _Gizra$elm_dictlist$AllDictList$all = F2(
	function (func, dictlist) {
		return !A2(
			_Gizra$elm_dictlist$AllDictList$any,
			F2(
				function (key, value) {
					return !A2(func, key, value);
				}),
			dictlist);
	});
var _Gizra$elm_dictlist$AllDictList$length = _Gizra$elm_dictlist$AllDictList$size;
var _Gizra$elm_dictlist$AllDictList$head = function (_p58) {
	var _p59 = _p58;
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (key) {
			return A2(
				_elm_lang$core$Maybe$map,
				function (value) {
					return {ctor: '_Tuple2', _0: key, _1: value};
				},
				A2(_eeue56$elm_all_dict$AllDict$get, key, _p59._0));
		},
		_elm_lang$core$List$head(_p59._1));
};
var _Gizra$elm_dictlist$AllDictList$AllDictList = F2(
	function (a, b) {
		return {ctor: 'AllDictList', _0: a, _1: b};
	});
var _Gizra$elm_dictlist$AllDictList$cons = F3(
	function (key, value, _p60) {
		var _p61 = _p60;
		var _p63 = _p61._1;
		var _p62 = _p61._0;
		var restOfList = A2(_eeue56$elm_all_dict$AllDict$member, key, _p62) ? A2(_elm_community$list_extra$List_Extra$remove, key, _p63) : _p63;
		return A2(
			_Gizra$elm_dictlist$AllDictList$AllDictList,
			A3(_eeue56$elm_all_dict$AllDict$insert, key, value, _p62),
			{ctor: '::', _0: key, _1: restOfList});
	});
var _Gizra$elm_dictlist$AllDictList$append = F2(
	function (t1, t2) {
		var go = F3(
			function (key, value, acc) {
				return A2(_Gizra$elm_dictlist$AllDictList$member, key, acc) ? acc : A3(_Gizra$elm_dictlist$AllDictList$cons, key, value, acc);
			});
		return A3(_Gizra$elm_dictlist$AllDictList$foldr, go, t2, t1);
	});
var _Gizra$elm_dictlist$AllDictList$union = F2(
	function (t1, t2) {
		return A3(_Gizra$elm_dictlist$AllDictList$foldr, _Gizra$elm_dictlist$AllDictList$cons, t2, t1);
	});
var _Gizra$elm_dictlist$AllDictList$tail = function (_p64) {
	var _p65 = _p64;
	var _p66 = _p65._1;
	if (_p66.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A2(
				_Gizra$elm_dictlist$AllDictList$AllDictList,
				A2(_eeue56$elm_all_dict$AllDict$remove, _p66._0, _p65._0),
				_p66._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _Gizra$elm_dictlist$AllDictList$reverse = function (_p67) {
	var _p68 = _p67;
	return A2(
		_Gizra$elm_dictlist$AllDictList$AllDictList,
		_p68._0,
		_elm_lang$core$List$reverse(_p68._1));
};
var _Gizra$elm_dictlist$AllDictList$take = F2(
	function (n, _p69) {
		var _p70 = _p69;
		var _p71 = _p70._0;
		var go = function (key) {
			return A2(
				_eeue56$elm_all_dict$AllDict$insert,
				key,
				A2(_Gizra$elm_dictlist$AllDictList$unsafeGet, key, _p71));
		};
		var newList = A2(_elm_lang$core$List$take, n, _p70._1);
		var newDict = A3(
			_elm_lang$core$List$foldl,
			go,
			_eeue56$elm_all_dict$AllDict$empty(
				_eeue56$elm_all_dict$AllDict$getOrd(_p71)),
			newList);
		return A2(_Gizra$elm_dictlist$AllDictList$AllDictList, newDict, newList);
	});
var _Gizra$elm_dictlist$AllDictList$drop = F2(
	function (n, _p72) {
		var _p73 = _p72;
		var _p74 = _p73._0;
		var go = function (key) {
			return A2(
				_eeue56$elm_all_dict$AllDict$insert,
				key,
				A2(_Gizra$elm_dictlist$AllDictList$unsafeGet, key, _p74));
		};
		var newList = A2(_elm_lang$core$List$drop, n, _p73._1);
		var newDict = A3(
			_elm_lang$core$List$foldl,
			go,
			_eeue56$elm_all_dict$AllDict$empty(
				_eeue56$elm_all_dict$AllDict$getOrd(_p74)),
			newList);
		return A2(_Gizra$elm_dictlist$AllDictList$AllDictList, newDict, newList);
	});
var _Gizra$elm_dictlist$AllDictList$sort = function (dictList) {
	var _p75 = dictList;
	return A2(
		_Gizra$elm_dictlist$AllDictList$AllDictList,
		_p75._0,
		A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Tuple$first,
			A2(
				_elm_lang$core$List$sortBy,
				_elm_lang$core$Tuple$second,
				_Gizra$elm_dictlist$AllDictList$toList(dictList))));
};
var _Gizra$elm_dictlist$AllDictList$sortBy = F2(
	function (func, dictList) {
		var _p76 = dictList;
		return A2(
			_Gizra$elm_dictlist$AllDictList$AllDictList,
			_p76._0,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(
					_elm_lang$core$List$sortBy,
					function (_p77) {
						return func(
							_elm_lang$core$Tuple$second(_p77));
					},
					_Gizra$elm_dictlist$AllDictList$toList(dictList))));
	});
var _Gizra$elm_dictlist$AllDictList$sortWith = F2(
	function (func, dictList) {
		var _p78 = dictList;
		return A2(
			_Gizra$elm_dictlist$AllDictList$AllDictList,
			_p78._0,
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(
					_elm_lang$core$List$sortWith,
					F2(
						function (v1, v2) {
							return A2(
								func,
								_elm_lang$core$Tuple$second(v1),
								_elm_lang$core$Tuple$second(v2));
						}),
					_Gizra$elm_dictlist$AllDictList$toList(dictList))));
	});
var _Gizra$elm_dictlist$AllDictList$insertAfter = F4(
	function (afterKey, key, value, _p79) {
		var _p80 = _p79;
		var _p84 = _p80._1;
		var _p83 = _p80._0;
		var newList = function () {
			if (_elm_lang$core$Native_Utils.eq(afterKey, key)) {
				return _p84;
			} else {
				var listWithoutKey = A2(_eeue56$elm_all_dict$AllDict$member, key, _p83) ? A2(_elm_community$list_extra$List_Extra$remove, key, _p84) : _p84;
				var _p81 = A2(_elm_community$list_extra$List_Extra$elemIndex, afterKey, listWithoutKey);
				if (_p81.ctor === 'Just') {
					var _p82 = _p81._0;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$List$take, _p82 + 1, listWithoutKey),
						{
							ctor: '::',
							_0: key,
							_1: A2(_elm_lang$core$List$drop, _p82 + 1, listWithoutKey)
						});
				} else {
					return A2(
						_elm_lang$core$Basics_ops['++'],
						listWithoutKey,
						{
							ctor: '::',
							_0: key,
							_1: {ctor: '[]'}
						});
				}
			}
		}();
		var newDict = A3(_eeue56$elm_all_dict$AllDict$insert, key, value, _p83);
		return A2(_Gizra$elm_dictlist$AllDictList$AllDictList, newDict, newList);
	});
var _Gizra$elm_dictlist$AllDictList$insertBefore = F4(
	function (beforeKey, key, value, _p85) {
		var _p86 = _p85;
		var _p90 = _p86._1;
		var _p89 = _p86._0;
		var newList = function () {
			if (_elm_lang$core$Native_Utils.eq(beforeKey, key)) {
				return _p90;
			} else {
				var listWithoutKey = A2(_eeue56$elm_all_dict$AllDict$member, key, _p89) ? A2(_elm_community$list_extra$List_Extra$remove, key, _p90) : _p90;
				var _p87 = A2(_elm_community$list_extra$List_Extra$elemIndex, beforeKey, listWithoutKey);
				if (_p87.ctor === 'Just') {
					var _p88 = _p87._0;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						A2(_elm_lang$core$List$take, _p88, listWithoutKey),
						{
							ctor: '::',
							_0: key,
							_1: A2(_elm_lang$core$List$drop, _p88, listWithoutKey)
						});
				} else {
					return {ctor: '::', _0: key, _1: listWithoutKey};
				}
			}
		}();
		var newDict = A3(_eeue56$elm_all_dict$AllDict$insert, key, value, _p89);
		return A2(_Gizra$elm_dictlist$AllDictList$AllDictList, newDict, newList);
	});
var _Gizra$elm_dictlist$AllDictList$insertRelativeTo = function (position) {
	var _p91 = position;
	if (_p91.ctor === 'BeforeKey') {
		return _Gizra$elm_dictlist$AllDictList$insertBefore(_p91._0);
	} else {
		return _Gizra$elm_dictlist$AllDictList$insertAfter(_p91._0);
	}
};
var _Gizra$elm_dictlist$AllDictList$empty = function (ord) {
	return A2(
		_Gizra$elm_dictlist$AllDictList$AllDictList,
		_eeue56$elm_all_dict$AllDict$empty(ord),
		{ctor: '[]'});
};
var _Gizra$elm_dictlist$AllDictList$concat = F2(
	function (ord, lists) {
		return A3(
			_elm_lang$core$List$foldr,
			_Gizra$elm_dictlist$AllDictList$append,
			_Gizra$elm_dictlist$AllDictList$empty(ord),
			lists);
	});
var _Gizra$elm_dictlist$AllDictList$emptyWithOrdFrom = function (_p92) {
	return _Gizra$elm_dictlist$AllDictList$empty(
		_Gizra$elm_dictlist$AllDictList$getOrd(_p92));
};
var _Gizra$elm_dictlist$AllDictList$indexedMap = F2(
	function (func, dictlist) {
		var go = F3(
			function (key, value, _p93) {
				var _p94 = _p93;
				var _p95 = _p94._0;
				return {
					ctor: '_Tuple2',
					_0: _p95 + 1,
					_1: A2(
						_Gizra$elm_dictlist$AllDictList$AllDictList,
						A3(
							_eeue56$elm_all_dict$AllDict$insert,
							key,
							A3(func, _p95, key, value),
							_p94._1._0),
						{ctor: '::', _0: key, _1: _p94._1._1})
				};
			});
		return _Gizra$elm_dictlist$AllDictList$reverse(
			_elm_lang$core$Tuple$second(
				A3(
					_Gizra$elm_dictlist$AllDictList$foldl,
					go,
					{
						ctor: '_Tuple2',
						_0: 0,
						_1: _Gizra$elm_dictlist$AllDictList$emptyWithOrdFrom(dictlist)
					},
					dictlist)));
	});
var _Gizra$elm_dictlist$AllDictList$filterMap = F2(
	function (func, dictlist) {
		var go = F3(
			function (key, value, acc) {
				return A2(
					_elm_lang$core$Maybe$withDefault,
					acc,
					A2(
						_elm_lang$core$Maybe$map,
						function (result) {
							return A3(_Gizra$elm_dictlist$AllDictList$cons, key, result, acc);
						},
						A2(func, key, value)));
			});
		return A3(
			_Gizra$elm_dictlist$AllDictList$foldr,
			go,
			_Gizra$elm_dictlist$AllDictList$emptyWithOrdFrom(dictlist),
			dictlist);
	});
var _Gizra$elm_dictlist$AllDictList$reorder = F2(
	function (newKeys, dictlist) {
		var go = F2(
			function (key, acc) {
				var _p96 = A2(_Gizra$elm_dictlist$AllDictList$get, key, dictlist);
				if (_p96.ctor === 'Just') {
					return A3(_Gizra$elm_dictlist$AllDictList$cons, key, _p96._0, acc);
				} else {
					return acc;
				}
			});
		return A3(
			_elm_lang$core$List$foldr,
			go,
			_Gizra$elm_dictlist$AllDictList$emptyWithOrdFrom(dictlist),
			newKeys);
	});
var _Gizra$elm_dictlist$AllDictList$insert = F3(
	function (key, value, _p97) {
		var _p98 = _p97;
		var _p100 = _p98._1;
		var _p99 = _p98._0;
		var newList = A2(_eeue56$elm_all_dict$AllDict$member, key, _p99) ? _p100 : A2(
			_elm_lang$core$Basics_ops['++'],
			_p100,
			{
				ctor: '::',
				_0: key,
				_1: {ctor: '[]'}
			});
		var newDict = A3(_eeue56$elm_all_dict$AllDict$insert, key, value, _p99);
		return A2(_Gizra$elm_dictlist$AllDictList$AllDictList, newDict, newList);
	});
var _Gizra$elm_dictlist$AllDictList$decodeWithKeys = F3(
	function (ord, keys, func) {
		var go = F3(
			function (jsonValue, key, accum) {
				var _p101 = {
					ctor: '_Tuple2',
					_0: accum,
					_1: A2(
						_elm_lang$core$Json_Decode$decodeValue,
						func(key),
						jsonValue)
				};
				if (_p101._0.ctor === 'Ok') {
					if (_p101._1.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A3(_Gizra$elm_dictlist$AllDictList$insert, key, _p101._1._0, _p101._0._0));
					} else {
						return _elm_lang$core$Result$Err(_p101._1._0);
					}
				} else {
					if (_p101._1.ctor === 'Ok') {
						return accum;
					} else {
						return _elm_lang$core$Result$Err(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p101._0._0,
								A2(_elm_lang$core$Basics_ops['++'], '\n', _p101._1._0)));
					}
				}
			});
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			function (jsonValue) {
				var _p102 = A3(
					_elm_lang$core$List$foldl,
					go(jsonValue),
					_elm_lang$core$Result$Ok(
						_Gizra$elm_dictlist$AllDictList$empty(ord)),
					keys);
				if (_p102.ctor === 'Ok') {
					return _elm_lang$core$Json_Decode$succeed(_p102._0);
				} else {
					return _elm_lang$core$Json_Decode$fail(_p102._0);
				}
			},
			_elm_lang$core$Json_Decode$value);
	});
var _Gizra$elm_dictlist$AllDictList$decodeKeysAndValues = F3(
	function (ord, keyDecoder, func) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			function (keys) {
				return A3(_Gizra$elm_dictlist$AllDictList$decodeWithKeys, ord, keys, func);
			},
			keyDecoder);
	});
var _Gizra$elm_dictlist$AllDictList$filter = F2(
	function (predicate, dictList) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_Gizra$elm_dictlist$AllDictList$insert, key, value, dict) : dict;
			});
		return A3(
			_Gizra$elm_dictlist$AllDictList$foldl,
			add,
			_Gizra$elm_dictlist$AllDictList$emptyWithOrdFrom(dictList),
			dictList);
	});
var _Gizra$elm_dictlist$AllDictList$intersect = F2(
	function (t1, t2) {
		return A2(
			_Gizra$elm_dictlist$AllDictList$filter,
			F2(
				function (k, _p103) {
					return A2(_Gizra$elm_dictlist$AllDictList$member, k, t2);
				}),
			t1);
	});
var _Gizra$elm_dictlist$AllDictList$removeWhen = F2(
	function (pred, dict) {
		return A2(
			_Gizra$elm_dictlist$AllDictList$filter,
			F2(
				function (k, v) {
					return !A2(pred, k, v);
				}),
			dict);
	});
var _Gizra$elm_dictlist$AllDictList$partition = F2(
	function (predicate, dict) {
		var emptyLikeDict = _Gizra$elm_dictlist$AllDictList$emptyWithOrdFrom(dict);
		var add = F3(
			function (key, value, _p104) {
				var _p105 = _p104;
				var _p107 = _p105._1;
				var _p106 = _p105._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_Gizra$elm_dictlist$AllDictList$insert, key, value, _p106),
					_1: _p107
				} : {
					ctor: '_Tuple2',
					_0: _p106,
					_1: A3(_Gizra$elm_dictlist$AllDictList$insert, key, value, _p107)
				};
			});
		return A3(
			_Gizra$elm_dictlist$AllDictList$foldl,
			add,
			{ctor: '_Tuple2', _0: emptyLikeDict, _1: emptyLikeDict},
			dict);
	});
var _Gizra$elm_dictlist$AllDictList$fromList = F2(
	function (ord, assocs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p108, dict) {
					var _p109 = _p108;
					return A3(_Gizra$elm_dictlist$AllDictList$insert, _p109._0, _p109._1, dict);
				}),
			_Gizra$elm_dictlist$AllDictList$empty(ord),
			assocs);
	});
var _Gizra$elm_dictlist$AllDictList$decodeObject = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_Gizra$elm_dictlist$AllDictList$fromList(_elm_lang$core$Basics$identity),
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _Gizra$elm_dictlist$AllDictList$decodeArray = F3(
	function (ord, keyMapper, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			function (_p110) {
				return A2(
					_Gizra$elm_dictlist$AllDictList$fromList,
					ord,
					A2(
						_elm_lang$core$List$map,
						function (value) {
							return {
								ctor: '_Tuple2',
								_0: keyMapper(value),
								_1: value
							};
						},
						_p110));
			},
			_elm_lang$core$Json_Decode$list(valueDecoder));
	});
var _Gizra$elm_dictlist$AllDictList$decodeArray2 = F3(
	function (ord, keyDecoder, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_Gizra$elm_dictlist$AllDictList$fromList(ord),
			_elm_lang$core$Json_Decode$list(
				A3(
					_elm_lang$core$Json_Decode$map2,
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					keyDecoder,
					valueDecoder)));
	});
var _Gizra$elm_dictlist$AllDictList$fromListBy = F3(
	function (ord, keyfn, xs) {
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (x, acc) {
					return A3(
						_Gizra$elm_dictlist$AllDictList$insert,
						keyfn(x),
						x,
						acc);
				}),
			_Gizra$elm_dictlist$AllDictList$empty(ord),
			xs);
	});
var _Gizra$elm_dictlist$AllDictList$keepOnly = F2(
	function (set, dict) {
		return A3(
			_elm_lang$core$Set$foldl,
			F2(
				function (k, acc) {
					return A2(
						_elm_lang$core$Maybe$withDefault,
						acc,
						A2(
							_elm_lang$core$Maybe$map,
							function (v) {
								return A3(_Gizra$elm_dictlist$AllDictList$insert, k, v, acc);
							},
							A2(_Gizra$elm_dictlist$AllDictList$get, k, dict)));
				}),
			_Gizra$elm_dictlist$AllDictList$emptyWithOrdFrom(dict),
			set);
	});
var _Gizra$elm_dictlist$AllDictList$mapKeys = F3(
	function (ord, keyMapper, dict) {
		var addKey = F3(
			function (key, value, d) {
				return A3(
					_Gizra$elm_dictlist$AllDictList$insert,
					keyMapper(key),
					value,
					d);
			});
		return A3(
			_Gizra$elm_dictlist$AllDictList$foldl,
			addKey,
			_Gizra$elm_dictlist$AllDictList$empty(ord),
			dict);
	});
var _Gizra$elm_dictlist$AllDictList$remove = F2(
	function (key, dictList) {
		var _p111 = dictList;
		var _p112 = _p111._0;
		return A2(_eeue56$elm_all_dict$AllDict$member, key, _p112) ? A2(
			_Gizra$elm_dictlist$AllDictList$AllDictList,
			A2(_eeue56$elm_all_dict$AllDict$remove, key, _p112),
			A2(_elm_community$list_extra$List_Extra$remove, key, _p111._1)) : dictList;
	});
var _Gizra$elm_dictlist$AllDictList$update = F3(
	function (key, alter, dictList) {
		var _p113 = alter(
			A2(_Gizra$elm_dictlist$AllDictList$get, key, dictList));
		if (_p113.ctor === 'Nothing') {
			return A2(_Gizra$elm_dictlist$AllDictList$remove, key, dictList);
		} else {
			return A3(_Gizra$elm_dictlist$AllDictList$insert, key, _p113._0, dictList);
		}
	});
var _Gizra$elm_dictlist$AllDictList$groupBy = F3(
	function (ord, keyfn, list) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return A3(
						_Gizra$elm_dictlist$AllDictList$update,
						keyfn(x),
						function (_p114) {
							return _elm_lang$core$Maybe$Just(
								A2(
									_elm_lang$core$Maybe$withDefault,
									{
										ctor: '::',
										_0: x,
										_1: {ctor: '[]'}
									},
									A2(
										_elm_lang$core$Maybe$map,
										F2(
											function (x, y) {
												return {ctor: '::', _0: x, _1: y};
											})(x),
										_p114)));
						},
						acc);
				}),
			_Gizra$elm_dictlist$AllDictList$empty(ord),
			list);
	});
var _Gizra$elm_dictlist$AllDictList$diff = F2(
	function (t1, t2) {
		return A3(
			_Gizra$elm_dictlist$AllDictList$foldl,
			F3(
				function (k, v, t) {
					return A2(_Gizra$elm_dictlist$AllDictList$remove, k, t);
				}),
			t1,
			t2);
	});
var _Gizra$elm_dictlist$AllDictList$removeMany = F2(
	function (set, dict) {
		return A3(
			_elm_lang$core$Set$foldl,
			F2(
				function (k, acc) {
					return A2(_Gizra$elm_dictlist$AllDictList$remove, k, acc);
				}),
			dict,
			set);
	});
var _Gizra$elm_dictlist$AllDictList$singleton = F3(
	function (ord, key, value) {
		return A2(
			_Gizra$elm_dictlist$AllDictList$AllDictList,
			A3(_eeue56$elm_all_dict$AllDict$singleton, ord, key, value),
			{
				ctor: '::',
				_0: key,
				_1: {ctor: '[]'}
			});
	});
var _Gizra$elm_dictlist$AllDictList$map = F2(
	function (func, _p115) {
		var _p116 = _p115;
		return A2(
			_Gizra$elm_dictlist$AllDictList$AllDictList,
			A2(_eeue56$elm_all_dict$AllDict$map, func, _p116._0),
			_p116._1);
	});
var _Gizra$elm_dictlist$AllDictList$fromAllDict = function (dict) {
	return A2(
		_Gizra$elm_dictlist$AllDictList$AllDictList,
		dict,
		_eeue56$elm_all_dict$AllDict$keys(dict));
};
var _Gizra$elm_dictlist$AllDictList$fromDict = function (dict) {
	var allDict = A3(
		_elm_lang$core$Dict$foldl,
		_eeue56$elm_all_dict$AllDict$insert,
		_eeue56$elm_all_dict$AllDict$empty(_elm_lang$core$Basics$identity),
		dict);
	return A2(
		_Gizra$elm_dictlist$AllDictList$AllDictList,
		allDict,
		_elm_lang$core$Dict$keys(dict));
};
var _Gizra$elm_dictlist$AllDictList$AfterKey = function (a) {
	return {ctor: 'AfterKey', _0: a};
};
var _Gizra$elm_dictlist$AllDictList$BeforeKey = function (a) {
	return {ctor: 'BeforeKey', _0: a};
};
var _Gizra$elm_dictlist$AllDictList$relativePosition = F2(
	function (key, dictlist) {
		var _p117 = A2(_Gizra$elm_dictlist$AllDictList$previous, key, dictlist);
		if (_p117.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				_Gizra$elm_dictlist$AllDictList$AfterKey(_p117._0._0));
		} else {
			var _p118 = A2(_Gizra$elm_dictlist$AllDictList$next, key, dictlist);
			if (_p118.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(
					_Gizra$elm_dictlist$AllDictList$BeforeKey(_p118._0._0));
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}
	});

var _Gizra$elm_dictlist$EveryDictList$mapKeys = _Gizra$elm_dictlist$AllDictList$mapKeys(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$keepOnly = _Gizra$elm_dictlist$AllDictList$keepOnly;
var _Gizra$elm_dictlist$EveryDictList$removeMany = _Gizra$elm_dictlist$AllDictList$removeMany;
var _Gizra$elm_dictlist$EveryDictList$removeWhen = _Gizra$elm_dictlist$AllDictList$removeWhen;
var _Gizra$elm_dictlist$EveryDictList$fromListBy = _Gizra$elm_dictlist$AllDictList$fromListBy(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$groupBy = _Gizra$elm_dictlist$AllDictList$groupBy(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$fromAllDictList = _elm_lang$core$Basics$identity;
var _Gizra$elm_dictlist$EveryDictList$toAllDictList = _elm_lang$core$Basics$identity;
var _Gizra$elm_dictlist$EveryDictList$fromDict = _Gizra$elm_dictlist$AllDictList$fromDict;
var _Gizra$elm_dictlist$EveryDictList$toDict = _Gizra$elm_dictlist$AllDictList$toDict;
var _Gizra$elm_dictlist$EveryDictList$fromList = _Gizra$elm_dictlist$AllDictList$fromList(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$toList = _Gizra$elm_dictlist$AllDictList$toList;
var _Gizra$elm_dictlist$EveryDictList$values = _Gizra$elm_dictlist$AllDictList$values;
var _Gizra$elm_dictlist$EveryDictList$keys = _Gizra$elm_dictlist$AllDictList$keys;
var _Gizra$elm_dictlist$EveryDictList$partition = _Gizra$elm_dictlist$AllDictList$partition;
var _Gizra$elm_dictlist$EveryDictList$filter = _Gizra$elm_dictlist$AllDictList$filter;
var _Gizra$elm_dictlist$EveryDictList$foldr = _Gizra$elm_dictlist$AllDictList$foldr;
var _Gizra$elm_dictlist$EveryDictList$foldl = _Gizra$elm_dictlist$AllDictList$foldl;
var _Gizra$elm_dictlist$EveryDictList$map = _Gizra$elm_dictlist$AllDictList$map;
var _Gizra$elm_dictlist$EveryDictList$merge = _Gizra$elm_dictlist$AllDictList$merge;
var _Gizra$elm_dictlist$EveryDictList$diff = _Gizra$elm_dictlist$AllDictList$diff;
var _Gizra$elm_dictlist$EveryDictList$intersect = _Gizra$elm_dictlist$AllDictList$intersect;
var _Gizra$elm_dictlist$EveryDictList$union = _Gizra$elm_dictlist$AllDictList$union;
var _Gizra$elm_dictlist$EveryDictList$singleton = _Gizra$elm_dictlist$AllDictList$singleton(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$update = _Gizra$elm_dictlist$AllDictList$update;
var _Gizra$elm_dictlist$EveryDictList$remove = _Gizra$elm_dictlist$AllDictList$remove;
var _Gizra$elm_dictlist$EveryDictList$insert = _Gizra$elm_dictlist$AllDictList$insert;
var _Gizra$elm_dictlist$EveryDictList$isEmpty = _Gizra$elm_dictlist$AllDictList$isEmpty;
var _Gizra$elm_dictlist$EveryDictList$size = _Gizra$elm_dictlist$AllDictList$size;
var _Gizra$elm_dictlist$EveryDictList$member = _Gizra$elm_dictlist$AllDictList$member;
var _Gizra$elm_dictlist$EveryDictList$get = _Gizra$elm_dictlist$AllDictList$get;
var _Gizra$elm_dictlist$EveryDictList$eq = _Gizra$elm_dictlist$AllDictList$eq;
var _Gizra$elm_dictlist$EveryDictList$empty = _Gizra$elm_dictlist$AllDictList$empty(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$insertRelativeTo = _Gizra$elm_dictlist$AllDictList$insertRelativeTo;
var _Gizra$elm_dictlist$EveryDictList$atRelativePosition = _Gizra$elm_dictlist$AllDictList$atRelativePosition;
var _Gizra$elm_dictlist$EveryDictList$relativePosition = _Gizra$elm_dictlist$AllDictList$relativePosition;
var _Gizra$elm_dictlist$EveryDictList$insertBefore = _Gizra$elm_dictlist$AllDictList$insertBefore;
var _Gizra$elm_dictlist$EveryDictList$insertAfter = _Gizra$elm_dictlist$AllDictList$insertAfter;
var _Gizra$elm_dictlist$EveryDictList$getAt = _Gizra$elm_dictlist$AllDictList$getAt;
var _Gizra$elm_dictlist$EveryDictList$getKeyAt = _Gizra$elm_dictlist$AllDictList$getKeyAt;
var _Gizra$elm_dictlist$EveryDictList$reorder = _Gizra$elm_dictlist$AllDictList$reorder;
var _Gizra$elm_dictlist$EveryDictList$previous = _Gizra$elm_dictlist$AllDictList$previous;
var _Gizra$elm_dictlist$EveryDictList$next = _Gizra$elm_dictlist$AllDictList$next;
var _Gizra$elm_dictlist$EveryDictList$indexOfKey = _Gizra$elm_dictlist$AllDictList$indexOfKey;
var _Gizra$elm_dictlist$EveryDictList$sortWith = _Gizra$elm_dictlist$AllDictList$sortWith;
var _Gizra$elm_dictlist$EveryDictList$sortBy = _Gizra$elm_dictlist$AllDictList$sortBy;
var _Gizra$elm_dictlist$EveryDictList$sort = _Gizra$elm_dictlist$AllDictList$sort;
var _Gizra$elm_dictlist$EveryDictList$drop = _Gizra$elm_dictlist$AllDictList$drop;
var _Gizra$elm_dictlist$EveryDictList$take = _Gizra$elm_dictlist$AllDictList$take;
var _Gizra$elm_dictlist$EveryDictList$minimum = _Gizra$elm_dictlist$AllDictList$minimum;
var _Gizra$elm_dictlist$EveryDictList$maximum = _Gizra$elm_dictlist$AllDictList$maximum;
var _Gizra$elm_dictlist$EveryDictList$product = _Gizra$elm_dictlist$AllDictList$product;
var _Gizra$elm_dictlist$EveryDictList$sum = _Gizra$elm_dictlist$AllDictList$sum;
var _Gizra$elm_dictlist$EveryDictList$concat = _Gizra$elm_dictlist$AllDictList$concat(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$append = _Gizra$elm_dictlist$AllDictList$append;
var _Gizra$elm_dictlist$EveryDictList$any = _Gizra$elm_dictlist$AllDictList$any;
var _Gizra$elm_dictlist$EveryDictList$all = _Gizra$elm_dictlist$AllDictList$all;
var _Gizra$elm_dictlist$EveryDictList$reverse = _Gizra$elm_dictlist$AllDictList$reverse;
var _Gizra$elm_dictlist$EveryDictList$length = _Gizra$elm_dictlist$AllDictList$length;
var _Gizra$elm_dictlist$EveryDictList$filterMap = _Gizra$elm_dictlist$AllDictList$filterMap;
var _Gizra$elm_dictlist$EveryDictList$indexedMap = _Gizra$elm_dictlist$AllDictList$indexedMap;
var _Gizra$elm_dictlist$EveryDictList$tail = _Gizra$elm_dictlist$AllDictList$tail;
var _Gizra$elm_dictlist$EveryDictList$head = _Gizra$elm_dictlist$AllDictList$head;
var _Gizra$elm_dictlist$EveryDictList$cons = _Gizra$elm_dictlist$AllDictList$cons;
var _Gizra$elm_dictlist$EveryDictList$decodeArray2 = _Gizra$elm_dictlist$AllDictList$decodeArray2(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$decodeArray = _Gizra$elm_dictlist$AllDictList$decodeArray(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$decodeKeysAndValues = _Gizra$elm_dictlist$AllDictList$decodeKeysAndValues(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$decodeWithKeys = _Gizra$elm_dictlist$AllDictList$decodeWithKeys(_elm_lang$core$Basics$toString);
var _Gizra$elm_dictlist$EveryDictList$decodeObject = _Gizra$elm_dictlist$AllDictList$decodeObject;

var _stoeffel$editable$Editable$isDirtyWith = F2(
	function (f, x) {
		var _p0 = x;
		if (_p0.ctor === 'ReadOnly') {
			return false;
		} else {
			return A2(f, _p0._0, _p0._1);
		}
	});
var _stoeffel$editable$Editable$isDirty = function (x) {
	return A2(
		_stoeffel$editable$Editable$isDirtyWith,
		F2(
			function (x, y) {
				return !_elm_lang$core$Native_Utils.eq(x, y);
			}),
		x);
};
var _stoeffel$editable$Editable$value = function (x) {
	var _p1 = x;
	if (_p1.ctor === 'Editable') {
		return _p1._1;
	} else {
		return _p1._0;
	}
};
var _stoeffel$editable$Editable$ReadOnly = function (a) {
	return {ctor: 'ReadOnly', _0: a};
};
var _stoeffel$editable$Editable$save = function (x) {
	var _p2 = x;
	if (_p2.ctor === 'Editable') {
		return _stoeffel$editable$Editable$ReadOnly(_p2._1);
	} else {
		return x;
	}
};
var _stoeffel$editable$Editable$cancel = function (x) {
	var _p3 = x;
	if (_p3.ctor === 'Editable') {
		return _stoeffel$editable$Editable$ReadOnly(_p3._0);
	} else {
		return x;
	}
};
var _stoeffel$editable$Editable$Editable = F2(
	function (a, b) {
		return {ctor: 'Editable', _0: a, _1: b};
	});
var _stoeffel$editable$Editable$edit = function (x) {
	var _p4 = x;
	if (_p4.ctor === 'Editable') {
		return x;
	} else {
		var _p5 = _p4._0;
		return A2(_stoeffel$editable$Editable$Editable, _p5, _p5);
	}
};
var _stoeffel$editable$Editable$map = F2(
	function (f, x) {
		var _p6 = x;
		if (_p6.ctor === 'Editable') {
			return A2(
				_stoeffel$editable$Editable$Editable,
				_p6._0,
				f(_p6._1));
		} else {
			return _stoeffel$editable$Editable$ReadOnly(_p6._0);
		}
	});
var _stoeffel$editable$Editable$update = function (value) {
	return _stoeffel$editable$Editable$map(
		_elm_lang$core$Basics$always(value));
};

var _elm_lang$http$Native_Http = function() {


// ENCODING AND DECODING

function encodeUri(string)
{
	return encodeURIComponent(string);
}

function decodeUri(string)
{
	try
	{
		return _elm_lang$core$Maybe$Just(decodeURIComponent(string));
	}
	catch(e)
	{
		return _elm_lang$core$Maybe$Nothing;
	}
}


// SEND REQUEST

function toTask(request, maybeProgress)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var xhr = new XMLHttpRequest();

		configureProgress(xhr, maybeProgress);

		xhr.addEventListener('error', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NetworkError' }));
		});
		xhr.addEventListener('timeout', function() {
			callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'Timeout' }));
		});
		xhr.addEventListener('load', function() {
			callback(handleResponse(xhr, request.expect.responseToResult));
		});

		try
		{
			xhr.open(request.method, request.url, true);
		}
		catch (e)
		{
			return callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'BadUrl', _0: request.url }));
		}

		configureRequest(xhr, request);
		send(xhr, request.body);

		return function() { xhr.abort(); };
	});
}

function configureProgress(xhr, maybeProgress)
{
	if (maybeProgress.ctor === 'Nothing')
	{
		return;
	}

	xhr.addEventListener('progress', function(event) {
		if (!event.lengthComputable)
		{
			return;
		}
		_elm_lang$core$Native_Scheduler.rawSpawn(maybeProgress._0({
			bytes: event.loaded,
			bytesExpected: event.total
		}));
	});
}

function configureRequest(xhr, request)
{
	function setHeader(pair)
	{
		xhr.setRequestHeader(pair._0, pair._1);
	}

	A2(_elm_lang$core$List$map, setHeader, request.headers);
	xhr.responseType = request.expect.responseType;
	xhr.withCredentials = request.withCredentials;

	if (request.timeout.ctor === 'Just')
	{
		xhr.timeout = request.timeout._0;
	}
}

function send(xhr, body)
{
	switch (body.ctor)
	{
		case 'EmptyBody':
			xhr.send();
			return;

		case 'StringBody':
			xhr.setRequestHeader('Content-Type', body._0);
			xhr.send(body._1);
			return;

		case 'FormDataBody':
			xhr.send(body._0);
			return;
	}
}


// RESPONSES

function handleResponse(xhr, responseToResult)
{
	var response = toResponse(xhr);

	if (xhr.status < 200 || 300 <= xhr.status)
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadStatus',
			_0: response
		});
	}

	var result = responseToResult(response);

	if (result.ctor === 'Ok')
	{
		return _elm_lang$core$Native_Scheduler.succeed(result._0);
	}
	else
	{
		response.body = xhr.responseText;
		return _elm_lang$core$Native_Scheduler.fail({
			ctor: 'BadPayload',
			_0: result._0,
			_1: response
		});
	}
}

function toResponse(xhr)
{
	return {
		status: { code: xhr.status, message: xhr.statusText },
		headers: parseHeaders(xhr.getAllResponseHeaders()),
		url: xhr.responseURL,
		body: xhr.response
	};
}

function parseHeaders(rawHeaders)
{
	var headers = _elm_lang$core$Dict$empty;

	if (!rawHeaders)
	{
		return headers;
	}

	var headerPairs = rawHeaders.split('\u000d\u000a');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf('\u003a\u0020');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3(_elm_lang$core$Dict$update, key, function(oldValue) {
				if (oldValue.ctor === 'Just')
				{
					return _elm_lang$core$Maybe$Just(value + ', ' + oldValue._0);
				}
				return _elm_lang$core$Maybe$Just(value);
			}, headers);
		}
	}

	return headers;
}


// EXPECTORS

function expectStringResponse(responseToResult)
{
	return {
		responseType: 'text',
		responseToResult: responseToResult
	};
}

function mapExpect(func, expect)
{
	return {
		responseType: expect.responseType,
		responseToResult: function(response) {
			var convertedResponse = expect.responseToResult(response);
			return A2(_elm_lang$core$Result$map, func, convertedResponse);
		}
	};
}


// BODY

function multipart(parts)
{
	var formData = new FormData();

	while (parts.ctor !== '[]')
	{
		var part = parts._0;
		formData.append(part._0, part._1);
		parts = parts._1;
	}

	return { ctor: 'FormDataBody', _0: formData };
}

return {
	toTask: F2(toTask),
	expectStringResponse: expectStringResponse,
	mapExpect: F2(mapExpect),
	multipart: multipart,
	encodeUri: encodeUri,
	decodeUri: decodeUri
};

}();

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$http$Http_Internal$map = F2(
	function (func, request) {
		return _elm_lang$core$Native_Utils.update(
			request,
			{
				expect: A2(_elm_lang$http$Native_Http.mapExpect, func, request.expect)
			});
	});
var _elm_lang$http$Http_Internal$RawRequest = F7(
	function (a, b, c, d, e, f, g) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g};
	});
var _elm_lang$http$Http_Internal$Request = function (a) {
	return {ctor: 'Request', _0: a};
};
var _elm_lang$http$Http_Internal$Expect = {ctor: 'Expect'};
var _elm_lang$http$Http_Internal$FormDataBody = {ctor: 'FormDataBody'};
var _elm_lang$http$Http_Internal$StringBody = F2(
	function (a, b) {
		return {ctor: 'StringBody', _0: a, _1: b};
	});
var _elm_lang$http$Http_Internal$EmptyBody = {ctor: 'EmptyBody'};
var _elm_lang$http$Http_Internal$Header = F2(
	function (a, b) {
		return {ctor: 'Header', _0: a, _1: b};
	});

var _elm_lang$http$Http$decodeUri = _elm_lang$http$Native_Http.decodeUri;
var _elm_lang$http$Http$encodeUri = _elm_lang$http$Native_Http.encodeUri;
var _elm_lang$http$Http$expectStringResponse = _elm_lang$http$Native_Http.expectStringResponse;
var _elm_lang$http$Http$expectJson = function (decoder) {
	return _elm_lang$http$Http$expectStringResponse(
		function (response) {
			return A2(_elm_lang$core$Json_Decode$decodeString, decoder, response.body);
		});
};
var _elm_lang$http$Http$expectString = _elm_lang$http$Http$expectStringResponse(
	function (response) {
		return _elm_lang$core$Result$Ok(response.body);
	});
var _elm_lang$http$Http$multipartBody = _elm_lang$http$Native_Http.multipart;
var _elm_lang$http$Http$stringBody = _elm_lang$http$Http_Internal$StringBody;
var _elm_lang$http$Http$jsonBody = function (value) {
	return A2(
		_elm_lang$http$Http_Internal$StringBody,
		'application/json',
		A2(_elm_lang$core$Json_Encode$encode, 0, value));
};
var _elm_lang$http$Http$emptyBody = _elm_lang$http$Http_Internal$EmptyBody;
var _elm_lang$http$Http$header = _elm_lang$http$Http_Internal$Header;
var _elm_lang$http$Http$request = _elm_lang$http$Http_Internal$Request;
var _elm_lang$http$Http$post = F3(
	function (url, body, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'POST',
				headers: {ctor: '[]'},
				url: url,
				body: body,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$get = F2(
	function (url, decoder) {
		return _elm_lang$http$Http$request(
			{
				method: 'GET',
				headers: {ctor: '[]'},
				url: url,
				body: _elm_lang$http$Http$emptyBody,
				expect: _elm_lang$http$Http$expectJson(decoder),
				timeout: _elm_lang$core$Maybe$Nothing,
				withCredentials: false
			});
	});
var _elm_lang$http$Http$getString = function (url) {
	return _elm_lang$http$Http$request(
		{
			method: 'GET',
			headers: {ctor: '[]'},
			url: url,
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectString,
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false
		});
};
var _elm_lang$http$Http$toTask = function (_p0) {
	var _p1 = _p0;
	return A2(_elm_lang$http$Native_Http.toTask, _p1._0, _elm_lang$core$Maybe$Nothing);
};
var _elm_lang$http$Http$send = F2(
	function (resultToMessage, request) {
		return A2(
			_elm_lang$core$Task$attempt,
			resultToMessage,
			_elm_lang$http$Http$toTask(request));
	});
var _elm_lang$http$Http$Response = F4(
	function (a, b, c, d) {
		return {url: a, status: b, headers: c, body: d};
	});
var _elm_lang$http$Http$BadPayload = F2(
	function (a, b) {
		return {ctor: 'BadPayload', _0: a, _1: b};
	});
var _elm_lang$http$Http$BadStatus = function (a) {
	return {ctor: 'BadStatus', _0: a};
};
var _elm_lang$http$Http$NetworkError = {ctor: 'NetworkError'};
var _elm_lang$http$Http$Timeout = {ctor: 'Timeout'};
var _elm_lang$http$Http$BadUrl = function (a) {
	return {ctor: 'BadUrl', _0: a};
};
var _elm_lang$http$Http$StringPart = F2(
	function (a, b) {
		return {ctor: 'StringPart', _0: a, _1: b};
	});
var _elm_lang$http$Http$stringPart = _elm_lang$http$Http$StringPart;

var _krisajenkins$remotedata$RemoteData$isNotAsked = function (data) {
	var _p0 = data;
	if (_p0.ctor === 'NotAsked') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isLoading = function (data) {
	var _p1 = data;
	if (_p1.ctor === 'Loading') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isFailure = function (data) {
	var _p2 = data;
	if (_p2.ctor === 'Failure') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$isSuccess = function (data) {
	var _p3 = data;
	if (_p3.ctor === 'Success') {
		return true;
	} else {
		return false;
	}
};
var _krisajenkins$remotedata$RemoteData$withDefault = F2(
	function ($default, data) {
		var _p4 = data;
		if (_p4.ctor === 'Success') {
			return _p4._0;
		} else {
			return $default;
		}
	});
var _krisajenkins$remotedata$RemoteData$Success = function (a) {
	return {ctor: 'Success', _0: a};
};
var _krisajenkins$remotedata$RemoteData$succeed = _krisajenkins$remotedata$RemoteData$Success;
var _krisajenkins$remotedata$RemoteData$prism = {
	reverseGet: _krisajenkins$remotedata$RemoteData$Success,
	getOption: function (data) {
		var _p5 = data;
		if (_p5.ctor === 'Success') {
			return _elm_lang$core$Maybe$Just(_p5._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	}
};
var _krisajenkins$remotedata$RemoteData$Failure = function (a) {
	return {ctor: 'Failure', _0: a};
};
var _krisajenkins$remotedata$RemoteData$fromResult = function (result) {
	var _p6 = result;
	if (_p6.ctor === 'Err') {
		return _krisajenkins$remotedata$RemoteData$Failure(_p6._0);
	} else {
		return _krisajenkins$remotedata$RemoteData$Success(_p6._0);
	}
};
var _krisajenkins$remotedata$RemoteData$asCmd = _elm_lang$core$Task$attempt(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$sendRequest = _elm_lang$http$Http$send(_krisajenkins$remotedata$RemoteData$fromResult);
var _krisajenkins$remotedata$RemoteData$fromTask = function (_p7) {
	return A2(
		_elm_lang$core$Task$onError,
		function (_p8) {
			return _elm_lang$core$Task$succeed(
				_krisajenkins$remotedata$RemoteData$Failure(_p8));
		},
		A2(_elm_lang$core$Task$map, _krisajenkins$remotedata$RemoteData$Success, _p7));
};
var _krisajenkins$remotedata$RemoteData$Loading = {ctor: 'Loading'};
var _krisajenkins$remotedata$RemoteData$NotAsked = {ctor: 'NotAsked'};
var _krisajenkins$remotedata$RemoteData$map = F2(
	function (f, data) {
		var _p9 = data;
		switch (_p9.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(
					f(_p9._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Failure(_p9._0);
		}
	});
var _krisajenkins$remotedata$RemoteData$toMaybe = function (_p10) {
	return A2(
		_krisajenkins$remotedata$RemoteData$withDefault,
		_elm_lang$core$Maybe$Nothing,
		A2(_krisajenkins$remotedata$RemoteData$map, _elm_lang$core$Maybe$Just, _p10));
};
var _krisajenkins$remotedata$RemoteData$mapError = F2(
	function (f, data) {
		var _p11 = data;
		switch (_p11.ctor) {
			case 'Success':
				return _krisajenkins$remotedata$RemoteData$Success(_p11._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(
					f(_p11._0));
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$mapBoth = F2(
	function (successFn, errorFn) {
		return function (_p12) {
			return A2(
				_krisajenkins$remotedata$RemoteData$mapError,
				errorFn,
				A2(_krisajenkins$remotedata$RemoteData$map, successFn, _p12));
		};
	});
var _krisajenkins$remotedata$RemoteData$andThen = F2(
	function (f, data) {
		var _p13 = data;
		switch (_p13.ctor) {
			case 'Success':
				return f(_p13._0);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(_p13._0);
			case 'NotAsked':
				return _krisajenkins$remotedata$RemoteData$NotAsked;
			default:
				return _krisajenkins$remotedata$RemoteData$Loading;
		}
	});
var _krisajenkins$remotedata$RemoteData$andMap = F2(
	function (wrappedValue, wrappedFunction) {
		var _p14 = wrappedFunction;
		switch (_p14.ctor) {
			case 'Success':
				return A2(_krisajenkins$remotedata$RemoteData$map, _p14._0, wrappedValue);
			case 'Failure':
				return _krisajenkins$remotedata$RemoteData$Failure(_p14._0);
			case 'Loading':
				return _krisajenkins$remotedata$RemoteData$Loading;
			default:
				return _krisajenkins$remotedata$RemoteData$NotAsked;
		}
	});
var _krisajenkins$remotedata$RemoteData$map2 = F3(
	function (f, a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(_krisajenkins$remotedata$RemoteData$map, f, a));
	});
var _krisajenkins$remotedata$RemoteData$map3 = F4(
	function (f, a, b, c) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			c,
			A2(
				_krisajenkins$remotedata$RemoteData$andMap,
				b,
				A2(_krisajenkins$remotedata$RemoteData$map, f, a)));
	});
var _krisajenkins$remotedata$RemoteData$append = F2(
	function (a, b) {
		return A2(
			_krisajenkins$remotedata$RemoteData$andMap,
			b,
			A2(
				_krisajenkins$remotedata$RemoteData$map,
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}),
				a));
	});
var _krisajenkins$remotedata$RemoteData$update = F2(
	function (f, remoteData) {
		var _p15 = remoteData;
		switch (_p15.ctor) {
			case 'Success':
				var _p16 = f(_p15._0);
				var first = _p16._0;
				var second = _p16._1;
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Success(first),
					_1: second
				};
			case 'NotAsked':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$NotAsked, _1: _elm_lang$core$Platform_Cmd$none};
			case 'Loading':
				return {ctor: '_Tuple2', _0: _krisajenkins$remotedata$RemoteData$Loading, _1: _elm_lang$core$Platform_Cmd$none};
			default:
				return {
					ctor: '_Tuple2',
					_0: _krisajenkins$remotedata$RemoteData$Failure(_p15._0),
					_1: _elm_lang$core$Platform_Cmd$none
				};
		}
	});

var _Gizra$elm_editable_webdata$Editable_WebData$toWebData = function (_p0) {
	var _p1 = _p0;
	return _p1._1;
};
var _Gizra$elm_editable_webdata$Editable_WebData$toEditable = function (_p2) {
	var _p3 = _p2;
	return _p3._0;
};
var _Gizra$elm_editable_webdata$Editable_WebData$EditableWebData = F2(
	function (a, b) {
		return {ctor: 'EditableWebData', _0: a, _1: b};
	});
var _Gizra$elm_editable_webdata$Editable_WebData$create = function (record) {
	return A2(
		_Gizra$elm_editable_webdata$Editable_WebData$EditableWebData,
		_stoeffel$editable$Editable$ReadOnly(record),
		_krisajenkins$remotedata$RemoteData$NotAsked);
};
var _Gizra$elm_editable_webdata$Editable_WebData$map = F2(
	function (f, _p4) {
		var _p5 = _p4;
		return A2(
			_Gizra$elm_editable_webdata$Editable_WebData$EditableWebData,
			f(_p5._0),
			_p5._1);
	});
var _Gizra$elm_editable_webdata$Editable_WebData$state = F2(
	function (newWebData, _p6) {
		var _p7 = _p6;
		return A2(_Gizra$elm_editable_webdata$Editable_WebData$EditableWebData, _p7._0, newWebData);
	});

var _Gizra$elm_spa_exmple$Currency_Model$USD = {ctor: 'USD'};
var _Gizra$elm_spa_exmple$Currency_Model$ILS = {ctor: 'ILS'};
var _Gizra$elm_spa_exmple$Currency_Model$EUR = {ctor: 'EUR'};

var _cuducos$elm_format_number$FormatNumber_Locales$Locale = F5(
	function (a, b, c, d, e) {
		return {decimals: a, thousandSeparator: b, decimalSeparator: c, negativePrefix: d, negativeSuffix: e};
	});
var _cuducos$elm_format_number$FormatNumber_Locales$frenchLocale = A5(_cuducos$elm_format_number$FormatNumber_Locales$Locale, 3, ' ', ',', '−', '');
var _cuducos$elm_format_number$FormatNumber_Locales$spanishLocale = A5(_cuducos$elm_format_number$FormatNumber_Locales$Locale, 3, '.', ',', '−', '');
var _cuducos$elm_format_number$FormatNumber_Locales$usLocale = A5(_cuducos$elm_format_number$FormatNumber_Locales$Locale, 2, ',', '.', '−', '');

var _myrho$elm_round$Round$funNum = F3(
	function (fun, s, fl) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			1 / 0,
			_elm_lang$core$Result$toMaybe(
				_elm_lang$core$String$toFloat(
					A2(fun, s, fl))));
	});
var _myrho$elm_round$Round$splitComma = function (str) {
	var _p0 = A2(_elm_lang$core$String$split, '.', str);
	if (_p0.ctor === '::') {
		if (_p0._1.ctor === '::') {
			return {ctor: '_Tuple2', _0: _p0._0, _1: _p0._1._0};
		} else {
			return {ctor: '_Tuple2', _0: _p0._0, _1: '0'};
		}
	} else {
		return {ctor: '_Tuple2', _0: '0', _1: '0'};
	}
};
var _myrho$elm_round$Round$toDecimal = function (fl) {
	var _p1 = A2(
		_elm_lang$core$String$split,
		'e',
		_elm_lang$core$Basics$toString(fl));
	if (_p1.ctor === '::') {
		if (_p1._1.ctor === '::') {
			var _p4 = _p1._1._0;
			var _p2 = function () {
				var hasSign = _elm_lang$core$Native_Utils.cmp(fl, 0) < 0;
				var _p3 = _myrho$elm_round$Round$splitComma(_p1._0);
				var b = _p3._0;
				var a = _p3._1;
				return {
					ctor: '_Tuple3',
					_0: hasSign ? '-' : '',
					_1: hasSign ? A2(_elm_lang$core$String$dropLeft, 1, b) : b,
					_2: a
				};
			}();
			var sign = _p2._0;
			var before = _p2._1;
			var after = _p2._2;
			var e = A2(
				_elm_lang$core$Maybe$withDefault,
				0,
				_elm_lang$core$Result$toMaybe(
					_elm_lang$core$String$toInt(
						A2(_elm_lang$core$String$startsWith, '+', _p4) ? A2(_elm_lang$core$String$dropLeft, 1, _p4) : _p4)));
			var newBefore = (_elm_lang$core$Native_Utils.cmp(e, 0) > -1) ? before : ((_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$Basics$abs(e),
				_elm_lang$core$String$length(before)) < 0) ? A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$String$left,
					_elm_lang$core$String$length(before) - _elm_lang$core$Basics$abs(e),
					before),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					A2(
						_elm_lang$core$String$right,
						_elm_lang$core$Basics$abs(e),
						before))) : A2(
				_elm_lang$core$Basics_ops['++'],
				'0.',
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$String$repeat,
						_elm_lang$core$Basics$abs(e) - _elm_lang$core$String$length(before),
						'0'),
					before)));
			var newAfter = (_elm_lang$core$Native_Utils.cmp(e, 0) < 1) ? after : ((_elm_lang$core$Native_Utils.cmp(
				e,
				_elm_lang$core$String$length(after)) < 0) ? A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_elm_lang$core$String$left, e, after),
				A2(
					_elm_lang$core$Basics_ops['++'],
					'.',
					A2(
						_elm_lang$core$String$right,
						_elm_lang$core$String$length(after) - e,
						after))) : A2(
				_elm_lang$core$Basics_ops['++'],
				after,
				A2(
					_elm_lang$core$String$repeat,
					e - _elm_lang$core$String$length(after),
					'0')));
			return A2(
				_elm_lang$core$Basics_ops['++'],
				sign,
				A2(_elm_lang$core$Basics_ops['++'], newBefore, newAfter));
		} else {
			return _p1._0;
		}
	} else {
		return '';
	}
};
var _myrho$elm_round$Round$truncate = function (n) {
	return (_elm_lang$core$Native_Utils.cmp(n, 0) < 0) ? _elm_lang$core$Basics$ceiling(n) : _elm_lang$core$Basics$floor(n);
};
var _myrho$elm_round$Round$roundFun = F3(
	function (functor, s, fl) {
		if (_elm_lang$core$Native_Utils.eq(s, 0)) {
			return _elm_lang$core$Basics$toString(
				functor(fl));
		} else {
			if (_elm_lang$core$Native_Utils.cmp(s, 0) < 0) {
				return function (r) {
					return (!_elm_lang$core$Native_Utils.eq(r, '0')) ? A2(
						_elm_lang$core$Basics_ops['++'],
						r,
						A2(
							_elm_lang$core$String$repeat,
							_elm_lang$core$Basics$abs(s),
							'0')) : r;
				}(
					A3(
						_myrho$elm_round$Round$roundFun,
						functor,
						0,
						A2(
							F2(
								function (x, y) {
									return x / y;
								}),
							fl,
							A2(
								F2(
									function (x, y) {
										return Math.pow(x, y);
									}),
								10,
								_elm_lang$core$Basics$abs(
									_elm_lang$core$Basics$toFloat(s))))));
			} else {
				var dd = (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? 2 : 1;
				var n = (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? -1 : 1;
				var e = Math.pow(10, s);
				var _p5 = _myrho$elm_round$Round$splitComma(
					_myrho$elm_round$Round$toDecimal(fl));
				var before = _p5._0;
				var after = _p5._1;
				var a = A3(
					_elm_lang$core$String$padRight,
					s + 1,
					_elm_lang$core$Native_Utils.chr('0'),
					after);
				var b = A2(_elm_lang$core$String$left, s, a);
				var c = A2(_elm_lang$core$String$dropLeft, s, a);
				var f = functor(
					A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Basics$toFloat(e),
						_elm_lang$core$Result$toMaybe(
							_elm_lang$core$String$toFloat(
								A2(
									_elm_lang$core$Basics_ops['++'],
									(_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? '-' : '',
									A2(
										_elm_lang$core$Basics_ops['++'],
										'1',
										A2(
											_elm_lang$core$Basics_ops['++'],
											b,
											A2(_elm_lang$core$Basics_ops['++'], '.', c))))))));
				var g = A2(
					_elm_lang$core$String$dropLeft,
					dd,
					_elm_lang$core$Basics$toString(f));
				var h = _myrho$elm_round$Round$truncate(fl) + (_elm_lang$core$Native_Utils.eq(f - (e * n), e * n) ? ((_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? -1 : 1) : 0);
				var j = _elm_lang$core$Basics$toString(h);
				var i = (_elm_lang$core$Native_Utils.eq(j, '0') && ((!_elm_lang$core$Native_Utils.eq(f - (e * n), 0)) && ((_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) && (_elm_lang$core$Native_Utils.cmp(fl, -1) > 0)))) ? A2(_elm_lang$core$Basics_ops['++'], '-', j) : j;
				return A2(
					_elm_lang$core$Basics_ops['++'],
					i,
					A2(_elm_lang$core$Basics_ops['++'], '.', g));
			}
		}
	});
var _myrho$elm_round$Round$round = _myrho$elm_round$Round$roundFun(_elm_lang$core$Basics$round);
var _myrho$elm_round$Round$roundNum = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$round);
var _myrho$elm_round$Round$ceiling = _myrho$elm_round$Round$roundFun(_elm_lang$core$Basics$ceiling);
var _myrho$elm_round$Round$ceilingNum = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$ceiling);
var _myrho$elm_round$Round$floor = _myrho$elm_round$Round$roundFun(_elm_lang$core$Basics$floor);
var _myrho$elm_round$Round$floorCom = F2(
	function (s, fl) {
		return (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? A2(_myrho$elm_round$Round$ceiling, s, fl) : A2(_myrho$elm_round$Round$floor, s, fl);
	});
var _myrho$elm_round$Round$floorNumCom = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$floorCom);
var _myrho$elm_round$Round$ceilingCom = F2(
	function (s, fl) {
		return (_elm_lang$core$Native_Utils.cmp(fl, 0) < 0) ? A2(_myrho$elm_round$Round$floor, s, fl) : A2(_myrho$elm_round$Round$ceiling, s, fl);
	});
var _myrho$elm_round$Round$ceilingNumCom = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$ceilingCom);
var _myrho$elm_round$Round$floorNum = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$floor);
var _myrho$elm_round$Round$roundCom = _myrho$elm_round$Round$roundFun(
	function (fl) {
		var dec = fl - _elm_lang$core$Basics$toFloat(
			_myrho$elm_round$Round$truncate(fl));
		return (_elm_lang$core$Native_Utils.cmp(dec, 0.5) > -1) ? _elm_lang$core$Basics$ceiling(fl) : ((_elm_lang$core$Native_Utils.cmp(dec, -0.5) < 1) ? _elm_lang$core$Basics$floor(fl) : _elm_lang$core$Basics$round(fl));
	});
var _myrho$elm_round$Round$roundNumCom = _myrho$elm_round$Round$funNum(_myrho$elm_round$Round$roundCom);

var _cuducos$elm_format_number$Helpers$stringfy = function (formatted) {
	var decimals = function () {
		var _p0 = formatted.decimals;
		if (_p0.ctor === 'Just') {
			return A2(_elm_lang$core$Basics_ops['++'], formatted.locale.decimalSeparator, _p0._0);
		} else {
			return '';
		}
	}();
	return _elm_lang$core$String$concat(
		{
			ctor: '::',
			_0: A2(_elm_lang$core$Maybe$withDefault, '', formatted.negativePrefix),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$String$join, formatted.locale.thousandSeparator, formatted.integers),
				_1: {
					ctor: '::',
					_0: decimals,
					_1: {
						ctor: '::',
						_0: A2(_elm_lang$core$Maybe$withDefault, '', formatted.negativeSuffix),
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _cuducos$elm_format_number$Helpers$splitThousands = function (integers) {
	var reversedSplitThousands = function (value) {
		return (_elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$String$length(value),
			3) > 0) ? A2(
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			A2(_elm_lang$core$String$right, 3, value),
			reversedSplitThousands(
				A2(_elm_lang$core$String$dropRight, 3, value))) : {
			ctor: '::',
			_0: value,
			_1: {ctor: '[]'}
		};
	};
	return _elm_lang$core$List$reverse(
		reversedSplitThousands(integers));
};
var _cuducos$elm_format_number$Helpers$isNegative = function (formatted) {
	var onlyZeros = A2(
		_elm_lang$core$String$all,
		function ($char) {
			return _elm_lang$core$Native_Utils.eq(
				$char,
				_elm_lang$core$Native_Utils.chr('0'));
		},
		_elm_lang$core$String$concat(
			A2(
				_elm_lang$core$List$append,
				formatted.integers,
				_elm_lang$core$List$singleton(
					A2(_elm_lang$core$Maybe$withDefault, '', formatted.decimals)))));
	var isPositive = _elm_lang$core$Native_Utils.cmp(formatted.original, 0) > -1;
	return !(isPositive || onlyZeros);
};
var _cuducos$elm_format_number$Helpers$FormattedNumber = F6(
	function (a, b, c, d, e, f) {
		return {locale: a, original: b, integers: c, decimals: d, negativePrefix: e, negativeSuffix: f};
	});
var _cuducos$elm_format_number$Helpers$parse = F2(
	function (locale, original) {
		var parts = A2(
			_elm_lang$core$String$split,
			'.',
			A2(_myrho$elm_round$Round$round, locale.decimals, original));
		var integers = _cuducos$elm_format_number$Helpers$splitThousands(
			A2(
				_elm_lang$core$String$filter,
				_elm_lang$core$Char$isDigit,
				A2(
					_elm_lang$core$Maybe$withDefault,
					'0',
					_elm_lang$core$List$head(parts))));
		var decimals = _elm_lang$core$List$head(
			A2(_elm_lang$core$List$drop, 1, parts));
		var partial = A6(_cuducos$elm_format_number$Helpers$FormattedNumber, locale, original, integers, decimals, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing);
		return _cuducos$elm_format_number$Helpers$isNegative(partial) ? _elm_lang$core$Native_Utils.update(
			partial,
			{
				negativePrefix: _elm_lang$core$Maybe$Just(locale.negativePrefix),
				negativeSuffix: _elm_lang$core$Maybe$Just(locale.negativeSuffix)
			}) : partial;
	});

var _cuducos$elm_format_number$FormatNumber$format = F2(
	function (locale, num) {
		return _cuducos$elm_format_number$Helpers$stringfy(
			A2(_cuducos$elm_format_number$Helpers$parse, locale, num));
	});

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

//import Result //

var _elm_lang$core$Native_Date = function() {

function fromString(str)
{
	var date = new Date(str);
	return isNaN(date.getTime())
		? _elm_lang$core$Result$Err('Unable to parse \'' + str + '\' as a date. Dates must be in the ISO 8601 format.')
		: _elm_lang$core$Result$Ok(date);
}

var dayTable = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var monthTable =
	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];


return {
	fromString: fromString,
	year: function(d) { return d.getFullYear(); },
	month: function(d) { return { ctor: monthTable[d.getMonth()] }; },
	day: function(d) { return d.getDate(); },
	hour: function(d) { return d.getHours(); },
	minute: function(d) { return d.getMinutes(); },
	second: function(d) { return d.getSeconds(); },
	millisecond: function(d) { return d.getMilliseconds(); },
	toTime: function(d) { return d.getTime(); },
	fromTime: function(t) { return new Date(t); },
	dayOfWeek: function(d) { return { ctor: dayTable[d.getDay()] }; }
};

}();
var _elm_lang$core$Date$millisecond = _elm_lang$core$Native_Date.millisecond;
var _elm_lang$core$Date$second = _elm_lang$core$Native_Date.second;
var _elm_lang$core$Date$minute = _elm_lang$core$Native_Date.minute;
var _elm_lang$core$Date$hour = _elm_lang$core$Native_Date.hour;
var _elm_lang$core$Date$dayOfWeek = _elm_lang$core$Native_Date.dayOfWeek;
var _elm_lang$core$Date$day = _elm_lang$core$Native_Date.day;
var _elm_lang$core$Date$month = _elm_lang$core$Native_Date.month;
var _elm_lang$core$Date$year = _elm_lang$core$Native_Date.year;
var _elm_lang$core$Date$fromTime = _elm_lang$core$Native_Date.fromTime;
var _elm_lang$core$Date$toTime = _elm_lang$core$Native_Date.toTime;
var _elm_lang$core$Date$fromString = _elm_lang$core$Native_Date.fromString;
var _elm_lang$core$Date$now = A2(_elm_lang$core$Task$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Time$now);
var _elm_lang$core$Date$Date = {ctor: 'Date'};
var _elm_lang$core$Date$Sun = {ctor: 'Sun'};
var _elm_lang$core$Date$Sat = {ctor: 'Sat'};
var _elm_lang$core$Date$Fri = {ctor: 'Fri'};
var _elm_lang$core$Date$Thu = {ctor: 'Thu'};
var _elm_lang$core$Date$Wed = {ctor: 'Wed'};
var _elm_lang$core$Date$Tue = {ctor: 'Tue'};
var _elm_lang$core$Date$Mon = {ctor: 'Mon'};
var _elm_lang$core$Date$Dec = {ctor: 'Dec'};
var _elm_lang$core$Date$Nov = {ctor: 'Nov'};
var _elm_lang$core$Date$Oct = {ctor: 'Oct'};
var _elm_lang$core$Date$Sep = {ctor: 'Sep'};
var _elm_lang$core$Date$Aug = {ctor: 'Aug'};
var _elm_lang$core$Date$Jul = {ctor: 'Jul'};
var _elm_lang$core$Date$Jun = {ctor: 'Jun'};
var _elm_lang$core$Date$May = {ctor: 'May'};
var _elm_lang$core$Date$Apr = {ctor: 'Apr'};
var _elm_lang$core$Date$Mar = {ctor: 'Mar'};
var _elm_lang$core$Date$Feb = {ctor: 'Feb'};
var _elm_lang$core$Date$Jan = {ctor: 'Jan'};

var _elm_community$json_extra$Json_Decode_Extra$combine = A2(
	_elm_lang$core$List$foldr,
	_elm_lang$core$Json_Decode$map2(
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			})),
	_elm_lang$core$Json_Decode$succeed(
		{ctor: '[]'}));
var _elm_community$json_extra$Json_Decode_Extra$collection = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (length) {
			return _elm_community$json_extra$Json_Decode_Extra$combine(
				A2(
					_elm_lang$core$List$map,
					function (index) {
						return A2(
							_elm_lang$core$Json_Decode$field,
							_elm_lang$core$Basics$toString(index),
							decoder);
					},
					A2(_elm_lang$core$List$range, 0, length - 1)));
		},
		A2(_elm_lang$core$Json_Decode$field, 'length', _elm_lang$core$Json_Decode$int));
};
var _elm_community$json_extra$Json_Decode_Extra$fromResult = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Json_Decode$succeed(_p0._0);
	} else {
		return _elm_lang$core$Json_Decode$fail(_p0._0);
	}
};
var _elm_community$json_extra$Json_Decode_Extra$parseInt = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p1) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toInt(_p1));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$parseFloat = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p2) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$String$toFloat(_p2));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$doubleEncoded = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (_p3) {
			return _elm_community$json_extra$Json_Decode_Extra$fromResult(
				A2(_elm_lang$core$Json_Decode$decodeString, decoder, _p3));
		},
		_elm_lang$core$Json_Decode$string);
};
var _elm_community$json_extra$Json_Decode_Extra$sequenceHelp = F2(
	function (decoders, jsonValues) {
		return (!_elm_lang$core$Native_Utils.eq(
			_elm_lang$core$List$length(jsonValues),
			_elm_lang$core$List$length(decoders))) ? _elm_lang$core$Json_Decode$fail('Number of decoders does not match number of values') : _elm_community$json_extra$Json_Decode_Extra$fromResult(
			A3(
				_elm_lang$core$List$foldr,
				_elm_lang$core$Result$map2(
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})),
				_elm_lang$core$Result$Ok(
					{ctor: '[]'}),
				A3(_elm_lang$core$List$map2, _elm_lang$core$Json_Decode$decodeValue, decoders, jsonValues)));
	});
var _elm_community$json_extra$Json_Decode_Extra$sequence = function (decoders) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		_elm_community$json_extra$Json_Decode_Extra$sequenceHelp(decoders),
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$indexedList = function (indexedDecoder) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (values) {
			return _elm_community$json_extra$Json_Decode_Extra$sequence(
				A2(
					_elm_lang$core$List$map,
					indexedDecoder,
					A2(
						_elm_lang$core$List$range,
						0,
						_elm_lang$core$List$length(values) - 1)));
		},
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _elm_community$json_extra$Json_Decode_Extra$optionalField = F2(
	function (fieldName, decoder) {
		var finishDecoding = function (json) {
			var _p4 = A2(
				_elm_lang$core$Json_Decode$decodeValue,
				A2(_elm_lang$core$Json_Decode$field, fieldName, _elm_lang$core$Json_Decode$value),
				json);
			if (_p4.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$map,
					_elm_lang$core$Maybe$Just,
					A2(_elm_lang$core$Json_Decode$field, fieldName, decoder));
			} else {
				return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Maybe$Nothing);
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, finishDecoding, _elm_lang$core$Json_Decode$value);
	});
var _elm_community$json_extra$Json_Decode_Extra$withDefault = F2(
	function (fallback, decoder) {
		return A2(
			_elm_lang$core$Json_Decode$map,
			_elm_lang$core$Maybe$withDefault(fallback),
			_elm_lang$core$Json_Decode$maybe(decoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples = F2(
	function (keyDecoder, tuples) {
		var _p5 = tuples;
		if (_p5.ctor === '[]') {
			return _elm_lang$core$Json_Decode$succeed(_elm_lang$core$Dict$empty);
		} else {
			var _p6 = A2(_elm_lang$core$Json_Decode$decodeString, keyDecoder, _p5._0._0);
			if (_p6.ctor === 'Ok') {
				return A2(
					_elm_lang$core$Json_Decode$andThen,
					function (_p7) {
						return _elm_lang$core$Json_Decode$succeed(
							A3(_elm_lang$core$Dict$insert, _p6._0, _p5._0._1, _p7));
					},
					A2(_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples, keyDecoder, _p5._1));
			} else {
				return _elm_lang$core$Json_Decode$fail(_p6._0);
			}
		}
	});
var _elm_community$json_extra$Json_Decode_Extra$dict2 = F2(
	function (keyDecoder, valueDecoder) {
		return A2(
			_elm_lang$core$Json_Decode$andThen,
			_elm_community$json_extra$Json_Decode_Extra$decodeDictFromTuples(keyDecoder),
			_elm_lang$core$Json_Decode$keyValuePairs(valueDecoder));
	});
var _elm_community$json_extra$Json_Decode_Extra$set = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Set$fromList,
		_elm_lang$core$Json_Decode$list(decoder));
};
var _elm_community$json_extra$Json_Decode_Extra$date = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (_p8) {
		return _elm_community$json_extra$Json_Decode_Extra$fromResult(
			_elm_lang$core$Date$fromString(_p8));
	},
	_elm_lang$core$Json_Decode$string);
var _elm_community$json_extra$Json_Decode_Extra$andMap = _elm_lang$core$Json_Decode$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$json_extra$Json_Decode_Extra_ops = _elm_community$json_extra$Json_Decode_Extra_ops || {};
_elm_community$json_extra$Json_Decode_Extra_ops['|:'] = _elm_lang$core$Basics$flip(_elm_community$json_extra$Json_Decode_Extra$andMap);

var _Gizra$elm_spa_exmple$Utils_Json$resultToDecoder = function (res) {
	var _p0 = res;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Json_Decode$succeed(_p0._0);
	} else {
		return _elm_lang$core$Json_Decode$fail(_p0._0);
	}
};
var _Gizra$elm_spa_exmple$Utils_Json$decodeInt = _elm_lang$core$Json_Decode$oneOf(
	{
		ctor: '::',
		_0: _elm_lang$core$Json_Decode$int,
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Json_Decode$map,
				_elm_lang$core$Basics$floor,
				A2(
					_elm_lang$core$Json_Decode$andThen,
					function (_p1) {
						return _Gizra$elm_spa_exmple$Utils_Json$resultToDecoder(
							_elm_lang$core$String$toFloat(_p1));
					},
					_elm_lang$core$Json_Decode$string)),
			_1: {ctor: '[]'}
		}
	});
var _Gizra$elm_spa_exmple$Utils_Json$decodeEmptyArrayAs = function ($default) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (list) {
			var length = _elm_lang$core$List$length(list);
			return _elm_lang$core$Native_Utils.eq(length, 0) ? _elm_lang$core$Json_Decode$succeed($default) : _elm_lang$core$Json_Decode$fail(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'Expected an empty array, not an array with length: ',
					_elm_lang$core$Basics$toString(length)));
		},
		_elm_lang$core$Json_Decode$list(_elm_lang$core$Json_Decode$value));
};
var _Gizra$elm_spa_exmple$Utils_Json$decodeDateFromEpoch = A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Date$fromTime, _elm_lang$core$Json_Decode$float);
var _Gizra$elm_spa_exmple$Utils_Json$decodeDate = _elm_lang$core$Json_Decode$oneOf(
	{
		ctor: '::',
		_0: _elm_community$json_extra$Json_Decode_Extra$date,
		_1: {
			ctor: '::',
			_0: _Gizra$elm_spa_exmple$Utils_Json$decodeDateFromEpoch,
			_1: {ctor: '[]'}
		}
	});

var _Gizra$elm_spa_exmple$Amount$showWithCurrency = F3(
	function (wrapper, currency, value) {
		var _p0 = currency;
		switch (_p0.ctor) {
			case 'EUR':
				return {
					ctor: '::',
					_0: value,
					_1: {
						ctor: '::',
						_0: wrapper('€'),
						_1: {ctor: '[]'}
					}
				};
			case 'ILS':
				return {
					ctor: '::',
					_0: wrapper('₪'),
					_1: {
						ctor: '::',
						_0: value,
						_1: {ctor: '[]'}
					}
				};
			default:
				return {
					ctor: '::',
					_0: wrapper('$'),
					_1: {
						ctor: '::',
						_0: value,
						_1: {ctor: '[]'}
					}
				};
		}
	});
var _Gizra$elm_spa_exmple$Amount$showAmountWithCurrencyText = F2(
	function (_p1, currency) {
		var _p2 = _p1;
		var value = A2(
			_cuducos$elm_format_number$FormatNumber$format,
			_elm_lang$core$Native_Utils.update(
				_cuducos$elm_format_number$FormatNumber_Locales$usLocale,
				{decimals: 0}),
			_elm_lang$core$Basics$toFloat(_p2._0));
		return _elm_lang$core$String$concat(
			A3(_Gizra$elm_spa_exmple$Amount$showWithCurrency, _elm_lang$core$Basics$identity, currency, value));
	});
var _Gizra$elm_spa_exmple$Amount$showAmountWithCurrency = F2(
	function (amount, currency) {
		return _elm_lang$html$Html$text(
			A2(_Gizra$elm_spa_exmple$Amount$showAmountWithCurrencyText, amount, currency));
	});
var _Gizra$elm_spa_exmple$Amount$extract = function (_p3) {
	var _p4 = _p3;
	return _p4._0;
};
var _Gizra$elm_spa_exmple$Amount$compare = F3(
	function (comparator, _p6, _p5) {
		var _p7 = _p6;
		var _p8 = _p5;
		return A2(comparator, _p7._0, _p8._0);
	});
var _Gizra$elm_spa_exmple$Amount$compareInfix = F3(
	function (x, comparator, y) {
		return A3(_Gizra$elm_spa_exmple$Amount$compare, comparator, x, y);
	});
var _Gizra$elm_spa_exmple$Amount$encodeAmount = function (_p9) {
	var _p10 = _p9;
	return _elm_lang$core$Json_Encode$int(_p10._0);
};
var _Gizra$elm_spa_exmple$Amount$Amount = function (a) {
	return {ctor: 'Amount', _0: a};
};
var _Gizra$elm_spa_exmple$Amount$decodeAmount = A2(_elm_lang$core$Json_Decode$map, _Gizra$elm_spa_exmple$Amount$Amount, _Gizra$elm_spa_exmple$Utils_Json$decodeInt);
var _Gizra$elm_spa_exmple$Amount$zero = _Gizra$elm_spa_exmple$Amount$Amount(0);
var _Gizra$elm_spa_exmple$Amount$map = F2(
	function (fn, _p11) {
		var _p12 = _p11;
		return _Gizra$elm_spa_exmple$Amount$Amount(
			fn(_p12._0));
	});
var _Gizra$elm_spa_exmple$Amount$map2 = F3(
	function (fn, _p14, _p13) {
		var _p15 = _p14;
		var _p16 = _p13;
		return _Gizra$elm_spa_exmple$Amount$Amount(
			A2(fn, _p15._0, _p16._0));
	});
var _Gizra$elm_spa_exmple$Amount$add = _Gizra$elm_spa_exmple$Amount$map2(
	F2(
		function (x, y) {
			return x + y;
		}));
var _Gizra$elm_spa_exmple$Amount$sum = A2(_elm_lang$core$List$foldl, _Gizra$elm_spa_exmple$Amount$add, _Gizra$elm_spa_exmple$Amount$zero);

var _lukewestby$elm_http_builder$HttpBuilder$replace = F2(
	function (old, $new) {
		return function (_p0) {
			return A2(
				_elm_lang$core$String$join,
				$new,
				A2(_elm_lang$core$String$split, old, _p0));
		};
	});
var _lukewestby$elm_http_builder$HttpBuilder$queryEscape = function (_p1) {
	return A3(
		_lukewestby$elm_http_builder$HttpBuilder$replace,
		'%20',
		'+',
		_elm_lang$http$Http$encodeUri(_p1));
};
var _lukewestby$elm_http_builder$HttpBuilder$queryPair = function (_p2) {
	var _p3 = _p2;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._0),
		A2(
			_elm_lang$core$Basics_ops['++'],
			'=',
			_lukewestby$elm_http_builder$HttpBuilder$queryEscape(_p3._1)));
};
var _lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded = function (args) {
	return A2(
		_elm_lang$core$String$join,
		'&',
		A2(_elm_lang$core$List$map, _lukewestby$elm_http_builder$HttpBuilder$queryPair, args));
};
var _lukewestby$elm_http_builder$HttpBuilder$toRequest = function (builder) {
	var encodedParams = _lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded(builder.queryParams);
	var fullUrl = _elm_lang$core$String$isEmpty(encodedParams) ? builder.url : A2(
		_elm_lang$core$Basics_ops['++'],
		builder.url,
		A2(_elm_lang$core$Basics_ops['++'], '?', encodedParams));
	return _elm_lang$http$Http$request(
		{method: builder.method, url: fullUrl, headers: builder.headers, body: builder.body, expect: builder.expect, timeout: builder.timeout, withCredentials: builder.withCredentials});
};
var _lukewestby$elm_http_builder$HttpBuilder$toTaskPlain = function (builder) {
	return _elm_lang$http$Http$toTask(
		_lukewestby$elm_http_builder$HttpBuilder$toRequest(builder));
};
var _lukewestby$elm_http_builder$HttpBuilder$withCacheBuster = F2(
	function (paramName, builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{
				cacheBuster: _elm_lang$core$Maybe$Just(paramName)
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withQueryParams = F2(
	function (queryParams, builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{
				queryParams: A2(_elm_lang$core$Basics_ops['++'], builder.queryParams, queryParams)
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$toTaskWithCacheBuster = F2(
	function (paramName, builder) {
		var request = function (timestamp) {
			return _lukewestby$elm_http_builder$HttpBuilder$toTaskPlain(
				A2(
					_lukewestby$elm_http_builder$HttpBuilder$withQueryParams,
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: paramName,
							_1: _elm_lang$core$Basics$toString(timestamp)
						},
						_1: {ctor: '[]'}
					},
					builder));
		};
		return A2(_elm_lang$core$Task$andThen, request, _elm_lang$core$Time$now);
	});
var _lukewestby$elm_http_builder$HttpBuilder$toTask = function (builder) {
	var _p4 = builder.cacheBuster;
	if (_p4.ctor === 'Just') {
		return A2(_lukewestby$elm_http_builder$HttpBuilder$toTaskWithCacheBuster, _p4._0, builder);
	} else {
		return _lukewestby$elm_http_builder$HttpBuilder$toTaskPlain(builder);
	}
};
var _lukewestby$elm_http_builder$HttpBuilder$send = F2(
	function (tagger, builder) {
		return A2(
			_elm_lang$core$Task$attempt,
			tagger,
			_lukewestby$elm_http_builder$HttpBuilder$toTask(builder));
	});
var _lukewestby$elm_http_builder$HttpBuilder$withExpect = F2(
	function (expect, builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{expect: expect});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withCredentials = function (builder) {
	return _elm_lang$core$Native_Utils.update(
		builder,
		{withCredentials: true});
};
var _lukewestby$elm_http_builder$HttpBuilder$withTimeout = F2(
	function (timeout, builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{
				timeout: _elm_lang$core$Maybe$Just(timeout)
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withBody = F2(
	function (body, builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{body: body});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withStringBody = F2(
	function (contentType, value) {
		return _lukewestby$elm_http_builder$HttpBuilder$withBody(
			A2(_elm_lang$http$Http$stringBody, contentType, value));
	});
var _lukewestby$elm_http_builder$HttpBuilder$withUrlEncodedBody = function (_p5) {
	return A2(
		_lukewestby$elm_http_builder$HttpBuilder$withStringBody,
		'application/x-www-form-urlencoded',
		_lukewestby$elm_http_builder$HttpBuilder$joinUrlEncoded(_p5));
};
var _lukewestby$elm_http_builder$HttpBuilder$withJsonBody = function (value) {
	return _lukewestby$elm_http_builder$HttpBuilder$withBody(
		_elm_lang$http$Http$jsonBody(value));
};
var _lukewestby$elm_http_builder$HttpBuilder$withMultipartStringBody = function (partPairs) {
	return _lukewestby$elm_http_builder$HttpBuilder$withBody(
		_elm_lang$http$Http$multipartBody(
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Basics$uncurry(_elm_lang$http$Http$stringPart),
				partPairs)));
};
var _lukewestby$elm_http_builder$HttpBuilder$withHeaders = F2(
	function (headerPairs, builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{
				headers: A2(
					_elm_lang$core$Basics_ops['++'],
					A2(
						_elm_lang$core$List$map,
						_elm_lang$core$Basics$uncurry(_elm_lang$http$Http$header),
						headerPairs),
					builder.headers)
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$withHeader = F3(
	function (key, value, builder) {
		return _elm_lang$core$Native_Utils.update(
			builder,
			{
				headers: {
					ctor: '::',
					_0: A2(_elm_lang$http$Http$header, key, value),
					_1: builder.headers
				}
			});
	});
var _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl = F2(
	function (method, url) {
		return {
			method: method,
			url: url,
			headers: {ctor: '[]'},
			body: _elm_lang$http$Http$emptyBody,
			expect: _elm_lang$http$Http$expectStringResponse(
				function (_p6) {
					return _elm_lang$core$Result$Ok(
						{ctor: '_Tuple0'});
				}),
			timeout: _elm_lang$core$Maybe$Nothing,
			withCredentials: false,
			queryParams: {ctor: '[]'},
			cacheBuster: _elm_lang$core$Maybe$Nothing
		};
	});
var _lukewestby$elm_http_builder$HttpBuilder$get = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('GET');
var _lukewestby$elm_http_builder$HttpBuilder$post = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('POST');
var _lukewestby$elm_http_builder$HttpBuilder$put = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('PUT');
var _lukewestby$elm_http_builder$HttpBuilder$patch = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('PATCH');
var _lukewestby$elm_http_builder$HttpBuilder$delete = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('DELETE');
var _lukewestby$elm_http_builder$HttpBuilder$options = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('OPTIONS');
var _lukewestby$elm_http_builder$HttpBuilder$trace = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('TRACE');
var _lukewestby$elm_http_builder$HttpBuilder$head = _lukewestby$elm_http_builder$HttpBuilder$requestWithMethodAndUrl('HEAD');
var _lukewestby$elm_http_builder$HttpBuilder$RequestBuilder = F9(
	function (a, b, c, d, e, f, g, h, i) {
		return {method: a, headers: b, url: c, body: d, expect: e, timeout: f, withCredentials: g, queryParams: h, cacheBuster: i};
	});

var _elm_community$maybe_extra$Maybe_Extra$foldrValues = F2(
	function (item, list) {
		var _p0 = item;
		if (_p0.ctor === 'Nothing') {
			return list;
		} else {
			return {ctor: '::', _0: _p0._0, _1: list};
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$values = A2(
	_elm_lang$core$List$foldr,
	_elm_community$maybe_extra$Maybe_Extra$foldrValues,
	{ctor: '[]'});
var _elm_community$maybe_extra$Maybe_Extra$filter = F2(
	function (f, m) {
		var _p1 = A2(_elm_lang$core$Maybe$map, f, m);
		if ((_p1.ctor === 'Just') && (_p1._0 === true)) {
			return m;
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$traverseArray = function (f) {
	var step = F2(
		function (e, acc) {
			var _p2 = f(e);
			if (_p2.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					_elm_lang$core$Array$push(_p2._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$Array$foldl,
		step,
		_elm_lang$core$Maybe$Just(_elm_lang$core$Array$empty));
};
var _elm_community$maybe_extra$Maybe_Extra$combineArray = _elm_community$maybe_extra$Maybe_Extra$traverseArray(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$traverse = function (f) {
	var step = F2(
		function (e, acc) {
			var _p3 = f(e);
			if (_p3.ctor === 'Nothing') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				return A2(
					_elm_lang$core$Maybe$map,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						})(_p3._0),
					acc);
			}
		});
	return A2(
		_elm_lang$core$List$foldr,
		step,
		_elm_lang$core$Maybe$Just(
			{ctor: '[]'}));
};
var _elm_community$maybe_extra$Maybe_Extra$combine = _elm_community$maybe_extra$Maybe_Extra$traverse(_elm_lang$core$Basics$identity);
var _elm_community$maybe_extra$Maybe_Extra$toArray = function (m) {
	var _p4 = m;
	if (_p4.ctor === 'Nothing') {
		return _elm_lang$core$Array$empty;
	} else {
		return A2(_elm_lang$core$Array$repeat, 1, _p4._0);
	}
};
var _elm_community$maybe_extra$Maybe_Extra$toList = function (m) {
	var _p5 = m;
	if (_p5.ctor === 'Nothing') {
		return {ctor: '[]'};
	} else {
		return {
			ctor: '::',
			_0: _p5._0,
			_1: {ctor: '[]'}
		};
	}
};
var _elm_community$maybe_extra$Maybe_Extra$orElse = F2(
	function (ma, mb) {
		var _p6 = mb;
		if (_p6.ctor === 'Nothing') {
			return ma;
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orElseLazy = F2(
	function (fma, mb) {
		var _p7 = mb;
		if (_p7.ctor === 'Nothing') {
			return fma(
				{ctor: '_Tuple0'});
		} else {
			return mb;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$orLazy = F2(
	function (ma, fmb) {
		var _p8 = ma;
		if (_p8.ctor === 'Nothing') {
			return fmb(
				{ctor: '_Tuple0'});
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$or = F2(
	function (ma, mb) {
		var _p9 = ma;
		if (_p9.ctor === 'Nothing') {
			return mb;
		} else {
			return ma;
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$prev = _elm_lang$core$Maybe$map2(_elm_lang$core$Basics$always);
var _elm_community$maybe_extra$Maybe_Extra$next = _elm_lang$core$Maybe$map2(
	_elm_lang$core$Basics$flip(_elm_lang$core$Basics$always));
var _elm_community$maybe_extra$Maybe_Extra$andMap = _elm_lang$core$Maybe$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _elm_community$maybe_extra$Maybe_Extra$unpack = F3(
	function (d, f, m) {
		var _p10 = m;
		if (_p10.ctor === 'Nothing') {
			return d(
				{ctor: '_Tuple0'});
		} else {
			return f(_p10._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$unwrap = F3(
	function (d, f, m) {
		var _p11 = m;
		if (_p11.ctor === 'Nothing') {
			return d;
		} else {
			return f(_p11._0);
		}
	});
var _elm_community$maybe_extra$Maybe_Extra$isJust = function (m) {
	var _p12 = m;
	if (_p12.ctor === 'Nothing') {
		return false;
	} else {
		return true;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$isNothing = function (m) {
	var _p13 = m;
	if (_p13.ctor === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var _elm_community$maybe_extra$Maybe_Extra$join = function (mx) {
	var _p14 = mx;
	if (_p14.ctor === 'Just') {
		return _p14._0;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_community$maybe_extra$Maybe_Extra_ops = _elm_community$maybe_extra$Maybe_Extra_ops || {};
_elm_community$maybe_extra$Maybe_Extra_ops['?'] = F2(
	function (mx, x) {
		return A2(_elm_lang$core$Maybe$withDefault, x, mx);
	});

var _Gizra$elm_storage_key$StorageKey$value = function (storageKey) {
	var _p0 = storageKey;
	if (_p0.ctor === 'Existing') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _Gizra$elm_storage_key$StorageKey$Existing = function (a) {
	return {ctor: 'Existing', _0: a};
};
var _Gizra$elm_storage_key$StorageKey$New = {ctor: 'New'};
var _Gizra$elm_storage_key$StorageKey$isNew = function (storageKey) {
	return _elm_lang$core$Native_Utils.eq(storageKey, _Gizra$elm_storage_key$StorageKey$New);
};
var _Gizra$elm_storage_key$StorageKey$isExisting = function (storageKey) {
	return !_Gizra$elm_storage_key$StorageKey$isNew(storageKey);
};

var _Gizra$elm_spa_exmple$Backend_Restful$fromEntityId = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _Gizra$elm_spa_exmple$Backend_Restful$encodeEntityId = function (_p2) {
	return _elm_lang$core$Json_Encode$int(
		_Gizra$elm_spa_exmple$Backend_Restful$fromEntityId(_p2));
};
var _Gizra$elm_spa_exmple$Backend_Restful$decodeData = _elm_lang$core$Json_Decode$field('data');
var _Gizra$elm_spa_exmple$Backend_Restful$decodeSingleEntity = function (_p3) {
	return _Gizra$elm_spa_exmple$Backend_Restful$decodeData(
		A2(_elm_lang$core$Json_Decode$index, 0, _p3));
};
var _Gizra$elm_spa_exmple$Backend_Restful$decodeStorageTuple = F2(
	function (keyDecoder, valueDecoder) {
		return A3(
			_elm_lang$core$Json_Decode$map2,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			A2(_elm_lang$core$Json_Decode$map, _Gizra$elm_storage_key$StorageKey$Existing, keyDecoder),
			valueDecoder);
	});
var _Gizra$elm_spa_exmple$Backend_Restful$decodeId = function (wrapper) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		wrapper,
		A2(_elm_lang$core$Json_Decode$field, 'id', _Gizra$elm_spa_exmple$Utils_Json$decodeInt));
};
var _Gizra$elm_spa_exmple$Backend_Restful_ops = _Gizra$elm_spa_exmple$Backend_Restful_ops || {};
_Gizra$elm_spa_exmple$Backend_Restful_ops['</>'] = F2(
	function (left, right) {
		return (A2(_elm_lang$core$String$endsWith, '/', left) || A2(_elm_lang$core$String$startsWith, '/', right)) ? A2(_elm_lang$core$Basics_ops['++'], left, right) : A2(
			_elm_lang$core$Basics_ops['++'],
			left,
			A2(_elm_lang$core$Basics_ops['++'], '/', right));
	});
var _Gizra$elm_spa_exmple$Backend_Restful$get = F5(
	function (backendUrl, accessToken, endpoint, params, tagger) {
		var queryParams = A2(
			_elm_lang$core$List$append,
			endpoint.params(params),
			A2(
				_elm_lang$core$List$map,
				function (token) {
					return {ctor: '_Tuple2', _0: 'access_token', _1: token};
				},
				_elm_community$maybe_extra$Maybe_Extra$toList(accessToken)));
		return A2(
			_lukewestby$elm_http_builder$HttpBuilder$send,
			function (_p4) {
				return tagger(
					A2(_elm_lang$core$Result$mapError, endpoint.error, _p4));
			},
			A2(
				_lukewestby$elm_http_builder$HttpBuilder$withExpect,
				_elm_lang$http$Http$expectJson(
					_Gizra$elm_spa_exmple$Backend_Restful$decodeData(
						_elm_lang$core$Json_Decode$list(
							A2(
								_Gizra$elm_spa_exmple$Backend_Restful$decodeStorageTuple,
								_Gizra$elm_spa_exmple$Backend_Restful$decodeId(endpoint.tag),
								endpoint.decoder)))),
				A2(
					_lukewestby$elm_http_builder$HttpBuilder$withQueryParams,
					queryParams,
					_lukewestby$elm_http_builder$HttpBuilder$get(
						A2(_Gizra$elm_spa_exmple$Backend_Restful_ops['</>'], backendUrl, endpoint.path)))));
	});
var _Gizra$elm_spa_exmple$Backend_Restful$EndPoint = F5(
	function (a, b, c, d, e) {
		return {path: a, tag: b, decoder: c, error: d, params: e};
	});
var _Gizra$elm_spa_exmple$Backend_Restful$EntityId = function (a) {
	return {ctor: 'EntityId', _0: a};
};
var _Gizra$elm_spa_exmple$Backend_Restful$toEntityId = _Gizra$elm_spa_exmple$Backend_Restful$EntityId;
var _Gizra$elm_spa_exmple$Backend_Restful$decodeEntityId = A2(_elm_lang$core$Json_Decode$map, _Gizra$elm_spa_exmple$Backend_Restful$toEntityId, _Gizra$elm_spa_exmple$Utils_Json$decodeInt);

var _Gizra$elm_spa_exmple$Backend_Entities$CompanyIdType = {ctor: 'CompanyIdType'};
var _Gizra$elm_spa_exmple$Backend_Entities$UserIdType = {ctor: 'UserIdType'};
var _Gizra$elm_spa_exmple$Backend_Entities$ItemIdType = {ctor: 'ItemIdType'};
var _Gizra$elm_spa_exmple$Backend_Entities$ItemCommentIdType = {ctor: 'ItemCommentIdType'};

var _Gizra$elm_spa_exmple$App_Types$NotFound = {ctor: 'NotFound'};
var _Gizra$elm_spa_exmple$App_Types$HomePage = {ctor: 'HomePage'};
var _Gizra$elm_spa_exmple$App_Types$Item = function (a) {
	return {ctor: 'Item', _0: a};
};
var _Gizra$elm_spa_exmple$App_Types$BackendUrl = function (a) {
	return {ctor: 'BackendUrl', _0: a};
};

var _Gizra$elm_spa_exmple$User_Model$User = function (a) {
	return {name: a};
};
var _Gizra$elm_spa_exmple$User_Model$Authenticated = function (a) {
	return {ctor: 'Authenticated', _0: a};
};
var _Gizra$elm_spa_exmple$User_Model$Anonymous = {ctor: 'Anonymous'};

var _Gizra$elm_spa_exmple$Backend_Item_Model$Item = F5(
	function (a, b, c, d, e) {
		return {name: a, comments: b, price: c, company: d, pdfPath: e};
	});
var _Gizra$elm_spa_exmple$Backend_Item_Model$Company = F2(
	function (a, b) {
		return {id: a, name: b};
	});
var _Gizra$elm_spa_exmple$Backend_Item_Model$ItemComment = F3(
	function (a, b, c) {
		return {user: a, comment: b, created: c};
	});
var _Gizra$elm_spa_exmple$Backend_Item_Model$PdfPath = function (a) {
	return {ctor: 'PdfPath', _0: a};
};
var _Gizra$elm_spa_exmple$Backend_Item_Model$HandleSaveComment = F2(
	function (a, b) {
		return {ctor: 'HandleSaveComment', _0: a, _1: b};
	});
var _Gizra$elm_spa_exmple$Backend_Item_Model$SaveComment = function (a) {
	return {ctor: 'SaveComment', _0: a};
};
var _Gizra$elm_spa_exmple$Backend_Item_Model$HandleFetchItemIdAndCommentsTuple = function (a) {
	return {ctor: 'HandleFetchItemIdAndCommentsTuple', _0: a};
};
var _Gizra$elm_spa_exmple$Backend_Item_Model$HandleFetchItems = function (a) {
	return {ctor: 'HandleFetchItems', _0: a};
};

var _Gizra$elm_spa_exmple$Backend_Model$emptyModel = {items: _Gizra$elm_dictlist$EveryDictList$empty};
var _Gizra$elm_spa_exmple$Backend_Model$Model = function (a) {
	return {items: a};
};
var _Gizra$elm_spa_exmple$Backend_Model$MsgItems = function (a) {
	return {ctor: 'MsgItems', _0: a};
};

var _Gizra$elm_spa_exmple$ItemComment_Model$Model = function (a) {
	return {selectedTab: a};
};
var _Gizra$elm_spa_exmple$ItemComment_Model$Preview = {ctor: 'Preview'};
var _Gizra$elm_spa_exmple$ItemComment_Model$Edit = {ctor: 'Edit'};
var _Gizra$elm_spa_exmple$ItemComment_Model$emptyModel = {selectedTab: _Gizra$elm_spa_exmple$ItemComment_Model$Edit};
var _Gizra$elm_spa_exmple$ItemComment_Model$SetComment = F2(
	function (a, b) {
		return {ctor: 'SetComment', _0: a, _1: b};
	});
var _Gizra$elm_spa_exmple$ItemComment_Model$DelegatedSaveComment = function (a) {
	return {ctor: 'DelegatedSaveComment', _0: a};
};
var _Gizra$elm_spa_exmple$ItemComment_Model$SetTab = function (a) {
	return {ctor: 'SetTab', _0: a};
};
var _Gizra$elm_spa_exmple$ItemComment_Model$UpdateBackend = {ctor: 'UpdateBackend'};
var _Gizra$elm_spa_exmple$ItemComment_Model$MsgBackendItem = function (a) {
	return {ctor: 'MsgBackendItem', _0: a};
};
var _Gizra$elm_spa_exmple$ItemComment_Model$NoOp = {ctor: 'NoOp'};

var _Gizra$elm_spa_exmple$Pages_Item_Model$emptyModel = {itemComment: _Gizra$elm_spa_exmple$ItemComment_Model$emptyModel};
var _Gizra$elm_spa_exmple$Pages_Item_Model$Model = function (a) {
	return {itemComment: a};
};
var _Gizra$elm_spa_exmple$Pages_Item_Model$SetComment = F2(
	function (a, b) {
		return {ctor: 'SetComment', _0: a, _1: b};
	});
var _Gizra$elm_spa_exmple$Pages_Item_Model$MsgItemComment = function (a) {
	return {ctor: 'MsgItemComment', _0: a};
};
var _Gizra$elm_spa_exmple$Pages_Item_Model$UpdateBackend = {ctor: 'UpdateBackend'};
var _Gizra$elm_spa_exmple$Pages_Item_Model$MsgBackendItem = function (a) {
	return {ctor: 'MsgBackendItem', _0: a};
};
var _Gizra$elm_spa_exmple$Pages_Item_Model$NoOp = {ctor: 'NoOp'};

var _Gizra$elm_spa_exmple$App_Model$emptyModel = {
	activePage: _Gizra$elm_spa_exmple$App_Types$NotFound,
	backend: _Gizra$elm_spa_exmple$Backend_Model$emptyModel,
	user: _Gizra$elm_spa_exmple$User_Model$Anonymous,
	backendUrl: _Gizra$elm_spa_exmple$App_Types$BackendUrl(''),
	pagesItem: _Gizra$elm_spa_exmple$Pages_Item_Model$emptyModel
};
var _Gizra$elm_spa_exmple$App_Model$Flags = F3(
	function (a, b, c) {
		return {page: a, entityId: b, backendUrl: c};
	});
var _Gizra$elm_spa_exmple$App_Model$Model = F5(
	function (a, b, c, d, e) {
		return {activePage: a, backend: b, user: c, backendUrl: d, pagesItem: e};
	});
var _Gizra$elm_spa_exmple$App_Model$MsgPagesItem = function (a) {
	return {ctor: 'MsgPagesItem', _0: a};
};
var _Gizra$elm_spa_exmple$App_Model$MsgBackend = function (a) {
	return {ctor: 'MsgBackend', _0: a};
};
var _Gizra$elm_spa_exmple$App_Model$HandleUser = function (a) {
	return {ctor: 'HandleUser', _0: a};
};

var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode = _elm_lang$core$Json_Decode$succeed;
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$resolve = _elm_lang$core$Json_Decode$andThen(_elm_lang$core$Basics$identity);
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom = _elm_lang$core$Json_Decode$map2(
	F2(
		function (x, y) {
			return y(x);
		}));
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$hardcoded = function (_p0) {
	return _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom(
		_elm_lang$core$Json_Decode$succeed(_p0));
};
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder = F3(
	function (pathDecoder, valDecoder, fallback) {
		var nullOr = function (decoder) {
			return _elm_lang$core$Json_Decode$oneOf(
				{
					ctor: '::',
					_0: decoder,
					_1: {
						ctor: '::',
						_0: _elm_lang$core$Json_Decode$null(fallback),
						_1: {ctor: '[]'}
					}
				});
		};
		var handleResult = function (input) {
			var _p1 = A2(_elm_lang$core$Json_Decode$decodeValue, pathDecoder, input);
			if (_p1.ctor === 'Ok') {
				var _p2 = A2(
					_elm_lang$core$Json_Decode$decodeValue,
					nullOr(valDecoder),
					_p1._0);
				if (_p2.ctor === 'Ok') {
					return _elm_lang$core$Json_Decode$succeed(_p2._0);
				} else {
					return _elm_lang$core$Json_Decode$fail(_p2._0);
				}
			} else {
				return _elm_lang$core$Json_Decode$succeed(fallback);
			}
		};
		return A2(_elm_lang$core$Json_Decode$andThen, handleResult, _elm_lang$core$Json_Decode$value);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt = F4(
	function (path, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$at, path, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional = F4(
	function (key, valDecoder, fallback, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalDecoder,
				A2(_elm_lang$core$Json_Decode$field, key, _elm_lang$core$Json_Decode$value),
				valDecoder,
				fallback),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt = F3(
	function (path, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$at, path, valDecoder),
			decoder);
	});
var _NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required = F3(
	function (key, valDecoder, decoder) {
		return A2(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
			A2(_elm_lang$core$Json_Decode$field, key, valDecoder),
			decoder);
	});

var _Gizra$elm_spa_exmple$User_Decoder$decodeUser = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'name',
	_elm_lang$core$Json_Decode$string,
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_Gizra$elm_spa_exmple$User_Model$User));
var _Gizra$elm_spa_exmple$User_Decoder$decodeUserTuple = A2(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
	_Gizra$elm_spa_exmple$User_Decoder$decodeUser,
	A2(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
		_Gizra$elm_spa_exmple$Backend_Restful$decodeId(_Gizra$elm_spa_exmple$Backend_Restful$toEntityId),
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}))));
var _Gizra$elm_spa_exmple$User_Decoder$decodeCurrentUser = _elm_lang$core$Json_Decode$oneOf(
	{
		ctor: '::',
		_0: _elm_lang$core$Json_Decode$null(_Gizra$elm_spa_exmple$User_Model$Anonymous),
		_1: {
			ctor: '::',
			_0: A2(
				_elm_lang$core$Json_Decode$andThen,
				function (userTuple) {
					return _elm_lang$core$Json_Decode$succeed(
						_Gizra$elm_spa_exmple$User_Model$Authenticated(userTuple));
				},
				_Gizra$elm_spa_exmple$User_Decoder$decodeUserTuple),
			_1: {ctor: '[]'}
		}
	});

var _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItemComment = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (val) {
		return _elm_lang$core$Json_Decode$succeed(
			_Gizra$elm_editable_webdata$Editable_WebData$create(val));
	},
	A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'created',
		_Gizra$elm_spa_exmple$Utils_Json$decodeDate,
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'comment',
			_elm_lang$core$Json_Decode$string,
			A2(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
				_Gizra$elm_spa_exmple$User_Decoder$decodeUserTuple,
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_Gizra$elm_spa_exmple$Backend_Item_Model$ItemComment)))));
var _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeStorageKeyAsEntityId = A2(
	_elm_lang$core$Json_Decode$andThen,
	function (val) {
		return _elm_lang$core$Json_Decode$succeed(
			_Gizra$elm_storage_key$StorageKey$Existing(val));
	},
	_Gizra$elm_spa_exmple$Backend_Restful$decodeId(_Gizra$elm_spa_exmple$Backend_Restful$toEntityId));
var _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItemComments = function (currentUser) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		function (dictList) {
			return _elm_lang$core$Json_Decode$succeed(
				function () {
					var _p0 = currentUser;
					if (_p0.ctor === 'Authenticated') {
						var emptyCommentItem = _Gizra$elm_editable_webdata$Editable_WebData$create(
							{
								user: _p0._0,
								comment: '',
								created: _elm_lang$core$Date$fromTime(0)
							});
						return A3(_Gizra$elm_dictlist$EveryDictList$insert, _Gizra$elm_storage_key$StorageKey$New, emptyCommentItem, dictList);
					} else {
						return dictList;
					}
				}());
		},
		_elm_lang$core$Json_Decode$oneOf(
			{
				ctor: '::',
				_0: A2(_Gizra$elm_dictlist$EveryDictList$decodeArray2, _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeStorageKeyAsEntityId, _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItemComment),
				_1: {
					ctor: '::',
					_0: _Gizra$elm_spa_exmple$Utils_Json$decodeEmptyArrayAs(_Gizra$elm_dictlist$EveryDictList$empty),
					_1: {ctor: '[]'}
				}
			}));
};
var _Gizra$elm_spa_exmple$Backend_Item_Decoder$deocdeItemIdAndComments = function (currentUser) {
	return A3(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
		'comments',
		_Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItemComments(currentUser),
		A3(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
			'itemId',
			A2(
				_elm_lang$core$Json_Decode$andThen,
				function (val) {
					return _elm_lang$core$Json_Decode$succeed(
						_Gizra$elm_storage_key$StorageKey$Existing(
							_Gizra$elm_spa_exmple$Backend_Restful$toEntityId(val)));
				},
				_Gizra$elm_spa_exmple$Utils_Json$decodeInt),
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(
				F2(
					function (v0, v1) {
						return {ctor: '_Tuple2', _0: v0, _1: v1};
					}))));
};
var _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodePdfPath = A2(_elm_lang$core$Json_Decode$map, _Gizra$elm_spa_exmple$Backend_Item_Model$PdfPath, _elm_lang$core$Json_Decode$string);
var _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeCompany = A3(
	_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$required,
	'name',
	_elm_lang$core$Json_Decode$string,
	A2(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$custom,
		_Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeStorageKeyAsEntityId,
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_Gizra$elm_spa_exmple$Backend_Item_Model$Company)));
var _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItem = function (currentUser) {
	return A4(
		_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
		'pdf',
		A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodePdfPath),
		_elm_lang$core$Maybe$Nothing,
		A4(
			_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optional,
			'company',
			A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeCompany),
			_elm_lang$core$Maybe$Nothing,
			A3(
				_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt,
				{
					ctor: '::',
					_0: 'item',
					_1: {
						ctor: '::',
						_0: 'price',
						_1: {ctor: '[]'}
					}
				},
				_Gizra$elm_spa_exmple$Amount$decodeAmount,
				A4(
					_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$optionalAt,
					{
						ctor: '::',
						_0: 'item',
						_1: {
							ctor: '::',
							_0: 'comments',
							_1: {ctor: '[]'}
						}
					},
					_Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItemComments(currentUser),
					_Gizra$elm_dictlist$EveryDictList$empty,
					A3(
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$requiredAt,
						{
							ctor: '::',
							_0: 'item',
							_1: {
								ctor: '::',
								_0: 'name',
								_1: {ctor: '[]'}
							}
						},
						_elm_lang$core$Json_Decode$string,
						_NoRedInk$elm_decode_pipeline$Json_Decode_Pipeline$decode(_Gizra$elm_spa_exmple$Backend_Item_Model$Item))))));
};
var _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItems = function (currentUser) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: A2(
				_Gizra$elm_dictlist$EveryDictList$decodeArray2,
				A2(_elm_lang$core$Json_Decode$field, 'item', _Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeStorageKeyAsEntityId),
				_Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItem(currentUser)),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$Json_Decode$field,
					'item',
					_Gizra$elm_spa_exmple$Utils_Json$decodeEmptyArrayAs(_Gizra$elm_dictlist$EveryDictList$empty)),
				_1: {ctor: '[]'}
			}
		});
};

var _Gizra$elm_spa_exmple$Backend_Item_Utils$getComment = F2(
	function (_p0, items) {
		var _p1 = _p0;
		var _p2 = A2(_Gizra$elm_dictlist$EveryDictList$get, _p1._0, items);
		if (_p2.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return A2(_Gizra$elm_dictlist$EveryDictList$get, _p1._1, _p2._0.comments);
		}
	});
var _Gizra$elm_spa_exmple$Backend_Item_Utils$insertComments = F3(
	function (_p3, itemComments, items) {
		var _p4 = _p3;
		var _p8 = _p4._0;
		var _p5 = A2(_Gizra$elm_dictlist$EveryDictList$get, _p8, items);
		if (_p5.ctor === 'Nothing') {
			return items;
		} else {
			var _p7 = _p5._0;
			var itemUpdated = _elm_lang$core$Native_Utils.update(
				_p7,
				{
					comments: A2(_Gizra$elm_dictlist$EveryDictList$append, _p7.comments, itemComments)
				});
			var itemWithFreshNew = A3(
				_elm_community$maybe_extra$Maybe_Extra$unwrap,
				itemUpdated,
				function (editableWebData) {
					var value = _stoeffel$editable$Editable$value(
						_Gizra$elm_editable_webdata$Editable_WebData$toEditable(editableWebData));
					var valueUpdated = _elm_lang$core$Native_Utils.update(
						value,
						{comment: ''});
					var itemCommentUpdated = A2(
						_Gizra$elm_editable_webdata$Editable_WebData$state,
						_krisajenkins$remotedata$RemoteData$NotAsked,
						A2(
							_Gizra$elm_editable_webdata$Editable_WebData$map,
							function (_p6) {
								return A2(
									_stoeffel$editable$Editable$update,
									valueUpdated,
									_stoeffel$editable$Editable$edit(_p6));
							},
							editableWebData));
					return _elm_lang$core$Native_Utils.update(
						itemUpdated,
						{
							comments: A3(_Gizra$elm_dictlist$EveryDictList$insert, _p4._1, itemCommentUpdated, itemUpdated.comments)
						});
				},
				A2(
					_Gizra$elm_spa_exmple$Backend_Item_Utils$getComment,
					{ctor: '_Tuple2', _0: _p8, _1: _Gizra$elm_storage_key$StorageKey$New},
					items));
			return A3(_Gizra$elm_dictlist$EveryDictList$insert, _p8, itemWithFreshNew, items);
		}
	});

var _Gizra$elm_spa_exmple$Utils_WebData$getError = function (remoteData) {
	var _p0 = remoteData;
	if (_p0.ctor === 'Failure') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _Gizra$elm_spa_exmple$Utils_WebData$sendWithHandler = F3(
	function (decoder, tagger, builder) {
		return A2(
			_lukewestby$elm_http_builder$HttpBuilder$send,
			tagger,
			A2(
				_lukewestby$elm_http_builder$HttpBuilder$withExpect,
				_elm_lang$http$Http$expectJson(decoder),
				builder));
	});
var _Gizra$elm_spa_exmple$Utils_WebData$whenSuccess = F3(
	function (remoteData, $default, func) {
		var _p1 = remoteData;
		if (_p1.ctor === 'Success') {
			return func(_p1._0);
		} else {
			return $default;
		}
	});
var _Gizra$elm_spa_exmple$Utils_WebData$viewError = function (error) {
	var _p2 = error;
	switch (_p2.ctor) {
		case 'BadUrl':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('ErrorBadUrl'),
					_1: {ctor: '[]'}
				});
		case 'BadPayload':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('ErrorBadPayload'),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$p,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p2._0),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				});
		case 'NetworkError':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('ErrorNetworkError'),
					_1: {ctor: '[]'}
				});
		case 'Timeout':
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('ErrorTimeout'),
					_1: {ctor: '[]'}
				});
		default:
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{ctor: '[]'},
						{
							ctor: '::',
							_0: _elm_lang$html$Html$text('ErrorBadStatus'),
							_1: {
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$p,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(_p2._0.status.message),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}),
					_1: {ctor: '[]'}
				});
	}
};

var _Gizra$elm_spa_exmple$Backend_Item_Update$saveComment = F4(
	function (_p0, currentUser, storageKeys, editableWebData) {
		var _p1 = _p0;
		var itemComment = _stoeffel$editable$Editable$value(
			_Gizra$elm_editable_webdata$Editable_WebData$toEditable(editableWebData));
		var itemId = A2(
			_elm_lang$core$Maybe$withDefault,
			'',
			A2(
				_elm_lang$core$Maybe$map,
				function (_p2) {
					return _elm_lang$core$Basics$toString(
						_Gizra$elm_spa_exmple$Backend_Restful$fromEntityId(_p2));
				},
				_Gizra$elm_storage_key$StorageKey$value(
					_elm_lang$core$Tuple$first(storageKeys))));
		return A3(
			_Gizra$elm_spa_exmple$Utils_WebData$sendWithHandler,
			_Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItemComments(currentUser),
			_Gizra$elm_spa_exmple$Backend_Item_Model$HandleSaveComment(storageKeys),
			A2(
				_lukewestby$elm_http_builder$HttpBuilder$withJsonBody,
				_elm_lang$core$Json_Encode$object(
					{
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'comment',
							_1: _elm_lang$core$Json_Encode$string(itemComment.comment)
						},
						_1: {ctor: '[]'}
					}),
				A2(
					_lukewestby$elm_http_builder$HttpBuilder$withQueryParams,
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: '_accept', _1: 'application/json'},
						_1: {ctor: '[]'}
					},
					_lukewestby$elm_http_builder$HttpBuilder$withCredentials(
						_lukewestby$elm_http_builder$HttpBuilder$post(
							A2(
								_elm_lang$core$Basics_ops['++'],
								_p1._0,
								A2(_elm_lang$core$Basics_ops['++'], '/api/comments/', itemId)))))));
	});
var _Gizra$elm_spa_exmple$Backend_Item_Update$update = F4(
	function (backendUrl, currentUser, msg, model) {
		var _p3 = msg;
		switch (_p3.ctor) {
			case 'HandleFetchItems':
				if (_p3._0.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{items: _p3._0._0}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					var _p4 = A2(_elm_lang$core$Debug$log, 'HandleItems', _p3._0._0);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				}
			case 'HandleFetchItemIdAndCommentsTuple':
				if (_p3._0.ctor === 'Ok') {
					var _p5 = _p3._0._0._0;
					var itemsUpdated = A3(
						_elm_community$maybe_extra$Maybe_Extra$unwrap,
						model.items,
						function (item) {
							var itemUpdated = _elm_lang$core$Native_Utils.update(
								item,
								{comments: _p3._0._0._1});
							return A3(_Gizra$elm_dictlist$EveryDictList$insert, _p5, itemUpdated, model.items);
						},
						A2(_Gizra$elm_dictlist$EveryDictList$get, _p5, model.items));
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{items: itemsUpdated}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					var _p6 = A2(_elm_lang$core$Debug$log, 'HandleFetchItemIdAndCommentsTuple', _p3._0._0);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				}
			case 'SaveComment':
				var _p8 = _p3._0;
				var _p7 = A2(_Gizra$elm_spa_exmple$Backend_Item_Utils$getComment, _p8, model.items);
				if (_p7.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				} else {
					return {
						ctor: '_Tuple2',
						_0: model,
						_1: A4(_Gizra$elm_spa_exmple$Backend_Item_Update$saveComment, backendUrl, currentUser, _p8, _p7._0)
					};
				}
			default:
				if (_p3._1.ctor === 'Ok') {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								items: A3(_Gizra$elm_spa_exmple$Backend_Item_Utils$insertComments, _p3._0, _p3._1._0, model.items)
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				}
		}
	});
var _Gizra$elm_spa_exmple$Backend_Item_Update$items = _elm_lang$core$Native_Platform.incomingPort('items', _elm_lang$core$Json_Decode$value);
var _Gizra$elm_spa_exmple$Backend_Item_Update$itemIdAndCommentsTuple = _elm_lang$core$Native_Platform.incomingPort('itemIdAndCommentsTuple', _elm_lang$core$Json_Decode$value);
var _Gizra$elm_spa_exmple$Backend_Item_Update$subscriptions = function (currentUser) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: _Gizra$elm_spa_exmple$Backend_Item_Update$items(
				function (_p9) {
					return _Gizra$elm_spa_exmple$Backend_Item_Model$HandleFetchItems(
						A2(
							_elm_lang$core$Json_Decode$decodeValue,
							_Gizra$elm_spa_exmple$Backend_Item_Decoder$decodeItems(currentUser),
							_p9));
				}),
			_1: {
				ctor: '::',
				_0: _Gizra$elm_spa_exmple$Backend_Item_Update$itemIdAndCommentsTuple(
					function (_p10) {
						return _Gizra$elm_spa_exmple$Backend_Item_Model$HandleFetchItemIdAndCommentsTuple(
							A2(
								_elm_lang$core$Json_Decode$decodeValue,
								_Gizra$elm_spa_exmple$Backend_Item_Decoder$deocdeItemIdAndComments(currentUser),
								_p10));
					}),
				_1: {ctor: '[]'}
			}
		});
};

var _Gizra$elm_spa_exmple$Backend_Update$subscriptions = function (currentUser) {
	return A2(
		_elm_lang$core$Platform_Sub$map,
		_Gizra$elm_spa_exmple$Backend_Model$MsgItems,
		_Gizra$elm_spa_exmple$Backend_Item_Update$subscriptions(currentUser));
};
var _Gizra$elm_spa_exmple$Backend_Update$update = F4(
	function (backendUrl, currentUser, msg, model) {
		var _p0 = msg;
		var _p1 = A4(_Gizra$elm_spa_exmple$Backend_Item_Update$update, backendUrl, currentUser, _p0._0, model);
		var modelUpdated = _p1._0;
		var subCmds = _p1._1;
		return {
			ctor: '_Tuple2',
			_0: modelUpdated,
			_1: A2(_elm_lang$core$Platform_Cmd$map, _Gizra$elm_spa_exmple$Backend_Model$MsgItems, subCmds)
		};
	});

var _Gizra$elm_spa_exmple$ItemComment_Update$update = F3(
	function (msg, model, _p0) {
		var _p1 = _p0;
		var _p14 = _p1._1;
		var _p2 = msg;
		switch (_p2.ctor) {
			case 'SetTab':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{selectedTab: _p2._0}),
					_1: {ctor: '_Tuple2', _0: _p14, _1: _Gizra$elm_spa_exmple$ItemComment_Model$NoOp}
				};
			case 'DelegatedSaveComment':
				var _p6 = _p2._0._0;
				var _p5 = _p2._0._1;
				var itemsUpdated = function () {
					var _p3 = A2(_Gizra$elm_dictlist$EveryDictList$get, _p6, _p14.items);
					if (_p3.ctor === 'Nothing') {
						return _p14.items;
					} else {
						var _p4 = _p3._0;
						return A3(
							_elm_community$maybe_extra$Maybe_Extra$unwrap,
							_p14.items,
							function (itemComment) {
								var itemCommentUpdated = A2(_Gizra$elm_editable_webdata$Editable_WebData$state, _krisajenkins$remotedata$RemoteData$Loading, itemComment);
								var itemUpdated = _elm_lang$core$Native_Utils.update(
									_p4,
									{
										comments: A3(_Gizra$elm_dictlist$EveryDictList$insert, _p5, itemCommentUpdated, _p4.comments)
									});
								return A3(_Gizra$elm_dictlist$EveryDictList$insert, _p6, itemUpdated, _p14.items);
							},
							A2(
								_Gizra$elm_spa_exmple$Backend_Item_Utils$getComment,
								{ctor: '_Tuple2', _0: _p6, _1: _p5},
								_p14.items));
					}
				}();
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{selectedTab: _Gizra$elm_spa_exmple$ItemComment_Model$Edit}),
					_1: {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							_p14,
							{items: itemsUpdated}),
						_1: _Gizra$elm_spa_exmple$ItemComment_Model$MsgBackendItem(
							_Gizra$elm_spa_exmple$Backend_Model$MsgItems(
								_Gizra$elm_spa_exmple$Backend_Item_Model$SaveComment(
									{ctor: '_Tuple2', _0: _p6, _1: _p5})))
					}
				};
			default:
				var _p13 = _p2._0._0;
				var _p12 = _p2._0._1;
				var partialBackendModelUpdated = function () {
					var _p7 = A2(_Gizra$elm_dictlist$EveryDictList$get, _p13, _p14.items);
					if (_p7.ctor === 'Nothing') {
						return _p14;
					} else {
						var _p11 = _p7._0;
						var _p8 = A2(_Gizra$elm_dictlist$EveryDictList$get, _p12, _p11.comments);
						if (_p8.ctor === 'Nothing') {
							return _p14;
						} else {
							var _p10 = _p8._0;
							var value = _stoeffel$editable$Editable$value(
								_Gizra$elm_editable_webdata$Editable_WebData$toEditable(_p10));
							var valueUpdated = _elm_lang$core$Native_Utils.update(
								value,
								{comment: _p2._1});
							var itemCommentUpdated = A2(
								_Gizra$elm_editable_webdata$Editable_WebData$map,
								function (_p9) {
									return A2(
										_stoeffel$editable$Editable$update,
										valueUpdated,
										_stoeffel$editable$Editable$edit(_p9));
								},
								_p10);
							var itemUpdated = _elm_lang$core$Native_Utils.update(
								_p11,
								{
									comments: A3(_Gizra$elm_dictlist$EveryDictList$insert, _p12, itemCommentUpdated, _p11.comments)
								});
							var itemsUpdated = A3(_Gizra$elm_dictlist$EveryDictList$insert, _p13, itemUpdated, _p14.items);
							return _elm_lang$core$Native_Utils.update(
								_p14,
								{items: itemsUpdated});
						}
					}
				}();
				return {
					ctor: '_Tuple2',
					_0: model,
					_1: {ctor: '_Tuple2', _0: partialBackendModelUpdated, _1: _Gizra$elm_spa_exmple$ItemComment_Model$UpdateBackend}
				};
		}
	});

var _Gizra$elm_spa_exmple$Pages_Item_Update$update = F4(
	function (backendUrl, msg, model, _p0) {
		var _p1 = _p0;
		var _p5 = _p1._1;
		var _p2 = msg;
		if (_p2.ctor === 'MsgItemComment') {
			var _p3 = A3(
				_Gizra$elm_spa_exmple$ItemComment_Update$update,
				_p2._0,
				model.itemComment,
				{ctor: '_Tuple2', _0: _p1._0, _1: _p5});
			var subModel = _p3._0;
			var partialBackendModelUpdated = _p3._1._0;
			var delegatedMsg = _p3._1._1;
			var modelUpdated = _elm_lang$core$Native_Utils.update(
				model,
				{itemComment: subModel});
			var delegatedMsgs = function () {
				var _p4 = delegatedMsg;
				switch (_p4.ctor) {
					case 'NoOp':
						return _Gizra$elm_spa_exmple$Pages_Item_Model$NoOp;
					case 'MsgBackendItem':
						return _Gizra$elm_spa_exmple$Pages_Item_Model$MsgBackendItem(_p4._0);
					default:
						return _Gizra$elm_spa_exmple$Pages_Item_Model$UpdateBackend;
				}
			}();
			return {
				ctor: '_Tuple3',
				_0: modelUpdated,
				_1: _elm_lang$core$Platform_Cmd$none,
				_2: {ctor: '_Tuple2', _0: partialBackendModelUpdated, _1: delegatedMsgs}
			};
		} else {
			return {
				ctor: '_Tuple3',
				_0: model,
				_1: _elm_lang$core$Platform_Cmd$none,
				_2: {ctor: '_Tuple2', _0: _p5, _1: _Gizra$elm_spa_exmple$Pages_Item_Model$NoOp}
			};
		}
	});

var _Gizra$elm_spa_exmple$App_Update$update = F2(
	function (msg, model) {
		var _p0 = msg;
		switch (_p0.ctor) {
			case 'HandleUser':
				if (_p0._0.ctor === 'Ok') {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						_elm_lang$core$Native_Utils.update(
							model,
							{user: _p0._0._0}),
						{ctor: '[]'});
				} else {
					var _p1 = A2(_elm_lang$core$Debug$log, 'HandleUser', _p0._0._0);
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						model,
						{ctor: '[]'});
				}
			case 'MsgBackend':
				var _p2 = A4(_Gizra$elm_spa_exmple$Backend_Update$update, model.backendUrl, model.user, _p0._0, model.backend);
				var subModel = _p2._0;
				var subCmds = _p2._1;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{backend: subModel}),
					_1: A2(_elm_lang$core$Platform_Cmd$map, _Gizra$elm_spa_exmple$App_Model$MsgBackend, subCmds)
				};
			default:
				var _p3 = function () {
					var _p4 = model.activePage;
					if (_p4.ctor === 'Item') {
						var _p5 = A4(
							_Gizra$elm_spa_exmple$Pages_Item_Update$update,
							model.backendUrl,
							_p0._0,
							model.pagesItem,
							{ctor: '_Tuple2', _0: _p4._0, _1: model.backend});
						var subModel = _p5._0;
						var subCmds = _p5._1;
						var partialBackendModel = _p5._2._0;
						var delegatedMsg = _p5._2._1;
						var _p6 = delegatedMsg;
						switch (_p6.ctor) {
							case 'NoOp':
								return {
									ctor: '_Tuple3',
									_0: subModel,
									_1: subCmds,
									_2: {ctor: '_Tuple2', _0: model.backend, _1: _elm_lang$core$Platform_Cmd$none}
								};
							case 'MsgBackendItem':
								var cmd = A2(
									_elm_lang$core$Platform_Cmd$map,
									_Gizra$elm_spa_exmple$App_Model$MsgBackend,
									A2(
										_elm_lang$core$Task$perform,
										_elm_lang$core$Basics$identity,
										_elm_lang$core$Task$succeed(_p6._0)));
								var backend = model.backend;
								var backendUpdated = _elm_lang$core$Native_Utils.update(
									backend,
									{
										items: A2(_Gizra$elm_dictlist$EveryDictList$union, partialBackendModel.items, model.backend.items)
									});
								return {
									ctor: '_Tuple3',
									_0: subModel,
									_1: subCmds,
									_2: {ctor: '_Tuple2', _0: backendUpdated, _1: cmd}
								};
							default:
								var backend = model.backend;
								var backendUpdated = _elm_lang$core$Native_Utils.update(
									backend,
									{
										items: A2(_Gizra$elm_dictlist$EveryDictList$union, partialBackendModel.items, model.backend.items)
									});
								return {
									ctor: '_Tuple3',
									_0: subModel,
									_1: subCmds,
									_2: {ctor: '_Tuple2', _0: backendUpdated, _1: _elm_lang$core$Platform_Cmd$none}
								};
						}
					} else {
						return {
							ctor: '_Tuple3',
							_0: model.pagesItem,
							_1: _elm_lang$core$Platform_Cmd$none,
							_2: {ctor: '_Tuple2', _0: model.backend, _1: _elm_lang$core$Platform_Cmd$none}
						};
					}
				}();
				var subModel = _p3._0;
				var subCmds = _p3._1;
				var backendUpdated = _p3._2._0;
				var backendCmds = _p3._2._1;
				var noBackendChange = {ctor: '_Tuple2', _0: model.backend, _1: _elm_lang$core$Platform_Cmd$none};
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{pagesItem: subModel, backend: backendUpdated}),
					_1: _elm_lang$core$Platform_Cmd$batch(
						{
							ctor: '::',
							_0: A2(_elm_lang$core$Platform_Cmd$map, _Gizra$elm_spa_exmple$App_Model$MsgPagesItem, subCmds),
							_1: {
								ctor: '::',
								_0: backendCmds,
								_1: {ctor: '[]'}
							}
						})
				};
		}
	});
var _Gizra$elm_spa_exmple$App_Update$init = function (flags) {
	var page = function () {
		var _p7 = flags.page;
		switch (_p7) {
			case 'item':
				var _p8 = flags.entityId;
				if (_p8.ctor === 'Nothing') {
					return _Gizra$elm_spa_exmple$App_Types$NotFound;
				} else {
					return _Gizra$elm_spa_exmple$App_Types$Item(
						_Gizra$elm_storage_key$StorageKey$Existing(
							_Gizra$elm_spa_exmple$Backend_Restful$toEntityId(_p8._0)));
				}
			case 'homepage':
				return _Gizra$elm_spa_exmple$App_Types$HomePage;
			default:
				return _Gizra$elm_spa_exmple$App_Types$NotFound;
		}
	}();
	return {
		ctor: '_Tuple2',
		_0: _elm_lang$core$Native_Utils.update(
			_Gizra$elm_spa_exmple$App_Model$emptyModel,
			{
				activePage: page,
				backendUrl: _Gizra$elm_spa_exmple$App_Types$BackendUrl(flags.backendUrl)
			}),
		_1: _elm_lang$core$Platform_Cmd$none
	};
};
var _Gizra$elm_spa_exmple$App_Update$user = _elm_lang$core$Native_Platform.incomingPort('user', _elm_lang$core$Json_Decode$value);
var _Gizra$elm_spa_exmple$App_Update$subscriptions = function (model) {
	var subs = function () {
		var _p9 = model.activePage;
		switch (_p9.ctor) {
			case 'Item':
				return A2(
					_elm_lang$core$Platform_Sub$map,
					_Gizra$elm_spa_exmple$App_Model$MsgBackend,
					_Gizra$elm_spa_exmple$Backend_Update$subscriptions(model.user));
			case 'HomePage':
				return A2(
					_elm_lang$core$Platform_Sub$map,
					_Gizra$elm_spa_exmple$App_Model$MsgBackend,
					_Gizra$elm_spa_exmple$Backend_Update$subscriptions(model.user));
			default:
				return _elm_lang$core$Platform_Sub$none;
		}
	}();
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: _Gizra$elm_spa_exmple$App_Update$user(
				function (_p10) {
					return _Gizra$elm_spa_exmple$App_Model$HandleUser(
						A2(_elm_lang$core$Json_Decode$decodeValue, _Gizra$elm_spa_exmple$User_Decoder$decodeCurrentUser, _p10));
				}),
			_1: {
				ctor: '::',
				_0: subs,
				_1: {ctor: '[]'}
			}
		});
};

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _Gizra$elm_spa_exmple$Pages_Homepage_View$viewItemsTeaser = F2(
	function (_p0, items) {
		var _p1 = _p0;
		return A2(
			_elm_lang$html$Html$ul,
			{ctor: '[]'},
			_Gizra$elm_dictlist$EveryDictList$values(
				A2(
					_Gizra$elm_dictlist$EveryDictList$map,
					F2(
						function (storageKey, item) {
							var itemId = A2(
								_elm_lang$core$Maybe$withDefault,
								'',
								A2(
									_elm_lang$core$Maybe$map,
									function (_p2) {
										return _elm_lang$core$Basics$toString(
											_Gizra$elm_spa_exmple$Backend_Restful$fromEntityId(_p2));
									},
									_Gizra$elm_storage_key$StorageKey$value(storageKey)));
							return A2(
								_elm_lang$html$Html$li,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$a,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$href(
												A2(
													_elm_lang$core$Basics_ops['++'],
													_p1._0,
													A2(_elm_lang$core$Basics_ops['++'], '/item/', itemId))),
											_1: {ctor: '[]'}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(item.name),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								});
						}),
					items)));
	});
var _Gizra$elm_spa_exmple$Pages_Homepage_View$view = F3(
	function (backendUrl, currentUser, items) {
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: A2(_Gizra$elm_spa_exmple$Pages_Homepage_View$viewItemsTeaser, backendUrl, items),
				_1: {ctor: '[]'}
			});
	});

//import Maybe, Native.List //

var _elm_lang$core$Native_Regex = function() {

function escape(str)
{
	return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}
function caseInsensitive(re)
{
	return new RegExp(re.source, 'gi');
}
function regex(raw)
{
	return new RegExp(raw, 'g');
}

function contains(re, string)
{
	return string.match(re) !== null;
}

function find(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var out = [];
	var number = 0;
	var string = str;
	var lastIndex = re.lastIndex;
	var prevLastIndex = -1;
	var result;
	while (number++ < n && (result = re.exec(string)))
	{
		if (prevLastIndex === re.lastIndex) break;
		var i = result.length - 1;
		var subs = new Array(i);
		while (i > 0)
		{
			var submatch = result[i];
			subs[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		out.push({
			match: result[0],
			submatches: _elm_lang$core$Native_List.fromArray(subs),
			index: result.index,
			number: number
		});
		prevLastIndex = re.lastIndex;
	}
	re.lastIndex = lastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

function replace(n, re, replacer, string)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	var count = 0;
	function jsReplacer(match)
	{
		if (count++ >= n)
		{
			return match;
		}
		var i = arguments.length - 3;
		var submatches = new Array(i);
		while (i > 0)
		{
			var submatch = arguments[i];
			submatches[--i] = submatch === undefined
				? _elm_lang$core$Maybe$Nothing
				: _elm_lang$core$Maybe$Just(submatch);
		}
		return replacer({
			match: match,
			submatches: _elm_lang$core$Native_List.fromArray(submatches),
			index: arguments[arguments.length - 2],
			number: count
		});
	}
	return string.replace(re, jsReplacer);
}

function split(n, re, str)
{
	n = n.ctor === 'All' ? Infinity : n._0;
	if (n === Infinity)
	{
		return _elm_lang$core$Native_List.fromArray(str.split(re));
	}
	var string = str;
	var result;
	var out = [];
	var start = re.lastIndex;
	var restoreLastIndex = re.lastIndex;
	while (n--)
	{
		if (!(result = re.exec(string))) break;
		out.push(string.slice(start, result.index));
		start = re.lastIndex;
	}
	out.push(string.slice(start));
	re.lastIndex = restoreLastIndex;
	return _elm_lang$core$Native_List.fromArray(out);
}

return {
	regex: regex,
	caseInsensitive: caseInsensitive,
	escape: escape,

	contains: F2(contains),
	find: F3(find),
	replace: F4(replace),
	split: F3(split)
};

}();

var _elm_lang$core$Regex$split = _elm_lang$core$Native_Regex.split;
var _elm_lang$core$Regex$replace = _elm_lang$core$Native_Regex.replace;
var _elm_lang$core$Regex$find = _elm_lang$core$Native_Regex.find;
var _elm_lang$core$Regex$contains = _elm_lang$core$Native_Regex.contains;
var _elm_lang$core$Regex$caseInsensitive = _elm_lang$core$Native_Regex.caseInsensitive;
var _elm_lang$core$Regex$regex = _elm_lang$core$Native_Regex.regex;
var _elm_lang$core$Regex$escape = _elm_lang$core$Native_Regex.escape;
var _elm_lang$core$Regex$Match = F4(
	function (a, b, c, d) {
		return {match: a, submatches: b, index: c, number: d};
	});
var _elm_lang$core$Regex$Regex = {ctor: 'Regex'};
var _elm_lang$core$Regex$AtMost = function (a) {
	return {ctor: 'AtMost', _0: a};
};
var _elm_lang$core$Regex$All = {ctor: 'All'};

var _elm_lang$core$Native_Bitwise = function() {

return {
	and: F2(function and(a, b) { return a & b; }),
	or: F2(function or(a, b) { return a | b; }),
	xor: F2(function xor(a, b) { return a ^ b; }),
	complement: function complement(a) { return ~a; },
	shiftLeftBy: F2(function(offset, a) { return a << offset; }),
	shiftRightBy: F2(function(offset, a) { return a >> offset; }),
	shiftRightZfBy: F2(function(offset, a) { return a >>> offset; })
};

}();

var _elm_lang$core$Bitwise$shiftRightZfBy = _elm_lang$core$Native_Bitwise.shiftRightZfBy;
var _elm_lang$core$Bitwise$shiftRightBy = _elm_lang$core$Native_Bitwise.shiftRightBy;
var _elm_lang$core$Bitwise$shiftLeftBy = _elm_lang$core$Native_Bitwise.shiftLeftBy;
var _elm_lang$core$Bitwise$complement = _elm_lang$core$Native_Bitwise.complement;
var _elm_lang$core$Bitwise$xor = _elm_lang$core$Native_Bitwise.xor;
var _elm_lang$core$Bitwise$or = _elm_lang$core$Native_Bitwise.or;
var _elm_lang$core$Bitwise$and = _elm_lang$core$Native_Bitwise.and;

var _pablohirafuji$elm_char_codepoint$Char_CodePoint$codePointToKeys = function (codePoint) {
	var codePoint_ = codePoint - 65536;
	var highSurrogate = (codePoint_ >> 10) + 55296;
	var lowSurrogate = A2(_elm_lang$core$Basics_ops['%'], codePoint_, 1024) + 56320;
	return {
		ctor: '::',
		_0: highSurrogate,
		_1: {
			ctor: '::',
			_0: lowSurrogate,
			_1: {ctor: '[]'}
		}
	};
};
var _pablohirafuji$elm_char_codepoint$Char_CodePoint$toCharList = function (codePoint) {
	return (_elm_lang$core$Native_Utils.cmp(codePoint, 65535) < 1) ? {
		ctor: '::',
		_0: _elm_lang$core$Char$fromCode(codePoint),
		_1: {ctor: '[]'}
	} : A2(
		_elm_lang$core$List$map,
		_elm_lang$core$Char$fromCode,
		_pablohirafuji$elm_char_codepoint$Char_CodePoint$codePointToKeys(codePoint));
};
var _pablohirafuji$elm_char_codepoint$Char_CodePoint$listToString = function (codePoints) {
	return _elm_lang$core$String$fromList(
		A2(_elm_lang$core$List$concatMap, _pablohirafuji$elm_char_codepoint$Char_CodePoint$toCharList, codePoints));
};
var _pablohirafuji$elm_char_codepoint$Char_CodePoint$toString = function (codePoint) {
	return _elm_lang$core$String$fromList(
		_pablohirafuji$elm_char_codepoint$Char_CodePoint$toCharList(codePoint));
};
var _pablohirafuji$elm_char_codepoint$Char_CodePoint$keysToCodePoint = F2(
	function (keyCode1, keyCode2) {
		return ((((keyCode1 - 55296) * 1024) + keyCode2) - 56320) + 65536;
	});
var _pablohirafuji$elm_char_codepoint$Char_CodePoint$fromChar = function ($char) {
	var codeUnits = _elm_lang$core$String$toList(
		_elm_lang$core$String$fromChar($char));
	var charCode = _elm_lang$core$Char$toCode($char);
	if ((_elm_lang$core$Native_Utils.cmp(charCode, 55296) > -1) && (_elm_lang$core$Native_Utils.cmp(charCode, 56319) < 1)) {
		var _p0 = codeUnits;
		if (((_p0.ctor === '::') && (_p0._1.ctor === '::')) && (_p0._1._1.ctor === '[]')) {
			return A2(
				_pablohirafuji$elm_char_codepoint$Char_CodePoint$keysToCodePoint,
				charCode,
				_elm_lang$core$Char$toCode(_p0._1._0));
		} else {
			return charCode;
		}
	} else {
		return charCode;
	}
};

var _pablohirafuji$elm_markdown$Markdown_Entity$entities = _elm_lang$core$Dict$fromList(
	{
		ctor: '::',
		_0: {
			ctor: '_Tuple2',
			_0: 'quot',
			_1: {
				ctor: '::',
				_0: 34,
				_1: {ctor: '[]'}
			}
		},
		_1: {
			ctor: '::',
			_0: {
				ctor: '_Tuple2',
				_0: 'amp',
				_1: {
					ctor: '::',
					_0: 38,
					_1: {ctor: '[]'}
				}
			},
			_1: {
				ctor: '::',
				_0: {
					ctor: '_Tuple2',
					_0: 'apos',
					_1: {
						ctor: '::',
						_0: 39,
						_1: {ctor: '[]'}
					}
				},
				_1: {
					ctor: '::',
					_0: {
						ctor: '_Tuple2',
						_0: 'lt',
						_1: {
							ctor: '::',
							_0: 60,
							_1: {ctor: '[]'}
						}
					},
					_1: {
						ctor: '::',
						_0: {
							ctor: '_Tuple2',
							_0: 'gt',
							_1: {
								ctor: '::',
								_0: 62,
								_1: {ctor: '[]'}
							}
						},
						_1: {
							ctor: '::',
							_0: {
								ctor: '_Tuple2',
								_0: 'nbsp',
								_1: {
									ctor: '::',
									_0: 160,
									_1: {ctor: '[]'}
								}
							},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'iexcl',
									_1: {
										ctor: '::',
										_0: 161,
										_1: {ctor: '[]'}
									}
								},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'cent',
										_1: {
											ctor: '::',
											_0: 162,
											_1: {ctor: '[]'}
										}
									},
									_1: {
										ctor: '::',
										_0: {
											ctor: '_Tuple2',
											_0: 'pound',
											_1: {
												ctor: '::',
												_0: 163,
												_1: {ctor: '[]'}
											}
										},
										_1: {
											ctor: '::',
											_0: {
												ctor: '_Tuple2',
												_0: 'curren',
												_1: {
													ctor: '::',
													_0: 164,
													_1: {ctor: '[]'}
												}
											},
											_1: {
												ctor: '::',
												_0: {
													ctor: '_Tuple2',
													_0: 'yen',
													_1: {
														ctor: '::',
														_0: 165,
														_1: {ctor: '[]'}
													}
												},
												_1: {
													ctor: '::',
													_0: {
														ctor: '_Tuple2',
														_0: 'brvbar',
														_1: {
															ctor: '::',
															_0: 166,
															_1: {ctor: '[]'}
														}
													},
													_1: {
														ctor: '::',
														_0: {
															ctor: '_Tuple2',
															_0: 'sect',
															_1: {
																ctor: '::',
																_0: 167,
																_1: {ctor: '[]'}
															}
														},
														_1: {
															ctor: '::',
															_0: {
																ctor: '_Tuple2',
																_0: 'uml',
																_1: {
																	ctor: '::',
																	_0: 168,
																	_1: {ctor: '[]'}
																}
															},
															_1: {
																ctor: '::',
																_0: {
																	ctor: '_Tuple2',
																	_0: 'copy',
																	_1: {
																		ctor: '::',
																		_0: 169,
																		_1: {ctor: '[]'}
																	}
																},
																_1: {
																	ctor: '::',
																	_0: {
																		ctor: '_Tuple2',
																		_0: 'ordf',
																		_1: {
																			ctor: '::',
																			_0: 170,
																			_1: {ctor: '[]'}
																		}
																	},
																	_1: {
																		ctor: '::',
																		_0: {
																			ctor: '_Tuple2',
																			_0: 'laquo',
																			_1: {
																				ctor: '::',
																				_0: 171,
																				_1: {ctor: '[]'}
																			}
																		},
																		_1: {
																			ctor: '::',
																			_0: {
																				ctor: '_Tuple2',
																				_0: 'not',
																				_1: {
																					ctor: '::',
																					_0: 172,
																					_1: {ctor: '[]'}
																				}
																			},
																			_1: {
																				ctor: '::',
																				_0: {
																					ctor: '_Tuple2',
																					_0: 'shy',
																					_1: {
																						ctor: '::',
																						_0: 173,
																						_1: {ctor: '[]'}
																					}
																				},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: 'reg',
																						_1: {
																							ctor: '::',
																							_0: 174,
																							_1: {ctor: '[]'}
																						}
																					},
																					_1: {
																						ctor: '::',
																						_0: {
																							ctor: '_Tuple2',
																							_0: 'macr',
																							_1: {
																								ctor: '::',
																								_0: 175,
																								_1: {ctor: '[]'}
																							}
																						},
																						_1: {
																							ctor: '::',
																							_0: {
																								ctor: '_Tuple2',
																								_0: 'deg',
																								_1: {
																									ctor: '::',
																									_0: 176,
																									_1: {ctor: '[]'}
																								}
																							},
																							_1: {
																								ctor: '::',
																								_0: {
																									ctor: '_Tuple2',
																									_0: 'plusmn',
																									_1: {
																										ctor: '::',
																										_0: 177,
																										_1: {ctor: '[]'}
																									}
																								},
																								_1: {
																									ctor: '::',
																									_0: {
																										ctor: '_Tuple2',
																										_0: 'sup2',
																										_1: {
																											ctor: '::',
																											_0: 178,
																											_1: {ctor: '[]'}
																										}
																									},
																									_1: {
																										ctor: '::',
																										_0: {
																											ctor: '_Tuple2',
																											_0: 'sup3',
																											_1: {
																												ctor: '::',
																												_0: 179,
																												_1: {ctor: '[]'}
																											}
																										},
																										_1: {
																											ctor: '::',
																											_0: {
																												ctor: '_Tuple2',
																												_0: 'acute',
																												_1: {
																													ctor: '::',
																													_0: 180,
																													_1: {ctor: '[]'}
																												}
																											},
																											_1: {
																												ctor: '::',
																												_0: {
																													ctor: '_Tuple2',
																													_0: 'micro',
																													_1: {
																														ctor: '::',
																														_0: 181,
																														_1: {ctor: '[]'}
																													}
																												},
																												_1: {
																													ctor: '::',
																													_0: {
																														ctor: '_Tuple2',
																														_0: 'para',
																														_1: {
																															ctor: '::',
																															_0: 182,
																															_1: {ctor: '[]'}
																														}
																													},
																													_1: {
																														ctor: '::',
																														_0: {
																															ctor: '_Tuple2',
																															_0: 'middot',
																															_1: {
																																ctor: '::',
																																_0: 183,
																																_1: {ctor: '[]'}
																															}
																														},
																														_1: {
																															ctor: '::',
																															_0: {
																																ctor: '_Tuple2',
																																_0: 'cedil',
																																_1: {
																																	ctor: '::',
																																	_0: 184,
																																	_1: {ctor: '[]'}
																																}
																															},
																															_1: {
																																ctor: '::',
																																_0: {
																																	ctor: '_Tuple2',
																																	_0: 'sup1',
																																	_1: {
																																		ctor: '::',
																																		_0: 185,
																																		_1: {ctor: '[]'}
																																	}
																																},
																																_1: {
																																	ctor: '::',
																																	_0: {
																																		ctor: '_Tuple2',
																																		_0: 'ordm',
																																		_1: {
																																			ctor: '::',
																																			_0: 186,
																																			_1: {ctor: '[]'}
																																		}
																																	},
																																	_1: {
																																		ctor: '::',
																																		_0: {
																																			ctor: '_Tuple2',
																																			_0: 'raquo',
																																			_1: {
																																				ctor: '::',
																																				_0: 187,
																																				_1: {ctor: '[]'}
																																			}
																																		},
																																		_1: {
																																			ctor: '::',
																																			_0: {
																																				ctor: '_Tuple2',
																																				_0: 'frac14',
																																				_1: {
																																					ctor: '::',
																																					_0: 188,
																																					_1: {ctor: '[]'}
																																				}
																																			},
																																			_1: {
																																				ctor: '::',
																																				_0: {
																																					ctor: '_Tuple2',
																																					_0: 'frac12',
																																					_1: {
																																						ctor: '::',
																																						_0: 189,
																																						_1: {ctor: '[]'}
																																					}
																																				},
																																				_1: {
																																					ctor: '::',
																																					_0: {
																																						ctor: '_Tuple2',
																																						_0: 'frac34',
																																						_1: {
																																							ctor: '::',
																																							_0: 190,
																																							_1: {ctor: '[]'}
																																						}
																																					},
																																					_1: {
																																						ctor: '::',
																																						_0: {
																																							ctor: '_Tuple2',
																																							_0: 'iquest',
																																							_1: {
																																								ctor: '::',
																																								_0: 191,
																																								_1: {ctor: '[]'}
																																							}
																																						},
																																						_1: {
																																							ctor: '::',
																																							_0: {
																																								ctor: '_Tuple2',
																																								_0: 'Agrave',
																																								_1: {
																																									ctor: '::',
																																									_0: 192,
																																									_1: {ctor: '[]'}
																																								}
																																							},
																																							_1: {
																																								ctor: '::',
																																								_0: {
																																									ctor: '_Tuple2',
																																									_0: 'Aacute',
																																									_1: {
																																										ctor: '::',
																																										_0: 193,
																																										_1: {ctor: '[]'}
																																									}
																																								},
																																								_1: {
																																									ctor: '::',
																																									_0: {
																																										ctor: '_Tuple2',
																																										_0: 'Acirc',
																																										_1: {
																																											ctor: '::',
																																											_0: 194,
																																											_1: {ctor: '[]'}
																																										}
																																									},
																																									_1: {
																																										ctor: '::',
																																										_0: {
																																											ctor: '_Tuple2',
																																											_0: 'Atilde',
																																											_1: {
																																												ctor: '::',
																																												_0: 195,
																																												_1: {ctor: '[]'}
																																											}
																																										},
																																										_1: {
																																											ctor: '::',
																																											_0: {
																																												ctor: '_Tuple2',
																																												_0: 'Auml',
																																												_1: {
																																													ctor: '::',
																																													_0: 196,
																																													_1: {ctor: '[]'}
																																												}
																																											},
																																											_1: {
																																												ctor: '::',
																																												_0: {
																																													ctor: '_Tuple2',
																																													_0: 'Aring',
																																													_1: {
																																														ctor: '::',
																																														_0: 197,
																																														_1: {ctor: '[]'}
																																													}
																																												},
																																												_1: {
																																													ctor: '::',
																																													_0: {
																																														ctor: '_Tuple2',
																																														_0: 'AElig',
																																														_1: {
																																															ctor: '::',
																																															_0: 198,
																																															_1: {ctor: '[]'}
																																														}
																																													},
																																													_1: {
																																														ctor: '::',
																																														_0: {
																																															ctor: '_Tuple2',
																																															_0: 'Ccedil',
																																															_1: {
																																																ctor: '::',
																																																_0: 199,
																																																_1: {ctor: '[]'}
																																															}
																																														},
																																														_1: {
																																															ctor: '::',
																																															_0: {
																																																ctor: '_Tuple2',
																																																_0: 'Egrave',
																																																_1: {
																																																	ctor: '::',
																																																	_0: 200,
																																																	_1: {ctor: '[]'}
																																																}
																																															},
																																															_1: {
																																																ctor: '::',
																																																_0: {
																																																	ctor: '_Tuple2',
																																																	_0: 'Eacute',
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 201,
																																																		_1: {ctor: '[]'}
																																																	}
																																																},
																																																_1: {
																																																	ctor: '::',
																																																	_0: {
																																																		ctor: '_Tuple2',
																																																		_0: 'Ecirc',
																																																		_1: {
																																																			ctor: '::',
																																																			_0: 202,
																																																			_1: {ctor: '[]'}
																																																		}
																																																	},
																																																	_1: {
																																																		ctor: '::',
																																																		_0: {
																																																			ctor: '_Tuple2',
																																																			_0: 'Euml',
																																																			_1: {
																																																				ctor: '::',
																																																				_0: 203,
																																																				_1: {ctor: '[]'}
																																																			}
																																																		},
																																																		_1: {
																																																			ctor: '::',
																																																			_0: {
																																																				ctor: '_Tuple2',
																																																				_0: 'Igrave',
																																																				_1: {
																																																					ctor: '::',
																																																					_0: 204,
																																																					_1: {ctor: '[]'}
																																																				}
																																																			},
																																																			_1: {
																																																				ctor: '::',
																																																				_0: {
																																																					ctor: '_Tuple2',
																																																					_0: 'Iacute',
																																																					_1: {
																																																						ctor: '::',
																																																						_0: 205,
																																																						_1: {ctor: '[]'}
																																																					}
																																																				},
																																																				_1: {
																																																					ctor: '::',
																																																					_0: {
																																																						ctor: '_Tuple2',
																																																						_0: 'Icirc',
																																																						_1: {
																																																							ctor: '::',
																																																							_0: 206,
																																																							_1: {ctor: '[]'}
																																																						}
																																																					},
																																																					_1: {
																																																						ctor: '::',
																																																						_0: {
																																																							ctor: '_Tuple2',
																																																							_0: 'Iuml',
																																																							_1: {
																																																								ctor: '::',
																																																								_0: 207,
																																																								_1: {ctor: '[]'}
																																																							}
																																																						},
																																																						_1: {
																																																							ctor: '::',
																																																							_0: {
																																																								ctor: '_Tuple2',
																																																								_0: 'ETH',
																																																								_1: {
																																																									ctor: '::',
																																																									_0: 208,
																																																									_1: {ctor: '[]'}
																																																								}
																																																							},
																																																							_1: {
																																																								ctor: '::',
																																																								_0: {
																																																									ctor: '_Tuple2',
																																																									_0: 'Ntilde',
																																																									_1: {
																																																										ctor: '::',
																																																										_0: 209,
																																																										_1: {ctor: '[]'}
																																																									}
																																																								},
																																																								_1: {
																																																									ctor: '::',
																																																									_0: {
																																																										ctor: '_Tuple2',
																																																										_0: 'Ograve',
																																																										_1: {
																																																											ctor: '::',
																																																											_0: 210,
																																																											_1: {ctor: '[]'}
																																																										}
																																																									},
																																																									_1: {
																																																										ctor: '::',
																																																										_0: {
																																																											ctor: '_Tuple2',
																																																											_0: 'Oacute',
																																																											_1: {
																																																												ctor: '::',
																																																												_0: 211,
																																																												_1: {ctor: '[]'}
																																																											}
																																																										},
																																																										_1: {
																																																											ctor: '::',
																																																											_0: {
																																																												ctor: '_Tuple2',
																																																												_0: 'Ocirc',
																																																												_1: {
																																																													ctor: '::',
																																																													_0: 212,
																																																													_1: {ctor: '[]'}
																																																												}
																																																											},
																																																											_1: {
																																																												ctor: '::',
																																																												_0: {
																																																													ctor: '_Tuple2',
																																																													_0: 'Otilde',
																																																													_1: {
																																																														ctor: '::',
																																																														_0: 213,
																																																														_1: {ctor: '[]'}
																																																													}
																																																												},
																																																												_1: {
																																																													ctor: '::',
																																																													_0: {
																																																														ctor: '_Tuple2',
																																																														_0: 'Ouml',
																																																														_1: {
																																																															ctor: '::',
																																																															_0: 214,
																																																															_1: {ctor: '[]'}
																																																														}
																																																													},
																																																													_1: {
																																																														ctor: '::',
																																																														_0: {
																																																															ctor: '_Tuple2',
																																																															_0: 'times',
																																																															_1: {
																																																																ctor: '::',
																																																																_0: 215,
																																																																_1: {ctor: '[]'}
																																																															}
																																																														},
																																																														_1: {
																																																															ctor: '::',
																																																															_0: {
																																																																ctor: '_Tuple2',
																																																																_0: 'Oslash',
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: 216,
																																																																	_1: {ctor: '[]'}
																																																																}
																																																															},
																																																															_1: {
																																																																ctor: '::',
																																																																_0: {
																																																																	ctor: '_Tuple2',
																																																																	_0: 'Ugrave',
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: 217,
																																																																		_1: {ctor: '[]'}
																																																																	}
																																																																},
																																																																_1: {
																																																																	ctor: '::',
																																																																	_0: {
																																																																		ctor: '_Tuple2',
																																																																		_0: 'Uacute',
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: 218,
																																																																			_1: {ctor: '[]'}
																																																																		}
																																																																	},
																																																																	_1: {
																																																																		ctor: '::',
																																																																		_0: {
																																																																			ctor: '_Tuple2',
																																																																			_0: 'Ucirc',
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: 219,
																																																																				_1: {ctor: '[]'}
																																																																			}
																																																																		},
																																																																		_1: {
																																																																			ctor: '::',
																																																																			_0: {
																																																																				ctor: '_Tuple2',
																																																																				_0: 'Uuml',
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: 220,
																																																																					_1: {ctor: '[]'}
																																																																				}
																																																																			},
																																																																			_1: {
																																																																				ctor: '::',
																																																																				_0: {
																																																																					ctor: '_Tuple2',
																																																																					_0: 'Yacute',
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: 221,
																																																																						_1: {ctor: '[]'}
																																																																					}
																																																																				},
																																																																				_1: {
																																																																					ctor: '::',
																																																																					_0: {
																																																																						ctor: '_Tuple2',
																																																																						_0: 'THORN',
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: 222,
																																																																							_1: {ctor: '[]'}
																																																																						}
																																																																					},
																																																																					_1: {
																																																																						ctor: '::',
																																																																						_0: {
																																																																							ctor: '_Tuple2',
																																																																							_0: 'szlig',
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: 223,
																																																																								_1: {ctor: '[]'}
																																																																							}
																																																																						},
																																																																						_1: {
																																																																							ctor: '::',
																																																																							_0: {
																																																																								ctor: '_Tuple2',
																																																																								_0: 'agrave',
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: 224,
																																																																									_1: {ctor: '[]'}
																																																																								}
																																																																							},
																																																																							_1: {
																																																																								ctor: '::',
																																																																								_0: {
																																																																									ctor: '_Tuple2',
																																																																									_0: 'aacute',
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: 225,
																																																																										_1: {ctor: '[]'}
																																																																									}
																																																																								},
																																																																								_1: {
																																																																									ctor: '::',
																																																																									_0: {
																																																																										ctor: '_Tuple2',
																																																																										_0: 'acirc',
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: 226,
																																																																											_1: {ctor: '[]'}
																																																																										}
																																																																									},
																																																																									_1: {
																																																																										ctor: '::',
																																																																										_0: {
																																																																											ctor: '_Tuple2',
																																																																											_0: 'atilde',
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: 227,
																																																																												_1: {ctor: '[]'}
																																																																											}
																																																																										},
																																																																										_1: {
																																																																											ctor: '::',
																																																																											_0: {
																																																																												ctor: '_Tuple2',
																																																																												_0: 'auml',
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: 228,
																																																																													_1: {ctor: '[]'}
																																																																												}
																																																																											},
																																																																											_1: {
																																																																												ctor: '::',
																																																																												_0: {
																																																																													ctor: '_Tuple2',
																																																																													_0: 'aring',
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: 229,
																																																																														_1: {ctor: '[]'}
																																																																													}
																																																																												},
																																																																												_1: {
																																																																													ctor: '::',
																																																																													_0: {
																																																																														ctor: '_Tuple2',
																																																																														_0: 'aelig',
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: 230,
																																																																															_1: {ctor: '[]'}
																																																																														}
																																																																													},
																																																																													_1: {
																																																																														ctor: '::',
																																																																														_0: {
																																																																															ctor: '_Tuple2',
																																																																															_0: 'ccedil',
																																																																															_1: {
																																																																																ctor: '::',
																																																																																_0: 231,
																																																																																_1: {ctor: '[]'}
																																																																															}
																																																																														},
																																																																														_1: {
																																																																															ctor: '::',
																																																																															_0: {
																																																																																ctor: '_Tuple2',
																																																																																_0: 'egrave',
																																																																																_1: {
																																																																																	ctor: '::',
																																																																																	_0: 232,
																																																																																	_1: {ctor: '[]'}
																																																																																}
																																																																															},
																																																																															_1: {
																																																																																ctor: '::',
																																																																																_0: {
																																																																																	ctor: '_Tuple2',
																																																																																	_0: 'eacute',
																																																																																	_1: {
																																																																																		ctor: '::',
																																																																																		_0: 233,
																																																																																		_1: {ctor: '[]'}
																																																																																	}
																																																																																},
																																																																																_1: {
																																																																																	ctor: '::',
																																																																																	_0: {
																																																																																		ctor: '_Tuple2',
																																																																																		_0: 'ecirc',
																																																																																		_1: {
																																																																																			ctor: '::',
																																																																																			_0: 234,
																																																																																			_1: {ctor: '[]'}
																																																																																		}
																																																																																	},
																																																																																	_1: {
																																																																																		ctor: '::',
																																																																																		_0: {
																																																																																			ctor: '_Tuple2',
																																																																																			_0: 'euml',
																																																																																			_1: {
																																																																																				ctor: '::',
																																																																																				_0: 235,
																																																																																				_1: {ctor: '[]'}
																																																																																			}
																																																																																		},
																																																																																		_1: {
																																																																																			ctor: '::',
																																																																																			_0: {
																																																																																				ctor: '_Tuple2',
																																																																																				_0: 'igrave',
																																																																																				_1: {
																																																																																					ctor: '::',
																																																																																					_0: 236,
																																																																																					_1: {ctor: '[]'}
																																																																																				}
																																																																																			},
																																																																																			_1: {
																																																																																				ctor: '::',
																																																																																				_0: {
																																																																																					ctor: '_Tuple2',
																																																																																					_0: 'iacute',
																																																																																					_1: {
																																																																																						ctor: '::',
																																																																																						_0: 237,
																																																																																						_1: {ctor: '[]'}
																																																																																					}
																																																																																				},
																																																																																				_1: {
																																																																																					ctor: '::',
																																																																																					_0: {
																																																																																						ctor: '_Tuple2',
																																																																																						_0: 'icirc',
																																																																																						_1: {
																																																																																							ctor: '::',
																																																																																							_0: 238,
																																																																																							_1: {ctor: '[]'}
																																																																																						}
																																																																																					},
																																																																																					_1: {
																																																																																						ctor: '::',
																																																																																						_0: {
																																																																																							ctor: '_Tuple2',
																																																																																							_0: 'iuml',
																																																																																							_1: {
																																																																																								ctor: '::',
																																																																																								_0: 239,
																																																																																								_1: {ctor: '[]'}
																																																																																							}
																																																																																						},
																																																																																						_1: {
																																																																																							ctor: '::',
																																																																																							_0: {
																																																																																								ctor: '_Tuple2',
																																																																																								_0: 'eth',
																																																																																								_1: {
																																																																																									ctor: '::',
																																																																																									_0: 240,
																																																																																									_1: {ctor: '[]'}
																																																																																								}
																																																																																							},
																																																																																							_1: {
																																																																																								ctor: '::',
																																																																																								_0: {
																																																																																									ctor: '_Tuple2',
																																																																																									_0: 'ntilde',
																																																																																									_1: {
																																																																																										ctor: '::',
																																																																																										_0: 241,
																																																																																										_1: {ctor: '[]'}
																																																																																									}
																																																																																								},
																																																																																								_1: {
																																																																																									ctor: '::',
																																																																																									_0: {
																																																																																										ctor: '_Tuple2',
																																																																																										_0: 'ograve',
																																																																																										_1: {
																																																																																											ctor: '::',
																																																																																											_0: 242,
																																																																																											_1: {ctor: '[]'}
																																																																																										}
																																																																																									},
																																																																																									_1: {
																																																																																										ctor: '::',
																																																																																										_0: {
																																																																																											ctor: '_Tuple2',
																																																																																											_0: 'oacute',
																																																																																											_1: {
																																																																																												ctor: '::',
																																																																																												_0: 243,
																																																																																												_1: {ctor: '[]'}
																																																																																											}
																																																																																										},
																																																																																										_1: {
																																																																																											ctor: '::',
																																																																																											_0: {
																																																																																												ctor: '_Tuple2',
																																																																																												_0: 'ocirc',
																																																																																												_1: {
																																																																																													ctor: '::',
																																																																																													_0: 244,
																																																																																													_1: {ctor: '[]'}
																																																																																												}
																																																																																											},
																																																																																											_1: {
																																																																																												ctor: '::',
																																																																																												_0: {
																																																																																													ctor: '_Tuple2',
																																																																																													_0: 'otilde',
																																																																																													_1: {
																																																																																														ctor: '::',
																																																																																														_0: 245,
																																																																																														_1: {ctor: '[]'}
																																																																																													}
																																																																																												},
																																																																																												_1: {
																																																																																													ctor: '::',
																																																																																													_0: {
																																																																																														ctor: '_Tuple2',
																																																																																														_0: 'ouml',
																																																																																														_1: {
																																																																																															ctor: '::',
																																																																																															_0: 246,
																																																																																															_1: {ctor: '[]'}
																																																																																														}
																																																																																													},
																																																																																													_1: {
																																																																																														ctor: '::',
																																																																																														_0: {
																																																																																															ctor: '_Tuple2',
																																																																																															_0: 'divide',
																																																																																															_1: {
																																																																																																ctor: '::',
																																																																																																_0: 247,
																																																																																																_1: {ctor: '[]'}
																																																																																															}
																																																																																														},
																																																																																														_1: {
																																																																																															ctor: '::',
																																																																																															_0: {
																																																																																																ctor: '_Tuple2',
																																																																																																_0: 'oslash',
																																																																																																_1: {
																																																																																																	ctor: '::',
																																																																																																	_0: 248,
																																																																																																	_1: {ctor: '[]'}
																																																																																																}
																																																																																															},
																																																																																															_1: {
																																																																																																ctor: '::',
																																																																																																_0: {
																																																																																																	ctor: '_Tuple2',
																																																																																																	_0: 'ugrave',
																																																																																																	_1: {
																																																																																																		ctor: '::',
																																																																																																		_0: 249,
																																																																																																		_1: {ctor: '[]'}
																																																																																																	}
																																																																																																},
																																																																																																_1: {
																																																																																																	ctor: '::',
																																																																																																	_0: {
																																																																																																		ctor: '_Tuple2',
																																																																																																		_0: 'uacute',
																																																																																																		_1: {
																																																																																																			ctor: '::',
																																																																																																			_0: 250,
																																																																																																			_1: {ctor: '[]'}
																																																																																																		}
																																																																																																	},
																																																																																																	_1: {
																																																																																																		ctor: '::',
																																																																																																		_0: {
																																																																																																			ctor: '_Tuple2',
																																																																																																			_0: 'ucirc',
																																																																																																			_1: {
																																																																																																				ctor: '::',
																																																																																																				_0: 251,
																																																																																																				_1: {ctor: '[]'}
																																																																																																			}
																																																																																																		},
																																																																																																		_1: {
																																																																																																			ctor: '::',
																																																																																																			_0: {
																																																																																																				ctor: '_Tuple2',
																																																																																																				_0: 'uuml',
																																																																																																				_1: {
																																																																																																					ctor: '::',
																																																																																																					_0: 252,
																																																																																																					_1: {ctor: '[]'}
																																																																																																				}
																																																																																																			},
																																																																																																			_1: {
																																																																																																				ctor: '::',
																																																																																																				_0: {
																																																																																																					ctor: '_Tuple2',
																																																																																																					_0: 'yacute',
																																																																																																					_1: {
																																																																																																						ctor: '::',
																																																																																																						_0: 253,
																																																																																																						_1: {ctor: '[]'}
																																																																																																					}
																																																																																																				},
																																																																																																				_1: {
																																																																																																					ctor: '::',
																																																																																																					_0: {
																																																																																																						ctor: '_Tuple2',
																																																																																																						_0: 'thorn',
																																																																																																						_1: {
																																																																																																							ctor: '::',
																																																																																																							_0: 254,
																																																																																																							_1: {ctor: '[]'}
																																																																																																						}
																																																																																																					},
																																																																																																					_1: {
																																																																																																						ctor: '::',
																																																																																																						_0: {
																																																																																																							ctor: '_Tuple2',
																																																																																																							_0: 'yuml',
																																																																																																							_1: {
																																																																																																								ctor: '::',
																																																																																																								_0: 255,
																																																																																																								_1: {ctor: '[]'}
																																																																																																							}
																																																																																																						},
																																																																																																						_1: {
																																																																																																							ctor: '::',
																																																																																																							_0: {
																																																																																																								ctor: '_Tuple2',
																																																																																																								_0: 'OElig',
																																																																																																								_1: {
																																																																																																									ctor: '::',
																																																																																																									_0: 338,
																																																																																																									_1: {ctor: '[]'}
																																																																																																								}
																																																																																																							},
																																																																																																							_1: {
																																																																																																								ctor: '::',
																																																																																																								_0: {
																																																																																																									ctor: '_Tuple2',
																																																																																																									_0: 'oelig',
																																																																																																									_1: {
																																																																																																										ctor: '::',
																																																																																																										_0: 339,
																																																																																																										_1: {ctor: '[]'}
																																																																																																									}
																																																																																																								},
																																																																																																								_1: {
																																																																																																									ctor: '::',
																																																																																																									_0: {
																																																																																																										ctor: '_Tuple2',
																																																																																																										_0: 'Scaron',
																																																																																																										_1: {
																																																																																																											ctor: '::',
																																																																																																											_0: 352,
																																																																																																											_1: {ctor: '[]'}
																																																																																																										}
																																																																																																									},
																																																																																																									_1: {
																																																																																																										ctor: '::',
																																																																																																										_0: {
																																																																																																											ctor: '_Tuple2',
																																																																																																											_0: 'scaron',
																																																																																																											_1: {
																																																																																																												ctor: '::',
																																																																																																												_0: 353,
																																																																																																												_1: {ctor: '[]'}
																																																																																																											}
																																																																																																										},
																																																																																																										_1: {
																																																																																																											ctor: '::',
																																																																																																											_0: {
																																																																																																												ctor: '_Tuple2',
																																																																																																												_0: 'Yuml',
																																																																																																												_1: {
																																																																																																													ctor: '::',
																																																																																																													_0: 376,
																																																																																																													_1: {ctor: '[]'}
																																																																																																												}
																																																																																																											},
																																																																																																											_1: {
																																																																																																												ctor: '::',
																																																																																																												_0: {
																																																																																																													ctor: '_Tuple2',
																																																																																																													_0: 'fnof',
																																																																																																													_1: {
																																																																																																														ctor: '::',
																																																																																																														_0: 402,
																																																																																																														_1: {ctor: '[]'}
																																																																																																													}
																																																																																																												},
																																																																																																												_1: {
																																																																																																													ctor: '::',
																																																																																																													_0: {
																																																																																																														ctor: '_Tuple2',
																																																																																																														_0: 'circ',
																																																																																																														_1: {
																																																																																																															ctor: '::',
																																																																																																															_0: 710,
																																																																																																															_1: {ctor: '[]'}
																																																																																																														}
																																																																																																													},
																																																																																																													_1: {
																																																																																																														ctor: '::',
																																																																																																														_0: {
																																																																																																															ctor: '_Tuple2',
																																																																																																															_0: 'tilde',
																																																																																																															_1: {
																																																																																																																ctor: '::',
																																																																																																																_0: 732,
																																																																																																																_1: {ctor: '[]'}
																																																																																																															}
																																																																																																														},
																																																																																																														_1: {
																																																																																																															ctor: '::',
																																																																																																															_0: {
																																																																																																																ctor: '_Tuple2',
																																																																																																																_0: 'Alpha',
																																																																																																																_1: {
																																																																																																																	ctor: '::',
																																																																																																																	_0: 913,
																																																																																																																	_1: {ctor: '[]'}
																																																																																																																}
																																																																																																															},
																																																																																																															_1: {
																																																																																																																ctor: '::',
																																																																																																																_0: {
																																																																																																																	ctor: '_Tuple2',
																																																																																																																	_0: 'Beta',
																																																																																																																	_1: {
																																																																																																																		ctor: '::',
																																																																																																																		_0: 914,
																																																																																																																		_1: {ctor: '[]'}
																																																																																																																	}
																																																																																																																},
																																																																																																																_1: {
																																																																																																																	ctor: '::',
																																																																																																																	_0: {
																																																																																																																		ctor: '_Tuple2',
																																																																																																																		_0: 'Gamma',
																																																																																																																		_1: {
																																																																																																																			ctor: '::',
																																																																																																																			_0: 915,
																																																																																																																			_1: {ctor: '[]'}
																																																																																																																		}
																																																																																																																	},
																																																																																																																	_1: {
																																																																																																																		ctor: '::',
																																																																																																																		_0: {
																																																																																																																			ctor: '_Tuple2',
																																																																																																																			_0: 'Delta',
																																																																																																																			_1: {
																																																																																																																				ctor: '::',
																																																																																																																				_0: 916,
																																																																																																																				_1: {ctor: '[]'}
																																																																																																																			}
																																																																																																																		},
																																																																																																																		_1: {
																																																																																																																			ctor: '::',
																																																																																																																			_0: {
																																																																																																																				ctor: '_Tuple2',
																																																																																																																				_0: 'Epsilon',
																																																																																																																				_1: {
																																																																																																																					ctor: '::',
																																																																																																																					_0: 917,
																																																																																																																					_1: {ctor: '[]'}
																																																																																																																				}
																																																																																																																			},
																																																																																																																			_1: {
																																																																																																																				ctor: '::',
																																																																																																																				_0: {
																																																																																																																					ctor: '_Tuple2',
																																																																																																																					_0: 'Zeta',
																																																																																																																					_1: {
																																																																																																																						ctor: '::',
																																																																																																																						_0: 918,
																																																																																																																						_1: {ctor: '[]'}
																																																																																																																					}
																																																																																																																				},
																																																																																																																				_1: {
																																																																																																																					ctor: '::',
																																																																																																																					_0: {
																																																																																																																						ctor: '_Tuple2',
																																																																																																																						_0: 'Eta',
																																																																																																																						_1: {
																																																																																																																							ctor: '::',
																																																																																																																							_0: 919,
																																																																																																																							_1: {ctor: '[]'}
																																																																																																																						}
																																																																																																																					},
																																																																																																																					_1: {
																																																																																																																						ctor: '::',
																																																																																																																						_0: {
																																																																																																																							ctor: '_Tuple2',
																																																																																																																							_0: 'Theta',
																																																																																																																							_1: {
																																																																																																																								ctor: '::',
																																																																																																																								_0: 920,
																																																																																																																								_1: {ctor: '[]'}
																																																																																																																							}
																																																																																																																						},
																																																																																																																						_1: {
																																																																																																																							ctor: '::',
																																																																																																																							_0: {
																																																																																																																								ctor: '_Tuple2',
																																																																																																																								_0: 'Iota',
																																																																																																																								_1: {
																																																																																																																									ctor: '::',
																																																																																																																									_0: 921,
																																																																																																																									_1: {ctor: '[]'}
																																																																																																																								}
																																																																																																																							},
																																																																																																																							_1: {
																																																																																																																								ctor: '::',
																																																																																																																								_0: {
																																																																																																																									ctor: '_Tuple2',
																																																																																																																									_0: 'Kappa',
																																																																																																																									_1: {
																																																																																																																										ctor: '::',
																																																																																																																										_0: 922,
																																																																																																																										_1: {ctor: '[]'}
																																																																																																																									}
																																																																																																																								},
																																																																																																																								_1: {
																																																																																																																									ctor: '::',
																																																																																																																									_0: {
																																																																																																																										ctor: '_Tuple2',
																																																																																																																										_0: 'Lambda',
																																																																																																																										_1: {
																																																																																																																											ctor: '::',
																																																																																																																											_0: 923,
																																																																																																																											_1: {ctor: '[]'}
																																																																																																																										}
																																																																																																																									},
																																																																																																																									_1: {
																																																																																																																										ctor: '::',
																																																																																																																										_0: {
																																																																																																																											ctor: '_Tuple2',
																																																																																																																											_0: 'Mu',
																																																																																																																											_1: {
																																																																																																																												ctor: '::',
																																																																																																																												_0: 924,
																																																																																																																												_1: {ctor: '[]'}
																																																																																																																											}
																																																																																																																										},
																																																																																																																										_1: {
																																																																																																																											ctor: '::',
																																																																																																																											_0: {
																																																																																																																												ctor: '_Tuple2',
																																																																																																																												_0: 'Nu',
																																																																																																																												_1: {
																																																																																																																													ctor: '::',
																																																																																																																													_0: 925,
																																																																																																																													_1: {ctor: '[]'}
																																																																																																																												}
																																																																																																																											},
																																																																																																																											_1: {
																																																																																																																												ctor: '::',
																																																																																																																												_0: {
																																																																																																																													ctor: '_Tuple2',
																																																																																																																													_0: 'Xi',
																																																																																																																													_1: {
																																																																																																																														ctor: '::',
																																																																																																																														_0: 926,
																																																																																																																														_1: {ctor: '[]'}
																																																																																																																													}
																																																																																																																												},
																																																																																																																												_1: {
																																																																																																																													ctor: '::',
																																																																																																																													_0: {
																																																																																																																														ctor: '_Tuple2',
																																																																																																																														_0: 'Omicron',
																																																																																																																														_1: {
																																																																																																																															ctor: '::',
																																																																																																																															_0: 927,
																																																																																																																															_1: {ctor: '[]'}
																																																																																																																														}
																																																																																																																													},
																																																																																																																													_1: {
																																																																																																																														ctor: '::',
																																																																																																																														_0: {
																																																																																																																															ctor: '_Tuple2',
																																																																																																																															_0: 'Pi',
																																																																																																																															_1: {
																																																																																																																																ctor: '::',
																																																																																																																																_0: 928,
																																																																																																																																_1: {ctor: '[]'}
																																																																																																																															}
																																																																																																																														},
																																																																																																																														_1: {
																																																																																																																															ctor: '::',
																																																																																																																															_0: {
																																																																																																																																ctor: '_Tuple2',
																																																																																																																																_0: 'Rho',
																																																																																																																																_1: {
																																																																																																																																	ctor: '::',
																																																																																																																																	_0: 929,
																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																}
																																																																																																																															},
																																																																																																																															_1: {
																																																																																																																																ctor: '::',
																																																																																																																																_0: {
																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																	_0: 'Sigma',
																																																																																																																																	_1: {
																																																																																																																																		ctor: '::',
																																																																																																																																		_0: 931,
																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																	}
																																																																																																																																},
																																																																																																																																_1: {
																																																																																																																																	ctor: '::',
																																																																																																																																	_0: {
																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																		_0: 'Tau',
																																																																																																																																		_1: {
																																																																																																																																			ctor: '::',
																																																																																																																																			_0: 932,
																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																		}
																																																																																																																																	},
																																																																																																																																	_1: {
																																																																																																																																		ctor: '::',
																																																																																																																																		_0: {
																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																			_0: 'Upsilon',
																																																																																																																																			_1: {
																																																																																																																																				ctor: '::',
																																																																																																																																				_0: 933,
																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																			}
																																																																																																																																		},
																																																																																																																																		_1: {
																																																																																																																																			ctor: '::',
																																																																																																																																			_0: {
																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																				_0: 'Phi',
																																																																																																																																				_1: {
																																																																																																																																					ctor: '::',
																																																																																																																																					_0: 934,
																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																				}
																																																																																																																																			},
																																																																																																																																			_1: {
																																																																																																																																				ctor: '::',
																																																																																																																																				_0: {
																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																					_0: 'Chi',
																																																																																																																																					_1: {
																																																																																																																																						ctor: '::',
																																																																																																																																						_0: 935,
																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																					}
																																																																																																																																				},
																																																																																																																																				_1: {
																																																																																																																																					ctor: '::',
																																																																																																																																					_0: {
																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																						_0: 'Psi',
																																																																																																																																						_1: {
																																																																																																																																							ctor: '::',
																																																																																																																																							_0: 936,
																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																						}
																																																																																																																																					},
																																																																																																																																					_1: {
																																																																																																																																						ctor: '::',
																																																																																																																																						_0: {
																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																							_0: 'Omega',
																																																																																																																																							_1: {
																																																																																																																																								ctor: '::',
																																																																																																																																								_0: 937,
																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																							}
																																																																																																																																						},
																																																																																																																																						_1: {
																																																																																																																																							ctor: '::',
																																																																																																																																							_0: {
																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																								_0: 'alpha',
																																																																																																																																								_1: {
																																																																																																																																									ctor: '::',
																																																																																																																																									_0: 945,
																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																								}
																																																																																																																																							},
																																																																																																																																							_1: {
																																																																																																																																								ctor: '::',
																																																																																																																																								_0: {
																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																									_0: 'beta',
																																																																																																																																									_1: {
																																																																																																																																										ctor: '::',
																																																																																																																																										_0: 946,
																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																									}
																																																																																																																																								},
																																																																																																																																								_1: {
																																																																																																																																									ctor: '::',
																																																																																																																																									_0: {
																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																										_0: 'gamma',
																																																																																																																																										_1: {
																																																																																																																																											ctor: '::',
																																																																																																																																											_0: 947,
																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																										}
																																																																																																																																									},
																																																																																																																																									_1: {
																																																																																																																																										ctor: '::',
																																																																																																																																										_0: {
																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																											_0: 'delta',
																																																																																																																																											_1: {
																																																																																																																																												ctor: '::',
																																																																																																																																												_0: 948,
																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																											}
																																																																																																																																										},
																																																																																																																																										_1: {
																																																																																																																																											ctor: '::',
																																																																																																																																											_0: {
																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																												_0: 'epsilon',
																																																																																																																																												_1: {
																																																																																																																																													ctor: '::',
																																																																																																																																													_0: 949,
																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																												}
																																																																																																																																											},
																																																																																																																																											_1: {
																																																																																																																																												ctor: '::',
																																																																																																																																												_0: {
																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																													_0: 'zeta',
																																																																																																																																													_1: {
																																																																																																																																														ctor: '::',
																																																																																																																																														_0: 950,
																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																													}
																																																																																																																																												},
																																																																																																																																												_1: {
																																																																																																																																													ctor: '::',
																																																																																																																																													_0: {
																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																														_0: 'eta',
																																																																																																																																														_1: {
																																																																																																																																															ctor: '::',
																																																																																																																																															_0: 951,
																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																														}
																																																																																																																																													},
																																																																																																																																													_1: {
																																																																																																																																														ctor: '::',
																																																																																																																																														_0: {
																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																															_0: 'theta',
																																																																																																																																															_1: {
																																																																																																																																																ctor: '::',
																																																																																																																																																_0: 952,
																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																															}
																																																																																																																																														},
																																																																																																																																														_1: {
																																																																																																																																															ctor: '::',
																																																																																																																																															_0: {
																																																																																																																																																ctor: '_Tuple2',
																																																																																																																																																_0: 'iota',
																																																																																																																																																_1: {
																																																																																																																																																	ctor: '::',
																																																																																																																																																	_0: 953,
																																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																																}
																																																																																																																																															},
																																																																																																																																															_1: {
																																																																																																																																																ctor: '::',
																																																																																																																																																_0: {
																																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																																	_0: 'kappa',
																																																																																																																																																	_1: {
																																																																																																																																																		ctor: '::',
																																																																																																																																																		_0: 954,
																																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																																	}
																																																																																																																																																},
																																																																																																																																																_1: {
																																																																																																																																																	ctor: '::',
																																																																																																																																																	_0: {
																																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																																		_0: 'lambda',
																																																																																																																																																		_1: {
																																																																																																																																																			ctor: '::',
																																																																																																																																																			_0: 955,
																																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																																		}
																																																																																																																																																	},
																																																																																																																																																	_1: {
																																																																																																																																																		ctor: '::',
																																																																																																																																																		_0: {
																																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																																			_0: 'mu',
																																																																																																																																																			_1: {
																																																																																																																																																				ctor: '::',
																																																																																																																																																				_0: 956,
																																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																																			}
																																																																																																																																																		},
																																																																																																																																																		_1: {
																																																																																																																																																			ctor: '::',
																																																																																																																																																			_0: {
																																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																																				_0: 'nu',
																																																																																																																																																				_1: {
																																																																																																																																																					ctor: '::',
																																																																																																																																																					_0: 957,
																																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																																				}
																																																																																																																																																			},
																																																																																																																																																			_1: {
																																																																																																																																																				ctor: '::',
																																																																																																																																																				_0: {
																																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																																					_0: 'xi',
																																																																																																																																																					_1: {
																																																																																																																																																						ctor: '::',
																																																																																																																																																						_0: 958,
																																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																																					}
																																																																																																																																																				},
																																																																																																																																																				_1: {
																																																																																																																																																					ctor: '::',
																																																																																																																																																					_0: {
																																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																																						_0: 'omicron',
																																																																																																																																																						_1: {
																																																																																																																																																							ctor: '::',
																																																																																																																																																							_0: 959,
																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																						}
																																																																																																																																																					},
																																																																																																																																																					_1: {
																																																																																																																																																						ctor: '::',
																																																																																																																																																						_0: {
																																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																																							_0: 'pi',
																																																																																																																																																							_1: {
																																																																																																																																																								ctor: '::',
																																																																																																																																																								_0: 960,
																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																							}
																																																																																																																																																						},
																																																																																																																																																						_1: {
																																																																																																																																																							ctor: '::',
																																																																																																																																																							_0: {
																																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																																								_0: 'rho',
																																																																																																																																																								_1: {
																																																																																																																																																									ctor: '::',
																																																																																																																																																									_0: 961,
																																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																																								}
																																																																																																																																																							},
																																																																																																																																																							_1: {
																																																																																																																																																								ctor: '::',
																																																																																																																																																								_0: {
																																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																																									_0: 'sigmaf',
																																																																																																																																																									_1: {
																																																																																																																																																										ctor: '::',
																																																																																																																																																										_0: 962,
																																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																																									}
																																																																																																																																																								},
																																																																																																																																																								_1: {
																																																																																																																																																									ctor: '::',
																																																																																																																																																									_0: {
																																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																																										_0: 'sigma',
																																																																																																																																																										_1: {
																																																																																																																																																											ctor: '::',
																																																																																																																																																											_0: 963,
																																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																																										}
																																																																																																																																																									},
																																																																																																																																																									_1: {
																																																																																																																																																										ctor: '::',
																																																																																																																																																										_0: {
																																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																																											_0: 'tau',
																																																																																																																																																											_1: {
																																																																																																																																																												ctor: '::',
																																																																																																																																																												_0: 964,
																																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																																											}
																																																																																																																																																										},
																																																																																																																																																										_1: {
																																																																																																																																																											ctor: '::',
																																																																																																																																																											_0: {
																																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																																												_0: 'upsilon',
																																																																																																																																																												_1: {
																																																																																																																																																													ctor: '::',
																																																																																																																																																													_0: 965,
																																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																																												}
																																																																																																																																																											},
																																																																																																																																																											_1: {
																																																																																																																																																												ctor: '::',
																																																																																																																																																												_0: {
																																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																																													_0: 'phi',
																																																																																																																																																													_1: {
																																																																																																																																																														ctor: '::',
																																																																																																																																																														_0: 966,
																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																													}
																																																																																																																																																												},
																																																																																																																																																												_1: {
																																																																																																																																																													ctor: '::',
																																																																																																																																																													_0: {
																																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																																														_0: 'chi',
																																																																																																																																																														_1: {
																																																																																																																																																															ctor: '::',
																																																																																																																																																															_0: 967,
																																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																																														}
																																																																																																																																																													},
																																																																																																																																																													_1: {
																																																																																																																																																														ctor: '::',
																																																																																																																																																														_0: {
																																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																																															_0: 'psi',
																																																																																																																																																															_1: {
																																																																																																																																																																ctor: '::',
																																																																																																																																																																_0: 968,
																																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																																															}
																																																																																																																																																														},
																																																																																																																																																														_1: {
																																																																																																																																																															ctor: '::',
																																																																																																																																																															_0: {
																																																																																																																																																																ctor: '_Tuple2',
																																																																																																																																																																_0: 'omega',
																																																																																																																																																																_1: {
																																																																																																																																																																	ctor: '::',
																																																																																																																																																																	_0: 969,
																																																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																																																}
																																																																																																																																																															},
																																																																																																																																																															_1: {
																																																																																																																																																																ctor: '::',
																																																																																																																																																																_0: {
																																																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																																																	_0: 'thetasym',
																																																																																																																																																																	_1: {
																																																																																																																																																																		ctor: '::',
																																																																																																																																																																		_0: 977,
																																																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																																																	}
																																																																																																																																																																},
																																																																																																																																																																_1: {
																																																																																																																																																																	ctor: '::',
																																																																																																																																																																	_0: {
																																																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																																																		_0: 'upsih',
																																																																																																																																																																		_1: {
																																																																																																																																																																			ctor: '::',
																																																																																																																																																																			_0: 978,
																																																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																																																		}
																																																																																																																																																																	},
																																																																																																																																																																	_1: {
																																																																																																																																																																		ctor: '::',
																																																																																																																																																																		_0: {
																																																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																																																			_0: 'piv',
																																																																																																																																																																			_1: {
																																																																																																																																																																				ctor: '::',
																																																																																																																																																																				_0: 982,
																																																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																																																			}
																																																																																																																																																																		},
																																																																																																																																																																		_1: {
																																																																																																																																																																			ctor: '::',
																																																																																																																																																																			_0: {
																																																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																																																				_0: 'ensp',
																																																																																																																																																																				_1: {
																																																																																																																																																																					ctor: '::',
																																																																																																																																																																					_0: 8194,
																																																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																																																				}
																																																																																																																																																																			},
																																																																																																																																																																			_1: {
																																																																																																																																																																				ctor: '::',
																																																																																																																																																																				_0: {
																																																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																																																					_0: 'emsp',
																																																																																																																																																																					_1: {
																																																																																																																																																																						ctor: '::',
																																																																																																																																																																						_0: 8195,
																																																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																																																					}
																																																																																																																																																																				},
																																																																																																																																																																				_1: {
																																																																																																																																																																					ctor: '::',
																																																																																																																																																																					_0: {
																																																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																																																						_0: 'thinsp',
																																																																																																																																																																						_1: {
																																																																																																																																																																							ctor: '::',
																																																																																																																																																																							_0: 8201,
																																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																																						}
																																																																																																																																																																					},
																																																																																																																																																																					_1: {
																																																																																																																																																																						ctor: '::',
																																																																																																																																																																						_0: {
																																																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																																																							_0: 'zwnj',
																																																																																																																																																																							_1: {
																																																																																																																																																																								ctor: '::',
																																																																																																																																																																								_0: 8204,
																																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																																							}
																																																																																																																																																																						},
																																																																																																																																																																						_1: {
																																																																																																																																																																							ctor: '::',
																																																																																																																																																																							_0: {
																																																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																																																								_0: 'zwj',
																																																																																																																																																																								_1: {
																																																																																																																																																																									ctor: '::',
																																																																																																																																																																									_0: 8205,
																																																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																																																								}
																																																																																																																																																																							},
																																																																																																																																																																							_1: {
																																																																																																																																																																								ctor: '::',
																																																																																																																																																																								_0: {
																																																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																																																									_0: 'lrm',
																																																																																																																																																																									_1: {
																																																																																																																																																																										ctor: '::',
																																																																																																																																																																										_0: 8206,
																																																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																																																									}
																																																																																																																																																																								},
																																																																																																																																																																								_1: {
																																																																																																																																																																									ctor: '::',
																																																																																																																																																																									_0: {
																																																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																																																										_0: 'rlm',
																																																																																																																																																																										_1: {
																																																																																																																																																																											ctor: '::',
																																																																																																																																																																											_0: 8207,
																																																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																																																										}
																																																																																																																																																																									},
																																																																																																																																																																									_1: {
																																																																																																																																																																										ctor: '::',
																																																																																																																																																																										_0: {
																																																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																																																											_0: 'ndash',
																																																																																																																																																																											_1: {
																																																																																																																																																																												ctor: '::',
																																																																																																																																																																												_0: 8211,
																																																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																																																											}
																																																																																																																																																																										},
																																																																																																																																																																										_1: {
																																																																																																																																																																											ctor: '::',
																																																																																																																																																																											_0: {
																																																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																																																												_0: 'mdash',
																																																																																																																																																																												_1: {
																																																																																																																																																																													ctor: '::',
																																																																																																																																																																													_0: 8212,
																																																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																																																												}
																																																																																																																																																																											},
																																																																																																																																																																											_1: {
																																																																																																																																																																												ctor: '::',
																																																																																																																																																																												_0: {
																																																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																																																													_0: 'lsquo',
																																																																																																																																																																													_1: {
																																																																																																																																																																														ctor: '::',
																																																																																																																																																																														_0: 8216,
																																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																																													}
																																																																																																																																																																												},
																																																																																																																																																																												_1: {
																																																																																																																																																																													ctor: '::',
																																																																																																																																																																													_0: {
																																																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																																																														_0: 'rsquo',
																																																																																																																																																																														_1: {
																																																																																																																																																																															ctor: '::',
																																																																																																																																																																															_0: 8217,
																																																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																																																														}
																																																																																																																																																																													},
																																																																																																																																																																													_1: {
																																																																																																																																																																														ctor: '::',
																																																																																																																																																																														_0: {
																																																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																																																															_0: 'sbquo',
																																																																																																																																																																															_1: {
																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																_0: 8218,
																																																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																																																															}
																																																																																																																																																																														},
																																																																																																																																																																														_1: {
																																																																																																																																																																															ctor: '::',
																																																																																																																																																																															_0: {
																																																																																																																																																																																ctor: '_Tuple2',
																																																																																																																																																																																_0: 'ldquo',
																																																																																																																																																																																_1: {
																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																	_0: 8220,
																																																																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																																																																}
																																																																																																																																																																															},
																																																																																																																																																																															_1: {
																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																_0: {
																																																																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																																																																	_0: 'rdquo',
																																																																																																																																																																																	_1: {
																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																		_0: 8221,
																																																																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																																																																	}
																																																																																																																																																																																},
																																																																																																																																																																																_1: {
																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																	_0: {
																																																																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																																																																		_0: 'bdquo',
																																																																																																																																																																																		_1: {
																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																			_0: 8222,
																																																																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																																																																		}
																																																																																																																																																																																	},
																																																																																																																																																																																	_1: {
																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																		_0: {
																																																																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																																																																			_0: 'dagger',
																																																																																																																																																																																			_1: {
																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																				_0: 8224,
																																																																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																																																																			}
																																																																																																																																																																																		},
																																																																																																																																																																																		_1: {
																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																			_0: {
																																																																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																																																																				_0: 'Dagger',
																																																																																																																																																																																				_1: {
																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																					_0: 8225,
																																																																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																																																																				}
																																																																																																																																																																																			},
																																																																																																																																																																																			_1: {
																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																				_0: {
																																																																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																																																																					_0: 'bull',
																																																																																																																																																																																					_1: {
																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																						_0: 8226,
																																																																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																																																																					}
																																																																																																																																																																																				},
																																																																																																																																																																																				_1: {
																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																					_0: {
																																																																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																																																																						_0: 'hellip',
																																																																																																																																																																																						_1: {
																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																							_0: 8230,
																																																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																																																						}
																																																																																																																																																																																					},
																																																																																																																																																																																					_1: {
																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																						_0: {
																																																																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																																																																							_0: 'permil',
																																																																																																																																																																																							_1: {
																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																								_0: 8240,
																																																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																																																							}
																																																																																																																																																																																						},
																																																																																																																																																																																						_1: {
																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																							_0: {
																																																																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																																																																								_0: 'prime',
																																																																																																																																																																																								_1: {
																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																									_0: 8242,
																																																																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																																																																								}
																																																																																																																																																																																							},
																																																																																																																																																																																							_1: {
																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																								_0: {
																																																																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																																																																									_0: 'Prime',
																																																																																																																																																																																									_1: {
																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																										_0: 8243,
																																																																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																																																																									}
																																																																																																																																																																																								},
																																																																																																																																																																																								_1: {
																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																									_0: {
																																																																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																																																																										_0: 'lsaquo',
																																																																																																																																																																																										_1: {
																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																											_0: 8249,
																																																																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																																																																										}
																																																																																																																																																																																									},
																																																																																																																																																																																									_1: {
																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																										_0: {
																																																																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																																																																											_0: 'rsaquo',
																																																																																																																																																																																											_1: {
																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																												_0: 8250,
																																																																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																																																																											}
																																																																																																																																																																																										},
																																																																																																																																																																																										_1: {
																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																											_0: {
																																																																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																																																																												_0: 'oline',
																																																																																																																																																																																												_1: {
																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																													_0: 8254,
																																																																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																																																																												}
																																																																																																																																																																																											},
																																																																																																																																																																																											_1: {
																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																												_0: {
																																																																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																																																																													_0: 'frasl',
																																																																																																																																																																																													_1: {
																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																														_0: 8260,
																																																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																																																													}
																																																																																																																																																																																												},
																																																																																																																																																																																												_1: {
																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																													_0: {
																																																																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																																																																														_0: 'euro',
																																																																																																																																																																																														_1: {
																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																															_0: 8364,
																																																																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																																																																														}
																																																																																																																																																																																													},
																																																																																																																																																																																													_1: {
																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																														_0: {
																																																																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																																																																															_0: 'image',
																																																																																																																																																																																															_1: {
																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																_0: 8465,
																																																																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																																																																															}
																																																																																																																																																																																														},
																																																																																																																																																																																														_1: {
																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																															_0: {
																																																																																																																																																																																																ctor: '_Tuple2',
																																																																																																																																																																																																_0: 'weierp',
																																																																																																																																																																																																_1: {
																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																	_0: 8472,
																																																																																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																																																																																}
																																																																																																																																																																																															},
																																																																																																																																																																																															_1: {
																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																_0: {
																																																																																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																																																																																	_0: 'real',
																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																		_0: 8476,
																																																																																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																																																																																	}
																																																																																																																																																																																																},
																																																																																																																																																																																																_1: {
																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																	_0: {
																																																																																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																																																																																		_0: 'trade',
																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																			_0: 8482,
																																																																																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																																																																																		}
																																																																																																																																																																																																	},
																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																		_0: {
																																																																																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																																																																																			_0: 'alefsym',
																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																				_0: 8501,
																																																																																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																																																																																			}
																																																																																																																																																																																																		},
																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																			_0: {
																																																																																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																																																																																				_0: 'larr',
																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																					_0: 8592,
																																																																																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																																																																																				}
																																																																																																																																																																																																			},
																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																				_0: {
																																																																																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																																																																																					_0: 'uarr',
																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																						_0: 8593,
																																																																																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																																																																																					}
																																																																																																																																																																																																				},
																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																					_0: {
																																																																																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																																																																																						_0: 'rarr',
																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																							_0: 8594,
																																																																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																																																																						}
																																																																																																																																																																																																					},
																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																						_0: {
																																																																																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																																																																																							_0: 'darr',
																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																								_0: 8595,
																																																																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																																																																							}
																																																																																																																																																																																																						},
																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																							_0: {
																																																																																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																																																																																								_0: 'harr',
																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																									_0: 8596,
																																																																																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																																																																																								}
																																																																																																																																																																																																							},
																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																								_0: {
																																																																																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																																																																																									_0: 'crarr',
																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																										_0: 8629,
																																																																																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																																																																																									}
																																																																																																																																																																																																								},
																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																									_0: {
																																																																																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																																																																																										_0: 'lArr',
																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																											_0: 8656,
																																																																																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																																																																																										}
																																																																																																																																																																																																									},
																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																										_0: {
																																																																																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																																																																																											_0: 'uArr',
																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																												_0: 8657,
																																																																																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																																																																																											}
																																																																																																																																																																																																										},
																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																											_0: {
																																																																																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																																																																																												_0: 'rArr',
																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																													_0: 8658,
																																																																																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																																																																																												}
																																																																																																																																																																																																											},
																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																												_0: {
																																																																																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																																																																																													_0: 'dArr',
																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																														_0: 8659,
																																																																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																																																																													}
																																																																																																																																																																																																												},
																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																													_0: {
																																																																																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																																																																																														_0: 'hArr',
																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																															_0: 8660,
																																																																																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																																																																																														}
																																																																																																																																																																																																													},
																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																														_0: {
																																																																																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																																																																																															_0: 'forall',
																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																_0: 8704,
																																																																																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																																																																																															}
																																																																																																																																																																																																														},
																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																															_0: {
																																																																																																																																																																																																																ctor: '_Tuple2',
																																																																																																																																																																																																																_0: 'part',
																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																	_0: 8706,
																																																																																																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																																																																																																}
																																																																																																																																																																																																															},
																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																_0: {
																																																																																																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																																																																																																	_0: 'exist',
																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																		_0: 8707,
																																																																																																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																																																																																																	}
																																																																																																																																																																																																																},
																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																	_0: {
																																																																																																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																																																																																																		_0: 'empty',
																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																			_0: 8709,
																																																																																																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																																																																																																		}
																																																																																																																																																																																																																	},
																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																		_0: {
																																																																																																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																																																																																																			_0: 'nabla',
																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																				_0: 8711,
																																																																																																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																																																																																																			}
																																																																																																																																																																																																																		},
																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																			_0: {
																																																																																																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																																																																																																				_0: 'isin',
																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																					_0: 8712,
																																																																																																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																																																																																																				}
																																																																																																																																																																																																																			},
																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																				_0: {
																																																																																																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																																																																																																					_0: 'notin',
																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																						_0: 8713,
																																																																																																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																																																																																																					}
																																																																																																																																																																																																																				},
																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																					_0: {
																																																																																																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																																																																																																						_0: 'ni',
																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																							_0: 8715,
																																																																																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																																																																																						}
																																																																																																																																																																																																																					},
																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																						_0: {
																																																																																																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																																																																																																							_0: 'prod',
																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																								_0: 8719,
																																																																																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																																																																																							}
																																																																																																																																																																																																																						},
																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																							_0: {
																																																																																																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																																																																																																								_0: 'sum',
																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																									_0: 8721,
																																																																																																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																																																																																																								}
																																																																																																																																																																																																																							},
																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																								_0: {
																																																																																																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																																																																																																									_0: 'minus',
																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																										_0: 8722,
																																																																																																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																																																																																																									}
																																																																																																																																																																																																																								},
																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																									_0: {
																																																																																																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																																																																																																										_0: 'lowast',
																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																											_0: 8727,
																																																																																																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																																																																																																										}
																																																																																																																																																																																																																									},
																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																										_0: {
																																																																																																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																																																																																																											_0: 'radic',
																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																												_0: 8730,
																																																																																																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																																																																																																											}
																																																																																																																																																																																																																										},
																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																											_0: {
																																																																																																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																																																																																																												_0: 'prop',
																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																													_0: 8733,
																																																																																																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																																																																																																												}
																																																																																																																																																																																																																											},
																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																												_0: {
																																																																																																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																																																																																																													_0: 'infin',
																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																														_0: 8734,
																																																																																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																																																																																													}
																																																																																																																																																																																																																												},
																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																													_0: {
																																																																																																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																																																																																																														_0: 'ang',
																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																															_0: 8736,
																																																																																																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																																																																																																														}
																																																																																																																																																																																																																													},
																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																														_0: {
																																																																																																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																																																																																																															_0: 'and',
																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																_0: 8743,
																																																																																																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																																																																																																															}
																																																																																																																																																																																																																														},
																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																															_0: {
																																																																																																																																																																																																																																ctor: '_Tuple2',
																																																																																																																																																																																																																																_0: 'or',
																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																	_0: 8744,
																																																																																																																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																																																																																																																}
																																																																																																																																																																																																																															},
																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																_0: {
																																																																																																																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																																																																																																																	_0: 'cap',
																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																		_0: 8745,
																																																																																																																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																},
																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																	_0: {
																																																																																																																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																																																																																																																		_0: 'cup',
																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																			_0: 8746,
																																																																																																																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																	},
																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																		_0: {
																																																																																																																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																																																																																																																			_0: 'int',
																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																				_0: 8747,
																																																																																																																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																		},
																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																			_0: {
																																																																																																																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																																																																																																																				_0: 'there4',
																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																					_0: 8756,
																																																																																																																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																			},
																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																				_0: {
																																																																																																																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																																																																																																																					_0: 'sim',
																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																						_0: 8764,
																																																																																																																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																				},
																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																					_0: {
																																																																																																																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																																																																																																																						_0: 'cong',
																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																							_0: 8773,
																																																																																																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																					},
																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																						_0: {
																																																																																																																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																																																																																																																							_0: 'asymp',
																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																								_0: 8776,
																																																																																																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																						},
																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																							_0: {
																																																																																																																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																																																																																																																								_0: 'ne',
																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																									_0: 8800,
																																																																																																																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																							},
																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																								_0: {
																																																																																																																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																																																																																																																									_0: 'equiv',
																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																										_0: 8801,
																																																																																																																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																								},
																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																									_0: {
																																																																																																																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																																																																																																																										_0: 'le',
																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																											_0: 8804,
																																																																																																																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																									},
																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																										_0: {
																																																																																																																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																																																																																																																											_0: 'ge',
																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																												_0: 8805,
																																																																																																																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																										},
																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																											_0: {
																																																																																																																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																																																																																																																												_0: 'sub',
																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																													_0: 8834,
																																																																																																																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																											},
																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																												_0: {
																																																																																																																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																																																																																																																													_0: 'sup',
																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																														_0: 8835,
																																																																																																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																												},
																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																													_0: {
																																																																																																																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																																																																																																																														_0: 'nsub',
																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																															_0: 8836,
																																																																																																																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																													},
																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																														_0: {
																																																																																																																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																																																																																																																															_0: 'sube',
																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																_0: 8838,
																																																																																																																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																														},
																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																															_0: {
																																																																																																																																																																																																																																																ctor: '_Tuple2',
																																																																																																																																																																																																																																																_0: 'supe',
																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																	_0: 8839,
																																																																																																																																																																																																																																																	_1: {ctor: '[]'}
																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																															},
																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																_0: {
																																																																																																																																																																																																																																																	ctor: '_Tuple2',
																																																																																																																																																																																																																																																	_0: 'oplus',
																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																		_0: 8853,
																																																																																																																																																																																																																																																		_1: {ctor: '[]'}
																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																},
																																																																																																																																																																																																																																																_1: {
																																																																																																																																																																																																																																																	ctor: '::',
																																																																																																																																																																																																																																																	_0: {
																																																																																																																																																																																																																																																		ctor: '_Tuple2',
																																																																																																																																																																																																																																																		_0: 'otimes',
																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																			_0: 8855,
																																																																																																																																																																																																																																																			_1: {ctor: '[]'}
																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																	},
																																																																																																																																																																																																																																																	_1: {
																																																																																																																																																																																																																																																		ctor: '::',
																																																																																																																																																																																																																																																		_0: {
																																																																																																																																																																																																																																																			ctor: '_Tuple2',
																																																																																																																																																																																																																																																			_0: 'perp',
																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																				_0: 8869,
																																																																																																																																																																																																																																																				_1: {ctor: '[]'}
																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																		},
																																																																																																																																																																																																																																																		_1: {
																																																																																																																																																																																																																																																			ctor: '::',
																																																																																																																																																																																																																																																			_0: {
																																																																																																																																																																																																																																																				ctor: '_Tuple2',
																																																																																																																																																																																																																																																				_0: 'sdot',
																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																					_0: 8901,
																																																																																																																																																																																																																																																					_1: {ctor: '[]'}
																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																			},
																																																																																																																																																																																																																																																			_1: {
																																																																																																																																																																																																																																																				ctor: '::',
																																																																																																																																																																																																																																																				_0: {
																																																																																																																																																																																																																																																					ctor: '_Tuple2',
																																																																																																																																																																																																																																																					_0: 'lceil',
																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																						_0: 8968,
																																																																																																																																																																																																																																																						_1: {ctor: '[]'}
																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																				},
																																																																																																																																																																																																																																																				_1: {
																																																																																																																																																																																																																																																					ctor: '::',
																																																																																																																																																																																																																																																					_0: {
																																																																																																																																																																																																																																																						ctor: '_Tuple2',
																																																																																																																																																																																																																																																						_0: 'rceil',
																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																							_0: 8969,
																																																																																																																																																																																																																																																							_1: {ctor: '[]'}
																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																					},
																																																																																																																																																																																																																																																					_1: {
																																																																																																																																																																																																																																																						ctor: '::',
																																																																																																																																																																																																																																																						_0: {
																																																																																																																																																																																																																																																							ctor: '_Tuple2',
																																																																																																																																																																																																																																																							_0: 'lfloor',
																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																								_0: 8970,
																																																																																																																																																																																																																																																								_1: {ctor: '[]'}
																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																						},
																																																																																																																																																																																																																																																						_1: {
																																																																																																																																																																																																																																																							ctor: '::',
																																																																																																																																																																																																																																																							_0: {
																																																																																																																																																																																																																																																								ctor: '_Tuple2',
																																																																																																																																																																																																																																																								_0: 'rfloor',
																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																									_0: 8971,
																																																																																																																																																																																																																																																									_1: {ctor: '[]'}
																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																							},
																																																																																																																																																																																																																																																							_1: {
																																																																																																																																																																																																																																																								ctor: '::',
																																																																																																																																																																																																																																																								_0: {
																																																																																																																																																																																																																																																									ctor: '_Tuple2',
																																																																																																																																																																																																																																																									_0: 'lang',
																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																										_0: 9001,
																																																																																																																																																																																																																																																										_1: {ctor: '[]'}
																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																								},
																																																																																																																																																																																																																																																								_1: {
																																																																																																																																																																																																																																																									ctor: '::',
																																																																																																																																																																																																																																																									_0: {
																																																																																																																																																																																																																																																										ctor: '_Tuple2',
																																																																																																																																																																																																																																																										_0: 'rang',
																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																											_0: 9002,
																																																																																																																																																																																																																																																											_1: {ctor: '[]'}
																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																									},
																																																																																																																																																																																																																																																									_1: {
																																																																																																																																																																																																																																																										ctor: '::',
																																																																																																																																																																																																																																																										_0: {
																																																																																																																																																																																																																																																											ctor: '_Tuple2',
																																																																																																																																																																																																																																																											_0: 'loz',
																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																												_0: 9674,
																																																																																																																																																																																																																																																												_1: {ctor: '[]'}
																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																										},
																																																																																																																																																																																																																																																										_1: {
																																																																																																																																																																																																																																																											ctor: '::',
																																																																																																																																																																																																																																																											_0: {
																																																																																																																																																																																																																																																												ctor: '_Tuple2',
																																																																																																																																																																																																																																																												_0: 'spades',
																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																													_0: 9824,
																																																																																																																																																																																																																																																													_1: {ctor: '[]'}
																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																											},
																																																																																																																																																																																																																																																											_1: {
																																																																																																																																																																																																																																																												ctor: '::',
																																																																																																																																																																																																																																																												_0: {
																																																																																																																																																																																																																																																													ctor: '_Tuple2',
																																																																																																																																																																																																																																																													_0: 'clubs',
																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																														_0: 9827,
																																																																																																																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																												},
																																																																																																																																																																																																																																																												_1: {
																																																																																																																																																																																																																																																													ctor: '::',
																																																																																																																																																																																																																																																													_0: {
																																																																																																																																																																																																																																																														ctor: '_Tuple2',
																																																																																																																																																																																																																																																														_0: 'hearts',
																																																																																																																																																																																																																																																														_1: {
																																																																																																																																																																																																																																																															ctor: '::',
																																																																																																																																																																																																																																																															_0: 9829,
																																																																																																																																																																																																																																																															_1: {ctor: '[]'}
																																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																																													},
																																																																																																																																																																																																																																																													_1: {
																																																																																																																																																																																																																																																														ctor: '::',
																																																																																																																																																																																																																																																														_0: {
																																																																																																																																																																																																																																																															ctor: '_Tuple2',
																																																																																																																																																																																																																																																															_0: 'diams',
																																																																																																																																																																																																																																																															_1: {
																																																																																																																																																																																																																																																																ctor: '::',
																																																																																																																																																																																																																																																																_0: 9830,
																																																																																																																																																																																																																																																																_1: {ctor: '[]'}
																																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																																														},
																																																																																																																																																																																																																																																														_1: {ctor: '[]'}
																																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																																}
																																																																																																																																																																																																																																															}
																																																																																																																																																																																																																																														}
																																																																																																																																																																																																																																													}
																																																																																																																																																																																																																																												}
																																																																																																																																																																																																																																											}
																																																																																																																																																																																																																																										}
																																																																																																																																																																																																																																									}
																																																																																																																																																																																																																																								}
																																																																																																																																																																																																																																							}
																																																																																																																																																																																																																																						}
																																																																																																																																																																																																																																					}
																																																																																																																																																																																																																																				}
																																																																																																																																																																																																																																			}
																																																																																																																																																																																																																																		}
																																																																																																																																																																																																																																	}
																																																																																																																																																																																																																																}
																																																																																																																																																																																																																															}
																																																																																																																																																																																																																														}
																																																																																																																																																																																																																													}
																																																																																																																																																																																																																												}
																																																																																																																																																																																																																											}
																																																																																																																																																																																																																										}
																																																																																																																																																																																																																									}
																																																																																																																																																																																																																								}
																																																																																																																																																																																																																							}
																																																																																																																																																																																																																						}
																																																																																																																																																																																																																					}
																																																																																																																																																																																																																				}
																																																																																																																																																																																																																			}
																																																																																																																																																																																																																		}
																																																																																																																																																																																																																	}
																																																																																																																																																																																																																}
																																																																																																																																																																																																															}
																																																																																																																																																																																																														}
																																																																																																																																																																																																													}
																																																																																																																																																																																																												}
																																																																																																																																																																																																											}
																																																																																																																																																																																																										}
																																																																																																																																																																																																									}
																																																																																																																																																																																																								}
																																																																																																																																																																																																							}
																																																																																																																																																																																																						}
																																																																																																																																																																																																					}
																																																																																																																																																																																																				}
																																																																																																																																																																																																			}
																																																																																																																																																																																																		}
																																																																																																																																																																																																	}
																																																																																																																																																																																																}
																																																																																																																																																																																															}
																																																																																																																																																																																														}
																																																																																																																																																																																													}
																																																																																																																																																																																												}
																																																																																																																																																																																											}
																																																																																																																																																																																										}
																																																																																																																																																																																									}
																																																																																																																																																																																								}
																																																																																																																																																																																							}
																																																																																																																																																																																						}
																																																																																																																																																																																					}
																																																																																																																																																																																				}
																																																																																																																																																																																			}
																																																																																																																																																																																		}
																																																																																																																																																																																	}
																																																																																																																																																																																}
																																																																																																																																																																															}
																																																																																																																																																																														}
																																																																																																																																																																													}
																																																																																																																																																																												}
																																																																																																																																																																											}
																																																																																																																																																																										}
																																																																																																																																																																									}
																																																																																																																																																																								}
																																																																																																																																																																							}
																																																																																																																																																																						}
																																																																																																																																																																					}
																																																																																																																																																																				}
																																																																																																																																																																			}
																																																																																																																																																																		}
																																																																																																																																																																	}
																																																																																																																																																																}
																																																																																																																																																															}
																																																																																																																																																														}
																																																																																																																																																													}
																																																																																																																																																												}
																																																																																																																																																											}
																																																																																																																																																										}
																																																																																																																																																									}
																																																																																																																																																								}
																																																																																																																																																							}
																																																																																																																																																						}
																																																																																																																																																					}
																																																																																																																																																				}
																																																																																																																																																			}
																																																																																																																																																		}
																																																																																																																																																	}
																																																																																																																																																}
																																																																																																																																															}
																																																																																																																																														}
																																																																																																																																													}
																																																																																																																																												}
																																																																																																																																											}
																																																																																																																																										}
																																																																																																																																									}
																																																																																																																																								}
																																																																																																																																							}
																																																																																																																																						}
																																																																																																																																					}
																																																																																																																																				}
																																																																																																																																			}
																																																																																																																																		}
																																																																																																																																	}
																																																																																																																																}
																																																																																																																															}
																																																																																																																														}
																																																																																																																													}
																																																																																																																												}
																																																																																																																											}
																																																																																																																										}
																																																																																																																									}
																																																																																																																								}
																																																																																																																							}
																																																																																																																						}
																																																																																																																					}
																																																																																																																				}
																																																																																																																			}
																																																																																																																		}
																																																																																																																	}
																																																																																																																}
																																																																																																															}
																																																																																																														}
																																																																																																													}
																																																																																																												}
																																																																																																											}
																																																																																																										}
																																																																																																									}
																																																																																																								}
																																																																																																							}
																																																																																																						}
																																																																																																					}
																																																																																																				}
																																																																																																			}
																																																																																																		}
																																																																																																	}
																																																																																																}
																																																																																															}
																																																																																														}
																																																																																													}
																																																																																												}
																																																																																											}
																																																																																										}
																																																																																									}
																																																																																								}
																																																																																							}
																																																																																						}
																																																																																					}
																																																																																				}
																																																																																			}
																																																																																		}
																																																																																	}
																																																																																}
																																																																															}
																																																																														}
																																																																													}
																																																																												}
																																																																											}
																																																																										}
																																																																									}
																																																																								}
																																																																							}
																																																																						}
																																																																					}
																																																																				}
																																																																			}
																																																																		}
																																																																	}
																																																																}
																																																															}
																																																														}
																																																													}
																																																												}
																																																											}
																																																										}
																																																									}
																																																								}
																																																							}
																																																						}
																																																					}
																																																				}
																																																			}
																																																		}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Entity$replaceEntity = function (match) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		match.match,
		A2(
			_elm_lang$core$Maybe$map,
			_pablohirafuji$elm_char_codepoint$Char_CodePoint$listToString,
			A2(
				_elm_lang$core$Maybe$andThen,
				A2(_elm_lang$core$Basics$flip, _elm_lang$core$Dict$get, _pablohirafuji$elm_markdown$Markdown_Entity$entities),
				A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Maybe$Nothing,
					_elm_lang$core$List$head(match.submatches)))));
};
var _pablohirafuji$elm_markdown$Markdown_Entity$entitiesRegex = _elm_lang$core$Regex$regex('&([0-9a-zA-Z]+);');
var _pablohirafuji$elm_markdown$Markdown_Entity$replaceEntities = A3(_elm_lang$core$Regex$replace, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_Entity$entitiesRegex, _pablohirafuji$elm_markdown$Markdown_Entity$replaceEntity);
var _pablohirafuji$elm_markdown$Markdown_Entity$hexToInt = function (_p0) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (hexDigit, $int) {
				return (($int * 16) + A2(
					_elm_lang$core$Basics_ops['%'],
					_elm_lang$core$Char$toCode(hexDigit),
					39)) - 9;
			}),
		0,
		_elm_lang$core$String$toList(
			_elm_lang$core$String$toLower(_p0)));
};
var _pablohirafuji$elm_markdown$Markdown_Entity$hexadecimalRegex = _elm_lang$core$Regex$regex('&#[Xx]([0-9a-fA-F]{1,8});');
var _pablohirafuji$elm_markdown$Markdown_Entity$isBadEndUnicode = function ($int) {
	var remain_ = A2(_elm_lang$core$Basics_ops['%'], $int, 16);
	var remain = A2(_elm_lang$core$Basics_ops['%'], $int, 131070);
	return (_elm_lang$core$Native_Utils.cmp($int, 131070) > -1) && ((((_elm_lang$core$Native_Utils.cmp(0, remain) < 1) && (_elm_lang$core$Native_Utils.cmp(remain, 15) < 1)) || ((_elm_lang$core$Native_Utils.cmp(65536, remain) < 1) && (_elm_lang$core$Native_Utils.cmp(remain, 65551) < 1))) && (_elm_lang$core$Native_Utils.eq(remain_, 14) || _elm_lang$core$Native_Utils.eq(remain_, 15)));
};
var _pablohirafuji$elm_markdown$Markdown_Entity$isValidUnicode = function ($int) {
	return _elm_lang$core$Native_Utils.eq($int, 9) || (_elm_lang$core$Native_Utils.eq($int, 10) || (_elm_lang$core$Native_Utils.eq($int, 13) || (_elm_lang$core$Native_Utils.eq($int, 133) || (((_elm_lang$core$Native_Utils.cmp(32, $int) < 1) && (_elm_lang$core$Native_Utils.cmp($int, 126) < 1)) || (((_elm_lang$core$Native_Utils.cmp(160, $int) < 1) && (_elm_lang$core$Native_Utils.cmp($int, 55295) < 1)) || (((_elm_lang$core$Native_Utils.cmp(57344, $int) < 1) && (_elm_lang$core$Native_Utils.cmp($int, 64975) < 1)) || (((_elm_lang$core$Native_Utils.cmp(65008, $int) < 1) && (_elm_lang$core$Native_Utils.cmp($int, 65533) < 1)) || ((_elm_lang$core$Native_Utils.cmp(65536, $int) < 1) && (_elm_lang$core$Native_Utils.cmp($int, 1114109) < 1)))))))));
};
var _pablohirafuji$elm_markdown$Markdown_Entity$validUnicode = function ($int) {
	return (_pablohirafuji$elm_markdown$Markdown_Entity$isValidUnicode($int) && (!_pablohirafuji$elm_markdown$Markdown_Entity$isBadEndUnicode($int))) ? _pablohirafuji$elm_char_codepoint$Char_CodePoint$toString($int) : _elm_lang$core$String$fromChar(
		_elm_lang$core$Char$fromCode(65533));
};
var _pablohirafuji$elm_markdown$Markdown_Entity$replaceHexadecimal = function (match) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		match.match,
		A2(
			_elm_lang$core$Maybe$map,
			function (_p1) {
				return _pablohirafuji$elm_markdown$Markdown_Entity$validUnicode(
					_pablohirafuji$elm_markdown$Markdown_Entity$hexToInt(_p1));
			},
			A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Maybe$Nothing,
				_elm_lang$core$List$head(match.submatches))));
};
var _pablohirafuji$elm_markdown$Markdown_Entity$replaceHexadecimals = A3(_elm_lang$core$Regex$replace, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_Entity$hexadecimalRegex, _pablohirafuji$elm_markdown$Markdown_Entity$replaceHexadecimal);
var _pablohirafuji$elm_markdown$Markdown_Entity$replaceDecimal = function (match) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		match.match,
		A2(
			_elm_lang$core$Maybe$map,
			_pablohirafuji$elm_markdown$Markdown_Entity$validUnicode,
			A2(
				_elm_lang$core$Maybe$andThen,
				function (_p2) {
					return _elm_lang$core$Result$toMaybe(
						_elm_lang$core$String$toInt(_p2));
				},
				A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Maybe$Nothing,
					_elm_lang$core$List$head(match.submatches)))));
};
var _pablohirafuji$elm_markdown$Markdown_Entity$decimalRegex = _elm_lang$core$Regex$regex('&#([0-9]{1,8});');
var _pablohirafuji$elm_markdown$Markdown_Entity$replaceDecimals = A3(_elm_lang$core$Regex$replace, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_Entity$decimalRegex, _pablohirafuji$elm_markdown$Markdown_Entity$replaceDecimal);

var _pablohirafuji$elm_markdown$Markdown_Helpers$isEven = function ($int) {
	return _elm_lang$core$Native_Utils.eq(
		A2(_elm_lang$core$Basics_ops['%'], $int, 2),
		0);
};
var _pablohirafuji$elm_markdown$Markdown_Helpers$ifError = F2(
	function ($function, result) {
		var _p0 = result;
		if (_p0.ctor === 'Ok') {
			return result;
		} else {
			return $function(_p0._0);
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Helpers$whiteSpaceChars = ' \\t\\f\\v\\r\\n';
var _pablohirafuji$elm_markdown$Markdown_Helpers$cleanWhitespaces = function (_p1) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_elm_lang$core$Regex$regex(
			A2(
				_elm_lang$core$Basics_ops['++'],
				'[',
				A2(_elm_lang$core$Basics_ops['++'], _pablohirafuji$elm_markdown$Markdown_Helpers$whiteSpaceChars, ']+'))),
		function (_p2) {
			return ' ';
		},
		_elm_lang$core$String$trim(_p1));
};
var _pablohirafuji$elm_markdown$Markdown_Helpers$returnFirstJust = function (maybes) {
	var process = F2(
		function (a, maybeFound) {
			var _p3 = maybeFound;
			if (_p3.ctor === 'Just') {
				return _elm_lang$core$Maybe$Just(_p3._0);
			} else {
				return a;
			}
		});
	return A3(_elm_lang$core$List$foldl, process, _elm_lang$core$Maybe$Nothing, maybes);
};
var _pablohirafuji$elm_markdown$Markdown_Helpers$escapableRegex = _elm_lang$core$Regex$regex('(\\\\+)([!\"#$%&\\\'()*+,./:;<=>?@[\\\\\\]^_`{|}~-])');
var _pablohirafuji$elm_markdown$Markdown_Helpers$replaceEscapable = A3(
	_elm_lang$core$Regex$replace,
	_elm_lang$core$Regex$All,
	_pablohirafuji$elm_markdown$Markdown_Helpers$escapableRegex,
	function (regexMatch) {
		var _p4 = regexMatch.submatches;
		if ((((_p4.ctor === '::') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === '::')) && (_p4._1._0.ctor === 'Just')) {
			return A2(
				_elm_lang$core$Basics_ops['++'],
				A2(
					_elm_lang$core$String$repeat,
					(_elm_lang$core$String$length(_p4._0._0) / 2) | 0,
					'\\'),
				_p4._1._0._0);
		} else {
			return regexMatch.match;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Helpers$formatStr = function (str) {
	return _pablohirafuji$elm_markdown$Markdown_Entity$replaceHexadecimals(
		_pablohirafuji$elm_markdown$Markdown_Entity$replaceDecimals(
			_pablohirafuji$elm_markdown$Markdown_Entity$replaceEntities(
				_pablohirafuji$elm_markdown$Markdown_Helpers$replaceEscapable(str))));
};
var _pablohirafuji$elm_markdown$Markdown_Helpers$indentLine = function (indentLength) {
	return function (_p5) {
		return A4(
			_elm_lang$core$Regex$replace,
			_elm_lang$core$Regex$AtMost(1),
			_elm_lang$core$Regex$regex(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'^ {0,',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(indentLength),
						'}'))),
			function (_p6) {
				return '';
			},
			A4(
				_elm_lang$core$Regex$replace,
				_elm_lang$core$Regex$All,
				_elm_lang$core$Regex$regex('\\t'),
				function (_p7) {
					return '    ';
				},
				_p5));
	};
};
var _pablohirafuji$elm_markdown$Markdown_Helpers$initSpacesRegex = _elm_lang$core$Regex$regex('^ +');
var _pablohirafuji$elm_markdown$Markdown_Helpers$indentLength = function (_p8) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		A2(
			_elm_lang$core$Maybe$map,
			function (_p9) {
				return _elm_lang$core$String$length(
					function (_) {
						return _.match;
					}(_p9));
			},
			_elm_lang$core$List$head(
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_pablohirafuji$elm_markdown$Markdown_Helpers$initSpacesRegex,
					A4(
						_elm_lang$core$Regex$replace,
						_elm_lang$core$Regex$All,
						_elm_lang$core$Regex$regex('\\t'),
						function (_p10) {
							return '    ';
						},
						_p8)))));
};
var _pablohirafuji$elm_markdown$Markdown_Helpers$prepareRefLabel = function (_p11) {
	return _elm_lang$core$String$toLower(
		_pablohirafuji$elm_markdown$Markdown_Helpers$cleanWhitespaces(_p11));
};
var _pablohirafuji$elm_markdown$Markdown_Helpers$titleRegex = A2(
	_elm_lang$core$Basics_ops['++'],
	'(?:[',
	A2(
		_elm_lang$core$Basics_ops['++'],
		_pablohirafuji$elm_markdown$Markdown_Helpers$whiteSpaceChars,
		A2(
			_elm_lang$core$Basics_ops['++'],
			']+',
			A2(
				_elm_lang$core$Basics_ops['++'],
				'(?:\'([^\'\\\\]*(?:\\\\.[^\'\\\\]*)*)\'|',
				A2(_elm_lang$core$Basics_ops['++'], '\"([^\"\\\\]*(?:\\\\.[^\"\\\\]*)*)\"|', '\\(([^\\)\\\\]*(?:\\\\.[^\\)\\\\]*)*)\\)))?')))));
var _pablohirafuji$elm_markdown$Markdown_Helpers$insideSquareBracketRegex = '[^\\[\\]\\\\]*(?:\\\\.[^\\[\\]\\\\]*)*';

var _pablohirafuji$elm_markdown$Markdown_Config$defaultAllowedHtmlAttributes = {
	ctor: '::',
	_0: 'name',
	_1: {
		ctor: '::',
		_0: 'class',
		_1: {ctor: '[]'}
	}
};
var _pablohirafuji$elm_markdown$Markdown_Config$defaultAllowedHtmlElements = {
	ctor: '::',
	_0: 'address',
	_1: {
		ctor: '::',
		_0: 'article',
		_1: {
			ctor: '::',
			_0: 'aside',
			_1: {
				ctor: '::',
				_0: 'b',
				_1: {
					ctor: '::',
					_0: 'blockquote',
					_1: {
						ctor: '::',
						_0: 'br',
						_1: {
							ctor: '::',
							_0: 'caption',
							_1: {
								ctor: '::',
								_0: 'center',
								_1: {
									ctor: '::',
									_0: 'cite',
									_1: {
										ctor: '::',
										_0: 'code',
										_1: {
											ctor: '::',
											_0: 'col',
											_1: {
												ctor: '::',
												_0: 'colgroup',
												_1: {
													ctor: '::',
													_0: 'dd',
													_1: {
														ctor: '::',
														_0: 'details',
														_1: {
															ctor: '::',
															_0: 'div',
															_1: {
																ctor: '::',
																_0: 'dl',
																_1: {
																	ctor: '::',
																	_0: 'dt',
																	_1: {
																		ctor: '::',
																		_0: 'figcaption',
																		_1: {
																			ctor: '::',
																			_0: 'figure',
																			_1: {
																				ctor: '::',
																				_0: 'footer',
																				_1: {
																					ctor: '::',
																					_0: 'h1',
																					_1: {
																						ctor: '::',
																						_0: 'h2',
																						_1: {
																							ctor: '::',
																							_0: 'h3',
																							_1: {
																								ctor: '::',
																								_0: 'h4',
																								_1: {
																									ctor: '::',
																									_0: 'h5',
																									_1: {
																										ctor: '::',
																										_0: 'h6',
																										_1: {
																											ctor: '::',
																											_0: 'hr',
																											_1: {
																												ctor: '::',
																												_0: 'i',
																												_1: {
																													ctor: '::',
																													_0: 'legend',
																													_1: {
																														ctor: '::',
																														_0: 'li',
																														_1: {
																															ctor: '::',
																															_0: 'menu',
																															_1: {
																																ctor: '::',
																																_0: 'menuitem',
																																_1: {
																																	ctor: '::',
																																	_0: 'nav',
																																	_1: {
																																		ctor: '::',
																																		_0: 'ol',
																																		_1: {
																																			ctor: '::',
																																			_0: 'optgroup',
																																			_1: {
																																				ctor: '::',
																																				_0: 'option',
																																				_1: {
																																					ctor: '::',
																																					_0: 'p',
																																					_1: {
																																						ctor: '::',
																																						_0: 'pre',
																																						_1: {
																																							ctor: '::',
																																							_0: 'section',
																																							_1: {
																																								ctor: '::',
																																								_0: 'strike',
																																								_1: {
																																									ctor: '::',
																																									_0: 'summary',
																																									_1: {
																																										ctor: '::',
																																										_0: 'small',
																																										_1: {
																																											ctor: '::',
																																											_0: 'table',
																																											_1: {
																																												ctor: '::',
																																												_0: 'tbody',
																																												_1: {
																																													ctor: '::',
																																													_0: 'td',
																																													_1: {
																																														ctor: '::',
																																														_0: 'tfoot',
																																														_1: {
																																															ctor: '::',
																																															_0: 'th',
																																															_1: {
																																																ctor: '::',
																																																_0: 'thead',
																																																_1: {
																																																	ctor: '::',
																																																	_0: 'tr',
																																																	_1: {
																																																		ctor: '::',
																																																		_0: 'ul',
																																																		_1: {ctor: '[]'}
																																																	}
																																																}
																																															}
																																														}
																																													}
																																												}
																																											}
																																										}
																																									}
																																								}
																																							}
																																						}
																																					}
																																				}
																																			}
																																		}
																																	}
																																}
																															}
																														}
																													}
																												}
																											}
																										}
																									}
																								}
																							}
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_Config$defaultSanitizeOptions = {allowedHtmlElements: _pablohirafuji$elm_markdown$Markdown_Config$defaultAllowedHtmlElements, allowedHtmlAttributes: _pablohirafuji$elm_markdown$Markdown_Config$defaultAllowedHtmlAttributes};
var _pablohirafuji$elm_markdown$Markdown_Config$Options = F2(
	function (a, b) {
		return {softAsHardLineBreak: a, rawHtml: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Config$SanitizeOptions = F2(
	function (a, b) {
		return {allowedHtmlElements: a, allowedHtmlAttributes: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Config$DontParse = {ctor: 'DontParse'};
var _pablohirafuji$elm_markdown$Markdown_Config$Sanitize = function (a) {
	return {ctor: 'Sanitize', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_Config$defaultOptions = {
	softAsHardLineBreak: false,
	rawHtml: _pablohirafuji$elm_markdown$Markdown_Config$Sanitize(_pablohirafuji$elm_markdown$Markdown_Config$defaultSanitizeOptions)
};
var _pablohirafuji$elm_markdown$Markdown_Config$ParseUnsafe = {ctor: 'ParseUnsafe'};

var _pablohirafuji$elm_markdown$Markdown_Inline$extractText = function (inlines) {
	return A3(_elm_lang$core$List$foldl, _pablohirafuji$elm_markdown$Markdown_Inline$extractTextHelp, '', inlines);
};
var _pablohirafuji$elm_markdown$Markdown_Inline$extractTextHelp = F2(
	function (inline, text) {
		var _p0 = inline;
		switch (_p0.ctor) {
			case 'Text':
				return A2(_elm_lang$core$Basics_ops['++'], text, _p0._0);
			case 'HardLineBreak':
				return A2(_elm_lang$core$Basics_ops['++'], text, ' ');
			case 'CodeInline':
				return A2(_elm_lang$core$Basics_ops['++'], text, _p0._0);
			case 'Link':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					text,
					_pablohirafuji$elm_markdown$Markdown_Inline$extractText(_p0._2));
			case 'Image':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					text,
					_pablohirafuji$elm_markdown$Markdown_Inline$extractText(_p0._2));
			case 'HtmlInline':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					text,
					_pablohirafuji$elm_markdown$Markdown_Inline$extractText(_p0._2));
			case 'Emphasis':
				return A2(
					_elm_lang$core$Basics_ops['++'],
					text,
					_pablohirafuji$elm_markdown$Markdown_Inline$extractText(_p0._1));
			default:
				return A2(
					_elm_lang$core$Basics_ops['++'],
					text,
					_pablohirafuji$elm_markdown$Markdown_Inline$extractText(_p0._1));
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Inline$attributeToAttribute = function (_p1) {
	var _p2 = _p1;
	var _p3 = _p2._0;
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		_p3,
		A2(_elm_lang$core$Maybe$withDefault, _p3, _p2._1));
};
var _pablohirafuji$elm_markdown$Markdown_Inline$attributesToHtmlAttributes = _elm_lang$core$List$map(_pablohirafuji$elm_markdown$Markdown_Inline$attributeToAttribute);
var _pablohirafuji$elm_markdown$Markdown_Inline$Custom = F2(
	function (a, b) {
		return {ctor: 'Custom', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Inline$Emphasis = F2(
	function (a, b) {
		return {ctor: 'Emphasis', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Inline$defaultHtml = F2(
	function (customTransformer, inline) {
		var transformer = A2(
			_elm_lang$core$Maybe$withDefault,
			_pablohirafuji$elm_markdown$Markdown_Inline$defaultHtml(_elm_lang$core$Maybe$Nothing),
			customTransformer);
		var _p4 = inline;
		switch (_p4.ctor) {
			case 'Text':
				return _elm_lang$html$Html$text(_p4._0);
			case 'HardLineBreak':
				return A2(
					_elm_lang$html$Html$br,
					{ctor: '[]'},
					{ctor: '[]'});
			case 'CodeInline':
				return A2(
					_elm_lang$html$Html$code,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text(_p4._0),
						_1: {ctor: '[]'}
					});
			case 'Link':
				var _p7 = _p4._0;
				var _p6 = _p4._2;
				var _p5 = _p4._1;
				if (_p5.ctor === 'Just') {
					return A2(
						_elm_lang$html$Html$a,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$href(_p7),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$title(_p5._0),
								_1: {ctor: '[]'}
							}
						},
						A2(_elm_lang$core$List$map, transformer, _p6));
				} else {
					return A2(
						_elm_lang$html$Html$a,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$href(_p7),
							_1: {ctor: '[]'}
						},
						A2(_elm_lang$core$List$map, transformer, _p6));
				}
			case 'Image':
				var _p10 = _p4._0;
				var _p9 = _p4._2;
				var _p8 = _p4._1;
				if (_p8.ctor === 'Just') {
					return A2(
						_elm_lang$html$Html$img,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$alt(
								_pablohirafuji$elm_markdown$Markdown_Inline$extractText(_p9)),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$src(_p10),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$title(_p8._0),
									_1: {ctor: '[]'}
								}
							}
						},
						{ctor: '[]'});
				} else {
					return A2(
						_elm_lang$html$Html$img,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$alt(
								_pablohirafuji$elm_markdown$Markdown_Inline$extractText(_p9)),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$src(_p10),
								_1: {ctor: '[]'}
							}
						},
						{ctor: '[]'});
				}
			case 'HtmlInline':
				return A3(
					_elm_lang$html$Html$node,
					_p4._0,
					_pablohirafuji$elm_markdown$Markdown_Inline$attributesToHtmlAttributes(_p4._1),
					A2(_elm_lang$core$List$map, transformer, _p4._2));
			case 'Emphasis':
				var _p13 = _p4._0;
				var _p12 = _p4._1;
				var _p11 = _p13;
				switch (_p11) {
					case 1:
						return A2(
							_elm_lang$html$Html$em,
							{ctor: '[]'},
							A2(_elm_lang$core$List$map, transformer, _p12));
					case 2:
						return A2(
							_elm_lang$html$Html$strong,
							{ctor: '[]'},
							A2(_elm_lang$core$List$map, transformer, _p12));
					default:
						return (_elm_lang$core$Native_Utils.cmp(_p13 - 2, 0) > 0) ? A2(
							_elm_lang$html$Html$strong,
							{ctor: '[]'},
							A3(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								{ctor: '[]'},
								transformer(
									A2(_pablohirafuji$elm_markdown$Markdown_Inline$Emphasis, _p13 - 2, _p12)))) : A2(
							_elm_lang$html$Html$em,
							{ctor: '[]'},
							A2(_elm_lang$core$List$map, transformer, _p12));
				}
			default:
				return _elm_lang$html$Html$text('');
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Inline$toHtml = _pablohirafuji$elm_markdown$Markdown_Inline$defaultHtml(_elm_lang$core$Maybe$Nothing);
var _pablohirafuji$elm_markdown$Markdown_Inline$HtmlInline = F3(
	function (a, b, c) {
		return {ctor: 'HtmlInline', _0: a, _1: b, _2: c};
	});
var _pablohirafuji$elm_markdown$Markdown_Inline$Image = F3(
	function (a, b, c) {
		return {ctor: 'Image', _0: a, _1: b, _2: c};
	});
var _pablohirafuji$elm_markdown$Markdown_Inline$Link = F3(
	function (a, b, c) {
		return {ctor: 'Link', _0: a, _1: b, _2: c};
	});
var _pablohirafuji$elm_markdown$Markdown_Inline$CodeInline = function (a) {
	return {ctor: 'CodeInline', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_Inline$HardLineBreak = {ctor: 'HardLineBreak'};
var _pablohirafuji$elm_markdown$Markdown_Inline$Text = function (a) {
	return {ctor: 'Text', _0: a};
};

var _pablohirafuji$elm_markdown$Markdown_InlineParser$query = F2(
	function ($function, inline) {
		var _p0 = inline;
		switch (_p0.ctor) {
			case 'Link':
				var _p1 = _p0._2;
				return A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					$function(
						A3(_pablohirafuji$elm_markdown$Markdown_Inline$Link, _p0._0, _p0._1, _p1)),
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$query($function),
							_p1)));
			case 'Image':
				var _p2 = _p0._2;
				return A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					$function(
						A3(_pablohirafuji$elm_markdown$Markdown_Inline$Image, _p0._0, _p0._1, _p2)),
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$query($function),
							_p2)));
			case 'HtmlInline':
				var _p3 = _p0._2;
				return A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					$function(
						A3(_pablohirafuji$elm_markdown$Markdown_Inline$HtmlInline, _p0._0, _p0._1, _p3)),
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$query($function),
							_p3)));
			case 'Emphasis':
				var _p4 = _p0._1;
				return A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					$function(
						A2(_pablohirafuji$elm_markdown$Markdown_Inline$Emphasis, _p0._0, _p4)),
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$query($function),
							_p4)));
			default:
				return $function(inline);
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$walk = F2(
	function ($function, inline) {
		var _p5 = inline;
		switch (_p5.ctor) {
			case 'Link':
				return $function(
					A3(
						_pablohirafuji$elm_markdown$Markdown_Inline$Link,
						_p5._0,
						_p5._1,
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$walk($function),
							_p5._2)));
			case 'Image':
				return $function(
					A3(
						_pablohirafuji$elm_markdown$Markdown_Inline$Image,
						_p5._0,
						_p5._1,
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$walk($function),
							_p5._2)));
			case 'HtmlInline':
				return $function(
					A3(
						_pablohirafuji$elm_markdown$Markdown_Inline$HtmlInline,
						_p5._0,
						_p5._1,
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$walk($function),
							_p5._2)));
			case 'Emphasis':
				return $function(
					A2(
						_pablohirafuji$elm_markdown$Markdown_Inline$Emphasis,
						_p5._0,
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$walk($function),
							_p5._1)));
			default:
				return $function(inline);
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$matchesToInlines = function (matches) {
	return A2(_elm_lang$core$List$map, _pablohirafuji$elm_markdown$Markdown_InlineParser$matchToInline, matches);
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$matchToInline = function (_p6) {
	var _p7 = _p6;
	var _p10 = _p7._0;
	var _p8 = _p10.type_;
	switch (_p8.ctor) {
		case 'NormalType':
			return _pablohirafuji$elm_markdown$Markdown_Inline$Text(_p10.text);
		case 'HardLineBreakType':
			return _pablohirafuji$elm_markdown$Markdown_Inline$HardLineBreak;
		case 'CodeType':
			return _pablohirafuji$elm_markdown$Markdown_Inline$CodeInline(_p10.text);
		case 'AutolinkType':
			return A3(
				_pablohirafuji$elm_markdown$Markdown_Inline$Link,
				_p8._0._1,
				_elm_lang$core$Maybe$Nothing,
				{
					ctor: '::',
					_0: _pablohirafuji$elm_markdown$Markdown_Inline$Text(_p8._0._0),
					_1: {ctor: '[]'}
				});
		case 'LinkType':
			return A3(
				_pablohirafuji$elm_markdown$Markdown_Inline$Link,
				_p8._0._0,
				_p8._0._1,
				_pablohirafuji$elm_markdown$Markdown_InlineParser$matchesToInlines(_p10.matches));
		case 'ImageType':
			return A3(
				_pablohirafuji$elm_markdown$Markdown_Inline$Image,
				_p8._0._0,
				_p8._0._1,
				_pablohirafuji$elm_markdown$Markdown_InlineParser$matchesToInlines(_p10.matches));
		case 'HtmlType':
			var _p9 = _p8._0;
			return A3(
				_pablohirafuji$elm_markdown$Markdown_Inline$HtmlInline,
				_p9.tag,
				_p9.attributes,
				_pablohirafuji$elm_markdown$Markdown_InlineParser$matchesToInlines(_p10.matches));
		default:
			return A2(
				_pablohirafuji$elm_markdown$Markdown_Inline$Emphasis,
				_p8._0,
				_pablohirafuji$elm_markdown$Markdown_InlineParser$matchesToInlines(_p10.matches));
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$isOpenEmphasisToken = F2(
	function (closeToken, openToken) {
		var _p11 = openToken.meaning;
		if ((_p11.ctor === 'EmphasisToken') && (_p11._1.ctor === '_Tuple2')) {
			var _p12 = closeToken.meaning;
			if ((_p12.ctor === 'EmphasisToken') && (_p12._1.ctor === '_Tuple2')) {
				return _elm_lang$core$Native_Utils.eq(_p11._0, _p12._0) ? ((_elm_lang$core$Native_Utils.eq(_p11._1._0, _p11._1._1) || _elm_lang$core$Native_Utils.eq(_p12._1._0, _p12._1._1)) ? (!_elm_lang$core$Native_Utils.eq(
					A2(_elm_lang$core$Basics_ops['%'], closeToken.length + openToken.length, 3),
					0)) : true) : false;
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$decodeUrlRegex = _elm_lang$core$Regex$regex('%(?:3B|2C|2F|3F|3A|40|26|3D|2B|24|23|25)');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$encodeUrl = function (_p13) {
	return A4(
		_elm_lang$core$Regex$replace,
		_elm_lang$core$Regex$All,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$decodeUrlRegex,
		function (match) {
			return A2(
				_elm_lang$core$Maybe$withDefault,
				match.match,
				_elm_lang$http$Http$decodeUri(match.match));
		},
		_elm_lang$http$Http$encodeUri(_p13));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$refLabelRegex = _elm_lang$core$Regex$regex(
	A2(
		_elm_lang$core$Basics_ops['++'],
		'^\\[\\s*(',
		A2(_elm_lang$core$Basics_ops['++'], _pablohirafuji$elm_markdown$Markdown_Helpers$insideSquareBracketRegex, ')\\s*\\]')));
var _pablohirafuji$elm_markdown$Markdown_InlineParser$prepareUrlAndTitle = function (_p14) {
	var _p15 = _p14;
	return {
		ctor: '_Tuple2',
		_0: _pablohirafuji$elm_markdown$Markdown_InlineParser$encodeUrl(
			_pablohirafuji$elm_markdown$Markdown_Helpers$formatStr(_p15._0)),
		_1: A2(_elm_lang$core$Maybe$map, _pablohirafuji$elm_markdown$Markdown_Helpers$formatStr, _p15._1)
	};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$hrefRegex = A2(
	_elm_lang$core$Basics_ops['++'],
	'(?:<([^<>',
	A2(
		_elm_lang$core$Basics_ops['++'],
		_pablohirafuji$elm_markdown$Markdown_Helpers$whiteSpaceChars,
		A2(
			_elm_lang$core$Basics_ops['++'],
			']*)>|([^',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_pablohirafuji$elm_markdown$Markdown_Helpers$whiteSpaceChars,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\\(\\)\\\\]*(?:\\\\.[^',
					A2(_elm_lang$core$Basics_ops['++'], _pablohirafuji$elm_markdown$Markdown_Helpers$whiteSpaceChars, '\\(\\)\\\\]*)*))'))))));
var _pablohirafuji$elm_markdown$Markdown_InlineParser$inlineLinkTypeOrImageTypeRegex = _elm_lang$core$Regex$regex(
	A2(
		_elm_lang$core$Basics_ops['++'],
		'^\\(\\s*',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_pablohirafuji$elm_markdown$Markdown_InlineParser$hrefRegex,
			A2(_elm_lang$core$Basics_ops['++'], _pablohirafuji$elm_markdown$Markdown_Helpers$titleRegex, '\\s*\\)'))));
var _pablohirafuji$elm_markdown$Markdown_InlineParser$removeParsedAheadTokens = F2(
	function (tokensTail, parser) {
		var _p16 = parser.matches;
		if (_p16.ctor === '[]') {
			return {ctor: '_Tuple2', _0: tokensTail, _1: parser};
		} else {
			return {
				ctor: '_Tuple2',
				_0: A2(
					_elm_lang$core$List$filter,
					function (token) {
						return _elm_lang$core$Native_Utils.cmp(token.index, _p16._0._0.end) > -1;
					},
					tokensTail),
				_1: parser
			};
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$checkParsedAheadOverlapping = function (parser) {
	var _p17 = parser.matches;
	if (_p17.ctor === '[]') {
		return _elm_lang$core$Result$Err(
			{ctor: '_Tuple0'});
	} else {
		var _p22 = _p17._1;
		var _p21 = _p17._0._0;
		var overlappingMatches = A2(
			_elm_lang$core$List$filter,
			function (_p18) {
				var _p19 = _p18;
				var _p20 = _p19._0;
				return (_elm_lang$core$Native_Utils.cmp(_p21.end, _p20.start) > 0) && (_elm_lang$core$Native_Utils.cmp(_p21.end, _p20.end) < 0);
			},
			_p22);
		return (_elm_lang$core$List$isEmpty(_p22) || _elm_lang$core$List$isEmpty(overlappingMatches)) ? _elm_lang$core$Result$Ok(parser) : _elm_lang$core$Result$Err(
			{ctor: '_Tuple0'});
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$isLinkTypeOrImageOpenToken = function (token) {
	var _p23 = token.meaning;
	switch (_p23.ctor) {
		case 'LinkOpenToken':
			return true;
		case 'ImageOpenToken':
			return true;
		default:
			return false;
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$isCloseToken = F2(
	function (htmlModel, token) {
		var _p24 = token.meaning;
		if ((_p24.ctor === 'HtmlToken') && (_p24._0 === false)) {
			return _elm_lang$core$Native_Utils.eq(htmlModel.tag, _p24._1.tag);
		} else {
			return false;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$voidHtmlTags = {
	ctor: '::',
	_0: 'area',
	_1: {
		ctor: '::',
		_0: 'base',
		_1: {
			ctor: '::',
			_0: 'br',
			_1: {
				ctor: '::',
				_0: 'col',
				_1: {
					ctor: '::',
					_0: 'embed',
					_1: {
						ctor: '::',
						_0: 'hr',
						_1: {
							ctor: '::',
							_0: 'img',
							_1: {
								ctor: '::',
								_0: 'input',
								_1: {
									ctor: '::',
									_0: 'keygen',
									_1: {
										ctor: '::',
										_0: 'link',
										_1: {
											ctor: '::',
											_0: 'meta',
											_1: {
												ctor: '::',
												_0: 'param',
												_1: {
													ctor: '::',
													_0: 'source',
													_1: {
														ctor: '::',
														_0: 'track',
														_1: {
															ctor: '::',
															_0: 'wbr',
															_1: {ctor: '[]'}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$isVoidTag = function (htmlModel) {
	return A2(_elm_lang$core$List$member, htmlModel.tag, _pablohirafuji$elm_markdown$Markdown_InlineParser$voidHtmlTags);
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$attributesFromRegex = function (regexMatch) {
	var _p25 = regexMatch.submatches;
	_v12_2:
	do {
		if ((_p25.ctor === '::') && (_p25._0.ctor === 'Just')) {
			if (_p25._0._0 === '') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				if (((_p25._1.ctor === '::') && (_p25._1._1.ctor === '::')) && (_p25._1._1._1.ctor === '::')) {
					var maybeValue = _pablohirafuji$elm_markdown$Markdown_Helpers$returnFirstJust(
						{
							ctor: '::',
							_0: _p25._1._0,
							_1: {
								ctor: '::',
								_0: _p25._1._1._0,
								_1: {
									ctor: '::',
									_0: _p25._1._1._1._0,
									_1: {ctor: '[]'}
								}
							}
						});
					return _elm_lang$core$Maybe$Just(
						{ctor: '_Tuple2', _0: _p25._0._0, _1: maybeValue});
				} else {
					break _v12_2;
				}
			}
		} else {
			break _v12_2;
		}
	} while(false);
	return _elm_lang$core$Maybe$Nothing;
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$htmlAttributesRegex = _elm_lang$core$Regex$regex('([a-zA-Z:_][a-zA-Z0-9\\-_.:]*)(?: ?= ?(?:\"([^\"]*)\"|\'([^\']*)\'|([^\\s\"\'=<>`]*)))?');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$applyAttributesRegex = function (_p26) {
	return A2(
		_elm_lang$core$List$filterMap,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$attributesFromRegex,
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$htmlAttributesRegex, _p26));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$htmlRegex = _elm_lang$core$Regex$regex('^(\\/)?([a-zA-Z][a-zA-Z0-9\\-]*)(?:\\s+([^<>]*?))?(\\/)?$');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$emailRegex = _elm_lang$core$Regex$regex('^([a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~\\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9\\-]{0,61}[a-zA-Z0-9])?)*)$');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$urlRegex = _elm_lang$core$Regex$regex('^([A-Za-z][A-Za-z0-9.+\\-]{1,31}:[^<>\\x00-\\x20]*)$');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$isCodeTokenPair = F2(
	function (closeToken, openToken) {
		var _p27 = openToken.meaning;
		if (_p27.ctor === 'CodeToken') {
			return _p27._0 ? _elm_lang$core$Native_Utils.eq(openToken.length - 1, closeToken.length) : _elm_lang$core$Native_Utils.eq(openToken.length, closeToken.length);
		} else {
			return false;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$applyTTM = F2(
	function (finderFunction, model) {
		return finderFunction(
			{
				ctor: '_Tuple2',
				_0: model.tokens,
				_1: _elm_lang$core$Native_Utils.update(
					model,
					{
						tokens: {ctor: '[]'}
					})
			});
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$softAsHardLineBreakTokenRegex = _elm_lang$core$Regex$regex('(?:(\\\\+)|( *))\\n');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$hardBreakTokenRegex = _elm_lang$core$Regex$regex('(?:(\\\\+)|( {2,}))\\n');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$angleBracketLTokenRegex = _elm_lang$core$Regex$regex('(\\\\*)(\\<)');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$angleBracketRTokenRegex = _elm_lang$core$Regex$regex('(\\\\*)(\\>)');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$linkImageCloseTokenRegex = _elm_lang$core$Regex$regex('(\\\\*)(\\])');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$linkImageOpenTokenRegex = _elm_lang$core$Regex$regex('(\\\\*)(\\!)?(\\[)');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$containPunctuation = _elm_lang$core$Regex$contains(
	_elm_lang$core$Regex$regex('[!-#%-\\*,-/:;\\?@\\[-\\]_\\{\\}]'));
var _pablohirafuji$elm_markdown$Markdown_InlineParser$containSpace = _elm_lang$core$Regex$contains(
	_elm_lang$core$Regex$regex('\\s'));
var _pablohirafuji$elm_markdown$Markdown_InlineParser$charFringeRank = function ($char) {
	var string = _elm_lang$core$String$fromChar($char);
	return _pablohirafuji$elm_markdown$Markdown_InlineParser$containSpace(string) ? 0 : (_pablohirafuji$elm_markdown$Markdown_InlineParser$containPunctuation(string) ? 1 : 2);
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$maybeCharFringeRank = function (maybeChar) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		A2(_elm_lang$core$Maybe$map, _pablohirafuji$elm_markdown$Markdown_InlineParser$charFringeRank, maybeChar));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$getFringeRank = function (_p28) {
	return A2(
		_elm_lang$core$Maybe$withDefault,
		0,
		A2(
			_elm_lang$core$Maybe$map,
			function (_p29) {
				return _pablohirafuji$elm_markdown$Markdown_InlineParser$maybeCharFringeRank(
					A2(
						_elm_lang$core$Maybe$map,
						_elm_lang$core$Tuple$first,
						_elm_lang$core$String$uncons(_p29)));
			},
			_p28));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$underlineEmphasisTokenRegex = _elm_lang$core$Regex$regex('(\\\\*)([^_])?(\\_+)([^_])?');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$asteriskEmphasisTokenRegex = _elm_lang$core$Regex$regex('(\\\\*)([^*])?(\\*+)([^*])?');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$codeTokenRegex = _elm_lang$core$Regex$regex('(\\\\*)(\\`+)');
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findToken = F2(
	function (isToken, tokens) {
		var $return = function (_p30) {
			var _p31 = _p30;
			return A2(
				_elm_lang$core$Maybe$map,
				function (token) {
					return {
						ctor: '_Tuple3',
						_0: token,
						_1: _elm_lang$core$List$reverse(_p31._1),
						_2: _elm_lang$core$List$reverse(_p31._2)
					};
				},
				_p31._0);
		};
		var search = F2(
			function (token, _p32) {
				var _p33 = _p32;
				var _p36 = _p33._0;
				var _p35 = _p33._1;
				var _p34 = _p36;
				if (_p34.ctor === 'Nothing') {
					return isToken(token) ? {
						ctor: '_Tuple3',
						_0: _elm_lang$core$Maybe$Just(token),
						_1: _p35,
						_2: {ctor: '[]'}
					} : {
						ctor: '_Tuple3',
						_0: _elm_lang$core$Maybe$Nothing,
						_1: {ctor: '::', _0: token, _1: _p35},
						_2: {ctor: '[]'}
					};
				} else {
					return {
						ctor: '_Tuple3',
						_0: _p36,
						_1: _p35,
						_2: {ctor: '::', _0: token, _1: _p33._2}
					};
				}
			});
		return $return(
			A3(
				_elm_lang$core$List$foldl,
				search,
				{
					ctor: '_Tuple3',
					_0: _elm_lang$core$Maybe$Nothing,
					_1: {ctor: '[]'},
					_2: {ctor: '[]'}
				},
				tokens));
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$reverseTokens = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{
			tokens: _elm_lang$core$List$reverse(model.tokens)
		});
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$filterTokens = F2(
	function (filter, model) {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				tokens: A2(_elm_lang$core$List$filter, filter, model.tokens)
			});
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$addToken = F2(
	function (model, token) {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				tokens: {ctor: '::', _0: token, _1: model.tokens}
			});
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$addMatch = F2(
	function (model, match) {
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				matches: {ctor: '::', _0: match, _1: model.matches}
			});
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$initParser = F3(
	function (options, refs, rawText) {
		return {
			rawText: rawText,
			tokens: {ctor: '[]'},
			matches: {ctor: '[]'},
			options: options,
			refs: refs
		};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$Parser = F5(
	function (a, b, c, d, e) {
		return {rawText: a, tokens: b, matches: c, options: d, refs: e};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$Token = F3(
	function (a, b, c) {
		return {index: a, length: b, meaning: c};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$MatchModel = F7(
	function (a, b, c, d, e, f, g) {
		return {type_: a, start: b, end: c, textStart: d, textEnd: e, text: f, matches: g};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlModel = F2(
	function (a, b) {
		return {tag: a, attributes: b};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakToken = {ctor: 'HardLineBreakToken'};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToHardBreakToken = function (regMatch) {
	var _p37 = regMatch.submatches;
	_v17_2:
	do {
		if (_p37.ctor === '::') {
			if (_p37._0.ctor === 'Just') {
				var backslashesLength = _elm_lang$core$String$length(_p37._0._0);
				return (!_pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength)) ? _elm_lang$core$Maybe$Just(
					{index: (regMatch.index + backslashesLength) - 1, length: 2, meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakToken}) : _elm_lang$core$Maybe$Nothing;
			} else {
				if ((_p37._1.ctor === '::') && (_p37._1._0.ctor === 'Just')) {
					return _elm_lang$core$Maybe$Just(
						{
							index: regMatch.index,
							length: _elm_lang$core$String$length(regMatch.match),
							meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakToken
						});
				} else {
					break _v17_2;
				}
			}
		} else {
			break _v17_2;
		}
	} while(false);
	return _elm_lang$core$Maybe$Nothing;
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToSoftHardBreakToken = function (regMatch) {
	var _p38 = regMatch.submatches;
	_v18_2:
	do {
		if (_p38.ctor === '::') {
			if (_p38._0.ctor === 'Just') {
				var backslashesLength = _elm_lang$core$String$length(_p38._0._0);
				return _pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength) ? _elm_lang$core$Maybe$Just(
					{index: regMatch.index + backslashesLength, length: 1, meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakToken}) : _elm_lang$core$Maybe$Just(
					{index: (regMatch.index + backslashesLength) - 1, length: 2, meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakToken});
			} else {
				if ((_p38._1.ctor === '::') && (_p38._1._0.ctor === 'Just')) {
					return _elm_lang$core$Maybe$Just(
						{
							index: regMatch.index,
							length: _elm_lang$core$String$length(regMatch.match),
							meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakToken
						});
				} else {
					break _v18_2;
				}
			}
		} else {
			break _v18_2;
		}
	} while(false);
	return _elm_lang$core$Maybe$Nothing;
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findHardBreakTokens = F2(
	function (softAsHardLineBreak, str) {
		return softAsHardLineBreak ? A2(
			_elm_lang$core$List$filterMap,
			_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToSoftHardBreakToken,
			A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$softAsHardLineBreakTokenRegex, str)) : A2(
			_elm_lang$core$List$filterMap,
			_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToHardBreakToken,
			A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$hardBreakTokenRegex, str));
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$SoftLineBreakToken = {ctor: 'SoftLineBreakToken'};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$EmphasisToken = F2(
	function (a, b) {
		return {ctor: 'EmphasisToken', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToEmphasisToken = F3(
	function ($char, rawText, regMatch) {
		var _p39 = regMatch.submatches;
		if ((((((_p39.ctor === '::') && (_p39._0.ctor === 'Just')) && (_p39._1.ctor === '::')) && (_p39._1._1.ctor === '::')) && (_p39._1._1._0.ctor === 'Just')) && (_p39._1._1._1.ctor === '::')) {
			var _p41 = _p39._1._0;
			var _p40 = _p39._1._1._0._0;
			var leftFringeLength = A2(
				_elm_lang$core$Maybe$withDefault,
				0,
				A2(_elm_lang$core$Maybe$map, _elm_lang$core$String$length, _p41));
			var mLeftFringe = ((!_elm_lang$core$Native_Utils.eq(regMatch.index, 0)) && _elm_lang$core$Native_Utils.eq(leftFringeLength, 0)) ? _elm_lang$core$Maybe$Just(
				A3(_elm_lang$core$String$slice, regMatch.index - 1, regMatch.index, rawText)) : _p41;
			var backslashesLength = _elm_lang$core$String$length(_p39._0._0);
			var isEscaped = ((!_pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength)) && _elm_lang$core$Native_Utils.eq(leftFringeLength, 0)) || _elm_lang$core$Native_Utils.eq(
				mLeftFringe,
				_elm_lang$core$Maybe$Just('\\'));
			var fringeRank = {
				ctor: '_Tuple2',
				_0: isEscaped ? 1 : _pablohirafuji$elm_markdown$Markdown_InlineParser$getFringeRank(mLeftFringe),
				_1: _pablohirafuji$elm_markdown$Markdown_InlineParser$getFringeRank(_p39._1._1._1._0)
			};
			var delimiterLength = isEscaped ? (_elm_lang$core$String$length(_p40) - 1) : _elm_lang$core$String$length(_p40);
			var index = ((regMatch.index + backslashesLength) + leftFringeLength) + (isEscaped ? 1 : 0);
			return ((_elm_lang$core$Native_Utils.cmp(delimiterLength, 0) < 1) || (_elm_lang$core$Native_Utils.eq(
				$char,
				_elm_lang$core$Native_Utils.chr('_')) && _elm_lang$core$Native_Utils.eq(
				fringeRank,
				{ctor: '_Tuple2', _0: 2, _1: 2}))) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(
				{
					index: index,
					length: delimiterLength,
					meaning: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$EmphasisToken, $char, fringeRank)
				});
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findAsteriskEmphasisTokens = function (str) {
	return A2(
		_elm_lang$core$List$filterMap,
		A2(
			_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToEmphasisToken,
			_elm_lang$core$Native_Utils.chr('*'),
			str),
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$asteriskEmphasisTokenRegex, str));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findUnderlineEmphasisTokens = function (str) {
	return A2(
		_elm_lang$core$List$filterMap,
		A2(
			_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToEmphasisToken,
			_elm_lang$core$Native_Utils.chr('_'),
			str),
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$underlineEmphasisTokenRegex, str));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlToken = F2(
	function (a, b) {
		return {ctor: 'HtmlToken', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$htmlFromRegex = F3(
	function (model, match, regexMatch) {
		var _p42 = regexMatch.submatches;
		_v20_2:
		do {
			if (((_p42.ctor === '::') && (_p42._1.ctor === '::')) && (_p42._1._0.ctor === 'Just')) {
				if (_p42._1._0._0 === '') {
					return _elm_lang$core$Maybe$Nothing;
				} else {
					if ((_p42._1._1.ctor === '::') && (_p42._1._1._1.ctor === '::')) {
						var _p45 = _p42._1._0._0;
						var _p44 = _p42._0;
						var filterAttributes = F2(
							function (attrs, allowed) {
								return A2(
									_elm_lang$core$List$filter,
									function (attr) {
										return A2(
											_elm_lang$core$List$member,
											_elm_lang$core$Tuple$first(attr),
											allowed);
									},
									attrs);
							});
						var attributes = A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '[]'},
							A2(_elm_lang$core$Maybe$map, _pablohirafuji$elm_markdown$Markdown_InlineParser$applyAttributesRegex, _p42._1._1._0));
						var noAttributesInCloseTag = _elm_lang$core$Native_Utils.eq(_p44, _elm_lang$core$Maybe$Nothing) || ((!_elm_lang$core$Native_Utils.eq(_p44, _elm_lang$core$Maybe$Nothing)) && _elm_lang$core$Native_Utils.eq(
							attributes,
							{ctor: '[]'}));
						var updateModel = function (attrs) {
							return A2(
								_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken,
								model,
								{
									index: match.start,
									length: match.end - match.start,
									meaning: A2(
										_pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlToken,
										_elm_lang$core$Native_Utils.eq(_p44, _elm_lang$core$Maybe$Nothing) && _elm_lang$core$Native_Utils.eq(_p42._1._1._1._0, _elm_lang$core$Maybe$Nothing),
										A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlModel, _p45, attrs))
								});
						};
						var _p43 = model.options.rawHtml;
						switch (_p43.ctor) {
							case 'ParseUnsafe':
								return noAttributesInCloseTag ? _elm_lang$core$Maybe$Just(
									updateModel(attributes)) : _elm_lang$core$Maybe$Nothing;
							case 'Sanitize':
								return (A2(_elm_lang$core$List$member, _p45, _p43._0.allowedHtmlElements) && noAttributesInCloseTag) ? _elm_lang$core$Maybe$Just(
									updateModel(
										A2(filterAttributes, attributes, _p43._0.allowedHtmlAttributes))) : _elm_lang$core$Maybe$Nothing;
							default:
								return _elm_lang$core$Maybe$Nothing;
						}
					} else {
						break _v20_2;
					}
				}
			} else {
				break _v20_2;
			}
		} while(false);
		return _elm_lang$core$Maybe$Nothing;
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$htmlToToken = F2(
	function (model, _p46) {
		var _p47 = _p46;
		var _p49 = _p47._0;
		var _p48 = model.options.rawHtml;
		if (_p48.ctor === 'DontParse') {
			return _elm_lang$core$Maybe$Nothing;
		} else {
			return A2(
				_elm_lang$core$Maybe$andThen,
				A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$htmlFromRegex, model, _p49),
				_elm_lang$core$List$head(
					A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_pablohirafuji$elm_markdown$Markdown_InlineParser$htmlRegex,
						_p49.text)));
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$RightAngleBracket = function (a) {
	return {ctor: 'RightAngleBracket', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToAngleBracketRToken = function (regMatch) {
	var _p50 = regMatch.submatches;
	if ((((_p50.ctor === '::') && (_p50._0.ctor === 'Just')) && (_p50._1.ctor === '::')) && (_p50._1._0.ctor === 'Just')) {
		var backslashesLength = _elm_lang$core$String$length(_p50._0._0);
		return _elm_lang$core$Maybe$Just(
			{
				index: regMatch.index + backslashesLength,
				length: 1,
				meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$RightAngleBracket(
					!_pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength))
			});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findAngleBracketRTokens = function (str) {
	return A2(
		_elm_lang$core$List$filterMap,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToAngleBracketRToken,
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$angleBracketRTokenRegex, str));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$CharToken = function (a) {
	return {ctor: 'CharToken', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToLinkImageCloseToken = function (regMatch) {
	var _p51 = regMatch.submatches;
	if ((((_p51.ctor === '::') && (_p51._0.ctor === 'Just')) && (_p51._1.ctor === '::')) && (_p51._1._0.ctor === 'Just')) {
		var backslashesLength = _elm_lang$core$String$length(_p51._0._0);
		return _pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength) ? _elm_lang$core$Maybe$Just(
			{
				index: regMatch.index + backslashesLength,
				length: 1,
				meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$CharToken(
					_elm_lang$core$Native_Utils.chr(']'))
			}) : _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findLinkImageCloseTokens = function (str) {
	return A2(
		_elm_lang$core$List$filterMap,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToLinkImageCloseToken,
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$linkImageCloseTokenRegex, str));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToAngleBracketLToken = function (regMatch) {
	var _p52 = regMatch.submatches;
	if ((((_p52.ctor === '::') && (_p52._0.ctor === 'Just')) && (_p52._1.ctor === '::')) && (_p52._1._0.ctor === 'Just')) {
		var backslashesLength = _elm_lang$core$String$length(_p52._0._0);
		return _pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength) ? _elm_lang$core$Maybe$Just(
			{
				index: regMatch.index + backslashesLength,
				length: 1,
				meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$CharToken(
					_elm_lang$core$Native_Utils.chr('<'))
			}) : _elm_lang$core$Maybe$Nothing;
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findAngleBracketLTokens = function (str) {
	return A2(
		_elm_lang$core$List$filterMap,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToAngleBracketLToken,
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$angleBracketLTokenRegex, str));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$ImageOpenToken = {ctor: 'ImageOpenToken'};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$LinkOpenToken = function (a) {
	return {ctor: 'LinkOpenToken', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToLinkImageOpenToken = function (regMatch) {
	var _p53 = regMatch.submatches;
	if (((((_p53.ctor === '::') && (_p53._0.ctor === 'Just')) && (_p53._1.ctor === '::')) && (_p53._1._1.ctor === '::')) && (_p53._1._1._0.ctor === 'Just')) {
		var _p56 = _p53._1._0;
		var backslashesLength = _elm_lang$core$String$length(_p53._0._0);
		var isEscaped = !_pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength);
		var meaning = isEscaped ? A2(
			_elm_lang$core$Maybe$map,
			function (_p54) {
				return _pablohirafuji$elm_markdown$Markdown_InlineParser$LinkOpenToken(true);
			},
			_p56) : _elm_lang$core$Maybe$Just(
			A2(
				_elm_lang$core$Maybe$withDefault,
				_pablohirafuji$elm_markdown$Markdown_InlineParser$LinkOpenToken(true),
				A2(
					_elm_lang$core$Maybe$map,
					function (_p55) {
						return _pablohirafuji$elm_markdown$Markdown_InlineParser$ImageOpenToken;
					},
					_p56)));
		var length = _elm_lang$core$Native_Utils.eq(
			meaning,
			_elm_lang$core$Maybe$Just(_pablohirafuji$elm_markdown$Markdown_InlineParser$ImageOpenToken)) ? 2 : 1;
		var index = (regMatch.index + backslashesLength) + ((isEscaped && _elm_lang$core$Native_Utils.eq(
			_p56,
			_elm_lang$core$Maybe$Just('!'))) ? 1 : 0);
		var toModel = function (m) {
			return {index: index, length: length, meaning: m};
		};
		return A2(_elm_lang$core$Maybe$map, toModel, meaning);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findLinkImageOpenTokens = function (str) {
	return A2(
		_elm_lang$core$List$filterMap,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToLinkImageOpenToken,
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$linkImageOpenTokenRegex, str));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$CodeToken = function (a) {
	return {ctor: 'CodeToken', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToCodeToken = function (regMatch) {
	var _p57 = regMatch.submatches;
	if ((((_p57.ctor === '::') && (_p57._0.ctor === 'Just')) && (_p57._1.ctor === '::')) && (_p57._1._0.ctor === 'Just')) {
		var backslashesLength = _elm_lang$core$String$length(_p57._0._0);
		return _elm_lang$core$Maybe$Just(
			{
				index: regMatch.index + backslashesLength,
				length: _elm_lang$core$String$length(_p57._1._0._0),
				meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$CodeToken(
					!_pablohirafuji$elm_markdown$Markdown_Helpers$isEven(backslashesLength))
			});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$findCodeTokens = function (str) {
	return A2(
		_elm_lang$core$List$filterMap,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$regMatchToCodeToken,
		A3(_elm_lang$core$Regex$find, _elm_lang$core$Regex$All, _pablohirafuji$elm_markdown$Markdown_InlineParser$codeTokenRegex, str));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$tokenize = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{
			tokens: A2(
				_elm_lang$core$List$sortBy,
				function (_) {
					return _.index;
				},
				A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					_pablohirafuji$elm_markdown$Markdown_InlineParser$findAngleBracketRTokens(model.rawText),
					A2(
						F2(
							function (x, y) {
								return A2(_elm_lang$core$Basics_ops['++'], x, y);
							}),
						_pablohirafuji$elm_markdown$Markdown_InlineParser$findAngleBracketLTokens(model.rawText),
						A2(
							F2(
								function (x, y) {
									return A2(_elm_lang$core$Basics_ops['++'], x, y);
								}),
							A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$findHardBreakTokens, model.options.softAsHardLineBreak, model.rawText),
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								_pablohirafuji$elm_markdown$Markdown_InlineParser$findLinkImageCloseTokens(model.rawText),
								A2(
									F2(
										function (x, y) {
											return A2(_elm_lang$core$Basics_ops['++'], x, y);
										}),
									_pablohirafuji$elm_markdown$Markdown_InlineParser$findLinkImageOpenTokens(model.rawText),
									A2(
										F2(
											function (x, y) {
												return A2(_elm_lang$core$Basics_ops['++'], x, y);
											}),
										_pablohirafuji$elm_markdown$Markdown_InlineParser$findUnderlineEmphasisTokens(model.rawText),
										A2(
											F2(
												function (x, y) {
													return A2(_elm_lang$core$Basics_ops['++'], x, y);
												}),
											_pablohirafuji$elm_markdown$Markdown_InlineParser$findAsteriskEmphasisTokens(model.rawText),
											_pablohirafuji$elm_markdown$Markdown_InlineParser$findCodeTokens(model.rawText)))))))))
		});
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$Match = function (a) {
	return {ctor: 'Match', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$tokenToMatch = F2(
	function (token, type_) {
		return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
			{
				type_: type_,
				start: token.index,
				end: token.index + token.length,
				textStart: 0,
				textEnd: 0,
				text: '',
				matches: {ctor: '[]'}
			});
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$prepareChildMatch = F2(
	function (parentMatch, childMatch) {
		return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
			_elm_lang$core$Native_Utils.update(
				childMatch,
				{start: childMatch.start - parentMatch.textStart, end: childMatch.end - parentMatch.textStart, textStart: childMatch.textStart - parentMatch.textStart, textEnd: childMatch.textEnd - parentMatch.textStart}));
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$addChild = F2(
	function (parentMatch, childMatch) {
		return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
			_elm_lang$core$Native_Utils.update(
				parentMatch,
				{
					matches: {
						ctor: '::',
						_0: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$prepareChildMatch, parentMatch, childMatch),
						_1: parentMatch.matches
					}
				}));
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$organizeMatch = F2(
	function (_p58, matches) {
		var _p59 = _p58;
		var _p62 = _p59._0;
		var _p60 = matches;
		if (_p60.ctor === '[]') {
			return {
				ctor: '::',
				_0: _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(_p62),
				_1: {ctor: '[]'}
			};
		} else {
			var _p61 = _p60._0._0;
			return (_elm_lang$core$Native_Utils.cmp(_p61.end, _p62.start) < 1) ? {
				ctor: '::',
				_0: _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(_p62),
				_1: matches
			} : (((_elm_lang$core$Native_Utils.cmp(_p61.start, _p62.start) < 0) && (_elm_lang$core$Native_Utils.cmp(_p61.end, _p62.end) > 0)) ? {
				ctor: '::',
				_0: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addChild, _p61, _p62),
				_1: _p60._1
			} : matches);
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$organizeMatches = function (_p63) {
	return A2(
		_elm_lang$core$List$map,
		function (_p64) {
			var _p65 = _p64;
			var _p66 = _p65._0;
			return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
				_elm_lang$core$Native_Utils.update(
					_p66,
					{
						matches: _pablohirafuji$elm_markdown$Markdown_InlineParser$organizeMatches(_p66.matches)
					}));
		},
		A3(
			_elm_lang$core$List$foldl,
			_pablohirafuji$elm_markdown$Markdown_InlineParser$organizeMatch,
			{ctor: '[]'},
			A2(
				_elm_lang$core$List$sortBy,
				function (_p67) {
					var _p68 = _p67;
					return _p68._0.start;
				},
				_p63)));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$organizeParserMatches = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{
			matches: _pablohirafuji$elm_markdown$Markdown_InlineParser$organizeMatches(model.matches)
		});
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$EmphasisType = function (a) {
	return {ctor: 'EmphasisType', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlType = function (a) {
	return {ctor: 'HtmlType', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$ImageType = function (a) {
	return {ctor: 'ImageType', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$LinkType = function (a) {
	return {ctor: 'LinkType', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$inlineLinkTypeOrImageTypeRegexToMatch = F3(
	function (matchModel, model, regexMatch) {
		var _p69 = regexMatch.submatches;
		if (((((_p69.ctor === '::') && (_p69._1.ctor === '::')) && (_p69._1._1.ctor === '::')) && (_p69._1._1._1.ctor === '::')) && (_p69._1._1._1._1.ctor === '::')) {
			var maybeTitle = _pablohirafuji$elm_markdown$Markdown_Helpers$returnFirstJust(
				{
					ctor: '::',
					_0: _p69._1._1._0,
					_1: {
						ctor: '::',
						_0: _p69._1._1._1._0,
						_1: {
							ctor: '::',
							_0: _p69._1._1._1._1._0,
							_1: {ctor: '[]'}
						}
					}
				});
			var toMatch = function (rawUrl) {
				return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
					_elm_lang$core$Native_Utils.update(
						matchModel,
						{
							type_: function () {
								var _p70 = matchModel.type_;
								if (_p70.ctor === 'ImageType') {
									return _pablohirafuji$elm_markdown$Markdown_InlineParser$ImageType;
								} else {
									return _pablohirafuji$elm_markdown$Markdown_InlineParser$LinkType;
								}
							}()(
								_pablohirafuji$elm_markdown$Markdown_InlineParser$prepareUrlAndTitle(
									{ctor: '_Tuple2', _0: rawUrl, _1: maybeTitle})),
							end: matchModel.end + _elm_lang$core$String$length(regexMatch.match)
						}));
			};
			var maybeRawUrl = _pablohirafuji$elm_markdown$Markdown_Helpers$returnFirstJust(
				{
					ctor: '::',
					_0: _p69._0,
					_1: {
						ctor: '::',
						_0: _p69._1._0,
						_1: {ctor: '[]'}
					}
				});
			return A2(_elm_lang$core$Maybe$map, toMatch, maybeRawUrl);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$checkForInlineLinkTypeOrImageType = function (_p71) {
	var _p72 = _p71;
	var _p75 = _p72._1._0;
	var _p74 = _p72._0;
	var _p73 = _p72._2;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{
			ctor: '_Tuple3',
			_0: _p74,
			_1: _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(_p75),
			_2: _p73
		},
		A2(
			_elm_lang$core$Maybe$map,
			_pablohirafuji$elm_markdown$Markdown_InlineParser$addMatch(_p73),
			A2(
				_elm_lang$core$Maybe$andThen,
				A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$inlineLinkTypeOrImageTypeRegexToMatch, _p75, _p73),
				_elm_lang$core$List$head(
					A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_pablohirafuji$elm_markdown$Markdown_InlineParser$inlineLinkTypeOrImageTypeRegex,
						_p74)))));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$refRegexToMatch = F3(
	function (matchModel, model, maybeRegexMatch) {
		var regexMatchLength = A2(
			_elm_lang$core$Maybe$withDefault,
			0,
			A2(
				_elm_lang$core$Maybe$map,
				function (_p76) {
					return _elm_lang$core$String$length(
						function (_) {
							return _.match;
						}(_p76));
				},
				maybeRegexMatch));
		var toMatch = function (urlTitle) {
			return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
				_elm_lang$core$Native_Utils.update(
					matchModel,
					{
						type_: function () {
							var _p77 = matchModel.type_;
							if (_p77.ctor === 'ImageType') {
								return _pablohirafuji$elm_markdown$Markdown_InlineParser$ImageType;
							} else {
								return _pablohirafuji$elm_markdown$Markdown_InlineParser$LinkType;
							}
						}()(
							_pablohirafuji$elm_markdown$Markdown_InlineParser$prepareUrlAndTitle(urlTitle)),
						end: matchModel.end + regexMatchLength
					}));
		};
		var refLabel = function (str) {
			return _elm_lang$core$String$isEmpty(str) ? matchModel.text : str;
		}(
			A2(
				_elm_lang$core$Maybe$withDefault,
				matchModel.text,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Maybe$Nothing,
					A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Maybe$Nothing,
						A2(
							_elm_lang$core$Maybe$map,
							function (_p78) {
								return _elm_lang$core$List$head(
									function (_) {
										return _.submatches;
									}(_p78));
							},
							maybeRegexMatch)))));
		var maybeRefItem = A2(
			_elm_lang$core$Dict$get,
			_pablohirafuji$elm_markdown$Markdown_Helpers$prepareRefLabel(refLabel),
			model.refs);
		return A2(_elm_lang$core$Maybe$map, toMatch, maybeRefItem);
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$checkForRefLinkTypeOrImageType = function (_p79) {
	var _p80 = _p79;
	var _p83 = _p80._1._0;
	var _p82 = _p80._0;
	var _p81 = _p80._2;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{
			ctor: '_Tuple3',
			_0: _p82,
			_1: _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(_p83),
			_2: _p81
		},
		A2(
			_elm_lang$core$Maybe$map,
			_pablohirafuji$elm_markdown$Markdown_InlineParser$addMatch(_p81),
			A3(
				_pablohirafuji$elm_markdown$Markdown_InlineParser$refRegexToMatch,
				_p83,
				_p81,
				_elm_lang$core$List$head(
					A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_pablohirafuji$elm_markdown$Markdown_InlineParser$refLabelRegex,
						_p82)))));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$AutolinkType = function (a) {
	return {ctor: 'AutolinkType', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$autolinkToMatch = function (_p84) {
	var _p85 = _p84;
	var _p86 = _p85._0;
	return A2(_elm_lang$core$Regex$contains, _pablohirafuji$elm_markdown$Markdown_InlineParser$urlRegex, _p86.text) ? _elm_lang$core$Result$Ok(
		_pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
			_elm_lang$core$Native_Utils.update(
				_p86,
				{
					type_: _pablohirafuji$elm_markdown$Markdown_InlineParser$AutolinkType(
						{
							ctor: '_Tuple2',
							_0: _p86.text,
							_1: _pablohirafuji$elm_markdown$Markdown_InlineParser$encodeUrl(_p86.text)
						})
				}))) : _elm_lang$core$Result$Err(
		_pablohirafuji$elm_markdown$Markdown_InlineParser$Match(_p86));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$emailAutolinkTypeToMatch = function (_p87) {
	var _p88 = _p87;
	var _p89 = _p88._0;
	return A2(_elm_lang$core$Regex$contains, _pablohirafuji$elm_markdown$Markdown_InlineParser$emailRegex, _p89.text) ? _elm_lang$core$Result$Ok(
		_pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
			_elm_lang$core$Native_Utils.update(
				_p89,
				{
					type_: _pablohirafuji$elm_markdown$Markdown_InlineParser$AutolinkType(
						{
							ctor: '_Tuple2',
							_0: _p89.text,
							_1: A2(
								_elm_lang$core$Basics_ops['++'],
								'mailto:',
								_pablohirafuji$elm_markdown$Markdown_InlineParser$encodeUrl(_p89.text))
						})
				}))) : _elm_lang$core$Result$Err(
		_pablohirafuji$elm_markdown$Markdown_InlineParser$Match(_p89));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$CodeType = {ctor: 'CodeType'};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakType = {ctor: 'HardLineBreakType'};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$lineBreakTTM = function (_p90) {
	lineBreakTTM:
	while (true) {
		var _p91 = _p90;
		var _p95 = _p91._1;
		var _p92 = _p91._0;
		if (_p92.ctor === '[]') {
			return _pablohirafuji$elm_markdown$Markdown_InlineParser$reverseTokens(_p95);
		} else {
			var _p94 = _p92._1;
			var _p93 = _p92._0;
			if (_elm_lang$core$Native_Utils.eq(_p93.meaning, _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakToken) || (_elm_lang$core$Native_Utils.eq(_p93.meaning, _pablohirafuji$elm_markdown$Markdown_InlineParser$SoftLineBreakToken) && _p95.options.softAsHardLineBreak)) {
				var _v42 = A2(
					F2(
						function (v0, v1) {
							return {ctor: '_Tuple2', _0: v0, _1: v1};
						}),
					_p94,
					_elm_lang$core$Native_Utils.update(
						_p95,
						{
							matches: {
								ctor: '::',
								_0: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenToMatch, _p93, _pablohirafuji$elm_markdown$Markdown_InlineParser$HardLineBreakType),
								_1: _p95.matches
							}
						}));
				_p90 = _v42;
				continue lineBreakTTM;
			} else {
				var _v43 = {
					ctor: '_Tuple2',
					_0: _p94,
					_1: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p95, _p93)
				};
				_p90 = _v43;
				continue lineBreakTTM;
			}
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$tokensToMatches = function (_p96) {
	return A2(
		_pablohirafuji$elm_markdown$Markdown_InlineParser$applyTTM,
		_pablohirafuji$elm_markdown$Markdown_InlineParser$lineBreakTTM,
		A2(
			_pablohirafuji$elm_markdown$Markdown_InlineParser$applyTTM,
			_pablohirafuji$elm_markdown$Markdown_InlineParser$emphasisTTM,
			A2(
				_pablohirafuji$elm_markdown$Markdown_InlineParser$applyTTM,
				_pablohirafuji$elm_markdown$Markdown_InlineParser$linkImageTypeTTM,
				A2(
					_pablohirafuji$elm_markdown$Markdown_InlineParser$applyTTM,
					_pablohirafuji$elm_markdown$Markdown_InlineParser$htmlElementTTM,
					A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$applyTTM, _pablohirafuji$elm_markdown$Markdown_InlineParser$codeAutolinkTypeHtmlTagTTM, _p96)))));
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$codeAutolinkTypeHtmlTagTTM = function (_p97) {
	codeAutolinkTypeHtmlTagTTM:
	while (true) {
		var _p98 = _p97;
		var _p105 = _p98._1;
		var _p99 = _p98._0;
		if (_p99.ctor === '[]') {
			return _pablohirafuji$elm_markdown$Markdown_InlineParser$reverseTokens(_p105);
		} else {
			var _p104 = _p99._1;
			var _p103 = _p99._0;
			var _p100 = _p103.meaning;
			switch (_p100.ctor) {
				case 'CodeToken':
					var _v47 = A2(
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						_p104,
						A2(
							_elm_lang$core$Maybe$withDefault,
							A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p105, _p103),
							A2(
								_elm_lang$core$Maybe$map,
								A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$codeToMatch, _p103, _p105),
								A2(
									_pablohirafuji$elm_markdown$Markdown_InlineParser$findToken,
									_pablohirafuji$elm_markdown$Markdown_InlineParser$isCodeTokenPair(_p103),
									_p105.tokens))));
					_p97 = _v47;
					continue codeAutolinkTypeHtmlTagTTM;
				case 'RightAngleBracket':
					var _v48 = A2(
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						_p104,
						A2(
							_pablohirafuji$elm_markdown$Markdown_InlineParser$filterTokens,
							function (_p101) {
								return A2(
									F2(
										function (x, y) {
											return !_elm_lang$core$Native_Utils.eq(x, y);
										}),
									_pablohirafuji$elm_markdown$Markdown_InlineParser$CharToken(
										_elm_lang$core$Native_Utils.chr('<')),
									function (_) {
										return _.meaning;
									}(_p101));
							},
							A2(
								_elm_lang$core$Maybe$withDefault,
								_p105,
								A2(
									_elm_lang$core$Maybe$andThen,
									A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$angleBracketsToMatch, _p103, _p100._0, _p105),
									A2(
										_pablohirafuji$elm_markdown$Markdown_InlineParser$findToken,
										function (_p102) {
											return A2(
												F2(
													function (x, y) {
														return _elm_lang$core$Native_Utils.eq(x, y);
													}),
												_pablohirafuji$elm_markdown$Markdown_InlineParser$CharToken(
													_elm_lang$core$Native_Utils.chr('<')),
												function (_) {
													return _.meaning;
												}(_p102));
										},
										_p105.tokens)))));
					_p97 = _v48;
					continue codeAutolinkTypeHtmlTagTTM;
				default:
					var _v49 = {
						ctor: '_Tuple2',
						_0: _p104,
						_1: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p105, _p103)
					};
					_p97 = _v49;
					continue codeAutolinkTypeHtmlTagTTM;
			}
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$angleBracketsToMatch = F4(
	function (closeToken, isEscaped, model, _p106) {
		var _p107 = _p106;
		var _p109 = _p107._2;
		return function (result) {
			var _p108 = result;
			if (_p108.ctor === 'Err') {
				return (!isEscaped) ? A2(
					_pablohirafuji$elm_markdown$Markdown_InlineParser$htmlToToken,
					_elm_lang$core$Native_Utils.update(
						model,
						{tokens: _p109}),
					_p108._0) : _elm_lang$core$Result$toMaybe(result);
			} else {
				return _elm_lang$core$Result$toMaybe(result);
			}
		}(
			A2(
				_elm_lang$core$Result$map,
				function (newMatch) {
					return _elm_lang$core$Native_Utils.update(
						model,
						{
							matches: {ctor: '::', _0: newMatch, _1: model.matches},
							tokens: _p109
						});
				},
				A2(
					_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
					_pablohirafuji$elm_markdown$Markdown_InlineParser$emailAutolinkTypeToMatch,
					_pablohirafuji$elm_markdown$Markdown_InlineParser$autolinkToMatch(
						A6(
							_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenPairToMatch,
							model,
							function (s) {
								return s;
							},
							_pablohirafuji$elm_markdown$Markdown_InlineParser$CodeType,
							_p107._0,
							closeToken,
							{ctor: '[]'})))));
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$tokenPairToMatch = F6(
	function (model, processText, type_, openToken, closeToken, innerTokens) {
		var textEnd = closeToken.index;
		var textStart = openToken.index + openToken.length;
		var end = closeToken.index + closeToken.length;
		var start = openToken.index;
		var match = {
			type_: type_,
			start: start,
			end: end,
			textStart: textStart,
			textEnd: textEnd,
			text: processText(
				A3(_elm_lang$core$String$slice, textStart, textEnd, model.rawText)),
			matches: {ctor: '[]'}
		};
		var matches = A2(
			_elm_lang$core$List$map,
			function (_p110) {
				var _p111 = _p110;
				return A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$prepareChildMatch, match, _p111._0);
			},
			function (_) {
				return _.matches;
			}(
				_pablohirafuji$elm_markdown$Markdown_InlineParser$tokensToMatches(
					_elm_lang$core$Native_Utils.update(
						model,
						{
							tokens: innerTokens,
							matches: {ctor: '[]'}
						}))));
		return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
			_elm_lang$core$Native_Utils.update(
				match,
				{matches: matches}));
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$codeToMatch = F3(
	function (closeToken, model, _p112) {
		var _p113 = _p112;
		var _p114 = _p113._0;
		var updtOpenToken = _elm_lang$core$Native_Utils.eq(
			_p114.meaning,
			_pablohirafuji$elm_markdown$Markdown_InlineParser$CodeToken(true)) ? _elm_lang$core$Native_Utils.update(
			_p114,
			{index: _p114.index + 1, length: _p114.length - 1}) : _p114;
		return _elm_lang$core$Native_Utils.update(
			model,
			{
				matches: {
					ctor: '::',
					_0: A6(
						_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenPairToMatch,
						model,
						_pablohirafuji$elm_markdown$Markdown_Helpers$cleanWhitespaces,
						_pablohirafuji$elm_markdown$Markdown_InlineParser$CodeType,
						updtOpenToken,
						closeToken,
						{ctor: '[]'}),
					_1: model.matches
				},
				tokens: _p113._2
			});
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$emphasisTTM = function (_p115) {
	emphasisTTM:
	while (true) {
		var _p116 = _p115;
		var _p123 = _p116._1;
		var _p117 = _p116._0;
		if (_p117.ctor === '[]') {
			return _pablohirafuji$elm_markdown$Markdown_InlineParser$reverseTokens(_p123);
		} else {
			var _p122 = _p117._1;
			var _p121 = _p117._0;
			var _p118 = _p121.meaning;
			if ((_p118.ctor === 'EmphasisToken') && (_p118._1.ctor === '_Tuple2')) {
				var _p120 = _p118._1._1;
				var _p119 = _p118._1._0;
				if (_elm_lang$core$Native_Utils.eq(_p119, _p120)) {
					if ((!_elm_lang$core$Native_Utils.eq(_p120, 0)) && ((!_elm_lang$core$Native_Utils.eq(
						_p118._0,
						_elm_lang$core$Native_Utils.chr('_'))) || _elm_lang$core$Native_Utils.eq(_p120, 1))) {
						var _v57 = A2(
							_elm_lang$core$Maybe$withDefault,
							{
								ctor: '_Tuple2',
								_0: _p122,
								_1: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p123, _p121)
							},
							A2(
								_elm_lang$core$Maybe$map,
								A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$emphasisToMatch, _p121, _p122, _p123),
								A2(
									_pablohirafuji$elm_markdown$Markdown_InlineParser$findToken,
									_pablohirafuji$elm_markdown$Markdown_InlineParser$isOpenEmphasisToken(_p121),
									_p123.tokens)));
						_p115 = _v57;
						continue emphasisTTM;
					} else {
						var _v58 = {ctor: '_Tuple2', _0: _p122, _1: _p123};
						_p115 = _v58;
						continue emphasisTTM;
					}
				} else {
					if (_elm_lang$core$Native_Utils.cmp(_p119, _p120) < 0) {
						var _v59 = {
							ctor: '_Tuple2',
							_0: _p122,
							_1: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p123, _p121)
						};
						_p115 = _v59;
						continue emphasisTTM;
					} else {
						var _v60 = A2(
							_elm_lang$core$Maybe$withDefault,
							{ctor: '_Tuple2', _0: _p122, _1: _p123},
							A2(
								_elm_lang$core$Maybe$map,
								A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$emphasisToMatch, _p121, _p122, _p123),
								A2(
									_pablohirafuji$elm_markdown$Markdown_InlineParser$findToken,
									_pablohirafuji$elm_markdown$Markdown_InlineParser$isOpenEmphasisToken(_p121),
									_p123.tokens)));
						_p115 = _v60;
						continue emphasisTTM;
					}
				}
			} else {
				var _v61 = {
					ctor: '_Tuple2',
					_0: _p122,
					_1: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p123, _p121)
				};
				_p115 = _v61;
				continue emphasisTTM;
			}
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$emphasisToMatch = F4(
	function (closeToken, tokensTail, model, _p124) {
		var _p125 = _p124;
		var _p128 = _p125._2;
		var _p127 = _p125._0;
		var remainLength = _p127.length - closeToken.length;
		var _p126 = _elm_lang$core$Native_Utils.eq(remainLength, 0) ? {ctor: '_Tuple4', _0: _p127, _1: closeToken, _2: _p128, _3: tokensTail} : ((_elm_lang$core$Native_Utils.cmp(remainLength, 0) > 0) ? {
			ctor: '_Tuple4',
			_0: _elm_lang$core$Native_Utils.update(
				_p127,
				{index: _p127.index + remainLength, length: closeToken.length}),
			_1: closeToken,
			_2: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.update(
					_p127,
					{length: remainLength}),
				_1: _p128
			},
			_3: tokensTail
		} : {
			ctor: '_Tuple4',
			_0: _p127,
			_1: _elm_lang$core$Native_Utils.update(
				closeToken,
				{length: _p127.length}),
			_2: _p128,
			_3: {
				ctor: '::',
				_0: _elm_lang$core$Native_Utils.update(
					closeToken,
					{index: closeToken.index + _p127.length, length: 0 - remainLength}),
				_1: tokensTail
			}
		});
		var updtOpenToken = _p126._0;
		var updtCloseToken = _p126._1;
		var updtRemainTokens = _p126._2;
		var updtTokensTail = _p126._3;
		var match = A6(
			_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenPairToMatch,
			model,
			function (s) {
				return s;
			},
			_pablohirafuji$elm_markdown$Markdown_InlineParser$EmphasisType(updtOpenToken.length),
			updtOpenToken,
			updtCloseToken,
			_elm_lang$core$List$reverse(_p125._1));
		return {
			ctor: '_Tuple2',
			_0: updtTokensTail,
			_1: _elm_lang$core$Native_Utils.update(
				model,
				{
					matches: {ctor: '::', _0: match, _1: model.matches},
					tokens: updtRemainTokens
				})
		};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$htmlElementTTM = function (_p129) {
	htmlElementTTM:
	while (true) {
		var _p130 = _p129;
		var _p136 = _p130._1;
		var _p131 = _p130._0;
		if (_p131.ctor === '[]') {
			return _pablohirafuji$elm_markdown$Markdown_InlineParser$reverseTokens(_p136);
		} else {
			var _p135 = _p131._1;
			var _p134 = _p131._0;
			var _p132 = _p134.meaning;
			if (_p132.ctor === 'HtmlToken') {
				var _p133 = _p132._1;
				if (_pablohirafuji$elm_markdown$Markdown_InlineParser$isVoidTag(_p133) || (!_p132._0)) {
					var _v66 = A2(
						F2(
							function (v0, v1) {
								return {ctor: '_Tuple2', _0: v0, _1: v1};
							}),
						_p135,
						A2(
							_pablohirafuji$elm_markdown$Markdown_InlineParser$addMatch,
							_p136,
							A2(
								_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenToMatch,
								_p134,
								_pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlType(_p133))));
					_p129 = _v66;
					continue htmlElementTTM;
				} else {
					var _v67 = A2(
						_elm_lang$core$Maybe$withDefault,
						A2(
							F2(
								function (v0, v1) {
									return {ctor: '_Tuple2', _0: v0, _1: v1};
								}),
							_p135,
							A2(
								_pablohirafuji$elm_markdown$Markdown_InlineParser$addMatch,
								_p136,
								A2(
									_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenToMatch,
									_p134,
									_pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlType(_p133)))),
						A2(
							_elm_lang$core$Maybe$map,
							A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$htmlElementToMatch, _p134, _p136, _p133),
							A2(
								_pablohirafuji$elm_markdown$Markdown_InlineParser$findToken,
								_pablohirafuji$elm_markdown$Markdown_InlineParser$isCloseToken(_p133),
								_p135)));
					_p129 = _v67;
					continue htmlElementTTM;
				}
			} else {
				var _v68 = {
					ctor: '_Tuple2',
					_0: _p135,
					_1: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p136, _p134)
				};
				_p129 = _v68;
				continue htmlElementTTM;
			}
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$htmlElementToMatch = F4(
	function (openToken, model, htmlModel, _p137) {
		var _p138 = _p137;
		return {
			ctor: '_Tuple2',
			_0: _p138._2,
			_1: _elm_lang$core$Native_Utils.update(
				model,
				{
					matches: {
						ctor: '::',
						_0: A6(
							_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenPairToMatch,
							model,
							function (s) {
								return s;
							},
							_pablohirafuji$elm_markdown$Markdown_InlineParser$HtmlType(htmlModel),
							openToken,
							_p138._0,
							_p138._1),
						_1: model.matches
					}
				})
		};
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$linkImageTypeTTM = function (_p139) {
	linkImageTypeTTM:
	while (true) {
		var _p140 = _p139;
		var _p145 = _p140._1;
		var _p141 = _p140._0;
		if (_p141.ctor === '[]') {
			return _pablohirafuji$elm_markdown$Markdown_InlineParser$reverseTokens(_p145);
		} else {
			var _p144 = _p141._1;
			var _p143 = _p141._0;
			var _p142 = _p143.meaning;
			if ((_p142.ctor === 'CharToken') && (_p142._0.valueOf() === ']')) {
				var _v73 = A2(
					_elm_lang$core$Maybe$withDefault,
					{ctor: '_Tuple2', _0: _p144, _1: _p145},
					A2(
						_elm_lang$core$Maybe$andThen,
						A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$linkOrImageTypeToMatch, _p143, _p144, _p145),
						A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$findToken, _pablohirafuji$elm_markdown$Markdown_InlineParser$isLinkTypeOrImageOpenToken, _p145.tokens)));
				_p139 = _v73;
				continue linkImageTypeTTM;
			} else {
				var _v74 = {
					ctor: '_Tuple2',
					_0: _p144,
					_1: A2(_pablohirafuji$elm_markdown$Markdown_InlineParser$addToken, _p145, _p143)
				};
				_p139 = _v74;
				continue linkImageTypeTTM;
			}
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$linkOrImageTypeToMatch = F4(
	function (closeToken, tokensTail, model, _p146) {
		var _p147 = _p146;
		var _p156 = _p147._2;
		var _p155 = _p147._0;
		var _p154 = _p147._1;
		var linkOpenTokenToInactive = function (model_) {
			var process = function (token) {
				var _p148 = token.meaning;
				if (_p148.ctor === 'LinkOpenToken') {
					return _elm_lang$core$Native_Utils.update(
						token,
						{
							meaning: _pablohirafuji$elm_markdown$Markdown_InlineParser$LinkOpenToken(false)
						});
				} else {
					return token;
				}
			};
			return _elm_lang$core$Native_Utils.update(
				model_,
				{
					tokens: A2(_elm_lang$core$List$map, process, model_.tokens)
				});
		};
		var removeOpenToken = {
			ctor: '_Tuple2',
			_0: tokensTail,
			_1: _elm_lang$core$Native_Utils.update(
				model,
				{
					tokens: A2(_elm_lang$core$Basics_ops['++'], _p154, _p156)
				})
		};
		var tempMatch = function (isLinkType) {
			return A6(
				_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenPairToMatch,
				model,
				function (s) {
					return s;
				},
				isLinkType ? _pablohirafuji$elm_markdown$Markdown_InlineParser$LinkType(
					{ctor: '_Tuple2', _0: '', _1: _elm_lang$core$Maybe$Nothing}) : _pablohirafuji$elm_markdown$Markdown_InlineParser$ImageType(
					{ctor: '_Tuple2', _0: '', _1: _elm_lang$core$Maybe$Nothing}),
				_p155,
				closeToken,
				_elm_lang$core$List$reverse(_p154));
		};
		var remainText = A2(_elm_lang$core$String$dropLeft, closeToken.index + 1, model.rawText);
		var args = function (isLinkType) {
			return {
				ctor: '_Tuple3',
				_0: remainText,
				_1: tempMatch(isLinkType),
				_2: _elm_lang$core$Native_Utils.update(
					model,
					{tokens: _p156})
			};
		};
		var _p149 = _p155.meaning;
		switch (_p149.ctor) {
			case 'ImageOpenToken':
				return _elm_lang$core$Result$toMaybe(
					A2(
						_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
						function (_p150) {
							return _elm_lang$core$Result$Ok(removeOpenToken);
						},
						A2(
							_elm_lang$core$Result$map,
							_pablohirafuji$elm_markdown$Markdown_InlineParser$removeParsedAheadTokens(tokensTail),
							A2(
								_elm_lang$core$Result$andThen,
								_pablohirafuji$elm_markdown$Markdown_InlineParser$checkParsedAheadOverlapping,
								A2(
									_elm_lang$core$Result$mapError,
									function (_p151) {
										return {ctor: '_Tuple0'};
									},
									A2(
										_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
										_pablohirafuji$elm_markdown$Markdown_InlineParser$checkForRefLinkTypeOrImageType,
										_pablohirafuji$elm_markdown$Markdown_InlineParser$checkForInlineLinkTypeOrImageType(
											args(false))))))));
			case 'LinkOpenToken':
				if (_p149._0 === true) {
					return _elm_lang$core$Result$toMaybe(
						A2(
							_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
							function (_p152) {
								return _elm_lang$core$Result$Ok(removeOpenToken);
							},
							A2(
								_elm_lang$core$Result$map,
								_pablohirafuji$elm_markdown$Markdown_InlineParser$removeParsedAheadTokens(tokensTail),
								A2(
									_elm_lang$core$Result$map,
									linkOpenTokenToInactive,
									A2(
										_elm_lang$core$Result$andThen,
										_pablohirafuji$elm_markdown$Markdown_InlineParser$checkParsedAheadOverlapping,
										A2(
											_elm_lang$core$Result$mapError,
											function (_p153) {
												return {ctor: '_Tuple0'};
											},
											A2(
												_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
												_pablohirafuji$elm_markdown$Markdown_InlineParser$checkForRefLinkTypeOrImageType,
												_pablohirafuji$elm_markdown$Markdown_InlineParser$checkForInlineLinkTypeOrImageType(
													args(true)))))))));
				} else {
					return _elm_lang$core$Maybe$Just(removeOpenToken);
				}
			default:
				return _elm_lang$core$Maybe$Nothing;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$NormalType = {ctor: 'NormalType'};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$normalMatch = function (text) {
	return _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
		{
			type_: _pablohirafuji$elm_markdown$Markdown_InlineParser$NormalType,
			start: 0,
			end: 0,
			textStart: 0,
			textEnd: 0,
			text: _pablohirafuji$elm_markdown$Markdown_Helpers$formatStr(text),
			matches: {ctor: '[]'}
		});
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$parseTextMatch = F3(
	function (rawText, _p157, parsedMatches) {
		var _p158 = _p157;
		var _p161 = _p158._0;
		var updtMatch = _pablohirafuji$elm_markdown$Markdown_InlineParser$Match(
			_elm_lang$core$Native_Utils.update(
				_p161,
				{
					matches: A3(
						_pablohirafuji$elm_markdown$Markdown_InlineParser$parseTextMatches,
						_p161.text,
						{ctor: '[]'},
						_p161.matches)
				}));
		var _p159 = parsedMatches;
		if (_p159.ctor === '[]') {
			var finalStr = A2(_elm_lang$core$String$dropLeft, _p161.end, rawText);
			return _elm_lang$core$String$isEmpty(finalStr) ? {
				ctor: '::',
				_0: updtMatch,
				_1: {ctor: '[]'}
			} : {
				ctor: '::',
				_0: updtMatch,
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_markdown$Markdown_InlineParser$normalMatch(finalStr),
					_1: {ctor: '[]'}
				}
			};
		} else {
			var _p160 = _p159._0._0;
			return _elm_lang$core$Native_Utils.eq(_p160.type_, _pablohirafuji$elm_markdown$Markdown_InlineParser$NormalType) ? {ctor: '::', _0: updtMatch, _1: parsedMatches} : (_elm_lang$core$Native_Utils.eq(_p161.end, _p160.start) ? {ctor: '::', _0: updtMatch, _1: parsedMatches} : ((_elm_lang$core$Native_Utils.cmp(_p161.end, _p160.start) < 0) ? {
				ctor: '::',
				_0: updtMatch,
				_1: {
					ctor: '::',
					_0: _pablohirafuji$elm_markdown$Markdown_InlineParser$normalMatch(
						A3(_elm_lang$core$String$slice, _p161.end, _p160.start, rawText)),
					_1: parsedMatches
				}
			} : parsedMatches));
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$parseTextMatches = F3(
	function (rawText, parsedMatches, matches) {
		parseTextMatches:
		while (true) {
			var _p162 = matches;
			if (_p162.ctor === '[]') {
				var _p163 = parsedMatches;
				if (_p163.ctor === '[]') {
					return _elm_lang$core$String$isEmpty(rawText) ? {ctor: '[]'} : {
						ctor: '::',
						_0: _pablohirafuji$elm_markdown$Markdown_InlineParser$normalMatch(rawText),
						_1: {ctor: '[]'}
					};
				} else {
					var _p164 = _p163._0._0;
					return (_elm_lang$core$Native_Utils.cmp(_p164.start, 0) > 0) ? {
						ctor: '::',
						_0: _pablohirafuji$elm_markdown$Markdown_InlineParser$normalMatch(
							A2(_elm_lang$core$String$left, _p164.start, rawText)),
						_1: parsedMatches
					} : parsedMatches;
				}
			} else {
				var _v82 = rawText,
					_v83 = A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$parseTextMatch, rawText, _p162._0, parsedMatches),
					_v84 = _p162._1;
				rawText = _v82;
				parsedMatches = _v83;
				matches = _v84;
				continue parseTextMatches;
			}
		}
	});
var _pablohirafuji$elm_markdown$Markdown_InlineParser$parseText = function (model) {
	return _elm_lang$core$Native_Utils.update(
		model,
		{
			matches: A3(
				_pablohirafuji$elm_markdown$Markdown_InlineParser$parseTextMatches,
				model.rawText,
				{ctor: '[]'},
				model.matches)
		});
};
var _pablohirafuji$elm_markdown$Markdown_InlineParser$parse = F3(
	function (options, refs, rawText) {
		return _pablohirafuji$elm_markdown$Markdown_InlineParser$matchesToInlines(
			function (_) {
				return _.matches;
			}(
				_pablohirafuji$elm_markdown$Markdown_InlineParser$parseText(
					_pablohirafuji$elm_markdown$Markdown_InlineParser$organizeParserMatches(
						_pablohirafuji$elm_markdown$Markdown_InlineParser$tokensToMatches(
							_pablohirafuji$elm_markdown$Markdown_InlineParser$tokenize(
								A3(
									_pablohirafuji$elm_markdown$Markdown_InlineParser$initParser,
									options,
									refs,
									_elm_lang$core$String$trim(rawText))))))));
	});

var _pablohirafuji$elm_markdown$Markdown_Block$queryInlinesHelp = F2(
	function ($function, block) {
		var _p0 = block;
		switch (_p0.ctor) {
			case 'Paragraph':
				return _elm_lang$core$List$concat(
					A2(
						_elm_lang$core$List$map,
						_pablohirafuji$elm_markdown$Markdown_InlineParser$query($function),
						_p0._1));
			case 'Heading':
				return _elm_lang$core$List$concat(
					A2(
						_elm_lang$core$List$map,
						_pablohirafuji$elm_markdown$Markdown_InlineParser$query($function),
						_p0._2));
			case 'PlainInlines':
				return _elm_lang$core$List$concat(
					A2(
						_elm_lang$core$List$map,
						_pablohirafuji$elm_markdown$Markdown_InlineParser$query($function),
						_p0._0));
			default:
				return {ctor: '[]'};
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$defaultHtml = F3(
	function (customHtml, customInlineHtml, block) {
		var blockToHtml = A2(
			_elm_lang$core$Maybe$withDefault,
			A2(_pablohirafuji$elm_markdown$Markdown_Block$defaultHtml, _elm_lang$core$Maybe$Nothing, customInlineHtml),
			customHtml);
		var inlineToHtml = A2(_elm_lang$core$Maybe$withDefault, _pablohirafuji$elm_markdown$Markdown_Inline$toHtml, customInlineHtml);
		var _p1 = block;
		switch (_p1.ctor) {
			case 'BlankLine':
				return {ctor: '[]'};
			case 'Heading':
				var hElement = function () {
					var _p2 = _p1._1;
					switch (_p2) {
						case 1:
							return _elm_lang$html$Html$h1(
								{ctor: '[]'});
						case 2:
							return _elm_lang$html$Html$h2(
								{ctor: '[]'});
						case 3:
							return _elm_lang$html$Html$h3(
								{ctor: '[]'});
						case 4:
							return _elm_lang$html$Html$h4(
								{ctor: '[]'});
						case 5:
							return _elm_lang$html$Html$h5(
								{ctor: '[]'});
						default:
							return _elm_lang$html$Html$h6(
								{ctor: '[]'});
					}
				}();
				return {
					ctor: '::',
					_0: hElement(
						A2(_elm_lang$core$List$map, inlineToHtml, _p1._2)),
					_1: {ctor: '[]'}
				};
			case 'ThematicBreak':
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$hr,
						{ctor: '[]'},
						{ctor: '[]'}),
					_1: {ctor: '[]'}
				};
			case 'Paragraph':
				return {
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$p,
						{ctor: '[]'},
						A2(_elm_lang$core$List$map, inlineToHtml, _p1._1)),
					_1: {ctor: '[]'}
				};
			case 'CodeBlock':
				if (_p1._0.ctor === 'Fenced') {
					var basicView = function (attrs) {
						return {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$pre,
								{ctor: '[]'},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$code,
										attrs,
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(_p1._1),
											_1: {ctor: '[]'}
										}),
									_1: {ctor: '[]'}
								}),
							_1: {ctor: '[]'}
						};
					};
					var _p3 = _p1._0._1.language;
					if (_p3.ctor === 'Just') {
						return basicView(
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class(
									A2(_elm_lang$core$Basics_ops['++'], 'language-', _p3._0)),
								_1: {ctor: '[]'}
							});
					} else {
						return basicView(
							{ctor: '[]'});
					}
				} else {
					return {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$pre,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$code,
									{ctor: '[]'},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(_p1._1),
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					};
				}
			case 'BlockQuote':
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					{ctor: '[]'},
					A2(
						_elm_lang$html$Html$blockquote,
						{ctor: '[]'},
						_elm_lang$core$List$concat(
							A2(_elm_lang$core$List$map, blockToHtml, _p1._0))));
			case 'List':
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					{ctor: '[]'},
					function () {
						var _p4 = _p1._0.type_;
						if (_p4.ctor === 'Ordered') {
							var _p5 = _p4._0;
							return _elm_lang$core$Native_Utils.eq(_p5, 1) ? _elm_lang$html$Html$ol(
								{ctor: '[]'}) : _elm_lang$html$Html$ol(
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$start(_p5),
									_1: {ctor: '[]'}
								});
						} else {
							return _elm_lang$html$Html$ul(
								{ctor: '[]'});
						}
					}()(
						A2(
							_elm_lang$core$List$map,
							function (_p6) {
								return A2(
									_elm_lang$html$Html$li,
									{ctor: '[]'},
									_elm_lang$core$List$concat(
										A2(_elm_lang$core$List$map, blockToHtml, _p6)));
							},
							_p1._1)));
			case 'PlainInlines':
				return A2(_elm_lang$core$List$map, inlineToHtml, _p1._0);
			default:
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					{ctor: '[]'},
					A2(
						_elm_lang$html$Html$div,
						{ctor: '[]'},
						A2(
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								}),
							_elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									'Unhandled custom block:',
									_elm_lang$core$Basics$toString(_p1._0))),
							_elm_lang$core$List$concat(
								A2(_elm_lang$core$List$map, blockToHtml, _p1._1)))));
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$toHtml = A2(_pablohirafuji$elm_markdown$Markdown_Block$defaultHtml, _elm_lang$core$Maybe$Nothing, _elm_lang$core$Maybe$Nothing);
var _pablohirafuji$elm_markdown$Markdown_Block$insertLinkMatch = F2(
	function (refs, linkMatch) {
		return A2(_elm_lang$core$Dict$member, linkMatch.inside, refs) ? refs : A3(
			_elm_lang$core$Dict$insert,
			linkMatch.inside,
			{ctor: '_Tuple2', _0: linkMatch.url, _1: linkMatch.maybeTitle},
			refs);
	});
var _pablohirafuji$elm_markdown$Markdown_Block$hrefRegex = '\\s*(?:<([^<>\\s]*)>|([^\\s]*))';
var _pablohirafuji$elm_markdown$Markdown_Block$refRegex = _elm_lang$core$Regex$regex(
	A2(
		_elm_lang$core$Basics_ops['++'],
		'^\\s*\\[(',
		A2(
			_elm_lang$core$Basics_ops['++'],
			_pablohirafuji$elm_markdown$Markdown_Helpers$insideSquareBracketRegex,
			A2(
				_elm_lang$core$Basics_ops['++'],
				')\\]:',
				A2(
					_elm_lang$core$Basics_ops['++'],
					_pablohirafuji$elm_markdown$Markdown_Block$hrefRegex,
					A2(_elm_lang$core$Basics_ops['++'], _pablohirafuji$elm_markdown$Markdown_Helpers$titleRegex, '\\s*(?![^\\n])'))))));
var _pablohirafuji$elm_markdown$Markdown_Block$extractUrlTitleRegex = function (regexMatch) {
	var _p7 = regexMatch.submatches;
	if (((((((_p7.ctor === '::') && (_p7._0.ctor === 'Just')) && (_p7._1.ctor === '::')) && (_p7._1._1.ctor === '::')) && (_p7._1._1._1.ctor === '::')) && (_p7._1._1._1._1.ctor === '::')) && (_p7._1._1._1._1._1.ctor === '::')) {
		var toReturn = function (rawUrl) {
			return {
				matchLength: _elm_lang$core$String$length(regexMatch.match),
				inside: _p7._0._0,
				url: rawUrl,
				maybeTitle: _pablohirafuji$elm_markdown$Markdown_Helpers$returnFirstJust(
					{
						ctor: '::',
						_0: _p7._1._1._1._0,
						_1: {
							ctor: '::',
							_0: _p7._1._1._1._1._0,
							_1: {
								ctor: '::',
								_0: _p7._1._1._1._1._1._0,
								_1: {ctor: '[]'}
							}
						}
					})
			};
		};
		var maybeRawUrl = _pablohirafuji$elm_markdown$Markdown_Helpers$returnFirstJust(
			{
				ctor: '::',
				_0: _p7._1._0,
				_1: {
					ctor: '::',
					_0: _p7._1._1._0,
					_1: {ctor: '[]'}
				}
			});
		return A2(_elm_lang$core$Maybe$map, toReturn, maybeRawUrl);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_Block$maybeLinkMatch = function (rawText) {
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (linkMatch) {
			return (_elm_lang$core$Native_Utils.eq(linkMatch.url, '') || _elm_lang$core$Native_Utils.eq(linkMatch.inside, '')) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(linkMatch);
		},
		A2(
			_elm_lang$core$Maybe$map,
			function (linkMatch) {
				return _elm_lang$core$Native_Utils.update(
					linkMatch,
					{
						inside: _pablohirafuji$elm_markdown$Markdown_Helpers$prepareRefLabel(linkMatch.inside)
					});
			},
			A2(
				_elm_lang$core$Maybe$andThen,
				_pablohirafuji$elm_markdown$Markdown_Block$extractUrlTitleRegex,
				_elm_lang$core$List$head(
					A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_pablohirafuji$elm_markdown$Markdown_Block$refRegex,
						rawText)))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$formatParagraphLine = function (rawParagraph) {
	return _elm_lang$core$Native_Utils.eq(
		A2(_elm_lang$core$String$right, 2, rawParagraph),
		'  ') ? A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$String$trim(rawParagraph),
		'  ') : _elm_lang$core$String$trim(rawParagraph);
};
var _pablohirafuji$elm_markdown$Markdown_Block$isBlankLineLast = function (items) {
	isBlankLineLast:
	while (true) {
		var _p8 = items;
		if (_p8.ctor === '[]') {
			return false;
		} else {
			var _p9 = _p8._0;
			_v7_3:
			do {
				if (_p9.ctor === '::') {
					switch (_p9._0.ctor) {
						case 'BlankLine':
							if (_p9._1.ctor === '[]') {
								return false;
							} else {
								return true;
							}
						case 'List':
							var _v8 = _p9._0._1;
							items = _v8;
							continue isBlankLineLast;
						default:
							break _v7_3;
					}
				} else {
					break _v7_3;
				}
			} while(false);
			return false;
		}
	}
};
var _pablohirafuji$elm_markdown$Markdown_Block$unorderedListLineRegex = _elm_lang$core$Regex$regex('^( *([\\*\\-\\+])( {0,4}))(?:[ \\t](.*))?$');
var _pablohirafuji$elm_markdown$Markdown_Block$orderedListLineRegex = _elm_lang$core$Regex$regex('^( *(\\d{1,9})([.)])( {0,4}))(?:[ \\t](.*))?$');
var _pablohirafuji$elm_markdown$Markdown_Block$isCloseFenceLineHelp = F2(
	function (fence, match) {
		var _p10 = match.submatches;
		if ((_p10.ctor === '::') && (_p10._0.ctor === 'Just')) {
			var _p11 = _p10._0._0;
			return (_elm_lang$core$Native_Utils.cmp(
				_elm_lang$core$String$length(_p11),
				fence.fenceLength) > -1) && _elm_lang$core$Native_Utils.eq(
				A2(_elm_lang$core$String$left, 1, _p11),
				fence.fenceChar);
		} else {
			return false;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$closeCodeFenceLineRegex = _elm_lang$core$Regex$regex('^ {0,3}(`{3,}|~{3,})\\s*$');
var _pablohirafuji$elm_markdown$Markdown_Block$isCloseFenceLine = function (fence) {
	return function (_p12) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			false,
			A2(
				_elm_lang$core$Maybe$map,
				_pablohirafuji$elm_markdown$Markdown_Block$isCloseFenceLineHelp(fence),
				_elm_lang$core$List$head(
					A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_pablohirafuji$elm_markdown$Markdown_Block$closeCodeFenceLineRegex,
						_p12))));
	};
};
var _pablohirafuji$elm_markdown$Markdown_Block$openCodeFenceLineRegex = _elm_lang$core$Regex$regex('^( {0,3})(`{3,}(?!.*`)|~{3,}(?!.*~))(.*)$');
var _pablohirafuji$elm_markdown$Markdown_Block$blocksAfterBlankLines = F2(
	function (ast, blankLines) {
		blocksAfterBlankLines:
		while (true) {
			var _p13 = ast;
			if ((_p13.ctor === '::') && (_p13._0.ctor === 'BlankLine')) {
				var _v11 = _p13._1,
					_v12 = {ctor: '::', _0: _p13._0._0, _1: blankLines};
				ast = _v11;
				blankLines = _v12;
				continue blocksAfterBlankLines;
			} else {
				return {ctor: '_Tuple2', _0: ast, _1: blankLines};
			}
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$indentedCodeLineRegex = _elm_lang$core$Regex$regex('^(?: {4,4}| {0,3}\\t)(.*)$');
var _pablohirafuji$elm_markdown$Markdown_Block$blockQuoteLineRegex = _elm_lang$core$Regex$regex('^ {0,3}(?:>[ ]?)(.*)$');
var _pablohirafuji$elm_markdown$Markdown_Block$thematicBreakLineRegex = _elm_lang$core$Regex$regex(
	A2(
		_elm_lang$core$Basics_ops['++'],
		'^ {0,3}(?:',
		A2(
			_elm_lang$core$Basics_ops['++'],
			'(?:\\*[ \\t]*){3,}',
			A2(_elm_lang$core$Basics_ops['++'], '|(?:_[ \\t]*){3,}', '|(?:-[ \\t]*){3,})[ \\t]*$'))));
var _pablohirafuji$elm_markdown$Markdown_Block$extractSetextHeadingRM = function (match) {
	var _p14 = match.submatches;
	if ((_p14.ctor === '::') && (_p14._0.ctor === 'Just')) {
		var _p15 = _p14._0._0;
		return A2(_elm_lang$core$String$startsWith, '=', _p15) ? _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: 1, _1: _p15}) : _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: 2, _1: _p15});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_Block$setextHeadingLineRegex = _elm_lang$core$Regex$regex('^ {0,3}(=+|-+)[ \\t]*$');
var _pablohirafuji$elm_markdown$Markdown_Block$atxHeadingLineRegex = _elm_lang$core$Regex$regex(
	A2(
		_elm_lang$core$Basics_ops['++'],
		'^ {0,3}(#{1,6})',
		A2(_elm_lang$core$Basics_ops['++'], '(?:[ \\t]+[ \\t#]+$|[ \\t]+|$)', '(.*?)(?:\\s+[ \\t#]*)?$')));
var _pablohirafuji$elm_markdown$Markdown_Block$blankLineRegex = _elm_lang$core$Regex$regex('^\\s*$');
var _pablohirafuji$elm_markdown$Markdown_Block$calcListIndentLength = function (_p16) {
	var _p17 = _p16;
	var _p20 = _p17._2;
	var _p19 = _p17._0;
	var _p18 = _p17._1;
	var indentSpaceLength = _elm_lang$core$String$length(_p18);
	var isIndentedCode = _elm_lang$core$Native_Utils.cmp(indentSpaceLength, 4) > -1;
	var updtRawLine = isIndentedCode ? A2(_elm_lang$core$Basics_ops['++'], _p18, _p20) : _p20;
	var indentLength = (isIndentedCode || A2(_elm_lang$core$Regex$contains, _pablohirafuji$elm_markdown$Markdown_Block$blankLineRegex, _p20)) ? (_p19.indentLength - indentSpaceLength) : _p19.indentLength;
	return {
		ctor: '_Tuple2',
		_0: _elm_lang$core$Native_Utils.update(
			_p19,
			{indentLength: indentLength}),
		_1: updtRawLine
	};
};
var _pablohirafuji$elm_markdown$Markdown_Block$dropRefString = F2(
	function (rawText, inlineMatch) {
		var strippedText = A2(_elm_lang$core$String$dropLeft, inlineMatch.matchLength, rawText);
		return A2(_elm_lang$core$Regex$contains, _pablohirafuji$elm_markdown$Markdown_Block$blankLineRegex, strippedText) ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(strippedText);
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseReference = F2(
	function (refs, rawText) {
		parseReference:
		while (true) {
			var _p21 = _pablohirafuji$elm_markdown$Markdown_Block$maybeLinkMatch(rawText);
			if (_p21.ctor === 'Just') {
				var _p23 = _p21._0;
				var updtRefs = A2(_pablohirafuji$elm_markdown$Markdown_Block$insertLinkMatch, refs, _p23);
				var maybeStrippedText = A2(_pablohirafuji$elm_markdown$Markdown_Block$dropRefString, rawText, _p23);
				var _p22 = maybeStrippedText;
				if (_p22.ctor === 'Just') {
					var _v17 = updtRefs,
						_v18 = _p22._0;
					refs = _v17;
					rawText = _v18;
					continue parseReference;
				} else {
					return {ctor: '_Tuple2', _0: updtRefs, _1: _elm_lang$core$Maybe$Nothing};
				}
			} else {
				return {
					ctor: '_Tuple2',
					_0: refs,
					_1: _elm_lang$core$Maybe$Just(rawText)
				};
			}
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$Fence = F4(
	function (a, b, c, d) {
		return {indentLength: a, fenceLength: b, fenceChar: c, language: d};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$ListBlock = F4(
	function (a, b, c, d) {
		return {type_: a, indentLength: b, delimiter: c, isLoose: d};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$LinkMatch = F4(
	function (a, b, c, d) {
		return {matchLength: a, inside: b, url: c, maybeTitle: d};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$Custom = F2(
	function (a, b) {
		return {ctor: 'Custom', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$PlainInlines = function (a) {
	return {ctor: 'PlainInlines', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_Block$List = F2(
	function (a, b) {
		return {ctor: 'List', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$BlockQuote = function (a) {
	return {ctor: 'BlockQuote', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_Block$walk = F2(
	function ($function, block) {
		var _p24 = block;
		switch (_p24.ctor) {
			case 'BlockQuote':
				return $function(
					_pablohirafuji$elm_markdown$Markdown_Block$BlockQuote(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_Block$walk($function),
							_p24._0)));
			case 'List':
				return $function(
					A2(
						_pablohirafuji$elm_markdown$Markdown_Block$List,
						_p24._0,
						A2(
							_elm_lang$core$List$map,
							_elm_lang$core$List$map(
								_pablohirafuji$elm_markdown$Markdown_Block$walk($function)),
							_p24._1)));
			case 'Custom':
				return $function(
					A2(
						_pablohirafuji$elm_markdown$Markdown_Block$Custom,
						_p24._0,
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_Block$walk($function),
							_p24._1)));
			default:
				return $function(block);
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$query = F2(
	function ($function, block) {
		var _p25 = block;
		switch (_p25.ctor) {
			case 'BlockQuote':
				var _p26 = _p25._0;
				return A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					$function(
						_pablohirafuji$elm_markdown$Markdown_Block$BlockQuote(_p26)),
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_Block$query($function),
							_p26)));
			case 'List':
				var _p27 = _p25._1;
				return A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					$function(
						A2(_pablohirafuji$elm_markdown$Markdown_Block$List, _p25._0, _p27)),
					_elm_lang$core$List$concat(
						_elm_lang$core$List$concat(
							A2(
								_elm_lang$core$List$map,
								_elm_lang$core$List$map(
									_pablohirafuji$elm_markdown$Markdown_Block$query($function)),
								_p27))));
			case 'Custom':
				var _p28 = _p25._1;
				return A2(
					F2(
						function (x, y) {
							return A2(_elm_lang$core$Basics_ops['++'], x, y);
						}),
					$function(
						A2(_pablohirafuji$elm_markdown$Markdown_Block$Custom, _p25._0, _p28)),
					_elm_lang$core$List$concat(
						A2(
							_elm_lang$core$List$map,
							_pablohirafuji$elm_markdown$Markdown_Block$query($function),
							_p28)));
			default:
				return $function(block);
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$queryInlines = F2(
	function ($function, block) {
		return A2(
			_pablohirafuji$elm_markdown$Markdown_Block$query,
			_pablohirafuji$elm_markdown$Markdown_Block$queryInlinesHelp($function),
			block);
	});
var _pablohirafuji$elm_markdown$Markdown_Block$Paragraph = F2(
	function (a, b) {
		return {ctor: 'Paragraph', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$addToParagraph = F2(
	function (paragraph, rawLine) {
		return A2(
			_pablohirafuji$elm_markdown$Markdown_Block$Paragraph,
			A2(
				_elm_lang$core$Basics_ops['++'],
				paragraph,
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\n',
					_pablohirafuji$elm_markdown$Markdown_Block$formatParagraphLine(rawLine))),
			{ctor: '[]'});
	});
var _pablohirafuji$elm_markdown$Markdown_Block$maybeContinueParagraph = F2(
	function (rawLine, ast) {
		var _p29 = ast;
		_v21_3:
		do {
			if (_p29.ctor === '::') {
				switch (_p29._0.ctor) {
					case 'Paragraph':
						return _elm_lang$core$Maybe$Just(
							{
								ctor: '::',
								_0: A2(_pablohirafuji$elm_markdown$Markdown_Block$addToParagraph, _p29._0._0, rawLine),
								_1: _p29._1
							});
					case 'BlockQuote':
						return A2(
							_elm_lang$core$Maybe$map,
							function (updtBqAST) {
								return {
									ctor: '::',
									_0: _pablohirafuji$elm_markdown$Markdown_Block$BlockQuote(updtBqAST),
									_1: _p29._1
								};
							},
							A2(_pablohirafuji$elm_markdown$Markdown_Block$maybeContinueParagraph, rawLine, _p29._0._0));
					case 'List':
						var _p30 = _p29._0._1;
						if (_p30.ctor === '::') {
							return A2(
								_elm_lang$core$Maybe$map,
								function (_p31) {
									return A3(
										_elm_lang$core$Basics$flip,
										F2(
											function (x, y) {
												return {ctor: '::', _0: x, _1: y};
											}),
										_p29._1,
										A2(
											_pablohirafuji$elm_markdown$Markdown_Block$List,
											_p29._0._0,
											A3(
												_elm_lang$core$Basics$flip,
												F2(
													function (x, y) {
														return {ctor: '::', _0: x, _1: y};
													}),
												_p30._1,
												_p31)));
								},
								A2(_pablohirafuji$elm_markdown$Markdown_Block$maybeContinueParagraph, rawLine, _p30._0));
						} else {
							return _elm_lang$core$Maybe$Nothing;
						}
					default:
						break _v21_3;
				}
			} else {
				break _v21_3;
			}
		} while(false);
		return _elm_lang$core$Maybe$Nothing;
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseTextLine = F2(
	function (rawLine, ast) {
		return A2(
			_elm_lang$core$Maybe$withDefault,
			{
				ctor: '::',
				_0: A2(
					_pablohirafuji$elm_markdown$Markdown_Block$Paragraph,
					_pablohirafuji$elm_markdown$Markdown_Block$formatParagraphLine(rawLine),
					{ctor: '[]'}),
				_1: ast
			},
			A2(_pablohirafuji$elm_markdown$Markdown_Block$maybeContinueParagraph, rawLine, ast));
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseReferencesHelp = F2(
	function (block, _p32) {
		var _p33 = _p32;
		var _p41 = _p33._0;
		var _p40 = _p33._1;
		var _p34 = block;
		switch (_p34.ctor) {
			case 'Paragraph':
				var _p35 = A2(_pablohirafuji$elm_markdown$Markdown_Block$parseReference, _elm_lang$core$Dict$empty, _p34._0);
				var paragraphRefs = _p35._0;
				var maybeUpdtText = _p35._1;
				var updtRefs = A2(_elm_lang$core$Dict$union, paragraphRefs, _p41);
				var _p36 = maybeUpdtText;
				if (_p36.ctor === 'Just') {
					return {
						ctor: '_Tuple2',
						_0: updtRefs,
						_1: {
							ctor: '::',
							_0: A2(
								_pablohirafuji$elm_markdown$Markdown_Block$Paragraph,
								_p36._0,
								{ctor: '[]'}),
							_1: _p40
						}
					};
				} else {
					return {ctor: '_Tuple2', _0: updtRefs, _1: _p40};
				}
			case 'List':
				var _p37 = A3(
					_elm_lang$core$List$foldl,
					F2(
						function (item, _p38) {
							var _p39 = _p38;
							return A2(
								_elm_lang$core$Tuple$mapSecond,
								A2(
									_elm_lang$core$Basics$flip,
									F2(
										function (x, y) {
											return {ctor: '::', _0: x, _1: y};
										}),
									_p39._1),
								A2(_pablohirafuji$elm_markdown$Markdown_Block$parseReferences, _p39._0, item));
						}),
					{
						ctor: '_Tuple2',
						_0: _p41,
						_1: {ctor: '[]'}
					},
					_p34._1);
				var updtRefs = _p37._0;
				var updtItems = _p37._1;
				return {
					ctor: '_Tuple2',
					_0: updtRefs,
					_1: {
						ctor: '::',
						_0: A2(_pablohirafuji$elm_markdown$Markdown_Block$List, _p34._0, updtItems),
						_1: _p40
					}
				};
			case 'BlockQuote':
				return A2(
					_elm_lang$core$Tuple$mapSecond,
					A2(
						_elm_lang$core$Basics$flip,
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						_p40),
					A2(
						_elm_lang$core$Tuple$mapSecond,
						_pablohirafuji$elm_markdown$Markdown_Block$BlockQuote,
						A2(_pablohirafuji$elm_markdown$Markdown_Block$parseReferences, _p41, _p34._0)));
			case 'Custom':
				return A2(
					_elm_lang$core$Tuple$mapSecond,
					A2(
						_elm_lang$core$Basics$flip,
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						_p40),
					A2(
						_elm_lang$core$Tuple$mapSecond,
						_pablohirafuji$elm_markdown$Markdown_Block$Custom(_p34._0),
						A2(_pablohirafuji$elm_markdown$Markdown_Block$parseReferences, _p41, _p34._1)));
			default:
				return {
					ctor: '_Tuple2',
					_0: _p41,
					_1: {ctor: '::', _0: block, _1: _p40}
				};
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseReferences = function (refs) {
	return A2(
		_elm_lang$core$List$foldl,
		_pablohirafuji$elm_markdown$Markdown_Block$parseReferencesHelp,
		{
			ctor: '_Tuple2',
			_0: refs,
			_1: {ctor: '[]'}
		});
};
var _pablohirafuji$elm_markdown$Markdown_Block$CodeBlock = F2(
	function (a, b) {
		return {ctor: 'CodeBlock', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$Heading = F3(
	function (a, b, c) {
		return {ctor: 'Heading', _0: a, _1: b, _2: c};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$extractATXHeadingRM = function (match) {
	var _p42 = match.submatches;
	if ((((_p42.ctor === '::') && (_p42._0.ctor === 'Just')) && (_p42._1.ctor === '::')) && (_p42._1._0.ctor === 'Just')) {
		return _elm_lang$core$Maybe$Just(
			A3(
				_pablohirafuji$elm_markdown$Markdown_Block$Heading,
				_p42._1._0._0,
				_elm_lang$core$String$length(_p42._0._0),
				{ctor: '[]'}));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_Block$checkATXHeadingLine = function (_p43) {
	var _p44 = _p43;
	var _p46 = _p44._0;
	var _p45 = _p44._1;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{ctor: '_Tuple2', _0: _p46, _1: _p45},
		A2(
			_elm_lang$core$Maybe$map,
			A2(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p45),
			A2(
				_elm_lang$core$Maybe$andThen,
				_pablohirafuji$elm_markdown$Markdown_Block$extractATXHeadingRM,
				_elm_lang$core$List$head(
					A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_pablohirafuji$elm_markdown$Markdown_Block$atxHeadingLineRegex,
						_p46)))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$parseSetextHeadingLine = F3(
	function (rawLine, ast, _p47) {
		var _p48 = _p47;
		var _p49 = ast;
		if ((_p49.ctor === '::') && (_p49._0.ctor === 'Paragraph')) {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: A3(
						_pablohirafuji$elm_markdown$Markdown_Block$Heading,
						_p49._0._0,
						_p48._0,
						{ctor: '[]'}),
					_1: _p49._1
				});
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$checkSetextHeadingLine = function (_p50) {
	var _p51 = _p50;
	var _p53 = _p51._0;
	var _p52 = _p51._1;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{ctor: '_Tuple2', _0: _p53, _1: _p52},
		A2(
			_elm_lang$core$Maybe$andThen,
			A2(_pablohirafuji$elm_markdown$Markdown_Block$parseSetextHeadingLine, _p53, _p52),
			A2(
				_elm_lang$core$Maybe$andThen,
				_pablohirafuji$elm_markdown$Markdown_Block$extractSetextHeadingRM,
				_elm_lang$core$List$head(
					A3(
						_elm_lang$core$Regex$find,
						_elm_lang$core$Regex$AtMost(1),
						_pablohirafuji$elm_markdown$Markdown_Block$setextHeadingLineRegex,
						_p53)))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$parseInline = F4(
	function (maybeOptions, textAsParagraph, refs, block) {
		var options = A2(_elm_lang$core$Maybe$withDefault, _pablohirafuji$elm_markdown$Markdown_Config$defaultOptions, maybeOptions);
		var _p54 = block;
		switch (_p54.ctor) {
			case 'Heading':
				var _p55 = _p54._0;
				return A3(
					_pablohirafuji$elm_markdown$Markdown_Block$Heading,
					_p55,
					_p54._1,
					A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$parse, options, refs, _p55));
			case 'Paragraph':
				var _p57 = _p54._0;
				var inlines = A3(_pablohirafuji$elm_markdown$Markdown_InlineParser$parse, options, refs, _p57);
				var _p56 = inlines;
				if (((_p56.ctor === '::') && (_p56._0.ctor === 'HtmlInline')) && (_p56._1.ctor === '[]')) {
					return _pablohirafuji$elm_markdown$Markdown_Block$PlainInlines(inlines);
				} else {
					return textAsParagraph ? A2(_pablohirafuji$elm_markdown$Markdown_Block$Paragraph, _p57, inlines) : _pablohirafuji$elm_markdown$Markdown_Block$PlainInlines(inlines);
				}
			case 'BlockQuote':
				return _pablohirafuji$elm_markdown$Markdown_Block$BlockQuote(
					A3(
						_pablohirafuji$elm_markdown$Markdown_Block$parseInlines,
						maybeOptions,
						true,
						{ctor: '_Tuple2', _0: refs, _1: _p54._0}));
			case 'List':
				var _p59 = _p54._0;
				return A2(
					_pablohirafuji$elm_markdown$Markdown_Block$List,
					_p59,
					A3(
						_elm_lang$core$Basics$flip,
						_elm_lang$core$List$map,
						_p54._1,
						function (_p58) {
							return A3(
								_pablohirafuji$elm_markdown$Markdown_Block$parseInlines,
								maybeOptions,
								_p59.isLoose,
								A2(
									F2(
										function (v0, v1) {
											return {ctor: '_Tuple2', _0: v0, _1: v1};
										}),
									refs,
									_p58));
						}));
			case 'Custom':
				return A2(
					_pablohirafuji$elm_markdown$Markdown_Block$Custom,
					_p54._0,
					A3(
						_pablohirafuji$elm_markdown$Markdown_Block$parseInlines,
						maybeOptions,
						true,
						{ctor: '_Tuple2', _0: refs, _1: _p54._1}));
			default:
				return block;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseInlines = F3(
	function (maybeOptions, textAsParagraph, _p60) {
		var _p61 = _p60;
		return A2(
			_elm_lang$core$List$map,
			A3(_pablohirafuji$elm_markdown$Markdown_Block$parseInline, maybeOptions, textAsParagraph, _p61._0),
			_p61._1);
	});
var _pablohirafuji$elm_markdown$Markdown_Block$walkInlinesHelp = F2(
	function ($function, block) {
		var _p62 = block;
		switch (_p62.ctor) {
			case 'Paragraph':
				return A2(
					_pablohirafuji$elm_markdown$Markdown_Block$Paragraph,
					_p62._0,
					A2(
						_elm_lang$core$List$map,
						_pablohirafuji$elm_markdown$Markdown_InlineParser$walk($function),
						_p62._1));
			case 'Heading':
				return A3(
					_pablohirafuji$elm_markdown$Markdown_Block$Heading,
					_p62._0,
					_p62._1,
					A2(
						_elm_lang$core$List$map,
						_pablohirafuji$elm_markdown$Markdown_InlineParser$walk($function),
						_p62._2));
			case 'PlainInlines':
				return _pablohirafuji$elm_markdown$Markdown_Block$PlainInlines(
					A2(
						_elm_lang$core$List$map,
						_pablohirafuji$elm_markdown$Markdown_InlineParser$walk($function),
						_p62._0));
			default:
				return block;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$walkInlines = F2(
	function ($function, block) {
		return A2(
			_pablohirafuji$elm_markdown$Markdown_Block$walk,
			_pablohirafuji$elm_markdown$Markdown_Block$walkInlinesHelp($function),
			block);
	});
var _pablohirafuji$elm_markdown$Markdown_Block$ThematicBreak = {ctor: 'ThematicBreak'};
var _pablohirafuji$elm_markdown$Markdown_Block$checkThematicBreakLine = function (_p63) {
	var _p64 = _p63;
	var _p67 = _p64._0;
	var _p66 = _p64._1;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{ctor: '_Tuple2', _0: _p67, _1: _p66},
		A2(
			_elm_lang$core$Maybe$map,
			function (_p65) {
				return {ctor: '::', _0: _pablohirafuji$elm_markdown$Markdown_Block$ThematicBreak, _1: _p66};
			},
			_elm_lang$core$List$head(
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_pablohirafuji$elm_markdown$Markdown_Block$thematicBreakLineRegex,
					_p67))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$BlankLine = function (a) {
	return {ctor: 'BlankLine', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_Block$Fenced = F2(
	function (a, b) {
		return {ctor: 'Fenced', _0: a, _1: b};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseBlankLine = F2(
	function (ast, match) {
		var _p68 = ast;
		_v37_2:
		do {
			if (_p68.ctor === '::') {
				switch (_p68._0.ctor) {
					case 'CodeBlock':
						if ((_p68._0._0.ctor === 'Fenced') && (_p68._0._0._0 === true)) {
							return A3(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								_p68._1,
								A2(
									_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock,
									A2(_pablohirafuji$elm_markdown$Markdown_Block$Fenced, true, _p68._0._0._1),
									A2(_elm_lang$core$Basics_ops['++'], _p68._0._1, '\n')));
						} else {
							break _v37_2;
						}
					case 'List':
						return {
							ctor: '::',
							_0: A2(
								_pablohirafuji$elm_markdown$Markdown_Block$List,
								_p68._0._0,
								A2(_pablohirafuji$elm_markdown$Markdown_Block$addBlankLineToListBlock, match, _p68._0._1)),
							_1: _p68._1
						};
					default:
						break _v37_2;
				}
			} else {
				break _v37_2;
			}
		} while(false);
		return {
			ctor: '::',
			_0: _pablohirafuji$elm_markdown$Markdown_Block$BlankLine(match.match),
			_1: ast
		};
	});
var _pablohirafuji$elm_markdown$Markdown_Block$addBlankLineToListBlock = F2(
	function (match, asts) {
		var _p69 = asts;
		if (_p69.ctor === '[]') {
			return {
				ctor: '::',
				_0: {
					ctor: '::',
					_0: _pablohirafuji$elm_markdown$Markdown_Block$BlankLine(match.match),
					_1: {ctor: '[]'}
				},
				_1: {ctor: '[]'}
			};
		} else {
			return {
				ctor: '::',
				_0: A2(_pablohirafuji$elm_markdown$Markdown_Block$parseBlankLine, _p69._0, match),
				_1: _p69._1
			};
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$checkBlankLine = function (_p70) {
	var _p71 = _p70;
	var _p73 = _p71._0;
	var _p72 = _p71._1;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{ctor: '_Tuple2', _0: _p73, _1: _p72},
		A2(
			_elm_lang$core$Maybe$map,
			_pablohirafuji$elm_markdown$Markdown_Block$parseBlankLine(_p72),
			_elm_lang$core$List$head(
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_pablohirafuji$elm_markdown$Markdown_Block$blankLineRegex,
					_p73))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$extractOpenCodeFenceRM = function (match) {
	var _p74 = match.submatches;
	if ((((((_p74.ctor === '::') && (_p74._0.ctor === 'Just')) && (_p74._1.ctor === '::')) && (_p74._1._0.ctor === 'Just')) && (_p74._1._1.ctor === '::')) && (_p74._1._1._0.ctor === 'Just')) {
		var _p75 = _p74._1._0._0;
		return _elm_lang$core$Maybe$Just(
			A2(
				_pablohirafuji$elm_markdown$Markdown_Block$Fenced,
				true,
				{
					indentLength: _elm_lang$core$String$length(_p74._0._0),
					fenceLength: _elm_lang$core$String$length(_p75),
					fenceChar: A2(_elm_lang$core$String$left, 1, _p75),
					language: A2(
						_elm_lang$core$Maybe$map,
						_pablohirafuji$elm_markdown$Markdown_Helpers$formatStr,
						A2(
							_elm_lang$core$Maybe$andThen,
							function (lang) {
								return _elm_lang$core$Native_Utils.eq(lang, '') ? _elm_lang$core$Maybe$Nothing : _elm_lang$core$Maybe$Just(lang);
							},
							_elm_lang$core$List$head(
								_elm_lang$core$String$words(_p74._1._1._0._0))))
				}));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_Block$checkOpenCodeFenceLine = function (_p76) {
	var _p77 = _p76;
	var _p79 = _p77._0;
	var _p78 = _p77._1;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{ctor: '_Tuple2', _0: _p79, _1: _p78},
		A2(
			_elm_lang$core$Maybe$map,
			A2(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p78),
			A2(
				_elm_lang$core$Maybe$map,
				function (f) {
					return A2(_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock, f, '');
				},
				A2(
					_elm_lang$core$Maybe$andThen,
					_pablohirafuji$elm_markdown$Markdown_Block$extractOpenCodeFenceRM,
					_elm_lang$core$List$head(
						A3(
							_elm_lang$core$Regex$find,
							_elm_lang$core$Regex$AtMost(1),
							_pablohirafuji$elm_markdown$Markdown_Block$openCodeFenceLineRegex,
							_p79))))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$continueOrCloseCodeFence = F3(
	function (fence, previousCode, rawLine) {
		return A2(_pablohirafuji$elm_markdown$Markdown_Block$isCloseFenceLine, fence, rawLine) ? A2(
			_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock,
			A2(_pablohirafuji$elm_markdown$Markdown_Block$Fenced, false, fence),
			previousCode) : A2(
			_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock,
			A2(_pablohirafuji$elm_markdown$Markdown_Block$Fenced, true, fence),
			A2(
				_elm_lang$core$Basics_ops['++'],
				previousCode,
				A2(
					_elm_lang$core$Basics_ops['++'],
					A2(_pablohirafuji$elm_markdown$Markdown_Helpers$indentLine, fence.indentLength, rawLine),
					'\n')));
	});
var _pablohirafuji$elm_markdown$Markdown_Block$Indented = {ctor: 'Indented'};
var _pablohirafuji$elm_markdown$Markdown_Block$resumeIndentedCodeBlock = F2(
	function (codeLine, _p80) {
		var _p81 = _p80;
		var _p82 = _p81._0;
		if (((_p82.ctor === '::') && (_p82._0.ctor === 'CodeBlock')) && (_p82._0._0.ctor === 'Indented')) {
			return _elm_lang$core$Maybe$Just(
				A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					_p82._1,
					A2(
						_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock,
						_pablohirafuji$elm_markdown$Markdown_Block$Indented,
						A3(
							_elm_lang$core$Basics$flip,
							F2(
								function (x, y) {
									return A2(_elm_lang$core$Basics_ops['++'], x, y);
								}),
							A2(_elm_lang$core$Basics_ops['++'], codeLine, '\n'),
							A2(
								F2(
									function (x, y) {
										return A2(_elm_lang$core$Basics_ops['++'], x, y);
									}),
								_p82._0._1,
								_elm_lang$core$String$concat(
									A2(
										_elm_lang$core$List$map,
										function (bl) {
											return A2(
												_elm_lang$core$Basics_ops['++'],
												A2(_pablohirafuji$elm_markdown$Markdown_Helpers$indentLine, 4, bl),
												'\n');
										},
										_p81._1)))))));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseIndentedCodeLine = F2(
	function (ast, codeLine) {
		var _p83 = ast;
		_v44_2:
		do {
			if (_p83.ctor === '::') {
				switch (_p83._0.ctor) {
					case 'CodeBlock':
						if (_p83._0._0.ctor === 'Indented') {
							return A3(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								_p83._1,
								A2(
									_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock,
									_pablohirafuji$elm_markdown$Markdown_Block$Indented,
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p83._0._1,
										A2(_elm_lang$core$Basics_ops['++'], codeLine, '\n'))));
						} else {
							break _v44_2;
						}
					case 'BlankLine':
						return A2(
							_elm_lang$core$Maybe$withDefault,
							A3(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								ast,
								A2(
									_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock,
									_pablohirafuji$elm_markdown$Markdown_Block$Indented,
									A2(_elm_lang$core$Basics_ops['++'], codeLine, '\n'))),
							A2(
								_pablohirafuji$elm_markdown$Markdown_Block$resumeIndentedCodeBlock,
								codeLine,
								A2(
									_pablohirafuji$elm_markdown$Markdown_Block$blocksAfterBlankLines,
									_p83._1,
									{
										ctor: '::',
										_0: _p83._0._0,
										_1: {ctor: '[]'}
									})));
					default:
						break _v44_2;
				}
			} else {
				break _v44_2;
			}
		} while(false);
		return A2(
			_elm_lang$core$Maybe$withDefault,
			A3(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ast,
				A2(
					_pablohirafuji$elm_markdown$Markdown_Block$CodeBlock,
					_pablohirafuji$elm_markdown$Markdown_Block$Indented,
					A2(_elm_lang$core$Basics_ops['++'], codeLine, '\n'))),
			A2(_pablohirafuji$elm_markdown$Markdown_Block$maybeContinueParagraph, codeLine, ast));
	});
var _pablohirafuji$elm_markdown$Markdown_Block$checkIndentedCode = function (_p84) {
	var _p85 = _p84;
	var _p88 = _p85._0;
	var _p87 = _p85._1;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{ctor: '_Tuple2', _0: _p88, _1: _p87},
		A2(
			_elm_lang$core$Maybe$map,
			_pablohirafuji$elm_markdown$Markdown_Block$parseIndentedCodeLine(_p87),
			A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Maybe$Nothing,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Maybe$Nothing,
					A2(
						_elm_lang$core$Maybe$map,
						function (_p86) {
							return _elm_lang$core$List$head(
								function (_) {
									return _.submatches;
								}(_p86));
						},
						_elm_lang$core$List$head(
							A3(
								_elm_lang$core$Regex$find,
								_elm_lang$core$Regex$AtMost(1),
								_pablohirafuji$elm_markdown$Markdown_Block$indentedCodeLineRegex,
								_p88)))))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$Ordered = function (a) {
	return {ctor: 'Ordered', _0: a};
};
var _pablohirafuji$elm_markdown$Markdown_Block$Unordered = {ctor: 'Unordered'};
var _pablohirafuji$elm_markdown$Markdown_Block$extractOrderedListRM = function (match) {
	var _p89 = match.submatches;
	if (((((((((_p89.ctor === '::') && (_p89._0.ctor === 'Just')) && (_p89._1.ctor === '::')) && (_p89._1._0.ctor === 'Just')) && (_p89._1._1.ctor === '::')) && (_p89._1._1._0.ctor === 'Just')) && (_p89._1._1._1.ctor === '::')) && (_p89._1._1._1._0.ctor === 'Just')) && (_p89._1._1._1._1.ctor === '::')) {
		return _elm_lang$core$Maybe$Just(
			{
				ctor: '_Tuple3',
				_0: {
					type_: A2(
						_elm_lang$core$Result$withDefault,
						_pablohirafuji$elm_markdown$Markdown_Block$Unordered,
						A2(
							_elm_lang$core$Result$map,
							_pablohirafuji$elm_markdown$Markdown_Block$Ordered,
							_elm_lang$core$String$toInt(_p89._1._0._0))),
					indentLength: _elm_lang$core$String$length(_p89._0._0) + 1,
					delimiter: _p89._1._1._0._0,
					isLoose: false
				},
				_1: _p89._1._1._1._0._0,
				_2: A2(_elm_lang$core$Maybe$withDefault, '', _p89._1._1._1._1._0)
			});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_Block$checkOrderedListLine = function (rawLine) {
	return A2(
		_elm_lang$core$Result$fromMaybe,
		rawLine,
		A2(
			_elm_lang$core$Maybe$andThen,
			_pablohirafuji$elm_markdown$Markdown_Block$extractOrderedListRM,
			_elm_lang$core$List$head(
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_pablohirafuji$elm_markdown$Markdown_Block$orderedListLineRegex,
					rawLine))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$extractUnorderedListRM = function (match) {
	var _p90 = match.submatches;
	if ((((((((_p90.ctor === '::') && (_p90._0.ctor === 'Just')) && (_p90._1.ctor === '::')) && (_p90._1._0.ctor === 'Just')) && (_p90._1._1.ctor === '::')) && (_p90._1._1._0.ctor === 'Just')) && (_p90._1._1._1.ctor === '::')) && (_p90._1._1._1._1.ctor === '[]')) {
		return _elm_lang$core$Maybe$Just(
			{
				ctor: '_Tuple3',
				_0: {
					type_: _pablohirafuji$elm_markdown$Markdown_Block$Unordered,
					indentLength: _elm_lang$core$String$length(_p90._0._0) + 1,
					delimiter: _p90._1._0._0,
					isLoose: false
				},
				_1: _p90._1._1._0._0,
				_2: A2(_elm_lang$core$Maybe$withDefault, '', _p90._1._1._1._0)
			});
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _pablohirafuji$elm_markdown$Markdown_Block$checkUnorderedListLine = function (rawLine) {
	return A2(
		_elm_lang$core$Result$fromMaybe,
		rawLine,
		A2(
			_elm_lang$core$Maybe$andThen,
			_pablohirafuji$elm_markdown$Markdown_Block$extractUnorderedListRM,
			_elm_lang$core$List$head(
				A3(
					_elm_lang$core$Regex$find,
					_elm_lang$core$Regex$AtMost(1),
					_pablohirafuji$elm_markdown$Markdown_Block$unorderedListLineRegex,
					rawLine))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$checkListLine = function (_p91) {
	var _p92 = _p91;
	var _p94 = _p92._0;
	var _p93 = _p92._1;
	return A2(
		_elm_lang$core$Result$mapError,
		A2(
			_elm_lang$core$Basics$flip,
			F2(
				function (v0, v1) {
					return {ctor: '_Tuple2', _0: v0, _1: v1};
				}),
			_p93),
		A2(
			_elm_lang$core$Result$map,
			A2(_pablohirafuji$elm_markdown$Markdown_Block$parseListLine, _p94, _p93),
			A2(
				_elm_lang$core$Result$map,
				_pablohirafuji$elm_markdown$Markdown_Block$calcListIndentLength,
				A2(
					_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
					_pablohirafuji$elm_markdown$Markdown_Block$checkUnorderedListLine,
					_pablohirafuji$elm_markdown$Markdown_Block$checkOrderedListLine(_p94)))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$parseListLine = F3(
	function (rawLine, ast, _p95) {
		var _p96 = _p95;
		var _p104 = _p96._0;
		var parsedRawLine = A2(
			_pablohirafuji$elm_markdown$Markdown_Block$incorporateLine,
			_p96._1,
			{ctor: '[]'});
		var newList = {
			ctor: '::',
			_0: A2(
				_pablohirafuji$elm_markdown$Markdown_Block$List,
				_p104,
				{
					ctor: '::',
					_0: parsedRawLine,
					_1: {ctor: '[]'}
				}),
			_1: ast
		};
		var _p97 = ast;
		_v50_2:
		do {
			if (_p97.ctor === '::') {
				switch (_p97._0.ctor) {
					case 'List':
						var _p99 = _p97._0._0;
						var _p98 = _p97._0._1;
						return _elm_lang$core$Native_Utils.eq(_p104.delimiter, _p99.delimiter) ? A3(
							_elm_lang$core$Basics$flip,
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								}),
							_p97._1,
							A2(
								_pablohirafuji$elm_markdown$Markdown_Block$List,
								_elm_lang$core$Native_Utils.update(
									_p99,
									{
										indentLength: _p104.indentLength,
										isLoose: _p99.isLoose || _pablohirafuji$elm_markdown$Markdown_Block$isBlankLineLast(_p98)
									}),
								{ctor: '::', _0: parsedRawLine, _1: _p98})) : newList;
					case 'Paragraph':
						var _p103 = _p97._0._0;
						var _p102 = _p97._1;
						var _p100 = parsedRawLine;
						if (((_p100.ctor === '::') && (_p100._0.ctor === 'BlankLine')) && (_p100._1.ctor === '[]')) {
							return {
								ctor: '::',
								_0: A2(_pablohirafuji$elm_markdown$Markdown_Block$addToParagraph, _p103, rawLine),
								_1: _p102
							};
						} else {
							var _p101 = _p104.type_;
							if (_p101.ctor === 'Ordered') {
								if (_p101._0 === 1) {
									return newList;
								} else {
									return {
										ctor: '::',
										_0: A2(_pablohirafuji$elm_markdown$Markdown_Block$addToParagraph, _p103, rawLine),
										_1: _p102
									};
								}
							} else {
								return newList;
							}
						}
					default:
						break _v50_2;
				}
			} else {
				break _v50_2;
			}
		} while(false);
		return newList;
	});
var _pablohirafuji$elm_markdown$Markdown_Block$incorporateLine = F2(
	function (rawLine, ast) {
		var _p105 = ast;
		_v53_2:
		do {
			if (_p105.ctor === '::') {
				switch (_p105._0.ctor) {
					case 'CodeBlock':
						if ((_p105._0._0.ctor === 'Fenced') && (_p105._0._0._0 === true)) {
							return A3(
								_elm_lang$core$Basics$flip,
								F2(
									function (x, y) {
										return {ctor: '::', _0: x, _1: y};
									}),
								_p105._1,
								A3(_pablohirafuji$elm_markdown$Markdown_Block$continueOrCloseCodeFence, _p105._0._0._1, _p105._0._1, rawLine));
						} else {
							break _v53_2;
						}
					case 'List':
						var _p106 = _p105._0._0;
						return (_elm_lang$core$Native_Utils.cmp(
							_pablohirafuji$elm_markdown$Markdown_Helpers$indentLength(rawLine),
							_p106.indentLength) > -1) ? A5(_pablohirafuji$elm_markdown$Markdown_Block$parseIndentedListLine, rawLine, _p106, _p105._0._1, ast, _p105._1) : A2(
							_elm_lang$core$Result$withDefault,
							A2(_pablohirafuji$elm_markdown$Markdown_Block$parseTextLine, rawLine, ast),
							A2(
								_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
								_pablohirafuji$elm_markdown$Markdown_Block$checkBlockQuote,
								A2(
									_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
									_pablohirafuji$elm_markdown$Markdown_Block$checkATXHeadingLine,
									A2(
										_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
										_pablohirafuji$elm_markdown$Markdown_Block$checkSetextHeadingLine,
										A2(
											_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
											_pablohirafuji$elm_markdown$Markdown_Block$checkOpenCodeFenceLine,
											A2(
												_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
												_pablohirafuji$elm_markdown$Markdown_Block$checkIndentedCode,
												A2(
													_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
													_pablohirafuji$elm_markdown$Markdown_Block$checkBlankLine,
													A2(
														_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
														_pablohirafuji$elm_markdown$Markdown_Block$checkListLine,
														_pablohirafuji$elm_markdown$Markdown_Block$checkThematicBreakLine(
															{ctor: '_Tuple2', _0: rawLine, _1: ast})))))))));
					default:
						break _v53_2;
				}
			} else {
				break _v53_2;
			}
		} while(false);
		return A2(_pablohirafuji$elm_markdown$Markdown_Block$parseRawLine, rawLine, ast);
	});
var _pablohirafuji$elm_markdown$Markdown_Block$checkBlockQuote = function (_p107) {
	var _p108 = _p107;
	var _p111 = _p108._0;
	var _p110 = _p108._1;
	return A2(
		_elm_lang$core$Result$fromMaybe,
		{ctor: '_Tuple2', _0: _p111, _1: _p110},
		A2(
			_elm_lang$core$Maybe$map,
			_pablohirafuji$elm_markdown$Markdown_Block$parseBlockQuoteLine(_p110),
			A2(
				_elm_lang$core$Maybe$withDefault,
				_elm_lang$core$Maybe$Nothing,
				A2(
					_elm_lang$core$Maybe$withDefault,
					_elm_lang$core$Maybe$Nothing,
					A2(
						_elm_lang$core$Maybe$map,
						function (_p109) {
							return _elm_lang$core$List$head(
								function (_) {
									return _.submatches;
								}(_p109));
						},
						_elm_lang$core$List$head(
							A3(
								_elm_lang$core$Regex$find,
								_elm_lang$core$Regex$AtMost(1),
								_pablohirafuji$elm_markdown$Markdown_Block$blockQuoteLineRegex,
								_p111)))))));
};
var _pablohirafuji$elm_markdown$Markdown_Block$parseBlockQuoteLine = F2(
	function (ast, rawLine) {
		var _p112 = ast;
		if ((_p112.ctor === '::') && (_p112._0.ctor === 'BlockQuote')) {
			return A3(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				_p112._1,
				_pablohirafuji$elm_markdown$Markdown_Block$BlockQuote(
					A2(_pablohirafuji$elm_markdown$Markdown_Block$incorporateLine, rawLine, _p112._0._0)));
		} else {
			return A3(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ast,
				_pablohirafuji$elm_markdown$Markdown_Block$BlockQuote(
					A2(
						_pablohirafuji$elm_markdown$Markdown_Block$incorporateLine,
						rawLine,
						{ctor: '[]'})));
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseIndentedListLine = F5(
	function (rawLine, model, items, ast, astTail) {
		var _p113 = items;
		if (_p113.ctor === '[]') {
			return A3(
				_elm_lang$core$Basics$flip,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				astTail,
				A2(
					_pablohirafuji$elm_markdown$Markdown_Block$List,
					model,
					A3(
						_elm_lang$core$Basics$flip,
						F2(
							function (x, y) {
								return {ctor: '::', _0: x, _1: y};
							}),
						{ctor: '[]'},
						A3(
							_elm_lang$core$Basics$flip,
							_pablohirafuji$elm_markdown$Markdown_Block$incorporateLine,
							{ctor: '[]'},
							A2(_pablohirafuji$elm_markdown$Markdown_Helpers$indentLine, model.indentLength, rawLine)))));
		} else {
			var _p116 = _p113._0;
			var indentedRawLine = A2(_pablohirafuji$elm_markdown$Markdown_Helpers$indentLine, model.indentLength, rawLine);
			var updateList = function (model_) {
				return A3(
					_elm_lang$core$Basics$flip,
					F2(
						function (x, y) {
							return {ctor: '::', _0: x, _1: y};
						}),
					astTail,
					A2(
						_pablohirafuji$elm_markdown$Markdown_Block$List,
						model_,
						A3(
							_elm_lang$core$Basics$flip,
							F2(
								function (x, y) {
									return {ctor: '::', _0: x, _1: y};
								}),
							_p113._1,
							A2(_pablohirafuji$elm_markdown$Markdown_Block$incorporateLine, indentedRawLine, _p116))));
			};
			var _p114 = _p116;
			_v57_3:
			do {
				if (_p114.ctor === '::') {
					switch (_p114._0.ctor) {
						case 'BlankLine':
							if (_p114._1.ctor === '[]') {
								return updateList(model);
							} else {
								return A2(
									_elm_lang$core$List$all,
									function (block) {
										var _p115 = block;
										if (_p115.ctor === 'BlankLine') {
											return true;
										} else {
											return false;
										}
									},
									_p114._1) ? A2(_pablohirafuji$elm_markdown$Markdown_Block$parseRawLine, rawLine, ast) : updateList(
									_elm_lang$core$Native_Utils.update(
										model,
										{isLoose: true}));
							}
						case 'List':
							return (_elm_lang$core$Native_Utils.cmp(
								_pablohirafuji$elm_markdown$Markdown_Helpers$indentLength(indentedRawLine),
								_p114._0._0.indentLength) > -1) ? updateList(model) : (_pablohirafuji$elm_markdown$Markdown_Block$isBlankLineLast(_p114._0._1) ? updateList(
								_elm_lang$core$Native_Utils.update(
									model,
									{isLoose: true})) : updateList(model));
						default:
							break _v57_3;
					}
				} else {
					break _v57_3;
				}
			} while(false);
			return updateList(model);
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parseRawLine = F2(
	function (rawLine, ast) {
		return A2(
			_elm_lang$core$Result$withDefault,
			A2(_pablohirafuji$elm_markdown$Markdown_Block$parseTextLine, rawLine, ast),
			A2(
				_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
				_pablohirafuji$elm_markdown$Markdown_Block$checkListLine,
				A2(
					_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
					_pablohirafuji$elm_markdown$Markdown_Block$checkThematicBreakLine,
					A2(
						_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
						_pablohirafuji$elm_markdown$Markdown_Block$checkBlockQuote,
						A2(
							_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
							_pablohirafuji$elm_markdown$Markdown_Block$checkATXHeadingLine,
							A2(
								_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
								_pablohirafuji$elm_markdown$Markdown_Block$checkSetextHeadingLine,
								A2(
									_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
									_pablohirafuji$elm_markdown$Markdown_Block$checkOpenCodeFenceLine,
									A2(
										_pablohirafuji$elm_markdown$Markdown_Helpers$ifError,
										_pablohirafuji$elm_markdown$Markdown_Block$checkIndentedCode,
										_pablohirafuji$elm_markdown$Markdown_Block$checkBlankLine(
											{ctor: '_Tuple2', _0: rawLine, _1: ast})))))))));
	});
var _pablohirafuji$elm_markdown$Markdown_Block$incorporateLines = F2(
	function (rawLines, ast) {
		incorporateLines:
		while (true) {
			var _p117 = rawLines;
			if (_p117.ctor === '[]') {
				return ast;
			} else {
				var _v60 = _p117._1,
					_v61 = A2(_pablohirafuji$elm_markdown$Markdown_Block$incorporateLine, _p117._0, ast);
				rawLines = _v60;
				ast = _v61;
				continue incorporateLines;
			}
		}
	});
var _pablohirafuji$elm_markdown$Markdown_Block$parse = function (maybeOptions) {
	return function (_p118) {
		return A3(
			_pablohirafuji$elm_markdown$Markdown_Block$parseInlines,
			maybeOptions,
			true,
			A2(
				_pablohirafuji$elm_markdown$Markdown_Block$parseReferences,
				_elm_lang$core$Dict$empty,
				A3(
					_elm_lang$core$Basics$flip,
					_pablohirafuji$elm_markdown$Markdown_Block$incorporateLines,
					{ctor: '[]'},
					_elm_lang$core$String$lines(_p118))));
	};
};

var _pablohirafuji$elm_markdown$Markdown$toHtml = F2(
	function (maybeOptions, rawText) {
		return _elm_lang$core$List$concat(
			A2(
				_elm_lang$core$List$map,
				_pablohirafuji$elm_markdown$Markdown_Block$toHtml,
				A2(_pablohirafuji$elm_markdown$Markdown_Block$parse, maybeOptions, rawText)));
	});

var _Gizra$elm_spa_exmple$Utils_Html$sectionDivider = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('ui section divider'),
		_1: {ctor: '[]'}
	},
	{ctor: '[]'});
var _Gizra$elm_spa_exmple$Utils_Html$divider = A2(
	_elm_lang$html$Html$div,
	{
		ctor: '::',
		_0: _elm_lang$html$Html_Attributes$class('ui horizontal divider'),
		_1: {ctor: '[]'}
	},
	{ctor: '[]'});
var _Gizra$elm_spa_exmple$Utils_Html$emptyNode = _elm_lang$html$Html$text('');
var _Gizra$elm_spa_exmple$Utils_Html$showIf = F2(
	function (condition, html) {
		return condition ? html : _Gizra$elm_spa_exmple$Utils_Html$emptyNode;
	});
var _Gizra$elm_spa_exmple$Utils_Html$showMaybe = _elm_lang$core$Maybe$withDefault(_Gizra$elm_spa_exmple$Utils_Html$emptyNode);

var _Gizra$elm_spa_exmple$ItemComment_View$viewActions = F2(
	function (storageKeys, editableWebData) {
		var isLoading = _krisajenkins$remotedata$RemoteData$isLoading(
			_Gizra$elm_editable_webdata$Editable_WebData$toWebData(editableWebData));
		var itemComment = _stoeffel$editable$Editable$value(
			_Gizra$elm_editable_webdata$Editable_WebData$toEditable(editableWebData));
		var isDisabled = _elm_lang$core$String$isEmpty(itemComment.comment) || (!_krisajenkins$remotedata$RemoteData$isNotAsked(
			_Gizra$elm_editable_webdata$Editable_WebData$toWebData(editableWebData)));
		var attrs = isDisabled ? {
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$disabled(true),
			_1: {ctor: '[]'}
		} : {
			ctor: '::',
			_0: _elm_lang$html$Html_Events$onClick(
				_Gizra$elm_spa_exmple$ItemComment_Model$DelegatedSaveComment(storageKeys)),
			_1: {
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$action('javascript:void(0);'),
				_1: {ctor: '[]'}
			}
		};
		return A2(
			_elm_lang$html$Html$button,
			A2(
				_elm_lang$core$Basics_ops['++'],
				attrs,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'ui button primary', _1: true},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'loading', _1: isLoading},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'disabled', _1: isDisabled},
									_1: {ctor: '[]'}
								}
							}
						}),
					_1: {ctor: '[]'}
				}),
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text('Comment'),
				_1: {ctor: '[]'}
			});
	});
var _Gizra$elm_spa_exmple$ItemComment_View$viewPreview = function (editableWebData) {
	var itemComment = _stoeffel$editable$Editable$value(
		_Gizra$elm_editable_webdata$Editable_WebData$toEditable(editableWebData));
	return _elm_lang$core$String$isEmpty(itemComment.comment) ? A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text('Nothing to preview'),
			_1: {ctor: '[]'}
		}) : A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		A2(_pablohirafuji$elm_markdown$Markdown$toHtml, _elm_lang$core$Maybe$Nothing, itemComment.comment));
};
var _Gizra$elm_spa_exmple$ItemComment_View$viewEdit = F2(
	function (storageKeys, editableWebData) {
		var itemComment = _stoeffel$editable$Editable$value(
			_Gizra$elm_editable_webdata$Editable_WebData$toEditable(editableWebData));
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$class('field'),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$textarea,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$required(true),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$value(itemComment.comment),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Events$onInput(
									_Gizra$elm_spa_exmple$ItemComment_Model$SetComment(storageKeys)),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$rows(6),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$cols(60),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			});
	});
var _Gizra$elm_spa_exmple$ItemComment_View$viewTabs = function (selectedTab) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('ui secondary pointing menu'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$a,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$classList(
						{
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'item', _1: true},
							_1: {
								ctor: '::',
								_0: {
									ctor: '_Tuple2',
									_0: 'active',
									_1: _elm_lang$core$Native_Utils.eq(selectedTab, _Gizra$elm_spa_exmple$ItemComment_Model$Edit)
								},
								_1: {ctor: '[]'}
							}
						}),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Events$onClick(
							_Gizra$elm_spa_exmple$ItemComment_Model$SetTab(_Gizra$elm_spa_exmple$ItemComment_Model$Edit)),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Edit'),
					_1: {ctor: '[]'}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$a,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$classList(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'item', _1: true},
								_1: {
									ctor: '::',
									_0: {
										ctor: '_Tuple2',
										_0: 'active',
										_1: _elm_lang$core$Native_Utils.eq(selectedTab, _Gizra$elm_spa_exmple$ItemComment_Model$Preview)
									},
									_1: {ctor: '[]'}
								}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Events$onClick(
								_Gizra$elm_spa_exmple$ItemComment_Model$SetTab(_Gizra$elm_spa_exmple$ItemComment_Model$Preview)),
							_1: {ctor: '[]'}
						}
					},
					{
						ctor: '::',
						_0: _elm_lang$html$Html$text('Preview'),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			}
		});
};
var _Gizra$elm_spa_exmple$ItemComment_View$viewItemComment = F2(
	function (currentUser, _p0) {
		var _p1 = _p0;
		var _p4 = _p1._0;
		if (_Gizra$elm_storage_key$StorageKey$isNew(_p4)) {
			return _Gizra$elm_spa_exmple$Utils_Html$emptyNode;
		} else {
			var itemComment = _stoeffel$editable$Editable$value(
				_Gizra$elm_editable_webdata$Editable_WebData$toEditable(_p1._1));
			var _p2 = itemComment.user;
			var authorId = _p2._0;
			var author = _p2._1;
			var itemCommentId = A2(
				_elm_lang$core$Maybe$withDefault,
				'',
				A2(
					_elm_lang$core$Maybe$map,
					function (_p3) {
						return _elm_lang$core$Basics$toString(
							_Gizra$elm_spa_exmple$Backend_Restful$fromEntityId(_p3));
					},
					_Gizra$elm_storage_key$StorageKey$value(_p4)));
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$id(
						A2(_elm_lang$core$Basics_ops['++'], 'comment-', itemCommentId)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$class('comment'),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$a,
						{
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$class('avatar'),
							_1: {ctor: '[]'}
						},
						{
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$img,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$src('https://dummyimage.com/80x80/000/fff&text=Avatar'),
									_1: {ctor: '[]'}
								},
								{ctor: '[]'}),
							_1: {ctor: '[]'}
						}),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$class('content'),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: A2(
									_elm_lang$html$Html$div,
									{
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$class('author'),
										_1: {ctor: '[]'}
									},
									{
										ctor: '::',
										_0: _elm_lang$html$Html$text(author.name),
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$div,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$class('text'),
											_1: {ctor: '[]'}
										},
										A2(_pablohirafuji$elm_markdown$Markdown$toHtml, _elm_lang$core$Maybe$Nothing, itemComment.comment)),
									_1: {ctor: '[]'}
								}
							}),
						_1: {ctor: '[]'}
					}
				});
		}
	});
var _Gizra$elm_spa_exmple$ItemComment_View$viewItemComments = F2(
	function (currentUser, comments) {
		return A2(
			_Gizra$elm_spa_exmple$Utils_Html$showIf,
			!_Gizra$elm_dictlist$EveryDictList$isEmpty(comments),
			A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('ui comments'),
					_1: {ctor: '[]'}
				},
				A2(
					_elm_lang$core$List$map,
					_Gizra$elm_spa_exmple$ItemComment_View$viewItemComment(currentUser),
					_Gizra$elm_dictlist$EveryDictList$toList(comments))));
	});
var _Gizra$elm_spa_exmple$ItemComment_View$view = F5(
	function (backendUrl, currentUser, _p5, commentStorageKey, model) {
		var _p6 = _p5;
		var _p11 = _p6._0;
		var _p7 = currentUser;
		if (_p7.ctor === 'Anonymous') {
			return _Gizra$elm_spa_exmple$Utils_Html$emptyNode;
		} else {
			var _p8 = A2(_Gizra$elm_dictlist$EveryDictList$get, commentStorageKey, _p6._1.comments);
			if (_p8.ctor === 'Nothing') {
				return _Gizra$elm_spa_exmple$Utils_Html$emptyNode;
			} else {
				var _p10 = _p8._0;
				var mainArea = function () {
					var _p9 = model.selectedTab;
					if (_p9.ctor === 'Edit') {
						return A2(
							_Gizra$elm_spa_exmple$ItemComment_View$viewEdit,
							{ctor: '_Tuple2', _0: _p11, _1: commentStorageKey},
							_p10);
					} else {
						return _Gizra$elm_spa_exmple$ItemComment_View$viewPreview(_p10);
					}
				}();
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: _Gizra$elm_spa_exmple$ItemComment_View$viewTabs(model.selectedTab),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$form,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$class('ui form comment'),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$action('javascript:void(0);'),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: mainArea,
									_1: {
										ctor: '::',
										_0: A2(
											_Gizra$elm_spa_exmple$ItemComment_View$viewActions,
											{ctor: '_Tuple2', _0: _p11, _1: commentStorageKey},
											_p10),
										_1: {ctor: '[]'}
									}
								}),
							_1: {ctor: '[]'}
						}
					});
			}
		}
	});

var _Gizra$elm_spa_exmple$Pages_Item_View$viewPdfPath = F2(
	function (_p0, item) {
		var _p1 = _p0;
		var _p3 = _p1._0;
		return A2(
			_elm_lang$html$Html$div,
			{ctor: '[]'},
			{
				ctor: '::',
				_0: function () {
					var _p2 = item.pdfPath;
					if (_p2.ctor === 'Nothing') {
						return A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$href(
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p3,
										A2(_elm_lang$core$Basics_ops['++'], '/', 'auth/login'))),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Login to Download PDF'),
								_1: {ctor: '[]'}
							});
					} else {
						return A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$href(
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p3,
										A2(_elm_lang$core$Basics_ops['++'], '/', _p2._0._0))),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text('Download PDF'),
								_1: {ctor: '[]'}
							});
					}
				}(),
				_1: {ctor: '[]'}
			});
	});
var _Gizra$elm_spa_exmple$Pages_Item_View$viewCompany = F2(
	function (_p4, item) {
		var _p5 = _p4;
		return A3(
			_elm_community$maybe_extra$Maybe_Extra$unwrap,
			_Gizra$elm_spa_exmple$Utils_Html$emptyNode,
			function (company) {
				var companyId = A2(
					_elm_lang$core$Maybe$withDefault,
					'',
					A2(
						_elm_lang$core$Maybe$map,
						function (_p6) {
							return _elm_lang$core$Basics$toString(
								_Gizra$elm_spa_exmple$Backend_Restful$fromEntityId(_p6));
						},
						_Gizra$elm_storage_key$StorageKey$value(company.id)));
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$a,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$href(
									A2(
										_elm_lang$core$Basics_ops['++'],
										_p5._0,
										A2(_elm_lang$core$Basics_ops['++'], '/company/', companyId))),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(company.name),
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					});
			},
			item.company);
	});
var _Gizra$elm_spa_exmple$Pages_Item_View$viewPrice = function (item) {
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$class('ui huge labels'),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('ui label'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(_Gizra$elm_spa_exmple$Amount$showAmountWithCurrency, item.price, _Gizra$elm_spa_exmple$Currency_Model$USD),
					_1: {ctor: '[]'}
				}),
			_1: {ctor: '[]'}
		});
};
var _Gizra$elm_spa_exmple$Pages_Item_View$view = F5(
	function (backendUrl, currentUser, items, itemStorageKey, model) {
		return A3(
			_elm_community$maybe_extra$Maybe_Extra$unwrap,
			_Gizra$elm_spa_exmple$Utils_Html$emptyNode,
			function (item) {
				return A2(
					_elm_lang$html$Html$div,
					{ctor: '[]'},
					{
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$h1,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(item.name),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(_Gizra$elm_spa_exmple$Pages_Item_View$viewCompany, backendUrl, item),
							_1: {
								ctor: '::',
								_0: _Gizra$elm_spa_exmple$Pages_Item_View$viewPrice(item),
								_1: {
									ctor: '::',
									_0: A2(_Gizra$elm_spa_exmple$Pages_Item_View$viewPdfPath, backendUrl, item),
									_1: {
										ctor: '::',
										_0: A2(_Gizra$elm_spa_exmple$ItemComment_View$viewItemComments, currentUser, item.comments),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$map,
												_Gizra$elm_spa_exmple$Pages_Item_Model$MsgItemComment,
												A5(
													_Gizra$elm_spa_exmple$ItemComment_View$view,
													backendUrl,
													currentUser,
													{ctor: '_Tuple2', _0: itemStorageKey, _1: item},
													_Gizra$elm_storage_key$StorageKey$New,
													model.itemComment)),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					});
			},
			A2(_Gizra$elm_dictlist$EveryDictList$get, itemStorageKey, items));
	});

var _Gizra$elm_spa_exmple$App_View$view = function (model) {
	var _p0 = model.activePage;
	switch (_p0.ctor) {
		case 'HomePage':
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('ui container'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A3(_Gizra$elm_spa_exmple$Pages_Homepage_View$view, model.backendUrl, model.user, model.backend.items),
					_1: {ctor: '[]'}
				});
		case 'Item':
			return A2(
				_elm_lang$html$Html$div,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$class('ui container'),
					_1: {ctor: '[]'}
				},
				{
					ctor: '::',
					_0: A2(
						_elm_lang$html$Html$map,
						_Gizra$elm_spa_exmple$App_Model$MsgPagesItem,
						A5(_Gizra$elm_spa_exmple$Pages_Item_View$view, model.backendUrl, model.user, model.backend.items, _p0._0, model.pagesItem)),
					_1: {ctor: '[]'}
				});
		default:
			return A2(
				_elm_lang$html$Html$div,
				{ctor: '[]'},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text('Wrong page defined'),
					_1: {ctor: '[]'}
				});
	}
};

var _Gizra$elm_spa_exmple$Main$main = _elm_lang$html$Html$programWithFlags(
	{init: _Gizra$elm_spa_exmple$App_Update$init, update: _Gizra$elm_spa_exmple$App_Update$update, view: _Gizra$elm_spa_exmple$App_View$view, subscriptions: _Gizra$elm_spa_exmple$App_Update$subscriptions})(
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (backendUrl) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (entityId) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (page) {
							return _elm_lang$core$Json_Decode$succeed(
								{backendUrl: backendUrl, entityId: entityId, page: page});
						},
						A2(_elm_lang$core$Json_Decode$field, 'page', _elm_lang$core$Json_Decode$string));
				},
				A2(
					_elm_lang$core$Json_Decode$field,
					'entityId',
					_elm_lang$core$Json_Decode$oneOf(
						{
							ctor: '::',
							_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
							_1: {
								ctor: '::',
								_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, _elm_lang$core$Json_Decode$int),
								_1: {ctor: '[]'}
							}
						})));
		},
		A2(_elm_lang$core$Json_Decode$field, 'backendUrl', _elm_lang$core$Json_Decode$string)));

var Elm = {};
Elm['Main'] = Elm['Main'] || {};
if (typeof _Gizra$elm_spa_exmple$Main$main !== 'undefined') {
    _Gizra$elm_spa_exmple$Main$main(Elm['Main'], 'Main', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

