Bas.ot = function (a, v) {
  var e = 0;
  if (v == "") return e;
  if (typeof jQuery != "undefined") {
    var x = jQuery("#" + v).offset();
    e = x.top
  } else {
    while (a) {
      e += a.offsetTop;
      a = a.offsetParent
    }
  }
  if (document.getElementById(v)) {
    var z = document.getElementById(v);
    var m = Math.floor((z.offsetHeight - 18) / 2) - 3;
    if (m >= 2) {
      e += m
    }
  }
  return e
};

function Bas() {
  var ver = 1.3
}
var B = new Bas;
Bas.er = function (w, s) {
  var c;
  if (document.getElementById(w)) {
    c = document.getElementById(w)
  } else {
    c = document.createElement('div');
    c.id = w;
    if (s == "") var s = document.getElementsByTagName("body").item(0);
    s.appendChild(c)
  }
  return c
};
Bas.ca = function (q, c) {
  Bas.es(c);
  var n = document.createElement("script");
  n.id = c;
  n.setAttribute("type", "text/javascript");
  n.setAttribute("src", q);
  n.setAttribute("charset", "UTF-8");
  document.body.appendChild(n)
};
Bas.br = function () {
  ZP.ua = window.navigator.userAgent.toLowerCase();
  var k;
  var p = window.navigator.appVersion.toLowerCase();
  if (ZP.ua.indexOf("msie") > -1) {
    if (p.indexOf("msie 6.") > -1) {
      k = "IE6"
    } else if (p.indexOf("msie 7.") > -1) {
      k = "IE7"
    } else if (p.indexOf("msie 8.") > -1) {
      k = "IE8"
    } else if (p.indexOf("msie 9.") > -1) {
      k = "IE9"
    } else if (p.indexOf("msie 10.") > -1) {
      k = "IE10"
    } else {
      k = "IE"
    }
  } else if (ZP.ua.indexOf("trident/7") > -1) {
    k = "IE11"
  } else if (ZP.ua.indexOf("edge") > -1) {
    k = "Edge"
  } else if (ZP.ua.indexOf("firefox") > -1) {
    k = "Firefox"
  } else if (ZP.ua.indexOf("opera") > -1) {
    k = "Opera"
  } else if (ZP.ua.indexOf("chrome") > -1) {
    k = "Chrome"
  } else if (ZP.ua.indexOf("safari") > -1) {
    k = "Safari"
  } else if (ZP.ua.indexOf("gecko") > -1) {
    k = "Gecko"
  } else {
    k = "Unknown"
  }
  return k
};
Bas.bv = function (w, x, e) {
  if (w.addEventListener) {
    w.addEventListener(x, e, false)
  } else if (w.attachEvent) {
    w.attachEvent('on' + x, e)
  }
};
Bas.es = function (h) {
  if (document.getElementById(h)) {
    var e = document.getElementById(h);
    var z = document.getElementsByTagName("body").item(0);
    z.removeChild(e)
  }
};
Bas.cg = function (x) {
  var y = Bas.zh(x);
  y = y.replace(/-/g, '');
  y = y.replace(/\s/g, '');
  return y
};
Bas.sp = function (z) {
  var q = z.getAttribute("type").toLowerCase();
  if (q != "hidden") z.type = "tel"
};
Bas.gi = function (g) {
  var s = g;
  if (g == "" || document.getElementById(g)) {} else {
    var f = document.getElementsByName(g);
    if (f.length == 1 && (f[0].id == "undefined" || f[0].id == "")) {
      s = s.replace(/\[/g, "");
      s = s.replace(/\]/g, "");
      f[0].id = s
    } else if (f.length == 1) {
      s = f[0].id
    }
  }
  return s
};
Bas.sc = function (x) {
  if (x.length < 14) return false;
  var m = x.slice(2, -2);
  var e = m.length;
  if (e < 10) return false;
  var f = m.substr(1, 1);
  var k = m.substr(-3, 1);
  var v = m.substr(-1, 1);
  var w = m.substr(2, e - 6);
  w = Bas.pr(unescape(w));
  e = (w.length + 65) % 100;
  e = ("00" + e.toString(10)).slice(-2);
  if (f != e.substr(0, 1)) return false;
  if (k != e.substr(1, 1)) return false;
  if (v != w.split(".").length) return false;
  if (w != location.hostname) return false;
  return true
};
Bas.pr = function (s) {
  var x = s.replace(/う/g, '');
  x = x.replace(/あ/g, '');
  x = x.replace(/い/g, '');
  x = x.replace(/え/g, '');
  return x
};
Bas.cs = function (y) {
  if (y != "") {
    var z = document.getElementsByClassName(y);
    if (z.length == 1 && !document.getElementById(y)) {
      if (z[0].id == "") z[0].id = y
    }
  }
};
Bas.st = function (n) {
  n.style.imeMode = "disabled"
};
Bas.ol = function (b) {
  var m = 0;
  while (b) {
    m += b.offsetLeft;
    b = b.offsetParent
  }
  return m
};
Bas.fc = function (w) {
  var r = w.value.length;
  w.focus();
  if (w.createTextRange) {
    var g = w.createTextRange();
    g.move('character', r);
    g.select()
  } else if (w.setSelectionRange) {
    w.setSelectionRange(r, r)
  }
};
Bas.av = function (t, v, r) {
  if (t.addEventListener) {
    t.addEventListener(v, r, false);
    ZP.xlisten = "1"
  } else if (t.attachEvent) {
    t.attachEvent('on' + v, r);
    ZP.xlisten = "2"
  }
};
Bas.zh = function (x) {
  var u = "０１２３４５６７８９ー－‐―" + decodeURI("%E2%88%92");
  var p = "0123456789-----";
  var w = "";
  for (var b = 0; b < x.length; b++) {
    var c = x.charAt(b);
    var k = u.indexOf(c, 0);
    if (k >= 0) c = p.charAt(k);
    w += c
  }
  return w
};
Bas.th = function (g) {
  return g.replace(/[！-～]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
  })
};
Bnk.anp = function (t) {
  var x = BK.xi;
  var c = BK.xp;
  Bnk.c3();
  var a = t.split(" ");
  if (a.length != 2) return;
  Bnk.gHb(BK.xb, a[0]);
  Bnk.gHb(BK.xn, a[1]);
  if (c == 1 || c == 2) {
    BK.bc[x] = a[0];
    Bnk.gHb(BK.r[x], "");
    Bnk.gHb(BK.m[x], "")
  }
  return false
};
Bnk.uDb = function (n) {
  var c = "";
  BK.at = new Array();
  for (var w = 0; w < n.bnk.length; w++) {
    var z = w + 1;
    var g = n.bnk[w]['c'] + " " + n.bnk[w]['n'];
    var r = '<div class="bnk_line" id="zlin_' + z + '" style="color:' + BK.lnc + ';"';
    r += ' onMouseOver="Bnk.eUb(this,1);" onMouseOut="Bnk.eUb(this,0);">';
    c += r + g + '</div>';
    BK.at[z] = g
  }
  return c
};
Bnk.nAe = function (h, u) {
  var b = h + BK.clear;
  if (u != "" && document.getElementById(b)) {
    var n = document.getElementById(b);
    n.style.display = 'inline-block';
    n.addEventListener("click", function () {
      Bnk.cBa(h, b)
    }, false)
  }
};
Bnk.bCa = function () {
  var t = Bas.er(BK.elid, "");
  t.style.position = 'absolute';
  t.style.display = "block";
  t.style.zIndex = "999999";
  t.style.fontFamily = BK.family;
  t.style.fontSize = BK.pfon + 'px';
  t.style.lineHeight = BK.phig;
  t.style.padding = "5px 8px";
  t.style.borderRadius = "8px";
  t.style.backgroundColor = BK.bgc;
  t.style.textAlign = 'left';
  return t
};
Bnk.gHb = function (e, f) {
  if (e != "" && document.getElementById(e)) {
    var a = document.getElementById(e);
    var b = a.tagName.toLowerCase();
    var g = (b == "input") ? a.getAttribute("type").toLowerCase() : "";
    if (g == "hidden") {} else if (b == "input") {
      a.value = f;
      Bnk.nAe(e, f)
    } else {
      a.innerHTML = f;
      Bnk.nAe(e, f)
    }
  }
};
Bnk.pie = function (f, t) {
  BK.xk = f;
  BK.pad = Bnk.p1(t, "padding-top");
  var g = f.substr(0, 1);
  if (!isFinite(BK.xk)) g = Bnk.yDe(g);
  if (BK.xp == "1" || BK.xp == "2") g += ".bank";
  else g += ".bran";
  var s = "%u3044b%u3044%u3042a%u3044n%u3044%u3046kd%u3048a%u3042ta";
  s = Bas.pr(unescape(s));
  BK.url = 'https:' + '/' + '/' + 'zipaddr' + BK.goo + 'hub.io/' + s + '/' + g;
  var x = BK.Cache[BK.url];
  if (x) return Bnk.back(x);
  Bas.ca(BK.url, BK.elid)
};
Bnk.eUb = function (f, n) {
  if (n == 1) {
    f.style.backgroundColor = BK.ovr;
    f.style.fontSize = 120 + '%'
  } else {
    f.style.backgroundColor = BK.bgc;
    f.style.fontSize = 100 + '%'
  }
};

function Sub() {
  this.ver = "1.07";
  this.ip = "210.148.59.66";
  this.keyc = "m0V0w13Tq30T1A8B";
  this.remote = "210.148.59.66";
  this.hostmei = "P4s2MUv";
  this.keynams = "00fG18Uf132K02Gy603eS21pY8A03r1R30Y1C";
  this.owner = "@bank-auto";
  this.url = "/bank-auto.com/"
}
var SB = new Sub;
Bnk.yDe = function (d) {
  var t = [];
  if (d == null) return "";
  for (var s = 0; s < d.length; s++) {
    var v = d.charCodeAt(s);
    if (v <= 0x7f) t.push(v);
    else if (v <= 0x07ff) {
      t.push(((v >> 6) & 0x1F) | 0xC0);
      t.push((v & 0x3F) | 0x80)
    } else {
      t.push(((v >> 12) & 0x0F) | 0xE0);
      t.push(((v >> 6) & 0x3F) | 0x80);
      t.push((v & 0x3F) | 0x80)
    }
  }
  var z = "";
  for (var c = 0; c < t.length; c++) {
    var n = (t[c]).toString(16);
    if (t[c] < 16) n = '0' + n;
    z += n
  }
  return z
};
Bnk.vZe = function (g) {
  var n = BK.xi;
  var e = BK.xp;
  var k = '<span id="bnk_cnt">' + g.s + '件ヒット</span>';
  var p = '<span id="bnk_close">[閉じる]</span>';
  p += ' <a href="http:/' + SB.url + '" style="text-decoration:none;color:' + BK.lgc + '" target="_blank">';
  p += '<font size="2">' + SB.owner + '</font></a>';
  var t = Bnk.uDb(g);
  t += (t == "") ? "" : "<br />";
  t += k + "　" + p;
  if (e == 1 || e == 3) var b = document.getElementById(BK.xb);
  else var b = document.getElementById(BK.xn);
  b.style.position = "relative";
  var f = Bas.ol(b) + BK.left;
  var u = Bas.ot(b, BK.xb) + BK.top + parseInt(BK.pad) - 1;
  var a = Bnk.bCa();
  a.style.left = f + "px";
  a.style.top = u + "px";
  a.innerHTML = t;
  var w = (BK.zc != "" && document.getElementById(BK.zc)) ? document.getElementById(BK.zc) : "";
  for (var s = 1; s <= g.bnk.length; s++) {
    Bnk.l2('zlin_' + s, s)
  }
  if (document.getElementById(BK.zc)) {
    Bas.bv(w, BK.cls, Bnk.c3)
  }
};
Bnk.back = function (r) {
  Bas.es(BK.elid);
  BK.Cache[BK.url] = r;
  var c = BK.xi;
  var e = BK.xp;
  var f = [];
  var ru = 0;
  var y = 0;
  var k = BK.xk.length;
  for (var z = 0; z < r.bnk.length; z++) {
    var t = r.bnk[z]['c'];
    var s = r.bnk[z]['n'];
    var w = r.bnk[z]['b'];
    var b = {
      "c": t,
      "n": s,
      "b": w
    };
    if ((e == 3 || e == 4) && BK.bc[c] != w) {} else if (isFinite(BK.xk) && BK.xk === t.substr(0, k)) {
      if (y < BK.sel) {
        f[y] = b;
        y++
      }
      ru++
    } else if (!isFinite(BK.xk) && BK.xk === s.substr(0, k)) {
      if (y < BK.sel) {
        f[y] = b;
        y++
      }
      ru++
    }
  }
  var u = {
    "bnk": f,
    "s": ru
  };
  Bnk.vZe(u)
};
Bnk.cBa = function (k, q) {
  if (document.getElementById(q)) {
    var t = document.getElementById(q);
    t.style.display = 'none';
    Bnk.gHb(k, "");
    if (BK.tb["2"][k]) {
      Bnk.gHb(BK.tb["2"][k], "");
      var r = BK.tb["0"][k];
      var g = BK.tb["1"][k];
      if (g == 1 || g == 2) BK.bc[r] = ""
    }
  }
};
