module.exports = function(env, obj, delim) {
  if (!env) env = process.env;
  if (!obj) obj = {};
  if (!delim) delim = '.';
  function put(r, k, v) {
    var w = k.split(delim);
    var a = w[0];
    var e = r.hasOwnProperty(a);
    if (w.length == 1) {
      r[a] = v;
    } else if (!e) {
      r[a] = {};
    }
    if (w.length > 1) {
      put(r[a], w.slice(1).join(delim), v);
    }

  }
  for (var key in env) {
    var val = env[key];
    put(obj, key, val);
  }
  return obj;
}
