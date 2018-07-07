(function (t) {
  function e(e) { for (var r, u, a = e[0], c = e[1], s = e[2], l = 0, f = []; l < a.length; l++)u = a[l], o[u] && f.push(o[u][0]), o[u] = 0; for (r in c)Object.prototype.hasOwnProperty.call(c, r) && (t[r] = c[r]); d && d(e); while (f.length)f.shift()(); return i.push(...s || []), n(); } function n() { for (var t, e = 0; e < i.length; e++) { for (var n = i[e], r = !0, a = 1; a < n.length; a++) { const c = n[a]; o[c] !== 0 && (r = !1); }r && (i.splice(e--, 1), t = u(u.s = n[0])); } return t; } var r = {},
    o = { 1: 0 },
    i = []; function u(e) { if (r[e]) return r[e].exports; const n = r[e] = { i: e, l: !1, exports: {} }; return t[e].call(n.exports, n, n.exports, u), n.l = !0, n.exports; }u.m = t, u.c = r, u.d = function (t, e, n) { u.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n }); }, u.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, u.t = function (t, e) { if (1 & e && (t = u(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const n = Object.create(null); if (u.r(n), Object.defineProperty(n, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const r in t)u.d(n, r, (e => t[e]).bind(null, r)); return n; }, u.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return u.d(e, 'a', e), e; }, u.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, u.p = ''; let a = window.webpackJsonp = window.webpackJsonp || [],
    c = a.push.bind(a); a.push = e, a = a.slice(); for (let s = 0; s < a.length; s++)e(a[s]); var d = c; i.push([18, 0]), n();
}({
  1(t, e) {},
  10(t, e) {},
  11(t, e) {},
  12(t, e) {},
  13(t, e) {},
  14(t, e) {},
  15(t, e) {},
  16(t, e) {},
  18(t, e, n) { t.exports = n('zUnb'); },
  2(t, e) {},
  3(t, e) {},
  4(t, e) {},
  5(t, e) {},
  6(t, e) {},
  7(t, e) {},
  8(t, e) {},
  9(t, e) {},
  EwNz(t, e, n) {},
  'MJd+': function (t, e, n) {
    'use strict';

    let r = n('EwNz'),
      o = n.n(r); o.a;
  },
  jj00(t, e, n) {},
  nNx0(t, e, n) {
    'use strict';

    let r = n('jj00'),
      o = n.n(r); o.a;
  },
  zUnb(t, e, n) {
    'use strict';

    n.r(e); let r = n('Kw5r'),
      o = function () {
        let t = this,
          e = t.$createElement,
          n = t._self._c || e; return n('div', { attrs: { id: 'app' } }, [n('div', { attrs: { id: 'nav' } }, [n('router-link', { attrs: { to: '/' } }, [t._v('Home')]), t._v(' |\n    '), n('router-link', { attrs: { to: '/about' } }, [t._v('About')])], 1), n('router-view')], 1);
      },
      i = [],
      u = (n('nNx0'), n('uMhA')),
      a = {},
      c = Object(u.a)(a, o, i, !1, null, null, null),
      s = c.exports,
      d = n('jE9Z'),
      l = function () {
        let t = this,
          e = t.$createElement,
          n = t._self._c || e; return n('div', [n('div', [t._v('Tensorflow JS Vue')]), n('div', [t._v(t._s(t.loadingStr))]), n('h1', [t._v(`prediction: ${t._s(t.predNum)}`)]), n('canvas', { attrs: { id: 'cv', width: '400', height: '400' } }), n('div', [n('button', { on: { click: t.predict } }, [t._v('predict')])])]);
      },
      f = [],
      v = n('mrSG'),
      h = n('vDqi'),
      p = n.n(h),
      m = n('C1Pg'); Object.assign(window, { tf: m }); let g = document.createElement('canvas'),
      b = g.getContext('2d'); Object.assign(g, { width: 28, height: 28, style: 'border: 1px solid blue' }); var w = new r.a({
        data() {
          return {
            model: null, modelLoaded: !1, ctx: null, cv: null, offscreenCV: g, offscreenCtx: b, pendingPredictData: null, currNumImgData: [],
          };
        },
        methods: {
          load_model() { return v.a(this, void 0, void 0, function () { let t; return v.b(this, function (e) { switch (e.label) { case 0: return t = this, [4, m.loadModel('https://raw.githubusercontent.com/Plasmatium/tfjs-exploration/master/src/assets/shared_model/model.json')]; case 1: return t.model = e.sent(), this.modelLoaded = !0, [2]; } }); }); },
          getImgTensor() {
            w.ctx; let t = w.cv,
              e = (w.offscreenCV, w.offscreenCtx); e.clearRect(0, 0, 28, 28), e.drawImage(t, 0, 0, 28, 28); for (var n = e.getImageData(0, 0, 28, 28).data, r = [], o = 0; o < 3136; o += 4)r.push(n[o + 2] / 255 - 0.5); return this.currNumImgData = r, m.tensor4d(r, [1, 28, 28, 1]);
          },
          predict() {
            return v.a(this, void 0, void 0, function () {
              let t,
                e,
                n; return v.b(this, function (r) { switch (r.label) { case 0: return t = this.model.predict(this.getImgTensor()), t.print(), [4, t]; case 1: return e = r.sent(), [4, m.argMax(e, 1)]; case 2: return [4, r.sent().data()]; case 3: return n = r.sent(), [2, n]; } });
            });
          },
        },
      }),
      x = w; Object.assign(window, { axios: p.a }); let _ = r.a.extend({
        data() {
          return {
            bus: x, predNum: null, newStarting: !0, predTimerId: -1, loadingStr: '', loadingProgress: 0,
          };
        },
        methods: {
          predict() {
            return v.a(this, void 0, void 0, function () {
              let t,
                e; return v.b(this, function (n) { switch (n.label) { case 0: return [4, x.predict()]; case 1: return t = n.sent(), this.predNum = t[0], e = this.bus.ctx, setTimeout(() => { e.clearRect(0, 0, 400, 400); }, 1e3), [2]; } });
            });
          },
          mockLoading() {
            const t = this; if (x.modelLoaded) this.loadingStr = 'Model loaded 100.0%'; else {
              this.loadingStr = `Loading Model: ${this.loadingProgress.toFixed(2)}%`; let e = 300 * Math.random(),
                n = 1.5 * Math.random(); n = Math.min(n, 100), setTimeout(() => { t.loadingProgress += n, t.mockLoading(); }, e);
            }
          },
        },
        mounted() {
          const t = this; window.bus = x, this.bus.load_model(), this.mockLoading(); const e = document.getElementById('cv'); this.bus.cv = e, this.bus.ctx = e.getContext('2d'); let n = x.ctx,
            r = x.cv,
            o = r.getBoundingClientRect(); n.strokeStyle = 'blue', n.lineWidth = 20, r.addEventListener('touchmove', (t) => {
            t.preventDefault(); let e = t.targetTouches[0],
              r = e.clientX,
              i = e.clientY,
              u = [r - o.left, i - o.top],
              a = u[0],
              c = u[1]; n.lineTo(a, c), n.stroke();
          }), r.addEventListener('touchstart', (t) => {
            t.preventDefault(); let e = t.targetTouches[0],
              r = e.clientX,
              i = e.clientY,
              u = [r - o.left, i - o.top],
              a = u[0],
              c = u[1]; n.beginPath(), n.moveTo(a, c);
          }), r.addEventListener('touchend', (e) => { e.preventDefault(), window.clearTimeout(t.predTimerId), t.predTimerId = window.setTimeout(() => { t.predict(); }, 500); });
        },
      }),
      j = _,
      y = (n('MJd+'), Object(u.a)(j, l, f, !1, null, '634a127d', null)),
      T = y.exports; r.a.use(d.a); const M = new d.a({ mode: 'history', routes: [{ path: '/tfjs-exploration', name: 'home', component: T }] }); r.a.config.productionTip = !1, new r.a({ router: M, render(t) { return t(s); } }).$mount('#app');
  },
}));
