/*globals exports, require */
var url = require('url');

var pages = [
  { url: '/', name: 'Hem' }
];

var getMenu = function(req) {
  var mnu = pages.slice();
  var current = url.parse(req.url).pathname;
  for(var i=0; i<mnu.length; i++) {
    mnu[i].active = (mnu[i].url == current);
  }
  return mnu;
};

exports.index = function(req, res){
  res.render('index', { title: 'RoA-konsult', menu: getMenu(req) });
};