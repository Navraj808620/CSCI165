var _0x2f4d = ['\x20/\x20', '#sub_button', '\x20+\x20\x20\x20', '<span\x20id=\x27mulStyle\x27>', 'click', 'mouseenter', 'text', '#history', '#operand_2', 'html', '#div_button', 'val', '\x20*\x20', '<br>', '\x20=\x20', '#add_button', '</span>', '#mul_button', '<span\x20id=\x27addStyle\x27>', 'show', '<span\x20id=\x27divStyle\x27>', '#operand_1', '#show_button', '#hide_button', '<span\x20id=\x27subStyle\x27>', '#clear_button', '#result'];
(function(_0x34813e, _0x2f4d97) {
  var _0x283c18 = function(_0x211ab2) {
    while (--_0x211ab2) {
      _0x34813e['push'](_0x34813e['shift']());
    }
  };
  _0x283c18(++_0x2f4d97);
}(_0x2f4d, 0x140));
var _0x283c = function(_0x34813e, _0x2f4d97) {
  _0x34813e = _0x34813e - 0x0;
  var _0x283c18 = _0x2f4d[_0x34813e];
  return _0x283c18;
};
add = function() {
  result = parseInt(jQuery(_0x283c('0x19'))[_0x283c('0xf')]()) + parseInt(jQuery(_0x283c('0xc'))[_0x283c('0xf')]()), text = jQuery('#operand_1')[_0x283c('0xf')]() + _0x283c('0x6') + jQuery('#operand_2')[_0x283c('0xf')]() + _0x283c('0x12'), result = text + result, jQuery('#result')[_0x283c('0xa')](result), styled_result = _0x283c('0x16') + result + _0x283c('0x14'), old_div_content = jQuery(_0x283c('0xb'))[_0x283c('0xd')](), new_div_content = old_div_content + styled_result + _0x283c('0x11'), jQuery(_0x283c('0xb'))[_0x283c('0xd')](new_div_content);
}, sub = function() {
  result = parseInt(jQuery(_0x283c('0x19'))['val']()) - parseInt(jQuery(_0x283c('0xc'))['val']()), text = jQuery(_0x283c('0x19'))[_0x283c('0xf')]() + '\x20-\x20' + jQuery(_0x283c('0xc'))['val']() + _0x283c('0x12'), result = text + result, jQuery('#result')['html'](result), result = _0x283c('0x1') + result + _0x283c('0x14'), old_div_content = jQuery(_0x283c('0xb'))[_0x283c('0xd')](), new_div_content = old_div_content + result + _0x283c('0x11'), jQuery('#history')['html'](new_div_content);
}, mul = function() {
  result = parseInt(jQuery(_0x283c('0x19'))[_0x283c('0xf')]()) * parseInt(jQuery('#operand_2')['val']()), text = jQuery(_0x283c('0x19'))[_0x283c('0xf')]() + _0x283c('0x10') + jQuery(_0x283c('0xc'))[_0x283c('0xf')]() + _0x283c('0x12'), result = text + result, jQuery(_0x283c('0x3'))[_0x283c('0xd')](result), result = _0x283c('0x7') + result + '</span>', old_div_content = jQuery(_0x283c('0xb'))[_0x283c('0xd')](), new_div_content = old_div_content + result + _0x283c('0x11'), jQuery(_0x283c('0xb'))[_0x283c('0xd')](new_div_content);
}, div = function() {
  result = parseInt(jQuery('#operand_1')['val']()) / parseInt(jQuery(_0x283c('0xc'))[_0x283c('0xf')]()), text = jQuery(_0x283c('0x19'))['val']() + _0x283c('0x4') + jQuery(_0x283c('0xc'))['val']() + _0x283c('0x12'), result = text + result, jQuery(_0x283c('0x3'))[_0x283c('0xd')](result), result = _0x283c('0x18') + result + _0x283c('0x14'), old_div_content = jQuery(_0x283c('0xb'))[_0x283c('0xd')](), new_div_content = old_div_content + result + _0x283c('0x11'), jQuery(_0x283c('0xb'))[_0x283c('0xd')](new_div_content);
}, show = function() {
  jQuery(_0x283c('0xb'))[_0x283c('0x17')]();
}, hide = function() {
  jQuery('#history')['hide']();
}, clear = function() {
  jQuery(_0x283c('0xb'))[_0x283c('0xd')]('\x20');
}, setup = function() {
  jQuery('#add_button')[_0x283c('0x8')](add), jQuery('#sub_button')['click'](sub), jQuery(_0x283c('0x15'))[_0x283c('0x8')](mul), jQuery('#div_button')[_0x283c('0x8')](div), jQuery(_0x283c('0x13'))[_0x283c('0x9')](add), jQuery(_0x283c('0x5'))[_0x283c('0x9')](sub), jQuery(_0x283c('0x15'))[_0x283c('0x9')](mul), jQuery(_0x283c('0xe'))['mouseenter'](div), jQuery(_0x283c('0x1a'))[_0x283c('0x8')](show), jQuery(_0x283c('0x0'))[_0x283c('0x8')](hide), jQuery(_0x283c('0x2'))[_0x283c('0x8')](clear);
}, jQuery(document)['ready'](setup);
