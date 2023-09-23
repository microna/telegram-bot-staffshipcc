/*! For license information please see main.a1cccdb8.js.LICENSE.txt */
!(function () {
  'use strict';
  var e = {
      463: function (e, t, r) {
        var n = r(791),
          o = r(296);
        function a(e) {
          for (
            var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, r = 1;
            r < arguments.length;
            r++
          )
            t += '&args[]=' + encodeURIComponent(arguments[r]);
          return (
            'Minified React error #' +
            e +
            '; visit ' +
            t +
            ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
          );
        }
        var i = new Set(),
          l = {};
        function s(e, t) {
          u(e, t), u(e + 'Capture', t);
        }
        function u(e, t) {
          for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var c = !(
            'undefined' === typeof window ||
            'undefined' === typeof window.document ||
            'undefined' === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          h = {};
        function g(e, t, r, n, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = n),
            (this.attributeNamespace = o),
            (this.mustUseProperty = r),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var m = {};
        'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
          .split(' ')
          .forEach(function (e) {
            m[e] = new g(e, 0, !1, e, null, !1, !1);
          }),
          [
            ['acceptCharset', 'accept-charset'],
            ['className', 'class'],
            ['htmlFor', 'for'],
            ['httpEquiv', 'http-equiv'],
          ].forEach(function (e) {
            var t = e[0];
            m[t] = new g(t, 1, !1, e[1], null, !1, !1);
          }),
          ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
            m[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }),
          ['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(
            function (e) {
              m[e] = new g(e, 2, !1, e, null, !1, !1);
            },
          ),
          'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
            .split(' ')
            .forEach(function (e) {
              m[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
            m[e] = new g(e, 3, !0, e, null, !1, !1);
          }),
          ['capture', 'download'].forEach(function (e) {
            m[e] = new g(e, 4, !1, e, null, !1, !1);
          }),
          ['cols', 'rows', 'size', 'span'].forEach(function (e) {
            m[e] = new g(e, 6, !1, e, null, !1, !1);
          }),
          ['rowSpan', 'start'].forEach(function (e) {
            m[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var v = /[\-:]([a-z])/g;
        function b(e) {
          return e[1].toUpperCase();
        }
        function y(e, t, r, n) {
          var o = m.hasOwnProperty(t) ? m[t] : null;
          (null !== o
            ? 0 !== o.type
            : n ||
              !(2 < t.length) ||
              ('o' !== t[0] && 'O' !== t[0]) ||
              ('n' !== t[1] && 'N' !== t[1])) &&
            ((function (e, t, r, n) {
              if (
                null === t ||
                'undefined' === typeof t ||
                (function (e, t, r, n) {
                  if (null !== r && 0 === r.type) return !1;
                  switch (typeof t) {
                    case 'function':
                    case 'symbol':
                      return !0;
                    case 'boolean':
                      return (
                        !n &&
                        (null !== r
                          ? !r.acceptsBooleans
                          : 'data-' !== (e = e.toLowerCase().slice(0, 5)) && 'aria-' !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, r, n)
              )
                return !0;
              if (n) return !1;
              if (null !== r)
                switch (r.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, r, o, n) && (r = null),
            n || null === o
              ? (function (e) {
                  return (
                    !!d.call(h, e) ||
                    (!d.call(p, e) && (f.test(e) ? (h[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, '' + r))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === r ? 3 !== o.type && '' : r)
              : ((t = o.attributeName),
                (n = o.attributeNamespace),
                null === r
                  ? e.removeAttribute(t)
                  : ((r = 3 === (o = o.type) || (4 === o && !0 === r) ? '' : '' + r),
                    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
        }
        'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
          .split(' ')
          .forEach(function (e) {
            var t = e.replace(v, b);
            m[t] = new g(t, 1, !1, e, null, !1, !1);
          }),
          'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
            .split(' ')
            .forEach(function (e) {
              var t = e.replace(v, b);
              m[t] = new g(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
            }),
          ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
            var t = e.replace(v, b);
            m[t] = new g(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
          }),
          ['tabIndex', 'crossOrigin'].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (m.xlinkHref = new g(
            'xlinkHref',
            1,
            !1,
            'xlink:href',
            'http://www.w3.org/1999/xlink',
            !0,
            !1,
          )),
          ['src', 'href', 'action', 'formAction'].forEach(function (e) {
            m[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for('react.element'),
          k = Symbol.for('react.portal'),
          N = Symbol.for('react.fragment'),
          S = Symbol.for('react.strict_mode'),
          E = Symbol.for('react.profiler'),
          C = Symbol.for('react.provider'),
          j = Symbol.for('react.context'),
          R = Symbol.for('react.forward_ref'),
          T = Symbol.for('react.suspense'),
          P = Symbol.for('react.suspense_list'),
          O = Symbol.for('react.memo'),
          L = Symbol.for('react.lazy');
        Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode');
        var _ = Symbol.for('react.offscreen');
        Symbol.for('react.legacy_hidden'),
          Symbol.for('react.cache'),
          Symbol.for('react.tracing_marker');
        var I = Symbol.iterator;
        function D(e) {
          return null === e || 'object' !== typeof e
            ? null
            : 'function' === typeof (e = (I && e[I]) || e['@@iterator'])
            ? e
            : null;
        }
        var z,
          M = Object.assign;
        function A(e) {
          if (void 0 === z)
            try {
              throw Error();
            } catch (r) {
              var t = r.stack.trim().match(/\n( *(at )?)/);
              z = (t && t[1]) || '';
            }
          return '\n' + z + e;
        }
        var F = !1;
        function B(e, t) {
          if (!e || F) return '';
          F = !0;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                }),
                'object' === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (u) {
                  var n = u;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (u) {
                  n = u;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (u) {
                n = u;
              }
              e();
            }
          } catch (u) {
            if (u && n && 'string' === typeof u.stack) {
              for (
                var o = u.stack.split('\n'),
                  a = n.stack.split('\n'),
                  i = o.length - 1,
                  l = a.length - 1;
                1 <= i && 0 <= l && o[i] !== a[l];

              )
                l--;
              for (; 1 <= i && 0 <= l; i--, l--)
                if (o[i] !== a[l]) {
                  if (1 !== i || 1 !== l)
                    do {
                      if ((i--, 0 > --l || o[i] !== a[l])) {
                        var s = '\n' + o[i].replace(' at new ', ' at ');
                        return (
                          e.displayName &&
                            s.includes('<anonymous>') &&
                            (s = s.replace('<anonymous>', e.displayName)),
                          s
                        );
                      }
                    } while (1 <= i && 0 <= l);
                  break;
                }
            }
          } finally {
            (F = !1), (Error.prepareStackTrace = r);
          }
          return (e = e ? e.displayName || e.name : '') ? A(e) : '';
        }
        function U(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A('Lazy');
            case 13:
              return A('Suspense');
            case 19:
              return A('SuspenseList');
            case 0:
            case 2:
            case 15:
              return (e = B(e.type, !1));
            case 11:
              return (e = B(e.type.render, !1));
            case 1:
              return (e = B(e.type, !0));
            default:
              return '';
          }
        }
        function W(e) {
          if (null == e) return null;
          if ('function' === typeof e) return e.displayName || e.name || null;
          if ('string' === typeof e) return e;
          switch (e) {
            case N:
              return 'Fragment';
            case k:
              return 'Portal';
            case E:
              return 'Profiler';
            case S:
              return 'StrictMode';
            case T:
              return 'Suspense';
            case P:
              return 'SuspenseList';
          }
          if ('object' === typeof e)
            switch (e.$$typeof) {
              case j:
                return (e.displayName || 'Context') + '.Consumer';
              case C:
                return (e._context.displayName || 'Context') + '.Provider';
              case R:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      '' !== (e = t.displayName || t.name || '')
                        ? 'ForwardRef(' + e + ')'
                        : 'ForwardRef'),
                  e
                );
              case O:
                return null !== (t = e.displayName || null) ? t : W(e.type) || 'Memo';
              case L:
                (t = e._payload), (e = e._init);
                try {
                  return W(e(t));
                } catch (r) {}
            }
          return null;
        }
        function H(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return 'Cache';
            case 9:
              return (t.displayName || 'Context') + '.Consumer';
            case 10:
              return (t._context.displayName || 'Context') + '.Provider';
            case 18:
              return 'DehydratedFragment';
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ''),
                t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
              );
            case 7:
              return 'Fragment';
            case 5:
              return t;
            case 4:
              return 'Portal';
            case 3:
              return 'Root';
            case 6:
              return 'Text';
            case 16:
              return W(t);
            case 8:
              return t === S ? 'StrictMode' : 'Mode';
            case 22:
              return 'Offscreen';
            case 12:
              return 'Profiler';
            case 21:
              return 'Scope';
            case 13:
              return 'Suspense';
            case 19:
              return 'SuspenseList';
            case 25:
              return 'TracingMarker';
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ('function' === typeof t) return t.displayName || t.name || null;
              if ('string' === typeof t) return t;
          }
          return null;
        }
        function V(e) {
          switch (typeof e) {
            case 'boolean':
            case 'number':
            case 'string':
            case 'undefined':
            case 'object':
              return e;
            default:
              return '';
          }
        }
        function $(e) {
          var t = e.type;
          return (
            (e = e.nodeName) && 'input' === e.toLowerCase() && ('checkbox' === t || 'radio' === t)
          );
        }
        function q(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = $(e) ? 'checked' : 'value',
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = '' + e[t];
              if (
                !e.hasOwnProperty(t) &&
                'undefined' !== typeof r &&
                'function' === typeof r.get &&
                'function' === typeof r.set
              ) {
                var o = r.get,
                  a = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (n = '' + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = '' + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var r = t.getValue(),
            n = '';
          return (
            e && (n = $(e) ? (e.checked ? 'true' : 'false') : e.value),
            (e = n) !== r && (t.setValue(e), !0)
          );
        }
        function K(e) {
          if (
            'undefined' === typeof (e = e || ('undefined' !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function Q(e, t) {
          var r = t.checked;
          return M({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var r = null == t.defaultValue ? '' : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
          (r = V(null != t.value ? t.value : r)),
            (e._wrapperState = {
              initialChecked: n,
              initialValue: r,
              controlled:
                'checkbox' === t.type || 'radio' === t.type ? null != t.checked : null != t.value,
            });
        }
        function X(e, t) {
          null != (t = t.checked) && y(e, 'checked', t, !1);
        }
        function J(e, t) {
          X(e, t);
          var r = V(t.value),
            n = t.type;
          if (null != r)
            'number' === n
              ? ((0 === r && '' === e.value) || e.value != r) && (e.value = '' + r)
              : e.value !== '' + r && (e.value = '' + r);
          else if ('submit' === n || 'reset' === n) return void e.removeAttribute('value');
          t.hasOwnProperty('value')
            ? ee(e, t.type, r)
            : t.hasOwnProperty('defaultValue') && ee(e, t.type, V(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, r) {
          if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
            var n = t.type;
            if (!(('submit' !== n && 'reset' !== n) || (void 0 !== t.value && null !== t.value)))
              return;
            (t = '' + e._wrapperState.initialValue),
              r || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          '' !== (r = e.name) && (e.name = ''),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            '' !== r && (e.name = r);
        }
        function ee(e, t, r) {
          ('number' === t && K(e.ownerDocument) === e) ||
            (null == r
              ? (e.defaultValue = '' + e._wrapperState.initialValue)
              : e.defaultValue !== '' + r && (e.defaultValue = '' + r));
        }
        var te = Array.isArray;
        function re(e, t, r, n) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < r.length; o++) t['$' + r[o]] = !0;
            for (r = 0; r < e.length; r++)
              (o = t.hasOwnProperty('$' + e[r].value)),
                e[r].selected !== o && (e[r].selected = o),
                o && n && (e[r].defaultSelected = !0);
          } else {
            for (r = '' + V(r), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === r)
                return (e[o].selected = !0), void (n && (e[o].defaultSelected = !0));
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ne(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return M({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: '' + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var r = t.value;
          if (null == r) {
            if (((r = t.children), (t = t.defaultValue), null != r)) {
              if (null != t) throw Error(a(92));
              if (te(r)) {
                if (1 < r.length) throw Error(a(93));
                r = r[0];
              }
              t = r;
            }
            null == t && (t = ''), (r = t);
          }
          e._wrapperState = { initialValue: V(r) };
        }
        function ae(e, t) {
          var r = V(t.value),
            n = V(t.defaultValue);
          null != r &&
            ((r = '' + r) !== e.value && (e.value = r),
            null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)),
            null != n && (e.defaultValue = '' + n);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue && '' !== t && null !== t && (e.value = t);
        }
        function le(e) {
          switch (e) {
            case 'svg':
              return 'http://www.w3.org/2000/svg';
            case 'math':
              return 'http://www.w3.org/1998/Math/MathML';
            default:
              return 'http://www.w3.org/1999/xhtml';
          }
        }
        function se(e, t) {
          return null == e || 'http://www.w3.org/1999/xhtml' === e
            ? le(t)
            : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
            ? 'http://www.w3.org/1999/xhtml'
            : e;
        }
        var ue,
          ce,
          de =
            ((ce = function (e, t) {
              if ('http://www.w3.org/2000/svg' !== e.namespaceURI || 'innerHTML' in e)
                e.innerHTML = t;
              else {
                for (
                  (ue = ue || document.createElement('div')).innerHTML =
                    '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ue.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            'undefined' !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, r, n) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ce(e, t);
                  });
                }
              : ce);
        function fe(e, t) {
          if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType) return void (r.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          he = ['Webkit', 'ms', 'Moz', 'O'];
        function ge(e, t, r) {
          return null == t || 'boolean' === typeof t || '' === t
            ? ''
            : r || 'number' !== typeof t || 0 === t || (pe.hasOwnProperty(e) && pe[e])
            ? ('' + t).trim()
            : t + 'px';
        }
        function me(e, t) {
          for (var r in ((e = e.style), t))
            if (t.hasOwnProperty(r)) {
              var n = 0 === r.indexOf('--'),
                o = ge(r, t[r], n);
              'float' === r && (r = 'cssFloat'), n ? e.setProperty(r, o) : (e[r] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          he.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
          });
        });
        var ve = M(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          },
        );
        function be(e, t) {
          if (t) {
            if (ve[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                'object' !== typeof t.dangerouslySetInnerHTML ||
                !('__html' in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && 'object' !== typeof t.style) throw Error(a(62));
          }
        }
        function ye(e, t) {
          if (-1 === e.indexOf('-')) return 'string' === typeof t.is;
          switch (e) {
            case 'annotation-xml':
            case 'color-profile':
            case 'font-face':
            case 'font-face-src':
            case 'font-face-uri':
            case 'font-face-format':
            case 'font-face-name':
            case 'missing-glyph':
              return !1;
            default:
              return !0;
          }
        }
        var xe = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var ke = null,
          Ne = null,
          Se = null;
        function Ee(e) {
          if ((e = xo(e))) {
            if ('function' !== typeof ke) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), ke(e.stateNode, e.type, t));
          }
        }
        function Ce(e) {
          Ne ? (Se ? Se.push(e) : (Se = [e])) : (Ne = e);
        }
        function je() {
          if (Ne) {
            var e = Ne,
              t = Se;
            if (((Se = Ne = null), Ee(e), t)) for (e = 0; e < t.length; e++) Ee(t[e]);
          }
        }
        function Re(e, t) {
          return e(t);
        }
        function Te() {}
        var Pe = !1;
        function Oe(e, t, r) {
          if (Pe) return e(t, r);
          Pe = !0;
          try {
            return Re(e, t, r);
          } finally {
            (Pe = !1), (null !== Ne || null !== Se) && (Te(), je());
          }
        }
        function Le(e, t) {
          var r = e.stateNode;
          if (null === r) return null;
          var n = ko(r);
          if (null === n) return null;
          r = n[t];
          e: switch (t) {
            case 'onClick':
            case 'onClickCapture':
            case 'onDoubleClick':
            case 'onDoubleClickCapture':
            case 'onMouseDown':
            case 'onMouseDownCapture':
            case 'onMouseMove':
            case 'onMouseMoveCapture':
            case 'onMouseUp':
            case 'onMouseUpCapture':
            case 'onMouseEnter':
              (n = !n.disabled) ||
                (n = !(
                  'button' === (e = e.type) ||
                  'input' === e ||
                  'select' === e ||
                  'textarea' === e
                )),
                (e = !n);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (r && 'function' !== typeof r) throw Error(a(231, t, typeof r));
          return r;
        }
        var _e = !1;
        if (c)
          try {
            var Ie = {};
            Object.defineProperty(Ie, 'passive', {
              get: function () {
                _e = !0;
              },
            }),
              window.addEventListener('test', Ie, Ie),
              window.removeEventListener('test', Ie, Ie);
          } catch (ce) {
            _e = !1;
          }
        function De(e, t, r, n, o, a, i, l, s) {
          var u = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, u);
          } catch (c) {
            this.onError(c);
          }
        }
        var ze = !1,
          Me = null,
          Ae = !1,
          Fe = null,
          Be = {
            onError: function (e) {
              (ze = !0), (Me = e);
            },
          };
        function Ue(e, t, r, n, o, a, i, l, s) {
          (ze = !1), (Me = null), De.apply(Be, arguments);
        }
        function We(e) {
          var t = e,
            r = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (r = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? r : null;
        }
        function He(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if ((null === t && null !== (e = e.alternate) && (t = e.memoizedState), null !== t))
              return t.dehydrated;
          }
          return null;
        }
        function Ve(e) {
          if (We(e) !== e) throw Error(a(188));
        }
        function $e(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = We(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var r = e, n = t; ; ) {
                var o = r.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (n = o.return)) {
                    r = n;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === r) return Ve(o), e;
                    if (i === n) return Ve(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (r.return !== n.return) (r = o), (n = i);
                else {
                  for (var l = !1, s = o.child; s; ) {
                    if (s === r) {
                      (l = !0), (r = o), (n = i);
                      break;
                    }
                    if (s === n) {
                      (l = !0), (n = o), (r = i);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) {
                    for (s = i.child; s; ) {
                      if (s === r) {
                        (l = !0), (r = i), (n = o);
                        break;
                      }
                      if (s === n) {
                        (l = !0), (n = i), (r = o);
                        break;
                      }
                      s = s.sibling;
                    }
                    if (!l) throw Error(a(189));
                  }
                }
                if (r.alternate !== n) throw Error(a(190));
              }
              if (3 !== r.tag) throw Error(a(188));
              return r.stateNode.current === r ? e : t;
            })(e))
            ? qe(e)
            : null;
        }
        function qe(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = qe(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = o.unstable_scheduleCallback,
          Ke = o.unstable_cancelCallback,
          Qe = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          Xe = o.unstable_now,
          Je = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          rt = o.unstable_LowPriority,
          nt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return (e >>>= 0), 0 === e ? 32 : (31 - ((lt(e) / st) | 0)) | 0;
              },
          lt = Math.log,
          st = Math.LN2;
        var ut = 64,
          ct = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var n = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & r;
          if (0 !== i) {
            var l = i & ~o;
            0 !== l ? (n = dt(l)) : 0 !== (a &= i) && (n = dt(a));
          } else 0 !== (i = r & ~o) ? (n = dt(i)) : 0 !== a && (n = dt(a));
          if (0 === n) return 0;
          if (
            0 !== t &&
            t !== n &&
            0 === (t & o) &&
            ((o = n & -n) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & n) && (n |= 16 & r), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= n; 0 < t; )
              (o = 1 << (r = 31 - it(t))), (n |= e[r]), (t &= ~o);
          return n;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function ht(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0;
        }
        function gt() {
          var e = ut;
          return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e;
        }
        function mt(e) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e);
          return t;
        }
        function vt(e, t, r) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = r);
        }
        function bt(e, t) {
          var r = (e.entangledLanes |= t);
          for (e = e.entanglements; r; ) {
            var n = 31 - it(r),
              o = 1 << n;
            (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
          }
        }
        var yt = 0;
        function xt(e) {
          return 1 < (e &= -e) ? (4 < e ? (0 !== (268435455 & e) ? 16 : 536870912) : 4) : 1;
        }
        var wt,
          kt,
          Nt,
          St,
          Et,
          Ct = !1,
          jt = [],
          Rt = null,
          Tt = null,
          Pt = null,
          Ot = new Map(),
          Lt = new Map(),
          _t = [],
          It =
            'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
              ' ',
            );
        function Dt(e, t) {
          switch (e) {
            case 'focusin':
            case 'focusout':
              Rt = null;
              break;
            case 'dragenter':
            case 'dragleave':
              Tt = null;
              break;
            case 'mouseover':
            case 'mouseout':
              Pt = null;
              break;
            case 'pointerover':
            case 'pointerout':
              Ot.delete(t.pointerId);
              break;
            case 'gotpointercapture':
            case 'lostpointercapture':
              Lt.delete(t.pointerId);
          }
        }
        function zt(e, t, r, n, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: r,
                eventSystemFlags: n,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = xo(t)) && kt(t),
              e)
            : ((e.eventSystemFlags |= n),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Mt(e) {
          var t = yo(e.target);
          if (null !== t) {
            var r = We(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = He(r)))
                  return (
                    (e.blockedOn = t),
                    void Et(e.priority, function () {
                      Nt(r);
                    })
                  );
              } else if (3 === t && r.stateNode.current.memoizedState.isDehydrated)
                return void (e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function At(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var r = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== r) return null !== (t = xo(r)) && kt(t), (e.blockedOn = r), !1;
            var n = new (r = e.nativeEvent).constructor(r.type, r);
            (xe = n), r.target.dispatchEvent(n), (xe = null), t.shift();
          }
          return !0;
        }
        function Ft(e, t, r) {
          At(e) && r.delete(t);
        }
        function Bt() {
          (Ct = !1),
            null !== Rt && At(Rt) && (Rt = null),
            null !== Tt && At(Tt) && (Tt = null),
            null !== Pt && At(Pt) && (Pt = null),
            Ot.forEach(Ft),
            Lt.forEach(Ft);
        }
        function Ut(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            Ct || ((Ct = !0), o.unstable_scheduleCallback(o.unstable_NormalPriority, Bt)));
        }
        function Wt(e) {
          function t(t) {
            return Ut(t, e);
          }
          if (0 < jt.length) {
            Ut(jt[0], e);
            for (var r = 1; r < jt.length; r++) {
              var n = jt[r];
              n.blockedOn === e && (n.blockedOn = null);
            }
          }
          for (
            null !== Rt && Ut(Rt, e),
              null !== Tt && Ut(Tt, e),
              null !== Pt && Ut(Pt, e),
              Ot.forEach(t),
              Lt.forEach(t),
              r = 0;
            r < _t.length;
            r++
          )
            (n = _t[r]).blockedOn === e && (n.blockedOn = null);
          for (; 0 < _t.length && null === (r = _t[0]).blockedOn; )
            Mt(r), null === r.blockedOn && _t.shift();
        }
        var Ht = x.ReactCurrentBatchConfig,
          Vt = !0;
        function $t(e, t, r, n) {
          var o = yt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (yt = 1), Gt(e, t, r, n);
          } finally {
            (yt = o), (Ht.transition = a);
          }
        }
        function qt(e, t, r, n) {
          var o = yt,
            a = Ht.transition;
          Ht.transition = null;
          try {
            (yt = 4), Gt(e, t, r, n);
          } finally {
            (yt = o), (Ht.transition = a);
          }
        }
        function Gt(e, t, r, n) {
          if (Vt) {
            var o = Qt(e, t, r, n);
            if (null === o) Vn(e, t, n, Kt, r), Dt(e, n);
            else if (
              (function (e, t, r, n, o) {
                switch (t) {
                  case 'focusin':
                    return (Rt = zt(Rt, e, t, r, n, o)), !0;
                  case 'dragenter':
                    return (Tt = zt(Tt, e, t, r, n, o)), !0;
                  case 'mouseover':
                    return (Pt = zt(Pt, e, t, r, n, o)), !0;
                  case 'pointerover':
                    var a = o.pointerId;
                    return Ot.set(a, zt(Ot.get(a) || null, e, t, r, n, o)), !0;
                  case 'gotpointercapture':
                    return (a = o.pointerId), Lt.set(a, zt(Lt.get(a) || null, e, t, r, n, o)), !0;
                }
                return !1;
              })(o, e, t, r, n)
            )
              n.stopPropagation();
            else if ((Dt(e, n), 4 & t && -1 < It.indexOf(e))) {
              for (; null !== o; ) {
                var a = xo(o);
                if (
                  (null !== a && wt(a),
                  null === (a = Qt(e, t, r, n)) && Vn(e, t, n, Kt, r),
                  a === o)
                )
                  break;
                o = a;
              }
              null !== o && n.stopPropagation();
            } else Vn(e, t, n, null, r);
          }
        }
        var Kt = null;
        function Qt(e, t, r, n) {
          if (((Kt = null), null !== (e = yo((e = we(n))))))
            if (null === (t = We(e))) e = null;
            else if (13 === (r = t.tag)) {
              if (null !== (e = He(t))) return e;
              e = null;
            } else if (3 === r) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Kt = e), null;
        }
        function Yt(e) {
          switch (e) {
            case 'cancel':
            case 'click':
            case 'close':
            case 'contextmenu':
            case 'copy':
            case 'cut':
            case 'auxclick':
            case 'dblclick':
            case 'dragend':
            case 'dragstart':
            case 'drop':
            case 'focusin':
            case 'focusout':
            case 'input':
            case 'invalid':
            case 'keydown':
            case 'keypress':
            case 'keyup':
            case 'mousedown':
            case 'mouseup':
            case 'paste':
            case 'pause':
            case 'play':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
            case 'ratechange':
            case 'reset':
            case 'resize':
            case 'seeked':
            case 'submit':
            case 'touchcancel':
            case 'touchend':
            case 'touchstart':
            case 'volumechange':
            case 'change':
            case 'selectionchange':
            case 'textInput':
            case 'compositionstart':
            case 'compositionend':
            case 'compositionupdate':
            case 'beforeblur':
            case 'afterblur':
            case 'beforeinput':
            case 'blur':
            case 'fullscreenchange':
            case 'focus':
            case 'hashchange':
            case 'popstate':
            case 'select':
            case 'selectstart':
              return 1;
            case 'drag':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'mousemove':
            case 'mouseout':
            case 'mouseover':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'scroll':
            case 'toggle':
            case 'touchmove':
            case 'wheel':
            case 'mouseenter':
            case 'mouseleave':
            case 'pointerenter':
            case 'pointerleave':
              return 4;
            case 'message':
              switch (Je()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case rt:
                  return 16;
                case nt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Jt = null,
          Zt = null;
        function er() {
          if (Zt) return Zt;
          var e,
            t,
            r = Jt,
            n = r.length,
            o = 'value' in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < n && r[e] === o[e]; e++);
          var i = n - e;
          for (t = 1; t <= i && r[n - t] === o[a - t]; t++);
          return (Zt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function tr(e) {
          var t = e.keyCode;
          return (
            'charCode' in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function rr() {
          return !0;
        }
        function nr() {
          return !1;
        }
        function or(e) {
          function t(t, r, n, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = n),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue
              )
                ? rr
                : nr),
              (this.isPropagationStopped = nr),
              this
            );
          }
          return (
            M(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : 'unknown' !== typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = rr));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : 'unknown' !== typeof e.cancelBubble && (e.cancelBubble = !0),
                  (this.isPropagationStopped = rr));
              },
              persist: function () {},
              isPersistent: rr,
            }),
            t
          );
        }
        var ar,
          ir,
          lr,
          sr = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          ur = or(sr),
          cr = M({}, sr, { view: 0, detail: 0 }),
          dr = or(cr),
          fr = M({}, cr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Sr,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return 'movementX' in e
                ? e.movementX
                : (e !== lr &&
                    (lr && 'mousemove' === e.type
                      ? ((ar = e.screenX - lr.screenX), (ir = e.screenY - lr.screenY))
                      : (ir = ar = 0),
                    (lr = e)),
                  ar);
            },
            movementY: function (e) {
              return 'movementY' in e ? e.movementY : ir;
            },
          }),
          pr = or(fr),
          hr = or(M({}, fr, { dataTransfer: 0 })),
          gr = or(M({}, cr, { relatedTarget: 0 })),
          mr = or(M({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })),
          vr = M({}, sr, {
            clipboardData: function (e) {
              return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
            },
          }),
          br = or(vr),
          yr = or(M({}, sr, { data: 0 })),
          xr = {
            Esc: 'Escape',
            Spacebar: ' ',
            Left: 'ArrowLeft',
            Up: 'ArrowUp',
            Right: 'ArrowRight',
            Down: 'ArrowDown',
            Del: 'Delete',
            Win: 'OS',
            Menu: 'ContextMenu',
            Apps: 'ContextMenu',
            Scroll: 'ScrollLock',
            MozPrintableKey: 'Unidentified',
          },
          wr = {
            8: 'Backspace',
            9: 'Tab',
            12: 'Clear',
            13: 'Enter',
            16: 'Shift',
            17: 'Control',
            18: 'Alt',
            19: 'Pause',
            20: 'CapsLock',
            27: 'Escape',
            32: ' ',
            33: 'PageUp',
            34: 'PageDown',
            35: 'End',
            36: 'Home',
            37: 'ArrowLeft',
            38: 'ArrowUp',
            39: 'ArrowRight',
            40: 'ArrowDown',
            45: 'Insert',
            46: 'Delete',
            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',
            144: 'NumLock',
            145: 'ScrollLock',
            224: 'Meta',
          },
          kr = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
        function Nr(e) {
          var t = this.nativeEvent;
          return t.getModifierState ? t.getModifierState(e) : !!(e = kr[e]) && !!t[e];
        }
        function Sr() {
          return Nr;
        }
        var Er = M({}, cr, {
            key: function (e) {
              if (e.key) {
                var t = xr[e.key] || e.key;
                if ('Unidentified' !== t) return t;
              }
              return 'keypress' === e.type
                ? 13 === (e = tr(e))
                  ? 'Enter'
                  : String.fromCharCode(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? wr[e.keyCode] || 'Unidentified'
                : '';
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Sr,
            charCode: function (e) {
              return 'keypress' === e.type ? tr(e) : 0;
            },
            keyCode: function (e) {
              return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return 'keypress' === e.type
                ? tr(e)
                : 'keydown' === e.type || 'keyup' === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Cr = or(Er),
          jr = or(
            M({}, fr, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Rr = or(
            M({}, cr, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Sr,
            }),
          ),
          Tr = or(M({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
          Pr = M({}, fr, {
            deltaX: function (e) {
              return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function (e) {
              return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Or = or(Pr),
          Lr = [9, 13, 27, 32],
          _r = c && 'CompositionEvent' in window,
          Ir = null;
        c && 'documentMode' in document && (Ir = document.documentMode);
        var Dr = c && 'TextEvent' in window && !Ir,
          zr = c && (!_r || (Ir && 8 < Ir && 11 >= Ir)),
          Mr = String.fromCharCode(32),
          Ar = !1;
        function Fr(e, t) {
          switch (e) {
            case 'keyup':
              return -1 !== Lr.indexOf(t.keyCode);
            case 'keydown':
              return 229 !== t.keyCode;
            case 'keypress':
            case 'mousedown':
            case 'focusout':
              return !0;
            default:
              return !1;
          }
        }
        function Br(e) {
          return 'object' === typeof (e = e.detail) && 'data' in e ? e.data : null;
        }
        var Ur = !1;
        var Wr = {
          color: !0,
          date: !0,
          datetime: !0,
          'datetime-local': !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Hr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return 'input' === t ? !!Wr[e.type] : 'textarea' === t;
        }
        function Vr(e, t, r, n) {
          Ce(n),
            0 < (t = qn(t, 'onChange')).length &&
              ((r = new ur('onChange', 'change', null, r, n)), e.push({ event: r, listeners: t }));
        }
        var $r = null,
          qr = null;
        function Gr(e) {
          An(e, 0);
        }
        function Kr(e) {
          if (G(wo(e))) return e;
        }
        function Qr(e, t) {
          if ('change' === e) return t;
        }
        var Yr = !1;
        if (c) {
          var Xr;
          if (c) {
            var Jr = 'oninput' in document;
            if (!Jr) {
              var Zr = document.createElement('div');
              Zr.setAttribute('oninput', 'return;'), (Jr = 'function' === typeof Zr.oninput);
            }
            Xr = Jr;
          } else Xr = !1;
          Yr = Xr && (!document.documentMode || 9 < document.documentMode);
        }
        function en() {
          $r && ($r.detachEvent('onpropertychange', tn), (qr = $r = null));
        }
        function tn(e) {
          if ('value' === e.propertyName && Kr(qr)) {
            var t = [];
            Vr(t, qr, e, we(e)), Oe(Gr, t);
          }
        }
        function rn(e, t, r) {
          'focusin' === e
            ? (en(), (qr = r), ($r = t).attachEvent('onpropertychange', tn))
            : 'focusout' === e && en();
        }
        function nn(e) {
          if ('selectionchange' === e || 'keyup' === e || 'keydown' === e) return Kr(qr);
        }
        function on(e, t) {
          if ('click' === e) return Kr(t);
        }
        function an(e, t) {
          if ('input' === e || 'change' === e) return Kr(t);
        }
        var ln =
          'function' === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (e === t && (0 !== e || 1 / e === 1 / t)) || (e !== e && t !== t);
              };
        function sn(e, t) {
          if (ln(e, t)) return !0;
          if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
          var r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (n = 0; n < r.length; n++) {
            var o = r[n];
            if (!d.call(t, o) || !ln(e[o], t[o])) return !1;
          }
          return !0;
        }
        function un(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cn(e, t) {
          var r,
            n = un(e);
          for (e = 0; n; ) {
            if (3 === n.nodeType) {
              if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
              e = r;
            }
            e: {
              for (; n; ) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
                }
                n = n.parentNode;
              }
              n = void 0;
            }
            n = un(n);
          }
        }
        function dn(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? dn(e, t.parentNode)
                  : 'contains' in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function fn() {
          for (var e = window, t = K(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var r = 'string' === typeof t.contentWindow.location.href;
            } catch (n) {
              r = !1;
            }
            if (!r) break;
            t = K((e = t.contentWindow).document);
          }
          return t;
        }
        function pn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (('input' === t &&
              ('text' === e.type ||
                'search' === e.type ||
                'tel' === e.type ||
                'url' === e.type ||
                'password' === e.type)) ||
              'textarea' === t ||
              'true' === e.contentEditable)
          );
        }
        function hn(e) {
          var t = fn(),
            r = e.focusedElem,
            n = e.selectionRange;
          if (t !== r && r && r.ownerDocument && dn(r.ownerDocument.documentElement, r)) {
            if (null !== n && pn(r))
              if (((t = n.start), void 0 === (e = n.end) && (e = t), 'selectionStart' in r))
                (r.selectionStart = t), (r.selectionEnd = Math.min(e, r.value.length));
              else if (
                (e = ((t = r.ownerDocument || document) && t.defaultView) || window).getSelection
              ) {
                e = e.getSelection();
                var o = r.textContent.length,
                  a = Math.min(n.start, o);
                (n = void 0 === n.end ? a : Math.min(n.end, o)),
                  !e.extend && a > n && ((o = n), (n = a), (a = o)),
                  (o = cn(r, a));
                var i = cn(r, n);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > n
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = r; (e = e.parentNode); )
              1 === e.nodeType && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for ('function' === typeof r.focus && r.focus(), r = 0; r < t.length; r++)
              ((e = t[r]).element.scrollLeft = e.left), (e.element.scrollTop = e.top);
          }
        }
        var gn = c && 'documentMode' in document && 11 >= document.documentMode,
          mn = null,
          vn = null,
          bn = null,
          yn = !1;
        function xn(e, t, r) {
          var n = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
          yn ||
            null == mn ||
            mn !== K(n) ||
            ('selectionStart' in (n = mn) && pn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            (bn && sn(bn, n)) ||
              ((bn = n),
              0 < (n = qn(vn, 'onSelect')).length &&
                ((t = new ur('onSelect', 'select', null, t, r)),
                e.push({ event: t, listeners: n }),
                (t.target = mn))));
        }
        function wn(e, t) {
          var r = {};
          return (
            (r[e.toLowerCase()] = t.toLowerCase()),
            (r['Webkit' + e] = 'webkit' + t),
            (r['Moz' + e] = 'moz' + t),
            r
          );
        }
        var kn = {
            animationend: wn('Animation', 'AnimationEnd'),
            animationiteration: wn('Animation', 'AnimationIteration'),
            animationstart: wn('Animation', 'AnimationStart'),
            transitionend: wn('Transition', 'TransitionEnd'),
          },
          Nn = {},
          Sn = {};
        function En(e) {
          if (Nn[e]) return Nn[e];
          if (!kn[e]) return e;
          var t,
            r = kn[e];
          for (t in r) if (r.hasOwnProperty(t) && t in Sn) return (Nn[e] = r[t]);
          return e;
        }
        c &&
          ((Sn = document.createElement('div').style),
          'AnimationEvent' in window ||
            (delete kn.animationend.animation,
            delete kn.animationiteration.animation,
            delete kn.animationstart.animation),
          'TransitionEvent' in window || delete kn.transitionend.transition);
        var Cn = En('animationend'),
          jn = En('animationiteration'),
          Rn = En('animationstart'),
          Tn = En('transitionend'),
          Pn = new Map(),
          On =
            'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
              ' ',
            );
        function Ln(e, t) {
          Pn.set(e, t), s(t, [e]);
        }
        for (var _n = 0; _n < On.length; _n++) {
          var In = On[_n];
          Ln(In.toLowerCase(), 'on' + (In[0].toUpperCase() + In.slice(1)));
        }
        Ln(Cn, 'onAnimationEnd'),
          Ln(jn, 'onAnimationIteration'),
          Ln(Rn, 'onAnimationStart'),
          Ln('dblclick', 'onDoubleClick'),
          Ln('focusin', 'onFocus'),
          Ln('focusout', 'onBlur'),
          Ln(Tn, 'onTransitionEnd'),
          u('onMouseEnter', ['mouseout', 'mouseover']),
          u('onMouseLeave', ['mouseout', 'mouseover']),
          u('onPointerEnter', ['pointerout', 'pointerover']),
          u('onPointerLeave', ['pointerout', 'pointerover']),
          s(
            'onChange',
            'change click focusin focusout input keydown keyup selectionchange'.split(' '),
          ),
          s(
            'onSelect',
            'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
              ' ',
            ),
          ),
          s('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
          s(
            'onCompositionEnd',
            'compositionend focusout keydown keypress keyup mousedown'.split(' '),
          ),
          s(
            'onCompositionStart',
            'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
          ),
          s(
            'onCompositionUpdate',
            'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
          );
        var Dn =
            'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
              ' ',
            ),
          zn = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Dn));
        function Mn(e, t, r) {
          var n = e.type || 'unknown-event';
          (e.currentTarget = r),
            (function (e, t, r, n, o, i, l, s, u) {
              if ((Ue.apply(this, arguments), ze)) {
                if (!ze) throw Error(a(198));
                var c = Me;
                (ze = !1), (Me = null), Ae || ((Ae = !0), (Fe = c));
              }
            })(n, t, void 0, e),
            (e.currentTarget = null);
        }
        function An(e, t) {
          t = 0 !== (4 & t);
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              o = n.event;
            n = n.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = n.length - 1; 0 <= i; i--) {
                  var l = n[i],
                    s = l.instance,
                    u = l.currentTarget;
                  if (((l = l.listener), s !== a && o.isPropagationStopped())) break e;
                  Mn(o, l, u), (a = s);
                }
              else
                for (i = 0; i < n.length; i++) {
                  if (
                    ((s = (l = n[i]).instance),
                    (u = l.currentTarget),
                    (l = l.listener),
                    s !== a && o.isPropagationStopped())
                  )
                    break e;
                  Mn(o, l, u), (a = s);
                }
            }
          }
          if (Ae) throw ((e = Fe), (Ae = !1), (Fe = null), e);
        }
        function Fn(e, t) {
          var r = t[mo];
          void 0 === r && (r = t[mo] = new Set());
          var n = e + '__bubble';
          r.has(n) || (Hn(t, e, 2, !1), r.add(n));
        }
        function Bn(e, t, r) {
          var n = 0;
          t && (n |= 4), Hn(r, e, n, t);
        }
        var Un = '_reactListening' + Math.random().toString(36).slice(2);
        function Wn(e) {
          if (!e[Un]) {
            (e[Un] = !0),
              i.forEach(function (t) {
                'selectionchange' !== t && (zn.has(t) || Bn(t, !1, e), Bn(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Un] || ((t[Un] = !0), Bn('selectionchange', !1, t));
          }
        }
        function Hn(e, t, r, n) {
          switch (Yt(t)) {
            case 1:
              var o = $t;
              break;
            case 4:
              o = qt;
              break;
            default:
              o = Gt;
          }
          (r = o.bind(null, t, r, e)),
            (o = void 0),
            !_e || ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) || (o = !0),
            n
              ? void 0 !== o
                ? e.addEventListener(t, r, { capture: !0, passive: o })
                : e.addEventListener(t, r, !0)
              : void 0 !== o
              ? e.addEventListener(t, r, { passive: o })
              : e.addEventListener(t, r, !1);
        }
        function Vn(e, t, r, n, o) {
          var a = n;
          if (0 === (1 & t) && 0 === (2 & t) && null !== n)
            e: for (;;) {
              if (null === n) return;
              var i = n.tag;
              if (3 === i || 4 === i) {
                var l = n.stateNode.containerInfo;
                if (l === o || (8 === l.nodeType && l.parentNode === o)) break;
                if (4 === i)
                  for (i = n.return; null !== i; ) {
                    var s = i.tag;
                    if (
                      (3 === s || 4 === s) &&
                      ((s = i.stateNode.containerInfo) === o ||
                        (8 === s.nodeType && s.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== l; ) {
                  if (null === (i = yo(l))) return;
                  if (5 === (s = i.tag) || 6 === s) {
                    n = a = i;
                    continue e;
                  }
                  l = l.parentNode;
                }
              }
              n = n.return;
            }
          Oe(function () {
            var n = a,
              o = we(r),
              i = [];
            e: {
              var l = Pn.get(e);
              if (void 0 !== l) {
                var s = ur,
                  u = e;
                switch (e) {
                  case 'keypress':
                    if (0 === tr(r)) break e;
                  case 'keydown':
                  case 'keyup':
                    s = Cr;
                    break;
                  case 'focusin':
                    (u = 'focus'), (s = gr);
                    break;
                  case 'focusout':
                    (u = 'blur'), (s = gr);
                    break;
                  case 'beforeblur':
                  case 'afterblur':
                    s = gr;
                    break;
                  case 'click':
                    if (2 === r.button) break e;
                  case 'auxclick':
                  case 'dblclick':
                  case 'mousedown':
                  case 'mousemove':
                  case 'mouseup':
                  case 'mouseout':
                  case 'mouseover':
                  case 'contextmenu':
                    s = pr;
                    break;
                  case 'drag':
                  case 'dragend':
                  case 'dragenter':
                  case 'dragexit':
                  case 'dragleave':
                  case 'dragover':
                  case 'dragstart':
                  case 'drop':
                    s = hr;
                    break;
                  case 'touchcancel':
                  case 'touchend':
                  case 'touchmove':
                  case 'touchstart':
                    s = Rr;
                    break;
                  case Cn:
                  case jn:
                  case Rn:
                    s = mr;
                    break;
                  case Tn:
                    s = Tr;
                    break;
                  case 'scroll':
                    s = dr;
                    break;
                  case 'wheel':
                    s = Or;
                    break;
                  case 'copy':
                  case 'cut':
                  case 'paste':
                    s = br;
                    break;
                  case 'gotpointercapture':
                  case 'lostpointercapture':
                  case 'pointercancel':
                  case 'pointerdown':
                  case 'pointermove':
                  case 'pointerout':
                  case 'pointerover':
                  case 'pointerup':
                    s = jr;
                }
                var c = 0 !== (4 & t),
                  d = !c && 'scroll' === e,
                  f = c ? (null !== l ? l + 'Capture' : null) : l;
                c = [];
                for (var p, h = n; null !== h; ) {
                  var g = (p = h).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== g &&
                      ((p = g), null !== f && null != (g = Le(h, f)) && c.push($n(h, g, p))),
                    d)
                  )
                    break;
                  h = h.return;
                }
                0 < c.length && ((l = new s(l, u, null, r, o)), i.push({ event: l, listeners: c }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((s = 'mouseout' === e || 'pointerout' === e),
                (!(l = 'mouseover' === e || 'pointerover' === e) ||
                  r === xe ||
                  !(u = r.relatedTarget || r.fromElement) ||
                  (!yo(u) && !u[go])) &&
                  (s || l) &&
                  ((l =
                    o.window === o
                      ? o
                      : (l = o.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                  s
                    ? ((s = n),
                      null !== (u = (u = r.relatedTarget || r.toElement) ? yo(u) : null) &&
                        (u !== (d = We(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                        (u = null))
                    : ((s = null), (u = n)),
                  s !== u))
              ) {
                if (
                  ((c = pr),
                  (g = 'onMouseLeave'),
                  (f = 'onMouseEnter'),
                  (h = 'mouse'),
                  ('pointerout' !== e && 'pointerover' !== e) ||
                    ((c = jr), (g = 'onPointerLeave'), (f = 'onPointerEnter'), (h = 'pointer')),
                  (d = null == s ? l : wo(s)),
                  (p = null == u ? l : wo(u)),
                  ((l = new c(g, h + 'leave', s, r, o)).target = d),
                  (l.relatedTarget = p),
                  (g = null),
                  yo(o) === n &&
                    (((c = new c(f, h + 'enter', u, r, o)).target = p),
                    (c.relatedTarget = d),
                    (g = c)),
                  (d = g),
                  s && u)
                )
                  e: {
                    for (f = u, h = 0, p = c = s; p; p = Gn(p)) h++;
                    for (p = 0, g = f; g; g = Gn(g)) p++;
                    for (; 0 < h - p; ) (c = Gn(c)), h--;
                    for (; 0 < p - h; ) (f = Gn(f)), p--;
                    for (; h--; ) {
                      if (c === f || (null !== f && c === f.alternate)) break e;
                      (c = Gn(c)), (f = Gn(f));
                    }
                    c = null;
                  }
                else c = null;
                null !== s && Kn(i, l, s, c, !1), null !== u && null !== d && Kn(i, d, u, c, !0);
              }
              if (
                'select' === (s = (l = n ? wo(n) : window).nodeName && l.nodeName.toLowerCase()) ||
                ('input' === s && 'file' === l.type)
              )
                var m = Qr;
              else if (Hr(l))
                if (Yr) m = an;
                else {
                  m = nn;
                  var v = rn;
                }
              else
                (s = l.nodeName) &&
                  'input' === s.toLowerCase() &&
                  ('checkbox' === l.type || 'radio' === l.type) &&
                  (m = on);
              switch (
                (m && (m = m(e, n))
                  ? Vr(i, m, r, o)
                  : (v && v(e, l, n),
                    'focusout' === e &&
                      (v = l._wrapperState) &&
                      v.controlled &&
                      'number' === l.type &&
                      ee(l, 'number', l.value)),
                (v = n ? wo(n) : window),
                e)
              ) {
                case 'focusin':
                  (Hr(v) || 'true' === v.contentEditable) && ((mn = v), (vn = n), (bn = null));
                  break;
                case 'focusout':
                  bn = vn = mn = null;
                  break;
                case 'mousedown':
                  yn = !0;
                  break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                  (yn = !1), xn(i, r, o);
                  break;
                case 'selectionchange':
                  if (gn) break;
                case 'keydown':
                case 'keyup':
                  xn(i, r, o);
              }
              var b;
              if (_r)
                e: {
                  switch (e) {
                    case 'compositionstart':
                      var y = 'onCompositionStart';
                      break e;
                    case 'compositionend':
                      y = 'onCompositionEnd';
                      break e;
                    case 'compositionupdate':
                      y = 'onCompositionUpdate';
                      break e;
                  }
                  y = void 0;
                }
              else
                Ur
                  ? Fr(e, r) && (y = 'onCompositionEnd')
                  : 'keydown' === e && 229 === r.keyCode && (y = 'onCompositionStart');
              y &&
                (zr &&
                  'ko' !== r.locale &&
                  (Ur || 'onCompositionStart' !== y
                    ? 'onCompositionEnd' === y && Ur && (b = er())
                    : ((Jt = 'value' in (Xt = o) ? Xt.value : Xt.textContent), (Ur = !0))),
                0 < (v = qn(n, y)).length &&
                  ((y = new yr(y, e, null, r, o)),
                  i.push({ event: y, listeners: v }),
                  b ? (y.data = b) : null !== (b = Br(r)) && (y.data = b))),
                (b = Dr
                  ? (function (e, t) {
                      switch (e) {
                        case 'compositionend':
                          return Br(t);
                        case 'keypress':
                          return 32 !== t.which ? null : ((Ar = !0), Mr);
                        case 'textInput':
                          return (e = t.data) === Mr && Ar ? null : e;
                        default:
                          return null;
                      }
                    })(e, r)
                  : (function (e, t) {
                      if (Ur)
                        return 'compositionend' === e || (!_r && Fr(e, t))
                          ? ((e = er()), (Zt = Jt = Xt = null), (Ur = !1), e)
                          : null;
                      switch (e) {
                        case 'paste':
                        default:
                          return null;
                        case 'keypress':
                          if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case 'compositionend':
                          return zr && 'ko' !== t.locale ? null : t.data;
                      }
                    })(e, r)) &&
                  0 < (n = qn(n, 'onBeforeInput')).length &&
                  ((o = new yr('onBeforeInput', 'beforeinput', null, r, o)),
                  i.push({ event: o, listeners: n }),
                  (o.data = b));
            }
            An(i, t);
          });
        }
        function $n(e, t, r) {
          return { instance: e, listener: t, currentTarget: r };
        }
        function qn(e, t) {
          for (var r = t + 'Capture', n = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Le(e, r)) && n.unshift($n(e, a, o)),
              null != (a = Le(e, t)) && n.push($n(e, a, o))),
              (e = e.return);
          }
          return n;
        }
        function Gn(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Kn(e, t, r, n, o) {
          for (var a = t._reactName, i = []; null !== r && r !== n; ) {
            var l = r,
              s = l.alternate,
              u = l.stateNode;
            if (null !== s && s === n) break;
            5 === l.tag &&
              null !== u &&
              ((l = u),
              o
                ? null != (s = Le(r, a)) && i.unshift($n(r, s, l))
                : o || (null != (s = Le(r, a)) && i.push($n(r, s, l)))),
              (r = r.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Qn = /\r\n?/g,
          Yn = /\u0000|\uFFFD/g;
        function Xn(e) {
          return ('string' === typeof e ? e : '' + e).replace(Qn, '\n').replace(Yn, '');
        }
        function Jn(e, t, r) {
          if (((t = Xn(t)), Xn(e) !== t && r)) throw Error(a(425));
        }
        function Zn() {}
        var eo = null,
          to = null;
        function ro(e, t) {
          return (
            'textarea' === e ||
            'noscript' === e ||
            'string' === typeof t.children ||
            'number' === typeof t.children ||
            ('object' === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var no = 'function' === typeof setTimeout ? setTimeout : void 0,
          oo = 'function' === typeof clearTimeout ? clearTimeout : void 0,
          ao = 'function' === typeof Promise ? Promise : void 0,
          io =
            'function' === typeof queueMicrotask
              ? queueMicrotask
              : 'undefined' !== typeof ao
              ? function (e) {
                  return ao.resolve(null).then(e).catch(lo);
                }
              : no;
        function lo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function so(e, t) {
          var r = t,
            n = 0;
          do {
            var o = r.nextSibling;
            if ((e.removeChild(r), o && 8 === o.nodeType))
              if ('/$' === (r = o.data)) {
                if (0 === n) return e.removeChild(o), void Wt(t);
                n--;
              } else ('$' !== r && '$?' !== r && '$!' !== r) || n++;
            r = o;
          } while (r);
          Wt(t);
        }
        function uo(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ('$' === (t = e.data) || '$!' === t || '$?' === t) break;
              if ('/$' === t) return null;
            }
          }
          return e;
        }
        function co(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var r = e.data;
              if ('$' === r || '$!' === r || '$?' === r) {
                if (0 === t) return e;
                t--;
              } else '/$' === r && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var fo = Math.random().toString(36).slice(2),
          po = '__reactFiber$' + fo,
          ho = '__reactProps$' + fo,
          go = '__reactContainer$' + fo,
          mo = '__reactEvents$' + fo,
          vo = '__reactListeners$' + fo,
          bo = '__reactHandles$' + fo;
        function yo(e) {
          var t = e[po];
          if (t) return t;
          for (var r = e.parentNode; r; ) {
            if ((t = r[go] || r[po])) {
              if (((r = t.alternate), null !== t.child || (null !== r && null !== r.child)))
                for (e = co(e); null !== e; ) {
                  if ((r = e[po])) return r;
                  e = co(e);
                }
              return t;
            }
            r = (e = r).parentNode;
          }
          return null;
        }
        function xo(e) {
          return !(e = e[po] || e[go]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function wo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[ho] || null;
        }
        var No = [],
          So = -1;
        function Eo(e) {
          return { current: e };
        }
        function Co(e) {
          0 > So || ((e.current = No[So]), (No[So] = null), So--);
        }
        function jo(e, t) {
          So++, (No[So] = e.current), (e.current = t);
        }
        var Ro = {},
          To = Eo(Ro),
          Po = Eo(!1),
          Oo = Ro;
        function Lo(e, t) {
          var r = e.type.contextTypes;
          if (!r) return Ro;
          var n = e.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
            return n.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in r) a[o] = t[o];
          return (
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function _o(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function Io() {
          Co(Po), Co(To);
        }
        function Do(e, t, r) {
          if (To.current !== Ro) throw Error(a(168));
          jo(To, t), jo(Po, r);
        }
        function zo(e, t, r) {
          var n = e.stateNode;
          if (((t = t.childContextTypes), 'function' !== typeof n.getChildContext)) return r;
          for (var o in (n = n.getChildContext()))
            if (!(o in t)) throw Error(a(108, H(e) || 'Unknown', o));
          return M({}, r, n);
        }
        function Mo(e) {
          return (
            (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ro),
            (Oo = To.current),
            jo(To, e),
            jo(Po, Po.current),
            !0
          );
        }
        function Ao(e, t, r) {
          var n = e.stateNode;
          if (!n) throw Error(a(169));
          r
            ? ((e = zo(e, t, Oo)),
              (n.__reactInternalMemoizedMergedChildContext = e),
              Co(Po),
              Co(To),
              jo(To, e))
            : Co(Po),
            jo(Po, r);
        }
        var Fo = null,
          Bo = !1,
          Uo = !1;
        function Wo(e) {
          null === Fo ? (Fo = [e]) : Fo.push(e);
        }
        function Ho() {
          if (!Uo && null !== Fo) {
            Uo = !0;
            var e = 0,
              t = yt;
            try {
              var r = Fo;
              for (yt = 1; e < r.length; e++) {
                var n = r[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
              (Fo = null), (Bo = !1);
            } catch (o) {
              throw (null !== Fo && (Fo = Fo.slice(e + 1)), Ge(Ze, Ho), o);
            } finally {
              (yt = t), (Uo = !1);
            }
          }
          return null;
        }
        var Vo = [],
          $o = 0,
          qo = null,
          Go = 0,
          Ko = [],
          Qo = 0,
          Yo = null,
          Xo = 1,
          Jo = '';
        function Zo(e, t) {
          (Vo[$o++] = Go), (Vo[$o++] = qo), (qo = e), (Go = t);
        }
        function ea(e, t, r) {
          (Ko[Qo++] = Xo), (Ko[Qo++] = Jo), (Ko[Qo++] = Yo), (Yo = e);
          var n = Xo;
          e = Jo;
          var o = 32 - it(n) - 1;
          (n &= ~(1 << o)), (r += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (n & ((1 << i) - 1)).toString(32)),
              (n >>= i),
              (o -= i),
              (Xo = (1 << (32 - it(t) + o)) | (r << o) | n),
              (Jo = a + e);
          } else (Xo = (1 << a) | (r << o) | n), (Jo = e);
        }
        function ta(e) {
          null !== e.return && (Zo(e, 1), ea(e, 1, 0));
        }
        function ra(e) {
          for (; e === qo; ) (qo = Vo[--$o]), (Vo[$o] = null), (Go = Vo[--$o]), (Vo[$o] = null);
          for (; e === Yo; )
            (Yo = Ko[--Qo]),
              (Ko[Qo] = null),
              (Jo = Ko[--Qo]),
              (Ko[Qo] = null),
              (Xo = Ko[--Qo]),
              (Ko[Qo] = null);
        }
        var na = null,
          oa = null,
          aa = !1,
          ia = null;
        function la(e, t) {
          var r = Lu(5, null, null, 0);
          (r.elementType = 'DELETED'),
            (r.stateNode = t),
            (r.return = e),
            null === (t = e.deletions) ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
        }
        function sa(e, t) {
          switch (e.tag) {
            case 5:
              var r = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) &&
                ((e.stateNode = t), (na = e), (oa = uo(t.firstChild)), !0)
              );
            case 6:
              return (
                null !== (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (na = e), (oa = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((r = null !== Yo ? { id: Xo, overflow: Jo } : null),
                (e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }),
                ((r = Lu(18, null, null, 0)).stateNode = t),
                (r.return = e),
                (e.child = r),
                (na = e),
                (oa = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function ua(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function ca(e) {
          if (aa) {
            var t = oa;
            if (t) {
              var r = t;
              if (!sa(e, t)) {
                if (ua(e)) throw Error(a(418));
                t = uo(r.nextSibling);
                var n = na;
                t && sa(e, t) ? la(n, r) : ((e.flags = (-4097 & e.flags) | 2), (aa = !1), (na = e));
              }
            } else {
              if (ua(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (aa = !1), (na = e);
            }
          }
        }
        function da(e) {
          for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag; )
            e = e.return;
          na = e;
        }
        function fa(e) {
          if (e !== na) return !1;
          if (!aa) return da(e), (aa = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t = 'head' !== (t = e.type) && 'body' !== t && !ro(e.type, e.memoizedProps)),
            t && (t = oa))
          ) {
            if (ua(e)) throw (pa(), Error(a(418)));
            for (; t; ) la(e, t), (t = uo(t.nextSibling));
          }
          if ((da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var r = e.data;
                  if ('/$' === r) {
                    if (0 === t) {
                      oa = uo(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ('$' !== r && '$!' !== r && '$?' !== r) || t++;
                }
                e = e.nextSibling;
              }
              oa = null;
            }
          } else oa = na ? uo(e.stateNode.nextSibling) : null;
          return !0;
        }
        function pa() {
          for (var e = oa; e; ) e = uo(e.nextSibling);
        }
        function ha() {
          (oa = na = null), (aa = !1);
        }
        function ga(e) {
          null === ia ? (ia = [e]) : ia.push(e);
        }
        var ma = x.ReactCurrentBatchConfig;
        function va(e, t) {
          if (e && e.defaultProps) {
            for (var r in ((t = M({}, t)), (e = e.defaultProps))) void 0 === t[r] && (t[r] = e[r]);
            return t;
          }
          return t;
        }
        var ba = Eo(null),
          ya = null,
          xa = null,
          wa = null;
        function ka() {
          wa = xa = ya = null;
        }
        function Na(e) {
          var t = ba.current;
          Co(ba), (e._currentValue = t);
        }
        function Sa(e, t, r) {
          for (; null !== e; ) {
            var n = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== n && (n.childLanes |= t))
                : null !== n && (n.childLanes & t) !== t && (n.childLanes |= t),
              e === r)
            )
              break;
            e = e.return;
          }
        }
        function Ea(e, t) {
          (ya = e),
            (wa = xa = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (xl = !0), (e.firstContext = null));
        }
        function Ca(e) {
          var t = e._currentValue;
          if (wa !== e)
            if (((e = { context: e, memoizedValue: t, next: null }), null === xa)) {
              if (null === ya) throw Error(a(308));
              (xa = e), (ya.dependencies = { lanes: 0, firstContext: e });
            } else xa = xa.next = e;
          return t;
        }
        var ja = null;
        function Ra(e) {
          null === ja ? (ja = [e]) : ja.push(e);
        }
        function Ta(e, t, r, n) {
          var o = t.interleaved;
          return (
            null === o ? ((r.next = r), Ra(t)) : ((r.next = o.next), (o.next = r)),
            (t.interleaved = r),
            Pa(e, n)
          );
        }
        function Pa(e, t) {
          e.lanes |= t;
          var r = e.alternate;
          for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (r = e.alternate) && (r.childLanes |= t),
              (r = e),
              (e = e.return);
          return 3 === r.tag ? r.stateNode : null;
        }
        var Oa = !1;
        function La(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function _a(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function Ia(e, t) {
          return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
        }
        function Da(e, t, r) {
          var n = e.updateQueue;
          if (null === n) return null;
          if (((n = n.shared), 0 !== (2 & Ts))) {
            var o = n.pending;
            return (
              null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
              (n.pending = t),
              Pa(e, r)
            );
          }
          return (
            null === (o = n.interleaved)
              ? ((t.next = t), Ra(n))
              : ((t.next = o.next), (o.next = t)),
            (n.interleaved = t),
            Pa(e, r)
          );
        }
        function za(e, t, r) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 0 !== (4194240 & r))) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), bt(e, r);
          }
        }
        function Ma(e, t) {
          var r = e.updateQueue,
            n = e.alternate;
          if (null !== n && r === (n = n.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (r = r.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: r.eventTime,
                  lane: r.lane,
                  tag: r.tag,
                  payload: r.payload,
                  callback: r.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (r = r.next);
              } while (null !== r);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (r = {
                baseState: n.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: n.shared,
                effects: n.effects,
              }),
              void (e.updateQueue = r)
            );
          }
          null === (e = r.lastBaseUpdate) ? (r.firstBaseUpdate = t) : (e.next = t),
            (r.lastBaseUpdate = t);
        }
        function Aa(e, t, r, n) {
          var o = e.updateQueue;
          Oa = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            l = o.shared.pending;
          if (null !== l) {
            o.shared.pending = null;
            var s = l,
              u = s.next;
            (s.next = null), null === i ? (a = u) : (i.next = u), (i = s);
            var c = e.alternate;
            null !== c &&
              (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
              (null === l ? (c.firstBaseUpdate = u) : (l.next = u), (c.lastBaseUpdate = s));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, c = u = s = null, l = a; ; ) {
              var f = l.lane,
                p = l.eventTime;
              if ((n & f) === f) {
                null !== c &&
                  (c = c.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: l.tag,
                      payload: l.payload,
                      callback: l.callback,
                      next: null,
                    });
                e: {
                  var h = e,
                    g = l;
                  switch (((f = t), (p = r), g.tag)) {
                    case 1:
                      if ('function' === typeof (h = g.payload)) {
                        d = h.call(p, d, f);
                        break e;
                      }
                      d = h;
                      break e;
                    case 3:
                      h.flags = (-65537 & h.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f = 'function' === typeof (h = g.payload) ? h.call(p, d, f) : h) ||
                        void 0 === f
                      )
                        break e;
                      d = M({}, d, f);
                      break e;
                    case 2:
                      Oa = !0;
                  }
                }
                null !== l.callback &&
                  0 !== l.lane &&
                  ((e.flags |= 64), null === (f = o.effects) ? (o.effects = [l]) : f.push(l));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                }),
                  null === c ? ((u = c = p), (s = d)) : (c = c.next = p),
                  (i |= f);
              if (null === (l = l.next)) {
                if (null === (l = o.shared.pending)) break;
                (l = (f = l).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === c && (s = d),
              (o.baseState = s),
              (o.firstBaseUpdate = u),
              (o.lastBaseUpdate = c),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Ms |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function Fa(e, t, r) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var n = e[t],
                o = n.callback;
              if (null !== o) {
                if (((n.callback = null), (n = r), 'function' !== typeof o)) throw Error(a(191, o));
                o.call(n);
              }
            }
        }
        var Ba = new n.Component().refs;
        function Ua(e, t, r, n) {
          (r = null === (r = r(n, (t = e.memoizedState))) || void 0 === r ? t : M({}, t, r)),
            (e.memoizedState = r),
            0 === e.lanes && (e.updateQueue.baseState = r);
        }
        var Wa = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && We(e) === e;
          },
          enqueueSetState: function (e, t, r) {
            e = e._reactInternals;
            var n = tu(),
              o = ru(e),
              a = Ia(n, o);
            (a.payload = t),
              void 0 !== r && null !== r && (a.callback = r),
              null !== (t = Da(e, a, o)) && (nu(t, e, o, n), za(t, e, o));
          },
          enqueueReplaceState: function (e, t, r) {
            e = e._reactInternals;
            var n = tu(),
              o = ru(e),
              a = Ia(n, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== r && null !== r && (a.callback = r),
              null !== (t = Da(e, a, o)) && (nu(t, e, o, n), za(t, e, o));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var r = tu(),
              n = ru(e),
              o = Ia(r, n);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              null !== (t = Da(e, o, n)) && (nu(t, e, n, r), za(t, e, n));
          },
        };
        function Ha(e, t, r, n, o, a, i) {
          return 'function' === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(n, a, i)
            : !t.prototype || !t.prototype.isPureReactComponent || !sn(r, n) || !sn(o, a);
        }
        function Va(e, t, r) {
          var n = !1,
            o = Ro,
            a = t.contextType;
          return (
            'object' === typeof a && null !== a
              ? (a = Ca(a))
              : ((o = _o(t) ? Oo : To.current),
                (a = (n = null !== (n = t.contextTypes) && void 0 !== n) ? Lo(e, o) : Ro)),
            (t = new t(r, a)),
            (e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = Wa),
            (e.stateNode = t),
            (t._reactInternals = e),
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function $a(e, t, r, n) {
          (e = t.state),
            'function' === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(r, n),
            'function' === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(r, n),
            t.state !== e && Wa.enqueueReplaceState(t, t.state, null);
        }
        function qa(e, t, r, n) {
          var o = e.stateNode;
          (o.props = r), (o.state = e.memoizedState), (o.refs = Ba), La(e);
          var a = t.contextType;
          'object' === typeof a && null !== a
            ? (o.context = Ca(a))
            : ((a = _o(t) ? Oo : To.current), (o.context = Lo(e, a))),
            (o.state = e.memoizedState),
            'function' === typeof (a = t.getDerivedStateFromProps) &&
              (Ua(e, t, a, r), (o.state = e.memoizedState)),
            'function' === typeof t.getDerivedStateFromProps ||
              'function' === typeof o.getSnapshotBeforeUpdate ||
              ('function' !== typeof o.UNSAFE_componentWillMount &&
                'function' !== typeof o.componentWillMount) ||
              ((t = o.state),
              'function' === typeof o.componentWillMount && o.componentWillMount(),
              'function' === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(),
              t !== o.state && Wa.enqueueReplaceState(o, o.state, null),
              Aa(e, r, o, n),
              (o.state = e.memoizedState)),
            'function' === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        function Ga(e, t, r) {
          if (null !== (e = r.ref) && 'function' !== typeof e && 'object' !== typeof e) {
            if (r._owner) {
              if ((r = r._owner)) {
                if (1 !== r.tag) throw Error(a(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(a(147, e));
              var o = n,
                i = '' + e;
              return null !== t &&
                null !== t.ref &&
                'function' === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === Ba && (t = o.refs = {}), null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ('string' !== typeof e) throw Error(a(284));
            if (!r._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Ka(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                '[object Object]' === e
                  ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                  : e,
              ),
            ))
          );
        }
        function Qa(e) {
          return (0, e._init)(e._payload);
        }
        function Ya(e) {
          function t(t, r) {
            if (e) {
              var n = t.deletions;
              null === n ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
            }
          }
          function r(r, n) {
            if (!e) return null;
            for (; null !== n; ) t(r, n), (n = n.sibling);
            return null;
          }
          function n(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Iu(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, r, n) {
            return (
              (t.index = n),
              e
                ? null !== (n = t.alternate)
                  ? (n = n.index) < r
                    ? ((t.flags |= 2), r)
                    : n
                  : ((t.flags |= 2), r)
                : ((t.flags |= 1048576), r)
            );
          }
          function l(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function s(e, t, r, n) {
            return null === t || 6 !== t.tag
              ? (((t = Au(r, e.mode, n)).return = e), t)
              : (((t = o(t, r)).return = e), t);
          }
          function u(e, t, r, n) {
            var a = r.type;
            return a === N
              ? d(e, t, r.props.children, n, r.key)
              : null !== t &&
                (t.elementType === a ||
                  ('object' === typeof a && null !== a && a.$$typeof === L && Qa(a) === t.type))
              ? (((n = o(t, r.props)).ref = Ga(e, t, r)), (n.return = e), n)
              : (((n = Du(r.type, r.key, r.props, null, e.mode, n)).ref = Ga(e, t, r)),
                (n.return = e),
                n);
          }
          function c(e, t, r, n) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== r.containerInfo ||
              t.stateNode.implementation !== r.implementation
              ? (((t = Fu(r, e.mode, n)).return = e), t)
              : (((t = o(t, r.children || [])).return = e), t);
          }
          function d(e, t, r, n, a) {
            return null === t || 7 !== t.tag
              ? (((t = zu(r, e.mode, n, a)).return = e), t)
              : (((t = o(t, r)).return = e), t);
          }
          function f(e, t, r) {
            if (('string' === typeof t && '' !== t) || 'number' === typeof t)
              return ((t = Au('' + t, e.mode, r)).return = e), t;
            if ('object' === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((r = Du(t.type, t.key, t.props, null, e.mode, r)).ref = Ga(e, null, t)),
                    (r.return = e),
                    r
                  );
                case k:
                  return ((t = Fu(t, e.mode, r)).return = e), t;
                case L:
                  return f(e, (0, t._init)(t._payload), r);
              }
              if (te(t) || D(t)) return ((t = zu(t, e.mode, r, null)).return = e), t;
              Ka(e, t);
            }
            return null;
          }
          function p(e, t, r, n) {
            var o = null !== t ? t.key : null;
            if (('string' === typeof r && '' !== r) || 'number' === typeof r)
              return null !== o ? null : s(e, t, '' + r, n);
            if ('object' === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return r.key === o ? u(e, t, r, n) : null;
                case k:
                  return r.key === o ? c(e, t, r, n) : null;
                case L:
                  return p(e, t, (o = r._init)(r._payload), n);
              }
              if (te(r) || D(r)) return null !== o ? null : d(e, t, r, n, null);
              Ka(e, r);
            }
            return null;
          }
          function h(e, t, r, n, o) {
            if (('string' === typeof n && '' !== n) || 'number' === typeof n)
              return s(t, (e = e.get(r) || null), '' + n, o);
            if ('object' === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return u(t, (e = e.get(null === n.key ? r : n.key) || null), n, o);
                case k:
                  return c(t, (e = e.get(null === n.key ? r : n.key) || null), n, o);
                case L:
                  return h(e, t, r, (0, n._init)(n._payload), o);
              }
              if (te(n) || D(n)) return d(t, (e = e.get(r) || null), n, o, null);
              Ka(t, n);
            }
            return null;
          }
          function g(o, a, l, s) {
            for (
              var u = null, c = null, d = a, g = (a = 0), m = null;
              null !== d && g < l.length;
              g++
            ) {
              d.index > g ? ((m = d), (d = null)) : (m = d.sibling);
              var v = p(o, d, l[g], s);
              if (null === v) {
                null === d && (d = m);
                break;
              }
              e && d && null === v.alternate && t(o, d),
                (a = i(v, a, g)),
                null === c ? (u = v) : (c.sibling = v),
                (c = v),
                (d = m);
            }
            if (g === l.length) return r(o, d), aa && Zo(o, g), u;
            if (null === d) {
              for (; g < l.length; g++)
                null !== (d = f(o, l[g], s)) &&
                  ((a = i(d, a, g)), null === c ? (u = d) : (c.sibling = d), (c = d));
              return aa && Zo(o, g), u;
            }
            for (d = n(o, d); g < l.length; g++)
              null !== (m = h(d, o, g, l[g], s)) &&
                (e && null !== m.alternate && d.delete(null === m.key ? g : m.key),
                (a = i(m, a, g)),
                null === c ? (u = m) : (c.sibling = m),
                (c = m));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, g),
              u
            );
          }
          function m(o, l, s, u) {
            var c = D(s);
            if ('function' !== typeof c) throw Error(a(150));
            if (null == (s = c.call(s))) throw Error(a(151));
            for (
              var d = (c = null), g = l, m = (l = 0), v = null, b = s.next();
              null !== g && !b.done;
              m++, b = s.next()
            ) {
              g.index > m ? ((v = g), (g = null)) : (v = g.sibling);
              var y = p(o, g, b.value, u);
              if (null === y) {
                null === g && (g = v);
                break;
              }
              e && g && null === y.alternate && t(o, g),
                (l = i(y, l, m)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y),
                (g = v);
            }
            if (b.done) return r(o, g), aa && Zo(o, m), c;
            if (null === g) {
              for (; !b.done; m++, b = s.next())
                null !== (b = f(o, b.value, u)) &&
                  ((l = i(b, l, m)), null === d ? (c = b) : (d.sibling = b), (d = b));
              return aa && Zo(o, m), c;
            }
            for (g = n(o, g); !b.done; m++, b = s.next())
              null !== (b = h(g, o, m, b.value, u)) &&
                (e && null !== b.alternate && g.delete(null === b.key ? m : b.key),
                (l = i(b, l, m)),
                null === d ? (c = b) : (d.sibling = b),
                (d = b));
            return (
              e &&
                g.forEach(function (e) {
                  return t(o, e);
                }),
              aa && Zo(o, m),
              c
            );
          }
          return function e(n, a, i, s) {
            if (
              ('object' === typeof i &&
                null !== i &&
                i.type === N &&
                null === i.key &&
                (i = i.props.children),
              'object' === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var u = i.key, c = a; null !== c; ) {
                      if (c.key === u) {
                        if ((u = i.type) === N) {
                          if (7 === c.tag) {
                            r(n, c.sibling), ((a = o(c, i.props.children)).return = n), (n = a);
                            break e;
                          }
                        } else if (
                          c.elementType === u ||
                          ('object' === typeof u &&
                            null !== u &&
                            u.$$typeof === L &&
                            Qa(u) === c.type)
                        ) {
                          r(n, c.sibling),
                            ((a = o(c, i.props)).ref = Ga(n, c, i)),
                            (a.return = n),
                            (n = a);
                          break e;
                        }
                        r(n, c);
                        break;
                      }
                      t(n, c), (c = c.sibling);
                    }
                    i.type === N
                      ? (((a = zu(i.props.children, n.mode, s, i.key)).return = n), (n = a))
                      : (((s = Du(i.type, i.key, i.props, null, n.mode, s)).ref = Ga(n, a, i)),
                        (s.return = n),
                        (n = s));
                  }
                  return l(n);
                case k:
                  e: {
                    for (c = i.key; null !== a; ) {
                      if (a.key === c) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          r(n, a.sibling), ((a = o(a, i.children || [])).return = n), (n = a);
                          break e;
                        }
                        r(n, a);
                        break;
                      }
                      t(n, a), (a = a.sibling);
                    }
                    ((a = Fu(i, n.mode, s)).return = n), (n = a);
                  }
                  return l(n);
                case L:
                  return e(n, a, (c = i._init)(i._payload), s);
              }
              if (te(i)) return g(n, a, i, s);
              if (D(i)) return m(n, a, i, s);
              Ka(n, i);
            }
            return ('string' === typeof i && '' !== i) || 'number' === typeof i
              ? ((i = '' + i),
                null !== a && 6 === a.tag
                  ? (r(n, a.sibling), ((a = o(a, i)).return = n), (n = a))
                  : (r(n, a), ((a = Au(i, n.mode, s)).return = n), (n = a)),
                l(n))
              : r(n, a);
          };
        }
        var Xa = Ya(!0),
          Ja = Ya(!1),
          Za = {},
          ei = Eo(Za),
          ti = Eo(Za),
          ri = Eo(Za);
        function ni(e) {
          if (e === Za) throw Error(a(174));
          return e;
        }
        function oi(e, t) {
          switch ((jo(ri, t), jo(ti, e), jo(ei, Za), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : se(null, '');
              break;
            default:
              t = se((t = (e = 8 === e ? t.parentNode : t).namespaceURI || null), (e = e.tagName));
          }
          Co(ei), jo(ei, t);
        }
        function ai() {
          Co(ei), Co(ti), Co(ri);
        }
        function ii(e) {
          ni(ri.current);
          var t = ni(ei.current),
            r = se(t, e.type);
          t !== r && (jo(ti, e), jo(ei, r));
        }
        function li(e) {
          ti.current === e && (Co(ei), Co(ti));
        }
        var si = Eo(0);
        function ui(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var r = t.memoizedState;
              if (null !== r && (null === (r = r.dehydrated) || '$?' === r.data || '$!' === r.data))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ci = [];
        function di() {
          for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
          ci.length = 0;
        }
        var fi = x.ReactCurrentDispatcher,
          pi = x.ReactCurrentBatchConfig,
          hi = 0,
          gi = null,
          mi = null,
          vi = null,
          bi = !1,
          yi = !1,
          xi = 0,
          wi = 0;
        function ki() {
          throw Error(a(321));
        }
        function Ni(e, t) {
          if (null === t) return !1;
          for (var r = 0; r < t.length && r < e.length; r++) if (!ln(e[r], t[r])) return !1;
          return !0;
        }
        function Si(e, t, r, n, o, i) {
          if (
            ((hi = i),
            (gi = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (fi.current = null === e || null === e.memoizedState ? ll : sl),
            (e = r(n, o)),
            yi)
          ) {
            i = 0;
            do {
              if (((yi = !1), (xi = 0), 25 <= i)) throw Error(a(301));
              (i += 1), (vi = mi = null), (t.updateQueue = null), (fi.current = ul), (e = r(n, o));
            } while (yi);
          }
          if (
            ((fi.current = il),
            (t = null !== mi && null !== mi.next),
            (hi = 0),
            (vi = mi = gi = null),
            (bi = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function Ei() {
          var e = 0 !== xi;
          return (xi = 0), e;
        }
        function Ci() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e), vi;
        }
        function ji() {
          if (null === mi) {
            var e = gi.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = mi.next;
          var t = null === vi ? gi.memoizedState : vi.next;
          if (null !== t) (vi = t), (mi = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (mi = e).memoizedState,
              baseState: mi.baseState,
              baseQueue: mi.baseQueue,
              queue: mi.queue,
              next: null,
            }),
              null === vi ? (gi.memoizedState = vi = e) : (vi = vi.next = e);
          }
          return vi;
        }
        function Ri(e, t) {
          return 'function' === typeof t ? t(e) : t;
        }
        function Ti(e) {
          var t = ji(),
            r = t.queue;
          if (null === r) throw Error(a(311));
          r.lastRenderedReducer = e;
          var n = mi,
            o = n.baseQueue,
            i = r.pending;
          if (null !== i) {
            if (null !== o) {
              var l = o.next;
              (o.next = i.next), (i.next = l);
            }
            (n.baseQueue = o = i), (r.pending = null);
          }
          if (null !== o) {
            (i = o.next), (n = n.baseState);
            var s = (l = null),
              u = null,
              c = i;
            do {
              var d = c.lane;
              if ((hi & d) === d)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: c.action,
                      hasEagerState: c.hasEagerState,
                      eagerState: c.eagerState,
                      next: null,
                    }),
                  (n = c.hasEagerState ? c.eagerState : e(n, c.action));
              else {
                var f = {
                  lane: d,
                  action: c.action,
                  hasEagerState: c.hasEagerState,
                  eagerState: c.eagerState,
                  next: null,
                };
                null === u ? ((s = u = f), (l = n)) : (u = u.next = f), (gi.lanes |= d), (Ms |= d);
              }
              c = c.next;
            } while (null !== c && c !== i);
            null === u ? (l = n) : (u.next = s),
              ln(n, t.memoizedState) || (xl = !0),
              (t.memoizedState = n),
              (t.baseState = l),
              (t.baseQueue = u),
              (r.lastRenderedState = n);
          }
          if (null !== (e = r.interleaved)) {
            o = e;
            do {
              (i = o.lane), (gi.lanes |= i), (Ms |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (r.lanes = 0);
          return [t.memoizedState, r.dispatch];
        }
        function Pi(e) {
          var t = ji(),
            r = t.queue;
          if (null === r) throw Error(a(311));
          r.lastRenderedReducer = e;
          var n = r.dispatch,
            o = r.pending,
            i = t.memoizedState;
          if (null !== o) {
            r.pending = null;
            var l = (o = o.next);
            do {
              (i = e(i, l.action)), (l = l.next);
            } while (l !== o);
            ln(i, t.memoizedState) || (xl = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (r.lastRenderedState = i);
          }
          return [i, n];
        }
        function Oi() {}
        function Li(e, t) {
          var r = gi,
            n = ji(),
            o = t(),
            i = !ln(n.memoizedState, o);
          if (
            (i && ((n.memoizedState = o), (xl = !0)),
            (n = n.queue),
            Vi(Di.bind(null, r, n, e), [e]),
            n.getSnapshot !== t || i || (null !== vi && 1 & vi.memoizedState.tag))
          ) {
            if (((r.flags |= 2048), Fi(9, Ii.bind(null, r, n, o, t), void 0, null), null === Ps))
              throw Error(a(349));
            0 !== (30 & hi) || _i(r, t, o);
          }
          return o;
        }
        function _i(e, t, r) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: r }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }), (gi.updateQueue = t), (t.stores = [e]))
              : null === (r = t.stores)
              ? (t.stores = [e])
              : r.push(e);
        }
        function Ii(e, t, r, n) {
          (t.value = r), (t.getSnapshot = n), zi(t) && Mi(e);
        }
        function Di(e, t, r) {
          return r(function () {
            zi(t) && Mi(e);
          });
        }
        function zi(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var r = t();
            return !ln(e, r);
          } catch (n) {
            return !0;
          }
        }
        function Mi(e) {
          var t = Pa(e, 1);
          null !== t && nu(t, e, 1, -1);
        }
        function Ai(e) {
          var t = Ci();
          return (
            'function' === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Ri,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = rl.bind(null, gi, e)),
            [t.memoizedState, e]
          );
        }
        function Fi(e, t, r, n) {
          return (
            (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
            null === (t = gi.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (gi.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (r = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
            e
          );
        }
        function Bi() {
          return ji().memoizedState;
        }
        function Ui(e, t, r, n) {
          var o = Ci();
          (gi.flags |= e), (o.memoizedState = Fi(1 | t, r, void 0, void 0 === n ? null : n));
        }
        function Wi(e, t, r, n) {
          var o = ji();
          n = void 0 === n ? null : n;
          var a = void 0;
          if (null !== mi) {
            var i = mi.memoizedState;
            if (((a = i.destroy), null !== n && Ni(n, i.deps)))
              return void (o.memoizedState = Fi(t, r, a, n));
          }
          (gi.flags |= e), (o.memoizedState = Fi(1 | t, r, a, n));
        }
        function Hi(e, t) {
          return Ui(8390656, 8, e, t);
        }
        function Vi(e, t) {
          return Wi(2048, 8, e, t);
        }
        function $i(e, t) {
          return Wi(4, 2, e, t);
        }
        function qi(e, t) {
          return Wi(4, 4, e, t);
        }
        function Gi(e, t) {
          return 'function' === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function Ki(e, t, r) {
          return (
            (r = null !== r && void 0 !== r ? r.concat([e]) : null),
            Wi(4, 4, Gi.bind(null, t, e), r)
          );
        }
        function Qi() {}
        function Yi(e, t) {
          var r = ji();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && Ni(t, n[1]) ? n[0] : ((r.memoizedState = [e, t]), e);
        }
        function Xi(e, t) {
          var r = ji();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && Ni(t, n[1])
            ? n[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
        }
        function Ji(e, t, r) {
          return 0 === (21 & hi)
            ? (e.baseState && ((e.baseState = !1), (xl = !0)), (e.memoizedState = r))
            : (ln(r, t) || ((r = gt()), (gi.lanes |= r), (Ms |= r), (e.baseState = !0)), t);
        }
        function Zi(e, t) {
          var r = yt;
          (yt = 0 !== r && 4 > r ? r : 4), e(!0);
          var n = pi.transition;
          pi.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = r), (pi.transition = n);
          }
        }
        function el() {
          return ji().memoizedState;
        }
        function tl(e, t, r) {
          var n = ru(e);
          if (
            ((r = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null }), nl(e))
          )
            ol(t, r);
          else if (null !== (r = Ta(e, t, r, n))) {
            nu(r, e, n, tu()), al(r, t, n);
          }
        }
        function rl(e, t, r) {
          var n = ru(e),
            o = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
          if (nl(e)) ol(t, o);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  l = a(i, r);
                if (((o.hasEagerState = !0), (o.eagerState = l), ln(l, i))) {
                  var s = t.interleaved;
                  return (
                    null === s ? ((o.next = o), Ra(t)) : ((o.next = s.next), (s.next = o)),
                    void (t.interleaved = o)
                  );
                }
              } catch (u) {}
            null !== (r = Ta(e, t, o, n)) && (nu(r, e, n, (o = tu())), al(r, t, n));
          }
        }
        function nl(e) {
          var t = e.alternate;
          return e === gi || (null !== t && t === gi);
        }
        function ol(e, t) {
          yi = bi = !0;
          var r = e.pending;
          null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)), (e.pending = t);
        }
        function al(e, t, r) {
          if (0 !== (4194240 & r)) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), bt(e, r);
          }
        }
        var il = {
            readContext: Ca,
            useCallback: ki,
            useContext: ki,
            useEffect: ki,
            useImperativeHandle: ki,
            useInsertionEffect: ki,
            useLayoutEffect: ki,
            useMemo: ki,
            useReducer: ki,
            useRef: ki,
            useState: ki,
            useDebugValue: ki,
            useDeferredValue: ki,
            useTransition: ki,
            useMutableSource: ki,
            useSyncExternalStore: ki,
            useId: ki,
            unstable_isNewReconciler: !1,
          },
          ll = {
            readContext: Ca,
            useCallback: function (e, t) {
              return (Ci().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: Ca,
            useEffect: Hi,
            useImperativeHandle: function (e, t, r) {
              return (
                (r = null !== r && void 0 !== r ? r.concat([e]) : null),
                Ui(4194308, 4, Gi.bind(null, t, e), r)
              );
            },
            useLayoutEffect: function (e, t) {
              return Ui(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return Ui(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var r = Ci();
              return (t = void 0 === t ? null : t), (e = e()), (r.memoizedState = [e, t]), e;
            },
            useReducer: function (e, t, r) {
              var n = Ci();
              return (
                (t = void 0 !== r ? r(t) : t),
                (n.memoizedState = n.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (n.queue = e),
                (e = e.dispatch = tl.bind(null, gi, e)),
                [n.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (Ci().memoizedState = e);
            },
            useState: Ai,
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return (Ci().memoizedState = e);
            },
            useTransition: function () {
              var e = Ai(!1),
                t = e[0];
              return (e = Zi.bind(null, e[1])), (Ci().memoizedState = e), [t, e];
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, r) {
              var n = gi,
                o = Ci();
              if (aa) {
                if (void 0 === r) throw Error(a(407));
                r = r();
              } else {
                if (((r = t()), null === Ps)) throw Error(a(349));
                0 !== (30 & hi) || _i(n, t, r);
              }
              o.memoizedState = r;
              var i = { value: r, getSnapshot: t };
              return (
                (o.queue = i),
                Hi(Di.bind(null, n, i, e), [e]),
                (n.flags |= 2048),
                Fi(9, Ii.bind(null, n, i, r, t), void 0, null),
                r
              );
            },
            useId: function () {
              var e = Ci(),
                t = Ps.identifierPrefix;
              if (aa) {
                var r = Jo;
                (t = ':' + t + 'R' + (r = (Xo & ~(1 << (32 - it(Xo) - 1))).toString(32) + r)),
                  0 < (r = xi++) && (t += 'H' + r.toString(32)),
                  (t += ':');
              } else t = ':' + t + 'r' + (r = wi++).toString(32) + ':';
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          sl = {
            readContext: Ca,
            useCallback: Yi,
            useContext: Ca,
            useEffect: Vi,
            useImperativeHandle: Ki,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Xi,
            useReducer: Ti,
            useRef: Bi,
            useState: function () {
              return Ti(Ri);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              return Ji(ji(), mi.memoizedState, e);
            },
            useTransition: function () {
              return [Ti(Ri)[0], ji().memoizedState];
            },
            useMutableSource: Oi,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          },
          ul = {
            readContext: Ca,
            useCallback: Yi,
            useContext: Ca,
            useEffect: Vi,
            useImperativeHandle: Ki,
            useInsertionEffect: $i,
            useLayoutEffect: qi,
            useMemo: Xi,
            useReducer: Pi,
            useRef: Bi,
            useState: function () {
              return Pi(Ri);
            },
            useDebugValue: Qi,
            useDeferredValue: function (e) {
              var t = ji();
              return null === mi ? (t.memoizedState = e) : Ji(t, mi.memoizedState, e);
            },
            useTransition: function () {
              return [Pi(Ri)[0], ji().memoizedState];
            },
            useMutableSource: Oi,
            useSyncExternalStore: Li,
            useId: el,
            unstable_isNewReconciler: !1,
          };
        function cl(e, t) {
          try {
            var r = '',
              n = t;
            do {
              (r += U(n)), (n = n.return);
            } while (n);
            var o = r;
          } catch (a) {
            o = '\nError generating stack: ' + a.message + '\n' + a.stack;
          }
          return { value: e, source: t, stack: o, digest: null };
        }
        function dl(e, t, r) {
          return {
            value: e,
            source: null,
            stack: null != r ? r : null,
            digest: null != t ? t : null,
          };
        }
        function fl(e, t) {
          try {
            console.error(t.value);
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        var pl = 'function' === typeof WeakMap ? WeakMap : Map;
        function hl(e, t, r) {
          ((r = Ia(-1, r)).tag = 3), (r.payload = { element: null });
          var n = t.value;
          return (
            (r.callback = function () {
              $s || (($s = !0), (qs = n)), fl(0, t);
            }),
            r
          );
        }
        function gl(e, t, r) {
          (r = Ia(-1, r)).tag = 3;
          var n = e.type.getDerivedStateFromError;
          if ('function' === typeof n) {
            var o = t.value;
            (r.payload = function () {
              return n(o);
            }),
              (r.callback = function () {
                fl(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              'function' === typeof a.componentDidCatch &&
              (r.callback = function () {
                fl(0, t),
                  'function' !== typeof n && (null === Gs ? (Gs = new Set([this])) : Gs.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, { componentStack: null !== e ? e : '' });
              }),
            r
          );
        }
        function ml(e, t, r) {
          var n = e.pingCache;
          if (null === n) {
            n = e.pingCache = new pl();
            var o = new Set();
            n.set(t, o);
          } else void 0 === (o = n.get(t)) && ((o = new Set()), n.set(t, o));
          o.has(r) || (o.add(r), (e = Cu.bind(null, e, t, r)), t.then(e, e));
        }
        function vl(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function bl(e, t, r, n, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (r.flags |= 131072),
                  (r.flags &= -52805),
                  1 === r.tag &&
                    (null === r.alternate
                      ? (r.tag = 17)
                      : (((t = Ia(-1, 1)).tag = 2), Da(r, t, 1))),
                  (r.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        var yl = x.ReactCurrentOwner,
          xl = !1;
        function wl(e, t, r, n) {
          t.child = null === e ? Ja(t, null, r, n) : Xa(t, e.child, r, n);
        }
        function kl(e, t, r, n, o) {
          r = r.render;
          var a = t.ref;
          return (
            Ea(t, o),
            (n = Si(e, t, r, n, a, o)),
            (r = Ei()),
            null === e || xl
              ? (aa && r && ta(t), (t.flags |= 1), wl(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $l(e, t, o))
          );
        }
        function Nl(e, t, r, n, o) {
          if (null === e) {
            var a = r.type;
            return 'function' !== typeof a ||
              _u(a) ||
              void 0 !== a.defaultProps ||
              null !== r.compare ||
              void 0 !== r.defaultProps
              ? (((e = Du(r.type, null, n, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Sl(e, t, a, n, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if ((r = null !== (r = r.compare) ? r : sn)(i, n) && e.ref === t.ref)
              return $l(e, t, o);
          }
          return (t.flags |= 1), ((e = Iu(a, n)).ref = t.ref), (e.return = t), (t.child = e);
        }
        function Sl(e, t, r, n, o) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (sn(a, n) && e.ref === t.ref) {
              if (((xl = !1), (t.pendingProps = n = a), 0 === (e.lanes & o)))
                return (t.lanes = e.lanes), $l(e, t, o);
              0 !== (131072 & e.flags) && (xl = !0);
            }
          }
          return jl(e, t, r, n, o);
        }
        function El(e, t, r) {
          var n = t.pendingProps,
            o = n.children,
            a = null !== e ? e.memoizedState : null;
          if ('hidden' === n.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                jo(Is, _s),
                (_s |= r);
            else {
              if (0 === (1073741824 & r))
                return (
                  (e = null !== a ? a.baseLanes | r : r),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                  (t.updateQueue = null),
                  jo(Is, _s),
                  (_s |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (n = null !== a ? a.baseLanes : r),
                jo(Is, _s),
                (_s |= n);
            }
          else
            null !== a ? ((n = a.baseLanes | r), (t.memoizedState = null)) : (n = r),
              jo(Is, _s),
              (_s |= n);
          return wl(e, t, o, r), t.child;
        }
        function Cl(e, t) {
          var r = t.ref;
          ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function jl(e, t, r, n, o) {
          var a = _o(r) ? Oo : To.current;
          return (
            (a = Lo(t, a)),
            Ea(t, o),
            (r = Si(e, t, r, n, a, o)),
            (n = Ei()),
            null === e || xl
              ? (aa && n && ta(t), (t.flags |= 1), wl(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), $l(e, t, o))
          );
        }
        function Rl(e, t, r, n, o) {
          if (_o(r)) {
            var a = !0;
            Mo(t);
          } else a = !1;
          if ((Ea(t, o), null === t.stateNode)) Vl(e, t), Va(t, r, n), qa(t, r, n, o), (n = !0);
          else if (null === e) {
            var i = t.stateNode,
              l = t.memoizedProps;
            i.props = l;
            var s = i.context,
              u = r.contextType;
            'object' === typeof u && null !== u
              ? (u = Ca(u))
              : (u = Lo(t, (u = _o(r) ? Oo : To.current)));
            var c = r.getDerivedStateFromProps,
              d = 'function' === typeof c || 'function' === typeof i.getSnapshotBeforeUpdate;
            d ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== n || s !== u) && $a(t, i, n, u)),
              (Oa = !1);
            var f = t.memoizedState;
            (i.state = f),
              Aa(t, n, i, o),
              (s = t.memoizedState),
              l !== n || f !== s || Po.current || Oa
                ? ('function' === typeof c && (Ua(t, r, c, n), (s = t.memoizedState)),
                  (l = Oa || Ha(t, r, l, n, f, s, u))
                    ? (d ||
                        ('function' !== typeof i.UNSAFE_componentWillMount &&
                          'function' !== typeof i.componentWillMount) ||
                        ('function' === typeof i.componentWillMount && i.componentWillMount(),
                        'function' === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      'function' === typeof i.componentDidMount && (t.flags |= 4194308))
                    : ('function' === typeof i.componentDidMount && (t.flags |= 4194308),
                      (t.memoizedProps = n),
                      (t.memoizedState = s)),
                  (i.props = n),
                  (i.state = s),
                  (i.context = u),
                  (n = l))
                : ('function' === typeof i.componentDidMount && (t.flags |= 4194308), (n = !1));
          } else {
            (i = t.stateNode),
              _a(e, t),
              (l = t.memoizedProps),
              (u = t.type === t.elementType ? l : va(t.type, l)),
              (i.props = u),
              (d = t.pendingProps),
              (f = i.context),
              'object' === typeof (s = r.contextType) && null !== s
                ? (s = Ca(s))
                : (s = Lo(t, (s = _o(r) ? Oo : To.current)));
            var p = r.getDerivedStateFromProps;
            (c = 'function' === typeof p || 'function' === typeof i.getSnapshotBeforeUpdate) ||
              ('function' !== typeof i.UNSAFE_componentWillReceiveProps &&
                'function' !== typeof i.componentWillReceiveProps) ||
              ((l !== d || f !== s) && $a(t, i, n, s)),
              (Oa = !1),
              (f = t.memoizedState),
              (i.state = f),
              Aa(t, n, i, o);
            var h = t.memoizedState;
            l !== d || f !== h || Po.current || Oa
              ? ('function' === typeof p && (Ua(t, r, p, n), (h = t.memoizedState)),
                (u = Oa || Ha(t, r, u, n, f, h, s) || !1)
                  ? (c ||
                      ('function' !== typeof i.UNSAFE_componentWillUpdate &&
                        'function' !== typeof i.componentWillUpdate) ||
                      ('function' === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(n, h, s),
                      'function' === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(n, h, s)),
                    'function' === typeof i.componentDidUpdate && (t.flags |= 4),
                    'function' === typeof i.getSnapshotBeforeUpdate && (t.flags |= 1024))
                  : ('function' !== typeof i.componentDidUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    'function' !== typeof i.getSnapshotBeforeUpdate ||
                      (l === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = n),
                    (t.memoizedState = h)),
                (i.props = n),
                (i.state = h),
                (i.context = s),
                (n = u))
              : ('function' !== typeof i.componentDidUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                'function' !== typeof i.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (n = !1));
          }
          return Tl(e, t, r, n, a, o);
        }
        function Tl(e, t, r, n, o, a) {
          Cl(e, t);
          var i = 0 !== (128 & t.flags);
          if (!n && !i) return o && Ao(t, r, !1), $l(e, t, a);
          (n = t.stateNode), (yl.current = t);
          var l = i && 'function' !== typeof r.getDerivedStateFromError ? null : n.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Xa(t, e.child, null, a)), (t.child = Xa(t, null, l, a)))
              : wl(e, t, l, a),
            (t.memoizedState = n.state),
            o && Ao(t, r, !0),
            t.child
          );
        }
        function Pl(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Do(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Do(0, t.context, !1),
            oi(e, t.containerInfo);
        }
        function Ol(e, t, r, n, o) {
          return ha(), ga(o), (t.flags |= 256), wl(e, t, r, n), t.child;
        }
        var Ll,
          _l,
          Il,
          Dl,
          zl = { dehydrated: null, treeContext: null, retryLane: 0 };
        function Ml(e) {
          return { baseLanes: e, cachePool: null, transitions: null };
        }
        function Al(e, t, r) {
          var n,
            o = t.pendingProps,
            i = si.current,
            l = !1,
            s = 0 !== (128 & t.flags);
          if (
            ((n = s) || (n = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            n
              ? ((l = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            jo(si, 1 & i),
            null === e)
          )
            return (
              ca(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : '$!' === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((s = o.children),
                  (e = o.fallback),
                  l
                    ? ((o = t.mode),
                      (l = t.child),
                      (s = { mode: 'hidden', children: s }),
                      0 === (1 & o) && null !== l
                        ? ((l.childLanes = 0), (l.pendingProps = s))
                        : (l = Mu(s, o, 0, null)),
                      (e = zu(e, o, r, null)),
                      (l.return = t),
                      (e.return = t),
                      (l.sibling = e),
                      (t.child = l),
                      (t.child.memoizedState = Ml(r)),
                      (t.memoizedState = zl),
                      e)
                    : Fl(t, s))
            );
          if (null !== (i = e.memoizedState) && null !== (n = i.dehydrated))
            return (function (e, t, r, n, o, i, l) {
              if (r)
                return 256 & t.flags
                  ? ((t.flags &= -257), Bl(e, t, l, (n = dl(Error(a(422))))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((i = n.fallback),
                    (o = t.mode),
                    (n = Mu({ mode: 'visible', children: n.children }, o, 0, null)),
                    ((i = zu(i, o, l, null)).flags |= 2),
                    (n.return = t),
                    (i.return = t),
                    (n.sibling = i),
                    (t.child = n),
                    0 !== (1 & t.mode) && Xa(t, e.child, null, l),
                    (t.child.memoizedState = Ml(l)),
                    (t.memoizedState = zl),
                    i);
              if (0 === (1 & t.mode)) return Bl(e, t, l, null);
              if ('$!' === o.data) {
                if ((n = o.nextSibling && o.nextSibling.dataset)) var s = n.dgst;
                return (n = s), Bl(e, t, l, (n = dl((i = Error(a(419))), n, void 0)));
              }
              if (((s = 0 !== (l & e.childLanes)), xl || s)) {
                if (null !== (n = Ps)) {
                  switch (l & -l) {
                    case 4:
                      o = 2;
                      break;
                    case 16:
                      o = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      o = 32;
                      break;
                    case 536870912:
                      o = 268435456;
                      break;
                    default:
                      o = 0;
                  }
                  0 !== (o = 0 !== (o & (n.suspendedLanes | l)) ? 0 : o) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Pa(e, o), nu(n, e, o, -1));
                }
                return mu(), Bl(e, t, l, (n = dl(Error(a(421)))));
              }
              return '$?' === o.data
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  (t = Ru.bind(null, e)),
                  (o._reactRetry = t),
                  null)
                : ((e = i.treeContext),
                  (oa = uo(o.nextSibling)),
                  (na = t),
                  (aa = !0),
                  (ia = null),
                  null !== e &&
                    ((Ko[Qo++] = Xo),
                    (Ko[Qo++] = Jo),
                    (Ko[Qo++] = Yo),
                    (Xo = e.id),
                    (Jo = e.overflow),
                    (Yo = t)),
                  (t = Fl(t, n.children)),
                  (t.flags |= 4096),
                  t);
            })(e, t, s, o, n, i, r);
          if (l) {
            (l = o.fallback), (s = t.mode), (n = (i = e.child).sibling);
            var u = { mode: 'hidden', children: o.children };
            return (
              0 === (1 & s) && t.child !== i
                ? (((o = t.child).childLanes = 0), (o.pendingProps = u), (t.deletions = null))
                : ((o = Iu(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
              null !== n ? (l = Iu(n, l)) : ((l = zu(l, s, r, null)).flags |= 2),
              (l.return = t),
              (o.return = t),
              (o.sibling = l),
              (t.child = o),
              (o = l),
              (l = t.child),
              (s =
                null === (s = e.child.memoizedState)
                  ? Ml(r)
                  : { baseLanes: s.baseLanes | r, cachePool: null, transitions: s.transitions }),
              (l.memoizedState = s),
              (l.childLanes = e.childLanes & ~r),
              (t.memoizedState = zl),
              o
            );
          }
          return (
            (e = (l = e.child).sibling),
            (o = Iu(l, { mode: 'visible', children: o.children })),
            0 === (1 & t.mode) && (o.lanes = r),
            (o.return = t),
            (o.sibling = null),
            null !== e &&
              (null === (r = t.deletions) ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
            (t.child = o),
            (t.memoizedState = null),
            o
          );
        }
        function Fl(e, t) {
          return (
            ((t = Mu({ mode: 'visible', children: t }, e.mode, 0, null)).return = e), (e.child = t)
          );
        }
        function Bl(e, t, r, n) {
          return (
            null !== n && ga(n),
            Xa(t, e.child, null, r),
            ((e = Fl(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ul(e, t, r) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), Sa(e.return, t, r);
        }
        function Wl(e, t, r, n, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = n),
              (a.tail = r),
              (a.tailMode = o));
        }
        function Hl(e, t, r) {
          var n = t.pendingProps,
            o = n.revealOrder,
            a = n.tail;
          if ((wl(e, t, n.children, r), 0 !== (2 & (n = si.current))))
            (n = (1 & n) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ul(e, r, t);
                else if (19 === e.tag) Ul(e, r, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            n &= 1;
          }
          if ((jo(si, n), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case 'forwards':
                for (r = t.child, o = null; null !== r; )
                  null !== (e = r.alternate) && null === ui(e) && (o = r), (r = r.sibling);
                null === (r = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = r.sibling), (r.sibling = null)),
                  Wl(t, !1, o, r, a);
                break;
              case 'backwards':
                for (r = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ui(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = r), (r = o), (o = e);
                }
                Wl(t, !0, r, null, a);
                break;
              case 'together':
                Wl(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Vl(e, t) {
          0 === (1 & t.mode) &&
            null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
        }
        function $l(e, t, r) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ms |= t.lanes),
            0 === (r & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              r = Iu((e = t.child), e.pendingProps), t.child = r, r.return = t;
              null !== e.sibling;

            )
              (e = e.sibling), ((r = r.sibling = Iu(e, e.pendingProps)).return = t);
            r.sibling = null;
          }
          return t.child;
        }
        function ql(e, t) {
          if (!aa)
            switch (e.tailMode) {
              case 'hidden':
                t = e.tail;
                for (var r = null; null !== t; ) null !== t.alternate && (r = t), (t = t.sibling);
                null === r ? (e.tail = null) : (r.sibling = null);
                break;
              case 'collapsed':
                r = e.tail;
                for (var n = null; null !== r; ) null !== r.alternate && (n = r), (r = r.sibling);
                null === n
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (n.sibling = null);
            }
        }
        function Gl(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            r = 0,
            n = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (r |= o.lanes | o.childLanes),
                (n |= 14680064 & o.subtreeFlags),
                (n |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (r |= o.lanes | o.childLanes),
                (n |= o.subtreeFlags),
                (n |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= n), (e.childLanes = r), t;
        }
        function Kl(e, t, r) {
          var n = t.pendingProps;
          switch ((ra(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return Gl(t), null;
            case 1:
            case 17:
              return _o(t.type) && Io(), Gl(t), null;
            case 3:
              return (
                (n = t.stateNode),
                ai(),
                Co(Po),
                Co(To),
                di(),
                n.pendingContext && ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (fa(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024), null !== ia && (lu(ia), (ia = null)))),
                _l(e, t),
                Gl(t),
                null
              );
            case 5:
              li(t);
              var o = ni(ri.current);
              if (((r = t.type), null !== e && null != t.stateNode))
                Il(e, t, r, n, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!n) {
                  if (null === t.stateNode) throw Error(a(166));
                  return Gl(t), null;
                }
                if (((e = ni(ei.current)), fa(t))) {
                  (n = t.stateNode), (r = t.type);
                  var i = t.memoizedProps;
                  switch (((n[po] = t), (n[ho] = i), (e = 0 !== (1 & t.mode)), r)) {
                    case 'dialog':
                      Fn('cancel', n), Fn('close', n);
                      break;
                    case 'iframe':
                    case 'object':
                    case 'embed':
                      Fn('load', n);
                      break;
                    case 'video':
                    case 'audio':
                      for (o = 0; o < Dn.length; o++) Fn(Dn[o], n);
                      break;
                    case 'source':
                      Fn('error', n);
                      break;
                    case 'img':
                    case 'image':
                    case 'link':
                      Fn('error', n), Fn('load', n);
                      break;
                    case 'details':
                      Fn('toggle', n);
                      break;
                    case 'input':
                      Y(n, i), Fn('invalid', n);
                      break;
                    case 'select':
                      (n._wrapperState = { wasMultiple: !!i.multiple }), Fn('invalid', n);
                      break;
                    case 'textarea':
                      oe(n, i), Fn('invalid', n);
                  }
                  for (var s in (be(r, i), (o = null), i))
                    if (i.hasOwnProperty(s)) {
                      var u = i[s];
                      'children' === s
                        ? 'string' === typeof u
                          ? n.textContent !== u &&
                            (!0 !== i.suppressHydrationWarning && Jn(n.textContent, u, e),
                            (o = ['children', u]))
                          : 'number' === typeof u &&
                            n.textContent !== '' + u &&
                            (!0 !== i.suppressHydrationWarning && Jn(n.textContent, u, e),
                            (o = ['children', '' + u]))
                        : l.hasOwnProperty(s) && null != u && 'onScroll' === s && Fn('scroll', n);
                    }
                  switch (r) {
                    case 'input':
                      q(n), Z(n, i, !0);
                      break;
                    case 'textarea':
                      q(n), ie(n);
                      break;
                    case 'select':
                    case 'option':
                      break;
                    default:
                      'function' === typeof i.onClick && (n.onclick = Zn);
                  }
                  (n = o), (t.updateQueue = n), null !== n && (t.flags |= 4);
                } else {
                  (s = 9 === o.nodeType ? o : o.ownerDocument),
                    'http://www.w3.org/1999/xhtml' === e && (e = le(r)),
                    'http://www.w3.org/1999/xhtml' === e
                      ? 'script' === r
                        ? (((e = s.createElement('div')).innerHTML = '<script></script>'),
                          (e = e.removeChild(e.firstChild)))
                        : 'string' === typeof n.is
                        ? (e = s.createElement(r, { is: n.is }))
                        : ((e = s.createElement(r)),
                          'select' === r &&
                            ((s = e), n.multiple ? (s.multiple = !0) : n.size && (s.size = n.size)))
                      : (e = s.createElementNS(e, r)),
                    (e[po] = t),
                    (e[ho] = n),
                    Ll(e, t, !1, !1),
                    (t.stateNode = e);
                  e: {
                    switch (((s = ye(r, n)), r)) {
                      case 'dialog':
                        Fn('cancel', e), Fn('close', e), (o = n);
                        break;
                      case 'iframe':
                      case 'object':
                      case 'embed':
                        Fn('load', e), (o = n);
                        break;
                      case 'video':
                      case 'audio':
                        for (o = 0; o < Dn.length; o++) Fn(Dn[o], e);
                        o = n;
                        break;
                      case 'source':
                        Fn('error', e), (o = n);
                        break;
                      case 'img':
                      case 'image':
                      case 'link':
                        Fn('error', e), Fn('load', e), (o = n);
                        break;
                      case 'details':
                        Fn('toggle', e), (o = n);
                        break;
                      case 'input':
                        Y(e, n), (o = Q(e, n)), Fn('invalid', e);
                        break;
                      case 'option':
                      default:
                        o = n;
                        break;
                      case 'select':
                        (e._wrapperState = { wasMultiple: !!n.multiple }),
                          (o = M({}, n, { value: void 0 })),
                          Fn('invalid', e);
                        break;
                      case 'textarea':
                        oe(e, n), (o = ne(e, n)), Fn('invalid', e);
                    }
                    for (i in (be(r, o), (u = o)))
                      if (u.hasOwnProperty(i)) {
                        var c = u[i];
                        'style' === i
                          ? me(e, c)
                          : 'dangerouslySetInnerHTML' === i
                          ? null != (c = c ? c.__html : void 0) && de(e, c)
                          : 'children' === i
                          ? 'string' === typeof c
                            ? ('textarea' !== r || '' !== c) && fe(e, c)
                            : 'number' === typeof c && fe(e, '' + c)
                          : 'suppressContentEditableWarning' !== i &&
                            'suppressHydrationWarning' !== i &&
                            'autoFocus' !== i &&
                            (l.hasOwnProperty(i)
                              ? null != c && 'onScroll' === i && Fn('scroll', e)
                              : null != c && y(e, i, c, s));
                      }
                    switch (r) {
                      case 'input':
                        q(e), Z(e, n, !1);
                        break;
                      case 'textarea':
                        q(e), ie(e);
                        break;
                      case 'option':
                        null != n.value && e.setAttribute('value', '' + V(n.value));
                        break;
                      case 'select':
                        (e.multiple = !!n.multiple),
                          null != (i = n.value)
                            ? re(e, !!n.multiple, i, !1)
                            : null != n.defaultValue && re(e, !!n.multiple, n.defaultValue, !0);
                        break;
                      default:
                        'function' === typeof o.onClick && (e.onclick = Zn);
                    }
                    switch (r) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        n = !!n.autoFocus;
                        break e;
                      case 'img':
                        n = !0;
                        break e;
                      default:
                        n = !1;
                    }
                  }
                  n && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return Gl(t), null;
            case 6:
              if (e && null != t.stateNode) Dl(e, t, e.memoizedProps, n);
              else {
                if ('string' !== typeof n && null === t.stateNode) throw Error(a(166));
                if (((r = ni(ri.current)), ni(ei.current), fa(t))) {
                  if (
                    ((n = t.stateNode),
                    (r = t.memoizedProps),
                    (n[po] = t),
                    (i = n.nodeValue !== r) && null !== (e = na))
                  )
                    switch (e.tag) {
                      case 3:
                        Jn(n.nodeValue, r, 0 !== (1 & e.mode));
                        break;
                      case 5:
                        !0 !== e.memoizedProps.suppressHydrationWarning &&
                          Jn(n.nodeValue, r, 0 !== (1 & e.mode));
                    }
                  i && (t.flags |= 4);
                } else
                  ((n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(n))[po] = t),
                    (t.stateNode = n);
              }
              return Gl(t), null;
            case 13:
              if (
                (Co(si),
                (n = t.memoizedState),
                null === e || (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
              ) {
                if (aa && null !== oa && 0 !== (1 & t.mode) && 0 === (128 & t.flags))
                  pa(), ha(), (t.flags |= 98560), (i = !1);
                else if (((i = fa(t)), null !== n && null !== n.dehydrated)) {
                  if (null === e) {
                    if (!i) throw Error(a(318));
                    if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                      throw Error(a(317));
                    i[po] = t;
                  } else ha(), 0 === (128 & t.flags) && (t.memoizedState = null), (t.flags |= 4);
                  Gl(t), (i = !1);
                } else null !== ia && (lu(ia), (ia = null)), (i = !0);
                if (!i) return 65536 & t.flags ? t : null;
              }
              return 0 !== (128 & t.flags)
                ? ((t.lanes = r), t)
                : ((n = null !== n) !== (null !== e && null !== e.memoizedState) &&
                    n &&
                    ((t.child.flags |= 8192),
                    0 !== (1 & t.mode) &&
                      (null === e || 0 !== (1 & si.current) ? 0 === Ds && (Ds = 3) : mu())),
                  null !== t.updateQueue && (t.flags |= 4),
                  Gl(t),
                  null);
            case 4:
              return ai(), _l(e, t), null === e && Wn(t.stateNode.containerInfo), Gl(t), null;
            case 10:
              return Na(t.type._context), Gl(t), null;
            case 19:
              if ((Co(si), null === (i = t.memoizedState))) return Gl(t), null;
              if (((n = 0 !== (128 & t.flags)), null === (s = i.rendering)))
                if (n) ql(i, !1);
                else {
                  if (0 !== Ds || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (s = ui(e))) {
                        for (
                          t.flags |= 128,
                            ql(i, !1),
                            null !== (n = s.updateQueue) && ((t.updateQueue = n), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child;
                          null !== r;

                        )
                          (e = n),
                            ((i = r).flags &= 14680066),
                            null === (s = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = s.childLanes),
                                (i.lanes = s.lanes),
                                (i.child = s.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = s.memoizedProps),
                                (i.memoizedState = s.memoizedState),
                                (i.updateQueue = s.updateQueue),
                                (i.type = s.type),
                                (e = s.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : { lanes: e.lanes, firstContext: e.firstContext })),
                            (r = r.sibling);
                        return jo(si, (1 & si.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    Xe() > Hs &&
                    ((t.flags |= 128), (n = !0), ql(i, !1), (t.lanes = 4194304));
                }
              else {
                if (!n)
                  if (null !== (e = ui(s))) {
                    if (
                      ((t.flags |= 128),
                      (n = !0),
                      null !== (r = e.updateQueue) && ((t.updateQueue = r), (t.flags |= 4)),
                      ql(i, !0),
                      null === i.tail && 'hidden' === i.tailMode && !s.alternate && !aa)
                    )
                      return Gl(t), null;
                  } else
                    2 * Xe() - i.renderingStartTime > Hs &&
                      1073741824 !== r &&
                      ((t.flags |= 128), (n = !0), ql(i, !1), (t.lanes = 4194304));
                i.isBackwards
                  ? ((s.sibling = t.child), (t.child = s))
                  : (null !== (r = i.last) ? (r.sibling = s) : (t.child = s), (i.last = s));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = Xe()),
                  (t.sibling = null),
                  (r = si.current),
                  jo(si, n ? (1 & r) | 2 : 1 & r),
                  t)
                : (Gl(t), null);
            case 22:
            case 23:
              return (
                fu(),
                (n = null !== t.memoizedState),
                null !== e && (null !== e.memoizedState) !== n && (t.flags |= 8192),
                n && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & _s) && (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : Gl(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        function Ql(e, t) {
          switch ((ra(t), t.tag)) {
            case 1:
              return (
                _o(t.type) && Io(),
                65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
              );
            case 3:
              return (
                ai(),
                Co(Po),
                Co(To),
                di(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return li(t), null;
            case 13:
              if ((Co(si), null !== (e = t.memoizedState) && null !== e.dehydrated)) {
                if (null === t.alternate) throw Error(a(340));
                ha();
              }
              return 65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null;
            case 19:
              return Co(si), null;
            case 4:
              return ai(), null;
            case 10:
              return Na(t.type._context), null;
            case 22:
            case 23:
              return fu(), null;
            default:
              return null;
          }
        }
        (Ll = function (e, t) {
          for (var r = t.child; null !== r; ) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === t) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        }),
          (_l = function () {}),
          (Il = function (e, t, r, n) {
            var o = e.memoizedProps;
            if (o !== n) {
              (e = t.stateNode), ni(ei.current);
              var a,
                i = null;
              switch (r) {
                case 'input':
                  (o = Q(e, o)), (n = Q(e, n)), (i = []);
                  break;
                case 'select':
                  (o = M({}, o, { value: void 0 })), (n = M({}, n, { value: void 0 })), (i = []);
                  break;
                case 'textarea':
                  (o = ne(e, o)), (n = ne(e, n)), (i = []);
                  break;
                default:
                  'function' !== typeof o.onClick &&
                    'function' === typeof n.onClick &&
                    (e.onclick = Zn);
              }
              for (c in (be(r, n), (r = null), o))
                if (!n.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                  if ('style' === c) {
                    var s = o[c];
                    for (a in s) s.hasOwnProperty(a) && (r || (r = {}), (r[a] = ''));
                  } else
                    'dangerouslySetInnerHTML' !== c &&
                      'children' !== c &&
                      'suppressContentEditableWarning' !== c &&
                      'suppressHydrationWarning' !== c &&
                      'autoFocus' !== c &&
                      (l.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
              for (c in n) {
                var u = n[c];
                if (
                  ((s = null != o ? o[c] : void 0),
                  n.hasOwnProperty(c) && u !== s && (null != u || null != s))
                )
                  if ('style' === c)
                    if (s) {
                      for (a in s)
                        !s.hasOwnProperty(a) ||
                          (u && u.hasOwnProperty(a)) ||
                          (r || (r = {}), (r[a] = ''));
                      for (a in u)
                        u.hasOwnProperty(a) && s[a] !== u[a] && (r || (r = {}), (r[a] = u[a]));
                    } else r || (i || (i = []), i.push(c, r)), (r = u);
                  else
                    'dangerouslySetInnerHTML' === c
                      ? ((u = u ? u.__html : void 0),
                        (s = s ? s.__html : void 0),
                        null != u && s !== u && (i = i || []).push(c, u))
                      : 'children' === c
                      ? ('string' !== typeof u && 'number' !== typeof u) ||
                        (i = i || []).push(c, '' + u)
                      : 'suppressContentEditableWarning' !== c &&
                        'suppressHydrationWarning' !== c &&
                        (l.hasOwnProperty(c)
                          ? (null != u && 'onScroll' === c && Fn('scroll', e),
                            i || s === u || (i = []))
                          : (i = i || []).push(c, u));
              }
              r && (i = i || []).push('style', r);
              var c = i;
              (t.updateQueue = c) && (t.flags |= 4);
            }
          }),
          (Dl = function (e, t, r, n) {
            r !== n && (t.flags |= 4);
          });
        var Yl = !1,
          Xl = !1,
          Jl = 'function' === typeof WeakSet ? WeakSet : Set,
          Zl = null;
        function es(e, t) {
          var r = e.ref;
          if (null !== r)
            if ('function' === typeof r)
              try {
                r(null);
              } catch (n) {
                Eu(e, t, n);
              }
            else r.current = null;
        }
        function ts(e, t, r) {
          try {
            r();
          } catch (n) {
            Eu(e, t, n);
          }
        }
        var rs = !1;
        function ns(e, t, r) {
          var n = t.updateQueue;
          if (null !== (n = null !== n ? n.lastEffect : null)) {
            var o = (n = n.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && ts(t, r, a);
              }
              o = o.next;
            } while (o !== n);
          }
        }
        function os(e, t) {
          if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
            var r = (t = t.next);
            do {
              if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== t);
          }
        }
        function as(e) {
          var t = e.ref;
          if (null !== t) {
            var r = e.stateNode;
            e.tag, (e = r), 'function' === typeof t ? t(e) : (t.current = e);
          }
        }
        function is(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), is(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[po], delete t[ho], delete t[mo], delete t[vo], delete t[bo]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function ls(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ss(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || ls(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function us(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n)
            (e = e.stateNode),
              t
                ? 8 === r.nodeType
                  ? r.parentNode.insertBefore(e, t)
                  : r.insertBefore(e, t)
                : (8 === r.nodeType
                    ? (t = r.parentNode).insertBefore(e, r)
                    : (t = r).appendChild(e),
                  (null !== (r = r._reactRootContainer) && void 0 !== r) ||
                    null !== t.onclick ||
                    (t.onclick = Zn));
          else if (4 !== n && null !== (e = e.child))
            for (us(e, t, r), e = e.sibling; null !== e; ) us(e, t, r), (e = e.sibling);
        }
        function cs(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n) (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
          else if (4 !== n && null !== (e = e.child))
            for (cs(e, t, r), e = e.sibling; null !== e; ) cs(e, t, r), (e = e.sibling);
        }
        var ds = null,
          fs = !1;
        function ps(e, t, r) {
          for (r = r.child; null !== r; ) hs(e, t, r), (r = r.sibling);
        }
        function hs(e, t, r) {
          if (at && 'function' === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, r);
            } catch (l) {}
          switch (r.tag) {
            case 5:
              Xl || es(r, t);
            case 6:
              var n = ds,
                o = fs;
              (ds = null),
                ps(e, t, r),
                (fs = o),
                null !== (ds = n) &&
                  (fs
                    ? ((e = ds),
                      (r = r.stateNode),
                      8 === e.nodeType ? e.parentNode.removeChild(r) : e.removeChild(r))
                    : ds.removeChild(r.stateNode));
              break;
            case 18:
              null !== ds &&
                (fs
                  ? ((e = ds),
                    (r = r.stateNode),
                    8 === e.nodeType ? so(e.parentNode, r) : 1 === e.nodeType && so(e, r),
                    Wt(e))
                  : so(ds, r.stateNode));
              break;
            case 4:
              (n = ds),
                (o = fs),
                (ds = r.stateNode.containerInfo),
                (fs = !0),
                ps(e, t, r),
                (ds = n),
                (fs = o);
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              if (!Xl && null !== (n = r.updateQueue) && null !== (n = n.lastEffect)) {
                o = n = n.next;
                do {
                  var a = o,
                    i = a.destroy;
                  (a = a.tag),
                    void 0 !== i && (0 !== (2 & a) || 0 !== (4 & a)) && ts(r, t, i),
                    (o = o.next);
                } while (o !== n);
              }
              ps(e, t, r);
              break;
            case 1:
              if (!Xl && (es(r, t), 'function' === typeof (n = r.stateNode).componentWillUnmount))
                try {
                  (n.props = r.memoizedProps),
                    (n.state = r.memoizedState),
                    n.componentWillUnmount();
                } catch (l) {
                  Eu(r, t, l);
                }
              ps(e, t, r);
              break;
            case 21:
              ps(e, t, r);
              break;
            case 22:
              1 & r.mode
                ? ((Xl = (n = Xl) || null !== r.memoizedState), ps(e, t, r), (Xl = n))
                : ps(e, t, r);
              break;
            default:
              ps(e, t, r);
          }
        }
        function gs(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new Jl()),
              t.forEach(function (t) {
                var n = Tu.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n));
              });
          }
        }
        function ms(e, t) {
          var r = t.deletions;
          if (null !== r)
            for (var n = 0; n < r.length; n++) {
              var o = r[n];
              try {
                var i = e,
                  l = t,
                  s = l;
                e: for (; null !== s; ) {
                  switch (s.tag) {
                    case 5:
                      (ds = s.stateNode), (fs = !1);
                      break e;
                    case 3:
                    case 4:
                      (ds = s.stateNode.containerInfo), (fs = !0);
                      break e;
                  }
                  s = s.return;
                }
                if (null === ds) throw Error(a(160));
                hs(i, l, o), (ds = null), (fs = !1);
                var u = o.alternate;
                null !== u && (u.return = null), (o.return = null);
              } catch (c) {
                Eu(o, t, c);
              }
            }
          if (12854 & t.subtreeFlags) for (t = t.child; null !== t; ) vs(t, e), (t = t.sibling);
        }
        function vs(e, t) {
          var r = e.alternate,
            n = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if ((ms(t, e), bs(e), 4 & n)) {
                try {
                  ns(3, e, e.return), os(3, e);
                } catch (m) {
                  Eu(e, e.return, m);
                }
                try {
                  ns(5, e, e.return);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 1:
              ms(t, e), bs(e), 512 & n && null !== r && es(r, r.return);
              break;
            case 5:
              if ((ms(t, e), bs(e), 512 & n && null !== r && es(r, r.return), 32 & e.flags)) {
                var o = e.stateNode;
                try {
                  fe(o, '');
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              if (4 & n && null != (o = e.stateNode)) {
                var i = e.memoizedProps,
                  l = null !== r ? r.memoizedProps : i,
                  s = e.type,
                  u = e.updateQueue;
                if (((e.updateQueue = null), null !== u))
                  try {
                    'input' === s && 'radio' === i.type && null != i.name && X(o, i), ye(s, l);
                    var c = ye(s, i);
                    for (l = 0; l < u.length; l += 2) {
                      var d = u[l],
                        f = u[l + 1];
                      'style' === d
                        ? me(o, f)
                        : 'dangerouslySetInnerHTML' === d
                        ? de(o, f)
                        : 'children' === d
                        ? fe(o, f)
                        : y(o, d, f, c);
                    }
                    switch (s) {
                      case 'input':
                        J(o, i);
                        break;
                      case 'textarea':
                        ae(o, i);
                        break;
                      case 'select':
                        var p = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var h = i.value;
                        null != h
                          ? re(o, !!i.multiple, h, !1)
                          : p !== !!i.multiple &&
                            (null != i.defaultValue
                              ? re(o, !!i.multiple, i.defaultValue, !0)
                              : re(o, !!i.multiple, i.multiple ? [] : '', !1));
                    }
                    o[ho] = i;
                  } catch (m) {
                    Eu(e, e.return, m);
                  }
              }
              break;
            case 6:
              if ((ms(t, e), bs(e), 4 & n)) {
                if (null === e.stateNode) throw Error(a(162));
                (o = e.stateNode), (i = e.memoizedProps);
                try {
                  o.nodeValue = i;
                } catch (m) {
                  Eu(e, e.return, m);
                }
              }
              break;
            case 3:
              if ((ms(t, e), bs(e), 4 & n && null !== r && r.memoizedState.isDehydrated))
                try {
                  Wt(t.containerInfo);
                } catch (m) {
                  Eu(e, e.return, m);
                }
              break;
            case 4:
            default:
              ms(t, e), bs(e);
              break;
            case 13:
              ms(t, e),
                bs(e),
                8192 & (o = e.child).flags &&
                  ((i = null !== o.memoizedState),
                  (o.stateNode.isHidden = i),
                  !i ||
                    (null !== o.alternate && null !== o.alternate.memoizedState) ||
                    (Ws = Xe())),
                4 & n && gs(e);
              break;
            case 22:
              if (
                ((d = null !== r && null !== r.memoizedState),
                1 & e.mode ? ((Xl = (c = Xl) || d), ms(t, e), (Xl = c)) : ms(t, e),
                bs(e),
                8192 & n)
              ) {
                if (
                  ((c = null !== e.memoizedState),
                  (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                )
                  for (Zl = e, d = e.child; null !== d; ) {
                    for (f = Zl = d; null !== Zl; ) {
                      switch (((h = (p = Zl).child), p.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                          ns(4, p, p.return);
                          break;
                        case 1:
                          es(p, p.return);
                          var g = p.stateNode;
                          if ('function' === typeof g.componentWillUnmount) {
                            (n = p), (r = p.return);
                            try {
                              (t = n),
                                (g.props = t.memoizedProps),
                                (g.state = t.memoizedState),
                                g.componentWillUnmount();
                            } catch (m) {
                              Eu(n, r, m);
                            }
                          }
                          break;
                        case 5:
                          es(p, p.return);
                          break;
                        case 22:
                          if (null !== p.memoizedState) {
                            ks(f);
                            continue;
                          }
                      }
                      null !== h ? ((h.return = p), (Zl = h)) : ks(f);
                    }
                    d = d.sibling;
                  }
                e: for (d = null, f = e; ; ) {
                  if (5 === f.tag) {
                    if (null === d) {
                      d = f;
                      try {
                        (o = f.stateNode),
                          c
                            ? 'function' === typeof (i = o.style).setProperty
                              ? i.setProperty('display', 'none', 'important')
                              : (i.display = 'none')
                            : ((s = f.stateNode),
                              (l =
                                void 0 !== (u = f.memoizedProps.style) &&
                                null !== u &&
                                u.hasOwnProperty('display')
                                  ? u.display
                                  : null),
                              (s.style.display = ge('display', l)));
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                    }
                  } else if (6 === f.tag) {
                    if (null === d)
                      try {
                        f.stateNode.nodeValue = c ? '' : f.memoizedProps;
                      } catch (m) {
                        Eu(e, e.return, m);
                      }
                  } else if (
                    ((22 !== f.tag && 23 !== f.tag) || null === f.memoizedState || f === e) &&
                    null !== f.child
                  ) {
                    (f.child.return = f), (f = f.child);
                    continue;
                  }
                  if (f === e) break e;
                  for (; null === f.sibling; ) {
                    if (null === f.return || f.return === e) break e;
                    d === f && (d = null), (f = f.return);
                  }
                  d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
                }
              }
              break;
            case 19:
              ms(t, e), bs(e), 4 & n && gs(e);
            case 21:
          }
        }
        function bs(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              e: {
                for (var r = e.return; null !== r; ) {
                  if (ls(r)) {
                    var n = r;
                    break e;
                  }
                  r = r.return;
                }
                throw Error(a(160));
              }
              switch (n.tag) {
                case 5:
                  var o = n.stateNode;
                  32 & n.flags && (fe(o, ''), (n.flags &= -33)), cs(e, ss(e), o);
                  break;
                case 3:
                case 4:
                  var i = n.stateNode.containerInfo;
                  us(e, ss(e), i);
                  break;
                default:
                  throw Error(a(161));
              }
            } catch (l) {
              Eu(e, e.return, l);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function ys(e, t, r) {
          (Zl = e), xs(e, t, r);
        }
        function xs(e, t, r) {
          for (var n = 0 !== (1 & e.mode); null !== Zl; ) {
            var o = Zl,
              a = o.child;
            if (22 === o.tag && n) {
              var i = null !== o.memoizedState || Yl;
              if (!i) {
                var l = o.alternate,
                  s = (null !== l && null !== l.memoizedState) || Xl;
                l = Yl;
                var u = Xl;
                if (((Yl = i), (Xl = s) && !u))
                  for (Zl = o; null !== Zl; )
                    (s = (i = Zl).child),
                      22 === i.tag && null !== i.memoizedState
                        ? Ns(o)
                        : null !== s
                        ? ((s.return = i), (Zl = s))
                        : Ns(o);
                for (; null !== a; ) (Zl = a), xs(a, t, r), (a = a.sibling);
                (Zl = o), (Yl = l), (Xl = u);
              }
              ws(e);
            } else 0 !== (8772 & o.subtreeFlags) && null !== a ? ((a.return = o), (Zl = a)) : ws(e);
          }
        }
        function ws(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (0 !== (8772 & t.flags)) {
              var r = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl || os(5, t);
                      break;
                    case 1:
                      var n = t.stateNode;
                      if (4 & t.flags && !Xl)
                        if (null === r) n.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? r.memoizedProps
                              : va(t.type, r.memoizedProps);
                          n.componentDidUpdate(
                            o,
                            r.memoizedState,
                            n.__reactInternalSnapshotBeforeUpdate,
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && Fa(t, i, n);
                      break;
                    case 3:
                      var l = t.updateQueue;
                      if (null !== l) {
                        if (((r = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              r = t.child.stateNode;
                          }
                        Fa(t, l, r);
                      }
                      break;
                    case 5:
                      var s = t.stateNode;
                      if (null === r && 4 & t.flags) {
                        r = s;
                        var u = t.memoizedProps;
                        switch (t.type) {
                          case 'button':
                          case 'input':
                          case 'select':
                          case 'textarea':
                            u.autoFocus && r.focus();
                            break;
                          case 'img':
                            u.src && (r.src = u.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var c = t.alternate;
                        if (null !== c) {
                          var d = c.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Wt(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Xl || (512 & t.flags && as(t));
              } catch (p) {
                Eu(t, t.return, p);
              }
            }
            if (t === e) {
              Zl = null;
              break;
            }
            if (null !== (r = t.sibling)) {
              (r.return = t.return), (Zl = r);
              break;
            }
            Zl = t.return;
          }
        }
        function ks(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            if (t === e) {
              Zl = null;
              break;
            }
            var r = t.sibling;
            if (null !== r) {
              (r.return = t.return), (Zl = r);
              break;
            }
            Zl = t.return;
          }
        }
        function Ns(e) {
          for (; null !== Zl; ) {
            var t = Zl;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var r = t.return;
                  try {
                    os(4, t);
                  } catch (s) {
                    Eu(t, r, s);
                  }
                  break;
                case 1:
                  var n = t.stateNode;
                  if ('function' === typeof n.componentDidMount) {
                    var o = t.return;
                    try {
                      n.componentDidMount();
                    } catch (s) {
                      Eu(t, o, s);
                    }
                  }
                  var a = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, a, s);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    as(t);
                  } catch (s) {
                    Eu(t, i, s);
                  }
              }
            } catch (s) {
              Eu(t, t.return, s);
            }
            if (t === e) {
              Zl = null;
              break;
            }
            var l = t.sibling;
            if (null !== l) {
              (l.return = t.return), (Zl = l);
              break;
            }
            Zl = t.return;
          }
        }
        var Ss,
          Es = Math.ceil,
          Cs = x.ReactCurrentDispatcher,
          js = x.ReactCurrentOwner,
          Rs = x.ReactCurrentBatchConfig,
          Ts = 0,
          Ps = null,
          Os = null,
          Ls = 0,
          _s = 0,
          Is = Eo(0),
          Ds = 0,
          zs = null,
          Ms = 0,
          As = 0,
          Fs = 0,
          Bs = null,
          Us = null,
          Ws = 0,
          Hs = 1 / 0,
          Vs = null,
          $s = !1,
          qs = null,
          Gs = null,
          Ks = !1,
          Qs = null,
          Ys = 0,
          Xs = 0,
          Js = null,
          Zs = -1,
          eu = 0;
        function tu() {
          return 0 !== (6 & Ts) ? Xe() : -1 !== Zs ? Zs : (Zs = Xe());
        }
        function ru(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & Ts) && 0 !== Ls
            ? Ls & -Ls
            : null !== ma.transition
            ? (0 === eu && (eu = gt()), eu)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Yt(e.type));
        }
        function nu(e, t, r, n) {
          if (50 < Xs) throw ((Xs = 0), (Js = null), Error(a(185)));
          vt(e, r, n),
            (0 !== (2 & Ts) && e === Ps) ||
              (e === Ps && (0 === (2 & Ts) && (As |= r), 4 === Ds && su(e, Ls)),
              ou(e, n),
              1 === r && 0 === Ts && 0 === (1 & t.mode) && ((Hs = Xe() + 500), Bo && Ho()));
        }
        function ou(e, t) {
          var r = e.callbackNode;
          !(function (e, t) {
            for (
              var r = e.suspendedLanes,
                n = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                l = 1 << i,
                s = o[i];
              -1 === s
                ? (0 !== (l & r) && 0 === (l & n)) || (o[i] = pt(l, t))
                : s <= t && (e.expiredLanes |= l),
                (a &= ~l);
            }
          })(e, t);
          var n = ft(e, e === Ps ? Ls : 0);
          if (0 === n) null !== r && Ke(r), (e.callbackNode = null), (e.callbackPriority = 0);
          else if (((t = n & -n), e.callbackPriority !== t)) {
            if ((null != r && Ke(r), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Bo = !0), Wo(e);
                  })(uu.bind(null, e))
                : Wo(uu.bind(null, e)),
                io(function () {
                  0 === (6 & Ts) && Ho();
                }),
                (r = null);
            else {
              switch (xt(n)) {
                case 1:
                  r = Ze;
                  break;
                case 4:
                  r = et;
                  break;
                case 16:
                default:
                  r = tt;
                  break;
                case 536870912:
                  r = nt;
              }
              r = Pu(r, au.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = r);
          }
        }
        function au(e, t) {
          if (((Zs = -1), (eu = 0), 0 !== (6 & Ts))) throw Error(a(327));
          var r = e.callbackNode;
          if (Nu() && e.callbackNode !== r) return null;
          var n = ft(e, e === Ps ? Ls : 0);
          if (0 === n) return null;
          if (0 !== (30 & n) || 0 !== (n & e.expiredLanes) || t) t = vu(e, n);
          else {
            t = n;
            var o = Ts;
            Ts |= 2;
            var i = gu();
            for ((Ps === e && Ls === t) || ((Vs = null), (Hs = Xe() + 500), pu(e, t)); ; )
              try {
                yu();
                break;
              } catch (s) {
                hu(e, s);
              }
            ka(),
              (Cs.current = i),
              (Ts = o),
              null !== Os ? (t = 0) : ((Ps = null), (Ls = 0), (t = Ds));
          }
          if (0 !== t) {
            if ((2 === t && 0 !== (o = ht(e)) && ((n = o), (t = iu(e, o))), 1 === t))
              throw ((r = zs), pu(e, 0), su(e, n), ou(e, Xe()), r);
            if (6 === t) su(e, n);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & n) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var r = t.updateQueue;
                        if (null !== r && null !== (r = r.stores))
                          for (var n = 0; n < r.length; n++) {
                            var o = r[n],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!ln(a(), o)) return !1;
                            } catch (l) {
                              return !1;
                            }
                          }
                      }
                      if (((r = t.child), 16384 & t.subtreeFlags && null !== r))
                        (r.return = t), (t = r);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = vu(e, n)) && 0 !== (i = ht(e)) && ((n = i), (t = iu(e, i))), 1 === t))
              )
                throw ((r = zs), pu(e, 0), su(e, n), ou(e, Xe()), r);
              switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ku(e, Us, Vs);
                  break;
                case 3:
                  if ((su(e, n), (130023424 & n) === n && 10 < (t = Ws + 500 - Xe()))) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & n) !== n) {
                      tu(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = no(ku.bind(null, e, Us, Vs), t);
                    break;
                  }
                  ku(e, Us, Vs);
                  break;
                case 4:
                  if ((su(e, n), (4194240 & n) === n)) break;
                  for (t = e.eventTimes, o = -1; 0 < n; ) {
                    var l = 31 - it(n);
                    (i = 1 << l), (l = t[l]) > o && (o = l), (n &= ~i);
                  }
                  if (
                    ((n = o),
                    10 <
                      (n =
                        (120 > (n = Xe() - n)
                          ? 120
                          : 480 > n
                          ? 480
                          : 1080 > n
                          ? 1080
                          : 1920 > n
                          ? 1920
                          : 3e3 > n
                          ? 3e3
                          : 4320 > n
                          ? 4320
                          : 1960 * Es(n / 1960)) - n))
                  ) {
                    e.timeoutHandle = no(ku.bind(null, e, Us, Vs), n);
                    break;
                  }
                  ku(e, Us, Vs);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return ou(e, Xe()), e.callbackNode === r ? au.bind(null, e) : null;
        }
        function iu(e, t) {
          var r = Bs;
          return (
            e.current.memoizedState.isDehydrated && (pu(e, t).flags |= 256),
            2 !== (e = vu(e, t)) && ((t = Us), (Us = r), null !== t && lu(t)),
            e
          );
        }
        function lu(e) {
          null === Us ? (Us = e) : Us.push.apply(Us, e);
        }
        function su(e, t) {
          for (
            t &= ~Fs, t &= ~As, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes;
            0 < t;

          ) {
            var r = 31 - it(t),
              n = 1 << r;
            (e[r] = -1), (t &= ~n);
          }
        }
        function uu(e) {
          if (0 !== (6 & Ts)) throw Error(a(327));
          Nu();
          var t = ft(e, 0);
          if (0 === (1 & t)) return ou(e, Xe()), null;
          var r = vu(e, t);
          if (0 !== e.tag && 2 === r) {
            var n = ht(e);
            0 !== n && ((t = n), (r = iu(e, n)));
          }
          if (1 === r) throw ((r = zs), pu(e, 0), su(e, t), ou(e, Xe()), r);
          if (6 === r) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ku(e, Us, Vs),
            ou(e, Xe()),
            null
          );
        }
        function cu(e, t) {
          var r = Ts;
          Ts |= 1;
          try {
            return e(t);
          } finally {
            0 === (Ts = r) && ((Hs = Xe() + 500), Bo && Ho());
          }
        }
        function du(e) {
          null !== Qs && 0 === Qs.tag && 0 === (6 & Ts) && Nu();
          var t = Ts;
          Ts |= 1;
          var r = Rs.transition,
            n = yt;
          try {
            if (((Rs.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = n), (Rs.transition = r), 0 === (6 & (Ts = t)) && Ho();
          }
        }
        function fu() {
          (_s = Is.current), Co(Is);
        }
        function pu(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var r = e.timeoutHandle;
          if ((-1 !== r && ((e.timeoutHandle = -1), oo(r)), null !== Os))
            for (r = Os.return; null !== r; ) {
              var n = r;
              switch ((ra(n), n.tag)) {
                case 1:
                  null !== (n = n.type.childContextTypes) && void 0 !== n && Io();
                  break;
                case 3:
                  ai(), Co(Po), Co(To), di();
                  break;
                case 5:
                  li(n);
                  break;
                case 4:
                  ai();
                  break;
                case 13:
                case 19:
                  Co(si);
                  break;
                case 10:
                  Na(n.type._context);
                  break;
                case 22:
                case 23:
                  fu();
              }
              r = r.return;
            }
          if (
            ((Ps = e),
            (Os = e = Iu(e.current, null)),
            (Ls = _s = t),
            (Ds = 0),
            (zs = null),
            (Fs = As = Ms = 0),
            (Us = Bs = null),
            null !== ja)
          ) {
            for (t = 0; t < ja.length; t++)
              if (null !== (n = (r = ja[t]).interleaved)) {
                r.interleaved = null;
                var o = n.next,
                  a = r.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (n.next = i);
                }
                r.pending = n;
              }
            ja = null;
          }
          return e;
        }
        function hu(e, t) {
          for (;;) {
            var r = Os;
            try {
              if ((ka(), (fi.current = il), bi)) {
                for (var n = gi.memoizedState; null !== n; ) {
                  var o = n.queue;
                  null !== o && (o.pending = null), (n = n.next);
                }
                bi = !1;
              }
              if (
                ((hi = 0),
                (vi = mi = gi = null),
                (yi = !1),
                (xi = 0),
                (js.current = null),
                null === r || null === r.return)
              ) {
                (Ds = 1), (zs = t), (Os = null);
                break;
              }
              e: {
                var i = e,
                  l = r.return,
                  s = r,
                  u = t;
                if (
                  ((t = Ls),
                  (s.flags |= 32768),
                  null !== u && 'object' === typeof u && 'function' === typeof u.then)
                ) {
                  var c = u,
                    d = s,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var h = vl(l);
                  if (null !== h) {
                    (h.flags &= -257), bl(h, l, s, 0, t), 1 & h.mode && ml(i, c, t), (u = c);
                    var g = (t = h).updateQueue;
                    if (null === g) {
                      var m = new Set();
                      m.add(u), (t.updateQueue = m);
                    } else g.add(u);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    ml(i, c, t), mu();
                    break e;
                  }
                  u = Error(a(426));
                } else if (aa && 1 & s.mode) {
                  var v = vl(l);
                  if (null !== v) {
                    0 === (65536 & v.flags) && (v.flags |= 256), bl(v, l, s, 0, t), ga(cl(u, s));
                    break e;
                  }
                }
                (i = u = cl(u, s)),
                  4 !== Ds && (Ds = 2),
                  null === Bs ? (Bs = [i]) : Bs.push(i),
                  (i = l);
                do {
                  switch (i.tag) {
                    case 3:
                      (i.flags |= 65536), (t &= -t), (i.lanes |= t), Ma(i, hl(0, u, t));
                      break e;
                    case 1:
                      s = u;
                      var b = i.type,
                        y = i.stateNode;
                      if (
                        0 === (128 & i.flags) &&
                        ('function' === typeof b.getDerivedStateFromError ||
                          (null !== y &&
                            'function' === typeof y.componentDidCatch &&
                            (null === Gs || !Gs.has(y))))
                      ) {
                        (i.flags |= 65536), (t &= -t), (i.lanes |= t), Ma(i, gl(i, s, t));
                        break e;
                      }
                  }
                  i = i.return;
                } while (null !== i);
              }
              wu(r);
            } catch (x) {
              (t = x), Os === r && null !== r && (Os = r = r.return);
              continue;
            }
            break;
          }
        }
        function gu() {
          var e = Cs.current;
          return (Cs.current = il), null === e ? il : e;
        }
        function mu() {
          (0 !== Ds && 3 !== Ds && 2 !== Ds) || (Ds = 4),
            null === Ps || (0 === (268435455 & Ms) && 0 === (268435455 & As)) || su(Ps, Ls);
        }
        function vu(e, t) {
          var r = Ts;
          Ts |= 2;
          var n = gu();
          for ((Ps === e && Ls === t) || ((Vs = null), pu(e, t)); ; )
            try {
              bu();
              break;
            } catch (o) {
              hu(e, o);
            }
          if ((ka(), (Ts = r), (Cs.current = n), null !== Os)) throw Error(a(261));
          return (Ps = null), (Ls = 0), Ds;
        }
        function bu() {
          for (; null !== Os; ) xu(Os);
        }
        function yu() {
          for (; null !== Os && !Qe(); ) xu(Os);
        }
        function xu(e) {
          var t = Ss(e.alternate, e, _s);
          (e.memoizedProps = e.pendingProps), null === t ? wu(e) : (Os = t), (js.current = null);
        }
        function wu(e) {
          var t = e;
          do {
            var r = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (r = Kl(r, t, _s))) return void (Os = r);
            } else {
              if (null !== (r = Ql(r, t))) return (r.flags &= 32767), void (Os = r);
              if (null === e) return (Ds = 6), void (Os = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (Os = t);
            Os = t = e;
          } while (null !== t);
          0 === Ds && (Ds = 5);
        }
        function ku(e, t, r) {
          var n = yt,
            o = Rs.transition;
          try {
            (Rs.transition = null),
              (yt = 1),
              (function (e, t, r, n) {
                do {
                  Nu();
                } while (null !== Qs);
                if (0 !== (6 & Ts)) throw Error(a(327));
                r = e.finishedWork;
                var o = e.finishedLanes;
                if (null === r) return null;
                if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = r.lanes | r.childLanes;
                if (
                  ((function (e, t) {
                    var r = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var n = e.eventTimes;
                    for (e = e.expirationTimes; 0 < r; ) {
                      var o = 31 - it(r),
                        a = 1 << o;
                      (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~a);
                    }
                  })(e, i),
                  e === Ps && ((Os = Ps = null), (Ls = 0)),
                  (0 === (2064 & r.subtreeFlags) && 0 === (2064 & r.flags)) ||
                    Ks ||
                    ((Ks = !0),
                    Pu(tt, function () {
                      return Nu(), null;
                    })),
                  (i = 0 !== (15990 & r.flags)),
                  0 !== (15990 & r.subtreeFlags) || i)
                ) {
                  (i = Rs.transition), (Rs.transition = null);
                  var l = yt;
                  yt = 1;
                  var s = Ts;
                  (Ts |= 4),
                    (js.current = null),
                    (function (e, t) {
                      if (((eo = Vt), pn((e = fn())))) {
                        if ('selectionStart' in e)
                          var r = { start: e.selectionStart, end: e.selectionEnd };
                        else
                          e: {
                            var n =
                              (r = ((r = e.ownerDocument) && r.defaultView) || window)
                                .getSelection && r.getSelection();
                            if (n && 0 !== n.rangeCount) {
                              r = n.anchorNode;
                              var o = n.anchorOffset,
                                i = n.focusNode;
                              n = n.focusOffset;
                              try {
                                r.nodeType, i.nodeType;
                              } catch (w) {
                                r = null;
                                break e;
                              }
                              var l = 0,
                                s = -1,
                                u = -1,
                                c = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var h;
                                  f !== r || (0 !== o && 3 !== f.nodeType) || (s = l + o),
                                    f !== i || (0 !== n && 3 !== f.nodeType) || (u = l + n),
                                    3 === f.nodeType && (l += f.nodeValue.length),
                                    null !== (h = f.firstChild);

                                )
                                  (p = f), (f = h);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === r && ++c === o && (s = l),
                                    p === i && ++d === n && (u = l),
                                    null !== (h = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = h;
                              }
                              r = -1 === s || -1 === u ? null : { start: s, end: u };
                            } else r = null;
                          }
                        r = r || { start: 0, end: 0 };
                      } else r = null;
                      for (
                        to = { focusedElem: e, selectionRange: r }, Vt = !1, Zl = t;
                        null !== Zl;

                      )
                        if (((e = (t = Zl).child), 0 !== (1028 & t.subtreeFlags) && null !== e))
                          (e.return = t), (Zl = e);
                        else
                          for (; null !== Zl; ) {
                            t = Zl;
                            try {
                              var g = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== g) {
                                      var m = g.memoizedProps,
                                        v = g.memoizedState,
                                        b = t.stateNode,
                                        y = b.getSnapshotBeforeUpdate(
                                          t.elementType === t.type ? m : va(t.type, m),
                                          v,
                                        );
                                      b.__reactInternalSnapshotBeforeUpdate = y;
                                    }
                                    break;
                                  case 3:
                                    var x = t.stateNode.containerInfo;
                                    1 === x.nodeType
                                      ? (x.textContent = '')
                                      : 9 === x.nodeType &&
                                        x.documentElement &&
                                        x.removeChild(x.documentElement);
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (w) {
                              Eu(t, t.return, w);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Zl = e);
                              break;
                            }
                            Zl = t.return;
                          }
                      (g = rs), (rs = !1);
                    })(e, r),
                    vs(r, e),
                    hn(to),
                    (Vt = !!eo),
                    (to = eo = null),
                    (e.current = r),
                    ys(r, e, o),
                    Ye(),
                    (Ts = s),
                    (yt = l),
                    (Rs.transition = i);
                } else e.current = r;
                if (
                  (Ks && ((Ks = !1), (Qs = e), (Ys = o)),
                  (i = e.pendingLanes),
                  0 === i && (Gs = null),
                  (function (e) {
                    if (at && 'function' === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags));
                      } catch (t) {}
                  })(r.stateNode),
                  ou(e, Xe()),
                  null !== t)
                )
                  for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                    (o = t[r]), n(o.value, { componentStack: o.stack, digest: o.digest });
                if ($s) throw (($s = !1), (e = qs), (qs = null), e);
                0 !== (1 & Ys) && 0 !== e.tag && Nu(),
                  (i = e.pendingLanes),
                  0 !== (1 & i) ? (e === Js ? Xs++ : ((Xs = 0), (Js = e))) : (Xs = 0),
                  Ho();
              })(e, t, r, n);
          } finally {
            (Rs.transition = o), (yt = n);
          }
          return null;
        }
        function Nu() {
          if (null !== Qs) {
            var e = xt(Ys),
              t = Rs.transition,
              r = yt;
            try {
              if (((Rs.transition = null), (yt = 16 > e ? 16 : e), null === Qs)) var n = !1;
              else {
                if (((e = Qs), (Qs = null), (Ys = 0), 0 !== (6 & Ts))) throw Error(a(331));
                var o = Ts;
                for (Ts |= 4, Zl = e.current; null !== Zl; ) {
                  var i = Zl,
                    l = i.child;
                  if (0 !== (16 & Zl.flags)) {
                    var s = i.deletions;
                    if (null !== s) {
                      for (var u = 0; u < s.length; u++) {
                        var c = s[u];
                        for (Zl = c; null !== Zl; ) {
                          var d = Zl;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ns(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Zl = f);
                          else
                            for (; null !== Zl; ) {
                              var p = (d = Zl).sibling,
                                h = d.return;
                              if ((is(d), d === c)) {
                                Zl = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (Zl = p);
                                break;
                              }
                              Zl = h;
                            }
                        }
                      }
                      var g = i.alternate;
                      if (null !== g) {
                        var m = g.child;
                        if (null !== m) {
                          g.child = null;
                          do {
                            var v = m.sibling;
                            (m.sibling = null), (m = v);
                          } while (null !== m);
                        }
                      }
                      Zl = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== l) (l.return = i), (Zl = l);
                  else
                    e: for (; null !== Zl; ) {
                      if (0 !== (2048 & (i = Zl).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ns(9, i, i.return);
                        }
                      var b = i.sibling;
                      if (null !== b) {
                        (b.return = i.return), (Zl = b);
                        break e;
                      }
                      Zl = i.return;
                    }
                }
                var y = e.current;
                for (Zl = y; null !== Zl; ) {
                  var x = (l = Zl).child;
                  if (0 !== (2064 & l.subtreeFlags) && null !== x) (x.return = l), (Zl = x);
                  else
                    e: for (l = y; null !== Zl; ) {
                      if (0 !== (2048 & (s = Zl).flags))
                        try {
                          switch (s.tag) {
                            case 0:
                            case 11:
                            case 15:
                              os(9, s);
                          }
                        } catch (k) {
                          Eu(s, s.return, k);
                        }
                      if (s === l) {
                        Zl = null;
                        break e;
                      }
                      var w = s.sibling;
                      if (null !== w) {
                        (w.return = s.return), (Zl = w);
                        break e;
                      }
                      Zl = s.return;
                    }
                }
                if (((Ts = o), Ho(), at && 'function' === typeof at.onPostCommitFiberRoot))
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (k) {}
                n = !0;
              }
              return n;
            } finally {
              (yt = r), (Rs.transition = t);
            }
          }
          return !1;
        }
        function Su(e, t, r) {
          (e = Da(e, (t = hl(0, (t = cl(r, t)), 1)), 1)),
            (t = tu()),
            null !== e && (vt(e, 1, t), ou(e, t));
        }
        function Eu(e, t, r) {
          if (3 === e.tag) Su(e, e, r);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                Su(t, e, r);
                break;
              }
              if (1 === t.tag) {
                var n = t.stateNode;
                if (
                  'function' === typeof t.type.getDerivedStateFromError ||
                  ('function' === typeof n.componentDidCatch && (null === Gs || !Gs.has(n)))
                ) {
                  (t = Da(t, (e = gl(t, (e = cl(r, e)), 1)), 1)),
                    (e = tu()),
                    null !== t && (vt(t, 1, e), ou(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Cu(e, t, r) {
          var n = e.pingCache;
          null !== n && n.delete(t),
            (t = tu()),
            (e.pingedLanes |= e.suspendedLanes & r),
            Ps === e &&
              (Ls & r) === r &&
              (4 === Ds || (3 === Ds && (130023424 & Ls) === Ls && 500 > Xe() - Ws)
                ? pu(e, 0)
                : (Fs |= r)),
            ou(e, t);
        }
        function ju(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ct), 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
          var r = tu();
          null !== (e = Pa(e, t)) && (vt(e, t, r), ou(e, r));
        }
        function Ru(e) {
          var t = e.memoizedState,
            r = 0;
          null !== t && (r = t.retryLane), ju(e, r);
        }
        function Tu(e, t) {
          var r = 0;
          switch (e.tag) {
            case 13:
              var n = e.stateNode,
                o = e.memoizedState;
              null !== o && (r = o.retryLane);
              break;
            case 19:
              n = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== n && n.delete(t), ju(e, r);
        }
        function Pu(e, t) {
          return Ge(e, t);
        }
        function Ou(e, t, r, n) {
          (this.tag = e),
            (this.key = r),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
            (this.mode = n),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function Lu(e, t, r, n) {
          return new Ou(e, t, r, n);
        }
        function _u(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Iu(e, t) {
          var r = e.alternate;
          return (
            null === r
              ? (((r = Lu(e.tag, t, e.key, e.mode)).elementType = e.elementType),
                (r.type = e.type),
                (r.stateNode = e.stateNode),
                (r.alternate = e),
                (e.alternate = r))
              : ((r.pendingProps = t),
                (r.type = e.type),
                (r.flags = 0),
                (r.subtreeFlags = 0),
                (r.deletions = null)),
            (r.flags = 14680064 & e.flags),
            (r.childLanes = e.childLanes),
            (r.lanes = e.lanes),
            (r.child = e.child),
            (r.memoizedProps = e.memoizedProps),
            (r.memoizedState = e.memoizedState),
            (r.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (r.dependencies = null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
            (r.sibling = e.sibling),
            (r.index = e.index),
            (r.ref = e.ref),
            r
          );
        }
        function Du(e, t, r, n, o, i) {
          var l = 2;
          if (((n = e), 'function' === typeof e)) _u(e) && (l = 1);
          else if ('string' === typeof e) l = 5;
          else
            e: switch (e) {
              case N:
                return zu(r.children, o, i, t);
              case S:
                (l = 8), (o |= 8);
                break;
              case E:
                return ((e = Lu(12, r, t, 2 | o)).elementType = E), (e.lanes = i), e;
              case T:
                return ((e = Lu(13, r, t, o)).elementType = T), (e.lanes = i), e;
              case P:
                return ((e = Lu(19, r, t, o)).elementType = P), (e.lanes = i), e;
              case _:
                return Mu(r, o, i, t);
              default:
                if ('object' === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case C:
                      l = 10;
                      break e;
                    case j:
                      l = 9;
                      break e;
                    case R:
                      l = 11;
                      break e;
                    case O:
                      l = 14;
                      break e;
                    case L:
                      (l = 16), (n = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ''));
            }
          return ((t = Lu(l, r, t, o)).elementType = e), (t.type = n), (t.lanes = i), t;
        }
        function zu(e, t, r, n) {
          return ((e = Lu(7, e, n, t)).lanes = r), e;
        }
        function Mu(e, t, r, n) {
          return (
            ((e = Lu(22, e, n, t)).elementType = _),
            (e.lanes = r),
            (e.stateNode = { isHidden: !1 }),
            e
          );
        }
        function Au(e, t, r) {
          return ((e = Lu(6, e, null, t)).lanes = r), e;
        }
        function Fu(e, t, r) {
          return (
            ((t = Lu(4, null !== e.children ? e.children : [], e.key, t)).lanes = r),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Bu(e, t, r, n, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = mt(0)),
            (this.expirationTimes = mt(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = mt(0)),
            (this.identifierPrefix = n),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Uu(e, t, r, n, o, a, i, l, s) {
          return (
            (e = new Bu(e, t, r, l, s)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = Lu(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: n,
              isDehydrated: r,
              cache: null,
              transitions: null,
              pendingSuspenseBoundaries: null,
            }),
            La(a),
            e
          );
        }
        function Wu(e) {
          if (!e) return Ro;
          e: {
            if (We((e = e._reactInternals)) !== e || 1 !== e.tag) throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (_o(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var r = e.type;
            if (_o(r)) return zo(e, r, t);
          }
          return t;
        }
        function Hu(e, t, r, n, o, a, i, l, s) {
          return (
            ((e = Uu(r, n, !0, e, 0, a, 0, l, s)).context = Wu(null)),
            (r = e.current),
            ((a = Ia((n = tu()), (o = ru(r)))).callback = void 0 !== t && null !== t ? t : null),
            Da(r, a, o),
            (e.current.lanes = o),
            vt(e, o, n),
            ou(e, n),
            e
          );
        }
        function Vu(e, t, r, n) {
          var o = t.current,
            a = tu(),
            i = ru(o);
          return (
            (r = Wu(r)),
            null === t.context ? (t.context = r) : (t.pendingContext = r),
            ((t = Ia(a, i)).payload = { element: e }),
            null !== (n = void 0 === n ? null : n) && (t.callback = n),
            null !== (e = Da(o, t, i)) && (nu(e, o, i, a), za(e, o, i)),
            i
          );
        }
        function $u(e) {
          return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
        }
        function qu(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var r = e.retryLane;
            e.retryLane = 0 !== r && r < t ? r : t;
          }
        }
        function Gu(e, t) {
          qu(e, t), (e = e.alternate) && qu(e, t);
        }
        Ss = function (e, t, r) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Po.current) xl = !0;
            else {
              if (0 === (e.lanes & r) && 0 === (128 & t.flags))
                return (
                  (xl = !1),
                  (function (e, t, r) {
                    switch (t.tag) {
                      case 3:
                        Pl(t), ha();
                        break;
                      case 5:
                        ii(t);
                        break;
                      case 1:
                        _o(t.type) && Mo(t);
                        break;
                      case 4:
                        oi(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var n = t.type._context,
                          o = t.memoizedProps.value;
                        jo(ba, n._currentValue), (n._currentValue = o);
                        break;
                      case 13:
                        if (null !== (n = t.memoizedState))
                          return null !== n.dehydrated
                            ? (jo(si, 1 & si.current), (t.flags |= 128), null)
                            : 0 !== (r & t.child.childLanes)
                            ? Al(e, t, r)
                            : (jo(si, 1 & si.current),
                              null !== (e = $l(e, t, r)) ? e.sibling : null);
                        jo(si, 1 & si.current);
                        break;
                      case 19:
                        if (((n = 0 !== (r & t.childLanes)), 0 !== (128 & e.flags))) {
                          if (n) return Hl(e, t, r);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                          jo(si, si.current),
                          n)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), El(e, t, r);
                    }
                    return $l(e, t, r);
                  })(e, t, r)
                );
              xl = 0 !== (131072 & e.flags);
            }
          else (xl = !1), aa && 0 !== (1048576 & t.flags) && ea(t, Go, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var n = t.type;
              Vl(e, t), (e = t.pendingProps);
              var o = Lo(t, To.current);
              Ea(t, r), (o = Si(null, t, n, e, o, r));
              var i = Ei();
              return (
                (t.flags |= 1),
                'object' === typeof o &&
                null !== o &&
                'function' === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    _o(n) ? ((i = !0), Mo(t)) : (i = !1),
                    (t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null),
                    La(t),
                    (o.updater = Wa),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    qa(t, n, e, r),
                    (t = Tl(null, t, n, !0, i, r)))
                  : ((t.tag = 0), aa && i && ta(t), wl(null, t, o, r), (t = t.child)),
                t
              );
            case 16:
              n = t.elementType;
              e: {
                switch (
                  (Vl(e, t),
                  (e = t.pendingProps),
                  (n = (o = n._init)(n._payload)),
                  (t.type = n),
                  (o = t.tag =
                    (function (e) {
                      if ('function' === typeof e) return _u(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === R) return 11;
                        if (e === O) return 14;
                      }
                      return 2;
                    })(n)),
                  (e = va(n, e)),
                  o)
                ) {
                  case 0:
                    t = jl(null, t, n, e, r);
                    break e;
                  case 1:
                    t = Rl(null, t, n, e, r);
                    break e;
                  case 11:
                    t = kl(null, t, n, e, r);
                    break e;
                  case 14:
                    t = Nl(null, t, n, va(n.type, e), r);
                    break e;
                }
                throw Error(a(306, n, ''));
              }
              return t;
            case 0:
              return (
                (n = t.type),
                (o = t.pendingProps),
                jl(e, t, n, (o = t.elementType === n ? o : va(n, o)), r)
              );
            case 1:
              return (
                (n = t.type),
                (o = t.pendingProps),
                Rl(e, t, n, (o = t.elementType === n ? o : va(n, o)), r)
              );
            case 3:
              e: {
                if ((Pl(t), null === e)) throw Error(a(387));
                (n = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  _a(e, t),
                  Aa(t, n, null, r);
                var l = t.memoizedState;
                if (((n = l.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: n,
                      isDehydrated: !1,
                      cache: l.cache,
                      pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                      transitions: l.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ol(e, t, n, r, (o = cl(Error(a(423)), t)));
                    break e;
                  }
                  if (n !== o) {
                    t = Ol(e, t, n, r, (o = cl(Error(a(424)), t)));
                    break e;
                  }
                  for (
                    oa = uo(t.stateNode.containerInfo.firstChild),
                      na = t,
                      aa = !0,
                      ia = null,
                      r = Ja(t, null, n, r),
                      t.child = r;
                    r;

                  )
                    (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
                } else {
                  if ((ha(), n === o)) {
                    t = $l(e, t, r);
                    break e;
                  }
                  wl(e, t, n, r);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                ii(t),
                null === e && ca(t),
                (n = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (l = o.children),
                ro(n, o) ? (l = null) : null !== i && ro(n, i) && (t.flags |= 32),
                Cl(e, t),
                wl(e, t, l, r),
                t.child
              );
            case 6:
              return null === e && ca(t), null;
            case 13:
              return Al(e, t, r);
            case 4:
              return (
                oi(t, t.stateNode.containerInfo),
                (n = t.pendingProps),
                null === e ? (t.child = Xa(t, null, n, r)) : wl(e, t, n, r),
                t.child
              );
            case 11:
              return (
                (n = t.type),
                (o = t.pendingProps),
                kl(e, t, n, (o = t.elementType === n ? o : va(n, o)), r)
              );
            case 7:
              return wl(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
              return wl(e, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (
                  ((n = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (l = o.value),
                  jo(ba, n._currentValue),
                  (n._currentValue = l),
                  null !== i)
                )
                  if (ln(i.value, l)) {
                    if (i.children === o.children && !Po.current) {
                      t = $l(e, t, r);
                      break e;
                    }
                  } else
                    for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                      var s = i.dependencies;
                      if (null !== s) {
                        l = i.child;
                        for (var u = s.firstContext; null !== u; ) {
                          if (u.context === n) {
                            if (1 === i.tag) {
                              (u = Ia(-1, r & -r)).tag = 2;
                              var c = i.updateQueue;
                              if (null !== c) {
                                var d = (c = c.shared).pending;
                                null === d ? (u.next = u) : ((u.next = d.next), (d.next = u)),
                                  (c.pending = u);
                              }
                            }
                            (i.lanes |= r),
                              null !== (u = i.alternate) && (u.lanes |= r),
                              Sa(i.return, r, t),
                              (s.lanes |= r);
                            break;
                          }
                          u = u.next;
                        }
                      } else if (10 === i.tag) l = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (l = i.return)) throw Error(a(341));
                        (l.lanes |= r),
                          null !== (s = l.alternate) && (s.lanes |= r),
                          Sa(l, r, t),
                          (l = i.sibling);
                      } else l = i.child;
                      if (null !== l) l.return = i;
                      else
                        for (l = i; null !== l; ) {
                          if (l === t) {
                            l = null;
                            break;
                          }
                          if (null !== (i = l.sibling)) {
                            (i.return = l.return), (l = i);
                            break;
                          }
                          l = l.return;
                        }
                      i = l;
                    }
                wl(e, t, o.children, r), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (n = t.pendingProps.children),
                Ea(t, r),
                (n = n((o = Ca(o)))),
                (t.flags |= 1),
                wl(e, t, n, r),
                t.child
              );
            case 14:
              return (o = va((n = t.type), t.pendingProps)), Nl(e, t, n, (o = va(n.type, o)), r);
            case 15:
              return Sl(e, t, t.type, t.pendingProps, r);
            case 17:
              return (
                (n = t.type),
                (o = t.pendingProps),
                (o = t.elementType === n ? o : va(n, o)),
                Vl(e, t),
                (t.tag = 1),
                _o(n) ? ((e = !0), Mo(t)) : (e = !1),
                Ea(t, r),
                Va(t, n, o),
                qa(t, n, o, r),
                Tl(null, t, n, !0, e, r)
              );
            case 19:
              return Hl(e, t, r);
            case 22:
              return El(e, t, r);
          }
          throw Error(a(156, t.tag));
        };
        var Ku =
          'function' === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Qu(e) {
          this._internalRoot = e;
        }
        function Yu(e) {
          this._internalRoot = e;
        }
        function Xu(e) {
          return !(!e || (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType));
        }
        function Ju(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
          );
        }
        function Zu() {}
        function ec(e, t, r, n, o) {
          var a = r._reactRootContainer;
          if (a) {
            var i = a;
            if ('function' === typeof o) {
              var l = o;
              o = function () {
                var e = $u(i);
                l.call(e);
              };
            }
            Vu(t, i, e, o);
          } else
            i = (function (e, t, r, n, o) {
              if (o) {
                if ('function' === typeof n) {
                  var a = n;
                  n = function () {
                    var e = $u(i);
                    a.call(e);
                  };
                }
                var i = Hu(t, n, e, 0, null, !1, 0, '', Zu);
                return (
                  (e._reactRootContainer = i),
                  (e[go] = i.current),
                  Wn(8 === e.nodeType ? e.parentNode : e),
                  du(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ('function' === typeof n) {
                var l = n;
                n = function () {
                  var e = $u(s);
                  l.call(e);
                };
              }
              var s = Uu(e, 0, !1, null, 0, !1, 0, '', Zu);
              return (
                (e._reactRootContainer = s),
                (e[go] = s.current),
                Wn(8 === e.nodeType ? e.parentNode : e),
                du(function () {
                  Vu(t, s, r, n);
                }),
                s
              );
            })(r, t, e, o, n);
          return $u(i);
        }
        (Yu.prototype.render = Qu.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            Vu(e, t, null, null);
          }),
          (Yu.prototype.unmount = Qu.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                du(function () {
                  Vu(null, e, null, null);
                }),
                  (t[go] = null);
              }
            }),
          (Yu.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = St();
              e = { blockedOn: null, target: e, priority: t };
              for (var r = 0; r < _t.length && 0 !== t && t < _t[r].priority; r++);
              _t.splice(r, 0, e), 0 === r && Mt(e);
            }
          }),
          (wt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var r = dt(t.pendingLanes);
                  0 !== r &&
                    (bt(t, 1 | r), ou(t, Xe()), 0 === (6 & Ts) && ((Hs = Xe() + 500), Ho()));
                }
                break;
              case 13:
                du(function () {
                  var t = Pa(e, 1);
                  if (null !== t) {
                    var r = tu();
                    nu(t, e, 1, r);
                  }
                }),
                  Gu(e, 1);
            }
          }),
          (kt = function (e) {
            if (13 === e.tag) {
              var t = Pa(e, 134217728);
              if (null !== t) nu(t, e, 134217728, tu());
              Gu(e, 134217728);
            }
          }),
          (Nt = function (e) {
            if (13 === e.tag) {
              var t = ru(e),
                r = Pa(e, t);
              if (null !== r) nu(r, e, t, tu());
              Gu(e, t);
            }
          }),
          (St = function () {
            return yt;
          }),
          (Et = function (e, t) {
            var r = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = r;
            }
          }),
          (ke = function (e, t, r) {
            switch (t) {
              case 'input':
                if ((J(e, r), (t = r.name), 'radio' === r.type && null != t)) {
                  for (r = e; r.parentNode; ) r = r.parentNode;
                  for (
                    r = r.querySelectorAll(
                      'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
                    ),
                      t = 0;
                    t < r.length;
                    t++
                  ) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                      var o = ko(n);
                      if (!o) throw Error(a(90));
                      G(n), J(n, o);
                    }
                  }
                }
                break;
              case 'textarea':
                ae(e, r);
                break;
              case 'select':
                null != (t = r.value) && re(e, !!r.multiple, t, !1);
            }
          }),
          (Re = cu),
          (Te = du);
        var tc = { usingClientEntryPoint: !1, Events: [xo, wo, ko, Ce, je, cu] },
          rc = {
            findFiberByHostInstance: yo,
            bundleType: 0,
            version: '18.2.0',
            rendererPackageName: 'react-dom',
          },
          nc = {
            bundleType: rc.bundleType,
            version: rc.version,
            rendererPackageName: rc.rendererPackageName,
            rendererConfig: rc.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: x.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = $e(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              rc.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
          };
        if ('undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var oc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!oc.isDisabled && oc.supportsFiber)
            try {
              (ot = oc.inject(nc)), (at = oc);
            } catch (ce) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tc),
          (t.createPortal = function (e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
            if (!Xu(t)) throw Error(a(200));
            return (function (e, t, r) {
              var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
              return {
                $$typeof: k,
                key: null == n ? null : '' + n,
                children: e,
                containerInfo: t,
                implementation: r,
              };
            })(e, t, null, r);
          }),
          (t.createRoot = function (e, t) {
            if (!Xu(e)) throw Error(a(299));
            var r = !1,
              n = '',
              o = Ku;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (r = !0),
                void 0 !== t.identifierPrefix && (n = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Uu(e, 1, !1, null, 0, r, 0, n, o)),
              (e[go] = t.current),
              Wn(8 === e.nodeType ? e.parentNode : e),
              new Qu(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ('function' === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(',')), Error(a(268, e)));
            }
            return (e = null === (e = $e(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return du(e);
          }),
          (t.hydrate = function (e, t, r) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !0, r);
          }),
          (t.hydrateRoot = function (e, t, r) {
            if (!Xu(e)) throw Error(a(405));
            var n = (null != r && r.hydratedSources) || null,
              o = !1,
              i = '',
              l = Ku;
            if (
              (null !== r &&
                void 0 !== r &&
                (!0 === r.unstable_strictMode && (o = !0),
                void 0 !== r.identifierPrefix && (i = r.identifierPrefix),
                void 0 !== r.onRecoverableError && (l = r.onRecoverableError)),
              (t = Hu(t, null, e, 1, null != r ? r : null, o, 0, i, l)),
              (e[go] = t.current),
              Wn(e),
              n)
            )
              for (e = 0; e < n.length; e++)
                (o = (o = (r = n[e])._getVersion)(r._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [r, o])
                    : t.mutableSourceEagerHydrationData.push(r, o);
            return new Yu(t);
          }),
          (t.render = function (e, t, r) {
            if (!Ju(t)) throw Error(a(200));
            return ec(null, e, t, !1, r);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Ju(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (du(function () {
                ec(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[go] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = cu),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
            if (!Ju(r)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return ec(e, t, r, !1, n);
          }),
          (t.version = '18.2.0-next-9e3b772b8-20220608');
      },
      250: function (e, t, r) {
        var n = r(164);
        (t.createRoot = n.createRoot), (t.hydrateRoot = n.hydrateRoot);
      },
      164: function (e, t, r) {
        !(function e() {
          if (
            'undefined' !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            'function' === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = r(463));
      },
      374: function (e, t, r) {
        var n = r(791),
          o = Symbol.for('react.element'),
          a = Symbol.for('react.fragment'),
          i = Object.prototype.hasOwnProperty,
          l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
          s = { key: !0, ref: !0, __self: !0, __source: !0 };
        function u(e, t, r) {
          var n,
            a = {},
            u = null,
            c = null;
          for (n in (void 0 !== r && (u = '' + r),
          void 0 !== t.key && (u = '' + t.key),
          void 0 !== t.ref && (c = t.ref),
          t))
            i.call(t, n) && !s.hasOwnProperty(n) && (a[n] = t[n]);
          if (e && e.defaultProps) for (n in (t = e.defaultProps)) void 0 === a[n] && (a[n] = t[n]);
          return { $$typeof: o, type: e, key: u, ref: c, props: a, _owner: l.current };
        }
        (t.Fragment = a), (t.jsx = u), (t.jsxs = u);
      },
      117: function (e, t) {
        var r = Symbol.for('react.element'),
          n = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          i = Symbol.for('react.profiler'),
          l = Symbol.for('react.provider'),
          s = Symbol.for('react.context'),
          u = Symbol.for('react.forward_ref'),
          c = Symbol.for('react.suspense'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          p = Symbol.iterator;
        var h = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          g = Object.assign,
          m = {};
        function v(e, t, r) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = r || h);
        }
        function b() {}
        function y(e, t, r) {
          (this.props = e), (this.context = t), (this.refs = m), (this.updater = r || h);
        }
        (v.prototype.isReactComponent = {}),
          (v.prototype.setState = function (e, t) {
            if ('object' !== typeof e && 'function' !== typeof e && null != e)
              throw Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
              );
            this.updater.enqueueSetState(this, e, t, 'setState');
          }),
          (v.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
          }),
          (b.prototype = v.prototype);
        var x = (y.prototype = new b());
        (x.constructor = y), g(x, v.prototype), (x.isPureReactComponent = !0);
        var w = Array.isArray,
          k = Object.prototype.hasOwnProperty,
          N = { current: null },
          S = { key: !0, ref: !0, __self: !0, __source: !0 };
        function E(e, t, n) {
          var o,
            a = {},
            i = null,
            l = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (i = '' + t.key), t))
              k.call(t, o) && !S.hasOwnProperty(o) && (a[o] = t[o]);
          var s = arguments.length - 2;
          if (1 === s) a.children = n;
          else if (1 < s) {
            for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          if (e && e.defaultProps) for (o in (s = e.defaultProps)) void 0 === a[o] && (a[o] = s[o]);
          return { $$typeof: r, type: e, key: i, ref: l, props: a, _owner: N.current };
        }
        function C(e) {
          return 'object' === typeof e && null !== e && e.$$typeof === r;
        }
        var j = /\/+/g;
        function R(e, t) {
          return 'object' === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { '=': '=0', ':': '=2' };
                return (
                  '$' +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })('' + e.key)
            : t.toString(36);
        }
        function T(e, t, o, a, i) {
          var l = typeof e;
          ('undefined' !== l && 'boolean' !== l) || (e = null);
          var s = !1;
          if (null === e) s = !0;
          else
            switch (l) {
              case 'string':
              case 'number':
                s = !0;
                break;
              case 'object':
                switch (e.$$typeof) {
                  case r:
                  case n:
                    s = !0;
                }
            }
          if (s)
            return (
              (i = i((s = e))),
              (e = '' === a ? '.' + R(s, 0) : a),
              w(i)
                ? ((o = ''),
                  null != e && (o = e.replace(j, '$&/') + '/'),
                  T(i, t, o, '', function (e) {
                    return e;
                  }))
                : null != i &&
                  (C(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (s && s.key === i.key)
                          ? ''
                          : ('' + i.key).replace(j, '$&/') + '/') +
                        e,
                    )),
                  t.push(i)),
              1
            );
          if (((s = 0), (a = '' === a ? '.' : a + ':'), w(e)))
            for (var u = 0; u < e.length; u++) {
              var c = a + R((l = e[u]), u);
              s += T(l, t, o, c, i);
            }
          else if (
            ((c = (function (e) {
              return null === e || 'object' !== typeof e
                ? null
                : 'function' === typeof (e = (p && e[p]) || e['@@iterator'])
                ? e
                : null;
            })(e)),
            'function' === typeof c)
          )
            for (e = c.call(e), u = 0; !(l = e.next()).done; )
              s += T((l = l.value), t, o, (c = a + R(l, u++)), i);
          else if ('object' === l)
            throw (
              ((t = String(e)),
              Error(
                'Objects are not valid as a React child (found: ' +
                  ('[object Object]' === t
                    ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                    : t) +
                  '). If you meant to render a collection of children, use an array instead.',
              ))
            );
          return s;
        }
        function P(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return (
            T(e, n, '', '', function (e) {
              return t.call(r, e, o++);
            }),
            n
          );
        }
        function O(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) || ((e._status = 2), (e._result = t));
              },
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var L = { current: null },
          _ = { transition: null },
          I = { ReactCurrentDispatcher: L, ReactCurrentBatchConfig: _, ReactCurrentOwner: N };
        (t.Children = {
          map: P,
          forEach: function (e, t, r) {
            P(
              e,
              function () {
                t.apply(this, arguments);
              },
              r,
            );
          },
          count: function (e) {
            var t = 0;
            return (
              P(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              P(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!C(e))
              throw Error('React.Children.only expected to receive a single React element child.');
            return e;
          },
        }),
          (t.Component = v),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = y),
          (t.StrictMode = a),
          (t.Suspense = c),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  e +
                  '.',
              );
            var o = g({}, e.props),
              a = e.key,
              i = e.ref,
              l = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (l = N.current)),
                void 0 !== t.key && (a = '' + t.key),
                e.type && e.type.defaultProps)
              )
                var s = e.type.defaultProps;
              for (u in t)
                k.call(t, u) &&
                  !S.hasOwnProperty(u) &&
                  (o[u] = void 0 === t[u] && void 0 !== s ? s[u] : t[u]);
            }
            var u = arguments.length - 2;
            if (1 === u) o.children = n;
            else if (1 < u) {
              s = Array(u);
              for (var c = 0; c < u; c++) s[c] = arguments[c + 2];
              o.children = s;
            }
            return { $$typeof: r, type: e.type, key: a, ref: i, props: o, _owner: l };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: s,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: l, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = E),
          (t.createFactory = function (e) {
            var t = E.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: u, render: e };
          }),
          (t.isValidElement = C),
          (t.lazy = function (e) {
            return { $$typeof: f, _payload: { _status: -1, _result: e }, _init: O };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = _.transition;
            _.transition = {};
            try {
              e();
            } finally {
              _.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error('act(...) is not supported in production builds of React.');
          }),
          (t.useCallback = function (e, t) {
            return L.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return L.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return L.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return L.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return L.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return L.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return L.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return L.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return L.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return L.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return L.current.useRef(e);
          }),
          (t.useState = function (e) {
            return L.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return L.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return L.current.useTransition();
          }),
          (t.version = '18.2.0');
      },
      791: function (e, t, r) {
        e.exports = r(117);
      },
      184: function (e, t, r) {
        e.exports = r(374);
      },
      813: function (e, t) {
        function r(e, t) {
          var r = e.length;
          e.push(t);
          e: for (; 0 < r; ) {
            var n = (r - 1) >>> 1,
              o = e[n];
            if (!(0 < a(o, t))) break e;
            (e[n] = t), (e[r] = o), (r = n);
          }
        }
        function n(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            r = e.pop();
          if (r !== t) {
            e[0] = r;
            e: for (var n = 0, o = e.length, i = o >>> 1; n < i; ) {
              var l = 2 * (n + 1) - 1,
                s = e[l],
                u = l + 1,
                c = e[u];
              if (0 > a(s, r))
                u < o && 0 > a(c, s)
                  ? ((e[n] = c), (e[u] = r), (n = u))
                  : ((e[n] = s), (e[l] = r), (n = l));
              else {
                if (!(u < o && 0 > a(c, r))) break e;
                (e[n] = c), (e[u] = r), (n = u);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var r = e.sortIndex - t.sortIndex;
          return 0 !== r ? r : e.id - t.id;
        }
        if ('object' === typeof performance && 'function' === typeof performance.now) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var l = Date,
            s = l.now();
          t.unstable_now = function () {
            return l.now() - s;
          };
        }
        var u = [],
          c = [],
          d = 1,
          f = null,
          p = 3,
          h = !1,
          g = !1,
          m = !1,
          v = 'function' === typeof setTimeout ? setTimeout : null,
          b = 'function' === typeof clearTimeout ? clearTimeout : null,
          y = 'undefined' !== typeof setImmediate ? setImmediate : null;
        function x(e) {
          for (var t = n(c); null !== t; ) {
            if (null === t.callback) o(c);
            else {
              if (!(t.startTime <= e)) break;
              o(c), (t.sortIndex = t.expirationTime), r(u, t);
            }
            t = n(c);
          }
        }
        function w(e) {
          if (((m = !1), x(e), !g))
            if (null !== n(u)) (g = !0), _(k);
            else {
              var t = n(c);
              null !== t && I(w, t.startTime - e);
            }
        }
        function k(e, r) {
          (g = !1), m && ((m = !1), b(C), (C = -1)), (h = !0);
          var a = p;
          try {
            for (x(r), f = n(u); null !== f && (!(f.expirationTime > r) || (e && !T())); ) {
              var i = f.callback;
              if ('function' === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var l = i(f.expirationTime <= r);
                (r = t.unstable_now()),
                  'function' === typeof l ? (f.callback = l) : f === n(u) && o(u),
                  x(r);
              } else o(u);
              f = n(u);
            }
            if (null !== f) var s = !0;
            else {
              var d = n(c);
              null !== d && I(w, d.startTime - r), (s = !1);
            }
            return s;
          } finally {
            (f = null), (p = a), (h = !1);
          }
        }
        'undefined' !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var N,
          S = !1,
          E = null,
          C = -1,
          j = 5,
          R = -1;
        function T() {
          return !(t.unstable_now() - R < j);
        }
        function P() {
          if (null !== E) {
            var e = t.unstable_now();
            R = e;
            var r = !0;
            try {
              r = E(!0, e);
            } finally {
              r ? N() : ((S = !1), (E = null));
            }
          } else S = !1;
        }
        if ('function' === typeof y)
          N = function () {
            y(P);
          };
        else if ('undefined' !== typeof MessageChannel) {
          var O = new MessageChannel(),
            L = O.port2;
          (O.port1.onmessage = P),
            (N = function () {
              L.postMessage(null);
            });
        } else
          N = function () {
            v(P, 0);
          };
        function _(e) {
          (E = e), S || ((S = !0), N());
        }
        function I(e, r) {
          C = v(function () {
            e(t.unstable_now());
          }, r);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            g || h || ((g = !0), _(k));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
                )
              : (j = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return n(u);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var r = p;
            p = t;
            try {
              return e();
            } finally {
              p = r;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var r = p;
            p = e;
            try {
              return t();
            } finally {
              p = r;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ('object' === typeof a && null !== a
                ? (a = 'number' === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var l = -1;
                break;
              case 2:
                l = 250;
                break;
              case 5:
                l = 1073741823;
                break;
              case 4:
                l = 1e4;
                break;
              default:
                l = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (l = a + l),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  r(c, e),
                  null === n(u) && e === n(c) && (m ? (b(C), (C = -1)) : (m = !0), I(w, a - i)))
                : ((e.sortIndex = l), r(u, e), g || h || ((g = !0), _(k))),
              e
            );
          }),
          (t.unstable_shouldYield = T),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var r = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = r;
              }
            };
          });
      },
      296: function (e, t, r) {
        e.exports = r(813);
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (r.m = e),
    (function () {
      var e,
        t = Object.getPrototypeOf
          ? function (e) {
              return Object.getPrototypeOf(e);
            }
          : function (e) {
              return e.__proto__;
            };
      r.t = function (n, o) {
        if ((1 & o && (n = this(n)), 8 & o)) return n;
        if ('object' === typeof n && n) {
          if (4 & o && n.__esModule) return n;
          if (16 & o && 'function' === typeof n.then) return n;
        }
        var a = Object.create(null);
        r.r(a);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var l = 2 & o && n; 'object' == typeof l && !~e.indexOf(l); l = t(l))
          Object.getOwnPropertyNames(l).forEach(function (e) {
            i[e] = function () {
              return n[e];
            };
          });
        return (
          (i.default = function () {
            return n;
          }),
          r.d(a, i),
          a
        );
      };
    })(),
    (r.d = function (e, t) {
      for (var n in t)
        r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.f = {}),
    (r.e = function (e) {
      return Promise.all(
        Object.keys(r.f).reduce(function (t, n) {
          return r.f[n](e, t), t;
        }, []),
      );
    }),
    (r.u = function (e) {
      return 'static/js/' + e + '.cda612ba.chunk.js';
    }),
    (r.miniCssF = function (e) {}),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (function () {
      var e = {},
        t = 'frontend:';
      r.l = function (n, o, a, i) {
        if (e[n]) e[n].push(o);
        else {
          var l, s;
          if (void 0 !== a)
            for (var u = document.getElementsByTagName('script'), c = 0; c < u.length; c++) {
              var d = u[c];
              if (d.getAttribute('src') == n || d.getAttribute('data-webpack') == t + a) {
                l = d;
                break;
              }
            }
          l ||
            ((s = !0),
            ((l = document.createElement('script')).charset = 'utf-8'),
            (l.timeout = 120),
            r.nc && l.setAttribute('nonce', r.nc),
            l.setAttribute('data-webpack', t + a),
            (l.src = n)),
            (e[n] = [o]);
          var f = function (t, r) {
              (l.onerror = l.onload = null), clearTimeout(p);
              var o = e[n];
              if (
                (delete e[n],
                l.parentNode && l.parentNode.removeChild(l),
                o &&
                  o.forEach(function (e) {
                    return e(r);
                  }),
                t)
              )
                return t(r);
            },
            p = setTimeout(f.bind(null, void 0, { type: 'timeout', target: l }), 12e4);
          (l.onerror = f.bind(null, l.onerror)),
            (l.onload = f.bind(null, l.onload)),
            s && document.head.appendChild(l);
        }
      };
    })(),
    (r.r = function (e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (r.p = '/'),
    (function () {
      var e = { 179: 0 };
      r.f.j = function (t, n) {
        var o = r.o(e, t) ? e[t] : void 0;
        if (0 !== o)
          if (o) n.push(o[2]);
          else {
            var a = new Promise(function (r, n) {
              o = e[t] = [r, n];
            });
            n.push((o[2] = a));
            var i = r.p + r.u(t),
              l = new Error();
            r.l(
              i,
              function (n) {
                if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                  var a = n && ('load' === n.type ? 'missing' : n.type),
                    i = n && n.target && n.target.src;
                  (l.message = 'Loading chunk ' + t + ' failed.\n(' + a + ': ' + i + ')'),
                    (l.name = 'ChunkLoadError'),
                    (l.type = a),
                    (l.request = i),
                    o[1](l);
                }
              },
              'chunk-' + t,
              t,
            );
          }
      };
      var t = function (t, n) {
          var o,
            a,
            i = n[0],
            l = n[1],
            s = n[2],
            u = 0;
          if (
            i.some(function (t) {
              return 0 !== e[t];
            })
          ) {
            for (o in l) r.o(l, o) && (r.m[o] = l[o]);
            if (s) s(r);
          }
          for (t && t(n); u < i.length; u++) (a = i[u]), r.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        n = (self.webpackChunkfrontend = self.webpackChunkfrontend || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (function () {
      var e = r(791),
        t = r.t(e, 2),
        n = r(250);
      function o(e) {
        return (
          (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          o(e)
        );
      }
      function a() {
        a = function () {
          return t;
        };
        var e,
          t = {},
          r = Object.prototype,
          n = r.hasOwnProperty,
          i =
            Object.defineProperty ||
            function (e, t, r) {
              e[t] = r.value;
            },
          l = 'function' == typeof Symbol ? Symbol : {},
          s = l.iterator || '@@iterator',
          u = l.asyncIterator || '@@asyncIterator',
          c = l.toStringTag || '@@toStringTag';
        function d(e, t, r) {
          return (
            Object.defineProperty(e, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            e[t]
          );
        }
        try {
          d({}, '');
        } catch (e) {
          d = function (e, t, r) {
            return (e[t] = r);
          };
        }
        function f(e, t, r, n) {
          var o = t && t.prototype instanceof y ? t : y,
            a = Object.create(o.prototype),
            l = new L(n || []);
          return i(a, '_invoke', { value: R(e, r, l) }), a;
        }
        function p(e, t, r) {
          try {
            return { type: 'normal', arg: e.call(t, r) };
          } catch (e) {
            return { type: 'throw', arg: e };
          }
        }
        t.wrap = f;
        var h = 'suspendedStart',
          g = 'suspendedYield',
          m = 'executing',
          v = 'completed',
          b = {};
        function y() {}
        function x() {}
        function w() {}
        var k = {};
        d(k, s, function () {
          return this;
        });
        var N = Object.getPrototypeOf,
          S = N && N(N(_([])));
        S && S !== r && n.call(S, s) && (k = S);
        var E = (w.prototype = y.prototype = Object.create(k));
        function C(e) {
          ['next', 'throw', 'return'].forEach(function (t) {
            d(e, t, function (e) {
              return this._invoke(t, e);
            });
          });
        }
        function j(e, t) {
          function r(a, i, l, s) {
            var u = p(e[a], e, i);
            if ('throw' !== u.type) {
              var c = u.arg,
                d = c.value;
              return d && 'object' == o(d) && n.call(d, '__await')
                ? t.resolve(d.__await).then(
                    function (e) {
                      r('next', e, l, s);
                    },
                    function (e) {
                      r('throw', e, l, s);
                    },
                  )
                : t.resolve(d).then(
                    function (e) {
                      (c.value = e), l(c);
                    },
                    function (e) {
                      return r('throw', e, l, s);
                    },
                  );
            }
            s(u.arg);
          }
          var a;
          i(this, '_invoke', {
            value: function (e, n) {
              function o() {
                return new t(function (t, o) {
                  r(e, n, t, o);
                });
              }
              return (a = a ? a.then(o, o) : o());
            },
          });
        }
        function R(t, r, n) {
          var o = h;
          return function (a, i) {
            if (o === m) throw new Error('Generator is already running');
            if (o === v) {
              if ('throw' === a) throw i;
              return { value: e, done: !0 };
            }
            for (n.method = a, n.arg = i; ; ) {
              var l = n.delegate;
              if (l) {
                var s = T(l, n);
                if (s) {
                  if (s === b) continue;
                  return s;
                }
              }
              if ('next' === n.method) n.sent = n._sent = n.arg;
              else if ('throw' === n.method) {
                if (o === h) throw ((o = v), n.arg);
                n.dispatchException(n.arg);
              } else 'return' === n.method && n.abrupt('return', n.arg);
              o = m;
              var u = p(t, r, n);
              if ('normal' === u.type) {
                if (((o = n.done ? v : g), u.arg === b)) continue;
                return { value: u.arg, done: n.done };
              }
              'throw' === u.type && ((o = v), (n.method = 'throw'), (n.arg = u.arg));
            }
          };
        }
        function T(t, r) {
          var n = r.method,
            o = t.iterator[n];
          if (o === e)
            return (
              (r.delegate = null),
              ('throw' === n &&
                t.iterator.return &&
                ((r.method = 'return'), (r.arg = e), T(t, r), 'throw' === r.method)) ||
                ('return' !== n &&
                  ((r.method = 'throw'),
                  (r.arg = new TypeError("The iterator does not provide a '" + n + "' method")))),
              b
            );
          var a = p(o, t.iterator, r.arg);
          if ('throw' === a.type)
            return (r.method = 'throw'), (r.arg = a.arg), (r.delegate = null), b;
          var i = a.arg;
          return i
            ? i.done
              ? ((r[t.resultName] = i.value),
                (r.next = t.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                (r.delegate = null),
                b)
              : i
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              b);
        }
        function P(e) {
          var t = { tryLoc: e[0] };
          1 in e && (t.catchLoc = e[1]),
            2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
            this.tryEntries.push(t);
        }
        function O(e) {
          var t = e.completion || {};
          (t.type = 'normal'), delete t.arg, (e.completion = t);
        }
        function L(e) {
          (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(P, this), this.reset(!0);
        }
        function _(t) {
          if (t || '' === t) {
            var r = t[s];
            if (r) return r.call(t);
            if ('function' == typeof t.next) return t;
            if (!isNaN(t.length)) {
              var a = -1,
                i = function r() {
                  for (; ++a < t.length; )
                    if (n.call(t, a)) return (r.value = t[a]), (r.done = !1), r;
                  return (r.value = e), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          throw new TypeError(o(t) + ' is not iterable');
        }
        return (
          (x.prototype = w),
          i(E, 'constructor', { value: w, configurable: !0 }),
          i(w, 'constructor', { value: x, configurable: !0 }),
          (x.displayName = d(w, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (e) {
            var t = 'function' == typeof e && e.constructor;
            return !!t && (t === x || 'GeneratorFunction' === (t.displayName || t.name));
          }),
          (t.mark = function (e) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(e, w)
                : ((e.__proto__ = w), d(e, c, 'GeneratorFunction')),
              (e.prototype = Object.create(E)),
              e
            );
          }),
          (t.awrap = function (e) {
            return { __await: e };
          }),
          C(j.prototype),
          d(j.prototype, u, function () {
            return this;
          }),
          (t.AsyncIterator = j),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new j(f(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (e) {
                  return e.done ? e.value : i.next();
                });
          }),
          C(E),
          d(E, c, 'Generator'),
          d(E, s, function () {
            return this;
          }),
          d(E, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (e) {
            var t = Object(e),
              r = [];
            for (var n in t) r.push(n);
            return (
              r.reverse(),
              function e() {
                for (; r.length; ) {
                  var n = r.pop();
                  if (n in t) return (e.value = n), (e.done = !1), e;
                }
                return (e.done = !0), e;
              }
            );
          }),
          (t.values = _),
          (L.prototype = {
            constructor: L,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(O),
                !t)
              )
                for (var r in this)
                  't' === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var e = this.tryEntries[0].completion;
              if ('throw' === e.type) throw e.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function o(n, o) {
                return (
                  (l.type = 'throw'),
                  (l.arg = t),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = e)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  l = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var s = n.call(i, 'catchLoc'),
                    u = n.call(i, 'finallyLoc');
                  if (s && u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (s) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!u) throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (e, t) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, 'finallyLoc') && this.prev < o.finallyLoc) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === e || 'continue' === e) &&
                a.tryLoc <= t &&
                t <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = e),
                (i.arg = t),
                a ? ((this.method = 'next'), (this.next = a.finallyLoc), b) : this.complete(i)
              );
            },
            complete: function (e, t) {
              if ('throw' === e.type) throw e.arg;
              return (
                'break' === e.type || 'continue' === e.type
                  ? (this.next = e.arg)
                  : 'return' === e.type
                  ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end'))
                  : 'normal' === e.type && t && (this.next = t),
                b
              );
            },
            finish: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), O(r), b;
              }
            },
            catch: function (e) {
              for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                var r = this.tryEntries[t];
                if (r.tryLoc === e) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    O(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: _(t), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = e),
                b
              );
            },
          }),
          t
        );
      }
      function i(e, t, r, n, o, a, i) {
        try {
          var l = e[a](i),
            s = l.value;
        } catch (u) {
          return void r(u);
        }
        l.done ? t(s) : Promise.resolve(s).then(n, o);
      }
      function l(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = e.apply(t, r);
            function l(e) {
              i(a, n, o, l, s, 'next', e);
            }
            function s(e) {
              i(a, n, o, l, s, 'throw', e);
            }
            l(void 0);
          });
        };
      }
      function s(e) {
        if (Array.isArray(e)) return e;
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function c(e, t) {
        if (e) {
          if ('string' === typeof e) return u(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === r && e.constructor && (r = e.constructor.name),
            'Map' === r || 'Set' === r
              ? Array.from(e)
              : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? u(e, t)
              : void 0
          );
        }
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function f(e, t) {
        return (
          s(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
            if (null != r) {
              var n,
                o,
                a,
                i,
                l = [],
                s = !0,
                u = !1;
              try {
                if (((a = (r = r.call(e)).next), 0 === t)) {
                  if (Object(r) !== r) return;
                  s = !1;
                } else
                  for (; !(s = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); s = !0);
              } catch (e) {
                (u = !0), (o = e);
              } finally {
                try {
                  if (!s && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                } finally {
                  if (u) throw o;
                }
              }
              return l;
            }
          })(e, t) ||
          c(e, t) ||
          d()
        );
      }
      function p(e) {
        this.message = e;
      }
      (p.prototype = new Error()), (p.prototype.name = 'InvalidCharacterError');
      var h =
        ('undefined' != typeof window && window.atob && window.atob.bind(window)) ||
        function (e) {
          var t = String(e).replace(/=+$/, '');
          if (t.length % 4 == 1)
            throw new p("'atob' failed: The string to be decoded is not correctly encoded.");
          for (
            var r, n, o = 0, a = 0, i = '';
            (n = t.charAt(a++));
            ~n && ((r = o % 4 ? 64 * r + n : n), o++ % 4)
              ? (i += String.fromCharCode(255 & (r >> ((-2 * o) & 6))))
              : 0
          )
            n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(n);
          return i;
        };
      function g(e) {
        var t = e.replace(/-/g, '+').replace(/_/g, '/');
        switch (t.length % 4) {
          case 0:
            break;
          case 2:
            t += '==';
            break;
          case 3:
            t += '=';
            break;
          default:
            throw 'Illegal base64url string!';
        }
        try {
          return (function (e) {
            return decodeURIComponent(
              h(e).replace(/(.)/g, function (e, t) {
                var r = t.charCodeAt(0).toString(16).toUpperCase();
                return r.length < 2 && (r = '0' + r), '%' + r;
              }),
            );
          })(t);
        } catch (e) {
          return h(t);
        }
      }
      function m(e) {
        this.message = e;
      }
      (m.prototype = new Error()), (m.prototype.name = 'InvalidTokenError');
      var v,
        b = function (e, t) {
          if ('string' != typeof e) throw new m('Invalid token specified');
          var r = !0 === (t = t || {}).header ? 0 : 1;
          try {
            return JSON.parse(g(e.split('.')[r]));
          } catch (e) {
            throw new m('Invalid token specified: ' + e.message);
          }
        },
        y = null !== (v = localStorage.getItem('token')) && void 0 !== v ? v : void 0,
        x = {
          token: y,
          isAuthResolved: Boolean(y),
          user: y ? b(y) : void 0,
          setToken: function () {},
          clearToken: function () {},
        },
        w = (0, e.createContext)(x),
        k = function () {
          return (0, e.useContext)(w);
        };
      function N(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      var S,
        E = Object.prototype.toString,
        C = Object.getPrototypeOf,
        j =
          ((S = Object.create(null)),
          function (e) {
            var t = E.call(e);
            return S[t] || (S[t] = t.slice(8, -1).toLowerCase());
          }),
        R = function (e) {
          return (
            (e = e.toLowerCase()),
            function (t) {
              return j(t) === e;
            }
          );
        },
        T = function (e) {
          return function (t) {
            return typeof t === e;
          };
        },
        P = Array.isArray,
        O = T('undefined');
      var L = R('ArrayBuffer');
      var _ = T('string'),
        I = T('function'),
        D = T('number'),
        z = function (e) {
          return null !== e && 'object' === typeof e;
        },
        M = function (e) {
          if ('object' !== j(e)) return !1;
          var t = C(e);
          return (
            (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
          );
        },
        A = R('Date'),
        F = R('File'),
        B = R('Blob'),
        U = R('FileList'),
        W = R('URLSearchParams');
      function H(e, t) {
        var r,
          n,
          o = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).allOwnKeys,
          a = void 0 !== o && o;
        if (null !== e && 'undefined' !== typeof e)
          if (('object' !== typeof e && (e = [e]), P(e)))
            for (r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
          else {
            var i,
              l = a ? Object.getOwnPropertyNames(e) : Object.keys(e),
              s = l.length;
            for (r = 0; r < s; r++) (i = l[r]), t.call(null, e[i], i, e);
          }
      }
      function V(e, t) {
        t = t.toLowerCase();
        for (var r, n = Object.keys(e), o = n.length; o-- > 0; )
          if (t === (r = n[o]).toLowerCase()) return r;
        return null;
      }
      var $ =
          'undefined' !== typeof globalThis
            ? globalThis
            : 'undefined' !== typeof self
            ? self
            : 'undefined' !== typeof window
            ? window
            : global,
        q = function (e) {
          return !O(e) && e !== $;
        };
      var G,
        K =
          ((G = 'undefined' !== typeof Uint8Array && C(Uint8Array)),
          function (e) {
            return G && e instanceof G;
          }),
        Q = R('HTMLFormElement'),
        Y = (function (e) {
          var t = Object.prototype.hasOwnProperty;
          return function (e, r) {
            return t.call(e, r);
          };
        })(),
        X = R('RegExp'),
        J = function (e, t) {
          var r = Object.getOwnPropertyDescriptors(e),
            n = {};
          H(r, function (r, o) {
            var a;
            !1 !== (a = t(r, o, e)) && (n[o] = a || r);
          }),
            Object.defineProperties(e, n);
        },
        Z = 'abcdefghijklmnopqrstuvwxyz',
        ee = '0123456789',
        te = { DIGIT: ee, ALPHA: Z, ALPHA_DIGIT: Z + Z.toUpperCase() + ee };
      var re = R('AsyncFunction'),
        ne = {
          isArray: P,
          isArrayBuffer: L,
          isBuffer: function (e) {
            return (
              null !== e &&
              !O(e) &&
              null !== e.constructor &&
              !O(e.constructor) &&
              I(e.constructor.isBuffer) &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            var t;
            return (
              e &&
              (('function' === typeof FormData && e instanceof FormData) ||
                (I(e.append) &&
                  ('formdata' === (t = j(e)) ||
                    ('object' === t && I(e.toString) && '[object FormData]' === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            return 'undefined' !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && L(e.buffer);
          },
          isString: _,
          isNumber: D,
          isBoolean: function (e) {
            return !0 === e || !1 === e;
          },
          isObject: z,
          isPlainObject: M,
          isUndefined: O,
          isDate: A,
          isFile: F,
          isBlob: B,
          isRegExp: X,
          isFunction: I,
          isStream: function (e) {
            return z(e) && I(e.pipe);
          },
          isURLSearchParams: W,
          isTypedArray: K,
          isFileList: U,
          forEach: H,
          merge: function e() {
            for (
              var t = ((q(this) && this) || {}).caseless,
                r = {},
                n = function (n, o) {
                  var a = (t && V(r, o)) || o;
                  M(r[a]) && M(n)
                    ? (r[a] = e(r[a], n))
                    : M(n)
                    ? (r[a] = e({}, n))
                    : P(n)
                    ? (r[a] = n.slice())
                    : (r[a] = n);
                },
                o = 0,
                a = arguments.length;
              o < a;
              o++
            )
              arguments[o] && H(arguments[o], n);
            return r;
          },
          extend: function (e, t, r) {
            return (
              H(
                t,
                function (t, n) {
                  r && I(t) ? (e[n] = N(t, r)) : (e[n] = t);
                },
                {
                  allOwnKeys: (arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {})
                    .allOwnKeys,
                },
              ),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
          inherits: function (e, t, r, n) {
            (e.prototype = Object.create(t.prototype, n)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, 'super', { value: t.prototype }),
              r && Object.assign(e.prototype, r);
          },
          toFlatObject: function (e, t, r, n) {
            var o,
              a,
              i,
              l = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (a = (o = Object.getOwnPropertyNames(e)).length; a-- > 0; )
                (i = o[a]), (n && !n(i, e, t)) || l[i] || ((t[i] = e[i]), (l[i] = !0));
              e = !1 !== r && C(e);
            } while (e && (!r || r(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: j,
          kindOfTest: R,
          endsWith: function (e, t, r) {
            (e = String(e)), (void 0 === r || r > e.length) && (r = e.length), (r -= t.length);
            var n = e.indexOf(t, r);
            return -1 !== n && n === r;
          },
          toArray: function (e) {
            if (!e) return null;
            if (P(e)) return e;
            var t = e.length;
            if (!D(t)) return null;
            for (var r = new Array(t); t-- > 0; ) r[t] = e[t];
            return r;
          },
          forEachEntry: function (e, t) {
            for (var r, n = (e && e[Symbol.iterator]).call(e); (r = n.next()) && !r.done; ) {
              var o = r.value;
              t.call(e, o[0], o[1]);
            }
          },
          matchAll: function (e, t) {
            for (var r, n = []; null !== (r = e.exec(t)); ) n.push(r);
            return n;
          },
          isHTMLForm: Q,
          hasOwnProperty: Y,
          hasOwnProp: Y,
          reduceDescriptors: J,
          freezeMethods: function (e) {
            J(e, function (t, r) {
              if (I(e) && -1 !== ['arguments', 'caller', 'callee'].indexOf(r)) return !1;
              var n = e[r];
              I(n) &&
                ((t.enumerable = !1),
                'writable' in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = function () {
                      throw Error("Can not rewrite read-only method '" + r + "'");
                    }));
            });
          },
          toObjectSet: function (e, t) {
            var r = {},
              n = function (e) {
                e.forEach(function (e) {
                  r[e] = !0;
                });
              };
            return P(e) ? n(e) : n(String(e).split(t)), r;
          },
          toCamelCase: function (e) {
            return e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, r) {
              return t.toUpperCase() + r;
            });
          },
          noop: function () {},
          toFiniteNumber: function (e, t) {
            return (e = +e), Number.isFinite(e) ? e : t;
          },
          findKey: V,
          global: $,
          isContextDefined: q,
          ALPHABET: te,
          generateString: function () {
            for (
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : te.ALPHA_DIGIT,
                r = '',
                n = t.length;
              e--;

            )
              r += t[(Math.random() * n) | 0];
            return r;
          },
          isSpecCompliantForm: function (e) {
            return !!(
              e &&
              I(e.append) &&
              'FormData' === e[Symbol.toStringTag] &&
              e[Symbol.iterator]
            );
          },
          toJSONObject: function (e) {
            var t = new Array(10);
            return (function e(r, n) {
              if (z(r)) {
                if (t.indexOf(r) >= 0) return;
                if (!('toJSON' in r)) {
                  t[n] = r;
                  var o = P(r) ? [] : {};
                  return (
                    H(r, function (t, r) {
                      var a = e(t, n + 1);
                      !O(a) && (o[r] = a);
                    }),
                    (t[n] = void 0),
                    o
                  );
                }
              }
              return r;
            })(e, 0);
          },
          isAsyncFn: re,
          isThenable: function (e) {
            return e && (z(e) || I(e)) && I(e.then) && I(e.catch);
          },
        };
      function oe(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      function ae(e) {
        var t = (function (e, t) {
          if ('object' !== o(e) || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || 'default');
            if ('object' !== o(n)) return n;
            throw new TypeError('@@toPrimitive must return a primitive value.');
          }
          return ('string' === t ? String : Number)(e);
        })(e, 'string');
        return 'symbol' === o(t) ? t : String(t);
      }
      function ie(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(e, ae(n.key), n);
        }
      }
      function le(e, t, r) {
        return (
          t && ie(e.prototype, t),
          r && ie(e, r),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          e
        );
      }
      function se(e, t, r, n, o) {
        Error.call(this),
          Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = 'AxiosError'),
          t && (this.code = t),
          r && (this.config = r),
          n && (this.request = n),
          o && (this.response = o);
      }
      ne.inherits(se, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: ne.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null,
          };
        },
      });
      var ue = se.prototype,
        ce = {};
      [
        'ERR_BAD_OPTION_VALUE',
        'ERR_BAD_OPTION',
        'ECONNABORTED',
        'ETIMEDOUT',
        'ERR_NETWORK',
        'ERR_FR_TOO_MANY_REDIRECTS',
        'ERR_DEPRECATED',
        'ERR_BAD_RESPONSE',
        'ERR_BAD_REQUEST',
        'ERR_CANCELED',
        'ERR_NOT_SUPPORT',
        'ERR_INVALID_URL',
      ].forEach(function (e) {
        ce[e] = { value: e };
      }),
        Object.defineProperties(se, ce),
        Object.defineProperty(ue, 'isAxiosError', { value: !0 }),
        (se.from = function (e, t, r, n, o, a) {
          var i = Object.create(ue);
          return (
            ne.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              function (e) {
                return 'isAxiosError' !== e;
              },
            ),
            se.call(i, e.message, t, r, n, o),
            (i.cause = e),
            (i.name = e.name),
            a && Object.assign(i, a),
            i
          );
        });
      var de = se;
      function fe(e) {
        return ne.isPlainObject(e) || ne.isArray(e);
      }
      function pe(e) {
        return ne.endsWith(e, '[]') ? e.slice(0, -2) : e;
      }
      function he(e, t, r) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = pe(e)), !r && t ? '[' + e + ']' : e;
              })
              .join(r ? '.' : '')
          : t;
      }
      var ge = ne.toFlatObject(ne, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      });
      var me = function (e, t, r) {
        if (!ne.isObject(e)) throw new TypeError('target must be an object');
        t = t || new FormData();
        var n = (r = ne.toFlatObject(
            r,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (e, t) {
              return !ne.isUndefined(t[e]);
            },
          )).metaTokens,
          o = r.visitor || u,
          a = r.dots,
          i = r.indexes,
          l = (r.Blob || ('undefined' !== typeof Blob && Blob)) && ne.isSpecCompliantForm(t);
        if (!ne.isFunction(o)) throw new TypeError('visitor must be a function');
        function s(e) {
          if (null === e) return '';
          if (ne.isDate(e)) return e.toISOString();
          if (!l && ne.isBlob(e)) throw new de('Blob is not supported. Use a Buffer instead.');
          return ne.isArrayBuffer(e) || ne.isTypedArray(e)
            ? l && 'function' === typeof Blob
              ? new Blob([e])
              : Buffer.from(e)
            : e;
        }
        function u(e, r, o) {
          var l = e;
          if (e && !o && 'object' === typeof e)
            if (ne.endsWith(r, '{}')) (r = n ? r : r.slice(0, -2)), (e = JSON.stringify(e));
            else if (
              (ne.isArray(e) &&
                (function (e) {
                  return ne.isArray(e) && !e.some(fe);
                })(e)) ||
              ((ne.isFileList(e) || ne.endsWith(r, '[]')) && (l = ne.toArray(e)))
            )
              return (
                (r = pe(r)),
                l.forEach(function (e, n) {
                  !ne.isUndefined(e) &&
                    null !== e &&
                    t.append(!0 === i ? he([r], n, a) : null === i ? r : r + '[]', s(e));
                }),
                !1
              );
          return !!fe(e) || (t.append(he(o, r, a), s(e)), !1);
        }
        var c = [],
          d = Object.assign(ge, { defaultVisitor: u, convertValue: s, isVisitable: fe });
        if (!ne.isObject(e)) throw new TypeError('data must be an object');
        return (
          (function e(r, n) {
            if (!ne.isUndefined(r)) {
              if (-1 !== c.indexOf(r)) throw Error('Circular reference detected in ' + n.join('.'));
              c.push(r),
                ne.forEach(r, function (r, a) {
                  !0 ===
                    (!(ne.isUndefined(r) || null === r) &&
                      o.call(t, r, ne.isString(a) ? a.trim() : a, n, d)) &&
                    e(r, n ? n.concat(a) : [a]);
                }),
                c.pop();
            }
          })(e),
          t
        );
      };
      function ve(e) {
        var t = {
          '!': '%21',
          "'": '%27',
          '(': '%28',
          ')': '%29',
          '~': '%7E',
          '%20': '+',
          '%00': '\0',
        };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function be(e, t) {
        (this._pairs = []), e && me(e, this, t);
      }
      var ye = be.prototype;
      (ye.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (ye.toString = function (e) {
          var t = e
            ? function (t) {
                return e.call(this, t, ve);
              }
            : ve;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + '=' + t(e[1]);
            }, '')
            .join('&');
        });
      var xe = be;
      function we(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',')
          .replace(/%20/g, '+')
          .replace(/%5B/gi, '[')
          .replace(/%5D/gi, ']');
      }
      function ke(e, t, r) {
        if (!t) return e;
        var n,
          o = (r && r.encode) || we,
          a = r && r.serialize;
        if ((n = a ? a(t, r) : ne.isURLSearchParams(t) ? t.toString() : new xe(t, r).toString(o))) {
          var i = e.indexOf('#');
          -1 !== i && (e = e.slice(0, i)), (e += (-1 === e.indexOf('?') ? '?' : '&') + n);
        }
        return e;
      }
      var Ne = (function () {
          function e() {
            oe(this, e), (this.handlers = []);
          }
          return (
            le(e, [
              {
                key: 'use',
                value: function (e, t, r) {
                  return (
                    this.handlers.push({
                      fulfilled: e,
                      rejected: t,
                      synchronous: !!r && r.synchronous,
                      runWhen: r ? r.runWhen : null,
                    }),
                    this.handlers.length - 1
                  );
                },
              },
              {
                key: 'eject',
                value: function (e) {
                  this.handlers[e] && (this.handlers[e] = null);
                },
              },
              {
                key: 'clear',
                value: function () {
                  this.handlers && (this.handlers = []);
                },
              },
              {
                key: 'forEach',
                value: function (e) {
                  ne.forEach(this.handlers, function (t) {
                    null !== t && e(t);
                  });
                },
              },
            ]),
            e
          );
        })(),
        Se = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
        Ee = {
          isBrowser: !0,
          classes: {
            URLSearchParams: 'undefined' !== typeof URLSearchParams ? URLSearchParams : xe,
            FormData: 'undefined' !== typeof FormData ? FormData : null,
            Blob: 'undefined' !== typeof Blob ? Blob : null,
          },
          isStandardBrowserEnv: (function () {
            var e;
            return (
              ('undefined' === typeof navigator ||
                ('ReactNative' !== (e = navigator.product) &&
                  'NativeScript' !== e &&
                  'NS' !== e)) &&
              'undefined' !== typeof window &&
              'undefined' !== typeof document
            );
          })(),
          isStandardBrowserWebWorkerEnv:
            'undefined' !== typeof WorkerGlobalScope &&
            self instanceof WorkerGlobalScope &&
            'function' === typeof self.importScripts,
          protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
        };
      var Ce = function (e) {
        function t(e, r, n, o) {
          var a = e[o++],
            i = Number.isFinite(+a),
            l = o >= e.length;
          return (
            (a = !a && ne.isArray(n) ? n.length : a),
            l
              ? (ne.hasOwnProp(n, a) ? (n[a] = [n[a], r]) : (n[a] = r), !i)
              : ((n[a] && ne.isObject(n[a])) || (n[a] = []),
                t(e, r, n[a], o) &&
                  ne.isArray(n[a]) &&
                  (n[a] = (function (e) {
                    var t,
                      r,
                      n = {},
                      o = Object.keys(e),
                      a = o.length;
                    for (t = 0; t < a; t++) n[(r = o[t])] = e[r];
                    return n;
                  })(n[a])),
                !i)
          );
        }
        if (ne.isFormData(e) && ne.isFunction(e.entries)) {
          var r = {};
          return (
            ne.forEachEntry(e, function (e, n) {
              t(
                (function (e) {
                  return ne.matchAll(/\w+|\[(\w*)]/g, e).map(function (e) {
                    return '[]' === e[0] ? '' : e[1] || e[0];
                  });
                })(e),
                n,
                r,
                0,
              );
            }),
            r
          );
        }
        return null;
      };
      var je = {
        transitional: Se,
        adapter: Ee.isNode ? 'http' : 'xhr',
        transformRequest: [
          function (e, t) {
            var r,
              n = t.getContentType() || '',
              o = n.indexOf('application/json') > -1,
              a = ne.isObject(e);
            if ((a && ne.isHTMLForm(e) && (e = new FormData(e)), ne.isFormData(e)))
              return o && o ? JSON.stringify(Ce(e)) : e;
            if (
              ne.isArrayBuffer(e) ||
              ne.isBuffer(e) ||
              ne.isStream(e) ||
              ne.isFile(e) ||
              ne.isBlob(e)
            )
              return e;
            if (ne.isArrayBufferView(e)) return e.buffer;
            if (ne.isURLSearchParams(e))
              return (
                t.setContentType('application/x-www-form-urlencoded;charset=utf-8', !1),
                e.toString()
              );
            if (a) {
              if (n.indexOf('application/x-www-form-urlencoded') > -1)
                return (function (e, t) {
                  return me(
                    e,
                    new Ee.classes.URLSearchParams(),
                    Object.assign(
                      {
                        visitor: function (e, t, r, n) {
                          return Ee.isNode && ne.isBuffer(e)
                            ? (this.append(t, e.toString('base64')), !1)
                            : n.defaultVisitor.apply(this, arguments);
                        },
                      },
                      t,
                    ),
                  );
                })(e, this.formSerializer).toString();
              if ((r = ne.isFileList(e)) || n.indexOf('multipart/form-data') > -1) {
                var i = this.env && this.env.FormData;
                return me(r ? { 'files[]': e } : e, i && new i(), this.formSerializer);
              }
            }
            return a || o
              ? (t.setContentType('application/json', !1),
                (function (e, t, r) {
                  if (ne.isString(e))
                    try {
                      return (t || JSON.parse)(e), ne.trim(e);
                    } catch (p) {
                      if ('SyntaxError' !== p.name) throw p;
                    }
                  return (r || JSON.stringify)(e);
                })(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || je.transitional,
              r = t && t.forcedJSONParsing,
              n = 'json' === this.responseType;
            if (e && ne.isString(e) && ((r && !this.responseType) || n)) {
              var o = !(t && t.silentJSONParsing) && n;
              try {
                return JSON.parse(e);
              } catch (p) {
                if (o) {
                  if ('SyntaxError' === p.name)
                    throw de.from(p, de.ERR_BAD_RESPONSE, this, null, this.response);
                  throw p;
                }
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: Ee.classes.FormData, Blob: Ee.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: { Accept: 'application/json, text/plain, */*', 'Content-Type': void 0 },
        },
      };
      ne.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], function (e) {
        je.headers[e] = {};
      });
      var Re = je,
        Te = ne.toObjectSet([
          'age',
          'authorization',
          'content-length',
          'content-type',
          'etag',
          'expires',
          'from',
          'host',
          'if-modified-since',
          'if-unmodified-since',
          'last-modified',
          'location',
          'max-forwards',
          'proxy-authorization',
          'referer',
          'retry-after',
          'user-agent',
        ]),
        Pe = Symbol('internals');
      function Oe(e) {
        return e && String(e).trim().toLowerCase();
      }
      function Le(e) {
        return !1 === e || null == e ? e : ne.isArray(e) ? e.map(Le) : String(e);
      }
      function _e(e, t, r, n, o) {
        return ne.isFunction(n)
          ? n.call(this, t, r)
          : (o && (t = r),
            ne.isString(t)
              ? ne.isString(n)
                ? -1 !== t.indexOf(n)
                : ne.isRegExp(n)
                ? n.test(t)
                : void 0
              : void 0);
      }
      var Ie = (function (e, t) {
        function r(e) {
          oe(this, r), e && this.set(e);
        }
        return (
          le(
            r,
            [
              {
                key: 'set',
                value: function (e, t, r) {
                  var n = this;
                  function o(e, t, r) {
                    var o = Oe(t);
                    if (!o) throw new Error('header name must be a non-empty string');
                    var a = ne.findKey(n, o);
                    (!a || void 0 === n[a] || !0 === r || (void 0 === r && !1 !== n[a])) &&
                      (n[a || t] = Le(e));
                  }
                  var a = function (e, t) {
                    return ne.forEach(e, function (e, r) {
                      return o(e, r, t);
                    });
                  };
                  return (
                    ne.isPlainObject(e) || e instanceof this.constructor
                      ? a(e, t)
                      : ne.isString(e) &&
                        (e = e.trim()) &&
                        !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                      ? a(
                          (function (e) {
                            var t,
                              r,
                              n,
                              o = {};
                            return (
                              e &&
                                e.split('\n').forEach(function (e) {
                                  (n = e.indexOf(':')),
                                    (t = e.substring(0, n).trim().toLowerCase()),
                                    (r = e.substring(n + 1).trim()),
                                    !t ||
                                      (o[t] && Te[t]) ||
                                      ('set-cookie' === t
                                        ? o[t]
                                          ? o[t].push(r)
                                          : (o[t] = [r])
                                        : (o[t] = o[t] ? o[t] + ', ' + r : r));
                                }),
                              o
                            );
                          })(e),
                          t,
                        )
                      : null != e && o(t, e, r),
                    this
                  );
                },
              },
              {
                key: 'get',
                value: function (e, t) {
                  if ((e = Oe(e))) {
                    var r = ne.findKey(this, e);
                    if (r) {
                      var n = this[r];
                      if (!t) return n;
                      if (!0 === t)
                        return (function (e) {
                          for (
                            var t, r = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                            (t = n.exec(e));

                          )
                            r[t[1]] = t[2];
                          return r;
                        })(n);
                      if (ne.isFunction(t)) return t.call(this, n, r);
                      if (ne.isRegExp(t)) return t.exec(n);
                      throw new TypeError('parser must be boolean|regexp|function');
                    }
                  }
                },
              },
              {
                key: 'has',
                value: function (e, t) {
                  if ((e = Oe(e))) {
                    var r = ne.findKey(this, e);
                    return !(!r || void 0 === this[r] || (t && !_e(0, this[r], r, t)));
                  }
                  return !1;
                },
              },
              {
                key: 'delete',
                value: function (e, t) {
                  var r = this,
                    n = !1;
                  function o(e) {
                    if ((e = Oe(e))) {
                      var o = ne.findKey(r, e);
                      !o || (t && !_e(0, r[o], o, t)) || (delete r[o], (n = !0));
                    }
                  }
                  return ne.isArray(e) ? e.forEach(o) : o(e), n;
                },
              },
              {
                key: 'clear',
                value: function (e) {
                  for (var t = Object.keys(this), r = t.length, n = !1; r--; ) {
                    var o = t[r];
                    (e && !_e(0, this[o], o, e, !0)) || (delete this[o], (n = !0));
                  }
                  return n;
                },
              },
              {
                key: 'normalize',
                value: function (e) {
                  var t = this,
                    r = {};
                  return (
                    ne.forEach(this, function (n, o) {
                      var a = ne.findKey(r, o);
                      if (a) return (t[a] = Le(n)), void delete t[o];
                      var i = e
                        ? (function (e) {
                            return e
                              .trim()
                              .toLowerCase()
                              .replace(/([a-z\d])(\w*)/g, function (e, t, r) {
                                return t.toUpperCase() + r;
                              });
                          })(o)
                        : String(o).trim();
                      i !== o && delete t[o], (t[i] = Le(n)), (r[i] = !0);
                    }),
                    this
                  );
                },
              },
              {
                key: 'concat',
                value: function () {
                  for (var e, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
                    r[n] = arguments[n];
                  return (e = this.constructor).concat.apply(e, [this].concat(r));
                },
              },
              {
                key: 'toJSON',
                value: function (e) {
                  var t = Object.create(null);
                  return (
                    ne.forEach(this, function (r, n) {
                      null != r && !1 !== r && (t[n] = e && ne.isArray(r) ? r.join(', ') : r);
                    }),
                    t
                  );
                },
              },
              {
                key: Symbol.iterator,
                value: function () {
                  return Object.entries(this.toJSON())[Symbol.iterator]();
                },
              },
              {
                key: 'toString',
                value: function () {
                  return Object.entries(this.toJSON())
                    .map(function (e) {
                      var t = f(e, 2);
                      return t[0] + ': ' + t[1];
                    })
                    .join('\n');
                },
              },
              {
                key: Symbol.toStringTag,
                get: function () {
                  return 'AxiosHeaders';
                },
              },
            ],
            [
              {
                key: 'from',
                value: function (e) {
                  return e instanceof this ? e : new this(e);
                },
              },
              {
                key: 'concat',
                value: function (e) {
                  for (
                    var t = new this(e),
                      r = arguments.length,
                      n = new Array(r > 1 ? r - 1 : 0),
                      o = 1;
                    o < r;
                    o++
                  )
                    n[o - 1] = arguments[o];
                  return (
                    n.forEach(function (e) {
                      return t.set(e);
                    }),
                    t
                  );
                },
              },
              {
                key: 'accessor',
                value: function (e) {
                  var t = (this[Pe] = this[Pe] = { accessors: {} }).accessors,
                    r = this.prototype;
                  function n(e) {
                    var n = Oe(e);
                    t[n] ||
                      (!(function (e, t) {
                        var r = ne.toCamelCase(' ' + t);
                        ['get', 'set', 'has'].forEach(function (n) {
                          Object.defineProperty(e, n + r, {
                            value: function (e, r, o) {
                              return this[n].call(this, t, e, r, o);
                            },
                            configurable: !0,
                          });
                        });
                      })(r, e),
                      (t[n] = !0));
                  }
                  return ne.isArray(e) ? e.forEach(n) : n(e), this;
                },
              },
            ],
          ),
          r
        );
      })();
      Ie.accessor([
        'Content-Type',
        'Content-Length',
        'Accept',
        'Accept-Encoding',
        'User-Agent',
        'Authorization',
      ]),
        ne.reduceDescriptors(Ie.prototype, function (e, t) {
          var r = e.value,
            n = t[0].toUpperCase() + t.slice(1);
          return {
            get: function () {
              return r;
            },
            set: function (e) {
              this[n] = e;
            },
          };
        }),
        ne.freezeMethods(Ie);
      var De = Ie;
      function ze(e, t) {
        var r = this || Re,
          n = t || r,
          o = De.from(n.headers),
          a = n.data;
        return (
          ne.forEach(e, function (e) {
            a = e.call(r, a, o.normalize(), t ? t.status : void 0);
          }),
          o.normalize(),
          a
        );
      }
      function Me(e) {
        return !(!e || !e.__CANCEL__);
      }
      function Ae(e, t, r) {
        de.call(this, null == e ? 'canceled' : e, de.ERR_CANCELED, t, r),
          (this.name = 'CanceledError');
      }
      ne.inherits(Ae, de, { __CANCEL__: !0 });
      var Fe = Ae;
      var Be = Ee.isStandardBrowserEnv
        ? {
            write: function (e, t, r, n, o, a) {
              var i = [];
              i.push(e + '=' + encodeURIComponent(t)),
                ne.isNumber(r) && i.push('expires=' + new Date(r).toGMTString()),
                ne.isString(n) && i.push('path=' + n),
                ne.isString(o) && i.push('domain=' + o),
                !0 === a && i.push('secure'),
                (document.cookie = i.join('; '));
            },
            read: function (e) {
              var t = document.cookie.match(new RegExp('(^|;\\s*)(' + e + ')=([^;]*)'));
              return t ? decodeURIComponent(t[3]) : null;
            },
            remove: function (e) {
              this.write(e, '', Date.now() - 864e5);
            },
          }
        : {
            write: function () {},
            read: function () {
              return null;
            },
            remove: function () {},
          };
      function Ue(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
          ? (function (e, t) {
              return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e;
            })(e, t)
          : t;
      }
      var We = Ee.isStandardBrowserEnv
        ? (function () {
            var e,
              t = /(msie|trident)/i.test(navigator.userAgent),
              r = document.createElement('a');
            function n(e) {
              var n = e;
              return (
                t && (r.setAttribute('href', n), (n = r.href)),
                r.setAttribute('href', n),
                {
                  href: r.href,
                  protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                  host: r.host,
                  search: r.search ? r.search.replace(/^\?/, '') : '',
                  hash: r.hash ? r.hash.replace(/^#/, '') : '',
                  hostname: r.hostname,
                  port: r.port,
                  pathname: '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname,
                }
              );
            }
            return (
              (e = n(window.location.href)),
              function (t) {
                var r = ne.isString(t) ? n(t) : t;
                return r.protocol === e.protocol && r.host === e.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      var He = function (e, t) {
        e = e || 10;
        var r,
          n = new Array(e),
          o = new Array(e),
          a = 0,
          i = 0;
        return (
          (t = void 0 !== t ? t : 1e3),
          function (l) {
            var s = Date.now(),
              u = o[i];
            r || (r = s), (n[a] = l), (o[a] = s);
            for (var c = i, d = 0; c !== a; ) (d += n[c++]), (c %= e);
            if (((a = (a + 1) % e) === i && (i = (i + 1) % e), !(s - r < t))) {
              var f = u && s - u;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          }
        );
      };
      function Ve(e, t) {
        var r = 0,
          n = He(50, 250);
        return function (o) {
          var a = o.loaded,
            i = o.lengthComputable ? o.total : void 0,
            l = a - r,
            s = n(l);
          r = a;
          var u = {
            loaded: a,
            total: i,
            progress: i ? a / i : void 0,
            bytes: l,
            rate: s || void 0,
            estimated: s && i && a <= i ? (i - a) / s : void 0,
            event: o,
          };
          (u[t ? 'download' : 'upload'] = !0), e(u);
        };
      }
      var $e = {
        http: null,
        xhr:
          'undefined' !== typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, r) {
              var n,
                o = e.data,
                a = De.from(e.headers).normalize(),
                i = e.responseType;
              function l() {
                e.cancelToken && e.cancelToken.unsubscribe(n),
                  e.signal && e.signal.removeEventListener('abort', n);
              }
              ne.isFormData(o) &&
                (Ee.isStandardBrowserEnv || Ee.isStandardBrowserWebWorkerEnv
                  ? a.setContentType(!1)
                  : a.setContentType('multipart/form-data;', !1));
              var s = new XMLHttpRequest();
              if (e.auth) {
                var u = e.auth.username || '',
                  c = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : '';
                a.set('Authorization', 'Basic ' + btoa(u + ':' + c));
              }
              var d = Ue(e.baseURL, e.url);
              function f() {
                if (s) {
                  var n = De.from('getAllResponseHeaders' in s && s.getAllResponseHeaders());
                  !(function (e, t, r) {
                    var n = r.config.validateStatus;
                    r.status && n && !n(r.status)
                      ? t(
                          new de(
                            'Request failed with status code ' + r.status,
                            [de.ERR_BAD_REQUEST, de.ERR_BAD_RESPONSE][
                              Math.floor(r.status / 100) - 4
                            ],
                            r.config,
                            r.request,
                            r,
                          ),
                        )
                      : e(r);
                  })(
                    function (e) {
                      t(e), l();
                    },
                    function (e) {
                      r(e), l();
                    },
                    {
                      data: i && 'text' !== i && 'json' !== i ? s.response : s.responseText,
                      status: s.status,
                      statusText: s.statusText,
                      headers: n,
                      config: e,
                      request: s,
                    },
                  ),
                    (s = null);
                }
              }
              if (
                (s.open(e.method.toUpperCase(), ke(d, e.params, e.paramsSerializer), !0),
                (s.timeout = e.timeout),
                'onloadend' in s
                  ? (s.onloadend = f)
                  : (s.onreadystatechange = function () {
                      s &&
                        4 === s.readyState &&
                        (0 !== s.status ||
                          (s.responseURL && 0 === s.responseURL.indexOf('file:'))) &&
                        setTimeout(f);
                    }),
                (s.onabort = function () {
                  s && (r(new de('Request aborted', de.ECONNABORTED, e, s)), (s = null));
                }),
                (s.onerror = function () {
                  r(new de('Network Error', de.ERR_NETWORK, e, s)), (s = null);
                }),
                (s.ontimeout = function () {
                  var t = e.timeout
                      ? 'timeout of ' + e.timeout + 'ms exceeded'
                      : 'timeout exceeded',
                    n = e.transitional || Se;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    r(new de(t, n.clarifyTimeoutError ? de.ETIMEDOUT : de.ECONNABORTED, e, s)),
                    (s = null);
                }),
                Ee.isStandardBrowserEnv)
              ) {
                var p =
                  (e.withCredentials || We(d)) && e.xsrfCookieName && Be.read(e.xsrfCookieName);
                p && a.set(e.xsrfHeaderName, p);
              }
              void 0 === o && a.setContentType(null),
                'setRequestHeader' in s &&
                  ne.forEach(a.toJSON(), function (e, t) {
                    s.setRequestHeader(t, e);
                  }),
                ne.isUndefined(e.withCredentials) || (s.withCredentials = !!e.withCredentials),
                i && 'json' !== i && (s.responseType = e.responseType),
                'function' === typeof e.onDownloadProgress &&
                  s.addEventListener('progress', Ve(e.onDownloadProgress, !0)),
                'function' === typeof e.onUploadProgress &&
                  s.upload &&
                  s.upload.addEventListener('progress', Ve(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((n = function (t) {
                    s && (r(!t || t.type ? new Fe(null, e, s) : t), s.abort(), (s = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(n),
                  e.signal && (e.signal.aborted ? n() : e.signal.addEventListener('abort', n)));
              var h = (function (e) {
                var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || '';
              })(d);
              h && -1 === Ee.protocols.indexOf(h)
                ? r(new de('Unsupported protocol ' + h + ':', de.ERR_BAD_REQUEST, e))
                : s.send(o || null);
            });
          },
      };
      ne.forEach($e, function (e, t) {
        if (e) {
          try {
            Object.defineProperty(e, 'name', { value: t });
          } catch (p) {}
          Object.defineProperty(e, 'adapterName', { value: t });
        }
      });
      var qe = function (e) {
        for (
          var t, r, n = (e = ne.isArray(e) ? e : [e]).length, o = 0;
          o < n && ((t = e[o]), !(r = ne.isString(t) ? $e[t.toLowerCase()] : t));
          o++
        );
        if (!r) {
          if (!1 === r)
            throw new de(
              'Adapter '.concat(t, ' is not supported by the environment'),
              'ERR_NOT_SUPPORT',
            );
          throw new Error(
            ne.hasOwnProp($e, t)
              ? "Adapter '".concat(t, "' is not available in the build")
              : "Unknown adapter '".concat(t, "'"),
          );
        }
        if (!ne.isFunction(r)) throw new TypeError('adapter is not a function');
        return r;
      };
      function Ge(e) {
        if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted))
          throw new Fe(null, e);
      }
      function Ke(e) {
        return (
          Ge(e),
          (e.headers = De.from(e.headers)),
          (e.data = ze.call(e, e.transformRequest)),
          -1 !== ['post', 'put', 'patch'].indexOf(e.method) &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
          qe(e.adapter || Re.adapter)(e).then(
            function (t) {
              return (
                Ge(e),
                (t.data = ze.call(e, e.transformResponse, t)),
                (t.headers = De.from(t.headers)),
                t
              );
            },
            function (t) {
              return (
                Me(t) ||
                  (Ge(e),
                  t &&
                    t.response &&
                    ((t.response.data = ze.call(e, e.transformResponse, t.response)),
                    (t.response.headers = De.from(t.response.headers)))),
                Promise.reject(t)
              );
            },
          )
        );
      }
      var Qe = function (e) {
        return e instanceof De ? e.toJSON() : e;
      };
      function Ye(e, t) {
        t = t || {};
        var r = {};
        function n(e, t, r) {
          return ne.isPlainObject(e) && ne.isPlainObject(t)
            ? ne.merge.call({ caseless: r }, e, t)
            : ne.isPlainObject(t)
            ? ne.merge({}, t)
            : ne.isArray(t)
            ? t.slice()
            : t;
        }
        function o(e, t, r) {
          return ne.isUndefined(t) ? (ne.isUndefined(e) ? void 0 : n(void 0, e, r)) : n(e, t, r);
        }
        function a(e, t) {
          if (!ne.isUndefined(t)) return n(void 0, t);
        }
        function i(e, t) {
          return ne.isUndefined(t) ? (ne.isUndefined(e) ? void 0 : n(void 0, e)) : n(void 0, t);
        }
        function l(r, o, a) {
          return a in t ? n(r, o) : a in e ? n(void 0, r) : void 0;
        }
        var s = {
          url: a,
          method: a,
          data: a,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: l,
          headers: function (e, t) {
            return o(Qe(e), Qe(t), !0);
          },
        };
        return (
          ne.forEach(Object.keys(Object.assign({}, e, t)), function (n) {
            var a = s[n] || o,
              i = a(e[n], t[n], n);
            (ne.isUndefined(i) && a !== l) || (r[n] = i);
          }),
          r
        );
      }
      var Xe = '1.5.0',
        Je = {};
      ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function (e, t) {
        Je[e] = function (r) {
          return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
      });
      var Ze = {};
      Je.transitional = function (e, t, r) {
        function n(e, t) {
          return "[Axios v1.5.0] Transitional option '" + e + "'" + t + (r ? '. ' + r : '');
        }
        return function (r, o, a) {
          if (!1 === e)
            throw new de(n(o, ' has been removed' + (t ? ' in ' + t : '')), de.ERR_DEPRECATED);
          return (
            t &&
              !Ze[o] &&
              ((Ze[o] = !0),
              console.warn(
                n(
                  o,
                  ' has been deprecated since v' + t + ' and will be removed in the near future',
                ),
              )),
            !e || e(r, o, a)
          );
        };
      };
      var et = {
          assertOptions: function (e, t, r) {
            if ('object' !== typeof e)
              throw new de('options must be an object', de.ERR_BAD_OPTION_VALUE);
            for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
              var a = n[o],
                i = t[a];
              if (i) {
                var l = e[a],
                  s = void 0 === l || i(l, a, e);
                if (!0 !== s)
                  throw new de('option ' + a + ' must be ' + s, de.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== r) throw new de('Unknown option ' + a, de.ERR_BAD_OPTION);
            }
          },
          validators: Je,
        },
        tt = et.validators,
        rt = (function () {
          function e(t) {
            oe(this, e),
              (this.defaults = t),
              (this.interceptors = { request: new Ne(), response: new Ne() });
          }
          return (
            le(e, [
              {
                key: 'request',
                value: function (e, t) {
                  'string' === typeof e ? ((t = t || {}).url = e) : (t = e || {});
                  var r = (t = Ye(this.defaults, t)),
                    n = r.transitional,
                    o = r.paramsSerializer,
                    a = r.headers;
                  void 0 !== n &&
                    et.assertOptions(
                      n,
                      {
                        silentJSONParsing: tt.transitional(tt.boolean),
                        forcedJSONParsing: tt.transitional(tt.boolean),
                        clarifyTimeoutError: tt.transitional(tt.boolean),
                      },
                      !1,
                    ),
                    null != o &&
                      (ne.isFunction(o)
                        ? (t.paramsSerializer = { serialize: o })
                        : et.assertOptions(o, { encode: tt.function, serialize: tt.function }, !0)),
                    (t.method = (t.method || this.defaults.method || 'get').toLowerCase());
                  var i = a && ne.merge(a.common, a[t.method]);
                  a &&
                    ne.forEach(
                      ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                      function (e) {
                        delete a[e];
                      },
                    ),
                    (t.headers = De.concat(i, a));
                  var l = [],
                    s = !0;
                  this.interceptors.request.forEach(function (e) {
                    ('function' === typeof e.runWhen && !1 === e.runWhen(t)) ||
                      ((s = s && e.synchronous), l.unshift(e.fulfilled, e.rejected));
                  });
                  var u,
                    c = [];
                  this.interceptors.response.forEach(function (e) {
                    c.push(e.fulfilled, e.rejected);
                  });
                  var d,
                    f = 0;
                  if (!s) {
                    var p = [Ke.bind(this), void 0];
                    for (
                      p.unshift.apply(p, l),
                        p.push.apply(p, c),
                        d = p.length,
                        u = Promise.resolve(t);
                      f < d;

                    )
                      u = u.then(p[f++], p[f++]);
                    return u;
                  }
                  d = l.length;
                  var h = t;
                  for (f = 0; f < d; ) {
                    var g = l[f++],
                      m = l[f++];
                    try {
                      h = g(h);
                    } catch (v) {
                      m.call(this, v);
                      break;
                    }
                  }
                  try {
                    u = Ke.call(this, h);
                  } catch (v) {
                    return Promise.reject(v);
                  }
                  for (f = 0, d = c.length; f < d; ) u = u.then(c[f++], c[f++]);
                  return u;
                },
              },
              {
                key: 'getUri',
                value: function (e) {
                  return ke(
                    Ue((e = Ye(this.defaults, e)).baseURL, e.url),
                    e.params,
                    e.paramsSerializer,
                  );
                },
              },
            ]),
            e
          );
        })();
      ne.forEach(['delete', 'get', 'head', 'options'], function (e) {
        rt.prototype[e] = function (t, r) {
          return this.request(Ye(r || {}, { method: e, url: t, data: (r || {}).data }));
        };
      }),
        ne.forEach(['post', 'put', 'patch'], function (e) {
          function t(t) {
            return function (r, n, o) {
              return this.request(
                Ye(o || {}, {
                  method: e,
                  headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                  url: r,
                  data: n,
                }),
              );
            };
          }
          (rt.prototype[e] = t()), (rt.prototype[e + 'Form'] = t(!0));
        });
      var nt = rt,
        ot = (function () {
          function e(t) {
            if ((oe(this, e), 'function' !== typeof t))
              throw new TypeError('executor must be a function.');
            var r;
            this.promise = new Promise(function (e) {
              r = e;
            });
            var n = this;
            this.promise.then(function (e) {
              if (n._listeners) {
                for (var t = n._listeners.length; t-- > 0; ) n._listeners[t](e);
                n._listeners = null;
              }
            }),
              (this.promise.then = function (e) {
                var t,
                  r = new Promise(function (e) {
                    n.subscribe(e), (t = e);
                  }).then(e);
                return (
                  (r.cancel = function () {
                    n.unsubscribe(t);
                  }),
                  r
                );
              }),
              t(function (e, t, o) {
                n.reason || ((n.reason = new Fe(e, t, o)), r(n.reason));
              });
          }
          return (
            le(
              e,
              [
                {
                  key: 'throwIfRequested',
                  value: function () {
                    if (this.reason) throw this.reason;
                  },
                },
                {
                  key: 'subscribe',
                  value: function (e) {
                    this.reason
                      ? e(this.reason)
                      : this._listeners
                      ? this._listeners.push(e)
                      : (this._listeners = [e]);
                  },
                },
                {
                  key: 'unsubscribe',
                  value: function (e) {
                    if (this._listeners) {
                      var t = this._listeners.indexOf(e);
                      -1 !== t && this._listeners.splice(t, 1);
                    }
                  },
                },
              ],
              [
                {
                  key: 'source',
                  value: function () {
                    var t,
                      r = new e(function (e) {
                        t = e;
                      });
                    return { token: r, cancel: t };
                  },
                },
              ],
            ),
            e
          );
        })(),
        at = ot;
      var it = {
        Continue: 100,
        SwitchingProtocols: 101,
        Processing: 102,
        EarlyHints: 103,
        Ok: 200,
        Created: 201,
        Accepted: 202,
        NonAuthoritativeInformation: 203,
        NoContent: 204,
        ResetContent: 205,
        PartialContent: 206,
        MultiStatus: 207,
        AlreadyReported: 208,
        ImUsed: 226,
        MultipleChoices: 300,
        MovedPermanently: 301,
        Found: 302,
        SeeOther: 303,
        NotModified: 304,
        UseProxy: 305,
        Unused: 306,
        TemporaryRedirect: 307,
        PermanentRedirect: 308,
        BadRequest: 400,
        Unauthorized: 401,
        PaymentRequired: 402,
        Forbidden: 403,
        NotFound: 404,
        MethodNotAllowed: 405,
        NotAcceptable: 406,
        ProxyAuthenticationRequired: 407,
        RequestTimeout: 408,
        Conflict: 409,
        Gone: 410,
        LengthRequired: 411,
        PreconditionFailed: 412,
        PayloadTooLarge: 413,
        UriTooLong: 414,
        UnsupportedMediaType: 415,
        RangeNotSatisfiable: 416,
        ExpectationFailed: 417,
        ImATeapot: 418,
        MisdirectedRequest: 421,
        UnprocessableEntity: 422,
        Locked: 423,
        FailedDependency: 424,
        TooEarly: 425,
        UpgradeRequired: 426,
        PreconditionRequired: 428,
        TooManyRequests: 429,
        RequestHeaderFieldsTooLarge: 431,
        UnavailableForLegalReasons: 451,
        InternalServerError: 500,
        NotImplemented: 501,
        BadGateway: 502,
        ServiceUnavailable: 503,
        GatewayTimeout: 504,
        HttpVersionNotSupported: 505,
        VariantAlsoNegotiates: 506,
        InsufficientStorage: 507,
        LoopDetected: 508,
        NotExtended: 510,
        NetworkAuthenticationRequired: 511,
      };
      Object.entries(it).forEach(function (e) {
        var t = f(e, 2),
          r = t[0],
          n = t[1];
        it[n] = r;
      });
      var lt = it;
      var st = (function e(t) {
        var r = new nt(t),
          n = N(nt.prototype.request, r);
        return (
          ne.extend(n, nt.prototype, r, { allOwnKeys: !0 }),
          ne.extend(n, r, null, { allOwnKeys: !0 }),
          (n.create = function (r) {
            return e(Ye(t, r));
          }),
          n
        );
      })(Re);
      (st.Axios = nt),
        (st.CanceledError = Fe),
        (st.CancelToken = at),
        (st.isCancel = Me),
        (st.VERSION = Xe),
        (st.toFormData = me),
        (st.AxiosError = de),
        (st.Cancel = st.CanceledError),
        (st.all = function (e) {
          return Promise.all(e);
        }),
        (st.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (st.isAxiosError = function (e) {
          return ne.isObject(e) && !0 === e.isAxiosError;
        }),
        (st.mergeConfig = Ye),
        (st.AxiosHeaders = De),
        (st.formToJSON = function (e) {
          return Ce(ne.isHTMLForm(e) ? new FormData(e) : e);
        }),
        (st.getAdapter = qe),
        (st.HttpStatusCode = lt),
        (st.default = st);
      var ut = st,
        ct = ut.create({ baseURL: 'http://localhost:4444/' });
      function dt(e, t, r) {
        return (
          (t = ae(t)) in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function ft(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function pt(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ft(Object(r), !0).forEach(function (t) {
                dt(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ft(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function ht(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
        }
        return o;
      }
      ct.interceptors.request.use(function (e) {
        var t = localStorage.getItem('token');
        return (e.headers.Authorization = 'Bearer '.concat(t)), e;
      });
      var gt = r(184),
        mt = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
        vt = e.createContext && e.createContext(mt),
        bt = function () {
          return (
            (bt =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            bt.apply(this, arguments)
          );
        },
        yt = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          }
          return r;
        };
      function xt(t) {
        return (
          t &&
          t.map(function (t, r) {
            return e.createElement(t.tag, bt({ key: r }, t.attr), xt(t.child));
          })
        );
      }
      function wt(t) {
        return function (r) {
          return e.createElement(kt, bt({ attr: bt({}, t.attr) }, r), xt(t.child));
        };
      }
      function kt(t) {
        var r = function (r) {
          var n,
            o = t.attr,
            a = t.size,
            i = t.title,
            l = yt(t, ['attr', 'size', 'title']),
            s = a || r.size || '1em';
          return (
            r.className && (n = r.className),
            t.className && (n = (n ? n + ' ' : '') + t.className),
            e.createElement(
              'svg',
              bt({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, r.attr, o, l, {
                className: n,
                style: bt(bt({ color: t.color || r.color }, r.style), t.style),
                height: s,
                width: s,
                xmlns: 'http://www.w3.org/2000/svg',
              }),
              i && e.createElement('title', null, i),
              t.children,
            )
          );
        };
        return void 0 !== vt
          ? e.createElement(vt.Consumer, null, function (e) {
              return r(e);
            })
          : r(mt);
      }
      function Nt(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function St(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function Et(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function Ct(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function jt(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function Rt(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function Tt(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z',
              },
            },
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function Pt(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z',
              },
            },
          ],
        })(e);
      }
      function Ot(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 20 20', fill: 'currentColor', 'aria-hidden': 'true' },
          child: [
            {
              tag: 'path',
              attr: {
                fillRule: 'evenodd',
                d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z',
                clipRule: 'evenodd',
              },
            },
          ],
        })(e);
      }
      function Lt(e) {
        return wt({
          tag: 'svg',
          attr: {
            fill: 'none',
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            stroke: 'currentColor',
            'aria-hidden': 'true',
          },
          child: [
            {
              tag: 'path',
              attr: { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19 9l-7 7-7-7' },
            },
          ],
        })(e);
      }
      function _t(e) {
        return wt({
          tag: 'svg',
          attr: {
            fill: 'none',
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            stroke: 'currentColor',
            'aria-hidden': 'true',
          },
          child: [
            {
              tag: 'path',
              attr: { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M15 19l-7-7 7-7' },
            },
          ],
        })(e);
      }
      function It(e) {
        return wt({
          tag: 'svg',
          attr: {
            fill: 'none',
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            stroke: 'currentColor',
            'aria-hidden': 'true',
          },
          child: [
            {
              tag: 'path',
              attr: { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M9 5l7 7-7 7' },
            },
          ],
        })(e);
      }
      function Dt(e) {
        return wt({
          tag: 'svg',
          attr: {
            fill: 'none',
            viewBox: '0 0 24 24',
            strokeWidth: '2',
            stroke: 'currentColor',
            'aria-hidden': 'true',
          },
          child: [
            {
              tag: 'path',
              attr: { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M6 18L18 6M6 6l12 12' },
            },
          ],
        })(e);
      }
      var zt = '-';
      function Mt(e) {
        var t = (function (e) {
            var t = e.theme,
              r = e.prefix,
              n = { nextPart: new Map(), validators: [] },
              o = (function (e, t) {
                if (!t) return e;
                return e.map(function (e) {
                  return [
                    e[0],
                    e[1].map(function (e) {
                      return 'string' === typeof e
                        ? t + e
                        : 'object' === typeof e
                        ? Object.fromEntries(
                            Object.entries(e).map(function (e) {
                              var r = e[0],
                                n = e[1];
                              return [t + r, n];
                            }),
                          )
                        : e;
                    }),
                  ];
                });
              })(Object.entries(e.classGroups), r);
            return (
              o.forEach(function (e) {
                var r = e[0];
                Bt(e[1], n, r, t);
              }),
              n
            );
          })(e),
          r = e.conflictingClassGroups,
          n = e.conflictingClassGroupModifiers,
          o = void 0 === n ? {} : n;
        return {
          getClassGroupId: function (e) {
            var r = e.split(zt);
            return (
              '' === r[0] && 1 !== r.length && r.shift(),
              At(r, t) ||
                (function (e) {
                  if (Ft.test(e)) {
                    var t = Ft.exec(e)[1],
                      r = null === t || void 0 === t ? void 0 : t.substring(0, t.indexOf(':'));
                    if (r) return 'arbitrary..' + r;
                  }
                })(e)
            );
          },
          getConflictingClassGroupIds: function (e, t) {
            var n = r[e] || [];
            return t && o[e] ? [].concat(n, o[e]) : n;
          },
        };
      }
      function At(e, t) {
        var r;
        if (0 === e.length) return t.classGroupId;
        var n = e[0],
          o = t.nextPart.get(n),
          a = o ? At(e.slice(1), o) : void 0;
        if (a) return a;
        if (0 !== t.validators.length) {
          var i = e.join(zt);
          return null ===
            (r = t.validators.find(function (e) {
              return (0, e.validator)(i);
            })) || void 0 === r
            ? void 0
            : r.classGroupId;
        }
      }
      var Ft = /^\[(.+)\]$/;
      function Bt(e, t, r, n) {
        e.forEach(function (e) {
          if ('string' !== typeof e) {
            if ('function' === typeof e)
              return e.isThemeGetter
                ? void Bt(e(n), t, r, n)
                : void t.validators.push({ validator: e, classGroupId: r });
            Object.entries(e).forEach(function (e) {
              var o = e[0];
              Bt(e[1], Ut(t, o), r, n);
            });
          } else {
            ('' === e ? t : Ut(t, e)).classGroupId = r;
          }
        });
      }
      function Ut(e, t) {
        var r = e;
        return (
          t.split(zt).forEach(function (e) {
            r.nextPart.has(e) || r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e));
          }),
          r
        );
      }
      function Wt(e) {
        if (e < 1) return { get: function () {}, set: function () {} };
        var t = 0,
          r = new Map(),
          n = new Map();
        function o(o, a) {
          r.set(o, a), ++t > e && ((t = 0), (n = r), (r = new Map()));
        }
        return {
          get: function (e) {
            var t = r.get(e);
            return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0;
          },
          set: function (e, t) {
            r.has(e) ? r.set(e, t) : o(e, t);
          },
        };
      }
      var Ht = '!';
      function Vt(e) {
        var t = e.separator || ':',
          r = 1 === t.length,
          n = t[0],
          o = t.length;
        return function (e) {
          for (var a, i = [], l = 0, s = 0, u = 0; u < e.length; u++) {
            var c = e[u];
            if (0 === l) {
              if (c === n && (r || e.slice(u, u + o) === t)) {
                i.push(e.slice(s, u)), (s = u + o);
                continue;
              }
              if ('/' === c) {
                a = u;
                continue;
              }
            }
            '[' === c ? l++ : ']' === c && l--;
          }
          var d = 0 === i.length ? e : e.substring(s),
            f = d.startsWith(Ht);
          return {
            modifiers: i,
            hasImportantModifier: f,
            baseClassName: f ? d.substring(1) : d,
            maybePostfixModifierPosition: a && a > s ? a - s : void 0,
          };
        };
      }
      var $t = /\s+/;
      function qt() {
        for (var e, t, r = 0, n = ''; r < arguments.length; )
          (e = arguments[r++]) && (t = Gt(e)) && (n && (n += ' '), (n += t));
        return n;
      }
      function Gt(e) {
        if ('string' === typeof e) return e;
        for (var t, r = '', n = 0; n < e.length; n++)
          e[n] && (t = Gt(e[n])) && (r && (r += ' '), (r += t));
        return r;
      }
      function Kt() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        var n,
          o,
          a,
          i = function (e) {
            var r = t[0],
              s = t.slice(1).reduce(function (e, t) {
                return t(e);
              }, r());
            return (
              (n = (function (e) {
                return pt({ cache: Wt(e.cacheSize), splitModifiers: Vt(e) }, Mt(e));
              })(s)),
              (o = n.cache.get),
              (a = n.cache.set),
              (i = l),
              l(e)
            );
          };
        function l(e) {
          var t = o(e);
          if (t) return t;
          var r = (function (e, t) {
            var r = t.splitModifiers,
              n = t.getClassGroupId,
              o = t.getConflictingClassGroupIds,
              a = new Set();
            return e
              .trim()
              .split($t)
              .map(function (e) {
                var t = r(e),
                  o = t.modifiers,
                  a = t.hasImportantModifier,
                  i = t.baseClassName,
                  l = t.maybePostfixModifierPosition,
                  s = n(l ? i.substring(0, l) : i),
                  u = Boolean(l);
                if (!s) {
                  if (!l) return { isTailwindClass: !1, originalClassName: e };
                  if (!(s = n(i))) return { isTailwindClass: !1, originalClassName: e };
                  u = !1;
                }
                var c = (function (e) {
                  if (e.length <= 1) return e;
                  var t = [],
                    r = [];
                  return (
                    e.forEach(function (e) {
                      '[' === e[0] ? (t.push.apply(t, r.sort().concat([e])), (r = [])) : r.push(e);
                    }),
                    t.push.apply(t, r.sort()),
                    t
                  );
                })(o).join(':');
                return {
                  isTailwindClass: !0,
                  modifierId: a ? c + Ht : c,
                  classGroupId: s,
                  originalClassName: e,
                  hasPostfixModifier: u,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var t = e.modifierId,
                  r = e.classGroupId,
                  n = e.hasPostfixModifier,
                  i = t + r;
                return (
                  !a.has(i) &&
                  (a.add(i),
                  o(r, n).forEach(function (e) {
                    return a.add(t + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(' ');
          })(e, n);
          return a(e, r), r;
        }
        return function () {
          return i(qt.apply(null, arguments));
        };
      }
      function Qt(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return (t.isThemeGetter = !0), t;
      }
      var Yt = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        Xt = /^\d+\/\d+$/,
        Jt = new Set(['px', 'full', 'screen']),
        Zt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        er =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        tr = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function rr(e) {
        return sr(e) || Jt.has(e) || Xt.test(e) || nr(e);
      }
      function nr(e) {
        return gr(e, 'length', mr);
      }
      function or(e) {
        return gr(e, 'size', vr);
      }
      function ar(e) {
        return gr(e, 'position', vr);
      }
      function ir(e) {
        return gr(e, 'url', br);
      }
      function lr(e) {
        return gr(e, 'number', sr);
      }
      function sr(e) {
        return !Number.isNaN(Number(e));
      }
      function ur(e) {
        return e.endsWith('%') && sr(e.slice(0, -1));
      }
      function cr(e) {
        return yr(e) || gr(e, 'number', yr);
      }
      function dr(e) {
        return Yt.test(e);
      }
      function fr() {
        return !0;
      }
      function pr(e) {
        return Zt.test(e);
      }
      function hr(e) {
        return gr(e, '', xr);
      }
      function gr(e, t, r) {
        var n = Yt.exec(e);
        return !!n && (n[1] ? n[1] === t : r(n[2]));
      }
      function mr(e) {
        return er.test(e);
      }
      function vr() {
        return !1;
      }
      function br(e) {
        return e.startsWith('url(');
      }
      function yr(e) {
        return Number.isInteger(Number(e));
      }
      function xr(e) {
        return tr.test(e);
      }
      function wr() {
        var e = Qt('colors'),
          t = Qt('spacing'),
          r = Qt('blur'),
          n = Qt('brightness'),
          o = Qt('borderColor'),
          a = Qt('borderRadius'),
          i = Qt('borderSpacing'),
          l = Qt('borderWidth'),
          s = Qt('contrast'),
          u = Qt('grayscale'),
          c = Qt('hueRotate'),
          d = Qt('invert'),
          f = Qt('gap'),
          p = Qt('gradientColorStops'),
          h = Qt('gradientColorStopPositions'),
          g = Qt('inset'),
          m = Qt('margin'),
          v = Qt('opacity'),
          b = Qt('padding'),
          y = Qt('saturate'),
          x = Qt('scale'),
          w = Qt('sepia'),
          k = Qt('skew'),
          N = Qt('space'),
          S = Qt('translate'),
          E = function () {
            return ['auto', dr, t];
          },
          C = function () {
            return [dr, t];
          },
          j = function () {
            return ['', rr];
          },
          R = function () {
            return ['auto', sr, dr];
          },
          T = function () {
            return ['', '0', dr];
          },
          P = function () {
            return [sr, lr];
          },
          O = function () {
            return [sr, dr];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [fr],
            spacing: [rr],
            blur: ['none', '', pr, dr],
            brightness: P(),
            borderColor: [e],
            borderRadius: ['none', '', 'full', pr, dr],
            borderSpacing: C(),
            borderWidth: j(),
            contrast: P(),
            grayscale: T(),
            hueRotate: O(),
            invert: T(),
            gap: C(),
            gradientColorStops: [e],
            gradientColorStopPositions: [ur, nr],
            inset: E(),
            margin: E(),
            opacity: P(),
            padding: C(),
            saturate: P(),
            scale: P(),
            sepia: T(),
            skew: O(),
            space: C(),
            translate: C(),
          },
          classGroups: {
            aspect: [{ aspect: ['auto', 'square', 'video', dr] }],
            container: ['container'],
            columns: [{ columns: [pr] }],
            'break-after': [
              {
                'break-after': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-before': [
              {
                'break-before': [
                  'auto',
                  'avoid',
                  'all',
                  'avoid-page',
                  'page',
                  'left',
                  'right',
                  'column',
                ],
              },
            ],
            'break-inside': [{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }],
            'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
            box: [{ box: ['border', 'content'] }],
            display: [
              'block',
              'inline-block',
              'inline',
              'flex',
              'inline-flex',
              'table',
              'inline-table',
              'table-caption',
              'table-cell',
              'table-column',
              'table-column-group',
              'table-footer-group',
              'table-header-group',
              'table-row-group',
              'table-row',
              'flow-root',
              'grid',
              'inline-grid',
              'contents',
              'list-item',
              'hidden',
            ],
            float: [{ float: ['right', 'left', 'none'] }],
            clear: [{ clear: ['left', 'right', 'both', 'none'] }],
            isolation: ['isolate', 'isolation-auto'],
            'object-fit': [{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }],
            'object-position': [
              {
                object: [].concat(
                  [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                  ],
                  [dr],
                ),
              },
            ],
            overflow: [{ overflow: ['auto', 'hidden', 'clip', 'visible', 'scroll'] }],
            'overflow-x': [{ 'overflow-x': ['auto', 'hidden', 'clip', 'visible', 'scroll'] }],
            'overflow-y': [{ 'overflow-y': ['auto', 'hidden', 'clip', 'visible', 'scroll'] }],
            overscroll: [{ overscroll: ['auto', 'contain', 'none'] }],
            'overscroll-x': [{ 'overscroll-x': ['auto', 'contain', 'none'] }],
            'overscroll-y': [{ 'overscroll-y': ['auto', 'contain', 'none'] }],
            position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
            inset: [{ inset: [g] }],
            'inset-x': [{ 'inset-x': [g] }],
            'inset-y': [{ 'inset-y': [g] }],
            start: [{ start: [g] }],
            end: [{ end: [g] }],
            top: [{ top: [g] }],
            right: [{ right: [g] }],
            bottom: [{ bottom: [g] }],
            left: [{ left: [g] }],
            visibility: ['visible', 'invisible', 'collapse'],
            z: [{ z: ['auto', cr] }],
            basis: [{ basis: E() }],
            'flex-direction': [{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }],
            'flex-wrap': [{ flex: ['wrap', 'wrap-reverse', 'nowrap'] }],
            flex: [{ flex: ['1', 'auto', 'initial', 'none', dr] }],
            grow: [{ grow: T() }],
            shrink: [{ shrink: T() }],
            order: [{ order: ['first', 'last', 'none', cr] }],
            'grid-cols': [{ 'grid-cols': [fr] }],
            'col-start-end': [{ col: ['auto', { span: ['full', cr] }, dr] }],
            'col-start': [{ 'col-start': R() }],
            'col-end': [{ 'col-end': R() }],
            'grid-rows': [{ 'grid-rows': [fr] }],
            'row-start-end': [{ row: ['auto', { span: [cr] }, dr] }],
            'row-start': [{ 'row-start': R() }],
            'row-end': [{ 'row-end': R() }],
            'grid-flow': [{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }],
            'auto-cols': [{ 'auto-cols': ['auto', 'min', 'max', 'fr', dr] }],
            'auto-rows': [{ 'auto-rows': ['auto', 'min', 'max', 'fr', dr] }],
            gap: [{ gap: [f] }],
            'gap-x': [{ 'gap-x': [f] }],
            'gap-y': [{ 'gap-y': [f] }],
            'justify-content': [
              {
                justify: ['normal'].concat([
                  'start',
                  'end',
                  'center',
                  'between',
                  'around',
                  'evenly',
                  'stretch',
                ]),
              },
            ],
            'justify-items': [{ 'justify-items': ['start', 'end', 'center', 'stretch'] }],
            'justify-self': [{ 'justify-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
            'align-content': [
              {
                content: ['normal'].concat(
                  ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
                  ['baseline'],
                ),
              },
            ],
            'align-items': [{ items: ['start', 'end', 'center', 'baseline', 'stretch'] }],
            'align-self': [{ self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline'] }],
            'place-content': [
              {
                'place-content': [].concat(
                  ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'],
                  ['baseline'],
                ),
              },
            ],
            'place-items': [{ 'place-items': ['start', 'end', 'center', 'baseline', 'stretch'] }],
            'place-self': [{ 'place-self': ['auto', 'start', 'end', 'center', 'stretch'] }],
            p: [{ p: [b] }],
            px: [{ px: [b] }],
            py: [{ py: [b] }],
            ps: [{ ps: [b] }],
            pe: [{ pe: [b] }],
            pt: [{ pt: [b] }],
            pr: [{ pr: [b] }],
            pb: [{ pb: [b] }],
            pl: [{ pl: [b] }],
            m: [{ m: [m] }],
            mx: [{ mx: [m] }],
            my: [{ my: [m] }],
            ms: [{ ms: [m] }],
            me: [{ me: [m] }],
            mt: [{ mt: [m] }],
            mr: [{ mr: [m] }],
            mb: [{ mb: [m] }],
            ml: [{ ml: [m] }],
            'space-x': [{ 'space-x': [N] }],
            'space-x-reverse': ['space-x-reverse'],
            'space-y': [{ 'space-y': [N] }],
            'space-y-reverse': ['space-y-reverse'],
            w: [{ w: ['auto', 'min', 'max', 'fit', dr, t] }],
            'min-w': [{ 'min-w': ['min', 'max', 'fit', dr, rr] }],
            'max-w': [
              {
                'max-w': [
                  '0',
                  'none',
                  'full',
                  'min',
                  'max',
                  'fit',
                  'prose',
                  { screen: [pr] },
                  pr,
                  dr,
                ],
              },
            ],
            h: [{ h: [dr, t, 'auto', 'min', 'max', 'fit'] }],
            'min-h': [{ 'min-h': ['min', 'max', 'fit', dr, rr] }],
            'max-h': [{ 'max-h': [dr, t, 'min', 'max', 'fit'] }],
            'font-size': [{ text: ['base', pr, nr] }],
            'font-smoothing': ['antialiased', 'subpixel-antialiased'],
            'font-style': ['italic', 'not-italic'],
            'font-weight': [
              {
                font: [
                  'thin',
                  'extralight',
                  'light',
                  'normal',
                  'medium',
                  'semibold',
                  'bold',
                  'extrabold',
                  'black',
                  lr,
                ],
              },
            ],
            'font-family': [{ font: [fr] }],
            'fvn-normal': ['normal-nums'],
            'fvn-ordinal': ['ordinal'],
            'fvn-slashed-zero': ['slashed-zero'],
            'fvn-figure': ['lining-nums', 'oldstyle-nums'],
            'fvn-spacing': ['proportional-nums', 'tabular-nums'],
            'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
            tracking: [{ tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', dr] }],
            'line-clamp': [{ 'line-clamp': ['none', sr, lr] }],
            leading: [{ leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', dr, rr] }],
            'list-image': [{ 'list-image': ['none', dr] }],
            'list-style-type': [{ list: ['none', 'disc', 'decimal', dr] }],
            'list-style-position': [{ list: ['inside', 'outside'] }],
            'placeholder-color': [{ placeholder: [e] }],
            'placeholder-opacity': [{ 'placeholder-opacity': [v] }],
            'text-alignment': [{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }],
            'text-color': [{ text: [e] }],
            'text-opacity': [{ 'text-opacity': [v] }],
            'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
            'text-decoration-style': [
              { decoration: [].concat(['solid', 'dashed', 'dotted', 'double', 'none'], ['wavy']) },
            ],
            'text-decoration-thickness': [{ decoration: ['auto', 'from-font', rr] }],
            'underline-offset': [{ 'underline-offset': ['auto', dr, rr] }],
            'text-decoration-color': [{ decoration: [e] }],
            'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
            'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
            indent: [{ indent: C() }],
            'vertical-align': [
              {
                align: [
                  'baseline',
                  'top',
                  'middle',
                  'bottom',
                  'text-top',
                  'text-bottom',
                  'sub',
                  'super',
                  dr,
                ],
              },
            ],
            whitespace: [
              { whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces'] },
            ],
            break: [{ break: ['normal', 'words', 'all', 'keep'] }],
            hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
            content: [{ content: ['none', dr] }],
            'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
            'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
            'bg-opacity': [{ 'bg-opacity': [v] }],
            'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
            'bg-position': [
              {
                bg: [].concat(
                  [
                    'bottom',
                    'center',
                    'left',
                    'left-bottom',
                    'left-top',
                    'right',
                    'right-bottom',
                    'right-top',
                    'top',
                  ],
                  [ar],
                ),
              },
            ],
            'bg-repeat': [{ bg: ['no-repeat', { repeat: ['', 'x', 'y', 'round', 'space'] }] }],
            'bg-size': [{ bg: ['auto', 'cover', 'contain', or] }],
            'bg-image': [
              { bg: ['none', { 'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] }, ir] },
            ],
            'bg-color': [{ bg: [e] }],
            'gradient-from-pos': [{ from: [h] }],
            'gradient-via-pos': [{ via: [h] }],
            'gradient-to-pos': [{ to: [h] }],
            'gradient-from': [{ from: [p] }],
            'gradient-via': [{ via: [p] }],
            'gradient-to': [{ to: [p] }],
            rounded: [{ rounded: [a] }],
            'rounded-s': [{ 'rounded-s': [a] }],
            'rounded-e': [{ 'rounded-e': [a] }],
            'rounded-t': [{ 'rounded-t': [a] }],
            'rounded-r': [{ 'rounded-r': [a] }],
            'rounded-b': [{ 'rounded-b': [a] }],
            'rounded-l': [{ 'rounded-l': [a] }],
            'rounded-ss': [{ 'rounded-ss': [a] }],
            'rounded-se': [{ 'rounded-se': [a] }],
            'rounded-ee': [{ 'rounded-ee': [a] }],
            'rounded-es': [{ 'rounded-es': [a] }],
            'rounded-tl': [{ 'rounded-tl': [a] }],
            'rounded-tr': [{ 'rounded-tr': [a] }],
            'rounded-br': [{ 'rounded-br': [a] }],
            'rounded-bl': [{ 'rounded-bl': [a] }],
            'border-w': [{ border: [l] }],
            'border-w-x': [{ 'border-x': [l] }],
            'border-w-y': [{ 'border-y': [l] }],
            'border-w-s': [{ 'border-s': [l] }],
            'border-w-e': [{ 'border-e': [l] }],
            'border-w-t': [{ 'border-t': [l] }],
            'border-w-r': [{ 'border-r': [l] }],
            'border-w-b': [{ 'border-b': [l] }],
            'border-w-l': [{ 'border-l': [l] }],
            'border-opacity': [{ 'border-opacity': [v] }],
            'border-style': [
              { border: [].concat(['solid', 'dashed', 'dotted', 'double', 'none'], ['hidden']) },
            ],
            'divide-x': [{ 'divide-x': [l] }],
            'divide-x-reverse': ['divide-x-reverse'],
            'divide-y': [{ 'divide-y': [l] }],
            'divide-y-reverse': ['divide-y-reverse'],
            'divide-opacity': [{ 'divide-opacity': [v] }],
            'divide-style': [{ divide: ['solid', 'dashed', 'dotted', 'double', 'none'] }],
            'border-color': [{ border: [o] }],
            'border-color-x': [{ 'border-x': [o] }],
            'border-color-y': [{ 'border-y': [o] }],
            'border-color-t': [{ 'border-t': [o] }],
            'border-color-r': [{ 'border-r': [o] }],
            'border-color-b': [{ 'border-b': [o] }],
            'border-color-l': [{ 'border-l': [o] }],
            'divide-color': [{ divide: [o] }],
            'outline-style': [
              { outline: [''].concat(['solid', 'dashed', 'dotted', 'double', 'none']) },
            ],
            'outline-offset': [{ 'outline-offset': [dr, rr] }],
            'outline-w': [{ outline: [rr] }],
            'outline-color': [{ outline: [e] }],
            'ring-w': [{ ring: j() }],
            'ring-w-inset': ['ring-inset'],
            'ring-color': [{ ring: [e] }],
            'ring-opacity': [{ 'ring-opacity': [v] }],
            'ring-offset-w': [{ 'ring-offset': [rr] }],
            'ring-offset-color': [{ 'ring-offset': [e] }],
            shadow: [{ shadow: ['', 'inner', 'none', pr, hr] }],
            'shadow-color': [{ shadow: [fr] }],
            opacity: [{ opacity: [v] }],
            'mix-blend': [
              {
                'mix-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                  'plus-lighter',
                ],
              },
            ],
            'bg-blend': [
              {
                'bg-blend': [
                  'normal',
                  'multiply',
                  'screen',
                  'overlay',
                  'darken',
                  'lighten',
                  'color-dodge',
                  'color-burn',
                  'hard-light',
                  'soft-light',
                  'difference',
                  'exclusion',
                  'hue',
                  'saturation',
                  'color',
                  'luminosity',
                  'plus-lighter',
                ],
              },
            ],
            filter: [{ filter: ['', 'none'] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [s] }],
            'drop-shadow': [{ 'drop-shadow': ['', 'none', pr, dr] }],
            grayscale: [{ grayscale: [u] }],
            'hue-rotate': [{ 'hue-rotate': [c] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [y] }],
            sepia: [{ sepia: [w] }],
            'backdrop-filter': [{ 'backdrop-filter': ['', 'none'] }],
            'backdrop-blur': [{ 'backdrop-blur': [r] }],
            'backdrop-brightness': [{ 'backdrop-brightness': [n] }],
            'backdrop-contrast': [{ 'backdrop-contrast': [s] }],
            'backdrop-grayscale': [{ 'backdrop-grayscale': [u] }],
            'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [c] }],
            'backdrop-invert': [{ 'backdrop-invert': [d] }],
            'backdrop-opacity': [{ 'backdrop-opacity': [v] }],
            'backdrop-saturate': [{ 'backdrop-saturate': [y] }],
            'backdrop-sepia': [{ 'backdrop-sepia': [w] }],
            'border-collapse': [{ border: ['collapse', 'separate'] }],
            'border-spacing': [{ 'border-spacing': [i] }],
            'border-spacing-x': [{ 'border-spacing-x': [i] }],
            'border-spacing-y': [{ 'border-spacing-y': [i] }],
            'table-layout': [{ table: ['auto', 'fixed'] }],
            caption: [{ caption: ['top', 'bottom'] }],
            transition: [
              { transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', dr] },
            ],
            duration: [{ duration: O() }],
            ease: [{ ease: ['linear', 'in', 'out', 'in-out', dr] }],
            delay: [{ delay: O() }],
            animate: [{ animate: ['none', 'spin', 'ping', 'pulse', 'bounce', dr] }],
            transform: [{ transform: ['', 'gpu', 'none'] }],
            scale: [{ scale: [x] }],
            'scale-x': [{ 'scale-x': [x] }],
            'scale-y': [{ 'scale-y': [x] }],
            rotate: [{ rotate: [cr, dr] }],
            'translate-x': [{ 'translate-x': [S] }],
            'translate-y': [{ 'translate-y': [S] }],
            'skew-x': [{ 'skew-x': [k] }],
            'skew-y': [{ 'skew-y': [k] }],
            'transform-origin': [
              {
                origin: [
                  'center',
                  'top',
                  'top-right',
                  'right',
                  'bottom-right',
                  'bottom',
                  'bottom-left',
                  'left',
                  'top-left',
                  dr,
                ],
              },
            ],
            accent: [{ accent: ['auto', e] }],
            appearance: ['appearance-none'],
            cursor: [
              {
                cursor: [
                  'auto',
                  'default',
                  'pointer',
                  'wait',
                  'text',
                  'move',
                  'help',
                  'not-allowed',
                  'none',
                  'context-menu',
                  'progress',
                  'cell',
                  'crosshair',
                  'vertical-text',
                  'alias',
                  'copy',
                  'no-drop',
                  'grab',
                  'grabbing',
                  'all-scroll',
                  'col-resize',
                  'row-resize',
                  'n-resize',
                  'e-resize',
                  's-resize',
                  'w-resize',
                  'ne-resize',
                  'nw-resize',
                  'se-resize',
                  'sw-resize',
                  'ew-resize',
                  'ns-resize',
                  'nesw-resize',
                  'nwse-resize',
                  'zoom-in',
                  'zoom-out',
                  dr,
                ],
              },
            ],
            'caret-color': [{ caret: [e] }],
            'pointer-events': [{ 'pointer-events': ['none', 'auto'] }],
            resize: [{ resize: ['none', 'y', 'x', ''] }],
            'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
            'scroll-m': [{ 'scroll-m': C() }],
            'scroll-mx': [{ 'scroll-mx': C() }],
            'scroll-my': [{ 'scroll-my': C() }],
            'scroll-ms': [{ 'scroll-ms': C() }],
            'scroll-me': [{ 'scroll-me': C() }],
            'scroll-mt': [{ 'scroll-mt': C() }],
            'scroll-mr': [{ 'scroll-mr': C() }],
            'scroll-mb': [{ 'scroll-mb': C() }],
            'scroll-ml': [{ 'scroll-ml': C() }],
            'scroll-p': [{ 'scroll-p': C() }],
            'scroll-px': [{ 'scroll-px': C() }],
            'scroll-py': [{ 'scroll-py': C() }],
            'scroll-ps': [{ 'scroll-ps': C() }],
            'scroll-pe': [{ 'scroll-pe': C() }],
            'scroll-pt': [{ 'scroll-pt': C() }],
            'scroll-pr': [{ 'scroll-pr': C() }],
            'scroll-pb': [{ 'scroll-pb': C() }],
            'scroll-pl': [{ 'scroll-pl': C() }],
            'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
            'snap-stop': [{ snap: ['normal', 'always'] }],
            'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
            'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
            touch: [
              {
                touch: [
                  'auto',
                  'none',
                  'pinch-zoom',
                  'manipulation',
                  { pan: ['x', 'left', 'right', 'y', 'up', 'down'] },
                ],
              },
            ],
            select: [{ select: ['none', 'text', 'all', 'auto'] }],
            'will-change': [{ 'will-change': ['auto', 'scroll', 'contents', 'transform', dr] }],
            fill: [{ fill: [e, 'none'] }],
            'stroke-w': [{ stroke: [rr, lr] }],
            stroke: [{ stroke: [e, 'none'] }],
            sr: ['sr-only', 'not-sr-only'],
          },
          conflictingClassGroups: {
            overflow: ['overflow-x', 'overflow-y'],
            overscroll: ['overscroll-x', 'overscroll-y'],
            inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
            'inset-x': ['right', 'left'],
            'inset-y': ['top', 'bottom'],
            flex: ['basis', 'grow', 'shrink'],
            gap: ['gap-x', 'gap-y'],
            p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
            px: ['pr', 'pl'],
            py: ['pt', 'pb'],
            m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
            mx: ['mr', 'ml'],
            my: ['mt', 'mb'],
            'font-size': ['leading'],
            'fvn-normal': [
              'fvn-ordinal',
              'fvn-slashed-zero',
              'fvn-figure',
              'fvn-spacing',
              'fvn-fraction',
            ],
            'fvn-ordinal': ['fvn-normal'],
            'fvn-slashed-zero': ['fvn-normal'],
            'fvn-figure': ['fvn-normal'],
            'fvn-spacing': ['fvn-normal'],
            'fvn-fraction': ['fvn-normal'],
            rounded: [
              'rounded-s',
              'rounded-e',
              'rounded-t',
              'rounded-r',
              'rounded-b',
              'rounded-l',
              'rounded-ss',
              'rounded-se',
              'rounded-ee',
              'rounded-es',
              'rounded-tl',
              'rounded-tr',
              'rounded-br',
              'rounded-bl',
            ],
            'rounded-s': ['rounded-ss', 'rounded-es'],
            'rounded-e': ['rounded-se', 'rounded-ee'],
            'rounded-t': ['rounded-tl', 'rounded-tr'],
            'rounded-r': ['rounded-tr', 'rounded-br'],
            'rounded-b': ['rounded-br', 'rounded-bl'],
            'rounded-l': ['rounded-tl', 'rounded-bl'],
            'border-spacing': ['border-spacing-x', 'border-spacing-y'],
            'border-w': [
              'border-w-s',
              'border-w-e',
              'border-w-t',
              'border-w-r',
              'border-w-b',
              'border-w-l',
            ],
            'border-w-x': ['border-w-r', 'border-w-l'],
            'border-w-y': ['border-w-t', 'border-w-b'],
            'border-color': [
              'border-color-t',
              'border-color-r',
              'border-color-b',
              'border-color-l',
            ],
            'border-color-x': ['border-color-r', 'border-color-l'],
            'border-color-y': ['border-color-t', 'border-color-b'],
            'scroll-m': [
              'scroll-mx',
              'scroll-my',
              'scroll-ms',
              'scroll-me',
              'scroll-mt',
              'scroll-mr',
              'scroll-mb',
              'scroll-ml',
            ],
            'scroll-mx': ['scroll-mr', 'scroll-ml'],
            'scroll-my': ['scroll-mt', 'scroll-mb'],
            'scroll-p': [
              'scroll-px',
              'scroll-py',
              'scroll-ps',
              'scroll-pe',
              'scroll-pt',
              'scroll-pr',
              'scroll-pb',
              'scroll-pl',
            ],
            'scroll-px': ['scroll-pr', 'scroll-pl'],
            'scroll-py': ['scroll-pt', 'scroll-pb'],
          },
          conflictingClassGroupModifiers: { 'font-size': ['leading'] },
        };
      }
      var kr = Kt(wr);
      function Nr(e) {
        return null !== e && 'object' === typeof e && e.constructor === Object;
      }
      function Sr(e) {
        if (!Nr(e)) return e;
        var t = pt({}, e);
        return (
          Object.keys(e).forEach(function (r) {
            t[r] = Sr(e[r]);
          }),
          t
        );
      }
      function Er(e, t) {
        if (Nr(t) && 0 === Object.keys(t).length) return Sr(pt(pt({}, e), t));
        var r = pt(pt({}, e), t);
        return (
          Nr(t) &&
            Nr(e) &&
            Object.keys(t).forEach(function (n) {
              Nr(t[n]) && n in e && Nr(e[n])
                ? (r[n] = Er(e[n], t[n]))
                : (r[n] = Nr(t[n]) ? Sr(t[n]) : t[n]);
            }),
          r
        );
      }
      var Cr = (0, e.createContext)(void 0);
      function jr() {
        var t = (0, e.useContext)(Cr);
        if (!t)
          throw new Error(
            'useAccordionContext should be used within the AccordionPanelContext provider!',
          );
        return t;
      }
      var Rr = ['children', 'className', 'theme'],
        Tr = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, Rr),
            i = jr().isOpen,
            l = Er(kn().theme.accordion.content, o);
          return (0, gt.jsx)(
            'div',
            pt(
              pt(
                {
                  className: kr(l.base, r),
                  'data-testid': 'flowbite-accordion-content',
                  hidden: !i,
                },
                a,
              ),
              {},
              { children: t },
            ),
          );
        },
        Pr = ['children'],
        Or = function (t) {
          var r = t.children,
            n = ht(t, Pr),
            o = n.alwaysOpen,
            a = f((0, e.useState)(n.isOpen), 2),
            i = a[0],
            l = a[1],
            s = o
              ? pt(
                  pt({}, n),
                  {},
                  {
                    isOpen: i,
                    setOpen: function () {
                      return l(!i);
                    },
                  },
                )
              : n;
          return (0, gt.jsx)(Cr.Provider, { value: s, children: r });
        },
        Lr = ['as', 'children', 'className', 'theme'],
        _r = function (e) {
          var t = e.as,
            r = void 0 === t ? 'h2' : t,
            n = e.children,
            o = e.className,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, Lr),
            s = jr(),
            u = s.arrowIcon,
            c = s.flush,
            d = s.isOpen,
            f = s.setOpen,
            p = Er(kn().theme.accordion.title, i);
          return (0, gt.jsxs)(
            'button',
            pt(
              pt(
                {
                  className: kr(p.base, p.flush[c ? 'on' : 'off'], p.open[d ? 'on' : 'off'], o),
                  onClick: function () {
                    return 'undefined' !== typeof f && f();
                  },
                  type: 'button',
                },
                l,
              ),
              {},
              {
                children: [
                  (0, gt.jsx)(r, {
                    className: p.heading,
                    'data-testid': 'flowbite-accordion-heading',
                    children: n,
                  }),
                  u &&
                    (0, gt.jsx)(u, {
                      'aria-hidden': !0,
                      className: kr(p.arrow.base, p.arrow.open[d ? 'on' : 'off']),
                      'data-testid': 'flowbite-accordion-arrow',
                    }),
                ],
              },
            ),
          );
        },
        Ir = ['alwaysOpen', 'arrowIcon', 'children', 'flush', 'collapseAll', 'className', 'theme'],
        Dr = function (t) {
          var r = t.alwaysOpen,
            n = void 0 !== r && r,
            o = t.arrowIcon,
            a = void 0 === o ? Ct : o,
            i = t.children,
            l = t.flush,
            s = void 0 !== l && l,
            u = t.collapseAll,
            c = void 0 !== u && u,
            d = t.className,
            p = t.theme,
            h = void 0 === p ? {} : p,
            g = ht(t, Ir),
            m = f((0, e.useState)(c ? -1 : 0), 2),
            v = m[0],
            b = m[1],
            y = (0, e.useMemo)(
              function () {
                return e.Children.map(i, function (t, r) {
                  return (0, e.cloneElement)(t, {
                    alwaysOpen: n,
                    arrowIcon: a,
                    flush: s,
                    isOpen: v === r,
                    setOpen: function () {
                      return b(v === r ? -1 : r);
                    },
                  });
                });
              },
              [n, a, i, s, v],
            ),
            x = Er(kn().theme.accordion.root, h);
          return (0, gt.jsx)(
            'div',
            pt(
              pt(
                {
                  className: kr(x.base, x.flush[s ? 'on' : 'off'], d),
                  'data-testid': 'flowbite-accordion',
                },
                g,
              ),
              {},
              { children: y },
            ),
          );
        };
      (Dr.displayName = 'Accordion'),
        (Or.displayName = 'Accordion.Panel'),
        (_r.displayName = 'Accordion.Title'),
        (Tr.displayName = 'Accordion.Content');
      Object.assign(Dr, { Panel: Or, Title: _r, Content: Tr });
      var zr = ['children', 'className', 'theme'],
        Mr = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, zr),
            i = Er(kn().theme.avatar.group, o);
          return (0, gt.jsx)(
            'div',
            pt(
              pt({ 'data-testid': 'avatar-group-element', className: kr(i.base, r) }, a),
              {},
              { children: t },
            ),
          );
        };
      Mr.displayName = 'Avatar.Group';
      var Ar = ['className', 'href', 'theme', 'total'],
        Fr = function (e) {
          var t = e.className,
            r = e.href,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = e.total,
            i = ht(e, Ar),
            l = Er(kn().theme.avatar.groupCounter, o);
          return (0, gt.jsxs)(
            'a',
            pt(pt({ href: r, className: kr(l.base, t) }, i), {}, { children: ['+', a] }),
          );
        };
      Fr.displayName = 'Avatar.GroupCounter';
      var Br = [
          'alt',
          'bordered',
          'children',
          'className',
          'color',
          'img',
          'placeholderInitials',
          'rounded',
          'size',
          'stacked',
          'status',
          'statusPosition',
          'theme',
        ],
        Ur = function (e) {
          var t = e.alt,
            r = void 0 === t ? '' : t,
            n = e.bordered,
            o = void 0 !== n && n,
            a = e.children,
            i = e.className,
            l = e.color,
            s = void 0 === l ? 'light' : l,
            u = e.img,
            c = e.placeholderInitials,
            d = void 0 === c ? '' : c,
            f = e.rounded,
            p = void 0 !== f && f,
            h = e.size,
            g = void 0 === h ? 'md' : h,
            m = e.stacked,
            v = void 0 !== m && m,
            b = e.status,
            y = e.statusPosition,
            x = void 0 === y ? 'top-left' : y,
            w = e.theme,
            k = void 0 === w ? {} : w,
            N = ht(e, Br),
            S = Er(kn().theme.avatar, k),
            E = kr(
              S.root.img.base,
              o && S.root.bordered,
              o && S.root.color[s],
              p && S.root.rounded,
              v && S.root.stacked,
              S.root.img.on,
              S.root.size[g],
            ),
            C = { className: kr(E, S.root.img.on), 'data-testid': 'flowbite-avatar-img' };
          return (0, gt.jsxs)(
            'div',
            pt(
              pt({ className: kr(S.root.base, i), 'data-testid': 'flowbite-avatar' }, N),
              {},
              {
                children: [
                  (0, gt.jsxs)('div', {
                    className: 'relative',
                    children: [
                      u
                        ? 'string' === typeof u
                          ? (0, gt.jsx)('img', pt({ alt: r, src: u }, C))
                          : u(pt({ alt: r }, C))
                        : d
                        ? (0, gt.jsx)('div', {
                            className: kr(
                              S.root.img.off,
                              S.root.initials.base,
                              v && S.root.stacked,
                              o && S.root.bordered,
                              o && S.root.color[s],
                              S.root.size[g],
                              p && S.root.rounded,
                            ),
                            'data-testid': 'flowbite-avatar-initials-placeholder',
                            children: (0, gt.jsx)('span', {
                              className: kr(S.root.initials.text),
                              'data-testid': 'flowbite-avatar-initials-placeholder-text',
                              children: d,
                            }),
                          })
                        : (0, gt.jsx)('div', {
                            className: kr(E, S.root.img.off),
                            'data-testid': 'flowbite-avatar-img',
                            children: (0, gt.jsx)('svg', {
                              className: S.root.img.placeholder,
                              fill: 'currentColor',
                              viewBox: '0 0 20 20',
                              xmlns: 'http://www.w3.org/2000/svg',
                              children: (0, gt.jsx)('path', {
                                fillRule: 'evenodd',
                                d: 'M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z',
                                clipRule: 'evenodd',
                              }),
                            }),
                          }),
                      b &&
                        (0, gt.jsx)('span', {
                          'data-testid': 'flowbite-avatar-status',
                          className: kr(
                            S.root.status.base,
                            S.root.status[b],
                            S.root.statusPosition[x],
                          ),
                        }),
                    ],
                  }),
                  a && (0, gt.jsx)('div', { children: a }),
                ],
              },
            ),
          );
        };
      Ur.displayName = 'Avatar';
      Object.assign(Ur, { Group: Mr, Counter: Fr });
      var Wr = ['children', 'color', 'href', 'icon', 'size', 'className', 'theme'],
        Hr = function (e) {
          var t = e.children,
            r = e.color,
            n = void 0 === r ? 'info' : r,
            o = e.href,
            a = e.icon,
            i = e.size,
            l = void 0 === i ? 'xs' : i,
            s = e.className,
            u = e.theme,
            c = void 0 === u ? {} : u,
            d = ht(e, Wr),
            f = Er(kn().theme.badge, c),
            p = function () {
              return (0, gt.jsxs)(
                'span',
                pt(
                  pt(
                    {
                      className: kr(
                        f.root.base,
                        f.root.color[n],
                        f.root.size[l],
                        f.icon[a ? 'on' : 'off'],
                        s,
                      ),
                      'data-testid': 'flowbite-badge',
                    },
                    d,
                  ),
                  {},
                  {
                    children: [
                      a &&
                        (0, gt.jsx)(a, {
                          'aria-hidden': !0,
                          className: f.icon.size[l],
                          'data-testid': 'flowbite-badge-icon',
                        }),
                      t && (0, gt.jsx)('span', { children: t }),
                    ],
                  },
                ),
              );
            };
          return o
            ? (0, gt.jsx)('a', { className: f.root.href, href: o, children: (0, gt.jsx)(p, {}) })
            : (0, gt.jsx)(p, {});
        };
      Hr.displayName = 'Badge';
      var Vr = e.forwardRef,
        $r = ['children', 'as', 'href', 'type'],
        qr = Vr(function (t, r) {
          var n = t.children,
            o = t.as,
            a = t.href,
            i = t.type,
            l = void 0 === i ? 'button' : i,
            s = ht(t, $r),
            u = o || (a ? 'a' : 'button');
          return (0, e.createElement)(u, pt({ ref: r, href: a, type: l }, s), n);
        }),
        Gr = ['children', 'className', 'outline', 'pill', 'theme'],
        Kr = function (t) {
          var r = t.children,
            n = t.className,
            o = t.outline,
            a = t.pill,
            i = t.theme,
            l = void 0 === i ? {} : i,
            s = ht(t, Gr),
            u = (0, e.useMemo)(
              function () {
                return e.Children.map(r, function (t, n) {
                  return (0, e.cloneElement)(t, {
                    outline: o,
                    pill: a,
                    positionInGroup: 0 === n ? 'start' : n === r.length - 1 ? 'end' : 'middle',
                  });
                });
              },
              [r, o, a],
            ),
            c = Er(kn().theme.buttonGroup, l);
          return (0, gt.jsx)(
            'div',
            pt(pt({ className: kr(c.base, n), role: 'group' }, s), {}, { children: u }),
          );
        };
      Kr.displayName = 'Button.Group';
      var Qr = Kr,
        Yr = [
          'children',
          'className',
          'color',
          'disabled',
          'fullSized',
          'isProcessing',
          'processingLabel',
          'processingSpinner',
          'gradientDuoTone',
          'gradientMonochrome',
          'label',
          'outline',
          'pill',
          'positionInGroup',
          'size',
          'theme',
        ],
        Xr = function (e, t) {
          var r,
            n = e.children,
            o = e.className,
            a = e.color,
            i = void 0 === a ? 'info' : a,
            l = e.disabled,
            s = e.fullSized,
            u = e.isProcessing,
            c = void 0 !== u && u,
            d = e.processingLabel,
            f = void 0 === d ? 'Loading...' : d,
            p = e.processingSpinner,
            h = e.gradientDuoTone,
            g = e.gradientMonochrome,
            m = e.label,
            v = e.outline,
            b = void 0 !== v && v,
            y = e.pill,
            x = void 0 !== y && y,
            w = e.positionInGroup,
            k = void 0 === w ? 'none' : w,
            N = e.size,
            S = void 0 === N ? 'md' : N,
            E = e.theme,
            C = void 0 === E ? {} : E,
            j = ht(e, Yr),
            R = kn().theme,
            T = R.buttonGroup,
            P = Er(R.button, C),
            O = j;
          return (0, gt.jsx)(
            qr,
            pt(
              pt(
                {
                  ref: t,
                  disabled: l,
                  className: kr(
                    P.base,
                    l && P.disabled,
                    !h && !g && P.color[i],
                    h && !g && P.gradientDuoTone[h],
                    !h && g && P.gradient[g],
                    b &&
                      (null !== (r = P.outline.color[i]) && void 0 !== r
                        ? r
                        : P.outline.color.default),
                    P.pill[x ? 'on' : 'off'],
                    s && P.fullSized,
                    T.position[k],
                    o,
                  ),
                },
                O,
              ),
              {},
              {
                children: (0, gt.jsx)('span', {
                  className: kr(
                    P.inner.base,
                    P.outline[b ? 'on' : 'off'],
                    P.outline.pill[b && x ? 'on' : 'off'],
                    P.size[S],
                    b && !P.outline.color[i] && P.inner.outline,
                    c && P.isProcessing,
                    c && P.inner.isProcessingPadding[S],
                    P.inner.position[k],
                  ),
                  children: (0, gt.jsxs)(gt.Fragment, {
                    children: [
                      c &&
                        (0, gt.jsx)('span', {
                          className: kr(P.spinnerSlot, P.spinnerLeftPosition[S]),
                          children: p || (0, gt.jsx)(cu, { size: S }),
                        }),
                      'undefined' !== typeof n
                        ? n
                        : (0, gt.jsx)('span', {
                            'data-testid': 'flowbite-button-label',
                            className: kr(P.label),
                            children: c ? f : m,
                          }),
                    ],
                  }),
                }),
              },
            ),
          );
        };
      Xr.displayName = 'Button';
      var Jr = Vr(Xr),
        Zr = Object.assign(Jr, { Group: Qr }),
        en = ['children'],
        tn = function (e) {
          var t = e.children,
            r = ht(e, en);
          return (0, gt.jsx)(
            Zr,
            pt(
              pt(
                {
                  onClick: function (e) {
                    var t = e.target.closest('[role="banner"]');
                    null === t || void 0 === t || t.remove();
                  },
                },
                r,
              ),
              {},
              { children: t },
            ),
          );
        };
      tn.displayName = 'Banner.CollapseButton';
      var rn = ['children'],
        nn = function (e) {
          var t = e.children,
            r = ht(e, rn);
          return (0, gt.jsx)(
            'div',
            pt(
              pt({ 'data-testid': 'flowbite-banner', role: 'banner', tabIndex: -1 }, r),
              {},
              { children: t },
            ),
          );
        };
      nn.displayName = 'Banner';
      Object.assign(nn, { CollapseButton: tn });
      var on = ['children', 'className', 'href', 'icon', 'theme'],
        an = (0, e.forwardRef)(function (e, t) {
          var r = e.children,
            n = e.className,
            o = e.href,
            a = e.icon,
            i = e.theme,
            l = void 0 === i ? {} : i,
            s = ht(e, on),
            u = 'undefined' !== typeof o,
            c = u ? 'a' : 'span',
            d = Er(kn().theme.breadcrumb.item, l);
          return (0, gt.jsxs)(
            'li',
            pt(
              pt({ className: kr(d.base, n) }, s),
              {},
              {
                children: [
                  (0, gt.jsx)(It, {
                    'aria-hidden': !0,
                    className: d.chevron,
                    'data-testid': 'flowbite-breadcrumb-separator',
                  }),
                  (0, gt.jsxs)(c, {
                    ref: t,
                    className: d.href[u ? 'on' : 'off'],
                    'data-testid': 'flowbite-breadcrumb-item',
                    href: o,
                    children: [a && (0, gt.jsx)(a, { 'aria-hidden': !0, className: d.icon }), r],
                  }),
                ],
              },
            ),
          );
        });
      an.displayName = 'Breadcrumb.Item';
      var ln = ['children', 'className', 'theme'],
        sn = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, ln),
            i = Er(kn().theme.breadcrumb.root, o);
          return (0, gt.jsx)(
            'nav',
            pt(
              pt({ 'aria-label': 'Breadcrumb', className: kr(i.base, r) }, a),
              {},
              { children: (0, gt.jsx)('ol', { className: i.list, children: t }) },
            ),
          );
        };
      sn.displayName = 'Breadcrumb';
      Object.assign(sn, { Item: an }),
        (un = [
          'renderImage',
          'imgSrc',
          'imgAlt',
          'children',
          'className',
          'horizontal',
          'href',
          'theme',
        ]);
      var un,
        cn,
        dn = function (e, t) {
          return (dn =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
            })(e, t);
        },
        fn =
          ((function (e) {
            !(function () {
              var t = {}.hasOwnProperty;
              function r() {
                for (var e = [], n = 0; n < arguments.length; n++) {
                  var o = arguments[n];
                  if (o) {
                    var a = typeof o;
                    if ('string' === a || 'number' === a) e.push(o);
                    else if (Array.isArray(o) && o.length) {
                      var i = r.apply(null, o);
                      i && e.push(i);
                    } else if ('object' === a) for (var l in o) t.call(o, l) && o[l] && e.push(l);
                  }
                }
                return e.join(' ');
              }
              e.exports ? ((r.default = r), (e.exports = r)) : (window.classNames = r);
            })();
          })(
            (cn = {
              path: undefined,
              exports: {},
              require: function (e, t) {
                return (function () {
                  throw new Error(
                    'Dynamic requires are not currently supported by @rollup/plugin-commonjs',
                  );
                })(null == t && cn.path);
              },
            }),
            cn.exports,
          ),
          cn.exports);
      function pn(e, t, r) {
        var n, o, a, i, l;
        function s() {
          var u = Date.now() - i;
          u < t && u >= 0
            ? (n = setTimeout(s, t - u))
            : ((n = null), r || ((l = e.apply(a, o)), (a = o = null)));
        }
        null == t && (t = 100);
        var u = function () {
          (a = this), (o = arguments), (i = Date.now());
          var u = r && !n;
          return n || (n = setTimeout(s, t)), u && ((l = e.apply(a, o)), (a = o = null)), l;
        };
        return (
          (u.clear = function () {
            n && (clearTimeout(n), (n = null));
          }),
          (u.flush = function () {
            n && ((l = e.apply(a, o)), (a = o = null), clearTimeout(n), (n = null));
          }),
          u
        );
      }
      pn.debounce = pn;
      var hn = pn;
      !(function (e, t) {
        void 0 === t && (t = {});
        var r = t.insertAt;
        if (e && 'undefined' != typeof document) {
          var n = document.head || document.getElementsByTagName('head')[0],
            o = document.createElement('style');
          (o.type = 'text/css'),
            'top' === r && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o),
            o.styleSheet ? (o.styleSheet.cssText = e) : o.appendChild(document.createTextNode(e));
        }
      })(
        '.indiana-scroll-container {\n  overflow: auto; }\n  .indiana-scroll-container--dragging {\n    scroll-behavior: auto !important; }\n    .indiana-scroll-container--dragging > * {\n      pointer-events: none;\n      cursor: -webkit-grab;\n      cursor: grab; }\n  .indiana-scroll-container--hide-scrollbars {\n    overflow: hidden;\n    overflow: -moz-scrollbars-none;\n    -ms-overflow-style: none;\n    scrollbar-width: none; }\n    .indiana-scroll-container--hide-scrollbars::-webkit-scrollbar {\n      display: none !important;\n      height: 0 !important;\n      width: 0 !important;\n      background: transparent !important;\n      -webkit-appearance: none !important; }\n  .indiana-scroll-container--native-scroll {\n    overflow: auto; }\n\n.indiana-dragging {\n  cursor: -webkit-grab;\n  cursor: grab; }\n',
      );
      var gn,
        mn =
          ((gn = 'indiana-scroll-container'),
          function (e, t) {
            if (!e) return gn;
            var r;
            'string' == typeof e ? (r = e) : (t = e);
            var n = gn;
            return (
              r && (n += '__' + r),
              n +
                (t
                  ? Object.keys(t).reduce(function (e, r) {
                      var o = t[r];
                      return (
                        o &&
                          (e +=
                            ' ' + ('boolean' == typeof o ? n + '--' + r : n + '--' + r + '_' + o)),
                        e
                      );
                    }, '')
                  : '')
            );
          }),
        vn =
          ((function (t) {
            function r(r) {
              var n = t.call(this, r) || this;
              return (
                (n.onEndScroll = function () {
                  (n.scrolling = !1), !n.pressed && n.started && n.processEnd();
                }),
                (n.onScroll = function (e) {
                  var t = n.container.current;
                  (t.scrollLeft === n.scrollLeft && t.scrollTop === n.scrollTop) ||
                    ((n.scrolling = !0), n.processScroll(e), n.onEndScroll());
                }),
                (n.onTouchStart = function (e) {
                  var t = n.props.nativeMobileScroll;
                  if (n.isDraggable(e.target))
                    if (((n.internal = !0), t && n.scrolling)) n.pressed = !0;
                    else {
                      var r = e.touches[0];
                      n.processClick(e, r.clientX, r.clientY),
                        !t && n.props.stopPropagation && e.stopPropagation();
                    }
                }),
                (n.onTouchEnd = function (e) {
                  var t = n.props.nativeMobileScroll;
                  n.pressed &&
                    (!n.started || (n.scrolling && t) ? (n.pressed = !1) : n.processEnd(),
                    n.forceUpdate());
                }),
                (n.onTouchMove = function (e) {
                  var t = n.props.nativeMobileScroll;
                  if (n.pressed && (!t || !n.isMobile)) {
                    var r = e.touches[0];
                    r && n.processMove(e, r.clientX, r.clientY),
                      e.preventDefault(),
                      n.props.stopPropagation && e.stopPropagation();
                  }
                }),
                (n.onMouseDown = function (e) {
                  n.isDraggable(e.target) &&
                    n.isScrollable() &&
                    ((n.internal = !0),
                    -1 !== n.props.buttons.indexOf(e.button) &&
                      (n.processClick(e, e.clientX, e.clientY),
                      e.preventDefault(),
                      n.props.stopPropagation && e.stopPropagation()));
                }),
                (n.onMouseMove = function (e) {
                  n.pressed &&
                    (n.processMove(e, e.clientX, e.clientY),
                    e.preventDefault(),
                    n.props.stopPropagation && e.stopPropagation());
                }),
                (n.onMouseUp = function (e) {
                  n.pressed &&
                    (n.started
                      ? n.processEnd()
                      : ((n.internal = !1),
                        (n.pressed = !1),
                        n.forceUpdate(),
                        n.props.onClick && n.props.onClick(e)),
                    e.preventDefault(),
                    n.props.stopPropagation && e.stopPropagation());
                }),
                (n.container = e.createRef()),
                (n.onEndScroll = hn(n.onEndScroll, 300)),
                (n.scrolling = !1),
                (n.started = !1),
                (n.pressed = !1),
                (n.internal = !1),
                (n.getRef = n.getRef.bind(n)),
                n
              );
            }
            (function (e, t) {
              function r() {
                this.constructor = e;
              }
              dn(e, t),
                (e.prototype =
                  null === t ? Object.create(t) : ((r.prototype = t.prototype), new r()));
            })(r, t),
              (r.prototype.componentDidMount = function () {
                var e = this.props.nativeMobileScroll,
                  t = this.container.current;
                window.addEventListener('mouseup', this.onMouseUp),
                  window.addEventListener('mousemove', this.onMouseMove),
                  window.addEventListener('touchmove', this.onTouchMove, { passive: !1 }),
                  window.addEventListener('touchend', this.onTouchEnd),
                  t.addEventListener('touchstart', this.onTouchStart, { passive: !1 }),
                  t.addEventListener('mousedown', this.onMouseDown, { passive: !1 }),
                  e &&
                    ((this.isMobile = this.isMobileDevice()), this.isMobile && this.forceUpdate());
              }),
              (r.prototype.componentWillUnmount = function () {
                window.removeEventListener('mouseup', this.onMouseUp),
                  window.removeEventListener('mousemove', this.onMouseMove),
                  window.removeEventListener('touchmove', this.onTouchMove),
                  window.removeEventListener('touchend', this.onTouchEnd);
              }),
              (r.prototype.getElement = function () {
                return this.container.current;
              }),
              (r.prototype.isMobileDevice = function () {
                return (
                  void 0 !== window.orientation || -1 !== navigator.userAgent.indexOf('IEMobile')
                );
              }),
              (r.prototype.isDraggable = function (e) {
                var t = this.props.ignoreElements;
                if (t) {
                  var r = e.closest(t);
                  return null === r || r.contains(this.getElement());
                }
                return !0;
              }),
              (r.prototype.isScrollable = function () {
                var e = this.container.current;
                return e && (e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight);
              }),
              (r.prototype.processClick = function (e, t, r) {
                var n = this.container.current;
                (this.scrollLeft = n.scrollLeft),
                  (this.scrollTop = n.scrollTop),
                  (this.clientX = t),
                  (this.clientY = r),
                  (this.pressed = !0);
              }),
              (r.prototype.processStart = function (e) {
                void 0 === e && (e = !0);
                var t = this.props.onStartScroll;
                (this.started = !0),
                  e && document.body.classList.add('indiana-dragging'),
                  t && t({ external: !this.internal }),
                  this.forceUpdate();
              }),
              (r.prototype.processScroll = function (e) {
                if (this.started) {
                  var t = this.props.onScroll;
                  t && t({ external: !this.internal });
                } else this.processStart(!1);
              }),
              (r.prototype.processMove = function (e, t, r) {
                var n = this.props,
                  o = n.horizontal,
                  a = n.vertical,
                  i = n.activationDistance,
                  l = n.onScroll,
                  s = this.container.current;
                this.started
                  ? (o && (s.scrollLeft -= t - this.clientX),
                    a && (s.scrollTop -= r - this.clientY),
                    l && l({ external: !this.internal }),
                    (this.clientX = t),
                    (this.clientY = r),
                    (this.scrollLeft = s.scrollLeft),
                    (this.scrollTop = s.scrollTop))
                  : ((o && Math.abs(t - this.clientX) > i) ||
                      (a && Math.abs(r - this.clientY) > i)) &&
                    ((this.clientX = t), (this.clientY = r), this.processStart());
              }),
              (r.prototype.processEnd = function () {
                var e = this.props.onEndScroll;
                this.container.current && e && e({ external: !this.internal }),
                  (this.pressed = !1),
                  (this.started = !1),
                  (this.scrolling = !1),
                  (this.internal = !1),
                  document.body.classList.remove('indiana-dragging'),
                  this.forceUpdate();
              }),
              (r.prototype.getRef = function (e) {
                [this.container, this.props.innerRef].forEach(function (t) {
                  t && ('function' == typeof t ? t(e) : (t.current = e));
                });
              }),
              (r.prototype.render = function () {
                var t = this.props,
                  r = t.children,
                  n = t.draggingClassName,
                  o = t.className,
                  a = t.style,
                  i = t.hideScrollbars,
                  l = t.component;
                return e.createElement(
                  l,
                  {
                    className: fn(
                      o,
                      this.pressed && n,
                      mn({
                        dragging: this.pressed,
                        'hide-scrollbars': i,
                        'native-scroll': this.isMobile,
                      }),
                    ),
                    style: a,
                    ref: this.getRef,
                    onScroll: this.onScroll,
                  },
                  r,
                );
              }),
              (r.defaultProps = {
                nativeMobileScroll: !0,
                hideScrollbars: !0,
                activationDistance: 10,
                vertical: !0,
                horizontal: !0,
                stopPropagation: !1,
                style: {},
                component: 'div',
                buttons: [0],
              });
          })(e.PureComponent),
          ['className', 'theme']);
      (0, e.forwardRef)(function (e, t) {
        var r = e.className,
          n = e.theme,
          o = void 0 === n ? {} : n,
          a = ht(e, vn),
          i = Er(kn().theme.checkbox, o);
        return (0, gt.jsx)(
          'input',
          pt({ ref: t, type: 'checkbox', className: kr(i.root.base, r) }, a),
        );
      }).displayName = 'Checkbox';
      var bn,
        yn,
        xn = {
          accordion: {
            root: {
              base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
              flush: { off: 'rounded-lg border', on: 'border-b' },
            },
            content: { base: 'py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg' },
            title: {
              arrow: { base: 'h-6 w-6 shrink-0', open: { off: '', on: 'rotate-180' } },
              base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
              flush: {
                off: 'hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-800 dark:focus:ring-gray-800',
                on: 'bg-transparent dark:bg-transparent',
              },
              heading: '',
              open: { off: '', on: 'text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white' },
            },
          },
          alert: {
            base: 'flex flex-col gap-2 p-4 text-sm',
            borderAccent: 'border-t-4',
            closeButton: {
              base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg p-1.5 focus:ring-2',
              icon: 'w-5 h-5',
              color: {
                info: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300',
                gray: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',
                failure:
                  'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
                success:
                  'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
                warning:
                  'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
                red: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300',
                green:
                  'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300',
                yellow:
                  'bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300',
                blue: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300',
                cyan: 'bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300',
                pink: 'bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300',
                lime: 'bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300',
                dark: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300',
                indigo:
                  'bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300',
                purple:
                  'bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300',
                teal: 'bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300',
                light:
                  'bg-gray-50 text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-white',
              },
            },
            color: {
              info: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
              gray: 'text-gray-700 bg-gray-100 border-gray-500 dark:bg-gray-700 dark:text-gray-300',
              failure: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
              success:
                'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
              warning:
                'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
              red: 'text-red-700 bg-red-100 border-red-500 dark:bg-red-200 dark:text-red-800',
              green:
                'text-green-700 bg-green-100 border-green-500 dark:bg-green-200 dark:text-green-800',
              yellow:
                'text-yellow-700 bg-yellow-100 border-yellow-500 dark:bg-yellow-200 dark:text-yellow-800',
              blue: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
              cyan: 'text-cyan-700 bg-cyan-100 border-cyan-500 dark:bg-cyan-200 dark:text-cyan-800',
              pink: 'text-pink-700 bg-pink-100 border-pink-500 dark:bg-pink-200 dark:text-pink-800',
              lime: 'text-lime-700 bg-lime-100 border-lime-500 dark:bg-lime-200 dark:text-lime-800',
              dark: 'text-gray-200 bg-gray-800 border-gray-600 dark:bg-gray-900 dark:text-gray-300',
              indigo:
                'text-indigo-700 bg-indigo-100 border-indigo-500 dark:bg-indigo-200 dark:text-indigo-800',
              purple:
                'text-purple-700 bg-purple-100 border-purple-500 dark:bg-purple-200 dark:text-purple-800',
              teal: 'text-teal-700 bg-teal-100 border-teal-500 dark:bg-teal-200 dark:text-teal-800',
              light: 'text-gray-600 bg-gray-50 border-gray-400 dark:bg-gray-500 dark:text-gray-200',
            },
            icon: 'mr-3 inline h-5 w-5 flex-shrink-0',
            rounded: 'rounded-lg',
            wrapper: 'flex items-center',
          },
          avatar: {
            root: {
              base: 'flex justify-center items-center space-x-4 rounded',
              bordered: 'p-1 ring-2',
              rounded: 'rounded-full',
              color: {
                dark: 'ring-gray-800 dark:ring-gray-800',
                failure: 'ring-red-500 dark:ring-red-700',
                gray: 'ring-gray-500 dark:ring-gray-400',
                info: 'ring-cyan-400 dark:ring-cyan-800',
                light: 'ring-gray-300 dark:ring-gray-500',
                purple: 'ring-purple-500 dark:ring-purple-600',
                success: 'ring-green-500 dark:ring-green-500',
                warning: 'ring-yellow-300 dark:ring-yellow-500',
                pink: 'ring-pink-500 dark:ring-pink-500',
              },
              img: {
                base: 'rounded',
                off: 'relative overflow-hidden bg-gray-100 dark:bg-gray-600',
                on: '',
                placeholder: 'absolute w-auto h-auto text-gray-400 -bottom-1',
              },
              size: {
                xs: 'w-6 h-6',
                sm: 'w-8 h-8',
                md: 'w-10 h-10',
                lg: 'w-20 h-20',
                xl: 'w-36 h-36',
              },
              stacked: 'ring-2 ring-gray-300 dark:ring-gray-500',
              statusPosition: {
                'bottom-left': '-bottom-1 -left-1',
                'bottom-center': '-bottom-1 center',
                'bottom-right': '-bottom-1 -right-1',
                'top-left': '-top-1 -left-1',
                'top-center': '-top-1 center',
                'top-right': '-top-1 -right-1',
                'center-right': 'center -right-1',
                center: 'center center',
                'center-left': 'center -left-1',
              },
              status: {
                away: 'bg-yellow-400',
                base: 'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800',
                busy: 'bg-red-400',
                offline: 'bg-gray-400',
                online: 'bg-green-400',
              },
              initials: {
                text: 'font-medium text-gray-600 dark:text-gray-300',
                base: 'inline-flex overflow-hidden relative justify-center items-center bg-gray-100 dark:bg-gray-600',
              },
            },
            group: { base: 'flex -space-x-4' },
            groupCounter: {
              base: 'relative flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full ring-2 ring-gray-300 hover:bg-gray-600 dark:ring-gray-500',
            },
          },
          badge: {
            root: {
              base: 'flex h-fit items-center gap-1 font-semibold',
              color: {
                info: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
                gray: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 group-hover:bg-gray-200 dark:group-hover:bg-gray-600',
                failure:
                  'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
                success:
                  'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
                warning:
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
                indigo:
                  'bg-indigo-100 text-indigo-800 dark:bg-indigo-200 dark:text-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-300',
                purple:
                  'bg-purple-100 text-purple-800 dark:bg-purple-200 dark:text-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-300',
                pink: 'bg-pink-100 text-pink-800 dark:bg-pink-200 dark:text-pink-900 group-hover:bg-pink-200 dark:group-hover:bg-pink-300',
                blue: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
                cyan: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-200 dark:text-cyan-900 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-300',
                dark: 'bg-gray-600 text-gray-100 dark:bg-gray-900 dark:text-gray-200 group-hover:bg-gray-500 dark:group-hover:bg-gray-700',
                light:
                  'bg-gray-200 text-gray-800 dark:bg-gray-400 dark:text-gray-900 group-hover:bg-gray-300 dark:group-hover:bg-gray-500',
                green:
                  'bg-green-100 text-green-800 dark:bg-green-200 dark:text-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-300',
                lime: 'bg-lime-100 text-lime-800 dark:bg-lime-200 dark:text-lime-900 group-hover:bg-lime-200 dark:group-hover:bg-lime-300',
                red: 'bg-red-100 text-red-800 dark:bg-red-200 dark:text-red-900 group-hover:bg-red-200 dark:group-hover:bg-red-300',
                teal: 'bg-teal-100 text-teal-800 dark:bg-teal-200 dark:text-teal-900 group-hover:bg-teal-200 dark:group-hover:bg-teal-300',
                yellow:
                  'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-300',
              },
              href: 'group',
              size: { xs: 'p-1 text-xs', sm: 'p-1.5 text-sm' },
            },
            icon: {
              off: 'rounded px-2 py-0.5',
              on: 'rounded-full p-1.5',
              size: { xs: 'w-3 h-3', sm: 'w-3.5 h-3.5' },
            },
          },
          breadcrumb: {
            root: { base: '', list: 'flex items-center' },
            item: {
              base: 'group flex items-center',
              chevron: 'mx-1 h-6 w-6 text-gray-400 group-first:hidden md:mx-2',
              href: {
                off: 'flex items-center text-sm font-medium text-gray-500 dark:text-gray-400',
                on: 'flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
              },
              icon: 'mr-2 h-4 w-4',
            },
          },
          button: {
            base: 'group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none',
            fullSized: 'w-full',
            color: {
              dark: 'text-white bg-gray-800 border border-transparent enabled:hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 dark:bg-gray-800 dark:enabled:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700',
              failure:
                'text-white bg-red-700 border border-transparent enabled:hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:enabled:hover:bg-red-700 dark:focus:ring-red-900',
              gray: 'text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-2',
              info: 'text-white bg-cyan-700 border border-transparent enabled:hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:enabled:hover:bg-cyan-700 dark:focus:ring-cyan-800',
              light:
                'text-gray-900 bg-white border border-gray-300 enabled:hover:bg-gray-100 focus:ring-4 focus:ring-cyan-300 :bg-gray-600 dark:text-white dark:border-gray-600 dark:enabled:hover:bg-gray-700 dark:enabled:hover:border-gray-700 dark:focus:ring-gray-700',
              purple:
                'text-white bg-purple-700 border border-transparent enabled:hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 dark:bg-purple-600 dark:enabled:hover:bg-purple-700 dark:focus:ring-purple-900',
              success:
                'text-white bg-green-700 border border-transparent enabled:hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:enabled:hover:bg-green-700 dark:focus:ring-green-800',
              warning:
                'text-white bg-yellow-400 border border-transparent enabled:hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900',
              blue: 'text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 :bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',
              cyan: 'text-cyan-900 bg-white border border-cyan-300 enabled:hover:bg-cyan-100 focus:ring-4 focus:ring-cyan-300 :bg-cyan-600 dark:text-white dark:border-cyan-600 dark:enabled:hover:bg-cyan-700 dark:enabled:hover:border-cyan-700 dark:focus:ring-cyan-700',
              green:
                'text-green-900 bg-white border border-green-300 enabled:hover:bg-green-100 focus:ring-4 focus:ring-green-300 :bg-green-600 dark:text-white dark:border-green-600 dark:enabled:hover:bg-green-700 dark:enabled:hover:border-green-700 dark:focus:ring-green-700',
              indigo:
                'text-indigo-900 bg-white border border-indigo-300 enabled:hover:bg-indigo-100 focus:ring-4 focus:ring-indigo-300 :bg-indigo-600 dark:text-white dark:border-indigo-600 dark:enabled:hover:bg-indigo-700 dark:enabled:hover:border-indigo-700 dark:focus:ring-indigo-700',
              lime: 'text-lime-900 bg-white border border-lime-300 enabled:hover:bg-lime-100 focus:ring-4 focus:ring-lime-300 :bg-lime-600 dark:text-white dark:border-lime-600 dark:enabled:hover:bg-lime-700 dark:enabled:hover:border-lime-700 dark:focus:ring-lime-700',
              pink: 'text-pink-900 bg-white border border-pink-300 enabled:hover:bg-pink-100 focus:ring-4 focus:ring-pink-300 :bg-pink-600 dark:text-white dark:border-pink-600 dark:enabled:hover:bg-pink-700 dark:enabled:hover:border-pink-700 dark:focus:ring-pink-700',
              red: 'text-red-900 bg-white border border-red-300 enabled:hover:bg-red-100 focus:ring-4 focus:ring-red-300 :bg-red-600 dark:text-white dark:border-red-600 dark:enabled:hover:bg-red-700 dark:enabled:hover:border-red-700 dark:focus:ring-red-700',
              teal: 'text-teal-900 bg-white border border-teal-300 enabled:hover:bg-teal-100 focus:ring-4 focus:ring-teal-300 :bg-teal-600 dark:text-white dark:border-teal-600 dark:enabled:hover:bg-teal-700 dark:enabled:hover:border-teal-700 dark:focus:ring-teal-700',
              yellow:
                'text-yellow-900 bg-white border border-yellow-300 enabled:hover:bg-yellow-100 focus:ring-4 focus:ring-yellow-300 :bg-yellow-600 dark:text-white dark:border-yellow-600 dark:enabled:hover:bg-yellow-700 dark:enabled:hover:border-yellow-700 dark:focus:ring-yellow-700',
            },
            disabled: 'cursor-not-allowed opacity-50',
            isProcessing: 'cursor-wait',
            spinnerSlot: 'absolute h-full top-0 flex items-center animate-fade-in',
            spinnerLeftPosition: {
              xs: 'left-2',
              sm: 'left-3',
              md: 'left-4',
              lg: 'left-5',
              xl: 'left-6',
            },
            gradient: {
              cyan: 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
              failure:
                'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800',
              info: 'text-white bg-gradient-to-r from-cyan-500 via-cyan-600 to-cyan-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 ',
              lime: 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800',
              pink: 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800',
              purple:
                'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-800',
              success:
                'text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800',
              teal: 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 enabled:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-800',
            },
            gradientDuoTone: {
              cyanToBlue:
                'text-white bg-gradient-to-r from-cyan-500 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
              greenToBlue:
                'text-white bg-gradient-to-br from-green-400 to-cyan-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800',
              pinkToOrange:
                'text-white bg-gradient-to-br from-pink-500 to-orange-400 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800',
              purpleToBlue:
                'text-white bg-gradient-to-br from-purple-600 to-cyan-500 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800',
              purpleToPink:
                'text-white bg-gradient-to-r from-purple-500 to-pink-500 enabled:hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800',
              redToYellow:
                'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400',
              tealToLime:
                'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 enabled:hover:bg-gradient-to-l enabled:hover:from-teal-200 enabled:hover:to-lime-200 enabled:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700',
            },
            inner: {
              base: 'flex items-stretch transition-all duration-200',
              position: {
                none: '',
                start: 'rounded-r-none',
                middle: 'rounded-none',
                end: 'rounded-l-none',
              },
              outline: 'border border-transparent',
              isProcessingPadding: {
                xs: 'pl-8',
                sm: 'pl-10',
                md: 'pl-12',
                lg: 'pl-16',
                xl: 'pl-20',
              },
            },
            label:
              'ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-cyan-200 text-xs font-semibold text-cyan-800',
            outline: {
              color: {
                gray: 'border border-gray-900 dark:border-white',
                default: 'border-0',
                light: '',
              },
              off: '',
              on: 'flex justify-center bg-white text-gray-900 transition-all duration-75 ease-in group-enabled:group-hover:bg-opacity-0 group-enabled:group-hover:text-inherit dark:bg-gray-900 dark:text-white w-full',
              pill: { off: 'rounded-md', on: 'rounded-full' },
            },
            pill: { off: 'rounded-lg', on: 'rounded-full' },
            size: {
              xs: 'text-xs px-2 py-1',
              sm: 'text-sm px-3 py-1.5',
              md: 'text-sm px-4 py-2',
              lg: 'text-base px-5 py-2.5',
              xl: 'text-base px-6 py-3',
            },
          },
          buttonGroup: {
            base: 'inline-flex',
            position: {
              none: 'focus:ring-2',
              start: 'rounded-r-none',
              middle: 'rounded-none border-l-0 pl-0',
              end: 'rounded-l-none border-l-0 pl-0',
            },
          },
          card: {
            root: {
              base: 'flex rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800',
              children: 'flex h-full flex-col justify-center gap-4 p-6',
              horizontal: { off: 'flex-col', on: 'flex-col md:max-w-xl md:flex-row' },
              href: 'hover:bg-gray-100 dark:hover:bg-gray-700',
            },
            img: {
              base: '',
              horizontal: {
                off: 'rounded-t-lg',
                on: 'h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg',
              },
            },
          },
          carousel: {
            root: {
              base: 'relative h-full w-full',
              leftControl:
                'absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none',
              rightControl:
                'absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none',
            },
            indicators: {
              active: {
                off: 'bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800',
                on: 'bg-white dark:bg-gray-800',
              },
              base: 'h-3 w-3 rounded-full',
              wrapper: 'absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3',
            },
            item: {
              base: 'absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
              wrapper: 'w-full flex-shrink-0 transform cursor-grab snap-center',
            },
            control: {
              base: 'inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10',
              icon: 'h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6',
            },
            scrollContainer: {
              base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg',
              snap: 'snap-x',
            },
          },
          checkbox: {
            root: {
              base: 'h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-cyan-600 text-cyan-600',
            },
          },
          datepicker: {
            root: { base: 'relative' },
            popup: {
              root: {
                base: 'absolute top-10 z-50 block pt-2',
                inline: 'relative top-0 z-auto',
                inner: 'inline-block rounded-lg bg-white p-4 shadow-lg dark:bg-gray-700',
              },
              header: {
                base: '',
                title: 'px-2 py-3 text-center font-semibold text-gray-900 dark:text-white',
                selectors: {
                  base: 'flex justify-between mb-2',
                  button: {
                    base: 'text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch',
                    prev: '',
                    next: '',
                    view: '',
                  },
                },
              },
              view: { base: 'p-1' },
              footer: {
                base: 'flex mt-2 space-x-2',
                button: {
                  base: 'w-full rounded-lg px-5 py-2 text-center text-sm font-medium focus:ring-4 focus:ring-cyan-300',
                  today:
                    'bg-cyan-700 text-white hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700',
                  clear:
                    'border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
                },
              },
            },
            views: {
              days: {
                header: {
                  base: 'grid grid-cols-7 mb-1',
                  title:
                    'dow h-6 text-center text-sm font-medium leading-6 text-gray-500 dark:text-gray-400',
                },
                items: {
                  base: 'grid w-64 grid-cols-7',
                  item: {
                    base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 ',
                    selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
                    disabled: 'text-gray-500',
                  },
                },
              },
              months: {
                items: {
                  base: 'grid w-64 grid-cols-4',
                  item: {
                    base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600',
                    selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
                    disabled: 'text-gray-500',
                  },
                },
              },
              years: {
                items: {
                  base: 'grid w-64 grid-cols-4',
                  item: {
                    base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
                    selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
                    disabled: 'text-gray-500',
                  },
                },
              },
              decades: {
                items: {
                  base: 'grid w-64 grid-cols-4',
                  item: {
                    base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9  hover:bg-gray-100 dark:text-white dark:hover:bg-gray-600 text-gray-900',
                    selected: 'bg-cyan-700 text-white hover:bg-cyan-600',
                    disabled: 'text-gray-500',
                  },
                },
              },
            },
          },
          darkThemeToggle: {
            root: {
              base: 'rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700',
              icon: 'h-5 w-5',
            },
          },
          dropdown: {
            arrowIcon: 'ml-2 h-4 w-4',
            content: 'py-1 focus:outline-none',
            floating: {
              animation: 'transition-opacity',
              arrow: {
                base: 'absolute z-10 h-2 w-2 rotate-45',
                style: {
                  dark: 'bg-gray-900 dark:bg-gray-700',
                  light: 'bg-white',
                  auto: 'bg-white dark:bg-gray-700',
                },
                placement: '-4px',
              },
              base: 'z-10 w-fit rounded divide-y divide-gray-100 shadow focus:outline-none',
              content: 'py-1 text-sm text-gray-700 dark:text-gray-200',
              divider: 'my-1 h-px bg-gray-100 dark:bg-gray-600',
              header: 'block py-2 px-4 text-sm text-gray-700 dark:text-gray-200',
              hidden: 'invisible opacity-0',
              item: {
                container: '',
                base: 'flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer w-full hover:bg-gray-100 focus:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
                icon: 'mr-2 h-4 w-4',
              },
              style: {
                dark: 'bg-gray-900 text-white dark:bg-gray-700',
                light: 'border border-gray-200 bg-white text-gray-900',
                auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
              },
              target: 'w-fit',
            },
            inlineWrapper: 'flex items-center',
          },
          fileInput: {
            root: { base: 'flex' },
            field: {
              base: 'relative w-full',
              input: {
                base: 'rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50',
                sizes: { sm: 'sm:text-xs', md: 'text-sm', lg: 'sm:text-md' },
                colors: {
                  gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                  info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                  failure:
                    'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
                  warning:
                    'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
                  success:
                    'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
                },
              },
            },
          },
          footer: {
            root: {
              base: 'w-full rounded-lg bg-white shadow dark:bg-gray-800 md:flex md:items-center md:justify-between',
              container: 'w-full p-6',
              bgDark: 'bg-gray-800',
            },
            groupLink: {
              base: 'flex flex-wrap text-sm text-gray-500 dark:text-white',
              link: { base: 'last:mr-0 md:mr-6', href: 'hover:underline' },
              col: 'flex-col space-y-4',
            },
            icon: { base: 'text-gray-500 dark:hover:text-white', size: 'h-5 w-5' },
            title: { base: 'mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white' },
            divider: {
              base: 'w-full my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8',
            },
            copyright: {
              base: 'text-sm text-gray-500 dark:text-gray-400 sm:text-center',
              href: 'ml-1 hover:underline',
              span: 'ml-1',
            },
            brand: {
              base: 'mb-4 flex items-center sm:mb-0',
              img: 'mr-3 h-8',
              span: 'self-center whitespace-nowrap text-2xl font-semibold text-gray-800 dark:text-white',
            },
          },
          helperText: {
            root: {
              base: 'mt-2 text-sm',
              colors: {
                gray: 'text-gray-500 dark:text-gray-400',
                info: 'text-cyan-700 dark:text-cyan-800',
                success: 'text-green-600 dark:text-green-500',
                failure: 'text-red-600 dark:text-red-500',
                warning: 'text-yellow-500 dark:text-yellow-600',
              },
            },
          },
          label: {
            root: {
              base: 'text-sm font-medium',
              disabled: 'opacity-50',
              colors: {
                default: 'text-gray-900 dark:text-gray-300',
                info: 'text-cyan-500 dark:text-cyan-600',
                failure: 'text-red-700 dark:text-red-500',
                warning: 'text-yellow-500 dark:text-yellow-600',
                success: 'text-green-700 dark:text-green-500',
              },
            },
          },
          listGroup: {
            root: {
              base: 'list-none rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-left',
            },
            item: {
              base: '[&>*]:first:rounded-t-lg [&>*]:last:rounded-b-lg [&>*]:last:border-b-0',
              link: {
                base: 'flex w-full border-b border-gray-200 py-2 px-4 dark:border-gray-600',
                active: {
                  off: 'hover:bg-gray-100 hover:text-cyan-700 focus:text-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500',
                  on: 'bg-cyan-700 text-white dark:bg-gray-800',
                },
                href: { off: '', on: '' },
                icon: 'mr-2 h-4 w-4 fill-current',
              },
            },
          },
          modal: {
            root: {
              base: 'fixed top-0 right-0 left-0 z-50 h-modal h-screen overflow-y-auto overflow-x-hidden md:inset-0 md:h-full',
              show: { on: 'flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80', off: 'hidden' },
              sizes: {
                sm: 'max-w-sm',
                md: 'max-w-md',
                lg: 'max-w-lg',
                xl: 'max-w-xl',
                '2xl': 'max-w-2xl',
                '3xl': 'max-w-3xl',
                '4xl': 'max-w-4xl',
                '5xl': 'max-w-5xl',
                '6xl': 'max-w-6xl',
                '7xl': 'max-w-7xl',
              },
              positions: {
                'top-left': 'items-start justify-start',
                'top-center': 'items-start justify-center',
                'top-right': 'items-start justify-end',
                'center-left': 'items-center justify-start',
                center: 'items-center justify-center',
                'center-right': 'items-center justify-end',
                'bottom-right': 'items-end justify-end',
                'bottom-center': 'items-end justify-center',
                'bottom-left': 'items-end justify-start',
              },
            },
            content: {
              base: 'relative h-full w-full p-4 md:h-auto',
              inner:
                'relative rounded-lg bg-white shadow dark:bg-gray-700 flex flex-col max-h-[90vh]',
            },
            body: { base: 'p-6 flex-1 overflow-auto', popup: 'pt-0' },
            header: {
              base: 'flex items-start justify-between rounded-t dark:border-gray-600 border-b p-5',
              popup: 'p-2 border-b-0',
              title: 'text-xl font-medium text-gray-900 dark:text-white',
              close: {
                base: 'ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white',
                icon: 'h-5 w-5',
              },
            },
            footer: {
              base: 'flex items-center space-x-2 rounded-b border-gray-200 p-6 dark:border-gray-600',
              popup: 'border-t',
            },
          },
          navbar: {
            root: {
              base: 'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
              rounded: { on: 'rounded', off: '' },
              bordered: { on: 'border', off: '' },
              inner: {
                base: 'mx-auto flex flex-wrap items-center justify-between',
                fluid: { on: '', off: 'container' },
              },
            },
            brand: { base: 'flex items-center' },
            collapse: {
              base: 'w-full md:block md:w-auto',
              list: 'mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium',
              hidden: { on: 'hidden', off: '' },
            },
            link: {
              base: 'block py-2 pr-4 pl-3 md:p-0',
              active: {
                on: 'bg-cyan-700 text-white dark:text-white md:bg-transparent md:text-cyan-700',
                off: 'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-cyan-700 md:dark:hover:bg-transparent md:dark:hover:text-white',
              },
              disabled: {
                on: 'text-gray-400 hover:cursor-not-allowed dark:text-gray-600',
                off: '',
              },
            },
            toggle: {
              base: 'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden',
              icon: 'h-6 w-6 shrink-0',
            },
          },
          pagination: {
            base: '',
            layout: {
              table: {
                base: 'text-sm text-gray-700 dark:text-gray-400',
                span: 'font-semibold text-gray-900 dark:text-white',
              },
            },
            pages: {
              base: 'xs:mt-0 mt-2 inline-flex items-center -space-x-px',
              showIcon: 'inline-flex',
              previous: {
                base: 'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
                icon: 'h-5 w-5',
              },
              next: {
                base: 'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
                icon: 'h-5 w-5',
              },
              selector: {
                base: 'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white',
                active:
                  'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
                disabled: 'opacity-50 cursor-normal',
              },
            },
          },
          progress: {
            base: 'w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700',
            label: 'mb-1 flex justify-between font-medium dark:text-white',
            bar: 'rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100 space-x-2',
            color: {
              dark: 'bg-gray-600 dark:bg-gray-300',
              blue: 'bg-cyan-600',
              red: 'bg-red-600 dark:bg-red-500',
              green: 'bg-green-600 dark:bg-green-500',
              yellow: 'bg-yellow-400',
              indigo: 'bg-indigo-600 dark:bg-indigo-500',
              purple: 'bg-purple-600 dark:bg-purple-500',
            },
            size: { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4', xl: 'h-6' },
          },
          radio: {
            root: {
              base: 'h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600',
            },
          },
          rangeSlider: {
            root: { base: 'flex' },
            field: {
              base: 'relative w-full',
              input: {
                base: 'w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700',
                sizes: { sm: 'h-1 range-sm', md: 'h-2', lg: 'h-3 range-lg' },
              },
            },
          },
          rating: {
            root: { base: 'flex items-center' },
            advanced: {
              base: 'flex items-center',
              label: 'text-sm font-medium text-cyan-600 dark:text-cyan-500',
              progress: {
                base: 'mx-4 h-5 w-2/4 rounded bg-gray-200 dark:bg-gray-700',
                fill: 'h-5 rounded bg-yellow-400',
                label: 'text-sm font-medium text-cyan-600 dark:text-cyan-500',
              },
            },
            star: {
              empty: 'text-gray-300 dark:text-gray-500',
              filled: 'text-yellow-400',
              sizes: { sm: 'w-5 h-5', md: 'w-7 h-7', lg: 'w-10 h-10' },
            },
          },
          select: {
            base: 'flex',
            addon:
              'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
            field: {
              base: 'relative w-full',
              icon: {
                base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
                svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
              },
              select: {
                base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
                withIcon: { on: 'pl-10', off: '' },
                withAddon: { on: 'rounded-r-lg', off: 'rounded-lg' },
                withShadow: { on: 'shadow-sm dark:shadow-sm-light', off: '' },
                sizes: { sm: 'p-2 sm:text-xs', md: 'p-2.5 text-sm', lg: 'sm:text-md p-4' },
                colors: {
                  gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                  info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                  failure:
                    'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
                  warning:
                    'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
                  success:
                    'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
                },
              },
            },
          },
          textInput: {
            base: 'flex',
            addon:
              'inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400',
            field: {
              base: 'relative w-full',
              icon: {
                base: 'pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3',
                svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
              },
              rightIcon: {
                base: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3',
                svg: 'h-5 w-5 text-gray-500 dark:text-gray-400',
              },
              input: {
                base: 'block w-full border disabled:cursor-not-allowed disabled:opacity-50',
                sizes: { sm: 'p-2 sm:text-xs', md: 'p-2.5 text-sm', lg: 'sm:text-md p-4' },
                colors: {
                  gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                  info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
                  failure:
                    'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
                  warning:
                    'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
                  success:
                    'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
                },
                withRightIcon: { on: 'pr-10', off: '' },
                withIcon: { on: 'pl-10', off: '' },
                withAddon: { on: 'rounded-r-lg', off: 'rounded-lg' },
                withShadow: { on: 'shadow-sm dark:shadow-sm-light', off: '' },
              },
            },
          },
          textarea: {
            base: 'block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50',
            colors: {
              gray: 'bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
              info: 'border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500',
              failure:
                'border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500',
              warning:
                'border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500',
              success:
                'border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500',
            },
            withShadow: { on: 'shadow-sm dark:shadow-sm-light', off: '' },
          },
          toggleSwitch: {
            root: {
              base: 'group relative flex items-center rounded-lg focus:outline-none',
              active: { on: 'cursor-pointer', off: 'cursor-not-allowed opacity-50' },
              label: 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300',
            },
            toggle: {
              base: 'toggle-bg h-6 w-11 rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25',
              checked: {
                on: 'after:translate-x-full after:border-white',
                off: 'border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700',
                color: {
                  blue: ' bg-cyan-700 border-cyan-700',
                  dark: 'bg-dark-700 border-dark-900',
                  failure: 'bg-red-700 border-red-900',
                  gray: 'bg-gray-500 border-gray-600',
                  green: 'bg-green-600 border-green-700',
                  light: 'bg-light-700 border-light-900',
                  red: 'bg-red-700 border-red-900',
                  purple: 'bg-purple-700 border-purple-900',
                  success: 'bg-green-500 border-green-500',
                  yellow: 'bg-yellow-400 border-yellow-400',
                  warning: 'bg-yellow-600 border-yellow-600',
                  cyan: 'bg-cyan-500 border-cyan-500',
                  lime: 'bg-lime-400 border-lime-400',
                  indigo: 'bg-indigo-400 border-indigo-400',
                  teal: 'bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4',
                  info: 'bg-cyan-600 border-cyan-600',
                  pink: 'bg-pink-600 border-pink-600',
                },
              },
            },
          },
          sidebar: {
            root: {
              base: 'h-full',
              collapsed: { on: 'w-16', off: 'w-64' },
              inner:
                'h-full overflow-y-auto overflow-x-hidden rounded bg-gray-50 py-4 px-3 dark:bg-gray-800',
            },
            collapse: {
              button:
                'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
              icon: {
                base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
                open: { off: '', on: 'text-gray-900' },
              },
              label: {
                base: 'ml-3 flex-1 whitespace-nowrap text-left',
                icon: {
                  base: 'h-6 w-6 transition ease-in-out delay-0',
                  open: { on: 'rotate-180', off: '' },
                },
              },
              list: 'space-y-2 py-2',
            },
            cta: {
              base: 'mt-6 rounded-lg p-4 bg-gray-100 dark:bg-gray-700',
              color: {
                blue: 'bg-cyan-50 dark:bg-cyan-900',
                dark: 'bg-dark-50 dark:bg-dark-900',
                failure: 'bg-red-50 dark:bg-red-900',
                gray: 'bg-alternative-50 dark:bg-alternative-900',
                green: 'bg-green-50 dark:bg-green-900',
                light: 'bg-light-50 dark:bg-light-900',
                red: 'bg-red-50 dark:bg-red-900',
                purple: 'bg-purple-50 dark:bg-purple-900',
                success: 'bg-green-50 dark:bg-green-900',
                yellow: 'bg-yellow-50 dark:bg-yellow-900',
                warning: 'bg-yellow-50 dark:bg-yellow-900',
              },
            },
            item: {
              base: 'flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
              active: 'bg-gray-100 dark:bg-gray-700',
              collapsed: {
                insideCollapse: 'group w-full pl-8 transition duration-75',
                noIcon: 'font-bold',
              },
              content: { base: 'px-3 flex-1 whitespace-nowrap' },
              icon: {
                base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
                active: 'text-gray-700 dark:text-gray-100',
              },
              label: '',
              listItem: '',
            },
            items: '',
            itemGroup:
              'mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700',
            logo: {
              base: 'mb-5 flex items-center pl-2.5',
              collapsed: {
                on: 'hidden',
                off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
              },
              img: 'mr-3 h-6 sm:h-7',
            },
          },
          spinner: {
            base: 'inline animate-spin text-gray-200',
            color: {
              failure: 'fill-red-600',
              gray: 'fill-gray-600',
              info: 'fill-cyan-600',
              pink: 'fill-pink-600',
              purple: 'fill-purple-600',
              success: 'fill-green-500',
              warning: 'fill-yellow-400',
            },
            light: {
              off: {
                base: 'dark:text-gray-600',
                color: {
                  failure: '',
                  gray: 'dark:fill-gray-300',
                  info: '',
                  pink: '',
                  purple: '',
                  success: '',
                  warning: '',
                },
              },
              on: {
                base: '',
                color: {
                  failure: '',
                  gray: '',
                  info: '',
                  pink: '',
                  purple: '',
                  success: '',
                  warning: '',
                },
              },
            },
            size: { xs: 'w-3 h-3', sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-10 h-10' },
          },
          tab: {
            base: 'flex flex-col gap-2',
            tablist: {
              base: 'flex text-center',
              styles: {
                default: 'flex-wrap border-b border-gray-200 dark:border-gray-700',
                underline: 'flex-wrap -mb-px border-b border-gray-200 dark:border-gray-700',
                pills: 'flex-wrap font-medium text-sm text-gray-500 dark:text-gray-400 space-x-2',
                fullWidth:
                  'w-full text-sm font-medium divide-x divide-gray-200 shadow grid grid-flow-col dark:divide-gray-700 dark:text-gray-400 rounded-none',
              },
              tabitem: {
                base: 'flex items-center justify-center p-4 rounded-t-lg text-sm font-medium first:ml-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500 focus:ring-4 focus:ring-cyan-300 focus:outline-none',
                styles: {
                  default: {
                    base: 'rounded-t-lg',
                    active: {
                      on: 'bg-gray-100 text-cyan-600 dark:bg-gray-800 dark:text-cyan-500',
                      off: 'text-gray-500 hover:bg-gray-50 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800  dark:hover:text-gray-300',
                    },
                  },
                  underline: {
                    base: 'rounded-t-lg',
                    active: {
                      on: 'text-cyan-600 rounded-t-lg border-b-2 border-cyan-600 active dark:text-cyan-500 dark:border-cyan-500',
                      off: 'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300',
                    },
                  },
                  pills: {
                    base: '',
                    active: {
                      on: 'rounded-lg bg-cyan-600 text-white',
                      off: 'rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white',
                    },
                  },
                  fullWidth: {
                    base: 'ml-0 first:ml-0 w-full rounded-none flex',
                    active: {
                      on: 'p-4 text-gray-900 bg-gray-100 active dark:bg-gray-700 dark:text-white rounded-none',
                      off: 'bg-white hover:text-gray-700 hover:bg-gray-50 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-none',
                    },
                  },
                },
                icon: 'mr-2 h-5 w-5',
              },
            },
            tabpanel: 'py-3',
          },
          table: {
            root: {
              base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400',
              shadow:
                'absolute bg-white dark:bg-black w-full h-full top-0 left-0 rounded-lg drop-shadow-md -z-10',
              wrapper: 'relative',
            },
            body: {
              base: 'group/body',
              cell: {
                base: 'group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg px-6 py-4',
              },
            },
            head: {
              base: 'group/head text-xs uppercase text-gray-700 dark:text-gray-400',
              cell: {
                base: 'group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg bg-gray-50 dark:bg-gray-700 px-6 py-3',
              },
            },
            row: {
              base: 'group/row',
              hovered: 'hover:bg-gray-50 dark:hover:bg-gray-600',
              striped: 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
            },
          },
          timeline: {
            root: {
              direction: {
                horizontal: 'items-base sm:flex',
                vertical: 'relative border-l border-gray-200 dark:border-gray-700',
              },
            },
            item: {
              root: { horizontal: 'relative mb-6 sm:mb-0', vertical: 'mb-10 ml-6' },
              content: {
                root: { base: 'mt-3 sm:pr-8' },
                body: 'mb-4 text-base font-normal text-gray-500 dark:text-gray-400',
                time: 'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
                title: 'text-lg font-semibold text-gray-900 dark:text-white',
              },
              point: {
                horizontal: 'flex items-center',
                line: 'hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex',
                marker: {
                  base: {
                    horizontal:
                      'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
                    vertical:
                      'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
                  },
                  icon: {
                    base: 'h-3 w-3 text-cyan-600 dark:text-cyan-300',
                    wrapper:
                      'absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900',
                  },
                },
                vertical: '',
              },
            },
          },
          toast: {
            root: {
              base: 'flex w-full max-w-xs items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400',
              closed: 'opacity-0 ease-out',
            },
            toggle: {
              base: '-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white',
              icon: 'h-5 w-5 shrink-0',
            },
          },
          tooltip: {
            target: 'w-fit',
            animation: 'transition-opacity',
            arrow: {
              base: 'absolute z-10 h-2 w-2 rotate-45',
              style: {
                dark: 'bg-gray-900 dark:bg-gray-700',
                light: 'bg-white',
                auto: 'bg-white dark:bg-gray-700',
              },
              placement: '-4px',
            },
            base: 'absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm',
            hidden: 'invisible opacity-0',
            style: {
              dark: 'bg-gray-900 text-white dark:bg-gray-700',
              light: 'border border-gray-200 bg-white text-gray-900',
              auto: 'border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
            },
            content: 'relative z-20',
          },
        },
        wn = (0, e.createContext)({ theme: xn }),
        kn = function () {
          return (0, e.useContext)(wn);
        };
      !(function (e) {
        (e[(e.Days = 0)] = 'Days'),
          (e[(e.Months = 1)] = 'Months'),
          (e[(e.Years = 2)] = 'Years'),
          (e[(e.Decades = 3)] = 'Decades');
      })(bn || (bn = {})),
        (function (e) {
          (e[(e.Saturday = 0)] = 'Saturday'),
            (e[(e.Sunday = 1)] = 'Sunday'),
            (e[(e.Monday = 2)] = 'Monday');
        })(yn || (yn = {}));
      var Nn = function (e, t, r) {
          var n = new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime();
          if (t && r) {
            var o = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
              a = new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
            return n >= o && n <= a;
          }
          return t
            ? n >= new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime()
            : !r || n <= new Date(r.getFullYear(), r.getMonth(), r.getDate()).getTime();
        },
        Sn = function (e, t) {
          return (
            (e = new Date(e.getFullYear(), e.getMonth(), e.getDate())),
            (t = new Date(t.getFullYear(), t.getMonth(), t.getDate())),
            e.getTime() === t.getTime()
          );
        },
        En = function (e, t) {
          var r = new Date(e);
          return r.setDate(r.getDate() + t), r;
        },
        Cn = function (e, t) {
          var r = new Date(e);
          return r.setFullYear(r.getFullYear() + t), r;
        },
        jn = function (e, t, r) {
          var n = { day: 'numeric', month: 'long', year: 'numeric' };
          return r && (n = r), new Intl.DateTimeFormat(e, n).format(t);
        },
        Rn = function (e, t) {
          var r = e.getFullYear();
          return Math.floor(r / t) * t;
        },
        Tn = (0, e.createContext)(void 0);
      function Pn() {
        var t = (0, e.useContext)(Tn);
        if (!t)
          throw new Error(
            'useDatePickerContext should be used within the DatePickerContext provider!',
          );
        return t;
      }
      function On(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      function Ln(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return u(e);
          })(e) ||
          On(e) ||
          c(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
            );
          })()
        );
      }
      var _n = function (e) {
          var t = e.theme,
            r = void 0 === t ? {} : t,
            n = Er(kn().theme.datepicker.views.days, r),
            o = Pn(),
            a = o.weekStart,
            i = o.minDate,
            l = o.maxDate,
            s = o.viewDate,
            u = o.selectedDate,
            c = o.changeSelectedDate,
            d = o.language,
            f = (function (e, t) {
              for (
                var r = [],
                  n = new Date(),
                  o = new Intl.DateTimeFormat(e, { weekday: 'short' }),
                  a = 0;
                a < 7;
                a++
              ) {
                var i = (a + t) % 7;
                n.setDate(i + 1);
                var l = o.format(n);
                r.push(l.slice(0, 2).charAt(0).toUpperCase() + l.slice(1, 3));
              }
              return r;
            })(d, a),
            p = (function (e, t) {
              var r = new Date(e.getFullYear(), e.getMonth(), 1),
                n = r.getDay();
              return En(r, -(n - t + 7) % 7);
            })(s, a);
          return (0, gt.jsxs)(gt.Fragment, {
            children: [
              (0, gt.jsx)('div', {
                className: n.header.base,
                children: f.map(function (e, t) {
                  return (0, gt.jsx)('span', { className: n.header.title, children: e }, t);
                }),
              }),
              (0, gt.jsx)('div', {
                className: n.items.base,
                children: Ln(Array(42)).map(function (e, t) {
                  var r = En(p, t),
                    o = jn(d, r, { day: 'numeric' }),
                    a = Sn(u, r),
                    s = !Nn(r, i, l);
                  return (0, gt.jsx)(
                    'button',
                    {
                      disabled: s,
                      type: 'button',
                      className: kr(
                        n.items.item.base,
                        a && n.items.item.selected,
                        s && n.items.item.disabled,
                      ),
                      onClick: function () {
                        s || c(r, !0);
                      },
                      children: o,
                    },
                    t,
                  );
                }),
              }),
            ],
          });
        },
        In = function (e) {
          var t = e.theme,
            r = void 0 === t ? {} : t,
            n = Er(kn().theme.datepicker.views.decades, r),
            o = Pn(),
            a = o.selectedDate,
            i = o.viewDate,
            l = o.setViewDate,
            s = o.setView;
          return (0, gt.jsx)('div', {
            className: n.items.base,
            children: Ln(Array(12)).map(function (e, t) {
              var r = Rn(i, 100) - 10 + 10 * t,
                o = new Date(r, 0, 1),
                u = Cn(o, 9),
                c = (function (e, t) {
                  var r = e.getFullYear();
                  return r >= t && r <= t + 9;
                })(i, r),
                d = !Nn(i, o, u);
              return (0, gt.jsx)(
                'button',
                {
                  disabled: d,
                  type: 'button',
                  className: kr(
                    n.items.item.base,
                    c && n.items.item.selected,
                    d && n.items.item.disabled,
                  ),
                  onClick: function () {
                    d || (l(Cn(i, r - a.getFullYear())), s(bn.Years));
                  },
                  children: r,
                },
                t,
              );
            }),
          });
        },
        Dn = function (e) {
          var t = e.theme,
            r = void 0 === t ? {} : t,
            n = Er(kn().theme.datepicker.views.months, r),
            o = Pn(),
            a = o.minDate,
            i = o.maxDate,
            l = o.selectedDate,
            s = o.viewDate,
            u = o.language,
            c = o.setViewDate,
            d = o.setView;
          return (0, gt.jsx)('div', {
            className: n.items.base,
            children: Ln(Array(12)).map(function (e, t) {
              var r = new Date(s.getTime());
              r.setMonth(t);
              var o = jn(u, r, { month: 'short' }),
                f = Sn(l, r),
                p = !Nn(r, a, i);
              return (0, gt.jsx)(
                'button',
                {
                  disabled: p,
                  type: 'button',
                  className: kr(
                    n.items.item.base,
                    f && n.items.item.selected,
                    p && n.items.item.disabled,
                  ),
                  onClick: function () {
                    p || (c(r), d(bn.Days));
                  },
                  children: o,
                },
                t,
              );
            }),
          });
        },
        zn = function (e) {
          var t = e.theme,
            r = void 0 === t ? {} : t,
            n = Er(kn().theme.datepicker.views.years, r),
            o = Pn(),
            a = o.selectedDate,
            i = o.minDate,
            l = o.maxDate,
            s = o.viewDate,
            u = o.setViewDate,
            c = o.setView;
          return (0, gt.jsx)('div', {
            className: n.items.base,
            children: Ln(Array(12)).map(function (e, t) {
              var r = Rn(s, 10) - 1 + 1 * t,
                o = new Date(s.getTime());
              o.setFullYear(r);
              var d = Sn(a, o),
                f = !Nn(o, i, l);
              return (0, gt.jsx)(
                'button',
                {
                  disabled: f,
                  type: 'button',
                  className: kr(
                    n.items.item.base,
                    d && n.items.item.selected,
                    f && n.items.item.disabled,
                  ),
                  onClick: function () {
                    f || (u(o), c(bn.Months));
                  },
                  children: r,
                },
                t,
              );
            }),
          });
        },
        Mn = [
          'title',
          'open',
          'inline',
          'autoHide',
          'showClearButton',
          'labelClearButton',
          'showTodayButton',
          'labelTodayButton',
          'defaultDate',
          'minDate',
          'maxDate',
          'language',
          'weekStart',
          'className',
          'theme',
        ];
      function An(e, t) {
        var r = ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
        if (!r) {
          if (Array.isArray(e) || (r = c(e)) || (t && e && 'number' === typeof e.length)) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var a,
          i = !0,
          l = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (i = e.done), e;
          },
          e: function (e) {
            (l = !0), (a = e);
          },
          f: function () {
            try {
              i || null == r.return || r.return();
            } finally {
              if (l) throw a;
            }
          },
        };
      }
      function Fn(e) {
        return Wn(e) ? (e.nodeName || '').toLowerCase() : '#document';
      }
      function Bn(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
      }
      function Un(e) {
        var t;
        return null == (t = (Wn(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function Wn(e) {
        return e instanceof Node || e instanceof Bn(e).Node;
      }
      function Hn(e) {
        return e instanceof Element || e instanceof Bn(e).Element;
      }
      function Vn(e) {
        return e instanceof HTMLElement || e instanceof Bn(e).HTMLElement;
      }
      function $n(e) {
        return (
          'undefined' !== typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof Bn(e).ShadowRoot)
        );
      }
      function qn(e) {
        var t = Xn(e),
          r = t.overflow,
          n = t.overflowX,
          o = t.overflowY,
          a = t.display;
        return (
          /auto|scroll|overlay|hidden|clip/.test(r + o + n) && !['inline', 'contents'].includes(a)
        );
      }
      function Gn(e) {
        return ['table', 'td', 'th'].includes(Fn(e));
      }
      function Kn(e) {
        var t = Qn(),
          r = Xn(e);
        return (
          'none' !== r.transform ||
          'none' !== r.perspective ||
          (!!r.containerType && 'normal' !== r.containerType) ||
          (!t && !!r.backdropFilter && 'none' !== r.backdropFilter) ||
          (!t && !!r.filter && 'none' !== r.filter) ||
          ['transform', 'perspective', 'filter'].some(function (e) {
            return (r.willChange || '').includes(e);
          }) ||
          ['paint', 'layout', 'strict', 'content'].some(function (e) {
            return (r.contain || '').includes(e);
          })
        );
      }
      function Qn() {
        return (
          !('undefined' === typeof CSS || !CSS.supports) &&
          CSS.supports('-webkit-backdrop-filter', 'none')
        );
      }
      function Yn(e) {
        return ['html', 'body', '#document'].includes(Fn(e));
      }
      function Xn(e) {
        return Bn(e).getComputedStyle(e);
      }
      function Jn(e) {
        return Hn(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function Zn(e) {
        if ('html' === Fn(e)) return e;
        var t = e.assignedSlot || e.parentNode || ($n(e) && e.host) || Un(e);
        return $n(t) ? t.host : t;
      }
      function eo(e) {
        var t = Zn(e);
        return Yn(t)
          ? e.ownerDocument
            ? e.ownerDocument.body
            : e.body
          : Vn(t) && qn(t)
          ? t
          : eo(t);
      }
      function to(e, t, r) {
        var n;
        void 0 === t && (t = []), void 0 === r && (r = !0);
        var o = eo(e),
          a = o === (null == (n = e.ownerDocument) ? void 0 : n.body),
          i = Bn(o);
        return a
          ? t.concat(
              i,
              i.visualViewport || [],
              qn(o) ? o : [],
              i.frameElement && r ? to(i.frameElement) : [],
            )
          : t.concat(o, to(o));
      }
      (function (t) {
        var r = t.title,
          n = t.open,
          o = t.inline,
          a = void 0 !== o && o,
          i = t.autoHide,
          l = void 0 === i || i,
          s = t.showClearButton,
          u = void 0 === s || s,
          c = t.labelClearButton,
          d = void 0 === c ? 'Clear' : c,
          p = t.showTodayButton,
          h = void 0 === p || p,
          g = t.labelTodayButton,
          m = void 0 === g ? 'Today' : g,
          v = t.defaultDate,
          b = void 0 === v ? new Date() : v,
          y = t.minDate,
          x = t.maxDate,
          w = t.language,
          k = void 0 === w ? 'en' : w,
          N = t.weekStart,
          S = void 0 === N ? yn.Sunday : N,
          E = t.className,
          C = t.theme,
          j = void 0 === C ? {} : C,
          R = ht(t, Mn),
          T = Er(kn().theme.datepicker, j);
        b = (function (e, t, r) {
          return Nn(e, t, r) || (t && e < t ? (e = t) : r && e > r && (e = r)), e;
        })(b, y, x);
        var P = f((0, e.useState)(n), 2),
          O = P[0],
          L = P[1],
          _ = f((0, e.useState)(bn.Days), 2),
          I = _[0],
          D = _[1],
          z = f((0, e.useState)(b), 2),
          M = z[0],
          A = z[1],
          F = f((0, e.useState)(b), 2),
          B = F[0],
          U = F[1],
          W = (0, e.useRef)(null),
          H = (0, e.useRef)(null),
          V = function (e, t) {
            A(e), l && I === bn.Days && 1 == t && !a && L(!1);
          },
          $ = function (e, t, r) {
            switch (e) {
              case bn.Days:
                return new Date(
                  (function (e, t) {
                    var r = new Date(e);
                    return r.setMonth(r.getMonth() + t), r;
                  })(t, r),
                );
              case bn.Months:
                return new Date(Cn(t, r));
              case bn.Years:
                return new Date(Cn(t, 10 * r));
              case bn.Decades:
                return new Date(Cn(t, 100 * r));
              default:
                return new Date(Cn(t, 10 * r));
            }
          };
        return (
          (0, e.useEffect)(
            function () {
              var e = function (e) {
                var t,
                  r,
                  n =
                    null === H || void 0 === H || null === (t = H.current) || void 0 === t
                      ? void 0
                      : t.contains(e.target),
                  o =
                    null === W || void 0 === W || null === (r = W.current) || void 0 === r
                      ? void 0
                      : r.contains(e.target);
                n || o || L(!1);
              };
              return (
                document.addEventListener('mousedown', e),
                function () {
                  document.removeEventListener('mousedown', e);
                }
              );
            },
            [W, H, L],
          ),
          (0, gt.jsx)(Tn.Provider, {
            value: {
              language: k,
              minDate: y,
              maxDate: x,
              weekStart: S,
              isOpen: O,
              setIsOpen: L,
              view: I,
              setView: D,
              viewDate: B,
              setViewDate: U,
              selectedDate: M,
              setSelectedDate: A,
              changeSelectedDate: V,
            },
            children: (0, gt.jsxs)('div', {
              className: kr(T.root.base, E),
              children: [
                !a &&
                  (0, gt.jsx)(
                    Tu,
                    pt(
                      {
                        theme: T.root.input,
                        icon: Et,
                        ref: W,
                        onFocus: function () {
                          Sn(B, M) || U(M), L(!0);
                        },
                        value: M && jn(k, M),
                        readOnly: !0,
                      },
                      R,
                    ),
                  ),
                (O || a) &&
                  (0, gt.jsx)('div', {
                    ref: H,
                    className: kr(T.popup.root.base, a && T.popup.root.inline),
                    children: (0, gt.jsxs)('div', {
                      className: T.popup.root.inner,
                      children: [
                        (0, gt.jsxs)('div', {
                          className: T.popup.header.base,
                          children: [
                            r &&
                              (0, gt.jsx)('div', { className: T.popup.header.title, children: r }),
                            (0, gt.jsxs)('div', {
                              className: T.popup.header.selectors.base,
                              children: [
                                (0, gt.jsx)('button', {
                                  className: kr(
                                    T.popup.header.selectors.button.base,
                                    T.popup.header.selectors.button.prev,
                                  ),
                                  onClick: function () {
                                    return U($(I, B, -1));
                                  },
                                  children: (0, gt.jsx)(Nt, {}),
                                }),
                                (0, gt.jsx)('button', {
                                  className: kr(
                                    T.popup.header.selectors.button.base,
                                    T.popup.header.selectors.button.view,
                                  ),
                                  onClick: function () {
                                    return D(
                                      (function () {
                                        switch (I) {
                                          case bn.Days:
                                            return bn.Months;
                                          case bn.Months:
                                            return bn.Years;
                                          case bn.Years:
                                            return bn.Decades;
                                        }
                                        return I;
                                      })(),
                                    );
                                  },
                                  children: (function () {
                                    switch (I) {
                                      case bn.Decades:
                                        return ''.concat(Rn(B, 100), ' - ').concat(Rn(B, 100) + 90);
                                      case bn.Years:
                                        return ''.concat(Rn(B, 10), ' - ').concat(Rn(B, 10) + 9);
                                      case bn.Months:
                                        return jn(k, B, { year: 'numeric' });
                                      case bn.Days:
                                      default:
                                        return jn(k, B, { month: 'long', year: 'numeric' });
                                    }
                                  })(),
                                }),
                                (0, gt.jsx)('button', {
                                  className: kr(
                                    T.popup.header.selectors.button.base,
                                    T.popup.header.selectors.button.next,
                                  ),
                                  onClick: function () {
                                    return U($(I, B, 1));
                                  },
                                  children: (0, gt.jsx)(St, {}),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, gt.jsx)('div', {
                          className: T.popup.view.base,
                          children: (function (e) {
                            switch (e) {
                              case bn.Decades:
                                return (0, gt.jsx)(In, {});
                              case bn.Years:
                                return (0, gt.jsx)(zn, {});
                              case bn.Months:
                                return (0, gt.jsx)(Dn, {});
                              case bn.Days:
                              default:
                                return (0, gt.jsx)(_n, {});
                            }
                          })(I),
                        }),
                        (u || h) &&
                          (0, gt.jsxs)('div', {
                            className: T.popup.footer.base,
                            children: [
                              h &&
                                (0, gt.jsx)('button', {
                                  className: kr(
                                    T.popup.footer.button.base,
                                    T.popup.footer.button.today,
                                  ),
                                  onClick: function () {
                                    var e = new Date();
                                    V(e, !0), U(e);
                                  },
                                  children: m,
                                }),
                              u &&
                                (0, gt.jsx)('button', {
                                  className: kr(
                                    T.popup.footer.button.base,
                                    T.popup.footer.button.clear,
                                  ),
                                  onClick: function () {
                                    V(b, !0), b && U(b);
                                  },
                                  children: d,
                                }),
                            ],
                          }),
                      ],
                    }),
                  }),
              ],
            }),
          })
        );
      }).displayName = 'Datepicker';
      var ro = ['start', 'end'],
        no = ['top', 'right', 'bottom', 'left'].reduce(function (e, t) {
          return e.concat(t, t + '-' + ro[0], t + '-' + ro[1]);
        }, []),
        oo = Math.min,
        ao = Math.max,
        io = Math.round,
        lo = Math.floor,
        so = function (e) {
          return { x: e, y: e };
        },
        uo = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
        co = { start: 'end', end: 'start' };
      function fo(e, t, r) {
        return ao(e, oo(t, r));
      }
      function po(e, t) {
        return 'function' === typeof e ? e(t) : e;
      }
      function ho(e) {
        return e.split('-')[0];
      }
      function go(e) {
        return e.split('-')[1];
      }
      function mo(e) {
        return 'x' === e ? 'y' : 'x';
      }
      function vo(e) {
        return 'y' === e ? 'height' : 'width';
      }
      function bo(e) {
        return ['top', 'bottom'].includes(ho(e)) ? 'y' : 'x';
      }
      function yo(e) {
        return mo(bo(e));
      }
      function xo(e, t, r) {
        void 0 === r && (r = !1);
        var n = go(e),
          o = yo(e),
          a = vo(o),
          i =
            'x' === o
              ? n === (r ? 'end' : 'start')
                ? 'right'
                : 'left'
              : 'start' === n
              ? 'bottom'
              : 'top';
        return t.reference[a] > t.floating[a] && (i = So(i)), [i, So(i)];
      }
      function wo(e) {
        var t = So(e);
        return [ko(e), t, ko(t)];
      }
      function ko(e) {
        return e.replace(/start|end/g, function (e) {
          return co[e];
        });
      }
      function No(e, t, r, n) {
        var o = go(e),
          a = (function (e, t, r) {
            var n = ['left', 'right'],
              o = ['right', 'left'];
            switch (e) {
              case 'top':
              case 'bottom':
                return r ? (t ? o : n) : t ? n : o;
              case 'left':
              case 'right':
                return t ? ['top', 'bottom'] : ['bottom', 'top'];
              default:
                return [];
            }
          })(ho(e), 'start' === r, n);
        return (
          o &&
            ((a = a.map(function (e) {
              return e + '-' + o;
            })),
            t && (a = a.concat(a.map(ko)))),
          a
        );
      }
      function So(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return uo[e];
        });
      }
      function Eo(e) {
        return 'number' !== typeof e
          ? (function (e) {
              return pt({ top: 0, right: 0, bottom: 0, left: 0 }, e);
            })(e)
          : { top: e, right: e, bottom: e, left: e };
      }
      function Co(e) {
        return pt(
          pt({}, e),
          {},
          { top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height },
        );
      }
      var jo,
        Ro,
        To,
        Po = ['crossAxis', 'alignment', 'allowedPlacements', 'autoAlignment'],
        Oo = [
          'mainAxis',
          'crossAxis',
          'fallbackPlacements',
          'fallbackStrategy',
          'fallbackAxisSideDirection',
          'flipAlignment',
        ],
        Lo = ['mainAxis', 'crossAxis', 'limiter'];
      function _o(e, t, r) {
        var n,
          o = e.reference,
          a = e.floating,
          i = bo(t),
          l = yo(t),
          s = vo(l),
          u = ho(t),
          c = 'y' === i,
          d = o.x + o.width / 2 - a.width / 2,
          f = o.y + o.height / 2 - a.height / 2,
          p = o[s] / 2 - a[s] / 2;
        switch (u) {
          case 'top':
            n = { x: d, y: o.y - a.height };
            break;
          case 'bottom':
            n = { x: d, y: o.y + o.height };
            break;
          case 'right':
            n = { x: o.x + o.width, y: f };
            break;
          case 'left':
            n = { x: o.x - a.width, y: f };
            break;
          default:
            n = { x: o.x, y: o.y };
        }
        switch (go(t)) {
          case 'start':
            n[l] -= p * (r && c ? -1 : 1);
            break;
          case 'end':
            n[l] += p * (r && c ? -1 : 1);
        }
        return n;
      }
      function Io(e, t) {
        return (Ro =
          Ro ||
          l(
            a().mark(function e(t, r) {
              var n, o, i, l, s, u, c, d, f, p, h, g, m, v, b, y, x, w, k, N, S, E, C, j, R;
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        void 0 === r && (r = {}),
                        (o = t.x),
                        (i = t.y),
                        (l = t.platform),
                        (s = t.rects),
                        (u = t.elements),
                        (c = t.strategy),
                        (d = po(r, t)),
                        (f = d.boundary),
                        (p = void 0 === f ? 'clippingAncestors' : f),
                        (h = d.rootBoundary),
                        (g = void 0 === h ? 'viewport' : h),
                        (m = d.elementContext),
                        (v = void 0 === m ? 'floating' : m),
                        (b = d.altBoundary),
                        (y = void 0 !== b && b),
                        (x = d.padding),
                        (w = Eo(void 0 === x ? 0 : x)),
                        (k = 'floating' === v ? 'reference' : 'floating'),
                        (N = u[y ? k : v]),
                        (e.t0 = Co),
                        (e.t1 = l),
                        (e.next = 10),
                        null == l.isElement ? void 0 : l.isElement(N)
                      );
                    case 10:
                      if (((e.t2 = n = e.sent), null == e.t2)) {
                        e.next = 15;
                        break;
                      }
                      (e.t3 = n), (e.next = 16);
                      break;
                    case 15:
                      e.t3 = !0;
                    case 16:
                      if (!e.t3) {
                        e.next = 20;
                        break;
                      }
                      (e.t4 = N), (e.next = 26);
                      break;
                    case 20:
                      if (((e.t5 = N.contextElement), e.t5)) {
                        e.next = 25;
                        break;
                      }
                      return (
                        (e.next = 24),
                        null == l.getDocumentElement ? void 0 : l.getDocumentElement(u.floating)
                      );
                    case 24:
                      e.t5 = e.sent;
                    case 25:
                      e.t4 = e.t5;
                    case 26:
                      return (
                        (e.t6 = e.t4),
                        (e.t7 = p),
                        (e.t8 = g),
                        (e.t9 = c),
                        (e.t10 = {
                          element: e.t6,
                          boundary: e.t7,
                          rootBoundary: e.t8,
                          strategy: e.t9,
                        }),
                        (e.next = 33),
                        e.t1.getClippingRect.call(e.t1, e.t10)
                      );
                    case 33:
                      return (
                        (e.t11 = e.sent),
                        (S = (0, e.t0)(e.t11)),
                        (E =
                          'floating' === v
                            ? pt(pt({}, s.floating), {}, { x: o, y: i })
                            : s.reference),
                        (e.next = 38),
                        null == l.getOffsetParent ? void 0 : l.getOffsetParent(u.floating)
                      );
                    case 38:
                      return (
                        (C = e.sent), (e.next = 41), null == l.isElement ? void 0 : l.isElement(C)
                      );
                    case 41:
                      if (!e.sent) {
                        e.next = 50;
                        break;
                      }
                      return (e.next = 44), null == l.getScale ? void 0 : l.getScale(C);
                    case 44:
                      if (((e.t13 = e.sent), e.t13)) {
                        e.next = 47;
                        break;
                      }
                      e.t13 = { x: 1, y: 1 };
                    case 47:
                      (e.t12 = e.t13), (e.next = 51);
                      break;
                    case 50:
                      e.t12 = { x: 1, y: 1 };
                    case 51:
                      if (
                        ((j = e.t12),
                        (e.t14 = Co),
                        !l.convertOffsetParentRelativeRectToViewportRelativeRect)
                      ) {
                        e.next = 59;
                        break;
                      }
                      return (
                        (e.next = 56),
                        l.convertOffsetParentRelativeRectToViewportRelativeRect({
                          rect: E,
                          offsetParent: C,
                          strategy: c,
                        })
                      );
                    case 56:
                      (e.t15 = e.sent), (e.next = 60);
                      break;
                    case 59:
                      e.t15 = E;
                    case 60:
                      return (
                        (e.t16 = e.t15),
                        (R = (0, e.t14)(e.t16)),
                        e.abrupt('return', {
                          top: (S.top - R.top + w.top) / j.y,
                          bottom: (R.bottom - S.bottom + w.bottom) / j.y,
                          left: (S.left - R.left + w.left) / j.x,
                          right: (R.right - S.right + w.right) / j.x,
                        })
                      );
                    case 63:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
      }
      var Do = function (e) {
        return {
          name: 'arrow',
          options: e,
          fn: function (t) {
            return l(
              a().mark(function r() {
                var n,
                  o,
                  i,
                  l,
                  s,
                  u,
                  c,
                  d,
                  f,
                  p,
                  h,
                  g,
                  m,
                  v,
                  b,
                  y,
                  x,
                  w,
                  k,
                  N,
                  S,
                  E,
                  C,
                  j,
                  R,
                  T,
                  P,
                  O,
                  L,
                  _,
                  I,
                  D,
                  z,
                  M,
                  A,
                  F;
                return a().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((i = t.x),
                          (l = t.y),
                          (s = t.placement),
                          (u = t.rects),
                          (c = t.platform),
                          (d = t.elements),
                          (f = t.middlewareData),
                          (p = po(e, t) || {}),
                          (h = p.element),
                          (g = p.padding),
                          (m = void 0 === g ? 0 : g),
                          null != h)
                        ) {
                          r.next = 4;
                          break;
                        }
                        return r.abrupt('return', {});
                      case 4:
                        return (
                          (v = Eo(m)),
                          (b = { x: i, y: l }),
                          (y = yo(s)),
                          (x = vo(y)),
                          (r.next = 10),
                          c.getDimensions(h)
                        );
                      case 10:
                        return (
                          (w = r.sent),
                          (N = (k = 'y' === y) ? 'top' : 'left'),
                          (S = k ? 'bottom' : 'right'),
                          (E = k ? 'clientHeight' : 'clientWidth'),
                          (C = u.reference[x] + u.reference[y] - b[y] - u.floating[x]),
                          (j = b[y] - u.reference[y]),
                          (r.next = 19),
                          null == c.getOffsetParent ? void 0 : c.getOffsetParent(h)
                        );
                      case 19:
                        if (((R = r.sent), (T = R ? R[E] : 0), (r.t0 = !T), r.t0)) {
                          r.next = 26;
                          break;
                        }
                        return (r.next = 25), null == c.isElement ? void 0 : c.isElement(R);
                      case 25:
                        r.t0 = !r.sent;
                      case 26:
                        if (!r.t0) {
                          r.next = 28;
                          break;
                        }
                        T = d.floating[E] || u.floating[x];
                      case 28:
                        return (
                          (P = C / 2 - j / 2),
                          (O = T / 2 - w[x] / 2 - 1),
                          (L = oo(v[N], O)),
                          (_ = oo(v[S], O)),
                          (I = L),
                          (D = T - w[x] - _),
                          (z = T / 2 - w[x] / 2 + P),
                          (M = fo(I, z, D)),
                          (A =
                            !f.arrow &&
                            null != go(s) &&
                            z != M &&
                            u.reference[x] / 2 - (z < I ? L : _) - w[x] / 2 < 0),
                          (F = A ? (z < I ? z - I : z - D) : 0),
                          r.abrupt(
                            'return',
                            (dt((o = {}), y, b[y] + F),
                            dt(
                              o,
                              'data',
                              pt(
                                (dt((n = {}), y, M), dt(n, 'centerOffset', z - M - F), n),
                                A && { alignmentOffset: F },
                              ),
                            ),
                            dt(o, 'reset', A),
                            o),
                          )
                        );
                      case 39:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              }),
            )();
          },
        };
      };
      function zo(e, t, r) {
        return (
          e
            ? [].concat(
                Ln(
                  r.filter(function (t) {
                    return go(t) === e;
                  }),
                ),
                Ln(
                  r.filter(function (t) {
                    return go(t) !== e;
                  }),
                ),
              )
            : r.filter(function (e) {
                return ho(e) === e;
              })
        ).filter(function (r) {
          return !e || go(r) === e || (!!t && ko(r) !== r);
        });
      }
      function Mo(e, t) {
        return (To =
          To ||
          l(
            a().mark(function e(t, r) {
              var n, o, i, l, s, u, c, d, f, p, h, g, m, v;
              return a().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n = t.placement),
                        (o = t.platform),
                        (i = t.elements),
                        (e.next = 3),
                        null == o.isRTL ? void 0 : o.isRTL(i.floating)
                      );
                    case 3:
                      return (
                        (l = e.sent),
                        (s = ho(n)),
                        (u = go(n)),
                        (c = 'y' === bo(n)),
                        (d = ['left', 'top'].includes(s) ? -1 : 1),
                        (f = l && c ? -1 : 1),
                        (p = po(r, t)),
                        (h =
                          'number' === typeof p
                            ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
                            : pt({ mainAxis: 0, crossAxis: 0, alignmentAxis: null }, p)),
                        (g = h.mainAxis),
                        (m = h.crossAxis),
                        (v = h.alignmentAxis),
                        u && 'number' === typeof v && (m = 'end' === u ? -1 * v : v),
                        e.abrupt('return', c ? { x: m * f, y: g * d } : { x: g * d, y: m * f })
                      );
                    case 13:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            }),
          )).apply(this, arguments);
      }
      var Ao;
      function Fo(e) {
        var t = Xn(e),
          r = parseFloat(t.width) || 0,
          n = parseFloat(t.height) || 0,
          o = Vn(e),
          a = o ? e.offsetWidth : r,
          i = o ? e.offsetHeight : n,
          l = io(r) !== a || io(n) !== i;
        return l && ((r = a), (n = i)), { width: r, height: n, $: l };
      }
      function Bo(e) {
        return Hn(e) ? e : e.contextElement;
      }
      function Uo(e) {
        var t = Bo(e);
        if (!Vn(t)) return so(1);
        var r = t.getBoundingClientRect(),
          n = Fo(t),
          o = n.width,
          a = n.height,
          i = n.$,
          l = (i ? io(r.width) : r.width) / o,
          s = (i ? io(r.height) : r.height) / a;
        return (
          (l && Number.isFinite(l)) || (l = 1), (s && Number.isFinite(s)) || (s = 1), { x: l, y: s }
        );
      }
      var Wo = so(0);
      function Ho(e) {
        var t = Bn(e);
        return Qn() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Wo;
      }
      function Vo(e, t, r, n) {
        void 0 === t && (t = !1), void 0 === r && (r = !1);
        var o = e.getBoundingClientRect(),
          a = Bo(e),
          i = so(1);
        t && (n ? Hn(n) && (i = Uo(n)) : (i = Uo(e)));
        var l = (function (e, t, r) {
            return void 0 === t && (t = !1), !(!r || (t && r !== Bn(e))) && t;
          })(a, r, n)
            ? Ho(a)
            : so(0),
          s = (o.left + l.x) / i.x,
          u = (o.top + l.y) / i.y,
          c = o.width / i.x,
          d = o.height / i.y;
        if (a)
          for (var f = Bn(a), p = n && Hn(n) ? Bn(n) : n, h = f.frameElement; h && n && p !== f; ) {
            var g = Uo(h),
              m = h.getBoundingClientRect(),
              v = Xn(h),
              b = m.left + (h.clientLeft + parseFloat(v.paddingLeft)) * g.x,
              y = m.top + (h.clientTop + parseFloat(v.paddingTop)) * g.y;
            (s *= g.x),
              (u *= g.y),
              (c *= g.x),
              (d *= g.y),
              (s += b),
              (u += y),
              (h = Bn(h).frameElement);
          }
        return Co({ width: c, height: d, x: s, y: u });
      }
      function $o(e) {
        return Vo(Un(e)).left + Jn(e).scrollLeft;
      }
      function qo(e, t, r) {
        var n;
        if ('viewport' === t)
          n = (function (e, t) {
            var r = Bn(e),
              n = Un(e),
              o = r.visualViewport,
              a = n.clientWidth,
              i = n.clientHeight,
              l = 0,
              s = 0;
            if (o) {
              (a = o.width), (i = o.height);
              var u = Qn();
              (!u || (u && 'fixed' === t)) && ((l = o.offsetLeft), (s = o.offsetTop));
            }
            return { width: a, height: i, x: l, y: s };
          })(e, r);
        else if ('document' === t)
          n = (function (e) {
            var t = Un(e),
              r = Jn(e),
              n = e.ownerDocument.body,
              o = ao(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
              a = ao(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight),
              i = -r.scrollLeft + $o(e),
              l = -r.scrollTop;
            return (
              'rtl' === Xn(n).direction && (i += ao(t.clientWidth, n.clientWidth) - o),
              { width: o, height: a, x: i, y: l }
            );
          })(Un(e));
        else if (Hn(t))
          n = (function (e, t) {
            var r = Vo(e, !0, 'fixed' === t),
              n = r.top + e.clientTop,
              o = r.left + e.clientLeft,
              a = Vn(e) ? Uo(e) : so(1);
            return {
              width: e.clientWidth * a.x,
              height: e.clientHeight * a.y,
              x: o * a.x,
              y: n * a.y,
            };
          })(t, r);
        else {
          var o = Ho(e);
          n = pt(pt({}, t), {}, { x: t.x - o.x, y: t.y - o.y });
        }
        return Co(n);
      }
      function Go(e, t) {
        var r = Zn(e);
        return !(r === t || !Hn(r) || Yn(r)) && ('fixed' === Xn(r).position || Go(r, t));
      }
      function Ko(e, t, r) {
        var n = Vn(t),
          o = Un(t),
          a = 'fixed' === r,
          i = Vo(e, !0, a, t),
          l = { scrollLeft: 0, scrollTop: 0 },
          s = so(0);
        if (n || (!n && !a))
          if ((('body' !== Fn(t) || qn(o)) && (l = Jn(t)), n)) {
            var u = Vo(t, !0, a, t);
            (s.x = u.x + t.clientLeft), (s.y = u.y + t.clientTop);
          } else o && (s.x = $o(o));
        return {
          x: i.left + l.scrollLeft - s.x,
          y: i.top + l.scrollTop - s.y,
          width: i.width,
          height: i.height,
        };
      }
      function Qo(e, t) {
        return Vn(e) && 'fixed' !== Xn(e).position ? (t ? t(e) : e.offsetParent) : null;
      }
      function Yo(e, t) {
        var r = Bn(e);
        if (!Vn(e)) return r;
        for (var n = Qo(e, t); n && Gn(n) && 'static' === Xn(n).position; ) n = Qo(n, t);
        return n &&
          ('html' === Fn(n) || ('body' === Fn(n) && 'static' === Xn(n).position && !Kn(n)))
          ? r
          : n ||
              (function (e) {
                for (var t = Zn(e); Vn(t) && !Yn(t); ) {
                  if (Kn(t)) return t;
                  t = Zn(t);
                }
                return null;
              })(e) ||
              r;
      }
      var Xo = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
          var t = e.rect,
            r = e.offsetParent,
            n = e.strategy,
            o = Vn(r),
            a = Un(r);
          if (r === a) return t;
          var i = { scrollLeft: 0, scrollTop: 0 },
            l = so(1),
            s = so(0);
          if ((o || (!o && 'fixed' !== n)) && (('body' !== Fn(r) || qn(a)) && (i = Jn(r)), Vn(r))) {
            var u = Vo(r);
            (l = Uo(r)), (s.x = u.x + r.clientLeft), (s.y = u.y + r.clientTop);
          }
          return {
            width: t.width * l.x,
            height: t.height * l.y,
            x: t.x * l.x - i.scrollLeft * l.x + s.x,
            y: t.y * l.y - i.scrollTop * l.y + s.y,
          };
        },
        getDocumentElement: Un,
        getClippingRect: function (e) {
          var t = e.element,
            r = e.boundary,
            n = e.rootBoundary,
            o = e.strategy,
            a =
              'clippingAncestors' === r
                ? (function (e, t) {
                    var r = t.get(e);
                    if (r) return r;
                    for (
                      var n = to(e, [], !1).filter(function (e) {
                          return Hn(e) && 'body' !== Fn(e);
                        }),
                        o = null,
                        a = 'fixed' === Xn(e).position,
                        i = a ? Zn(e) : e;
                      Hn(i) && !Yn(i);

                    ) {
                      var l = Xn(i),
                        s = Kn(i);
                      s || 'fixed' !== l.position || (o = null),
                        (
                          a
                            ? !s && !o
                            : (!s &&
                                'static' === l.position &&
                                o &&
                                ['absolute', 'fixed'].includes(o.position)) ||
                              (qn(i) && !s && Go(e, i))
                        )
                          ? (n = n.filter(function (e) {
                              return e !== i;
                            }))
                          : (o = l),
                        (i = Zn(i));
                    }
                    return t.set(e, n), n;
                  })(t, this._c)
                : [].concat(r),
            i = [].concat(Ln(a), [n]),
            l = i[0],
            s = i.reduce(
              function (e, r) {
                var n = qo(t, r, o);
                return (
                  (e.top = ao(n.top, e.top)),
                  (e.right = oo(n.right, e.right)),
                  (e.bottom = oo(n.bottom, e.bottom)),
                  (e.left = ao(n.left, e.left)),
                  e
                );
              },
              qo(t, l, o),
            );
          return { width: s.right - s.left, height: s.bottom - s.top, x: s.left, y: s.top };
        },
        getOffsetParent: Yo,
        getElementRects: function (e) {
          return (Ao =
            Ao ||
            l(
              a().mark(function e(t) {
                var r, n, o, i, l;
                return a().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.reference),
                            (n = t.floating),
                            (o = t.strategy),
                            (i = this.getOffsetParent || Yo),
                            (l = this.getDimensions),
                            (e.t0 = Ko),
                            (e.t1 = r),
                            (e.next = 7),
                            i(n)
                          );
                        case 7:
                          return (
                            (e.t2 = e.sent),
                            (e.t3 = o),
                            (e.t4 = (0, e.t0)(e.t1, e.t2, e.t3)),
                            (e.t5 = pt),
                            (e.t6 = { x: 0, y: 0 }),
                            (e.next = 14),
                            l(n)
                          );
                        case 14:
                          return (
                            (e.t7 = e.sent),
                            (e.t8 = (0, e.t5)(e.t6, e.t7)),
                            e.abrupt('return', { reference: e.t4, floating: e.t8 })
                          );
                        case 17:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  this,
                );
              }),
            )).apply(this, arguments);
        },
        getClientRects: function (e) {
          return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
          return Fo(e);
        },
        getScale: Uo,
        isElement: Hn,
        isRTL: function (e) {
          return 'rtl' === Xn(e).direction;
        },
      };
      function Jo(e, t, r, n) {
        void 0 === n && (n = {});
        var o = n,
          a = o.ancestorScroll,
          i = void 0 === a || a,
          l = o.ancestorResize,
          s = void 0 === l || l,
          u = o.elementResize,
          c = void 0 === u ? 'function' === typeof ResizeObserver : u,
          d = o.layoutShift,
          h = void 0 === d ? 'function' === typeof IntersectionObserver : d,
          g = o.animationFrame,
          m = void 0 !== g && g,
          v = Bo(e),
          b = i || s ? [].concat(Ln(v ? to(v) : []), Ln(to(t))) : [];
        b.forEach(function (e) {
          i && e.addEventListener('scroll', r, { passive: !0 }),
            s && e.addEventListener('resize', r);
        });
        var y,
          x =
            v && h
              ? (function (e, t) {
                  var r,
                    n = null,
                    o = Un(e);
                  function a() {
                    clearTimeout(r), n && n.disconnect(), (n = null);
                  }
                  return (
                    (function i(l, s) {
                      void 0 === l && (l = !1), void 0 === s && (s = 1), a();
                      var u = e.getBoundingClientRect(),
                        c = u.left,
                        d = u.top,
                        f = u.width,
                        h = u.height;
                      if ((l || t(), f && h)) {
                        var g = {
                            rootMargin:
                              -lo(d) +
                              'px ' +
                              -lo(o.clientWidth - (c + f)) +
                              'px ' +
                              -lo(o.clientHeight - (d + h)) +
                              'px ' +
                              -lo(c) +
                              'px',
                            threshold: ao(0, oo(1, s)) || 1,
                          },
                          m = !0;
                        try {
                          n = new IntersectionObserver(
                            v,
                            pt(pt({}, g), {}, { root: o.ownerDocument }),
                          );
                        } catch (p) {
                          n = new IntersectionObserver(v, g);
                        }
                        n.observe(e);
                      }
                      function v(e) {
                        var t = e[0].intersectionRatio;
                        if (t !== s) {
                          if (!m) return i();
                          t
                            ? i(!1, t)
                            : (r = setTimeout(function () {
                                i(!1, 1e-7);
                              }, 100));
                        }
                        m = !1;
                      }
                    })(!0),
                    a
                  );
                })(v, r)
              : null,
          w = -1,
          k = null;
        c &&
          ((k = new ResizeObserver(function (e) {
            var n = f(e, 1)[0];
            n &&
              n.target === v &&
              k &&
              (k.unobserve(t),
              cancelAnimationFrame(w),
              (w = requestAnimationFrame(function () {
                k && k.observe(t);
              }))),
              r();
          })),
          v && !m && k.observe(v),
          k.observe(t));
        var N = m ? Vo(e) : null;
        return (
          m &&
            (function t() {
              var n = Vo(e);
              !N ||
                (n.x === N.x && n.y === N.y && n.width === N.width && n.height === N.height) ||
                r();
              (N = n), (y = requestAnimationFrame(t));
            })(),
          r(),
          function () {
            b.forEach(function (e) {
              i && e.removeEventListener('scroll', r), s && e.removeEventListener('resize', r);
            }),
              x && x(),
              k && k.disconnect(),
              (k = null),
              m && cancelAnimationFrame(y);
          }
        );
      }
      var Zo = function (e, t, r) {
          var n = new Map(),
            o = pt({ platform: Xo }, r),
            i = pt(pt({}, o.platform), {}, { _c: n });
          return (function (e, t, r) {
            return (jo =
              jo ||
              l(
                a().mark(function e(t, r, n) {
                  var o, i, l, s, u, c, d, f, p, h, g, m, v, b, y, x, w, k, N, S, E, C, j, R, T, P;
                  return a().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (o = n.placement),
                            (i = void 0 === o ? 'bottom' : o),
                            (l = n.strategy),
                            (s = void 0 === l ? 'absolute' : l),
                            (u = n.middleware),
                            (c = void 0 === u ? [] : u),
                            (d = n.platform),
                            (f = c.filter(Boolean)),
                            (e.next = 4),
                            null == d.isRTL ? void 0 : d.isRTL(r)
                          );
                        case 4:
                          return (
                            (p = e.sent),
                            (e.next = 7),
                            d.getElementRects({ reference: t, floating: r, strategy: s })
                          );
                        case 7:
                          (h = e.sent),
                            (g = _o(h, i, p)),
                            (m = g.x),
                            (v = g.y),
                            (b = i),
                            (y = {}),
                            (x = 0),
                            (w = 0);
                        case 13:
                          if (!(w < f.length)) {
                            e.next = 46;
                            break;
                          }
                          return (
                            (k = f[w]),
                            (N = k.name),
                            (S = k.fn),
                            (e.next = 17),
                            S({
                              x: m,
                              y: v,
                              initialPlacement: i,
                              placement: b,
                              strategy: s,
                              middlewareData: y,
                              rects: h,
                              platform: d,
                              elements: { reference: t, floating: r },
                            })
                          );
                        case 17:
                          if (
                            ((E = e.sent),
                            (C = E.x),
                            (j = E.y),
                            (R = E.data),
                            (T = E.reset),
                            (m = null != C ? C : m),
                            (v = null != j ? j : v),
                            (y = pt(pt({}, y), {}, dt({}, N, pt(pt({}, y[N]), R)))),
                            !(T && x <= 50))
                          ) {
                            e.next = 43;
                            break;
                          }
                          if ((x++, 'object' !== typeof T)) {
                            e.next = 41;
                            break;
                          }
                          if ((T.placement && (b = T.placement), !T.rects)) {
                            e.next = 38;
                            break;
                          }
                          if (!0 !== T.rects) {
                            e.next = 36;
                            break;
                          }
                          return (
                            (e.next = 33),
                            d.getElementRects({ reference: t, floating: r, strategy: s })
                          );
                        case 33:
                          (e.t0 = e.sent), (e.next = 37);
                          break;
                        case 36:
                          e.t0 = T.rects;
                        case 37:
                          h = e.t0;
                        case 38:
                          (P = _o(h, b, p)), (m = P.x), (v = P.y);
                        case 41:
                          return (w = -1), e.abrupt('continue', 43);
                        case 43:
                          w++, (e.next = 13);
                          break;
                        case 46:
                          return e.abrupt('return', {
                            x: m,
                            y: v,
                            placement: b,
                            strategy: s,
                            middlewareData: y,
                          });
                        case 47:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              )).apply(this, arguments);
          })(e, t, pt(pt({}, o), {}, { platform: i }));
        },
        ea = r(164),
        ta = 'undefined' !== typeof document ? e.useLayoutEffect : e.useEffect;
      function ra(e, t) {
        if (e === t) return !0;
        if (typeof e !== typeof t) return !1;
        if ('function' === typeof e && e.toString() === t.toString()) return !0;
        var r, n, o;
        if (e && t && 'object' == typeof e) {
          if (Array.isArray(e)) {
            if ((r = e.length) != t.length) return !1;
            for (n = r; 0 !== n--; ) if (!ra(e[n], t[n])) return !1;
            return !0;
          }
          if ((r = (o = Object.keys(e)).length) !== Object.keys(t).length) return !1;
          for (n = r; 0 !== n--; ) if (!{}.hasOwnProperty.call(t, o[n])) return !1;
          for (n = r; 0 !== n--; ) {
            var a = o[n];
            if (('_owner' !== a || !e.$$typeof) && !ra(e[a], t[a])) return !1;
          }
          return !0;
        }
        return e !== e && t !== t;
      }
      function na(e) {
        return 'undefined' === typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function oa(e, t) {
        var r = na(e);
        return Math.round(t * r) / r;
      }
      function aa(t) {
        var r = e.useRef(t);
        return (
          ta(function () {
            r.current = t;
          }),
          r
        );
      }
      var ia = function (e) {
          return 'undefined' === typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        la = new WeakMap(),
        sa = new WeakMap(),
        ua = {},
        ca = 0,
        da = function e(t) {
          return t && (t.host || e(t.parentNode));
        },
        fa = function (e, t, r, n) {
          var o = (function (e, t) {
            return t
              .map(function (t) {
                if (e.contains(t)) return t;
                var r = da(t);
                return r && e.contains(r)
                  ? r
                  : (console.error(
                      'aria-hidden',
                      t,
                      'in not contained inside',
                      e,
                      '. Doing nothing',
                    ),
                    null);
              })
              .filter(function (e) {
                return Boolean(e);
              });
          })(t, Array.isArray(e) ? e : [e]);
          ua[r] || (ua[r] = new WeakMap());
          var a = ua[r],
            i = [],
            l = new Set(),
            s = new Set(o);
          o.forEach(function e(t) {
            t && !l.has(t) && (l.add(t), e(t.parentNode));
          });
          return (
            (function e(t) {
              t &&
                !s.has(t) &&
                Array.prototype.forEach.call(t.children, function (t) {
                  if (l.has(t)) e(t);
                  else {
                    var o = t.getAttribute(n),
                      s = null !== o && 'false' !== o,
                      u = (la.get(t) || 0) + 1,
                      c = (a.get(t) || 0) + 1;
                    la.set(t, u),
                      a.set(t, c),
                      i.push(t),
                      1 === u && s && sa.set(t, !0),
                      1 === c && t.setAttribute(r, 'true'),
                      s || t.setAttribute(n, 'true');
                  }
                });
            })(t),
            l.clear(),
            ca++,
            function () {
              i.forEach(function (e) {
                var t = la.get(e) - 1,
                  o = a.get(e) - 1;
                la.set(e, t),
                  a.set(e, o),
                  t || (sa.has(e) || e.removeAttribute(n), sa.delete(e)),
                  o || e.removeAttribute(r);
              }),
                --ca ||
                  ((la = new WeakMap()), (la = new WeakMap()), (sa = new WeakMap()), (ua = {}));
            }
          );
        },
        pa = function (e, t, r) {
          void 0 === r && (r = 'data-aria-hidden');
          var n = Array.from(Array.isArray(e) ? e : [e]),
            o = t || ia(e);
          return o
            ? (n.push.apply(n, Array.from(o.querySelectorAll('[aria-live]'))),
              fa(n, o, r, 'aria-hidden'))
            : function () {
                return null;
              };
        },
        ha = function (e, t, r) {
          void 0 === r && (r = 'data-inert-ed');
          var n = t || ia(e);
          return n
            ? fa(e, n, r, 'inert')
            : function () {
                return null;
              };
        },
        ga = function () {
          return (
            'undefined' !== typeof HTMLElement && HTMLElement.prototype.hasOwnProperty('inert')
          );
        },
        ma = function (e, t, r) {
          return void 0 === r && (r = 'data-suppressed'), (ga() ? ha : pa)(e, t, r);
        },
        va = [
          'input:not([inert])',
          'select:not([inert])',
          'textarea:not([inert])',
          'a[href]:not([inert])',
          'button:not([inert])',
          '[tabindex]:not(slot):not([inert])',
          'audio[controls]:not([inert])',
          'video[controls]:not([inert])',
          '[contenteditable]:not([contenteditable="false"]):not([inert])',
          'details>summary:first-of-type:not([inert])',
          'details:not([inert])',
        ],
        ba = va.join(','),
        ya = 'undefined' === typeof Element,
        xa = ya
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        wa =
          !ya && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null === e || void 0 === e || null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null === e || void 0 === e ? void 0 : e.ownerDocument;
              },
        ka = function e(t, r) {
          var n;
          void 0 === r && (r = !0);
          var o =
            null === t || void 0 === t || null === (n = t.getAttribute) || void 0 === n
              ? void 0
              : n.call(t, 'inert');
          return '' === o || 'true' === o || (r && t && e(t.parentNode));
        },
        Na = function (e, t, r) {
          if (ka(e)) return [];
          var n = Array.prototype.slice.apply(e.querySelectorAll(ba));
          return t && xa.call(e, ba) && n.unshift(e), (n = n.filter(r));
        },
        Sa = function e(t, r, n) {
          for (var o = [], a = Array.from(t); a.length; ) {
            var i = a.shift();
            if (!ka(i, !1))
              if ('SLOT' === i.tagName) {
                var l = i.assignedElements(),
                  s = e(l.length ? l : i.children, !0, n);
                n.flatten ? o.push.apply(o, s) : o.push({ scopeParent: i, candidates: s });
              } else {
                xa.call(i, ba) && n.filter(i) && (r || !t.includes(i)) && o.push(i);
                var u =
                    i.shadowRoot || ('function' === typeof n.getShadowRoot && n.getShadowRoot(i)),
                  c = !ka(u, !1) && (!n.shadowRootFilter || n.shadowRootFilter(i));
                if (u && c) {
                  var d = e(!0 === u ? i.children : u.children, !0, n);
                  n.flatten ? o.push.apply(o, d) : o.push({ scopeParent: i, candidates: d });
                } else a.unshift.apply(a, i.children);
              }
          }
          return o;
        },
        Ea = function (e) {
          return !isNaN(parseInt(e.getAttribute('tabindex'), 10));
        },
        Ca = function (e) {
          if (!e) throw new Error('No node provided');
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) ||
              (function (e) {
                var t,
                  r =
                    null === e || void 0 === e || null === (t = e.getAttribute) || void 0 === t
                      ? void 0
                      : t.call(e, 'contenteditable');
                return '' === r || 'true' === r;
              })(e)) &&
            !Ea(e)
            ? 0
            : e.tabIndex;
        },
        ja = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        Ra = function (e) {
          return 'INPUT' === e.tagName;
        },
        Ta = function (e) {
          return (
            (function (e) {
              return Ra(e) && 'radio' === e.type;
            })(e) &&
            !(function (e) {
              if (!e.name) return !0;
              var t,
                r = e.form || wa(e),
                n = function (e) {
                  return r.querySelectorAll('input[type="radio"][name="' + e + '"]');
                };
              if (
                'undefined' !== typeof window &&
                'undefined' !== typeof window.CSS &&
                'function' === typeof window.CSS.escape
              )
                t = n(window.CSS.escape(e.name));
              else
                try {
                  t = n(e.name);
                } catch (a) {
                  return (
                    console.error(
                      'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                      a.message,
                    ),
                    !1
                  );
                }
              var o = (function (e, t) {
                for (var r = 0; r < e.length; r++) if (e[r].checked && e[r].form === t) return e[r];
              })(t, e.form);
              return !o || o === e;
            })(e)
          );
        },
        Pa = function (e) {
          var t = e.getBoundingClientRect(),
            r = t.width,
            n = t.height;
          return 0 === r && 0 === n;
        },
        Oa = function (e, t) {
          var r = t.displayCheck,
            n = t.getShadowRoot;
          if ('hidden' === getComputedStyle(e).visibility) return !0;
          var o = xa.call(e, 'details>summary:first-of-type') ? e.parentElement : e;
          if (xa.call(o, 'details:not([open]) *')) return !0;
          if (r && 'full' !== r && 'legacy-full' !== r) {
            if ('non-zero-area' === r) return Pa(e);
          } else {
            if ('function' === typeof n) {
              for (var a = e; e; ) {
                var i = e.parentElement,
                  l = wa(e);
                if (i && !i.shadowRoot && !0 === n(i)) return Pa(e);
                e = e.assignedSlot ? e.assignedSlot : i || l === e.ownerDocument ? i : l.host;
              }
              e = a;
            }
            if (
              (function (e) {
                var t,
                  r,
                  n,
                  o,
                  a = e && wa(e),
                  i = null === (t = a) || void 0 === t ? void 0 : t.host,
                  l = !1;
                if (a && a !== e)
                  for (
                    l = !!(
                      (null !== (r = i) &&
                        void 0 !== r &&
                        null !== (n = r.ownerDocument) &&
                        void 0 !== n &&
                        n.contains(i)) ||
                      (null !== e &&
                        void 0 !== e &&
                        null !== (o = e.ownerDocument) &&
                        void 0 !== o &&
                        o.contains(e))
                    );
                    !l && i;

                  ) {
                    var s, u, c;
                    l = !(
                      null ===
                        (u = i = null === (s = a = wa(i)) || void 0 === s ? void 0 : s.host) ||
                      void 0 === u ||
                      null === (c = u.ownerDocument) ||
                      void 0 === c ||
                      !c.contains(i)
                    );
                  }
                return l;
              })(e)
            )
              return !e.getClientRects().length;
            if ('legacy-full' !== r) return !0;
          }
          return !1;
        },
        La = function (e, t) {
          return !(
            t.disabled ||
            ka(t) ||
            (function (e) {
              return Ra(e) && 'hidden' === e.type;
            })(t) ||
            Oa(t, e) ||
            (function (e) {
              return (
                'DETAILS' === e.tagName &&
                Array.prototype.slice.apply(e.children).some(function (e) {
                  return 'SUMMARY' === e.tagName;
                })
              );
            })(t) ||
            (function (e) {
              if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                for (var t = e.parentElement; t; ) {
                  if ('FIELDSET' === t.tagName && t.disabled) {
                    for (var r = 0; r < t.children.length; r++) {
                      var n = t.children.item(r);
                      if ('LEGEND' === n.tagName)
                        return !!xa.call(t, 'fieldset[disabled] *') || !n.contains(e);
                    }
                    return !0;
                  }
                  t = t.parentElement;
                }
              return !1;
            })(t)
          );
        },
        _a = function (e, t) {
          return !(Ta(t) || Ca(t) < 0 || !La(e, t));
        },
        Ia = function (e) {
          var t = parseInt(e.getAttribute('tabindex'), 10);
          return !!(isNaN(t) || t >= 0);
        },
        Da = function e(t) {
          var r = [],
            n = [];
          return (
            t.forEach(function (t, o) {
              var a = !!t.scopeParent,
                i = a ? t.scopeParent : t,
                l = (function (e, t) {
                  var r = Ca(e);
                  return r < 0 && t && !Ea(e) ? 0 : r;
                })(i, a),
                s = a ? e(t.candidates) : i;
              0 === l
                ? a
                  ? r.push.apply(r, s)
                  : r.push(i)
                : n.push({ documentOrder: o, tabIndex: l, item: t, isScope: a, content: s });
            }),
            n
              .sort(ja)
              .reduce(function (e, t) {
                return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e;
              }, [])
              .concat(r)
          );
        },
        za = function (e, t) {
          var r;
          return (
            (r = (t = t || {}).getShadowRoot
              ? Sa([e], t.includeContainer, {
                  filter: _a.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: Ia,
                })
              : Na(e, t.includeContainer, _a.bind(null, t))),
            Da(r)
          );
        },
        Ma = ['lockScroll'];
      function Aa() {
        return (
          (Aa = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          Aa.apply(this, arguments)
        );
      }
      var Fa = 'undefined' !== typeof document ? e.useLayoutEffect : e.useEffect,
        Ba = !1,
        Ua = 0,
        Wa = function () {
          return 'floating-ui-' + Ua++;
        };
      var Ha =
        t['useId'.toString()] ||
        function () {
          var t = f(
              e.useState(function () {
                return Ba ? Wa() : void 0;
              }),
              2,
            ),
            r = t[0],
            n = t[1];
          return (
            Fa(function () {
              null == r && n(Wa());
            }, []),
            e.useEffect(function () {
              Ba || (Ba = !0);
            }, []),
            r
          );
        };
      function Va() {
        var e = new Map();
        return {
          emit: function (t, r) {
            var n;
            null == (n = e.get(t)) ||
              n.forEach(function (e) {
                return e(r);
              });
          },
          on: function (t, r) {
            e.set(t, [].concat(Ln(e.get(t) || []), [r]));
          },
          off: function (t, r) {
            var n;
            e.set(
              t,
              (null == (n = e.get(t))
                ? void 0
                : n.filter(function (e) {
                    return e !== r;
                  })) || [],
            );
          },
        };
      }
      var $a = e.createContext(null),
        qa = e.createContext(null),
        Ga = function () {
          var t;
          return (null == (t = e.useContext($a)) ? void 0 : t.id) || null;
        },
        Ka = function () {
          return e.useContext(qa);
        };
      function Qa(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function Ya() {
        var e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function Xa() {
        var e = navigator.userAgentData;
        return e && Array.isArray(e.brands)
          ? e.brands
              .map(function (e) {
                return e.brand + '/' + e.version;
              })
              .join(' ')
          : navigator.userAgent;
      }
      function Ja(e) {
        return Qa(e).defaultView || window;
      }
      function Za(e) {
        return !!e && (e instanceof Element || e instanceof Ja(e).Element);
      }
      function ei(e) {
        return !!e && (e instanceof HTMLElement || e instanceof Ja(e).HTMLElement);
      }
      function ti(e) {
        if (0 === e.mozInputSource && e.isTrusted) return !0;
        var t = /Android/i;
        return (t.test(Ya()) || t.test(Xa())) && e.pointerType
          ? 'click' === e.type && 1 === e.buttons
          : 0 === e.detail && !e.pointerType;
      }
      function ri(e) {
        return (
          (0 === e.width && 0 === e.height) ||
          (1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            'mouse' !== e.pointerType) ||
          (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail)
        );
      }
      function ni() {
        return /apple/i.test(navigator.vendor);
      }
      function oi(e, t) {
        var r = ['mouse', 'pen'];
        return t || r.push('', void 0), r.includes(e);
      }
      function ai(e, t) {
        if (!e || !t) return !1;
        var r,
          n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (
          n &&
          ((r = n),
          'undefined' !== typeof ShadowRoot &&
            (r instanceof Ja(r).ShadowRoot || r instanceof ShadowRoot))
        )
          for (var o = t; o; ) {
            if (e === o) return !0;
            o = o.parentNode || o.host;
          }
        return !1;
      }
      function ii(e) {
        return 'data-floating-ui-' + e;
      }
      function li(t) {
        var r = (0, e.useRef)(t);
        return (
          Fa(function () {
            r.current = t;
          }),
          r
        );
      }
      var si = ii('safe-polygon');
      function ui(e, t, r) {
        return r && !oi(r) ? 0 : 'number' === typeof e ? e : null == e ? void 0 : e[t];
      }
      function ci(t, r) {
        void 0 === r && (r = {});
        var n = t.open,
          o = t.onOpenChange,
          a = t.dataRef,
          i = t.events,
          l = t.elements,
          s = l.domReference,
          u = l.floating,
          c = t.refs,
          d = r,
          f = d.enabled,
          p = void 0 === f || f,
          h = d.delay,
          g = void 0 === h ? 0 : h,
          m = d.handleClose,
          v = void 0 === m ? null : m,
          b = d.mouseOnly,
          y = void 0 !== b && b,
          x = d.restMs,
          w = void 0 === x ? 0 : x,
          k = d.move,
          N = void 0 === k || k,
          S = Ka(),
          E = Ga(),
          C = li(v),
          j = li(g),
          R = e.useRef(),
          T = e.useRef(),
          P = e.useRef(),
          O = e.useRef(),
          L = e.useRef(!0),
          _ = e.useRef(!1),
          I = e.useRef(function () {}),
          D = e.useCallback(
            function () {
              var e,
                t = null == (e = a.current.openEvent) ? void 0 : e.type;
              return (null == t ? void 0 : t.includes('mouse')) && 'mousedown' !== t;
            },
            [a],
          );
        e.useEffect(
          function () {
            if (p)
              return (
                i.on('dismiss', e),
                function () {
                  i.off('dismiss', e);
                }
              );
            function e() {
              clearTimeout(T.current), clearTimeout(O.current), (L.current = !0);
            }
          },
          [p, i],
        ),
          e.useEffect(
            function () {
              if (p && C.current && n) {
                var e = Qa(u).documentElement;
                return (
                  e.addEventListener('mouseleave', t),
                  function () {
                    e.removeEventListener('mouseleave', t);
                  }
                );
              }
              function t(e) {
                D() && o(!1, e);
              }
            },
            [u, n, o, p, C, a, D],
          );
        var z = e.useCallback(
            function (e, t) {
              void 0 === t && (t = !0);
              var r = ui(j.current, 'close', R.current);
              r && !P.current
                ? (clearTimeout(T.current),
                  (T.current = setTimeout(function () {
                    return o(!1, e);
                  }, r)))
                : t && (clearTimeout(T.current), o(!1, e));
            },
            [j, o],
          ),
          M = e.useCallback(function () {
            I.current(), (P.current = void 0);
          }, []),
          A = e.useCallback(
            function () {
              if (_.current) {
                var e = Qa(c.floating.current).body;
                (e.style.pointerEvents = ''), e.removeAttribute(si), (_.current = !1);
              }
            },
            [c],
          );
        return (
          e.useEffect(
            function () {
              if (p && Za(s)) {
                var e = s;
                return (
                  n && e.addEventListener('mouseleave', c),
                  null == u || u.addEventListener('mouseleave', c),
                  N && e.addEventListener('mousemove', i, { once: !0 }),
                  e.addEventListener('mouseenter', i),
                  e.addEventListener('mouseleave', l),
                  function () {
                    n && e.removeEventListener('mouseleave', c),
                      null == u || u.removeEventListener('mouseleave', c),
                      N && e.removeEventListener('mousemove', i),
                      e.removeEventListener('mouseenter', i),
                      e.removeEventListener('mouseleave', l);
                  }
                );
              }
              function r() {
                return (
                  !!a.current.openEvent && ['click', 'mousedown'].includes(a.current.openEvent.type)
                );
              }
              function i(e) {
                if (
                  (clearTimeout(T.current),
                  (L.current = !1),
                  !((y && !oi(R.current)) || (w > 0 && 0 === ui(j.current, 'open'))))
                ) {
                  var t = ui(j.current, 'open', R.current);
                  t
                    ? (T.current = setTimeout(function () {
                        o(!0, e);
                      }, t))
                    : o(!0, e);
                }
              }
              function l(e) {
                if (!r()) {
                  I.current();
                  var o = Qa(u);
                  if ((clearTimeout(O.current), C.current)) {
                    n || clearTimeout(T.current),
                      (P.current = C.current(
                        pt(
                          pt({}, t),
                          {},
                          {
                            tree: S,
                            x: e.clientX,
                            y: e.clientY,
                            onClose: function () {
                              A(), M(), z(e);
                            },
                          },
                        ),
                      ));
                    var a = P.current;
                    return (
                      o.addEventListener('mousemove', a),
                      void (I.current = function () {
                        o.removeEventListener('mousemove', a);
                      })
                    );
                  }
                  ('touch' !== R.current || !ai(u, e.relatedTarget)) && z(e);
                }
              }
              function c(e) {
                r() ||
                  null == C.current ||
                  C.current(
                    pt(
                      pt({}, t),
                      {},
                      {
                        tree: S,
                        x: e.clientX,
                        y: e.clientY,
                        onClose: function () {
                          A(), M(), z(e);
                        },
                      },
                    ),
                  )(e);
              }
            },
            [s, u, p, t, y, w, N, z, M, A, o, n, S, j, C, a],
          ),
          Fa(
            function () {
              var e;
              if (p && n && null != (e = C.current) && e.__options.blockPointerEvents && D()) {
                var t = Qa(u).body;
                if (
                  (t.setAttribute(si, ''),
                  (t.style.pointerEvents = 'none'),
                  (_.current = !0),
                  Za(s) && u)
                ) {
                  var r,
                    o,
                    a = s,
                    i =
                      null == S ||
                      null ==
                        (r = S.nodesRef.current.find(function (e) {
                          return e.id === E;
                        })) ||
                      null == (o = r.context)
                        ? void 0
                        : o.elements.floating;
                  return (
                    i && (i.style.pointerEvents = ''),
                    (a.style.pointerEvents = 'auto'),
                    (u.style.pointerEvents = 'auto'),
                    function () {
                      (a.style.pointerEvents = ''), (u.style.pointerEvents = '');
                    }
                  );
                }
              }
            },
            [p, n, E, u, s, S, C, a, D],
          ),
          Fa(
            function () {
              n || ((R.current = void 0), M(), A());
            },
            [n, M, A],
          ),
          e.useEffect(
            function () {
              return function () {
                M(), clearTimeout(T.current), clearTimeout(O.current), A();
              };
            },
            [p, M, A],
          ),
          e.useMemo(
            function () {
              if (!p) return {};
              function e(e) {
                R.current = e.pointerType;
              }
              return {
                reference: {
                  onPointerDown: e,
                  onPointerEnter: e,
                  onMouseMove: function (e) {
                    n ||
                      0 === w ||
                      (clearTimeout(O.current),
                      (O.current = setTimeout(function () {
                        L.current || o(!0, e.nativeEvent);
                      }, w)));
                  },
                },
                floating: {
                  onMouseEnter: function () {
                    clearTimeout(T.current);
                  },
                  onMouseLeave: function (e) {
                    i.emit('dismiss', { type: 'mouseLeave', data: { returnFocus: !1 } }),
                      z(e.nativeEvent, !1);
                  },
                },
              };
            },
            [i, p, w, n, o, z],
          )
        );
      }
      function di(e) {
        for (
          var t = e.activeElement;
          null != (null == (r = t) || null == (n = r.shadowRoot) ? void 0 : n.activeElement);

        ) {
          var r, n;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      var fi = 0;
      function pi(e, t) {
        void 0 === t && (t = {});
        var r = t,
          n = r.preventScroll,
          o = void 0 !== n && n,
          a = r.cancelPrevious,
          i = void 0 === a || a,
          l = r.sync,
          s = void 0 !== l && l;
        i && cancelAnimationFrame(fi);
        var u = function () {
          return null == e ? void 0 : e.focus({ preventScroll: o });
        };
        s ? u() : (fi = requestAnimationFrame(u));
      }
      function hi(e, t) {
        for (
          var r = e.filter(function (e) {
              var r;
              return e.parentId === t && (null == (r = e.context) ? void 0 : r.open);
            }),
            n = r;
          n.length;

        )
          (n = e.filter(function (e) {
            var t;
            return null == (t = n)
              ? void 0
              : t.some(function (t) {
                  var r;
                  return e.parentId === t.id && (null == (r = e.context) ? void 0 : r.open);
                });
          })),
            (r = r.concat(n));
        return r;
      }
      function gi(e) {
        return 'composedPath' in e ? e.composedPath()[0] : e.target;
      }
      var mi =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
      function vi(e) {
        return ei(e) && e.matches(mi);
      }
      function bi(e) {
        e.preventDefault(), e.stopPropagation();
      }
      var yi = function () {
        return {
          getShadowRoot: !0,
          displayCheck:
            'function' === typeof ResizeObserver &&
            ResizeObserver.toString().includes('[native code]')
              ? 'full'
              : 'none',
        };
      };
      function xi(e, t) {
        var r = za(e, yi());
        'prev' === t && r.reverse();
        var n = r.indexOf(di(Qa(e)));
        return r.slice(n + 1)[0];
      }
      function wi() {
        return xi(document.body, 'next');
      }
      function ki() {
        return xi(document.body, 'prev');
      }
      function Ni(e, t) {
        var r = t || e.currentTarget,
          n = e.relatedTarget;
        return !n || !ai(r, n);
      }
      function Si(e) {
        za(e, yi()).forEach(function (e) {
          (e.dataset.tabindex = e.getAttribute('tabindex') || ''), e.setAttribute('tabindex', '-1');
        });
      }
      function Ei(e) {
        e.querySelectorAll('[data-tabindex]').forEach(function (e) {
          var t = e.dataset.tabindex;
          delete e.dataset.tabindex,
            t ? e.setAttribute('tabindex', t) : e.removeAttribute('tabindex');
        });
      }
      var Ci = {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: 0,
        position: 'fixed',
        whiteSpace: 'nowrap',
        width: '1px',
        top: 0,
        left: 0,
      };
      function ji(e) {
        'Tab' === e.key && (e.target, clearTimeout(undefined));
      }
      var Ri = e.forwardRef(function (t, r) {
          var n,
            o = f(e.useState(), 2),
            a = o[0],
            i = o[1];
          Fa(function () {
            return (
              ni() && i('button'),
              document.addEventListener('keydown', ji),
              function () {
                document.removeEventListener('keydown', ji);
              }
            );
          }, []);
          var l =
            (dt(
              (n = { ref: r, tabIndex: 0, role: a, 'aria-hidden': !a || void 0 }),
              ii('focus-guard'),
              '',
            ),
            dt(n, 'style', Ci),
            n);
          return e.createElement('span', Aa({}, t, l));
        }),
        Ti = e.createContext(null);
      function Pi(t) {
        var r = t.children,
          n = t.id,
          o = t.root,
          a = void 0 === o ? null : o,
          i = t.preserveTabOrder,
          l = void 0 === i || i,
          s = (function (t) {
            var r = void 0 === t ? {} : t,
              n = r.id,
              o = r.root,
              a = f(e.useState(null), 2),
              i = a[0],
              l = a[1],
              s = Ha(),
              u = Oi(),
              c = e.useMemo(
                function () {
                  return { id: n, root: o, portalContext: u, uniqueId: s };
                },
                [n, o, u, s],
              ),
              d = e.useRef();
            return (
              Fa(
                function () {
                  return function () {
                    null == i || i.remove();
                  };
                },
                [i, c],
              ),
              Fa(
                function () {
                  if (d.current !== c) {
                    d.current = c;
                    var e = c.id,
                      t = c.root,
                      r = c.portalContext,
                      n = c.uniqueId,
                      o = e ? document.getElementById(e) : null,
                      a = ii('portal');
                    if (o) {
                      var i = document.createElement('div');
                      (i.id = n), i.setAttribute(a, ''), o.appendChild(i), l(i);
                    } else {
                      var s = t || (null == r ? void 0 : r.portalNode);
                      s && !Za(s) && (s = s.current), (s = s || document.body);
                      var u = null;
                      e && (((u = document.createElement('div')).id = e), s.appendChild(u));
                      var f = document.createElement('div');
                      (f.id = n), f.setAttribute(a, ''), (s = u || s).appendChild(f), l(f);
                    }
                  }
                },
                [c],
              ),
              i
            );
          })({ id: n, root: a }),
          u = f(e.useState(null), 2),
          c = u[0],
          d = u[1],
          p = e.useRef(null),
          h = e.useRef(null),
          g = e.useRef(null),
          m = e.useRef(null),
          v = !!c && !c.modal && c.open && l && !(!a && !s);
        return (
          e.useEffect(
            function () {
              if (s && l && (null == c || !c.modal))
                return (
                  s.addEventListener('focusin', e, !0),
                  s.addEventListener('focusout', e, !0),
                  function () {
                    s.removeEventListener('focusin', e, !0),
                      s.removeEventListener('focusout', e, !0);
                  }
                );
              function e(e) {
                s && Ni(e) && ('focusin' === e.type ? Ei : Si)(s);
              }
            },
            [s, l, null == c ? void 0 : c.modal],
          ),
          e.createElement(
            Ti.Provider,
            {
              value: e.useMemo(
                function () {
                  return {
                    preserveTabOrder: l,
                    beforeOutsideRef: p,
                    afterOutsideRef: h,
                    beforeInsideRef: g,
                    afterInsideRef: m,
                    portalNode: s,
                    setFocusManagerState: d,
                  };
                },
                [l, s],
              ),
            },
            v &&
              s &&
              e.createElement(Ri, {
                'data-type': 'outside',
                ref: p,
                onFocus: function (e) {
                  if (Ni(e, s)) {
                    var t;
                    null == (t = g.current) || t.focus();
                  } else {
                    var r = ki() || (null == c ? void 0 : c.refs.domReference.current);
                    null == r || r.focus();
                  }
                },
              }),
            v && s && e.createElement('span', { 'aria-owns': s.id, style: Ci }),
            s && (0, ea.createPortal)(r, s),
            v &&
              s &&
              e.createElement(Ri, {
                'data-type': 'outside',
                ref: h,
                onFocus: function (e) {
                  if (Ni(e, s)) {
                    var t;
                    null == (t = m.current) || t.focus();
                  } else {
                    var r = wi() || (null == c ? void 0 : c.refs.domReference.current);
                    null == r || r.focus(),
                      (null == c ? void 0 : c.closeOnFocusOut) &&
                        (null == c || c.onOpenChange(!1, e.nativeEvent));
                  }
                },
              }),
          )
        );
      }
      var Oi = function () {
          return e.useContext(Ti);
        },
        Li = e.forwardRef(function (t, r) {
          return e.createElement(
            'button',
            Aa({}, t, { type: 'button', ref: r, tabIndex: -1, style: Ci }),
          );
        });
      function _i(t) {
        var r = t.context,
          n = t.children,
          o = t.disabled,
          a = void 0 !== o && o,
          i = t.order,
          l = void 0 === i ? ['content'] : i,
          s = t.guards,
          u = void 0 === s || s,
          c = t.initialFocus,
          d = void 0 === c ? 0 : c,
          f = t.returnFocus,
          p = void 0 === f || f,
          h = t.modal,
          g = void 0 === h || h,
          m = t.visuallyHiddenDismiss,
          v = void 0 !== m && m,
          b = t.closeOnFocusOut,
          y = void 0 === b || b,
          x = r.open,
          w = r.refs,
          k = r.nodeId,
          N = r.onOpenChange,
          S = r.events,
          E = r.dataRef,
          C = r.elements,
          j = C.domReference,
          R = C.floating,
          T = !ga() || u,
          P = li(l),
          O = li(d),
          L = li(p),
          _ = Ka(),
          I = Oi(),
          D = 'number' === typeof d && d < 0,
          z = e.useRef(null),
          M = e.useRef(null),
          A = e.useRef(!1),
          F = e.useRef(null),
          B = e.useRef(!1),
          U = null != I,
          W = j && 'combobox' === j.getAttribute('role') && vi(j),
          H = e.useCallback(
            function (e) {
              return void 0 === e && (e = R), e ? za(e, yi()) : [];
            },
            [R],
          ),
          V = e.useCallback(
            function (e) {
              var t = H(e);
              return P.current
                .map(function (e) {
                  return j && 'reference' === e ? j : R && 'floating' === e ? R : t;
                })
                .filter(Boolean)
                .flat();
            },
            [j, R, P, H],
          );
        function $(t) {
          return !a && v && g
            ? e.createElement(
                Li,
                {
                  ref: 'start' === t ? z : M,
                  onClick: function (e) {
                    return N(!1, e.nativeEvent);
                  },
                },
                'string' === typeof v ? v : 'Dismiss',
              )
            : null;
        }
        e.useEffect(
          function () {
            if (!a && g) {
              var e = Qa(R);
              return (
                e.addEventListener('keydown', t),
                function () {
                  e.removeEventListener('keydown', t);
                }
              );
            }
            function t(e) {
              if ('Tab' === e.key) {
                ai(R, di(Qa(R))) && 0 === H().length && !W && bi(e);
                var t = V(),
                  r = gi(e);
                'reference' === P.current[0] &&
                  r === j &&
                  (bi(e), e.shiftKey ? pi(t[t.length - 1]) : pi(t[1])),
                  'floating' === P.current[1] && r === R && e.shiftKey && (bi(e), pi(t[0]));
              }
            }
          },
          [a, j, R, g, P, w, W, H, V],
        ),
          e.useEffect(
            function () {
              if (!a && y)
                return R && ei(j)
                  ? (j.addEventListener('focusout', t),
                    j.addEventListener('pointerdown', e),
                    !g && R.addEventListener('focusout', t),
                    function () {
                      j.removeEventListener('focusout', t),
                        j.removeEventListener('pointerdown', e),
                        !g && R.removeEventListener('focusout', t);
                    })
                  : void 0;
              function e() {
                (B.current = !0),
                  setTimeout(function () {
                    B.current = !1;
                  });
              }
              function t(e) {
                var t = e.relatedTarget;
                queueMicrotask(function () {
                  var r = !(
                    ai(j, t) ||
                    ai(R, t) ||
                    ai(t, R) ||
                    ai(null == I ? void 0 : I.portalNode, t) ||
                    (null != t && t.hasAttribute(ii('focus-guard'))) ||
                    (_ &&
                      (hi(_.nodesRef.current, k).find(function (e) {
                        var r, n;
                        return (
                          ai(null == (r = e.context) ? void 0 : r.elements.floating, t) ||
                          ai(null == (n = e.context) ? void 0 : n.elements.domReference, t)
                        );
                      }) ||
                        (function (e, t) {
                          for (
                            var r,
                              n = [],
                              o =
                                null ==
                                (r = e.find(function (e) {
                                  return e.id === t;
                                }))
                                  ? void 0
                                  : r.parentId;
                            o;

                          ) {
                            var a = e.find(function (e) {
                              return e.id === o;
                            });
                            (o = null == a ? void 0 : a.parentId), a && (n = n.concat(a));
                          }
                          return n;
                        })(_.nodesRef.current, k).find(function (e) {
                          var r, n;
                          return (
                            (null == (r = e.context) ? void 0 : r.elements.floating) === t ||
                            (null == (n = e.context) ? void 0 : n.elements.domReference) === t
                          );
                        })))
                  );
                  t && r && !B.current && t !== F.current && ((A.current = !0), N(!1, e));
                });
              }
            },
            [a, j, R, g, k, _, I, N, y],
          ),
          e.useEffect(
            function () {
              var e;
              if (!a) {
                var t = Array.from(
                  (null == I || null == (e = I.portalNode)
                    ? void 0
                    : e.querySelectorAll('[' + ii('portal') + ']')) || [],
                );
                if (R && g) {
                  var r = [R].concat(t, [z.current, M.current]).filter(function (e) {
                      return null != e;
                    }),
                    n = (T ? pa : ma)(
                      P.current.includes('reference') || W ? r.concat(j || []) : r,
                      void 0,
                      ii('inert'),
                    );
                  return function () {
                    n();
                  };
                }
              }
            },
            [a, j, R, g, P, I, W, T],
          ),
          Fa(
            function () {
              if (!a && R) {
                var e = di(Qa(R));
                queueMicrotask(function () {
                  var t = V(R),
                    r = O.current,
                    n = ('number' === typeof r ? t[r] : r.current) || R,
                    o = ai(R, e);
                  D || o || !x || pi(n, { preventScroll: n === R });
                });
              }
            },
            [a, x, R, D, V, O],
          ),
          Fa(
            function () {
              if (!a && R) {
                var e = !1,
                  t = Qa(R),
                  r = di(t),
                  n = E.current;
                return (
                  (F.current = r),
                  S.on('dismiss', o),
                  function () {
                    S.off('dismiss', o);
                    var r = di(t);
                    (ai(R, r) ||
                      (_ &&
                        hi(_.nodesRef.current, k).some(function (e) {
                          var t;
                          return ai(null == (t = e.context) ? void 0 : t.elements.floating, r);
                        })) ||
                      (n.openEvent && ['click', 'mousedown'].includes(n.openEvent.type))) &&
                      w.domReference.current &&
                      (F.current = w.domReference.current),
                      L.current &&
                        ei(F.current) &&
                        !A.current &&
                        pi(F.current, { cancelPrevious: !1, preventScroll: e });
                  }
                );
              }
              function o(t) {
                if (
                  ('escapeKey' === t.type &&
                    w.domReference.current &&
                    (F.current = w.domReference.current),
                  !['referencePress', 'escapeKey'].includes(t.type))
                ) {
                  var r = t.data.returnFocus;
                  'object' === typeof r
                    ? ((A.current = !1), (e = r.preventScroll))
                    : (A.current = !r);
                }
              }
            },
            [a, R, L, E, w, S, _, k],
          ),
          Fa(
            function () {
              if (!a && I)
                return (
                  I.setFocusManagerState(
                    pt(pt({}, r), {}, { modal: g, closeOnFocusOut: y, open: x }),
                  ),
                  function () {
                    I.setFocusManagerState(null);
                  }
                );
            },
            [a, I, g, x, y, r],
          ),
          Fa(
            function () {
              if (!a && R && 'function' === typeof MutationObserver) {
                var e = function () {
                  var e = R.getAttribute('tabindex');
                  P.current.includes('floating') ||
                  (di(Qa(R)) !== w.domReference.current && 0 === H().length)
                    ? '0' !== e && R.setAttribute('tabindex', '0')
                    : '-1' !== e && R.setAttribute('tabindex', '-1');
                };
                e();
                var t = new MutationObserver(e);
                return (
                  t.observe(R, { childList: !0, subtree: !0, attributes: !0 }),
                  function () {
                    t.disconnect();
                  }
                );
              }
            },
            [a, R, w, P, H],
          );
        var q = !a && T && !W && (U || g);
        return e.createElement(
          e.Fragment,
          null,
          q &&
            e.createElement(Ri, {
              'data-type': 'inside',
              ref: null == I ? void 0 : I.beforeInsideRef,
              onFocus: function (e) {
                if (g) {
                  var t = V();
                  pi('reference' === l[0] ? t[0] : t[t.length - 1]);
                } else if (null != I && I.preserveTabOrder && I.portalNode)
                  if (((A.current = !1), Ni(e, I.portalNode))) {
                    var r = wi() || j;
                    null == r || r.focus();
                  } else {
                    var n;
                    null == (n = I.beforeOutsideRef.current) || n.focus();
                  }
              },
            }),
          !W && $('start'),
          n,
          $('end'),
          q &&
            e.createElement(Ri, {
              'data-type': 'inside',
              ref: null == I ? void 0 : I.afterInsideRef,
              onFocus: function (e) {
                if (g) pi(V()[0]);
                else if (null != I && I.preserveTabOrder && I.portalNode)
                  if ((y && (A.current = !0), Ni(e, I.portalNode))) {
                    var t = ki() || j;
                    null == t || t.focus();
                  } else {
                    var r;
                    null == (r = I.afterOutsideRef.current) || r.focus();
                  }
              },
            }),
        );
      }
      function Ii(e, t) {
        var r = e.compareDocumentPosition(t);
        return r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY
          ? -1
          : r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS
          ? 1
          : 0;
      }
      var Di = e.createContext({
        register: function () {},
        unregister: function () {},
        map: new Map(),
        elementsRef: { current: [] },
      });
      function zi(t) {
        var r = t.children,
          n = t.elementsRef,
          o = t.labelsRef,
          a = f(
            e.useState(function () {
              return new Map();
            }),
            2,
          ),
          i = a[0],
          l = a[1],
          s = e.useCallback(function (e) {
            l(function (t) {
              return new Map(t).set(e, null);
            });
          }, []),
          u = e.useCallback(function (e) {
            l(function (t) {
              var r = new Map(t);
              return r.delete(e), r;
            });
          }, []);
        return (
          Fa(
            function () {
              var e = new Map(i);
              Array.from(e.keys())
                .sort(Ii)
                .forEach(function (t, r) {
                  e.set(t, r);
                }),
                (function (e, t) {
                  if (e.size !== t.size) return !1;
                  var r,
                    n = An(e.entries());
                  try {
                    for (n.s(); !(r = n.n()).done; ) {
                      var o = f(r.value, 2),
                        a = o[0];
                      if (o[1] !== t.get(a)) return !1;
                    }
                  } catch (i) {
                    n.e(i);
                  } finally {
                    n.f();
                  }
                  return !0;
                })(i, e) || l(e);
            },
            [i],
          ),
          e.createElement(
            Di.Provider,
            {
              value: e.useMemo(
                function () {
                  return { register: s, unregister: u, map: i, elementsRef: n, labelsRef: o };
                },
                [s, u, i, n, o],
              ),
            },
            r,
          )
        );
      }
      var Mi = ii('scroll-lock'),
        Ai = e.forwardRef(function (t, r) {
          var n = t.lockScroll,
            o = void 0 !== n && n,
            a = ht(t, Ma);
          return (
            Fa(
              function () {
                var e, t;
                if (o && !document.body.hasAttribute(Mi)) {
                  document.body.setAttribute(Mi, '');
                  var r =
                      Math.round(document.documentElement.getBoundingClientRect().left) +
                      document.documentElement.scrollLeft
                        ? 'paddingLeft'
                        : 'paddingRight',
                    n = window.innerWidth - document.documentElement.clientWidth;
                  if (!/iP(hone|ad|od)|iOS/.test(Ya()))
                    return (
                      Object.assign(document.body.style, dt({ overflow: 'hidden' }, r, n + 'px')),
                      function () {
                        document.body.removeAttribute(Mi),
                          Object.assign(document.body.style, dt({ overflow: '' }, r, ''));
                      }
                    );
                  var a = (null == (e = window.visualViewport) ? void 0 : e.offsetLeft) || 0,
                    i = (null == (t = window.visualViewport) ? void 0 : t.offsetTop) || 0,
                    l = window.pageXOffset,
                    s = window.pageYOffset;
                  return (
                    Object.assign(
                      document.body.style,
                      dt(
                        {
                          position: 'fixed',
                          overflow: 'hidden',
                          top: -(s - Math.floor(i)) + 'px',
                          left: -(l - Math.floor(a)) + 'px',
                          right: '0',
                        },
                        r,
                        n + 'px',
                      ),
                    ),
                    function () {
                      Object.assign(
                        document.body.style,
                        dt({ position: '', overflow: '', top: '', left: '', right: '' }, r, ''),
                      ),
                        document.body.removeAttribute(Mi),
                        window.scrollTo(l, s);
                    }
                  );
                }
              },
              [o],
            ),
            e.createElement(
              'div',
              Aa({ ref: r }, a, {
                style: pt(
                  { position: 'fixed', overflow: 'auto', top: 0, right: 0, bottom: 0, left: 0 },
                  a.style,
                ),
              }),
            )
          );
        });
      function Fi(e) {
        return ei(e.target) && 'BUTTON' === e.target.tagName;
      }
      function Bi(e) {
        return vi(e);
      }
      function Ui(t, r) {
        void 0 === r && (r = {});
        var n = t.open,
          o = t.onOpenChange,
          a = t.dataRef,
          i = t.elements.domReference,
          l = r,
          s = l.enabled,
          u = void 0 === s || s,
          c = l.event,
          d = void 0 === c ? 'click' : c,
          f = l.toggle,
          p = void 0 === f || f,
          h = l.ignoreMouse,
          g = void 0 !== h && h,
          m = l.keyboardHandlers,
          v = void 0 === m || m,
          b = e.useRef(),
          y = e.useRef(!1);
        return e.useMemo(
          function () {
            return u
              ? {
                  reference: {
                    onPointerDown: function (e) {
                      b.current = e.pointerType;
                    },
                    onMouseDown: function (e) {
                      0 === e.button &&
                        ((oi(b.current, !0) && g) ||
                          ('click' !== d &&
                            (!n ||
                            !p ||
                            (a.current.openEvent && 'mousedown' !== a.current.openEvent.type)
                              ? (e.preventDefault(), o(!0, e.nativeEvent))
                              : o(!1, e.nativeEvent))));
                    },
                    onClick: function (e) {
                      'mousedown' === d && b.current
                        ? (b.current = void 0)
                        : (oi(b.current, !0) && g) ||
                          (!n || !p || (a.current.openEvent && 'click' !== a.current.openEvent.type)
                            ? o(!0, e.nativeEvent)
                            : o(!1, e.nativeEvent));
                    },
                    onKeyDown: function (e) {
                      (b.current = void 0),
                        e.defaultPrevented ||
                          !v ||
                          Fi(e) ||
                          (' ' !== e.key || Bi(i) || (e.preventDefault(), (y.current = !0)),
                          'Enter' === e.key && o(!n || !p, e.nativeEvent));
                    },
                    onKeyUp: function (e) {
                      e.defaultPrevented ||
                        !v ||
                        Fi(e) ||
                        Bi(i) ||
                        (' ' === e.key &&
                          y.current &&
                          ((y.current = !1), o(!n || !p, e.nativeEvent)));
                    },
                  },
                }
              : {};
          },
          [u, a, d, g, v, i, p, n, o],
        );
      }
      var Wi =
        t['useInsertionEffect'.toString()] ||
        function (e) {
          return e();
        };
      function Hi(t) {
        var r = e.useRef(function () {
          0;
        });
        return (
          Wi(function () {
            r.current = t;
          }),
          e.useCallback(function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return null == r.current ? void 0 : r.current.apply(r, t);
          }, [])
        );
      }
      function Vi(e, t) {
        if (null == t) return !1;
        if ('composedPath' in e) return e.composedPath().includes(t);
        var r = e;
        return null != r.target && t.contains(r.target);
      }
      var $i = { pointerdown: 'onPointerDown', mousedown: 'onMouseDown', click: 'onClick' },
        qi = {
          pointerdown: 'onPointerDownCapture',
          mousedown: 'onMouseDownCapture',
          click: 'onClickCapture',
        };
      function Gi(t, r) {
        void 0 === r && (r = {});
        var n = t.open,
          o = t.onOpenChange,
          a = t.events,
          i = t.nodeId,
          l = t.elements,
          s = l.reference,
          u = l.domReference,
          c = l.floating,
          d = t.dataRef,
          f = r,
          p = f.enabled,
          h = void 0 === p || p,
          g = f.escapeKey,
          m = void 0 === g || g,
          v = f.outsidePress,
          b = void 0 === v || v,
          y = f.outsidePressEvent,
          x = void 0 === y ? 'pointerdown' : y,
          w = f.referencePress,
          k = void 0 !== w && w,
          N = f.referencePressEvent,
          S = void 0 === N ? 'pointerdown' : N,
          E = f.ancestorScroll,
          C = void 0 !== E && E,
          j = f.bubbles,
          R = Ka(),
          T = null != Ga(),
          P = Hi(
            'function' === typeof b
              ? b
              : function () {
                  return !1;
                },
          ),
          O = 'function' === typeof b ? P : b,
          L = e.useRef(!1),
          _ = (function (e) {
            var t, r;
            return {
              escapeKeyBubbles:
                'boolean' === typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
              outsidePressBubbles:
                'boolean' === typeof e ? e : null == (r = null == e ? void 0 : e.outsidePress) || r,
            };
          })(j),
          I = _.escapeKeyBubbles,
          D = _.outsidePressBubbles,
          z = Hi(function (e) {
            if (n && h && m && 'Escape' === e.key) {
              var t = R ? hi(R.nodesRef.current, i) : [];
              if (!I && (e.stopPropagation(), t.length > 0)) {
                var r = !0;
                if (
                  (t.forEach(function (e) {
                    var t;
                    null == (t = e.context) ||
                      !t.open ||
                      e.context.dataRef.current.__escapeKeyBubbles ||
                      (r = !1);
                  }),
                  !r)
                )
                  return;
              }
              a.emit('dismiss', {
                type: 'escapeKey',
                data: { returnFocus: { preventScroll: !1 } },
              }),
                o(
                  !1,
                  (function (e) {
                    return 'nativeEvent' in e;
                  })(e)
                    ? e.nativeEvent
                    : e,
                );
            }
          }),
          M = Hi(function (e) {
            var t = L.current;
            if (((L.current = !1), !t && ('function' !== typeof O || O(e)))) {
              var r = gi(e);
              if (ei(r) && c) {
                var n = r.clientWidth > 0 && r.scrollWidth > r.clientWidth,
                  l = r.clientHeight > 0 && r.scrollHeight > r.clientHeight,
                  s = l && e.offsetX > r.clientWidth;
                if (l)
                  'rtl' === Ja(c).getComputedStyle(r).direction &&
                    (s = e.offsetX <= r.offsetWidth - r.clientWidth);
                if (s || (n && e.offsetY > r.clientHeight)) return;
              }
              var d =
                R &&
                hi(R.nodesRef.current, i).some(function (t) {
                  var r;
                  return Vi(e, null == (r = t.context) ? void 0 : r.elements.floating);
                });
              if (!(Vi(e, c) || Vi(e, u) || d)) {
                var f = R ? hi(R.nodesRef.current, i) : [];
                if (f.length > 0) {
                  var p = !0;
                  if (
                    (f.forEach(function (e) {
                      var t;
                      null == (t = e.context) ||
                        !t.open ||
                        e.context.dataRef.current.__outsidePressBubbles ||
                        (p = !1);
                    }),
                    !p)
                  )
                    return;
                }
                a.emit('dismiss', {
                  type: 'outsidePress',
                  data: { returnFocus: T ? { preventScroll: !0 } : ti(e) || ri(e) },
                }),
                  o(!1, e);
              }
            }
          });
        return (
          e.useEffect(
            function () {
              if (n && h) {
                (d.current.__escapeKeyBubbles = I), (d.current.__outsidePressBubbles = D);
                var e = Qa(c);
                m && e.addEventListener('keydown', z), O && e.addEventListener(x, M);
                var t = [];
                return (
                  C &&
                    (Za(u) && (t = to(u)),
                    Za(c) && (t = t.concat(to(c))),
                    !Za(s) && s && s.contextElement && (t = t.concat(to(s.contextElement)))),
                  (t = t.filter(function (t) {
                    var r;
                    return t !== (null == (r = e.defaultView) ? void 0 : r.visualViewport);
                  })).forEach(function (e) {
                    e.addEventListener('scroll', r, { passive: !0 });
                  }),
                  function () {
                    m && e.removeEventListener('keydown', z),
                      O && e.removeEventListener(x, M),
                      t.forEach(function (e) {
                        e.removeEventListener('scroll', r);
                      });
                  }
                );
              }
              function r(e) {
                o(!1, e);
              }
            },
            [d, c, u, s, m, O, x, n, o, C, h, I, D, z, M],
          ),
          e.useEffect(
            function () {
              L.current = !1;
            },
            [O, x],
          ),
          e.useMemo(
            function () {
              return h
                ? {
                    reference: dt({ onKeyDown: z }, $i[S], function (e) {
                      k &&
                        (a.emit('dismiss', { type: 'referencePress', data: { returnFocus: !1 } }),
                        o(!1, e.nativeEvent));
                    }),
                    floating: dt({ onKeyDown: z }, qi[x], function () {
                      L.current = !0;
                    }),
                  }
                : {};
            },
            [h, a, k, x, S, o, z],
          )
        );
      }
      function Ki(t) {
        var r;
        void 0 === t && (t = {});
        var n = t,
          o = n.open,
          a = void 0 !== o && o,
          i = n.onOpenChange,
          l = n.nodeId,
          s = f(e.useState(null), 2),
          u = s[0],
          c = s[1],
          d = (null == (r = t.elements) ? void 0 : r.reference) || u,
          p = (function (t) {
            void 0 === t && (t = {});
            var r = t,
              n = r.placement,
              o = void 0 === n ? 'bottom' : n,
              a = r.strategy,
              i = void 0 === a ? 'absolute' : a,
              l = r.middleware,
              s = void 0 === l ? [] : l,
              u = r.platform,
              c = r.elements,
              d = void 0 === c ? {} : c,
              p = d.reference,
              h = d.floating,
              g = r.transform,
              m = void 0 === g || g,
              v = r.whileElementsMounted,
              b = r.open,
              y = f(
                e.useState({
                  x: 0,
                  y: 0,
                  strategy: i,
                  placement: o,
                  middlewareData: {},
                  isPositioned: !1,
                }),
                2,
              ),
              x = y[0],
              w = y[1],
              k = f(e.useState(s), 2),
              N = k[0],
              S = k[1];
            ra(N, s) || S(s);
            var E = f(e.useState(null), 2),
              C = E[0],
              j = E[1],
              R = f(e.useState(null), 2),
              T = R[0],
              P = R[1],
              O = e.useCallback(
                function (e) {
                  e != D.current && ((D.current = e), j(e));
                },
                [j],
              ),
              L = e.useCallback(
                function (e) {
                  e !== z.current && ((z.current = e), P(e));
                },
                [P],
              ),
              _ = p || C,
              I = h || T,
              D = e.useRef(null),
              z = e.useRef(null),
              M = e.useRef(x),
              A = aa(v),
              F = aa(u),
              B = e.useCallback(
                function () {
                  if (D.current && z.current) {
                    var e = { placement: o, strategy: i, middleware: N };
                    F.current && (e.platform = F.current),
                      Zo(D.current, z.current, e).then(function (e) {
                        var t = pt(pt({}, e), {}, { isPositioned: !0 });
                        U.current &&
                          !ra(M.current, t) &&
                          ((M.current = t),
                          ea.flushSync(function () {
                            w(t);
                          }));
                      });
                  }
                },
                [N, o, i, F],
              );
            ta(
              function () {
                !1 === b &&
                  M.current.isPositioned &&
                  ((M.current.isPositioned = !1),
                  w(function (e) {
                    return pt(pt({}, e), {}, { isPositioned: !1 });
                  }));
              },
              [b],
            );
            var U = e.useRef(!1);
            ta(function () {
              return (
                (U.current = !0),
                function () {
                  U.current = !1;
                }
              );
            }, []),
              ta(
                function () {
                  if ((_ && (D.current = _), I && (z.current = I), _ && I)) {
                    if (A.current) return A.current(_, I, B);
                    B();
                  }
                },
                [_, I, B, A],
              );
            var W = e.useMemo(
                function () {
                  return { reference: D, floating: z, setReference: O, setFloating: L };
                },
                [O, L],
              ),
              H = e.useMemo(
                function () {
                  return { reference: _, floating: I };
                },
                [_, I],
              ),
              V = e.useMemo(
                function () {
                  var e = { position: i, left: 0, top: 0 };
                  if (!H.floating) return e;
                  var t = oa(H.floating, x.x),
                    r = oa(H.floating, x.y);
                  return m
                    ? pt(
                        pt({}, e),
                        {},
                        { transform: 'translate(' + t + 'px, ' + r + 'px)' },
                        na(H.floating) >= 1.5 && { willChange: 'transform' },
                      )
                    : { position: i, left: t, top: r };
                },
                [i, m, H.floating, x.x, x.y],
              );
            return e.useMemo(
              function () {
                return pt(pt({}, x), {}, { update: B, refs: W, elements: H, floatingStyles: V });
              },
              [x, B, W, H, V],
            );
          })(t),
          h = Ka(),
          g = Hi(function (e, t) {
            e && (v.current.openEvent = t), null == i || i(e, t);
          }),
          m = e.useRef(null),
          v = e.useRef({}),
          b = e.useState(function () {
            return Va();
          })[0],
          y = Ha(),
          x = e.useCallback(
            function (e) {
              var t = Za(e)
                ? {
                    getBoundingClientRect: function () {
                      return e.getBoundingClientRect();
                    },
                    contextElement: e,
                  }
                : e;
              p.refs.setReference(t);
            },
            [p.refs],
          ),
          w = e.useCallback(
            function (e) {
              (Za(e) || null === e) && ((m.current = e), c(e)),
                (Za(p.refs.reference.current) ||
                  null === p.refs.reference.current ||
                  (null !== e && !Za(e))) &&
                  p.refs.setReference(e);
            },
            [p.refs],
          ),
          k = e.useMemo(
            function () {
              return pt(
                pt({}, p.refs),
                {},
                { setReference: w, setPositionReference: x, domReference: m },
              );
            },
            [p.refs, w, x],
          ),
          N = e.useMemo(
            function () {
              return pt(pt({}, p.elements), {}, { domReference: d });
            },
            [p.elements, d],
          ),
          S = e.useMemo(
            function () {
              return pt(
                pt({}, p),
                {},
                {
                  refs: k,
                  elements: N,
                  dataRef: v,
                  nodeId: l,
                  floatingId: y,
                  events: b,
                  open: a,
                  onOpenChange: g,
                },
              );
            },
            [p, l, y, b, a, g, k, N],
          );
        return (
          Fa(function () {
            var e =
              null == h
                ? void 0
                : h.nodesRef.current.find(function (e) {
                    return e.id === l;
                  });
            e && (e.context = S);
          }),
          e.useMemo(
            function () {
              return pt(pt({}, p), {}, { context: S, refs: k, elements: N });
            },
            [p, k, N, S],
          )
        );
      }
      function Qi(e, t, r) {
        var n = new Map();
        return pt(
          pt(pt({}, 'floating' === r && { tabIndex: -1 }), e),
          t
            .map(function (e) {
              return e ? e[r] : null;
            })
            .concat(e)
            .reduce(function (e, t) {
              return t
                ? (Object.entries(t).forEach(function (t) {
                    var r,
                      o = f(t, 2),
                      a = o[0],
                      i = o[1];
                    0 === a.indexOf('on')
                      ? (n.has(a) || n.set(a, []),
                        'function' === typeof i &&
                          (null == (r = n.get(a)) || r.push(i),
                          (e[a] = function () {
                            for (var e, t = arguments.length, r = new Array(t), o = 0; o < t; o++)
                              r[o] = arguments[o];
                            return null == (e = n.get(a))
                              ? void 0
                              : e
                                  .map(function (e) {
                                    return e.apply(void 0, r);
                                  })
                                  .find(function (e) {
                                    return void 0 !== e;
                                  });
                          })))
                      : (e[a] = i);
                  }),
                  e)
                : e;
            }, {}),
        );
      }
      function Yi(t) {
        void 0 === t && (t = []);
        var r = t,
          n = e.useCallback(function (e) {
            return Qi(e, t, 'reference');
          }, r),
          o = e.useCallback(function (e) {
            return Qi(e, t, 'floating');
          }, r),
          a = e.useCallback(
            function (e) {
              return Qi(e, t, 'item');
            },
            t.map(function (e) {
              return null == e ? void 0 : e.item;
            }),
          );
        return e.useMemo(
          function () {
            return { getReferenceProps: n, getFloatingProps: o, getItemProps: a };
          },
          [n, o, a],
        );
      }
      var Xi = !1,
        Ji = 'ArrowUp',
        Zi = 'ArrowDown',
        el = 'ArrowLeft',
        tl = 'ArrowRight';
      function rl(e, t, r) {
        return Math.floor(e / t) !== r;
      }
      function nl(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function ol(e, t) {
        var r = void 0 === t ? {} : t,
          n = r.startingIndex,
          o = void 0 === n ? -1 : n,
          a = r.decrement,
          i = void 0 !== a && a,
          l = r.disabledIndices,
          s = r.amount,
          u = void 0 === s ? 1 : s,
          c = e.current,
          d = o;
        do {
          var f, p;
          d += i ? -u : u;
        } while (
          d >= 0 &&
          d <= c.length - 1 &&
          (l
            ? l.includes(d)
            : null == c[d] ||
              (null == (f = c[d]) ? void 0 : f.hasAttribute('disabled')) ||
              'true' === (null == (p = c[d]) ? void 0 : p.getAttribute('aria-disabled')))
        );
        return d;
      }
      function al(e, t, r) {
        switch (e) {
          case 'vertical':
            return t;
          case 'horizontal':
            return r;
          default:
            return t || r;
        }
      }
      function il(e, t) {
        return al(t, e === Ji || e === Zi, e === el || e === tl);
      }
      function ll(e, t, r) {
        return al(t, e === Zi, r ? e === el : e === tl) || 'Enter' === e || ' ' == e || '' === e;
      }
      function sl(e, t) {
        return ol(e, { disabledIndices: t });
      }
      function ul(e, t) {
        return ol(e, { decrement: !0, startingIndex: e.current.length, disabledIndices: t });
      }
      function cl(t, r) {
        var n = t.open,
          o = t.onOpenChange,
          a = t.refs,
          i = t.elements,
          l = i.domReference,
          s = i.floating,
          u = r.listRef,
          c = r.activeIndex,
          d = r.onNavigate,
          p = void 0 === d ? function () {} : d,
          h = r.enabled,
          g = void 0 === h || h,
          m = r.selectedIndex,
          v = void 0 === m ? null : m,
          b = r.allowEscape,
          y = void 0 !== b && b,
          x = r.loop,
          w = void 0 !== x && x,
          k = r.nested,
          N = void 0 !== k && k,
          S = r.rtl,
          E = void 0 !== S && S,
          C = r.virtual,
          j = void 0 !== C && C,
          R = r.focusItemOnOpen,
          T = void 0 === R ? 'auto' : R,
          P = r.focusItemOnHover,
          O = void 0 === P || P,
          L = r.openOnArrowKeyDown,
          _ = void 0 === L || L,
          I = r.disabledIndices,
          D = void 0 === I ? void 0 : I,
          z = r.orientation,
          M = void 0 === z ? 'vertical' : z,
          A = r.cols,
          F = void 0 === A ? 1 : A,
          B = r.scrollItemIntoView,
          U = void 0 === B || B;
        var W = Ga(),
          H = Ka(),
          V = Hi(p),
          $ = e.useRef(T),
          q = e.useRef(null != v ? v : -1),
          G = e.useRef(null),
          K = e.useRef(!0),
          Q = e.useRef(V),
          Y = e.useRef(!!s),
          X = e.useRef(!1),
          J = e.useRef(!1),
          Z = li(D),
          ee = li(n),
          te = li(U),
          re = f(e.useState(), 2),
          ne = re[0],
          oe = re[1],
          ae = Hi(function (e, t, r) {
            void 0 === r && (r = !1);
            var n = e.current[t.current];
            n &&
              (j
                ? oe(n.id)
                : pi(n, {
                    preventScroll: !0,
                    sync:
                      !(
                        !Ya().toLowerCase().startsWith('mac') ||
                        navigator.maxTouchPoints ||
                        !ni()
                      ) &&
                      (Xi || X.current),
                  }),
              requestAnimationFrame(function () {
                var e = te.current;
                e &&
                  n &&
                  (r || !K.current) &&
                  (null == n.scrollIntoView ||
                    n.scrollIntoView(
                      'boolean' === typeof e ? { block: 'nearest', inline: 'nearest' } : e,
                    ));
              }));
          });
        Fa(function () {
          document.createElement('div').focus({
            get preventScroll() {
              return (Xi = !0), !1;
            },
          });
        }, []),
          Fa(
            function () {
              g &&
                (n && s
                  ? $.current && null != v && ((J.current = !0), V(v))
                  : Y.current && ((q.current = -1), Q.current(null)));
            },
            [g, n, s, v, V],
          ),
          Fa(
            function () {
              if (g && n && s)
                if (null == c) {
                  if (((X.current = !1), null != v)) return;
                  if (
                    (Y.current && ((q.current = -1), ae(u, q)),
                    !Y.current &&
                      $.current &&
                      (null != G.current || (!0 === $.current && null == G.current)))
                  ) {
                    var e = 0;
                    !(function t() {
                      if (null == u.current[0]) {
                        if (e < 2) (e ? requestAnimationFrame : queueMicrotask)(t);
                        e++;
                      } else
                        (q.current =
                          null == G.current || ll(G.current, M, E) || N
                            ? sl(u, Z.current)
                            : ul(u, Z.current)),
                          (G.current = null),
                          V(q.current);
                    })();
                  }
                } else nl(u, c) || ((q.current = c), ae(u, q, J.current), (J.current = !1));
            },
            [g, n, s, c, v, N, u, M, E, V, ae, Z],
          ),
          Fa(
            function () {
              if (g && Y.current && !s && H) {
                var e,
                  t,
                  r = H.nodesRef.current,
                  n =
                    null ==
                      (e = r.find(function (e) {
                        return e.id === W;
                      })) || null == (t = e.context)
                      ? void 0
                      : t.elements.floating,
                  o = di(Qa(s)),
                  a = r.some(function (e) {
                    return e.context && ai(e.context.elements.floating, o);
                  });
                n && !a && n.focus({ preventScroll: !0 });
              }
            },
            [g, s, H, W],
          ),
          Fa(function () {
            (Q.current = V), (Y.current = !!s);
          }),
          Fa(
            function () {
              n || (G.current = null);
            },
            [n],
          );
        var ie = null != c,
          le = e.useMemo(
            function () {
              function e(e) {
                if (n) {
                  var t = u.current.indexOf(e);
                  -1 !== t && V(t);
                }
              }
              var t = pt(
                {
                  onFocus: function (t) {
                    e(t.currentTarget);
                  },
                  onClick: function (e) {
                    return e.currentTarget.focus({ preventScroll: !0 });
                  },
                },
                O && {
                  onMouseMove: function (t) {
                    e(t.currentTarget);
                  },
                  onPointerLeave: function (e) {
                    var t = e.pointerType;
                    K.current &&
                      'touch' !== t &&
                      ((q.current = -1),
                      ae(u, q),
                      V(null),
                      j || pi(a.floating.current, { preventScroll: !0 }));
                  },
                },
              );
              return t;
            },
            [n, a, ae, O, u, V, j],
          );
        return e.useMemo(
          function () {
            if (!g) return {};
            var e = Z.current;
            function t(t) {
              if (
                ((K.current = !1),
                (X.current = !0),
                ee.current || t.currentTarget !== a.floating.current)
              ) {
                if (
                  N &&
                  (function (e, t, r) {
                    return al(t, r ? e === tl : e === el, e === Ji);
                  })(t.key, M, E)
                )
                  return bi(t), o(!1, t.nativeEvent), void (ei(l) && l.focus());
                var r = q.current,
                  i = sl(u, e),
                  s = ul(u, e);
                if (
                  ('Home' === t.key && (bi(t), (q.current = i), V(q.current)),
                  'End' === t.key && (bi(t), (q.current = s), V(q.current)),
                  F > 1)
                ) {
                  var c = q.current;
                  if (t.key === Ji) {
                    if ((bi(t), -1 === c)) q.current = s;
                    else if (
                      ((q.current = ol(u, {
                        startingIndex: c,
                        amount: F,
                        decrement: !0,
                        disabledIndices: e,
                      })),
                      w && (c - F < i || q.current < 0))
                    ) {
                      var d = c % F,
                        f = s % F,
                        p = s - (f - d);
                      q.current = f === d ? s : f > d ? p : p - F;
                    }
                    nl(u, q.current) && (q.current = c), V(q.current);
                  }
                  if (
                    (t.key === Zi &&
                      (bi(t),
                      -1 === c
                        ? (q.current = i)
                        : ((q.current = ol(u, { startingIndex: c, amount: F, disabledIndices: e })),
                          w &&
                            c + F > s &&
                            (q.current = ol(u, {
                              startingIndex: (c % F) - F,
                              amount: F,
                              disabledIndices: e,
                            }))),
                      nl(u, q.current) && (q.current = c),
                      V(q.current)),
                    'both' === M)
                  ) {
                    var h = Math.floor(c / F);
                    t.key === tl &&
                      (bi(t),
                      c % F !== F - 1
                        ? ((q.current = ol(u, { startingIndex: c, disabledIndices: e })),
                          w &&
                            rl(q.current, F, h) &&
                            (q.current = ol(u, {
                              startingIndex: c - (c % F) - 1,
                              disabledIndices: e,
                            })))
                        : w &&
                          (q.current = ol(u, {
                            startingIndex: c - (c % F) - 1,
                            disabledIndices: e,
                          })),
                      rl(q.current, F, h) && (q.current = c)),
                      t.key === el &&
                        (bi(t),
                        c % F !== 0
                          ? ((q.current = ol(u, {
                              startingIndex: c,
                              disabledIndices: e,
                              decrement: !0,
                            })),
                            w &&
                              rl(q.current, F, h) &&
                              (q.current = ol(u, {
                                startingIndex: c + (F - (c % F)),
                                decrement: !0,
                                disabledIndices: e,
                              })))
                          : w &&
                            (q.current = ol(u, {
                              startingIndex: c + (F - (c % F)),
                              decrement: !0,
                              disabledIndices: e,
                            })),
                        rl(q.current, F, h) && (q.current = c));
                    var g = Math.floor(s / F) === h;
                    return (
                      nl(u, q.current) &&
                        (q.current =
                          w && g
                            ? t.key === el
                              ? s
                              : ol(u, { startingIndex: c - (c % F) - 1, disabledIndices: e })
                            : c),
                      void V(q.current)
                    );
                  }
                }
                if (il(t.key, M)) {
                  if ((bi(t), n && !j && di(t.currentTarget.ownerDocument) === t.currentTarget))
                    return (q.current = ll(t.key, M, E) ? i : s), void V(q.current);
                  ll(t.key, M, E)
                    ? (q.current = w
                        ? r >= s
                          ? y && r !== u.current.length
                            ? -1
                            : i
                          : ol(u, { startingIndex: r, disabledIndices: e })
                        : Math.min(s, ol(u, { startingIndex: r, disabledIndices: e })))
                    : (q.current = w
                        ? r <= i
                          ? y && -1 !== r
                            ? u.current.length
                            : s
                          : ol(u, { startingIndex: r, decrement: !0, disabledIndices: e })
                        : Math.max(
                            i,
                            ol(u, { startingIndex: r, decrement: !0, disabledIndices: e }),
                          )),
                    nl(u, q.current) ? V(null) : V(q.current);
                }
              }
            }
            function r(e) {
              'auto' === T && ti(e.nativeEvent) && ($.current = !0);
            }
            var i = j && n && ie && { 'aria-activedescendant': ne };
            return {
              reference: pt(
                pt({}, i),
                {},
                {
                  onKeyDown: function (r) {
                    K.current = !1;
                    var a = 0 === r.key.indexOf('Arrow');
                    if (j && n) return t(r);
                    if (n || _ || !a) {
                      var i = a || 'Enter' === r.key || '' === r.key.trim(),
                        l = il(r.key, M),
                        s = (function (e, t, r) {
                          return al(t, r ? e === el : e === tl, e === Zi);
                        })(r.key, M, E);
                      i && (G.current = N && l ? null : r.key),
                        N
                          ? s &&
                            (bi(r),
                            n ? ((q.current = sl(u, e)), V(q.current)) : o(!0, r.nativeEvent))
                          : l &&
                            (null != v && (q.current = v),
                            bi(r),
                            !n && _ ? o(!0, r.nativeEvent) : t(r),
                            n && V(q.current));
                    }
                  },
                  onFocus: function () {
                    n && V(null);
                  },
                  onPointerDown: function (e) {
                    ($.current = T), 'auto' === T && ri(e.nativeEvent) && ($.current = !0);
                  },
                  onMouseDown: r,
                  onClick: r,
                },
              ),
              floating: pt(
                pt({ 'aria-orientation': 'both' === M ? void 0 : M }, i),
                {},
                {
                  onKeyDown: t,
                  onPointerMove: function () {
                    K.current = !0;
                  },
                },
              ),
              item: le,
            };
          },
          [l, a, ne, Z, ee, u, g, M, E, j, n, ie, N, v, _, y, F, w, T, V, o, le],
        );
      }
      function dl(t, r) {
        void 0 === r && (r = {});
        var n = t.open,
          o = t.floatingId,
          a = r,
          i = a.enabled,
          l = void 0 === i || i,
          s = a.role,
          u = void 0 === s ? 'dialog' : s,
          c = Ha();
        return e.useMemo(
          function () {
            var e = { id: o, role: u };
            return l
              ? 'tooltip' === u
                ? { reference: { 'aria-describedby': n ? o : void 0 }, floating: e }
                : {
                    reference: pt(
                      pt(
                        {
                          'aria-expanded': n ? 'true' : 'false',
                          'aria-haspopup': 'alertdialog' === u ? 'dialog' : u,
                          'aria-controls': n ? o : void 0,
                        },
                        'listbox' === u && { role: 'combobox' },
                      ),
                      'menu' === u && { id: c },
                    ),
                    floating: pt(pt({}, e), 'menu' === u && { 'aria-labelledby': c }),
                  }
              : {};
          },
          [l, u, n, o, c],
        );
      }
      function fl(e, t) {
        for (
          var r = f(e, 2), n = r[0], o = r[1], a = !1, i = t.length, l = 0, s = i - 1;
          l < i;
          s = l++
        ) {
          var u = f(t[l] || [0, 0], 2),
            c = u[0],
            d = u[1],
            p = f(t[s] || [0, 0], 2),
            h = p[0],
            g = p[1];
          d >= o !== g >= o && n <= ((h - c) * (o - d)) / (g - d) + c && (a = !a);
        }
        return a;
      }
      function pl(e) {
        void 0 === e && (e = {});
        var t,
          r = e,
          n = r.buffer,
          o = void 0 === n ? 0.5 : n,
          a = r.blockPointerEvents,
          i = void 0 !== a && a,
          l = r.requireIntent,
          s = void 0 === l || l,
          u = !1,
          c = null,
          d = null,
          p = performance.now();
        var h = function (e) {
          var r = e.x,
            n = e.y,
            a = e.placement,
            i = e.elements,
            l = e.onClose,
            h = e.nodeId,
            g = e.tree;
          return function (e) {
            function m() {
              clearTimeout(t), l();
            }
            if (
              (clearTimeout(t), i.domReference && i.floating && null != a && null != r && null != n)
            ) {
              var v = e.clientX,
                b = e.clientY,
                y = [v, b],
                x = gi(e),
                w = 'mouseleave' === e.type,
                k = ai(i.floating, x),
                N = ai(i.domReference, x),
                S = i.domReference.getBoundingClientRect(),
                E = i.floating.getBoundingClientRect(),
                C = a.split('-')[0],
                j = r > E.right - E.width / 2,
                R = n > E.bottom - E.height / 2,
                T = (function (e, t) {
                  return (
                    e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
                  );
                })(y, S),
                P = E.width > S.width,
                O = E.height > S.height,
                L = (P ? S : E).left,
                _ = (P ? S : E).right,
                I = (O ? S : E).top,
                D = (O ? S : E).bottom;
              if (!k || ((u = !0), w))
                if ((N && (u = !1), !N || w)) {
                  if (
                    !(w && Za(e.relatedTarget) && ai(i.floating, e.relatedTarget)) &&
                    (!g ||
                      !hi(g.nodesRef.current, h).some(function (e) {
                        var t = e.context;
                        return null == t ? void 0 : t.open;
                      }))
                  ) {
                    if (
                      ('top' === C && n >= S.bottom - 1) ||
                      ('bottom' === C && n <= S.top + 1) ||
                      ('left' === C && r >= S.right - 1) ||
                      ('right' === C && r <= S.left + 1)
                    )
                      return m();
                    var z = [];
                    switch (C) {
                      case 'top':
                        z = [
                          [L, S.top + 1],
                          [L, E.bottom - 1],
                          [_, E.bottom - 1],
                          [_, S.top + 1],
                        ];
                        break;
                      case 'bottom':
                        z = [
                          [L, E.top + 1],
                          [L, S.bottom - 1],
                          [_, S.bottom - 1],
                          [_, E.top + 1],
                        ];
                        break;
                      case 'left':
                        z = [
                          [E.right - 1, D],
                          [E.right - 1, I],
                          [S.left + 1, I],
                          [S.left + 1, D],
                        ];
                        break;
                      case 'right':
                        z = [
                          [S.right - 1, D],
                          [S.right - 1, I],
                          [E.left + 1, I],
                          [E.left + 1, D],
                        ];
                    }
                    if (!fl([v, b], z)) {
                      if (u && !T) return m();
                      if (!w && s) {
                        var M = (function (e, t) {
                          var r = performance.now(),
                            n = r - p;
                          if (null === c || null === d || 0 === n)
                            return (c = e), (d = t), (p = r), null;
                          var o = e - c,
                            a = t - d,
                            i = Math.sqrt(o * o + a * a);
                          return (c = e), (d = t), (p = r), i / n;
                        })(e.clientX, e.clientY);
                        if (null !== M && M < 0.1) return m();
                      }
                      fl(
                        [v, b],
                        (function (e) {
                          var t = f(e, 2),
                            r = t[0],
                            n = t[1];
                          switch (C) {
                            case 'top':
                              var a = [P ? r + o / 2 : j ? r + 4 * o : r - 4 * o, n + o + 1],
                                i = [P ? r - o / 2 : j ? r + 4 * o : r - 4 * o, n + o + 1],
                                l = [
                                  [E.left, j || P ? E.bottom - o : E.top],
                                  [E.right, j ? (P ? E.bottom - o : E.top) : E.bottom - o],
                                ];
                              return [a, i].concat(l);
                            case 'bottom':
                              var s = [P ? r + o / 2 : j ? r + 4 * o : r - 4 * o, n - o],
                                u = [P ? r - o / 2 : j ? r + 4 * o : r - 4 * o, n - o],
                                c = [
                                  [E.left, j || P ? E.top + o : E.bottom],
                                  [E.right, j ? (P ? E.top + o : E.bottom) : E.top + o],
                                ];
                              return [s, u].concat(c);
                            case 'left':
                              var d = [r + o + 1, O ? n + o / 2 : R ? n + 4 * o : n - 4 * o],
                                p = [r + o + 1, O ? n - o / 2 : R ? n + 4 * o : n - 4 * o],
                                h = [
                                  [R || O ? E.right - o : E.left, E.top],
                                  [R ? (O ? E.right - o : E.left) : E.right - o, E.bottom],
                                ];
                              return [].concat(h, [d, p]);
                            case 'right':
                              var g = [r - o, O ? n + o / 2 : R ? n + 4 * o : n - 4 * o],
                                m = [r - o, O ? n - o / 2 : R ? n + 4 * o : n - 4 * o],
                                v = [
                                  [R || O ? E.left + o : E.right, E.top],
                                  [R ? (O ? E.left + o : E.right) : E.left + o, E.bottom],
                                ];
                              return [g, m].concat(v);
                          }
                        })([r, n]),
                      )
                        ? !u && s && (t = window.setTimeout(m, 40))
                        : m();
                    }
                  }
                } else u = !0;
            }
          };
        };
        return (h.__options = { blockPointerEvents: i }), h;
      }
      var hl = ['className'],
        gl = function (e) {
          var t = e.className,
            r = ht(e, hl),
            n = kn().theme.dropdown.floating.divider;
          return (0, gt.jsx)('div', pt({ className: kr(n, t) }, r));
        },
        ml = ['children', 'className'],
        vl = function (e) {
          var t = e.children,
            r = e.className,
            n = ht(e, ml),
            o = kn().theme.dropdown.floating.header;
          return (0, gt.jsxs)(gt.Fragment, {
            children: [
              (0, gt.jsx)('div', pt(pt({ className: kr(o, r) }, n), {}, { children: t })),
              (0, gt.jsx)(gl, {}),
            ],
          });
        },
        bl = ['children', 'className', 'icon', 'onClick', 'theme'],
        yl = function (e) {
          var t,
            r = e.arrowRef,
            n = e.placement,
            o = [];
          return (
            o.push(
              (void 0 === (t = 8) && (t = 0),
              {
                name: 'offset',
                options: t,
                fn: function (e) {
                  return l(
                    a().mark(function r() {
                      var n, o, i;
                      return a().wrap(function (r) {
                        for (;;)
                          switch ((r.prev = r.next)) {
                            case 0:
                              return (n = e.x), (o = e.y), (r.next = 3), Mo(e, t);
                            case 3:
                              return (
                                (i = r.sent),
                                r.abrupt('return', { x: n + i.x, y: o + i.y, data: i })
                              );
                            case 5:
                            case 'end':
                              return r.stop();
                          }
                      }, r);
                    }),
                  )();
                },
              }),
            ),
            o.push(
              'auto' === n
                ? (function (e) {
                    return (
                      void 0 === e && (e = {}),
                      {
                        name: 'autoPlacement',
                        options: e,
                        fn: function (t) {
                          return l(
                            a().mark(function r() {
                              var n,
                                o,
                                i,
                                l,
                                s,
                                u,
                                c,
                                d,
                                f,
                                p,
                                h,
                                g,
                                m,
                                v,
                                b,
                                y,
                                x,
                                w,
                                k,
                                N,
                                S,
                                E,
                                C,
                                j,
                                R,
                                T,
                                P,
                                O;
                              return a().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      return (
                                        (l = t.rects),
                                        (s = t.middlewareData),
                                        (u = t.placement),
                                        (c = t.platform),
                                        (d = t.elements),
                                        (f = po(e, t)),
                                        (p = f.crossAxis),
                                        (h = void 0 !== p && p),
                                        (g = f.alignment),
                                        (m = f.allowedPlacements),
                                        (v = void 0 === m ? no : m),
                                        (b = f.autoAlignment),
                                        (y = void 0 === b || b),
                                        (x = ht(f, Po)),
                                        (w = void 0 !== g || v === no ? zo(g || null, y, v) : v),
                                        (r.next = 5),
                                        Io(t, x)
                                      );
                                    case 5:
                                      if (
                                        ((k = r.sent),
                                        (N =
                                          (null == (n = s.autoPlacement) ? void 0 : n.index) || 0),
                                        null != (S = w[N]))
                                      ) {
                                        r.next = 10;
                                        break;
                                      }
                                      return r.abrupt('return', {});
                                    case 10:
                                      return (
                                        (r.t0 = xo),
                                        (r.t1 = S),
                                        (r.t2 = l),
                                        (r.next = 15),
                                        null == c.isRTL ? void 0 : c.isRTL(d.floating)
                                      );
                                    case 15:
                                      if (
                                        ((r.t3 = r.sent),
                                        (E = (0, r.t0)(r.t1, r.t2, r.t3)),
                                        u === S)
                                      ) {
                                        r.next = 19;
                                        break;
                                      }
                                      return r.abrupt('return', { reset: { placement: w[0] } });
                                    case 19:
                                      if (
                                        ((C = [k[ho(S)], k[E[0]], k[E[1]]]),
                                        (j = [].concat(
                                          Ln(
                                            (null == (o = s.autoPlacement)
                                              ? void 0
                                              : o.overflows) || [],
                                          ),
                                          [{ placement: S, overflows: C }],
                                        )),
                                        !(R = w[N + 1]))
                                      ) {
                                        r.next = 24;
                                        break;
                                      }
                                      return r.abrupt('return', {
                                        data: { index: N + 1, overflows: j },
                                        reset: { placement: R },
                                      });
                                    case 24:
                                      if (
                                        ((T = j
                                          .map(function (e) {
                                            var t = go(e.placement);
                                            return [
                                              e.placement,
                                              t && h
                                                ? e.overflows.slice(0, 2).reduce(function (e, t) {
                                                    return e + t;
                                                  }, 0)
                                                : e.overflows[0],
                                              e.overflows,
                                            ];
                                          })
                                          .sort(function (e, t) {
                                            return e[1] - t[1];
                                          })),
                                        (P = T.filter(function (e) {
                                          return e[2]
                                            .slice(0, go(e[0]) ? 2 : 3)
                                            .every(function (e) {
                                              return e <= 0;
                                            });
                                        })),
                                        (O = (null == (i = P[0]) ? void 0 : i[0]) || T[0][0]) === u)
                                      ) {
                                        r.next = 29;
                                        break;
                                      }
                                      return r.abrupt('return', {
                                        data: { index: N + 1, overflows: j },
                                        reset: { placement: O },
                                      });
                                    case 29:
                                      return r.abrupt('return', {});
                                    case 30:
                                    case 'end':
                                      return r.stop();
                                  }
                              }, r);
                            }),
                          )();
                        },
                      }
                    );
                  })()
                : (function (e) {
                    return (
                      void 0 === e && (e = {}),
                      {
                        name: 'flip',
                        options: e,
                        fn: function (t) {
                          return l(
                            a().mark(function r() {
                              var n,
                                o,
                                i,
                                l,
                                s,
                                u,
                                c,
                                d,
                                f,
                                p,
                                h,
                                g,
                                m,
                                v,
                                b,
                                y,
                                x,
                                w,
                                k,
                                N,
                                S,
                                E,
                                C,
                                j,
                                R,
                                T,
                                P,
                                O,
                                L,
                                _,
                                I,
                                D,
                                z,
                                M,
                                A,
                                F,
                                B;
                              return a().wrap(function (r) {
                                for (;;)
                                  switch ((r.prev = r.next)) {
                                    case 0:
                                      if (
                                        ((i = t.placement),
                                        (l = t.middlewareData),
                                        (s = t.rects),
                                        (u = t.initialPlacement),
                                        (c = t.platform),
                                        (d = t.elements),
                                        (f = po(e, t)),
                                        (p = f.mainAxis),
                                        (h = void 0 === p || p),
                                        (g = f.crossAxis),
                                        (m = void 0 === g || g),
                                        (v = f.fallbackPlacements),
                                        (b = f.fallbackStrategy),
                                        (y = void 0 === b ? 'bestFit' : b),
                                        (x = f.fallbackAxisSideDirection),
                                        (w = void 0 === x ? 'none' : x),
                                        (k = f.flipAlignment),
                                        (N = void 0 === k || k),
                                        (S = ht(f, Oo)),
                                        null == (n = l.arrow) || !n.alignmentOffset)
                                      ) {
                                        r.next = 4;
                                        break;
                                      }
                                      return r.abrupt('return', {});
                                    case 4:
                                      return (
                                        (E = ho(i)),
                                        (C = ho(u) === u),
                                        (r.next = 8),
                                        null == c.isRTL ? void 0 : c.isRTL(d.floating)
                                      );
                                    case 8:
                                      return (
                                        (j = r.sent),
                                        (R = v || (C || !N ? [So(u)] : wo(u))),
                                        v || 'none' === w || R.push.apply(R, Ln(No(u, N, w, j))),
                                        (T = [u].concat(Ln(R))),
                                        (r.next = 14),
                                        Io(t, S)
                                      );
                                    case 14:
                                      if (
                                        ((P = r.sent),
                                        (O = []),
                                        (L = (null == (o = l.flip) ? void 0 : o.overflows) || []),
                                        h && O.push(P[E]),
                                        m && ((_ = xo(i, s, j)), O.push(P[_[0]], P[_[1]])),
                                        (L = [].concat(Ln(L), [{ placement: i, overflows: O }])),
                                        O.every(function (e) {
                                          return e <= 0;
                                        }))
                                      ) {
                                        r.next = 37;
                                        break;
                                      }
                                      if (
                                        ((z = ((null == (I = l.flip) ? void 0 : I.index) || 0) + 1),
                                        !(M = T[z]))
                                      ) {
                                        r.next = 25;
                                        break;
                                      }
                                      return r.abrupt('return', {
                                        data: { index: z, overflows: L },
                                        reset: { placement: M },
                                      });
                                    case 25:
                                      if (
                                        ((A =
                                          null ==
                                          (D = L.filter(function (e) {
                                            return e.overflows[0] <= 0;
                                          }).sort(function (e, t) {
                                            return e.overflows[1] - t.overflows[1];
                                          })[0])
                                            ? void 0
                                            : D.placement),
                                        A)
                                      ) {
                                        r.next = 35;
                                        break;
                                      }
                                      (r.t0 = y),
                                        (r.next =
                                          'bestFit' === r.t0
                                            ? 30
                                            : 'initialPlacement' === r.t0
                                            ? 33
                                            : 35);
                                      break;
                                    case 30:
                                      return (
                                        (B =
                                          null ==
                                          (F = L.map(function (e) {
                                            return [
                                              e.placement,
                                              e.overflows
                                                .filter(function (e) {
                                                  return e > 0;
                                                })
                                                .reduce(function (e, t) {
                                                  return e + t;
                                                }, 0),
                                            ];
                                          }).sort(function (e, t) {
                                            return e[1] - t[1];
                                          })[0])
                                            ? void 0
                                            : F[0]),
                                        B && (A = B),
                                        r.abrupt('break', 35)
                                      );
                                    case 33:
                                      return (A = u), r.abrupt('break', 35);
                                    case 35:
                                      if (i === A) {
                                        r.next = 37;
                                        break;
                                      }
                                      return r.abrupt('return', { reset: { placement: A } });
                                    case 37:
                                      return r.abrupt('return', {});
                                    case 38:
                                    case 'end':
                                      return r.stop();
                                  }
                              }, r);
                            }),
                          )();
                        },
                      }
                    );
                  })(),
            ),
            o.push(
              (function (e) {
                return (
                  void 0 === e && (e = {}),
                  {
                    name: 'shift',
                    options: e,
                    fn: function (t) {
                      return l(
                        a().mark(function r() {
                          var n,
                            o,
                            i,
                            l,
                            s,
                            u,
                            c,
                            d,
                            f,
                            p,
                            h,
                            g,
                            m,
                            v,
                            b,
                            y,
                            x,
                            w,
                            k,
                            N,
                            S,
                            E,
                            C,
                            j,
                            R;
                          return a().wrap(function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (o = t.x),
                                    (i = t.y),
                                    (l = t.placement),
                                    (s = po(e, t)),
                                    (u = s.mainAxis),
                                    (c = void 0 === u || u),
                                    (d = s.crossAxis),
                                    (f = void 0 !== d && d),
                                    (p = s.limiter),
                                    (h =
                                      void 0 === p
                                        ? {
                                            fn: function (e) {
                                              return { x: e.x, y: e.y };
                                            },
                                          }
                                        : p),
                                    (g = ht(s, Lo)),
                                    (m = { x: o, y: i }),
                                    (r.next = 5),
                                    Io(t, g)
                                  );
                                case 5:
                                  return (
                                    (v = r.sent),
                                    (b = bo(ho(l))),
                                    (y = mo(b)),
                                    (x = m[y]),
                                    (w = m[b]),
                                    c &&
                                      ((k = 'y' === y ? 'bottom' : 'right'),
                                      (N = x + v['y' === y ? 'top' : 'left']),
                                      (S = x - v[k]),
                                      (x = fo(N, x, S))),
                                    f &&
                                      ((E = 'y' === b ? 'bottom' : 'right'),
                                      (C = w + v['y' === b ? 'top' : 'left']),
                                      (j = w - v[E]),
                                      (w = fo(C, w, j))),
                                    (R = h.fn(
                                      pt(pt({}, t), {}, (dt((n = {}), y, x), dt(n, b, w), n)),
                                    )),
                                    r.abrupt(
                                      'return',
                                      pt(pt({}, R), {}, { data: { x: R.x - o, y: R.y - i } }),
                                    )
                                  );
                                case 14:
                                case 'end':
                                  return r.stop();
                              }
                          }, r);
                        }),
                      )();
                    },
                  }
                );
              })({ padding: 8 }),
            ),
            null !== r &&
              void 0 !== r &&
              r.current &&
              o.push(
                (function (e) {
                  return {
                    name: 'arrow',
                    options: e,
                    fn: function (t) {
                      var r,
                        n = 'function' === typeof e ? e(t) : e,
                        o = n.element,
                        a = n.padding;
                      return o && ((r = o), {}.hasOwnProperty.call(r, 'current'))
                        ? null != o.current
                          ? Do({ element: o.current, padding: a }).fn(t)
                          : {}
                        : o
                        ? Do({ element: o, padding: a }).fn(t)
                        : {};
                    },
                  };
                })({ element: r.current }),
              ),
            o
          );
        },
        xl = function (e) {
          var t = e.placement;
          return 'auto' === t ? void 0 : t;
        },
        wl = function (e) {
          var t = e.open,
            r = e.arrowRef,
            n = e.placement,
            o = void 0 === n ? 'top' : n,
            a = e.setOpen;
          return Ki({
            placement: xl({ placement: o }),
            open: t,
            onOpenChange: a,
            whileElementsMounted: Jo,
            middleware: yl({ placement: o, arrowRef: r }),
          });
        },
        kl = function (e) {
          var t = e.context,
            r = e.trigger,
            n = e.role,
            o = void 0 === n ? 'tooltip' : n,
            a = e.interactions,
            i = void 0 === a ? [] : a;
          return Yi(
            [
              Ui(t, { enabled: 'click' === r }),
              ci(t, { enabled: 'hover' === r, handleClose: pl() }),
              Gi(t),
              dl(t, { role: o }),
            ].concat(Ln(i)),
          );
        },
        Nl = [
          'refs',
          'children',
          'inline',
          'theme',
          'disabled',
          'setButtonWidth',
          'getReferenceProps',
          'renderTrigger',
        ],
        Sl = ['children', 'className', 'dismissOnClick', 'theme', 'renderTrigger'],
        El = ['placement', 'trigger', 'label', 'inline', 'arrowIcon'],
        Cl = {
          top: function (e) {
            return wt({
              tag: 'svg',
              attr: {
                fill: 'none',
                viewBox: '0 0 24 24',
                strokeWidth: '2',
                stroke: 'currentColor',
                'aria-hidden': 'true',
              },
              child: [
                {
                  tag: 'path',
                  attr: { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M5 15l7-7 7 7' },
                },
              ],
            })(e);
          },
          right: It,
          bottom: Lt,
          left: _t,
        },
        jl = function (t) {
          var r = t.refs,
            n = t.children,
            o = t.inline,
            a = t.theme,
            i = t.disabled,
            l = t.setButtonWidth,
            s = t.getReferenceProps,
            u = t.renderTrigger,
            c = ht(t, Nl),
            d = r.reference,
            f = s();
          if (
            ((0, e.useEffect)(
              function () {
                d.current && (null === l || void 0 === l || l(d.current.clientWidth));
              },
              [d, l],
            ),
            u)
          ) {
            var p = u(a);
            return (0, e.cloneElement)(p, pt(pt({ ref: r.setReference, disabled: i }, f), p.props));
          }
          return o
            ? (0, gt.jsx)(
                'button',
                pt(
                  pt(
                    {
                      type: 'button',
                      ref: r.setReference,
                      className: null === a || void 0 === a ? void 0 : a.inlineWrapper,
                      disabled: i,
                    },
                    f,
                  ),
                  {},
                  { children: n },
                ),
              )
            : (0, gt.jsx)(
                Zr,
                pt(
                  pt(pt({}, c), {}, { disabled: i, type: 'button', ref: r.setReference }, f),
                  {},
                  { children: n },
                ),
              );
        },
        Rl = (0, e.createContext)({}),
        Tl = function (t) {
          var r = t.children,
            n = t.className,
            o = t.dismissOnClick,
            a = void 0 === o || o,
            i = t.theme,
            l = void 0 === i ? {} : i,
            s = t.renderTrigger,
            u = ht(t, Sl),
            c = f((0, e.useState)(!1), 2),
            d = c[0],
            p = c[1],
            h = f((0, e.useState)(null), 2),
            g = h[0],
            m = h[1],
            v = f((0, e.useState)(null), 2),
            b = v[0],
            y = v[1],
            x = f((0, e.useState)(void 0), 2),
            w = x[0],
            k = x[1],
            N = (0, e.useRef)([]),
            S = (0, e.useRef)([]),
            E = Er(kn().theme.dropdown, l),
            C = u,
            j = u['data-testid'] || 'flowbite-dropdown-target',
            R = C.placement,
            T = void 0 === R ? (u.inline ? 'bottom-start' : 'bottom') : R,
            P = C.trigger,
            O = void 0 === P ? 'click' : P,
            L = C.label,
            _ = C.inline,
            I = C.arrowIcon,
            D = void 0 === I || I,
            z = ht(C, El),
            M = (0, e.useCallback)(function (e) {
              y(e), p(!1);
            }, []),
            A = (0, e.useCallback)(
              function (e) {
                d ? m(e) : M(e);
              },
              [d, M],
            ),
            F = wl({ open: d, setOpen: p, placement: T }),
            B = F.context,
            U = F.floatingStyles,
            W = F.refs,
            H = cl(B, { listRef: N, activeIndex: g, selectedIndex: b, onNavigate: m }),
            V = (function (t, r) {
              var n,
                o = t.open,
                a = t.dataRef,
                i = r.listRef,
                l = r.activeIndex,
                s = r.onMatch,
                u = r.onTypingChange,
                c = r.enabled,
                d = void 0 === c || c,
                f = r.findMatch,
                p = void 0 === f ? null : f,
                h = r.resetMs,
                g = void 0 === h ? 750 : h,
                m = r.ignoreKeys,
                v = void 0 === m ? [] : m,
                b = r.selectedIndex,
                y = void 0 === b ? null : b,
                x = e.useRef(),
                w = e.useRef(''),
                k = e.useRef(null != (n = null != y ? y : l) ? n : -1),
                N = e.useRef(null),
                S = Hi(s),
                E = Hi(u),
                C = li(p),
                j = li(v);
              return (
                Fa(
                  function () {
                    o && (clearTimeout(x.current), (N.current = null), (w.current = ''));
                  },
                  [o],
                ),
                Fa(
                  function () {
                    var e;
                    o && '' === w.current && (k.current = null != (e = null != y ? y : l) ? e : -1);
                  },
                  [o, y, l],
                ),
                e.useMemo(
                  function () {
                    if (!d) return {};
                    function e(e) {
                      e
                        ? a.current.typing || ((a.current.typing = e), E(e))
                        : a.current.typing && ((a.current.typing = e), E(e));
                    }
                    function t(e, t, r) {
                      var n = C.current
                        ? C.current(t, r)
                        : t.find(function (e) {
                            return (
                              0 ===
                              (null == e
                                ? void 0
                                : e.toLocaleLowerCase().indexOf(r.toLocaleLowerCase()))
                            );
                          });
                      return n ? e.indexOf(n) : -1;
                    }
                    function r(r) {
                      var n = i.current;
                      if (
                        (w.current.length > 0 &&
                          ' ' !== w.current[0] &&
                          (-1 === t(n, n, w.current) ? e(!1) : ' ' === r.key && bi(r)),
                        !(
                          null == n ||
                          j.current.includes(r.key) ||
                          1 !== r.key.length ||
                          r.ctrlKey ||
                          r.metaKey ||
                          r.altKey
                        ))
                      ) {
                        o && ' ' !== r.key && (bi(r), e(!0)),
                          n.every(function (e) {
                            var t, r;
                            return (
                              !e ||
                              (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !==
                                (null == (r = e[1]) ? void 0 : r.toLocaleLowerCase())
                            );
                          }) &&
                            w.current === r.key &&
                            ((w.current = ''), (k.current = N.current)),
                          (w.current += r.key),
                          clearTimeout(x.current),
                          (x.current = setTimeout(function () {
                            (w.current = ''), (k.current = N.current), e(!1);
                          }, g));
                        var a = k.current,
                          l = t(
                            n,
                            [].concat(Ln(n.slice((a || 0) + 1)), Ln(n.slice(0, (a || 0) + 1))),
                            w.current,
                          );
                        -1 !== l
                          ? (S(l), (N.current = l))
                          : ' ' !== r.key && ((w.current = ''), e(!1));
                      }
                    }
                    return {
                      reference: { onKeyDown: r },
                      floating: {
                        onKeyDown: r,
                        onKeyUp: function (t) {
                          ' ' === t.key && e(!1);
                        },
                      },
                    };
                  },
                  [d, o, a, i, g, j, C, S, E],
                )
              );
            })(B, { listRef: S, activeIndex: g, selectedIndex: b, onMatch: A }),
            $ = kl({ context: B, role: 'menu', trigger: O, interactions: [H, V] }),
            q = $.getReferenceProps,
            G = $.getFloatingProps,
            K = $.getItemProps,
            Q = (0, e.useMemo)(
              function () {
                var e,
                  t = f(T.split('-'), 1)[0];
                return null !== (e = Cl[t]) && void 0 !== e ? e : Lt;
              },
              [T],
            );
          return (0, gt.jsxs)(gt.Fragment, {
            children: [
              (0, gt.jsxs)(
                jl,
                pt(
                  pt({}, z),
                  {},
                  {
                    refs: W,
                    inline: _,
                    theme: E,
                    'data-testid': j,
                    className: kr(E.floating.target, z.className),
                    setButtonWidth: k,
                    getReferenceProps: q,
                    renderTrigger: s,
                    children: [L, D && (0, gt.jsx)(Q, { className: E.arrowIcon })],
                  },
                ),
              ),
              (0, gt.jsx)(Rl.Provider, {
                value: { activeIndex: g, dismissOnClick: a, getItemProps: K, handleSelect: M },
                children:
                  d &&
                  (0, gt.jsx)(_i, {
                    context: B,
                    modal: !1,
                    children: (0, gt.jsx)(
                      'div',
                      pt(
                        pt(
                          {
                            ref: W.setFloating,
                            style: pt(pt({}, U), {}, { minWidth: w }),
                            'data-testid': 'flowbite-dropdown',
                            'aria-expanded': d,
                          },
                          G({
                            className: kr(
                              E.floating.base,
                              E.floating.animation,
                              'duration-100',
                              !d && E.floating.hidden,
                              E.floating.style.auto,
                              n,
                            ),
                          }),
                        ),
                        {},
                        {
                          children: (0, gt.jsx)(zi, {
                            elementsRef: N,
                            labelsRef: S,
                            children: (0, gt.jsx)('ul', {
                              className: E.content,
                              tabIndex: -1,
                              children: r,
                            }),
                          }),
                        },
                      ),
                    ),
                  }),
              }),
            ],
          });
        };
      (Tl.displayName = 'Dropdown'),
        (vl.displayName = 'Dropdown.Header'),
        (gl.displayName = 'Dropdown.Divider');
      Object.assign(Tl, {
        Item: function (t) {
          var r = t.children,
            n = t.className,
            o = t.icon,
            a = t.onClick,
            i = t.theme,
            l = void 0 === i ? {} : i,
            s = ht(t, bl),
            u = (function (t) {
              var r = (void 0 === t ? {} : t).label,
                n = f(e.useState(null), 2),
                o = n[0],
                a = n[1],
                i = e.useRef(null),
                l = e.useContext(Di),
                s = l.register,
                u = l.unregister,
                c = l.map,
                d = l.elementsRef,
                p = l.labelsRef,
                h = e.useCallback(
                  function (e) {
                    if (((i.current = e), null !== o && ((d.current[o] = e), p))) {
                      var t,
                        n = void 0 !== r;
                      p.current[o] = n
                        ? r
                        : null != (t = null == e ? void 0 : e.textContent)
                        ? t
                        : null;
                    }
                  },
                  [o, d, p, r],
                );
              return (
                Fa(
                  function () {
                    var e = i.current;
                    if (e)
                      return (
                        s(e),
                        function () {
                          u(e);
                        }
                      );
                  },
                  [s, u],
                ),
                Fa(
                  function () {
                    var e = i.current ? c.get(i.current) : null;
                    null != e && a(e);
                  },
                  [c],
                ),
                e.useMemo(
                  function () {
                    return { ref: h, index: null == o ? -1 : o };
                  },
                  [o, h],
                )
              );
            })({ label: 'string' === typeof r ? r : void 0 }),
            c = u.ref,
            d = u.index,
            p = (0, e.useContext)(Rl),
            h = p.activeIndex,
            g = p.dismissOnClick,
            m = p.getItemProps,
            v = p.handleSelect,
            b = h === d,
            y = Er(kn().theme.dropdown.floating.item, l),
            x = s;
          return (0, gt.jsx)('li', {
            role: 'menuitem',
            className: y.container,
            children: (0, gt.jsxs)(
              qr,
              pt(
                pt(
                  pt({ ref: c, className: kr(y.base, n) }, x),
                  m({
                    onClick: function () {
                      a && a(), g && v(null);
                    },
                  }),
                ),
                {},
                { tabIndex: b ? 0 : -1, children: [o && (0, gt.jsx)(o, { className: y.icon }), r] },
              ),
            ),
          });
        },
        Header: vl,
        Divider: gl,
      });
      var Pl = ['className', 'color', 'helperText', 'sizing', 'theme'];
      (0, e.forwardRef)(function (e, t) {
        var r = e.className,
          n = e.color,
          o = void 0 === n ? 'gray' : n,
          a = e.helperText,
          i = e.sizing,
          l = void 0 === i ? 'md' : i,
          s = e.theme,
          u = void 0 === s ? {} : s,
          c = ht(e, Pl),
          d = Er(kn().theme.fileInput, u);
        return (0, gt.jsxs)(gt.Fragment, {
          children: [
            (0, gt.jsx)('div', {
              className: kr(d.root.base, r),
              children: (0, gt.jsx)('div', {
                className: d.field.base,
                children: (0, gt.jsx)(
                  'input',
                  pt(
                    pt(
                      {
                        className: kr(
                          d.field.input.base,
                          d.field.input.colors[o],
                          d.field.input.sizes[l],
                        ),
                      },
                      c,
                    ),
                    {},
                    { type: 'file', ref: t },
                  ),
                ),
              }),
            }),
            a && (0, gt.jsx)(Kl, { color: o, children: a }),
          ],
        });
      }).displayName = 'FileInput';
      var Ol = ['alt', 'className', 'children', 'href', 'name', 'src', 'theme'],
        Ll = function (e) {
          var t = e.alt,
            r = e.className,
            n = e.children,
            o = e.href,
            a = e.name,
            i = e.src,
            l = e.theme,
            s = void 0 === l ? {} : l,
            u = ht(e, Ol),
            c = Er(kn().theme.footer.brand, s);
          return (0, gt.jsx)('div', {
            children: o
              ? (0, gt.jsxs)(
                  'a',
                  pt(
                    pt(
                      { 'data-testid': 'flowbite-footer-brand', href: o, className: kr(c.base, r) },
                      u,
                    ),
                    {},
                    {
                      children: [
                        (0, gt.jsx)('img', { alt: t, src: i, className: c.img }),
                        (0, gt.jsx)('span', {
                          'data-testid': 'flowbite-footer-brand-span',
                          className: c.span,
                          children: a,
                        }),
                        n,
                      ],
                    },
                  ),
                )
              : (0, gt.jsx)(
                  'img',
                  pt(
                    {
                      alt: t,
                      'data-testid': 'flowbite-footer-brand',
                      src: i,
                      className: kr(c.img, r),
                    },
                    u,
                  ),
                ),
          });
        },
        _l = ['by', 'className', 'href', 'theme', 'year'],
        Il = function (e) {
          var t = e.by,
            r = e.className,
            n = e.href,
            o = e.theme,
            a = void 0 === o ? {} : o,
            i = e.year,
            l = ht(e, _l),
            s = Er(kn().theme.footer.copyright, a);
          return (0, gt.jsxs)(
            'div',
            pt(
              pt({ 'data-testid': 'flowbite-footer-copyright', className: kr(s.base, r) }, l),
              {},
              {
                children: [
                  '\xa9 ',
                  i,
                  n
                    ? (0, gt.jsx)('a', { href: n, className: s.href, children: t })
                    : (0, gt.jsx)('span', {
                        'data-testid': 'flowbite-footer-copyright-span',
                        className: s.span,
                        children: t,
                      }),
                ],
              },
            ),
          );
        },
        Dl = ['className', 'theme'],
        zl = function (e) {
          var t = e.className,
            r = e.theme,
            n = void 0 === r ? {} : r,
            o = ht(e, Dl),
            a = Er(kn().theme.footer.divider, n);
          return (0, gt.jsx)(
            'hr',
            pt({ 'data-testid': 'footer-divider', className: kr(a.base, t) }, o),
          );
        },
        Ml = ['ariaLabel', 'className', 'href', 'icon', 'theme'],
        Al = function (e) {
          var t = e.ariaLabel,
            r = e.className,
            n = e.href,
            o = e.icon,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, Ml),
            s = Er(kn().theme.footer.icon, i);
          return (0, gt.jsx)('div', {
            children: n
              ? (0, gt.jsx)(
                  'a',
                  pt(
                    pt(
                      {
                        'aria-label': t,
                        'data-testid': 'flowbite-footer-icon',
                        href: n,
                        className: kr(s.base, r),
                      },
                      l,
                    ),
                    {},
                    { children: (0, gt.jsx)(o, { className: s.size }) },
                  ),
                )
              : (0, gt.jsx)(o, pt({ 'data-testid': 'flowbite-footer-icon', className: s.size }, l)),
          });
        },
        Fl = ['as', 'children', 'className', 'href', 'theme'],
        Bl = function (e) {
          var t = e.as,
            r = void 0 === t ? 'a' : t,
            n = e.children,
            o = e.className,
            a = e.href,
            i = e.theme,
            l = void 0 === i ? {} : i,
            s = ht(e, Fl),
            u = Er(kn().theme.footer.groupLink.link, l);
          return (0, gt.jsx)('li', {
            className: kr(u.base, o),
            children: (0, gt.jsx)(
              r,
              pt(pt({ href: a, className: u.href }, s), {}, { children: n }),
            ),
          });
        },
        Ul = ['children', 'className', 'col', 'theme'],
        Wl = function (e) {
          var t = e.children,
            r = e.className,
            n = e.col,
            o = void 0 !== n && n,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, Ul),
            s = Er(kn().theme.footer.groupLink, i);
          return (0, gt.jsx)(
            'ul',
            pt(
              pt({ 'data-testid': 'footer-groupLink', className: kr(s.base, o && s.col, r) }, l),
              {},
              { children: t },
            ),
          );
        },
        Hl = ['as', 'className', 'theme', 'title'],
        Vl = function (e) {
          var t = e.as,
            r = void 0 === t ? 'h2' : t,
            n = e.className,
            o = e.theme,
            a = void 0 === o ? {} : o,
            i = e.title,
            l = ht(e, Hl),
            s = Er(kn().theme.footer.title, a);
          return (0, gt.jsx)(
            r,
            pt(
              pt({ 'data-testid': 'flowbite-footer-title', className: kr(s.base, n) }, l),
              {},
              { children: i },
            ),
          );
        },
        $l = ['bgDark', 'children', 'className', 'container', 'theme'],
        ql = function (e) {
          var t = e.bgDark,
            r = void 0 !== t && t,
            n = e.children,
            o = e.className,
            a = e.container,
            i = void 0 !== a && a,
            l = e.theme,
            s = void 0 === l ? {} : l,
            u = ht(e, $l),
            c = Er(kn().theme.footer, s);
          return (0, gt.jsx)(
            'footer',
            pt(
              pt(
                {
                  'data-testid': 'flowbite-footer',
                  className: kr(c.root.base, r && c.root.bgDark, i && c.root.container, o),
                },
                u,
              ),
              {},
              { children: n },
            ),
          );
        };
      (ql.displayName = 'Footer'),
        (Il.displayName = 'Footer.Copyright'),
        (Bl.displayName = 'Footer.Link'),
        (Ll.displayName = 'Footer.Brand'),
        (Wl.displayName = 'Footer.LinkGroup'),
        (Al.displayName = 'Footer.Icon'),
        (Vl.displayName = 'Footer.Title'),
        (zl.displayName = 'Footer.Divider');
      Object.assign(ql, {
        Copyright: Il,
        Link: Bl,
        LinkGroup: Wl,
        Brand: Ll,
        Icon: Al,
        Title: Vl,
        Divider: zl,
      });
      var Gl = ['children', 'className', 'color', 'theme', 'value'],
        Kl = function (e) {
          var t,
            r = e.children,
            n = e.className,
            o = e.color,
            a = void 0 === o ? 'default' : o,
            i = e.theme,
            l = void 0 === i ? {} : i,
            s = e.value,
            u = ht(e, Gl),
            c = Er(kn().theme.helperText, l);
          return (0, gt.jsx)(
            'p',
            pt(
              pt({ className: kr(c.root.base, c.root.colors[a], n) }, u),
              {},
              {
                children:
                  null !== (t = null !== s && void 0 !== s ? s : r) && void 0 !== t ? t : '',
              },
            ),
          );
        };
      Kl.displayName = 'HelperText';
      var Ql = ['children', 'className', 'color', 'disabled', 'theme', 'value'],
        Yl = function (e) {
          var t,
            r = e.children,
            n = e.className,
            o = e.color,
            a = void 0 === o ? 'default' : o,
            i = e.disabled,
            l = void 0 !== i && i,
            s = e.theme,
            u = void 0 === s ? {} : s,
            c = e.value,
            d = ht(e, Ql),
            f = Er(kn().theme.label, u);
          return (0, gt.jsx)(
            'label',
            pt(
              pt(
                {
                  className: kr(f.root.base, f.root.colors[a], l && f.root.disabled, n),
                  'data-testid': 'flowbite-label',
                },
                d,
              ),
              {},
              {
                children:
                  null !== (t = null !== c && void 0 !== c ? c : r) && void 0 !== t ? t : '',
              },
            ),
          );
        };
      Yl.displayName = 'Label';
      var Xl = ['active', 'children', 'className', 'href', 'icon', 'onClick', 'theme'],
        Jl = function (e) {
          var t = e.active,
            r = e.children,
            n = e.className,
            o = e.href,
            a = e.icon,
            i = e.onClick,
            l = e.theme,
            s = void 0 === l ? {} : l,
            u = ht(e, Xl),
            c = Er(kn().theme.listGroup.item, s),
            d = 'undefined' !== typeof o,
            f = d ? 'a' : 'button';
          return (0, gt.jsx)('li', {
            className: kr(c.base, n),
            children: (0, gt.jsxs)(
              f,
              pt(
                pt(
                  {
                    href: o,
                    onClick: i,
                    type: d ? void 0 : 'button',
                    className: kr(
                      c.link.active[t ? 'on' : 'off'],
                      c.link.base,
                      c.link.href[d ? 'on' : 'off'],
                    ),
                  },
                  u,
                ),
                {},
                {
                  children: [
                    a &&
                      (0, gt.jsx)(a, {
                        'aria-hidden': !0,
                        'data-testid': 'flowbite-list-group-item-icon',
                        className: c.link.icon,
                      }),
                    r,
                  ],
                },
              ),
            ),
          });
        },
        Zl = ['children', 'className', 'theme'],
        es = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, Zl),
            i = Er(kn().theme.listGroup, o);
          return (0, gt.jsx)(
            'ul',
            pt(pt({ className: kr(i.root.base, r) }, a), {}, { children: t }),
          );
        };
      (es.displayName = 'ListGroup'), (Jl.displayName = 'ListGroup.Item');
      Object.assign(es, { Item: Jl });
      var ts = (0, e.createContext)(void 0);
      function rs() {
        var t = (0, e.useContext)(ts);
        if (!t) throw new Error('useModalContext should be used within the ModalContext provider!');
        return t;
      }
      var ns = ['children', 'className', 'theme'],
        os = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, ns),
            i = Er(kn().theme.modal.body, o),
            l = rs().popup;
          return (0, gt.jsx)(
            'div',
            pt(pt({ className: kr(i.base, l && [i.popup], r) }, a), {}, { children: t }),
          );
        },
        as = ['children', 'className', 'theme'],
        is = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, as),
            i = Er(kn().theme.modal.footer, o),
            l = rs().popup;
          return (0, gt.jsx)(
            'div',
            pt(pt({ className: kr(i.base, !l && i.popup, r) }, a), {}, { children: t }),
          );
        },
        ls = ['as', 'children', 'className', 'theme', 'id'],
        ss = function (t) {
          var r = t.as,
            n = void 0 === r ? 'h3' : r,
            o = t.children,
            a = t.className,
            i = t.theme,
            l = void 0 === i ? {} : i,
            s = t.id,
            u = ht(t, ls),
            c = (0, e.useId)(),
            d = s || c,
            f = Er(kn().theme.modal.header, l),
            p = rs(),
            h = p.popup,
            g = p.onClose,
            m = p.setHeaderId;
          return (
            (0, e.useLayoutEffect)(
              function () {
                return (
                  m(d),
                  function () {
                    return m(void 0);
                  }
                );
              },
              [d, m],
            ),
            (0, gt.jsxs)(
              'div',
              pt(
                pt({ className: kr(f.base, h && f.popup, a) }, u),
                {},
                {
                  children: [
                    (0, gt.jsx)(n, { id: d, className: f.title, children: o }),
                    (0, gt.jsx)('button', {
                      'aria-label': 'Close',
                      className: f.close.base,
                      type: 'button',
                      onClick: g,
                      children: (0, gt.jsx)(Dt, { 'aria-hidden': !0, className: f.close.icon }),
                    }),
                  ],
                },
              ),
            )
          );
        },
        us = [
          'children',
          'className',
          'dismissible',
          'onClose',
          'popup',
          'position',
          'root',
          'show',
          'size',
          'theme',
          'initialFocus',
        ],
        cs = (0, e.forwardRef)(function (t, r) {
          var n,
            o = t.children,
            a = t.className,
            i = t.dismissible,
            l = void 0 !== i && i,
            s = t.onClose,
            u = t.popup,
            c = t.position,
            d = void 0 === c ? 'center' : c,
            p = t.root,
            h = t.show,
            g = t.size,
            m = void 0 === g ? '2xl' : g,
            v = t.theme,
            b = void 0 === v ? {} : v,
            y = t.initialFocus,
            x = ht(t, us),
            w = f((0, e.useState)(void 0), 2),
            k = w[0],
            N = w[1],
            S = Er(kn().theme.modal, b),
            E = Ki({
              open: h,
              onOpenChange: function () {
                return s && s();
              },
            }).context,
            C =
              ((n = [E.refs.setFloating, r]),
              e.useMemo(function () {
                return n.every(function (e) {
                  return null == e;
                })
                  ? null
                  : function (e) {
                      n.forEach(function (t) {
                        'function' === typeof t ? t(e) : null != t && (t.current = e);
                      });
                    };
              }, n)),
            j = Yi([
              Ui(E),
              Gi(E, { outsidePressEvent: 'mousedown', enabled: l }),
              dl(E),
            ]).getFloatingProps;
          return h
            ? (0, gt.jsx)(ts.Provider, {
                value: { popup: u, onClose: s, setHeaderId: N },
                children: (0, gt.jsx)(Pi, {
                  root: p,
                  children: (0, gt.jsx)(
                    Ai,
                    pt(
                      pt(
                        {
                          lockScroll: !0,
                          'data-testid': 'modal-overlay',
                          className: kr(
                            S.root.base,
                            S.root.positions[d],
                            h ? S.root.show.on : S.root.show.off,
                            a,
                          ),
                        },
                        x,
                      ),
                      {},
                      {
                        children: (0, gt.jsx)(_i, {
                          context: E,
                          initialFocus: y,
                          children: (0, gt.jsx)(
                            'div',
                            pt(
                              pt({ ref: C }, j(x)),
                              {},
                              {
                                'aria-labelledby': k,
                                className: kr(S.content.base, S.root.sizes[m]),
                                children: (0, gt.jsx)('div', {
                                  className: S.content.inner,
                                  children: o,
                                }),
                              },
                            ),
                          ),
                        }),
                      },
                    ),
                  ),
                }),
              })
            : null;
        });
      (cs.displayName = 'Modal'),
        (ss.displayName = 'Modal.Header'),
        (os.displayName = 'Modal.Body'),
        (is.displayName = 'Modal.Footer');
      var ds = Object.assign(cs, { Header: ss, Body: os, Footer: is }),
        fs = ['as', 'children', 'className', 'theme'],
        ps = function (e) {
          var t = e.as,
            r = void 0 === t ? 'a' : t,
            n = e.children,
            o = e.className,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, fs),
            s = Er(kn().theme.navbar.brand, i);
          return (0, gt.jsx)(r, pt(pt({ className: kr(s.base, o) }, l), {}, { children: n }));
        },
        hs = (0, e.createContext)(void 0);
      function gs() {
        var t = (0, e.useContext)(hs);
        if (!t)
          throw new Error('useNavBarContext should be used within the NavbarContext provider!');
        return t;
      }
      var ms = ['children', 'className', 'theme'],
        vs = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, ms),
            i = gs().isOpen,
            l = Er(kn().theme.navbar.collapse, o);
          return (0, gt.jsx)(
            'div',
            pt(
              pt(
                {
                  'data-testid': 'flowbite-navbar-collapse',
                  className: kr(l.base, l.hidden[i ? 'off' : 'on'], r),
                },
                a,
              ),
              {},
              { children: (0, gt.jsx)('ul', { className: l.list, children: t }) },
            ),
          );
        },
        bs = ['active', 'as', 'disabled', 'children', 'className', 'theme'],
        ys = function (e) {
          var t = e.active,
            r = e.as,
            n = void 0 === r ? 'a' : r,
            o = e.disabled,
            a = e.children,
            i = e.className,
            l = e.theme,
            s = void 0 === l ? {} : l,
            u = ht(e, bs),
            c = Er(kn().theme.navbar.link, s);
          return (0, gt.jsx)('li', {
            children: (0, gt.jsx)(
              n,
              pt(
                pt(
                  {
                    className: kr(
                      c.base,
                      t && c.active.on,
                      !t && !o && c.active.off,
                      c.disabled[o ? 'on' : 'off'],
                      i,
                    ),
                  },
                  u,
                ),
                {},
                { children: a },
              ),
            ),
          });
        };
      function xs(e) {
        return wt({
          tag: 'svg',
          attr: { viewBox: '0 0 448 512' },
          child: [
            {
              tag: 'path',
              attr: {
                d: 'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
              },
            },
          ],
        })(e);
      }
      var ws = ['barIcon', 'className', 'theme'],
        ks = function (e) {
          var t = e.barIcon,
            r = void 0 === t ? xs : t,
            n = e.className,
            o = e.theme,
            a = void 0 === o ? {} : o,
            i = ht(e, ws),
            l = gs(),
            s = l.isOpen,
            u = l.setIsOpen,
            c = Er(kn().theme.navbar.toggle, a);
          return (0, gt.jsxs)(
            'button',
            pt(
              pt(
                {
                  'data-testid': 'flowbite-navbar-toggle',
                  onClick: function () {
                    u(!s);
                  },
                  className: kr(c.base, n),
                },
                i,
              ),
              {},
              {
                children: [
                  (0, gt.jsx)('span', { className: 'sr-only', children: 'Open main menu' }),
                  (0, gt.jsx)(r, { 'aria-hidden': !0, className: c.icon }),
                ],
              },
            ),
          );
        },
        Ns = ['border', 'children', 'className', 'fluid', 'menuOpen', 'rounded', 'theme'],
        Ss = function (t) {
          var r = t.border,
            n = t.children,
            o = t.className,
            a = t.fluid,
            i = void 0 !== a && a,
            l = t.menuOpen,
            s = t.rounded,
            u = t.theme,
            c = void 0 === u ? {} : u,
            d = ht(t, Ns),
            p = f((0, e.useState)(l), 2),
            h = p[0],
            g = p[1],
            m = Er(kn().theme.navbar.root, c);
          return (0, gt.jsx)(hs.Provider, {
            value: { isOpen: h, setIsOpen: g },
            children: (0, gt.jsx)(
              'nav',
              pt(
                pt(
                  {
                    className: kr(
                      m.base,
                      m.bordered[r ? 'on' : 'off'],
                      m.rounded[s ? 'on' : 'off'],
                      o,
                    ),
                  },
                  d,
                ),
                {},
                {
                  children: (0, gt.jsx)('div', {
                    className: kr(m.inner.base, m.inner.fluid[i ? 'on' : 'off']),
                    children: n,
                  }),
                },
              ),
            ),
          });
        };
      (Ss.displayName = 'Navbar'),
        (ps.displayName = 'Navbar.Brand'),
        (vs.displayName = 'Navbar.Collapse'),
        (ys.displayName = 'Navbar.Link'),
        (ks.displayName = 'Navbar.Toggle');
      Object.assign(Ss, { Brand: ps, Collapse: vs, Link: ys, Toggle: ks });
      var Es = ['active', 'children', 'className', 'onClick', 'theme'],
        Cs = ['children', 'className', 'onClick', 'theme', 'disabled'],
        js = function (e) {
          var t = e.active,
            r = e.children,
            n = e.className,
            o = e.onClick,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, Es),
            s = Er(kn().theme.pagination, i);
          return (0, gt.jsx)(
            'button',
            pt(
              pt({ type: 'button', className: kr(t && s.pages.selector.active, n), onClick: o }, l),
              {},
              { children: r },
            ),
          );
        };
      js.displayName = 'Pagination.Button';
      var Rs = function (e) {
        var t = e.children,
          r = e.className,
          n = e.onClick,
          o = e.theme,
          a = void 0 === o ? {} : o,
          i = e.disabled,
          l = void 0 !== i && i,
          s = ht(e, Cs),
          u = Er(kn().theme.pagination, a);
        return (0, gt.jsx)(
          'button',
          pt(
            pt(
              {
                type: 'button',
                className: kr(l && u.pages.selector.disabled, r),
                disabled: l,
                onClick: n,
              },
              s,
            ),
            {},
            { children: t },
          ),
        );
      };
      Rs.displayName = 'Pagination.Navigation';
      var Ts = [
          'className',
          'currentPage',
          'layout',
          'nextLabel',
          'onPageChange',
          'previousLabel',
          'renderPaginationButton',
          'showIcons',
          'theme',
          'totalPages',
        ],
        Ps = function (e) {
          var t,
            r,
            n = e.className,
            o = e.currentPage,
            a = e.layout,
            i = void 0 === a ? 'pagination' : a,
            l = e.nextLabel,
            s = void 0 === l ? 'Next' : l,
            u = e.onPageChange,
            c = e.previousLabel,
            d = void 0 === c ? 'Previous' : c,
            f = e.renderPaginationButton,
            p =
              void 0 === f
                ? function (e) {
                    return (0, gt.jsx)(js, pt({}, e));
                  }
                : f,
            h = e.showIcons,
            g = void 0 !== h && h,
            m = e.theme,
            v = void 0 === m ? {} : m,
            b = e.totalPages,
            y = ht(e, Ts),
            x = Er(kn().theme.pagination, v),
            w = Math.min(Math.max(o + 2, 5), b),
            k = Math.max(1, w - 4);
          return (0, gt.jsxs)(
            'nav',
            pt(
              pt({ className: kr(x.base, n) }, y),
              {},
              {
                children: [
                  'table' === i &&
                    (0, gt.jsxs)('div', {
                      className: x.layout.table.base,
                      children: [
                        'Showing ',
                        (0, gt.jsx)('span', { className: x.layout.table.span, children: k }),
                        ' to\xa0',
                        (0, gt.jsx)('span', { className: x.layout.table.span, children: w }),
                        ' of\xa0',
                        (0, gt.jsx)('span', { className: x.layout.table.span, children: b }),
                        ' Entries',
                      ],
                    }),
                  (0, gt.jsxs)('ul', {
                    className: x.pages.base,
                    children: [
                      (0, gt.jsx)('li', {
                        children: (0, gt.jsxs)(Rs, {
                          className: kr(x.pages.previous.base, g && x.pages.showIcon),
                          onClick: function () {
                            u(Math.max(o - 1, 1));
                          },
                          disabled: 1 === o,
                          children: [
                            g &&
                              (0, gt.jsx)(jt, {
                                'aria-hidden': !0,
                                className: x.pages.previous.icon,
                              }),
                            d,
                          ],
                        }),
                      }),
                      'pagination' === i &&
                        ((t = k),
                        (r = w),
                        t >= r
                          ? []
                          : Ln(Array(r - t + 1).keys()).map(function (e) {
                              return e + t;
                            })).map(function (e) {
                          return (0, gt.jsx)(
                            'li',
                            {
                              'aria-current': e === o ? 'page' : void 0,
                              children: p({
                                className: kr(
                                  x.pages.selector.base,
                                  o === e && x.pages.selector.active,
                                ),
                                active: e === o,
                                onClick: function () {
                                  return u(e);
                                },
                                children: e,
                              }),
                            },
                            e,
                          );
                        }),
                      (0, gt.jsx)('li', {
                        children: (0, gt.jsxs)(Rs, {
                          className: kr(x.pages.next.base, g && x.pages.showIcon),
                          onClick: function () {
                            u(Math.min(o + 1, b));
                          },
                          disabled: o === b,
                          children: [
                            s,
                            g &&
                              (0, gt.jsx)(Rt, { 'aria-hidden': !0, className: x.pages.next.icon }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              },
            ),
          );
        };
      Ps.displayName = 'Pagination';
      Object.assign(Ps, { Button: js });
      var Os = ['className', 'theme'];
      (0, e.forwardRef)(function (e, t) {
        var r = e.className,
          n = e.theme,
          o = void 0 === n ? {} : n,
          a = ht(e, Os),
          i = Er(kn().theme.radio, o);
        return (0, gt.jsx)(
          'input',
          pt({ ref: t, type: 'radio', className: kr(i.root.base, r) }, a),
        );
      }).displayName = 'Radio';
      var Ls = ['className', 'sizing', 'theme'];
      (0, e.forwardRef)(function (e, t) {
        var r = e.className,
          n = e.sizing,
          o = void 0 === n ? 'md' : n,
          a = e.theme,
          i = void 0 === a ? {} : a,
          l = ht(e, Ls),
          s = Er(kn().theme.rangeSlider, i);
        return (0, gt.jsx)(gt.Fragment, {
          children: (0, gt.jsx)('div', {
            'data-testid': 'flowbite-range-slider',
            className: kr(s.root.base, r),
            children: (0, gt.jsx)('div', {
              className: s.field.base,
              children: (0, gt.jsx)(
                'input',
                pt(
                  {
                    ref: t,
                    type: 'range',
                    className: kr(s.field.input.base, s.field.input.sizes[o]),
                  },
                  l,
                ),
              ),
            }),
          }),
        });
      }).displayName = 'RangeSlider';
      var _s = ['children', 'className', 'percentFilled', 'theme'],
        Is = function (e) {
          var t = e.children,
            r = e.className,
            n = e.percentFilled,
            o = void 0 === n ? 0 : n,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, _s),
            s = Er(kn().theme.rating.advanced, i);
          return (0, gt.jsxs)(
            'div',
            pt(
              pt({ className: kr(s.base, r) }, l),
              {},
              {
                children: [
                  (0, gt.jsx)('span', { className: s.label, children: t }),
                  (0, gt.jsx)('div', {
                    className: s.progress.base,
                    children: (0, gt.jsx)('div', {
                      className: s.progress.fill,
                      'data-testid': 'flowbite-rating-fill',
                      style: { width: ''.concat(o, '%') },
                    }),
                  }),
                  (0, gt.jsx)('span', { className: s.progress.label, children: ''.concat(o, '%') }),
                ],
              },
            ),
          );
        },
        Ds = (0, e.createContext)(void 0);
      var zs = ['className', 'filled', 'starIcon', 'theme'],
        Ms = function (t) {
          var r = t.className,
            n = t.filled,
            o = void 0 === n || n,
            a = t.starIcon,
            i = void 0 === a ? Pt : a,
            l = t.theme,
            s = void 0 === l ? {} : l,
            u = ht(t, zs),
            c = (function () {
              var t = (0, e.useContext)(Ds);
              if (!t)
                throw new Error(
                  'useRatingContext should be used within the RatingContext provider!',
                );
              return t;
            })().size,
            d = void 0 === c ? 'sm' : c,
            f = Er(kn().theme.rating.star, s);
          return (0, gt.jsx)(
            i,
            pt(
              {
                'data-testid': 'flowbite-rating-star',
                className: kr(f.sizes[d], f[o ? 'filled' : 'empty'], r),
              },
              u,
            ),
          );
        },
        As = ['children', 'className', 'size', 'theme'],
        Fs = function (e) {
          var t = e.children,
            r = e.className,
            n = e.size,
            o = void 0 === n ? 'sm' : n,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, As),
            s = Er(kn().theme.rating, i);
          return (0, gt.jsx)(Ds.Provider, {
            value: { size: o },
            children: (0, gt.jsx)(
              'div',
              pt(pt({ className: kr(s.root.base, r) }, l), {}, { children: t }),
            ),
          });
        };
      (Fs.displayName = 'Rating'),
        (Ms.displayName = 'Rating.Star'),
        (Is.displayName = 'Rating.Advanced');
      Object.assign(Fs, { Star: Ms, Advanced: Is });
      var Bs = [
        'addon',
        'children',
        'className',
        'color',
        'helperText',
        'icon',
        'shadow',
        'sizing',
        'theme',
      ];
      (0, e.forwardRef)(function (e, t) {
        var r = e.addon,
          n = e.children,
          o = e.className,
          a = e.color,
          i = void 0 === a ? 'gray' : a,
          l = e.helperText,
          s = e.icon,
          u = e.shadow,
          c = e.sizing,
          d = void 0 === c ? 'md' : c,
          f = e.theme,
          p = void 0 === f ? {} : f,
          h = ht(e, Bs),
          g = Er(kn().theme.select, p);
        return (0, gt.jsxs)('div', {
          className: kr(g.base, o),
          children: [
            r && (0, gt.jsx)('span', { className: g.addon, children: r }),
            (0, gt.jsxs)('div', {
              className: g.field.base,
              children: [
                s &&
                  (0, gt.jsx)('div', {
                    className: g.field.icon.base,
                    children: (0, gt.jsx)(s, { className: g.field.icon.svg }),
                  }),
                (0, gt.jsx)(
                  'select',
                  pt(
                    pt(
                      {
                        className: kr(
                          g.field.select.base,
                          g.field.select.colors[i],
                          g.field.select.sizes[d],
                          g.field.select.withIcon[s ? 'on' : 'off'],
                          g.field.select.withAddon[r ? 'on' : 'off'],
                          g.field.select.withShadow[u ? 'on' : 'off'],
                        ),
                      },
                      h,
                    ),
                    {},
                    { ref: t, children: n },
                  ),
                ),
                l && (0, gt.jsx)(Kl, { color: i, children: l }),
              ],
            }),
          ],
        });
      }).displayName = 'Select';
      var Us = (0, e.createContext)(void 0);
      function Ws() {
        var t = (0, e.useContext)(Us);
        if (!t)
          throw new Error('useSidebarContext should be used within the SidebarContext provider!');
        return t;
      }
      var Hs = ['children', 'color', 'className', 'theme'],
        Vs = function (e) {
          var t = e.children,
            r = e.color,
            n = void 0 === r ? 'info' : r,
            o = e.className,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, Hs),
            s = Ws().isCollapsed,
            u = Er(kn().theme.sidebar.cta, i);
          return (0, gt.jsx)(
            'div',
            pt(
              pt(
                { 'data-testid': 'sidebar-cta', hidden: s, className: kr(u.base, u.color[n], o) },
                l,
              ),
              {},
              { children: t },
            ),
          );
        };
      Vs.displayName = 'Sidebar.CTA';
      var $s = (0, e.createContext)(void 0);
      var qs = [
          'children',
          'className',
          'icon',
          'label',
          'chevronIcon',
          'renderChevronIcon',
          'open',
          'theme',
        ],
        Gs = function (t) {
          var r = t.children,
            n = t.className,
            o = t.icon,
            a = t.label,
            i = t.chevronIcon,
            l = void 0 === i ? Ct : i,
            s = t.renderChevronIcon,
            u = t.open,
            c = void 0 !== u && u,
            d = t.theme,
            p = void 0 === d ? {} : d,
            h = ht(t, qs),
            g = (0, e.useId)(),
            m = Ws().isCollapsed,
            v = f((0, e.useState)(c), 2),
            b = v[0],
            y = v[1],
            x = Er(kn().theme.sidebar.collapse, p);
          (0, e.useEffect)(
            function () {
              return y(c);
            },
            [c],
          );
          return (0, gt.jsxs)(
            function (e) {
              var t = e.children;
              return (0, gt.jsx)('li', {
                children:
                  m && !b ? (0, gt.jsx)(ac, { content: a, placement: 'right', children: t }) : t,
              });
            },
            {
              children: [
                (0, gt.jsxs)(
                  'button',
                  pt(
                    pt(
                      {
                        id: 'flowbite-sidebar-collapse-'.concat(g),
                        onClick: function () {
                          return y(!b);
                        },
                        title: a,
                        type: 'button',
                        className: kr(x.button, n),
                      },
                      h,
                    ),
                    {},
                    {
                      children: [
                        o &&
                          (0, gt.jsx)(o, {
                            'aria-hidden': !0,
                            'data-testid': 'flowbite-sidebar-collapse-icon',
                            className: kr(x.icon.base, x.icon.open[b ? 'on' : 'off']),
                          }),
                        m
                          ? (0, gt.jsx)('span', { className: 'sr-only', children: a })
                          : (0, gt.jsxs)(gt.Fragment, {
                              children: [
                                (0, gt.jsx)('span', {
                                  'data-testid': 'flowbite-sidebar-collapse-label',
                                  className: x.label.base,
                                  children: a,
                                }),
                                s
                                  ? s(x, b)
                                  : (0, gt.jsx)(l, {
                                      'aria-hidden': !0,
                                      className: kr(
                                        x.label.icon.base,
                                        x.label.icon.open[b ? 'on' : 'off'],
                                      ),
                                    }),
                              ],
                            }),
                      ],
                    },
                  ),
                ),
                (0, gt.jsx)('ul', {
                  'aria-labelledby': 'flowbite-sidebar-collapse-'.concat(g),
                  hidden: !b,
                  className: x.list,
                  children: (0, gt.jsx)($s.Provider, {
                    value: { isInsideCollapse: !0 },
                    children: r,
                  }),
                }),
              ],
            },
          );
        };
      Gs.displayName = 'Sidebar.Collapse';
      var Ks = ['id', 'isCollapsed', 'tooltipChildren', 'children'],
        Qs = ['active', 'as', 'children', 'className', 'icon', 'label', 'labelColor', 'theme'],
        Ys = function (e) {
          var t = e.id,
            r = e.isCollapsed,
            n = e.tooltipChildren,
            o = e.children,
            a = ht(e, Ks);
          return (0, gt.jsx)(
            'li',
            pt(
              pt({}, a),
              {},
              {
                children: r
                  ? (0, gt.jsx)(ac, {
                      content: (0, gt.jsx)(Xs, { id: t, children: n }),
                      placement: 'right',
                      children: o,
                    })
                  : o,
              },
            ),
          );
        },
        Xs = function (e) {
          var t = e.id,
            r = e.children;
          return (0, gt.jsx)(Js, { id: t, children: r });
        },
        Js = function (e) {
          var t = e.id,
            r = e.children,
            n = kn().theme.sidebar.item;
          return (0, gt.jsx)('span', {
            'data-testid': 'flowbite-sidebar-item-content',
            id: 'flowbite-sidebar-item-'.concat(t),
            className: kr(n.content.base),
            children: r,
          });
        },
        Zs = (0, e.forwardRef)(function (t, r) {
          var n,
            o,
            a,
            i,
            l,
            s = t.active,
            u = t.as,
            c = void 0 === u ? 'a' : u,
            d = t.children,
            f = t.className,
            p = t.icon,
            h = t.label,
            g = t.labelColor,
            m = void 0 === g ? 'info' : g,
            v = t.theme,
            b = void 0 === v ? {} : v,
            y = ht(t, Qs),
            x = (0, e.useId)(),
            w = Ws().isCollapsed,
            k = (function () {
              var t = (0, e.useContext)($s);
              if (!t)
                throw new Error(
                  'useSidebarItemContext should be used within the SidebarItemContext provider!',
                );
              return t;
            })().isInsideCollapse,
            N = Er(kn().theme.sidebar.item, b);
          return (0, gt.jsx)(Ys, {
            className: N.listItem,
            id: x,
            isCollapsed: w,
            tooltipChildren: d,
            children: (0, gt.jsxs)(
              c,
              pt(
                pt(
                  {
                    'aria-labelledby': 'flowbite-sidebar-item-'.concat(x),
                    ref: r,
                    className: kr(
                      N.base,
                      s && N.active,
                      !w &&
                        k &&
                        (null === (n = N.collapsed) || void 0 === n ? void 0 : n.insideCollapse),
                      f,
                    ),
                  },
                  y,
                ),
                {},
                {
                  children: [
                    p &&
                      (0, gt.jsx)(p, {
                        'aria-hidden': !0,
                        'data-testid': 'flowbite-sidebar-item-icon',
                        className: kr(
                          null === (o = N.icon) || void 0 === o ? void 0 : o.base,
                          s && (null === (a = N.icon) || void 0 === a ? void 0 : a.active),
                        ),
                      }),
                    w &&
                      !p &&
                      (0, gt.jsx)('span', {
                        className: null === (i = N.collapsed) || void 0 === i ? void 0 : i.noIcon,
                        children:
                          null !== (l = d.charAt(0).toLocaleUpperCase()) && void 0 !== l ? l : '?',
                      }),
                    !w && (0, gt.jsx)(Js, { id: x, children: d }),
                    !w &&
                      h &&
                      (0, gt.jsx)(Hr, {
                        color: m,
                        'data-testid': 'flowbite-sidebar-label',
                        hidden: w,
                        className: N.label,
                        children: h,
                      }),
                  ],
                },
              ),
            ),
          });
        });
      Zs.displayName = 'Sidebar.Item';
      var eu = ['children', 'className'],
        tu = function (e) {
          var t = e.children,
            r = e.className,
            n = ht(e, eu),
            o = kn().theme.sidebar.itemGroup;
          return (0, gt.jsx)(
            'ul',
            pt(
              pt({ 'data-testid': 'flowbite-sidebar-item-group', className: kr(o, r) }, n),
              {},
              {
                children: (0, gt.jsx)($s.Provider, {
                  value: { isInsideCollapse: !1 },
                  children: t,
                }),
              },
            ),
          );
        };
      tu.displayName = 'Sidebar.ItemGroup';
      var ru = ['children', 'className'],
        nu = function (e) {
          var t = e.children,
            r = e.className,
            n = ht(e, ru),
            o = kn().theme.sidebar.items;
          return (0, gt.jsx)(
            'div',
            pt(
              pt({ className: kr(o, r), 'data-testid': 'flowbite-sidebar-items' }, n),
              {},
              { children: t },
            ),
          );
        };
      nu.displayName = 'Sidebar.Items';
      var ou = ['children', 'className', 'href', 'img', 'imgAlt', 'theme'],
        au = function (t) {
          var r = t.children,
            n = t.className,
            o = t.href,
            a = t.img,
            i = t.imgAlt,
            l = void 0 === i ? '' : i,
            s = t.theme,
            u = void 0 === s ? {} : s,
            c = ht(t, ou),
            d = (0, e.useId)(),
            f = Ws().isCollapsed,
            p = Er(kn().theme.sidebar.logo, u);
          return (0, gt.jsxs)(
            'a',
            pt(
              pt(
                {
                  'aria-labelledby': 'flowbite-sidebar-logo-'.concat(d),
                  href: o,
                  className: kr(p.base, n),
                },
                c,
              ),
              {},
              {
                children: [
                  (0, gt.jsx)('img', { alt: l, src: a, className: p.img }),
                  (0, gt.jsx)('span', {
                    className: p.collapsed[f ? 'on' : 'off'],
                    id: 'flowbite-sidebar-logo-'.concat(d),
                    children: r,
                  }),
                ],
              },
            ),
          );
        };
      au.displayName = 'Sidebar.Logo';
      var iu = au,
        lu = ['children', 'as', 'collapseBehavior', 'collapsed', 'theme', 'className'],
        su = function (e) {
          var t = e.children,
            r = e.as,
            n = void 0 === r ? 'nav' : r,
            o = e.collapseBehavior,
            a = void 0 === o ? 'collapse' : o,
            i = e.collapsed,
            l = void 0 !== i && i,
            s = e.theme,
            u = void 0 === s ? {} : s,
            c = e.className,
            d = ht(e, lu),
            f = Er(kn().theme.sidebar, u);
          return (0, gt.jsx)(Us.Provider, {
            value: { isCollapsed: l },
            children: (0, gt.jsx)(
              n,
              pt(
                pt(
                  {
                    'aria-label': 'Sidebar',
                    hidden: l && 'hide' === a,
                    className: kr(f.root.base, f.root.collapsed[l ? 'on' : 'off'], c),
                  },
                  d,
                ),
                {},
                { children: (0, gt.jsx)('div', { className: f.root.inner, children: t }) },
              ),
            ),
          });
        };
      su.displayName = 'Sidebar';
      Object.assign(su, { Collapse: Gs, CTA: Vs, Item: Zs, Items: nu, ItemGroup: tu, Logo: iu });
      var uu = ['className', 'color', 'light', 'size', 'theme'],
        cu = function (e) {
          var t = e.className,
            r = e.color,
            n = void 0 === r ? 'info' : r,
            o = e.light,
            a = e.size,
            i = void 0 === a ? 'md' : a,
            l = e.theme,
            s = void 0 === l ? {} : l,
            u = ht(e, uu),
            c = Er(kn().theme.spinner, s);
          return (0, gt.jsx)(
            'span',
            pt(
              pt({ role: 'status' }, u),
              {},
              {
                children: (0, gt.jsxs)('svg', {
                  fill: 'none',
                  viewBox: '0 0 100 101',
                  className: kr(
                    c.base,
                    c.color[n],
                    c.light[o ? 'on' : 'off'].base,
                    c.light[o ? 'on' : 'off'].color[n],
                    c.size[i],
                    t,
                  ),
                  children: [
                    (0, gt.jsx)('path', {
                      d: 'M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z',
                      fill: 'currentColor',
                    }),
                    (0, gt.jsx)('path', {
                      d: 'M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z',
                      fill: 'currentFill',
                    }),
                  ],
                }),
              },
            ),
          );
        };
      cu.displayName = 'Spinner';
      var du = function (e) {
        var t = e.children,
          r = e.className;
        return (0, gt.jsx)('div', { className: r, children: t });
      };
      du.displayName = 'Tabs.Item';
      var fu = ['children', 'className', 'onActiveTabChange', 'style', 'theme'],
        pu = (0, e.forwardRef)(function (t, r) {
          var n = t.children,
            o = t.className,
            a = t.onActiveTabChange,
            i = t.style,
            l = void 0 === i ? 'default' : i,
            s = t.theme,
            u = void 0 === s ? {} : s,
            c = ht(t, fu),
            d = Er(kn().theme.tab, u),
            p = (0, e.useId)(),
            h = (0, e.useMemo)(
              function () {
                return e.Children.map(n, function (e) {
                  return e.props;
                });
              },
              [n],
            ),
            g = (0, e.useRef)([]),
            m = f(
              (0, e.useState)(
                Math.max(
                  0,
                  h.findIndex(function (e) {
                    return e.active;
                  }),
                ),
              ),
              2,
            ),
            v = m[0],
            b = m[1],
            y = f((0, e.useState)(-1), 2),
            x = y[0],
            w = y[1],
            k = function (e) {
              b(e), a && a(e);
            },
            N = d.tablist.tabitem.styles[l];
          return (
            (0, e.useEffect)(
              function () {
                var e;
                null === (e = g.current[x]) || void 0 === e || e.focus();
              },
              [x],
            ),
            (0, e.useImperativeHandle)(r, function () {
              return { setActiveTab: k };
            }),
            (0, gt.jsxs)('div', {
              className: kr(d.base, o),
              children: [
                (0, gt.jsx)(
                  'div',
                  pt(
                    pt(
                      {
                        'aria-label': 'Tabs',
                        role: 'tablist',
                        className: kr(d.tablist.base, d.tablist.styles[l], o),
                      },
                      c,
                    ),
                    {},
                    {
                      children: h.map(function (e, t) {
                        return (0, gt.jsxs)(
                          'button',
                          {
                            type: 'button',
                            'aria-controls': ''.concat(p, '-tabpanel-').concat(t),
                            'aria-selected': t === v,
                            className: kr(
                              d.tablist.tabitem.base,
                              N.base,
                              t === v && N.active.on,
                              t !== v && !e.disabled && N.active.off,
                            ),
                            disabled: e.disabled,
                            id: ''.concat(p, '-tab-').concat(t),
                            onClick: function () {
                              return (function (e) {
                                var t = e.target;
                                k(t), w(t);
                              })({ target: t });
                            },
                            onKeyDown: function (e) {
                              return (function (e) {
                                var t = e.event,
                                  r = e.target;
                                'ArrowLeft' === t.key && w(Math.max(0, x - 1)),
                                  'ArrowRight' === t.key && w(Math.min(h.length - 1, x + 1)),
                                  'Enter' === t.key && (k(r), w(r));
                              })({ event: e, target: t });
                            },
                            ref: function (e) {
                              return (g.current[t] = e);
                            },
                            role: 'tab',
                            tabIndex: t === x ? 0 : -1,
                            children: [
                              e.icon && (0, gt.jsx)(e.icon, { className: d.tablist.tabitem.icon }),
                              e.title,
                            ],
                          },
                          t,
                        );
                      }),
                    },
                  ),
                ),
                (0, gt.jsx)('div', {
                  children: h.map(function (e, t) {
                    return (0, gt.jsx)(
                      'div',
                      {
                        'aria-labelledby': ''.concat(p, '-tab-').concat(t),
                        className: d.tabpanel,
                        hidden: t !== v,
                        id: ''.concat(p, '-tabpanel-').concat(t),
                        role: 'tabpanel',
                        tabIndex: 0,
                        children: e.children,
                      },
                      t,
                    );
                  }),
                }),
              ],
            })
          );
        });
      pu.displayName = 'Tabs.Group';
      var hu = ['children', 'className', 'theme'],
        gu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, hu),
            i = Er(kn().theme.table.body, o);
          return (0, gt.jsx)('tbody', pt(pt({ className: kr(i.base, r) }, a), {}, { children: t }));
        },
        mu = ['children', 'className', 'theme'],
        vu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, mu),
            i = Er(kn().theme.table.body.cell, o);
          return (0, gt.jsx)('td', pt(pt({ className: kr(i.base, r) }, a), {}, { children: t }));
        },
        bu = (0, e.createContext)(void 0);
      var yu = ['children', 'className', 'theme'],
        xu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, yu),
            i = Er(kn().theme.table, o);
          return (0, gt.jsx)(
            'thead',
            pt(
              pt({ className: kr(i.head.base, r) }, a),
              {},
              { children: (0, gt.jsx)('tr', { children: t }) },
            ),
          );
        },
        wu = ['children', 'className', 'theme'],
        ku = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, wu),
            i = Er(kn().theme.table.head.cell, o);
          return (0, gt.jsx)('th', pt(pt({ className: kr(i.base, r) }, a), {}, { children: t }));
        },
        Nu = ['children', 'className', 'theme'],
        Su = function (t) {
          var r = t.children,
            n = t.className,
            o = t.theme,
            a = void 0 === o ? {} : o,
            i = ht(t, Nu),
            l = (function () {
              var t = (0, e.useContext)(bu);
              if (!t)
                throw new Error('useTableContext should be used within the TableContext provider!');
              return t;
            })(),
            s = l.hoverable,
            u = l.striped,
            c = Er(kn().theme.table.row, a);
          return (0, gt.jsx)(
            'tr',
            pt(
              pt(
                {
                  'data-testid': 'table-row-element',
                  className: kr(c.base, u && c.striped, s && c.hovered, n),
                },
                i,
              ),
              {},
              { children: r },
            ),
          );
        },
        Eu = ['children', 'className', 'hoverable', 'striped', 'theme'],
        Cu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.hoverable,
            o = e.striped,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, Eu),
            s = Er(kn().theme.table, i);
          return (0, gt.jsx)('div', {
            'data-testid': 'table-element',
            className: kr(s.root.wrapper),
            children: (0, gt.jsxs)(bu.Provider, {
              value: { striped: o, hoverable: n },
              children: [
                (0, gt.jsx)('div', { className: kr(s.root.shadow, r) }),
                (0, gt.jsx)(
                  'table',
                  pt(pt({ className: kr(s.root.base, r) }, l), {}, { children: t }),
                ),
              ],
            }),
          });
        };
      (Cu.displayName = 'Table'),
        (xu.displayName = 'Table.Head'),
        (gu.displayName = 'Table.Body'),
        (Su.displayName = 'Table.Row'),
        (vu.displayName = 'Table.Cell'),
        (ku.displayName = 'Table.HeadCell');
      var ju = Object.assign(Cu, { Head: xu, Body: gu, Row: Su, Cell: vu, HeadCell: ku }),
        Ru = [
          'addon',
          'className',
          'color',
          'helperText',
          'icon',
          'rightIcon',
          'shadow',
          'sizing',
          'theme',
        ],
        Tu = (0, e.forwardRef)(function (e, t) {
          var r = e.addon,
            n = e.className,
            o = e.color,
            a = void 0 === o ? 'gray' : o,
            i = e.helperText,
            l = e.icon,
            s = e.rightIcon,
            u = e.shadow,
            c = e.sizing,
            d = void 0 === c ? 'md' : c,
            f = e.theme,
            p = void 0 === f ? {} : f,
            h = ht(e, Ru),
            g = Er(kn().theme.textInput, p);
          return (0, gt.jsxs)(gt.Fragment, {
            children: [
              (0, gt.jsxs)('div', {
                className: kr(g.base, n),
                children: [
                  r && (0, gt.jsx)('span', { className: g.addon, children: r }),
                  (0, gt.jsxs)('div', {
                    className: g.field.base,
                    children: [
                      l &&
                        (0, gt.jsx)('div', {
                          className: g.field.icon.base,
                          children: (0, gt.jsx)(l, { className: g.field.icon.svg }),
                        }),
                      s &&
                        (0, gt.jsx)('div', {
                          'data-testid': 'right-icon',
                          className: g.field.rightIcon.base,
                          children: (0, gt.jsx)(s, { className: g.field.rightIcon.svg }),
                        }),
                      (0, gt.jsx)(
                        'input',
                        pt(
                          pt(
                            {
                              className: kr(
                                g.field.input.base,
                                g.field.input.colors[a],
                                g.field.input.sizes[d],
                                g.field.input.withIcon[l ? 'on' : 'off'],
                                g.field.input.withRightIcon[s ? 'on' : 'off'],
                                g.field.input.withAddon[r ? 'on' : 'off'],
                                g.field.input.withShadow[u ? 'on' : 'off'],
                              ),
                            },
                            h,
                          ),
                          {},
                          { ref: t },
                        ),
                      ),
                    ],
                  }),
                ],
              }),
              i && (0, gt.jsx)(Kl, { color: a, children: i }),
            ],
          });
        });
      Tu.displayName = 'TextInput';
      var Pu = ['className', 'color', 'helperText', 'shadow', 'theme'],
        Ou = (0, e.forwardRef)(function (e, t) {
          var r = e.className,
            n = e.color,
            o = void 0 === n ? 'gray' : n,
            a = e.helperText,
            i = e.shadow,
            l = e.theme,
            s = void 0 === l ? {} : l,
            u = ht(e, Pu),
            c = Er(kn().theme.textarea, s);
          return (0, gt.jsxs)(gt.Fragment, {
            children: [
              (0, gt.jsx)(
                'textarea',
                pt(
                  { ref: t, className: kr(c.base, c.colors[o], c.withShadow[i ? 'on' : 'off'], r) },
                  u,
                ),
              ),
              a && (0, gt.jsx)(Kl, { color: o, children: a }),
            ],
          });
        });
      Ou.displayName = 'Textarea';
      var Lu = ['children', 'className', 'theme'],
        _u = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, Lu),
            i = Er(kn().theme.timeline.item.content, o).body;
          return (0, gt.jsx)('div', pt(pt({ className: kr(i, r) }, a), {}, { children: t }));
        },
        Iu = (0, e.createContext)(void 0);
      function Du() {
        var t = (0, e.useContext)(Iu);
        if (!t)
          throw new Error('useTimelineContext should be used within the TimelineContext providor!');
        return t;
      }
      var zu = ['children', 'className', 'theme'],
        Mu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, zu),
            i = Er(kn().theme.timeline.item.content, o),
            l = Du().horizontal;
          return (0, gt.jsx)(
            'div',
            pt(
              pt({ 'data-testid': 'timeline-content', className: kr(l && i.root.base, r) }, a),
              {},
              { children: t },
            ),
          );
        },
        Au = ['children', 'className', 'theme'],
        Fu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, Au),
            i = Er(kn().theme.timeline.item, o),
            l = Du().horizontal;
          return (0, gt.jsx)(
            'li',
            pt(
              pt(
                {
                  'data-testid': 'timeline-item',
                  className: kr(l && i.root.horizontal, !l && i.root.vertical, r),
                },
                a,
              ),
              {},
              { children: t },
            ),
          );
        },
        Bu = ['children', 'className', 'icon', 'theme'],
        Uu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.icon,
            o = e.theme,
            a = void 0 === o ? {} : o,
            i = ht(e, Bu),
            l = Er(kn().theme.timeline.item.point, a),
            s = Du().horizontal;
          return (0, gt.jsxs)(
            'div',
            pt(
              pt(
                {
                  'data-testid': 'timeline-point',
                  className: kr(s && l.horizontal, !s && l.vertical, r),
                },
                i,
              ),
              {},
              {
                children: [
                  t,
                  n
                    ? (0, gt.jsx)('span', {
                        className: kr(l.marker.icon.wrapper),
                        children: (0, gt.jsx)(n, {
                          'aria-hidden': !0,
                          className: kr(l.marker.icon.base),
                        }),
                      })
                    : (0, gt.jsx)('div', {
                        className: kr(s && l.marker.base.horizontal, !s && l.marker.base.vertical),
                      }),
                  s && (0, gt.jsx)('div', { className: kr(l.line) }),
                ],
              },
            ),
          );
        },
        Wu = ['children', 'className', 'theme'],
        Hu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.theme,
            o = void 0 === n ? {} : n,
            a = ht(e, Wu),
            i = Er(kn().theme.timeline.item.content, o).time;
          return (0, gt.jsx)('time', pt(pt({ className: kr(i, r) }, a), {}, { children: t }));
        },
        Vu = ['as', 'children', 'className', 'theme'],
        $u = function (e) {
          var t = e.as,
            r = void 0 === t ? 'h3' : t,
            n = e.children,
            o = e.className,
            a = e.theme,
            i = void 0 === a ? {} : a,
            l = ht(e, Vu),
            s = Er(kn().theme.timeline.item.content, i).title;
          return (0, gt.jsx)(r, pt(pt({ className: kr(s, o) }, l), {}, { children: n }));
        },
        qu = ['children', 'className', 'horizontal', 'theme'],
        Gu = function (e) {
          var t = e.children,
            r = e.className,
            n = e.horizontal,
            o = e.theme,
            a = void 0 === o ? {} : o,
            i = ht(e, qu),
            l = Er(kn().theme.timeline, a);
          return (0, gt.jsx)(Iu.Provider, {
            value: { horizontal: n },
            children: (0, gt.jsx)(
              'ol',
              pt(
                pt(
                  {
                    'data-testid': 'timeline-component',
                    className: kr(
                      n && l.root.direction.horizontal,
                      !n && l.root.direction.vertical,
                      r,
                    ),
                  },
                  i,
                ),
                {},
                { children: t },
              ),
            ),
          });
        };
      (Gu.displayName = 'Timeline'),
        (Fu.displayName = 'Timeline.Item'),
        (Uu.displayName = 'Timeline.Point'),
        (Mu.displayName = 'Timeline.Content'),
        (Hu.displayName = 'Timeline.Time'),
        ($u.displayName = 'Timeline.Title'),
        (_u.displayName = 'Timeline.Body');
      Object.assign(Gu, { Item: Fu, Point: Uu, Content: Mu, Time: Hu, Title: $u, Body: _u });
      var Ku = (0, e.createContext)(void 0);
      var Qu = ['className', 'onClick', 'theme', 'xIcon', 'onDismiss'],
        Yu = function (t) {
          var r = t.className,
            n = t.onClick,
            o = t.theme,
            a = void 0 === o ? {} : o,
            i = t.xIcon,
            l = void 0 === i ? Ot : i,
            s = t.onDismiss,
            u = ht(t, Qu),
            c = Er(kn().theme.toast.toggle, a),
            d = (function () {
              var t = (0, e.useContext)(Ku);
              if (!t)
                throw new Error('useToastContext should be used within the ToastContext provider!');
              return t;
            })(),
            f = d.duration,
            p = d.isClosed,
            h = d.isRemoved,
            g = d.setIsClosed,
            m = d.setIsRemoved;
          return (0, gt.jsx)(
            'button',
            pt(
              pt(
                {
                  'aria-label': 'Close',
                  onClick: function (e) {
                    n && n(e),
                      s
                        ? s()
                        : (g(!p),
                          setTimeout(function () {
                            return m(!h);
                          }, f));
                  },
                  type: 'button',
                  className: kr(c.base, r),
                },
                u,
              ),
              {},
              { children: (0, gt.jsx)(l, { 'aria-hidden': !0, className: c.icon }) },
            ),
          );
        },
        Xu = ['children', 'className', 'duration', 'theme'],
        Ju = {
          75: 'duration-75',
          100: 'duration-100',
          150: 'duration-150',
          200: 'duration-200',
          300: 'duration-300',
          500: 'duration-500',
          700: 'duration-700',
          1e3: 'duration-1000',
        },
        Zu = function (t) {
          var r = t.children,
            n = t.className,
            o = t.duration,
            a = void 0 === o ? 300 : o,
            i = t.theme,
            l = void 0 === i ? {} : i,
            s = ht(t, Xu),
            u = f((0, e.useState)(!1), 2),
            c = u[0],
            d = u[1],
            p = f((0, e.useState)(!1), 2),
            h = p[0],
            g = p[1],
            m = Er(kn().theme.toast, l);
          return h
            ? null
            : (0, gt.jsx)(Ku.Provider, {
                value: { duration: a, isClosed: c, isRemoved: h, setIsClosed: d, setIsRemoved: g },
                children: (0, gt.jsx)(
                  'div',
                  pt(
                    pt(
                      {
                        'data-testid': 'flowbite-toast',
                        role: 'alert',
                        className: kr(m.root.base, Ju[a], c && m.root.closed, n),
                      },
                      s,
                    ),
                    {},
                    { children: r },
                  ),
                ),
              });
        };
      (Zu.displayName = 'Toast'), (Yu.displayName = 'Toast.Toggle');
      Object.assign(Zu, { Toggle: Yu });
      var ec = ['checked', 'className', 'color', 'disabled', 'label', 'name', 'onChange', 'theme'];
      (function (t) {
        var r = t.checked,
          n = t.className,
          o = t.color,
          a = void 0 === o ? 'blue' : o,
          i = t.disabled,
          l = t.label,
          s = t.name,
          u = t.onChange,
          c = t.theme,
          d = void 0 === c ? {} : c,
          f = ht(t, ec),
          p = (0, e.useId)(),
          h = Er(kn().theme.toggleSwitch, d);
        return (0, gt.jsxs)(gt.Fragment, {
          children: [
            s &&
              r &&
              (0, gt.jsx)('input', {
                checked: r,
                hidden: !0,
                name: s,
                readOnly: !0,
                type: 'checkbox',
                className: 'sr-only',
              }),
            (0, gt.jsxs)(
              'button',
              pt(
                pt(
                  {
                    'aria-checked': r,
                    'aria-labelledby': ''.concat(p, '-flowbite-toggleswitch-label'),
                    disabled: i,
                    id: ''.concat(p, '-flowbite-toggleswitch'),
                    onClick: function (e) {
                      e.preventDefault(), u(!r);
                    },
                    onKeyPress: function (e) {
                      e.preventDefault();
                    },
                    role: 'switch',
                    tabIndex: 0,
                    type: 'button',
                    className: kr(h.root.base, h.root.active[i ? 'off' : 'on'], n),
                  },
                  f,
                ),
                {},
                {
                  children: [
                    (0, gt.jsx)('div', {
                      'data-testid': 'flowbite-toggleswitch-toggle',
                      className: kr(
                        h.toggle.base,
                        h.toggle.checked[r ? 'on' : 'off'],
                        !i && r && h.toggle.checked.color[a],
                      ),
                    }),
                    (0, gt.jsx)('span', {
                      'data-testid': 'flowbite-toggleswitch-label',
                      id: ''.concat(p, '-flowbite-toggleswitch-label'),
                      className: h.root.label,
                      children: l,
                    }),
                  ],
                },
              ),
            ),
          ],
        });
      }).displayName = 'ToggleSwitch';
      var tc,
        rc = [
          'animation',
          'arrow',
          'children',
          'className',
          'content',
          'placement',
          'style',
          'theme',
          'trigger',
          'minWidth',
        ],
        nc = function (t) {
          var r,
            n = t.animation,
            o = void 0 === n ? 'duration-300' : n,
            a = t.arrow,
            i = void 0 === a || a,
            l = t.children,
            s = t.className,
            u = t.content,
            c = t.placement,
            d = void 0 === c ? 'top' : c,
            p = t.style,
            h = void 0 === p ? 'dark' : p,
            g = t.theme,
            m = t.trigger,
            v = void 0 === m ? 'hover' : m,
            b = t.minWidth,
            y = ht(t, rc),
            x = (0, e.useRef)(null),
            w = f((0, e.useState)(!1), 2),
            k = w[0],
            N = w[1],
            S = wl({ open: k, placement: d, arrowRef: x, setOpen: N }),
            E = S.context,
            C = S.middlewareData.arrow,
            j = void 0 === C ? {} : C,
            R = j.x,
            T = j.y,
            P = S.refs,
            O = S.strategy,
            L = S.update,
            _ = S.x,
            I = S.y,
            D = (function (t, r) {
              void 0 === r && (r = {});
              var n = t.open,
                o = t.onOpenChange,
                a = t.dataRef,
                i = t.events,
                l = t.refs,
                s = t.elements,
                u = s.floating,
                c = s.domReference,
                d = r,
                f = d.enabled,
                p = void 0 === f || f,
                h = d.keyboardOnly,
                g = void 0 === h || h,
                m = e.useRef(''),
                v = e.useRef(!1),
                b = e.useRef();
              return (
                e.useEffect(
                  function () {
                    if (p) {
                      var e = Qa(u).defaultView || window;
                      return (
                        e.addEventListener('blur', t),
                        function () {
                          e.removeEventListener('blur', t);
                        }
                      );
                    }
                    function t() {
                      !n && ei(c) && c === di(Qa(c)) && (v.current = !0);
                    }
                  },
                  [u, c, n, p],
                ),
                e.useEffect(
                  function () {
                    if (p)
                      return (
                        i.on('dismiss', e),
                        function () {
                          i.off('dismiss', e);
                        }
                      );
                    function e(e) {
                      ('referencePress' !== e.type && 'escapeKey' !== e.type) || (v.current = !0);
                    }
                  },
                  [i, p],
                ),
                e.useEffect(function () {
                  return function () {
                    clearTimeout(b.current);
                  };
                }, []),
                e.useMemo(
                  function () {
                    return p
                      ? {
                          reference: {
                            onPointerDown: function (e) {
                              var t = e.pointerType;
                              (m.current = t), (v.current = !(!t || !g));
                            },
                            onMouseLeave: function () {
                              v.current = !1;
                            },
                            onFocus: function (e) {
                              var t;
                              v.current ||
                                ('focus' === e.type &&
                                  'mousedown' ===
                                    (null == (t = a.current.openEvent) ? void 0 : t.type) &&
                                  Vi(a.current.openEvent, c)) ||
                                o(!0, e.nativeEvent);
                            },
                            onBlur: function (e) {
                              v.current = !1;
                              var t = e.relatedTarget,
                                r =
                                  Za(t) &&
                                  t.hasAttribute(ii('focus-guard')) &&
                                  'outside' === t.getAttribute('data-type');
                              b.current = setTimeout(function () {
                                ai(l.floating.current, t) || ai(c, t) || r || o(!1, e.nativeEvent);
                              });
                            },
                          },
                        }
                      : {};
                  },
                  [p, g, c, l, a, o],
                )
              );
            })(E),
            z = kl({ context: E, role: 'tooltip', trigger: v, interactions: [D] }),
            M = z.getFloatingProps,
            A = z.getReferenceProps;
          return (
            (0, e.useEffect)(
              function () {
                if (P.reference.current && P.floating.current && k)
                  return Jo(P.reference.current, P.floating.current, L);
              },
              [k, P.floating, P.reference, L],
            ),
            (0, gt.jsxs)(gt.Fragment, {
              children: [
                (0, gt.jsx)(
                  'div',
                  pt(
                    pt(
                      {
                        ref: P.setReference,
                        className: g.target,
                        'data-testid': 'flowbite-tooltip-target',
                      },
                      A(),
                    ),
                    {},
                    { children: l },
                  ),
                ),
                (0, gt.jsxs)(
                  'div',
                  pt(
                    pt(
                      { ref: P.setFloating, 'data-testid': 'flowbite-tooltip' },
                      M(
                        pt(
                          {
                            className: kr(
                              g.base,
                              o && ''.concat(g.animation, ' ').concat(o),
                              !k && g.hidden,
                              g.style[h],
                              s,
                            ),
                            style: {
                              position: O,
                              top: null !== I && void 0 !== I ? I : ' ',
                              left: null !== _ && void 0 !== _ ? _ : ' ',
                              minWidth: b,
                            },
                          },
                          y,
                        ),
                      ),
                    ),
                    {},
                    {
                      children: [
                        (0, gt.jsx)('div', { className: g.content, children: u }),
                        i &&
                          (0, gt.jsx)('div', {
                            className: kr(
                              g.arrow.base,
                              'dark' === h && g.arrow.style.dark,
                              'light' === h && g.arrow.style.light,
                              'auto' === h && g.arrow.style.auto,
                            ),
                            'data-testid': 'flowbite-tooltip-arrow',
                            ref: x,
                            style: dt(
                              {
                                top: null !== T && void 0 !== T ? T : ' ',
                                left: null !== R && void 0 !== R ? R : ' ',
                                right: ' ',
                                bottom: ' ',
                              },
                              ((r = { placement: S.placement }),
                              { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[
                                r.placement.split('-')[0]
                              ]),
                              g.arrow.placement,
                            ),
                            children: '\xa0',
                          }),
                      ],
                    },
                  ),
                ),
              ],
            })
          );
        },
        oc = [
          'animation',
          'arrow',
          'children',
          'className',
          'content',
          'placement',
          'style',
          'theme',
          'trigger',
        ],
        ac = function (e) {
          var t = e.animation,
            r = void 0 === t ? 'duration-300' : t,
            n = e.arrow,
            o = void 0 === n || n,
            a = e.children,
            i = e.className,
            l = e.content,
            s = e.placement,
            u = void 0 === s ? 'top' : s,
            c = e.style,
            d = void 0 === c ? 'dark' : c,
            f = e.theme,
            p = void 0 === f ? {} : f,
            h = e.trigger,
            g = void 0 === h ? 'hover' : h,
            m = ht(e, oc),
            v = Er(kn().theme.tooltip, p);
          return (0, gt.jsx)(
            nc,
            pt(
              pt(
                {
                  animation: r,
                  arrow: o,
                  content: l,
                  placement: u,
                  style: d,
                  theme: v,
                  trigger: g,
                  className: i,
                },
                m,
              ),
              {},
              { children: a },
            ),
          );
        };
      ac.displayName = 'Tooltip';
      var ic,
        lc = function (e) {
          return (tc =
            tc ||
            l(
              a().mark(function e(t) {
                var r, n, o, i;
                return a().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (r = t.id),
                            (n = t.status),
                            (o = t.message),
                            (e.prev = 1),
                            (e.next = 4),
                            ct.patch('changeProductStatus', { id: r, status: n, message: o })
                          );
                        case 4:
                          return (i = e.sent), e.abrupt('return', i);
                        case 8:
                          (e.prev = 8), (e.t0 = e.catch(1)), console.log('error login');
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]],
                );
              }),
            )).apply(this, arguments);
        },
        sc = function (t) {
          var r,
            n = t.product,
            o = t.handleGetProducts,
            i = f((0, e.useState)(!1), 2),
            s = i[0],
            u = i[1],
            c = f((0, e.useState)(n.status), 2),
            d = c[0],
            p = c[1],
            h = f((0, e.useState)(!1), 2),
            g = h[0],
            m = h[1],
            v = f((0, e.useState)(''), 2),
            b = v[0],
            y = v[1];
          return (0, gt.jsxs)(gt.Fragment, {
            children: [
              (0, gt.jsxs)(Zr, {
                color: 'primary',
                onClick: function () {
                  return u(!s);
                },
                children: [(0, gt.jsx)(Tt, { className: 'mr-2 text-lg' }), 'Answer'],
              }),
              (0, gt.jsxs)(ds, {
                className: '',
                onClose: function () {
                  return u(!1);
                },
                show: s,
                children: [
                  (0, gt.jsx)(ds.Header, {
                    className: 'border-b border-gray-200 !p-6 dark:border-gray-700',
                    children: (0, gt.jsxs)('strong', {
                      children: [
                        (0, gt.jsx)('span', { className: 'mx-5', children: ' Answer product.' }),
                        ' User:',
                        ' ',
                        (0, gt.jsx)('span', { className: 'text-gray-400', children: n.userTGId }),
                        (0, gt.jsx)('span', { className: 'ml-5', children: 'Status: ' }),
                        (0, gt.jsx)('span', { className: 'text-gray-400', children: n.status }),
                      ],
                    }),
                  }),
                  (0, gt.jsxs)('div', {
                    className: 'relative',
                    children: [
                      (0, gt.jsxs)('div', {
                        className: 'flex gap-5',
                        children: [
                          (0, gt.jsx)(Zr, {
                            className: 'w-[10%] ml-7 bg-gray-100 text-lg',
                            color: 'primary',
                            onClick: function () {
                              return m(!g);
                            },
                            children: 'Change status',
                          }),
                          (0, gt.jsxs)(Yl, { children: ['Status: ', d] }),
                        ],
                      }),
                      g &&
                        (0, gt.jsxs)('div', {
                          className: 'w-[10%] absolute left-[30px] bg-gray-100 py-1',
                          role: 'none',
                          children: [
                            (0, gt.jsx)('button', {
                              className: 'text-gray-700 block px-4 py-2 text-sm',
                              role: 'menuitem',
                              id: 'menu-item-0',
                              onClick: function () {
                                return p(dc.New);
                              },
                              children: 'New',
                            }),
                            (0, gt.jsx)('button', {
                              className: 'text-gray-700 block px-4 py-2 text-sm',
                              role: 'menuitem',
                              id: 'menu-item-0',
                              onClick: function () {
                                return p(dc.ToEdit);
                              },
                              children: 'To edit',
                            }),
                            (0, gt.jsx)('button', {
                              className: 'text-gray-700 block px-4 py-2 text-sm',
                              role: 'menuitem',
                              id: 'menu-item-1',
                              onClick: function () {
                                return p(dc.Reject);
                              },
                              children: 'Reject',
                            }),
                            (0, gt.jsx)('button', {
                              className: 'text-gray-700 block px-4 py-2 text-sm',
                              role: 'menuitem',
                              id: 'menu-item-2',
                              onClick: function () {
                                return p(dc.OnReview);
                              },
                              children: 'On rewiev',
                            }),
                            (0, gt.jsx)('button', {
                              className: 'text-gray-700 block px-4 py-2 text-sm',
                              role: 'menuitem',
                              id: 'menu-item-2',
                              onClick: function () {
                                return p(dc.All);
                              },
                              children: 'All',
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, gt.jsx)(Yl, { className: 'mt-3 ml-6', children: n.productText }),
                  (0, gt.jsx)(ds.Body, {
                    children: (0, gt.jsx)('form', {
                      children: (0, gt.jsx)('div', {
                        className: 'grid grid-cols-1 gap-6 lg:grid-cols-2',
                        children: (0, gt.jsxs)('div', {
                          className: 'lg:col-span-2 p-5',
                          children: [
                            (0, gt.jsx)(Yl, {
                              htmlFor: 'productDetails',
                              children: 'Write answer',
                            }),
                            (0, gt.jsx)(Ou, {
                              id: 'productDetails',
                              name: 'productDetails',
                              placeholder: 'Message...',
                              rows: 6,
                              className: 'mt-1 p-2',
                              value: b,
                              onChange: function (e) {
                                y(e.target.value);
                              },
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, gt.jsx)(ds.Footer, {
                    children: (0, gt.jsx)(Zr, {
                      className: 'w-full bg-gray-400 text-lg m-[10px]',
                      color: 'primary',
                      onClick: function () {
                        return (function () {
                          return (r =
                            r ||
                            l(
                              a().mark(function e() {
                                return a().wrap(function (e) {
                                  for (;;)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        return (
                                          (e.next = 2), lc({ id: n._id, status: d, message: b })
                                        );
                                      case 2:
                                        if (!e.sent) {
                                          e.next = 7;
                                          break;
                                        }
                                        return u(!1), (e.next = 7), o();
                                      case 7:
                                      case 'end':
                                        return e.stop();
                                    }
                                }, e);
                              }),
                            )).apply(this, arguments);
                        })();
                      },
                      children: 'Change status',
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        uc = function (e) {
          var t = e.product,
            r = e.handleGetProducts;
          return (0, gt.jsxs)(ju, {
            className: 'min-w-full divide-y divide-gray-200 dark:divide-gray-600',
            children: [
              (0, gt.jsx)(ju.Head, { className: 'bg-gray-100 dark:bg-gray-700' }),
              (0, gt.jsx)(ju.Body, {
                className: 'divide-y divide-gray-200 bg-white dark:divide-gray-700 bg-gray-100',
                children: (0, gt.jsxs)(ju.Row, {
                  className: 'hover:bg-gray-100 dark:hover:bg-neutral-300',
                  children: [
                    (0, gt.jsxs)(ju.Cell, {
                      className:
                        'whitespace-nowrap p-4 pl-[50px] text-sm font-normal text-gray-500 dark:text-gray-400',
                      children: [
                        (0, gt.jsx)('div', {
                          className: 'text-base font-semibold text-gray-900 dark:text-black',
                          children: t.updatedAt,
                        }),
                        (0, gt.jsx)('div', {
                          className:
                            'truncate overflow-hidden inline-block max-w-[400px] text-black-500 dark:text-black-400 ',
                          children: t.productText,
                        }),
                      ],
                    }),
                    (0, gt.jsx)(ju.Cell, {
                      className:
                        'whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black w-[120px]',
                      children: t.status,
                    }),
                    (0, gt.jsx)(ju.Cell, {
                      className:
                        'whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-black ',
                      children: t.userTGId,
                    }),
                    (0, gt.jsx)(ju.Cell, {
                      className: 'space-x-2 whitespace-nowrap p-4 pr-[50px]',
                      children: (0, gt.jsx)('div', {
                        className:
                          'group flex h-min items-center justify-center p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg focus:ring-2',
                        children: (0, gt.jsx)(sc, { product: t, handleGetProducts: r }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        cc = function (e) {
          var t = e.product,
            r = e.handleGetProducts;
          return (0, gt.jsx)(gt.Fragment, {
            children: (0, gt.jsx)('div', {
              className: 'flex flex-col',
              children: (0, gt.jsx)('div', {
                className: 'overflow-x-auto',
                children: (0, gt.jsx)('div', {
                  className: 'inline-block min-w-full align-middle',
                  children: (0, gt.jsx)('div', {
                    className: 'overflow-hidden shadow',
                    children: (0, gt.jsx)(uc, { product: t, handleGetProducts: r }),
                  }),
                }),
              }),
            }),
          });
        },
        dc = (function (e) {
          return (
            (e.ToEdit = 'To edit'),
            (e.Reject = 'Reject'),
            (e.OnReview = 'On review'),
            (e.New = 'New'),
            (e.All = 'All'),
            e
          );
        })({}),
        fc = function (t) {
          var r = t.setStatus,
            n = t.setIsOpenDropDown,
            o = t.buttonRef,
            a = (0, e.useRef)(null);
          return (
            (0, e.useEffect)(function () {
              var e = function (e) {
                a.current && e.target !== o.current && !a.current.contains(e.target) && n(!1);
              };
              return (
                document.addEventListener('click', e),
                function () {
                  document.removeEventListener('click', e);
                }
              );
            }, []),
            (0, gt.jsxs)('div', {
              className: 'absolute z-10 bg-gray-100 py-1',
              role: 'none',
              ref: a,
              children: [
                (0, gt.jsx)('button', {
                  className: 'text-gray-700 block px-4 py-2 text-sm',
                  role: 'menuitem',
                  onClick: function () {
                    return r(dc.New);
                  },
                  children: 'New',
                }),
                (0, gt.jsx)('button', {
                  className: 'text-gray-700 block px-4 py-2 text-sm',
                  role: 'menuitem',
                  onClick: function () {
                    return r(dc.ToEdit);
                  },
                  children: 'To edit',
                }),
                (0, gt.jsx)('button', {
                  className: 'text-gray-700 block px-4 py-2 text-sm',
                  role: 'menuitem',
                  onClick: function () {
                    return r(dc.Reject);
                  },
                  children: 'Reject',
                }),
                (0, gt.jsx)('button', {
                  className: 'text-gray-700 block px-4 py-2 text-sm',
                  role: 'menuitem',
                  onClick: function () {
                    return r(dc.OnReview);
                  },
                  children: 'On review',
                }),
                (0, gt.jsx)('button', {
                  className: 'text-gray-700 block px-4 py-2 text-sm',
                  role: 'menuitem',
                  onClick: function () {
                    return r(dc.All);
                  },
                  children: 'All',
                }),
              ],
            })
          );
        },
        pc = function () {
          var t,
            r = f((0, e.useState)(null), 2),
            n = r[0],
            o = r[1],
            i = f((0, e.useState)(dc.All), 2),
            s = i[0],
            u = i[1],
            c = k().clearToken,
            d = f((0, e.useState)(!1), 2),
            p = d[0],
            h = d[1],
            g = (0, e.useRef)(null);
          (0, e.useEffect)(function () {
            m();
          }, []);
          var m = function () {
            return (t =
              t ||
              l(
                a().mark(function e() {
                  var t;
                  return a().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), ct.get('products');
                          case 3:
                            (t = e.sent), o(t.data), (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7), (e.t0 = e.catch(0)), console.log('error get products');
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]],
                  );
                }),
              )).apply(this, arguments);
          };
          return (0, gt.jsx)('div', {
            children: (0, gt.jsxs)('div', {
              className: 'w-[80%] m-auto  mb-[100px] mt-[100px]',
              children: [
                (0, gt.jsxs)('div', {
                  className: 'mb-4  flex w-full justify-between',
                  children: [
                    (0, gt.jsx)('h1', {
                      className: 'text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl',
                      children: 'All products',
                    }),
                    (0, gt.jsxs)('div', {
                      className:
                        'left-[700px] mt-2  w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                      role: 'menu',
                      'aria-orientation': 'vertical',
                      'aria-labelledby': 'menu-button',
                      children: [
                        (0, gt.jsx)('div', {
                          className: 'flex ',
                          children: (0, gt.jsxs)('button', {
                            type: 'button',
                            className:
                              'inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
                            id: 'menu-button',
                            'aria-expanded': p,
                            'aria-haspopup': p,
                            onClick: function () {
                              return h(!p);
                            },
                            ref: g,
                            children: [
                              'Status: ',
                              s,
                              (0, gt.jsx)('svg', {
                                className: 'mr-1 h-5 w-5 text-gray-400',
                                viewBox: '0 0 20 20',
                                fill: 'currentColor',
                                'aria-hidden': 'true',
                                children: (0, gt.jsx)('path', {
                                  fillRule: 'evenodd',
                                  d: 'M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z',
                                  clipRule: 'evenodd',
                                }),
                              }),
                            ],
                          }),
                        }),
                        p && (0, gt.jsx)(fc, { setStatus: u, setIsOpenDropDown: h, buttonRef: g }),
                      ],
                    }),
                  ],
                }),
                n &&
                  (function (e, t) {
                    return t === dc.All
                      ? e
                      : e.filter(function (e) {
                          return e.status === t;
                        });
                  })(n, s).map(function (e, t) {
                    return (0, gt.jsx)(
                      'div',
                      {
                        className: 'flex w-full justify-center items-center',
                        children: (0, gt.jsx)(cc, { product: e, handleGetProducts: m }),
                      },
                      t,
                    );
                  }),
                (0, gt.jsx)('button', {
                  className: 'absolute flex text-gray-400 right-10 top-5',
                  onClick: function () {
                    return c();
                  },
                  children: 'Logout',
                }),
              ],
            }),
          });
        };
      function hc(e, t) {
        return (
          (hc = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          hc(e, t)
        );
      }
      function gc(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, 'prototype', { writable: !1 }),
          t && hc(e, t);
      }
      function mc(e) {
        return (
          (mc = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          mc(e)
        );
      }
      function vc() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' === typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (p) {
          return !1;
        }
      }
      function bc(e, t) {
        if (t && ('object' === o(t) || 'function' === typeof t)) return t;
        if (void 0 !== t)
          throw new TypeError('Derived constructors may only return object or undefined');
        return (function (e) {
          if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e);
      }
      function yc(e) {
        var t = vc();
        return function () {
          var r,
            n = mc(e);
          if (t) {
            var o = mc(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return bc(this, r);
        };
      }
      function xc(e, t, r) {
        return (
          (xc = vc()
            ? Reflect.construct.bind()
            : function (e, t, r) {
                var n = [null];
                n.push.apply(n, t);
                var o = new (Function.bind.apply(e, n))();
                return r && hc(o, r.prototype), o;
              }),
          xc.apply(null, arguments)
        );
      }
      function wc(e) {
        var t = 'function' === typeof Map ? new Map() : void 0;
        return (
          (wc = function (e) {
            if (null === e || ((r = e), -1 === Function.toString.call(r).indexOf('[native code]')))
              return e;
            var r;
            if ('function' !== typeof e)
              throw new TypeError('Super expression must either be null or a function');
            if ('undefined' !== typeof t) {
              if (t.has(e)) return t.get(e);
              t.set(e, n);
            }
            function n() {
              return xc(e, arguments, mc(this).constructor);
            }
            return (
              (n.prototype = Object.create(e.prototype, {
                constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 },
              })),
              hc(n, e)
            );
          }),
          wc(e)
        );
      }
      function kc() {
        return (
          (kc = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          kc.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
      })(ic || (ic = {}));
      var Nc,
        Sc = 'popstate';
      function Ec(e, t) {
        if (!1 === e || null === e || 'undefined' === typeof e) throw new Error(t);
      }
      function Cc(e, t) {
        if (!e) {
          'undefined' !== typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (p) {}
        }
      }
      function jc(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function Rc(e, t, r, n) {
        return (
          void 0 === r && (r = null),
          kc(
            { pathname: 'string' === typeof e ? e : e.pathname, search: '', hash: '' },
            'string' === typeof t ? Pc(t) : t,
            { state: r, key: (t && t.key) || n || Math.random().toString(36).substr(2, 8) },
          )
        );
      }
      function Tc(e) {
        var t = e.pathname,
          r = void 0 === t ? '/' : t,
          n = e.search,
          o = void 0 === n ? '' : n,
          a = e.hash,
          i = void 0 === a ? '' : a;
        return (
          o && '?' !== o && (r += '?' === o.charAt(0) ? o : '?' + o),
          i && '#' !== i && (r += '#' === i.charAt(0) ? i : '#' + i),
          r
        );
      }
      function Pc(e) {
        var t = {};
        if (e) {
          var r = e.indexOf('#');
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          var n = e.indexOf('?');
          n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))), e && (t.pathname = e);
        }
        return t;
      }
      function Oc(e, t, r, n) {
        void 0 === n && (n = {});
        var o = n,
          a = o.window,
          i = void 0 === a ? document.defaultView : a,
          l = o.v5Compat,
          s = void 0 !== l && l,
          u = i.history,
          c = ic.Pop,
          d = null,
          f = p();
        function p() {
          return (u.state || { idx: null }).idx;
        }
        function h() {
          c = ic.Pop;
          var e = p(),
            t = null == e ? null : e - f;
          (f = e), d && d({ action: c, location: m.location, delta: t });
        }
        function g(e) {
          var t = 'null' !== i.location.origin ? i.location.origin : i.location.href,
            r = 'string' === typeof e ? e : Tc(e);
          return (
            Ec(t, 'No window.location.(origin|href) available to create URL for href: ' + r),
            new URL(r, t)
          );
        }
        null == f && ((f = 0), u.replaceState(kc({}, u.state, { idx: f }), ''));
        var m = {
          get action() {
            return c;
          },
          get location() {
            return e(i, u);
          },
          listen: function (e) {
            if (d) throw new Error('A history only accepts one active listener');
            return (
              i.addEventListener(Sc, h),
              (d = e),
              function () {
                i.removeEventListener(Sc, h), (d = null);
              }
            );
          },
          createHref: function (e) {
            return t(i, e);
          },
          createURL: g,
          encodeLocation: function (e) {
            var t = g(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            c = ic.Push;
            var n = Rc(m.location, e, t);
            r && r(n, e);
            var o = jc(n, (f = p() + 1)),
              a = m.createHref(n);
            try {
              u.pushState(o, '', a);
            } catch (l) {
              if (l instanceof DOMException && 'DataCloneError' === l.name) throw l;
              i.location.assign(a);
            }
            s && d && d({ action: c, location: m.location, delta: 1 });
          },
          replace: function (e, t) {
            c = ic.Replace;
            var n = Rc(m.location, e, t);
            r && r(n, e);
            var o = jc(n, (f = p())),
              a = m.createHref(n);
            u.replaceState(o, '', a), s && d && d({ action: c, location: m.location, delta: 0 });
          },
          go: function (e) {
            return u.go(e);
          },
        };
        return m;
      }
      !(function (e) {
        (e.data = 'data'),
          (e.deferred = 'deferred'),
          (e.redirect = 'redirect'),
          (e.error = 'error');
      })(Nc || (Nc = {}));
      new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
      function Lc(e, t, r) {
        void 0 === r && (r = '/');
        var n = qc(('string' === typeof t ? Pc(t) : t).pathname || '/', r);
        if (null == n) return null;
        var o = _c(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var r =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, r) {
                      return e === t[r];
                    });
                  return r ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                );
          });
        })(o);
        for (var a = null, i = 0; null == a && i < o.length; ++i) a = Hc(o[i], $c(n));
        return a;
      }
      function _c(e, t, r, n) {
        void 0 === t && (t = []), void 0 === r && (r = []), void 0 === n && (n = '');
        var o = function (e, o, a) {
          var i = {
            relativePath: void 0 === a ? e.path || '' : a,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: o,
            route: e,
          };
          i.relativePath.startsWith('/') &&
            (Ec(
              i.relativePath.startsWith(n),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                n +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.',
            ),
            (i.relativePath = i.relativePath.slice(n.length)));
          var l = Yc([n, i.relativePath]),
            s = r.concat(i);
          e.children &&
            e.children.length > 0 &&
            (Ec(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                l +
                '".',
            ),
            _c(e.children, t, s, l)),
            (null != e.path || e.index) &&
              t.push({ path: l, score: Wc(l, e.index), routesMeta: s });
        };
        return (
          e.forEach(function (e, t) {
            var r;
            if ('' !== e.path && null != (r = e.path) && r.includes('?')) {
              var n,
                a = An(Ic(e.path));
              try {
                for (a.s(); !(n = a.n()).done; ) {
                  var i = n.value;
                  o(e, t, i);
                }
              } catch (l) {
                a.e(l);
              } finally {
                a.f();
              }
            } else o(e, t);
          }),
          t
        );
      }
      function Ic(e) {
        var t = e.split('/');
        if (0 === t.length) return [];
        var r,
          n = s((r = t)) || On(r) || c(r) || d(),
          o = n[0],
          a = n.slice(1),
          i = o.endsWith('?'),
          l = o.replace(/\?$/, '');
        if (0 === a.length) return i ? [l, ''] : [l];
        var u = Ic(a.join('/')),
          f = [];
        return (
          f.push.apply(
            f,
            Ln(
              u.map(function (e) {
                return '' === e ? l : [l, e].join('/');
              }),
            ),
          ),
          i && f.push.apply(f, Ln(u)),
          f.map(function (t) {
            return e.startsWith('/') && '' === t ? '/' : t;
          })
        );
      }
      var Dc = /^:\w+$/,
        zc = 3,
        Mc = 2,
        Ac = 1,
        Fc = 10,
        Bc = -2,
        Uc = function (e) {
          return '*' === e;
        };
      function Wc(e, t) {
        var r = e.split('/'),
          n = r.length;
        return (
          r.some(Uc) && (n += Bc),
          t && (n += Mc),
          r
            .filter(function (e) {
              return !Uc(e);
            })
            .reduce(function (e, t) {
              return e + (Dc.test(t) ? zc : '' === t ? Ac : Fc);
            }, n)
        );
      }
      function Hc(e, t) {
        for (var r = e.routesMeta, n = {}, o = '/', a = [], i = 0; i < r.length; ++i) {
          var l = r[i],
            s = i === r.length - 1,
            u = '/' === o ? t : t.slice(o.length) || '/',
            c = Vc({ path: l.relativePath, caseSensitive: l.caseSensitive, end: s }, u);
          if (!c) return null;
          Object.assign(n, c.params);
          var d = l.route;
          a.push({
            params: n,
            pathname: Yc([o, c.pathname]),
            pathnameBase: Xc(Yc([o, c.pathnameBase])),
            route: d,
          }),
            '/' !== c.pathnameBase && (o = Yc([o, c.pathnameBase]));
        }
        return a;
      }
      function Vc(e, t) {
        'string' === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var r = (function (e, t, r) {
            void 0 === t && (t = !1);
            void 0 === r && (r = !0);
            Cc(
              '*' === e || !e.endsWith('*') || e.endsWith('/*'),
              'Route path "' +
                e +
                '" will be treated as if it were "' +
                e.replace(/\*$/, '/*') +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                e.replace(/\*$/, '/*') +
                '".',
            );
            var n = [],
              o =
                '^' +
                e
                  .replace(/\/*\*?$/, '')
                  .replace(/^\/*/, '/')
                  .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&')
                  .replace(/\/:(\w+)/g, function (e, t) {
                    return n.push(t), '/([^\\/]+)';
                  });
            e.endsWith('*')
              ? (n.push('*'), (o += '*' === e || '/*' === e ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
              : r
              ? (o += '\\/*$')
              : '' !== e && '/' !== e && (o += '(?:(?=\\/|$))');
            var a = new RegExp(o, t ? void 0 : 'i');
            return [a, n];
          })(e.path, e.caseSensitive, e.end),
          n = f(r, 2),
          o = n[0],
          a = n[1],
          i = t.match(o);
        if (!i) return null;
        var l = i[0],
          s = l.replace(/(.)\/+$/, '$1'),
          u = i.slice(1),
          c = a.reduce(function (e, t, r) {
            if ('*' === t) {
              var n = u[r] || '';
              s = l.slice(0, l.length - n.length).replace(/(.)\/+$/, '$1');
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (r) {
                  return (
                    Cc(
                      !1,
                      'The value for the URL param "' +
                        t +
                        '" will not be decoded because the string "' +
                        e +
                        '" is a malformed URL segment. This is probably due to a bad percent encoding (' +
                        r +
                        ').',
                    ),
                    e
                  );
                }
              })(u[r] || '', t)),
              e
            );
          }, {});
        return { params: c, pathname: l, pathnameBase: s, pattern: e };
      }
      function $c(e) {
        try {
          return decodeURI(e);
        } catch (t) {
          return (
            Cc(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ').',
            ),
            e
          );
        }
      }
      function qc(e, t) {
        if ('/' === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var r = t.endsWith('/') ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && '/' !== n ? null : e.slice(r) || '/';
      }
      function Gc(e, t, r, n) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          '` field [' +
          JSON.stringify(n) +
          '].  Please separate it out to the `to.' +
          r +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function Kc(e) {
        return e.filter(function (e, t) {
          return 0 === t || (e.route.path && e.route.path.length > 0);
        });
      }
      function Qc(e, t, r, n) {
        var o;
        void 0 === n && (n = !1),
          'string' === typeof e
            ? (o = Pc(e))
            : (Ec(
                !(o = kc({}, e)).pathname || !o.pathname.includes('?'),
                Gc('?', 'pathname', 'search', o),
              ),
              Ec(!o.pathname || !o.pathname.includes('#'), Gc('#', 'pathname', 'hash', o)),
              Ec(!o.search || !o.search.includes('#'), Gc('#', 'search', 'hash', o)));
        var a,
          i = '' === e || '' === o.pathname,
          l = i ? '/' : o.pathname;
        if (n || null == l) a = r;
        else {
          var s = t.length - 1;
          if (l.startsWith('..')) {
            for (var u = l.split('/'); '..' === u[0]; ) u.shift(), (s -= 1);
            o.pathname = u.join('/');
          }
          a = s >= 0 ? t[s] : '/';
        }
        var c = (function (e, t) {
            void 0 === t && (t = '/');
            var r = 'string' === typeof e ? Pc(e) : e,
              n = r.pathname,
              o = r.search,
              a = void 0 === o ? '' : o,
              i = r.hash,
              l = void 0 === i ? '' : i,
              s = n
                ? n.startsWith('/')
                  ? n
                  : (function (e, t) {
                      var r = t.replace(/\/+$/, '').split('/');
                      return (
                        e.split('/').forEach(function (e) {
                          '..' === e ? r.length > 1 && r.pop() : '.' !== e && r.push(e);
                        }),
                        r.length > 1 ? r.join('/') : '/'
                      );
                    })(n, t)
                : t;
            return { pathname: s, search: Jc(a), hash: Zc(l) };
          })(o, a),
          d = l && '/' !== l && l.endsWith('/'),
          f = (i || '.' === l) && r.endsWith('/');
        return c.pathname.endsWith('/') || (!d && !f) || (c.pathname += '/'), c;
      }
      var Yc = function (e) {
          return e.join('/').replace(/\/\/+/g, '/');
        },
        Xc = function (e) {
          return e.replace(/\/+$/, '').replace(/^\/*/, '/');
        },
        Jc = function (e) {
          return e && '?' !== e ? (e.startsWith('?') ? e : '?' + e) : '';
        },
        Zc = function (e) {
          return e && '#' !== e ? (e.startsWith('#') ? e : '#' + e) : '';
        },
        ed = (function (e) {
          gc(r, e);
          var t = yc(r);
          function r() {
            return oe(this, r), t.apply(this, arguments);
          }
          return le(r);
        })(wc(Error));
      function td(e) {
        return (
          null != e &&
          'number' === typeof e.status &&
          'string' === typeof e.statusText &&
          'boolean' === typeof e.internal &&
          'data' in e
        );
      }
      var rd = ['post', 'put', 'patch', 'delete'],
        nd = (new Set(rd), ['get'].concat(rd));
      new Set(nd), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
      Symbol('deferred');
      function od() {
        return (
          (od = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          od.apply(this, arguments)
        );
      }
      var ad = e.createContext(null);
      var id = e.createContext(null);
      var ld = e.createContext(null);
      var sd = e.createContext(null);
      var ud = e.createContext(null);
      var cd = e.createContext({ outlet: null, matches: [], isDataRoute: !1 });
      var dd = e.createContext(null);
      function fd() {
        return null != e.useContext(ud);
      }
      function pd() {
        return fd() || Ec(!1), e.useContext(ud).location;
      }
      function hd(t) {
        e.useContext(sd).static || e.useLayoutEffect(t);
      }
      function gd() {
        return e.useContext(cd).isDataRoute
          ? (function () {
              var t = Ed(Nd.UseNavigateStable).router,
                r = jd(Sd.UseNavigateStable),
                n = e.useRef(!1);
              return (
                hd(function () {
                  n.current = !0;
                }),
                e.useCallback(
                  function (e, o) {
                    void 0 === o && (o = {}),
                      n.current &&
                        ('number' === typeof e
                          ? t.navigate(e)
                          : t.navigate(e, od({ fromRouteId: r }, o)));
                  },
                  [t, r],
                )
              );
            })()
          : (function () {
              fd() || Ec(!1);
              var t = e.useContext(ad),
                r = e.useContext(sd),
                n = r.basename,
                o = r.navigator,
                a = e.useContext(cd).matches,
                i = pd().pathname,
                l = JSON.stringify(
                  Kc(a).map(function (e) {
                    return e.pathnameBase;
                  }),
                ),
                s = e.useRef(!1);
              return (
                hd(function () {
                  s.current = !0;
                }),
                e.useCallback(
                  function (e, r) {
                    if ((void 0 === r && (r = {}), s.current))
                      if ('number' !== typeof e) {
                        var a = Qc(e, JSON.parse(l), i, 'path' === r.relative);
                        null == t &&
                          '/' !== n &&
                          (a.pathname = '/' === a.pathname ? n : Yc([n, a.pathname])),
                          (r.replace ? o.replace : o.push)(a, r.state, r);
                      } else o.go(e);
                  },
                  [n, o, l, i, t],
                )
              );
            })();
      }
      var md = e.createContext(null);
      function vd(t, r, n) {
        fd() || Ec(!1);
        var o,
          a = e.useContext(sd).navigator,
          i = e.useContext(cd).matches,
          l = i[i.length - 1],
          s = l ? l.params : {},
          u = (l && l.pathname, l ? l.pathnameBase : '/'),
          c = (l && l.route, pd());
        if (r) {
          var d,
            f = 'string' === typeof r ? Pc(r) : r;
          '/' === u || (null == (d = f.pathname) ? void 0 : d.startsWith(u)) || Ec(!1), (o = f);
        } else o = c;
        var p = o.pathname || '/',
          h = Lc(t, { pathname: '/' === u ? p : p.slice(u.length) || '/' });
        var g = kd(
          h &&
            h.map(function (e) {
              return Object.assign({}, e, {
                params: Object.assign({}, s, e.params),
                pathname: Yc([
                  u,
                  a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname,
                ]),
                pathnameBase:
                  '/' === e.pathnameBase
                    ? u
                    : Yc([
                        u,
                        a.encodeLocation
                          ? a.encodeLocation(e.pathnameBase).pathname
                          : e.pathnameBase,
                      ]),
              });
            }),
          i,
          n,
        );
        return r && g
          ? e.createElement(
              ud.Provider,
              {
                value: {
                  location: od(
                    { pathname: '/', search: '', hash: '', state: null, key: 'default' },
                    o,
                  ),
                  navigationType: ic.Pop,
                },
              },
              g,
            )
          : g;
      }
      function bd() {
        var t = (function () {
            var t,
              r = e.useContext(dd),
              n = Cd(Sd.UseRouteError),
              o = jd(Sd.UseRouteError);
            if (r) return r;
            return null == (t = n.errors) ? void 0 : t[o];
          })(),
          r = td(t)
            ? t.status + ' ' + t.statusText
            : t instanceof Error
            ? t.message
            : JSON.stringify(t),
          n = t instanceof Error ? t.stack : null,
          o = 'rgba(200,200,200, 0.5)',
          a = { padding: '0.5rem', backgroundColor: o };
        return e.createElement(
          e.Fragment,
          null,
          e.createElement('h2', null, 'Unexpected Application Error!'),
          e.createElement('h3', { style: { fontStyle: 'italic' } }, r),
          n ? e.createElement('pre', { style: a }, n) : null,
          null,
        );
      }
      var yd = e.createElement(bd, null),
        xd = (function (t) {
          gc(n, t);
          var r = yc(n);
          function n(e) {
            var t;
            return (
              oe(this, n),
              ((t = r.call(this, e)).state = {
                location: e.location,
                revalidation: e.revalidation,
                error: e.error,
              }),
              t
            );
          }
          return (
            le(
              n,
              [
                {
                  key: 'componentDidCatch',
                  value: function (e, t) {
                    console.error('React Router caught the following error during render', e, t);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    return this.state.error
                      ? e.createElement(
                          cd.Provider,
                          { value: this.props.routeContext },
                          e.createElement(dd.Provider, {
                            value: this.state.error,
                            children: this.props.component,
                          }),
                        )
                      : this.props.children;
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromError',
                  value: function (e) {
                    return { error: e };
                  },
                },
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    return t.location !== e.location ||
                      ('idle' !== t.revalidation && 'idle' === e.revalidation)
                      ? { error: e.error, location: e.location, revalidation: e.revalidation }
                      : {
                          error: e.error || t.error,
                          location: t.location,
                          revalidation: e.revalidation || t.revalidation,
                        };
                  },
                },
              ],
            ),
            n
          );
        })(e.Component);
      function wd(t) {
        var r = t.routeContext,
          n = t.match,
          o = t.children,
          a = e.useContext(ad);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = n.route.id),
          e.createElement(cd.Provider, { value: r }, o)
        );
      }
      function kd(t, r, n) {
        var o;
        if ((void 0 === r && (r = []), void 0 === n && (n = null), null == t)) {
          var a;
          if (null == (a = n) || !a.errors) return null;
          t = n.matches;
        }
        var i = t,
          l = null == (o = n) ? void 0 : o.errors;
        if (null != l) {
          var s = i.findIndex(function (e) {
            return e.route.id && (null == l ? void 0 : l[e.route.id]);
          });
          s >= 0 || Ec(!1), (i = i.slice(0, Math.min(i.length, s + 1)));
        }
        return i.reduceRight(function (t, o, a) {
          var s = o.route.id ? (null == l ? void 0 : l[o.route.id]) : null,
            u = null;
          n && (u = o.route.errorElement || yd);
          var c = r.concat(i.slice(0, a + 1)),
            d = function () {
              var r;
              return (
                (r = s
                  ? u
                  : o.route.Component
                  ? e.createElement(o.route.Component, null)
                  : o.route.element
                  ? o.route.element
                  : t),
                e.createElement(wd, {
                  match: o,
                  routeContext: { outlet: t, matches: c, isDataRoute: null != n },
                  children: r,
                })
              );
            };
          return n && (o.route.ErrorBoundary || o.route.errorElement || 0 === a)
            ? e.createElement(xd, {
                location: n.location,
                revalidation: n.revalidation,
                component: u,
                error: s,
                children: d(),
                routeContext: { outlet: null, matches: c, isDataRoute: !0 },
              })
            : d();
        }, null);
      }
      var Nd = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
          );
        })(Nd || {}),
        Sd = (function (e) {
          return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
          );
        })(Sd || {});
      function Ed(t) {
        var r = e.useContext(ad);
        return r || Ec(!1), r;
      }
      function Cd(t) {
        var r = e.useContext(id);
        return r || Ec(!1), r;
      }
      function jd(t) {
        var r = (function (t) {
            var r = e.useContext(cd);
            return r || Ec(!1), r;
          })(),
          n = r.matches[r.matches.length - 1];
        return n.route.id || Ec(!1), n.route.id;
      }
      t.startTransition;
      function Rd(t) {
        var r = t.to,
          n = t.replace,
          o = t.state,
          a = t.relative;
        fd() || Ec(!1);
        var i = e.useContext(cd).matches,
          l = pd().pathname,
          s = gd(),
          u = Qc(
            r,
            Kc(i).map(function (e) {
              return e.pathnameBase;
            }),
            l,
            'path' === a,
          ),
          c = JSON.stringify(u);
        return (
          e.useEffect(
            function () {
              return s(JSON.parse(c), { replace: n, state: o, relative: a });
            },
            [s, c, a, n, o],
          ),
          null
        );
      }
      function Td(t) {
        return (function (t) {
          var r = e.useContext(cd).outlet;
          return r ? e.createElement(md.Provider, { value: t }, r) : r;
        })(t.context);
      }
      function Pd(e) {
        Ec(!1);
      }
      function Od(t) {
        var r = t.basename,
          n = void 0 === r ? '/' : r,
          o = t.children,
          a = void 0 === o ? null : o,
          i = t.location,
          l = t.navigationType,
          s = void 0 === l ? ic.Pop : l,
          u = t.navigator,
          c = t.static,
          d = void 0 !== c && c;
        fd() && Ec(!1);
        var f = n.replace(/^\/*/, '/'),
          p = e.useMemo(
            function () {
              return { basename: f, navigator: u, static: d };
            },
            [f, u, d],
          );
        'string' === typeof i && (i = Pc(i));
        var h = i,
          g = h.pathname,
          m = void 0 === g ? '/' : g,
          v = h.search,
          b = void 0 === v ? '' : v,
          y = h.hash,
          x = void 0 === y ? '' : y,
          w = h.state,
          k = void 0 === w ? null : w,
          N = h.key,
          S = void 0 === N ? 'default' : N,
          E = e.useMemo(
            function () {
              var e = qc(m, f);
              return null == e
                ? null
                : {
                    location: { pathname: e, search: b, hash: x, state: k, key: S },
                    navigationType: s,
                  };
            },
            [f, m, b, x, k, S, s],
          );
        return null == E
          ? null
          : e.createElement(
              sd.Provider,
              { value: p },
              e.createElement(ud.Provider, { children: a, value: E }),
            );
      }
      function Ld(e) {
        var t = e.children,
          r = e.location;
        return vd(Dd(t), r);
      }
      var _d = (function (e) {
          return (
            (e[(e.pending = 0)] = 'pending'),
            (e[(e.success = 1)] = 'success'),
            (e[(e.error = 2)] = 'error'),
            e
          );
        })(_d || {}),
        Id = new Promise(function () {});
      e.Component;
      function Dd(t, r) {
        void 0 === r && (r = []);
        var n = [];
        return (
          e.Children.forEach(t, function (t, o) {
            if (e.isValidElement(t)) {
              var a = [].concat(Ln(r), [o]);
              if (t.type !== e.Fragment) {
                t.type !== Pd && Ec(!1), t.props.index && t.props.children && Ec(!1);
                var i = {
                  id: t.props.id || a.join('-'),
                  caseSensitive: t.props.caseSensitive,
                  element: t.props.element,
                  Component: t.props.Component,
                  index: t.props.index,
                  path: t.props.path,
                  loader: t.props.loader,
                  action: t.props.action,
                  errorElement: t.props.errorElement,
                  ErrorBoundary: t.props.ErrorBoundary,
                  hasErrorBoundary: null != t.props.ErrorBoundary || null != t.props.errorElement,
                  shouldRevalidate: t.props.shouldRevalidate,
                  handle: t.props.handle,
                  lazy: t.props.lazy,
                };
                t.props.children && (i.children = Dd(t.props.children, a)), n.push(i);
              } else n.push.apply(n, Dd(t.props.children, a));
            }
          }),
          n
        );
      }
      new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
      var zd = t.startTransition;
      function Md(t) {
        var r,
          n = t.basename,
          o = t.children,
          a = t.future,
          i = t.window,
          l = e.useRef();
        null == l.current &&
          (l.current =
            (void 0 === (r = { window: i, v5Compat: !0 }) && (r = {}),
            Oc(
              function (e, t) {
                var r = e.location;
                return Rc(
                  '',
                  { pathname: r.pathname, search: r.search, hash: r.hash },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || 'default',
                );
              },
              function (e, t) {
                return 'string' === typeof t ? t : Tc(t);
              },
              null,
              r,
            )));
        var s = l.current,
          u = f(e.useState({ action: s.action, location: s.location }), 2),
          c = u[0],
          d = u[1],
          p = (a || {}).v7_startTransition,
          h = e.useCallback(
            function (e) {
              p && zd
                ? zd(function () {
                    return d(e);
                  })
                : d(e);
            },
            [d, p],
          );
        return (
          e.useLayoutEffect(
            function () {
              return s.listen(h);
            },
            [s, h],
          ),
          e.createElement(Od, {
            basename: n,
            children: o,
            location: c.location,
            navigationType: c.action,
            navigator: s,
          })
        );
      }
      'undefined' !== typeof window &&
        'undefined' !== typeof window.document &&
        window.document.createElement;
      var Ad, Fd;
      (function (e) {
        (e.UseScrollRestoration = 'useScrollRestoration'),
          (e.UseSubmit = 'useSubmit'),
          (e.UseSubmitFetcher = 'useSubmitFetcher'),
          (e.UseFetcher = 'useFetcher');
      })(Ad || (Ad = {})),
        (function (e) {
          (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
        })(Fd || (Fd = {}));
      var Bd = function (t) {
          var r = t.children,
            n = f((0, e.useState)(x), 2),
            o = n[0],
            a = o.user,
            i = o.isAuthResolved,
            l = o.token,
            s = n[1],
            u = (0, e.useCallback)(
              function (e) {
                var t = b(e);
                localStorage.setItem('token', e), s({ token: e, user: t, isAuthResolved: !0 });
              },
              [s],
            ),
            c = (0, e.useCallback)(
              function () {
                s({ isAuthResolved: !0 }), localStorage.removeItem('token');
              },
              [s],
            );
          return (
            (0, e.useEffect)(
              function () {
                i ||
                  setTimeout(function () {
                    return s({ isAuthResolved: !0 });
                  }, 0);
              },
              [i],
            ),
            (0, gt.jsx)(w.Provider, {
              value: { user: a, isAuthResolved: i, token: l, setToken: u, clearToken: c },
              children: r,
            })
          );
        },
        Ud = function () {
          return k().isAuthResolved ? (0, gt.jsx)(Td, {}) : 'Loading... ';
        },
        Wd = function () {
          var t,
            r,
            n = k().setToken,
            o = f((0, e.useState)(!1), 2),
            i = o[0],
            s = o[1],
            u = f((0, e.useState)(''), 2),
            c = u[0],
            d = u[1],
            p = function (e) {
              return (t =
                t ||
                l(
                  a().mark(function e(t) {
                    var r, n, o, i, l, u;
                    return a().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (r = t.email),
                                (n = t.password),
                                (e.prev = 1),
                                (e.next = 4),
                                ut.post('http://localhost:4444/login', { email: r, password: n })
                              );
                            case 4:
                              return (o = e.sent), e.abrupt('return', o);
                            case 8:
                              (e.prev = 8),
                                (e.t0 = e.catch(1)),
                                (l = e.t0),
                                'Login or Password incorrect (User not finded)' ===
                                  (null === (i = l.response) || void 0 === i
                                    ? void 0
                                    : i.data.message) &&
                                  (d(
                                    null === (u = l.response) || void 0 === u
                                      ? void 0
                                      : u.data.message,
                                  ),
                                  s(!1));
                            case 12:
                            case 'end':
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[1, 8]],
                    );
                  }),
                )).apply(this, arguments);
            };
          return (
            console.log(c),
            (0, gt.jsx)('section', {
              className: 'bg-gray-50 min-h-screen flex items-center justify-center',
              children: (0, gt.jsx)('div', {
                className: 'bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center',
                children: (0, gt.jsxs)('div', {
                  className: 'px-8 md:px-16',
                  children: [
                    (0, gt.jsx)('h2', {
                      className: 'font-bold text-2xl text-[#002D74]',
                      children: 'Login',
                    }),
                    i && (0, gt.jsx)('div', { children: 'loading...' }),
                    (0, gt.jsxs)('form', {
                      className: 'flex flex-col gap-4',
                      onSubmit: function (e) {
                        return (r =
                          r ||
                          l(
                            a().mark(function e(t) {
                              var r, o, i;
                              return a().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      t.preventDefault(),
                                        s(!0),
                                        (r = t.currentTarget),
                                        (o = r.elements),
                                        (i = { email: o.email.value, password: o.password.value }),
                                        p(i).then(function (e) {
                                          console.log(e),
                                            s(!1),
                                            e &&
                                              (console.log(
                                                null === e || void 0 === e ? void 0 : e.data.token,
                                              ),
                                              n(
                                                null === e || void 0 === e ? void 0 : e.data.token,
                                              ));
                                        });
                                    case 6:
                                    case 'end':
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          )).apply(this, arguments);
                      },
                      children: [
                        (0, gt.jsx)('input', {
                          id: 'email',
                          className: 'p-2 mt-8 rounded-xl border',
                          placeholder: 'Email',
                          required: !0,
                        }),
                        (0, gt.jsx)('div', {
                          className: 'relative',
                          children: (0, gt.jsx)('input', {
                            id: 'password',
                            type: 'password',
                            className: 'p-2 rounded-xl border w-full',
                            placeholder: 'Password',
                            required: !0,
                          }),
                        }),
                        (0, gt.jsx)('button', {
                          type: 'submit',
                          className:
                            'bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300',
                          children: 'Submit',
                        }),
                      ],
                    }),
                    c,
                  ],
                }),
              }),
            })
          );
        },
        Hd = function () {
          return k().user ? (0, gt.jsx)(Rd, { to: '/', replace: !0 }) : (0, gt.jsx)(Td, {});
        },
        Vd = function () {
          return k().user ? (0, gt.jsx)(Td, {}) : (0, gt.jsx)(Rd, { to: 'sign-in', replace: !0 });
        };
      var $d = function () {
          return (0, gt.jsx)(Md, {
            children: (0, gt.jsx)(Bd, {
              children: (0, gt.jsx)(Ld, {
                children: (0, gt.jsxs)(Pd, {
                  element: (0, gt.jsx)(Ud, {}),
                  children: [
                    (0, gt.jsx)(Pd, {
                      element: (0, gt.jsx)(Hd, {}),
                      children: (0, gt.jsx)(Pd, { path: 'sign-in', element: (0, gt.jsx)(Wd, {}) }),
                    }),
                    (0, gt.jsx)(Pd, {
                      element: (0, gt.jsx)(Vd, {}),
                      children: (0, gt.jsx)(Pd, { path: '/', element: (0, gt.jsx)(pc, {}) }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        qd = function (e) {
          e &&
            e instanceof Function &&
            r
              .e(787)
              .then(r.bind(r, 787))
              .then(function (t) {
                var r = t.getCLS,
                  n = t.getFID,
                  o = t.getFCP,
                  a = t.getLCP,
                  i = t.getTTFB;
                r(e), n(e), o(e), a(e), i(e);
              });
        };
      n
        .createRoot(document.getElementById('root'))
        .render((0, gt.jsx)(e.StrictMode, { children: (0, gt.jsx)($d, {}) })),
        qd();
    })();
})();
//# sourceMappingURL=main.a1cccdb8.js.map