module.exports = function(env, delim) {
  if (!env) env = process.env;
  if (!delim) delim = '.';
  var ret = {};
  function put(r, k, v) {
    var w = k.split(delim);
    var a = w[0];
    var e = r.hasOwnProperty(a);
    if (!e) {
      if (w.length > 1) {
        r[a] = {};
      } else {
        r[a] = v;
      }
    }
    if (w.length > 1) {
      put(r[a], w.slice(1).join(delim), v);
    }

  }
  for (var key in env) {
    var val = env[key];
    put(ret, key, val);
  }
  return ret;
}
