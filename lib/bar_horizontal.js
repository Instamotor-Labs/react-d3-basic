"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactD3Core = require('react-d3-core');

var _reactD3Shape = require('react-d3-shape');

var _commonProps = require('./commonProps');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarHorizontalChart = function (_Component) {
  _inherits(BarHorizontalChart, _Component);

  function BarHorizontalChart(props) {
    _classCallCheck(this, BarHorizontalChart);

    return _possibleConstructorReturn(this, (BarHorizontalChart.__proto__ || Object.getPrototypeOf(BarHorizontalChart)).call(this, props));
  }

  _createClass(BarHorizontalChart, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          margins = _props.margins,
          data = _props.data,
          chartSeries = _props.chartSeries,
          showXGrid = _props.showXGrid,
          showYGrid = _props.showYGrid,
          showLegend = _props.showLegend,
          categoricalColors = _props.categoricalColors;


      var xgrid, ygrid;

      if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, null);
      if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, null);

      return _react2.default.createElement(
        'div',
        null,
        showLegend ? _react2.default.createElement(_reactD3Core.Legend, _extends({}, this.props, {
          width: width,
          margins: margins,
          chartSeries: chartSeries,
          categoricalColors: categoricalColors
        })) : null,
        _react2.default.createElement(
          _reactD3Shape.Chart,
          _extends({}, this.props, {
            width: width,
            height: height,
            data: data,
            chartSeries: chartSeries,
            horizontal: true
          }),
          _react2.default.createElement(_reactD3Shape.BarHorizontal, {
            chartSeries: chartSeries
          }),
          xgrid,
          ygrid,
          _react2.default.createElement(_reactD3Core.Xaxis, null),
          _react2.default.createElement(_reactD3Core.Yaxis, null),
          this.props.children
        )
      );
    }
  }]);

  return BarHorizontalChart;
}(_react.Component);

BarHorizontalChart.defaultProps = _extends({
  onMouseOver: function onMouseOver() {},
  onMouseOut: function onMouseOut() {}
}, _commonProps.horizontalProps);
BarHorizontalChart.propTypes = {
  width: _propTypes2.default.number.isRequired,
  height: _propTypes2.default.number.isRequired,
  margins: _propTypes2.default.object.isRequired,
  data: _propTypes2.default.array.isRequired,
  chartSeries: _propTypes2.default.array.isRequired
};
exports.default = BarHorizontalChart;
module.exports = exports['default'];