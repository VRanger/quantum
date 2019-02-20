(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    10: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_exports__.a = {
        COBALT: { 500: '#002f7b' },
        SKY: { 500: '#0cc0ea' },
        BLUE: { 500: '#1355d0', 200: '#e5edfc', 50: 'rgba(19, 85, 208, 0.5)' },
        SUCCESS: { 900: '#3c6510', 500: '#7ed321', 200: '#edfadf' },
        WARNING: { 900: '#a36300', 500: '#f09100', 200: '#ffefd6' },
        ERROR: { 900: '#ac001a', 500: '#ff2d4d', 200: '#ffe5e9' },
        PINK: { 900: '#ab0045', 500: '#de0059' },
        BLACK: {
          900: '#191919',
          700: '#4c4c4c',
          400: '#999999',
          200: '#cccccc',
          100: '#f2f2f2',
        },
        WHITE: '#FFFFFF',
        SHADOW: { 40: 'rgba(204, 204, 204, 0.4)' },
      };
    },
    106: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return query;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return hideQueries;
        });
      __webpack_require__(192),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(358);
      var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          4,
        ),
        _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(54),
        query = Object.keys(_shared__WEBPACK_IMPORTED_MODULE_6__.a).reduce(
          function(acc, label) {
            return (
              (acc[label] = function() {
                return Object(
                  styled_components__WEBPACK_IMPORTED_MODULE_5__.css,
                )(
                  ['@media (min-width:', 'px){', ';}'],
                  _shared__WEBPACK_IMPORTED_MODULE_6__.a[label].width,
                  styled_components__WEBPACK_IMPORTED_MODULE_5__.css.apply(
                    void 0,
                    arguments,
                  ),
                );
              }),
              acc
            );
          },
          {},
        ),
        hideQueries = {
          xlarge: function() {
            return '\n    @media (min-width: '.concat(
              _shared__WEBPACK_IMPORTED_MODULE_6__.a.xlarge.width + 1,
              'px) {\n      display: none !important;\n    }\n  ',
            );
          },
          large: function() {
            return '\n    @media (min-width: '
              .concat(
                _shared__WEBPACK_IMPORTED_MODULE_6__.a.large.width + 1,
                'px) and (max-width: ',
              )
              .concat(
                _shared__WEBPACK_IMPORTED_MODULE_6__.a.xlarge.width,
                'px) {\n      display: none !important;\n    }\n  ',
              );
          },
          medium: function() {
            return '\n    @media (min-width: '
              .concat(
                _shared__WEBPACK_IMPORTED_MODULE_6__.a.medium.width + 1,
                'px) and (max-width: ',
              )
              .concat(
                _shared__WEBPACK_IMPORTED_MODULE_6__.a.large.width,
                'px) {\n      display: none !important;\n    }\n  ',
              );
          },
          small: function() {
            return '\n    @media (min-width: '
              .concat(
                _shared__WEBPACK_IMPORTED_MODULE_6__.a.small.width + 1,
                'px) and (max-width: ',
              )
              .concat(
                _shared__WEBPACK_IMPORTED_MODULE_6__.a.medium.width,
                'px) {\n      display: none !important;\n    }\n  ',
              );
          },
          xsmall: function() {
            return '\n    @media (max-width: '.concat(
              _shared__WEBPACK_IMPORTED_MODULE_6__.a.small.width,
              'px) {\n      display: none !important;\n    }\n  ',
            );
          },
        };
    },
    12: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(135),
        __webpack_require__(136),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(47),
        __webpack_require__(192);
      var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_8__,
        ),
        _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(106),
        _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(54);
      function _templateObject() {
        var strings,
          raw,
          data = ((strings = ['grid-column: ', ' span ', ';']),
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            }),
          ));
        return (
          (_templateObject = function() {
            return data;
          }),
          data
        );
      }
      var Col = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig(
        { displayName: 'Col', componentId: 'o5r7t1-0' },
      )(['', ' word-break:break-word;box-sizing:border-box;'], function(props) {
        return Object.keys(_shared__WEBPACK_IMPORTED_MODULE_10__.a).map(
          function(breakpoint) {
            return (function(_ref, breakpoint) {
              var xsmall = _ref.xsmall,
                _ref$small = _ref.small,
                small = void 0 === _ref$small ? xsmall : _ref$small,
                _ref$medium = _ref.medium,
                medium = void 0 === _ref$medium ? small : _ref$medium,
                _ref$large = _ref.large,
                large = void 0 === _ref$large ? medium : _ref$large,
                _ref$xlarge = _ref.xlarge,
                xlarge = void 0 === _ref$xlarge ? large : _ref$xlarge,
                xsmallOffset = _ref['xsmall-offset'],
                _ref$smallOffset = _ref['small-offset'],
                smallOffset =
                  void 0 === _ref$smallOffset ? xsmallOffset : _ref$smallOffset,
                _ref$mediumOffset = _ref['medium-offset'],
                mediumOffset =
                  void 0 === _ref$mediumOffset
                    ? smallOffset
                    : _ref$mediumOffset,
                _ref$largeOffset = _ref['large-offset'],
                largeOffset =
                  void 0 === _ref$largeOffset ? mediumOffset : _ref$largeOffset,
                _ref$xlargeOffset = _ref['xlarge-offset'],
                xlargeOffset =
                  void 0 === _ref$xlargeOffset
                    ? largeOffset
                    : _ref$xlargeOffset,
                q = _shared__WEBPACK_IMPORTED_MODULE_9__.b[breakpoint],
                _xsmall$small$medium$ = {
                  xsmall: { size: xsmall, offset: xsmallOffset },
                  small: { size: small, offset: smallOffset },
                  medium: { size: medium, offset: mediumOffset },
                  large: { size: large, offset: largeOffset },
                  xlarge: { size: xlarge, offset: xlargeOffset },
                }[breakpoint],
                size = _xsmall$small$medium$.size,
                offset = _xsmall$small$medium$.offset,
                offsetStyle = offset ? ''.concat(offset + 1, '/') : '';
              return q(_templateObject(), offsetStyle, size || 12);
            })(props, breakpoint);
          },
        );
      });
      (Col.propTypes = {
        xsmall: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        small: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        medium: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        large: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        xlarge: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        'xsmall-offset':
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        'small-offset':
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        'medium-offset':
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        'large-offset':
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        'xlarge-offset':
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
        hide: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(
            Object.keys(_shared__WEBPACK_IMPORTED_MODULE_10__.a),
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
          ),
        ]),
      }),
        (Col.displayName = 'Col'),
        (__webpack_exports__.a = Col);
    },
    129: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(498),
        __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_11__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_12__,
        ),
        react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_13__,
        ),
        react_text_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          323,
        ),
        react_text_mask__WEBPACK_IMPORTED_MODULE_14___default = __webpack_require__.n(
          react_text_mask__WEBPACK_IMPORTED_MODULE_14__,
        ),
        _shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(768),
        _shared__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(769),
        _shared__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1899),
        _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          8,
        ),
        _Icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(36),
        _shared_theme__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25),
        _InputTypes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(130);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      var sharedStyle = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_12__.css,
        )(['font-size:12px;transform:translateY(-22px);']),
        InputLabel = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(
          _shared__WEBPACK_IMPORTED_MODULE_15__.a,
        ).withConfig({
          displayName: 'Input__InputLabel',
          componentId: 'sc-16zet9e-0',
        })(
          [
            'cursor:text;font-size:16px;left:0;position:absolute;top:6px;',
            ';',
            ' ',
            ';',
          ],
          _shared_theme__WEBPACK_IMPORTED_MODULE_20__.a.mixins.transition(),
          function(props) {
            return props.withValue && ''.concat(sharedStyle);
          },
          function(props) {
            return (
              props.error &&
              'color: '.concat(
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__.a.DANGER[500],
                ';',
              )
            );
          },
        ),
        InputTag = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.input.withConfig(
          { displayName: 'Input__InputTag', componentId: 'sc-16zet9e-1' },
        )(
          [
            '',
            ';background-color:transparent;border:none;border-bottom:2px solid ',
            ';box-sizing:border-box;color:',
            ';font-size:16px;height:30px;padding:0px 3px;outline:none;width:100%;',
            ' &::-webkit-calendar-picker-indicator{display:none;}&:focus{border-color:',
            ';}',
            ' &:focus + ',
            '{color:',
            ';',
            '}',
          ],
          _shared_theme__WEBPACK_IMPORTED_MODULE_20__.a.mixins.transition(),
          _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__.a.SECONDARY[300],
          _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__.a.SECONDARY[900],
          function(props) {
            return props.password && '\n    padding-right: 28px;\n  ';
          },
          _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__.a.PRIMARY[500],
          function(props) {
            return (
              props.error &&
              '\n    border-color: '.concat(
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__.a.DANGER[500],
                ';\n  ',
              )
            );
          },
          InputLabel,
          _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__.a.PRIMARY[500],
          sharedStyle,
        ),
        InputIcon = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(
          _Icon__WEBPACK_IMPORTED_MODULE_19__.a,
        ).withConfig({
          displayName: 'Input__InputIcon',
          componentId: 'sc-16zet9e-2',
        })(['position:absolute;right:2px;cursor:pointer;']),
        InputFieldGroup = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(
          _shared__WEBPACK_IMPORTED_MODULE_16__.a,
        ).withConfig({
          displayName: 'Input__InputFieldGroup',
          componentId: 'sc-16zet9e-3',
        })(['margin:40px 0 20px;&:first-child{margin-top:20px;}']),
        Input = (function(_React$Component) {
          function Input(props) {
            var _this, self, call;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Input),
              (self = this),
              (_this =
                !(call = _getPrototypeOf(Input).call(this, props)) ||
                ('object' !== _typeof(call) && 'function' != typeof call)
                  ? _assertThisInitialized(self)
                  : call),
              _initialiseProps.call(
                _assertThisInitialized(_assertThisInitialized(_this)),
              );
            var value = props.value,
              type = props.type;
            return (_this.state = { value: value, type: type }), _this;
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Input, react__WEBPACK_IMPORTED_MODULE_13___default.a.Component),
            (Constructor = Input),
            (protoProps = [
              {
                key: 'componentWillUpdate',
                value: function(nextProps) {
                  var _this$state = this.state,
                    value = _this$state.value,
                    type = _this$state.type;
                  (nextProps.value !== value || nextProps.type !== type) &&
                    ((this.state.value = nextProps.value),
                    (this.state.type = nextProps.type));
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    id = _this$props.id,
                    label = _this$props.label,
                    error = _this$props.error,
                    mask = _this$props.mask,
                    inputType = _this$props.type,
                    rest = _objectWithoutProperties(_this$props, [
                      'id',
                      'label',
                      'error',
                      'mask',
                      'type',
                    ]),
                    _this$state2 = this.state,
                    value = _this$state2.value,
                    type = _this$state2.type;
                  return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                    InputFieldGroup,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                      react_text_mask__WEBPACK_IMPORTED_MODULE_14___default.a,
                      _extends({}, rest, {
                        id: id,
                        type: type,
                        mask: mask,
                        value: value,
                        onChange: this._onChange,
                        render: function(ref, props) {
                          return react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                            InputTag,
                            _extends({ ref: ref }, props),
                          );
                        },
                      }),
                    ),
                    label &&
                      react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                        InputLabel,
                        { htmlFor: id, error: error, withValue: !!value },
                        label,
                      ),
                    'password' === inputType &&
                      react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                        InputIcon,
                        {
                          name:
                            'password' === type
                              ? 'visibility'
                              : 'visibility_off',
                          onClick: this._showPassword,
                        },
                      ),
                    error &&
                      react__WEBPACK_IMPORTED_MODULE_13___default.a.createElement(
                        _shared__WEBPACK_IMPORTED_MODULE_17__.a,
                        null,
                        error,
                      ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Input
          );
          var Constructor, protoProps, staticProps;
        })();
      (Input.CEP = _InputTypes__WEBPACK_IMPORTED_MODULE_21__.a.CEP),
        (Input.CNPJ = _InputTypes__WEBPACK_IMPORTED_MODULE_21__.a.CNPJ),
        (Input.CPF = _InputTypes__WEBPACK_IMPORTED_MODULE_21__.a.CPF),
        (Input.Date = _InputTypes__WEBPACK_IMPORTED_MODULE_21__.a.Date),
        (Input.Phone = _InputTypes__WEBPACK_IMPORTED_MODULE_21__.a.Phone),
        (Input.Password = _InputTypes__WEBPACK_IMPORTED_MODULE_21__.a.Password);
      var _initialiseProps = function() {
        var _this2 = this;
        (this._onChange = function(e) {
          var onChange = _this2.props.onChange,
            value = e.target.value;
          _this2.setState({ value: value }), onChange(e, { value: value });
        }),
          (this._changeType = function(type) {
            _this2.setState({ type: type });
          }),
          (this._showPassword = function() {
            'text' === _this2.state.type
              ? _this2._changeType('password')
              : _this2._changeType('text');
          });
      };
      (Input.defaultProps = {
        error: '',
        id: '',
        label: '',
        mask: !1,
        maxLength: '',
        type: 'text',
        value: '',
        onBlur: function() {},
        onChange: function() {},
        onFocus: function() {},
      }),
        (Input.propTypes = {
          value: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          label: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          type: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOf([
            'email',
            'text',
            'tel',
            'number',
            'password',
          ]),
          error: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          maxLength: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          id: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          mask: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.array,
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.instanceOf(
              RegExp,
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          ]),
          onBlur: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
          onChange: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
          onFocus: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.func,
        }),
        (Input.displayName = 'Input'),
        (__webpack_exports__.a = Input),
        (Input.__docgenInfo = {
          description: 'A text field component to get user text data',
          methods: [
            {
              name: '_onChange',
              docblock: null,
              modifiers: [],
              params: [{ name: 'e', type: null }],
              returns: null,
            },
            {
              name: '_changeType',
              docblock: null,
              modifiers: [],
              params: [{ name: 'type', type: null }],
              returns: null,
            },
            {
              name: '_showPassword',
              docblock: null,
              modifiers: [],
              params: [],
              returns: null,
            },
          ],
          displayName: 'Input',
          props: {
            error: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description:
                'Display an error message and changes border color to error color',
            },
            id: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'A html identification',
            },
            label: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'Display a label text that describe the field',
            },
            mask: {
              defaultValue: { value: 'false', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'array' },
                  { name: 'bool' },
                  { name: 'instanceOf', value: 'RegExp' },
                  { name: 'func' },
                  { name: 'string' },
                ],
              },
              required: !1,
              description:
                'Mask must follow this [rules](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask)',
            },
            maxLength: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: 'Set a text mask that filter user input',
            },
            type: {
              defaultValue: { value: "'text'", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "'email'", computed: !1 },
                  { value: "'text'", computed: !1 },
                  { value: "'tel'", computed: !1 },
                  { value: "'number'", computed: !1 },
                  { value: "'password'", computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            value: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            onBlur: {
              defaultValue: { value: '() => {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
            onChange: {
              defaultValue: { value: '() => {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
            onFocus: {
              defaultValue: { value: '() => {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Input\\Input.jsx'] = {
            name: 'Input',
            docgenInfo: Input.__docgenInfo,
            path: 'components\\Input\\Input.jsx',
          });
    },
    130: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(129),
        _shared_masks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      var InputTypes = {
        CEP: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Input__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_3__.a.cep },
              props,
            ),
          );
        },
        CNPJ: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Input__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_3__.a.cnpj },
              props,
            ),
          );
        },
        CPF: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Input__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_3__.a.cpf },
              props,
            ),
          );
        },
        Date: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Input__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_3__.a.date },
              props,
            ),
          );
        },
        Phone: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Input__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_3__.a.phone },
              props,
            ),
          );
        },
        Password: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Input__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends({ type: 'password' }, props),
          );
        },
      };
      (InputTypes.CEP.displayName = 'Input.CEP'),
        (InputTypes.CNPJ.displayName = 'Input.CNPJ'),
        (InputTypes.CPF.displayName = 'Input.CPF'),
        (InputTypes.Date.displayName = 'Input.Date'),
        (InputTypes.Phone.displayName = 'Input.Phone'),
        (InputTypes.Password.displayName = 'Input.Password'),
        (__webpack_exports__.a = InputTypes);
    },
    131: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(146),
        _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          324,
        ),
        _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _shared_static_logoB2b_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          752,
        ),
        _shared_static_logoB2b_svg__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
          _shared_static_logoB2b_svg__WEBPACK_IMPORTED_MODULE_4__,
        ),
        _shared_static_logoEducacao_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          753,
        ),
        _shared_static_logoEducacao_svg__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          _shared_static_logoEducacao_svg__WEBPACK_IMPORTED_MODULE_5__,
        ),
        _shared_static_logoGoogle_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          755,
        ),
        _shared_static_logoGoogle_svg__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          _shared_static_logoGoogle_svg__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _shared_static_logoFacebook_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          754,
        ),
        _shared_static_logoFacebook_svg__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          _shared_static_logoFacebook_svg__WEBPACK_IMPORTED_MODULE_7__,
        );
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      var LogoTypes = {
        Business: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Logo__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              {
                src:
                  _shared_static_logoB2b_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
                alt: 'Logo da Catho Empresas',
              },
              props,
            ),
          );
        },
        Candidate: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Logo__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              {
                src:
                  _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
                alt: 'Logo da Catho',
              },
              props,
            ),
          );
        },
        Education: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Logo__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              {
                src:
                  _shared_static_logoEducacao_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
                alt: 'Logo da Catho Educação',
              },
              props,
            ),
          );
        },
        Facebook: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Logo__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              {
                src:
                  _shared_static_logoFacebook_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
                alt: 'Logo do Facebook',
              },
              props,
            ),
          );
        },
        Google: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _Logo__WEBPACK_IMPORTED_MODULE_2__.a,
            _extends(
              {
                src:
                  _shared_static_logoGoogle_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
                alt: 'Logo do Google',
              },
              props,
            ),
          );
        },
      };
      (LogoTypes.Business.displayName = 'Logo.Business'),
        (LogoTypes.Candidate.displayName = 'Logo.Candidate'),
        (LogoTypes.Education.displayName = 'Logo.Education'),
        (LogoTypes.Facebook.displayName = 'Logo.Facebook'),
        (LogoTypes.Google.displayName = 'Logo.Google'),
        (__webpack_exports__.a = LogoTypes);
    },
    146: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_10__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_11__,
        ),
        _Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(61),
        _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          324,
        ),
        _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_13__,
        ),
        _LogoTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(131);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Logo = (function(_Component) {
        function Logo() {
          return (
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Logo),
            _possibleConstructorReturn(
              this,
              _getPrototypeOf(Logo).apply(this, arguments),
            )
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Logo, react__WEBPACK_IMPORTED_MODULE_10__['Component']),
          (Constructor = Logo),
          (protoProps = [
            {
              key: 'render',
              value: function() {
                var _this$props = this.props,
                  src = _this$props.src,
                  props = _objectWithoutProperties(_this$props, ['src']);
                return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  _Image__WEBPACK_IMPORTED_MODULE_12__.a,
                  _extends({ src: src }, props),
                );
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Logo
        );
        var Constructor, protoProps, staticProps;
      })();
      (Logo.Business = _LogoTypes__WEBPACK_IMPORTED_MODULE_14__.a.Business),
        (Logo.Candidate = _LogoTypes__WEBPACK_IMPORTED_MODULE_14__.a.Candidate),
        (Logo.Education = _LogoTypes__WEBPACK_IMPORTED_MODULE_14__.a.Education),
        (Logo.Google = _LogoTypes__WEBPACK_IMPORTED_MODULE_14__.a.Google),
        (Logo.Facebook = _LogoTypes__WEBPACK_IMPORTED_MODULE_14__.a.Facebook),
        (Logo.defaultProps = {
          src:
            _shared_static_logoB2c_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
          alt: 'Logo da Catho',
          width: 100,
          height: 50,
        }),
        (Logo.propTypes = {
          src: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          alt: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          width: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
          height: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
        }),
        (__webpack_exports__.a = Logo),
        (Logo.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Logo',
          props: {
            src: {
              defaultValue: { value: 'LogoCandidate', computed: !0 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            alt: {
              defaultValue: { value: "'Logo da Catho'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            width: {
              defaultValue: { value: '100', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
            height: {
              defaultValue: { value: '50', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Logo\\Logo.jsx'] = {
            name: 'Logo',
            docgenInfo: Logo.__docgenInfo,
            path: 'components\\Logo\\Logo.jsx',
          });
    },
    147: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        react_text_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(323),
        _TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(148);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var TextMask = (function(_React$Component) {
        function TextMask() {
          return (
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, TextMask),
            _possibleConstructorReturn(
              this,
              _getPrototypeOf(TextMask).apply(this, arguments),
            )
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(TextMask, react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),
          (Constructor = TextMask),
          (protoProps = [
            {
              key: 'render',
              value: function() {
                var _this$props = this.props,
                  children = _this$props.children,
                  text = _this$props.text,
                  mask = _this$props.mask,
                  input = text || children;
                return mask
                  ? Object(
                      react_text_mask__WEBPACK_IMPORTED_MODULE_7__.conformToMask,
                    )(input, mask).conformedValue
                  : input;
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          TextMask
        );
        var Constructor, protoProps, staticProps;
      })();
      (TextMask.CEP = _TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__.a.CEP),
        (TextMask.CNPJ = _TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__.a.CNPJ),
        (TextMask.CPF = _TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__.a.CPF),
        (TextMask.Date = _TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__.a.Date),
        (TextMask.Phone = _TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__.a.Phone),
        (TextMask.defaultProps = { text: '', children: '', mask: !1 }),
        (TextMask.propTypes = {
          text: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          mask: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
              mask: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
                [
                  prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
                  prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
                ],
              ),
              pipe: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
            }),
          ]),
        }),
        (__webpack_exports__.a = TextMask),
        (TextMask.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'TextMask',
          props: {
            text: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description:
                'Value to be masked. If ommited, it will be the children prop.',
            },
            children: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            mask: {
              defaultValue: { value: 'false', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'array' },
                  { name: 'func' },
                  { name: 'bool' },
                  {
                    name: 'shape',
                    value: {
                      mask: {
                        name: 'union',
                        value: [{ name: 'array' }, { name: 'func' }],
                        required: !1,
                      },
                      pipe: { name: 'func', required: !1 },
                    },
                  },
                ],
              },
              required: !1,
              description:
                'Mask must follow this [rules](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask)',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\TextMask\\TextMask.jsx'] = {
            name: 'TextMask',
            docgenInfo: TextMask.__docgenInfo,
            path: 'components\\TextMask\\TextMask.jsx',
          });
    },
    148: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(47),
        __webpack_require__(59);
      var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__,
        ),
        _TextMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(147),
        _shared_masks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      var TextMaskTypes = {
        CEP: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _TextMask__WEBPACK_IMPORTED_MODULE_7__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_8__.a.cep },
              props,
            ),
          );
        },
        CNPJ: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _TextMask__WEBPACK_IMPORTED_MODULE_7__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_8__.a.cnpj },
              props,
            ),
          );
        },
        CPF: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _TextMask__WEBPACK_IMPORTED_MODULE_7__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_8__.a.cpf },
              props,
            ),
          );
        },
        Date: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _TextMask__WEBPACK_IMPORTED_MODULE_7__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_8__.a.date },
              props,
            ),
          );
        },
        Phone: function(props) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
            _TextMask__WEBPACK_IMPORTED_MODULE_7__.a,
            _extends(
              { mask: _shared_masks__WEBPACK_IMPORTED_MODULE_8__.a.phone },
              props,
            ),
          );
        },
      };
      Object.keys(TextMaskTypes).map(function(name) {
        TextMaskTypes[name].displayName = 'TextMask.'.concat(name);
      }),
        (__webpack_exports__.a = TextMaskTypes);
    },
    149: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        deprecated = __webpack_require__(8),
        Button = __webpack_require__(35),
        theme = __webpack_require__(25),
        Header = styled_components_browser_cjs_default.a.h2.withConfig({
          displayName: 'Header',
          componentId: 'sc-13ddtbk-0',
        })(
          [
            'border-bottom:2px solid ',
            ';font-size:20px;font-weight:bold;margin:0;padding:18px 24px;',
          ],
          deprecated.a.SECONDARY[50],
        );
      Header.displayName = 'Modal.Header';
      var sub_components_Header = Header,
        Content = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Content',
          componentId: 'sc-9f5o6t-0',
        })(['font-size:14px;padding:18px 24px;']);
      Content.displayName = 'Modal.Content';
      var sub_components_Content = Content,
        Footer = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Footer',
          componentId: 'sc-8oh0mo-0',
        })(
          [
            'background-color:#f4f4f4;border-top:2px solid ',
            ';display:flex;font-size:14px;padding:10px;justify-content:',
            ';',
          ],
          deprecated.a.SECONDARY[50],
          function(_ref) {
            var children = _ref.children;
            return 1 < react_default.a.Children.toArray(children).length
              ? 'space-between'
              : 'flex-end';
          },
        );
      Footer.displayName = 'Modal.Footer';
      var sub_components_Footer = Footer;
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Overlay = styled_components_browser_cjs_default.a.div.withConfig({
        displayName: 'Modal__Overlay',
        componentId: 'sc-300qpr-0',
      })(
        [
          'align-items:center;background-color:',
          ';bottom:0;display:flex;justify-content:center;left:0;right:0;position:fixed;top:0;z-index:100;',
        ],
        theme.a.mixins.hexToRgba(deprecated.a.BLACK, 0.5),
      );
      Overlay.displayName = 'Overlay';
      var Wrapper = styled_components_browser_cjs_default.a.section.withConfig({
          displayName: 'Modal__Wrapper',
          componentId: 'sc-300qpr-1',
        })(
          [
            'background-color:',
            ';border-radius:8px;box-shadow:0 3px 3px 0 ',
            ',0 8px 14px 3px ',
            ',0 8px 10px 1px ',
            ';color:',
            ';overflow:hidden;',
          ],
          deprecated.a.WHITE,
          theme.a.mixins.hexToRgba(deprecated.a.BLACK, 0.2),
          theme.a.mixins.hexToRgba(deprecated.a.BLACK, 0.12),
          theme.a.mixins.hexToRgba(deprecated.a.BLACK, 0.14),
          deprecated.a.SECONDARY[800],
        ),
        ModalContext = react_default.a.createContext(),
        Modal_Modal = (function(_Component) {
          function Modal(props) {
            var _this;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Modal),
              ((_this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(Modal).call(this, props),
              )).closeModal = function() {
                _this.setState({ opened: !1 });
              }),
              (_this.openModal = function() {
                _this.setState({ opened: !0 });
              }),
              (_this.handleOverlayClick = function(_ref) {
                var target = _ref.target;
                return _this.overlayRef === target && _this.closeModal();
              }),
              (_this.handleTriggerClick = function(e) {
                var onClick = _this.props.trigger.props.onClick;
                _this.openModal(), onClick(e);
              });
            var opened = _this.props.opened;
            return (_this.state = { opened: opened }), _this;
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Modal, react['Component']),
            (Constructor = Modal),
            (protoProps = [
              {
                key: 'shouldComponentUpdate',
                value: function(props, state) {
                  return (
                    props.opened !== state.opened &&
                      (this.state.opened = props.opened),
                    !0
                  );
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this2 = this,
                    _this$props = this.props,
                    children = _this$props.children,
                    trigger = _this$props.trigger,
                    closeOnOverlayClick = _this$props.closeOnOverlayClick,
                    opened = this.state.opened;
                  return react_default.a.createElement(
                    ModalContext.Provider,
                    { value: { closeModal: this.closeModal } },
                    Object(react.cloneElement)(trigger, {
                      onClick: this.handleTriggerClick,
                    }),
                    opened &&
                      react_default.a.createElement(
                        Overlay,
                        {
                          ref: function(_ref2) {
                            _this2.overlayRef = _ref2;
                          },
                          onClick: closeOnOverlayClick
                            ? this.handleOverlayClick
                            : void 0,
                        },
                        react_default.a.createElement(Wrapper, null, children),
                      ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Modal
          );
          var Constructor, protoProps, staticProps;
        })();
      (Modal_Modal.Header = sub_components_Header),
        (Modal_Modal.Content = sub_components_Content),
        (Modal_Modal.Footer = sub_components_Footer),
        (Modal_Modal.Action = function(_ref3) {
          var children = _ref3.children,
            _onClick = _ref3.onClick,
            skin = _ref3.skin;
          return react_default.a.createElement(
            ModalContext.Consumer,
            null,
            function(_ref4) {
              var closeModal = _ref4.closeModal;
              return react_default.a.createElement(
                Button.a,
                {
                  skin: skin || 'modal',
                  onClick: function() {
                    closeModal(), _onClick();
                  },
                },
                children,
              );
            },
          );
        }),
        (Modal_Modal.defaultProps = {
          opened: !1,
          trigger: '',
          closeOnOverlayClick: !1,
        }),
        (Modal_Modal.propTypes = {
          children: prop_types_default.a.node.isRequired,
          trigger: prop_types_default.a.node,
          opened: prop_types_default.a.bool,
          closeOnOverlayClick: prop_types_default.a.bool,
        });
      var components_Modal_Modal = Modal_Modal;
      (Modal_Modal.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'Action',
            docblock: null,
            modifiers: ['static'],
            params: [{ name: '{ children, onClick, skin }', type: null }],
            returns: null,
          },
          {
            name: 'closeModal',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'openModal',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handleOverlayClick',
            docblock: null,
            modifiers: [],
            params: [{ name: '{ target }', type: null }],
            returns: null,
          },
          {
            name: 'handleTriggerClick',
            docblock: null,
            modifiers: [],
            params: [{ name: 'e', type: null }],
            returns: null,
          },
        ],
        displayName: 'Modal',
        props: {
          opened: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          trigger: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'node' },
            required: !1,
            description: 'An element to fire the open event',
          },
          closeOnOverlayClick: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          children: { type: { name: 'node' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Modal\\Modal.jsx'] = {
            name: 'Modal',
            docgenInfo: Modal_Modal.__docgenInfo,
            path: 'components\\Modal\\Modal.jsx',
          });
      __webpack_exports__.a = components_Modal_Modal;
    },
    1705: function(module, exports, __webpack_require__) {
      var map = {
        './Alert/Alert.story.jsx': 1706,
        './AutoComplete/AutoComplete.story.jsx': 1771,
        './Badge/Badge.story.jsx': 1773,
        './Button/Button.story.jsx': 1774,
        './Card/Card.story.jsx': 1781,
        './Checkbox/Checkbox.story.jsx': 1782,
        './Colors/Colors.story.jsx': 1783,
        './Dropdown/Dropdown.story.jsx': 1784,
        './Form/Form.story.jsx': 1787,
        './Grid/Grid.story.jsx': 1788,
        './Icon/Icon.story.jsx': 1789,
        './Image/Image.story.jsx': 1790,
        './Input/Input.story.jsx': 1791,
        './Introduction/Introduction.story.jsx': 1792,
        './List/List.story.jsx': 1793,
        './Loader/Loader.story.jsx': 1794,
        './Loading/Loading.story.jsx': 1795,
        './Logo/Logo.story.jsx': 1796,
        './Modal/Modal.story.jsx': 1797,
        './Popover/Popover.story.jsx': 1798,
        './Radio/Radio.story.jsx': 1799,
        './Range/Range.story.jsx': 1800,
        './Slider/Slider.story.jsx': 1801,
        './Tag/Tag.story.jsx': 1892,
        './TextMask/TextMask.story.jsx': 1893,
        './Textarea/Textarea.story.jsx': 1894,
        './Toggle/Toggle.story.jsx': 1895,
        './Tooltip/Tooltip.story.jsx': 1896,
        './Typography/Typography.story.jsx': 1897,
        './Wizard/Wizard.story.jsx': 1898,
      };
      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }
      function webpackContextResolve(req) {
        var id = map[req];
        if (!(id + 1)) {
          var e = new Error("Cannot find module '" + req + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        }
        return id;
      }
      (webpackContext.keys = function() {
        return Object.keys(map);
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 1705);
    },
    1706: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              181,
            ),
            exampleTab = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
              { title: 'Example' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                null,
                'You can specify a duration in seconds of the alert element.',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'With 5 seconds of duration',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,
                    {
                      show: !0,
                      type: 'error',
                      duration: 5,
                      message: { title: 'Simple', text: 'This is error alert' },
                    },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'p',
                null,
                'We have 4 type of alerts:',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'ul',
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'li',
                  null,
                  'Info',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'li',
                  null,
                  'Success',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'li',
                  null,
                  'Warning',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'li',
                  null,
                  'Danger',
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'Info',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,
                    {
                      show: !0,
                      type: 'info',
                      message: { title: 'Info', text: 'This is info alert' },
                    },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'Success',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,
                    {
                      show: !0,
                      type: 'success',
                      message: {
                        title: 'Success',
                        text: 'This is success alert',
                      },
                    },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'Warning',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,
                    {
                      show: !0,
                      type: 'warning',
                      message: {
                        title: 'Warning',
                        text: 'This is warning alert',
                      },
                    },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'Error',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,
                    {
                      show: !0,
                      type: 'error',
                      message: { title: 'Error', text: 'This is error alert' },
                    },
                  ),
                },
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '4. Alerts',
            module,
          ).add('Basic', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Alert__WEBPACK_IMPORTED_MODULE_3__.a,
                additionalTabs: exampleTab,
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    177: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4),
        Title = __webpack_require__
          .n(styled_components__WEBPACK_IMPORTED_MODULE_2__)
          .a.span.withConfig({
            displayName: 'Header__Title',
            componentId: 'e8ruju-0',
          })(['margin-top:4px;margin-bottom:4px;']);
      Title.displayName = 'Header';
      var Header = function(_ref) {
        var children = _ref.children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Title,
          null,
          children,
        );
      };
      (Header.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
        ]).isRequired,
      }),
        (Header.displayName = 'List.Header'),
        (__webpack_exports__.a = Header),
        (Header.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'List.Header',
          props: {
            children: {
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'node' } },
                  { name: 'node' },
                ],
              },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\List\\sub-components\\Header.jsx'
          ] = {
            name: 'Header',
            docgenInfo: Header.__docgenInfo,
            path: 'components\\List\\sub-components\\Header.jsx',
          });
    },
    1771: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_AutoComplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              762,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Auto Complete', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component:
                  _components_AutoComplete__WEBPACK_IMPORTED_MODULE_3__.a,
                componentProps: {
                  dataSource: ['Brazil', 'Germany', 'Mexico', 'Usa'],
                  label: 'Example',
                },
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1773: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              241,
            ),
            _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              35,
            ),
            _components_Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              10,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              242,
            ),
            TabExample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
              { title: 'Examples' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                { fluid: !0 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                  null,
                  'Default',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'span',
                        null,
                        'Here is a badge',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Badge__WEBPACK_IMPORTED_MODULE_3__.a,
                        { number: 10 },
                      ),
                    ),
                    code:
                      '<div>\n  <span>Here is a badge</span>\n  <Badge number={10} />\n</div>',
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                  null,
                  'With children',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Badge__WEBPACK_IMPORTED_MODULE_3__.a,
                      { number: 10, skin: 'blue' },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Button__WEBPACK_IMPORTED_MODULE_4__.a,
                        { skin: 'action', size: 'large' },
                      ),
                    ),
                    code:
                      '<Badge number={10} skin="blue">\n  <Button skin="action" size="large"/>\n</Badge>',
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                  null,
                  'In a colour background',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'div',
                      {
                        style: {
                          backgroundColor:
                            _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a
                              .BLUE[500],
                          display: 'inline-block',
                          padding: 10,
                          color:
                            _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a
                              .WHITE,
                        },
                      },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Badge__WEBPACK_IMPORTED_MODULE_3__.a,
                        { number: 10, skin: 'white' },
                      ),
                      'This is a badge',
                    ),
                    code:
                      '<div style={{\n  backgroundColor: Colors.BLUE[500],\n  display: \'inline-block\',\n  padding: 10,\n  color: Colors.WHITE\n}}>\n  <Badge number={10} skin="white" />This is a badge\n</div>',
                  },
                ),
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '15. Badge',
            module,
          ).add('Badge', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Badge__WEBPACK_IMPORTED_MODULE_3__.a,
                componentProps: { number: 10 },
                additionalTabs: TabExample,
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1774: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              4,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_1__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11,
            ),
            _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              95,
            ),
            _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              3,
            ),
            _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              35,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              242,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              12,
            ),
            ExampleTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Title,
            ).withConfig({
              displayName: 'Buttonstory__ExampleTitle',
              componentId: 'dibxl-0',
            })(['margin-top:60px;']),
            exampleTab = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Tab,
              { title: 'Example' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                { fluid: !0 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ExampleTitle,
                  null,
                  'Full width button',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                      { full: !0 },
                      'Full Width',
                    ),
                    code: '<Button full>Full Width</Button>',
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ExampleTitle,
                  null,
                  'Centered button',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                      { icon: 'face', center: !0, skin: 'action' },
                      'Centered',
                    ),
                    code: '<Button center skin="action">Centered</Button>',
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ExampleTitle,
                  null,
                  'Link',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                      { skin: 'link' },
                      'click here',
                    ),
                    code: '<Button skin="link">click here</Button>',
                  },
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                { fluid: !0 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  ExampleTitle,
                  null,
                  'Button with icons',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'p',
                  null,
                  'The full catalogue of icons can be found',
                  ' ',
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3___default.a,
                    { kind: '1. Foundation', story: 'Icons' },
                    'here',
                  ),
                  '.',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                    { tablet: 3 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                          { icon: 'search' },
                          'Search',
                        ),
                      },
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                    { tablet: 3 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                          { skin: 'secondary', icon: 'sync' },
                          'Sync',
                        ),
                      },
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                    { tablet: 3 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                          { skin: 'action', icon: 'camera' },
                          'Screenshot',
                        ),
                      },
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                    { tablet: 3 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                          { size: 'large', icon: 'card_giftcard' },
                          'Gift',
                        ),
                      },
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                    { tablet: 3 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                          {
                            size: 'large',
                            skin: 'secondary',
                            icon: 'block',
                            disabled: !0,
                          },
                          'Not allowed',
                        ),
                      },
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                    { tablet: 3 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                          { size: 'large', skin: 'action', icon: 'play_arrow' },
                          'Play',
                        ),
                      },
                    ),
                  ),
                ),
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)(
            '2. Buttons',
            module,
          ).add('Button', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.AutoExample,
              {
                component: _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                additionalTabs: exampleTab,
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    178: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_10__,
        ),
        react_content_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
          751,
        ),
        react_content_loader__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          react_content_loader__WEBPACK_IMPORTED_MODULE_11__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_12__,
        ),
        _LoaderTypes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(179);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Loader = (function(_React$Component) {
        function Loader() {
          return (
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Loader),
            _possibleConstructorReturn(
              this,
              _getPrototypeOf(Loader).apply(this, arguments),
            )
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Loader, react__WEBPACK_IMPORTED_MODULE_10___default.a.Component),
          (Constructor = Loader),
          (protoProps = [
            {
              key: 'render',
              value: function() {
                var _this$props = this.props,
                  children = _this$props.children,
                  primaryColor = _this$props.primaryColor,
                  secondaryColor = _this$props.secondaryColor,
                  width = _this$props.width,
                  height = _this$props.height,
                  speed = _this$props.speed,
                  rest = _objectWithoutProperties(_this$props, [
                    'children',
                    'primaryColor',
                    'secondaryColor',
                    'width',
                    'height',
                    'speed',
                  ]);
                return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  react_content_loader__WEBPACK_IMPORTED_MODULE_11___default.a,
                  _extends(
                    {
                      primaryColor: primaryColor,
                      secondaryColor: secondaryColor,
                      width: width,
                      height: height,
                      speed: speed,
                    },
                    rest,
                  ),
                  children,
                );
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Loader
        );
        var Constructor, protoProps, staticProps;
      })();
      (Loader.Image = _LoaderTypes__WEBPACK_IMPORTED_MODULE_13__.a.Image),
        (Loader.Text = _LoaderTypes__WEBPACK_IMPORTED_MODULE_13__.a.Text),
        (Loader.List = _LoaderTypes__WEBPACK_IMPORTED_MODULE_13__.a.List),
        (Loader.IconList =
          _LoaderTypes__WEBPACK_IMPORTED_MODULE_13__.a.IconList),
        (Loader.defaultProps = {
          primaryColor: '#ECEFF1',
          secondaryColor: '#CFD8DC',
          children: null,
          width: 400,
          height: 130,
          speed: 2,
        }),
        (Loader.propTypes = {
          primaryColor:
            prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
          secondaryColor:
            prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
          children: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.node,
              ),
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.node,
            ],
          ),
          width: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
          height: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
          speed: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.number,
        }),
        (__webpack_exports__.a = Loader),
        (Loader.__docgenInfo = {
          description: 'Placeholder loader element',
          methods: [],
          displayName: 'Loader',
          props: {
            primaryColor: {
              defaultValue: { value: "'#ECEFF1'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            secondaryColor: {
              defaultValue: { value: "'#CFD8DC'", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            children: {
              defaultValue: { value: 'null', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'node' } },
                  { name: 'node' },
                ],
              },
              required: !1,
              description: 'SVG to be rendered as a Loader',
            },
            width: {
              defaultValue: { value: '400', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
            height: {
              defaultValue: { value: '130', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
            speed: {
              defaultValue: { value: '2', computed: !1 },
              type: { name: 'number' },
              required: !1,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Loader\\Loader.jsx'] = {
            name: 'Loader',
            docgenInfo: Loader.__docgenInfo,
            path: 'components\\Loader\\Loader.jsx',
          });
    },
    1781: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              12,
            ),
            _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              62,
            ),
            _components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              61,
            ),
            cardSample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Card__WEBPACK_IMPORTED_MODULE_5__.a,
              { elevation: 1, hoverElevation: 5 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Container,
                { horizontal: !0 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Thumbnail,
                  {
                    src: 'https://image.flaticon.com/icons/svg/876/876019.svg',
                    alt: 'Female Avatar',
                  },
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.HeaderText,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Title,
                    null,
                    'Primary text',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.SupportText,
                    null,
                    'Secondary text',
                  ),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Media,
                {
                  src: 'https://placeimg.com/300/150/any',
                  alt: 'Female Avatar',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Container,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.SupportText,
                  null,
                  'Description suport text',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Divider,
                  null,
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.SupportText,
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra porttitor placerat. Vivamus nec purus sit amet elit condimentum malesuada.',
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Container,
                { horizontal: !0 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Button,
                  { skin: 'modal', type: 'button', onClick: function() {} },
                  'Catho 1',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Button,
                  { skin: 'modal', type: 'button', onClick: function() {} },
                  'Catho 2',
                ),
              ),
            ),
            simpleCardSample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Card__WEBPACK_IMPORTED_MODULE_5__.a,
              { elevation: 1, hoverElevation: 5 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Card__WEBPACK_IMPORTED_MODULE_5__.a.Container,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  'p',
                  null,
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra porttitor placerat. Vivamus nec purus sit amet elit condimentum malesuada.',
                ),
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '9. Card',
            module,
          ).add('Card', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Heading,
              { name: 'Card' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
                  { title: 'Anatomy' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                      { desktop: 12, tablet: 12 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'The card container is the only required element in a card. All other elements shown here are optional.',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h1',
                        null,
                        'The anatomy',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        {
                          desktop: 12,
                          tablet: 12,
                          style: {
                            backgroundColor: '#e5e5e5',
                            textAlign: 'center',
                          },
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Image__WEBPACK_IMPORTED_MODULE_6__.a,
                          {
                            src:
                              'https://material.io/design/assets/1eZNTdj8h1J0BFkbl23LyzEwjjvMzY_uV/cards-elements-2b.png',
                            alt: '',
                            width: '900',
                          },
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h2',
                        null,
                        'Card sub-components',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Table,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'thead',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'th',
                              null,
                              '#',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'th',
                              null,
                              'Component',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'th',
                              null,
                              'Code',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'th',
                              null,
                              'Description',
                            ),
                          ),
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'tbody',
                          null,
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              '1',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Container',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'code',
                                null,
                                '<Card.Container />',
                              ),
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Card containers hold all card elements, and their size is determined by the space those elements occupy. Card elevation is expressed by the container.',
                            ),
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              '2',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Thumbnail [optional]',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'code',
                                null,
                                '<Card.Thumbnail />',
                              ),
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Cards can include thumbnails to display an avatar, logo, or icon.',
                            ),
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              '3, 4',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Header text [optional]',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'code',
                                null,
                                '<Card.HeaderText />',
                              ),
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Header text can include things like the name of a photo album or article.',
                            ),
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              '5',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Media [optional]',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'code',
                                null,
                                '<Card.Media />',
                              ),
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Cards can include a variety of media, including photos, and graphics, such as weather icons.',
                            ),
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              '6',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Supporting text [optional]',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'code',
                                null,
                                '<Card.SupportText />',
                              ),
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Supporting text include text like an article summary or a restaurant description.',
                            ),
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              '7',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Button [optional]',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'code',
                                null,
                                '<Card.Button />',
                              ),
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Cards can include buttons for actions.',
                            ),
                          ),
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'tr',
                            null,
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              '8',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Icons [optional]',
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                'code',
                                null,
                                '<Card.Icon />',
                              ),
                            ),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                              'td',
                              null,
                              'Cards can include icons for actions.',
                            ),
                          ),
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'Each card is made up of content blocks. All of the blocks, as a whole, are related to a single subject or destination. Content can receive different levels of emphasis, depending on its level of hierarchy.',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        {
                          desktop: 12,
                          tablet: 12,
                          style: {
                            backgroundColor: '#e5e5e5',
                            textAlign: 'center',
                          },
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'img',
                          {
                            src:
                              'https://material.io/design/assets/0B6xUSjjSulxca3J1cWoxa003amc/cards-elements-1.png',
                            alt: '',
                            width: '900',
                          },
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h2',
                        null,
                        'Dividers',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'Use inset dividers (1), to separate related content.',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        {
                          desktop: 12,
                          tablet: 12,
                          style: {
                            backgroundColor: '#e5e5e5',
                            textAlign: 'center',
                          },
                        },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'img',
                          {
                            src:
                              'https://material.io/design/assets/0B6xUSjjSulxcUTQtcVl0WURPWW8/cards-dividers-2.png',
                            alt: '',
                            width: '900',
                          },
                        ),
                      ),
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
                  { title: 'Example' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                      { desktop: 8, tablet: 8 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.CodeExample,
                        { component: cardSample },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                      { desktop: 4, tablet: 4 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                        null,
                        'Preview',
                      ),
                      cardSample,
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h2',
                    null,
                    'Simple card',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                      { desktop: 8, tablet: 8 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.CodeExample,
                        { component: simpleCardSample },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                      { desktop: 4, tablet: 4 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                        null,
                        'Preview',
                      ),
                      simpleCardSample,
                    ),
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1782: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              767,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Checkbox', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Checkbox__WEBPACK_IMPORTED_MODULE_3__.a,
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1783: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _Colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(745);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '1. Foundation',
            module,
          ).add('Color Palette', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Heading,
              { name: 'Colors', title: 'Color Palette' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Colors__WEBPACK_IMPORTED_MODULE_3__.a,
                null,
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1784: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              766,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Dropdown', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Dropdown__WEBPACK_IMPORTED_MODULE_3__.a,
                componentProps: {
                  items: [
                    { value: 'SP', item: 'São Paulo' },
                    { value: 'MG', item: 'Minas Gerais' },
                    { value: 'FE', item: 'Fortaleza' },
                  ],
                },
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1787: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(369),
            __webpack_require__(354),
            __webpack_require__(75),
            __webpack_require__(47);
          var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_4__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              3,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              12,
            ),
            _components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              35,
            ),
            _components_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              243,
            ),
            _components_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              97,
            ),
            _components_Input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
              37,
            ),
            _SimpleForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
              327,
            ),
            _SimpleValidation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
              328,
            ),
            _AdvancedValidation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
              329,
            ),
            FormExample = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _components_Form__WEBPACK_IMPORTED_MODULE_10__.a,
              { style: { width: '400px' } },
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _components_Input__WEBPACK_IMPORTED_MODULE_12__.a,
                {
                  name: 'first',
                  label: 'First Name',
                  validate: [
                    {
                      validate:
                        _components_Form__WEBPACK_IMPORTED_MODULE_11__.a
                          .Required,
                    },
                    _components_Form__WEBPACK_IMPORTED_MODULE_11__.a.MinLength,
                  ],
                  minLength: 3,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _components_Input__WEBPACK_IMPORTED_MODULE_12__.a,
                {
                  name: 'last',
                  label: 'Last Name',
                  validate: [
                    {
                      validate:
                        _components_Form__WEBPACK_IMPORTED_MODULE_11__.a
                          .Required,
                    },
                    _components_Form__WEBPACK_IMPORTED_MODULE_11__.a.MinLength,
                  ],
                  minLength: 3,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _components_Input__WEBPACK_IMPORTED_MODULE_12__.a.Date,
                {
                  name: 'date',
                  label: 'Birthday',
                  validate:
                    _components_Form__WEBPACK_IMPORTED_MODULE_11__.a.Date,
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _components_Button__WEBPACK_IMPORTED_MODULE_9__.a,
                { type: 'submit' },
                ' Enviar ',
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf)(
            '3. Forms',
            module,
          ).add('Validation', function() {
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Heading,
              { title: '<Form />' },
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'p',
                    null,
                    'We provide a bunch of components to use in your form.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'p',
                    null,
                    'To use it, you need to import the component itself and add some inputs as you like.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'h4',
                    null,
                    'Simple form',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                      { desktop: 6 },
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.CodeExample,
                        {
                          showTitle: !1,
                          withImport: 'Form, Input, Button',
                          component:
                            _SimpleForm__WEBPACK_IMPORTED_MODULE_13__.b,
                          code: _SimpleForm__WEBPACK_IMPORTED_MODULE_13__.a,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                      { desktop: 6 },
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _SimpleForm__WEBPACK_IMPORTED_MODULE_13__.b,
                        null,
                      ),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'p',
                    null,
                    'Each child of ',
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'code',
                      null,
                      'Form',
                    ),
                    ' has an property ',
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'code',
                      null,
                      'validate',
                    ),
                    '.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'p',
                    null,
                    'It is not required but you can provide validations on it to be fired when your form is submitted.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'h4',
                    null,
                    'Validate Example',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                      { desktop: 6 },
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.CodeExample,
                        {
                          showTitle: !1,
                          withImport: 'Form, Validations, Input, Button',
                          component:
                            _SimpleValidation__WEBPACK_IMPORTED_MODULE_14__.b,
                          code:
                            _SimpleValidation__WEBPACK_IMPORTED_MODULE_14__.a,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                      { desktop: 6 },
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _SimpleValidation__WEBPACK_IMPORTED_MODULE_14__.b,
                        null,
                      ),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'p',
                    null,
                    'As you can see in the example above, we also provide some useful validations:',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'ul',
                    null,
                    Object.getOwnPropertyNames(
                      _components_Form__WEBPACK_IMPORTED_MODULE_11__.a,
                    )
                      .filter(function(name) {
                        return !['name', 'length', 'prototype'].includes(name);
                      })
                      .map(function(validate) {
                        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                          'li',
                          { key: validate },
                          validate,
                        );
                      }),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'p',
                    null,
                    'You can add as many validations as you want!',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'p',
                    null,
                    'And you can write your custom validate function with custom error messages too!!!',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    'h4',
                    null,
                    'Advanced Form',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                      { desktop: 6 },
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.CodeExample,
                        {
                          showTitle: !1,
                          withImport: 'Form, Validations, Input, Button',
                          component:
                            _AdvancedValidation__WEBPACK_IMPORTED_MODULE_15__.b,
                          code:
                            _AdvancedValidation__WEBPACK_IMPORTED_MODULE_15__.a,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_8__.a,
                      { desktop: 6 },
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _AdvancedValidation__WEBPACK_IMPORTED_MODULE_15__.b,
                        null,
                      ),
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Tab,
                  { title: 'Example' },
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Example,
                    {
                      title: 'New User',
                      importModules: 'Form',
                      component: FormExample,
                    },
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1788: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(760);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '1. Foundation',
            module,
          ).add('Grid System', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Heading,
              { name: 'Grid', title: 'Grid' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                null,
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1789: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(59), __webpack_require__(47);
          var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_2__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              11,
            ),
            _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              95,
            ),
            _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_4__,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              4,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_5__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              3,
            ),
            _components_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              36,
            ),
            _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              8,
            ),
            _Catalogue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(764),
            IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig(
              {
                displayName: 'Iconstory__IconWrapper',
                componentId: 'sc-1edvzaj-0',
              },
            )(['padding:10px;display:inline-block;']),
            exampleIcons = [
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'thumb_up' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'info' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'motorcycle' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'directions_car' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'airplanemode_active' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'access_alarm' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'audiotrack' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                { name: 'attach_money' },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  name: 'autorenew',
                  skin:
                    _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                      .ACTION[500],
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  name: 'check_circle',
                  skin:
                    _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                      .SECONDARY[700],
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  name: 'clear',
                  skin:
                    _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                      .INFO[400],
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  name: 'directions_bike',
                  skin:
                    _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                      .WARNING[900],
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _components_Icon__WEBPACK_IMPORTED_MODULE_7__.a,
                {
                  name: 'event',
                  skin:
                    _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                      .DANGER[300],
                },
              ),
            ];
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)(
            '1. Foundation',
            module,
          ).add('Icons', function() {
            return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Heading,
                { name: 'Icon' },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.TabbedView,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Tab,
                    { title: 'Usage' },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.HowToImport,
                      { importModules: 'Icon' },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Title,
                      null,
                      'Usage',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      'p',
                      null,
                      'You need to import the',
                      ' ',
                      react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                        _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_4___default.a,
                        { kind: '1. Foundation', story: 'Typography' },
                        'typography',
                      ),
                      ' ',
                      'to include icon fonts.',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      'small',
                      null,
                      exampleIcons.map(function(icon) {
                        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                          IconWrapper,
                          { key: icon.props.name },
                          icon,
                        );
                      }),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.CodeExample,
                      {
                        showTitle: !1,
                        code:
                          '<Icon name="thumb_up" />\n<Icon name="info" />\n<Icon name="motorcycle" />\n<Icon name="directions_car" />\n<Icon name="airplanemode_active" />\n<Icon name="access_alarm" />\n<Icon name="audiotrack" />\n<Icon name="attach_money" />\n<Icon name="autorenew" skin={Colors.ACTION[\'500\']} />\n<Icon name="check_circle" skin={Colors.SECONDARY[\'700\']} />\n<Icon name="clear" skin={Colors.INFO[\'400\']} />\n<Icon name="directions_bike" skin={Colors.WARNING[\'900\']} />\n<Icon name="event" skin={Colors.DANGER[\'300\']} />\n',
                      },
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Tab,
                    { title: 'Catalogue' },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(
                      _Catalogue__WEBPACK_IMPORTED_MODULE_9__.a,
                      null,
                    ),
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    179: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(47),
        __webpack_require__(59);
      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        ),
        _Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(178),
        LoaderTypes = {
          Image: function(props) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _Loader__WEBPACK_IMPORTED_MODULE_6__.a,
              props,
            );
          },
          Text: function(props) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _Loader__WEBPACK_IMPORTED_MODULE_6__.a,
              props,
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '0',
                  y: '15',
                  rx: '3',
                  ry: '3',
                  width: '250',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '0',
                  y: '30',
                  rx: '3',
                  ry: '3',
                  width: '220',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '0',
                  y: '45',
                  rx: '3',
                  ry: '3',
                  width: '170',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '0',
                  y: '60',
                  rx: '3',
                  ry: '3',
                  width: '250',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '0',
                  y: '75',
                  rx: '3',
                  ry: '3',
                  width: '200',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '0',
                  y: '90',
                  rx: '3',
                  ry: '3',
                  width: '140',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '0',
                  y: '105',
                  rx: '3',
                  ry: '3',
                  width: '80',
                  height: '4',
                },
              ),
            );
          },
          List: function(props) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _Loader__WEBPACK_IMPORTED_MODULE_6__.a,
              props,
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '10', cy: '15', r: '4' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '25',
                  y: '13',
                  rx: '5',
                  ry: '5',
                  width: '220',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '10', cy: '40', r: '4' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '25',
                  y: '38',
                  rx: '5',
                  ry: '5',
                  width: '220',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '10', cy: '65', r: '4' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '25',
                  y: '63',
                  rx: '5',
                  ry: '5',
                  width: '220',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '10', cy: '90', r: '4' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '25',
                  y: '88',
                  rx: '5',
                  ry: '5',
                  width: '220',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '10', cy: '115', r: '4' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '25',
                  y: '113',
                  rx: '5',
                  ry: '5',
                  width: '220',
                  height: '4',
                },
              ),
            );
          },
          IconList: function(props) {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _Loader__WEBPACK_IMPORTED_MODULE_6__.a,
              props,
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '15', cy: '25', r: '14' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '35',
                  y: '18',
                  rx: '4',
                  ry: '4',
                  width: '100',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '35',
                  y: '30',
                  rx: '4',
                  ry: '4',
                  width: '50',
                  height: '2',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '15', cy: '65', r: '14' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '35',
                  y: '58',
                  rx: '4',
                  ry: '4',
                  width: '100',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '35',
                  y: '70',
                  rx: '4',
                  ry: '4',
                  width: '50',
                  height: '2',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'circle',
                { cx: '15', cy: '105', r: '14' },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '35',
                  y: '98',
                  rx: '4',
                  ry: '4',
                  width: '100',
                  height: '4',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                'rect',
                {
                  x: '35',
                  y: '110',
                  rx: '4',
                  ry: '4',
                  width: '50',
                  height: '2',
                },
              ),
            );
          },
        };
      Object.keys(LoaderTypes).map(function(name) {
        LoaderTypes[name].displayName = 'Loader.'.concat(name);
      }),
        (__webpack_exports__.a = LoaderTypes);
    },
    1790: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              4,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_2__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              3,
            ),
            _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              61,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              12,
            ),
            _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              326,
            ),
            StyledRow = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(
              _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
            ).withConfig({
              displayName: 'Imagestory__StyledRow',
              componentId: 'sc-154tsb5-0',
            })(['margin-bottom:30px;']),
            FallbackComponent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig(
              {
                displayName: 'Imagestory__FallbackComponent',
                componentId: 'sc-154tsb5-1',
              },
            )([
              'background-color:#eee;width:200px;height:100px;border:1px solid #ddd;display:flex;justify-content:center;flex-direction:column;text-align:center;',
            ]),
            examples = {
              basicUsage: {
                component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Image__WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    src: 'https://static.catho.com.br/images/site/avatarF.jpg',
                    alt: 'Female Avatar',
                  },
                ),
                code:
                  '<Image\n  src="https://static.catho.com.br/images/site/avatarF.jpg"\n  alt="Female Avatar"\n/>',
              },
              fallBackimages: {
                component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Image__WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    src: [
                      'http://notfound/404.jpg',
                      'https://static.catho.com.br/images/site/avatarM.jpg',
                    ],
                    alt: 'Male Avatar',
                  },
                ),
                code:
                  "<Image\n  src={[\n    'http://notfound/404.jpg',\n    'https://static.catho.com.br/images/site/avatarM.jpg',\n  ]}\n  alt=\"Male Avatar\"\n/>",
              },
              withLoader: {
                component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Image__WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    src:
                      'https://static.catho.com.br/images/candidato/home/banner-responsive/banner_062015.jpg',
                    width: 430,
                    height: 200,
                    alt: 'Example',
                    loader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Loading__WEBPACK_IMPORTED_MODULE_7__.a,
                      { visible: !0, size: 50 },
                    ),
                  },
                ),
                code:
                  '// First import your loading component\nimport { Loading } from \'@cathodevel/quantum\';\n\n// Then use with \'loader\' prop\n<Image\n  src="https://static.catho.com.br/images/candidato/home/banner-responsive/banner_062015.jpg"\n  alt="Female Avatar"\n  loader={<Loading visible size={50} />}\n/>',
              },
              withUnloader: {
                component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Image__WEBPACK_IMPORTED_MODULE_4__.a,
                  {
                    src: 'http://notfound/404.jpg',
                    alt: 'Example',
                    unloader: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      FallbackComponent,
                      null,
                      'Failed',
                    ),
                  },
                ),
                code:
                  '<Image\n  src="http://notfound/404.jpg"\n  alt="Example"\n  unloader={<FallbackComponent>Failed</FallbackComponent>}\n/>',
              },
            };
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '6. Images',
            module,
          ).add('Image', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Heading,
              { name: 'Image' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.HowToImport,
                    { importModules: 'Image' },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    StyledRow,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 12 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h3',
                        null,
                        'Basic usage:',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'For a basic usage, you can simple pass a ',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'code',
                          null,
                          'src',
                        ),
                        ' prop',
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 7 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        {
                          component: examples.basicUsage.component,
                          code: examples.basicUsage.code,
                          showTitle: !1,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 5 },
                      examples.basicUsage.component,
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    StyledRow,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 12 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h3',
                        null,
                        'Multiple fallback images:',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'When src is specified as an array, it will attempt to load all the images specified,',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'br',
                          null,
                        ),
                        'starting at the first and continuing until an image has been successfully loaded.',
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 7 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        {
                          component: examples.fallBackimages.component,
                          code: examples.fallBackimages.code,
                          showTitle: !1,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 5 },
                      examples.fallBackimages.component,
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    StyledRow,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 12 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h3',
                        null,
                        'Custom loader',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'You can display a loader component until the image is completely downloaded.',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'br',
                          null,
                        ),
                        'Just pass a component inside ',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'code',
                          null,
                          'loader',
                        ),
                        ' prop.',
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 7 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        {
                          component: examples.withLoader.component,
                          code: examples.withLoader.code,
                          showTitle: !1,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 5 },
                      examples.withLoader.component,
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    StyledRow,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 12 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'h3',
                        null,
                        'Fallback element if non of the images could be loaded:',
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'p',
                        null,
                        'If all images from ',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'code',
                          null,
                          'src',
                        ),
                        ' prop fail, you can use a',
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'code',
                          null,
                          'unloader',
                        ),
                        ' prop to render a component as fallback.',
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 7 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        {
                          component: examples.withUnloader.component,
                          code: examples.withUnloader.code,
                          showTitle: !1,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                      { desktop: 5 },
                      examples.withUnloader.component,
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                  { title: 'API' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                    {
                      component:
                        _components_Image__WEBPACK_IMPORTED_MODULE_4__.a,
                    },
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1791: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              37,
            ),
            tabExample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
              { title: 'Example' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Input__WEBPACK_IMPORTED_MODULE_3__.a.CEP,
                    { id: 'CEP', label: 'CEP', style: { width: '200px' } },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Input__WEBPACK_IMPORTED_MODULE_3__.a.CNPJ,
                    { id: 'CNPJ', label: 'CNPJ', style: { width: '200px' } },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Input__WEBPACK_IMPORTED_MODULE_3__.a.CPF,
                    { id: 'CPF', label: 'CPF', style: { width: '200px' } },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Input__WEBPACK_IMPORTED_MODULE_3__.a.Date,
                    { id: 'Date', label: 'Date', style: { width: '200px' } },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Input__WEBPACK_IMPORTED_MODULE_3__.a.Phone,
                    { id: 'Phone', label: 'Phone', style: { width: '200px' } },
                  ),
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'div',
                { style: { width: '200px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Input__WEBPACK_IMPORTED_MODULE_3__.a.Password,
                      { id: 'password', label: 'Password' },
                    ),
                  },
                ),
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Input', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Input__WEBPACK_IMPORTED_MODULE_3__.a,
                componentProps: {
                  id: 'example',
                  name: 'example',
                  label: 'Example',
                },
                additionalTabs: tabExample,
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1792: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _Introduction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              747,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            'Introduction',
            module,
          ).add('Getting started', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Heading,
              { title: 'Quantum' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Introduction__WEBPACK_IMPORTED_MODULE_3__.a,
                null,
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1793: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
            prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_1__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              3,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              12,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              44,
            ),
            _components_List__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              42,
            ),
            _components_List_sub_components_Item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              239,
            ),
            _components_List_sub_components_Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              209,
            ),
            _components_List_sub_components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              177,
            ),
            _components_List_sub_components_SubHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              210,
            ),
            _sub_components_simpleList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              748,
            ),
            _sub_components_simpleListItemAlternatives__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
              749,
            ),
            _sub_components_simpleListContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
              750,
            ),
            ListExample = function(_ref) {
              var code = _ref.code,
                component = _ref.component;
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                  { tablet: 4 },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                    { component: {}, code: code, showTitle: !1 },
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                  { tablet: 4 },
                  component,
                ),
              );
            };
          (ListExample.propTypes = {
            code:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
                .isRequired,
            component:
              prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
          }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_2__.storiesOf)(
              '10. List',
              module,
            ).add('List', function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Heading,
                { name: 'List' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.TabbedView,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                    { title: 'Usage' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.HowToImport,
                      { importModules: 'List' },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { desktop: 12, tablet: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'p',
                          null,
                          'The List component was build to be as simple and flexible as you want.',
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'p',
                          null,
                          'It works with just a string array or with ',
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'code',
                            null,
                            'List.Item',
                          ),
                          ' ',
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        ListExample,
                        _sub_components_simpleList__WEBPACK_IMPORTED_MODULE_11__.a,
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { desktop: 12, tablet: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'p',
                          null,
                          'Also, you can add some properties to the list such as',
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'code',
                            null,
                            'ordered',
                          ),
                          ',',
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'code',
                            null,
                            'divided',
                          ),
                          ',',
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'code',
                            null,
                            'bullet',
                          ),
                          ', and',
                          ' ',
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'code',
                            null,
                            'inline',
                          ),
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { tablet: 4 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                          {
                            component: {},
                            code:
                              '\n<List inline> ... </List>\n<List divided inline> ... </List>\n<List ordered> ... </List>\n<List divided bullet="»"> ... </List>\n                ',
                            showTitle: !1,
                          },
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { tablet: 3 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_List__WEBPACK_IMPORTED_MODULE_6__.a,
                          {
                            inline: !0,
                            items: [
                              'Tomato sauce',
                              'Mustard',
                              'Barbecue sauce',
                            ],
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_List__WEBPACK_IMPORTED_MODULE_6__.a,
                          {
                            divided: !0,
                            inline: !0,
                            items: [
                              'Tomato sauce',
                              'Mustard',
                              'Barbecue sauce',
                            ],
                          },
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { tablet: 2 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_List__WEBPACK_IMPORTED_MODULE_6__.a,
                          {
                            ordered: !0,
                            items: [
                              'Tomato sauce',
                              'Mustard',
                              'Barbecue sauce',
                            ],
                          },
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { tablet: 2 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_List__WEBPACK_IMPORTED_MODULE_6__.a,
                          {
                            divided: !0,
                            bullet: '»',
                            items: [
                              'Tomato sauce',
                              'Mustard',
                              'Barbecue sauce',
                            ],
                          },
                        ),
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { desktop: 12, tablet: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'h3',
                          null,
                          'Item',
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'p',
                          null,
                          'You have some alternatives to write an item.',
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        ListExample,
                        _sub_components_simpleListItemAlternatives__WEBPACK_IMPORTED_MODULE_12__.a,
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                        { desktop: 12, tablet: 12 },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'h3',
                          null,
                          'Content',
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          'p',
                          null,
                          'Like ',
                          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            'code',
                            null,
                            'List.Item',
                          ),
                          ', you have some alternatives to write an content too.',
                        ),
                      ),
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        ListExample,
                        _sub_components_simpleListContent__WEBPACK_IMPORTED_MODULE_13__.a,
                      ),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                    { title: 'API' },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                      {
                        component:
                          _components_List__WEBPACK_IMPORTED_MODULE_6__.a,
                        title: 'List',
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                      {
                        component:
                          _components_List_sub_components_Item__WEBPACK_IMPORTED_MODULE_7__.a,
                        title: 'List.Item',
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                      {
                        component:
                          _components_List_sub_components_Content__WEBPACK_IMPORTED_MODULE_8__.a,
                        title: 'List.Content',
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                      {
                        component:
                          _components_List_sub_components_Header__WEBPACK_IMPORTED_MODULE_9__.a,
                        title: 'List.Header',
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                      {
                        component:
                          _components_List_sub_components_SubHeader__WEBPACK_IMPORTED_MODULE_10__.a,
                        title: 'List.SubHeader',
                      },
                    ),
                  ),
                ),
              );
            });
        }.call(this, __webpack_require__(32)(module));
    },
    1794: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(47),
            __webpack_require__(21),
            __webpack_require__(22),
            __webpack_require__(26),
            __webpack_require__(59);
          var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_5__,
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
            prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_6__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              11,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              4,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_8__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              3,
            ),
            _components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              330,
            ),
            _components_Loader_LoaderTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              179,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
              12,
            ),
            LoaderExample = function(_ref) {
              var name = _ref.name,
                Component =
                  _components_Loader__WEBPACK_IMPORTED_MODULE_10__.a[name] ||
                  _components_Loader__WEBPACK_IMPORTED_MODULE_10__.a,
                ExampleRow = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_12__.a,
                ).withConfig({
                  displayName: 'Loaderstory__ExampleRow',
                  componentId: 'sc-2p2rg-0',
                })(['margin-bottom:30px;']);
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                ExampleRow,
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_13__.a,
                  { phone: 4 },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.CodeExample,
                    {
                      code: '<Loader'.concat(
                        name ? '.'.concat(name) : '',
                        ' />',
                      ),
                      showTitle: !1,
                      component: Component,
                    },
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_13__.a,
                  { phone: 4 },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    Component,
                    null,
                  ),
                ),
              );
            };
          (LoaderExample.defaultProps = { name: '' }),
            (LoaderExample.propTypes = {
              name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
            });
          var loaderTypes = Object.keys(
            _components_Loader_LoaderTypes__WEBPACK_IMPORTED_MODULE_11__.a,
          );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__.storiesOf)(
            '13. Others',
            module,
          ).add('Loader', function() {
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Heading,
              { name: 'Loader' },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.HowToImport,
                    { importModules: 'Loader' },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'p',
                    null,
                    'You can use these Loaders:',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'ul',
                    null,
                    loaderTypes.map(function(name) {
                      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'li',
                        { key: name },
                        name,
                      );
                    }),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    LoaderExample,
                    null,
                  ),
                  loaderTypes.map(function(type) {
                    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      LoaderExample,
                      { name: type, key: type },
                    );
                  }),
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Tab,
                  { title: 'API' },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.AutoPropsApi,
                    {
                      component:
                        _components_Loader__WEBPACK_IMPORTED_MODULE_10__.a,
                    },
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1795: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              326,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '13. Others',
            module,
          ).add('Loading', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              { component: _components_Loading__WEBPACK_IMPORTED_MODULE_3__.a },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1796: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(47),
            __webpack_require__(21),
            __webpack_require__(22),
            __webpack_require__(26),
            __webpack_require__(59);
          var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_5__,
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
            prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
              prop_types__WEBPACK_IMPORTED_MODULE_6__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              11,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              4,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_8__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              3,
            ),
            _components_Logo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              756,
            ),
            _components_Logo_LogoTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              131,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
              12,
            ),
            StyledRow = styled_components__WEBPACK_IMPORTED_MODULE_8___default()(
              _components_Grid__WEBPACK_IMPORTED_MODULE_12__.a,
            ).withConfig({
              displayName: 'Logostory__StyledRow',
              componentId: 'khbkcj-0',
            })(['margin-bottom:30px;']),
            LogoExample = function(_ref) {
              var name = _ref.name,
                Component =
                  _components_Logo_LogoTypes__WEBPACK_IMPORTED_MODULE_11__.a[
                    name
                  ];
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                StyledRow,
                { key: 'row-'.concat(name) },
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_13__.a,
                  { phone: 4 },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.CodeExample,
                    { code: '<Logo.'.concat(name, ' />'), showTitle: !1 },
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_13__.a,
                  { phone: 4 },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    Component,
                    null,
                  ),
                ),
              );
            };
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__.storiesOf)(
            '6. Images',
            module,
          ).add('Logo', function() {
            var logoList = Object.keys(
              _components_Logo_LogoTypes__WEBPACK_IMPORTED_MODULE_11__.a,
            );
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Heading,
              { name: 'Logo' },
              react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.HowToImport,
                    { importModules: 'Logo' },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'p',
                    null,
                    'You can use these logos:',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    'ul',
                    null,
                    logoList.map(function(name) {
                      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                        'li',
                        { key: name },
                        name,
                      );
                    }),
                  ),
                  logoList.map(function(name) {
                    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                      LogoExample,
                      { key: 'example-'.concat(name), name: name },
                    );
                  }),
                ),
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Tab,
                  { title: 'API' },
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.AutoPropsApi,
                    {
                      component:
                        _components_Logo__WEBPACK_IMPORTED_MODULE_10__.a,
                      ignoredProps: ['src'],
                    },
                  ),
                ),
              ),
            );
          }),
            (LogoExample.propTypes = {
              name:
                prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
                  .isRequired,
            });
        }.call(this, __webpack_require__(32)(module));
    },
    1797: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              12,
            ),
            _components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              35,
            ),
            _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              149,
            ),
            stories = Object(
              _storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf,
            )('5. Modals', module),
            ModalExample = {
              component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Modal__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  closeOnOverlayClick: !0,
                  trigger: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Button__WEBPACK_IMPORTED_MODULE_5__.a,
                    null,
                    'Open modal',
                  ),
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Modal__WEBPACK_IMPORTED_MODULE_6__.a.Header,
                  null,
                  'Title',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Modal__WEBPACK_IMPORTED_MODULE_6__.a.Content,
                  null,
                  'Example Content',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Modal__WEBPACK_IMPORTED_MODULE_6__.a.Footer,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Modal__WEBPACK_IMPORTED_MODULE_6__.a.Action,
                    {
                      onClick: function() {
                        return console.log('Cancelar');
                      },
                    },
                    'Cancelar',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Modal__WEBPACK_IMPORTED_MODULE_6__.a.Action,
                    {
                      onClick: function() {
                        return console.log('OK');
                      },
                      skin: 'primary',
                    },
                    'OK',
                  ),
                ),
              ),
              code:
                '\n<Modal\n  opened\n  closeOnOverlayClick\n  trigger={<Button>Open modal</Button>}>\n  <Modal.Header>Title</Modal.Header>\n  <Modal.Content>Example Content</Modal.Content>\n  <Modal.Footer>\n    <Button skin="modal" onClick={this.handleClose}>\n      Cancel\n    </Button>\n    <Button onClick={this.handleClose}>OK</Button>\n  </Modal.Footer>\n</Modal>',
            };
          stories.add('Basic', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Heading,
              { name: 'Modal' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.HowToImport,
                    { importModules: 'Modal' },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    'Use Modal component to add dialogs to your UI for lightboxes, user notifications, or completely custom content.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    'A modal displays content that temporarily blocks interactions with the main view of a site.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_3__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                      { phone: 6 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.CodeExample,
                        {
                          showTitle: !1,
                          component: ModalExample.component,
                          code: ModalExample.code,
                        },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                      { phone: 6 },
                      ModalExample.component,
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
                  { title: 'API' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoPropsApi,
                    {
                      component:
                        _components_Modal__WEBPACK_IMPORTED_MODULE_6__.a,
                    },
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1798: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(39),
            __webpack_require__(53),
            __webpack_require__(21),
            __webpack_require__(22),
            __webpack_require__(26),
            __webpack_require__(47);
          var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_6__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              11,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              4,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_8__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
              3,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
              12,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
              242,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
              44,
            ),
            _components_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
              35,
            ),
            _components_Popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
              457,
            ),
            _components_Form__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
              243,
            ),
            _components_Form__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
              97,
            ),
            _components_Input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
              37,
            );
          function _extends() {
            return (_extends =
              Object.assign ||
              function(target) {
                for (var source, i = 1; i < arguments.length; i++)
                  for (var key in (source = arguments[i]))
                    Object.prototype.hasOwnProperty.call(source, key) &&
                      (target[key] = source[key]);
                return target;
              }).apply(this, arguments);
          }
          function _objectWithoutProperties(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = (function(source, excluded) {
                if (null == source) return {};
                var key,
                  i,
                  target = {},
                  sourceKeys = Object.keys(source);
                for (i = 0; i < sourceKeys.length; i++)
                  (key = sourceKeys[i]),
                    0 <= excluded.indexOf(key) || (target[key] = source[key]);
                return target;
              })(source, excluded);
            if (Object.getOwnPropertySymbols) {
              var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
              for (i = 0; i < sourceSymbolKeys.length; i++)
                (key = sourceSymbolKeys[i]),
                  !(0 <= excluded.indexOf(key)) &&
                    Object.prototype.propertyIsEnumerable.call(source, key) &&
                    (target[key] = source[key]);
            }
            return target;
          }
          var Content = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig(
              { displayName: 'Popoverstory__Content', componentId: 'x76qcb-0' },
            )(['min-width:150px;']),
            examples = [
              {
                label: 'Top Right',
                props: { content: 'Content', place: 'top-right' },
              },
              { label: 'Left', props: { content: 'Content', place: 'left' } },
              { label: 'Right', props: { content: 'Content', place: 'right' } },
              {
                label: 'Top-Left',
                props: { content: 'Content', place: 'top-left' },
              },
              {
                label: 'With Title',
                props: {
                  content: 'Content',
                  title: 'Great Popover',
                  place: 'top-right',
                },
              },
              {
                label: 'With p2p skin',
                props: { content: 'Content', skin: 'p2p' },
              },
              {
                label: 'With ribbon',
                props: {
                  content: 'Content',
                  skin: 'p2p',
                  ribbon: 'Limited edition',
                },
              },
              {
                label: 'With rich content',
                props: {
                  content: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                    _components_Form__WEBPACK_IMPORTED_MODULE_15__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      _components_Input__WEBPACK_IMPORTED_MODULE_17__.a,
                      {
                        name: 'email',
                        id: 'email',
                        label: 'E-mail',
                        validate: [
                          _components_Form__WEBPACK_IMPORTED_MODULE_16__.a
                            .Required,
                          _components_Form__WEBPACK_IMPORTED_MODULE_16__.a
                            .Email,
                        ],
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      _components_Input__WEBPACK_IMPORTED_MODULE_17__.a
                        .Password,
                      {
                        name: 'password',
                        id: 'password',
                        label: 'Password',
                        validate:
                          _components_Form__WEBPACK_IMPORTED_MODULE_16__.a
                            .MinLength,
                        minLength: 6,
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      _components_Button__WEBPACK_IMPORTED_MODULE_13__.a,
                      { type: 'submit' },
                      'Submit',
                    ),
                  ),
                  title: 'Register',
                },
              },
            ].map(function(_ref) {
              var label = _ref.label,
                _ref$props = _ref.props,
                content = _ref$props.content,
                rest = _objectWithoutProperties(_ref$props, ['content']);
              return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                _components_Grid__WEBPACK_IMPORTED_MODULE_10__.a,
                { tablet: 3, key: 'example-'.concat(label) },
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Example,
                  {
                    component: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                      _components_Popover__WEBPACK_IMPORTED_MODULE_14__.a,
                      _extends(
                        {
                          content: react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                            Content,
                            null,
                            content,
                          ),
                        },
                        rest,
                      ),
                      react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                        _components_Button__WEBPACK_IMPORTED_MODULE_13__.a,
                        { size: 'large' },
                        label,
                      ),
                    ),
                  },
                ),
              );
            }),
            exampleTab = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.Tab,
              { title: 'Example' },
              react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                _components_Grid__WEBPACK_IMPORTED_MODULE_11__.a,
                { fluid: !0 },
                react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_12__.a,
                  null,
                  examples,
                ),
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_7__.storiesOf)(
            '14. Popover',
            module,
          ).add('Popover', function() {
            return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_9__.AutoExample,
              {
                component: _components_Popover__WEBPACK_IMPORTED_MODULE_14__.a,
                componentProps: {
                  content: 'Content',
                  title: 'Title',
                  closeTitle: 'Close',
                  children: 'Click me',
                },
                additionalTabs: exampleTab,
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1799: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              4,
            ),
            styled_components__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              styled_components__WEBPACK_IMPORTED_MODULE_2__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              3,
            ),
            _components_Radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              332,
            ),
            _components_Radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              183,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              12,
            ),
            RadioGroupWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig(
              {
                displayName: 'Radiostory__RadioGroupWrapper',
                componentId: 'jp91w9-0',
              },
            )(['padding:15px;']),
            StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig(
              { displayName: 'Radiostory__StyledDiv', componentId: 'jp91w9-1' },
            )(['margin-bottom:40px;']),
            RadioBlock = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Radio__WEBPACK_IMPORTED_MODULE_4__.a,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Radio__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  id: 'radio',
                  value: 'radio',
                  name: 'radio',
                  label: 'Click me!',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Radio__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  id: 'radioTwo',
                  value: 'radioTwo',
                  name: 'radio',
                  label: 'Click me!',
                },
              ),
            ),
            RadioInline = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Radio__WEBPACK_IMPORTED_MODULE_4__.a,
              { inline: !0 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Radio__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  id: 'radioInline',
                  value: 'radio',
                  name: 'radioInline',
                  label: 'Click me!',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Radio__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  id: 'radioTwoInline',
                  value: 'radioTwo',
                  name: 'radioInline',
                  label: 'Click me!',
                },
              ),
            ),
            BoxedRadio = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Radio__WEBPACK_IMPORTED_MODULE_4__.a,
              { boxed: !0, inline: !0 },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Radio__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  id: 'radioBoxed',
                  value: 'radio',
                  name: 'radioInline',
                  label: 'Yes',
                },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Radio__WEBPACK_IMPORTED_MODULE_5__.a,
                {
                  id: 'radioTwoBoxed',
                  value: 'radioTwo',
                  name: 'radioInline',
                  label: 'No',
                },
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Radio Button', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Heading,
              { name: 'Radio', title: '<RadioGroup />' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.HowToImport,
                    {
                      importModules: 'RadioGroup, Radio',
                      componentName: 'RadioGroup',
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    StyledDiv,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'p',
                      null,
                      'We provide two components to use Radio Buttons.',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'p',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'code',
                        null,
                        '<RadioGroup>',
                      ),
                      ' and ',
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'code',
                        null,
                        '<Radio>',
                      ),
                      ' must be used together and can be displayed inlined or blocked',
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h4',
                    null,
                    'RadioGroup with block display',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                      { phone: 6 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        { component: RadioBlock, showTitle: !1 },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                      { phone: 6 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        RadioGroupWrapper,
                        null,
                        RadioBlock,
                      ),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h4',
                    null,
                    'RadioGroup with inline display',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                      { phone: 6 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        { component: RadioInline, showTitle: !1 },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                      { phone: 6 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        RadioGroupWrapper,
                        null,
                        RadioInline,
                      ),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h4',
                    null,
                    'Boxed RadioGroup',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                      { phone: 6 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        { component: BoxedRadio, showTitle: !1 },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_7__.a,
                      { phone: 6 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        RadioGroupWrapper,
                        null,
                        BoxedRadio,
                      ),
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                  { title: 'API' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                    {
                      component:
                        _components_Radio__WEBPACK_IMPORTED_MODULE_5__.a,
                      title: 'Radio',
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                    {
                      component:
                        _components_Radio__WEBPACK_IMPORTED_MODULE_4__.a,
                      title: 'RadioGroup',
                    },
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    180: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _TextMask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
      __webpack_exports__.a = _TextMask__WEBPACK_IMPORTED_MODULE_0__.a;
    },
    1800: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Range__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              761,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Range', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              { component: _components_Range__WEBPACK_IMPORTED_MODULE_3__.a },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1801: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              182,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              242,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              12,
            ),
            exampleTab = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
              { title: 'Example' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                { fluid: !0 },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    { tablet: 12, desktop: 12, hd: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'h3',
                      null,
                      'Simple slider',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Slider__WEBPACK_IMPORTED_MODULE_3__.a,
                          { min: 0, max: 10 },
                        ),
                      },
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    { tablet: 12, desktop: 12, hd: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'h3',
                      null,
                      'Slider with tooltip',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Slider__WEBPACK_IMPORTED_MODULE_3__.a,
                          { tooltip: !0, min: 0, max: 10 },
                        ),
                      },
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    { tablet: 12, desktop: 12, hd: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'h3',
                      null,
                      'Slider with marks',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Slider__WEBPACK_IMPORTED_MODULE_3__.a,
                          {
                            min: 0,
                            max: 10,
                            marks: { 0: '0', 5: '5', 10: '10' },
                          },
                        ),
                      },
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    { tablet: 12, desktop: 12, hd: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'h3',
                      null,
                      'Slider with marks, tooltip and step',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Slider__WEBPACK_IMPORTED_MODULE_3__.a,
                          {
                            tooltip: !0,
                            min: 0,
                            max: 100,
                            step: 10,
                            marks: { 0: '0', 50: '50', 100: '100' },
                          },
                        ),
                      },
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_6__.a,
                    { tablet: 12, desktop: 12, hd: 12 },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'h3',
                      null,
                      'Slider disabled',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                      {
                        component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Slider__WEBPACK_IMPORTED_MODULE_3__.a,
                          { disabled: !0, min: 0, max: 100 },
                        ),
                      },
                    ),
                  ),
                ),
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '12. Slider',
            module,
          ).add('Slider', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Slider__WEBPACK_IMPORTED_MODULE_3__.a,
                additionalTabs: exampleTab,
                componentProps: { tooltip: !0, min: 0, max: 50, step: 10 },
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    181: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Icon = __webpack_require__(36),
        deprecated = __webpack_require__(8),
        theme = __webpack_require__(25),
        Alert_ComponentTheme = {
          success: {
            backgroundColor: deprecated.a.SUCCESS[500],
            color: deprecated.a.WHITE,
            icon: 'check',
          },
          warning: {
            backgroundColor: deprecated.a.WARNING[500],
            color: deprecated.a.WHITE,
            icon: 'warning',
          },
          error: {
            backgroundColor: deprecated.a.DANGER[500],
            color: deprecated.a.WHITE,
            icon: 'do_not_disturb_alt',
          },
          info: {
            backgroundColor: deprecated.a.INFO[500],
            color: deprecated.a.WHITE,
            icon: 'info_outline',
          },
        };
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      var AlertWrapper = styled_components_browser_cjs_default.a.div.withConfig(
          { displayName: 'Alert__AlertWrapper', componentId: 'sc-17a2h08-0' },
        )(
          [
            'background-color:',
            ';border-radius:2px;color:',
            ';padding:12px;position:relative;',
            ';',
          ],
          function(props) {
            return Alert_ComponentTheme[props.type].backgroundColor;
          },
          function(props) {
            return Alert_ComponentTheme[props.type].color;
          },
          theme.a.mixins.shadow(2),
        ),
        AlertIcon = styled_components_browser_cjs_default()(Icon.a).withConfig({
          displayName: 'Alert__AlertIcon',
          componentId: 'sc-17a2h08-1',
        })(
          ['', ' left:12px;'],
          '\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n',
        ),
        AlertMessage = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Alert__AlertMessage',
          componentId: 'sc-17a2h08-2',
        })(['display:inline-block;margin-left:35px;margin-right:35px;']),
        AlertTitle = styled_components_browser_cjs_default.a.strong.withConfig({
          displayName: 'Alert__AlertTitle',
          componentId: 'sc-17a2h08-3',
        })(['display:block;']),
        AlertClose = styled_components_browser_cjs_default()(Icon.a).withConfig(
          { displayName: 'Alert__AlertClose', componentId: 'sc-17a2h08-4' },
        )(
          [
            '&&{',
            ' background-color:',
            ';border-radius:50%;cursor:pointer;font-size:12px;height:17px;line-height:17px;right:12px;text-align:center;width:17px;}',
          ],
          '\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n',
          theme.a.mixins.hexToRgba(deprecated.a.WHITE, 0.5),
        ),
        Alert_Alert = (function(_Component) {
          function Alert(props) {
            var _this, self, call;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Alert),
              (self = this),
              (_this =
                !(call = _getPrototypeOf(Alert).call(this, props)) ||
                ('object' !== _typeof(call) && 'function' != typeof call)
                  ? _assertThisInitialized(self)
                  : call),
              _initialiseProps.call(
                _assertThisInitialized(_assertThisInitialized(_this)),
              );
            var _this$props = _this.props,
              show = _this$props.show,
              duration = _this$props.duration;
            return (
              (_this.state = { show: show }),
              duration && _this.handleAutoDestruction(),
              _this
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Alert, react['Component']),
            (Constructor = Alert),
            (protoProps = [
              {
                key: 'render',
                value: function() {
                  var _this$props2 = this.props,
                    type = _this$props2.type,
                    _this$props2$message = _this$props2.message,
                    title = _this$props2$message.title,
                    text = _this$props2$message.text;
                  return this.state.show
                    ? react_default.a.createElement(
                        styled_components_browser_cjs.ThemeProvider,
                        { theme: theme.a },
                        react_default.a.createElement(
                          AlertWrapper,
                          { type: type },
                          react_default.a.createElement(AlertIcon, {
                            name: Alert_ComponentTheme[type].icon,
                          }),
                          react_default.a.createElement(
                            AlertMessage,
                            null,
                            react_default.a.createElement(
                              AlertTitle,
                              null,
                              title,
                            ),
                            text,
                          ),
                          react_default.a.createElement(AlertClose, {
                            title: 'Fechar',
                            skin: Alert_ComponentTheme[type].backgroundColor,
                            name: 'close',
                            onClick: this.hideModal,
                          }),
                        ),
                      )
                    : null;
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Alert
          );
          var Constructor, protoProps, staticProps;
        })(),
        _initialiseProps = function() {
          var _this2 = this;
          (this.hideModal = function() {
            var onClose = _this2.props.onClose;
            _this2.setState({ show: !1 }, onClose ? onClose() : null);
          }),
            (this.handleAutoDestruction = function() {
              var duration = _this2.props.duration;
              setTimeout(function() {
                _this2.hideModal();
              }, 1e3 * duration);
            });
        };
      (AlertClose.displayName = 'AlertClose'),
        (Alert_Alert.defaultProps = {
          type: 'info',
          message: { title: 'Simple', text: 'This is a dummy' },
          duration: 0,
          show: !0,
          onClose: function() {},
        }),
        (Alert_Alert.propTypes = {
          type: prop_types_default.a.oneOf([
            'info',
            'success',
            'warning',
            'error',
          ]),
          duration: prop_types_default.a.number,
          show: prop_types_default.a.bool,
          message: prop_types_default.a.shape({
            title: prop_types_default.a.string,
            text: prop_types_default.a.string,
          }),
          onClose: prop_types_default.a.func,
        });
      var components_Alert_Alert = Alert_Alert;
      (Alert_Alert.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'hideModal',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handleAutoDestruction',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Alert',
        props: {
          type: {
            defaultValue: { value: "'info'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'info'", computed: !1 },
                { value: "'success'", computed: !1 },
                { value: "'warning'", computed: !1 },
                { value: "'error'", computed: !1 },
              ],
            },
            required: !1,
            description: 'alert type',
          },
          message: {
            defaultValue: {
              value:
                "{\r\n  title: 'Simple',\r\n  text: 'This is a dummy',\r\n}",
              computed: !1,
            },
            type: {
              name: 'shape',
              value: {
                title: {
                  name: 'string',
                  description: 'message title',
                  required: !1,
                },
                text: {
                  name: 'string',
                  description: 'message text',
                  required: !1,
                },
              },
            },
            required: !1,
            description: 'object with message details',
          },
          duration: {
            defaultValue: { value: '0', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: 'time in seconds that Alert is visible',
          },
          show: {
            defaultValue: { value: 'true', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: 'it says to component if it should appear or not',
          },
          onClose: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: 'callback function',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Alert\\Alert.jsx'] = {
            name: 'Alert',
            docgenInfo: Alert_Alert.__docgenInfo,
            path: 'components\\Alert\\Alert.jsx',
          });
      __webpack_exports__.a = components_Alert_Alert;
    },
    182: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(72),
        __webpack_require__(75),
        __webpack_require__(14),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(138),
        __webpack_require__(137);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        lib = __webpack_require__(456),
        lib_default = __webpack_require__.n(lib),
        deprecated = (__webpack_require__(1890), __webpack_require__(8)),
        Tooltip = __webpack_require__(325),
        theme = __webpack_require__(25);
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var StyledSlider = styled_components_browser_cjs_default()(
          lib_default.a,
        ).withConfig({
          displayName: 'Slider__StyledSlider',
          componentId: 'sc-1xvfbkj-0',
        })(
          [
            '&.rc-slider{height:50px;}&.rc-slider-disabled{.rc-slider-handle{background-color:',
            ';}background-color:transparent;}.rc-slider-handle{border:none;box-shadow:0 0 5px ',
            ';margin-left:-10px;width:',
            ';height:',
            ';transition:border 0.1s,box-shadow 0.1s;',
            '}.rc-slider-mark{width:100%;height:18px;overflow:hidden;.rc-slider-mark-text:first-child{left:1% !important;}.rc-slider-mark-text:last-child{left:99% !important;}}.rc-slider-rail,.rc-slider-track{height:8px;}.rc-slider-track{background-color:',
            ';}.rc-slider-mark{top:26px;}.rc-slider-dot{display:none;}}',
          ],
          deprecated.a.SECONDARY[500],
          theme.a.mixins.hexToRgba(deprecated.a.SECONDARY[600], 0.3),
          function(_ref) {
            return _ref.disabled ? '15px' : '20px';
          },
          function(_ref2) {
            return _ref2.disabled ? '15px' : '20px';
          },
          function(_ref3) {
            return (
              !_ref3.disabled &&
              '&:hover {\n        box-shadow: 0 0 1px 5px '
                .concat(
                  theme.a.mixins.hexToRgba(deprecated.a.PRIMARY[500], 0.5),
                  ';\n      }\n\n      &:active {\n        border: 1px solid ',
                )
                .concat(
                  deprecated.a.PRIMARY[500],
                  ';\n        box-shadow: none;\n      }\n      ',
                )
            );
          },
          deprecated.a.PRIMARY[500],
        ),
        OriginalHandle = lib_default.a.Handle,
        Handle = function(_ref4) {
          var value = _ref4.value,
            offset = _ref4.offset,
            restProps = (_ref4.dragging,
            _objectWithoutProperties(_ref4, ['value', 'offset', 'dragging']));
          return react_default.a.createElement(
            Tooltip.a,
            { slider: !0, offset: offset.toString(), text: value.toString() },
            react_default.a.createElement(
              OriginalHandle,
              _extends({ value: value, offset: offset }, restProps),
            ),
          );
        };
      (Handle.defaultProps = { value: 0, offset: '', dragging: !1 }),
        (Handle.propTypes = {
          value: prop_types_default.a.number,
          offset: prop_types_default.a.string,
          dragging: prop_types_default.a.bool,
        });
      var Slider = function(_ref5) {
        var tooltip = _ref5.tooltip,
          marks = _ref5.marks,
          sliderProps = (function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null == arguments[i] ? {} : arguments[i],
                ownKeys = Object.keys(source);
              'function' == typeof Object.getOwnPropertySymbols &&
                (ownKeys = ownKeys.concat(
                  Object.getOwnPropertySymbols(source).filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(
                      source,
                      sym,
                    ).enumerable;
                  }),
                )),
                ownKeys.forEach(function(key) {
                  _defineProperty(target, key, source[key]);
                });
            }
            return target;
          })(
            {
              min: _ref5.min,
              max: _ref5.max,
              step: _ref5.step,
              disabled: _ref5.disabled,
            },
            _objectWithoutProperties(_ref5, [
              'tooltip',
              'marks',
              'min',
              'max',
              'step',
              'disabled',
            ]),
          );
        return (
          tooltip && (sliderProps.handle = Handle),
          marks && (sliderProps.marks = marks),
          react_default.a.createElement(StyledSlider, sliderProps)
        );
      };
      (Slider.defaultProps = {
        step: 1,
        disabled: !1,
        tooltip: !1,
        marks: {},
        onChange: function() {},
        onBeforeChange: function() {},
        onAfterChange: function() {},
        onClick: function() {},
      }),
        (Slider.propTypes = {
          min: prop_types_default.a.number.isRequired,
          max: prop_types_default.a.number.isRequired,
          step: prop_types_default.a.number,
          disabled: prop_types_default.a.bool,
          tooltip: prop_types_default.a.bool,
          marks: prop_types_default.a.object,
          onChange: prop_types_default.a.func,
          onBeforeChange: prop_types_default.a.func,
          onAfterChange: prop_types_default.a.func,
          onClick: prop_types_default.a.func,
        });
      var Slider_Slider = Slider;
      (Slider.__docgenInfo = {
        description:
          'Sliders allow users to make selections from a range of values.',
        methods: [],
        displayName: 'Slider',
        props: {
          step: {
            defaultValue: { value: '1', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: 'Value on how much increment the value on drag event',
          },
          disabled: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: 'Disable slider',
          },
          tooltip: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description:
              'Shows the value while dragging on a tooltip above the slider',
          },
          marks: {
            defaultValue: { value: '{}', computed: !1 },
            type: { name: 'object' },
            required: !1,
            description: 'Dots on specified values to snap the drag on Slider',
          },
          onChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description:
              'Triggers a function on OnChange event, it returns the current value',
          },
          onBeforeChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: 'Triggers a function before OnChange event',
          },
          onAfterChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: 'Triggers a function after OnChange event',
          },
          onClick: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: 'Triggers a function on Onclick event',
          },
          min: {
            type: { name: 'number' },
            required: !0,
            description: 'Minimum value allowed',
          },
          max: {
            type: { name: 'number' },
            required: !0,
            description: 'Maximum value allowed',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Slider\\Slider.jsx'] = {
            name: 'Slider',
            docgenInfo: Slider.__docgenInfo,
            path: 'components\\Slider\\Slider.jsx',
          });
      __webpack_exports__.a = Slider_Slider;
    },
    183: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26);
      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          8,
        ),
        _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(768),
        _Button_skins__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(240);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var CANCEL_SKIN = Object(_Button_skins__WEBPACK_IMPORTED_MODULE_10__.a)({
          skin: 'cancel',
        }),
        PRIMARY_SKIN = Object(_Button_skins__WEBPACK_IMPORTED_MODULE_10__.a)({
          skin: 'primary',
        }),
        commonAttr_height = '24px',
        commonAttr_width = '24px',
        StyledLabel = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(
          _shared__WEBPACK_IMPORTED_MODULE_9__.a,
        ).withConfig({
          displayName: 'Radio__StyledLabel',
          componentId: 'sc-1diyv3n-0',
        })(['cursor:inherit;display:inline-block;', ';'], function(props) {
          var unselected = CANCEL_SKIN.unselected,
            selected = CANCEL_SKIN.selected,
            disabled = CANCEL_SKIN.disabled;
          return props.boxed
            ? '\n      padding: 10px;\n      background-color: '
                .concat(
                  props.disabled ? disabled.background : unselected.background,
                  ';\n      border: 1px solid ',
                )
                .concat(
                  props.disabled ? disabled.border : unselected.border,
                  ';\n      color: ',
                )
                .concat(
                  props.disabled ? disabled.color : unselected.color,
                  ';\n      font-weight: ',
                )
                .concat(
                  props.disabled ? disabled.fontWeight : unselected.fontWeight,
                  ';\n\n      &:active {\n        background-color: ',
                )
                .concat(selected.background, ';\n        border-color: ')
                .concat(selected.border, ';\n        color: ')
                .concat(selected.color, ';\n      }\n    ')
            : "\n    &:before {\n      content: ' ';\n      border: 1px solid\n        "
                .concat(
                  props.disabled
                    ? _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                        .SECONDARY[100]
                    : _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                        .SECONDARY[300],
                  ';\n      border-radius: 50%;\n      display: inline-block;\n      height: ',
                )
                .concat(commonAttr_height, ';\n      width: ')
                .concat(
                  commonAttr_width,
                  ';\n      margin-left: -4px;\n      margin-top: -4px;\n      margin-right: 5px;\n\n      ',
                )
                .concat(
                  props.checked && 'box-shadow: inset 0px 0px 0 3px white;',
                  '\n      cursor: inherit;\n      position: relative;\n      top: 6px;\n    }\n\n    &:hover:before {\n      border: 1px solid\n        ',
                )
                .concat(
                  props.disabled
                    ? _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                        .SECONDARY[100]
                    : _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                        .PRIMARY[500],
                  ';\n      box-shadow: inset 0 0 0 3px ',
                )
                .concat(
                  _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a.WHITE,
                  ';\n    }\n  ',
                );
        }),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig(
          { displayName: 'Radio__Wrapper', componentId: 'sc-1diyv3n-1' },
        )(
          [
            'cursor:pointer;margin-right:',
            ';&:first-child ',
            '{border-right:none;}',
          ],
          function(_ref) {
            return _ref.boxed ? '0' : '10px';
          },
          StyledLabel,
        ),
        StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.input.withConfig(
          { displayName: 'Radio__StyledInput', componentId: 'sc-1diyv3n-2' },
        )(['display:none;', ';'], function(props) {
          var selected = PRIMARY_SKIN.selected,
            disabled = PRIMARY_SKIN.disabled;
          return props.boxed
            ? Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(
                [
                  '&:checked + ',
                  '{background-color:',
                  ';border-color:',
                  ';color:',
                  ';}&:disabled:checked + ',
                  '{background-color:',
                  ';border-color:',
                  ';color:',
                  ';}',
                ],
                StyledLabel,
                selected.background,
                selected.border,
                selected.color,
                StyledLabel,
                disabled.background,
                disabled.border,
                disabled.color,
              )
            : Object(styled_components__WEBPACK_IMPORTED_MODULE_7__.css)(
                [
                  '&:checked + ',
                  ':before{background-color:',
                  ';box-shadow:inset 0 0 0 3px ',
                  ';}&:disabled:checked + ',
                  ':before{background-color:',
                  ';box-shadow:inset 0 0 0 3px ',
                  ';}',
                ],
                StyledLabel,
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a.PRIMARY[500],
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a.WHITE,
                StyledLabel,
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a
                  .SECONDARY[100],
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_8__.a.WHITE,
              );
        }),
        Radio = function(_ref2) {
          var id = _ref2.id,
            label = _ref2.label,
            _onChange = _ref2.onChange,
            disabled = _ref2.disabled,
            rest = _objectWithoutProperties(_ref2, [
              'id',
              'label',
              'onChange',
              'disabled',
            ]);
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
            Wrapper,
            rest,
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              StyledInput,
              _extends({}, rest, {
                id: id,
                type: 'radio',
                disabled: disabled,
                onChange: function(e) {
                  return _onChange(e, { checked: e.target.value });
                },
              }),
            ),
            react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
              StyledLabel,
              _extends({}, rest, { disabled: disabled, htmlFor: id }),
              label,
            ),
          );
        };
      (Radio.displayName = 'Radio'),
        (Radio.defaultProps = { onChange: function() {}, disabled: !1 }),
        (Radio.propTypes = {
          id:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
          value:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
          name:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
          disabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
          label:
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
          onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
        }),
        (__webpack_exports__.a = Radio),
        (Radio.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Radio',
          props: {
            onChange: {
              defaultValue: { value: '() => {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: 'On change event handle function',
            },
            disabled: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: '',
            },
            id: {
              type: { name: 'string' },
              required: !0,
              description: 'Id to associate with label',
            },
            value: { type: { name: 'string' }, required: !0, description: '' },
            name: { type: { name: 'string' }, required: !0, description: '' },
            label: {
              type: { name: 'string' },
              required: !0,
              description: 'Label that will be displayed on browser',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Radio\\Radio.jsx'] = {
            name: 'Radio',
            docgenInfo: Radio.__docgenInfo,
            path: 'components\\Radio\\Radio.jsx',
          });
    },
    1892: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55),
            skinsExample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'Skins',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      null,
                      'Default',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { skin: 'stroked' },
                      'Stroked',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { skin: 'inverted' },
                      'Inverted',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { skin: 'blue' },
                      'Blue',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { skin: 'success' },
                      'Success',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { skin: 'warning' },
                      'Warning',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { skin: 'error' },
                      'Error',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { skin: 'blue-text' },
                      'Blue Text',
                    ),
                  ),
                  code:
                    '<Tag>Default</Tag>\n<Tag skin="stroked">Stroked</Tag>\n<Tag skin="inverted">Inverted</Tag>\n<Tag skin="blue">Blue</Tag>\n<Tag skin="success">Success</Tag>\n<Tag skin="warning">Warning</Tag>\n<Tag skin="error">Error</Tag>\n<Tag skin="blue-text">Blue Text</Tag>',
                },
              ),
            ),
            closableExample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'Closables',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0 },
                      'Default',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0, skin: 'stroked' },
                      'Stroked',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0, skin: 'inverted' },
                      'Inverted',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0, skin: 'blue' },
                      'Blue',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0, skin: 'success' },
                      'Success',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0, skin: 'warning' },
                      'Warning',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0, skin: 'error' },
                      'Error',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { closable: !0, skin: 'blue-text' },
                      'Blue Text',
                    ),
                  ),
                  code:
                    '<Tag closable>Default</Tag>\n<Tag closable skin="stroked">Stroked</Tag>\n<Tag closable skin="inverted">Inverted</Tag>\n<Tag closable skin="blue">Blue</Tag>\n<Tag closable skin="success">Success</Tag>\n<Tag closable skin="warning">Warning</Tag>\n<Tag closable skin="error">Error</Tag>\n<Tag closable skin="blue-text">Blue Text</Tag>',
                },
              ),
            ),
            sizesExample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Title,
                null,
                'Sizes',
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Example,
                {
                  component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { size: 'small' },
                      'Small',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      null,
                      'Medium (Default)',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components__WEBPACK_IMPORTED_MODULE_3__.a,
                      { size: 'large' },
                      'Large',
                    ),
                  ),
                  code:
                    '<Tag skin="small">Small</Tag>\n<Tag>Medium (Default)</Tag>\n<Tag skin="large">Large</Tag>',
                },
              ),
            ),
            exampleTab = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
              { title: 'Examples' },
              skinsExample,
              closableExample,
              sizesExample,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '16. Tag',
            module,
          ).add('Tag', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components__WEBPACK_IMPORTED_MODULE_3__.a,
                additionalTabs: exampleTab,
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1893: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(21),
            __webpack_require__(22),
            __webpack_require__(26),
            __webpack_require__(47);
          var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_4__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              3,
            ),
            _components_TextMask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              180,
            ),
            _components_TextMask_TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
              148,
            ),
            examples = {
              CEP: {
                code:
                  'Alameda Juari, 262 - Barueri, SP - <TextMask.CEP>06460090</TextMask.CEP>',
                component: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
                  null,
                  'Alameda Juari, 262 - Barueri, SP - ',
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _components_TextMask__WEBPACK_IMPORTED_MODULE_7__.a.CEP,
                    null,
                    '06460090',
                  ),
                ),
              },
              CPNJ: {
                code: 'CNPJ: <TextMask.CNPJ text="03753088000100" />',
                component: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
                  null,
                  'CNPJ: ',
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _components_TextMask__WEBPACK_IMPORTED_MODULE_7__.a.CNPJ,
                    { text: '03753088000100' },
                  ),
                ),
              },
              'Card Number': {
                code:
                  'Card Number:\n<TextMask mask={[/\\d/, /\\d/, /\\d/, /\\d/, " ", /\\d/, /\\d/, /\\d/, /\\d/, " ", /\\d/, /\\d/, /\\d/, /\\d/, " ", /\\d/, /\\d/, /\\d/, /\\d/]}>4024007113535149</TextMask>',
                component: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _components_TextMask__WEBPACK_IMPORTED_MODULE_7__.a,
                    {
                      mask: [
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        ' ',
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        ' ',
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                        ' ',
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                      ],
                    },
                    '4024007113535149',
                  ),
                ),
              },
              CPF: {
                code:
                  '// works with formated text too!\n<TextMask.CPF>301.703.170-56</TextMask.CPF>',
                component: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _components_TextMask__WEBPACK_IMPORTED_MODULE_7__.a.CPF,
                    null,
                    '301.703.170-56',
                  ),
                ),
              },
            };
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_5__.storiesOf)(
            '7. Mask',
            module,
          ).add('Text', function() {
            return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment,
              null,
              react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Heading,
                { name: 'TextMask' },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.TabbedView,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Tab,
                    { title: 'Usage' },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.HowToImport,
                      { importModules: 'TextMask' },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'p',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        'br',
                        null,
                      ),
                      'This is a component to render properly the given text:',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.CodeExample,
                      {
                        showTitle: !1,
                        code:
                          '<TextMask text="06460090" mask={[[/\\d/, /\\d/, /\\d/, /\\d/, /\\d/, \'-\', /\\d/, /\\d/, /\\d/]]} />\n<TextMask.CEP>06460090</TextMask.CEP>\n<TextMask.CEP text="06460090" />',
                      },
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'br',
                      null,
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'p',
                      null,
                      'All examples above will renders this output:',
                      ' ',
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _components_TextMask__WEBPACK_IMPORTED_MODULE_7__.a.CEP,
                        null,
                        '06460090',
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'p',
                      null,
                      'Like Input, you can provide your own mask using ',
                      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        'code',
                        null,
                        'mask',
                      ),
                      ' ',
                      'property or use one of the availables:',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      'ul',
                      null,
                      Object.keys(
                        _components_TextMask_TextMaskTypes__WEBPACK_IMPORTED_MODULE_8__.a,
                      ).map(function(type) {
                        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                          'li',
                          { key: type },
                          type,
                          ': ',
                          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                            'code',
                            null,
                            '<TextMast.'.concat(type, ' />'),
                          ),
                          ' ',
                        );
                      }),
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Tab,
                    { title: 'API' },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                      _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.AutoPropsApi,
                      {
                        component:
                          _components_TextMask__WEBPACK_IMPORTED_MODULE_7__.a,
                      },
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Tab,
                    { title: 'Examples' },
                    Object.keys(examples).map(function(example) {
                      var _examples$example = examples[example],
                        code = _examples$example.code,
                        component = _examples$example.component;
                      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Example,
                        {
                          title: example,
                          key: example,
                          code: code,
                          component: component,
                        },
                      );
                    }),
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1894: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              763,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Textarea', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Textarea__WEBPACK_IMPORTED_MODULE_3__.a,
                componentProps: {
                  id: 'text-area',
                  name: 'textarea',
                  label: 'Text area',
                },
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1895: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              765,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '3. Forms',
            module,
          ).add('Toggle', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              { component: _components_Toggle__WEBPACK_IMPORTED_MODULE_3__.a },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1896: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _components_Tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              325,
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '8. Tooltip',
            module,
          ).add('Basic', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.AutoExample,
              {
                component: _components_Tooltip__WEBPACK_IMPORTED_MODULE_3__.a,
                componentProps: { children: 'Hover me' },
              },
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1897: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              3,
            ),
            _Usage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(757),
            _Components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(759);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '1. Foundation',
            module,
          ).add('Typography', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Heading,
              { title: 'Typography' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Usage__WEBPACK_IMPORTED_MODULE_3__.a,
                    null,
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_2__.Tab,
                  { title: 'Components' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _Components__WEBPACK_IMPORTED_MODULE_4__.a,
                    null,
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1898: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              11,
            ),
            _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              95,
            ),
            _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
              _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_2__,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              3,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              44,
            ),
            _components_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              12,
            ),
            _components_Wizard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              211,
            ),
            _components_Wizard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              68,
            ),
            StepExample = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Wizard__WEBPACK_IMPORTED_MODULE_6__.a,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                { title: 'Criação de conta', icon: 'person', status: 'active' },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                { title: 'Plano e forma de pagamento', icon: 'credit_card' },
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                { title: 'Preencher o currículo', icon: 'description' },
              ),
            );
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            '11. Wizard',
            module,
          ).add('Wizard', function() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Heading,
              { name: 'Wizard' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.TabbedView,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                  { title: 'Usage' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.HowToImport,
                    { importModules: 'Wizard, Step' },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    'We provide two components to use Wizard: ',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'code',
                      null,
                      '<Wizard>',
                    ),
                    ' and',
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'code',
                      null,
                      '<Step title="Example">',
                    ),
                    ' must be used together.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    'The ',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'code',
                      null,
                      '<Step>',
                    ),
                    ' must have a required title prop and his current status prop, that can be one of:',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'ul',
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'li',
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'code',
                        null,
                        ' ',
                      ),
                      ' ',
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        'small',
                        null,
                        '(empty string)',
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'li',
                      null,
                      'active',
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      'li',
                      null,
                      'done',
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    'You can pass an icon to be displayed with the step component, see the example below:',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'p',
                    null,
                    'If you use icon you need to import the',
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_2___default.a,
                      { kind: '1. Foundation', story: 'Typography' },
                      'Typography',
                    ),
                    ' ',
                    'css file.',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'small',
                    null,
                    'You can see the list of enable icons',
                    ' ',
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_2___default.a,
                      { kind: '1. Foundation', story: 'Icons' },
                      'here',
                    ),
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h3',
                    null,
                    'A simple 3 steps component',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Grid__WEBPACK_IMPORTED_MODULE_4__.a,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                      { desktop: 4, phone: 12 },
                      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeExample,
                        { component: StepExample },
                      ),
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      _components_Grid__WEBPACK_IMPORTED_MODULE_5__.a,
                      { desktop: 8, phone: 12 },
                      StepExample,
                    ),
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                  { title: 'API' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                    {
                      component:
                        _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                      title: 'Step',
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.AutoPropsApi,
                    {
                      component:
                        _components_Wizard__WEBPACK_IMPORTED_MODULE_6__.a,
                      title: 'Wizard',
                    },
                  ),
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                  { title: 'Examples' },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h3',
                    null,
                    'First step active',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Example,
                    {
                      component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Wizard__WEBPACK_IMPORTED_MODULE_6__.a,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Criação de conta',
                            icon: 'person',
                            status: 'active',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Plano e forma de pagamento',
                            icon: 'credit_card',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Preencher o currículo',
                            icon: 'description',
                          },
                        ),
                      ),
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h3',
                    null,
                    'First step done, second step active',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Example,
                    {
                      component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Wizard__WEBPACK_IMPORTED_MODULE_6__.a,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Criação de conta',
                            icon: 'person',
                            status: 'done',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Plano e forma de pagamento',
                            status: 'active',
                            icon: 'credit_card',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Preencher o currículo',
                            icon: 'description',
                          },
                        ),
                      ),
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h3',
                    null,
                    'First and second steps done, third step active',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Example,
                    {
                      component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Wizard__WEBPACK_IMPORTED_MODULE_6__.a,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Criação de conta',
                            icon: 'person',
                            status: 'done',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Plano e forma de pagamento',
                            status: 'done',
                            icon: 'credit_card',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Preencher o currículo',
                            status: 'active',
                            icon: 'description',
                          },
                        ),
                      ),
                    },
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    'h3',
                    null,
                    'All steps done',
                  ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Example,
                    {
                      component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        _components_Wizard__WEBPACK_IMPORTED_MODULE_6__.a,
                        null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Criação de conta',
                            icon: 'person',
                            status: 'done',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Plano e forma de pagamento',
                            status: 'done',
                            icon: 'credit_card',
                          },
                        ),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                          _components_Wizard__WEBPACK_IMPORTED_MODULE_7__.a,
                          {
                            title: 'Preencher o currículo',
                            status: 'done',
                            icon: 'description',
                          },
                        ),
                      ),
                    },
                  ),
                ),
              ),
            );
          });
        }.call(this, __webpack_require__(32)(module));
    },
    1899: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _Colors_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          8,
        );
      __webpack_exports__.a = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        { displayName: 'ErrorMessage', componentId: 'sc-19jcdrm-0' },
      )(
        ['color:', ';font-size:12px;margin:5px 0;'],
        _Colors_deprecated__WEBPACK_IMPORTED_MODULE_1__.a.DANGER[500],
      );
    },
    1900: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_cjs = (__webpack_require__(135),
        __webpack_require__(136),
        __webpack_require__(4));
      function _templateObject() {
        var strings,
          raw,
          data = ((strings = [
            "\n  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n",
          ]),
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            }),
          ));
        return (
          (_templateObject = function() {
            return data;
          }),
          data
        );
      }
      var sub_components_IconFont = Object(
          styled_components_browser_cjs.createGlobalStyle,
        )(_templateObject()),
        Colors = __webpack_require__(10);
      function Typography_templateObject() {
        var strings,
          raw,
          data = ((strings = [
            "\n  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans');\n\n  * {\n    font-family: 'Nunito Sans', sans-serif;\n    line-height: 1.5;\n  }\n\n  body {\n    font-size: 16px;\n    letter-spacing: 0.2px;\n    color: ",
            '\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    font-weight: normal;\n  }\n\n  h1 {\n    letter-spacing: 0.7px;\n    font-size: 48px;\n  }\n\n  h2 {\n    font-size: 36px;\n    letter-spacing: 0.5px;\n  }\n\n  h3 {\n    font-size: 28px;\n    letter-spacing: 0.4px;\n  }\n\n  h4 {\n    font-size: 24px;\n    letter-spacing: 0.4px;\n  }\n\n  h5 {\n    font-size: 20px;\n    letter-spacing: 0.3px;\n  }\n\n  h6 {\n    font-size: 18px;\n    letter-spacing: 0.3px;\n  }\n\n  ul, ol {\n    margin: 0;\n    padding-left: 18px;\n  }\n',
          ]),
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            }),
          ));
        return (
          (Typography_templateObject = function() {
            return data;
          }),
          data
        );
      }
      var sub_components_Typography = Object(
          styled_components_browser_cjs.createGlobalStyle,
        )(Typography_templateObject(), Colors.a.BLACK[700]),
        breakpoints = (__webpack_require__(192), __webpack_require__(54));
      function CSSVariables_templateObject() {
        var strings,
          raw,
          data = ((strings = [
            '\n  :root {\n    --gutter: 16px;\n  }\n\n  @media (min-width: ',
            'px) {\n    :root {\n      --gutter: 24px;\n    }\n  }\n',
          ]),
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            }),
          ));
        return (
          (CSSVariables_templateObject = function() {
            return data;
          }),
          data
        );
      }
      var CSSVariables = Object(
          styled_components_browser_cjs.createGlobalStyle,
        )(CSSVariables_templateObject(), breakpoints.a.small.width),
        GlobalStyle = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(sub_components_Typography, null),
            react_default.a.createElement(sub_components_IconFont, null),
            react_default.a.createElement(CSSVariables, null),
          );
        };
      __webpack_exports__.a = GlobalStyle;
      (GlobalStyle.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'GlobalStyle',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\GlobalStyle\\GlobalStyle.jsx'
          ] = {
            name: 'GlobalStyle',
            docgenInfo: GlobalStyle.__docgenInfo,
            path: 'components\\GlobalStyle\\GlobalStyle.jsx',
          });
    },
    208: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(59);
      var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_6__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          743,
        ),
        _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8__,
        ),
        _shared_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(237);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var Icon = function(_ref) {
        var name = _ref.name,
          skin = _ref.skin,
          props = _objectWithoutProperties(_ref, ['name', 'skin']);
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(
          _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_8___default.a,
          _extends({}, props, { style: { color: skin } }),
          name,
        );
      };
      (Icon.defaultProps = { style: {}, skin: '' }),
        (Icon.propTypes = {
          name: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(
            _shared_icons__WEBPACK_IMPORTED_MODULE_9__.a,
          ).isRequired,
          style: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.instanceOf(
            Object,
          ),
          skin: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        }),
        (__webpack_exports__.a = Icon),
        (Icon.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Icon',
          props: {
            style: {
              defaultValue: { value: '{}', computed: !1 },
              type: { name: 'instanceOf', value: 'Object' },
              required: !1,
              description: '',
            },
            skin: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            name: {
              type: { name: 'enum', computed: !0, value: 'icons' },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Icon\\Icon.jsx'] = {
            name: 'Icon',
            docgenInfo: Icon.__docgenInfo,
            path: 'components\\Icon\\Icon.jsx',
          });
    },
    209: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_5___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_5__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_6___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_6__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_7__,
        ),
        _Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(177),
        _SubHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(210);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig(
        { displayName: 'Content__ContentBox', componentId: 'sc-1fmj11p-0' },
      )(['display:flex;flex-direction:column;']);
      ContentBox.displayName = 'Content';
      var Content = (function(_React$Component) {
        function Content() {
          var _getPrototypeOf2, _temp, _this;
          !(function(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, Content);
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return _possibleConstructorReturn(
            _this,
            ((_temp = _this = _possibleConstructorReturn(
              this,
              (_getPrototypeOf2 = _getPrototypeOf(Content)).call.apply(
                _getPrototypeOf2,
                [this].concat(args),
              ),
            )),
            (_this._renderContent = function(content) {
              var _this$props = _this.props,
                propsHeader = _this$props.header,
                propsSubHeader = _this$props.subheader;
              if ('string' == typeof content)
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _Header__WEBPACK_IMPORTED_MODULE_8__.a,
                  null,
                  content,
                );
              var _content$header = content.header,
                header =
                  void 0 === _content$header ? propsHeader : _content$header,
                _content$subheader = content.subheader,
                subheader =
                  void 0 === _content$subheader
                    ? propsSubHeader
                    : _content$subheader;
              return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment,
                null,
                react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  _Header__WEBPACK_IMPORTED_MODULE_8__.a,
                  null,
                  header,
                ),
                subheader &&
                  react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                    _SubHeader__WEBPACK_IMPORTED_MODULE_9__.a,
                    null,
                    subheader,
                  ),
              );
            }),
            _temp),
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Content, react__WEBPACK_IMPORTED_MODULE_5___default.a.Component),
          (Constructor = Content),
          (protoProps = [
            {
              key: 'render',
              value: function() {
                var _this$props2 = this.props,
                  content = _this$props2.content,
                  children = _this$props2.children;
                return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(
                  ContentBox,
                  null,
                  children || this._renderContent(content),
                );
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Content
        );
        var Constructor, protoProps, staticProps;
      })();
      (Content.defaultProps = {
        subheader: '',
        header: '',
        content: {},
        children: null,
      }),
        (Content.propTypes = {
          header: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          subheader: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
          content: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
              header: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
              subheader:
                prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
            }),
          ]),
          children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
              ),
              prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node,
            ],
          ),
        }),
        (Content.displayName = 'List.Content'),
        (__webpack_exports__.a = Content),
        (Content.__docgenInfo = {
          description: '',
          methods: [
            {
              name: '_renderContent',
              docblock: null,
              modifiers: [],
              params: [{ name: 'content', type: null }],
              returns: null,
            },
          ],
          displayName: 'List.Content',
          props: {
            subheader: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            header: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            content: {
              defaultValue: { value: '{}', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'string' },
                  {
                    name: 'shape',
                    value: {
                      header: { name: 'string', required: !1 },
                      subheader: { name: 'string', required: !1 },
                    },
                  },
                ],
              },
              required: !1,
              description: '',
            },
            children: {
              defaultValue: { value: 'null', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'node' } },
                  { name: 'node' },
                ],
              },
              required: !1,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\List\\sub-components\\Content.jsx'
          ] = {
            name: 'Content',
            docgenInfo: Content.__docgenInfo,
            path: 'components\\List\\sub-components\\Content.jsx',
          });
    },
    210: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4),
        Description = __webpack_require__
          .n(styled_components__WEBPACK_IMPORTED_MODULE_2__)
          .a.span.withConfig({
            displayName: 'SubHeader__Description',
            componentId: 'gatzne-0',
          })(['font-size:12px;']);
      Description.displayName = 'SubHeader';
      var SubHeader = function(_ref) {
        var children = _ref.children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Description,
          null,
          children,
        );
      };
      (SubHeader.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
        ]).isRequired,
      }),
        (SubHeader.displayName = 'List.SubHeader'),
        (__webpack_exports__.a = SubHeader),
        (SubHeader.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'List.SubHeader',
          props: {
            children: {
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'node' } },
                  { name: 'node' },
                ],
              },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\List\\sub-components\\SubHeader.jsx'
          ] = {
            name: 'SubHeader',
            docgenInfo: SubHeader.__docgenInfo,
            path: 'components\\List\\sub-components\\SubHeader.jsx',
          });
    },
    211: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_2__,
        ),
        Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig(
          { displayName: 'Wizard__Wrapper', componentId: 'bbfhzr-0' },
        )(['width:100%;']),
        ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig(
          { displayName: 'Wizard__ProgressBar', componentId: 'bbfhzr-1' },
        )(['padding:0;display:flex;justify-content:space-between;']),
        Wizard = function(_ref) {
          var children = _ref.children;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Wrapper,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              ProgressBar,
              null,
              children,
            ),
          );
        };
      (Wizard.propTypes = {
        children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element,
          ),
        ]).isRequired,
      }),
        (__webpack_exports__.a = Wizard),
        (Wizard.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Wizard',
          props: {
            children: {
              type: {
                name: 'union',
                value: [
                  { name: 'element' },
                  { name: 'arrayOf', value: { name: 'element' } },
                ],
              },
              required: !0,
              description: 'Step Component list',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Wizard\\Wizard.jsx'] = {
            name: 'Wizard',
            docgenInfo: Wizard.__docgenInfo,
            path: 'components\\Wizard\\Wizard.jsx',
          });
    },
    237: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_exports__.a = [
        'access_alarm',
        'access_alarms',
        'accessibility',
        'accessible',
        'access_time',
        'account_balance',
        'account_balance_wallet',
        'account_box',
        'account_circle',
        'ac_unit',
        'adb',
        'add_alarm',
        'add_alert',
        'add_a_photo',
        'add_box',
        'add_circle',
        'add_circle_outline',
        'add',
        'add_location',
        'add_shopping_cart',
        'add_to_photos',
        'add_to_queue',
        'adjust',
        'airline_seat_flat_angled',
        'airline_seat_flat',
        'airline_seat_individual_suite',
        'airline_seat_legroom_extra',
        'airline_seat_legroom_normal',
        'airline_seat_legroom_reduced',
        'airline_seat_recline_extra',
        'airline_seat_recline_normal',
        'airplanemode_active',
        'airplanemode_inactive',
        'airplay',
        'airport_shuttle',
        'alarm_add',
        'alarm',
        'alarm_off',
        'alarm_on',
        'album',
        'all_inclusive',
        'all_out',
        'android',
        'announcement',
        'apps',
        'archive',
        'arrow_back',
        'arrow_downward',
        'arrow_drop_down_circle',
        'arrow_drop_down',
        'arrow_drop_up',
        'arrow_forward',
        'arrow_upward',
        'art_track',
        'aspect_ratio',
        'assessment',
        'assignment_ind',
        'assignment',
        'assignment_late',
        'assignment_returned',
        'assignment_return',
        'assignment_turned_in',
        'assistant',
        'assistant_photo',
        'attach_file',
        'attachment',
        'attach_money',
        'audiotrack',
        'autorenew',
        'av_timer',
        'backspace',
        'backup',
        'battery_alert',
        'battery_charging_full',
        'battery_full',
        'battery_std',
        'battery_unknown',
        'beach_access',
        'beenhere',
        'block',
        'bluetooth_audio',
        'bluetooth_connected',
        'bluetooth_disabled',
        'bluetooth',
        'bluetooth_searching',
        'blur_circular',
        'blur_linear',
        'blur_off',
        'blur_on',
        'book',
        'bookmark_border',
        'bookmark',
        'border_all',
        'border_bottom',
        'border_clear',
        'border_color',
        'border_horizontal',
        'border_inner',
        'border_left',
        'border_outer',
        'border_right',
        'border_style',
        'border_top',
        'border_vertical',
        'branding_watermark',
        'brightness_1',
        'brightness_2',
        'brightness_3',
        'brightness_4',
        'brightness_5',
        'brightness_6',
        'brightness_7',
        'brightness_auto',
        'brightness_high',
        'brightness_low',
        'brightness_medium',
        'broken_image',
        'brush',
        'bubble_chart',
        'bug_report',
        'build',
        'burst_mode',
        'business_center',
        'business',
        'cached',
        'cake',
        'call_end',
        'call',
        'call_made',
        'call_merge',
        'call_missed',
        'call_missed_outgoing',
        'call_received',
        'call_split',
        'call_to_action',
        'camera_alt',
        'camera_enhance',
        'camera_front',
        'camera',
        'camera_rear',
        'camera_roll',
        'cancel',
        'card_giftcard',
        'card_membership',
        'card_travel',
        'casino',
        'cast_connected',
        'cast',
        'center_focus_strong',
        'center_focus_weak',
        'change_history',
        'chat_bubble',
        'chat_bubble_outline',
        'chat',
        'check_box',
        'check_box_outline_blank',
        'check_circle',
        'check',
        'chevron_left',
        'chevron_right',
        'child_care',
        'child_friendly',
        'chrome_reader_mode',
        'class',
        'clear_all',
        'clear',
        'closed_caption',
        'close',
        'cloud_circle',
        'cloud_done',
        'cloud_download',
        'cloud',
        'cloud_off',
        'cloud_queue',
        'cloud_upload',
        'code',
        'collections_bookmark',
        'collections',
        'colorize',
        'color_lens',
        'comment',
        'compare_arrows',
        'compare',
        'computer',
        'confirmation_number',
        'contact_mail',
        'contact_phone',
        'contacts',
        'content_copy',
        'content_cut',
        'content_paste',
        'control_point_duplicate',
        'control_point',
        'copyright',
        'create',
        'create_new_folder',
        'credit_card',
        'crop_16_9',
        'crop_3_2',
        'crop_5_4',
        'crop_7_5',
        'crop_din',
        'crop_free',
        'crop',
        'crop_landscape',
        'crop_original',
        'crop_portrait',
        'crop_rotate',
        'crop_square',
        'dashboard',
        'data_usage',
        'date_range',
        'dehaze',
        'delete_forever',
        'delete',
        'delete_sweep',
        'description',
        'desktop_mac',
        'desktop_windows',
        'details',
        'developer_board',
        'developer_mode',
        'device_hub',
        'devices',
        'devices_other',
        'dialer_sip',
        'dialpad',
        'directions_bike',
        'directions_boat',
        'directions_bus',
        'directions_car',
        'directions',
        'directions_railway',
        'directions_run',
        'directions_subway',
        'directions_transit',
        'directions_walk',
        'disc_full',
        'dns',
        'dock',
        'domain',
        'done_all',
        'done',
        'do_not_disturb_alt',
        'do_not_disturb',
        'do_not_disturb_off',
        'do_not_disturb_on',
        'donut_large',
        'donut_small',
        'drafts',
        'drag_handle',
        'drive_eta',
        'dvr',
        'edit',
        'edit_location',
        'eject',
        'email',
        'enhanced_encryption',
        'equalizer',
        'error',
        'error_outline',
        'euro_symbol',
        'event_available',
        'event_busy',
        'event',
        'event_note',
        'event_seat',
        'ev_station',
        'exit_to_app',
        'expand_less',
        'expand_more',
        'explicit',
        'explore',
        'exposure',
        'exposure_neg_1',
        'exposure_neg_2',
        'exposure_plus_1',
        'exposure_plus_2',
        'exposure_zero',
        'extension',
        'face',
        'fast_forward',
        'fast_rewind',
        'favorite_border',
        'favorite',
        'featured_play_list',
        'featured_video',
        'feedback',
        'fiber_dvr',
        'fiber_manual_record',
        'fiber_new',
        'fiber_pin',
        'fiber_smart_record',
        'file_download',
        'file_upload',
        'filter_1',
        'filter_2',
        'filter_3',
        'filter_4',
        'filter_5',
        'filter_6',
        'filter_7',
        'filter_8',
        'filter_9',
        'filter_9_plus',
        'filter_b_and_w',
        'filter_center_focus',
        'filter_drama',
        'filter_frames',
        'filter_hdr',
        'filter',
        'filter_list',
        'filter_none',
        'filter_tilt_shift',
        'filter_vintage',
        'find_in_page',
        'find_replace',
        'fingerprint',
        'first_page',
        'fitness_center',
        'flag',
        'flare',
        'flash_auto',
        'flash_off',
        'flash_on',
        'flight',
        'flight_land',
        'flight_takeoff',
        'flip',
        'flip_to_back',
        'flip_to_front',
        'folder',
        'folder_open',
        'folder_shared',
        'folder_special',
        'font_download',
        'format_align_center',
        'format_align_justify',
        'format_align_left',
        'format_align_right',
        'format_bold',
        'format_clear',
        'format_color_fill',
        'format_color_reset',
        'format_color_text',
        'format_indent_decrease',
        'format_indent_increase',
        'format_italic',
        'format_line_spacing',
        'format_list_bulleted',
        'format_list_numbered',
        'format_paint',
        'format_quote',
        'format_shapes',
        'format_size',
        'format_strikethrough',
        'format_textdirection_l_to_r',
        'format_textdirection_r_to_l',
        'format_underlined',
        'forum',
        'forward_10',
        'forward_30',
        'forward_5',
        'forward',
        'free_breakfast',
        'fullscreen_exit',
        'fullscreen',
        'functions',
        'gamepad',
        'games',
        'gavel',
        'gesture',
        'get_app',
        'gif',
        'golf_course',
        'gps_fixed',
        'gps_not_fixed',
        'gps_off',
        'grade',
        'gradient',
        'grain',
        'graphic_eq',
        'grid_off',
        'grid_on',
        'group_add',
        'group',
        'group_work',
        'g_translate',
        'hd',
        'hdr_off',
        'hdr_on',
        'hdr_strong',
        'hdr_weak',
        'headset',
        'headset_mic',
        'healing',
        'hearing',
        'help',
        'help_outline',
        'highlight',
        'highlight_off',
        'high_quality',
        'history',
        'home',
        'hotel',
        'hot_tub',
        'hourglass_empty',
        'hourglass_full',
        'http',
        'https',
        'image_aspect_ratio',
        'image',
        'important_devices',
        'import_contacts',
        'import_export',
        'inbox',
        'indeterminate_check_box',
        'info',
        'info_outline',
        'input',
        'insert_chart',
        'insert_comment',
        'insert_drive_file',
        'insert_emoticon',
        'insert_invitation',
        'insert_link',
        'insert_photo',
        'invert_colors',
        'invert_colors_off',
        'iso',
        'keyboard_arrow_down',
        'keyboard_arrow_left',
        'keyboard_arrow_right',
        'keyboard_arrow_up',
        'keyboard_backspace',
        'keyboard_capslock',
        'keyboard_hide',
        'keyboard',
        'keyboard_return',
        'keyboard_tab',
        'keyboard_voice',
        'kitchen',
        'label',
        'label_outline',
        'landscape',
        'language',
        'laptop_chromebook',
        'laptop',
        'laptop_mac',
        'laptop_windows',
        'last_page',
        'launch',
        'layers_clear',
        'layers',
        'leak_add',
        'leak_remove',
        'lens',
        'library_add',
        'library_books',
        'library_music',
        'lightbulb_outline',
        'linear_scale',
        'line_style',
        'line_weight',
        'linked_camera',
        'link',
        'list',
        'live_help',
        'live_tv',
        'local_activity',
        'local_airport',
        'local_atm',
        'local_bar',
        'local_cafe',
        'local_car_wash',
        'local_convenience_store',
        'local_dining',
        'local_drink',
        'local_florist',
        'local_gas_station',
        'local_grocery_store',
        'local_hospital',
        'local_hotel',
        'local_laundry_service',
        'local_library',
        'local_mall',
        'local_movies',
        'local_offer',
        'local_parking',
        'local_pharmacy',
        'local_phone',
        'local_pizza',
        'local_play',
        'local_post_office',
        'local_printshop',
        'local_see',
        'local_shipping',
        'local_taxi',
        'location_city',
        'location_disabled',
        'location_off',
        'location_on',
        'location_searching',
        'lock',
        'lock_open',
        'lock_outline',
        'looks_3',
        'looks_4',
        'looks_5',
        'looks_6',
        'looks',
        'looks_one',
        'looks_two',
        'loop',
        'loupe',
        'low_priority',
        'loyalty',
        'mail',
        'mail_outline',
        'map',
        'markunread',
        'markunread_mailbox',
        'memory',
        'menu',
        'merge_type',
        'message',
        'mic',
        'mic_none',
        'mic_off',
        'mms',
        'mode_comment',
        'mode_edit',
        'monetization_on',
        'money_off',
        'monochrome_photos',
        'mood_bad',
        'mood',
        'more_horiz',
        'more',
        'more_vert',
        'motorcycle',
        'mouse',
        'move_to_inbox',
        'movie_creation',
        'movie_filter',
        'movie',
        'multiline_chart',
        'music_note',
        'music_video',
        'my_location',
        'nature',
        'nature_people',
        'navigate_before',
        'navigate_next',
        'navigation',
        'near_me',
        'network_cell',
        'network_check',
        'network_locked',
        'network_wifi',
        'new_releases',
        'next_week',
        'nfc',
        'no_encryption',
        'no_sim',
        'note_add',
        'note',
        'notifications_active',
        'notifications',
        'notifications_none',
        'notifications_off',
        'notifications_paused',
        'not_interested',
        'offline_pin',
        'ondemand_video',
        'opacity',
        'open_in_browser',
        'open_in_new',
        'open_with',
        'pages',
        'pageview',
        'palette',
        'panorama_fish_eye',
        'panorama_horizontal',
        'panorama',
        'panorama_vertical',
        'panorama_wide_angle',
        'pan_tool',
        'party_mode',
        'pause_circle_filled',
        'pause_circle_outline',
        'pause',
        'payment',
        'people',
        'people_outline',
        'perm_camera_mic',
        'perm_contact_calendar',
        'perm_data_setting',
        'perm_device_information',
        'perm_identity',
        'perm_media',
        'perm_phone_msg',
        'perm_scan_wifi',
        'person_add',
        'personal_video',
        'person',
        'person_outline',
        'person_pin_circle',
        'person_pin',
        'pets',
        'phone_android',
        'phone_bluetooth_speaker',
        'phone_forwarded',
        'phone_in_talk',
        'phone_iphone',
        'phone',
        'phonelink_erase',
        'phonelink',
        'phonelink_lock',
        'phonelink_off',
        'phonelink_ring',
        'phonelink_setup',
        'phone_locked',
        'phone_missed',
        'phone_paused',
        'photo_album',
        'photo_camera',
        'photo_filter',
        'photo',
        'photo_library',
        'photo_size_select_actual',
        'photo_size_select_large',
        'photo_size_select_small',
        'picture_as_pdf',
        'picture_in_picture_alt',
        'picture_in_picture',
        'pie_chart',
        'pie_chart_outlined',
        'pin_drop',
        'place',
        'play_arrow',
        'play_circle_filled',
        'play_circle_outline',
        'play_for_work',
        'playlist_add_check',
        'playlist_add',
        'playlist_play',
        'plus_one',
        'poll',
        'polymer',
        'pool',
        'portable_wifi_off',
        'portrait',
        'power_input',
        'power',
        'power_settings_new',
        'pregnant_woman',
        'present_to_all',
        'print',
        'priority_high',
        'public',
        'publish',
        'query_builder',
        'question_answer',
        'queue',
        'queue_music',
        'queue_play_next',
        'radio_button_checked',
        'radio_button_unchecked',
        'radio',
        'rate_review',
        'receipt',
        'recent_actors',
        'record_voice_over',
        'redeem',
        'redo',
        'refresh',
        'remove_circle',
        'remove_circle_outline',
        'remove_from_queue',
        'remove',
        'remove_red_eye',
        'remove_shopping_cart',
        'reorder',
        'repeat',
        'repeat_one',
        'replay_10',
        'replay_30',
        'replay_5',
        'replay',
        'reply_all',
        'reply',
        'report',
        'report_problem',
        'restaurant',
        'restaurant_menu',
        'restore',
        'restore_page',
        'ring_volume',
        'room',
        'room_service',
        'rotate_90_degrees_ccw',
        'rotate_left',
        'rotate_right',
        'rounded_corner',
        'router',
        'rowing',
        'rss_feed',
        'rv_hookup',
        'satellite',
        'save',
        'scanner',
        'schedule',
        'school',
        'screen_lock_landscape',
        'screen_lock_portrait',
        'screen_lock_rotation',
        'screen_rotation',
        'screen_share',
        'sd_card',
        'sd_storage',
        'search',
        'security',
        'select_all',
        'send',
        'sentiment_dissatisfied',
        'sentiment_neutral',
        'sentiment_satisfied',
        'sentiment_very_dissatisfied',
        'sentiment_very_satisfied',
        'settings_applications',
        'settings_backup_restore',
        'settings_bluetooth',
        'settings_brightness',
        'settings_cell',
        'settings_ethernet',
        'settings_input_antenna',
        'settings_input_component',
        'settings_input_composite',
        'settings_input_hdmi',
        'settings_input_svideo',
        'settings',
        'settings_overscan',
        'settings_phone',
        'settings_power',
        'settings_remote',
        'settings_system_daydream',
        'settings_voice',
        'share',
        'shop',
        'shopping_basket',
        'shopping_cart',
        'shop_two',
        'short_text',
        'show_chart',
        'shuffle',
        'signal_cellular_no_sim',
        'signal_cellular_null',
        'signal_cellular_off',
        'signal_wifi_off',
        'sim_card_alert',
        'sim_card',
        'skip_next',
        'skip_previous',
        'slideshow',
        'slow_motion_video',
        'smartphone',
        'smoke_free',
        'smoking_rooms',
        'sms_failed',
        'sms',
        'snooze',
        'sort_by_alpha',
        'sort',
        'space_bar',
        'spa',
        'speaker_group',
        'speaker',
        'speaker_notes',
        'speaker_notes_off',
        'speaker_phone',
        'spellcheck',
        'star_border',
        'star_half',
        'star',
        'stars',
        'stay_current_landscape',
        'stay_current_portrait',
        'stay_primary_landscape',
        'stay_primary_portrait',
        'stop',
        'stop_screen_share',
        'storage',
        'store',
        'store_mall_directory',
        'straighten',
        'streetview',
        'strikethrough_s',
        'style',
        'subdirectory_arrow_left',
        'subdirectory_arrow_right',
        'subject',
        'subscriptions',
        'subtitles',
        'subway',
        'supervisor_account',
        'surround_sound',
        'swap_calls',
        'swap_horiz',
        'swap_vertical_circle',
        'swap_vert',
        'switch_camera',
        'switch_video',
        'sync_disabled',
        'sync',
        'sync_problem',
        'system_update_alt',
        'system_update',
        'tab',
        'tablet_android',
        'tablet',
        'tablet_mac',
        'tab_unselected',
        'tag_faces',
        'tap_and_play',
        'terrain',
        'text_fields',
        'text_format',
        'textsms',
        'texture',
        'theaters',
        '3d_rotation',
        'thumb_down',
        'thumbs_up_down',
        'thumb_up',
        'timelapse',
        'timeline',
        'timer_10',
        'timer_3',
        'timer',
        'timer_off',
        'time_to_leave',
        'title',
        'toc',
        'today',
        'toll',
        'tonality',
        'touch_app',
        'toys',
        'track_changes',
        'traffic',
        'train',
        'tram',
        'transfer_within_a_station',
        'transform',
        'translate',
        'trending_down',
        'trending_flat',
        'trending_up',
        'tune',
        'turned_in',
        'turned_in_not',
        'tv',
        'unarchive',
        'undo',
        'unfold_less',
        'unfold_more',
        'update',
        'usb',
        'verified_user',
        'vertical_align_bottom',
        'vertical_align_center',
        'vertical_align_top',
        'vibration',
        'video_call',
        'videocam',
        'videocam_off',
        'videogame_asset',
        'video_label',
        'video_library',
        'view_agenda',
        'view_array',
        'view_carousel',
        'view_column',
        'view_comfy',
        'view_compact',
        'view_day',
        'view_headline',
        'view_list',
        'view_module',
        'view_quilt',
        'view_stream',
        'view_week',
        'vignette',
        'visibility',
        'visibility_off',
        'voice_chat',
        'voicemail',
        'volume_down',
        'volume_mute',
        'volume_off',
        'volume_up',
        'vpn_key',
        'vpn_lock',
        'wallpaper',
        'warning',
        'watch',
        'watch_later',
        'wb_auto',
        'wb_cloudy',
        'wb_incandescent',
        'wb_iridescent',
        'wb_sunny',
        'wc',
        'web_asset',
        'web',
        'weekend',
        'whatshot',
        'widgets',
        'wifi',
        'wifi_lock',
        'wifi_tethering',
        'work',
        'wrap_text',
        'youtube_searched_for',
        'zoom_in',
        'zoom_out',
        'zoom_out_map',
      ];
    },
    238: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(72),
        __webpack_require__(75),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(47);
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_11__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_12__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_13__,
        ),
        _sub_components_Item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
          239,
        ),
        _sub_components_Content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
          209,
        ),
        _sub_components_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
          177,
        ),
        _sub_components_SubHeader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
          210,
        ),
        _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
          8,
        );
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var inlineList = function(_ref2) {
          var inline = _ref2.inline;
          return Object(styled_components__WEBPACK_IMPORTED_MODULE_13__.css)(
            ['li{', ';}'],
            inline && 'display: inline-block;',
          );
        },
        dividedList = function(_ref3) {
          var divided = _ref3.divided,
            inline = _ref3.inline;
          return (
            divided &&
            Object(styled_components__WEBPACK_IMPORTED_MODULE_13__.css)(
              ['li{', ':1px solid ', ';&:last-child{border:none;}}'],
              inline ? 'border-right' : 'border-bottom',
              _Colors_deprecated__WEBPACK_IMPORTED_MODULE_18__.a.SECONDARY[50],
            )
          );
        },
        Unordered = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.ul.withConfig(
          { displayName: 'List__Unordered', componentId: 'sc-283kd7-0' },
        )(
          ['list-style:none;margin:0;', ' ', ' ', ''],
          inlineList,
          function(_ref) {
            var bullet = _ref.bullet;
            return bullet
              ? Object(styled_components__WEBPACK_IMPORTED_MODULE_13__.css)(
                  [
                    "li{position:relative;}li:before{content:'",
                    "';position:absolute;top:12%;right:102%;}padding-left:26px;",
                  ],
                  bullet,
                )
              : 'padding-left: 0;';
          },
          dividedList,
        );
      Unordered.displayName = 'UnorderedList';
      var Ordered = styled_components__WEBPACK_IMPORTED_MODULE_13___default.a.ol.withConfig(
        { displayName: 'List__Ordered', componentId: 'sc-283kd7-1' },
      )(
        [
          "margin:0;padding:0;list-style:none;counter-reset:count;li{margin-left:24px;position:relative;&:before{content:counter(count) '.';counter-increment:count;position:absolute;right:100%;margin-top:8px;margin-right:8px;}}",
          ' ',
          ';',
        ],
        inlineList,
        dividedList,
      );
      Ordered.displayName = 'OrderedList';
      var List = (function(_React$Component) {
        function List(props) {
          var _this;
          return (
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, List),
            ((_this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(List).call(this, props),
            ))._listType = function(ordered) {
              return ordered ? _this.types.ol : _this.types.ul;
            }),
            (_this.types = { ul: Unordered, ol: Ordered }),
            _this
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(List, react__WEBPACK_IMPORTED_MODULE_11___default.a.Component),
          (Constructor = List),
          (protoProps = [
            {
              key: 'render',
              value: function() {
                var _this$props = this.props,
                  ordered = _this$props.ordered,
                  items = _this$props.items,
                  children = _this$props.children,
                  inline = _this$props.inline,
                  divided = _this$props.divided,
                  bullet = _this$props.bullet,
                  listItems =
                    children ||
                    items.map(
                      _sub_components_Item__WEBPACK_IMPORTED_MODULE_14__.a
                        .create,
                    );
                return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                  this._listType(ordered),
                  (function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                      var source = null == arguments[i] ? {} : arguments[i],
                        ownKeys = Object.keys(source);
                      'function' == typeof Object.getOwnPropertySymbols &&
                        (ownKeys = ownKeys.concat(
                          Object.getOwnPropertySymbols(source).filter(function(
                            sym,
                          ) {
                            return Object.getOwnPropertyDescriptor(source, sym)
                              .enumerable;
                          }),
                        )),
                        ownKeys.forEach(function(key) {
                          _defineProperty(target, key, source[key]);
                        });
                    }
                    return target;
                  })(
                    { inline: inline, divided: divided, bullet: bullet },
                    this.props,
                  ),
                  listItems,
                );
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          List
        );
        var Constructor, protoProps, staticProps;
      })();
      (List.Item = _sub_components_Item__WEBPACK_IMPORTED_MODULE_14__.a),
        (List.Content =
          _sub_components_Content__WEBPACK_IMPORTED_MODULE_15__.a),
        (List.Header = _sub_components_Header__WEBPACK_IMPORTED_MODULE_16__.a),
        (List.SubHeader =
          _sub_components_SubHeader__WEBPACK_IMPORTED_MODULE_17__.a),
        (List.defaultProps = {
          items: [],
          ordered: !1,
          bullet: '',
          inline: !1,
          divided: !1,
          children: null,
        }),
        (List.propTypes = {
          items: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
            ),
            prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
                icon: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
                content: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType(
                  [
                    prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
                    prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.shape({
                      header:
                        prop_types__WEBPACK_IMPORTED_MODULE_12___default.a
                          .string,
                      subheader:
                        prop_types__WEBPACK_IMPORTED_MODULE_12___default.a
                          .string,
                    }),
                  ],
                ),
              }),
            ),
          ]),
          ordered: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
          inline: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
          divided: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
          bullet: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.string,
          children: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.node,
              ),
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.node,
            ],
          ),
        }),
        (__webpack_exports__.a = List),
        (List.__docgenInfo = {
          description: '',
          methods: [
            {
              name: '_listType',
              docblock: null,
              modifiers: [],
              params: [{ name: 'ordered', type: null }],
              returns: null,
            },
          ],
          displayName: 'List',
          props: {
            items: {
              defaultValue: { value: '[]', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'string' } },
                  {
                    name: 'arrayOf',
                    value: {
                      name: 'shape',
                      value: {
                        icon: { name: 'string', required: !1 },
                        content: {
                          name: 'union',
                          value: [
                            { name: 'string' },
                            {
                              name: 'shape',
                              value: {
                                header: { name: 'string', required: !1 },
                                subheader: { name: 'string', required: !1 },
                              },
                            },
                          ],
                          required: !1,
                        },
                      },
                    },
                  },
                ],
              },
              required: !1,
              description: '',
            },
            ordered: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: '',
            },
            bullet: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            inline: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: '',
            },
            divided: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: '',
            },
            children: {
              defaultValue: { value: 'null', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'node' } },
                  { name: 'node' },
                ],
              },
              required: !1,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\List\\List.jsx'] = {
            name: 'List',
            docgenInfo: List.__docgenInfo,
            path: 'components\\List\\List.jsx',
          });
    },
    239: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39),
        __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_10___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_10__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_11__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_12__,
        ),
        _Icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(36),
        _Content__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(209);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var ItemIcon = styled_components__WEBPACK_IMPORTED_MODULE_12___default()(
        _Icon__WEBPACK_IMPORTED_MODULE_13__.a,
      ).withConfig({ displayName: 'Item__ItemIcon', componentId: 'culzzj-0' })([
        'display:flex;justify-content:center;align-items:center;margin-right:8px;',
      ]);
      ItemIcon.displayName = 'ItemIcon';
      var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div.withConfig(
        { displayName: 'Item__ListItem', componentId: 'culzzj-1' },
      )(
        [
          'display:flex;flex-direction:row;align-items:center;padding:10px 16px;',
          ';',
        ],
        function(_ref) {
          var bullet = _ref.bullet;
          return (
            bullet &&
            Object(styled_components__WEBPACK_IMPORTED_MODULE_12__.css)(
              ["&:before{content:'", "';}"],
              bullet,
            )
          );
        },
      );
      ListItem.displayName = 'ListItem';
      var Item = (function(_React$Component) {
        function Item() {
          var _getPrototypeOf2, _temp, _this;
          !(function(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, Item);
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          return _possibleConstructorReturn(
            _this,
            ((_temp = _this = _possibleConstructorReturn(
              this,
              (_getPrototypeOf2 = _getPrototypeOf(Item)).call.apply(
                _getPrototypeOf2,
                [this].concat(args),
              ),
            )),
            (_this._renderIcon = function(icon) {
              return 'string' == typeof icon
                ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                    ItemIcon,
                    { name: icon },
                  )
                : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                    ItemIcon,
                    icon,
                  );
            }),
            _temp),
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Item, react__WEBPACK_IMPORTED_MODULE_10___default.a.Component),
          (Constructor = Item),
          (protoProps = [
            {
              key: 'render',
              value: function() {
                var _this$props = this.props,
                  icon = _this$props.icon,
                  children = _this$props.children,
                  content = _this$props.content,
                  bullet = _this$props.bullet,
                  rest = _objectWithoutProperties(_this$props, [
                    'icon',
                    'children',
                    'content',
                    'bullet',
                  ]);
                return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                  'li',
                  rest,
                  react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                    ListItem,
                    { bullet: bullet },
                    icon && this._renderIcon(icon),
                    children ||
                      react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
                        _Content__WEBPACK_IMPORTED_MODULE_14__.a,
                        { content: content },
                      ),
                  ),
                );
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Item
        );
        var Constructor, protoProps, staticProps;
      })();
      (Item.create = function(item) {
        return 'string' == typeof item
          ? react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Item, {
              content: item,
              key: item,
            })
          : react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(
              Item,
              _extends({}, item, { key: item.content }),
            );
      }),
        (Item.defaultProps = {
          icon: '',
          bullet: '',
          children: null,
          content: null,
        }),
        (Item.propTypes = {
          content: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
              prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
                header:
                  prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
                subheader:
                  prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
              }),
            ],
          ),
          icon: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.instanceOf(
              Object,
            ),
          ]),
          bullet: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          children: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node,
              ),
              prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.node,
            ],
          ),
        }),
        (Item.displayName = 'List.Item'),
        (__webpack_exports__.a = Item),
        (Item.__docgenInfo = {
          description: '',
          methods: [
            {
              name: 'create',
              docblock: null,
              modifiers: ['static'],
              params: [{ name: 'item', type: null }],
              returns: null,
            },
            {
              name: '_renderIcon',
              docblock: null,
              modifiers: [],
              params: [{ name: 'icon', type: null }],
              returns: null,
            },
          ],
          displayName: 'List.Item',
          props: {
            icon: {
              defaultValue: { value: "''", computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'string' },
                  { name: 'instanceOf', value: 'Object' },
                ],
              },
              required: !1,
              description: '',
            },
            bullet: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            children: {
              defaultValue: { value: 'null', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'node' } },
                  { name: 'node' },
                ],
              },
              required: !1,
              description: '',
            },
            content: {
              defaultValue: { value: 'null', computed: !1 },
              type: {
                name: 'union',
                value: [
                  { name: 'string' },
                  {
                    name: 'shape',
                    value: {
                      header: { name: 'string', required: !1 },
                      subheader: { name: 'string', required: !1 },
                    },
                  },
                ],
              },
              required: !1,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\List\\sub-components\\Item.jsx'
          ] = {
            name: 'Item',
            docgenInfo: Item.__docgenInfo,
            path: 'components\\List\\sub-components\\Item.jsx',
          });
    },
    240: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var Colors = __webpack_require__(10),
        theme = (__webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(14),
        __webpack_require__(25));
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      var models_ButtonColor = (function() {
        function ButtonColor(_ref) {
          var unselected = _ref.unselected,
            _ref$unselectedBorder = _ref.unselectedBorder,
            unselectedBorder =
              void 0 === _ref$unselectedBorder
                ? unselected
                : _ref$unselectedBorder,
            unselectedTextColor = _ref.unselectedTextColor,
            unselectedShadow = _ref.unselectedShadow,
            selected = _ref.selected,
            _ref$selectedBorder = _ref.selectedBorder,
            selectedBorder =
              void 0 === _ref$selectedBorder ? selected : _ref$selectedBorder,
            selectedTextColor = _ref.selectedTextColor,
            _ref$selectedShadow = _ref.selectedShadow,
            selectedShadow =
              void 0 === _ref$selectedShadow
                ? unselectedShadow
                : _ref$selectedShadow,
            disabled = _ref.disabled,
            _ref$disabledBorder = _ref.disabledBorder,
            disabledBorder =
              void 0 === _ref$disabledBorder ? disabled : _ref$disabledBorder,
            disabledTextColor = _ref.disabledTextColor,
            _ref$disabledShadow = _ref.disabledShadow,
            disabledShadow =
              void 0 === _ref$disabledShadow
                ? unselectedShadow
                : _ref$disabledShadow,
            focused = _ref.focused,
            _ref$focusedBorder = _ref.focusedBorder,
            focusedBorder =
              void 0 === _ref$focusedBorder ? focused : _ref$focusedBorder,
            focusedTextColor = _ref.focusedTextColor,
            _ref$focusedShadow = _ref.focusedShadow,
            focusedShadow =
              void 0 === _ref$focusedShadow
                ? unselectedShadow
                : _ref$focusedShadow,
            hovered = _ref.hovered,
            _ref$hoveredBorder = _ref.hoveredBorder,
            hoveredBorder =
              void 0 === _ref$hoveredBorder ? hovered : _ref$hoveredBorder,
            hoveredTextColor = _ref.hoveredTextColor,
            _ref$hoveredShadow = _ref.hoveredShadow,
            hoveredShadow =
              void 0 === _ref$hoveredShadow
                ? unselectedShadow
                : _ref$hoveredShadow,
            _ref$decoration = _ref.decoration,
            decoration = void 0 === _ref$decoration ? 'none' : _ref$decoration,
            _ref$borderRadius = _ref.borderRadius,
            borderRadius =
              void 0 === _ref$borderRadius
                ? theme.a.sizes.radius
                : _ref$borderRadius;
          (function(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, ButtonColor),
            (this._unselected = unselected),
            (this._unselectedBorder = unselectedBorder),
            (this._unselectedTextColor = unselectedTextColor),
            (this._unselectedShadow = unselectedShadow),
            (this._selected = selected),
            (this._selectedBorder = selectedBorder),
            (this._selectedTextColor = selectedTextColor),
            (this._selectedShadow = selectedShadow),
            (this._disabled = disabled),
            (this._disabledBorder = disabledBorder),
            (this._disabledTextColor = disabledTextColor),
            (this._disabledShadow = disabledShadow),
            (this._focused = focused),
            (this._focusedBorder = focusedBorder),
            (this._focusedTextColor = focusedTextColor),
            (this._focusedShadow = focusedShadow),
            (this._hovered = hovered),
            (this._hoveredBorder = hoveredBorder),
            (this._hoveredTextColor = hoveredTextColor),
            (this._hoveredShadow = hoveredShadow),
            (this._decoration = decoration),
            (this._borderRadius = borderRadius);
        }
        return (
          (Constructor = ButtonColor),
          (protoProps = [
            {
              key: 'unselected',
              get: function() {
                return {
                  background: this._unselected,
                  border: this._unselectedBorder,
                  color: this._unselectedTextColor,
                  shadow: this._unselectedShadow,
                };
              },
            },
            {
              key: 'selected',
              get: function() {
                return {
                  background: this._selected,
                  border: this._selectedBorder,
                  color: this._selectedTextColor,
                  shadow: this._selectedShadow,
                };
              },
            },
            {
              key: 'disabled',
              get: function() {
                return {
                  background: this._disabled,
                  border: this._disabledBorder,
                  color: this._disabledTextColor,
                  shadow: this._disabledShadow,
                };
              },
            },
            {
              key: 'focused',
              get: function() {
                return {
                  background: this._focused,
                  border: this._focusedBorder,
                  color: this._focusedTextColor,
                  shadow: this._focusedShadow,
                };
              },
            },
            {
              key: 'hovered',
              get: function() {
                return {
                  background: this._hovered,
                  border: this._hoveredBorder,
                  color: this._hoveredTextColor,
                  shadow: this._hoveredShadow,
                };
              },
            },
            {
              key: 'decoration',
              get: function() {
                return this._decoration;
              },
            },
            {
              key: 'borderRadius',
              get: function() {
                return this._borderRadius;
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          ButtonColor
        );
        var Constructor, protoProps, staticProps;
      })();
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var models_DefaultButton = (function(_ButtonColor) {
          function DefaultButton(_ref) {
            var unselected = _ref.unselected,
              _ref$unselectedBorder = _ref.unselectedBorder,
              unselectedBorder =
                void 0 === _ref$unselectedBorder
                  ? unselected
                  : _ref$unselectedBorder,
              _ref$unselectedTextCo = _ref.unselectedTextColor,
              unselectedTextColor =
                void 0 === _ref$unselectedTextCo
                  ? Colors.a.WHITE
                  : _ref$unselectedTextCo,
              _ref$unselectedShadow = _ref.unselectedShadow,
              unselectedShadow =
                void 0 === _ref$unselectedShadow
                  ? '0 2px 4px 0 '.concat(Colors.a.BLACK[200], ';')
                  : _ref$unselectedShadow,
              selected = _ref.selected,
              selectedBorder = _ref.selectedBorder,
              _ref$selectedTextColo = _ref.selectedTextColor,
              selectedTextColor =
                void 0 === _ref$selectedTextColo
                  ? unselectedTextColor
                  : _ref$selectedTextColo,
              _ref$selectedShadow = _ref.selectedShadow,
              selectedShadow =
                void 0 === _ref$selectedShadow
                  ? '0 2px 4px 0 '.concat(Colors.a.BLACK[700], ';')
                  : _ref$selectedShadow,
              disabled = _ref.disabled,
              disabledBorder = _ref.disabledBorder,
              _ref$disabledTextColo = _ref.disabledTextColor,
              disabledTextColor =
                void 0 === _ref$disabledTextColo
                  ? unselectedTextColor
                  : _ref$disabledTextColo,
              _ref$disabledShadow = _ref.disabledShadow,
              disabledShadow =
                void 0 === _ref$disabledShadow
                  ? unselectedShadow
                  : _ref$disabledShadow,
              focused = _ref.focused,
              focusedBorder = _ref.focusedBorder,
              _ref$focusedTextColor = _ref.focusedTextColor,
              focusedTextColor =
                void 0 === _ref$focusedTextColor
                  ? unselectedTextColor
                  : _ref$focusedTextColor,
              _ref$focusedShadow = _ref.focusedShadow,
              focusedShadow =
                void 0 === _ref$focusedShadow
                  ? unselectedShadow
                  : _ref$focusedShadow,
              hovered = _ref.hovered,
              hoveredBorder = _ref.hoveredBorder,
              _ref$hoveredTextColor = _ref.hoveredTextColor,
              hoveredTextColor =
                void 0 === _ref$hoveredTextColor
                  ? unselectedTextColor
                  : _ref$hoveredTextColor,
              _ref$hoveredShadow = _ref.hoveredShadow,
              hoveredShadow =
                void 0 === _ref$hoveredShadow
                  ? unselectedShadow
                  : _ref$hoveredShadow,
              decoration = _ref.decoration,
              borderRadius = _ref.borderRadius;
            return (
              (function(instance, Constructor) {
                if (!(instance instanceof Constructor))
                  throw new TypeError('Cannot call a class as a function');
              })(this, DefaultButton),
              _possibleConstructorReturn(
                this,
                _getPrototypeOf(DefaultButton).call(this, {
                  unselected: unselected,
                  unselectedBorder: unselectedBorder,
                  unselectedTextColor: unselectedTextColor,
                  unselectedShadow: unselectedShadow,
                  selected: selected,
                  selectedBorder: selectedBorder,
                  selectedTextColor: selectedTextColor,
                  selectedShadow: selectedShadow,
                  disabled: disabled,
                  disabledBorder: disabledBorder,
                  disabledTextColor: disabledTextColor,
                  disabledShadow: disabledShadow,
                  focused: focused,
                  focusedBorder: focusedBorder,
                  focusedTextColor: focusedTextColor,
                  focusedShadow: focusedShadow,
                  hovered: hovered,
                  hoveredBorder: hoveredBorder,
                  hoveredTextColor: hoveredTextColor,
                  hoveredShadow: hoveredShadow,
                  decoration: decoration,
                  borderRadius: borderRadius,
                }),
              )
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(DefaultButton, models_ButtonColor),
            DefaultButton
          );
        })(),
        skins = {
          primary: new models_DefaultButton({
            unselected: Colors.a.BLUE[500],
            selected: Colors.a.COBALT[500],
            focused: Colors.a.BLUE[500],
            focusedShadow: '0 2px 6px 0 rgba(19, 85, 208, 0.5);',
            disabled: Colors.a.BLACK[400],
            hovered: Colors.a.COBALT[500],
            selectedBorder: Colors.a.COBALT[500],
          }),
          secondary: new models_DefaultButton({
            unselected: Colors.a.WHITE,
            unselectedTextColor: Colors.a.BLUE[500],
            unselectedBorder: Colors.a.BLUE[500],
            selected: Colors.a.BLUE[200],
            selectedBorder: Colors.a.BLUE[500],
            disabled: Colors.a.SHADOW[40],
            disabledBorder: Colors.a.BLACK[400],
            disabledTextColor: Colors.a.BLACK[400],
            focused: Colors.a.WHITE,
            focusedBorder: Colors.a.BLUE[500],
            focusedShadow: '0 2px 4px 0 rgba(19, 85, 208, 0.5);',
            hovered: Colors.a.BLUE[200],
            hoveredBorder: Colors.a.BLUE[500],
          }),
          action: new models_DefaultButton({
            unselected: Colors.a.PINK[500],
            selected: Colors.a.PINK[900],
            selectedBorder: Colors.a.PINK[900],
            disabled: Colors.a.PINK[500],
            focused: Colors.a.PINK[500],
            focusedShadow: '0 2px 6px 0 '.concat(Colors.a.PINK[500], ';'),
            hovered: Colors.a.PINK[900],
          }),
          link: new models_DefaultButton({
            unselected: 'transparent',
            unselectedTextColor: Colors.a.BLUE[500],
            unselectedShadow: 'none',
            selectedShadow: 'none',
            disabled: 'transparent',
            focused: 'transparent',
            decoration: 'underline',
            borderRadius: 'unset',
          }),
        };
      __webpack_exports__.a = function(_ref) {
        var skin = _ref.skin;
        return skins[skin] || skins.primary;
      };
    },
    241: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(157), __webpack_require__(487);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        Colors = __webpack_require__(10),
        BadgeWrapper = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Badge__BadgeWrapper',
          componentId: 'zpdrj8-0',
        })(['display:inline-block;', ''], function(props) {
          return props.originalChildren
            ? 'position: relative;'
            : 'margin-left: 8px; margin-right: 8px;';
        }),
        StyledBadge = styled_components_browser_cjs_default.a.span.withConfig({
          displayName: 'Badge__StyledBadge',
          componentId: 'zpdrj8-1',
        })(
          [
            'border-radius:8px;display:inline-block;font-size:12px;font-weight:bold;height:20px;line-height:20px;min-width:20px;text-align:center;padding-left:2px;padding-right:2px;',
            ' ',
            ' ',
            '',
          ],
          function(props) {
            return (
              !Number.isInteger(props.value) &&
              '\n    padding-left: 4px;\n    padding-right: 4px;\n  '
            );
          },
          function(props) {
            return (
              props.originalChildren &&
              '\n    position: absolute;\n    right: -10px;\n    top: -10px;\n  '
            );
          },
          function(_ref) {
            var skin = _ref.skin,
              badgeColors = {
                default: {
                  background: Colors.a.BLACK[100],
                  text: Colors.a.BLACK[700],
                },
                black: {
                  background: Colors.a.BLACK[700],
                  text: Colors.a.WHITE,
                },
                blue: { background: Colors.a.BLUE[500], text: Colors.a.WHITE },
                white: { background: Colors.a.WHITE, text: '#000' },
                error: {
                  background: Colors.a.ERROR[500],
                  text: Colors.a.WHITE,
                },
                success: {
                  background: Colors.a.SUCCESS[200],
                  text: Colors.a.SUCCESS[900],
                },
              };
            return Object(styled_components_browser_cjs.css)(
              ['background-color:', ';color:', ';', ''],
              badgeColors[skin].background,
              badgeColors[skin].text,
              'white' === skin && 'mix-blend-mode: lighten;',
            );
          },
        ),
        Badge = function(_ref2) {
          var children = _ref2.children,
            number = _ref2.number,
            skin = _ref2.skin,
            value = 99 < number ? '99+' : number;
          return react_default.a.createElement(
            BadgeWrapper,
            { value: value, originalChildren: children },
            react_default.a.createElement(
              StyledBadge,
              { skin: skin, value: value, originalChildren: children },
              value,
            ),
            children,
          );
        };
      (BadgeWrapper.displayName = 'BadgeWrapper'),
        (StyledBadge.displayName = 'StyledBadge'),
        (Badge.displayName = 'Badge'),
        (Badge.propTypes = {
          skin: prop_types_default.a.oneOf([
            'default',
            'black',
            'blue',
            'white',
            'error',
            'success',
          ]),
          children: prop_types_default.a.oneOfType([
            prop_types_default.a.arrayOf(prop_types_default.a.node),
            prop_types_default.a.node,
          ]),
          number: prop_types_default.a.number,
        }),
        (Badge.defaultProps = { skin: 'default', children: '', number: 0 });
      var Badge_Badge = Badge;
      (Badge.__docgenInfo = {
        description:
          'This components is used to display only `Numbers`. If you want to pass a string, use `<Tag />` component instead',
        methods: [],
        displayName: 'Badge',
        props: {
          skin: {
            defaultValue: { value: "'default'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'default'", computed: !1 },
                { value: "'black'", computed: !1 },
                { value: "'blue'", computed: !1 },
                { value: "'white'", computed: !1 },
                { value: "'error'", computed: !1 },
                { value: "'success'", computed: !1 },
              ],
            },
            required: !1,
            description: 'Define background and text color',
          },
          children: {
            defaultValue: { value: "''", computed: !1 },
            type: {
              name: 'union',
              value: [
                { name: 'arrayOf', value: { name: 'node' } },
                { name: 'node' },
              ],
            },
            required: !1,
            description:
              'When passed a children to <Badge />, the badge will be displayed at top-right corner of the children.',
          },
          number: {
            defaultValue: { value: '0', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description:
              'Number to be displayed inside badge. When number is higher than 99 will be displayed "99+" instead of number value',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Badge\\Badge.jsx'] = {
            name: 'Badge',
            docgenInfo: Badge.__docgenInfo,
            path: 'components\\Badge\\Badge.jsx',
          });
      __webpack_exports__.a = Badge_Badge;
    },
    242: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(135),
        __webpack_require__(136),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(47),
        __webpack_require__(59);
      var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_7___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_7__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_8___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_8__,
        ),
        _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(106),
        _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(331),
        _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(54);
      function _templateObject() {
        var strings,
          raw,
          data = ((strings = ['max-width: ', 'px;']),
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            }),
          ));
        return (
          (_templateObject = function() {
            return data;
          }),
          data
        );
      }
      var Container = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div.withConfig(
        { displayName: 'Container', componentId: 'ka34zl-0' },
      )(
        [
          'width:',
          ';box-sizing:border-box;padding:var(--gutter);margin-right:auto;margin-left:auto;',
          ' ',
          ' ',
          '',
        ],
        function(props) {
          return props.width || '100%';
        },
        function(props) {
          return Object.keys(_shared__WEBPACK_IMPORTED_MODULE_11__.a).map(
            function(breakpoint) {
              return (
                (name = breakpoint),
                !props.fluid &&
                  _shared__WEBPACK_IMPORTED_MODULE_9__.b[name](
                    _templateObject(),
                    _shared__WEBPACK_IMPORTED_MODULE_11__.a[name].width,
                  )
              );
              var name;
            },
          );
        },
        _shared__WEBPACK_IMPORTED_MODULE_10__.a,
        _shared__WEBPACK_IMPORTED_MODULE_10__.b,
      );
      (Container.propTypes = {
        width: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
        fluid: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.bool,
        hide: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.oneOf(
            Object.keys(_shared__WEBPACK_IMPORTED_MODULE_11__.a),
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string,
          ),
        ]),
      }),
        (Container.defaultProps = { fluid: !1, 'no-gutters': !1 }),
        (Container.displayName = 'Container'),
        (__webpack_exports__.a = Container);
    },
    243: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(191),
        __webpack_require__(217),
        __webpack_require__(138),
        __webpack_require__(137),
        __webpack_require__(497),
        __webpack_require__(118),
        __webpack_require__(369),
        __webpack_require__(354),
        __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(72),
        __webpack_require__(75),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(59),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(513),
        __webpack_require__(47);
      var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_22___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_22__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_23___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_23__,
        ),
        _Input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(37),
        _Input_InputTypes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
          130,
        );
      function _toConsumableArray(arr) {
        return (
          (function(arr) {
            if (Array.isArray(arr)) {
              for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++)
                arr2[i] = arr[i];
              return arr2;
            }
          })(arr) ||
          (function(iter) {
            if (
              Symbol.iterator in Object(iter) ||
              '[object Arguments]' === Object.prototype.toString.call(iter)
            )
              return Array.from(iter);
          })(arr) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance',
            );
          })()
        );
      }
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null == arguments[i] ? {} : arguments[i],
            ownKeys = Object.keys(source);
          'function' == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              }),
            )),
            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key]);
            });
        }
        return target;
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        );
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      function execValidate(validate, props) {
        if ('function' == typeof validate) return validate(props);
        var fn = validate.validate,
          error = validate.error,
          msg = fn(props);
        return msg ? error || msg : '';
      }
      var typeNames = Object.values(
          _Input_InputTypes__WEBPACK_IMPORTED_MODULE_25__.a,
        ).map(function(InputType) {
          return InputType.displayName;
        }),
        Form = (function(_React$Component) {
          function Form(props) {
            var _this, self, call;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Form),
              (self = this),
              (_this =
                !(call = _getPrototypeOf(Form).call(this, props)) ||
                ('object' !== _typeof(call) && 'function' != typeof call)
                  ? _assertThisInitialized(self)
                  : call),
              _initialiseProps.call(
                _assertThisInitialized(_assertThisInitialized(_this)),
              ),
              (_this.state = { values: {}, errors: {}, valid: !1 });
            var children = _this.props.children,
              values = _this.state.values;
            return (
              react__WEBPACK_IMPORTED_MODULE_22___default.a.Children.map(
                children,
                function(child) {
                  if (Form._isValidElement(child)) {
                    var _child$props = child.props,
                      name = _child$props.name,
                      value = _child$props.value;
                    value && (values[name] = value);
                  }
                },
              ),
              _this
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Form, react__WEBPACK_IMPORTED_MODULE_22___default.a.Component),
            (Constructor = Form),
            (protoProps = [
              {
                key: 'render',
                value: function() {
                  var _props = _objectSpread({}, this.props),
                    children = _props.children;
                  return (
                    delete _props.onValidSubmit,
                    react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(
                      'form',
                      _extends({}, _props, { onSubmit: this.handleSubmit }),
                      this._createClones(children),
                    )
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Form
          );
          var Constructor, protoProps, staticProps;
        })();
      Form._isValidElement = function(element) {
        return (
          react__WEBPACK_IMPORTED_MODULE_22___default.a.isValidElement(
            element,
          ) &&
          [_Input__WEBPACK_IMPORTED_MODULE_24__.a.displayName]
            .concat(_toConsumableArray(typeNames))
            .includes(element.type.displayName)
        );
      };
      var _initialiseProps = function() {
        var _this2 = this;
        (this._createClones = function(children) {
          var _this2$state = _this2.state,
            values = _this2$state.values,
            errors = _this2$state.errors;
          return react__WEBPACK_IMPORTED_MODULE_22___default.a.Children.map(
            children,
            function(child) {
              if (!Form._isValidElement(child)) return child;
              var _child$props2 = child.props,
                name = _child$props2.name,
                error = _child$props2.error,
                _onChange = _child$props2.onChange;
              return react__WEBPACK_IMPORTED_MODULE_22___default.a.cloneElement(
                child,
                {
                  value: values[name],
                  error: errors[name] || error,
                  onChange: function(e, data) {
                    _this2._handleChange(e, data), _onChange(e, data);
                  },
                },
              );
            },
          );
        }),
          (this._findError = function(child) {
            var invalid,
              props = child.props,
              values = _this2.state.values,
              _props$validate = props.validate,
              validate =
                void 0 === _props$validate ? function() {} : _props$validate,
              _props = _objectSpread({}, props, { value: values[props.name] });
            if (Array.isArray(validate))
              for (
                var i = 0;
                i < validate.length &&
                !(invalid = execValidate(validate[i], _props));
                i += 1
              );
            else invalid = execValidate(validate, _props);
            return invalid && _this2.setState({ valid: !1 }), invalid;
          }),
          (this._validateError = function(children) {
            var errors = _this2.state.errors;
            return react__WEBPACK_IMPORTED_MODULE_22___default.a.Children.map(
              children,
              function(child) {
                var name = child.props.name,
                  _error = _this2._findError(child),
                  newError = errors;
                (newError[name] = _error),
                  _this2.setState({ errors: newError });
              },
            );
          }),
          (this._handleChange = function(_ref, _ref2) {
            var name = _ref.target.name,
              value = _ref2.value,
              _this2$state2 = _this2.state,
              values = _this2$state2.values,
              errors = _this2$state2.errors,
              newValues = _objectSpread(
                {},
                values,
                _defineProperty({}, name, value),
              ),
              newErrors = errors;
            (newErrors[name] = ''),
              _this2.setState({ errors: newErrors }),
              _this2.setState({ values: newValues });
          }),
          (this.handleSubmit = function(event) {
            event.preventDefault();
            var _this2$props = _this2.props,
              onSubmit = _this2$props.onSubmit,
              onValidSubmit = _this2$props.onValidSubmit,
              children = _this2$props.children,
              _this2$state3 = _this2.state,
              errors = _this2$state3.errors,
              values = _this2$state3.values;
            _this2._validateError(children);
            var isValid = !Object.values(errors).find(function(e) {
              return e;
            });
            _this2.setState({ valid: isValid }, function() {
              var updatedValid = _this2.state.valid;
              onSubmit({ valid: updatedValid }),
                isValid && onValidSubmit(values);
            });
          });
      };
      (Form.defaultProps = {
        onSubmit: function() {},
        onValidSubmit: function() {},
        noValidate: !0,
      }),
        (Form.propTypes = {
          children: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.node,
              ),
              prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.node,
            ],
          ).isRequired,
          onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.func,
          onValidSubmit:
            prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.func,
          noValidate: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.bool,
        }),
        (__webpack_exports__.a = Form),
        (Form.__docgenInfo = {
          description: '',
          methods: [
            {
              name: '_isValidElement',
              docblock: null,
              modifiers: ['static'],
              params: [{ name: 'element', type: null }],
              returns: null,
            },
            {
              name: '_createClones',
              docblock: null,
              modifiers: [],
              params: [{ name: 'children', type: null }],
              returns: null,
            },
            {
              name: '_findError',
              docblock: null,
              modifiers: [],
              params: [{ name: 'child', type: null }],
              returns: null,
            },
            {
              name: '_validateError',
              docblock: null,
              modifiers: [],
              params: [{ name: 'children', type: null }],
              returns: null,
            },
            {
              name: '_handleChange',
              docblock: null,
              modifiers: [],
              params: [
                { name: '{ target: { name } }', type: null },
                { name: '{ value }', type: null },
              ],
              returns: null,
            },
            {
              name: 'handleSubmit',
              docblock: null,
              modifiers: [],
              params: [{ name: 'event', type: null }],
              returns: null,
            },
          ],
          displayName: 'Form',
          props: {
            onSubmit: {
              defaultValue: { value: '() => {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
            onValidSubmit: {
              defaultValue: { value: '() => {}', computed: !1 },
              type: { name: 'func' },
              required: !1,
              description: '',
            },
            noValidate: {
              defaultValue: { value: 'true', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description:
                'Default html attribute, that prevents default browser validations',
            },
            children: {
              type: {
                name: 'union',
                value: [
                  { name: 'arrayOf', value: { name: 'node' } },
                  { name: 'node' },
                ],
              },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Form\\Form.jsx'] = {
            name: 'Form',
            docgenInfo: Form.__docgenInfo,
            path: 'components\\Form\\Form.jsx',
          });
    },
    25: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Colors_deprecated__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        8,
      );
      __webpack_exports__.a = {
        font: { weight: 500, normal: '12px', big: '16px' },
        sizes: {
          radius: '4px',
          fieldHeight: '40px',
          spacing: '20px',
          loading: '60px',
        },
        mixins: {
          hexToRgba: function(color, opacity) {
            var R = parseInt(color.substring(1, 3), 16),
              G = parseInt(color.substring(3, 5), 16),
              B = parseInt(color.substring(5, 7), 16);
            return 'rgba('
              .concat(R, ', ')
              .concat(G, ', ')
              .concat(B, ', ')
              .concat(opacity, ')');
          },
          transition: function() {
            var property =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'all',
              timing =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : '0.2s',
              type =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : 'ease-in-out';
            return 'transition: '
              .concat(property, ' ')
              .concat(timing, ' ')
              .concat(type);
          },
          shadow: function() {
            var size =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 1,
              shadows = [
                'box-shadow: none;',
                'box-shadow: 0 2px 5px '.concat(
                  this.hexToRgba(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_0__.a
                      .SECONDARY[600],
                    0.3,
                  ),
                  ';',
                ),
                'box-shadow: 0 2px 6px '.concat(
                  this.hexToRgba(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_0__.a
                      .SECONDARY[600],
                    0.6,
                  ),
                  ';',
                ),
              ];
            return shadows[size] || shadows[1];
          },
        },
      };
    },
    324: function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTMgMTE0Ljc1Ij48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMi42NDMiIHkxPSI1Ny4zMjMiIHgyPSIyMTEuMzY0IiB5Mj0iNTcuMzIzIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMDQ2OGMiLz48c3RvcCBvZmZzZXQ9Ii41IiBzdG9wLWNvbG9yPSIjMDA1ZGE0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA0NjhjIi8+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMTA2Ljk5OCAxMTQuMDE2YTE1LjUyIDE1LjUyIDAgMCAxLTYuNjY3LTEuNDg3TDExLjgxIDcxLjU3OGMtNS41NjQtMi41MzEtOS4xNjctOC4xMzEtOS4xNjctMTQuMjUxYTE1LjY5NSAxNS42OTUgMCAwIDEgOS4xODEtMTQuMjU1TDEwMC4zNDggMi4xMWExNS40ODUgMTUuNDg1IDAgMCAxIDYuNjUtMS40OGMyLjMyOCAwIDQuNTY3LjUwMiA2LjY2MiAxLjQ4Mmw4OC41MzQgNDAuOTYzYzUuNTY0IDIuNTI4IDkuMTcgOC4xMjcgOS4xNyAxNC4yNTIgMCA2LjExMy0zLjYwMyAxMS43MDYtOS4xNjggMTQuMjUxbC04OC41NDkgNDAuOTY0YTE1LjUxNCAxNS41MTQgMCAwIDEtNi42NDkgMS40NzR6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExLjYxMyA1Ny4zMjdjMC0yLjU3MSAxLjY0LTQuOTIxIDMuOTk0LTUuOTkzLjAwNC0uMDAzIDgyLjAyMS0zMi4yNjkgOTkuNjI0LTM5LjE5NGExLjUxOCAxLjUxOCAwIDAgMCAuMDgyLTIuNzg4bC01LjE0My0yLjM4YTcuNTg4IDcuNTg4IDAgMCAwLTYuMzc1LjAwMkwxNC4yNzMgNDguNDEyYTkuODIzIDkuODIzIDAgMCAwLTUuNzQ5IDguOTE1IDkuODEzIDkuODEzIDAgMCAwIDUuNzMyIDguOTA5Yy45NjYuNDQ4IDczLjMzMyAzMy45MTkgODkuNTQxIDQxLjQyM2E3LjU5MSA3LjU5MSAwIDAgMCA2LjM3NS4wMDNsNS4xNDgtMi4zODJhMS41MTYgMS41MTYgMCAwIDAtLjA4My0yLjc4OEM3MC4zODYgODQuODcxIDMyLjA0NSA2OS43ODYgMTUuNjAyIDYzLjMyM2MtMi4zNTQtMS4wNzUtMy45ODktMy40MjYtMy45ODktNS45OTZ6Ii8+PHBhdGggZmlsbD0iIzREOEVDNiIgZD0iTTE5OS43NDQgNDguNDE0Yy0xLjQ1OS0uNjc0LTYwLjI2Mi0yNy44ODItNzQuMjY0LTM0LjM1OWE3LjU4NiA3LjU4NiAwIDAgMC01Ljk2LS4xNzZsLTQuNTg3IDEuODAzYTEuNTE4IDEuNTE4IDAgMCAwIDAgMi44MjRsODMuNDY0IDMyLjgxOGMyLjM2MiAxLjA4MSAzLjk5OSAzLjQzMiAzLjk5OSA2LjAwMiAwIDIuNTcyLTEuNjM3IDQuOTI1LTMuOTg2IDUuOTk3bC04My41MTggMzIuODE0YTEuNTE3IDEuNTE3IDAgMCAwLS4wMDEgMi44MjRjMi4wNjkuODE1IDMuNDg1IDEuMzcxIDQuNjAzIDEuODFhNy41ODcgNy41ODcgMCAwIDAgNS45NTUtLjE3N2w3NC4yOTUtMzQuMzVhOS44MzMgOS44MzMgMCAwIDAgNS43NDMtOC45MTggOS44MTUgOS44MTUgMCAwIDAtNS43NDMtOC45MTJ6Ii8+PGcgZmlsbD0iI0ZGRiI+PHBhdGggZD0iTTE1NC4yMDkgNDMuOTE4Yy03Ljc2NCAwLTE0LjA2IDUuOTk4LTE0LjA2IDEzLjQwMSAwIDcuNDAxIDYuMjk3IDEzLjQwMSAxNC4wNiAxMy40MDEgNy43NjUgMCAxNC4wNTgtNiAxNC4wNTgtMTMuNDAxLjAwMS03LjQwMy02LjI5My0xMy40MDEtMTQuMDU4LTEzLjQwMXptMCAyMS44MjJjLTQuNDUyIDAtOC4wNjMtMy43Ny04LjA2My04LjQyMSAwLTQuNjU1IDMuNjEtOC40MjIgOC4wNjMtOC40MjIgNC40NTMgMCA4LjA2MiAzLjc2NyA4LjA2MiA4LjQyMiAwIDQuNjUxLTMuNjA5IDguNDIxLTguMDYyIDguNDIxek0xMTAuMjAzIDQ0LjM2MUg5NS4yNzZhMi41NCAyLjU0IDAgMCAwIDAgNS4wNzhoNC41MzF2MTcuOTQ2YTIuOTM1IDIuOTM1IDAgMCAwIDUuODY4IDBWNDkuNDM5aDQuNTI5YTIuNTMgMi41MyAwIDAgMCAyLjUzNS0yLjUzNiAyLjUzNyAyLjUzNyAwIDAgMC0yLjUzNi0yLjU0MnpNMTM0LjU1OCA0NC4xODhhMi45NCAyLjk0IDAgMCAwLTIuOTM1IDIuOTM3djcuNDE2SDEyMC43M3YtNy40MTZhMi45MzcgMi45MzcgMCAwIDAtMi45MzUtMi45MzcgMi45MzYgMi45MzYgMCAwIDAtMi45MyAyLjkzN3YyMC4yNjFhMi45MzMgMi45MzMgMCAwIDAgNS44NjUgMFY1OS41MmgxMC44OTN2Ny44NjVhMi45MzUgMi45MzUgMCAwIDAgNS44NjkgMFY0Ny4xMjRhMi45MzUgMi45MzUgMCAwIDAtMi45MzQtMi45MzZ6TTY1LjcwNiA2My45MDRjLS41NjIgMC0xLjA4MS4xNzgtMS41MDkuNDc1YTcuNzQyIDcuNzQyIDAgMCAxLTQuMzk5IDEuMzY4Yy00LjQ1MyAwLTguMDY0LTMuNzcxLTguMDY0LTguNDIyIDAtNC42NTIgMy42MTEtOC40MjQgOC4wNjQtOC40MjQgMS41OTYgMCAzLjA3OS40ODggNC4zMjkgMS4zMjIuNDQ0LjMzNS45ODcuNTMyIDEuNTc5LjUzMmEyLjYzOCAyLjYzOCAwIDEgMCAxLjIwMy00Ljk4OSAxNC41MjkgMTQuNTI5IDAgMCAwLTcuMTEtMS44NDJjLTcuNzY0IDAtMTQuMDYgNS45OTctMTQuMDYgMTMuMzk5czYuMjk2IDEzLjQwMyAxNC4wNiAxMy40MDNjMi41NTMgMCA0Ljk0MS0uNjU1IDcuMDA3LTEuNzg5YTIuNjM3IDIuNjM3IDAgMCAwIDEuNTQzLTIuMzk4IDIuNjQgMi42NCAwIDAgMC0yLjY0My0yLjYzNXpNOTQuOTUyIDY2LjUwN0w4NS40NCA0NS44NzVhMi43NzMgMi43NzMgMCAwIDAtMi42ODQtMS41ODIgMi43NjQgMi43NjQgMCAwIDAtMi42ODEgMS41ODJsLTkuNTEzIDIwLjYzMmEyLjc2NCAyLjc2NCAwIDAgMCAxLjMyNiAzLjY3NyAyLjc2OSAyLjc2OSAwIDAgMCAzLjY3Ny0xLjMzMmwxLjI0LTIuNjg4aDExLjg5OWwxLjI0MiAyLjY4OGEyLjc2NSAyLjc2NSAwIDAgMCA1LjAwNi0yLjM0NXptLTE1Ljk3NS01LjA0NGwzLjc3OS04LjIgMy43ODEgOC4yaC03LjU2eiIvPjwvZz48L3N2Zz4=';
    },
    325: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        Colors = __webpack_require__(10),
        upDownBorders = '\n  border-left: '
          .concat(6, 'px solid transparent;\n  border-right: ')
          .concat(
            6,
            'px solid transparent;\n  left: 50%;\n  transform: translateX(-50%);\n',
          ),
        sideBorders = '\n  border-top: '
          .concat(6, 'px solid transparent;\n  border-bottom: ')
          .concat(
            6,
            'px solid transparent;\n  top: 50%;\n  transform: translateY(-50%);\n',
          ),
        options = {
          arrowPosition: {
            bottom: '\n      '
              .concat(upDownBorders, '\n      border-bottom: ')
              .concat(
                6,
                'px solid;\n      border-bottom-color: inherit;\n      top: -',
              )
              .concat(5, 'px;\n    '),
            top: '\n      '
              .concat(upDownBorders, '\n      border-top: ')
              .concat(
                6,
                'px solid;\n      border-top-color: inherit;\n      bottom: -',
              )
              .concat(5, 'px;\n    '),
            left: '\n      '
              .concat(sideBorders, '\n      border-left: ')
              .concat(
                6,
                'px solid;\n      border-left-color: inherit;\n      right: -',
              )
              .concat(5, 'px;\n    '),
            right: '\n      '
              .concat(sideBorders, '\n      border-right: ')
              .concat(
                6,
                'px solid;\n      border-right-color: inherit;\n      left: -',
              )
              .concat(5, 'px;\n    '),
          },
          tipPosition: function(_ref) {
            var placement = _ref.placement,
              height = _ref.height,
              width = _ref.width,
              position = {
                top: 'top: -'
                  .concat(height + 5, 'px; left: 50%; margin-left: -')
                  .concat(Math.floor(width / 2), 'px;'),
                right: 'right: -'
                  .concat(width + 15, 'px;top: 50%; margin-top: -')
                  .concat(Math.floor(height / 2), 'px;'),
                bottom: 'bottom: -'
                  .concat(height + 10, 'px; left: 50%; margin-left: -')
                  .concat(Math.floor(width / 2), 'px;'),
                left: 'left: -'
                  .concat(width + 15, 'px;top: 50%; margin-top: -')
                  .concat(Math.floor(height / 2), 'px;'),
              };
            return position[placement] || position.top;
          },
        };
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Tip = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Tooltip__Tip',
          componentId: 'sc-1s2fcfh-0',
        })(
          [
            'background-color:',
            ';border-color:',
            ';border-radius:4px;color:',
            ';font-size:16px;font-weight:bold;opacity:',
            ';padding:4px 8px;position:absolute;text-align:center;transition:opacity 0.2s ease-in-out,visibility 0.2s ease-in-out;visibility:',
            ';z-index:100;',
            " &:before{content:'';position:absolute;",
            ';}',
          ],
          Colors.a.BLACK[700],
          Colors.a.BLACK[700],
          Colors.a.WHITE,
          function(props) {
            return props.show ? '1' : '0';
          },
          function(props) {
            return props.show ? 'visible' : 'hidden';
          },
          options.tipPosition,
          function(props) {
            return options.arrowPosition[props.placement];
          },
        ),
        Wrapper = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Tooltip__Wrapper',
          componentId: 'sc-1s2fcfh-1',
        })(
          [
            'cursor:default;position:relative;white-space:',
            ';',
            '{width:',
            ';}',
          ],
          function(props) {
            return props.length >= 36 ? 'initial' : 'nowrap';
          },
          Tip,
          function(props) {
            return props.length >= 36 ? '200px' : 'initial';
          },
        ),
        Tooltip_Tooltip = (function(_Component) {
          function Tooltip(props) {
            var _this;
            return (
              (function(instance, Constructor) {
                if (!(instance instanceof Constructor))
                  throw new TypeError('Cannot call a class as a function');
              })(this, Tooltip),
              ((_this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(Tooltip).call(this, props),
              )).handleEnter = function() {
                _this.setState({ show: !0 });
              }),
              (_this.handleLeave = function() {
                _this.setState({ show: !1 });
              }),
              (_this.state = { show: !1, width: null, height: null }),
              _this
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Tooltip, react['Component']),
            (Constructor = Tooltip),
            (protoProps = [
              {
                key: 'componentDidMount',
                value: function() {
                  this.measure();
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function(nextProps, nextState) {
                  var text = this.props.text,
                    _this$state = this.state,
                    show = _this$state.show,
                    width = _this$state.width,
                    height = _this$state.height;
                  return (
                    text !== nextProps.text ||
                    show !== nextState.show ||
                    width !== nextState.width ||
                    height !== nextState.height
                  );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.measure();
                },
              },
              {
                key: 'measure',
                value: function() {
                  var _this$tip = this.tip,
                    clientWidth = _this$tip.clientWidth,
                    clientHeight = _this$tip.clientHeight;
                  this.setState({ width: clientWidth, height: clientHeight });
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this2 = this,
                    _this$props = this.props,
                    children = _this$props.children,
                    placement = _this$props.placement,
                    text = _this$props.text,
                    _this$state2 = this.state,
                    width = _this$state2.width,
                    height = _this$state2.height,
                    show = _this$state2.show,
                    length = text.length;
                  return react_default.a.createElement(
                    Wrapper,
                    {
                      onMouseEnter: this.handleEnter,
                      onMouseLeave: this.handleLeave,
                      length: length,
                    },
                    react_default.a.createElement(
                      Tip,
                      {
                        ref: function(tip) {
                          _this2.tip = tip;
                        },
                        placement: placement,
                        width: width,
                        height: height,
                        show: show,
                      },
                      text,
                    ),
                    children,
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Tooltip
          );
          var Constructor, protoProps, staticProps;
        })();
      (Tooltip_Tooltip.propTypes = {
        text: prop_types_default.a.string,
        placement: prop_types_default.a.oneOf([
          'top',
          'right',
          'bottom',
          'left',
        ]),
        children: prop_types_default.a.oneOfType([
          prop_types_default.a.arrayOf(prop_types_default.a.node),
          prop_types_default.a.node,
        ]).isRequired,
      }),
        (Tooltip_Tooltip.defaultProps = { text: 'Tooltip', placement: 'top' });
      var components_Tooltip_Tooltip = Tooltip_Tooltip;
      (Tooltip_Tooltip.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'handleEnter',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handleLeave',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'measure',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Tooltip',
        props: {
          text: {
            defaultValue: { value: "'Tooltip'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Text that tooltip will show',
          },
          placement: {
            defaultValue: { value: "'top'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'top'", computed: !1 },
                { value: "'right'", computed: !1 },
                { value: "'bottom'", computed: !1 },
                { value: "'left'", computed: !1 },
              ],
            },
            required: !1,
            description: 'Define tooltip positioning',
          },
          children: {
            type: {
              name: 'union',
              value: [
                { name: 'arrayOf', value: { name: 'node' } },
                { name: 'node' },
              ],
            },
            required: !0,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Tooltip\\Tooltip.jsx'] = {
            name: 'Tooltip',
            docgenInfo: Tooltip_Tooltip.__docgenInfo,
            path: 'components\\Tooltip\\Tooltip.jsx',
          });
      __webpack_exports__.a = components_Tooltip_Tooltip;
    },
    326: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(362),
        __webpack_require__(157),
        __webpack_require__(39);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        theme = __webpack_require__(25),
        deprecated = __webpack_require__(8),
        sizeStr = function(_ref) {
          var size = _ref.size;
          return ''.concat(size, 'px');
        },
        Wrapper = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Loading__Wrapper',
          componentId: 'sc-1tyj5mn-0',
        })(
          [
            '',
            ';width:',
            ';height:',
            ';border-radius:',
            ';animation-duration:0.4s;animation-fill-mode:forwards;animation-name:',
            ' @keyframes show{0%{transform:scale(0);}60%{transform:scale(1.2);}}@keyframes hide{from{transform:scale(1);}to{transform:scale(0);opacity:0;}}',
          ],
          function(_ref2) {
            return _ref2.theme.mixins.transition();
          },
          sizeStr,
          sizeStr,
          sizeStr,
          function(_ref3) {
            return _ref3.visible ? 'show;' : 'hide;';
          },
        ),
        Svg = styled_components_browser_cjs_default.a.svg.withConfig({
          displayName: 'Loading__Svg',
          componentId: 'sc-1tyj5mn-1',
        })([
          'animation:rotate 2s linear infinite;@keyframes rotate{to{transform:rotate(360deg);}}',
        ]),
        Circle = styled_components_browser_cjs_default.a.circle.withConfig({
          displayName: 'Loading__Circle',
          componentId: 'sc-1tyj5mn-2',
        })(
          [
            'fill:none;stroke:',
            ';stroke-width:3;stroke-dasharray:110,200;stroke-dashoffset:-10;stroke-linecap:round;animation:dash 2s ease-in-out infinite;@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0;}50%{stroke-dasharray:110,200;stroke-dashoffset:-15;}100%{stroke-dasharray:110,200;stroke-dashoffset:-72;}}',
          ],
          deprecated.a.PRIMARY[500],
        ),
        Loading = function(_ref4) {
          var rest = Object.assign({}, _ref4);
          return react_default.a.createElement(
            styled_components_browser_cjs.ThemeProvider,
            { theme: theme.a },
            react_default.a.createElement(
              Wrapper,
              rest,
              react_default.a.createElement(
                Svg,
                { viewBox: '25 25 50 50' },
                react_default.a.createElement(Circle, {
                  cx: '50',
                  cy: '50',
                  r: '12',
                }),
              ),
            ),
          );
        };
      (Loading.defaultProps = {
        size: +theme.a.sizes.loading.replace('px', ''),
        visible: !0,
      }),
        (Loading.propTypes = {
          size: prop_types_default.a.number,
          visible: prop_types_default.a.bool,
        });
      var Loading_Loading = Loading;
      (Loading.__docgenInfo = {
        description: 'An svg stand alone loading element,',
        methods: [],
        displayName: 'Loading',
        props: {
          size: {
            defaultValue: {
              value: "Number(theme.sizes.loading.replace('px', ''))",
              computed: !0,
            },
            type: { name: 'number' },
            required: !1,
            description: 'SVG canvas size, in px',
          },
          visible: {
            defaultValue: { value: 'true', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: 'Toggles the visibilitty',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Loading\\Loading.jsx'] = {
            name: 'Loading',
            docgenInfo: Loading.__docgenInfo,
            path: 'components\\Loading\\Loading.jsx',
          });
      __webpack_exports__.a = Loading_Loading;
    },
    327: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return SimpleForm;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return SimpleFormCode;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          243,
        ),
        _components_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          37,
        ),
        _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          35,
        ),
        SimpleForm = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Form__WEBPACK_IMPORTED_MODULE_1__.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Input__WEBPACK_IMPORTED_MODULE_2__.a,
              { name: 'firstName', label: 'name' },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_3__.a,
              { name: 'submit', type: 'submit' },
              'Enviar',
            ),
          );
        },
        SimpleFormCode =
          '\n<Form>\n  <Input\n    name="firstName"\n    placeholder="name"\n  />\n  <Button\n    name="submit"\n    type="submit"\n  >\n    Enviar\n  </Button>\n</Form>';
      (SimpleForm.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SimpleForm',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Form\\SimpleForm.jsx'] = {
            name: 'SimpleForm',
            docgenInfo: SimpleForm.__docgenInfo,
            path: 'stories\\Form\\SimpleForm.jsx',
          });
    },
    328: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return SimpleValidation;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return SimpleValidationCode;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          243,
        ),
        _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97),
        _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          37,
        ),
        _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          35,
        ),
        SimpleValidation = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Form__WEBPACK_IMPORTED_MODULE_1__.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Input__WEBPACK_IMPORTED_MODULE_3__.a,
              {
                name: 'min',
                label: 'Digit at least 5 characters',
                validate:
                  _components_Form__WEBPACK_IMPORTED_MODULE_2__.a.MinLength,
                minLength: 5,
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_4__.a,
              { name: 'submit', type: 'submit' },
              'Enviar',
            ),
          );
        },
        SimpleValidationCode =
          '\n<Form>\n  <Input\n    name="min"\n    placeholder="Digit at least 5 characters"\n    validate={Validations.MinLength}\n    minLength={5}\n  />\n\n  <Button\n    name="submit"\n    type="submit"\n  >\n    Enviar\n  </Button>\n</Form>';
      (SimpleValidation.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'SimpleValidation',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Form\\SimpleValidation.jsx'] = {
            name: 'SimpleValidation',
            docgenInfo: SimpleValidation.__docgenInfo,
            path: 'stories\\Form\\SimpleValidation.jsx',
          });
    },
    329: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'b', function() {
        return AdvancedValidation;
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function() {
          return AdvancedValidationCode;
        });
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _components_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          243,
        ),
        _components_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97),
        _components_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          37,
        ),
        _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          35,
        ),
        AdvancedValidation = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_Form__WEBPACK_IMPORTED_MODULE_1__.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Input__WEBPACK_IMPORTED_MODULE_3__.a,
              {
                name: 'email',
                label: 'Required',
                validate: [
                  _components_Form__WEBPACK_IMPORTED_MODULE_2__.a.Required,
                  {
                    validate:
                      _components_Form__WEBPACK_IMPORTED_MODULE_2__.a.Email,
                    error: 'We need a valid e-mail',
                  },
                ],
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Input__WEBPACK_IMPORTED_MODULE_3__.a,
              {
                name: 'catho',
                label: 'This field only accepts Catho as a value',
                validate: function(_ref) {
                  return 'Catho' === _ref.value ? '' : 'Catho, please';
                },
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_Button__WEBPACK_IMPORTED_MODULE_4__.a,
              { name: 'submit', type: 'submit' },
              'Enviar',
            ),
          );
        },
        AdvancedValidationCode =
          '\n<Form>\n  <Input\n    name="email"\n    label="Required"\n    validate={[\n      Validations.Required,\n      {\n        validate: Validations.Email,\n        error: \'We need a valid e-mail\',\n      },\n    ]}\n  />\n  <Input\n    name="catho"\n    label="This field only accepts Catho as a value"\n    validate={\n      ({ value }) => (value === \'Catho\' ? \'\' : \'Catho, please\')\n    }\n  />\n  <Button\n    name="submit"\n    type="submit"\n  >\n    Enviar\n  </Button>\n</Form>';
      (AdvancedValidation.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'AdvancedValidation',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Form\\AdvancedValidation.jsx'] = {
            name: 'AdvancedValidation',
            docgenInfo: AdvancedValidation.__docgenInfo,
            path: 'stories\\Form\\AdvancedValidation.jsx',
          });
    },
    330: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(178);
      __webpack_exports__.a = _Loader__WEBPACK_IMPORTED_MODULE_0__.a;
    },
    331: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.d(__webpack_exports__, 'a', function() {
        return hide;
      }),
        __webpack_require__.d(__webpack_exports__, 'b', function() {
          return noGutters;
        });
      __webpack_require__(47);
      var _media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106),
        hide = function(props) {
          return (
            props.hide &&
            [].concat([], props.hide).map(function(prop) {
              return _media__WEBPACK_IMPORTED_MODULE_1__.a[prop]();
            })
          );
        },
        noGutters = function(_ref) {
          return _ref['no-gutters'] && '--gutter: 0px;';
        };
    },
    332: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(47);
      var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_11__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_12__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_13___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_13__,
        ),
        _shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(769);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Group = styled_components__WEBPACK_IMPORTED_MODULE_13___default()(
          _shared__WEBPACK_IMPORTED_MODULE_14__.a,
        ).withConfig({
          displayName: 'RadioGroup__Group',
          componentId: 'sc-1skshuk-0',
        })(['display:flex;flex-direction:', ';'], function(props) {
          return props.inline ? 'row' : 'column';
        }),
        RadioGroup = (function(_React$Component) {
          function RadioGroup() {
            var _this;
            return (
              (function(instance, Constructor) {
                if (!(instance instanceof Constructor))
                  throw new TypeError('Cannot call a class as a function');
              })(this, RadioGroup),
              ((_this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(RadioGroup).call(this),
              )).handleChange = function(e, value) {
                _this.setState(value);
              }),
              (_this.state = {}),
              _this
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(
              RadioGroup,
              react__WEBPACK_IMPORTED_MODULE_11___default.a.Component,
            ),
            (Constructor = RadioGroup),
            (protoProps = [
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    children = _this$props.children,
                    boxed = _this$props.boxed,
                    rest = _objectWithoutProperties(_this$props, [
                      'children',
                      'boxed',
                    ]);
                  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                    Group,
                    rest,
                    react__WEBPACK_IMPORTED_MODULE_11___default.a.Children.map(
                      children,
                      function(_ref) {
                        var Component = _ref.type,
                          props = _ref.props;
                        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(
                          Component,
                          _extends({ key: Component.displayName }, props, {
                            boxed: boxed,
                          }),
                        );
                      },
                    ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            RadioGroup
          );
          var Constructor, protoProps, staticProps;
        })();
      (RadioGroup.defaultProps = { boxed: !1, inline: !1 }),
        (RadioGroup.propTypes = {
          children: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.oneOfType(
            [
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.element,
              prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.arrayOf(
                prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.element,
              ),
            ],
          ).isRequired,
          boxed: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
          inline: prop_types__WEBPACK_IMPORTED_MODULE_12___default.a.bool,
        }),
        (__webpack_exports__.a = RadioGroup),
        (RadioGroup.__docgenInfo = {
          description: '',
          methods: [
            {
              name: 'handleChange',
              docblock: null,
              modifiers: [],
              params: [
                { name: 'e', type: null },
                { name: 'value', type: null },
              ],
              returns: null,
            },
          ],
          displayName: 'RadioGroup',
          props: {
            boxed: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: '',
            },
            inline: {
              defaultValue: { value: 'false', computed: !1 },
              type: { name: 'bool' },
              required: !1,
              description: '',
            },
            children: {
              type: {
                name: 'union',
                value: [
                  { name: 'element' },
                  { name: 'arrayOf', value: { name: 'element' } },
                ],
              },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Radio\\RadioGroup.jsx'] = {
            name: 'RadioGroup',
            docgenInfo: RadioGroup.__docgenInfo,
            path: 'components\\Radio\\RadioGroup.jsx',
          });
    },
    35: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        theme = __webpack_require__(25),
        skins = __webpack_require__(240),
        Icon = __webpack_require__(208);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var ButtonIcon = styled_components_browser_cjs_default()(
          Icon.a,
        ).withConfig({
          displayName: 'Button__ButtonIcon',
          componentId: 'sc-1ovnfsw-0',
        })(['margin-right:5px;pointer-events:none;']),
        StyledButton = styled_components_browser_cjs_default.a.button.withConfig(
          { displayName: 'Button__StyledButton', componentId: 'sc-1ovnfsw-1' },
        )(
          [
            'display:flex;align-items:center;justify-content:center;font-weight:bold;letter-spacing:0.2px;',
            ' ',
            ' ',
            ' ',
            ';',
            '{',
            '}',
            ' ',
            ' ',
            ' ',
            '',
          ],
          function(_ref) {
            var size = _ref.size,
              sizes = {
                xsmall: '12px',
                small: '12px',
                medium: '16px',
                large: '20px',
                xlarge: '24px',
              };
            return 'font-size: '.concat(sizes[size] || sizes.medium, ';');
          },
          function(_ref3) {
            var size = _ref3.size,
              paddings = {
                xsmall: '0 12px',
                small: '0 12px',
                medium: '0 16px',
                large: '0 16px',
                xlarge: '0 16px',
              };
            return 'padding: '.concat(paddings[size] || paddings.medium, ';');
          },
          function(_ref4) {
            var size = _ref4.size,
              heights = {
                xsmall: '24px',
                small: '32px',
                medium: '40px',
                large: '48px',
                xlarge: '56px',
              };
            return 'height: '.concat(heights[size] || heights.medium, ';');
          },
          theme.a.mixins.transition(),
          ButtonIcon,
          function(_ref2) {
            var size = _ref2.size,
              sizes = {
                xsmall: '16px',
                small: '16px',
                normal: '24px',
                large: '24px',
                xlarge: '24px',
              };
            return 'font-size: '.concat(sizes[size] || sizes.normal, ';');
          },
          function(props) {
            return 'cursor: '.concat(
              props.disabled ? 'not-allowed' : 'pointer',
              ';',
            );
          },
          function(props) {
            return props.full && 'width: 100%;';
          },
          function(props) {
            return (
              props.center &&
              '\n    margin-left: auto;\n    margin-right: auto;\n  '
            );
          },
          function(props) {
            var _skins = Object(skins.a)(props),
              unselected = _skins.unselected,
              selected = _skins.selected,
              disabled = _skins.disabled,
              focused = _skins.focused,
              hovered = _skins.hovered,
              decoration = _skins.decoration,
              borderRadius = _skins.borderRadius;
            return ''
              .concat(
                '\n      background-color: '
                  .concat(
                    props.disabled
                      ? disabled.background
                      : unselected.background,
                    ';\n      border: 1.5px solid ',
                  )
                  .concat(
                    props.disabled ? disabled.border : unselected.border,
                    ';\n\n      box-shadow: ',
                  )
                  .concat(
                    props.disabled ? disabled.shadow : unselected.shadow,
                    ';\n\n      color: ',
                  )
                  .concat(
                    props.disabled ? disabled.color : unselected.color,
                    ';\n\n      ',
                  )
                  .concat(
                    decoration
                      ? 'text-decoration: '.concat(decoration, ';')
                      : '',
                    '\n      ',
                  )
                  .concat(
                    borderRadius
                      ? 'border-radius: '.concat(borderRadius, ';')
                      : '',
                    '\n    ',
                  ),
                '\n\n      ',
                props.disabled
                  ? ''
                  : '\n        &:hover {\n          box-shadow: '
                      .concat(hovered.shadow, ';\n          background-color: ')
                      .concat(hovered.background, ';\n          border-color: ')
                      .concat(hovered.border, ';\n          color: ')
                      .concat(hovered.color, ';\n        }\n      '),
                '\n\n      &:focus {\n        box-shadow: ',
              )
              .concat(focused.shadow, ';\n        background-color: ')
              .concat(focused.background, ';\n        border-color: ')
              .concat(focused.border, ';\n        color: ')
              .concat(
                focused.color,
                ';\n      }\n\n      &:active {\n        box-shadow: ',
              )
              .concat(selected.shadow, ';\n        background-color: ')
              .concat(selected.background, ';\n        border-color: ')
              .concat(selected.border, ';\n        color: ')
              .concat(selected.color, ';\n      }\n    ');
          },
        ),
        Button = function(_ref5) {
          var children = _ref5.children,
            icon = _ref5.icon,
            size = _ref5.size,
            rest = _objectWithoutProperties(_ref5, [
              'children',
              'icon',
              'size',
            ]);
          return react_default.a.createElement(
            StyledButton,
            _extends({}, rest, { size: size }),
            icon &&
              react_default.a.createElement(ButtonIcon, {
                size: size,
                name: icon,
              }),
            children,
          );
        };
      (Button.defaultProps = {
        center: !1,
        disabled: !1,
        full: !1,
        icon: '',
        size: 'medium',
        skin: 'primary',
        type: 'button',
        children: 'Catho',
        onClick: function() {},
      }),
        (Button.propTypes = {
          center: prop_types_default.a.bool,
          disabled: prop_types_default.a.bool,
          full: prop_types_default.a.bool,
          icon: prop_types_default.a.string,
          size: prop_types_default.a.oneOf([
            'xsmall',
            'small',
            'medium',
            'large',
            'xlarge',
          ]),
          skin: prop_types_default.a.oneOf([
            'primary',
            'secondary',
            'action',
            'link',
          ]),
          type: prop_types_default.a.oneOf(['button', 'reset', 'submit']),
          children: prop_types_default.a.node,
          onClick: prop_types_default.a.func,
        });
      var Button_Button = Button;
      (Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Button',
        props: {
          center: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          disabled: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          full: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          icon: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description:
              'Icon name. The full catalogue can be found\r\n[here](/?selectedKind=1.%20Foundation&selectedStory=Icons)',
          },
          size: {
            defaultValue: { value: "'medium'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'xsmall'", computed: !1 },
                { value: "'small'", computed: !1 },
                { value: "'medium'", computed: !1 },
                { value: "'large'", computed: !1 },
                { value: "'xlarge'", computed: !1 },
              ],
            },
            required: !1,
            description: '',
          },
          skin: {
            defaultValue: { value: "'primary'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'primary'", computed: !1 },
                { value: "'secondary'", computed: !1 },
                { value: "'action'", computed: !1 },
                { value: "'link'", computed: !1 },
              ],
            },
            required: !1,
            description: '',
          },
          type: {
            defaultValue: { value: "'button'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'button'", computed: !1 },
                { value: "'reset'", computed: !1 },
                { value: "'submit'", computed: !1 },
              ],
            },
            required: !1,
            description: '',
          },
          children: {
            defaultValue: { value: "'Catho'", computed: !1 },
            type: { name: 'node' },
            required: !1,
            description: '',
          },
          onClick: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Button\\Button.jsx'] = {
            name: 'Button',
            docgenInfo: Button.__docgenInfo,
            path: 'components\\Button\\Button.jsx',
          });
      __webpack_exports__.a = Button_Button;
    },
    36: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
      __webpack_exports__.a = _Icon__WEBPACK_IMPORTED_MODULE_0__.a;
    },
    37: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
      __webpack_exports__.a = _Input__WEBPACK_IMPORTED_MODULE_0__.a;
    },
    42: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
      __webpack_exports__.a = _List__WEBPACK_IMPORTED_MODULE_0__.a;
    },
    44: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(135),
        __webpack_require__(136),
        __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(118),
        __webpack_require__(26),
        __webpack_require__(59),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(515),
        __webpack_require__(47);
      var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_11___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_11__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_12___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_12__,
        ),
        _shared__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(106),
        _shared__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(331),
        _shared__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(54);
      function _templateObject() {
        var strings,
          raw,
          data = ((strings = [
            '\n      grid-template-columns: repeat(',
            ', 1fr);\n    ',
          ]),
          raw || (raw = strings.slice(0)),
          Object.freeze(
            Object.defineProperties(strings, {
              raw: { value: Object.freeze(raw) },
            }),
          ));
        return (
          (_templateObject = function() {
            return data;
          }),
          data
        );
      }
      function _slicedToArray(arr, i) {
        return (
          (function(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function(arr, i) {
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          })()
        );
      }
      var Row = styled_components__WEBPACK_IMPORTED_MODULE_12___default.a.div.withConfig(
        { displayName: 'Row', componentId: 'tx22b8-0' },
      )(
        [
          'display:grid;grid-column-gap:var(--gutter);grid-row-gap:var(--gutter);margin-bottom:var(--gutter);grid-auto-columns:max-content;',
          ' ',
          ' ',
          '',
        ],
        function() {
          return Object.entries(_shared__WEBPACK_IMPORTED_MODULE_15__.a).map(
            function(_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                name = _ref2[0],
                columns = _ref2[1].columns;
              return _shared__WEBPACK_IMPORTED_MODULE_13__.b[name](
                _templateObject(),
                columns,
              );
            },
          );
        },
        _shared__WEBPACK_IMPORTED_MODULE_14__.a,
        _shared__WEBPACK_IMPORTED_MODULE_14__.b,
      );
      (Row.propTypes = {
        'no-gutters': prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.bool,
        hide: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.oneOf(
            Object.keys(_shared__WEBPACK_IMPORTED_MODULE_15__.a),
          ),
          prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(
            prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
          ),
        ]),
      }),
        (Row.defaultProps = { 'no-gutters': !1 }),
        (Row.displayName = 'Row'),
        (__webpack_exports__.a = Row);
    },
    457: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        Icon = __webpack_require__(36),
        deprecated = __webpack_require__(8),
        Wrapper = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Ribbon__Wrapper',
          componentId: 'sc-1sloaie-0',
        })(
          [
            'overflow:hidden;position:absolute;',
            ' &:before{background-color:',
            ';box-sizing:border-box;color:',
            ";content:'",
            "';font-size:8px;font-weight:bold;padding:10px 26px 0;position:absolute;text-align:center;text-transform:uppercase;",
            '}',
          ],
          function(_ref) {
            var wrapperHeight = _ref.wrapperHeight,
              wrapperWidth = _ref.wrapperWidth;
            return '\n  height: '
              .concat(wrapperHeight, 'px;\n  width: ')
              .concat(wrapperWidth, 'px;\n');
          },
          deprecated.a.PRIMARY[500],
          deprecated.a.WHITE,
          function(_ref3) {
            return _ref3.text;
          },
          function(_ref2) {
            var ribbonHeight = _ref2.ribbonHeight,
              ribbonWidth = _ref2.ribbonWidth,
              degrees = _ref2.degrees,
              top = _ref2.top,
              left = _ref2.left;
            return '\n  height: '
              .concat(ribbonHeight, 'px;\n  left: ')
              .concat(left, 'px;\n  top: ')
              .concat(top, 'px;\n  transform: rotate(')
              .concat(degrees, 'deg);\n  width: ')
              .concat(ribbonWidth, 'px;\n');
          },
        ),
        Ribbon = function(props) {
          return react_default.a.createElement(Wrapper, props);
        };
      (Ribbon.defaultProps = {
        wrapperHeight: 81,
        wrapperWidth: 114,
        ribbonHeight: 29,
        ribbonWidth: 150,
        degrees: -35,
        top: 17,
        left: -31,
      }),
        (Ribbon.propTypes = {
          degrees: prop_types_default.a.number,
          left: prop_types_default.a.number,
          ribbonHeight: prop_types_default.a.number,
          ribbonWidth: prop_types_default.a.number,
          text: prop_types_default.a.string.isRequired,
          top: prop_types_default.a.number,
          wrapperHeight: prop_types_default.a.number,
          wrapperWidth: prop_types_default.a.number,
        });
      var Ribbon_Ribbon = Ribbon;
      (Ribbon.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Ribbon',
        props: {
          wrapperHeight: {
            defaultValue: { value: '81', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          wrapperWidth: {
            defaultValue: { value: '114', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          ribbonHeight: {
            defaultValue: { value: '29', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          ribbonWidth: {
            defaultValue: { value: '150', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          degrees: {
            defaultValue: { value: '-35', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          top: {
            defaultValue: { value: '17', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          left: {
            defaultValue: { value: '-31', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          text: { type: { name: 'string' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Ribbon\\Ribbon.jsx'] = {
            name: 'Ribbon',
            docgenInfo: Ribbon.__docgenInfo,
            path: 'components\\Ribbon\\Ribbon.jsx',
          });
      var components_Ribbon = Ribbon_Ribbon,
        skins = (__webpack_require__(59), { p2p: deprecated.a.P2P[500] }),
        upDownBorders = '\n  border-left: '
          .concat('8px', ' solid transparent;\n  border-right: ')
          .concat(
            '8px',
            ' solid transparent;\n  left: 50%;\n  transform: translateX(-50%);\n',
          ),
        sideBorders = '\n  border-top: '
          .concat('8px', ' solid transparent;\n  border-bottom: ')
          .concat(
            '8px',
            ' solid transparent;\n  top: 50%;\n  transform: translateY(-50%);\n',
          ),
        mixins = {
          arrow: function(_ref) {
            var place = _ref.place;
            return {
              bottom: '\n        '
                .concat(upDownBorders, '\n        border-bottom: ')
                .concat(
                  '8px',
                  ' solid;\n        border-bottom-color: inherit;\n        top: -',
                )
                .concat('8px', ';\n      '),
              top: '\n        '
                .concat(upDownBorders, '\n        border-top: ')
                .concat(
                  '8px',
                  ' solid;\n        border-top-color: inherit;\n        bottom: -',
                )
                .concat('8px', ';\n      '),
              left: '\n        '
                .concat(sideBorders, '\n        border-left: ')
                .concat(
                  '8px',
                  ' solid;\n        border-left-color: inherit;\n        right: -',
                )
                .concat('8px', ';\n      '),
              right: '\n        '
                .concat(sideBorders, '\n        border-right: ')
                .concat(
                  '8px',
                  ' solid;\n        border-right-color: inherit;\n        left: -',
                )
                .concat('8px', ';\n      '),
              'top-left': '\n        '
                .concat(upDownBorders, '\n        border-top: ')
                .concat(
                  '8px',
                  ' solid;\n        border-top-color: inherit;\n        bottom: -',
                )
                .concat('8px', ';\n\n        right: ')
                .concat(
                  25,
                  'px;\n        transform: translateX(50%);\n        left: auto;\n      ',
                ),
              'top-right': '\n        '
                .concat(upDownBorders, '\n        border-top: ')
                .concat(
                  '8px',
                  ' solid;\n        border-top-color: inherit;\n        bottom: -',
                )
                .concat('8px', ';\n\n        left: ')
                .concat(
                  25,
                  'px;\n        transform: translateX(-50%);\n      ',
                ),
            }[place];
          },
          position: function(_ref2) {
            var place = _ref2.place,
              popoverHeight = _ref2.popoverHeight,
              popoverWidth = _ref2.popoverWidth,
              childrenWidth = _ref2.childrenWidth,
              positions = {
                top: 'top: -'
                  .concat(popoverHeight + 15, 'px; left: 50%; margin-left: -')
                  .concat(Math.floor(popoverWidth / 2), 'px;'),
                right: 'right: -'
                  .concat(popoverWidth + 15, 'px; top: 50%; margin-top: -')
                  .concat(Math.floor(popoverHeight / 2), 'px;'),
                left: 'left: -'
                  .concat(popoverWidth + 15, 'px; top: 50%; margin-top: -')
                  .concat(Math.floor(popoverHeight / 2), 'px;'),
                'top-left': 'top: -'
                  .concat(popoverHeight + 15, 'px; left: ')
                  .concat(
                    Math.floor(childrenWidth / 2) + 25,
                    'px; margin-left: -',
                  )
                  .concat(popoverWidth, 'px;'),
                'top-right': 'top: -'
                  .concat(popoverHeight + 15, 'px; left: -')
                  .concat(
                    Math.floor(childrenWidth / 2) + 25,
                    'px; margin-left: 100%;',
                  ),
              };
            return positions[place] || positions.top;
          },
          visibility: function(_ref3) {
            return _ref3.show
              ? '\n        opacity: 1;\n        visibility: visible;\n      '
              : '\n        opacity: 0;\n        visibility: hidden;\n      ';
          },
          skin: function(_ref4) {
            var name = _ref4.skin;
            return skins[name]
              ? '\n        border-color: '
                  .concat(skins[name], ';\n        background-color: ')
                  .concat(skins[name], ';\n        color: ')
                  .concat(deprecated.a.WHITE, ';\n      ')
              : '\n        border-color: '
                  .concat(deprecated.a.WHITE, ';\n        background-color: ')
                  .concat(deprecated.a.WHITE, ';\n      ');
          },
          title: function(_ref5) {
            return _ref5.title
              ? 'border-bottom: 1px solid '.concat(
                  deprecated.a.SECONDARY[50],
                  ';',
                )
              : 'padding-bottom: 0;';
          },
          justifyTitle: function(_ref6) {
            return _ref6.title ? 'space-between' : 'flex-end';
          },
          ribbonPadding: function(_ref7) {
            return _ref7.ribbon && 'padding-top: 30px;';
          },
        },
        theme = __webpack_require__(25);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Popover_Wrapper = styled_components_browser_cjs_default.a.div.withConfig(
          { displayName: 'Popover__Wrapper', componentId: 'sc-94rrmp-0' },
        )(['position:relative;display:inline-block;']),
        PopoverContainer = styled_components_browser_cjs_default.a.div.withConfig(
          {
            displayName: 'Popover__PopoverContainer',
            componentId: 'sc-94rrmp-1',
          },
        )(
          [
            'border-radius:8px;box-shadow:0 3px 3px 0 ',
            ',0 8px 14px 3px ',
            ',0 8px 10px 1px ',
            ";position:absolute;transition:opacity 0.2s ease-in-out,visibility 0.2s ease-in-out;z-index:100;&:after{content:'';position:absolute;",
            ';}',
            ' ',
            ' ',
            ' ',
            '',
          ],
          theme.a.mixins.hexToRgba(deprecated.a.BLACK, 0.2),
          theme.a.mixins.hexToRgba(deprecated.a.BLACK, 0.12),
          theme.a.mixins.hexToRgba(deprecated.a.BLACK, 0.14),
          mixins.arrow,
          mixins.position,
          mixins.visibility,
          mixins.skin,
          mixins.shadow,
        ),
        Header = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Popover__Header',
          componentId: 'sc-94rrmp-2',
        })(
          [
            'align-items:center;display:flex;justify-content:',
            ';padding:',
            ';',
            ';',
          ],
          mixins.justifyTitle,
          '18px 24px',
          mixins.title,
        ),
        Content = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Popover__Content',
          componentId: 'sc-94rrmp-3',
        })(['padding:', ';', ';'], '18px 24px', mixins.ribbonPadding),
        CloseIcon = styled_components_browser_cjs_default()(Icon.a).withConfig({
          displayName: 'Popover__CloseIcon',
          componentId: 'sc-94rrmp-4',
        })(['cursor:pointer;']),
        ChildrenContainer = styled_components_browser_cjs_default.a.div.withConfig(
          {
            displayName: 'Popover__ChildrenContainer',
            componentId: 'sc-94rrmp-5',
          },
        )(['']),
        Popover_Popover = (function(_Component) {
          function Popover(props) {
            var _this;
            return (
              (function(instance, Constructor) {
                if (!(instance instanceof Constructor))
                  throw new TypeError('Cannot call a class as a function');
              })(this, Popover),
              ((_this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(Popover).call(this, props),
              )).toggleVisibility = function(event) {
                event.preventDefault(),
                  _this.setState(function(_ref) {
                    return { show: !_ref.show };
                  });
              }),
              (_this.hide = function() {
                _this.setState({ show: !1 });
              }),
              (_this.handleClickOutside = function(_ref2) {
                var target = _ref2.target;
                _this.wrapperRef.contains(target) || _this.hide();
              }),
              (_this.state = {
                show: props.show,
                popoverMeasures: { width: null, height: null },
                childrenMeasures: { width: null, height: null },
              }),
              _this
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Popover, react['Component']),
            (Constructor = Popover),
            (protoProps = [
              {
                key: 'componentDidMount',
                value: function() {
                  this.measure(),
                    document.addEventListener(
                      'mousedown',
                      this.handleClickOutside,
                    );
                },
              },
              {
                key: 'shouldComponentUpdate',
                value: function(nextProps, nextState) {
                  var _this$props = this.props,
                    title = _this$props.title,
                    content = _this$props.content,
                    place = _this$props.place,
                    show = _this$props.show,
                    _this$state = this.state,
                    ribbon = _this$state.ribbon,
                    stateShow = _this$state.show,
                    popoverMeasures = _this$state.popoverMeasures,
                    childrenMeasures = _this$state.childrenMeasures;
                  return (
                    title !== nextProps.title ||
                    content !== nextProps.content ||
                    place !== nextProps.place ||
                    show !== nextProps.show ||
                    ribbon !== nextState.ribbon ||
                    stateShow !== nextState.show ||
                    popoverMeasures.width !== nextState.popoverMeasures.width ||
                    popoverMeasures.height !==
                      nextState.popoverMeasures.height ||
                    childrenMeasures.width !==
                      nextState.childrenMeasures.width ||
                    childrenMeasures.height !==
                      nextState.childrenMeasures.height
                  );
                },
              },
              {
                key: 'componentDidUpdate',
                value: function() {
                  this.measure();
                },
              },
              {
                key: 'componentWillUnmount',
                value: function() {
                  document.removeEventListener(
                    'mousedown',
                    this.handleClickOutside,
                  );
                },
              },
              {
                key: 'measure',
                value: function() {
                  var _this$popoverRef = this.popoverRef,
                    popoverWidth = _this$popoverRef.clientWidth,
                    popoverHeight = _this$popoverRef.clientHeight,
                    _this$childrenRef = this.childrenRef,
                    childrenWidth = _this$childrenRef.clientWidth,
                    childrenHeight = _this$childrenRef.clientHeight;
                  this.setState({
                    popoverMeasures: {
                      width: popoverWidth,
                      height: popoverHeight,
                    },
                    childrenMeasures: {
                      width: childrenWidth,
                      height: childrenHeight,
                    },
                  });
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this2 = this,
                    _this$props2 = this.props,
                    title = _this$props2.title,
                    content = _this$props2.content,
                    children = _this$props2.children,
                    closeTitle = _this$props2.closeTitle,
                    ribbon = _this$props2.ribbon,
                    rest = _objectWithoutProperties(_this$props2, [
                      'title',
                      'content',
                      'children',
                      'closeTitle',
                      'ribbon',
                    ]),
                    _this$state2 = this.state,
                    show = _this$state2.show,
                    _this$state2$popoverM = _this$state2.popoverMeasures,
                    popoverWidth = _this$state2$popoverM.width,
                    popoverHeight = _this$state2$popoverM.height,
                    _this$state2$children = _this$state2.childrenMeasures,
                    childrenWidth = _this$state2$children.width,
                    childrenHeight = _this$state2$children.height;
                  return react_default.a.createElement(
                    Popover_Wrapper,
                    {
                      ref: function(_ref5) {
                        _this2.wrapperRef = _ref5;
                      },
                    },
                    react_default.a.createElement(
                      PopoverContainer,
                      _extends(
                        {},
                        rest,
                        {
                          popoverWidth: popoverWidth,
                          popoverHeight: popoverHeight,
                          childrenWidth: childrenWidth,
                          childrenHeight: childrenHeight,
                        },
                        {
                          show: show,
                          ref: function(_ref3) {
                            _this2.popoverRef = _ref3;
                          },
                        },
                      ),
                      ribbon &&
                        react_default.a.createElement(components_Ribbon, {
                          text: ribbon,
                        }),
                      react_default.a.createElement(
                        Header,
                        { title: title },
                        title &&
                          react_default.a.createElement('span', null, title),
                        react_default.a.createElement(CloseIcon, {
                          name: 'close',
                          onClick: this.hide,
                          title: closeTitle,
                        }),
                      ),
                      react_default.a.createElement(
                        Content,
                        { ribbon: ribbon },
                        content,
                      ),
                    ),
                    react_default.a.createElement(
                      ChildrenContainer,
                      {
                        onClick: this.toggleVisibility,
                        ref: function(_ref4) {
                          _this2.childrenRef = _ref4;
                        },
                      },
                      children,
                    ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Popover
          );
          var Constructor, protoProps, staticProps;
        })();
      (Popover_Popover.propTypes = {
        title: prop_types_default.a.string,
        closeTitle: prop_types_default.a.string,
        ribbon: prop_types_default.a.string,
        skin: prop_types_default.a.oneOf(['default', 'p2p']),
        place: prop_types_default.a.oneOf([
          'top',
          'top-right',
          'top-left',
          'right',
          'left',
        ]),
        show: prop_types_default.a.bool,
        content: prop_types_default.a.node,
        children: prop_types_default.a.node,
      }),
        (Popover_Popover.defaultProps = {
          title: '',
          closeTitle: '',
          ribbon: '',
          skin: 'default',
          place: 'top',
          show: !1,
          content: '',
          children: '',
        });
      var components_Popover_Popover = Popover_Popover;
      (Popover_Popover.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'toggleVisibility',
            docblock: null,
            modifiers: [],
            params: [{ name: 'event', type: null }],
            returns: null,
          },
          {
            name: 'hide',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
          {
            name: 'handleClickOutside',
            docblock: null,
            modifiers: [],
            params: [{ name: '{ target }', type: null }],
            returns: null,
          },
          {
            name: 'measure',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Popover',
        props: {
          title: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          closeTitle: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          ribbon: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          skin: {
            defaultValue: { value: "'default'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'default'", computed: !1 },
                { value: "'p2p'", computed: !1 },
              ],
            },
            required: !1,
            description: '',
          },
          place: {
            defaultValue: { value: "'top'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'top'", computed: !1 },
                { value: "'top-right'", computed: !1 },
                { value: "'top-left'", computed: !1 },
                { value: "'right'", computed: !1 },
                { value: "'left'", computed: !1 },
              ],
            },
            required: !1,
            description: '',
          },
          show: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          content: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'node' },
            required: !1,
            description: '',
          },
          children: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'node' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Popover\\Popover.jsx'] = {
            name: 'Popover',
            docgenInfo: Popover_Popover.__docgenInfo,
            path: 'components\\Popover\\Popover.jsx',
          });
      __webpack_exports__.a = components_Popover_Popover;
    },
    54: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_exports__.a = {
        xsmall: { width: 1, columns: 4 },
        small: { width: 600, columns: 8 },
        medium: { width: 1024, columns: 12 },
        large: { width: 1440, columns: 12 },
        xlarge: { width: 1920, columns: 12 },
      };
    },
    55: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(250),
        __webpack_require__(492);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        Colors = __webpack_require__(10),
        Icon = __webpack_require__(36);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      var skinFontColors = {
          inverted: Colors.a.WHITE,
          blue: Colors.a.BLUE[500],
          success: Colors.a.SUCCESS[900],
          warning: Colors.a.WARNING[900],
          error: Colors.a.ERROR[900],
          'blue-text': Colors.a.BLUE[500],
        },
        skins = {
          default: 'background-color: '.concat(Colors.a.BLACK[100], ';'),
          stroked: '\n    border: 1px solid;\n    background: none;\n  ',
          inverted: '\n    color: '
            .concat(skinFontColors.inverted, '\n    background-color: ')
            .concat(Colors.a.BLACK[400], ';\n  '),
          blue: '\n    color: '
            .concat(skinFontColors.blue, '\n    background-color: ')
            .concat(Colors.a.BLUE[200], ';\n  '),
          success: '\n    color: '
            .concat(skinFontColors.success, '\n    background-color: ')
            .concat(Colors.a.SUCCESS[200], ';\n  '),
          warning: '\n    color: '
            .concat(skinFontColors.warning, '\n    background-color: ')
            .concat(Colors.a.WARNING[200], ';\n  '),
          error: '\n    color: '
            .concat(skinFontColors.error, '\n    background-color: ')
            .concat(Colors.a.ERROR[200], ';\n  '),
          'blue-text': '\n    color: '
            .concat(skinFontColors['blue-text'], '\n    background-color: ')
            .concat(Colors.a.BLACK[100], ';\n  '),
        },
        sizes = {
          small:
            '\n    font-size: 12px;\n    padding-top: 3px;\n    padding-bottom: 3px;\n  ',
          large: '\n    font-size: 18px;\n  ',
        },
        Wrapper = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Tag__Wrapper',
          componentId: 'sc-1i8fike-0',
        })(
          [
            'border-radius:8px;box-sizing:border-box;display:inline-block;margin-right:8px;padding:4px 12px;',
            ' ',
            ' ',
            '',
          ],
          function(_ref) {
            return _ref.bold && 'font-weight: bold;';
          },
          function(_ref2) {
            var skin = _ref2.skin;
            return skins[skin];
          },
          function(_ref3) {
            var size = _ref3.size;
            return sizes[size];
          },
        ),
        Content = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Tag__Content',
          componentId: 'sc-1i8fike-1',
        })(['', ''], function(_ref4) {
          return (
            _ref4.closable &&
            '\n    display: flex;\n    align-items: center;\n  '
          );
        }),
        iconSizes = { small: '14px', medium: '18px', large: '20px' },
        applyIconSize = function(_ref5) {
          var size = _ref5.size;
          return iconSizes[size];
        },
        SmallIcon = styled_components_browser_cjs_default()(Icon.a).withConfig({
          displayName: 'Tag__SmallIcon',
          componentId: 'sc-1i8fike-2',
        })(['']),
        CloseButton = styled_components_browser_cjs_default.a.button.withConfig(
          { displayName: 'Tag__CloseButton', componentId: 'sc-1i8fike-3' },
        )(
          [
            'background:none;border:none;cursor:pointer;height:18px;margin-left:4px;padding:0;height:',
            ';',
            '{font-size:',
            ';color:',
            ';}',
          ],
          applyIconSize,
          SmallIcon,
          applyIconSize,
          function(_ref6) {
            var skin = _ref6.skin;
            return skinFontColors[skin];
          },
        );
      CloseButton.displayName = 'CloseButton';
      var Tag_Tag = (function(_Component) {
        function Tag(props) {
          var _this, self, call;
          return (
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Tag),
            (self = this),
            ((_this =
              !(call = _getPrototypeOf(Tag).call(this, props)) ||
              ('object' !== _typeof(call) && 'function' != typeof call)
                ? _assertThisInitialized(self)
                : call).state = { hidden: !1 }),
            (_this.hide = _this.hide.bind(
              _assertThisInitialized(_assertThisInitialized(_this)),
            )),
            _this
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Tag, react['Component']),
          (Constructor = Tag),
          (protoProps = [
            {
              key: 'hide',
              value: function() {
                this.setState({ hidden: !0 });
              },
            },
            {
              key: 'render',
              value: function() {
                if (this.state.hidden) return '';
                var _this$props = this.props,
                  children = _this$props.children,
                  text = _this$props.text,
                  closable = _this$props.closable,
                  rest = _objectWithoutProperties(_this$props, [
                    'children',
                    'text',
                    'closable',
                  ]);
                return react_default.a.createElement(
                  Wrapper,
                  rest,
                  react_default.a.createElement(
                    Content,
                    { closable: closable },
                    children || text,
                    closable &&
                      react_default.a.createElement(
                        CloseButton,
                        _extends({}, rest, { onClick: this.hide }),
                        react_default.a.createElement(SmallIcon, {
                          name: 'close',
                        }),
                      ),
                  ),
                );
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Tag
        );
        var Constructor, protoProps, staticProps;
      })();
      (Tag_Tag.propTypes = {
        bold: prop_types_default.a.bool,
        children: prop_types_default.a.string,
        closable: prop_types_default.a.bool,
        size: prop_types_default.a.oneOf(['small', 'medium', 'large']),
        skin: prop_types_default.a.oneOf([
          'default',
          'stroked',
          'inverted',
          'blue',
          'success',
          'warning',
          'error',
          'blue-text',
        ]),
        text: prop_types_default.a.string,
      }),
        (Tag_Tag.defaultProps = {
          bold: !1,
          children: '',
          closable: !1,
          size: 'medium',
          skin: 'default',
          text: 'Tag text',
        });
      var components_Tag_Tag = Tag_Tag;
      (Tag_Tag.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'hide',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Tag',
        props: {
          bold: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          children: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          closable: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          size: {
            defaultValue: { value: "'medium'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'small'", computed: !1 },
                { value: "'medium'", computed: !1 },
                { value: "'large'", computed: !1 },
              ],
            },
            required: !1,
            description: '',
          },
          skin: {
            defaultValue: { value: "'default'", computed: !1 },
            type: {
              name: 'enum',
              value: [
                { value: "'default'", computed: !1 },
                { value: "'stroked'", computed: !1 },
                { value: "'inverted'", computed: !1 },
                { value: "'blue'", computed: !1 },
                { value: "'success'", computed: !1 },
                { value: "'warning'", computed: !1 },
                { value: "'error'", computed: !1 },
                { value: "'blue-text'", computed: !1 },
              ],
            },
            required: !1,
            description: '',
          },
          text: {
            defaultValue: { value: "'Tag text'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Tag\\Tag.jsx'] = {
            name: 'Tag',
            docgenInfo: Tag_Tag.__docgenInfo,
            path: 'components\\Tag\\Tag.jsx',
          });
      __webpack_exports__.a = components_Tag_Tag;
    },
    61: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        cjs = __webpack_require__(744),
        cjs_default = __webpack_require__.n(cjs);
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var Image = function(_ref) {
        var src = _ref.src,
          alt = _ref.alt,
          props = _objectWithoutProperties(_ref, ['src', 'alt']);
        return react_default.a.createElement(
          cjs_default.a,
          _extends({ src: src, alt: alt, decode: !1 }, props),
        );
      };
      (Image.defaultProps = { loader: null, unloader: null }),
        (Image.propTypes = {
          src: prop_types_default.a.oneOfType([
            prop_types_default.a.string,
            prop_types_default.a.arrayOf(prop_types_default.a.string),
          ]).isRequired,
          alt: prop_types_default.a.string.isRequired,
          loader: prop_types_default.a.node,
          unloader: prop_types_default.a.node,
        });
      var Image_Image = Image;
      (Image.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Image',
        props: {
          loader: {
            defaultValue: { value: 'null', computed: !1 },
            type: { name: 'node' },
            required: !1,
            description:
              'Show an element before the image is loaded. This accepts any valid react element.',
          },
          unloader: {
            defaultValue: { value: 'null', computed: !1 },
            type: { name: 'node' },
            required: !1,
            description:
              'Show a fallback element if non of the images could be loaded.\r\nThis accepts any valid react element.',
          },
          src: {
            type: {
              name: 'union',
              value: [
                { name: 'string' },
                { name: 'arrayOf', value: { name: 'string' } },
              ],
            },
            required: !0,
            description: '',
          },
          alt: { type: { name: 'string' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Image\\Image.jsx'] = {
            name: 'Image',
            docgenInfo: Image.__docgenInfo,
            path: 'components\\Image\\Image.jsx',
          });
      __webpack_exports__.a = Image_Image;
    },
    62: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(157);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        deprecated = __webpack_require__(8),
        Button = __webpack_require__(35),
        ButtonWrapper = styled_components_browser_cjs_default()(
          Button.a,
        ).withConfig({
          displayName: 'Button__ButtonWrapper',
          componentId: 'sc-1l2aond-0',
        })([
          'background-color:transparent;padding:0;box-shadow:none;text-transform:uppercase;font-size:12px;margin-right:10px;&:active{box-shadow:none;background-color:transparent;border:1px solid transparent;}',
        ]),
        Button_Button = function(props) {
          return react_default.a.createElement(ButtonWrapper, props);
        };
      Button_Button.displayName = 'Card.Button';
      var sub_components_Button = Button_Button;
      (Button_Button.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card.Button',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\Button.jsx'
          ] = {
            name: 'Button',
            docgenInfo: Button_Button.__docgenInfo,
            path: 'components\\Card\\sub-components\\Button.jsx',
          });
      var ContainerWrapper = styled_components_browser_cjs_default.a.div.withConfig(
          {
            displayName: 'Container__ContainerWrapper',
            componentId: 'sc-1sbm0kr-0',
          },
        )(
          ['display:flex;margin:0 auto;flex-direction:', ';padding:', ';'],
          function(props) {
            return props.horizontal ? 'row' : 'column';
          },
          function(props) {
            return props.noGutter ? '0' : '15px';
          },
        ),
        Container = function(props) {
          return react_default.a.createElement(ContainerWrapper, props);
        };
      Container.displayName = 'Card.Container';
      var sub_components_Container = Container;
      (Container.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card.Container',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\Container.jsx'
          ] = {
            name: 'Container',
            docgenInfo: Container.__docgenInfo,
            path: 'components\\Card\\sub-components\\Container.jsx',
          });
      var Image = __webpack_require__(61),
        RoundedImage = styled_components_browser_cjs_default()(
          Image.a,
        ).withConfig({
          displayName: 'Thumbnail__RoundedImage',
          componentId: 'sc-18453ay-0',
        })(
          [
            'background-color:',
            ';padding:5px;width:32px;height:32px;border-radius:50%;margin-top:5px;margin-right:15px;',
          ],
          deprecated.a.SECONDARY[50],
        ),
        Thumbnail = function(props) {
          return react_default.a.createElement(RoundedImage, props);
        };
      Thumbnail.displayName = 'Card.Thumbnail';
      var sub_components_Thumbnail = Thumbnail;
      (Thumbnail.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card.Thumbnail',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\Thumbnail.jsx'
          ] = {
            name: 'Thumbnail',
            docgenInfo: Thumbnail.__docgenInfo,
            path: 'components\\Card\\sub-components\\Thumbnail.jsx',
          });
      var TextWrapper = styled_components_browser_cjs_default.a.h1.withConfig({
          displayName: 'HeaderText__TextWrapper',
          componentId: 'sc-15zd9gn-0',
        })(
          [
            'display:flex;flex-direction:column;margin:0;padding:0;p{color:',
            ';}',
          ],
          deprecated.a.SECONDARY[200],
        ),
        TitleWrapper = styled_components_browser_cjs_default.a.header.withConfig(
          {
            displayName: 'HeaderText__TitleWrapper',
            componentId: 'sc-15zd9gn-1',
          },
        )(['font-size:18px;font-weight:bold;margin:0;padding:0;']),
        SupportWrapper = styled_components_browser_cjs_default.a.p.withConfig({
          displayName: 'HeaderText__SupportWrapper',
          componentId: 'sc-15zd9gn-2',
        })(['font-size:14px;margin-top:5px;padding:0;']),
        Title = function(props) {
          return react_default.a.createElement(TitleWrapper, props);
        },
        SupportText = function(props) {
          return react_default.a.createElement(SupportWrapper, props);
        },
        HeaderText = function(props) {
          return react_default.a.createElement(TextWrapper, props);
        };
      (Title.displayName = 'Card.Title'),
        (SupportText.displayName = 'Card.SupportText'),
        (HeaderText.displayName = 'Card.HeaderText'),
        (HeaderText.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Card.HeaderText',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\HeaderText.jsx'
          ] = {
            name: 'HeaderText',
            docgenInfo: HeaderText.__docgenInfo,
            path: 'components\\Card\\sub-components\\HeaderText.jsx',
          }),
        (Title.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Card.Title',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\HeaderText.jsx'
          ] = {
            name: 'Title',
            docgenInfo: Title.__docgenInfo,
            path: 'components\\Card\\sub-components\\HeaderText.jsx',
          }),
        (SupportText.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Card.SupportText',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\HeaderText.jsx'
          ] = {
            name: 'SupportText',
            docgenInfo: SupportText.__docgenInfo,
            path: 'components\\Card\\sub-components\\HeaderText.jsx',
          });
      var MediaWrapper = styled_components_browser_cjs_default()(
          Image.a,
        ).withConfig({
          displayName: 'Media__MediaWrapper',
          componentId: 'sc-7nlm1k-0',
        })(['background-color:', ';'], deprecated.a.SECONDARY[100]),
        Media = function(props) {
          return react_default.a.createElement(MediaWrapper, props);
        };
      Media.displayName = 'Card.Media';
      var sub_components_Media = Media;
      (Media.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card.Media',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\Media.jsx'
          ] = {
            name: 'Media',
            docgenInfo: Media.__docgenInfo,
            path: 'components\\Card\\sub-components\\Media.jsx',
          });
      var Line = styled_components_browser_cjs_default.a.hr.withConfig({
          displayName: 'Divider__Line',
          componentId: 'sc-1h7e2zm-0',
        })(
          ['width:100%;border:none;border-top:1px solid ', ';margin-top:15px;'],
          deprecated.a.SECONDARY[50],
        ),
        Divider = function() {
          return react_default.a.createElement(Line, null);
        };
      Divider.displayName = 'Card.Divider';
      var sub_components_Divider = Divider;
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      (Divider.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Card.Divider',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Card\\sub-components\\Divider.jsx'
          ] = {
            name: 'Divider',
            docgenInfo: Divider.__docgenInfo,
            path: 'components\\Card\\sub-components\\Divider.jsx',
          });
      var CardWrapper = styled_components_browser_cjs_default.a.article.withConfig(
          { displayName: 'Card__CardWrapper', componentId: 'om5cci-0' },
        )(
          [
            'background-color:',
            ';border-radius:2px;display:inline-block;position:relative;transition:all 0.3s cubic-bezier(0.25,0.8,0.25,1);overflow:hidden;width:300px;',
            ';',
          ],
          deprecated.a.WHITE,
          function(_ref) {
            var level = _ref.elevation,
              hoverLevel = _ref.hoverElevation,
              elev = +level,
              hovElev = hoverLevel ? +hoverLevel : 0;
            return '\n    box-shadow: 0 '
              .concat(elev * elev, 'px ')
              .concat(elev * elev * 2, 'px rgba(0, 0, 0, 0.12), 0 ')
              .concat(elev, 'px ')
              .concat(2 * elev, 'px rgba(0, 0, 0, 0.24);\n\n    ')
              .concat(
                hoverLevel &&
                  '&:hover {\n      box-shadow: 0 '
                    .concat(hovElev * hovElev, 'px ')
                    .concat(hovElev * hovElev * 2, 'px rgba(0, 0, 0, 0.12), 0 ')
                    .concat(hovElev, 'px ')
                    .concat(2 * hovElev, 'px rgba(0, 0, 0, 0.24);\n    }'),
                '\n  ',
              );
          },
        ),
        Card_Card = (function(_React$Component) {
          function Card() {
            var _getPrototypeOf2, _temp, _this;
            !(function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Card);
            for (
              var _len = arguments.length, args = Array(_len), _key = 0;
              _key < _len;
              _key++
            )
              args[_key] = arguments[_key];
            return _possibleConstructorReturn(
              _this,
              ((_temp = _this = _possibleConstructorReturn(
                this,
                (_getPrototypeOf2 = _getPrototypeOf(Card)).call.apply(
                  _getPrototypeOf2,
                  [this].concat(args),
                ),
              )),
              (_this.render = function() {
                return react_default.a.createElement(CardWrapper, _this.props);
              }),
              _temp),
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Card, react_default.a.Component),
            Card
          );
        })();
      (Card_Card.Button = sub_components_Button),
        (Card_Card.Container = sub_components_Container),
        (Card_Card.Thumbnail = sub_components_Thumbnail),
        (Card_Card.HeaderText = HeaderText),
        (Card_Card.Title = Title),
        (Card_Card.SupportText = SupportText),
        (Card_Card.Media = sub_components_Media),
        (Card_Card.Divider = sub_components_Divider),
        (Card_Card.defaultProps = { elevation: 1, hoverElevation: 0 }),
        (Card_Card.propTypes = {
          elevation: prop_types_default.a.number,
          hoverElevation: prop_types_default.a.number,
        });
      var components_Card_Card = Card_Card;
      (Card_Card.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'render',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'Card',
        props: {
          elevation: {
            defaultValue: { value: '1', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          hoverElevation: {
            defaultValue: { value: '0', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Card\\Card.jsx'] = {
            name: 'Card',
            docgenInfo: Card_Card.__docgenInfo,
            path: 'components\\Card\\Card.jsx',
          });
      __webpack_exports__.a = components_Card_Card;
    },
    68: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_1__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36),
        _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54),
        _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          8,
        ),
        StepIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(
          _Icon__WEBPACK_IMPORTED_MODULE_3__.a,
        ).withConfig({
          displayName: 'Step__StepIcon',
          componentId: 'sc-1lfyhjt-0',
        })(['position:relative;top:-42px;', ';'], function(_ref) {
          var status = _ref.status,
            statusColors = {
              normal:
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                  .SECONDARY[100],
              active: _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a.WHITE,
              done:
                _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a.BRAND1[500],
            };
          return 'color: '.concat(
            statusColors[status] || statusColors.normal,
            ';',
          );
        }),
        ProgressStep = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig(
          { displayName: 'Step__ProgressStep', componentId: 'sc-1lfyhjt-1' },
        )(
          [
            'list-style-type:none;flex-grow:1;flex:1;font-size:12px;position:relative;text-align:center;margin-top:50px;@media (max-width:',
            "px){font-size:10px;}&:after{position:absolute;top:15px;left:-50%;width:100%;height:2px;content:'';z-index:-1;}&:before{width:36px;height:36px;line-height:30px;content:'';display:block;text-align:center;margin:0 auto 10px;border-radius:50%;}&:first-child:after{content:none;}",
            ';',
          ],
          _shared__WEBPACK_IMPORTED_MODULE_4__.a.phone,
          function(_ref2) {
            var status = _ref2.status,
              stepColors = {
                normal: '\n      color: '
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .SECONDARY[400],
                    ';\n\n      &:after {\n        background-color: ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .SECONDARY[100],
                    ';\n      }\n\n      &:before {\n        background-color: ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a.WHITE,
                    ';\n        border: 2px solid ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .SECONDARY[100],
                    ';\n      }\n    ',
                  ),
                active: '\n      color: '
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .BRAND1[500],
                    ';\n\n      &:after {\n        background-color: ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .BRAND1[500],
                    ';\n      }\n\n      &:before {\n        background-color: ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .BRAND1[500],
                    ';\n        border: 2px solid ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .BRAND1[500],
                    ';\n      }\n    ',
                  ),
                done: '\n      color: '
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .SECONDARY[400],
                    ';\n\n      &:after {\n        background-color: ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .BRAND1[500],
                    ';\n      }\n\n      &:before {\n        background-color: ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a.WHITE,
                    ';\n        border: 2px solid ',
                  )
                  .concat(
                    _Colors_deprecated__WEBPACK_IMPORTED_MODULE_5__.a
                      .BRAND1[500],
                    ';\n      }\n    ',
                  ),
              };
            return stepColors[status] || stepColors.normal;
          },
        ),
        Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig(
          { displayName: 'Step__Title', componentId: 'sc-1lfyhjt-2' },
        )(
          [
            'position:absolute;top:-24px;margin:0 auto;padding:4px;overflow:hidden;width:100%;word-wrap:break-word;@media (min-width:',
            'px) and (max-width:',
            'px){top:-34px;}@media (max-width:',
            'px){top:-30px;}',
          ],
          _shared__WEBPACK_IMPORTED_MODULE_4__.a.phone + 1,
          _shared__WEBPACK_IMPORTED_MODULE_4__.a.tablet,
          _shared__WEBPACK_IMPORTED_MODULE_4__.a.phone,
        ),
        statusTypes = ['', 'active', 'done'],
        Step = function(_ref3) {
          var title = _ref3.title,
            status = _ref3.status,
            icon = _ref3.icon;
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            ProgressStep,
            { status: status },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              Title,
              null,
              title,
            ),
            icon &&
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                StepIcon,
                { status: status, name: icon },
              ),
          );
        };
      (Step.propTypes = {
        title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
          prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
        ]).isRequired,
        icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
        status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(
          statusTypes,
        ),
      }),
        (Step.defaultProps = { status: '', icon: '' }),
        (StepIcon.propTypes = {
          status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(
            statusTypes,
          ),
        }),
        (__webpack_exports__.a = Step),
        (Step.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Step',
          props: {
            status: {
              defaultValue: { value: "''", computed: !1 },
              type: {
                name: 'enum',
                value: [
                  { value: "''", computed: !1 },
                  { value: "'active'", computed: !1 },
                  { value: "'done'", computed: !1 },
                ],
              },
              required: !1,
              description: '',
            },
            icon: {
              defaultValue: { value: "''", computed: !1 },
              type: { name: 'string' },
              required: !1,
              description: '',
            },
            title: {
              type: {
                name: 'union',
                value: [{ name: 'string' }, { name: 'object' }],
              },
              required: !0,
              description: '',
            },
          },
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\Wizard\\sub-components\\Step.jsx'
          ] = {
            name: 'Step',
            docgenInfo: Step.__docgenInfo,
            path: 'components\\Wizard\\sub-components\\Step.jsx',
          });
    },
    745: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(59);
      var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__,
        ),
        prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1),
        prop_types__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          prop_types__WEBPACK_IMPORTED_MODULE_2__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        _components_Colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          10,
        ),
        ColorBackground = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          {
            displayName: 'Colors__ColorBackground',
            componentId: 'sc-1sk16gt-0',
          },
        )(
          ['background-color:', ';color:', ';width:30%;padding:50px 25px;'],
          function(_ref) {
            return _ref.hex;
          },
          function(_ref2) {
            var _ref2$fontColor = _ref2.fontColor;
            return void 0 === _ref2$fontColor ? 'white' : _ref2$fontColor;
          },
        ),
        ColorDescription = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          {
            displayName: 'Colors__ColorDescription',
            componentId: 'sc-1sk16gt-1',
          },
        )([
          'padding:50px 25px;display:flex;width:100%;align-content:center;align-items:center;background-color:#f7f7f7;font-size:14px;padding:15px;position:relative;color:#333;',
        ]),
        ColorProperties = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          {
            displayName: 'Colors__ColorProperties',
            componentId: 'sc-1sk16gt-2',
          },
        )(['display:flex;flex-direction:column;align-items:flex-start;']),
        ColorName = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          { displayName: 'Colors__ColorName', componentId: 'sc-1sk16gt-3' },
        )(['font-size:18px;']),
        ColorNumber = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          { displayName: 'Colors__ColorNumber', componentId: 'sc-1sk16gt-4' },
        )(['font-size:14px;']),
        ColorHex = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          { displayName: 'Colors__ColorHex', componentId: 'sc-1sk16gt-5' },
        )(['flex-grow:0;padding:5px;color:#666;']),
        PalleteColor = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig(
          { displayName: 'Colors__PalleteColor', componentId: 'sc-1sk16gt-6' },
        )(['display:flex;width:100%;margin-bottom:2px;']),
        ColorSample = function(_ref3) {
          var hex = _ref3.hex,
            number = _ref3.number,
            name = _ref3.name,
            fontColor = _ref3.fontColor;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            PalleteColor,
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              ColorBackground,
              { hex: hex, fontColor: fontColor },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ColorName,
                null,
                name,
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ColorNumber,
                null,
                number,
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              ColorDescription,
              null,
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                ColorProperties,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  ColorName,
                  null,
                  'Colors.',
                  name.toUpperCase(),
                  '[',
                  number,
                  ']',
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  ColorHex,
                  null,
                  hex,
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.CodeToClipboard,
                {
                  code: 'Colors.'
                    .concat(name.toUpperCase(), '[')
                    .concat(number, ']'),
                },
              ),
            ),
          );
        };
      (ColorSample.propTypes = {
        hex:
          prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
        number:
          prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
        name:
          prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
        fontColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
      }),
        (ColorSample.defaultProps = { fontColor: '#fff' });
      __webpack_exports__.a = function() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
          null,
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'Catho has some segments, below you can see the',
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'strong',
              null,
              ' Candidates',
            ),
            ' default color palette.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.HowToImport,
            { importModules: 'Colors' },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Title,
            null,
            'Usage',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'Some samples on how the Color object are structured',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.CodeExample,
            {
              showTitle: !1,
              code:
                "console.log(Colors.BLUE['500']);\n/*returns: #1355d0;*/\n\nconsole.log(Colors.PINK['500'])\n/*returns: #de0059/*\n",
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'br',
            null,
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Title,
            null,
            'Brand colors',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Blue',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is the main color brand. This color passes in AAA in the contrast checker of the WCAG guidelines so it can be used in various contexts like buttons, texts and headings, backgrounds, graphic elements and default states.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLUE[500],
              number: 500,
              name: 'Blue',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLUE[200],
              number: 200,
              name: 'Blue',
              fontColor: 'black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLUE[50],
              number: 50,
              name: 'Blue',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Sky',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is a secondary color that can be used only in support elements such as backgrounds, graphic elements, icons, strokes and informational states. It is not recommended to use this color in texts and headings because it does not contrast checker from WCAG.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.SKY[500],
              number: 500,
              name: 'Sky',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Cobalt',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is another secondary color that can be used in support elements like backgrounds, graphic elements, icons, texts and headings. It goes through AAA in the WCAG guidelines and so it is also suitable for texts.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex:
                _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.COBALT[500],
              number: 500,
              name: 'Cobalt',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Pink',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is used mainly in contexts of great prominence as CTAs and highlights Avoid using in contexts where they do not incite action or highlight.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.PINK[500],
              number: 500,
              name: 'Pink',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'br',
            null,
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Title,
            null,
            'Support colors',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'Tones 500 are used for icons, input and button strokes, but not are indicated for texts by not passing the contrast checker of WCAG.',
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'br',
              null,
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'br',
              null,
            ),
            'The 200 tones are used exclusively for backgrounds.',
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'br',
              null,
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              'br',
              null,
            ),
            'The 900 tones are used exclusively for texts because they pass in contrast WCAG checker.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Success',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex:
                _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.SUCCESS[900],
              number: 900,
              name: 'Success',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex:
                _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.SUCCESS[500],
              number: 500,
              name: 'Success',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex:
                _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.SUCCESS[200],
              number: 200,
              name: 'Success',
              fontColor: 'black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Warning',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex:
                _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.WARNING[900],
              number: 900,
              name: 'Warning',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex:
                _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.WARNING[500],
              number: 500,
              name: 'Warning',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex:
                _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.WARNING[200],
              number: 200,
              name: 'Warning',
              fontColor: 'black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Error',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.ERROR[900],
              number: 900,
              name: 'Error',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.ERROR[500],
              number: 500,
              name: 'Error',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.ERROR[200],
              number: 200,
              name: 'Error',
              fontColor: 'black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'br',
            null,
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Title,
            null,
            'Neutral colors',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Black',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is mainly used for texts and headings. Passes on AAA in the contrast checker.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLACK[900],
              number: 900,
              name: 'Black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is used for general texts and can also indicate active states. Pass in AAA in contrast checker.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLACK[700],
              number: 700,
              name: 'Black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is used for strokes and can also indicate inactive states. Reproves in accessibility.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLACK[400],
              number: 400,
              name: 'Black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is an auxiliary neutral tone and can be used for inactive states. Reproves in accessibility.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLACK[200],
              number: 200,
              name: 'Black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            'p',
            null,
            'It is used to indicate input fields disabled. Reproves in accessibility.',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.BLACK[100],
              number: 100,
              name: 'Black',
              fontColor: 'black',
            },
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.Subtitle,
            null,
            'Shadow',
          ),
          react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            ColorSample,
            {
              hex: _components_Colors__WEBPACK_IMPORTED_MODULE_5__.a.SHADOW[40],
              number: 200,
              name: 'Shadow',
              fontColor: 'black',
            },
          ),
        );
      };
    },
    747: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58),
        react_highlight__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react_highlight__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          3,
        ),
        _components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          61,
        ),
        registry = 'registry="http://armazem.devel:4873/"',
        yarnAdd = 'yarn add @cathodevel/quantum',
        importHeader =
          "import { Header } from '@cathodevel/quantum';\nexport default () => <Header />;",
        HighlightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig(
          {
            displayName: 'Introduction__HighlightWrapper',
            componentId: 'sc-9h8voc-0',
          },
        )(['position:relative;']),
        registryCmd = 'sudo npm set registry http://armazem.devel:4873',
        installCmd = 'sudo npm i -g @cathodevel/create-catho-app',
        Terminal = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig(
          { displayName: 'Introduction__Terminal', componentId: 'sc-9h8voc-1' },
        )([
          'background-color:#092c36;padding:10px;display:inline-block;margin-bottom:20px;',
        ]),
        gifUrls_app =
          'http://gitlab.devel/frontend-platform/create-catho-app/raw/master/examples/application-react.gif',
        gifUrls_component =
          'http://gitlab.devel/frontend-platform/create-catho-app/raw/master/examples/component-stateful.gif',
        Introduction = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'The official ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'strong',
                null,
                'Catho',
              ),
              ' style guide',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Title,
              { style: { marginTop: '40px' } },
              'Starting from scratch',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'In order to easily creating new apps or components, we present our',
              ' ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                {
                  href: 'https://en.wikipedia.org/wiki/Command-line_interface',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                'CLI',
              ),
              '.',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'h3',
              null,
              'How to install',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'First, set your registry properly with our local package registry:',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'bash', className: 'highlight' },
                registryCmd,
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeToClipboard,
                { code: registryCmd },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'Then, install it globally:',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'bash', className: 'highlight' },
                installCmd,
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeToClipboard,
                { code: installCmd },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.TabbedView,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                { title: 'Application' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Terminal,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Image__WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      src: gifUrls_app,
                      alt: 'Creating a react application with few commands',
                    },
                  ),
                ),
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Tab,
                { title: 'Component' },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  Terminal,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_Image__WEBPACK_IMPORTED_MODULE_4__.a,
                    {
                      src: gifUrls_component,
                      alt: 'Creating a react component with few commands',
                    },
                  ),
                ),
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.Title,
              null,
              'Using with an existing project',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'Create a ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'code',
                null,
                '.npmrc',
              ),
              ' file, with the following content:',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'javascript', className: 'highlight' },
                registry,
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeToClipboard,
                { code: registry },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'Add as a dependency:',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'javascript', className: 'highlight' },
                yarnAdd,
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeToClipboard,
                { code: yarnAdd },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'Use in your react project:',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'javascript', className: 'highlight' },
                importHeader,
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_3__.CodeToClipboard,
                { code: importHeader },
              ),
            ),
          );
        };
      (__webpack_exports__.a = Introduction),
        (Introduction.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Introduction',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'stories\\Introduction\\Introduction.jsx'
          ] = {
            name: 'Introduction',
            docgenInfo: Introduction.__docgenInfo,
            path: 'stories\\Introduction\\Introduction.jsx',
          });
    },
    748: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42),
        simpleList = {
          code:
            "<List items={[\n  'Tomato sauce',\n  'Mustard',\n  'Barbecue sauce',\n  'Red-wine vinegar',\n  'Salsa',\n  'Hot pepper sauce',\n]} />\n\n/* or */\n\n<List>\n  <List.Item> Tomato sauce </List.Item>\n  <List.Item> Mustard </List.Item>\n  <List.Item> Barbecue sauce </List.Item>\n  <List.Item> Red-wine vinegar </List.Item>\n  <List.Item> Salsa </List.Item>\n  <List.Item> Hot pepper sauce </List.Item>\n</List>",
          component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_List__WEBPACK_IMPORTED_MODULE_1__.a,
            {
              items: [
                'Tomato sauce',
                'Mustard',
                'Barbecue sauce',
                'Red-wine vinegar',
                'Salsa',
                'Hot pepper sauce',
              ],
            },
          ),
        };
      __webpack_exports__.a = simpleList;
    },
    749: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          8,
        ),
        _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42),
        simpleListItemAlternatives = {
          code:
            '<List>\n  <List.Item> Settings </List.Item>\n  <List.Item content="Your places" />\n  <List.Item\n    icon="timeline"\n    content="Your timeline"\n  />\n  <List.Item\n    icon="layers"\n    content={{\n      header: "Satellite & traffic",\n      subheader: "Layers have moved",\n    }}\n  />\n  <List.Item\n    icon={{\n      name: \'navigation\',\n      skin: Colors.DANGER[\'500\']\n    }}\n    content="Your timeline" />\n</List>',
          component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_List__WEBPACK_IMPORTED_MODULE_2__.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_2__.a.Item,
              null,
              ' Settings ',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_2__.a.Item,
              { content: 'Your places' },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_2__.a.Item,
              { icon: 'timeline', content: 'Your timeline' },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_2__.a.Item,
              {
                icon: 'layers',
                content: {
                  header: 'Satellite & traffic',
                  subheader: 'Layers have moved',
                },
              },
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_2__.a.Item,
              {
                icon: {
                  name: 'navigation',
                  skin:
                    _components_Colors_deprecated__WEBPACK_IMPORTED_MODULE_1__.a
                      .DANGER[500],
                },
                content: 'Your timeline',
              },
            ),
          ),
        };
      __webpack_exports__.a = simpleListItemAlternatives;
    },
    750: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _components_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42),
        simpleListContent = {
          code:
            '<List>\n  <List.Item icon="backup">\n    <List.Content content="Backup" />\n  </List.Item>\n  <List.Item icon="delete">\n    <List.Content>Trash</List.Content>\n  </List.Item>\n  <List.Item icon="notifications">\n    <List.Content header="Notifications" />\n  </List.Item>\n  <List.Item icon="storage">\n    <List.Content>\n      <List.Header>Upgrade storage</List.Header>\n      <List.SubHeader>6.7 of 15.0 GB used</List.SubHeader>\n    </List.Content>\n  </List.Item>\n</List>',
          component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            _components_List__WEBPACK_IMPORTED_MODULE_1__.a,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Item,
              { icon: 'backup' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Content,
                { content: 'Backup' },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Item,
              { icon: 'delete' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Content,
                null,
                'Trash',
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Item,
              { icon: 'notifications' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Content,
                { header: 'Notifications' },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Item,
              { icon: 'storage' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Content,
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_List__WEBPACK_IMPORTED_MODULE_1__.a.Header,
                  null,
                  'Upgrade storage',
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _components_List__WEBPACK_IMPORTED_MODULE_1__.a.SubHeader,
                  null,
                  '6.7 of 15.0 GB used',
                ),
              ),
            ),
          ),
        };
      __webpack_exports__.a = simpleListContent;
    },
    752: function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMTAgMTE0Ij48bGluZWFyR3JhZGllbnQgaWQ9ImEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB5MT0iNTciIHgyPSIyMTAiIHkyPSI1NyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDMzODI2Ii8+PHN0b3Agb2Zmc2V0PSIuNSIgc3RvcC1jb2xvcj0iIzAwNWQ0NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAzMzgyNiIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTEwNC45OTcgMTE0LjA0Yy0yLjM0NyAwLTQuNjAxLS41MDctNi43MDktMS40OThMOS4yMjQgNzEuMzRDMy42MjUgNjguNzkzIDAgNjMuMTYxIDAgNTcuMDAyYTE1Ljc5OCAxNS43OTggMCAwIDEgOS4yMzgtMTQuMzQ1bDg5LjA2OC00MS4yMWExNS41NzggMTUuNTc4IDAgMCAxIDYuNjkyLTEuNDg3YzIuMzQzIDAgNC41OTcuNTAxIDYuNzA0IDEuNDkybDg5LjA3MyA0MS4yMTRjNS41OTkgMi41NDIgOS4yMjUgOC4xNzMgOS4yMjUgMTQuMzM3IDAgNi4xNTEtMy42MjMgMTEuNzc5LTkuMjIyIDE0LjMzOGwtODkuMDkgNDEuMjExYTE1LjYxIDE1LjYxIDAgMCAxLTYuNjkxIDEuNDg4eiIvPjxwYXRoIGZpbGw9IiM4RkFCQTMiIGQ9Ik05LjAyNSA1Ny4wMDJjMC0yLjU4OCAxLjY0Ni00Ljk1NiA0LjAyMS02LjAzOWw4Ni41MTktMzQuMDIyYy41NTMtLjIxOC41NTMtLjU3IDAtLjc4N2wtOS4yNTQtMy42NGMtLjU1My0uMjE3LTEuNDQxLS4xOTEtMS45ODEuMDU5TDExLjY5IDQ4LjAzMWE5Ljg4OCA5Ljg4OCAwIDAgMC01Ljc3MyA4Ljk3MSA5Ljg4NCA5Ljg4NCAwIDAgMCA1Ljc3OSA4Ljk2OWw3Ni42MTggMzUuNDQxYy41MzkuMjUxIDEuNDI2LjI3NiAxLjk4LjA2bDkuMjY3LTMuNjQ1Yy41NTMtLjIxNi41NTMtLjU2OSAwLS43ODlMMTMuMDM2IDYzLjAzNGMtMi4zNjItMS4wNzgtNC4wMTEtMy40NDUtNC4wMTEtNi4wMzJ6Ii8+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEwOS4xODkgNi44MDJhOS44MDMgOS44MDMgMCAwIDAtNC4xOTItLjkzMSA5LjgxNCA5LjgxNCAwIDAgMC00LjIwMy45MzdsLTYuNDQgMi45NzljLS41MzkuMjUtLjUyOC42My4wMjYuODQ2bDEwMi41ODIgNDAuMzM1YzIuMzY3IDEuMDc3IDQuMDE3IDMuNDQ2IDQuMDE3IDYuMDMzIDAgMi41ODMtMS42NDQgNC45NTEtNC4wMTYgNi4wMzJsLTcxLjU4OSAyOC4xMzhjLS41NTQuMjE3LS45OTkuMzk5LS45OTYuNDExLjAwNi4wMDktLjQ0MS4xOTMtLjk5My40MDlsLTI5LjAxMiAxMS4zNjdjLS41NTYuMjE3LS41NjcuNTk2LS4wMjcuODQ0bDYuNDU3IDIuOTg3YTkuNzczIDkuNzczIDAgMCAwIDQuMTkzLjkzOGMxLjQ3IDAgMi44ODEtLjMxOSA0LjIwMy0uOTM4bDg5LjEyLTQxLjIyNGE5Ljg3MyA5Ljg3MyAwIDAgMCA1Ljc2NS04Ljk2NCA5Ljg4MSA5Ljg4MSAwIDAgMC01Ljc4Ni04Ljk3M0wxMDkuMTg5IDYuODAyeiIvPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik0xNDYuNTg4IDQzLjU0MmMtNi44NCAwLTEyLjM4NiA1LjI4Ni0xMi4zODYgMTEuODA3IDAgNi41MjEgNS41NDcgMTEuODA1IDEyLjM4NiAxMS44MDUgNi44NCAwIDEyLjM4Ni01LjI4NCAxMi4zODYtMTEuODA1IDAtNi41MjItNS41NDYtMTEuODA3LTEyLjM4Ni0xMS44MDd6bTAgMTkuMjI1Yy0zLjkyMyAwLTcuMTAyLTMuMzItNy4xMDItNy40MTkgMC00LjEgMy4xNzktNy40MTkgNy4xMDItNy40MTkgMy45MjQgMCA3LjEwMiAzLjMxOSA3LjEwMiA3LjQxOXMtMy4xNzkgNy40MTktNy4xMDIgNy40MTl6TTEwNy44MiA0My45MzRIOTQuNjY4YTIuMjM1IDIuMjM1IDAgMCAwLTIuMjMzIDIuMjM5YzAgMS4yMzUuOTk5IDIuMjM0IDIuMjMzIDIuMjM0aDMuOTkydjE1LjgwOWEyLjU4NiAyLjU4NiAwIDAgMCA1LjE2OSAwVjQ4LjQwN2gzLjk5YzEuMjQgMCAyLjIzMy0uOTk5IDIuMjMzLTIuMjM0YTIuMjMgMi4yMyAwIDAgMC0yLjIzMi0yLjIzOXpNMTI5LjI3NSA0My43ODFhMi41ODcgMi41ODcgMCAwIDAtMi41ODMgMi41ODVWNTIuOWgtOS41OTh2LTYuNTM0YTIuNTg1IDIuNTg1IDAgMCAwLTIuNTg1LTIuNTg1IDIuNTg2IDIuNTg2IDAgMCAwLTIuNTgxIDIuNTg1djE3Ljg1YTIuNTg1IDIuNTg1IDAgMCAwIDIuNTgxIDIuNTgzIDIuNTg1IDIuNTg1IDAgMCAwIDIuNTg1LTIuNTgzdi02LjkyOWg5LjU5OHY2LjkyOWEyLjU4NCAyLjU4NCAwIDAgMCA1LjE2OCAwdi0xNy44NWEyLjU4NSAyLjU4NSAwIDAgMC0yLjU4NS0yLjU4NXpNNjguNjIgNjEuMTVjLS40OTYgMC0uOTUyLjE1Ni0xLjMyOS40MThhNi44MTggNi44MTggMCAwIDEtMy44NzUgMS4yMDZjLTMuOTI1IDAtNy4xMDUtMy4zMjEtNy4xMDUtNy40MTkgMC00LjEgMy4xOC03LjQyMiA3LjEwNS03LjQyMiAxLjQwNSAwIDIuNzEyLjQzIDMuODEzIDEuMTY2LjM5My4yOTMuODcxLjQ2NiAxLjM5MS40NjZhMi4zMjUgMi4zMjUgMCAxIDAgMS4wNi00LjM5NCAxMi44MDUgMTIuODA1IDAgMCAwLTYuMjY0LTEuNjIyYy02LjgzOSAwLTEyLjM4NyA1LjI4My0xMi4zODcgMTEuODA1czUuNTQ4IDExLjgwNyAxMi4zODcgMTEuODA3YzIuMjQ3IDAgNC4zNTMtLjU3NyA2LjE3My0xLjU3N2EyLjMyIDIuMzIgMCAwIDAgMS4zNTgtMi4xMTIgMi4zMjYgMi4zMjYgMCAwIDAtMi4zMjctMi4zMjJ6TTk0LjM4MyA2My40NDNsLTguMzgtMTguMTc2YTIuNDQyIDIuNDQyIDAgMCAwLTIuMzYyLTEuMzk0IDIuNDM3IDIuNDM3IDAgMCAwLTIuMzYxIDEuMzk0TDcyLjkgNjMuNDQzYTIuNDM2IDIuNDM2IDAgMCAwIDEuMTY3IDMuMjQgMi40NDMgMi40NDMgMCAwIDAgMy4yNC0xLjE3NGwxLjA5MS0yLjM2OGgxMC40ODRsMS4wOTMgMi4zNjhhMi40NDMgMi40NDMgMCAwIDAgMy4yNCAxLjE3NCAyLjQzNSAyLjQzNSAwIDAgMCAxLjE2OC0zLjI0ek04MC4zMSA1OS4wMDFsMy4zMzEtNy4yMjYgMy4zMzIgNy4yMjZIODAuMzF6Ii8+PC9nPjxnIGZpbGw9IiNGRkYiPjxwYXRoIGQ9Ik03Ni4yNiA3Ny40MDd2LTYuMjA1YzAtLjM3Ny4yOTItLjY2OC42NjgtLjY2OGg0LjM4NWMuMzIzIDAgLjU5MS4yNjkuNTkxLjU5M2EuNTkuNTkgMCAwIDEtLjU5MS41OTFoLTMuNzI3djEuOTU5aDMuMjQzYS42LjYgMCAwIDEgLjU5MS42MDQuNTkuNTkgMCAwIDEtLjU5MS41ODRoLTMuMjQzdjIuMDIxaDMuNzgyYy4zMjIgMCAuNTkyLjI3LjU5Mi41OTNhLjU5LjU5IDAgMCAxLS41OTIuNTkyaC00LjQzOWEuNjU1LjY1NSAwIDAgMS0uNjY5LS42NjR6TTgzLjE4OSA3MS4xNmMwLS4zNjguMjg5LS42NjkuNjY4LS42NjloLjEzOGMuMjkgMCAuNDg0LjE1Mi42MTQuMzU2bDIuMjg0IDMuNTc3IDIuMjk0LTMuNTg5YS42NjkuNjY5IDAgMCAxIC42MDQtLjM0NGguMTQxYy4zNzcgMCAuNjY4LjMwMS42NjguNjY5djYuMzFhLjY1Ni42NTYgMCAwIDEtLjY2OC42NTguNjY5LjY2OSAwIDAgMS0uNjYtLjY1OHYtNC41MjRsLTEuODQgMi43NjljLS4xMzkuMjE1LS4zMTQuMzQ0LS41Ni4zNDQtLjIzNyAwLS40MS0uMTI5LS41NTEtLjM0NGwtMS44MzEtMi43NDd2NC41MTNjMCAuMzY4LS4yOS42NDctLjY1Ny42NDdhLjYzMy42MzMgMCAwIDEtLjY0NS0uNjQ3VjcxLjE2ek05Mi4zNTMgNzEuMjAyYzAtLjM3Ny4yOTEtLjY2OC42NjctLjY2OGgyLjMwNGMxLjc2OCAwIDIuODY2IDEuMDAyIDIuODY2IDIuNTE5di4wMjNjMCAxLjY5MS0xLjM1OSAyLjU3NC0zLjAxNyAyLjU3NGgtMS40OTd2MS44MTlhLjY1My42NTMgMCAwIDEtLjY1Ny42NTguNjU1LjY1NSAwIDAgMS0uNjY3LS42NTh2LTYuMjY3em0yLjg2NCAzLjI1MWMxIDAgMS42MjctLjU1OSAxLjYyNy0xLjM0NXYtLjAyMWMwLS44ODItLjYzNS0xLjM0OC0xLjYyNy0xLjM0OGgtMS41NHYyLjcxM2gxLjU0ek05OS4yNTcgNzEuMjAyYzAtLjM3Ny4yOS0uNjY4LjY2OC0uNjY4aDIuNjkzYy45NDggMCAxLjY5Mi4yNzkgMi4xNzYuNzU1LjM5OS40MDguNjI1Ljk2OS42MjUgMS42Mjd2LjAyMWMwIDEuMjA1LS43MDEgMS45NC0xLjcxMyAyLjI1MWwxLjQ0NSAxLjgxOWMuMTI4LjE2My4yMTYuMzA0LjIxNi41MDcgMCAuMzY3LS4zMTUuNjE0LS42MzcuNjE0LS4zMDEgMC0uNDk3LS4xMzktLjY0Ny0uMzQ2bC0xLjgzMi0yLjMzNmgtMS42Njh2Mi4wMjRhLjY1My42NTMgMCAwIDEtLjY1OC42NTguNjU1LjY1NSAwIDAgMS0uNjY4LS42NTh2LTYuMjY4em0zLjI2NSAzLjA3Yy45NDggMCAxLjU1MS0uNDk2IDEuNTUxLTEuMjYxdi0uMDIyYzAtLjgwNy0uNTgzLTEuMjUtMS41NjItMS4yNWgtMS45Mjl2Mi41MzJoMS45NHpNMTA2Ljg0IDc3LjQwN3YtNi4yMDVjMC0uMzc3LjI5LS42NjguNjY2LS42NjhoNC4zODVjLjMyMSAwIC41OS4yNjkuNTkuNTkzYS41OS41OSAwIDAgMS0uNTkuNTkxaC0zLjcyN3YxLjk1OWgzLjI0MmMuMzIzIDAgLjU5My4yNy41OTMuNjA0IDAgLjMyMi0uMjcuNTg0LS41OTMuNTg0aC0zLjI0MnYyLjAyMWgzLjc4YS42LjYgMCAwIDEgLjU5NC41OTMuNTkuNTkgMCAwIDEtLjU5NC41OTJoLTQuNDM4YS42NTMuNjUzIDAgMCAxLS42NjYtLjY2NHpNMTEzLjU5MSA3Ny4yMzRhLjYyMi42MjIgMCAwIDEtLjI1OC0uNTA4YzAtLjM0NC4yOC0uNjEzLjYyNC0uNjEzLjE4MyAwIC4zMDMuMDUzLjM4OC4xMTcuNjI1LjQ5NiAxLjI5NC43NzcgMi4xMTMuNzc3czEuMzMzLS4zODcgMS4zMzMtLjk0OHYtLjAyMWMwLS41MzktLjMtLjgyOS0xLjcwMS0xLjE1NC0xLjYwNS0uMzg1LTIuNTEyLS44NTktMi41MTItMi4yNXYtLjAyMWMwLTEuMjkzIDEuMDgtMi4xODcgMi41NzctMi4xODcuOTUgMCAxLjcxMy4yNDggMi4zOTEuNzAyYS41OTcuNTk3IDAgMCAxIC4yOTEuNTI3LjYxNi42MTYgMCAwIDEtLjYyNC42MTQuNjM2LjYzNiAwIDAgMS0uMzQ1LS4wOThjLS41OC0uMzc2LTEuMTQxLS41Ny0xLjczNC0uNTctLjc3NyAwLTEuMjI3LjM5Ny0xLjIyNy44OTR2LjAyMWMwIC41ODEuMzQzLjg0IDEuNzk5IDEuMTg0IDEuNTkzLjM5IDIuNDEzLjk1OCAyLjQxMyAyLjIwOXYuMDIxYzAgMS40MTItMS4xMTMgMi4yNTItMi42OTUgMi4yNTJhNC43MDYgNC43MDYgMCAwIDEtMi44MzMtLjk0OHpNMTE5Ljg3OSA3Ny4yMTJsMi44LTYuMjQ2Yy4xNTEtLjMzNS40Mi0uNTQuNzk2LS41NGguMDY0Yy4zNzggMCAuNjM2LjIwNS43ODguNTRsMi44MDIgNi4yNDZhLjYyMi42MjIgMCAwIDEtLjU1MS45MTVjLS4zMTQgMC0uNTI3LS4xODMtLjY0Ni0uNDYzbC0uNjE1LTEuNDFoLTMuNjYxbC0uNjM2IDEuNDUzYS42MzYuNjM2IDAgMCAxLS42MTUuNDIxLjYwNi42MDYgMCAwIDEtLjYxMy0uNjE0LjcwOC43MDggMCAwIDEgLjA4Ny0uMzAyem00LjkzMy0yLjEzNGwtMS4zMjUtMy4wNDYtMS4zMjUgMy4wNDZoMi42NXpNMTI4LjIxNSA3Ny4yMzRhLjYyMi42MjIgMCAwIDEtLjI1OC0uNTA4YzAtLjM0NC4yOC0uNjEzLjYyNS0uNjEzLjE4MSAwIC4zMDMuMDUzLjM4OC4xMTcuNjI0LjQ5NiAxLjI5MS43NzcgMi4xMS43NzdzMS4zMzctLjM4NyAxLjMzNy0uOTQ4di0uMDIxYzAtLjUzOS0uMzA0LS44MjktMS43MDMtMS4xNTQtMS42MDUtLjM4NS0yLjUxLS44NTktMi41MS0yLjI1di0uMDIxYzAtMS4yOTMgMS4wNzgtMi4xODcgMi41NzMtMi4xODcuOTUgMCAxLjcxNC4yNDggMi4zOTIuNzAyYS41OTUuNTk1IDAgMCAxIC4yOTEuNTI3LjYxNy42MTcgMCAwIDEtLjYyNC42MTQuNjM0LjYzNCAwIDAgMS0uMzQ1LS4wOThjLS41ODItLjM3Ni0xLjE0My0uNTctMS43MzUtLjU3LS43NzUgMC0xLjIyNy4zOTctMS4yMjcuODk0di4wMjFjMCAuNTgxLjM0My44NCAxLjc5NyAxLjE4NCAxLjU5NS4zOSAyLjQxMy45NTggMi40MTMgMi4yMDl2LjAyMWMwIDEuNDEyLTEuMTA5IDIuMjUyLTIuNjk1IDIuMjUyYTQuNzAzIDQuNzAzIDAgMCAxLTIuODI5LS45NDh6Ii8+PC9nPjwvc3ZnPg==';
    },
    753: function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iXzNYTGFiaW5waF8iIHZpZXdCb3g9IjAgMCAxMDggNTkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZGF0YS1yZWFjdGlkPSIyMCI+PGRlZnMgZGF0YS1yZWFjdGlkPSIyMSI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB5MT0iNTAlIiB4MT0iMCUiIHkyPSI1MCUiIGRhdGEtcmVhY3RpZD0iMjIiPjxzdG9wIHN0b3AtY29sb3I9IiM4OEM0MjUiIG9mZnNldD0iMCIgZGF0YS1yZWFjdGlkPSIyMyIvPjxzdG9wIHN0b3AtY29sb3I9IiM4OEM0MjUiIG9mZnNldD0iLjUiIGRhdGEtcmVhY3RpZD0iMjQiLz48c3RvcCBzdG9wLWNvbG9yPSIjODhDNDI1IiBvZmZzZXQ9IjEiIGRhdGEtcmVhY3RpZD0iMjUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9Im5vbmUiIGRhdGEtcmVhY3RpZD0iMjYiPjxnIGRhdGEtcmVhY3RpZD0iMjgiPjxnIGRhdGEtcmVhY3RpZD0iMjkiPjxnIGRhdGEtcmVhY3RpZD0iMzAiPjxnIGRhdGEtcmVhY3RpZD0iMzEiPjxnIGRhdGEtcmVhY3RpZD0iMzIiPjxnIGRhdGEtcmVhY3RpZD0iMzMiIGZpbGwtcnVsZT0ibm9uemVybyI+PGcgZGF0YS1yZWFjdGlkPSIzNCI+PGcgZGF0YS1yZWFjdGlkPSIzNSI+PGcgZGF0YS1yZWFjdGlkPSIzNiI+PGcgZGF0YS1yZWFjdGlkPSIzNyI+PHBhdGggZmlsbD0idXJsKCNhKSIgZD0iTTUzLjgyNiA1OC4zODFhNy45NjYgNy45NjYgMCAwIDEtMy40MjUtLjc2MUw0LjgzNSAzNi41OThDMS45NzcgMzUuMjkuMTE3IDMyLjQyMS4xMTcgMjkuMjc5YzAtMy4xNDMgMS44Ni02LjAxMiA0LjcxOC03LjMyTDUwLjQuOTM3YzEuMDc2LS41MDggMi4yMzEtLjc2MSAzLjQyNS0uNzYxczIuMzUuMjUzIDMuNDI2Ljc2TDEwMi44MiAyMS45NmMyLjg1IDEuMjg4IDQuNzEgNC4xNzcgNC43MSA3LjMyIDAgMy4xNDItMS44NiA2LjAxLTQuNzEgNy4zMTlMNTcuMjUgNTcuNjJhNy45NjYgNy45NjYgMCAwIDEtMy40MjQuNzZ6IiBkYXRhLXJlYWN0aWQ9IjM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0uMTk0KSIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik00LjczNyAyOC41MzhjMC0xLjMyNy44NDEtMi41MTggMi4wNTUtMy4wODQgMCAwIDQyLjIxOS0xNi41NTIgNTEuMjYyLTIwLjEyNC4yOTMtLjExNy40ODktLjM5LjQ4OS0uNzAzcy0uMTc2LS42MDUtLjQ1LS43MjJsLTIuNjQzLTEuMjNhMy44NzUgMy44NzUgMCAwIDAtMy4yODggMEM0My43ODUgNi41NCA2LjA4NyAyMy45MzIgNi4wODcgMjMuOTUxYTUuMDM4IDUuMDM4IDAgMCAwLTIuOTU2IDQuNTY3IDUuMDE3IDUuMDE3IDAgMCAwIDIuOTU2IDQuNTY4Yy40OS4yMzQgMzcuNzM3IDE3LjQxMSA0Ni4wNzUgMjEuMjU2YTMuODc1IDMuODc1IDAgMCAwIDMuMjg4IDBsMi42NDMtMS4yM2MuMjc0LS4xMzYuNDY5LS40MDkuNDUtLjcyMmEuNzYuNzYgMCAwIDAtLjQ4OS0uNzAyQzM0Ljk3NyA0Mi42NSAxNS4yNDcgMzQuOTAxIDYuNzcyIDMxLjU4M2MtMS4xOTQtLjUyNy0yLjAzNS0xLjczNy0yLjAzNS0zLjA0NXoiIGRhdGEtcmVhY3RpZD0iMzkiLz48cGF0aCBmaWxsPSIjOUZENjM0IiBkPSJNMTAxLjU0IDIzLjk1MUMxMDAuOCAyMy42IDcwLjU0MSA5LjY0NCA2My4zMTkgNi4zMjVhMy45MSAzLjkxIDAgMCAwLTMuMDczLS4wOTdjLS43MjQuMjkyLTEuNjA1LjYyNC0yLjM2OS45MTctLjI5My4xMTctLjQ4OS40MS0uNDg5LjcyMnMuMTk2LjYwNS40ODkuNzIzYzguNDM2IDMuMzE4IDQyLjkyMyAxNi44MjUgNDIuOTYzIDE2Ljg0NCAxLjIxLjU0NyAyLjA2IDEuNzU3IDIuMDYgMy4wODQgMCAxLjMyOC0uODUgMi41MTgtMi4wNiAzLjA4NC00LjU2IDEuNzk2LTM0LjMzMSAxMy40NDktNDIuOTgyIDE2Ljg0NWEuNzg2Ljc4NiAwIDAgMC0uNDg5LjcyM2MwIC4zMTIuMTk1LjYwNS40ODkuNzIyIDEuMDU3LjQxIDEuODAxLjcwMyAyLjM2OC45MzcuOTk4LjM5IDIuMDk0LjM1IDMuMDczLS4wOThsMzguMjMxLTE3LjYyNmE1LjAzMiA1LjAzMiAwIDAgMCAyLjk1LTQuNTY3IDQuOTgyIDQuOTgyIDAgMCAwLTIuOTQtNC41ODd6IiBkYXRhLXJlYWN0aWQ9IjQwIi8+PC9nPjwvZz48L2c+PC9nPjxnIGZpbGw9IiNmZmYiIGRhdGEtcmVhY3RpZD0iNDEiPjxwYXRoIGQ9Ik03NS4wMjQgMTkuMzQ1Yy0zLjQ4NCAwLTYuMzIzIDIuNjkzLTYuMzIzIDUuOTkyIDAgMy4zMTggMi44MTkgNS45OTIgNi4zMjMgNS45OTIgMy40ODQgMCA2LjMyMi0yLjY5MyA2LjMyMi01Ljk5Mi0uMDItMy4yOTktMi44MzgtNS45OTItNi4zMjItNS45OTJ6bTAgOS43NzljLTEuOTk3IDAtMy42MjEtMS42OC0zLjYyMS0zLjc2OHMxLjYyNC0zLjc2NyAzLjYyMS0zLjc2N2MxLjk5NiAwIDMuNjIxIDEuNjc5IDMuNjIxIDMuNzY3IDAgMi4wODktMS42MjUgMy43NjgtMy42MjEgMy43Njh6IiBkYXRhLXJlYWN0aWQ9IjQyIi8+PHBhdGggZD0iTTU1LjI1NSAxOS41NmgtNi42OTRjLS42MjcgMC0xLjEzNS41MDctMS4xMzUgMS4xMzEgMCAuNjI1LjUwOCAxLjEzMiAxLjEzNSAxLjEzMmgyLjAzNXY4LjA0MmExLjMxIDEuMzEgMCAwIDAgMi42MjMgMHYtOC4wNDJoMi4wMzZjLjYyNiAwIDEuMTM1LS41MDcgMS4xMzUtMS4xMzIuMDItLjYyNC0uNDg5LTEuMTMyLTEuMTM1LTEuMTMyeiIgZGF0YS1yZWFjdGlkPSI0MyIvPjxwYXRoIGQ9Ik02Ni4xOTYgMTkuNDgxYTEuMzEgMS4zMSAwIDAgMC0xLjMxMSAxLjMwOHYzLjMxOGgtNC44OTRWMjAuNzlhMS4zMSAxLjMxIDAgMCAwLTEuMzExLTEuMzA4IDEuMzEgMS4zMSAwIDAgMC0xLjMxMSAxLjMwOHY5LjA3NmMwIC43MjIuNTg3IDEuMzA4IDEuMzExIDEuMzA4czEuMzExLS41ODYgMS4zMTEtMS4zMDh2LTMuNTEzaDQuODk0djMuNTEzYTEuMzEgMS4zMSAwIDEgMCAyLjYyMyAwdi05LjA3NmExLjMxIDEuMzEgMCAwIDAtMS4zMTItMS4zMDh6IiBkYXRhLXJlYWN0aWQ9IjQ0Ii8+PHBhdGggZD0iTTM1LjI5IDI4LjMwNGMtLjI1NCAwLS40ODkuMDc4LS42ODUuMjE1YTMuNDc4IDMuNDc4IDAgMCAxLTEuOTc3LjYwNWMtMS45OTYgMC0zLjYyLTEuNjgtMy42Mi0zLjc2OHMxLjYyNC0zLjc2NyAzLjYyLTMuNzY3Yy43MjUgMCAxLjM5LjIxNSAxLjkzOC41ODYuMTk2LjE1Ni40NS4yMzQuNzA1LjIzNC42NDYgMCAxLjE5NC0uNTI3IDEuMTk0LTEuMTlhMS4xOCAxLjE4IDAgMCAwLS42NDYtMS4wNTUgNi41MTcgNi41MTcgMCAwIDAtMy4xOS0uODJjLTMuNDg1IDAtNi4zMjMgMi42OTQtNi4zMjMgNS45OTMgMCAzLjI5OSAyLjgxOSA1Ljk5MiA2LjMyMiA1Ljk5MmE2LjU3MiA2LjU3MiAwIDAgMCAzLjE1Mi0uOGMuNDEtLjE3Ni42ODUtLjYwNS42ODUtMS4wNzQgMC0uNjI0LS41MjktMS4xNTEtMS4xNzUtMS4xNTF6IiBkYXRhLXJlYWN0aWQ9IjQ1Ii8+PHBhdGggZD0iTTQ4LjQyNCAyOS40NzVsLTQuMjY3LTkuMjMzYTEuMjI4IDEuMjI4IDAgMCAwLTEuMjE0LS43MDIgMS4yMTkgMS4yMTkgMCAwIDAtMS4xOTQuNzAybC00LjI4NiA5LjIzM2ExLjIzIDEuMjMgMCAwIDAgMi4yMzEgMS4wMzRsLjU0OC0xLjIxaDUuMzYzbC41NDggMS4yMWExLjI1MyAxLjI1MyAwIDAgMCAxLjY0NC42MDUgMS4yMzkgMS4yMzkgMCAwIDAgLjYyNy0xLjYzOXptLTcuMTgzLTIuMjY0bDEuNzAyLTMuNjcgMS43MDMgMy42N2gtMy40MDV6IiBkYXRhLXJlYWN0aWQ9IjQ2Ii8+PC9nPjxnIGZpbGw9IiNmZmYiIGRhdGEtcmVhY3RpZD0iNDciPjxwYXRoIGQ9Ik0zMy42ODYgMzYuMzY2di0xLjYwMWMwLS4yMTUuMDU4LS4zNy4xOTUtLjQ2OWEuNjc0LjY3NCAwIDAgMSAuNDExLS4xNTZoMS45OTdjLjE3NiAwIC4zMzMuMDU5LjQzLjE1NnMuMTU3LjI1NC4xNTcuNDNjMCAuMTU2LS4wNC4yOTMtLjEzNy40MS0uMDk4LjExNy0uMjU0LjE1Ni0uNDUuMTU2aC0xLjM1djEuMDE1aDEuMjUyYS41OS41OSAwIDAgMSAuNDUuMTc2LjYyOS42MjkgMCAwIDEgLjE1Ny40MS42MjkuNjI5IDAgMCAxLS4xNTcuNDEuNTc2LjU3NiAwIDAgMS0uNDMuMTc1aC0xLjI1M3YxLjAzNWgxLjM1Yy4yMTYgMCAuMzkyLjA1OC40OS4xNTZhLjU4LjU4IDAgMCAxIC4xNTYuMzkuNjA3LjYwNyAwIDAgMS0uMTU2LjQzYy0uMDk4LjExNy0uMjc0LjE3NS0uNDkuMTc1aC0xLjk1N2MtLjIxNSAwLS4zNzItLjA1OC0uNDktLjE3NXMtLjE3NS0uMjc0LS4xNzUtLjQ1di0yLjY3M3oiIGRhdGEtcmVhY3RpZD0iNDgiLz48cGF0aCBkPSJNMzcuNTAyIDM0Ljc4NWEuNzEuNzEgMCAwIDEgLjE1Ny0uNDY5LjYxNi42MTYgMCAwIDEgLjQ3LS4xOTVoMS40ODdjLjU2OCAwIDEuMDM4LjExNyAxLjM5LjM1MXMuNjI2LjUwOC44NDEuODJjLjI3NC40NDkuNDMxLjk5Ni40MzEgMS42MiAwIC4zNTEtLjA1OS43MDMtLjE3NiAxLjAzNWEyLjc5IDIuNzkgMCAwIDEtLjUyOC44OTggMi43OCAyLjc4IDAgMCAxLS44MDMuNjI0IDIuMzEzIDIuMzEzIDAgMCAxLTEuMDM3LjIzNGgtMS41NjZhLjYzNi42MzYgMCAwIDEtLjQ3LS4xNzUuNjMyLjYzMiAwIDAgMS0uMTc2LS40Njl2LTQuMjc0aC0uMDJ6bTEuMjczLjUwN3YzLjIyaC43MjRjLjQxIDAgLjc2My0uMTU2IDEuMDM3LS40NDguMTE4LS4xMTcuMTk2LS4yOTMuMjU1LS41MDhzLjA5Ny0uNDQ5LjA5Ny0uNzAzYzAtLjQ4Ny0uMDk3LS44NTgtLjMxMy0xLjA5M2ExLjM0MiAxLjM0MiAwIDAgMC0xLjA1Ny0uNDY4aC0uNzQzeiIgZGF0YS1yZWFjdGlkPSI0OSIvPjxwYXRoIGQ9Ik00NC4xNTcgMzQuNzQ1djIuNjk0YzAgLjM1MS4xMTguNjQ0LjMzMy44NHMuNDg5LjI5Mi44MjIuMjkyLjYwNy0uMDk3LjgyMi0uMjkzLjMzMy0uNDg4LjMzMy0uODM5di0yLjY5NGMwLS4yMTQuMDU4LS4zNy4xNzYtLjQ4OGEuNjIuNjIgMCAwIDEgLjQ1LS4xNzVjLjE5NiAwIC4zNTIuMDc4LjQ3LjE3NS4xMTcuMTE4LjE3Ni4yNzQuMTc2LjQ4OHYyLjY5NGMwIC40ODgtLjA5OC44OTgtLjMxMyAxLjI2OS0uMjE1LjM3LS40ODkuNjI0LS44NjEuODJzLS43ODMuMjkyLTEuMjUzLjI5Mi0uOS0uMDk3LTEuMjUzLS4yOTJhMi4xNzEgMi4xNzEgMCAwIDEtLjg2LS44MiAyLjU2OCAyLjU2OCAwIDAgMS0uMzE0LTEuMjV2LTIuNzEzYzAtLjIxNC4wNTktLjM3LjE3Ni0uNDg3YS42MzYuNjM2IDAgMCAxIC40Ny0uMTc2Yy4xOTYgMCAuMzMzLjA1OC40NS4xNzZzLjE3Ni4yNzMuMTc2LjQ4N3oiIGRhdGEtcmVhY3RpZD0iNTAiLz48cGF0aCBkPSJNNDguMzY1IDM2Ljg5M2MwLS40My4wNTktLjgyLjE5Ni0xLjE3Mi4xMzctLjM1LjMzMy0uNjYzLjU2OC0uOTE3LjI1NC0uMjU0LjU0OC0uNDQ5Ljg4LS41ODZhMi45MTUgMi45MTUgMCAwIDEgMS4xMTYtLjIxNGMuMjM1IDAgLjQ4OS4wMi43NDQuMDc4LjI1NC4wNTguNDcuMTM3LjY0Ni4yNzNzLjI3NC4zMTIuMjc0LjU0N2MwIC4wMzkgMCAuMDk3LS4wMi4xNTYtLjAxOS4wNTgtLjAxOS4wNzgtLjAxOS4wNzhhLjU2OC41NjggMCAwIDEtLjUwOS4zNy43NzMuNzczIDAgMCAxLS4yNzQtLjA1OGMtLjExOC0uMDM5LS4yMTYtLjA1OC0uMjk0LS4wOTctLjA5OC0uMDQtLjE3Ni0uMDU5LS4yNTQtLjA3OGExLjE1NCAxLjE1NCAwIDAgMC0uMjU1LS4wNGMtLjMzMiAwLS42MjYuMDk4LS44NjEuMjc0cy0uNDExLjQzLS40ODkuNzQxYy0uMDU5LjE3Ni0uMDk4LjM5LS4xMTguNjY0LjAyLjQzLjEzNy44Mi4zMzMgMS4xMzIuMjM1LjMzMi42MDcuNTA4IDEuMDk2LjUwOC4yOTQgMCAuNTQ4LS4wNTkuNzYzLS4xNTYuMTU3LS4wNTkuMjc1LS4wOTguMzcyLS4wOThhLjU3LjU3IDAgMCAxIC41ODguNTY2YzAgLjI5My0uMTU3LjUyNy0uNDcuNjY0YTMuMDc4IDMuMDc4IDAgMCAxLTEuMjkyLjI3M2MtLjQ1IDAtLjg0Mi0uMDc4LTEuMjE0LS4yNTRhMi4zMzggMi4zMzggMCAwIDEtMS4wOTYtLjk5NWMtLjI3NC0uNDUtLjQxMS0uOTk2LS40MTEtMS42NnoiIGRhdGEtcmVhY3RpZD0iNTEiLz48cGF0aCBkPSJNNTMuMzE3IDM4LjUzMmwxLjMzMS0zLjU5MWMuMjE2LS42MjUuNTI5LS45MzcuOTc5LS45MzcuNDMxIDAgLjc2My4yOTIuOTc5Ljg1OWwxLjQwOSAzLjcyOGMuMDc4LjIzNC4xMTcuNDMuMTE3LjU2NmEuNTAyLjUwMiAwIDAgMS0uMTc2LjQxLjY0NC42NDQgMCAwIDEtLjQzLjE1NmMtLjMxNCAwLS41MjktLjE5NS0uNjY2LS41ODZsLS4xNTctLjU0NmgtMi4wOTRsLS4xNzYuNTQ2Yy0uMDU5LjE5NS0uMTM3LjMzMi0uMjU0LjQzYS42MTIuNjEyIDAgMCAxLS40MzEuMTU2Yy0uMzkyIDAtLjU4Ny0uMTc2LS41ODctLjUyNyAwLS4xOTUuMDU4LS40MS4xNTYtLjY2NHptMS42NDQtMS4xMzJoMS4zMzFsLS42NDUtMi4wM2gtLjAybC0uNjY2IDIuMDN6IiBkYXRhLXJlYWN0aWQ9IjUyIi8+PHBhdGggZD0iTTYxLjA4OCAzOS44MmwtLjIxNi4yOTNoLjE5NmMuNDExLjA1OS42MjcuMjU0LjYyNy42MDVhLjU0NC41NDQgMCAwIDEtLjE1Ny4zOS45MTIuOTEyIDAgMCAxLS4zOTEuMjU0IDEuNDI5IDEuNDI5IDAgMCAxLS40OS4wNzhjLS40NSAwLS42ODUtLjA5Ny0uNzI0LS4zMTIgMC0uMDc4LjAyLS4xMzYuMDM5LS4xOTUuMDM5LS4wNTkuMDc4LS4wOTguMTE4LS4wOTguMDE5IDAgLjAzOSAwIC4wMzktLjAyLjAzOSAwIC4wOTguMDIuMTk1LjA2LjA5OC4wMzkuMTc3LjA1OC4yMzUuMDU4YS4zMy4zMyAwIDAgMCAuMTk2LS4wNTkuMTc2LjE3NiAwIDAgMCAuMDc4LS4xNTZjMC0uMTE3LS4wMTktLjE3NS0uMDc4LS4xOTVhMS4yMDMgMS4yMDMgMCAwIDAtLjI3NC0uMDU5Yy0uMTM3LS4wMTktLjIxNS0uMDU4LS4yMzUtLjExNyAwLS4wMi0uMDE5LS4wMzktLjAzOS0uMDc4LjA5OC0uMTc1LjIxNS0uMzUxLjMzMy0uNTA3YTIuMjkzIDIuMjkzIDAgMCAxLS45MDEtLjM1MiAyLjM4NiAyLjM4NiAwIDAgMS0uNjY1LS42NjMgMy4zMDIgMy4zMDIgMCAwIDEtLjU0OC0xLjg1NGMwLS40My4wNTktLjgyLjE5Ni0xLjE3Mi4xMzctLjM1LjMzMi0uNjYzLjU2Ny0uOTE3LjI1NS0uMjU0LjU0OC0uNDQ5Ljg4MS0uNTg2YTIuOTE1IDIuOTE1IDAgMCAxIDEuMTE2LS4yMTRjLjIzNSAwIC40ODkuMDIuNzQzLjA3OC4yNTUuMDU4LjQ3LjEzNi42NDYuMjczYS42NTUuNjU1IDAgMCAxIC4yNzQuNTQ3YzAgLjAzOSAwIC4wOTctLjAxOS4xNTYtLjAyLjA1OC0uMDIuMDc4LS4wMi4wNzhhLjU2OC41NjggMCAwIDEtLjUwOS4zNy43NzMuNzczIDAgMCAxLS4yNzQtLjA1OGMtLjExNy0uMDM5LS4yMTUtLjA1OC0uMjkzLS4wOTdhMS43OTQgMS43OTQgMCAwIDAtLjI1NS0uMDc5IDEuMTQ2IDEuMTQ2IDAgMCAwLS4yNTQtLjAzOWMtLjMzMyAwLS42MjcuMDk4LS44NjEuMjc0YTEuMzIgMS4zMiAwIDAgMC0uNDkuNzQxYy0uMDU4LjE3Ni0uMDk4LjM5LS4xMTcuNjY0LjAxOS40My4xMzcuODIuMzMzIDEuMTMyLjIzNC4zMzIuNjA2LjUwOCAxLjA5Ni41MDguMjkzIDAgLjU0OC0uMDU5Ljc2My0uMTU3LjE1Ny0uMDU4LjI3NC0uMDk3LjM3Mi0uMDk3LjE3NiAwIC4zMTMuMDU4LjQxMS4xNTZzLjE3Ni4yMzQuMTc2LjQxYzAgLjI5My0uMTU2LjUyNy0uNDUuNjY0LS4zMzMuMTk1LS44MDMuMjkyLTEuMzcuMjkyeiIgZGF0YS1yZWFjdGlkPSI1MyIvPjxwYXRoIGQ9Ik02My40MTcgMzguNTMybDEuMzMxLTMuNTkxYy4yMTUtLjYyNS41MjgtLjkzNy45NzktLjkzNy40MyAwIC43NjMuMjkyLjk3OC44NTlsMS40MSAzLjcyOGMuMDc4LjIzNC4xMTcuNDMuMTE3LjU2NmEuNTA1LjUwNSAwIDAgMS0uMTc2LjQxLjY0OC42NDggMCAwIDEtLjQzMS4xNTZjLS4zMTMgMC0uNTI4LS4xOTUtLjY2NS0uNTg2bC0uMTU3LS41NDZoLTIuMDc1bC0uMTc2LjU0NmMtLjA1OC4xOTUtLjEzNy4zMzItLjI1NC40M2EuNjEyLjYxMiAwIDAgMS0uNDMxLjE1NmMtLjM5MSAwLS41ODctLjE3Ni0uNTg3LS41MjcgMC0uMTk1LjAzOS0uNDEuMTM3LS42NjR6bTEuMzMxLTYuMTI5Yy4xNzYgMCAuMzUyLjAyLjQ4OS4wNTlzLjMzMy4wOTcuNTY4LjE3NWMuMjM1LjA3OC4zOTEuMTE4LjQ3LjExOC4wMTktLjAyLjAzOS0uMDIuMDU4LS4wMi4wNTkgMCAuMTE4LS4wMi4xNTctLjA1OS4wMzktLjAzOS4wOTgtLjA3OC4xNTctLjEzNi4wNTgtLjA1OS4xMTctLjA5OC4xNTYtLjExN3MuMDk4LS4wNC4xNTctLjA0YS4zOC4zOCAwIDAgMSAuMzEzLjE1Ny41NDUuNTQ1IDAgMCAxIC4xMTcuMzUxYzAgLjE5NS0uMDU4LjM3MS0uMTk1LjUyNy0uMTM3LjE1Ni0uMjk0LjI3My0uNDcuMzEzLS4xOTYgMC0uMzUyLS4wMi0uNTA5LS4wNmE1LjYzOCA1LjYzOCAwIDAgMS0uNTQ4LS4xNzVjLS4yMTUtLjA3OC0uMzUyLS4xMTctLjQzMS0uMTE3YS41NzQuNTc0IDAgMCAwLS4xOTUuMDRjLS4wNTkuMDM4LS4wOTguMDc3LS4xNTcuMTM2LS4wNTkuMDU4LS4xMTcuMDk3LS4xNTcuMTM2LS4wMzkuMDQtLjExNy4wNTktLjE5NS4wNTlhLjM5Mi4zOTIgMCAwIDEtLjMxNC0uMTM3LjQ3Mi40NzIgMCAwIDEtLjEzNy0uMzMxYzAtLjE5Ni4wNTktLjM3MS4xNzctLjU0N2EuNzY5Ljc2OSAwIDAgMSAuNDg5LS4zMzJ6bS4zMzMgNC45OTdoMS4zMzFsLS42NDYtMi4wM2gtLjAybC0uNjY1IDIuMDN6IiBkYXRhLXJlYWN0aWQ9IjU0Ii8+PHBhdGggZD0iTTcxLjMyNCAzNC4wMDRjLjQxMiAwIC43ODMuMDU4IDEuMTE2LjE5NS4zMzMuMTM3LjYyNi4zMzIuODYxLjU4NS4yMzUuMjU0LjQzMS41NjcuNTQ4LjkxOC4xMzcuMzUxLjE5Ni43NjEuMTk2IDEuMjEgMCAuNDMtLjA1OS44Mi0uMTk2IDEuMTlhMi44NiAyLjg2IDAgMCAxLS41NDguOTE4Yy0uMjM1LjI1NC0uNTI4LjQ1LS44NjEuNTg2cy0uNzA0LjE5NS0xLjExNi4xOTVjLS40MTEgMC0uNzgyLS4wNTktMS4xMTUtLjE5NXMtLjYyNy0uMzMyLS44ODEtLjU4NmEyLjU0MiAyLjU0MiAwIDAgMS0uNTQ4LS45MTcgMy4yIDMuMiAwIDAgMS0uMTk2LTEuMTcxYzAtLjQzLjA1OS0uODQuMTk2LTEuMTkxLjEzNy0uMzcuMzEzLS42NjQuNTQ4LS45MzcuMjM1LS4yNTQuNTI5LS40NDkuODYxLS41ODZhMi45NDIgMi45NDIgMCAwIDEgMS4xMzUtLjIxNHptLS4wMTkgMS4xN2MtLjMxMyAwLS41NjguMDc5LS43ODMuMjM1LS4yMTUuMTU2LS4zNTIuMzcxLS40NS42NDRhMi40NjggMi40NjggMCAwIDAtLjEzNy44NmMwIC40ODcuMTE3Ljg3Ny4zNTIgMS4yMS4yMzUuMzMxLjU2OC41MDcgMS4wMzcuNTA3LjMxNCAwIC41NjgtLjA3OC43ODMtLjIzNC4yMTYtLjE1Ny4zNTMtLjM3MS40NTEtLjYyNWEyLjM4IDIuMzggMCAwIDAgLjEzNy0uODRjMC0uMzEyLS4wNC0uNjA0LS4xMzctLjg1OGExLjUzOCAxLjUzOCAwIDAgMC0uNDUxLS42NDRjLS4yMTUtLjE3Ni0uNDg5LS4yNTQtLjgwMi0uMjU0eiIgZGF0YS1yZWFjdGlkPSI1NSIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+';
    },
    754: function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDIwNSIgb3ZlcmZsb3c9InZpc2libGUiPjxnIGZpbGw9IiMzYjU5OTgiPjxwYXRoIGQ9Ik01MzMuNjkgOTkuNjQ5Yy04LjU2MSAwLTE0LjczMiAyLjgwNi0yMC45ODcgNS42Njd2NjQuNzA2YzUuOTkzLjU3MSA5LjQyNy41NzEgMTUuMTE1LjU3MSAyMC41NDcgMCAyMy4zNjMtOS40MDggMjMuMzYzLTIyLjU0N1YxMTcuMTRjMC05LjctMy4yMi0xNy40OTEtMTcuNDkyLTE3LjQ5MXptLTEzNi40NDctMy41MzFjLTE0LjI1NCAwLTE3LjUxIDcuODI3LTE3LjUxIDE3LjUxN3Y1LjQ0NWgzNC45OTl2LTUuNDQ1YzAtOS42OS0zLjI1Mi0xNy41MTctMTcuNDktMTcuNTE3em0tMjY0LjMyNCA2Ny4zNTNjMCA3LjY2NiAzLjYxNyAxMS42NDggMTEuNjAxIDExLjY0OCA4LjU2NSAwIDEzLjYzNS0yLjc5MiAxOS44ODYtNS42NnYtMTUuMzVoLTE4LjcyOGMtOC44NjMgMC0xMi43NiAxLjY1LTEyLjc2IDkuMzYyem01MzMuNS02My44MjJjLTE0LjI3OCAwLTE5LjIyNiA3Ljc5Mi0xOS4yMjYgMTcuNDl2MzUuNDA1YzAgOS43MjggNC45NDggMTcuNTQzIDE5LjIyNSAxNy41NDMgMTQuMjQgMCAxOS4yMjUtNy44MTUgMTkuMjI1LTE3LjU0M1YxMTcuMTRjMC05LjctNC45ODUtMTcuNDkxLTE5LjIyNS0xNy40OTF6TTYyLjk0NSAyMDMuMTY3aC00MS45N1YxMDEuNTcySDBWNjYuNTY0aDIwLjk3NXYtMjEuMDJDMjAuOTc1IDE2Ljk4MyAzMi44MTMgMCA2Ni40NTUgMGgyOC4wMTF2MzUuMDE1SDc2Ljk2Yy0xMy4wOTkgMC0xMy45NjEgNC44OTItMTMuOTYxIDE0LjAyNGwtLjA1MiAxNy41MjVoMzEuNzE3bC0zLjcxIDM1LjAwOEg2Mi45NDV2MTAxLjU5NXptMTQzLjQ0Ny4yNjNoLTM0Ljk4bC0xLjUxNi04Ljg0N2MtMTUuOTczIDguODQ3LTMwLjIyOSAxMC4yOC0zOS42MzMgMTAuMjgtMjUuNjUzIDAtMzkuMzEyLTE3LjE0LTM5LjMxMi00MC44MzkgMC0yNy45NjQgMTUuOTMzLTM3Ljk0NCA0NC40NC0zNy45NDRoMjkuMDE0di02LjA0NGMwLTE0LjI3LTEuNjM1LTE4LjQ2NC0yMy41ODUtMTguNDY0aC0zNS44OWwzLjUxLTM1LjAwOGgzOS4yM2M0OC4xNjQgMCA1OC43MjIgMTUuMjE0IDU4LjcyMiA1My43NTN2ODMuMTEzem0xMTguOTU4LTk5LjI5Yy0yMS43NjktMy43My0yOC4wMi00LjU1LTM4LjQ5NC00LjU1LTE4LjgxNSAwLTI0LjUwMSA0LjE1MS0yNC41MDEgMjAuMTI3djMwLjIyMmMwIDE1Ljk3OCA1LjY4NiAyMC4xNDggMjQuNSAyMC4xNDggMTAuNDc2IDAgMTYuNzI2LS44MzQgMzguNDk1LTQuNTgydjM0LjE0OGMtMTkuMDY4IDQuMjc0LTMxLjQ5IDUuMzk4LTQxLjk5IDUuMzk4LTQ1LjA2MyAwLTYyLjk3Ni0yMy43LTYyLjk3Ni01Ny45MzN2LTI0LjUyNGMwLTM0LjI2MyAxNy45MTMtNTguMDAzIDYyLjk3Ni01OC4wMDMgMTAuNSAwIDIyLjkyMiAxLjEzIDQxLjk5IDUuNDIxdjM0LjEyOHptMTMxLjM1MiA0Mi45NzhoLTc2Ljk3djIuODIxYzAgMTUuOTc4IDUuNjkgMjAuMTQ4IDI0LjUgMjAuMTQ4IDE2LjkxIDAgMjcuMjMtLjgzNCA0OC45Ni00LjU4MnYzNC4xNDhjLTIwLjk1NiA0LjI3NC0zMS44NzYgNS4zOTgtNTIuNDM5IDUuMzk4LTQ1LjA2NiAwLTYyLjk4OC0yMy43LTYyLjk4OC01Ny45MzNWMTE5LjA4YzAtMjkuOTUzIDEzLjI5OC01NC40OSA1OS40NzctNTQuNDkgNDYuMTc4IDAgNTkuNDYgMjQuMjUxIDU5LjQ2IDU0LjQ5djI4LjAzOHptMTM2LjQ0Mi42NDdjMCAzMy4wOS05LjQ1NiA1Ny4yMi02Ni43NDYgNTcuMjItMjAuNjg3IDAtMzIuODIzLTEuODE4LTU1LjY1Ni01LjMzMlYxMC41MTNsNDEuOTYtNy4wMDN2NjYuMTZjOS4wNjYtMy4zNjkgMjAuODA0LTUuMDggMzEuNDg3LTUuMDggNDEuOTY0IDAgNDguOTU1IDE4LjgxNCA0OC45NTUgNDkuMDQ1djM0LjEzem0xMzQuNTA1LjcyMmMwIDI4LjU0NC0xMS43ODUgNTYuMjI3LTYxLjA5MSA1Ni4yMjctNDkuMzMgMC02MS4zMzUtMjcuNjgzLTYxLjMzNS01Ni4yMjd2LTI3LjU2MWMwLTI4LjU1OSAxMi4wMDUtNTYuMjQ2IDYxLjMzNS01Ni4yNDYgNDkuMzA2IDAgNjEuMDkgMjcuNjg3IDYxLjA5IDU2LjI0NnYyNy41NnptMTM0LjQxIDBjMCAyOC41NDQtMTEuNzk4IDU2LjIyNy02MS4wOTUgNTYuMjI3LTQ5LjMzIDAtNjEuMzM0LTI3LjY4My02MS4zMzQtNTYuMjI3di0yNy41NjFjMC0yOC41NTkgMTIuMDA0LTU2LjI0NiA2MS4zMzQtNTYuMjQ2IDQ5LjI5NyAwIDYxLjA5NiAyNy42ODcgNjEuMDk2IDU2LjI0NnYyNy41NnptMTM3Ljk0IDU0LjY4aC00NS40ODNsLTM4LjQ2NC02NC4yMTF2NjQuMjExaC00MS45NzRWMTAuNTEybDQxLjk3NC03LjAwMnYxMjQuMDIzbDM4LjQ2NC02MC45N0gxMDAwTDk1OC4wMDggMTMzLjEgMTAwMCAyMDMuMTY3ek04MDAuODI1IDk5LjY1Yy0xNC4yNTQgMC0xOS4yMDIgNy43OTItMTkuMjAyIDE3LjQ5djM1LjQwNWMwIDkuNzI4IDQuOTQ4IDE3LjU0MyAxOS4yMDIgMTcuNTQzIDE0LjIzNSAwIDE5LjI3Mi03LjgxNSAxOS4yNzItMTcuNTQzVjExNy4xNGMwLTkuNy01LjAzNy0xNy40OTEtMTkuMjcyLTE3LjQ5MXpNMTAxNC4wNjYgMTgzLjNjNS41MzcgMCA5Ljk1IDQuNTE1IDkuOTUgMTAuMTU1IDAgNS43MjctNC40MTMgMTAuMTkyLTkuOTkgMTAuMTkyLTUuNTQ3IDAtMTAuMDQ5LTQuNDY1LTEwLjA0OS0xMC4xOTIgMC01LjY0IDQuNTAyLTEwLjE1NSAxMC4wNDktMTAuMTU1aC4wNHptLS4wNCAxLjU3OGMtNC40NiAwLTguMTEzIDMuODQtOC4xMTMgOC41NzcgMCA0LjgyNCAzLjY1MyA4LjYxMyA4LjE1NCA4LjYxMyA0LjUwNS4wNDQgOC4xMDMtMy43OSA4LjEwMy04LjU3cy0zLjU5OC04LjYyLTguMTAzLTguNjJoLS4wNHptLTEuODk0IDE0LjQ4OGgtMS44MDZ2LTExLjMzYy45NDctLjEzMiAxLjg1LS4yNjUgMy4yMDEtLjI2NSAxLjcxNSAwIDIuODM0LjM2IDMuNTIuODUyLjY2Ni41IDEuMDI1IDEuMjYzIDEuMDI1IDIuMzQyIDAgMS40OTgtLjk4NCAyLjM5NC0yLjE5OSAyLjc2MXYuMDg4Yy45ODguMTg0IDEuNjYzIDEuMDggMS44OSAyLjc0Ny4yNjUgMS43NjIuNTM3IDIuNDM4LjcxNyAyLjgwNWgtMS44OTFjLS4yNjgtLjM2OC0uNTQtMS40MDMtLjc2Ny0yLjg5My0uMjY1LTEuNDQtLjk5Mi0xLjk4My0yLjQzOC0xLjk4M2gtMS4yNTJ2NC44NzZ6bTAtNi4yNzFoMS4zMDdjMS40OCAwIDIuNzM5LS41NDMgMi43MzktMS45NDYgMC0uOTkxLS43MTYtMS45ODMtMi43NC0xLjk4My0uNTkgMC0uOTk4LjA0NS0xLjMwNi4wODl2My44NHoiLz48L2c+PC9zdmc+';
    },
    755: function(module, exports) {
      module.exports =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzIgOTIiPjxwYXRoIGZpbGw9IiNFQTQzMzUiIGQ9Ik0xMTUuNzUgNDcuMThjMCAxMi43Ny05Ljk5IDIyLjE4LTIyLjI1IDIyLjE4cy0yMi4yNS05LjQxLTIyLjI1LTIyLjE4QzcxLjI1IDM0LjMyIDgxLjI0IDI1IDkzLjUgMjVzMjIuMjUgOS4zMiAyMi4yNSAyMi4xOHptLTkuNzQgMGMwLTcuOTgtNS43OS0xMy40NC0xMi41MS0xMy40NFM4MC45OSAzOS4yIDgwLjk5IDQ3LjE4YzAgNy45IDUuNzkgMTMuNDQgMTIuNTEgMTMuNDRzMTIuNTEtNS41NSAxMi41MS0xMy40NHoiLz48cGF0aCBmaWxsPSIjRkJCQzA1IiBkPSJNMTYzLjc1IDQ3LjE4YzAgMTIuNzctOS45OSAyMi4xOC0yMi4yNSAyMi4xOHMtMjIuMjUtOS40MS0yMi4yNS0yMi4xOGMwLTEyLjg1IDkuOTktMjIuMTggMjIuMjUtMjIuMThzMjIuMjUgOS4zMiAyMi4yNSAyMi4xOHptLTkuNzQgMGMwLTcuOTgtNS43OS0xMy40NC0xMi41MS0xMy40NHMtMTIuNTEgNS40Ni0xMi41MSAxMy40NGMwIDcuOSA1Ljc5IDEzLjQ0IDEyLjUxIDEzLjQ0czEyLjUxLTUuNTUgMTIuNTEtMTMuNDR6Ii8+PHBhdGggZmlsbD0iIzQyODVGNCIgZD0iTTIwOS43NSAyNi4zNHYzOS44MmMwIDE2LjM4LTkuNjYgMjMuMDctMjEuMDggMjMuMDctMTAuNzUgMC0xNy4yMi03LjE5LTE5LjY2LTEzLjA3bDguNDgtMy41M2MxLjUxIDMuNjEgNS4yMSA3Ljg3IDExLjE3IDcuODcgNy4zMSAwIDExLjg0LTQuNTEgMTEuODQtMTN2LTMuMTloLS4zNGMtMi4xOCAyLjY5LTYuMzggNS4wNC0xMS42OCA1LjA0LTExLjA5IDAtMjEuMjUtOS42Ni0yMS4yNS0yMi4wOSAwLTEyLjUyIDEwLjE2LTIyLjI2IDIxLjI1LTIyLjI2IDUuMjkgMCA5LjQ5IDIuMzUgMTEuNjggNC45NmguMzR2LTMuNjFoOS4yNXptLTguNTYgMjAuOTJjMC03LjgxLTUuMjEtMTMuNTItMTEuODQtMTMuNTItNi43MiAwLTEyLjM1IDUuNzEtMTIuMzUgMTMuNTIgMCA3LjczIDUuNjMgMTMuMzYgMTIuMzUgMTMuMzYgNi42MyAwIDExLjg0LTUuNjMgMTEuODQtMTMuMzZ6Ii8+PHBhdGggZmlsbD0iIzM0QTg1MyIgZD0iTTIyNSAzdjY1aC05LjVWM2g5LjV6Ii8+PHBhdGggZmlsbD0iI0VBNDMzNSIgZD0iTTI2Mi4wMiA1NC40OGw3LjU2IDUuMDRjLTIuNDQgMy42MS04LjMyIDkuODMtMTguNDggOS44My0xMi42IDAtMjIuMDEtOS43NC0yMi4wMS0yMi4xOCAwLTEzLjE5IDkuNDktMjIuMTggMjAuOTItMjIuMTggMTEuNTEgMCAxNy4xNCA5LjE2IDE4Ljk4IDE0LjExbDEuMDEgMi41Mi0yOS42NSAxMi4yOGMyLjI3IDQuNDUgNS44IDYuNzIgMTAuNzUgNi43MiA0Ljk2IDAgOC40LTIuNDQgMTAuOTItNi4xNHptLTIzLjI3LTcuOThsMTkuODItOC4yM2MtMS4wOS0yLjc3LTQuMzctNC43LTguMjMtNC43LTQuOTUgMC0xMS44NCA0LjM3LTExLjU5IDEyLjkzeiIvPjxwYXRoIGZpbGw9IiM0Mjg1RjQiIGQ9Ik0zNS4yOSA0MS40MVYzMkg2N2MuMzEgMS42NC40NyAzLjU4LjQ3IDUuNjggMCA3LjA2LTEuOTMgMTUuNzktOC4xNSAyMi4wMS02LjA1IDYuMy0xMy43OCA5LjY2LTI0LjAyIDkuNjZDMTYuMzIgNjkuMzUuMzYgNTMuODkuMzYgMzQuOTEuMzYgMTUuOTMgMTYuMzIuNDcgMzUuMy40N2MxMC41IDAgMTcuOTggNC4xMiAyMy42IDkuNDlsLTYuNjQgNi42NGMtNC4wMy0zLjc4LTkuNDktNi43Mi0xNi45Ny02LjcyLTEzLjg2IDAtMjQuNyAxMS4xNy0yNC43IDI1LjAzIDAgMTMuODYgMTAuODQgMjUuMDMgMjQuNyAyNS4wMyA4Ljk5IDAgMTQuMTEtMy42MSAxNy4zOS02Ljg5IDIuNjYtMi42NiA0LjQxLTYuNDYgNS4xLTExLjY1bC0yMi40OS4wMXoiLz48L3N2Zz4=';
    },
    756: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var _Logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(146);
      __webpack_exports__.a = _Logo__WEBPACK_IMPORTED_MODULE_0__.a;
    },
    757: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
        react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4),
        styled_components__WEBPACK_IMPORTED_MODULE_1___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_1__,
        ),
        react_highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58),
        react_highlight__WEBPACK_IMPORTED_MODULE_2___default = __webpack_require__.n(
          react_highlight__WEBPACK_IMPORTED_MODULE_2__,
        ),
        _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          95,
        ),
        _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
          _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3__,
        ),
        _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          3,
        ),
        Font = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig(
          { displayName: 'Usage__Font', componentId: 'sc-1a7ubx6-0' },
        )(['*{font-family:Montserrat,sans-serif !important;}']),
        HighlightWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig(
          {
            displayName: 'Usage__HighlightWrapper',
            componentId: 'sc-1a7ubx6-1',
          },
        )(['position:relative;']),
        glogalStyleImport =
          "import { GlobalStyle } from '@catho-private/quantum';",
        glogalStyleCode =
          "...\nReactDOM\n  .render(() => (\n    <>\n      <GlobalStyle />\n      <App />\n    </>\n  ), document.getElementById('root'));\n",
        Typography = function() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            Font,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'strong',
                null,
                'Nunito Sans',
              ),
              ' is the standard typeface for Catho on the web',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'In order to use the default Catho Typography, just import the GlobalStyle component:',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'bash', className: 'highlight' },
                glogalStyleImport,
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.CodeToClipboard,
                { code: glogalStyleImport },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'Usually, it is used before the application component',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'bash', className: 'highlight' },
                glogalStyleCode,
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.CodeToClipboard,
                { code: glogalStyleCode },
              ),
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'The ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'code',
                null,
                '<GlobalStyle />',
              ),
              ' will add and set automatically all the base configuration for font and',
              ' ',
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _storybook_addon_links_react__WEBPACK_IMPORTED_MODULE_3___default.a,
                { kind: '1. Foundation', story: 'Icons' },
                'Icons',
              ),
              '.',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              null,
              'If you want to include one of those separately, you can import each one as you like to:',
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              HighlightWrapper,
              null,
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_highlight__WEBPACK_IMPORTED_MODULE_2___default.a,
                { language: 'bash', className: 'highlight' },
                "import { Typography, IconFont } from '@catho-private/quantum';",
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_4__.CodeToClipboard,
                {
                  code:
                    "import { Typography, IconFont } from '@catho-private/quantum';",
                },
              ),
            ),
          );
        };
      (__webpack_exports__.a = Typography),
        (Typography.__docgenInfo = {
          description: '',
          methods: [],
          displayName: 'Typography',
        }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Typography\\Usage.jsx'] = {
            name: 'Typography',
            docgenInfo: Typography.__docgenInfo,
            path: 'stories\\Typography\\Usage.jsx',
          });
    },
    758: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(47);
      __webpack_exports__.a = [
        'Introduction',
        'Colors',
        'Grid',
        'Typography',
        'Icon',
        'Button',
        'AutoComplete',
        'Checkbox',
        'Dropdown',
        'Input',
        'Radio',
        'Range',
        'Textarea',
        'Toggle',
        'Form',
        'Alert',
        'Modal',
        'Image',
        'Logo',
        'TextMask',
        'Tooltip',
        'Card',
        'List',
        'Wizard',
        'Slider',
        'Loading',
        'Loader',
        'Popover',
        'Badge',
        'Tag',
      ].map(function(s) {
        return './'.concat(s, '/').concat(s, '.story.jsx');
      });
    },
    759: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(192);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        addon_links_react = __webpack_require__(95),
        addon_links_react_default = __webpack_require__.n(addon_links_react),
        dist = __webpack_require__(3),
        sub_components_Title = styled_components_browser_cjs_default.a.h1.withConfig(
          { displayName: 'Title', componentId: 'sc-1vnr32k-0' },
        )(['']),
        sub_components_Subtitle = styled_components_browser_cjs_default.a.span.withConfig(
          { displayName: 'Subtitle', componentId: 'l2exyw-0' },
        )(['font-size:14px;line-height:21px;letter-spacing:0.3px;']),
        sub_components_Blockquote = styled_components_browser_cjs_default.a.blockquote.withConfig(
          { displayName: 'Blockquote', componentId: 'wqzdn1-0' },
        )(['font-size:12px;line-height:18px;letter-spacing:0.2px;margin:0;']),
        Small = styled_components_browser_cjs_default.a.small.withConfig({
          displayName: 'Components__Small',
          componentId: 'sc-17okx2r-0',
        })(['font-size:10px;']),
        Tr = styled_components_browser_cjs_default.a.tr.withConfig({
          displayName: 'Components__Tr',
          componentId: 'sc-17okx2r-1',
        })([
          'height:54px;td:first-child{width:140px;}td:nth-child(2){width:180px;}',
        ]),
        Components = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(dist.Title, null, 'Headings'),
            react_default.a.createElement(
              'table',
              null,
              react_default.a.createElement(
                'tbody',
                null,
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'h1 ',
                    react_default.a.createElement(Small, null, '48px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement('code', null, '<Title />'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Title,
                      null,
                      'Heading One',
                    ),
                  ),
                ),
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'h2 ',
                    react_default.a.createElement(Small, null, '54px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'code',
                      null,
                      '<Title as="h2" />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Title,
                      { as: 'h2' },
                      'Heading Two',
                    ),
                  ),
                ),
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'h3 ',
                    react_default.a.createElement(Small, null, '28px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'code',
                      null,
                      '<Title as="h3" />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Title,
                      { as: 'h3' },
                      'Heading Three',
                    ),
                  ),
                ),
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'h4 ',
                    react_default.a.createElement(Small, null, '24px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'code',
                      null,
                      '<Title as="h4" />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Title,
                      { as: 'h4' },
                      'Heading Four',
                    ),
                  ),
                ),
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'h5 ',
                    react_default.a.createElement(Small, null, '20px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'code',
                      null,
                      '<Title as="h5" />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Title,
                      { as: 'h5' },
                      'Heading Five',
                    ),
                  ),
                ),
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'h6 ',
                    react_default.a.createElement(Small, null, '18px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'code',
                      null,
                      '<Title as="h6" />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Title,
                      { as: 'h6' },
                      'Heading Six',
                    ),
                  ),
                ),
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'Subtitle ',
                    react_default.a.createElement(Small, null, '14px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement('code', null, '<Subtitle />'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Subtitle,
                      null,
                      'Heading Two',
                    ),
                  ),
                ),
              ),
            ),
            react_default.a.createElement(dist.Title, null, 'Texts'),
            react_default.a.createElement(
              'table',
              null,
              react_default.a.createElement(
                'tbody',
                null,
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'blockquote ',
                    react_default.a.createElement(Small, null, '12px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'code',
                      null,
                      '<Blockquote />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      sub_components_Blockquote,
                      null,
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lorem magna, molestie at pretium non, consequat sit amet ante. Aenean et ultrices elit. Suspendisse quis urna consequat, condimentum tortor ut, laoreet magna. Praesent accumsan massa pellentesque felis tempus, at semper lacus ullamcorper. Vestibulum maximus est est, sed ullamcorper mi pellentesque at. Nunc facilisis blandit felis sed sollicitudin. Proin rutrum consectetur gravida.',
                    ),
                  ),
                ),
              ),
            ),
            react_default.a.createElement(dist.Title, null, 'Lists'),
            react_default.a.createElement(
              'table',
              null,
              react_default.a.createElement(
                'tbody',
                null,
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'ul ',
                    '>',
                    ' li ',
                    react_default.a.createElement(Small, null, '16px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      addon_links_react_default.a,
                      { kind: '10. List', story: 'List' },
                      '<List />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'ul',
                      null,
                      react_default.a.createElement(
                        'li',
                        null,
                        'Lorem ipsum dolor sit amet',
                      ),
                      react_default.a.createElement(
                        'li',
                        null,
                        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                      ),
                      react_default.a.createElement(
                        'li',
                        null,
                        'Consectetur adipiscing elit',
                      ),
                    ),
                  ),
                ),
                react_default.a.createElement(
                  Tr,
                  null,
                  react_default.a.createElement(
                    'td',
                    null,
                    'ol ',
                    '>',
                    ' li ',
                    react_default.a.createElement(Small, null, '16px'),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      addon_links_react_default.a,
                      { kind: '10. List', story: 'List' },
                      '<List />',
                    ),
                  ),
                  react_default.a.createElement(
                    'td',
                    null,
                    react_default.a.createElement(
                      'ol',
                      null,
                      react_default.a.createElement(
                        'li',
                        null,
                        'Lorem ipsum dolor sit amet',
                      ),
                      react_default.a.createElement(
                        'li',
                        null,
                        'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                      ),
                      react_default.a.createElement(
                        'li',
                        null,
                        'Consectetur adipiscing elit',
                      ),
                    ),
                  ),
                ),
              ),
            ),
          );
        };
      __webpack_exports__.a = Components;
      (Components.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Components',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Typography\\Components.jsx'] = {
            name: 'Components',
            docgenInfo: Components.__docgenInfo,
            path: 'stories\\Typography\\Components.jsx',
          });
    },
    760: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        react_highlight = __webpack_require__(58),
        react_highlight_default = __webpack_require__.n(react_highlight),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        dist = __webpack_require__(3),
        deprecated = __webpack_require__(8),
        Col = __webpack_require__(12),
        Row = __webpack_require__(44),
        prop_types = (__webpack_require__(192), __webpack_require__(1)),
        prop_types_default = __webpack_require__.n(prop_types),
        media = __webpack_require__(106),
        Hide = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Hide',
          componentId: 'sc-13m0had-0',
        })(
          ['', ' ', ' ', ' ', ' ', ''],
          function(props) {
            return props.xlarge && media.a.xlarge();
          },
          function(props) {
            return props.large && media.a.large();
          },
          function(props) {
            return props.medium && media.a.medium();
          },
          function(props) {
            return props.small && media.a.small();
          },
          function(props) {
            return props.xsmall && media.a.xsmall();
          },
        );
      (Hide.propTypes = {
        xlarge: prop_types_default.a.bool,
        large: prop_types_default.a.bool,
        medium: prop_types_default.a.bool,
        small: prop_types_default.a.bool,
        xsmall: prop_types_default.a.bool,
      }),
        (Hide.displayName = 'Hide');
      var sub_components_Hide = Hide,
        StyledCol = styled_components_browser_cjs_default()(Col.a).withConfig({
          displayName: 'Grid__StyledCol',
          componentId: 'gtu6b7-0',
        })(
          [
            'background-color:',
            ';border:1px solid ',
            ';padding:8px;font-size:14px;',
          ],
          deprecated.a.SECONDARY[100],
          deprecated.a.SECONDARY[200],
        ),
        SizesTable = function() {
          return react_default.a.createElement(
            dist.Table,
            null,
            react_default.a.createElement(
              'tbody',
              null,
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement(
                    'p',
                    null,
                    'Breakpoint Range (dp)',
                  ),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'Portrait'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'Landscape'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'Window'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'Columns'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'Margins / Gutters'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '0 – 359'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small handset'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'xsmall'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '4'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '16'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '360 – 399'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'medium handset'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'xsmall'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '4'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '16'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '400 – 479'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large handset'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'xsmall'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '4'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '16'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '480 – 599'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large handset'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small handset'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'xsmall'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '4'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '16'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '600 – 719'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small tablet'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'medium handset'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '8'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '720 – 839'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large tablet'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large handset'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '8'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '840 – 959'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large tablet'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large handset'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '8'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '960 – 1023'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small tablet'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'small'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '8'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '1024 – 1279'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large tablet'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'medium'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '12'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '1280 – 1439'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large tablet'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'medium'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '12'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '1440 – 1599'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '12'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '1600 – 1919'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'large'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '12'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
              react_default.a.createElement(
                'tr',
                null,
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '1920 +'),
                ),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement('td', {
                  colSpan: '1',
                  rowSpan: '1',
                }),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, 'xlarge'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '12'),
                ),
                react_default.a.createElement(
                  'td',
                  { colSpan: '1', rowSpan: '1' },
                  react_default.a.createElement('p', null, '24'),
                ),
              ),
            ),
          );
        },
        HorizontalExample = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 1 },
                '<Col medium={1}>',
              ),
            ),
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { medium: 8 },
                '<Col medium={8}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 4 },
                '<Col medium={4}>',
              ),
            ),
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { medium: 4 },
                '<Col medium={4}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 4 },
                '<Col medium={4}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 4 },
                '<Col medium={4}>',
              ),
            ),
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { medium: 6 },
                '<Col medium={6}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 6 },
                '<Col medium={6}>',
              ),
            ),
            react_default.a.createElement(
              react_highlight_default.a,
              { language: 'javascript', className: 'highlight' },
              '<Row>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n    <Col medium={1}>...</Col>\n  </Row>\n\n  <Row>\n    <Col medium={8}>...</Col>\n    <Col medium={4}>...</Col>\n  </Row>\n\n  <Row>\n    <Col medium={4}>...</Col>\n    <Col medium={4}>...</Col>\n    <Col medium={4}>...</Col>\n  </Row>\n\n  <Row>\n    <Col medium={6}>...</Col>\n    <Col medium={6}>...</Col>\n  </Row>\n',
            ),
          );
        },
        MobileDesktopExample = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { xsmall: 2, small: 8 },
                '<Col xsmall={2} small={8}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { xsmall: 2, small: 4 },
                '<Col xsmall={2} small={4}>',
              ),
            ),
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { xsmall: 4, small: 4 },
                '<Col xsmall={4} small={4}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { xsmall: 4, small: 4 },
                '<Col xsmall={4} small={4}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { xsmall: 4, small: 4 },
                '<Col xsmall={4} small={4}>',
              ),
            ),
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { xsmall: 2 },
                '<Col xsmall={2}>',
              ),
              react_default.a.createElement(
                StyledCol,
                { xsmall: 2 },
                '<Col xsmall={2}>',
              ),
            ),
            react_default.a.createElement(
              react_highlight_default.a,
              { language: 'javascript', className: 'highlight' },
              '<Row>\n    <Col xsmall={2} small={8}>...</Col>\n    <Col xsmall={2} small={4}>...</Col>\n  </Row>\n\n  <Row>\n    <Col xsmall={4} small={4}>...</Col>\n    <Col xsmall={4} small={4}>...</Col>\n    <Col xsmall={4} small={4}>...</Col>\n  </Row>\n\n  <Row>\n    <Col xsmall={2}>...</Col>\n    <Col xsmall={2}>...</Col>\n  </Row>\n  ',
            ),
          );
        },
        HideExample = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              sub_components_Hide,
              { xsmall: !0 },
              react_default.a.createElement(
                Row.a,
                null,
                react_default.a.createElement(
                  StyledCol,
                  { xsmall: 2, small: 4, medium: 6 },
                  '...',
                ),
                react_default.a.createElement(
                  StyledCol,
                  { xsmall: 2, small: 4, medium: 6 },
                  '...',
                ),
              ),
            ),
            react_default.a.createElement(
              react_highlight_default.a,
              { language: 'javascript', className: 'highlight' },
              '<Hide xsmall>\n    <Row>\n      <Col>...</Col>\n      <Col>...</Col>\n    </Row>\n  </Hide>\n  ',
            ),
          );
        },
        NoGuttersExample = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              Row.a,
              { 'no-gutters': !0 },
              react_default.a.createElement(
                StyledCol,
                { medium: 6 },
                'medium=',
                6,
              ),
              react_default.a.createElement(
                StyledCol,
                { medium: 6 },
                'medium=',
                6,
              ),
            ),
            react_default.a.createElement(
              react_highlight_default.a,
              { language: 'javascript', className: 'highlight' },
              '<Row no-gutters>\n  <StyledCol medium={6}>medium={6}</StyledCol>\n  <StyledCol medium={6}>medium={6}</StyledCol>\n</Row>',
            ),
          );
        },
        OffsetExample = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              Row.a,
              null,
              react_default.a.createElement(
                StyledCol,
                { small: 2, 'small-offset': 2 },
                'small=',
                2,
                ' small-offset=',
                2,
              ),
              react_default.a.createElement(
                StyledCol,
                { small: 2 },
                'small=',
                2,
              ),
              react_default.a.createElement(
                StyledCol,
                { small: 2 },
                'small=',
                2,
              ),
              react_default.a.createElement(
                StyledCol,
                { small: 2 },
                'small=',
                2,
              ),
              react_default.a.createElement(
                StyledCol,
                { small: 2 },
                'small=',
                2,
              ),
            ),
            react_default.a.createElement(
              react_highlight_default.a,
              { language: 'javascript', className: 'highlight' },
              '<Row>\n  <Col small={2} small-offset={2}>small-offset={2}</Col>\n  <Col small={2}>small={2}</Col>\n  <Col small={2}>small={2}</Col>\n  <Col small={2}>small={2}</Col>\n  <Col small={2}>small={2}</Col>\n</Row>\n',
            ),
          );
        },
        Grid = function() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(
              'p',
              null,
              'This Grid is based on',
              ' ',
              react_default.a.createElement(
                'a',
                {
                  href:
                    'https://material.io/design/layout/responsive-layout-grid.html',
                },
                'Material Design Grid definition',
              ),
              'It is adaptable to screen size and orientation and has columns definitions to each resolution.',
            ),
            react_default.a.createElement(dist.HowToImport, {
              importModules: 'Container, Row, Col, Hide',
            }),
            react_default.a.createElement(dist.Title, null, 'How it works'),
            react_default.a.createElement(dist.Subtitle, null, 'Containers'),
            react_default.a.createElement(
              'p',
              null,
              'You may choose one of two containers or both to use in your projects. Note that, due to padding and more, neither container is nestable.',
            ),
            react_default.a.createElement(
              'p',
              null,
              'Use ',
              react_default.a.createElement(
                'code',
                null,
                '<Container></Container>',
              ),
              ' for a responsive fixed width container.',
            ),
            react_default.a.createElement(
              react_highlight_default.a,
              { language: 'javascript', className: 'highlight' },
              '<Container>\n    ...\n  </Container>\n',
            ),
            react_default.a.createElement(
              'p',
              null,
              'Use ',
              react_default.a.createElement(
                'code',
                null,
                '<Container fluid></Container>',
              ),
              ' for a full width container, spanning the entire width of your viewport.',
            ),
            react_default.a.createElement(
              react_highlight_default.a,
              { language: 'javascript', className: 'highlight' },
              '<Container fluid>\n...\n</Container>\n',
            ),
            react_default.a.createElement(dist.Subtitle, null, 'Row'),
            react_default.a.createElement(
              'p',
              null,
              'Rows are wrappers for columns. Each column has horizontal space',
              ' ',
              react_default.a.createElement('code', null, 'column gap'),
              '(called a gutter) for controlling the space between them.',
            ),
            react_default.a.createElement(dist.Subtitle, null, 'Breakpoints'),
            react_default.a.createElement(
              'p',
              null,
              'Material Design provides responsive layouts based on the following column structures. Layouts using 4-column, 8-column, and 12-column grids are available for use across different screens, devices, and orientations.',
            ),
            react_default.a.createElement(
              'p',
              null,
              'Each breakpoint range determines the number of columns, and recommended margins and gutters, for each display size.',
            ),
            react_default.a.createElement(SizesTable, null),
            react_default.a.createElement(
              'p',
              null,
              'The ',
              react_default.a.createElement('code', null, '<Col>'),
              ' component accepts this props for breakpoints:',
            ),
            react_default.a.createElement(
              'ul',
              null,
              react_default.a.createElement('li', null, 'xsmall'),
              react_default.a.createElement('li', null, 'small'),
              react_default.a.createElement('li', null, 'medium'),
              react_default.a.createElement('li', null, 'large'),
              react_default.a.createElement('li', null, 'xlarge'),
            ),
            react_default.a.createElement(
              dist.Subtitle,
              null,
              'Example: Stacked-to-horizontal',
            ),
            react_default.a.createElement(
              'p',
              null,
              'You can create a basic grid system that starts out stacked on mobile devices and tablet devices before becoming horizontal on desktop devices. Place grid columns in any ',
              react_default.a.createElement('code', null, '<Row>'),
            ),
            react_default.a.createElement(HorizontalExample, null),
            react_default.a.createElement(
              dist.Subtitle,
              null,
              'Example: Mobile and desktop',
            ),
            react_default.a.createElement(
              'p',
              null,
              'Don’t want your columns to simply stack in smaller devices? Use the xsmall and small device grid props by adding ',
              react_default.a.createElement('code', null, 'xsmall={*}'),
              react_default.a.createElement('code', null, 'small={*}'),
              ' to your columns. See the example below for a better idea of how it all works.',
            ),
            react_default.a.createElement(MobileDesktopExample, null),
            react_default.a.createElement(dist.Subtitle, null, 'No Gutters'),
            react_default.a.createElement(
              'p',
              null,
              'The padding in container and the gutter between rows and columns can be removed with no-gutters prop on ',
              react_default.a.createElement(
                'code',
                null,
                '<Container no-gutters>',
              ),
              ' or',
              ' ',
              react_default.a.createElement('code', null, '<Row no-gutters>'),
              '.',
            ),
            react_default.a.createElement(NoGuttersExample, null),
            react_default.a.createElement(
              dist.Subtitle,
              null,
              'Hide Component',
            ),
            react_default.a.createElement(
              'p',
              null,
              'If you need to hide some elements in your UI, you can use the',
              react_default.a.createElement('code', null, '<Hide>'),
              ' component.',
            ),
            react_default.a.createElement(
              'p',
              null,
              react_default.a.createElement('code', null, '<Hide>'),
              ' receives the same props as the',
              react_default.a.createElement('code', null, '<Col>'),
              ' component, they are:',
            ),
            react_default.a.createElement(
              'ul',
              null,
              react_default.a.createElement('li', null, 'xsmall'),
              react_default.a.createElement('li', null, 'small'),
              react_default.a.createElement('li', null, 'medium'),
              react_default.a.createElement('li', null, 'large'),
              react_default.a.createElement('li', null, 'xlarge'),
            ),
            react_default.a.createElement(
              dist.Subtitle,
              null,
              'Example: Hiding elements in xsmall devices',
            ),
            react_default.a.createElement(HideExample, null),
            react_default.a.createElement(
              dist.Subtitle,
              null,
              'Offsetting columns',
            ),
            react_default.a.createElement(
              'p',
              null,
              'Move columns to the right using',
              ' ',
              react_default.a.createElement(
                'code',
                null,
                '<Col [breakpoint]-offset={2}>',
              ),
              ' props. These props increase the left gap of a column by * columns. For example,',
              react_default.a.createElement(
                'code',
                null,
                '<Col small-offset={2} />',
              ),
              ' moves the column over two columns on small devices up.',
            ),
            react_default.a.createElement(OffsetExample, null),
            react_default.a.createElement(
              'p',
              null,
              'You can pass offset to all predefined props:',
            ),
            react_default.a.createElement(
              'ul',
              null,
              react_default.a.createElement('li', null, 'xsmall-offset'),
              react_default.a.createElement('li', null, 'small-offset'),
              react_default.a.createElement('li', null, 'medium-offset'),
              react_default.a.createElement('li', null, 'large-offset'),
              react_default.a.createElement('li', null, 'xlarge-offset'),
            ),
          );
        };
      __webpack_exports__.a = Grid;
      (Grid.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'Grid',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Grid\\Grid.jsx'] = {
            name: 'Grid',
            docgenInfo: Grid.__docgenInfo,
            path: 'stories\\Grid\\Grid.jsx',
          });
    },
    761: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(157),
        __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        FieldGroup = __webpack_require__(769),
        Label = __webpack_require__(768),
        ErrorMessage = __webpack_require__(1899);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      var Range_Range = (function(_React$Component) {
          function Range(props) {
            var _this, self, call;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Range),
              (self = this),
              (_this =
                !(call = _getPrototypeOf(Range).call(this, props)) ||
                ('object' !== _typeof(call) && 'function' != typeof call)
                  ? _assertThisInitialized(self)
                  : call),
              _initialiseProps.call(
                _assertThisInitialized(_assertThisInitialized(_this)),
              );
            var value = props.value;
            return (_this.state = { value: value }), _this;
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Range, react_default.a.Component),
            (Constructor = Range),
            (protoProps = [
              {
                key: 'componentWillUpdate',
                value: function(nextProps) {
                  var value = this.state.value;
                  nextProps.value !== value &&
                    (this.state.value = nextProps.value);
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    id = _this$props.id,
                    label = _this$props.label,
                    error = _this$props.error,
                    value = this.state.value;
                  return react_default.a.createElement(
                    FieldGroup.a,
                    null,
                    label &&
                      react_default.a.createElement(
                        Label.a,
                        { htmlFor: id },
                        ' ',
                        label,
                        ' ',
                      ),
                    react_default.a.createElement(
                      'input',
                      _extends({}, this.props, {
                        id: id,
                        value: value,
                        type: 'range',
                        onChange: this.handleChange,
                      }),
                    ),
                    error &&
                      react_default.a.createElement(
                        ErrorMessage.a,
                        null,
                        error,
                      ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Range
          );
          var Constructor, protoProps, staticProps;
        })(),
        _initialiseProps = function() {
          var _this2 = this;
          this.handleChange = function(e) {
            var onChange = _this2.props.onChange,
              value = e.target.value;
            _this2.setState({ value: +value }), onChange(e, { value: +value });
          };
        };
      (Range_Range.defaultProps = {
        value: 0,
        label: '',
        error: '',
        id: '',
        onBlur: function() {},
        onChange: function() {},
        onFocus: function() {},
      }),
        (Range_Range.propTypes = {
          value: prop_types_default.a.number,
          label: prop_types_default.a.string,
          error: prop_types_default.a.string,
          id: prop_types_default.a.string,
          onBlur: prop_types_default.a.func,
          onChange: prop_types_default.a.func,
          onFocus: prop_types_default.a.func,
        });
      var components_Range_Range = Range_Range;
      (Range_Range.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'handleChange',
            docblock: null,
            modifiers: [],
            params: [{ name: 'e', type: null }],
            returns: null,
          },
        ],
        displayName: 'Range',
        props: {
          value: {
            defaultValue: { value: '0', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: '',
          },
          label: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Display a label text that describe the field',
          },
          error: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Display an error message',
          },
          id: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'HTML identification',
          },
          onBlur: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onFocus: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Range\\Range.jsx'] = {
            name: 'Range',
            docgenInfo: Range_Range.__docgenInfo,
            path: 'components\\Range\\Range.jsx',
          });
      __webpack_exports__.a = components_Range_Range;
    },
    762: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39), __webpack_require__(47);
      var prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        Input = (__webpack_require__(1772), __webpack_require__(37));
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      var Datalist = styled_components_browser_cjs_default.a.datalist.withConfig(
          {
            displayName: 'AutoComplete__Datalist',
            componentId: 'sc-1vy8gb0-0',
          },
        )(
          [
            'position:relative;top:',
            ';left:-2px;select{margin-top:initial !important;margin-left:initial !important;}',
          ],
          function(props) {
            return props.error ? '-40px' : '-20px';
          },
        ),
        Wrapper = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'AutoComplete__Wrapper',
          componentId: 'sc-1vy8gb0-1',
        })(['position:relative;width:100%;']),
        AutoComplete = function(props) {
          var id = props.id,
            error = props.error,
            dataSource = props.dataSource,
            dataListId = ''.concat(id, '_datalist');
          return react_default.a.createElement(
            Wrapper,
            null,
            react_default.a.createElement(
              Input.a,
              _extends({}, props, { list: dataListId }),
            ),
            react_default.a.createElement(
              Datalist,
              { id: dataListId, error: error },
              dataSource.map(function(item) {
                return react_default.a.createElement('option', {
                  value: item,
                  key: ''.concat(item),
                });
              }),
            ),
          );
        };
      (AutoComplete.defaultProps = {
        value: '',
        label: '',
        error: '',
        maxLength: '',
        id: '',
        onBlur: function() {},
        onChange: function() {},
        onFocus: function() {},
        dataSource: [],
      }),
        (AutoComplete.propTypes = {
          value: prop_types_default.a.string,
          label: prop_types_default.a.string,
          error: prop_types_default.a.string,
          maxLength: prop_types_default.a.string,
          id: prop_types_default.a.string,
          onBlur: prop_types_default.a.func,
          onChange: prop_types_default.a.func,
          onFocus: prop_types_default.a.func,
          dataSource: prop_types_default.a.arrayOf(String),
        });
      var AutoComplete_AutoComplete = AutoComplete;
      (AutoComplete.__docgenInfo = {
        description: '',
        methods: [],
        displayName: 'AutoComplete',
        props: {
          value: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          label: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Display a label text that describe the field',
          },
          error: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description:
              'Display an error message and changes border color to error color',
          },
          maxLength: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Set a text mask that filter user input',
          },
          id: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'An html identification',
          },
          onBlur: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onFocus: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          dataSource: {
            defaultValue: { value: '[]', computed: !1 },
            type: { name: 'arrayOf', value: { name: 'custom', raw: 'String' } },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES[
            'components\\AutoComplete\\AutoComplete.jsx'
          ] = {
            name: 'AutoComplete',
            docgenInfo: AutoComplete.__docgenInfo,
            path: 'components\\AutoComplete\\AutoComplete.jsx',
          });
      __webpack_exports__.a = AutoComplete_AutoComplete;
    },
    763: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        deprecated = __webpack_require__(8),
        theme = __webpack_require__(25),
        FieldGroup = __webpack_require__(769),
        Label = __webpack_require__(768),
        ErrorMessage = __webpack_require__(1899);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      var Textfield = styled_components_browser_cjs_default.a.textarea.withConfig(
          { displayName: 'Textarea__Textfield', componentId: 'jsoe8i-0' },
        )(
          [
            'border:1px solid ',
            ';border-radius:',
            ';box-sizing:border-box;color:inherit;font-size:14px;font-family:inherit;height:100px;padding:10px;resize:none;width:100%;',
            ';&:focus{border-color:',
            ';}',
            ';',
          ],
          deprecated.a.SECONDARY[900],
          theme.a.sizes.radius,
          theme.a.mixins.transition(),
          deprecated.a.PRIMARY[500],
          function(props) {
            return (
              props.error &&
              '\n    border-color: '.concat(deprecated.a.DANGER[500], ';\n  ')
            );
          },
        ),
        Infos = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Textarea__Infos',
          componentId: 'jsoe8i-1',
        })(['display:flex;']),
        Countdown = styled_components_browser_cjs_default.a.span.withConfig({
          displayName: 'Textarea__Countdown',
          componentId: 'jsoe8i-2',
        })(['font-size:12px;margin-left:auto;margin-top:2px;']),
        Textarea_Textarea = (function(_React$Component) {
          function Textarea(props) {
            var _this, self, call;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Textarea),
              (self = this),
              (_this =
                !(call = _getPrototypeOf(Textarea).call(this, props)) ||
                ('object' !== _typeof(call) && 'function' != typeof call)
                  ? _assertThisInitialized(self)
                  : call),
              _initialiseProps.call(
                _assertThisInitialized(_assertThisInitialized(_this)),
              );
            var value = props.value,
              maxLength = props.maxLength;
            return (
              (_this.state = { value: value, charsLeft: maxLength }), _this
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Textarea, react_default.a.Component),
            (Constructor = Textarea),
            (protoProps = [
              {
                key: 'componentWillUpdate',
                value: function(nextProps) {
                  var value = this.state.value;
                  nextProps.value !== value &&
                    (this.state.value = nextProps.value);
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    error = _this$props.error,
                    id = _this$props.id,
                    label = _this$props.label,
                    maxLength = _this$props.maxLength,
                    rest = _objectWithoutProperties(_this$props, [
                      'error',
                      'id',
                      'label',
                      'maxLength',
                    ]),
                    _this$state = this.state,
                    value = _this$state.value,
                    charsLeft = _this$state.charsLeft;
                  return react_default.a.createElement(
                    FieldGroup.a,
                    null,
                    label &&
                      react_default.a.createElement(
                        Label.a,
                        { htmlFor: id },
                        ' ',
                        label,
                        ' ',
                      ),
                    react_default.a.createElement(
                      Textfield,
                      _extends({}, rest, {
                        error: error,
                        id: id,
                        maxLength: maxLength,
                        onChange: this.onChange,
                        value: value,
                      }),
                    ),
                    react_default.a.createElement(
                      Infos,
                      null,
                      error &&
                        react_default.a.createElement(
                          ErrorMessage.a,
                          null,
                          error,
                        ),
                      maxLength &&
                        react_default.a.createElement(
                          Countdown,
                          null,
                          charsLeft,
                        ),
                    ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Textarea
          );
          var Constructor, protoProps, staticProps;
        })(),
        _initialiseProps = function() {
          var _this2 = this;
          this.onChange = function(e) {
            var _this2$props = _this2.props,
              onChange = _this2$props.onChange,
              maxLength = _this2$props.maxLength,
              value = e.target.value;
            _this2.setState({
              value: value,
              charsLeft: maxLength - e.target.value.length,
            }),
              onChange(e, { value: value });
          };
        };
      (Textarea_Textarea.defaultProps = {
        value: '',
        label: '',
        placeholder: '',
        error: '',
        id: '',
        name: '',
        maxLength: 300,
        onBlur: function() {},
        onFocus: function() {},
        onChange: function() {},
      }),
        (Textarea_Textarea.propTypes = {
          value: prop_types_default.a.string,
          label: prop_types_default.a.string,
          placeholder: prop_types_default.a.string,
          error: prop_types_default.a.string,
          id: prop_types_default.a.string,
          name: prop_types_default.a.string,
          maxLength: prop_types_default.a.number,
          onBlur: prop_types_default.a.func,
          onFocus: prop_types_default.a.func,
          onChange: prop_types_default.a.func,
        });
      var components_Textarea_Textarea = Textarea_Textarea;
      (Textarea_Textarea.__docgenInfo = {
        description:
          'Renders a textarea with an optional prop that shows characters remaining countdown',
        methods: [
          {
            name: 'onChange',
            docblock: null,
            modifiers: [],
            params: [{ name: 'e', type: null }],
            returns: null,
          },
        ],
        displayName: 'Textarea',
        props: {
          value: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          label: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Textarea label that will be displayed on browser',
          },
          placeholder: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Placeholder to show a text inside textarea',
          },
          error: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Error message',
          },
          id: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Id to associate with label',
          },
          name: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'Textarea name',
          },
          maxLength: {
            defaultValue: { value: '300', computed: !1 },
            type: { name: 'number' },
            required: !1,
            description: 'Textarea max-length',
          },
          onBlur: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: 'Blur event handle function',
          },
          onFocus: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: 'Focus event handle function',
          },
          onChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: 'Change event handle function',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Textarea\\Textarea.jsx'] = {
            name: 'Textarea',
            docgenInfo: Textarea_Textarea.__docgenInfo,
            path: 'components\\Textarea\\Textarea.jsx',
          });
      __webpack_exports__.a = components_Textarea_Textarea;
    },
    764: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(47),
        __webpack_require__(53),
        __webpack_require__(75);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        Container = __webpack_require__(242),
        Row = __webpack_require__(44),
        Col = __webpack_require__(12),
        deprecated = __webpack_require__(8),
        Input = __webpack_require__(37),
        prop_types = (__webpack_require__(59), __webpack_require__(1)),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        lib = __webpack_require__(455),
        Icon = __webpack_require__(36);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var IconName = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'IconToClipboard__IconName',
          componentId: 'sc-1t2a4kp-0',
        })([
          'display:block;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;',
        ]),
        IconWrapper = styled_components_browser_cjs_default()(Col.a).withConfig(
          {
            displayName: 'IconToClipboard__IconWrapper',
            componentId: 'sc-1t2a4kp-1',
          },
        )(
          [
            'font-size:12px;padding:10px;position:relative;text-align:center;cursor:pointer;&:hover{background-color:',
            ';color:',
            ';}',
          ],
          deprecated.a.PRIMARY[500],
          deprecated.a.WHITE,
        ),
        IconToClipboard_IconToClipboard = (function(_Component) {
          function IconToClipboard(props) {
            var _this;
            return (
              (function(instance, Constructor) {
                if (!(instance instanceof Constructor))
                  throw new TypeError('Cannot call a class as a function');
              })(this, IconToClipboard),
              ((_this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(IconToClipboard).call(this, props),
              )).showFeedback = function() {
                _this.setState({ hasJustCopied: !0 }),
                  setTimeout(function() {
                    _this.setState({ hasJustCopied: !1 });
                  }, 3e3);
              }),
              (_this.state = { hasJustCopied: !1 }),
              _this
            );
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(IconToClipboard, react['Component']),
            (Constructor = IconToClipboard),
            (protoProps = [
              {
                key: 'render',
                value: function() {
                  var hasJustCopied = this.state.hasJustCopied,
                    name = this.props.name;
                  return react_default.a.createElement(
                    lib.CopyToClipboard,
                    {
                      text: '<Icon name="'.concat(name, '" />'),
                      key: name,
                      onCopy: this.showFeedback,
                    },
                    react_default.a.createElement(
                      IconWrapper,
                      { tablet: 1, title: name },
                      react_default.a.createElement(Icon.a, { name: name }),
                      react_default.a.createElement(
                        IconName,
                        null,
                        hasJustCopied ? 'Copied!!' : name,
                      ),
                    ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            IconToClipboard
          );
          var Constructor, protoProps, staticProps;
        })();
      IconToClipboard_IconToClipboard.propTypes = {
        name: prop_types_default.a.string.isRequired,
      };
      var Icon_IconToClipboard = IconToClipboard_IconToClipboard;
      (IconToClipboard_IconToClipboard.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'showFeedback',
            docblock: null,
            modifiers: [],
            params: [],
            returns: null,
          },
        ],
        displayName: 'IconToClipboard',
        props: {
          name: { type: { name: 'string' }, required: !0, description: '' },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Icon\\IconToClipboard.jsx'] = {
            name: 'IconToClipboard',
            docgenInfo: IconToClipboard_IconToClipboard.__docgenInfo,
            path: 'stories\\Icon\\IconToClipboard.jsx',
          });
      var icons = __webpack_require__(237);
      function Catalogue_typeof(obj) {
        return (Catalogue_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function Catalogue_defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function Catalogue_possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== Catalogue_typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function Catalogue_getPrototypeOf(o) {
        return (Catalogue_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function Catalogue_setPrototypeOf(o, p) {
        return (Catalogue_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      var Catalogue_Catalogue = (function(_Component) {
        function Catalogue(props) {
          var _this;
          return (
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Catalogue),
            ((_this = Catalogue_possibleConstructorReturn(
              this,
              Catalogue_getPrototypeOf(Catalogue).call(this, props),
            )).filterIcons = function(e, _ref) {
              var value = _ref.value,
                icons = _this.state.icons,
                filtered = value
                  ? icons.filter(function(name) {
                      return 0 <= name.indexOf(value);
                    })
                  : icons;
              _this.setState({ filtered: filtered });
            }),
            (_this.state = { icons: icons.a, filtered: icons.a }),
            _this
          );
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && Catalogue_setPrototypeOf(subClass, superClass);
          })(Catalogue, react['Component']),
          (Constructor = Catalogue),
          (protoProps = [
            {
              key: 'render',
              value: function() {
                var filtered = this.state.filtered;
                return react_default.a.createElement(
                  react_default.a.Fragment,
                  null,
                  react_default.a.createElement(
                    Container.a,
                    { fluid: !0 },
                    react_default.a.createElement(
                      Row.a,
                      null,
                      react_default.a.createElement(
                        Col.a,
                        { tablet: 12 },
                        react_default.a.createElement(
                          'p',
                          null,
                          'We are using',
                          ' ',
                          react_default.a.createElement(
                            'a',
                            {
                              href:
                                'https://material.io/tools/icons/?style=baseline',
                              target: '_blank',
                              rel: 'noopener noreferrer',
                            },
                            'Material Design icons',
                          ),
                          ' ',
                          'as default library.',
                        ),
                      ),
                    ),
                    react_default.a.createElement(
                      Row.a,
                      { style: { marginTop: '-40px' } },
                      react_default.a.createElement(
                        Col.a,
                        { tablet: 10 },
                        react_default.a.createElement(
                          'h3',
                          { style: { marginTop: '50px' } },
                          'Available Icons',
                          ' ',
                          react_default.a.createElement(
                            'small',
                            { style: { color: deprecated.a.SECONDARY[100] } },
                            'click to copy',
                          ),
                        ),
                      ),
                      react_default.a.createElement(
                        Col.a,
                        { tablet: 2 },
                        react_default.a.createElement(Input.a, {
                          label: 'Search',
                          onChange: this.filterIcons,
                        }),
                      ),
                    ),
                  ),
                  react_default.a.createElement(
                    Container.a,
                    { fluid: !0 },
                    react_default.a.createElement(
                      Row.a,
                      null,
                      filtered.map(function(name) {
                        return react_default.a.createElement(
                          Icon_IconToClipboard,
                          { name: name, key: name },
                        );
                      }),
                    ),
                  ),
                );
              },
            },
          ]) && Catalogue_defineProperties(Constructor.prototype, protoProps),
          staticProps && Catalogue_defineProperties(Constructor, staticProps),
          Catalogue
        );
        var Constructor, protoProps, staticProps;
      })();
      __webpack_exports__.a = Catalogue_Catalogue;
      (Catalogue_Catalogue.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'filterIcons',
            docblock: null,
            modifiers: [],
            params: [
              { name: 'e', type: null },
              { name: '{ value }', type: null },
            ],
            returns: null,
          },
        ],
        displayName: 'Catalogue',
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['stories\\Icon\\Catalogue.jsx'] = {
            name: 'Catalogue',
            docgenInfo: Catalogue_Catalogue.__docgenInfo,
            path: 'stories\\Icon\\Catalogue.jsx',
          });
    },
    765: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        Label = __webpack_require__(768),
        FieldGroup = __webpack_require__(769),
        deprecated = __webpack_require__(8),
        theme = __webpack_require__(25);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      var Checkbox = styled_components_browser_cjs_default.a.input.withConfig({
          displayName: 'Toggle__Checkbox',
          componentId: 'sc-17b9usn-0',
        })(['display:none;']),
        StyledLabel = styled_components_browser_cjs_default()(
          Label.a,
        ).withConfig({
          displayName: 'Toggle__StyledLabel',
          componentId: 'sc-17b9usn-1',
        })(
          [
            '',
            ' display:inline-block;padding-right:54px;position:relative;&:before,&:after{',
            ';}&:before{background:',
            ";border-radius:10px;content:'';height:16px;position:absolute;right:0;transform:translateY(-50%);top:50%;width:42px;}&:after{transform:",
            ';border:1px solid ',
            ";border-radius:50%;box-sizing:border-box;content:'';height:24px;position:absolute;right:20px;top:50%;width:24px;background-color:",
            ';}&:hover:after{background-color:',
            ';border:1px solid transparent;}',
          ],
          function(_ref) {
            var disabled = _ref.disabled;
            return '\n    cursor: '.concat(
              disabled ? 'not-allowed' : 'pointer',
              ';\n  ',
            );
          },
          theme.a.mixins.transition(),
          function(_ref2) {
            return _ref2.checked
              ? deprecated.a.PRIMARY[100]
              : deprecated.a.SECONDARY[200];
          },
          function(_ref3) {
            return _ref3.checked
              ? 'translateX(20px) translateY(-50%)'
              : 'translateY(-50%)';
          },
          function(_ref4) {
            return _ref4.checked ? 'transparent' : deprecated.a.SECONDARY[300];
          },
          function(_ref5) {
            var checked = _ref5.checked;
            return _ref5.disabled
              ? deprecated.a.SECONDARY[300]
              : checked
              ? deprecated.a.PRIMARY[500]
              : deprecated.a.WHITE;
          },
          function(_ref6) {
            return !_ref6.disabled && deprecated.a.PRIMARY[500];
          },
        ),
        Toggle_Toggle = (function(_React$Component) {
          function Toggle(props) {
            var _this, self, call;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Toggle),
              (self = this),
              (_this =
                !(call = _getPrototypeOf(Toggle).call(this, props)) ||
                ('object' !== _typeof(call) && 'function' != typeof call)
                  ? _assertThisInitialized(self)
                  : call),
              _initialiseProps.call(
                _assertThisInitialized(_assertThisInitialized(_this)),
              );
            var checked = props.checked;
            return (_this.state = { checked: checked }), _this;
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Toggle, react_default.a.Component),
            (Constructor = Toggle),
            (protoProps = [
              {
                key: 'componentWillUpdate',
                value: function(_ref7) {
                  var checked = _ref7.checked;
                  checked !== this.state.checked &&
                    (this.state.checked = checked);
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    id = _this$props.id,
                    label = _this$props.label,
                    disabled = _this$props.disabled,
                    rest = _objectWithoutProperties(_this$props, [
                      'id',
                      'label',
                      'disabled',
                    ]),
                    checked = this.state.checked;
                  return react_default.a.createElement(
                    FieldGroup.a,
                    null,
                    react_default.a.createElement(
                      StyledLabel,
                      { checked: checked, disabled: disabled },
                      react_default.a.createElement(
                        Checkbox,
                        _extends({}, rest, {
                          disabled: disabled,
                          checked: checked,
                          id: id,
                          type: 'checkbox',
                          onChange: this.onChange,
                        }),
                      ),
                      label,
                    ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Toggle
          );
          var Constructor, protoProps, staticProps;
        })(),
        _initialiseProps = function() {
          var _this2 = this;
          this.onChange = function(e) {
            var _this2$props = _this2.props,
              onChange = _this2$props.onChange;
            if (!_this2$props.disabled) {
              var checked = _this2.state.checked;
              _this2.setState({ checked: !checked }),
                onChange(e, { checked: !checked });
            }
          };
        };
      (Toggle_Toggle.defaultProps = {
        label: '',
        id: '',
        checked: !1,
        disabled: !1,
        onBlur: function() {},
        onChange: function() {},
        onFocus: function() {},
      }),
        (Toggle_Toggle.propTypes = {
          label: prop_types_default.a.string,
          id: prop_types_default.a.string,
          checked: prop_types_default.a.bool,
          disabled: prop_types_default.a.bool,
          onBlur: prop_types_default.a.func,
          onChange: prop_types_default.a.func,
          onFocus: prop_types_default.a.func,
        });
      var components_Toggle_Toggle = Toggle_Toggle;
      (Toggle_Toggle.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'onChange',
            docblock: null,
            modifiers: [],
            params: [{ name: 'e', type: null }],
            returns: null,
          },
        ],
        displayName: 'Toggle',
        props: {
          label: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          id: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          checked: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          disabled: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          onBlur: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
          onFocus: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Toggle\\Toggle.jsx'] = {
            name: 'Toggle',
            docgenInfo: Toggle_Toggle.__docgenInfo,
            path: 'components\\Toggle\\Toggle.jsx',
          });
      __webpack_exports__.a = components_Toggle_Toggle;
    },
    766: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40),
        __webpack_require__(47),
        __webpack_require__(59);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        downshift_cjs = __webpack_require__(746),
        downshift_cjs_default = __webpack_require__.n(downshift_cjs),
        Icon = __webpack_require__(208),
        List = __webpack_require__(238),
        deprecated = __webpack_require__(8),
        theme = __webpack_require__(25),
        FieldGroup = __webpack_require__(769),
        Label = __webpack_require__(768),
        ErrorMessage = __webpack_require__(1899);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _possibleConstructorReturn(self, call) {
        return !call ||
          ('object' !== _typeof(call) && 'function' != typeof call)
          ? (function(self) {
              if (void 0 === self)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return self;
            })(self)
          : call;
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      var DropdownButton = styled_components_browser_cjs_default.a.button.withConfig(
          { displayName: 'Dropdown__DropdownButton', componentId: 'xoew8d-0' },
        )(
          [
            '',
            ';display:flex;justify-content:space-between;align-items:center;width:100%;padding:10px 16px;font-size:16px;font-weight:bold;background-color:',
            ';border:solid 1px ',
            ';',
            ' border-radius:',
            ';cursor:pointer;',
            ' &:focus{outline:0;}& ~ ul{background-color:',
            ';border-width:1px;border-style:solid;border-color:',
            ';border-top:none;}',
          ],
          theme.a.mixins.transition(),
          deprecated.a.WHITE,
          deprecated.a.SECONDARY[300],
          function(_ref) {
            return (
              _ref.isOpen &&
              '\n    border-top-color: '
                .concat(
                  deprecated.a.PRIMARY[500],
                  ';\n    border-right-color: ',
                )
                .concat(deprecated.a.PRIMARY[500], ';\n    border-left-color: ')
                .concat(deprecated.a.PRIMARY[500], ';\n  ')
            );
          },
          theme.a.sizes.radius,
          function(props) {
            return (
              props.error &&
              '\n    border-color: '.concat(deprecated.a.DANGER[400], ';\n  ')
            );
          },
          deprecated.a.WHITE,
          deprecated.a.PRIMARY[500],
        ),
        ArrowDown = styled_components_browser_cjs_default()(Icon.a).withConfig({
          displayName: 'Dropdown__ArrowDown',
          componentId: 'xoew8d-1',
        })(['font-size:1.5em;pointer-events:none;']),
        DropDownItem = styled_components_browser_cjs_default.a.div.withConfig({
          displayName: 'Dropdown__DropDownItem',
          componentId: 'xoew8d-2',
        })(
          [
            'cursor:pointer;border-bottom:1px solid ',
            ';&:last-child{border:none;}&:hover{background-color:',
            ';font-weight:bold;color:',
            ';}',
            ';',
          ],
          deprecated.a.SECONDARY[50],
          deprecated.a.PRIMARY[500],
          deprecated.a.WHITE,
          function(_ref2) {
            return (
              _ref2.isSelected &&
              '\n    color: '.concat(deprecated.a.PRIMARY[500], ';\n  ')
            );
          },
        );
      function _itemToString() {
        var item =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : '';
        if ('string' == typeof item) return item;
        var content = item.content;
        return 'string' == typeof content ? content : content.header;
      }
      var Select = function(_ref3) {
          var items = _ref3.items,
            selectedItem = _ref3.selectedItem,
            onChange = _ref3.onChange,
            name = _ref3.name,
            placeholder = _ref3.placeholder,
            rest = _objectWithoutProperties(_ref3, [
              'items',
              'selectedItem',
              'onChange',
              'name',
              'placeholder',
            ]);
          return react_default.a.createElement(
            downshift_cjs_default.a,
            _extends({}, rest, {
              selectedItem: selectedItem,
              onChange: onChange,
              itemToString: function(_ref4) {
                return _itemToString(_ref4.item);
              },
            }),
            function(_ref5) {
              var isOpen = _ref5.isOpen,
                getToggleButtonProps = _ref5.getToggleButtonProps,
                getItemProps = _ref5.getItemProps,
                dsSelectedItem = _ref5.selectedItem;
              return react_default.a.createElement(
                'div',
                null,
                react_default.a.createElement(
                  DropdownButton,
                  _extends({}, getToggleButtonProps(), {
                    name: name,
                    isOpen: isOpen,
                  }),
                  _itemToString(dsSelectedItem.item) || placeholder,
                  react_default.a.createElement(ArrowDown, {
                    name: isOpen ? 'arrow_drop_up' : 'arrow_drop_down',
                    skin: deprecated.a.SECONDARY[300],
                  }),
                ),
                isOpen &&
                  react_default.a.createElement(
                    List.a,
                    null,
                    items.map(function(item) {
                      return react_default.a.createElement(
                        DropDownItem,
                        _extends(
                          {},
                          getItemProps({
                            item: item,
                            isSelected: dsSelectedItem === item,
                          }),
                          { key: _itemToString(item.item) },
                        ),
                        react_default.a.createElement(List.a.Item, {
                          key: item.value,
                          icon: item.item.icon,
                          content: item.item.content || item.item,
                        }),
                      );
                    }),
                  ),
              );
            },
          );
        },
        ListItemPropType = prop_types_default.a.oneOfType([
          prop_types_default.a.string,
          prop_types_default.a.shape({
            icon: prop_types_default.a.oneOfType([
              prop_types_default.a.string,
              prop_types_default.a.instanceOf(Object),
            ]),
            content: prop_types_default.a.oneOfType([
              prop_types_default.a.string,
              prop_types_default.a.shape({
                header: prop_types_default.a.string,
                subheader: prop_types_default.a.string,
              }),
            ]),
          }),
        ]),
        stringOrNumber = prop_types_default.a.oneOfType([
          prop_types_default.a.string,
          prop_types_default.a.number,
        ]),
        itemPropType = prop_types_default.a.shape({
          value: stringOrNumber,
          item: ListItemPropType,
        });
      (Select.propTypes = {
        items: prop_types_default.a.arrayOf(itemPropType),
        selectedItem: itemPropType,
        onChange: prop_types_default.a.func,
        name: prop_types_default.a.string,
        placeholder: prop_types_default.a.string,
      }),
        (Select.defaultProps = {
          items: [],
          selectedItem: {},
          onChange: prop_types_default.a.func,
          name: prop_types_default.a.string,
          placeholder: prop_types_default.a.string,
        });
      var Dropdown_Dropdown = (function(_React$Component) {
        function Dropdown(props) {
          var _this;
          (function(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, Dropdown),
            ((_this = _possibleConstructorReturn(
              this,
              _getPrototypeOf(Dropdown).call(this, props),
            ))._onChange = function(item) {
              var onChange = _this.props.onChange;
              _this.setState({ selectedItem: item }),
                onChange(null, { selectedItem: item });
            });
          var _props$selectedItem = props.selectedItem,
            selectedItem =
              void 0 === _props$selectedItem ? null : _props$selectedItem;
          return (_this.state = { selectedItem: selectedItem }), _this;
        }
        return (
          (function(subClass, superClass) {
            if ('function' != typeof superClass && null !== superClass)
              throw new TypeError(
                'Super expression must either be null or a function',
              );
            (subClass.prototype = Object.create(
              superClass && superClass.prototype,
              {
                constructor: {
                  value: subClass,
                  writable: !0,
                  configurable: !0,
                },
              },
            )),
              superClass && _setPrototypeOf(subClass, superClass);
          })(Dropdown, react_default.a.Component),
          (Constructor = Dropdown),
          (protoProps = [
            {
              key: 'componentWillUpdate',
              value: function(nextProps) {
                var selectedItem = this.state.selectedItem;
                nextProps.selectedItem !== selectedItem &&
                  (this.state.selectedItem = nextProps.selectedItem);
              },
            },
            {
              key: 'render',
              value: function() {
                var _this$props = this.props,
                  items = _this$props.items,
                  label = _this$props.label,
                  id = _this$props.id,
                  error = _this$props.error,
                  placeholder = _this$props.placeholder,
                  name = _this$props.name,
                  rest = _objectWithoutProperties(_this$props, [
                    'items',
                    'label',
                    'id',
                    'error',
                    'placeholder',
                    'name',
                  ]),
                  selectedItem = this.state.selectedItem;
                return react_default.a.createElement(
                  FieldGroup.a,
                  null,
                  label &&
                    react_default.a.createElement(
                      Label.a,
                      { htmlFor: id },
                      ' ',
                      label,
                      ' ',
                    ),
                  react_default.a.createElement(
                    Select,
                    _extends({}, rest, {
                      items: items,
                      onChange: this._onChange,
                      selectedItem: selectedItem,
                      placeholder: placeholder,
                      name: name,
                      id: id,
                    }),
                  ),
                  error &&
                    react_default.a.createElement(ErrorMessage.a, null, error),
                );
              },
            },
          ]) && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Dropdown
        );
        var Constructor, protoProps, staticProps;
      })();
      (Dropdown_Dropdown.defaultProps = {
        placeholder: 'Selecione',
        label: '',
        error: '',
        name: 'Dropdown',
        id: 'dropdown',
        items: [],
        selectedItem: {},
        onChange: function() {},
      }),
        (Dropdown_Dropdown.propTypes = {
          placeholder: prop_types_default.a.string,
          label: prop_types_default.a.string,
          error: prop_types_default.a.string,
          name: prop_types_default.a.string,
          id: prop_types_default.a.string,
          items: prop_types_default.a.arrayOf(itemPropType),
          selectedItem: itemPropType,
          onChange: prop_types_default.a.func,
        });
      var components_Dropdown_Dropdown = Dropdown_Dropdown;
      (Dropdown_Dropdown.__docgenInfo = {
        description: '',
        methods: [
          {
            name: '_onChange',
            docblock: null,
            modifiers: [],
            params: [{ name: 'item', type: null }],
            returns: null,
          },
        ],
        displayName: 'Dropdown',
        props: {
          placeholder: {
            defaultValue: { value: "'Selecione'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          label: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          error: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          name: {
            defaultValue: { value: "'Dropdown'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          id: {
            defaultValue: { value: "'dropdown'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          items: {
            defaultValue: { value: '[]', computed: !1 },
            type: {
              name: 'arrayOf',
              value: { name: 'custom', raw: 'itemPropType' },
            },
            required: !1,
            description: '',
          },
          selectedItem: {
            defaultValue: { value: '{}', computed: !1 },
            type: { name: 'custom', raw: 'itemPropType' },
            required: !1,
            description: '',
          },
          onChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Dropdown\\Dropdown.jsx'] = {
            name: 'Dropdown',
            docgenInfo: Dropdown_Dropdown.__docgenInfo,
            path: 'components\\Dropdown\\Dropdown.jsx',
          });
      __webpack_exports__.a = components_Dropdown_Dropdown;
    },
    767: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(39),
        __webpack_require__(53),
        __webpack_require__(21),
        __webpack_require__(22),
        __webpack_require__(26),
        __webpack_require__(14),
        __webpack_require__(38),
        __webpack_require__(40);
      var react = __webpack_require__(0),
        react_default = __webpack_require__.n(react),
        prop_types = __webpack_require__(1),
        prop_types_default = __webpack_require__.n(prop_types),
        styled_components_browser_cjs = __webpack_require__(4),
        styled_components_browser_cjs_default = __webpack_require__.n(
          styled_components_browser_cjs,
        ),
        theme = __webpack_require__(25),
        Label = __webpack_require__(768),
        FieldGroup = __webpack_require__(769),
        deprecated = __webpack_require__(8);
      function _typeof(obj) {
        return (_typeof =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function(obj) {
                return typeof obj;
              }
            : function(obj) {
                return obj &&
                  'function' == typeof Symbol &&
                  obj.constructor === Symbol &&
                  obj !== Symbol.prototype
                  ? 'symbol'
                  : typeof obj;
              })(obj);
      }
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (var source, i = 1; i < arguments.length; i++)
              for (var key in (source = arguments[i]))
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key]);
            return target;
          }).apply(this, arguments);
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {};
        var key,
          i,
          target = (function(source, excluded) {
            if (null == source) return {};
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source);
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                0 <= excluded.indexOf(key) || (target[key] = source[key]);
            return target;
          })(source, excluded);
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              !(0 <= excluded.indexOf(key)) &&
                Object.prototype.propertyIsEnumerable.call(source, key) &&
                (target[key] = source[key]);
        }
        return target;
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      function _getPrototypeOf(o) {
        return (_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            })(o);
      }
      function _setPrototypeOf(o, p) {
        return (_setPrototypeOf =
          Object.setPrototypeOf ||
          function(o, p) {
            return (o.__proto__ = p), o;
          })(o, p);
      }
      function _assertThisInitialized(self) {
        if (void 0 === self)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return self;
      }
      var StyledLabel = styled_components_browser_cjs_default()(
          Label.a,
        ).withConfig({
          displayName: 'Checkbox__StyledLabel',
          componentId: 'sc-1ca5whm-0',
        })(
          [
            '',
            ';cursor:inherit;display:initial;position:relative;margin-bottom:0;padding-left:24px;',
            ' ',
            ' ',
            ' &:before{',
            ';',
            ";position:absolute;border-radius:4px;content:' ';display:inline-block;left:-8px;top:-4px;height:24px;width:24px;}&:hover:before{",
            '}',
          ],
          theme.a.mixins.transition(),
          function(_ref2) {
            return (
              _ref2.disabled &&
              '\n    color: '.concat(deprecated.a.SECONDARY[300], ';\n  ')
            );
          },
          function(_ref3) {
            var checked = _ref3.checked,
              disabled = _ref3.disabled;
            return (
              checked &&
              "\n    &:after {\n      content: ' ';\n      display: inline-block;\n      width: 7px;\n      position: absolute;\n      height: 14px;\n      top: -2px;\n      left: 0;\n\n      border: solid ".concat(
                disabled ? deprecated.a.SECONDARY[300] : deprecated.a.WHITE,
                ';\n      border-radius: 3px;\n      border-width: 0 4px 4px 0;\n\n      transform: rotate(45deg);\n    }\n  ',
              )
            );
          },
          function(_ref4) {
            var disabled = _ref4.disabled;
            return '\n    cursor: '.concat(
              disabled ? 'not-allowed' : 'pointer',
              ';\n  ',
            );
          },
          theme.a.mixins.transition(),
          function(props) {
            return (
              (disabled = (_ref = props).disabled),
              (checked = _ref.checked),
              (bgColor = checked
                ? deprecated.a.PRIMARY[500]
                : deprecated.a.WHITE),
              (borderColor = checked
                ? deprecated.a.PRIMARY[500]
                : deprecated.a.SECONDARY[300]),
              disabled &&
                ((borderColor = deprecated.a.SECONDARY[100]),
                (bgColor = deprecated.a.WHITE)),
              '\n    background-color: '
                .concat(bgColor, ';\n    border: 1px solid ')
                .concat(borderColor, ';\n  ')
            );
            var _ref, disabled, checked, bgColor, borderColor;
          },
          function(_ref5) {
            return (
              !_ref5.disabled &&
              '\n      border: 1px solid '.concat(
                deprecated.a.PRIMARY[500],
                ';\n    ',
              )
            );
          },
        ),
        StyledFieldGroup = styled_components_browser_cjs_default()(
          FieldGroup.a,
        ).withConfig({
          displayName: 'Checkbox__StyledFieldGroup',
          componentId: 'sc-1ca5whm-1',
        })(['height:24px;display:flex;flex-direction:row;align-items:center;']),
        StyledCheckbox = styled_components_browser_cjs_default.a.input.withConfig(
          {
            displayName: 'Checkbox__StyledCheckbox',
            componentId: 'sc-1ca5whm-2',
          },
        )(['display:none;']),
        Checkbox_Checkbox = (function(_React$Component) {
          function Checkbox(props) {
            var _this, self, call;
            (function(instance, Constructor) {
              if (!(instance instanceof Constructor))
                throw new TypeError('Cannot call a class as a function');
            })(this, Checkbox),
              (self = this),
              (_this =
                !(call = _getPrototypeOf(Checkbox).call(this, props)) ||
                ('object' !== _typeof(call) && 'function' != typeof call)
                  ? _assertThisInitialized(self)
                  : call),
              _initialiseProps.call(
                _assertThisInitialized(_assertThisInitialized(_this)),
              );
            var checked = props.checked;
            return (_this.state = { checked: checked }), _this;
          }
          return (
            (function(subClass, superClass) {
              if ('function' != typeof superClass && null !== superClass)
                throw new TypeError(
                  'Super expression must either be null or a function',
                );
              (subClass.prototype = Object.create(
                superClass && superClass.prototype,
                {
                  constructor: {
                    value: subClass,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )),
                superClass && _setPrototypeOf(subClass, superClass);
            })(Checkbox, react_default.a.Component),
            (Constructor = Checkbox),
            (protoProps = [
              {
                key: 'componentWillUpdate',
                value: function(nextProps) {
                  var checked = this.state.checked;
                  nextProps.checked !== checked &&
                    (this.state.checked = nextProps.checked);
                },
              },
              {
                key: 'render',
                value: function() {
                  var _this$props = this.props,
                    label = _this$props.label,
                    disabled = _this$props.disabled,
                    rest = _objectWithoutProperties(_this$props, [
                      'label',
                      'disabled',
                    ]),
                    checked = this.state.checked;
                  return react_default.a.createElement(
                    StyledFieldGroup,
                    null,
                    react_default.a.createElement(
                      StyledLabel,
                      { checked: checked, disabled: disabled },
                      react_default.a.createElement(
                        StyledCheckbox,
                        _extends({}, rest, {
                          disabled: disabled,
                          type: 'checkbox',
                          checked: checked,
                          onChange: this.onChange,
                        }),
                      ),
                      label,
                    ),
                  );
                },
              },
            ]) && _defineProperties(Constructor.prototype, protoProps),
            staticProps && _defineProperties(Constructor, staticProps),
            Checkbox
          );
          var Constructor, protoProps, staticProps;
        })(),
        _initialiseProps = function() {
          var _this2 = this;
          this.onChange = function(e) {
            var _this2$props = _this2.props,
              onChange = _this2$props.onChange;
            if (!_this2$props.disabled) {
              var checked = _this2.state.checked;
              _this2.setState({ checked: !checked }),
                onChange(e, { checked: !checked });
            }
          };
        };
      (Checkbox_Checkbox.defaultProps = {
        label: 'Label',
        id: '',
        checked: !1,
        disabled: !1,
        onChange: function() {},
      }),
        (Checkbox_Checkbox.propTypes = {
          label: prop_types_default.a.string,
          id: prop_types_default.a.string,
          checked: prop_types_default.a.bool,
          disabled: prop_types_default.a.bool,
          onChange: prop_types_default.a.func,
        });
      var components_Checkbox_Checkbox = Checkbox_Checkbox;
      (Checkbox_Checkbox.__docgenInfo = {
        description: '',
        methods: [
          {
            name: 'onChange',
            docblock: null,
            modifiers: [],
            params: [{ name: 'e', type: null }],
            returns: null,
          },
        ],
        displayName: 'Checkbox',
        props: {
          label: {
            defaultValue: { value: "'Label'", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: 'An html identification',
          },
          id: {
            defaultValue: { value: "''", computed: !1 },
            type: { name: 'string' },
            required: !1,
            description: '',
          },
          checked: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          disabled: {
            defaultValue: { value: 'false', computed: !1 },
            type: { name: 'bool' },
            required: !1,
            description: '',
          },
          onChange: {
            defaultValue: { value: '() => {}', computed: !1 },
            type: { name: 'func' },
            required: !1,
            description: '',
          },
        },
      }),
        'undefined' != typeof STORYBOOK_REACT_CLASSES &&
          (STORYBOOK_REACT_CLASSES['components\\Checkbox\\Checkbox.jsx'] = {
            name: 'Checkbox',
            docgenInfo: Checkbox_Checkbox.__docgenInfo,
            path: 'components\\Checkbox\\Checkbox.jsx',
          });
      __webpack_exports__.a = components_Checkbox_Checkbox;
    },
    768: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__,
        );
      __webpack_exports__.a = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig(
        { displayName: 'Label', componentId: 'sc-1ny5bqy-0' },
      )(['display:block;margin-bottom:5px;font-size:14px;user-select:none;']);
    },
    769: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          4,
        ),
        styled_components__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_0__,
        ),
        _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
      __webpack_exports__.a = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig(
        { displayName: 'FieldGroup', componentId: 'sc-18uoi37-0' },
      )(
        ['position:relative;margin-bottom:', ';min-width:250px;width:100%;'],
        _theme__WEBPACK_IMPORTED_MODULE_1__.a.sizes.spacing,
      );
    },
    771: function(module, exports, __webpack_require__) {
      __webpack_require__(772),
        __webpack_require__(847),
        (module.exports = __webpack_require__(848));
    },
    8: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_exports__.a = {
        BRAND1: {
          50: '#E0EBF4',
          100: '#B3CEE3',
          200: '#80ADD1',
          300: '#4D8CBE',
          400: '#2674B0',
          500: '#005BA2',
          600: '#00539A',
          700: '#004990',
          800: '#004086',
          900: '#002f75',
        },
        BRAND2: {
          50: '#E1E6EA',
          100: '#B3C0CB',
          200: '#8096A9',
          300: '#4D6B86',
          400: '#274C6C',
          500: '#012C52',
          600: '#01274B',
          700: '#012141',
          800: '#011B38',
          900: '#001028',
        },
        PRIMARY: {
          50: '#e1f5fe',
          100: '#b3e5fc',
          200: '#81d4fa',
          300: '#4fc3f7',
          400: '#29b6f6',
          500: '#03a9f4',
          600: '#03a2f3',
          700: '#0298f1',
          800: '#028fef',
          900: '#017eec',
        },
        SECONDARY: {
          50: '#eceff1',
          100: '#d1d8dc',
          200: '#b2bec5',
          300: '#93a3ad',
          400: '#7b909c',
          500: '#647c8a',
          600: '#5c7482',
          700: '#526977',
          800: '#485f6d',
          900: '#364c5a',
        },
        SUCCESS: {
          50: '#f0fae4',
          100: '#d8f2bc',
          200: '#bfe990',
          300: '#a5e064',
          400: '#91da42',
          500: '#7ed321',
          600: '#76ce1d',
          700: '#6bc818',
          800: '#61c214',
          900: '#4eb70b',
        },
        ACTION: {
          50: '#fdf2e0',
          100: '#fbdeb3',
          200: '#f8c880',
          300: '#f5b24d',
          400: '#f2a226',
          500: '#f09100',
          600: '#ee8900',
          700: '#ec7e00',
          800: '#e97400',
          900: '#e56200',
        },
        WARNING: {
          50: '#fef8e2',
          100: '#fcecb6',
          200: '#fae085',
          300: '#f7d454',
          400: '#f6ca30',
          500: '#f4c10b',
          600: '#f3bb0a',
          700: '#f1b308',
          800: '#efab06',
          900: '#ec9e03',
        },
        DANGER: {
          50: '#fee7eb',
          100: '#fcc3ce',
          200: '#fa9bad',
          300: '#f7728c',
          400: '#f65474',
          500: '#f4365b',
          600: '#f33053',
          700: '#f12949',
          800: '#ef2240',
          900: '#ec162f',
        },
        INFO: {
          50: '#e0fbfd',
          100: '#b3f5fb',
          200: '#80eff9',
          300: '#4de9f6',
          400: '#26e4f4',
          500: '#00dff2',
          600: '#00dbf0',
          700: '#00d7ee',
          800: '#00d2ec',
          900: '#00cae8',
        },
        P2P: {
          50: '#f8e0fd',
          100: '#eeb3fb',
          200: '#e380f8',
          300: '#d74df5',
          400: '#cf26f3',
          500: '#c600f1',
          600: '#c000ef',
          700: '#b900ed',
          800: '#b100eb',
          900: '#a400e7',
        },
        BLACK: '#000000',
        WHITE: '#FFFFFF',
        FACEBOOK: '#3c5193',
        GOOGLE: '#4285f4',
      };
    },
    848: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__(21),
            __webpack_require__(72),
            __webpack_require__(850);
          var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0),
            react__WEBPACK_IMPORTED_MODULE_3___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_3__,
            ),
            _storybook_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              11,
            ),
            _storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              742,
            ),
            _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              3,
            ),
            _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
              1900,
            ),
            _stories__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(758);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(
            Object(
              _storybook_addon_options__WEBPACK_IMPORTED_MODULE_5__.withOptions,
            )({
              name: 'Quantum',
              showAddonPanel: !1,
              addonPanelInRight: !1,
              url: 'https://github.com/catho/quantum/',
            }),
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(
              function(storyFn) {
                return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment,
                  null,
                  react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(
                    _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_7__.a,
                    null,
                  ),
                  storyFn(),
                );
              },
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.addDecorator)(
              _catho_private_quantum_storybook_ui__WEBPACK_IMPORTED_MODULE_6__.Frame,
            );
          var reqStories = __webpack_require__(1705);
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_4__.configure)(
            function() {
              _stories__WEBPACK_IMPORTED_MODULE_8__.a.forEach(function(
                filename,
              ) {
                return reqStories(filename);
              });
            },
            module,
          );
        }.call(this, __webpack_require__(32)(module));
    },
    96: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(501);
      __webpack_exports__.a = {
        cep: [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/],
        cnpj: [
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          '/',
          /\d/,
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
        ],
        cpf: [
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          '.',
          /\d/,
          /\d/,
          /\d/,
          '-',
          /\d/,
          /\d/,
        ],
        date: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
        phone: function(userInput) {
          var numbers = userInput.match(/\d/g);
          return 10 < (numbers ? numbers.join('').length : 0)
            ? [
                '(',
                /[1-9]/,
                /[1-9]/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ]
            : [
                '(',
                /[1-9]/,
                /[1-9]/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ];
        },
      };
    },
    97: function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__(29),
        __webpack_require__(28),
        __webpack_require__(21),
        __webpack_require__(118),
        __webpack_require__(14),
        __webpack_require__(363),
        __webpack_require__(138),
        __webpack_require__(137),
        __webpack_require__(157),
        __webpack_require__(491),
        __webpack_require__(362);
      function _slicedToArray(arr, i) {
        return (
          (function(arr) {
            if (Array.isArray(arr)) return arr;
          })(arr) ||
          (function(arr, i) {
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0;
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) &&
                (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              (_d = !0), (_e = err);
            } finally {
              try {
                _n || null == _i.return || _i.return();
              } finally {
                if (_d) throw _e;
              }
            }
            return _arr;
          })(arr, i) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance',
            );
          })()
        );
      }
      function _defineProperties(target, props) {
        for (var descriptor, i = 0; i < props.length; i++)
          ((descriptor = props[i]).enumerable = descriptor.enumerable || !1),
            (descriptor.configurable = !0),
            'value' in descriptor && (descriptor.writable = !0),
            Object.defineProperty(target, descriptor.key, descriptor);
      }
      var msg_REQUIRED = 'Campo obrigatório',
        msg_CPF = 'CPF inválido',
        msg_CEP = 'CEP inválido',
        msg_DATE = 'Data inválida',
        msg_EMAIL = 'E-mail inválido',
        msg_MINLENGTH = function(min) {
          return 'Mínimo de '.concat(min, ' caracteres');
        },
        msg_MAXLENGTH = function(max) {
          return 'Maximo de '.concat(max, ' caracteres');
        };
      function removeNonDigit(str) {
        return str ? str.replace(/\D+/g, '') : '';
      }
      var Validations = (function() {
        function Validations() {
          !(function(instance, Constructor) {
            if (!(instance instanceof Constructor))
              throw new TypeError('Cannot call a class as a function');
          })(this, Validations);
        }
        return (
          (Constructor = Validations),
          (protoProps = null),
          (staticProps = [
            {
              key: 'Required',
              value: function(_ref) {
                return _ref.value ? '' : msg_REQUIRED;
              },
            },
            {
              key: 'CPF',
              value: function(_ref2) {
                var value = _ref2.value,
                  cpf =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : removeNonDigit(value);
                if (!cpf || 11 !== cpf.length) return msg_CPF;
                for (var i = 0; 10 > i; i += 1)
                  if (cpf === (i + '').repeat(11)) return msg_CPF;
                var validPosition = function(position) {
                  for (var rev, sum = 0, _i = 0; _i < position; _i += 1)
                    sum += +cpf.charAt(_i) * (position + 1 - _i);
                  return (
                    (rev =
                      10 === (rev = 11 - (sum % 11)) || 11 === rev
                        ? 0
                        : rev) === +cpf.charAt(position)
                  );
                };
                return validPosition(9) && validPosition(10) ? '' : msg_CPF;
              },
            },
            {
              key: 'CEP',
              value: function(_ref3) {
                return 8 === (removeNonDigit(_ref3.value) + '').length
                  ? ''
                  : msg_CEP;
              },
            },
            {
              key: 'Date',
              value: (function(_Date) {
                function Date() {
                  return _Date.apply(this, arguments);
                }
                return (
                  (Date.toString = function() {
                    return _Date.toString();
                  }),
                  Date
                );
              })(function(_ref4) {
                var _ref4$value = _ref4.value,
                  _value$split2 = _slicedToArray(
                    (void 0 === _ref4$value ? '' : _ref4$value).split('/'),
                    3,
                  ),
                  day = _value$split2[0],
                  month = _value$split2[1],
                  year = _value$split2[2];
                return new Date(year, month - 1, day).getMonth() + 1 === +month
                  ? ''
                  : msg_DATE;
              }),
            },
            {
              key: 'MinLength',
              value: function(_ref5) {
                var _ref5$value = _ref5.value,
                  value = void 0 === _ref5$value ? '' : _ref5$value,
                  minLength = _ref5.minLength;
                return minLength && (value + '').length < +minLength
                  ? msg_MINLENGTH(minLength)
                  : '';
              },
            },
            {
              key: 'MaxLength',
              value: function(_ref6) {
                var _ref6$value = _ref6.value,
                  value = void 0 === _ref6$value ? '' : _ref6$value,
                  maxLength = _ref6.maxLength;
                return maxLength && (value + '').length > +maxLength
                  ? msg_MAXLENGTH(maxLength)
                  : '';
              },
            },
            {
              key: 'Email',
              value: function(_ref7) {
                var value = _ref7.value;
                return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                  value,
                )
                  ? ''
                  : msg_EMAIL;
              },
            },
          ]),
          protoProps && _defineProperties(Constructor.prototype, protoProps),
          staticProps && _defineProperties(Constructor, staticProps),
          Validations
        );
        var Constructor, protoProps, staticProps;
      })();
      __webpack_exports__.a = Validations;
    },
  },
  [[771, 1, 2]],
]);
//# sourceMappingURL=main.6a0904012aef82844404.bundle.js.map
