import { _ as _e } from "./index-29f8386e.js";
const Ie = Symbol(),
  X = Object.getPrototypeOf,
  Y = new WeakMap(),
  ue = (e) =>
    e &&
    (Y.has(e)
      ? Y.get(e)
      : X(e) === Object.prototype || X(e) === Array.prototype),
  fe = (e) => (ue(e) && e[Ie]) || null,
  ee = (e, t = !0) => {
    Y.set(e, t);
  },
  J = (e) => typeof e == "object" && e !== null,
  v = new WeakMap(),
  $ = new WeakSet(),
  Te = (
    e = Object.is,
    t = (r, T) => new Proxy(r, T),
    s = (r) =>
      J(r) &&
      !$.has(r) &&
      (Array.isArray(r) || !(Symbol.iterator in r)) &&
      !(r instanceof WeakMap) &&
      !(r instanceof WeakSet) &&
      !(r instanceof Error) &&
      !(r instanceof Number) &&
      !(r instanceof Date) &&
      !(r instanceof String) &&
      !(r instanceof RegExp) &&
      !(r instanceof ArrayBuffer),
    o = (r) => {
      switch (r.status) {
        case "fulfilled":
          return r.value;
        case "rejected":
          throw r.reason;
        default:
          throw r;
      }
    },
    c = new WeakMap(),
    l = (r, T, m = o) => {
      const p = c.get(r);
      if ((p == null ? void 0 : p[0]) === T) return p[1];
      const C = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r));
      return (
        ee(C, !0),
        c.set(r, [T, C]),
        Reflect.ownKeys(r).forEach((U) => {
          if (Object.getOwnPropertyDescriptor(C, U)) return;
          const h = Reflect.get(r, U),
            w = { value: h, enumerable: !0, configurable: !0 };
          if ($.has(h)) ee(h, !1);
          else if (h instanceof Promise) delete w.value, (w.get = () => m(h));
          else if (v.has(h)) {
            const [R, x] = v.get(h);
            w.value = l(R, x(), m);
          }
          Object.defineProperty(C, U, w);
        }),
        Object.preventExtensions(C)
      );
    },
    d = new WeakMap(),
    _ = [1, 1],
    g = (r) => {
      if (!J(r)) throw new Error("object required");
      const T = d.get(r);
      if (T) return T;
      let m = _[0];
      const p = new Set(),
        C = (i, a = ++_[0]) => {
          m !== a && ((m = a), p.forEach((n) => n(i, a)));
        };
      let U = _[1];
      const h = (i = ++_[1]) => (
          U !== i &&
            !p.size &&
            ((U = i),
            R.forEach(([a]) => {
              const n = a[1](i);
              n > m && (m = n);
            })),
          m
        ),
        w = (i) => (a, n) => {
          const f = [...a];
          (f[1] = [i, ...f[1]]), C(f, n);
        },
        R = new Map(),
        x = (i, a) => {
          if (p.size) {
            const n = a[3](w(i));
            R.set(i, [a, n]);
          } else R.set(i, [a]);
        },
        z = (i) => {
          var a;
          const n = R.get(i);
          n && (R.delete(i), (a = n[1]) == null || a.call(n));
        },
        de = (i) => (
          p.add(i),
          p.size === 1 &&
            R.forEach(([n, f], S) => {
              const N = n[3](w(S));
              R.set(S, [n, N]);
            }),
          () => {
            p.delete(i),
              p.size === 0 &&
                R.forEach(([n, f], S) => {
                  f && (f(), R.set(S, [n]));
                });
          }
        ),
        B = Array.isArray(r) ? [] : Object.create(Object.getPrototypeOf(r)),
        j = t(B, {
          deleteProperty(i, a) {
            const n = Reflect.get(i, a);
            z(a);
            const f = Reflect.deleteProperty(i, a);
            return f && C(["delete", [a], n]), f;
          },
          set(i, a, n, f) {
            const S = Reflect.has(i, a),
              N = Reflect.get(i, a, f);
            if (S && (e(N, n) || (d.has(n) && e(N, d.get(n))))) return !0;
            z(a), J(n) && (n = fe(n) || n);
            let k = n;
            if (n instanceof Promise)
              n.then((b) => {
                (n.status = "fulfilled"), (n.value = b), C(["resolve", [a], b]);
              }).catch((b) => {
                (n.status = "rejected"), (n.reason = b), C(["reject", [a], b]);
              });
            else {
              !v.has(n) && s(n) && (k = g(n));
              const b = !$.has(k) && v.get(k);
              b && x(a, b);
            }
            return Reflect.set(i, a, k, f), C(["set", [a], n, N]), !0;
          },
        });
      d.set(r, j);
      const Ee = [B, h, l, de];
      return (
        v.set(j, Ee),
        Reflect.ownKeys(r).forEach((i) => {
          const a = Object.getOwnPropertyDescriptor(r, i);
          "value" in a && ((j[i] = r[i]), delete a.value, delete a.writable),
            Object.defineProperty(B, i, a);
        }),
        j
      );
    }
  ) => [g, v, $, e, t, s, o, c, l, d, _],
  [pe] = Te();
function y(e = {}) {
  return pe(e);
}
function A(e, t, s) {
  const o = v.get(e);
  let c;
  const l = [],
    d = o[3];
  let _ = !1;
  const r = d((T) => {
    if ((l.push(T), s)) {
      t(l.splice(0));
      return;
    }
    c ||
      (c = Promise.resolve().then(() => {
        (c = void 0), _ && t(l.splice(0));
      }));
  });
  return (
    (_ = !0),
    () => {
      (_ = !1), r();
    }
  );
}
function Ce(e, t) {
  const s = v.get(e),
    [o, c, l] = s;
  return l(o, c(), t);
}
const E = y({
    history: ["ConnectWallet"],
    view: "ConnectWallet",
    data: void 0,
  }),
  ce = {
    state: E,
    subscribe(e) {
      return A(E, () => e(E));
    },
    push(e, t) {
      e !== E.view && ((E.view = e), t && (E.data = t), E.history.push(e));
    },
    reset(e) {
      (E.view = e), (E.history = [e]);
    },
    replace(e) {
      E.history.length > 1 &&
        ((E.history[E.history.length - 1] = e), (E.view = e));
    },
    goBack() {
      if (E.history.length > 1) {
        E.history.pop();
        const [e] = E.history.slice(-1);
        E.view = e;
      }
    },
    setData(e) {
      E.data = e;
    },
  },
  u = {
    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
    WCM_VERSION: "WCM_VERSION",
    RECOMMENDED_WALLET_AMOUNT: 9,
    isMobile() {
      return typeof window < "u"
        ? !!(
            window.matchMedia("(pointer:coarse)").matches ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(
              navigator.userAgent
            )
          )
        : !1;
    },
    isAndroid() {
      return (
        u.isMobile() && navigator.userAgent.toLowerCase().includes("android")
      );
    },
    isIos() {
      const e = navigator.userAgent.toLowerCase();
      return u.isMobile() && (e.includes("iphone") || e.includes("ipad"));
    },
    isHttpUrl(e) {
      return e.startsWith("http://") || e.startsWith("https://");
    },
    isArray(e) {
      return Array.isArray(e) && e.length > 0;
    },
    isTelegram() {
      return (
        typeof window < "u" &&
        (!!window.TelegramWebviewProxy ||
          !!window.Telegram ||
          !!window.TelegramWebviewProxyProto)
      );
    },
    formatNativeUrl(e, t, s) {
      if (u.isHttpUrl(e)) return this.formatUniversalUrl(e, t, s);
      let o = e;
      o.includes("://") ||
        ((o = e.replaceAll("/", "").replaceAll(":", "")), (o = `${o}://`)),
        o.endsWith("/") || (o = `${o}/`),
        this.setWalletConnectDeepLink(o, s);
      const c = encodeURIComponent(t);
      return `${o}wc?uri=${c}`;
    },
    formatUniversalUrl(e, t, s) {
      if (!u.isHttpUrl(e)) return this.formatNativeUrl(e, t, s);
      let o = e;
      if (o.startsWith("https://t.me")) {
        const l = Buffer.from(t).toString("base64").replace(/[=]/g, "");
        o.endsWith("/") && (o = o.slice(0, -1)),
          this.setWalletConnectDeepLink(o, s);
        const d = new URL(o);
        return d.searchParams.set("startapp", l), d.toString();
      }
      o.endsWith("/") || (o = `${o}/`), this.setWalletConnectDeepLink(o, s);
      const c = encodeURIComponent(t);
      return `${o}wc?uri=${c}`;
    },
    async wait(e) {
      return new Promise((t) => {
        setTimeout(t, e);
      });
    },
    openHref(e, t) {
      const s = this.isTelegram() ? "_blank" : t;
      window.open(e, s, "noreferrer noopener");
    },
    setWalletConnectDeepLink(e, t) {
      try {
        localStorage.setItem(
          u.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: e, name: t })
        );
      } catch {
        console.info("Unable to set WalletConnect deep link");
      }
    },
    setWalletConnectAndroidDeepLink(e) {
      try {
        const [t] = e.split("?");
        localStorage.setItem(
          u.WALLETCONNECT_DEEPLINK_CHOICE,
          JSON.stringify({ href: t, name: "Android" })
        );
      } catch {
        console.info("Unable to set WalletConnect android deep link");
      }
    },
    removeWalletConnectDeepLink() {
      try {
        localStorage.removeItem(u.WALLETCONNECT_DEEPLINK_CHOICE);
      } catch {
        console.info("Unable to remove WalletConnect deep link");
      }
    },
    setModalVersionInStorage() {
      try {
        typeof localStorage < "u" &&
          localStorage.setItem(u.WCM_VERSION, "2.7.0");
      } catch {
        console.info("Unable to set Web3Modal version in storage");
      }
    },
    getWalletRouterData() {
      var e;
      const t = (e = ce.state.data) == null ? void 0 : e.Wallet;
      if (!t) throw new Error('Missing "Wallet" view data');
      return t;
    },
  },
  Re =
    typeof location < "u" &&
    (location.hostname.includes("localhost") ||
      location.protocol.includes("https")),
  I = y({
    enabled: Re,
    userSessionId: "",
    events: [],
    connectedWalletId: void 0,
  }),
  Ve = {
    state: I,
    subscribe(e) {
      return A(I.events, () => e(Ce(I.events[I.events.length - 1])));
    },
    initialize() {
      I.enabled &&
        typeof (crypto == null ? void 0 : crypto.randomUUID) < "u" &&
        (I.userSessionId = crypto.randomUUID());
    },
    setConnectedWalletId(e) {
      I.connectedWalletId = e;
    },
    click(e) {
      if (I.enabled) {
        const t = {
          type: "CLICK",
          name: e.name,
          userSessionId: I.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        I.events.push(t);
      }
    },
    track(e) {
      if (I.enabled) {
        const t = {
          type: "TRACK",
          name: e.name,
          userSessionId: I.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        I.events.push(t);
      }
    },
    view(e) {
      if (I.enabled) {
        const t = {
          type: "VIEW",
          name: e.name,
          userSessionId: I.userSessionId,
          timestamp: Date.now(),
          data: e,
        };
        I.events.push(t);
      }
    },
  },
  L = y({
    chains: void 0,
    walletConnectUri: void 0,
    isAuth: !1,
    isCustomDesktop: !1,
    isCustomMobile: !1,
    isDataLoaded: !1,
    isUiLoaded: !1,
  }),
  V = {
    state: L,
    subscribe(e) {
      return A(L, () => e(L));
    },
    setChains(e) {
      L.chains = e;
    },
    setWalletConnectUri(e) {
      L.walletConnectUri = e;
    },
    setIsCustomDesktop(e) {
      L.isCustomDesktop = e;
    },
    setIsCustomMobile(e) {
      L.isCustomMobile = e;
    },
    setIsDataLoaded(e) {
      L.isDataLoaded = e;
    },
    setIsUiLoaded(e) {
      L.isUiLoaded = e;
    },
    setIsAuth(e) {
      L.isAuth = e;
    },
  },
  K = y({
    projectId: "",
    mobileWallets: void 0,
    desktopWallets: void 0,
    walletImages: void 0,
    chains: void 0,
    enableAuthMode: !1,
    enableExplorer: !0,
    explorerExcludedWalletIds: void 0,
    explorerRecommendedWalletIds: void 0,
    termsOfServiceUrl: void 0,
    privacyPolicyUrl: void 0,
  }),
  W = {
    state: K,
    subscribe(e) {
      return A(K, () => e(K));
    },
    setConfig(e) {
      var t, s;
      Ve.initialize(),
        V.setChains(e.chains),
        V.setIsAuth(!!e.enableAuthMode),
        V.setIsCustomMobile(!!((t = e.mobileWallets) != null && t.length)),
        V.setIsCustomDesktop(!!((s = e.desktopWallets) != null && s.length)),
        u.setModalVersionInStorage(),
        Object.assign(K, e);
    },
  };
var me = Object.defineProperty,
  te = Object.getOwnPropertySymbols,
  Le = Object.prototype.hasOwnProperty,
  Oe = Object.prototype.propertyIsEnumerable,
  se = (e, t, s) =>
    t in e
      ? me(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  he = (e, t) => {
    for (var s in t || (t = {})) Le.call(t, s) && se(e, s, t[s]);
    if (te) for (var s of te(t)) Oe.call(t, s) && se(e, s, t[s]);
    return e;
  };
const Q = "https://explorer-api.walletconnect.com",
  Z = "wcm",
  q = "js-2.7.0";
async function H(e, t) {
  const s = he({ sdkType: Z, sdkVersion: q }, t),
    o = new URL(e, Q);
  return (
    o.searchParams.append("projectId", W.state.projectId),
    Object.entries(s).forEach(([l, d]) => {
      d && o.searchParams.append(l, String(d));
    }),
    (await fetch(o)).json()
  );
}
const P = {
  async getDesktopListings(e) {
    return H("/w3m/v1/getDesktopListings", e);
  },
  async getMobileListings(e) {
    return H("/w3m/v1/getMobileListings", e);
  },
  async getInjectedListings(e) {
    return H("/w3m/v1/getInjectedListings", e);
  },
  async getAllListings(e) {
    return H("/w3m/v1/getAllListings", e);
  },
  getWalletImageUrl(e) {
    return `${Q}/w3m/v1/getWalletImage/${e}?projectId=${W.state.projectId}&sdkType=${Z}&sdkVersion=${q}`;
  },
  getAssetImageUrl(e) {
    return `${Q}/w3m/v1/getAssetImage/${e}?projectId=${W.state.projectId}&sdkType=${Z}&sdkVersion=${q}`;
  },
};
var ge = Object.defineProperty,
  oe = Object.getOwnPropertySymbols,
  be = Object.prototype.hasOwnProperty,
  ve = Object.prototype.propertyIsEnumerable,
  re = (e, t, s) =>
    t in e
      ? ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  ye = (e, t) => {
    for (var s in t || (t = {})) be.call(t, s) && re(e, s, t[s]);
    if (oe) for (var s of oe(t)) ve.call(t, s) && re(e, s, t[s]);
    return e;
  };
const ne = u.isMobile(),
  O = y({
    wallets: { listings: [], total: 0, page: 1 },
    search: { listings: [], total: 0, page: 1 },
    recomendedWallets: [],
  }),
  Ne = {
    state: O,
    async getRecomendedWallets() {
      const { explorerRecommendedWalletIds: e, explorerExcludedWalletIds: t } =
        W.state;
      if (e === "NONE" || (t === "ALL" && !e)) return O.recomendedWallets;
      if (u.isArray(e)) {
        const o = { recommendedIds: e.join(",") },
          { listings: c } = await P.getAllListings(o),
          l = Object.values(c);
        l.sort((d, _) => {
          const g = e.indexOf(d.id),
            r = e.indexOf(_.id);
          return g - r;
        }),
          (O.recomendedWallets = l);
      } else {
        const { chains: s, isAuth: o } = V.state,
          c = s == null ? void 0 : s.join(","),
          l = u.isArray(t),
          d = {
            page: 1,
            sdks: o ? "auth_v1" : void 0,
            entries: u.RECOMMENDED_WALLET_AMOUNT,
            chains: c,
            version: 2,
            excludedIds: l ? t.join(",") : void 0,
          },
          { listings: _ } = ne
            ? await P.getMobileListings(d)
            : await P.getDesktopListings(d);
        O.recomendedWallets = Object.values(_);
      }
      return O.recomendedWallets;
    },
    async getWallets(e) {
      const t = ye({}, e),
        { explorerRecommendedWalletIds: s, explorerExcludedWalletIds: o } =
          W.state,
        { recomendedWallets: c } = O;
      if (o === "ALL") return O.wallets;
      c.length
        ? (t.excludedIds = c.map((m) => m.id).join(","))
        : u.isArray(s) && (t.excludedIds = s.join(",")),
        u.isArray(o) &&
          (t.excludedIds = [t.excludedIds, o].filter(Boolean).join(",")),
        V.state.isAuth && (t.sdks = "auth_v1");
      const { page: l, search: d } = e,
        { listings: _, total: g } = ne
          ? await P.getMobileListings(t)
          : await P.getDesktopListings(t),
        r = Object.values(_),
        T = d ? "search" : "wallets";
      return (
        (O[T] = { listings: [...O[T].listings, ...r], total: g, page: l ?? 1 }),
        { listings: r, total: g }
      );
    },
    getWalletImageUrl(e) {
      return P.getWalletImageUrl(e);
    },
    getAssetImageUrl(e) {
      return P.getAssetImageUrl(e);
    },
    resetSearch() {
      O.search = { listings: [], total: 0, page: 1 };
    },
  },
  D = y({ open: !1 }),
  F = {
    state: D,
    subscribe(e) {
      return A(D, () => e(D));
    },
    async open(e) {
      return new Promise((t) => {
        const { isUiLoaded: s, isDataLoaded: o } = V.state;
        if (
          (u.removeWalletConnectDeepLink(),
          V.setWalletConnectUri(e == null ? void 0 : e.uri),
          V.setChains(e == null ? void 0 : e.chains),
          ce.reset("ConnectWallet"),
          s && o)
        )
          (D.open = !0), t();
        else {
          const c = setInterval(() => {
            const l = V.state;
            l.isUiLoaded &&
              l.isDataLoaded &&
              (clearInterval(c), (D.open = !0), t());
          }, 200);
        }
      });
    },
    close() {
      D.open = !1;
    },
  };
var we = Object.defineProperty,
  ae = Object.getOwnPropertySymbols,
  Pe = Object.prototype.hasOwnProperty,
  Me = Object.prototype.propertyIsEnumerable,
  ie = (e, t, s) =>
    t in e
      ? we(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[t] = s),
  Ae = (e, t) => {
    for (var s in t || (t = {})) Pe.call(t, s) && ie(e, s, t[s]);
    if (ae) for (var s of ae(t)) Me.call(t, s) && ie(e, s, t[s]);
    return e;
  };
function Ue() {
  return (
    typeof matchMedia < "u" &&
    matchMedia("(prefers-color-scheme: dark)").matches
  );
}
const G = y({ themeMode: Ue() ? "dark" : "light" }),
  le = {
    state: G,
    subscribe(e) {
      return A(G, () => e(G));
    },
    setThemeConfig(e) {
      const { themeMode: t, themeVariables: s } = e;
      t && (G.themeMode = t), s && (G.themeVariables = Ae({}, s));
    },
  },
  M = y({ open: !1, message: "", variant: "success" }),
  Ge = {
    state: M,
    subscribe(e) {
      return A(M, () => e(M));
    },
    openToast(e, t) {
      (M.open = !0), (M.message = e), (M.variant = t);
    },
    closeToast() {
      M.open = !1;
    },
  };
class Se {
  constructor(t) {
    (this.openModal = F.open),
      (this.closeModal = F.close),
      (this.subscribeModal = F.subscribe),
      (this.setTheme = le.setThemeConfig),
      le.setThemeConfig(t),
      W.setConfig(t),
      this.initUi();
  }
  async initUi() {
    if (typeof window < "u") {
      await _e(
        () => import("./index-b3d65f01.js"),
        [
          "assets/index-b3d65f01.js",
          "assets/index-29f8386e.js",
          "assets/index-3e4fdf76.css",
        ]
      );
      const t = document.createElement("wcm-modal");
      document.body.insertAdjacentElement("beforeend", t), V.setIsUiLoaded(!0);
    }
  }
}
const je = Object.freeze(
  Object.defineProperty(
    { __proto__: null, WalletConnectModal: Se },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export {
  u as C,
  Ne as E,
  F as M,
  V as O,
  ce as R,
  le as T,
  Ge as a,
  Ve as b,
  W as c,
  je as i,
};
