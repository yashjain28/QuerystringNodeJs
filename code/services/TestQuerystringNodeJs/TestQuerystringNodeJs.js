function TestQuerystringNodeJs(req, resp) {
  var qs = QuerystringNodeJs();
  
  var val = qs.stringify({a:1,b:2}); // output: a=1&b=2
  log(val);

  const query = 'foo=bar&abc=xyz&abc=123';
  const queryObject = qs.parse(query); // output: {"foo":"bar","abc":["xyz","123"]}
  log(queryObject);
  
  resp.success('Success');
}
