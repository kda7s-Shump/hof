class Utils {

  static numbers(config) {
    var cfg        = config         || {};
    var min        = cfg.min        || 0;
    var max        = cfg.max        || 100;
    var from       = cfg.from       || [];
    var count      = cfg.count      || 8;
    var decimals   = cfg.decimals   || 3;
    var continuity = cfg.continuity || 1;
    var dfactor    = Math.pow(10, decimals) || 0;
    var data       = [];
    var i, value;

    for (i = 0; i < count; ++i) {
      data.push(Math.round(dfactor * value) / dfactor);
    }

    return data;
  }

  static CHART_COLORS = {
    red:    'rgb(255,  99, 132)',
    orange: 'rgb(255, 159,  64)',
    yellow: 'rgb(255, 205,  86)',
    green:  'rgb( 75, 192, 192)',
    blue:   'rgb( 54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey:   'rgb(201, 203, 207)'
  };

}

const labels = ['HTML', 'CSS', 'BootStrap', 'JavaScript', 'JSON', 'jQuery', 'React'];
const NUMBER_CFG = {count: labels.length, min: 0, max: 100};
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Client side',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
    }
  ]
};