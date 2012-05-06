
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Vijay Selvaraj' })
};

exports.videochat = function(req, res){
  res.render('videochat', { title: 'Video Chat'})
};
