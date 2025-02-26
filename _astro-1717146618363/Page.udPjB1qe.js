import {
  u as rt,
  v as $t,
  w as Me,
  T as At,
  a as Ae,
  s as lr,
  b as ts,
  c as $u,
  r as Ti,
} from "./scrollToSection.CZ3LxyyR.js";
import {
  i as Rr,
  r as M,
  c as u,
  _ as oe,
  d as re,
  o as Ee,
  a as kt,
  b as c,
  e as f,
  f as E,
  t as X,
  g as O,
  n as Dt,
  h as Z,
  j as Be,
  F as ge,
  k as we,
  l as je,
  w as ue,
  m as Re,
  p as He,
  q,
  s as Oe,
  u as Ge,
  v as nt,
  x as te,
  y as fe,
  z as mn,
  A as Hr,
  B as Nr,
  C as Le,
  D as Rt,
  E as Ht,
  G as qn,
  H as as,
  I as va,
  J as St,
  K as x,
  L as ns,
  M as xn,
  N as Vu,
  O as Uu,
  P as os,
  Q as rs,
  R as sr,
  S as Ua,
  T as Et,
  U as Ci,
  V as Yu,
  W as Fu,
  X as Wu,
} from "./_plugin-vue_export-helper.x4FAPkXN.js";
import {
  S as Zt,
  L as ur,
  a as is,
  M as cr,
  D as qu,
  b as pa,
  c as gn,
  E as ta,
  d as Ba,
  e as ls,
  f as ss,
  Z as Gu,
  g as ju,
  h as zu,
  P as us,
  i as Ku,
  A as Qu,
  j as Zu,
  k as Xu,
  l as $r,
  I as Pi,
  m as Ao,
  n as Ju,
  o as ec,
  p as tc,
  q as Ii,
  r as Rn,
  s as Hn,
  t as Bo,
  u as cs,
  v as ac,
  w as nc,
  x as oc,
  y as rc,
  z as Ei,
  B as ds,
  C as Di,
  F as ic,
  G as lc,
  H as sc,
  J as dr,
  K as uc,
  N as cc,
  O as dc,
  Q as Mi,
  R as mc,
  T as ms,
  U as In,
  V as Oi,
  W as Ai,
  X as gc,
  Y as vc,
  _ as pc,
  $ as fc,
  a0 as hc,
  a1 as gs,
  a2 as yc,
  a3 as bc,
  a4 as _c,
  a5 as wc,
  a6 as Bi,
  a7 as kc,
  a8 as Lo,
} from "./index.C06LnVPl.js";
/* empty css                        */ import {
  g as vs,
  a as Sc,
  s as Li,
  b as Tc,
  i as ps,
  c as Na,
  d as Cc,
} from "./addDocumentElements.BHfnI-Jc.js";
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ var xi;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(xi || (xi = {}));
var Ri;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(Ri || (Ri = {}));
var Hi;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(Hi || (Hi = {}));
const Pc = Symbol(""),
  Ic = Symbol("");
function Ec() {
  return Rr(Pc);
}
function Dc() {
  return Rr(Ic);
}
const Ni = M(null),
  et = M({}),
  Ze = () => {
    const e = (F) => {
        Ni.value = F;
      },
      n = (F) => {
        et.value = F;
      },
      a = u(() => et.value.pages || {}),
      t = u(() => et.value.blocks),
      o = u(() => et.value.elements),
      i = u(() => et.value.nav),
      r = u(() => et.value.homePageId),
      l = u(() => et.value.isNavHidden),
      s = u(() => et.value.cookieBannerAcceptText),
      m = u(() => et.value.cookieBannerDisclaimer),
      g = u(() => et.value.cookieBannerDeclineText),
      d = u(() => et.value.blogReadingTimeText),
      v = u(() => et.value.meta),
      h = u(() => et.value.metaTitle),
      y = u(() => et.value.forms),
      k = u(() => et.value.styles),
      T = u(() => et.value.domain),
      _ = u(() => et.value.siteId),
      b = u(() => et.value.ecommerceShoppingCart),
      A = u(() => et.value.blogCategories),
      D = u(() => et.value.languageSwitcherLanguages),
      I = u(() => et.value.currentPageId),
      R = u(() => a.value[I.value]),
      L = u(() => et.value.currentLocale),
      K = u(() => et.value.languageKeys),
      W = u(() => et.value.ecwidPages),
      C = ({ pageId: F }) => {
        if (!a.value[F]) return null;
        const Q = a.value[F].slug;
        return [Zt, v.value.defaultLocale].includes(L.value)
          ? r.value === F
            ? "/"
            : `/${Q}`
          : r.value === F
          ? `/${L.value}`
          : `/${L.value}/${Q}`;
      };
    return {
      website: Ni,
      pageData: et,
      pages: a,
      blocks: t,
      elements: o,
      nav: i,
      homePageId: r,
      isNavHidden: l,
      cookieBannerAcceptText: s,
      cookieBannerDisclaimer: m,
      cookieBannerDeclineText: g,
      blogReadingTimeText: d,
      meta: v,
      metaTitle: h,
      forms: y,
      styles: k,
      domain: T,
      siteId: _,
      ecommerceShoppingCart: b,
      blogCategories: A,
      languageSwitcherLanguages: D,
      currentPageId: I,
      currentLocale: L,
      languageKeys: K,
      ecwidPages: W,
      currentPageData: R,
      setWebsite: e,
      setPageData: n,
      getPagePathFromId: C,
      getButtonHref: ({
        isFormButton: F,
        linkedPageId: Q,
        linkType: B,
        href: P,
      }) => (F ? null : P || (B === ur && Q ? C({ pageId: Q }) : P)),
    };
  },
  $i = M(!0),
  fs = () => {
    const e = (n) => {
      $i.value = n;
    };
    return { hasUserScrolled: u(() => !$i.value), setIntersectingState: e };
  },
  Mc = re({
    __name: "StickyTrigger",
    setup(e, { expose: n }) {
      n();
      const a = { threshold: 1 },
        t = M(null),
        o = M(null),
        { setIntersectingState: i } = fs();
      Ee(() => {
        (o.value = new IntersectionObserver(([{ isIntersecting: l }]) => {
          i(l);
        }, a)),
          t.value && o.value.observe(t.value);
      }),
        kt(() => {
          o.value?.disconnect();
        });
      const r = {
        OBSERVER_OPTIONS: a,
        stickyTriggerRef: t,
        observer: o,
        setIntersectingState: i,
      };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  Oc = { ref: "stickyTriggerRef", class: "sticky-trigger" };
function Ac(e, n, a, t, o, i) {
  return c(), f("div", Oc, null, 512);
}
const Bc = oe(Mc, [["render", Ac]]),
  Vi = 1600,
  Ui = 1224,
  Yi = 12,
  Lc = 1224,
  fa = 1920,
  xc = (e, n) => {
    const [a, t, o, i] = n.split("/").map(Number.parseFloat),
      { styles: r } = e.settings ?? {},
      l = Number.parseFloat(r?.["row-size"]) ?? 48,
      s = Number.parseFloat(r?.["column-gap"]) ?? 24,
      m = Number.parseFloat(r?.["row-gap"]) ?? 16,
      g = (Ui - (Yi - 1) * s) / Yi,
      d = (fa - Vi) / 2 + s,
      v = (Vi - Ui) / 2 - s;
    let h = fa;
    const y = o - a,
      k = y * l + (y - 1) * m;
    return (
      t !== 1 && (h -= d),
      i !== 17 && (h -= d),
      t > 2 && (h -= v),
      i < 16 && (h -= v),
      t > 3 && (h -= (t - 3) * (g + s)),
      i < 15 && (h -= (15 - i) * (g + s)),
      i - t === 1 && (h = g),
      { width: h, height: k }
    );
  },
  Fi = (e) => Object.prototype.toString.call(e) === "[object Object]",
  an = (e) => {
    const n = e.split(" "),
      a = n.length;
    if (a < 1 || a > 4) throw new Error(`Cannot parse ${a} sides`);
    return ((o, i = o, r = o, l = i) => ({
      top: o,
      right: i,
      bottom: r,
      left: l,
    }))(...n);
  },
  Rc = ["padding", "m-padding", "block-padding"],
  Hc = ["border-radius"],
  Vt = (e, n = "") =>
    Fi(e)
      ? Object.entries(e).reduce((a, [t, o]) => {
          const i = n ? `${n}-${t}` : `--${t}`;
          if (Fi(o)) return { ...a, ...Vt(o, i) };
          const r = Rc.includes(t)
            ? Object.entries(an(o)).reduce(
                (l, [s, m]) => ({ ...l, [`${i}-${s}`]: m, [i]: o }),
                {}
              )
            : { [i]: o };
          return { ...a, ...(Hc.includes(t) ? { [i]: `${o}px` } : r) };
        }, {})
      : {},
  xo = M([]),
  hs = () => {
    const e = u(() => xo.value.reduce((o, i) => o + i.quantity, 0)),
      n = () => {
        const o = window.Ecwid.Controller.getEntryPage();
        window.Ecwid.openPage(o.type.toLowerCase(), { id: o.categoryId });
      },
      a = () => {
        window.Ecwid && window.Ecwid.openPage("cart");
      },
      t = (o) => {
        xo.value = o;
      };
    return {
      ecwidCartItems: u(() => xo.value),
      ecwidCartItemCount: e,
      openCart: a,
      setEcwidCartItems: t,
      openEcwidHomepage: n,
    };
  },
  ys = (e, n, a) =>
    !e || !n
      ? null
      : e === "assets"
      ? `/${n}`
      : e === "unsplash"
      ? `https://images.unsplash.com/${n}`
      : n,
  Nc = /^[\p{L}\p{N}+._-]{1,80}@[\p{L}\p{N}.-]{1,80}\.[A-Za-z]{1,15}$/u,
  $c = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
  Vc = /^\d+$/,
  Uc = (e) =>
    typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
  Ja = (e) => {
    const n = e.split(/[/\\]/).pop(),
      a = n.lastIndexOf(".");
    return n === "" || a < 1 ? "" : n.slice(a + 1).toLowerCase();
  },
  Yc = [
    is,
    "https://assets.zyrosite.space",
    "https://assets.zyrosite.com",
    "https://cdn.zyrosite.com",
  ],
  Fc = "https://images.unsplash.com",
  Wc = "cdn-cgi/image",
  Vr = [{ width: 360, height: 640 }],
  Ur = [1, 2, 2.625, 3],
  qc = [{ width: 1440 }, { width: 1920 }],
  Yr = [1, 2],
  Fr = 16,
  Nn = (e, n = Fr) =>
    [`(min-width: ${cr}px) ${e}px`, `calc(100vw - ${n * 2}px)`].join(", "),
  Gc = (e, n, a = {}) => {
    const t = a.fit || (a.shouldContain ? "scale-down" : "crop"),
      o = [
        "format=auto",
        a.width && `w=${a.width}`,
        a.height && `h=${a.height}`,
        `fit=${t}`,
        a.isLossless && "q=100",
        a.format && `f=${a.format}`,
        a.trim && `trim=${a.trim}`,
        a.quality && !a.isLossless && `q=${a.quality}`,
      ]
        .filter((r) => !!r)
        .join(",");
    let [, i] = n.split(e);
    for (; i.startsWith("/"); ) i = i.replace("/", "");
    return `${e}/${Wc}/${o}/${i}`;
  },
  jc = (e, n = {}) => {
    const a = new URL(e);
    return (
      a.searchParams.set("auto", n.format || "format"),
      a.searchParams.set("fit", n.shouldContain ? "clip" : "crop"),
      n.width && a.searchParams.set("w", n.width),
      n.height && a.searchParams.set("h", n.height),
      n.isLossless && a.searchParams.set("q", 100),
      a.href
    );
  },
  st = (e, n, a, t = {}) => {
    const o = ys(e, n, a);
    if (!o) return null;
    if (Ja(o) === "svg" || Ja(o) === "ico" || Ja(o) === "gif") return o;
    const i = Yc.find((r) => o.includes(r));
    return i ? Gc(i, o, t) : o.includes(Fc) ? jc(o, t) : o;
  },
  ha = (e, n, a, t = {}) => {
    const o = qc
      .map((l) =>
        Yr.map((s) => {
          const m = Math.round(l.width * s);
          return `${st(e, n, a, { ...t, width: m })} ${m}w`;
        })
      )
      .join(",");
    return `${Vr.map((l) =>
      Ur.map((s) => {
        const m = Math.round(l.width * s),
          g = { ...t, width: m };
        return (
          t.isMobileFullScreen && (g.height = Math.round(l.height * s)),
          `${st(e, n, a, g)} ${m}w`
        );
      })
    ).join(",")},${o}`;
  },
  La = (e, n, a, t = {}) => {
    if (!t.width) return ha(e, n, a, t);
    const o = Yr.map((s) => {
        const m = Math.round(t.width * s),
          g = Math.round(t.height * s);
        return `${st(e, n, a, { ...t, width: m, height: g })} ${m}w`;
      }).join(","),
      i = (t.mobilePadding ?? Fr) * 2;
    return `${Vr.map((s) => {
      const m = s.width - i;
      return Ur.map((g) => {
        const d = t.width / t.height,
          v = Math.round(m * g),
          h = Math.round(v / d);
        return `${st(e, n, a, { ...t, width: v, height: h })} ${v}w`;
      }).join(",");
    }).join(",")},${o}`;
  },
  zc = (e, n, a, t = {}) => {
    if (!t.width) return ha(e, n, a, t);
    const o = Yr.map((l) => {
        const s = Math.round(t.width * l),
          m = Math.round(t.height * l);
        return `${st(e, n, a, { ...t, width: s, height: m })} ${s}w`;
      }).join(","),
      i = (t.mobilePadding ?? Fr) * 2;
    return `${Vr.map((l) => {
      const s = Math.round(
        (l.width - i + t.columnGap) / t.columnCount - t.columnGap
      );
      return Ur.map((m) => {
        const g = Math.round(s * m),
          d = Math.round(s * m);
        return `${st(e, n, a, {
          ...t,
          width: d,
          height: !t.isMasonryLayout && d,
        })} ${g}w`;
      }).join(",");
    }).join(",")},${o}`;
  },
  Kc = () => {
    const { meta: e } = Ze(),
      n = M("z-cookies-consent"),
      a = M("1"),
      t = u(() => !!a.value),
      o = u(() => a.value === "1"),
      i = u(() => a.value !== "0");
    return (
      Ee(() => {
        const s = vs(window.location.hostname);
        (n.value = `z-cookies-consent-${s}`), (a.value = Sc(n.value));
      }),
      {
        acceptCookies: () => {
          Li(n.value, 1, 365),
            (a.value = "1"),
            Tc({ siteMeta: e.value, areCookiesAllowed: i.value });
        },
        declineCookies: () => {
          Li(n.value, 0, 1), (a.value = "0");
        },
        hasUserConsentedCookieBanner: t,
        hasUserAcceptedCookies: o,
        areCookiesAllowed: i,
      }
    );
  },
  Qc = re({
    __name: "CookieBanner",
    props: {
      disclaimer: { type: String, required: !0 },
      acceptText: { type: String, default: "Accept" },
      declineText: { type: String, default: "Decline" },
      siteMeta: { type: Object, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
        } = Kc(),
        i = {
          acceptCookies: a,
          declineCookies: t,
          hasUserConsentedCookieBanner: o,
          get isAppPrerendering() {
            return ps;
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Zc = { key: 0, class: "cookie-banner" },
  Xc = { class: "cookie-banner__frame" },
  Jc = { class: "cookie-banner__text" },
  ed = { class: "cookie-banner__controls" };
function td(e, n, a, t, o, i) {
  return !t.isAppPrerendering && !t.hasUserConsentedCookieBanner
    ? (c(),
      f("div", Zc, [
        E("div", Xc, [
          E("p", Jc, X(a.disclaimer), 1),
          E("div", ed, [
            E(
              "button",
              {
                class: "control-button primary",
                onClick:
                  n[0] ||
                  (n[0] = (...r) => t.acceptCookies && t.acceptCookies(...r)),
              },
              X(a.acceptText),
              1
            ),
            E(
              "button",
              {
                class: "control-button",
                onClick:
                  n[1] ||
                  (n[1] = (...r) => t.declineCookies && t.declineCookies(...r)),
              },
              X(a.declineText),
              1
            ),
          ]),
        ]),
      ]))
    : O("", !0);
}
const ad = oe(Qc, [["render", td]]),
  nd = (e) => {
    const n = e.colors.map((a) => a.value).join(", ");
    return `linear-gradient(${e.angle}deg, ${n})`;
  },
  od = re({
    __name: "BlockBackground",
    props: {
      type: { default: "color" },
      alt: {},
      overlayOpacity: {},
      src: {},
      srcset: {},
      isEager: { type: Boolean },
      gradient: {},
      color: {},
      isFixed: { type: Boolean },
      isInPreviewMode: { type: Boolean, default: !1 },
      isMobile: { type: Boolean, default: !1 },
      isOpacityDisabled: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        rt((d) => ({
          "0dfb3fc4": t.value,
          c548f400: o.value.xStart,
          c1df42c2: o.value.yStart,
          "00b219f9": o.value.xEnd,
          "3cd0c34c": r.value,
        }));
      const a = e,
        t = u(() =>
          a.type === "gradient" && a.gradient
            ? nd(a.gradient)
            : a.isOpacityDisabled
            ? a.type === "color"
              ? a.color
              : "rgb(255, 255, 255)"
            : a.type === "color"
            ? a.color
            : "transparent"
        ),
        o = u(() => {
          const v = (((a.gradient?.angle || 0) + 90) * Math.PI) / 180,
            h = `${Math.round(50 - 50 * Math.cos(v))}%`,
            y = `${Math.round(50 - 50 * Math.sin(v))}%`,
            k = `${Math.round(50 + 50 * Math.cos(v))}%`,
            T = `${Math.round(50 + 50 * Math.sin(v))}%`;
          return { xStart: h, yStart: y, xEnd: k, yEnd: T };
        }),
        i = u(
          () => a.type === "image" && !a.isOpacityDisabled && a.overlayOpacity
        ),
        r = u(() =>
          a.type === "image" && !a.isOpacityDisabled && a.overlayOpacity
            ? a.overlayOpacity
            : 0
        ),
        l = M(null),
        s = M(Rr("mobileFrame")),
        m = u(() => {
          if (a.isInPreviewMode && a.isMobile && a.isFixed && s.value) {
            const d = s.value.getBoundingClientRect();
            return {
              height: `${d.height}px`,
              width: `${d.width}px`,
              top: `${d.top}px`,
              left: "50%",
              transform: "translate(-50%, 0)",
            };
          }
          return {};
        });
      Ee(() => {
        Dt(() => {
          l.value?.classList.add("transition-with-bg");
        });
      });
      const g = {
        props: a,
        backgroundColor: t,
        gradientBackgroundPosition: o,
        isBackgroundOverlayShown: i,
        backgroundOverlayOpacity: r,
        blockBackgroundRef: l,
        mobileFrame: s,
        mobilePreviewStyles: m,
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  rd = ["alt", "src", "srcset", "loading"];
function id(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      {
        ref: "blockBackgroundRef",
        class: Z([
          "block-background",
          {
            "block-background--fixed": a.isFixed,
            "block-background--animated-gradient":
              a.type === "gradient" && a.gradient?.isAnimated,
          },
        ]),
      },
      [
        a.type === "image" && a.src
          ? (c(),
            f(
              "img",
              {
                key: a.src,
                alt: a.alt,
                src: a.src,
                srcset: a.srcset,
                width: "100vw",
                sizes: "(max-width: 500px) 800px, 100vw",
                loading: a.isEager ? "eager" : "lazy",
                class: Z([
                  "block-background__image",
                  { "block-background__image--fixed": a.isFixed },
                ]),
                style: Be(t.mobilePreviewStyles),
              },
              null,
              14,
              rd
            ))
          : O("", !0),
        t.isBackgroundOverlayShown
          ? (c(),
            f(
              "div",
              {
                key: 1,
                class: Z([
                  "block-background__overlay",
                  { "block-background__overlay--fixed": a.isFixed },
                ]),
              },
              null,
              2
            ))
          : O("", !0),
      ],
      2
    )
  );
}
const Wr = oe(od, [["render", id]]),
  ld = re({
    props: {
      categories: { type: Array, default: () => [] },
      blogCategories: { type: Object, default: () => ({}) },
    },
    methods: {
      getCategoryNameById(e) {
        return this.blogCategories[e]?.name?.toUpperCase();
      },
    },
  }),
  sd = { class: "categories" },
  ud = ["onClick"];
function cd(e, n, a, t, o, i) {
  return (
    c(),
    f("p", sd, [
      (c(!0),
      f(
        ge,
        null,
        we(
          e.categories,
          (r, l) => (
            c(),
            f(
              "span",
              {
                key: r,
                class: "categories__item",
                onClick: (s) => e.$emit("filter-category", e.categories[l]),
              },
              X(e.getCategoryNameById(r)),
              9,
              ud
            )
          )
        ),
        128
      )),
    ])
  );
}
const bs = oe(ld, [
    ["render", cd],
    ["__scopeId", "data-v-17a7aef3"],
  ]),
  dd = re({
    __name: "BlockBlogListItemMeta",
    props: {
      authorName: { type: String, default: "" },
      minutesAmount: { type: String, default: "0" },
      blogReadingTimeText: { type: String, default: "" },
      date: { type: String, default: "" },
      showAvatar: { type: Boolean, default: !0 },
      showName: { type: Boolean, default: !0 },
      showDate: { type: Boolean, default: !0 },
      showMinutes: { type: Boolean, default: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = {
        get DEFAULT_MIN_READ_TEXT() {
          return qu;
        },
      };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  md = { class: "blog-list-item-meta" },
  gd = { class: "font-secondary" },
  vd = { class: "blog-list-item-meta__author-name" },
  pd = { class: "blog-list-item-meta__subtitle" },
  fd = { key: 0 },
  hd = { key: 1 };
function yd(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f("div", md, [
      E("div", gd, [
        ue((c(), f("p", vd, [Re(X(a.authorName), 1)])), [
          [$t, a.showName],
          [r, "blog-author"],
        ]),
        ue(
          E(
            "p",
            pd,
            [
              a.showDate && a.date
                ? (c(), f("span", fd, X(a.date), 1))
                : O("", !0),
              a.showMinutes
                ? (c(),
                  f(
                    "span",
                    hd,
                    X(
                      `${a.minutesAmount} ${
                        a.blogReadingTimeText || t.DEFAULT_MIN_READ_TEXT
                      }`
                    ),
                    1
                  ))
                : O("", !0),
            ],
            512
          ),
          [[$t, a.showDate || a.showMinutes]]
        ),
      ]),
    ])
  );
}
const _s = oe(dd, [
    ["render", yd],
    ["__scopeId", "data-v-88ffe988"],
  ]),
  ws = (e) => new Date(e).toLocaleDateString("en-US"),
  qr = re({
    name: "BlockBlogHeader",
    components: { BlockBlogListItemMeta: _s, BlockBlogListItemCategories: bs },
    props: {
      data: { type: Object, required: !0 },
      currentBlogPage: { type: Object, required: !0 },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    setup(e) {
      const a = u(() => `${e.data.settings.blogTitleFontSize || 32}px`);
      return {
        getFormattedNumericDate: ws,
        DATA_ATTRIBUTE_ANIMATION_ROLE: pa,
        DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: gn,
        blogTitleTextSize: a,
      };
    },
    computed: {
      categories() {
        return this.currentBlogPage?.categories ?? [];
      },
      meta() {
        return this.currentBlogPage?.meta ?? {};
      },
      authorName() {
        return this.meta?.authorName;
      },
      shownItems() {
        return this.data?.settings?.shownItems ?? {};
      },
      areCategoriesShown() {
        return this.shownItems.categories && this.categories.length;
      },
    },
  }),
  Wi = () => {
    rt((e) => ({ "21ab201a": e.blogTitleTextSize }));
  },
  qi = qr.setup;
qr.setup = qi ? (e, n) => (Wi(), qi(e, n)) : Wi;
const bd = { class: "block-blog-header__content" },
  _d = { class: "font-primary block-blog-header__title" },
  wd = { key: 0, class: "font-secondary block-blog-header__description" };
function kd(e, n, a, t, o, i) {
  const r = He("BlockBlogListItemCategories"),
    l = He("BlockBlogListItemMeta"),
    s = je("qa");
  return ue(
    (c(),
    f(
      "div",
      nt({
        class: "block-blog-header",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
      }),
      [
        E("div", bd, [
          ue((c(), f("h1", _d, [Re(X(e.meta.title), 1)])), [
            [s, "blog-label-posttitle"],
          ]),
          e.shownItems.description
            ? ue((c(), f("p", wd, [Re(X(e.meta.description), 1)])), [
                [s, "blog-label-postdescription"],
              ])
            : O("", !0),
          e.areCategoriesShown
            ? ue(
                (c(),
                q(
                  r,
                  {
                    key: 1,
                    class: "font-secondary",
                    categories: e.categories,
                    "blog-categories": e.blogCategories,
                  },
                  null,
                  8,
                  ["categories", "blog-categories"]
                )),
                [[s, "blog-label-category"]]
              )
            : O("", !0),
          Oe(
            l,
            Ge(
              {
                authorName: e.authorName,
                minutesAmount: e.currentBlogPage.minutesToRead,
                date: e.getFormattedNumericDate(e.currentBlogPage.date),
                showAvatar: e.shownItems.avatar,
                showName: e.shownItems.authorFullName,
                showDate: e.shownItems.date,
                showMinutes: e.shownItems.minutesToRead,
              },
              { "blog-reading-time-text": e.blogReadingTimeText }
            ),
            null,
            16,
            ["blog-reading-time-text"]
          ),
        ]),
      ],
      16
    )),
    [[s, "blog-postinformation"]]
  );
}
const Sd = oe(qr, [
    ["render", kd],
    ["__scopeId", "data-v-dfe4e670"],
  ]),
  mr = M(!1),
  Gi = M(null),
  gr = ({ blockId: e }) => ({
    isSearchOpenedInCurrentBlock: u(() => Gi.value === e && mr.value),
    toggleSearchDropdown: (t) => {
      (Gi.value = e), (mr.value = t);
    },
  }),
  En = 16,
  la = 1224,
  Xt = 360,
  ks = Xt - En * 2,
  ji = 16,
  Td = re({
    __name: "BlockLayoutWrapper",
    props: {
      isMobileLegacy: { type: Boolean, default: !1 },
      isBlockResponsive: { type: Boolean, default: !1 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(),
        rt((s) => ({
          c467b54c: i.value,
          "2c660f9c": o.value,
          "6ced7b1e": t.value,
          "1f9bbfe2": r.value,
        }));
      const a = e,
        t = u(() =>
          a.isBlockResponsive && !a.isInPreviewMode
            ? `0 ${(En * 100) / Xt}vw`
            : `0 ${En}px`
        ),
        o = u(() => `${Xt}px`),
        i = u(() => `${la}px`),
        r = u(() => `0 ${En}px`),
        l = {
          props: a,
          mobileBlockPaddingCSSVar: t,
          mobileMaxWidthCSSVar: o,
          maxWidthCSSVar: i,
          tabletBlockPaddingCSSVar: r,
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function Cd(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      {
        class: Z([
          "block-layout",
          {
            "block-layout--legacy": a.isMobileLegacy,
            "block-layout--layout": !a.isMobileLegacy,
            "block-layout--forcedOnTop": a.isForcedOnTop,
          },
        ]),
      },
      [te(e.$slots, "default")],
      2
    )
  );
}
const Pd = oe(Td, [["render", Cd]]),
  zi = ({ blockElements: e, elementPositionKey: n }) =>
    e?.length ? Math.max(...e.map((a) => a[n].top + a[n].height)) : 0,
  Id = [ls, ss],
  Ed = ({ lowestElementBottom: e, sectionMinHeight: n }) => {
    const t = e >= n ? 0 : n - e;
    return e ? `${t}px` : "1fr";
  },
  io = ({ blockElementsWithPosition: e }) => {
    try {
      const n = e.flatMap(({ position: t }) => [t.top, t.height + t.top]);
      return [...new Set([0, ...n])].sort((t, o) => t - o);
    } catch (n) {
      console.error(n);
    }
  },
  vr = ({
    rowTopsUniqueSorted: e,
    columnsLeftUniqueSorted: n,
    elementPosition: a,
  }) => {
    const { top: t, left: o, width: i, height: r } = a,
      l = e.indexOf(t) + 1,
      s = e.indexOf(t + r) + 1,
      m = n.indexOf(o) + 1,
      g = n.indexOf(o + i) + 1;
    return { rowStart: l, rowEnd: s, columnStart: m, columnEnd: g };
  },
  lo = ({ blockElementsWithPosition: e, blockWidth: n }) => {
    const a = e.flatMap(({ position: o }) => [o.left, o.width + o.left]);
    return [...new Set([0, ...a, n])].sort((o, i) => o - i);
  },
  $n = ({ blockElements: e, elementPositionKey: n }) =>
    e.map((a) => ({ ...a, position: a[n] })),
  Ki = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
  }) => {
    const t = n === ta ? ks : la,
      o = $n({ blockElements: e, elementPositionKey: n });
    return lo({ blockElementsWithPosition: o, blockWidth: t })
      .map((s, m, g) => (m === 0 ? s : s - g[m - 1]))
      .filter((s) => s !== 0)
      .map((s) => (a ? `${(s / t) * 100}%` : `${s}px`))
      .join(" ");
  },
  Dd = ({ gridRows: e }) => e.filter((n) => n !== 0),
  Md = ({ gridRows: e }) => e.map((n) => `${n}px`),
  Od = ({ gridRows: e }) => e.map((n) => `minmax(${n}px, auto)`),
  Ad = ({ gridRows: e, responsiveRows: n, isMobile: a }) =>
    e.map((t, o) =>
      n.includes(o + 1) ? "auto" : `${(t * 100) / (a ? Xt : la)}vw`
    ),
  Ro = ({ gridRows: e, lastRowHeight: n }) => `${e.join(" ")} ${n}`,
  Zn = ({
    blockElements: e,
    elementPositionKey: n,
    buildResponsiveGrid: a,
    responsiveRows: t,
    lowestElementBottom: o,
    sectionMinHeight: i,
  }) => {
    const r = n === ta,
      l = $n({ blockElements: e, elementPositionKey: n }),
      m = io({ blockElementsWithPosition: l }).map((h, y, k) =>
        y === 0 ? h : h - k[y - 1]
      ),
      g = Ed({ lowestElementBottom: o, sectionMinHeight: i }),
      d = Dd({ gridRows: m });
    if (!a) {
      const h = Md({ gridRows: d });
      return Ro({ gridRows: h, lastRowHeight: g });
    }
    if (!t) {
      const h = Od({ gridRows: d });
      return Ro({ gridRows: h, lastRowHeight: g });
    }
    const v = Ad({ gridRows: d, responsiveRows: t, isMobile: r });
    return Ro({ gridRows: v, lastRowHeight: g });
  },
  Qi = ({ blockElements: e, elementPositionKey: n }) => {
    const a = $n({ blockElements: e, elementPositionKey: n }),
      t = io({ blockElementsWithPosition: a }),
      o = lo({ blockElementsWithPosition: a, blockWidth: n === ta ? ks : la });
    return e
      .filter((i) => !Id.includes(i.type))
      .reduce((i, r) => {
        const { rowEnd: l, rowStart: s } = vr({
            rowTopsUniqueSorted: t,
            columnsLeftUniqueSorted: o,
            elementPosition: r[n],
          }),
          m = l > s ? l - s : 1,
          g = [...new Array(m).keys()].map((d, v) => s + v);
        return i.some((d) => g.includes(d)) ? i : [...i, l - 1];
      }, []);
  },
  Bd = (e, n) => {
    const a = $n({ blockElements: e, elementPositionKey: Ba }),
      t = io({ blockElementsWithPosition: a }),
      o = lo({ blockElementsWithPosition: a, blockWidth: la }),
      i = $n({ blockElements: e, elementPositionKey: ta }),
      r = io({ blockElementsWithPosition: i }),
      l = lo({ blockElementsWithPosition: i, blockWidth: la });
    return e.map((s) => {
      const {
          rowStart: m,
          rowEnd: g,
          columnStart: d,
          columnEnd: v,
        } = vr({
          rowTopsUniqueSorted: t,
          columnsLeftUniqueSorted: o,
          elementPosition: s.desktop,
        }),
        {
          rowStart: h,
          rowEnd: y,
          columnStart: k,
          columnEnd: T,
        } = vr({
          rowTopsUniqueSorted: r,
          columnsLeftUniqueSorted: l,
          elementPosition: s.mobile,
        });
      return {
        ...s,
        settings: {
          ...s.settings,
          styles: {
            ...(s.settings?.styles || {}),
            "z-index": n.indexOf(s.elementId) + 1,
            "grid-row": `${m}/${g}`,
            "grid-column": `${d}/${v}`,
            "m-grid-row": `${h}/${y}`,
            "m-grid-column": `${k}/${T}`,
          },
        },
      };
    });
  },
  pr = ({
    blockData: e,
    siteElements: n,
    shouldBuildResponsive: a = !0,
  } = {}) => {
    const t = M(a),
      o = u(() =>
        e.value.components.map((D) => ({ ...n.value[D], elementId: D }))
      ),
      i = u(() =>
        o?.value?.length
          ? zi({ blockElements: o.value, elementPositionKey: ta })
          : null
      ),
      r = u(() =>
        o?.value?.length
          ? zi({ blockElements: o.value, elementPositionKey: Ba })
          : null
      ),
      l = u(() =>
        e.value.mobile?.minHeight && i.value
          ? "auto"
          : `${e.value.mobile?.minHeight || ji}px`
      ),
      s = u(() =>
        e.value.desktop?.minHeight && r.value
          ? "auto"
          : `${e.value.desktop?.minHeight}px`
      ),
      m = u(() => e.value.components.some((D) => !n.value[D].mobile)),
      g = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: Ba,
          buildResponsiveGrid: t.value,
        })
      ),
      d = u(() =>
        Ki({
          blockElements: o.value,
          elementPositionKey: Ba,
          buildResponsiveGrid: t.value,
        })
      ),
      v = u(() =>
        Ki({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
        })
      ),
      h = u(() => Qi({ blockElements: o.value, elementPositionKey: ta })),
      y = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
          responsiveRows: h.value,
          lowestElementBottom: i.value,
          sectionMinHeight: e.value.mobile?.minHeight,
        })
      ),
      k = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: ta,
          buildResponsiveGrid: t.value,
        })
      ),
      T = u(() => Qi({ blockElements: o.value, elementPositionKey: Ba })),
      _ = u(() =>
        Zn({
          blockElements: o.value,
          elementPositionKey: Ba,
          buildResponsiveGrid: t.value,
          responsiveRows: T.value,
          lowestElementBottom: r.value,
          sectionMinHeight: e.value.desktop?.minHeight,
        })
      ),
      b = u(() => Bd(o.value, e.value.zindexes)),
      A = u(() => ({
        "--m-grid-template-rows": y.value,
        "--t-grid-template-rows": k.value,
        "--small-desktop-grid-template-rows": _.value,
        "--grid-template-rows": g.value,
        "--m-grid-template-columns": v.value,
        "--grid-template-columns": d.value,
        "--m-block-min-height": l.value,
        "--t-block-min-height": `${e.value.mobile?.minHeight || ji}px`,
        "--small-desktop-block-min-height": s.value,
        "--block-min-height": `${e.value.desktop.minHeight}px`,
      }));
    return {
      blockElements: o,
      layoutElements: b,
      buildResponsiveGrid: t,
      layoutCSSVars: A,
      isMobileLegacy: m,
    };
  },
  Ld = re({
    name: "LayoutElementWrapper",
    props: {
      elementData: { type: Object, required: !0 },
      isForcedOnTop: { type: Boolean, default: !1 },
      isMobileLegacy: { type: Boolean, default: !1 },
      isMobileView: { type: Boolean, default: !1 },
    },
    computed: {
      settings() {
        return this.elementData.settings;
      },
      styles() {
        return this.settings.styles;
      },
      innerBackgroundValue() {
        const { innerBackground: e } = this.elementData;
        if (!e) return {};
        const n = e[e.current];
        return e.current !== "image"
          ? { "--gridItemInnerBackground": n }
          : {
              "--gridItemInnerBackground": `url(${n})`,
              "--gridItemInnerBackgroundOverlayOpacity":
                "overlay-opacity" in e ? e["overlay-opacity"] : null,
            };
      },
      isHiddenDesktop() {
        return this.elementData.desktop.isHidden;
      },
      isHiddenMobile() {
        return this.elementData.mobile.isHidden;
      },
      computedStyles() {
        return {
          ...Vt(this.styles),
          ...this.innerBackgroundValue,
          ...(this.isHiddenDesktop &&
            !this.isMobileView && { "--hidden-element-z-index": 0 }),
          ...(this.isHiddenMobile &&
            this.isMobileView && { "--m-hidden-element-z-index": 0 }),
          ...(this.isForcedOnTop && { "--z-index": Gu }),
        };
      },
    },
  });
function xd(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      {
        class: Z([
          "layout-element",
          {
            "layout-element--legacy": e.isMobileLegacy,
            "layout-element--layout": !e.isMobileLegacy,
          },
        ]),
        style: Be(e.computedStyles),
      },
      [te(e.$slots, "default")],
      6
    )
  );
}
const Rd = oe(Ld, [["render", xd]]),
  Hd = re({
    __name: "GridButton",
    props: {
      tagName: { default: "a" },
      href: { default: null },
      target: { default: null },
      rel: { default: null },
      type: { default: "primary" },
      buttonType: { default: null },
      content: { default: "" },
      isDisabled: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      fontSizeMobile: { default: null },
      fontSizeDesktop: { default: null },
      fontFamily: { default: null },
      fontWeight: { default: null },
      borderWidth: { default: null },
      borderRadius: { default: null },
      backgroundColor: { default: null },
      fontColor: { default: null },
      borderColor: { default: null },
      backgroundColorHover: { default: null },
      fontColorHover: { default: null },
      borderColorHover: { default: null },
      mobileElementWidth: { default: 0 },
      mobileElementHeight: { default: 0 },
      isInBuilder: { type: Boolean, default: !1 },
    },
    emits: ["click", "drag", "dragstart"],
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => `${(a.mobileElementWidth * 100) / Xt}vw`),
        o = u(() => `${(a.mobileElementHeight * 100) / Xt}vw`),
        i = u(() => ({
          "--font-size-mobile": a.fontSizeMobile
            ? `${a.fontSizeMobile}px`
            : null,
          "--font-size-desktop": a.fontSizeDesktop
            ? `${a.fontSizeDesktop}px`
            : null,
          "--font-family": a.fontFamily,
          "--font-weight": a.fontWeight,
          "--border-radius":
            a.borderRadius === 0 || a.borderRadius
              ? `${a.borderRadius}px`
              : null,
          "--border-width":
            a.borderWidth === 0 || a.borderWidth ? `${a.borderWidth}px` : "0px",
          "--background-color": a.backgroundColor,
          "--font-color": a.fontColor,
          "--border-color": a.borderColor || "rgb(26, 26, 26)",
          "--background-color-hover": a.backgroundColorHover,
          "--font-color-hover": a.fontColorHover,
          "--border-color-hover": a.borderColorHover,
          "--m-height": a.isInBuilder ? "100%" : o.value,
          "--m-width": a.isInBuilder ? "100%" : t.value,
        })),
        r = u(() => ({
          "grid-button--empty": !a.content,
          [`grid-button--${a.type}`]: a.type,
          loading: a.isLoading,
        })),
        l = {
          props: a,
          mobileWidthCSSVar: t,
          mobileHeightCSSVar: o,
          buttonCSSVars: i,
          computedClass: r,
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function Nd(e, n, a, t, o, i) {
  return (
    c(),
    q(
      mn(a.tagName),
      {
        type: a.buttonType,
        name: a.buttonType,
        href: a.href,
        disabled: a.isDisabled,
        target: a.target,
        rel: a.rel,
        class: Z(["grid-button", t.computedClass]),
        "aria-hidden": a.isLoading,
        style: Be(t.buttonCSSVars),
        onClick: n[0] || (n[0] = (r) => e.$emit("click", r)),
        onDrag: n[1] || (n[1] = (r) => e.$emit("drag", r)),
        onDragstart: n[2] || (n[2] = (r) => e.$emit("dragstart", r)),
      },
      { default: fe(() => [Re(X(a.content), 1)]), _: 1 },
      40,
      [
        "type",
        "name",
        "href",
        "disabled",
        "target",
        "rel",
        "class",
        "aria-hidden",
        "style",
      ]
    )
  );
}
const Ya = oe(Hd, [
    ["render", Nd],
    ["__scopeId", "data-v-4a176f12"],
  ]),
  Vn = (e, { href: n } = {}) => ({
    href: n,
    type: u(() => e.data.settings?.type),
    fontSizeMobile: u(() => e.data.mobile?.fontSize),
    fontSizeDesktop: u(() => e.data.desktop?.fontSize),
    fontFamily: u(() => e.data.fontFamily),
    fontWeight: u(() => e.data.fontWeight),
    borderWidth: u(() => e.data.borderWidth),
    borderRadius: u(() => e.data.borderRadius),
    backgroundColor: u(() => e.data.backgroundColor),
    fontColor: u(() => e.data.fontColor),
    borderColor: u(() => e.data.borderColor),
    backgroundColorHover: u(() => e.data.backgroundColorHover),
    fontColorHover: u(() => e.data.fontColorHover),
    borderColorHover: u(() => e.data.borderColorHover),
    buttonType: u(() => (e.data.settings.isFormButton ? "submit" : null)),
    tagName: u(() => (e.data.settings.isFormButton ? "button" : "a")),
    target: u(() => e.data.target),
    rel: u(() => e.data.rel),
    content: u(() => e.data.content),
    mobileElementWidth: u(() => e.data.mobile.width),
    mobileElementHeight: u(() => e.data.mobile.height),
  }),
  $d = {
    __name: "GridButtonProviderUser",
    props: {
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = Ze(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          buttonType: m,
          content: g,
          fontSizeMobile: d,
          fontSizeDesktop: v,
          fontFamily: h,
          fontWeight: y,
          borderWidth: k,
          borderRadius: T,
          backgroundColor: _,
          fontColor: b,
          borderColor: A,
          backgroundColorHover: D,
          fontColorHover: I,
          borderColorHover: R,
        } = Vn(a, {
          href: u(() =>
            t({
              isFormButton: a.data.settings.isFormButton,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        L = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          buttonType: m,
          content: g,
          fontSizeMobile: d,
          fontSizeDesktop: v,
          fontFamily: h,
          fontWeight: y,
          borderWidth: k,
          borderRadius: T,
          backgroundColor: _,
          fontColor: b,
          borderColor: A,
          backgroundColorHover: D,
          fontColorHover: I,
          borderColorHover: R,
          computed: u,
          get useSiteGlobal() {
            return Ze;
          },
          GridButton: Ya,
          get useGridButton() {
            return Vn;
          },
        };
      return (
        Object.defineProperty(L, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        L
      );
    },
  };
function Vd(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.GridButton,
      {
        "tag-name": t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        "button-type": t.buttonType,
        content: t.content,
        "font-size-mobile": t.fontSizeMobile,
        "font-size-desktop": t.fontSizeDesktop,
        "font-family": t.fontFamily,
        "font-weight": t.fontWeight,
        "border-width": t.borderWidth,
        "border-radius": t.borderRadius,
        "background-color": t.backgroundColor,
        "font-color": t.fontColor,
        "border-color": t.borderColor,
        "background-color-hover": t.backgroundColorHover,
        "font-color-hover": t.fontColorHover,
        "border-color-hover": t.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight,
      },
      null,
      8,
      [
        "tag-name",
        "href",
        "target",
        "rel",
        "type",
        "button-type",
        "content",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-width",
        "border-radius",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
      ]
    )
  );
}
const Ud = oe($d, [["render", Vd]]),
  Yd = (e, n) => {
    const a = u(() => n.ecommerce?.products),
      t = u(() => e.data.settings?.productId),
      o = u(() => e.data.settings?.productVariantId);
    return { storeProducts: a, productId: t, productVariantId: o };
  },
  Ho = M(""),
  Zi = M({}),
  Ut = () => ({
    openEcommerceModal: (t) => {
      Ho.value = t;
    },
    closeEcommerceModal: () => {
      Ho.value = null;
    },
    openEcommerceModalName: Ho,
    productPreviewData: Zi,
    setProductPreviewData: (t) => {
      Zi.value = t;
    },
  }),
  Gr = "https://cdn.zyrosite.com/cdn-builder-placeholders",
  Nt = `${Gr}/ecommerce-product`,
  ot = `${Gr}/instagram`,
  Fd = `${Gr}/password-page`;
var Qa = ((e) => (
    (e.DEFAULT = "default"),
    (e.PRICE_LTH = "priceLTH"),
    (e.PRICE_HTL = "priceHTL"),
    (e.MOST_RECENT = "mostRecent"),
    e
  ))(Qa || {}),
  Lt = ((e) => (
    (e.CONTAIN = "contain"),
    (e.COVER = "cover"),
    (e.LANDSCAPE = "landscape"),
    (e.PORTRAIT = "portrait"),
    e
  ))(Lt || {}),
  ka = ((e) => (
    (e.NO_EFFECT = "no_effect"),
    (e.ZOOM = "zoom"),
    (e.SWAP_IMAGE = "swap_image"),
    e
  ))(ka || {});
const da = {
  id: -1,
  title: "Product name",
  subtitle: null,
  description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
  images: [],
  options: [],
  product_collections: [],
  ribbon_text: null,
  site_product_selection: null,
  type: { value: "physical" },
  thumbnail: null,
  variants: [
    {
      id: "",
      manage_inventory: !1,
      prices: [
        {
          amount: 0,
          currency_code: "USD",
          sale_amount: null,
          currency: {
            code: "USD",
            decimal_digits: 2,
            template: "$$1",
            name: "US Dollar",
            symbol: "$",
            symbol_native: "$",
            name_plural: "US dollars",
            rounding: 0,
            min_amount: 0,
          },
        },
      ],
      options: [],
    },
  ],
  purchasable: !0,
};
(({ ...da, images: `${Nt}`, thumbnail: `${Nt}` }),
{ ...da, images: `${Nt}`, thumbnail: `${Nt}` }),
  { ...da, images: `${Nt}`, thumbnail: `${Nt}` },
  { ...da, images: `${Nt}`, thumbnail: `${Nt}` },
  { ...da, images: `${Nt}`, thumbnail: `${Nt}` },
  { ...da, images: `${Nt}`, thumbnail: `${Nt}` };
const fr = "donation",
  Yt = "booking",
  hr = "hours",
  Wd = ["BlockEcommerceProduct", "BlockEcommerceProductList"],
  Xi = {
    INSUFFICIENT_INVENTORY: "insufficient_inventory",
    BOOKING_UNAVAILABLE: "booking_slot_not_available",
  },
  qd = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5",
  yr = "shopping-cart-items",
  Gd = 864e5,
  Ss = "site_product_selection",
  jr = "lowest_price_first",
  Za = 160,
  jd = {
    [Qa.DEFAULT]: "",
    [Qa.PRICE_LTH]: "order=ASC&sort_by=price",
    [Qa.PRICE_HTL]: "order=DESC&sort_by=price",
    [Qa.MOST_RECENT]: "order=DESC&sort_by=created_at",
  },
  Gn = "https://api-ecommerce.hostinger.com/store",
  br = async (e, n = {}) => {
    const { productIds: a, sort: t, offset: o, limit: i, collectionId: r } = n,
      l = new URLSearchParams(t);
    return (
      a?.length > 1
        ? a?.forEach((g) => l.append("ids[]", g))
        : a?.length && l.set("ids[]", a[0]),
      typeof o == "number" && i && (l.set("offset", o), l.set("limit", i)),
      r && l.set("collection_ids[]", r),
      await (await fetch(`${Gn}/${e}/products?${l.toString()}`)).json()
    );
  },
  zd = async (e, n) => {
    const a = n.map((i) => `product_ids[]=${i}`).join("&");
    return (
      await (
        await fetch(`${Gn}/${e}/variants?fields=inventory_quantity&${a}`)
      ).json()
    ).variants;
  },
  Kd = async ({
    items: e,
    successUrl: n,
    cancelUrl: a,
    locale: t,
    storeId: o,
  }) =>
    fetch(`${Gn}/${o}/checkout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        items: e,
        successUrl: n,
        cancelUrl: a,
        locale: t,
      }),
    }).then(async (i) => {
      const r = await i.json();
      if (i.ok) return r.url;
      throw r;
    }),
  Qd = async (e, n) =>
    fetch(`${Gn}/time-slots`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: n,
      }),
    }).then(async (a) => {
      const t = await a.json();
      if (a.ok) return t.slots;
      throw t;
    }),
  Zd = async ({ bookingId: e, fromDate: n, toDate: a }) =>
    fetch(`${Gn}/availability`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "omit",
      body: JSON.stringify({
        booking_event_id: e,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        from_date: n,
        to_date: a,
      }),
    }).then(async (t) => {
      const o = await t.json();
      if (t.ok) return o.disabled_dates;
      throw o;
    }),
  nn = (e) => {
    const { openEcommerceModal: n } = Ut(),
      { meta: a, ecommerceShoppingCart: t } = Ze();
    let o = "";
    const i = M("");
    Ee(() => {
      (o = a.value?.ecommerceStoreId),
        (i.value = `${window.location.origin}${window.location.pathname}`);
    });
    function r(m) {
      const g = m.some((h) => h.type.value === fr),
        d = m.some((h) => h.type.value === Yt);
      let v = "";
      return (
        d ? (v = `&product=${Yt}`) : g && (v = `&product=${fr}`),
        `${i.value}?open-modal=EcommerceCheckoutSuccess${v}`
      );
    }
    async function l(m) {
      const g = m.reduce(
          (h, y) =>
            h.find((T) => T.variant_id === y.variants[0].id)
              ? h.map((T) =>
                  T.variant_id === y.variants[0].id
                    ? { variant_id: T.variant_id, quantity: T.quantity + 1 }
                    : T
                )
              : [
                  ...h,
                  {
                    variant_id: y.variants[0].id,
                    quantity: 1,
                    time_slot: y.variants[0].booking_event?.time_slot,
                    time_zone: y.variants[0].booking_event?.time_zone,
                  },
                ],
          []
        ),
        d = t.value?.lang || "en";
      let v = await Kd({
        items: g,
        cancelUrl: i.value,
        successUrl: r(m),
        locale: d,
        storeId: o,
      });
      return (v = new URL(v)), v.searchParams.set("lang", d), v.toString();
    }
    async function s(m) {
      if (!o) {
        n("EcommerceCheckoutFailed");
        return;
      }
      try {
        const g = await l(m);
        window.location.assign(g);
      } catch (g) {
        g.code === Xi.INSUFFICIENT_INVENTORY
          ? n("EcommerceOutOfStock")
          : g.code === Xi.BOOKING_UNAVAILABLE
          ? n("EcommerceBookingUnavailable")
          : n("EcommerceCheckoutFailed");
      }
    }
    return { initiateCheckout: s, storeId: o };
  },
  so = (e) => e.ecommerceStoreId ?? e.demoEcommerceStoreId ?? qd,
  Ji = () => {
    const e = window.localStorage.getItem(yr);
    if (!e) return [];
    const n = JSON.parse(e);
    return n.payload.length
      ? Date.now() > n.expiry
        ? (window.localStorage.removeItem(yr), [])
        : n.payload
      : [];
  },
  qa = M([]),
  fn = M([]),
  hn = M([]),
  el = M(null),
  tl = M(!1),
  al = M(!1),
  nl = M({}),
  ol = M({}),
  Xd = M(!1),
  Ft = ({ blockId: e } = { blockId: "global" }) => {
    const { meta: n, pages: a } = Ze(),
      t = u(() => n.value[ju] === zu),
      o = u(() => !!n.value?.ecommerceStoreId),
      i = u(() => nl.value[e || ""] ?? !1),
      r = u(() => ol.value[e || ""] ?? !1),
      l = u(() =>
        fn.value.reduce(
          (I, R) =>
            I.find((K) => K.product.variants[0].id === R.variants[0].id)
              ? I.map((K) =>
                  K.product.variants[0].id === R.variants[0].id
                    ? { ...K, quantity: K.quantity + 1 }
                    : K
                )
              : [...I, { product: R, quantity: 1 }],
          []
        )
      ),
      s = (I, R) => {
        if (fn.value.length >= Za) return !1;
        const L = qa.value.find((W) => W.id === I),
          K = L?.variants.find((W) => W.id === R);
        if (!L || !K) return !1;
        if (K.manage_inventory) {
          const C =
              l.value.find(
                (F) =>
                  F.product.id === I &&
                  F.product.variants.some((Q) => Q.id === K.id)
              )?.quantity || 0,
            H = hn.value.find((F) => F.id === R)?.inventory_quantity;
          return C < H;
        }
        return !0;
      },
      m = u(() => Object.values(a.value).filter((I) => I.type === us)),
      g = (I) => {
        e && (nl.value[e] = I);
      },
      d = (I) => {
        e && (ol.value[e] = I);
      },
      v = (I) => {
        al.value = I;
      },
      h = (I) => {
        const R = I.reduce(
          (L, K) => {
            const W = L.some((C) => C.id === K.id);
            return [...L, ...(W ? [] : [K])];
          },
          [...qa.value]
        );
        qa.value = R;
      },
      y = (I) => {
        tl.value = I;
      },
      k = (I) => {
        fn.value = I || [];
        const R = { payload: I, expiry: Date.now() + Gd };
        window.localStorage.setItem(yr, JSON.stringify(R));
      },
      T = (I) => {
        el.value = I;
      },
      _ = (I) => {
        hn.value = I;
      },
      b = ({ cartItems: I }) =>
        (I || fn.value).reduce((R, L) => {
          const K = qa.value.find((B) => B.id === L.id),
            W = K?.variants.find((B) => L.variants.some((P) => B.id === P.id)),
            C = R.reduce(
              (B, P) => (P.variants.some((V) => V.id === W?.id) ? B + 1 : B),
              0
            ),
            H = hn.value.find((B) => B.id === W?.id)?.inventory_quantity,
            F = !W?.manage_inventory || C < H,
            Q =
              K?.type.value === Yt
                ? {
                    ...L.variants[0].booking_event,
                    time_slot: L.variants[0].booking_event.time_slot,
                    date: L.variants[0].booking_event.date,
                  }
                : null;
          return K && W && F
            ? [...R, { ...K, variants: [{ ...W, booking_event: Q }] }]
            : R;
        }, []),
      A = async (I) => {
        const R = so(n.value);
        if (!R) return;
        try {
          const W = (await zd(R, I)).reduce(
            (C, H) => {
              const F = C.some((Q) => Q.id === H.id);
              return [...C, ...(F ? [] : [H])];
            },
            [...hn.value]
          );
          _(W);
        } catch (K) {
          console.error(K);
        }
        const L = await b({ cartItems: Ji() });
        k(L);
      };
    return {
      products: qa,
      shoppingCartItems: fn,
      selectedBookingProductId: el,
      variantsQuantity: hn,
      isShoppingCartOpen: tl,
      isCheckoutLoading: al,
      isLoading: i,
      isLoaded: r,
      isProductPageLoaded: Xd,
      isStoreTypeZyro: t,
      isEcommerceStoreCreated: o,
      quantifiedCartItemsList: l,
      canAddToCart: s,
      productPages: m,
      setIsLoading: g,
      setIsLoaded: d,
      setIsCheckoutLoading: v,
      setStoreProducts: h,
      setShoppingCartOpen: y,
      setShoppingCartItems: k,
      setSelectedBookingId: T,
      setVariantsQuantity: _,
      fetchProducts: async (I) => {
        const R = so(n.value);
        if (!R) return;
        const W = [...Ji().map((C) => C.id), ...I].filter(
          (C) => !qa.value.some((H) => H.id === C)
        );
        if (!W.length) {
          r.value || d(!0);
          return;
        }
        d(!1), g(!0);
        try {
          const { products: C } = await br(R, { productIds: W });
          h(C), await A(W);
        } catch (C) {
          console.error(C);
        } finally {
          g(!1), d(!0);
        }
      },
      updateVariantsQuantity: A,
      refreshCartItems: b,
    };
  },
  Jd = re({
    name: "GridEcommerceButtonProviderUser",
    components: { GridButton: Ya },
    props: {
      data: { type: Object, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { getButtonHref: n } = Ze(),
        {
          canAddToCart: a,
          isShoppingCartOpen: t,
          products: o,
          shoppingCartItems: i,
          setShoppingCartOpen: r,
          setShoppingCartItems: l,
          setSelectedBookingId: s,
        } = Ft(),
        { initiateCheckout: m } = nn(),
        { openEcommerceModal: g } = Ut(),
        {
          content: d,
          type: v,
          fontSizeMobile: h,
          fontSizeDesktop: y,
          fontFamily: k,
          fontWeight: T,
          borderRadius: _,
          backgroundColor: b,
          fontColor: A,
          borderColor: D,
          borderWidth: I,
          backgroundColorHover: R,
          fontColorHover: L,
          borderColorHover: K,
        } = Vn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        {
          productId: W,
          productVariantId: C,
          storeProducts: H,
        } = Yd(e, { ecommerce: { products: o.value } }),
        F = u(() => o.value.find((V) => V.id === W.value)),
        Q = u(() => F.value?.type.value === Yt),
        B = u(() => Q.value && !!i.value?.some((V) => V.id === W.value)),
        P = u(() => B.value || !a(W.value, C.value));
      return {
        openEcommerceModal: g,
        productId: W,
        productVariantId: C,
        content: d,
        type: v,
        fontSizeMobile: h,
        fontSizeDesktop: y,
        fontFamily: k,
        fontWeight: T,
        borderRadius: _,
        borderWidth: I,
        backgroundColor: b,
        fontColor: A,
        borderColor: D,
        backgroundColorHover: R,
        fontColorHover: L,
        borderColorHover: K,
        initiateCheckout: m,
        shoppingCartItems: i,
        storeProducts: H,
        isAddToCartDisabled: P,
        product: F,
        canAddToCart: a,
        isShoppingCartOpen: t,
        setShoppingCartOpen: r,
        setShoppingCartItems: l,
        setSelectedBookingId: s,
      };
    },
    data() {
      return { isLoading: !1 };
    },
    methods: {
      async handleClick() {
        if (this.product?.type.value === Yt) {
          this.setSelectedBookingId(this.productId),
            this.openEcommerceModal("EcommerceBookingEventSelect");
          return;
        }
        if (Na() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        const e = this.product?.variants.find(
            (a) => a.id === this.productVariantId
          ),
          n = { ...this.product, variants: [e] };
        this.isCartVisible
          ? (this.setShoppingCartItems([...this.shoppingCartItems, n]),
            this.manageCartOpenState())
          : ((this.isLoading = !0),
            await this.initiateCheckout([n]).then(() => {
              this.isLoading = !1;
            }));
      },
      manageCartOpenState() {
        this.isShoppingCartOpen || this.setShoppingCartOpen(!0);
      },
    },
  });
function em(e, n, a, t, o, i) {
  const r = He("GridButton"),
    l = je("qa");
  return ue(
    (c(),
    q(
      r,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: e.handleClick,
      },
      null,
      8,
      [
        "content",
        "type",
        "is-disabled",
        "is-loading",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-radius",
        "border-width",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
        "onClick",
      ]
    )),
    [[l, "button-ecommerce-checkout"]]
  );
}
const tm = oe(Jd, [["render", em]]),
  am = re({
    __name: "GridEmbed",
    props: {
      srcdoc: { default: "" },
      shouldRender: { type: Boolean, default: !1 },
      height: { default: null },
      id: {},
    },
    emits: ["iframe-height-updated"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = M(0),
        r = M(),
        l = u(() =>
          t.height && i.value > t.height ? i.value : t.height || i.value
        ),
        s = u(() => ({ "--height": `${l.value}px` })),
        g = {
          props: t,
          emit: o,
          observedHeight: i,
          gridEmbedIframeRef: r,
          embedHeight: l,
          computedStyles: s,
          observeGridEmbed: () => {
            const d = r.value?.contentWindow?.document.querySelector("html");
            new ResizeObserver(([{ contentRect: h }]) => {
              requestAnimationFrame(() => {
                const { height: y } = h;
                y !== i.value &&
                  ((i.value = y), o("iframe-height-updated", i.value));
              });
            }).observe(d);
          },
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  nm = ["id"],
  om = ["srcdoc"];
function rm(e, n, a, t, o, i) {
  const r = je("qa");
  return ue(
    (c(),
    f(
      "div",
      { id: a.id, class: "grid-embed", style: Be(t.computedStyles) },
      [
        a.shouldRender
          ? (c(),
            f(
              "iframe",
              {
                key: 0,
                ref: "gridEmbedIframeRef",
                class: "grid-embed__iframe",
                srcdoc: a.srcdoc,
                title: "custom code element",
                onLoad: t.observeGridEmbed,
              },
              null,
              40,
              om
            ))
          : O("", !0),
      ],
      12,
      nm
    )),
    [[r, "builder-gridelement-gridembed"]]
  );
}
const im = oe(am, [["render", rm]]),
  lm = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`,
  sm = (e) => {
    const n = document.createElement("div");
    n.innerHTML = e;
    const a = [...n.children].reduce(
      (t, o) =>
        o.tagName === "STYLE"
          ? { ...t, styles: `${t.styles} ${o.outerHTML}` }
          : o.tagName === "SCRIPT"
          ? { ...t, scripts: `${t.scripts} ${o.outerHTML}` }
          : { ...t, html: `${t.html} ${o.outerHTML}` },
      { styles: lm, scripts: "", html: "" }
    );
    return `<!DOCTYPE html>
	<head>${a.styles}</head>
	<body>${a.html}${a.scripts}</body>
</html>`;
  },
  um = "500px",
  Ts = (e, n = um) => {
    const a = M(!1),
      t = M(null);
    try {
      Ee(() => {
        t.value = new IntersectionObserver(
          ([{ isIntersecting: i }]) => {
            i && ((a.value = !0), t.value?.disconnect());
          },
          { threshold: 0, rootMargin: n }
        );
      });
      const o = Hr(() => {
        if (e.value && t.value) {
          const i = e.value.$el ?? e.value;
          t.value.observe(i), o();
        }
      });
      kt(() => t.value?.disconnect());
    } catch (o) {
      console.error(o);
    }
    return { isObserved: a };
  },
  cm = re({
    components: { GridEmbed: im },
    props: {
      data: { type: Object, default: () => ({}) },
      id: { type: String, default: null },
    },
    setup(e) {
      const n = M(null),
        { isObserved: a } = Ts(n),
        t = M(null);
      return (
        Ee(() => {
          t.value = sm(e.data.content);
        }),
        { gridEmbedRef: n, isObserved: a, srcdoc: t }
      );
    },
  });
function dm(e, n, a, t, o, i) {
  const r = He("GridEmbed");
  return (
    c(),
    q(
      r,
      {
        id: e.id,
        ref: "gridEmbedRef",
        "should-render": e.isObserved,
        srcdoc: e.srcdoc,
        height: e.data.settings.styles.height,
      },
      null,
      8,
      ["id", "should-render", "srcdoc", "height"]
    )
  );
}
const mm = oe(cm, [["render", dm]]),
  No = ({ value: e = "", validation: n, validationMessages: a }) => {
    const t = [];
    return (
      n.includes("required") && !e.replace(/ /g, "") && t.push(a.required),
      e.replace(/ /g, "") &&
        (n.includes("email") && !Nc.test(e) && t.push(a.email),
        n.includes("phone") && !$c.test(e) && t.push(a.phone)),
      t
    );
  },
  gm = re({
    props: {
      modelValue: { type: String, default: "" },
      label: { type: String, default: null },
      placeholder: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isRequiredAsteriskVisible: { type: Boolean, default: !0 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        default: "input",
        validator: (e) => ["textarea", "input"].includes(e),
      },
    },
    emits: ["update:model-value"],
    data() {
      return { gridInputValue: "" };
    },
    computed: {
      computedClasses() {
        return [
          { "input__component--textarea": this.tag === "textarea" },
          { "input__component--read-only": !this.isInteractive },
          `input__component--${this.theme}`,
        ];
      },
    },
  }),
  vm = ["placeholder", "value", "readonly", "tabindex"],
  pm = ["placeholder", "value", "readonly", "tabindex"],
  fm = { key: 2 };
function hm(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      { class: Z(["input", `input--${e.theme}`]) },
      [
        E(
          "label",
          { class: Z(["input__label", `input__label--${e.theme}`]) },
          X(e.label) +
            X(e.isRequired && e.isRequiredAsteriskVisible ? "*" : ""),
          3
        ),
        e.tag === "input"
          ? (c(),
            f(
              "input",
              {
                key: 0,
                placeholder: e.placeholder,
                type: "text",
                class: Z(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[0] ||
                  (n[0] = (r) => e.$emit("update:model-value", r.target.value)),
                onClick: n[1] || (n[1] = Me(() => {}, ["prevent"])),
                onDragstart: n[2] || (n[2] = Me(() => {}, ["prevent"])),
                onDrag: n[3] || (n[3] = Me(() => {}, ["prevent"])),
              },
              null,
              42,
              vm
            ))
          : O("", !0),
        e.tag === "textarea"
          ? (c(),
            f(
              "textarea",
              {
                key: 1,
                placeholder: e.placeholder,
                type: "text",
                class: Z(["input__component", e.computedClasses]),
                value: e.modelValue,
                readonly: !e.isInteractive,
                tabindex: e.isInteractive ? 0 : -1,
                onInput:
                  n[4] ||
                  (n[4] = (r) => e.$emit("update:model-value", r.target.value)),
                onClick: n[5] || (n[5] = Me(() => {}, ["prevent"])),
                onDragstart: n[6] || (n[6] = Me(() => {}, ["prevent"])),
                onDrag: n[7] || (n[7] = Me(() => {}, ["prevent"])),
              },
              null,
              42,
              pm
            ))
          : O("", !0),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            f("div", fm, [
              (c(!0),
              f(
                ge,
                null,
                we(
                  e.validationErrors,
                  (r) => (
                    c(),
                    f(
                      "p",
                      { key: r, class: "input__error-message text-body-2" },
                      X(r),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : O("", !0),
      ],
      2
    )
  );
}
const ym = oe(gm, [
    ["render", hm],
    ["__scopeId", "data-v-ee2fb8ad"],
  ]),
  bm = re({
    name: "GridSelectInput",
    props: {
      name: { type: String, required: !0 },
      id: { type: String, required: !0 },
      tag: { type: String, required: !0 },
      selectedOptions: { type: Array, required: !0 },
      isInteractive: { type: Boolean, default: !0 },
      theme: { type: String, required: !0 },
      isSelected: { type: Boolean, required: !0 },
    },
    emits: ["select-option", "remove-selection", "add-selection"],
    computed: {
      labelClasses() {
        return [
          { "input__label--read-only": !this.isInteractive },
          `select-input--${this.theme}`,
        ];
      },
      inputClasses() {
        return [{ "input__component--read-only": !this.isInteractive }];
      },
    },
    methods: {
      selectOption() {
        if (!this.isInteractive) return;
        const e = { id: this.id, value: this.name };
        this.tag !== "checkbox"
          ? this.$emit("select-option", e)
          : this.isSelected
          ? this.$emit("remove-selection", e)
          : this.$emit("add-selection", e);
      },
    },
  }),
  _m = ["for"],
  wm = ["id", "type", "checked", "tabindex"];
function km(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "label",
      { class: Z(["select-input", e.labelClasses]), for: e.id },
      [
        (c(),
        f(
          "input",
          {
            id: e.id,
            key: e.isSelected,
            type: e.tag,
            class: Z(["select-input__input", e.inputClasses]),
            checked: e.isSelected,
            tabindex: e.isInteractive ? 0 : -1,
            onInput:
              n[0] ||
              (n[0] = Me(
                (...r) => e.selectOption && e.selectOption(...r),
                ["stop"]
              )),
            onDragstart: n[1] || (n[1] = Me(() => {}, ["prevent"])),
            onDrag: n[2] || (n[2] = Me(() => {}, ["prevent"])),
          },
          null,
          42,
          wm
        )),
        Re(" " + X(e.name), 1),
      ],
      10,
      _m
    )
  );
}
const Sm = oe(bm, [
    ["render", km],
    ["__scopeId", "data-v-3b89e969"],
  ]),
  Tm = re({
    name: "GridSelectInputsWrapper",
    components: { GridSelectInput: Sm },
    props: {
      label: { type: String, default: null },
      isRequired: { type: Boolean, default: !1 },
      isTextArea: { type: Boolean, default: !1 },
      isInteractive: { type: Boolean, default: !0 },
      areErrorsShown: { type: Boolean, default: !1 },
      validationErrors: { type: Array, required: !1, default: () => [] },
      theme: { type: String, required: !0 },
      tag: {
        type: String,
        required: !0,
        validator: (e) => ["radio", "checkbox"].includes(e),
      },
      options: { type: Array, required: !0 },
    },
    emits: ["input"],
    data() {
      return { selectedOptions: [] };
    },
    watch: {
      selectedOptions() {
        const e = this.selectedOptions.map(({ value: n }) => n).toString();
        this.$emit("input", e);
      },
    },
    methods: {
      isSelected(e) {
        return this.selectedOptions.some(({ id: n }) => n === e);
      },
      removeSelection(e) {
        const n = this.selectedOptions.filter((a) => a.id !== e.id);
        this.selectedOptions = n;
      },
      addSelection(e) {
        this.selectedOptions = [...this.selectedOptions, e];
      },
      selectOption(e) {
        this.selectedOptions = [e];
      },
    },
  }),
  Cm = { key: 0 };
function Pm(e, n, a, t, o, i) {
  const r = He("GridSelectInput");
  return (
    c(),
    f(
      "div",
      { class: Z(["input", `input--${e.theme}`]) },
      [
        E(
          "label",
          {
            class: Z([
              "input__label input__label--read-only",
              [`input__label--${e.theme}`],
            ]),
          },
          X(e.label) + X(e.isRequired ? "*" : ""),
          3
        ),
        (c(!0),
        f(
          ge,
          null,
          we(
            e.options,
            (l) => (
              c(),
              f("div", { key: l.id, class: "input__options" }, [
                Oe(
                  r,
                  {
                    id: l.id,
                    name: l.value,
                    tag: e.tag,
                    "is-selected": e.isSelected(l.id),
                    theme: e.theme,
                    "is-interactive": e.isInteractive,
                    "selected-options": e.selectedOptions,
                    onRemoveSelection: e.removeSelection,
                    onAddSelection: e.addSelection,
                    onSelectOption: e.selectOption,
                  },
                  null,
                  8,
                  [
                    "id",
                    "name",
                    "tag",
                    "is-selected",
                    "theme",
                    "is-interactive",
                    "selected-options",
                    "onRemoveSelection",
                    "onAddSelection",
                    "onSelectOption",
                  ]
                ),
              ])
            )
          ),
          128
        )),
        e.validationErrors.length && e.areErrorsShown
          ? (c(),
            f("div", Cm, [
              (c(!0),
              f(
                ge,
                null,
                we(
                  e.validationErrors,
                  (l) => (
                    c(),
                    f(
                      "p",
                      { key: l, class: "input__error-message text-body-2" },
                      X(l),
                      1
                    )
                  )
                ),
                128
              )),
            ]))
          : O("", !0),
      ],
      2
    )
  );
}
const Im = oe(Tm, [
    ["render", Pm],
    ["__scopeId", "data-v-d57bc6de"],
  ]),
  Em = {
    __name: "GridForm",
    props: {
      id: { type: String, required: !0 },
      settings: { type: Object, required: !0 },
      submitButtonData: { type: Object, required: !0 },
      formId: { type: String, default: null },
      isError: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      isUserSite: { type: Boolean, default: !1 },
      theme: {
        type: String,
        validator: (e) => ["dark", "light"].includes(e),
        default: "light",
      },
      formJustify: { type: String, default: null },
      formButtonJustifySelf: { type: String, default: null },
      mobileFormButtonJustifySelf: { type: String, default: null },
      formBackgroundColor: { type: String, default: null },
      formBorderWidth: { type: String, default: null },
      formBorderColor: { type: String, default: null },
      formBorderRadius: { type: String, default: null },
      formPadding: { type: String, default: null },
      submitButtonBackgroundColor: { type: String, default: null },
      submitButtonBackgroundColorHover: { type: String, default: null },
      submitButtonFontColor: { type: String, default: null },
      submitButtonFontColorHover: { type: String, default: null },
      submitButtonBorderColor: { type: String, default: null },
      submitButtonBorderColorHover: { type: String, default: null },
      submitButtonFontFamily: { type: String, default: null },
      submitButtonFontWeight: { type: Number, default: null },
      submitButtonFontSizeMobile: { type: Number, default: null },
      submitButtonFontSizeDesktop: { type: Number, default: null },
      submitButtonBorderWidth: { type: Number, default: null },
      submitButtonBorderRadius: { type: Number, default: null },
      inputFillColor: { type: String, default: null },
      inputFillColorHover: { type: String, default: null },
      formFontFamily: { type: String, default: null },
      formFontWeight: { type: Number, default: null },
      labelTextColor: { type: String, default: null },
      labelTextSize: { type: Number, default: null },
      mobileLabelTextSize: { type: Number, default: null },
      inputTextColor: { type: String, default: null },
      inputTextColorHover: { type: String, default: null },
      inputTextSize: { type: Number, default: null },
      mobileInputTextSize: { type: Number, default: null },
      inputBorderColor: { type: String, default: null },
      inputBorderColorHover: { type: String, default: null },
      inputBorderWidth: { type: Number, default: null },
      inputBorderRadius: { type: Number, default: null },
      elementsVerticalSpacing: { type: Number, default: null },
      mobileElementsVerticalSpacing: { type: Number, default: null },
    },
    emits: ["on-submit"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = M({}),
        r = M({}),
        l = M(!1),
        s = u(() =>
          t.settings.schema.reduce(
            (k, T) => ({
              ...k,
              [T.name]: {
                validation: T.validation.flat(),
                validationMessages: T["validation-messages"],
              },
            }),
            {}
          )
        ),
        m = u(() => {
          const k = Number.isInteger(t.elementsVerticalSpacing)
              ? `${t.elementsVerticalSpacing}px`
              : null,
            T = Number.isInteger(t.mobileElementsVerticalSpacing)
              ? `${t.mobileElementsVerticalSpacing}px`
              : null;
          return {
            "--form-flex": t.formJustify ? null : "0 1 100%",
            "--form-button-justify-self": t.formButtonJustifySelf,
            "--m-form-button-justify-self": t.mobileFormButtonJustifySelf,
            "--form-background-color": t.formBackgroundColor,
            "--form-border-width": `${t.formBorderWidth}px`,
            "--form-border-color": t.formBorderColor,
            "--form-border-radius": `${t.formBorderRadius}px`,
            "--form-padding": t.formPadding ? `${t.formPadding}px` : null,
            "--form-font-family": t.formFontFamily,
            "--form-font-weight": t.formFontWeight,
            "--input-fill-color": t.inputFillColor,
            "--input-fill-color--hover":
              t.inputFillColorHover || t.inputFillColor,
            "--label-text-color": t.labelTextColor,
            "--label-text-size": t.labelTextSize
              ? `${t.labelTextSize}px`
              : null,
            "--m-label-text-size": t.mobileLabelTextSize
              ? `${t.mobileLabelTextSize}px`
              : null,
            "--input-text-color": t.inputTextColor,
            "--input-text-color--hover":
              t.inputTextColorHover || t.inputTextColor,
            "--input-text-size": t.inputTextSize
              ? `${t.inputTextSize}px`
              : null,
            "--m-input-text-size": t.mobileInputTextSize
              ? `${t.mobileInputTextSize}px`
              : null,
            "--input-height": t.inputTextSize ? "auto" : "48px",
            "--input-border-color": t.inputBorderColor,
            "--input-border-color--hover":
              t.inputBorderColorHover || t.inputBorderColor,
            "--input-border-width": t.inputBorderWidth
              ? `${t.inputBorderWidth}px`
              : null,
            "--input-border-radius": t.inputBorderRadius
              ? `${t.inputBorderRadius}px`
              : null,
            "--form-elements-vertical-spacing": k,
            "--m-form-elements-vertical-spacing": T,
            "--form-spacing": "var(--formSpacing)",
            "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
            "--grid-item-inner-background": "var(--gridItemInnerBackground)",
          };
        }),
        g = () =>
          t.settings.schema.flatMap(({ name: k }) => {
            const T = No({ value: r.value[k]?.value, ...s.value[k] });
            return (i.value = { ...i.value, [k]: T }), T;
          }),
        d = (k, T) => {
          (i.value = { ...i.value, [k]: No({ value: T, ...s.value[k] }) }),
            (r.value = {
              ...r.value,
              [k]: {
                value: T,
                type:
                  t.settings.schema.find(({ name: _ }) => _ === k)
                    .validationType || "text",
              },
            });
        },
        v = () => {
          r.value = Object.fromEntries(
            Object.entries(r.value).map(([k, { value: T, type: _ }]) => [
              k,
              { value: T.trim(), type: _ },
            ])
          );
        },
        y = {
          props: t,
          emit: o,
          validationErrors: i,
          formValues: r,
          areErrorsVisible: l,
          validationRules: s,
          formCSSVars: m,
          validateForm: g,
          updateField: d,
          trimFormValues: v,
          handleSubmit: () => {
            v();
            const k = g();
            (l.value = k.length > 0), l.value || o("on-submit", r.value);
          },
          computed: u,
          ref: M,
          get validateInput() {
            return No;
          },
          GridButton: Ya,
          GridInput: ym,
          GridSelectInputsWrapper: Im,
        };
      return (
        Object.defineProperty(y, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        y
      );
    },
  },
  Dm = ["id"],
  Mm = ["name"];
function Om(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "div",
      {
        id: a.id,
        class: Z([
          "form",
          { "form--single-field": a.settings.type === "singleField" },
        ]),
        style: Be(t.formCSSVars),
      },
      [
        E(
          "form",
          {
            class: Z([
              "form__control",
              { "form__control--invisible": a.showSuccessMessage || a.isError },
            ]),
            name: a.formId,
            onSubmit: Me(t.handleSubmit, ["prevent"]),
          },
          [
            (c(!0),
            f(
              ge,
              null,
              we(
                a.settings.schema,
                (l) => (
                  c(),
                  f(
                    ge,
                    { key: l.id },
                    [
                      l.type === "GridInput"
                        ? ue(
                            (c(),
                            q(
                              t.GridInput,
                              {
                                key: 0,
                                theme: a.theme,
                                tag: l.tag,
                                placeholder: l.placeholder,
                                label: l.inputLabel,
                                "is-required":
                                  t.validationRules[l.name].validation.includes(
                                    "required"
                                  ),
                                "is-required-asterisk-visible":
                                  a.settings.schema.length > 1,
                                "validation-errors": t.validationErrors[l.name],
                                "are-errors-shown": t.areErrorsVisible,
                                "is-interactive": a.isUserSite,
                                "model-value": t.formValues[l.name]?.value,
                                "onUpdate:modelValue": (s) =>
                                  t.updateField(l.name, s),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "placeholder",
                                "label",
                                "is-required",
                                "is-required-asterisk-visible",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "model-value",
                                "onUpdate:modelValue",
                              ]
                            )),
                            [[r, `form-field-${l.inputLabel}`]]
                          )
                        : O("", !0),
                      l.type === "GridSelectInput"
                        ? ue(
                            (c(),
                            q(
                              t.GridSelectInputsWrapper,
                              {
                                key: 1,
                                theme: a.theme,
                                tag: l.tag,
                                options: l.options,
                                placeholder: l.placeholder,
                                label: l.inputLabel,
                                "is-required":
                                  t.validationRules[l.name].validation.includes(
                                    "required"
                                  ),
                                "validation-errors": t.validationErrors[l.name],
                                "are-errors-shown": t.areErrorsVisible,
                                "is-interactive": a.isUserSite,
                                onInput: (s) => t.updateField(l.name, s),
                              },
                              null,
                              8,
                              [
                                "theme",
                                "tag",
                                "options",
                                "placeholder",
                                "label",
                                "is-required",
                                "validation-errors",
                                "are-errors-shown",
                                "is-interactive",
                                "onInput",
                              ]
                            )),
                            [[r, `form-field-${l.inputLabel}`]]
                          )
                        : O("", !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
            Oe(
              t.GridButton,
              {
                content: a.submitButtonData.content,
                type: a.submitButtonData.settings.type,
                "background-color": a.submitButtonBackgroundColor,
                "background-color-hover": a.submitButtonBackgroundColorHover,
                "font-color": a.submitButtonFontColor,
                "font-color-hover": a.submitButtonFontColorHover,
                "border-color": a.submitButtonBorderColor,
                "border-color-hover": a.submitButtonBorderColorHover,
                "font-family": a.submitButtonFontFamily,
                "font-weight": a.submitButtonFontWeight,
                "font-size-mobile": a.submitButtonFontSizeMobile,
                "font-size-desktop": a.submitButtonFontSizeDesktop,
                "border-width": a.submitButtonBorderWidth,
                "border-radius": a.submitButtonBorderRadius,
                class: "form__button",
                "button-type": "submit",
                "tag-name": "button",
              },
              null,
              8,
              [
                "content",
                "type",
                "background-color",
                "background-color-hover",
                "font-color",
                "font-color-hover",
                "border-color",
                "border-color-hover",
                "font-family",
                "font-weight",
                "font-size-mobile",
                "font-size-desktop",
                "border-width",
                "border-radius",
              ]
            ),
          ],
          42,
          Mm
        ),
        te(e.$slots, "default", {}, void 0, !0),
      ],
      14,
      Dm
    )
  );
}
const Am = oe(Em, [
    ["render", Om],
    ["__scopeId", "data-v-77575ff3"],
  ]),
  Bm = re({
    __name: "ZyroLoader",
    props: {
      color: { default: "var(--color-dark)" },
      size: { default: "40px" },
      weight: { default: "4px" },
    },
    setup(e, { expose: n }) {
      n(),
        rt((t) => ({
          "31918b4a": t.size,
          "19ef3f81": t.weight,
          "007e258c": t.color,
        }));
      const a = {};
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  Lm = { class: "loader" },
  xm = Nr(
    '<div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div>',
    5
  ),
  Rm = [xm];
function Hm(e, n, a, t, o, i) {
  return c(), f("div", Lm, Rm);
}
const zr = oe(Bm, [
    ["render", Hm],
    ["__scopeId", "data-v-a1cb4206"],
  ]),
  Nm = "light",
  $m = 200,
  Vm = { SHOW_MESSAGE: "showMessage", LINK_TO_PAGE: "linkToPage" },
  Um = re({
    __name: "PostSubmitElement",
    props: {
      successMessage: { default: "" },
      isError: { type: Boolean, default: !1 },
      isLoading: { type: Boolean, default: !1 },
      showSuccessMessage: { type: Boolean, default: !1 },
      theme: { default: Nm },
      hasBorderWidth: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(null),
        o = u(() => ({
          "--submit-element-border": a.hasBorderWidth
            ? ""
            : "var(--color-gray)",
        }));
      Le(t, () => {
        t.value &&
          t.value.scrollIntoView({ behavior: "smooth", block: "center" });
      });
      const i = {
        props: a,
        postSubmitRef: t,
        submitElementCSSVars: o,
        ZyroLoader: zr,
      };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  Cs = (e) => (Rt("data-v-00e42172"), (e = e()), Ht(), e),
  Ym = { key: 1, class: "success-message__heading" },
  Fm = { key: 2 },
  Wm = Cs(() =>
    E("div", { class: "submit-message__heading" }, " Something went wrong ", -1)
  ),
  qm = Cs(() => E("div", null, " Please try again later ", -1)),
  Gm = [Wm, qm];
function jm(e, n, a, t, o, i) {
  return a.isLoading || a.showSuccessMessage || a.isError
    ? (c(),
      f(
        "div",
        {
          key: 0,
          ref: "postSubmitRef",
          class: Z(["submit-message", `submit-message--${a.theme}`]),
          style: Be(t.submitElementCSSVars),
        },
        [
          a.isLoading
            ? (c(),
              q(t.ZyroLoader, {
                key: 0,
                color: "var(--grid-button-primary-background-color)",
              }))
            : a.showSuccessMessage && !a.isError
            ? (c(), f("div", Ym, X(a.successMessage), 1))
            : O("", !0),
          a.isError && !a.isLoading ? (c(), f("div", Fm, Gm)) : O("", !0),
        ],
        6
      ))
    : O("", !0);
}
const zm = oe(Um, [
    ["render", jm],
    ["__scopeId", "data-v-00e42172"],
  ]),
  Km = re({
    components: { GridForm: Am, PostSubmitElement: zm },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const { meta: e, forms: n, getPagePathFromId: a } = Ze();
      return { meta: e, forms: n, getPagePathFromId: a };
    },
    data() {
      return { isLoading: !1, showSuccessMessage: !1, isError: !1 };
    },
    methods: {
      async saveData({ token: e, model: n, elementId: a }) {
        await fetch(
          `https://builder-backend.hostinger.com/u1/data/v3/post/${e}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json;charset=UTF-8" },
            credentials: "omit",
            mode: "cors",
            body: JSON.stringify({ elementId: a, formData: n }),
          }
        ).then((t) => {
          if (!t.ok) throw new Error(t.statusText);
          return t;
        });
      },
      async onSubmit(e) {
        if (this.meta.isDemoTemplate || this.isInPreviewMode) {
          this.showSuccessMessage = !0;
          return;
        }
        this.isLoading = !0;
        let n = !1;
        setTimeout(() => {
          (n = !0),
            (this.isLoading = !(this.showSuccessMessage || this.isError));
        }, $m);
        try {
          await this.saveData({
            token: this.forms[this.data.formId].token,
            model: Object.fromEntries(
              Object.entries(e).map(([i, r]) => [i, r])
            ),
            elementId: this.data.elementId,
          }),
            (this.showSuccessMessage = !0);
          const { submitAction: a } = this.data.settings;
          if (!a || a.id === Vm.SHOW_MESSAGE) return;
          const { pageId: t } = this.data.settings.submitRedirectPage,
            o = this.getPagePathFromId({ pageId: t });
          this.$router.push({ path: o });
        } catch (a) {
          console.error(a), (this.isError = !0);
        } finally {
          n && (this.isLoading = !1);
        }
      },
    },
  });
function Qm(e, n, a, t, o, i) {
  const r = He("PostSubmitElement"),
    l = He("GridForm");
  return (
    c(),
    q(
      l,
      {
        id: e.id,
        "form-id": e.data.formId,
        settings: e.data.settings,
        "submit-button-data": e.data.submitButtonData,
        "submit-button-background-color": e.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover":
          e.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": e.data.submitButtonFontColor,
        "submit-button-font-color-hover": e.data.submitButtonFontColorHover,
        "submit-button-border-color": e.data.submitButtonBorderColor,
        "submit-button-border-color-hover": e.data.submitButtonBorderColorHover,
        "submit-button-font-family": e.data.submitButtonFontFamily,
        "submit-button-font-weight": e.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": e.data.mobile?.submitButtonFontSize,
        "submit-button-font-size-desktop": e.data.desktop?.submitButtonFontSize,
        "submit-button-border-width": e.data.submitButtonBorderWidth,
        "submit-button-border-radius": e.data.submitButtonBorderRadius,
        "show-success-message": e.showSuccessMessage,
        "is-error": e.isError,
        "is-user-site": !0,
        theme: e.data.settings.theme,
        "form-justify": e.data.settings.styles.justify,
        "form-button-justify-self":
          e.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self":
          e.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": e.data.formBackgroundColor,
        "form-border-width": e.data.formBorderWidth,
        "form-border-color": e.data.formBorderColor,
        "form-border-radius": e.data.formBorderRadius,
        "form-padding": e.data.formPadding,
        "input-fill-color": e.data.inputFillColor,
        "input-fill-color-hover": e.data.inputFillColorHover,
        "form-font-family": e.data.formFontFamily,
        "form-font-weight": e.data.formFontWeight,
        "label-text-color": e.data.labelTextColor,
        "label-text-size": e.data.desktop?.labelTextSize,
        "mobile-label-text-size": e.data.mobile?.labelTextSize,
        "input-text-color": e.data.inputTextColor,
        "input-text-color-hover": e.data.inputTextColorHover,
        "input-text-size": e.data.desktop?.inputTextSize,
        "mobile-input-text-size": e.data.mobile?.inputTextSize,
        "input-border-color": e.data.inputBorderColor,
        "input-border-color-hover": e.data.inputBorderColorHover,
        "input-border-width": e.data.inputBorderWidth,
        "input-border-radius": e.data.inputBorderRadius,
        "elements-vertical-spacing":
          e.data.desktop?.formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing":
          e.data.mobile?.formElementsVerticalSpacing,
        onOnSubmit: e.onSubmit,
      },
      {
        default: fe(() => [
          Oe(
            r,
            {
              "show-success-message": e.showSuccessMessage,
              "success-message": e.data.settings.successMessage,
              "is-loading": e.isLoading,
              "is-error": e.isError,
              theme: e.data.settings.theme,
              "has-border-width": e.data.formBorderWidth !== 0,
            },
            null,
            8,
            [
              "show-success-message",
              "success-message",
              "is-loading",
              "is-error",
              "theme",
              "has-border-width",
            ]
          ),
        ]),
        _: 1,
      },
      8,
      [
        "id",
        "form-id",
        "settings",
        "submit-button-data",
        "submit-button-background-color",
        "submit-button-background-color-hover",
        "submit-button-font-color",
        "submit-button-font-color-hover",
        "submit-button-border-color",
        "submit-button-border-color-hover",
        "submit-button-font-family",
        "submit-button-font-weight",
        "submit-button-font-size-mobile",
        "submit-button-font-size-desktop",
        "submit-button-border-width",
        "submit-button-border-radius",
        "show-success-message",
        "is-error",
        "theme",
        "form-justify",
        "form-button-justify-self",
        "mobile-form-button-justify-self",
        "form-background-color",
        "form-border-width",
        "form-border-color",
        "form-border-radius",
        "form-padding",
        "input-fill-color",
        "input-fill-color-hover",
        "form-font-family",
        "form-font-weight",
        "label-text-color",
        "label-text-size",
        "mobile-label-text-size",
        "input-text-color",
        "input-text-color-hover",
        "input-text-size",
        "mobile-input-text-size",
        "input-border-color",
        "input-border-color-hover",
        "input-border-width",
        "input-border-radius",
        "elements-vertical-spacing",
        "mobile-elements-vertical-spacing",
        "onOnSubmit",
      ]
    )
  );
}
const Zm = oe(Km, [["render", Qm]]),
  Xm = re({
    __name: "GridImage",
    props: {
      src: {},
      alt: {},
      href: { default: null },
      preventDrag: { type: Boolean },
      sizes: {},
      srcset: {},
      tagName: { default: Ku },
      target: { default: null },
      rel: { default: null },
      isLightboxEnabled: { type: Boolean },
      isUnstyled: { type: Boolean },
      resetMobilePosition: { type: Boolean, default: !0 },
      elementWidth: { default: 0 },
      elementHeight: { default: 0 },
      mobileBorderRadius: { default: 0 },
      desktopBorderRadius: { default: 0 },
      cropCssVars: { default: null },
      isOverflowVisible: { type: Boolean },
      isEager: { type: Boolean },
      isMobileImage: { type: Boolean },
      isInBuilder: { type: Boolean },
      isSvg: { type: Boolean },
      shapeMaskSource: { default: null },
      isInPreviewMode: { type: Boolean },
      overlayOpacity: { default: 0 },
    },
    emits: ["image-load", "image-click"],
    setup(e, { expose: n, emit: a }) {
      n(),
        rt((A) => ({
          "08a09b3a": y.value,
          "41b9bd48": T.value,
          "143cc87a": h.value,
          68139491: d.value,
          "161b5a04": v.value,
          ed9f83f0: k.value,
          "6c589be4": s.value,
          cb1185de: m.value,
        }));
      const t = e,
        o = a,
        i = M(null),
        r = M(!1),
        l = u(
          () =>
            t.elementHeight !== null && t.elementHeight > 0 && t.isMobileImage
        ),
        s = u(() =>
          t.isInBuilder
            ? "100%"
            : t.isInPreviewMode
            ? `${t.elementWidth}px`
            : l.value
            ? `${(t.elementWidth * 100) / Xt}vw`
            : "100%"
        ),
        m = u(() =>
          t.isInBuilder
            ? "auto"
            : t.isInPreviewMode
            ? `${t.elementHeight}px`
            : l.value
            ? `${(t.elementHeight * 100) / Xt}vw`
            : "auto"
        ),
        g = u(() => ({
          "--overflow": t.isOverflowVisible ? "visible" : null,
          ...t.cropCssVars,
        })),
        d = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementWidth * 100) / la}vw`
        ),
        v = u(() =>
          t.isInBuilder ? "100%" : `${(t.elementHeight * 100) / la}vw`
        ),
        h = u(() =>
          t.overlayOpacity ? `rgba(0, 0, 0, ${t.overlayOpacity / 100})` : null
        ),
        y = u(() =>
          t.shapeMaskSource
            ? null
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : null
        ),
        k = u(() =>
          t.shapeMaskSource
            ? null
            : t.mobileBorderRadius
            ? t.mobileBorderRadius
            : t.desktopBorderRadius
            ? t.desktopBorderRadius
            : null
        ),
        T = u(() => t.shapeMaskSource && `url('${t.shapeMaskSource}')`),
        _ = () => {
          o("image-load"), (r.value = !0);
        };
      Ee(() => {
        if (i.value) {
          if (i.value?.complete) {
            _();
            return;
          }
          i.value.addEventListener("load", _);
        }
      }),
        qn(() => {
          i.value && i.value.removeEventListener("load", _);
        });
      const b = {
        props: t,
        emit: o,
        imageRef: i,
        isLoaded: r,
        isMobileLayoutImage: l,
        mobileWidthCSSVar: s,
        mobileHeightCSSVar: m,
        imageCSSVars: g,
        smallDesktopWidthCSSVar: d,
        smallDesktopHeightCSSVar: v,
        overlayOpacityCSSVar: h,
        desktopBorderRadiusCSSVar: y,
        mobileBorderRadiusCSSVar: k,
        shapeMaskSourceCssVar: T,
        handleImageLoadEvent: _,
        get ANCHOR_TAG() {
          return Qu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE() {
          return pa;
        },
        get DATA_ATTRIBUTE_SELECTOR() {
          return Zu;
        },
        get DATA_ATTRIBUTE_SELECTOR_IMAGE() {
          return Xu;
        },
        get DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE() {
          return $r;
        },
      };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  }),
  Jm = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];
function eg(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    q(
      mn(a.tagName),
      nt({
        href: a.href,
        target: a.target,
        rel: a.rel,
        title: a.alt,
        style: t.imageCSSVars,
        class: [
          "image",
          {
            "image--zoom": a.isLightboxEnabled,
            "image--grid": !a.isUnstyled,
            "image--unstyled": a.isUnstyled,
            "image--link": a.tagName === t.ANCHOR_TAG,
            loaded: t.isLoaded,
          },
        ],
        [t.DATA_ATTRIBUTE_SELECTOR || ""]: t.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: n[0] || (n[0] = (l) => e.$emit("image-click", l)),
      }),
      {
        default: fe(() => [
          ue(
            E(
              "img",
              Ge(
                {
                  ref: "imageRef",
                  alt: a.alt,
                  src: a.src,
                  srcset: a.srcset,
                  sizes: a.sizes,
                  height: a.elementHeight,
                  width: a.elementWidth,
                  loading: a.isEager ? "eager" : "lazy",
                  class: {
                    "image__image--unstyled": a.isUnstyled,
                    "image__image--cropped": !!a.cropCssVars,
                    image__image: !a.isUnstyled,
                    "image__image--reset-m-position": a.resetMobilePosition,
                    "image__image--svg": a.isSvg,
                  },
                },
                as(
                  {
                    drag: a.preventDrag
                      ? (l) => l.preventDefault()
                      : () => null,
                    dragstart: a.preventDrag
                      ? (l) => l.preventDefault()
                      : () => null,
                  },
                  !0
                )
              ),
              null,
              16,
              Jm
            ),
            [[r, "builder-gridelement-gridimage"]]
          ),
          te(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      16,
      ["href", "target", "rel", "title", "style", "class"]
    )
  );
}
const Ps = oe(Xm, [
    ["render", eg],
    ["__scopeId", "data-v-47c05b4e"],
  ]),
  rl = (e, n) => {
    const a = Array(e).fill([]);
    return n.reduce((t, o, i) => {
      const r = i % e;
      return (t[r] = [...t[r], { ...o, originalIndex: i }]), t;
    }, a);
  },
  tg = re({
    name: "GridGallery",
    components: { GridImage: Ps },
    props: {
      columnCount: { type: Number, required: !0 },
      columnGap: { type: Number, required: !0 },
      mobileColumnCount: { type: Number, required: !0 },
      mobileColumnGap: { type: Number, required: !0 },
      gridImages: { type: Array, required: !0 },
      isLightboxEnabled: { type: Boolean, required: !1 },
      isMasonryLayout: { type: Boolean, default: !1 },
      loadImages: { type: Boolean, default: !0 },
    },
    emits: ["image-load"],
    setup(e) {
      const n = u(() => rl(e.columnCount, e.gridImages)),
        a = u(() => rl(e.mobileColumnCount, e.gridImages));
      return { masonryColumns: n, mobileMasonryColumns: a };
    },
    computed: {
      gridGalleryCSSVars() {
        return {
          "--column-gap": `${this.columnGap}px`,
          "--column-count": this.columnCount,
          "--m-column-gap": `${this.mobileColumnGap}px`,
          "--m-column-count": this.mobileColumnCount,
        };
      },
    },
  }),
  ag = { class: "gallery" };
function ng(e, n, a, t, o, i) {
  const r = He("GridImage");
  return (
    c(),
    f("div", ag, [
      e.isMasonryLayout
        ? (c(),
          f(
            "div",
            {
              key: 0,
              class: "gallery__masonry",
              style: Be(e.gridGalleryCSSVars),
            },
            [
              (c(!0),
              f(
                ge,
                null,
                we(
                  e.mobileMasonryColumns,
                  (l, s) => (
                    c(),
                    f(
                      "div",
                      { key: s, class: "gallery__masonry-mobile-columns" },
                      [
                        (c(!0),
                        f(
                          ge,
                          null,
                          we(
                            l,
                            (m, g) => (
                              c(),
                              q(
                                r,
                                {
                                  key: `${g}${m.src}`,
                                  class: "gallery__masonry-image",
                                  alt: m.alt,
                                  src: e.loadImages ? m.src : "",
                                  srcset: m.srcset,
                                  sizes: m.sizes,
                                  "element-width": m.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (d) =>
                                    e.$emit("image-click", m.originalIndex),
                                  onImageLoad:
                                    n[0] ||
                                    (n[0] = (d) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
              (c(!0),
              f(
                ge,
                null,
                we(
                  e.masonryColumns,
                  (l, s) => (
                    c(),
                    f(
                      "div",
                      { key: s, class: "gallery__masonry-desktop-columns" },
                      [
                        (c(!0),
                        f(
                          ge,
                          null,
                          we(
                            l,
                            (m, g) => (
                              c(),
                              q(
                                r,
                                {
                                  key: `${g}${m.src}`,
                                  class: "gallery__masonry-image",
                                  alt: m.alt,
                                  src: e.loadImages ? m.src : "",
                                  srcset: m.srcset,
                                  sizes: m.sizes,
                                  "element-width": m.width,
                                  "prevent-drag": "",
                                  "is-eager": "",
                                  "is-unstyled": "",
                                  "reset-mobile-position": !1,
                                  "is-lightbox-enabled": e.isLightboxEnabled,
                                  onImageClick: (d) =>
                                    e.$emit("image-click", m.originalIndex),
                                  onImageLoad:
                                    n[1] ||
                                    (n[1] = (d) => e.$emit("image-load")),
                                },
                                null,
                                8,
                                [
                                  "alt",
                                  "src",
                                  "srcset",
                                  "sizes",
                                  "element-width",
                                  "is-lightbox-enabled",
                                  "onImageClick",
                                ]
                              )
                            )
                          ),
                          128
                        )),
                      ]
                    )
                  )
                ),
                128
              )),
            ],
            4
          ))
        : (c(),
          f(
            "div",
            { key: 1, class: "gallery__grid", style: Be(e.gridGalleryCSSVars) },
            [
              (c(!0),
              f(
                ge,
                null,
                we(
                  e.gridImages,
                  (l, s) => (
                    c(),
                    f("div", { key: `${s}${l.src}`, class: "gallery__block" }, [
                      (c(),
                      q(
                        r,
                        {
                          key: `${s}${l.src}`,
                          alt: l.alt,
                          src: e.loadImages ? l.src : "",
                          srcset: l.srcset,
                          sizes: l.sizes,
                          "element-width": l.width,
                          "element-height": l.height,
                          "prevent-drag": "",
                          "is-lightbox-enabled": e.isLightboxEnabled,
                          "reset-mobile-position": !1,
                          "is-eager": "",
                          class: "gallery__image",
                          onImageClick: (m) => e.$emit("image-click", s),
                          onImageLoad:
                            n[2] || (n[2] = (m) => e.$emit("image-load")),
                        },
                        null,
                        8,
                        [
                          "alt",
                          "src",
                          "srcset",
                          "sizes",
                          "element-width",
                          "element-height",
                          "is-lightbox-enabled",
                          "onImageClick",
                        ]
                      )),
                    ])
                  )
                ),
                128
              )),
            ],
            4
          )),
      te(e.$slots, "default", {}, void 0, !0),
    ])
  );
}
const og = oe(tg, [
    ["render", ng],
    ["__scopeId", "data-v-0346154b"],
  ]),
  rg = (e) => {
    const n = u(() => e.data.images.length > 0),
      a = u(() => Number.parseInt(e.data.desktop.columnCount || 1, 10)),
      t = u(() => Number.parseInt(e.data.desktop.columnGap || 0, 10)),
      o = u(() => Number.parseInt(e.data.mobile.columnCount || 1, 10)),
      i = u(() => Number.parseInt(e.data.mobile.columnGap || 0, 10)),
      r = u(() => e.data.settings.layout === "masonry");
    return {
      hasGridImages: n,
      columnCount: a,
      columnGap: t,
      isMasonryLayout: r,
      mobileColumnCount: o,
      mobileColumnGap: i,
    };
  },
  lt = {
    Backspace: "Backspace",
    ShiftLeft: "ShiftLeft",
    Escape: "Escape",
    Space: "Space",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    Delete: "Delete",
    KeyX: "KeyX",
    KeyC: "KeyC",
    KeyD: "KeyD",
    KeyY: "KeyY",
    KeyZ: "KeyZ",
    OSLeft: "OSLeft",
    NumLockSlash: "NumLockSlash",
    KeySlash: "Slash",
    Enter: "Enter",
    BracketLeft: "BracketLeft",
    BracketRight: "BracketRight",
  },
  ig = {
    8: lt.Backspace,
    16: lt.ShiftLeft,
    27: lt.Escape,
    32: lt.Space,
    37: lt.ArrowLeft,
    38: lt.ArrowUp,
    39: lt.ArrowRight,
    40: lt.ArrowDown,
    46: lt.Delete,
    67: lt.KeyC,
    68: lt.KeyD,
    88: lt.KeyX,
    89: lt.KeyY,
    90: lt.KeyZ,
    91: lt.OSLeft,
    111: lt.NumLockSlash,
    191: lt.KeySlash,
    219: lt.BracketLeft,
    221: lt.BracketRight,
  },
  $o = (e) => {
    let n;
    return (
      e
        ? e.code !== void 0
          ? (n = e.code === "MetaLeft" ? "OSLeft" : e.code)
          : e.keyCode !== void 0 && (n = ig[e.keyCode])
        : (n = void 0),
      n
    );
  },
  Da = M([]),
  Ma = M(null),
  on = () => {
    const e = u(() => Da.value.length > 0),
      n = u(() => Da.value.length > 1),
      a = u(() => Da.value.length - 1),
      t = u(() => Ma.value === Da.value.length - 1),
      o = u(() => Ma.value === 0),
      i = u(() => Da.value[Ma.value]),
      r = (y) => {
        Ma.value = y;
      },
      l = (y) => {
        Da.value = Array.isArray(y) ? y : [y];
      },
      s = () => (o.value ? r(a.value) : r(Ma.value - 1)),
      m = () => (t.value ? r(0) : r(Ma.value + 1)),
      g = () => {
        l([]), r(null);
      },
      d = () => {
        n.value || g();
      },
      v = (y, k = 0) => {
        l(y), r(k);
      },
      h = (y) => {
        $o(y) === lt.ArrowRight && m(),
          $o(y) === lt.ArrowLeft && s(),
          $o(y) === lt.Escape && g();
      };
    return {
      lightboxImages: u(() => Da.value),
      currentLightboxImageIndex: u(() => Ma.value),
      currentLightboxImage: i,
      lastImageIndex: a,
      isFirstImage: o,
      isLastImage: t,
      isLightboxOpen: e,
      isImageGalleryMode: n,
      setLightboxImages: l,
      setCurrentLightboxImageIndex: r,
      goToNextImage: m,
      goToPreviousImage: s,
      handleLightboxNav: h,
      closeLightbox: g,
      addImagesToLightbox: v,
      onLightboxClickOutside: d,
    };
  },
  lg = "lightbox",
  sg = re({
    name: "GridGalleryProviderUser",
    components: { GridGallery: og },
    props: {
      data: { type: Object, required: !0 },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
    },
    emits: ["image-load"],
    setup(e) {
      const { siteId: n } = Ze(),
        {
          columnCount: a,
          columnGap: t,
          isMasonryLayout: o,
          mobileColumnCount: i,
          mobileColumnGap: r,
        } = rg(e),
        { addImagesToLightbox: l } = on(),
        s = u(() => {
          const { right: b } = an(e.mobileBlockPadding ?? "");
          return Number.parseInt(b, 10) || 0;
        }),
        m = M(!1),
        g = () => {
          m.value = window.matchMedia(`(max-width: ${cr}px)`).matches;
        };
      Ee(() => {
        g(), window.addEventListener("resize", g);
      }),
        qn(() => {
          window.removeEventListener("resize", g);
        });
      const d = u(() => (m.value ? i.value : a.value)),
        v = u(() => Math.ceil((t.value + e.elementWidth) / d.value) - t.value),
        h = u(() => !o.value && v.value),
        y = u(() =>
          [`(min-width: ${cr}px) ${v.value}px`, `${100 / d.value}vw`].join(", ")
        ),
        k = u(() =>
          e.data.images.map((b) => {
            const A = u(() =>
                st(b.origin, b.path, n.value, {
                  width: v.value,
                  height: h.value,
                })
              ),
              D = u(() =>
                zc(b.origin, b.path, n.value, {
                  width: v.value,
                  height: h.value,
                  columnCount: d.value,
                  columnGap: t.value,
                  mobilePadding: s.value,
                  isMasonryLayout: o.value,
                })
              );
            return {
              ...b,
              src: A.value,
              srcset: D.value,
              sizes: y.value,
              width: v.value,
              height: h.value,
            };
          })
        ),
        T = u(() => e.data.settings.imageClickAction === lg);
      return {
        gridImages: k,
        isLightboxEnabled: T,
        handleGalleryImageClick: (b) => {
          if (T.value) {
            const A = e.data.images.map((D) => ({
              alt: D.alt,
              src: ys(D.origin, D.path, n.value),
            }));
            l(A, b);
          }
        },
        columnCount: a,
        columnGap: t,
        isMasonryLayout: o,
        mobileColumnCount: i,
        mobileColumnGap: r,
      };
    },
  });
function ug(e, n, a, t, o, i) {
  const r = He("GridGallery");
  return (
    c(),
    q(
      r,
      {
        "grid-images": e.gridImages,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "column-count": e.columnCount,
        "column-gap": e.columnGap,
        "mobile-column-count": e.mobileColumnCount,
        "mobile-column-gap": e.mobileColumnGap,
        "is-masonry-layout": e.isMasonryLayout,
        onImageClick: e.handleGalleryImageClick,
        onImageLoad: n[0] || (n[0] = (l) => e.$emit("image-load")),
      },
      null,
      8,
      [
        "grid-images",
        "is-lightbox-enabled",
        "column-count",
        "column-gap",
        "mobile-column-count",
        "mobile-column-gap",
        "is-masonry-layout",
        "onImageClick",
      ]
    )
  );
}
const cg = oe(sg, [["render", ug]]),
  dg = (e, n, a) => Math.min(Math.max(e, n), a),
  il = 1920,
  ll = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (e) {
      const r = a / o;
      return Math.round(i * r * n);
    }
    return Math.round(t * n);
  },
  sl = ({
    isAspectRatioBiggerThanContainer: e,
    scale: n,
    containerHeight: a,
    containerWidth: t,
    naturalImageHeight: o,
    naturalImageWidth: i,
  }) => {
    if (!e) {
      const r = t / i;
      return Math.round(o * r * n);
    }
    return Math.round(a * n);
  },
  Xn = ({
    offsetInPx: e,
    imageSize: n,
    containerSize: a,
    offsetInPercent: t,
  }) => {
    if (!e) return t;
    const o = (n - a) / 100;
    return dg(t + e / o, 0, 100);
  },
  Jn = ({ imageSize: e, containerSize: n, offset: a }) => (n - e) * (a / 100),
  ul = ({
    prefix: e,
    left: n,
    top: a,
    scale: t,
    isAspectRatioLargerThanContainer: o,
  }) => ({
    [`--${e}-left`]: `${n}px`,
    [`--${e}-top`]: `${a}px`,
    [`--${e}-scale`]: t,
    [`--${e}-width`]: o ? "auto" : "100%",
    [`--${e}-height`]: o ? "100%" : "auto",
  }),
  cl = ({
    left: e,
    top: n,
    imageWidth: a,
    imageHeight: t,
    containerWidth: o,
    containerHeight: i,
  }) => ({
    left: Math.round(Math.abs(e)),
    top: Math.round(Math.abs(n)),
    right: Math.round(a - o - Math.abs(e)),
    bottom: Math.round(t - i - Math.abs(n)),
    imageWidth: a,
    imageHeight: t,
  }),
  mg = (e, n) => {
    if (e > il) {
      const a = il / e;
      return { width: Math.round(e * a), height: Math.round(n * a) };
    }
    return { width: e, height: n };
  },
  dl = (e, { dragDeltaYPosition: n, dragDeltaXPosition: a, href: t } = {}) => {
    const o = u(() =>
        mg(e.data.fullResolutionWidth, e.data.fullResolutionHeight)
      ),
      i = u(() => o.value.width),
      r = u(() => o.value.height),
      l = () => i.value / r.value,
      s = u(() => e.data.desktop?.crop),
      m = u(() => e.renderedPosition || e.data.desktop),
      g = u(() => m.value.width),
      d = u(() => m.value.height),
      v = u(() => g.value / d.value),
      h = u(() => l() > v.value),
      y = u(() =>
        ll({
          isAspectRatioBiggerThanContainer: h.value,
          scale: s.value.scale,
          containerHeight: d.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      k = u(() =>
        sl({
          isAspectRatioBiggerThanContainer: h.value,
          scale: s.value.scale,
          containerHeight: d.value,
          containerWidth: g.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      T = u(() =>
        Xn({
          offsetInPx: -n?.value,
          imageSize: k.value,
          containerSize: d.value,
          offsetInPercent: s.value.top,
        })
      ),
      _ = u(() =>
        Jn({ imageSize: k.value, containerSize: d.value, offset: T.value })
      ),
      b = u(() =>
        Xn({
          offsetInPx: -a?.value,
          imageSize: y.value,
          containerSize: g.value,
          offsetInPercent: s.value.left,
        })
      ),
      A = u(() =>
        Jn({ imageSize: y.value, containerSize: g.value, offset: b.value })
      ),
      D = u(() =>
        cl({
          left: A.value,
          top: _.value,
          imageWidth: y.value,
          imageHeight: k.value,
          containerWidth: g.value,
          containerHeight: d.value,
        })
      ),
      I = u(() => e.data.mobile.crop || s.value),
      R = u(() => e.renderedPosition || e.data.mobile),
      L = u(() => R.value.width),
      K = u(() => R.value.height),
      W = u(() => L.value / K.value),
      C = u(() => l() > W.value),
      H = u(() =>
        ll({
          isAspectRatioBiggerThanContainer: C.value,
          scale: I.value.scale,
          containerHeight: K.value,
          containerWidth: L.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      F = u(() =>
        sl({
          isAspectRatioBiggerThanContainer: C.value,
          scale: I.value.scale,
          containerHeight: K.value,
          containerWidth: L.value,
          naturalImageHeight: r.value,
          naturalImageWidth: i.value,
        })
      ),
      Q = u(() =>
        Xn({
          offsetInPx: -n?.value,
          imageSize: F.value,
          containerSize: K.value,
          offsetInPercent: I.value.top,
        })
      ),
      B = u(() =>
        Jn({ imageSize: F.value, containerSize: K.value, offset: Q.value })
      ),
      P = u(() =>
        Xn({
          offsetInPx: -a?.value,
          imageSize: H.value,
          containerSize: L.value,
          offsetInPercent: I.value.left,
        })
      ),
      V = u(() =>
        Jn({ imageSize: H.value, containerSize: L.value, offset: P.value })
      ),
      U = u(() =>
        cl({
          left: V.value,
          top: B.value,
          imageWidth: H.value,
          imageHeight: F.value,
          containerWidth: L.value,
          containerHeight: K.value,
        })
      ),
      G = u(() => {
        const S = !["svg", "ico", "gif"].includes(Ja(e.data.settings.path));
        if (!s.value || !i.value || !r.value || !S) return null;
        const p = ul({
            prefix: "desktop",
            left: A.value,
            top: _.value,
            scale: s.value.scale,
            isAspectRatioLargerThanContainer: h.value,
          }),
          Y = ul({
            prefix: "mobile",
            left: V.value,
            top: B.value,
            scale: I.value.scale,
            isAspectRatioLargerThanContainer: C.value,
          });
        return { ...p, ...Y };
      });
    return {
      href: t,
      cropCSSVars: G,
      desktopCropParams: D,
      mobileCropParams: U,
      desktopTop: _,
      desktopLeft: A,
      mobileLeft: V,
      mobileTop: B,
      desktopTopPercentWithOffset: T,
      desktopLeftPercentWithOffset: b,
    };
  },
  gg = {
    __name: "GridImageProviderUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      mobileBlockPadding: { type: String, default: "0px" },
      elementWidth: { type: Number, default: null },
      elementHeight: { type: Number, default: null },
      mobileElementWidth: { type: Number, default: null },
      mobileElementHeight: { type: Number, default: null },
      resetMobilePosition: { type: Boolean, default: !0 },
      currentLocale: { type: String, required: !0 },
      mobileBorderRadius: { type: Number, default: 0 },
      desktopBorderRadius: { type: Number, default: 0 },
      shapeMaskSource: { type: String, default: null },
      isInPreviewMode: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    setup(e, { expose: n }) {
      n(), rt((Q) => ({ "7b817743": I.value, "4e5d6a41": R.value }));
      const a = e,
        { addImagesToLightbox: t } = on(),
        { siteId: o, getPagePathFromId: i } = Ze(),
        {
          cropCSSVars: r,
          desktopCropParams: l,
          mobileCropParams: s,
          href: m,
        } = dl(a, {
          href: u(() =>
            a.data.linkType === ur
              ? i({ pageId: a.data.linkedPageId })
              : a.data.href
          ),
        }),
        g = (Q) => {
          const { fullResolutionWidth: B, fullResolutionHeight: P } = a.data,
            {
              left: V,
              top: U,
              right: G,
              bottom: S,
              imageWidth: p,
              imageHeight: Y,
            } = Q,
            j = V / p,
            ee = U / Y,
            J = G / p,
            N = S / Y;
          return { left: B * j, top: P * ee, right: B * J, bottom: P * N };
        },
        d = (Q) => {
          const { top: B, right: P, bottom: V, left: U } = g(Q);
          return `${B};${P};${V};${U}`;
        },
        v = u(() => [a.data.settings.origin, a.data.settings.path, o.value]),
        h = u(() =>
          r.value
            ? st(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                trim: d(l.value),
              })
            : st(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles["object-fit"] === "contain",
              })
        ),
        y = u(() => Ja(a.data.settings.path) === "svg"),
        k = u(() => a.mobileElementWidth && a.mobileElementHeight),
        T = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? h.value
            : r.value
            ? st(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                trim: d(s.value),
              })
            : st(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
              })
        ),
        _ = u(() =>
          r.value
            ? La(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(l.value),
              })
            : La(...v.value, {
                width: a.elementWidth,
                height: a.elementHeight,
                shouldContain:
                  a.data.settings.styles["object-fit"] === "contain",
              })
        ),
        b = u(() =>
          !a.mobileElementHeight || a.mobileElementHeight < 0
            ? _.value
            : r.value
            ? La(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                shouldContain: !1,
                mobilePadding: 0,
                trim: d(s.value),
              })
            : La(...v.value, {
                width: a.mobileElementWidth,
                height: a.mobileElementHeight,
                mobilePadding: 0,
                shouldContain: !1,
              })
        ),
        A = u(() => {
          const { right: Q } = an(a.mobileBlockPadding ?? ""),
            B = Q ? Number.parseInt(Q, 10) : null;
          return Nn(a.elementWidth, B);
        }),
        D = () => {
          a.data.settings.clickAction === Ao &&
            t({
              src: st(a.data.settings.origin, a.data.settings.path, o.value),
              srcset: ha(a.data.settings.origin, a.data.settings.path, o.value),
              alt: a.data.settings.alt,
            });
        },
        I = u(() => `${a.elementHeight}px`),
        R = u(() => `${a.mobileElementHeight}px`),
        L = u(() => a.data.settings.alt),
        K = u(() => (a.data.settings.clickAction === Pi ? "a" : "div")),
        W = u(() => a.data.target),
        C = u(() => a.data.rel),
        H = u(() => a.data.settings.clickAction === Ao),
        F = {
          props: a,
          addImagesToLightbox: t,
          siteId: o,
          getPagePathFromId: i,
          cropCSSVars: r,
          desktopCropParams: l,
          mobileCropParams: s,
          href: m,
          calculateFullResolutionTrim: g,
          constructTrimParamForCloudflare: d,
          imagePathParams: v,
          src: h,
          isSvg: y,
          isMobileLayout: k,
          mobileSrc: T,
          srcset: _,
          mobileSrcset: b,
          sizes: A,
          handleImageClick: D,
          elementHeightCssVar: I,
          mobileElementHeightCssVar: R,
          alt: L,
          tagName: K,
          target: W,
          rel: C,
          isLightboxEnabled: H,
          computed: u,
          GridImage: Ps,
          get useLightbox() {
            return on;
          },
          get IMAGE_CLICK_ACTION_LINK() {
            return Pi;
          },
          get IMAGE_CLICK_ACTION_LIGHTBOX() {
            return Ao;
          },
          get LINK_TYPE_INTERNAL() {
            return ur;
          },
          get getOptimizedSrc() {
            return st;
          },
          get getGridItemSrcset() {
            return La;
          },
          get getGridItemSizes() {
            return Nn;
          },
          get getFullWidthSrcset() {
            return ha;
          },
          get parseCSSSides() {
            return an;
          },
          get useGridImage() {
            return dl;
          },
          get getExtension() {
            return Ja;
          },
          get useSiteGlobal() {
            return Ze;
          },
        };
      return (
        Object.defineProperty(F, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        F
      );
    },
  },
  vg = ["id"];
function pg(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      {
        id: a.id,
        class: Z([
          "image-wrapper",
          { "image-wrapper--layout": t.isMobileLayout },
        ]),
      },
      [
        Oe(
          t.GridImage,
          {
            class: "image-wrapper--desktop",
            alt: t.alt,
            href: t.href,
            sizes: t.sizes,
            src: t.src,
            srcset: t.srcset,
            "tag-name": t.tagName,
            target: t.target,
            rel: t.rel,
            "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
            "is-lightbox-enabled": t.isLightboxEnabled,
            "element-height": a.elementHeight,
            "element-width": a.elementWidth,
            "shape-mask-source": a.shapeMaskSource,
            "reset-mobile-position": a.resetMobilePosition,
            "mobile-border-radius": a.mobileBorderRadius,
            "desktop-border-radius": a.desktopBorderRadius,
            "is-in-preview-mode": a.isInPreviewMode,
            "overlay-opacity": a.overlayOpacity,
            onImageClick: t.handleImageClick,
          },
          null,
          8,
          [
            "alt",
            "href",
            "sizes",
            "src",
            "srcset",
            "tag-name",
            "target",
            "rel",
            "is-eager",
            "is-lightbox-enabled",
            "element-height",
            "element-width",
            "shape-mask-source",
            "reset-mobile-position",
            "mobile-border-radius",
            "desktop-border-radius",
            "is-in-preview-mode",
            "overlay-opacity",
          ]
        ),
        t.isMobileLayout
          ? (c(),
            q(
              t.GridImage,
              {
                key: 0,
                "is-mobile-image": !0,
                class: "image-wrapper--mobile",
                alt: t.alt,
                href: t.href,
                sizes: t.sizes,
                src: t.mobileSrc,
                srcset: t.mobileSrcset,
                "tag-name": t.tagName,
                "is-svg": t.isSvg,
                target: t.target,
                rel: t.rel,
                "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
                "is-lightbox-enabled": t.isLightboxEnabled,
                "element-height": a.mobileElementHeight,
                "element-width": a.mobileElementWidth,
                "shape-mask-source": a.shapeMaskSource,
                "reset-mobile-position": a.resetMobilePosition,
                "mobile-border-radius": a.mobileBorderRadius,
                "desktop-border-radius": a.desktopBorderRadius,
                "overlay-opacity": a.overlayOpacity,
                "is-in-preview-mode": a.isInPreviewMode,
                onImageClick: t.handleImageClick,
              },
              null,
              8,
              [
                "alt",
                "href",
                "sizes",
                "src",
                "srcset",
                "tag-name",
                "is-svg",
                "target",
                "rel",
                "is-eager",
                "is-lightbox-enabled",
                "element-height",
                "element-width",
                "shape-mask-source",
                "reset-mobile-position",
                "mobile-border-radius",
                "desktop-border-radius",
                "overlay-opacity",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
      ],
      10,
      vg
    )
  );
}
const fg = oe(gg, [
    ["render", pg],
    ["__scopeId", "data-v-b5c3fcb0"],
  ]),
  hg = re({
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      poster: { type: String, default: null },
    },
    emits: ["media-load"],
  }),
  yg = ["src", "poster"],
  bg = ["src", "alt"];
function _g(e, n, a, t, o, i) {
  return (
    c(),
    f("figure", null, [
      e.src.includes("video") || e.src.includes(".mp4")
        ? (c(),
          f(
            "video",
            {
              key: 0,
              src: e.src,
              poster: e.poster,
              class: "media-item",
              controls: "",
              onProgressOnce: n[0] || (n[0] = (r) => e.$emit("media-load")),
            },
            null,
            40,
            yg
          ))
        : (c(),
          f(
            "img",
            {
              key: 1,
              src: e.src,
              alt: e.alt,
              class: "media-item",
              onLoad: n[1] || (n[1] = (r) => e.$emit("media-load")),
            },
            null,
            40,
            bg
          )),
    ])
  );
}
const wg = oe(hg, [
    ["render", _g],
    ["__scopeId", "data-v-c35ee7e4"],
  ]),
  kg = re({
    components: { GridInstagramFeedMediaItemFigure: wg },
    props: {
      src: { type: String, default: null },
      alt: { type: String, default: null },
      href: { type: String, default: null },
      poster: { type: String, default: null },
    },
    data() {
      return {
        DATA_ATTRIBUTE_ANIMATION_ROLE: pa,
        DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: $r,
        isLoaded: !1,
      };
    },
  }),
  Sg = ["href"],
  Tg = { key: 1 },
  Cg = { key: 2, class: "placeholder" };
function Pg(e, n, a, t, o, i) {
  const r = He("GridInstagramFeedMediaItemFigure");
  return (
    c(),
    f(
      "div",
      nt({
        class: ["media-wrapper", { loaded: e.isLoaded }],
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
      }),
      [
        e.src && e.href
          ? (c(),
            f(
              "a",
              {
                key: 0,
                title: "Open instagram page of this image",
                href: e.href,
                rel: "noopener",
                target: "_blank",
              },
              [
                Oe(
                  r,
                  {
                    src: e.src,
                    alt: e.alt,
                    poster: e.poster,
                    onMediaLoad: n[0] || (n[0] = (l) => (e.isLoaded = !0)),
                  },
                  null,
                  8,
                  ["src", "alt", "poster"]
                ),
              ],
              8,
              Sg
            ))
          : e.src && !e.href
          ? (c(),
            f("div", Tg, [
              Oe(
                r,
                {
                  src: e.src,
                  alt: e.alt,
                  poster: e.poster,
                  onMediaLoad: n[1] || (n[1] = (l) => (e.isLoaded = !0)),
                },
                null,
                8,
                ["src", "alt", "poster"]
              ),
            ]))
          : (c(), f("div", Cg)),
      ],
      16
    )
  );
}
const Ig = oe(kg, [
    ["render", Pg],
    ["__scopeId", "data-v-8ece2404"],
  ]),
  Eg = re({
    components: { GridInstagramFeedMediaItem: Ig },
    props: {
      id: { type: String, required: !0 },
      media: { type: Array, default: () => [] },
    },
  }),
  Dg = ["id"];
function Mg(e, n, a, t, o, i) {
  const r = He("GridInstagramFeedMediaItem");
  return (
    c(),
    f(
      "div",
      { id: e.id, class: "instagram-feed" },
      [
        (c(!0),
        f(
          ge,
          null,
          we(
            e.media,
            (l) => (
              c(),
              q(
                r,
                {
                  key: l.src,
                  src: l.src,
                  href: l.href,
                  alt: l.alt,
                  poster: l.poster,
                },
                null,
                8,
                ["src", "href", "alt", "poster"]
              )
            )
          ),
          128
        )),
      ],
      8,
      Dg
    )
  );
}
const Og = oe(Eg, [["render", Mg]]),
  ml = [
    { alt: "Workstation", id: "qc2YaEHSYsc", src: `${ot}/workstation.jpg` },
    {
      alt: "Waterfall between rocks",
      id: "ifnzcFXUmH0",
      src: `${ot}/waterfall-between-rocks.jpg`,
    },
    {
      alt: "Trees with snow",
      id: "J2vryWaTqlB",
      src: `${ot}/trees-with-snow.png`,
    },
    { alt: "Tree buds", id: "ZzmFPZuw7S1", src: `${ot}/tree-buds.jpg` },
    {
      alt: "Tiger drinking water",
      id: "k37Jfax7a6k",
      src: `${ot}/tiger-drinking-water.jpg`,
    },
    {
      alt: "Tall well preserved buildings",
      id: "gTNSQDsXWp7",
      src: `${ot}/tall-well-preserved-buildings.jpg`,
    },
    {
      alt: "Sunny beautiful wall",
      id: "QEdmdqjqcMf",
      src: `${ot}/sunny-beautiful-wall.jpg`,
    },
    { alt: "Stereo gear", id: "iUXujDl2onh", src: `${ot}/stereo-gear.jpg` },
    { alt: "Rooftop oasis", id: "LWHjQE4HOv7", src: `${ot}/rooftop-oasis.jpg` },
    { alt: "Rocky beach", id: "o4qz1QOQcpJ", src: `${ot}/rocky-beach.jpg` },
    {
      alt: "Photographer holding camera",
      id: "VAHQ4wGABhK",
      src: `${ot}/photographer-holding-camera.jpg`,
    },
    { alt: "Koi fishes", id: "zg35JVHQ4wG", src: `${ot}/koi-fishes.jpg` },
    {
      alt: "Human head artificially created",
      id: "zg35JVl8GY2",
      src: `${ot}/human-head-artificially-created.jpg`,
    },
    {
      alt: "Horse eating grass",
      id: "dBwJoATZJBH",
      src: `${ot}/horse-eating-grass.jpg`,
    },
    {
      alt: "Fluffy decoration in water",
      id: "HR21NDsphkV",
      src: `${ot}/fluffy-docoration-in-water.jpg`,
    },
    {
      alt: "Elk looking at camera",
      id: "oLq0J4X2h2P",
      src: `${ot}/elk-looking-at-camera.jpg`,
    },
    {
      alt: "Dog running in snow",
      id: "dbULY2RIxXc",
      src: `${ot}/dog-running-in-snow.jpg`,
    },
    {
      alt: "Clean workspace",
      id: "WRmXHA1JA8H",
      src: `${ot}/clean-workspace.jpg`,
    },
    {
      alt: "Cinematic food shot",
      id: "YgbHW4EtzbY",
      src: `${ot}/cinematic-food-shot.jpg`,
    },
    {
      alt: "Christmas houses",
      id: "Eyoj1y8hvYz",
      src: `${ot}/christmas-houses.jpg`,
    },
    {
      alt: "Bird sitting on branch",
      id: "yQKxjLtI8eg",
      src: `${ot}/bird-sitting-on-branch.jpg`,
    },
    {
      alt: "Beautiful entry to private property",
      id: "1StnvFtqFjR",
      src: `${ot}/beautiful-entry-to-private-property.jpg`,
    },
    {
      alt: "African animals",
      id: "nPjqWNmfFf0",
      src: `${ot}/african-animals.jpg`,
    },
    { alt: "Workspace", id: "7gsm5H6lHSH", src: `${ot}/workspace.jpg` },
  ],
  Ag = "https://graph.instagram.com/me/media",
  Bg = ["id", "permalink", "caption", "media_url", "thumbnail_url"],
  Lg = ({
    elementId: e,
    elementData: n,
    siteId: a,
    getInstagramTokenHandler: t,
    cleanupCallback: o,
  }) => {
    const i = u(() => n.value.settings["item-count"]),
      r = M(null),
      l = M([]),
      s = u(() =>
        l.value.length > 0
          ? l.value.filter(({ src: d }) => typeof d < "u").slice(0, i.value)
          : new Array(i.value).fill({})
      ),
      m = async () => {
        const d = new URL(Ag);
        d.searchParams.set("fields", Bg.join(",")),
          d.searchParams.set("access_token", r.value);
        const v = await fetch(d.toString());
        return v.ok
          ? (await v.json()).data
          : Promise.reject(new Error("Failed to fetch Instagram media"));
      };
    return {
      media: s,
      init: async () => {
        try {
          r.value = await t({ siteId: a, elementId: e.value });
        } catch {
          l.value = ml;
          return;
        }
        try {
          const d = await m();
          l.value = d.map((v) => ({
            id: v.id,
            src: v.media_url,
            alt: v.caption,
            href: v.permalink,
            poster: v.thumbnail_url,
          }));
        } catch (d) {
          throw ((l.value = ml), o && o(r.value), d);
        }
      },
      itemGap: u(() => n.value.settings.styles["item-gap"]),
    };
  },
  xg = re({
    components: { GridInstagramFeed: Og },
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
    },
    emits: ["media-loaded"],
    setup(e, n) {
      const { siteId: a } = Ze(),
        t = u(() => e.id),
        o = u(() => e.data),
        i = async ({ siteId: s, elementId: m }) =>
          (
            await (
              await fetch(
                `https://builder-backend.hostinger.com/u1/instagram/token/${s}/${m}`
              )
            ).json()
          ).accessToken,
        { media: r, init: l } = Lg({
          elementId: t,
          elementData: o,
          siteId: a.value,
          getInstagramTokenHandler: i,
        });
      return (
        Ee(() => {
          l();
        }),
        Le(
          r,
          async (s) => {
            s?.length && (await Dt(), n.emit("media-loaded"));
          },
          { immediate: !1 }
        ),
        { media: r }
      );
    },
  });
function Rg(e, n, a, t, o, i) {
  const r = He("GridInstagramFeed");
  return c(), q(r, { id: e.id, media: e.media }, null, 8, ["id", "media"]);
}
const Hg = oe(xg, [["render", Rg]]),
  Ng = re({
    name: "GridMap",
    props: {
      isIframeLoaded: { type: Boolean, default: !1 },
      shouldRender: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
    },
    computed: {
      renderSrc() {
        return this.shouldRender ? this.src : null;
      },
    },
  }),
  $g = ["src"],
  Vg = { class: "grid-map__pin" };
function Ug(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      { class: Z(["grid-map", { "grid-map--loading": !e.isIframeLoaded }]) },
      [
        E(
          "iframe",
          {
            ref: "iframeRef",
            class: "grid-map__frame",
            width: "100%",
            height: "100%",
            src: e.renderSrc,
          },
          null,
          8,
          $g
        ),
        ue(E("div", Vg, null, 512), [[$t, !e.isIframeLoaded]]),
      ],
      2
    )
  );
}
const Yg = oe(Ng, [
    ["render", Ug],
    ["__scopeId", "data-v-3b334315"],
  ]),
  Fg = (e, n) => {
    try {
      const { isObserved: a } = Ts(n),
        t = M(!1),
        o = va({
          src: u(() => e.data.settings?.src),
          shouldRender: u(() => a.value),
          isIframeLoaded: u(() => t.value),
        }),
        i = Hr(() => {
          const r = n.value?.$refs;
          r &&
            (r.iframeRef.addEventListener("load", () => {
              t.value = !0;
            }),
            i());
        });
      return { composedProps: o };
    } catch (a) {
      console.error(a);
    }
  },
  Wg = re({
    name: "GridMapProviderUser",
    components: { GridMap: Yg },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const n = M(null),
        { composedProps: a } = Fg(e, n);
      return { mapRef: n, composedProps: a };
    },
  });
function qg(e, n, a, t, o, i) {
  const r = He("GridMap");
  return c(), q(r, Ge({ ref: "mapRef" }, e.composedProps), null, 16);
}
const Gg = oe(Wg, [["render", qg]]),
  jg = re({
    __name: "GridSocialIcons",
    props: {
      links: { default: () => [] },
      preventLinks: { type: Boolean, default: !1 },
      direction: { default: "row" },
      directionMobile: { default: null },
      preventSpacing: { type: Boolean, default: !1 },
      fullHeight: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() => ["social-icons", `social-icons--${a.direction}`]),
        o = u(() => ({
          "--m-icon-direction": a.directionMobile || a.direction,
          "--icon-padding-vertical":
            a.direction === "column" ? "var(--space-between-icons)" : "0",
          "--icon-padding-horizontal":
            a.direction === "row" ? "var(--space-between-icons)" : "0",
          ...(a.fullHeight && { height: "100%" }),
          ...(a.preventSpacing && { "--space-between-icons": "0px" }),
          ...(a.directionMobile && {
            "--m-icon-padding-vertical":
              a.directionMobile === "column"
                ? "var(--space-between-icons)"
                : "0",
            "--m-icon-padding-horizontal":
              a.directionMobile === "row" ? "var(--space-between-icons)" : "0",
          }),
        })),
        i = { props: a, computedClass: t, computedStyles: o };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  zg = ["href", "title", "innerHTML"];
function Kg(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      { class: Z(t.computedClass), style: Be(t.computedStyles) },
      [
        (c(!0),
        f(
          ge,
          null,
          we(
            a.links,
            ({ link: r, svg: l, title: s }) => (
              c(),
              f(
                "a",
                Ge(
                  {
                    key: r,
                    href: r,
                    target: "_blank",
                    rel: "noopener",
                    title: s,
                    class: "social-icons__link",
                  },
                  as({
                    dragstart: a.preventLinks
                      ? (m) => m.preventDefault()
                      : () => null,
                    click: a.preventLinks
                      ? (m) => m.preventDefault()
                      : () => null,
                  }),
                  { innerHTML: l }
                ),
                null,
                16,
                zg
              )
            )
          ),
          128
        )),
      ],
      6
    )
  );
}
const Is = oe(jg, [
    ["render", Kg],
    ["__scopeId", "data-v-1ee40361"],
  ]),
  Qg = (e) => {
    const n = u(() => e.data.settings.styles);
    return va({
      links: u(() =>
        e.data.links.map((t) => ({ ...t, title: `Go to ${Uc(t.icon)} page` }))
      ),
      direction: u(() => n.value["icon-direction"]),
      directionMobile: u(() => n.value["m-icon-direction"]),
      fullHeight: u(() => !n.value.justify),
      preventSpacing: u(() =>
        n.value["icon-spacing"] !== "center" ||
        n.value["icon-direction"] === "column"
          ? !n.value.justify
          : !n.value.align
      ),
    });
  },
  Zg = re({
    components: { GridSocialIcons: Is },
    props: { data: { type: Object, required: !0 } },
    setup(e, n) {
      return { composedProps: Qg(e) };
    },
  });
function Xg(e, n, a, t, o, i) {
  const r = He("GridSocialIcons");
  return c(), q(r, nt(St(e.composedProps)), null, 16);
}
const Jg = oe(Zg, [["render", Xg]]),
  ev = M(null),
  tv = (e) => {
    const n = u(() => e.data.settings?.priceId || ""),
      a = u(() => e.data.settings?.paymentType || "payment");
    return { stripeInstance: ev, priceId: n, paymentType: a };
  },
  av = "https://js.stripe.com/v3",
  nv = re({
    name: "GridStripeButtonProviderUser",
    components: { GridButton: Ya },
    props: {
      data: { type: Object, required: !0 },
      successPageSlug: { type: String, required: !0 },
      cancellationPageSlug: { type: String, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
    },
    setup(e) {
      const { getButtonHref: n } = Ze(),
        { content: a, type: t } = Vn(e, {
          href: u(() =>
            n({
              isFormButton: e.data.settings.isFormButton,
              linkedPageId: e.data.linkedPageId,
              linkType: e.data.linkType,
              href: e.data.href,
            })
          ),
        }),
        { stripeInstance: o, priceId: i, paymentType: r } = tv(e),
        l = M(!1),
        s = () =>
          new Promise((g, d) => {
            if (!!(o.value && window.Stripe)) {
              g();
              return;
            }
            const h = document.createElement("script");
            h.addEventListener("load", () => {
              window.Stripe &&
                ((o.value = window.Stripe(e.stripePublicApiKey)), g());
            }),
              h.addEventListener("error", () => {
                d();
              }),
              (h.src = av),
              document.head.appendChild(h);
          });
      return {
        content: a,
        type: t,
        isLoadingStripeScript: l,
        handleClick: async () => {
          i.value &&
            ((l.value = !0),
            await s(),
            (l.value = !1),
            o.value
              .redirectToCheckout({
                lineItems: [{ price: i.value, quantity: 1 }],
                mode: r.value,
                successUrl: `${window.location.origin}/${e.successPageSlug}`,
                cancelUrl: `${window.location.origin}/${e.cancellationPageSlug}`,
              })
              .then((g) => {
                g.error && console.error(g.error.message);
              }));
        },
      };
    },
  });
function ov(e, n, a, t, o, i) {
  const r = He("GridButton"),
    l = je("qa");
  return ue(
    (c(),
    q(
      r,
      {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isLoadingStripeScript,
        onClick: e.handleClick,
      },
      null,
      8,
      ["content", "type", "is-disabled", "onClick"]
    )),
    [[l, "button-stripe-checkout"]]
  );
}
const rv = oe(nv, [["render", ov]]),
  iv = {
    __name: "GridTextBox",
    props: {
      textAlign: { type: String, default: null },
      textAlignMobile: { type: String, default: null },
      backgroundColor: { type: String, default: null },
      content: { type: String, default: null },
    },
    setup(e, { expose: n }) {
      n(),
        rt((l) => ({
          "6ce2bb40": o.value,
          "00f7905c": t.value,
          a82e6ffc: i.value,
        }));
      const a = e,
        t = u(() => a.backgroundColor),
        o = u(() => (a.textAlign === "justify" ? "normal" : "break-spaces")),
        i = u(() =>
          a.textAlignMobile && a.textAlignMobile === "justify"
            ? "normal"
            : o.value
        ),
        r = {
          props: a,
          backgroundColor: t,
          whiteSpace: o,
          whiteSpaceMobile: i,
          computed: u,
        };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  },
  lv = ["innerHTML"],
  sv = { key: 1, class: "text-box" };
function uv(e, n, a, t, o, i) {
  return a.content
    ? (c(),
      f(
        "div",
        { key: 0, class: "text-box", innerHTML: a.content },
        null,
        8,
        lv
      ))
    : (c(), f("div", sv, [te(e.$slots, "default")]));
}
const Es = oe(iv, [["render", uv]]),
  cv = {
    __name: "GridTextBoxProviderUser",
    props: { data: { type: Object, required: !0 } },
    setup(e, { expose: n }) {
      n();
      const a = { GridTextBox: Es };
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  };
function dv(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.GridTextBox,
      {
        "text-align": a.data.settings.styles.text,
        "text-align-mobile": a.data.settings.styles["m-text"],
        "background-color": a.data.backgroundColor,
        content: a.data.content,
      },
      null,
      8,
      ["text-align", "text-align-mobile", "background-color", "content"]
    )
  );
}
const mv = oe(cv, [["render", dv]]),
  Ot = { YOUTUBE: "youtube", VIMEO: "vimeo" },
  jn = "0",
  uo = "1",
  gv = jn,
  vv = jn,
  pv = uo,
  fv = jn,
  hv = jn,
  yv = uo;
Ot.YOUTUBE;
const bv = /t=\d+/g,
  Gt = {
    AUTOPLAY: "autoplay",
    LOOP: "loop",
    CONTROLS: "controls",
    AUTOPAUSE: "autopause",
    PLAYLIST: "playlist",
    PLAYSINLINE: "playsinline",
    ALBUM: "h",
    MUTE: { [Ot.YOUTUBE]: "mute", [Ot.VIMEO]: "muted" },
    TIME: "t",
    START: "start",
  },
  _v = {
    [Ot.YOUTUBE]: "https://www.youtube.com/embed/",
    [Ot.VIMEO]: "https://player.vimeo.com/video/",
  },
  wv = {
    [Ot.YOUTUBE]:
      /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [Ot.VIMEO]:
      /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/,
  },
  kv = "https://vimeo.com/api/oembed.json?url=https://vimeo.com",
  Sv = "builder.notifications.errorVimeoVideoPrivate",
  Tv = {
    __name: "GridVideo",
    props: {
      renderIframe: { type: Boolean, default: !1 },
      renderPicture: { type: Boolean, default: !0 },
      src: { type: String, required: !0 },
      provider: { type: String, default: Ot.YOUTUBE },
      jpg: { type: String, default: "" },
      webp: { type: String, default: "" },
    },
    setup(e, { expose: n }) {
      n(), rt((i) => ({ "60d8e812": t.value }));
      const a = M(!1),
        t = u(() => (a.value ? "transparent" : "var(--color-dark)")),
        o = {
          isIframeLoaded: a,
          backgroundColor: t,
          get PROVIDERS() {
            return Ot;
          },
          computed: u,
          ref: M,
        };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  },
  Cv = { class: "video" },
  Pv = ["src"],
  Iv = ["srcset"],
  Ev = ["src"];
function Dv(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f("div", Cv, [
      a.renderIframe
        ? (c(),
          f(
            "iframe",
            {
              key: 0,
              src: a.src,
              class: "video__frame",
              allow:
                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
              allowfullscreen: "",
              width: "100%",
              height: "100%",
              onLoad: n[0] || (n[0] = (l) => (t.isIframeLoaded = !0)),
            },
            null,
            40,
            Pv
          ))
        : a.renderPicture && (a.jpg || a.webp)
        ? (c(),
          f(
            ge,
            { key: 1 },
            [
              E("picture", null, [
                E(
                  "source",
                  { type: "image/webp", srcset: a.webp },
                  null,
                  8,
                  Iv
                ),
                ue(
                  E(
                    "img",
                    {
                      referrerpolicy: "origin",
                      class: "video__placeholder",
                      height: "100%",
                      width: "100%",
                      src: a.jpg,
                    },
                    null,
                    8,
                    Ev
                  ),
                  [[r, "builder-gridelement-gridvideo"]]
                ),
              ]),
              E(
                "button",
                {
                  type: "button",
                  class: Z(`video__play video__play--${a.provider}`),
                },
                null,
                2
              ),
            ],
            64
          ))
        : O("", !0),
    ])
  );
}
const Mv = oe(Tv, [
    ["render", Dv],
    ["__scopeId", "data-v-ad3c9850"],
  ]),
  Ov = async (e) => {
    const a = await (await fetch(`${kv}/${e}`)).json();
    if (!a.thumbnail_url) throw new Error(Sv);
    const t = a.thumbnail_url.replace("_295x166", "_720");
    return {
      jpg: t.replace(".webp", ".jpg"),
      webp: t.replace(".jpg", ".webp"),
    };
  },
  Av = async (e, n) => {
    switch (e) {
      case Ot.YOUTUBE:
        return {
          jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
          webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`,
        };
      case Ot.VIMEO:
        return Ov(n);
      default:
        return { jpg: null, webp: null };
    }
  },
  Bv = (e, n, a, t) => {
    const o = n === Ot.VIMEO ? e.split("/")[1] : null,
      i = n === Ot.VIMEO ? e.split("/")[0] : e,
      r = t.match(bv),
      l = n === Ot.YOUTUBE && r ? { [Gt.START]: r[0].slice(2) ?? 0 } : {},
      s = Gt.MUTE[n],
      m = new URLSearchParams({
        [Gt.ALBUM]: o,
        [Gt.PLAYLIST]: i,
        [Gt.AUTOPLAY]: gv,
        [Gt.CONTROLS]: pv,
        [Gt.LOOP]: vv,
        [Gt.AUTOPAUSE]: fv,
        [Gt.PLAYSINLINE]: yv,
        [s]: hv,
        ...l,
      }).toString();
    return `${_v[n]}${i}?${m}`;
  },
  Lv = async (e, n) => {
    const a = Object.entries(wv).find(([, g]) => e?.match(g)),
      t = a && a.length === 2;
    if (!t) return { url: e, isUrlValid: !1 };
    const [o, i] = a,
      r = e.match(i),
      l = [r[1], r[2]].join(""),
      { jpg: s, webp: m } = await Av(o, l);
    return {
      src: Bv(l, o, n, e),
      isUrlValid: t,
      jpg: s,
      webp: m,
      provider: o,
      id: l,
    };
  },
  xv = (e) => {
    const n = va({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null,
      }),
      a = va({
        src: u(() => n.src ?? e.data.settings.src),
        provider: u(() => n.provider ?? e.data.settings.provider),
        width: u(() => n.width ?? e.data.settings.width),
        height: u(() => n.height ?? e.data.settings.height),
        webp: u(() => n.webp ?? e.data.settings.webp),
        jpg: u(() => n.jpg ?? e.data.settings.jpg),
      });
    return (
      Hr(() => {
        (e.data.settings.src !== a.src || !e.data.settings.jpg) &&
          Lv(e.data.settings.src).then((t) => {
            Object.entries(t).forEach(([o, i]) => {
              n[o] = i;
            });
          });
      }),
      { composedProps: a }
    );
  },
  Rv = re({
    name: "GridVideoProviderUser",
    components: { GridVideo: Mv },
    props: { data: { type: Object, required: !0 } },
    setup(e) {
      const { composedProps: n } = xv(e),
        a = M(null),
        t = u(
          () => e.data.settings.src?.includes(`${[Gt.AUTOPLAY]}=${uo}`) ?? !1
        ),
        o = u(() => {
          const s = Gt.MUTE[n.provider];
          return t.value
            ? n.src.replace(`${[s]}=${jn}`, `${[s]}=${uo}`)
            : n.src;
        }),
        i = M(!1),
        r = M(!1),
        l = () => {
          const s = new IntersectionObserver(
            ([{ isIntersecting: m }]) => {
              m && (t.value ? (i.value = !0) : (r.value = !0), s.disconnect());
            },
            { threshold: 0 }
          );
          s.observe(a.value.$el), (i.value = !0);
        };
      return (
        Ee(() => {
          l();
        }),
        {
          videoRef: a,
          composedProps: n,
          composedSrc: o,
          renderIframe: i,
          renderPicture: r,
        }
      );
    },
  });
function Hv(e, n, a, t, o, i) {
  const r = He("GridVideo");
  return (
    c(),
    q(
      r,
      Ge({ ref: "videoRef" }, e.composedProps, {
        src: e.composedSrc,
        "render-iframe": e.renderIframe,
        "render-picture": e.renderPicture,
        onClickOnce: n[0] || (n[0] = (l) => (e.renderIframe = !0)),
      }),
      null,
      16,
      ["src", "render-iframe", "render-picture"]
    )
  );
}
const Nv = oe(Rv, [["render", Hv]]),
  $v = re({
    name: "GridShape",
    props: { svg: { type: String, required: !0 } },
  }),
  Vv = ["innerHTML"];
function Uv(e, n, a, t, o, i) {
  return c(), f("div", { class: "grid-shape", innerHTML: e.svg }, null, 8, Vv);
}
const Yv = oe($v, [["render", Uv]]),
  Fv = re({
    name: "GridShapeProviderUser",
    components: { GridShape: Yv },
    props: {
      data: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    computed: {
      cssVars() {
        const e = (this.data.mobile.height * 100) / Xt,
          n = (this.data.desktop.height * 100) / la;
        return {
          "--shape-height": `${this.data.desktop.height}px`,
          "--m-shape-height": this.isInPreviewMode
            ? `${this.data.mobile.height}px`
            : `${e}vw`,
          "--t-shape-height": `${this.data.mobile.height}px`,
          "--small-desktop-shape-height": `${n}vw`,
          "--shape-color": `${this.data.color}`,
        };
      },
    },
  });
function Wv(e, n, a, t, o, i) {
  const r = He("GridShape");
  return (
    c(),
    q(r, { svg: e.data.svg, style: Be(e.cssVars) }, null, 8, ["svg", "style"])
  );
}
const qv = oe(Fv, [["render", Wv]]),
  Gv = re({
    __name: "ProductImage",
    props: {
      alt: {},
      src: {},
      isEager: { type: Boolean, default: !1 },
      objectFit: { default: "cover" },
      width: { default: 0 },
      height: { default: 0 },
      enableSrcset: { type: Boolean, default: !1 },
      imageOrigin: { default: "other" },
      isLossless: { type: Boolean, default: !1 },
      siteId: { default: "" },
      secondaryImageSrc: {},
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(a.src),
        o = M(),
        i = M(!1),
        r = u(() => (a.enableSrcset ? Nn(a.width) : void 0)),
        l = (d) =>
          st(a.imageOrigin, d, a.siteId, {
            width: a.width,
            height: a.height,
            shouldContain: a.objectFit === "contain",
            isLossless: a.isLossless,
          }),
        s = (d) =>
          a.enableSrcset
            ? La(a.imageOrigin, d, a.siteId, {
                width: a.width,
                height: a.height,
                shouldContain: a.objectFit === "contain",
                isLossless: a.isLossless,
              })
            : void 0,
        m = () => {
          if (a.secondaryImageSrc) {
            const d = new Image(),
              v = s(a.secondaryImageSrc);
            (d.src = l(a.secondaryImageSrc)), v && (d.srcset = v);
          }
        };
      Le(
        () => a.objectFit,
        (d, v) => {
          d !== v &&
            v === "cover" &&
            t.value.includes("fit=crop") &&
            ((t.value = l(a.src)), (o.value = s(a.src)));
        }
      ),
        Le(
          () => a.src,
          () => {
            (t.value = l(a.src)), (o.value = s(a.src));
          }
        ),
        Le(
          () => a.secondaryImageSrc,
          () => {
            m();
          }
        ),
        Ee(() => {
          (t.value = l(a.src)), (o.value = s(a.src)), m();
        });
      const g = {
        props: a,
        imageUrl: t,
        srcset: o,
        isLoaded: i,
        sizes: r,
        getImageUrl: l,
        getSrcSet: s,
        preloadSecondaryImage: m,
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  jv = ["loading", "src", "alt", "srcset", "sizes"];
function zv(e, n, a, t, o, i) {
  return (
    c(),
    q(
      At,
      { appear: "", name: "fade", mode: "out-in" },
      {
        default: fe(() => [
          ue(
            E(
              "img",
              Ge(e.$attrs, {
                loading: a.isEager ? "eager" : "lazy",
                src: t.imageUrl,
                alt: a.alt,
                srcset: t.srcset,
                sizes: t.sizes,
                class: [
                  "ecommerce-product-image",
                  { "ecommerce-product-image--loading": !t.isLoaded },
                ],
                onLoad: n[0] || (n[0] = (r) => (t.isLoaded = !0)),
                onError: n[1] || (n[1] = (r) => (t.isLoaded = !0)),
              }),
              null,
              16,
              jv
            ),
            [[$t, !0]]
          ),
        ]),
        _: 1,
      }
    )
  );
}
const bo = oe(Gv, [["render", zv]]);
function _o(e) {
  return os() ? (rs(e), !0) : !1;
}
function en(e) {
  return typeof e == "function" ? e() : x(e);
}
const Kr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Kv = (e) => e != null,
  Qv = Object.prototype.toString,
  Zv = (e) => Qv.call(e) === "[object Object]",
  Dn = () => {},
  _r = Xv();
function Xv() {
  var e, n;
  return (
    Kr &&
    ((e = window?.navigator) == null ? void 0 : e.userAgent) &&
    (/iP(ad|hone|od)/.test(window.navigator.userAgent) ||
      (((n = window?.navigator) == null ? void 0 : n.maxTouchPoints) > 2 &&
        /iPad|Macintosh/.test(window?.navigator.userAgent)))
  );
}
function Jv(e) {
  return ns();
}
function ep(...e) {
  if (e.length !== 1) return xn(...e);
  const n = e[0];
  return typeof n == "function" ? Vu(Uu(() => ({ get: n, set: Dn }))) : M(n);
}
function tp(e, n = !0, a) {
  Jv() ? Ee(e, a) : n ? e() : Dt(e);
}
function oa(e) {
  var n;
  const a = en(e);
  return (n = a?.$el) != null ? n : a;
}
const wo = Kr ? window : void 0,
  ap = Kr ? window.document : void 0;
function xa(...e) {
  let n, a, t, o;
  if (
    (typeof e[0] == "string" || Array.isArray(e[0])
      ? (([a, t, o] = e), (n = wo))
      : ([n, a, t, o] = e),
    !n)
  )
    return Dn;
  Array.isArray(a) || (a = [a]), Array.isArray(t) || (t = [t]);
  const i = [],
    r = () => {
      i.forEach((g) => g()), (i.length = 0);
    },
    l = (g, d, v, h) => (
      g.addEventListener(d, v, h), () => g.removeEventListener(d, v, h)
    ),
    s = Le(
      () => [oa(n), en(o)],
      ([g, d]) => {
        if ((r(), !g)) return;
        const v = Zv(d) ? { ...d } : d;
        i.push(...a.flatMap((h) => t.map((y) => l(g, h, y, v))));
      },
      { immediate: !0, flush: "post" }
    ),
    m = () => {
      s(), r();
    };
  return _o(m), m;
}
let gl = !1;
function ko(e, n, a = {}) {
  const {
    window: t = wo,
    ignore: o = [],
    capture: i = !0,
    detectIframe: r = !1,
  } = a;
  if (!t) return Dn;
  _r &&
    !gl &&
    ((gl = !0),
    Array.from(t.document.body.children).forEach((v) =>
      v.addEventListener("click", Dn)
    ),
    t.document.documentElement.addEventListener("click", Dn));
  let l = !0;
  const s = (v) =>
      o.some((h) => {
        if (typeof h == "string")
          return Array.from(t.document.querySelectorAll(h)).some(
            (y) => y === v.target || v.composedPath().includes(y)
          );
        {
          const y = oa(h);
          return y && (v.target === y || v.composedPath().includes(y));
        }
      }),
    g = [
      xa(
        t,
        "click",
        (v) => {
          const h = oa(e);
          if (!(!h || h === v.target || v.composedPath().includes(h))) {
            if ((v.detail === 0 && (l = !s(v)), !l)) {
              l = !0;
              return;
            }
            n(v);
          }
        },
        { passive: !0, capture: i }
      ),
      xa(
        t,
        "pointerdown",
        (v) => {
          const h = oa(e);
          l = !s(v) && !!(h && !v.composedPath().includes(h));
        },
        { passive: !0 }
      ),
      r &&
        xa(t, "blur", (v) => {
          setTimeout(() => {
            var h;
            const y = oa(e);
            ((h = t.document.activeElement) == null ? void 0 : h.tagName) ===
              "IFRAME" &&
              !y?.contains(t.document.activeElement) &&
              n(v);
          }, 0);
        }),
    ].filter(Boolean);
  return () => g.forEach((v) => v());
}
function np() {
  const e = M(!1),
    n = ns();
  return (
    n &&
      Ee(() => {
        e.value = !0;
      }, n),
    e
  );
}
function Ds(e) {
  const n = np();
  return u(() => (n.value, !!e()));
}
function op(e, n, a = {}) {
  const { window: t = wo, ...o } = a;
  let i;
  const r = Ds(() => t && "MutationObserver" in t),
    l = () => {
      i && (i.disconnect(), (i = void 0));
    },
    s = u(() => {
      const v = en(e),
        h = (Array.isArray(v) ? v : [v]).map(oa).filter(Kv);
      return new Set(h);
    }),
    m = Le(
      () => s.value,
      (v) => {
        l(),
          r.value &&
            t &&
            v.size &&
            ((i = new MutationObserver(n)), v.forEach((h) => i.observe(h, o)));
      },
      { immediate: !0, flush: "post" }
    ),
    g = () => i?.takeRecords(),
    d = () => {
      l(), m();
    };
  return _o(d), { isSupported: r, stop: d, takeRecords: g };
}
function rp(e = {}) {
  const { document: n = ap } = e;
  if (!n) return M("visible");
  const a = M(n.visibilityState);
  return (
    xa(n, "visibilitychange", () => {
      a.value = n.visibilityState;
    }),
    a
  );
}
function ip(e, n, a = {}) {
  const { window: t = wo, ...o } = a;
  let i;
  const r = Ds(() => t && "ResizeObserver" in t),
    l = () => {
      i && (i.disconnect(), (i = void 0));
    },
    s = u(() => (Array.isArray(e) ? e.map((d) => oa(d)) : [oa(e)])),
    m = Le(
      s,
      (d) => {
        if ((l(), r.value && t)) {
          i = new ResizeObserver(n);
          for (const v of d) v && i.observe(v, o);
        }
      },
      { immediate: !0, flush: "post" }
    ),
    g = () => {
      l(), m();
    };
  return _o(g), { isSupported: r, stop: g };
}
function lp(e, n = {}) {
  const {
      reset: a = !0,
      windowResize: t = !0,
      windowScroll: o = !0,
      immediate: i = !0,
    } = n,
    r = M(0),
    l = M(0),
    s = M(0),
    m = M(0),
    g = M(0),
    d = M(0),
    v = M(0),
    h = M(0);
  function y() {
    const k = oa(e);
    if (!k) {
      a &&
        ((r.value = 0),
        (l.value = 0),
        (s.value = 0),
        (m.value = 0),
        (g.value = 0),
        (d.value = 0),
        (v.value = 0),
        (h.value = 0));
      return;
    }
    const T = k.getBoundingClientRect();
    (r.value = T.height),
      (l.value = T.bottom),
      (s.value = T.left),
      (m.value = T.right),
      (g.value = T.top),
      (d.value = T.width),
      (v.value = T.x),
      (h.value = T.y);
  }
  return (
    ip(e, y),
    Le(
      () => oa(e),
      (k) => !k && y()
    ),
    op(e, y, { attributeFilter: ["style", "class"] }),
    o && xa("scroll", y, { capture: !0, passive: !0 }),
    t && xa("resize", y, { passive: !0 }),
    tp(() => {
      i && y();
    }),
    {
      height: r,
      bottom: l,
      left: s,
      right: m,
      top: g,
      width: d,
      x: v,
      y: h,
      update: y,
    }
  );
}
function Vo(e) {
  return typeof Window < "u" && e instanceof Window
    ? e.document.documentElement
    : typeof Document < "u" && e instanceof Document
    ? e.documentElement
    : e;
}
function Ms(e) {
  const n = window.getComputedStyle(e);
  if (
    n.overflowX === "scroll" ||
    n.overflowY === "scroll" ||
    (n.overflowX === "auto" && e.clientWidth < e.scrollWidth) ||
    (n.overflowY === "auto" && e.clientHeight < e.scrollHeight)
  )
    return !0;
  {
    const a = e.parentNode;
    return !a || a.tagName === "BODY" ? !1 : Ms(a);
  }
}
function sp(e) {
  const n = e || window.event,
    a = n.target;
  return Ms(a)
    ? !1
    : n.touches.length > 1
    ? !0
    : (n.preventDefault && n.preventDefault(), !1);
}
const eo = new WeakMap();
function up(e, n = !1) {
  const a = M(n);
  let t = null;
  Le(
    ep(e),
    (r) => {
      const l = Vo(en(r));
      if (l) {
        const s = l;
        eo.get(s) || eo.set(s, s.style.overflow),
          a.value && (s.style.overflow = "hidden");
      }
    },
    { immediate: !0 }
  );
  const o = () => {
      const r = Vo(en(e));
      !r ||
        a.value ||
        (_r &&
          (t = xa(
            r,
            "touchmove",
            (l) => {
              sp(l);
            },
            { passive: !1 }
          )),
        (r.style.overflow = "hidden"),
        (a.value = !0));
    },
    i = () => {
      var r;
      const l = Vo(en(e));
      !l ||
        !a.value ||
        (_r && t?.(),
        (l.style.overflow = (r = eo.get(l)) != null ? r : ""),
        eo.delete(l),
        (a.value = !1));
    };
  return (
    _o(i),
    u({
      get() {
        return a.value;
      },
      set(r) {
        r ? o() : i();
      },
    })
  );
}
const vl = 45,
  cp = re({
    __name: "SiteElementSearchBar",
    props: {
      placeholderText: {},
      noResultsText: {},
      fillColor: {},
      fillColorHover: {},
      textAndIconColor: {},
      textAndIconColorHover: {},
      resultItemHoverColor: {},
      fontFamily: {},
      borderColor: {},
      borderColorHover: {},
      borderRadius: {},
      translations: {},
      siteId: {},
      searchTerm: { default: "" },
      results: { default: null },
      isLoading: { type: Boolean, default: !1 },
    },
    emits: ["update:search-term", "is-dropdown-open"],
    setup(e, { expose: n, emit: a }) {
      n(),
        rt((b) => ({
          "45245e45": b.fontFamily,
          c48fbf5c: b.textAndIconColor,
          "60741c0a": b.textAndIconColorHover,
          "6b74e73d": v.value,
          "6169fb25": b.borderColor,
          "0b56f8a4": b.fillColor,
          a82de5d2: b.borderColorHover,
          "121b722e": b.fillColorHover,
          "360a1fa9": b.resultItemHoverColor,
          "44bc226c": t,
        }));
      const t = `${vl}px`,
        o = a,
        i = e,
        r = M(null),
        l = M(!1),
        s = M([]),
        m = M(-1),
        g = u(() => i.isLoading),
        d = u(() => i.results),
        v = u(() => `${i.borderRadius}px`),
        h = () => {
          i.results && m.value < i.results.length - 1 && (m.value += 1);
        },
        y = () => {
          m.value > 0 && (m.value -= 1);
        },
        k = () => {
          const b = s.value[m.value];
          if (!b) return;
          const A = new MouseEvent("click", {
            bubbles: !0,
            cancelable: !0,
            view: window,
          });
          b.dispatchEvent(A);
        },
        T = () => {
          (l.value = !1), o("update:search-term", ""), (m.value = -1);
        };
      Le([d, g], () => {
        (l.value = !!d.value || g.value), o("is-dropdown-open", l.value);
      }),
        Ee(() => {
          ko(r, () => {
            T();
          });
        });
      const _ = {
        IMAGE_DIMENSIONS_PX: vl,
        IMAGE_DIMENSIONS_PX_STRING: t,
        emit: o,
        props: i,
        searchBarRef: r,
        isSearchResultDropdownVisible: l,
        itemLinksRefs: s,
        highlightedItemIndex: m,
        isLoading: g,
        results: d,
        borderRadiusInPx: v,
        highlightNextItem: h,
        highlightPreviousItem: y,
        redirectToHighlightedItem: k,
        dropdownCloseHandler: T,
        ZyroLoader: zr,
        ProductImage: bo,
      };
      return (
        Object.defineProperty(_, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        _
      );
    },
  }),
  dp = {
    ref: "searchBarRef",
    class: "site-element-search-bar",
    "aria-owns": "search-results",
    tabindex: "0",
    "aria-haspopup": "listbox",
  },
  mp = { class: "site-element-search-bar__input-wrapper" },
  gp = ["placeholder", "value", "onKeydown"],
  vp = {
    key: 0,
    id: "search-results",
    role: "listbox",
    class: "site-element-search-bar__dropdown",
  },
  pp = { key: 1, class: "site-element-search-bar__dropdown-no-results" },
  fp = ["area-selected"],
  hp = ["href", "onMouseover", "onFocus", "onKeydown"],
  yp = { class: "search-result-item__content" },
  bp = { class: "search-result-item__title" },
  _p = { class: "search-result-item__price" },
  wp = { key: 0 },
  kp = { key: 0 },
  Sp = { key: 0, class: "search-result-item__sale-price" },
  Tp = { key: 1 };
function Cp(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      dp,
      [
        E("div", mp, [
          E(
            "input",
            {
              class: "site-element-search-bar__input",
              placeholder: t.props.placeholderText,
              value: t.props.searchTerm,
              onInput:
                n[0] ||
                (n[0] = (r) => t.emit("update:search-term", r.target.value)),
              onKeydown: [
                Ae(Me(t.highlightNextItem, ["prevent"]), ["down"]),
                Ae(Me(t.highlightPreviousItem, ["prevent"]), ["up"]),
                Ae(t.redirectToHighlightedItem, ["enter"]),
              ],
            },
            null,
            40,
            gp
          ),
          t.isSearchResultDropdownVisible
            ? (c(),
              f("div", {
                key: 0,
                class: "site-element-search-bar__dropdown-close",
                onClick: t.dropdownCloseHandler,
              }))
            : O("", !0),
        ]),
        t.isSearchResultDropdownVisible
          ? (c(),
            f("ul", vp, [
              t.props.isLoading
                ? (c(),
                  q(
                    t.ZyroLoader,
                    {
                      key: 0,
                      size: "30px",
                      color: t.props.textAndIconColorHover,
                      class: "site-element-search-bar__loader",
                    },
                    null,
                    8,
                    ["color"]
                  ))
                : !t.props.results || t.props.results.length === 0
                ? (c(), f("p", pp, X(a.noResultsText), 1))
                : (c(!0),
                  f(
                    ge,
                    { key: 2 },
                    we(
                      t.props.results,
                      (r, l) => (
                        c(),
                        f(
                          "li",
                          {
                            key: r.id,
                            role: "option",
                            "area-selected": l === t.highlightedItemIndex,
                          },
                          [
                            E(
                              "a",
                              {
                                ref_for: !0,
                                ref: "itemLinksRefs",
                                href: r.href,
                                class: Z([
                                  "search-result-item",
                                  {
                                    "search-result-item--highlighted":
                                      l === t.highlightedItemIndex,
                                  },
                                ]),
                                onMouseover: (s) =>
                                  (t.highlightedItemIndex = l),
                                onFocus: (s) => (t.highlightedItemIndex = l),
                                onKeydown: Ae(
                                  Me(t.redirectToHighlightedItem, ["prevent"]),
                                  ["enter"]
                                ),
                              },
                              [
                                r.thumbnail
                                  ? (c(),
                                    q(
                                      t.ProductImage,
                                      {
                                        key: 0,
                                        src: r.thumbnail,
                                        alt: r.title,
                                        class: "search-result-item__image",
                                        width: t.IMAGE_DIMENSIONS_PX,
                                        height: t.IMAGE_DIMENSIONS_PX,
                                        "site-id": t.props.siteId,
                                        "enable-srcset": "",
                                      },
                                      null,
                                      8,
                                      ["src", "alt", "site-id"]
                                    ))
                                  : O("", !0),
                                E("div", yp, [
                                  E("h3", bp, X(r.title), 1),
                                  E("p", _p, [
                                    r.isInStock
                                      ? (c(),
                                        f("span", wp, [
                                          r.price?.length
                                            ? (c(),
                                              f("span", kp, [
                                                r.oldPrice
                                                  ? (c(),
                                                    f(
                                                      "span",
                                                      Sp,
                                                      X(r.oldPrice),
                                                      1
                                                    ))
                                                  : O("", !0),
                                                Re(" " + X(r.price), 1),
                                              ]))
                                            : O("", !0),
                                        ]))
                                      : (c(),
                                        f(
                                          "span",
                                          Tp,
                                          X(a.translations.soldOut),
                                          1
                                        )),
                                  ]),
                                ]),
                              ],
                              42,
                              hp
                            ),
                          ],
                          8,
                          fp
                        )
                      )
                    ),
                    128
                  )),
            ]))
          : O("", !0),
      ],
      512
    )
  );
}
const Pp = oe(cp, [["render", Cp]]),
  Os = (e, n) => {
    let a;
    return function () {
      const o = () => Reflect.apply(e, this, arguments);
      clearTimeout(a), (a = setTimeout(o, n));
    };
  },
  Ip = 6,
  Ep = 5,
  Dp = 4,
  Mp = 3,
  As = 2,
  Op = { [Ip]: 18, [Ep]: 15, [Dp]: 12, [Mp]: 9, [As]: 6 },
  Ap = (e) => e?.variants[0].booking_event?.length_unit === hr;
function wr(e) {
  return e?.variants[0].booking_event?.length || 0;
}
const Qr = (e, n) => {
    const a = (t) => Math.round(t * 100) / 100;
    return Ap(e)
      ? `${a(wr(e) / 1e3 / 60 / 60)} ${n.hourShort}`
      : `${a(wr(e) / 1e3 / 60)} ${n.minuteShort}`;
  },
  Mn = (e) =>
    e[Ss] !== jr
      ? !1
      : !e.variants.every((n, a, t) => {
          const o = t[0]?.prices?.[0] ?? t[0],
            i = n?.prices?.[0] ?? n,
            r = o.sale_amount ?? o.amount,
            l = i.sale_amount ?? i.amount;
          return r === l;
        }),
  Pn = ({ variantsQuantity: e, variantId: n }) =>
    e.find((a) => a.id === n)?.inventory_quantity || 0,
  Bs = ({ product: e, variantsQuantity: n }) =>
    e.variants.reduce(
      (a, t) => a + Pn({ variantsQuantity: n, variantId: t.id }),
      0
    ),
  Bp = ({ product: e, variantsQuantity: n }) =>
    e.variants[0].manage_inventory
      ? Bs({ product: e, variantsQuantity: n }) > 0
      : !0,
  Lp = ({ variants: e }) =>
    e.reduce((n, a) =>
      (n.sale_amount || n.amount) <= (a.sale_amount || a.amount) ? n : a
    );
function Ta({ amount: e, currency: n, isPriceDisplayedWithCurrency: a = !0 }) {
  if (!n) return a ? "€0.00" : "0.00";
  const t = Number(e) || 0,
    i = Number(t / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
  return a ? n.template.replace("$1", i) : i;
}
const xp = "https://builder-backend.hostinger.com/public",
  Rp = async ({ query: e, indices: n, pageSize: a = 5, storeId: t }) => {
    if (!e) return [];
    const o = await fetch(`${xp}/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: e, indices: n, storeId: t, pageSize: a }),
      }),
      { results: i } = await o.json();
    return i.products.hits;
  },
  pl = 400,
  Hp = re({
    __name: "SiteElementSearchBarProviderSiteEngine",
    props: {
      data: { type: Object, required: !0 },
      blockId: { type: String, required: !0 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o, ecommerceShoppingCart: i } = Ze(),
        r = u(() => i.value?.translations || {}),
        { toggleSearchDropdown: l } = gr({ blockId: a.blockId }),
        s = M(""),
        m = M(!1),
        g = M(null),
        d = u(() => t.value.ecommerceStoreId),
        v = u(() =>
          g.value
            ? g.value.map((T) => {
                const _ =
                    T.site_product_selection === jr
                      ? Lp({ variants: T.variants })
                      : T.variants[0],
                  {
                    amount: b,
                    sale_amount: A,
                    currency_decimal_digits: D,
                    currency_template: I,
                    manage_inventory: R,
                  } = _,
                  L = { decimal_digits: D, template: I },
                  K = `/product-redirect/${T.id}`,
                  W = b && Mn(T) ? `${r.value.from} ` : "",
                  C = b ? `${W}${Ta({ amount: A || b, currency: L })}` : "",
                  H = A ? Ta({ amount: b, currency: L }) : null,
                  F =
                    !R ||
                    (!!b && Bp({ product: T, variantsQuantity: T.variants }));
                return {
                  id: T.id,
                  thumbnail: T.thumbnail,
                  title: T.title,
                  href: K,
                  price: C,
                  oldPrice: H,
                  isInStock: F,
                };
              })
            : null
        ),
        h = Os(async () => {
          (m.value = !0),
            s.value && d.value
              ? (g.value = await Rp({
                  query: s.value,
                  indices: [Ju],
                  storeId: d.value,
                }))
              : (g.value = null),
            (m.value = !1);
        }, pl),
        k = {
          TIMEOUT_MS_SEARCH_DEBOUNCE: pl,
          props: a,
          meta: t,
          siteId: o,
          ecommerceShoppingCart: i,
          ecommerceTranslations: r,
          toggleSearchDropdown: l,
          searchTerm: s,
          isLoading: m,
          results: g,
          storeId: d,
          computedResults: v,
          searchHandler: h,
          updateSearchTerm: ({ newValue: T }) => {
            (s.value = T), h();
          },
          SiteElementSearchBar: Pp,
        };
      return (
        Object.defineProperty(k, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        k
      );
    },
  });
function Np(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.SiteElementSearchBar,
      {
        "placeholder-text": t.props.data.placeholderText,
        "no-results-text": t.props.data.noResultsText,
        "fill-color": t.props.data.fillColor,
        "fill-color-hover": t.props.data.fillColorHover,
        "text-and-icon-color": t.props.data.textAndIconColor,
        "text-and-icon-color-hover": t.props.data.textAndIconColorHover,
        "font-family": t.props.data.fontFamily,
        "border-color": t.props.data.borderColor,
        "border-color-hover": t.props.data.borderColorHover,
        "border-radius": t.props.data.borderRadius,
        "is-loading": t.isLoading,
        "result-item-hover-color": t.props.data.resultItemHoverColor,
        results: t.computedResults,
        "search-term": t.searchTerm,
        "site-id": t.siteId,
        translations: t.ecommerceTranslations,
        "onUpdate:searchTerm":
          n[0] || (n[0] = (r) => t.updateSearchTerm({ newValue: r })),
        onIsDropdownOpen: t.toggleSearchDropdown,
      },
      null,
      8,
      [
        "placeholder-text",
        "no-results-text",
        "fill-color",
        "fill-color-hover",
        "text-and-icon-color",
        "text-and-icon-color-hover",
        "font-family",
        "border-color",
        "border-color-hover",
        "border-radius",
        "is-loading",
        "result-item-hover-color",
        "results",
        "search-term",
        "site-id",
        "translations",
        "onIsDropdownOpen",
      ]
    )
  );
}
const $p = oe(Hp, [["render", Np]]),
  yn = M(!1),
  bn = M(!1),
  Uo = M(!1),
  Yo = M(""),
  Ga = M(null),
  Fo = M(!1),
  rn = ({
    elementData: e,
    data: n,
    elementId: a,
    isParentBlockFooter: t,
  } = {}) => {
    const o = M(null),
      i = M(null),
      r = M(null),
      l = e || n || {},
      s = (_) => `transition transition--${_}`,
      m = u(() => {
        const _ = a && ec.includes(l.type),
          b = !a && !tc.includes(l.type);
        if (_ || b) return "";
        const A = s(l.animation?.name);
        return Ii.includes(l.type) ? `${A} transition--root-hidden` : A;
      }),
      g = u(() => {
        const _ = Ga.value && a === Ga.value;
        return !yn.value || (Ga.value && !_) ? "" : Uo.value;
      }),
      d = u(() => (bn.value ? Rn : null)),
      v = async (_) => {
        _.forEach(({ target: b, isIntersecting: A }) => {
          if (!A) {
            b.removeAttribute(Hn);
            return;
          }
          t || r.value?.unobserve(b), b.setAttribute(Hn, Rn);
        });
      },
      h = ({ root: _ = null } = {}) => {
        l.animation?.name &&
          (r.value = new IntersectionObserver(v, { threshold: 0, root: _ }));
      },
      y = async (_) => {
        if (l.animation?.name)
          if ((await Dt(), Ii.includes(l.type))) {
            const b = _?.querySelectorAll(`[${pa}="${$r}"]`),
              A = _?.querySelectorAll(`[${pa}="${gn}"]`);
            [...b, ...A].forEach((I) => r.value?.observe(I));
          } else r.value?.observe(_);
      },
      k = () => {
        window.clearTimeout(o.value),
          window.clearTimeout(i.value),
          (yn.value = !1),
          (bn.value = !1);
      },
      T = ({ animation: _, id: b }) => {
        k(),
          !_ !== "none" &&
            ((Ga.value = b),
            (Yo.value = _),
            (yn.value = !0),
            (Uo.value = s(Yo.value)),
            (o.value = setTimeout(() => {
              bn.value = !0;
            }, 500)),
            (i.value = setTimeout(() => {
              (yn.value = !1), (bn.value = !1), (Ga.value = null);
            }, 2e3)));
      };
    return (
      Le(Fo, async (_) => {
        _ && (await Dt(), (Fo.value = !1));
      }),
      {
        intersectionObserver: r,
        animationClass: m,
        animationInEditorClass: Uo,
        animationInEditorComponentId: Ga,
        isAnimationDisplayedInEditor: yn,
        isAnimationDisplayedInEditorActive: bn,
        animationInEditorName: Yo,
        addIntersectionObserver: h,
        observe: y,
        displayAnimationInEditor: T,
        shouldMountAnimationsInPreview: Fo,
        customAnimationClass: g,
        animationAttributeStateValue: d,
      }
    );
  },
  Vp = {
    __name: "LayoutElementProviderUser",
    props: {
      elementId: { type: String, required: !0 },
      blockId: { type: String, required: !0 },
      elementData: { type: Object, required: !0 },
      overrideWidth: { type: Number, default: null },
      overrideHeight: { type: Number, default: null },
      isMobileLegacy: { type: Boolean, default: !1 },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isParentBlockFooter: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), rt((A) => ({ "68a0bbc6": y.value, ebe08afe: k.value }));
      const a = e,
        t = M(null),
        {
          intersectionObserver: o,
          animationClass: i,
          addIntersectionObserver: r,
          observe: l,
          shouldMountAnimationsInPreview: s,
        } = rn({
          elementData: a.elementData,
          isParentBlockFooter: a.isParentBlockFooter,
          elementId: a.elementId,
        }),
        m = u(() => Object.values(a.siteLanguagePages)[0]),
        g = u(() => a.elementData.mobile?.isHidden || !1),
        d = u(() => a.elementData.desktop?.isHidden || !1),
        v = u(() =>
          a.elementData.type !== Bo
            ? ""
            : (
                a.siteLanguagePages[a.elementData.settings?.successPageId] ||
                m.value
              ).slug
        ),
        h = u(() =>
          a.elementData.type !== Bo
            ? ""
            : (
                a.siteLanguagePages[
                  a.elementData.settings?.cancellationPageId
                ] || m.value
              ).slug
        ),
        y = u(() => `${a.elementData.desktop.height}px`),
        k = u(() => `${a.elementData.mobile.height}px`),
        T = async () => {
          await l(t.value?.$el);
        },
        _ = async () => {
          const D = [Ei, Di].includes(a.elementData.type),
            R =
              t.value?.$el.getBoundingClientRect().height > window.innerHeight,
            L = !D && R && t.value ? t.value.$el.parentElement : null;
          r({ root: L }), D || (await T());
        };
      Ee(async () => {
        await _();
      }),
        kt(() => o.value?.disconnect()),
        Le(s, async (A) => {
          A && (await _());
        });
      const b = {
        props: a,
        elementRef: t,
        intersectionObserver: o,
        animationClass: i,
        addIntersectionObserver: r,
        observe: l,
        shouldMountAnimationsInPreview: s,
        firstLanguagePage: m,
        isMobileElementHidden: g,
        isDesktopElementHidden: d,
        stripeSuccessPageSlug: v,
        stripeCancellationPageSlug: h,
        elementHeightDesktop: y,
        elementHeightMobile: k,
        observeElement: T,
        initiateAnimations: _,
        get ELEMENT_TYPE_BUTTON() {
          return cs;
        },
        get ELEMENT_TYPE_STRIPE_BUTTON() {
          return Bo;
        },
        get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
          return ac;
        },
        get ELEMENT_TYPE_MAP() {
          return ls;
        },
        get ELEMENT_TYPE_VIDEO() {
          return ss;
        },
        get ELEMENT_TYPE_IMAGE() {
          return nc;
        },
        get ELEMENT_TYPE_TEXT_BOX() {
          return oc;
        },
        get ELEMENT_TYPE_FORM() {
          return rc;
        },
        get ELEMENT_TYPE_INSTAGRAM_FEED() {
          return Ei;
        },
        get ELEMENT_TYPE_SOCIAL_ICONS() {
          return ds;
        },
        get ELEMENT_TYPE_GALLERY() {
          return Di;
        },
        get ELEMENT_TYPE_EMBED() {
          return ic;
        },
        get ELEMENT_TYPE_SHAPE() {
          return lc;
        },
        get ELEMENT_TYPE_SEARCH_BAR() {
          return sc;
        },
        LayoutElementWrapper: Rd,
        GridButtonProviderUser: Ud,
        GridEcommerceButtonProviderUser: tm,
        GridEmbedProviderUser: mm,
        GridFormProviderUser: Zm,
        GridGalleryProviderUser: cg,
        GridImageProviderUser: fg,
        GridInstagramFeedProviderUser: Hg,
        GridMapProviderUser: Gg,
        GridSocialIconsProviderUser: Jg,
        GridStripeButtonProviderUser: rv,
        GridTextBoxProviderUser: mv,
        GridVideoProviderUser: Nv,
        GridShapeProviderUser: qv,
        SiteElementSearchBarProviderSiteEngine: $p,
        get useSiteEngineAnimations() {
          return rn;
        },
        computed: u,
        onMounted: Ee,
        onBeforeUnmount: kt,
        ref: M,
        watch: Le,
        get isSearchDropdownOpen() {
          return mr;
        },
      };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  };
function Up(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    q(
      t.LayoutElementWrapper,
      {
        ref: "elementRef",
        class: Z([
          "layout-element",
          [
            {
              "layout-element--desktop-element-hidden":
                t.isDesktopElementHidden,
              "layout-element--mobile-element-hidden": t.isMobileElementHidden,
            },
            t.animationClass,
          ],
        ]),
        "element-data": a.elementData,
        "is-forced-on-top":
          t.isSearchDropdownOpen &&
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": a.isMobileLegacy,
      },
      {
        default: fe(() => [
          a.elementData.type === t.ELEMENT_TYPE_BUTTON
            ? ue(
                (c(),
                q(
                  t.GridButtonProviderUser,
                  {
                    key: 0,
                    id: a.elementId,
                    data: a.elementData,
                    "current-locale": a.currentLocale,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    class:
                      "layout-element__component layout-element__component--GridButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "current-locale",
                    "mobile-element-width",
                    "mobile-element-height",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_STRIPE_BUTTON
            ? ue(
                (c(),
                q(
                  t.GridStripeButtonProviderUser,
                  {
                    key: 1,
                    id: a.elementId,
                    data: a.elementData,
                    "success-page-slug": t.stripeSuccessPageSlug,
                    "cancellation-page-slug": t.stripeCancellationPageSlug,
                    "stripe-public-api-key": a.stripePublicApiKey,
                    class:
                      "layout-element__component layout-element__component--GridStripeButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "success-page-slug",
                    "cancellation-page-slug",
                    "stripe-public-api-key",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_ECOMMERCE_BUTTON
            ? ue(
                (c(),
                q(
                  t.GridEcommerceButtonProviderUser,
                  {
                    key: 2,
                    id: a.elementId,
                    data: a.elementData,
                    "is-cart-visible": a.isCartVisible,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridEcommerceButton",
                  },
                  null,
                  8,
                  [
                    "id",
                    "data",
                    "is-cart-visible",
                    "mobile-element-width",
                    "mobile-element-height",
                    "is-in-preview-mode",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_FORM
            ? ue(
                (c(),
                q(
                  t.GridFormProviderUser,
                  {
                    key: 3,
                    id: a.elementId,
                    data: a.elementData,
                    "current-locale": a.currentLocale,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridForm",
                  },
                  null,
                  8,
                  ["id", "data", "current-locale", "is-in-preview-mode"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_VIDEO
            ? ue(
                (c(),
                q(
                  t.GridVideoProviderUser,
                  {
                    key: 4,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridVideo",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_TEXT_BOX
            ? ue(
                (c(),
                q(
                  t.GridTextBoxProviderUser,
                  {
                    key: 5,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridTextBox",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_MAP
            ? ue(
                (c(),
                q(
                  t.GridMapProviderUser,
                  {
                    key: 6,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridMap",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SOCIAL_ICONS
            ? ue(
                (c(),
                q(
                  t.GridSocialIconsProviderUser,
                  {
                    key: 7,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridSocialIcons",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_GALLERY
            ? ue(
                (c(),
                q(
                  t.GridGalleryProviderUser,
                  {
                    key: 8,
                    id: a.elementId,
                    data: a.elementData,
                    "element-width": a.elementData.desktop.width,
                    "element-height": a.elementData.desktop.height,
                    class:
                      "layout-element__component layout-element__component--GridGallery",
                    onImageLoad: t.observeElement,
                  },
                  null,
                  8,
                  ["id", "data", "element-width", "element-height"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_IMAGE
            ? ue(
                (c(),
                q(
                  t.GridImageProviderUser,
                  {
                    key: 9,
                    id: a.elementId,
                    lcp: a.lcp,
                    data: a.elementData,
                    "mobile-element-width": a.elementData.mobile.width,
                    "mobile-element-height": a.elementData.mobile.height,
                    "element-width": a.elementData.desktop.width,
                    "element-height": a.elementData.desktop.height,
                    "reset-mobile-position": a.isMobileLegacy,
                    "current-locale": a.currentLocale,
                    "mobile-border-radius": a.elementData.mobile.borderRadius,
                    "desktop-border-radius": a.elementData.desktop.borderRadius,
                    "shape-mask-source": a.elementData.shapeMaskSource,
                    "overlay-opacity": a.elementData.overlayOpacity,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridImage",
                  },
                  null,
                  8,
                  [
                    "id",
                    "lcp",
                    "data",
                    "mobile-element-width",
                    "mobile-element-height",
                    "element-width",
                    "element-height",
                    "reset-mobile-position",
                    "current-locale",
                    "mobile-border-radius",
                    "desktop-border-radius",
                    "shape-mask-source",
                    "overlay-opacity",
                    "is-in-preview-mode",
                  ]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_INSTAGRAM_FEED
            ? ue(
                (c(),
                q(
                  t.GridInstagramFeedProviderUser,
                  {
                    key: 10,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridInstagramFeed",
                    onMediaLoaded: t.observeElement,
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_EMBED
            ? ue(
                (c(),
                q(
                  t.GridEmbedProviderUser,
                  {
                    key: 11,
                    id: a.elementId,
                    data: a.elementData,
                    class:
                      "layout-element__component layout-element__component--GridEmbed",
                  },
                  null,
                  8,
                  ["id", "data"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SHAPE
            ? ue(
                (c(),
                q(
                  t.GridShapeProviderUser,
                  {
                    key: 12,
                    id: a.elementId,
                    data: a.elementData,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                    class:
                      "layout-element__component layout-element__component--GridShape",
                  },
                  null,
                  8,
                  ["id", "data", "is-in-preview-mode"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          a.elementData.type === t.ELEMENT_TYPE_SEARCH_BAR
            ? ue(
                (c(),
                q(
                  t.SiteElementSearchBarProviderSiteEngine,
                  {
                    key: 13,
                    id: a.elementId,
                    data: a.elementData,
                    class: "layout-element__component",
                    "block-id": a.blockId,
                  },
                  null,
                  8,
                  ["id", "data", "block-id"]
                )),
                [[r, `${a.elementData.type}:${a.elementId}`]]
              )
            : O("", !0),
          te(e.$slots, "default", {}, void 0, !0),
        ]),
        _: 3,
      },
      8,
      ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"]
    )
  );
}
const Yp = oe(Vp, [
    ["render", Up],
    ["__scopeId", "data-v-f5dd3112"],
  ]),
  Fp = {
    __name: "BlockLayoutProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      components: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      siteLanguagePages: { type: Object, required: !0 },
      stripePublicApiKey: { type: String, default: "" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isSearchOpenedInCurrentBlock: t } = gr({ blockId: a.blockId }),
        { components: o } = sr(a),
        i = u(() => a.data),
        {
          layoutElements: r,
          layoutCSSVars: l,
          isMobileLegacy: s,
        } = pr({
          blockData: i,
          siteElements: o,
          shouldBuildResponsive: !a.isInPreviewMode,
        }),
        m = u(() => i.value.slot === "footer"),
        g = {
          props: a,
          isSearchOpenedInCurrentBlock: t,
          siteElements: o,
          blockData: i,
          layoutElements: r,
          layoutCSSVars: l,
          isMobileLegacy: s,
          isBlockFooter: m,
          toRefs: sr,
          computed: u,
          get useSearchElementDropdown() {
            return gr;
          },
          BlockLayoutWrapper: Pd,
          get useBlockLayout() {
            return pr;
          },
          LayoutElementProviderUser: Yp,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  };
function Wp(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.BlockLayoutWrapper,
      {
        ref: "blockLayout",
        style: Be(t.layoutCSSVars),
        "is-mobile-legacy": t.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": t.isSearchOpenedInCurrentBlock,
        "is-in-preview-mode": t.props.isInPreviewMode,
      },
      {
        default: fe(() => [
          (c(!0),
          f(
            ge,
            null,
            we(
              t.layoutElements,
              (r) => (
                c(),
                q(
                  t.LayoutElementProviderUser,
                  {
                    key: r.elementId,
                    "is-mobile-legacy": t.isMobileLegacy,
                    "element-id": r.elementId,
                    "element-data": r,
                    lcp: a.lcp,
                    "is-cart-visible": a.isCartVisible,
                    "current-locale": a.currentLocale,
                    "site-language-pages": a.siteLanguagePages,
                    "stripe-public-api-key": a.stripePublicApiKey,
                    "is-parent-block-footer": t.isBlockFooter,
                    "block-id": a.blockId,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "is-mobile-legacy",
                    "element-id",
                    "element-data",
                    "lcp",
                    "is-cart-visible",
                    "current-locale",
                    "site-language-pages",
                    "stripe-public-api-key",
                    "is-parent-block-footer",
                    "block-id",
                    "is-in-preview-mode",
                  ]
                )
              )
            ),
            128
          )),
        ]),
        _: 1,
      },
      8,
      ["style", "is-mobile-legacy", "is-forced-on-top", "is-in-preview-mode"]
    )
  );
}
const qp = oe(Fp, [["render", Wp]]),
  Gp = re({
    __name: "ZyroPagination",
    props: { currentPage: {}, pageCount: {}, color: { default: null } },
    emits: ["change-page"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        i = u(() => ({ "--button-color": t.color })),
        r = u(() => {
          if (5 > t.pageCount)
            return [...new Array(t.pageCount + 1).keys()].slice(1);
          const m = 4 / 2,
            g = Array.from({ length: 4 }).fill(0);
          if (t.currentPage <= m + 1) {
            g[0] = 1;
            const v = g.map((h, y) => g[0] + y);
            return v.push(t.pageCount), v;
          }
          if (t.currentPage >= t.pageCount - m + 1) {
            const v = g.map((h, y) => t.pageCount - y);
            return v.reverse().unshift(1), v;
          }
          g[0] = t.currentPage - m + 1;
          const d = g.map((v, h) => g[0] + h);
          return d.unshift(1), (d[d.length - 1] = t.pageCount), d;
        }),
        l = { props: t, emit: o, computedStyle: i, paginationTriggersList: r };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  }),
  Ls = (e) => (Rt("data-v-1ee2fd7c"), (e = e()), Ht(), e),
  jp = ["disabled"],
  zp = Ls(() =>
    E(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M7 1L1 7L7 13",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Kp = [zp],
  Qp = ["data-testId", "disabled", "onClick"],
  Zp = ["disabled"],
  Xp = Ls(() =>
    E(
      "svg",
      {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M1 13L7 7L1 1",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Jp = [Xp];
function ef(e, n, a, t, o, i) {
  return a.pageCount > 1
    ? (c(),
      f(
        "div",
        { key: 0, class: "pagination", style: Be(t.computedStyle) },
        [
          E(
            "button",
            {
              disabled: a.currentPage === 1,
              class: "pagination__button",
              "data-testId": "button-previous",
              onClick:
                n[0] ||
                (n[0] = (r) =>
                  t.emit("change-page", Math.max(1, a.currentPage - 1))),
            },
            Kp,
            8,
            jp
          ),
          (c(!0),
          f(
            ge,
            null,
            we(
              t.paginationTriggersList,
              (r) => (
                c(),
                f(
                  "button",
                  {
                    key: `${r}-trigger`,
                    class: Z([
                      "pagination__button pagination__trigger",
                      { "pagination__trigger--current": r === a.currentPage },
                    ]),
                    "data-testId": `button-${r}`,
                    disabled: a.currentPage === r,
                    onClick: (l) => t.emit("change-page", r),
                  },
                  X(r),
                  11,
                  Qp
                )
              )
            ),
            128
          )),
          E(
            "button",
            {
              disabled: a.currentPage === a.pageCount,
              class: "pagination__button",
              "data-testId": "button-next",
              onClick:
                n[1] ||
                (n[1] = (r) =>
                  t.emit(
                    "change-page",
                    Math.min(a.pageCount, a.currentPage + 1)
                  )),
            },
            Jp,
            8,
            Zp
          ),
        ],
        4
      ))
    : O("", !0);
}
const xs = oe(Gp, [
    ["render", ef],
    ["__scopeId", "data-v-1ee2fd7c"],
  ]),
  kr = 1800,
  tf = 1080,
  fl = 100,
  af = {
    __name: "BlockBlogListItem",
    props: {
      post: { type: Object, default: () => ({}) },
      authorName: { type: String, default: null },
      shownItems: {
        type: Object,
        default: () => ({
          authorFullName: !0,
          coverImage: !0,
          title: !0,
          description: !0,
          date: !0,
          categories: !0,
          avatar: !0,
          minutesToRead: !0,
        }),
      },
      coverObjectFit: { type: String, default: "cover" },
      cursor: { type: String, default: "pointer" },
      blogCategories: { type: Object, default: () => ({}) },
      isAnimationActive: { type: Boolean, default: !1 },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
      blogTitleTextSize: { type: Number, default: 24 },
    },
    emits: ["post-click", "filter-category"],
    setup(e, { expose: n }) {
      n(), rt((d) => ({ "74783e9f": o.value }));
      const a = e,
        t = M(),
        o = u(() => `${a.blogTitleTextSize}px`),
        i = u(() => a.post?.coverImageAlt ?? ""),
        r = u(() => Nn(kr, null)),
        l = u(() => a.post?.categories ?? []),
        s = u(
          () =>
            !!a.shownItems.coverImage &&
            (a.post?.coverImageSrc || a.post?.coverImageSrcset)
        ),
        m = u(() => {
          const d = t.value?.getBoundingClientRect();
          if (!d || !window || !document) return !0;
          const { top: v } = d,
            { innerHeight: h } = window,
            { clientHeight: y } = document.documentElement;
          return v <= (h || y) + fl;
        }),
        g = {
          props: a,
          VERTICAL_VIEWPORT_OFFSET: fl,
          coverImageContainerRef: t,
          blogTitleTextSize: o,
          coverImageAlt: i,
          sizes: r,
          categories: l,
          isCoverImageShown: s,
          isElementInViewport: m,
          BlockBlogListItemCategories: bs,
          BlockBlogListItemMeta: _s,
          get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
            return kr;
          },
          get getFormattedNumericDate() {
            return ws;
          },
          get getGridItemSizes() {
            return Nn;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE() {
            return pa;
          },
          get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
            return gn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE() {
            return Hn;
          },
          get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
            return Rn;
          },
          computed: u,
          ref: M,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  },
  nf = ["href"],
  of = { class: "block-blog-list-item__cover-image-wrapper" },
  rf = ["alt", "src", "srcset", "sizes", "loading"],
  lf = ["href"];
function sf(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "div",
      nt({
        class: "block-blog-list-item",
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]:
          t.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [t.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: a.isAnimationActive
          ? t.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE
          : null,
      }),
      [
        te(e.$slots, "block-blog-list-item-overlay", {}, void 0, !0),
        t.isCoverImageShown
          ? ue(
              (c(),
              f(
                "a",
                {
                  key: 0,
                  ref: "coverImageContainerRef",
                  href: a.post.slug,
                  class: "block-blog-list-item__cover-image-container",
                  onClick:
                    n[0] ||
                    (n[0] = Me((l) => e.$emit("post-click"), ["prevent"])),
                },
                [
                  E("div", of, [
                    E(
                      "img",
                      {
                        class: "block-blog-list-item__cover-image",
                        alt: t.coverImageAlt,
                        src: a.post.coverImageSrc,
                        srcset: a.post.coverImageSrcset,
                        sizes: t.sizes,
                        loading: t.isElementInViewport ? void 0 : "lazy",
                      },
                      null,
                      8,
                      rf
                    ),
                  ]),
                ],
                8,
                nf
              )),
              [[r, "blog-list-item-image"]]
            )
          : O("", !0),
        ue(
          Oe(
            t.BlockBlogListItemCategories,
            {
              class: "font-secondary",
              categories: t.categories,
              "blog-categories": a.blogCategories,
              onFilterCategory:
                n[1] || (n[1] = (l) => e.$emit("filter-category", l)),
            },
            null,
            8,
            ["categories", "blog-categories"]
          ),
          [[$t, a.shownItems.categories && t.categories.length]]
        ),
        E(
          "a",
          {
            class: "block-blog-list-item__content",
            href: a.post.slug,
            onClick:
              n[2] || (n[2] = Me((l) => e.$emit("post-click"), ["prevent"])),
          },
          [
            ue(
              E(
                "h3",
                { class: "font-primary block-blog-list-item__title" },
                X(a.post.meta.title),
                513
              ),
              [[$t, a.shownItems.title]]
            ),
            ue(
              E(
                "p",
                { class: "block-blog-list-item__description font-secondary" },
                X(a.post.meta.description),
                513
              ),
              [[$t, a.shownItems.description]]
            ),
            Oe(
              t.BlockBlogListItemMeta,
              Ge(
                {
                  authorName: a.authorName,
                  minutesAmount: a.post.minutesToRead,
                  date: t.getFormattedNumericDate(a.post.date),
                  showAvatar: a.shownItems.avatar,
                  showName: a.shownItems.authorFullName,
                  showDate: a.shownItems.date,
                  showMinutes: a.shownItems.minutesToRead,
                },
                { "blog-reading-time-text": a.blogReadingTimeText }
              ),
              null,
              16,
              ["blog-reading-time-text"]
            ),
          ],
          8,
          lf
        ),
      ],
      16
    )
  );
}
const uf = oe(af, [
    ["render", sf],
    ["__scopeId", "data-v-d6576b2a"],
  ]),
  cf = "Show all posts",
  hl = 46,
  yl = 24,
  df = {
    __name: "BlockBlogList",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      posts: { type: Object, default: () => ({}) },
      blogCategories: { type: Object, default: () => ({}) },
      blogReadingTimeText: { type: [String, void 0], default: void 0 },
    },
    emits: ["post-click"],
    setup(e, { expose: n, emit: a }) {
      n(), rt((b) => ({ "2251a3f7": m.value, f64549e6: s.value }));
      const t = e,
        o = a,
        i = M(0),
        r = M(null),
        l = M(!1),
        s = u(() => Number.parseInt(t.data.settings.postColumnCount, 10)),
        m = u(() => `${hl}px`),
        g = u(() => t.data.settings.blogTitleFontSize || yl),
        d = u(() => {
          const {
              categories: b,
              showAllPosts: A,
              showWithoutCategories: D,
            } = t.data.settings,
            I = A
              ? t.posts
              : Object.fromEntries(
                  Object.entries(t.posts).filter(([, R]) => {
                    const L = b.some((W) => R.categories.includes(W));
                    return (D && R.categories.length === 0) || L;
                  })
                );
          return r.value
            ? Object.fromEntries(
                Object.entries(I).filter(([, R]) =>
                  R.categories.includes(r.value)
                )
              )
            : I;
        }),
        v = u(() =>
          Object.values(d.value).sort(
            (b, A) => Date.parse(A.date) - Date.parse(b.date)
          )
        ),
        h = u(() =>
          v.value.slice(
            (i.value > 0 ? i.value - 1 : 0) * t.data.settings.postsPerPage,
            i.value * t.data.settings.postsPerPage
          )
        ),
        y = u(() =>
          Math.ceil(Object.keys(d.value).length / t.data.settings.postsPerPage)
        ),
        k = () => {
          const b = new URLSearchParams(window.location.search),
            A = Number.parseInt(b.get("page"), 10) || 1;
          A !== i.value && (i.value = A);
        },
        T = (b) => {
          (i.value = b), (l.value = !0);
          const A = new URL(window.location);
          A.searchParams.set("page", i.value),
            window.history.pushState(null, "", A.toString()),
            lr({ linkToSection: `#${t.blockId}` });
        };
      Le(h, (b) => {
        b.length === 0 && i.value > 1 && (i.value -= 1);
      }),
        Le(r, () => {
          l.value = !0;
        }),
        Ee(() => {
          const b = new URLSearchParams(window.location.search),
            A = Number.parseInt(b.get("page"), 10) || 1;
          i.value !== A && (i.value = A),
            window.addEventListener("popstate", () => {
              k();
            });
        }),
        kt(() => {
          window.removeEventListener("popstate", k);
        });
      const _ = {
        SHOW_ALL_POSTS_LABEL: cf,
        BLOG_LIST_PADDING_X: hl,
        props: t,
        emit: o,
        currentPage: i,
        filteredCategoryId: r,
        isAnimationActive: l,
        postColumnCount: s,
        blogListPaddingXCssVar: m,
        BLOG_TITLE_FONT_SIZE_FALLBACK: yl,
        blogTitleTextSize: g,
        postsToRender: d,
        sortedPosts: v,
        currentPageItems: h,
        pageCount: y,
        handleBrowserNavigationPageChange: k,
        setCurrentPage: T,
        get scrollToSection() {
          return lr;
        },
        ZyroPagination: xs,
        BlockBlogListItem: uf,
        ref: M,
        onMounted: Ee,
        onBeforeUnmount: kt,
        computed: u,
        watch: Le,
      };
      return (
        Object.defineProperty(_, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        _
      );
    },
  },
  mf = ["id"],
  gf = { key: 0, class: "block-blog-list__filter" },
  vf = { key: 2, class: "block-blog-list__empty-block" };
function pf(e, n, a, t, o, i) {
  const r = je("qa");
  return ue(
    (c(),
    f(
      "div",
      { id: a.blockId, ref: "blogList", class: "block-blog-list" },
      [
        t.filteredCategoryId
          ? (c(),
            f("div", gf, [
              Re(X(a.blogCategories[t.filteredCategoryId].name) + " ", 1),
              E(
                "button",
                {
                  class: "block-blog-list__filter-button",
                  onClick:
                    n[0] || (n[0] = (l) => (t.filteredCategoryId = null)),
                },
                X(t.SHOW_ALL_POSTS_LABEL)
              ),
            ]))
          : O("", !0),
        t.currentPageItems.length
          ? (c(),
            f(
              "div",
              {
                key: 1,
                class: Z([
                  "block-blog-list__list",
                  { "block-blog-list__list--one-col": t.postColumnCount === 1 },
                ]),
              },
              [
                (c(!0),
                f(
                  ge,
                  null,
                  we(t.currentPageItems, (l, s) =>
                    ue(
                      (c(),
                      q(
                        t.BlockBlogListItem,
                        {
                          key: `post-${s}`,
                          post: l,
                          "author-name": l.meta.authorName,
                          "cover-object-fit":
                            a.data.settings.styles["cover-object-fit"],
                          "shown-items": a.data.settings.shownItems,
                          "blog-categories": a.blogCategories,
                          "is-animation-active": t.isAnimationActive,
                          "blog-reading-time-text": a.blogReadingTimeText,
                          "blog-title-text-size": t.blogTitleTextSize,
                          onFilterCategory:
                            n[1] || (n[1] = (m) => (t.filteredCategoryId = m)),
                          onPostClick: (m) => t.emit("post-click", l),
                        },
                        {
                          "block-blog-list-item-overlay": fe(() => [
                            te(
                              e.$slots,
                              "block-blog-list-overlay",
                              { post: l },
                              void 0,
                              !0
                            ),
                          ]),
                          _: 2,
                        },
                        1032,
                        [
                          "post",
                          "author-name",
                          "cover-object-fit",
                          "shown-items",
                          "blog-categories",
                          "is-animation-active",
                          "blog-reading-time-text",
                          "blog-title-text-size",
                          "onPostClick",
                        ]
                      )),
                      [[r, "blog-list-item"]]
                    )
                  ),
                  128
                )),
              ],
              2
            ))
          : (c(),
            f("div", vf, [
              te(e.$slots, "block-blog-list-empty-block", {}, void 0, !0),
            ])),
        Oe(
          t.ZyroPagination,
          {
            class: "block-blog-list__pagination",
            "current-page": t.currentPage,
            "page-count": t.pageCount,
            onChangePage: t.setCurrentPage,
          },
          null,
          8,
          ["current-page", "page-count"]
        ),
      ],
      8,
      mf
    )),
    [[r, "builder-section-blog"]]
  );
}
const ff = oe(df, [
    ["render", pf],
    ["__scopeId", "data-v-759d547e"],
  ]),
  hf = re({
    name: "BlockBlogListProviderUser",
    components: { BlockBlogList: ff },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      currentLocale: { type: String, default: Zt },
    },
    setup() {
      const {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      } = Ze();
      return {
        blogReadingTimeText: e,
        siteId: n,
        pages: a,
        blogCategories: t,
        meta: o,
      };
    },
    computed: {
      publishedBlogPages() {
        return Object.fromEntries(
          Object.entries(this.pages).filter(
            ([, e]) => e.type === dr && !e.isDraft
          )
        );
      },
      blogPosts() {
        const e = this.currentLocale === this.meta.defaultLocale;
        return Object.fromEntries(
          Object.entries(this.publishedBlogPages).map(([n, a]) => {
            const t = La(a.coverImageOrigin, a.coverImagePath, this.siteId, {
              width: kr,
              height: tf,
            });
            return [
              n,
              {
                id: n,
                ...a,
                coverImageSrcset: t,
                slug: `/${e ? "" : `${this.currentLocale}/`}${a.slug}`,
              },
            ];
          })
        );
      },
    },
  });
function yf(e, n, a, t, o, i) {
  const r = He("BlockBlogList");
  return (
    c(),
    q(
      r,
      {
        data: e.data,
        "block-id": e.blockId,
        posts: e.blogPosts,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText,
      },
      null,
      8,
      ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text"]
    )
  );
}
const bf = oe(hf, [["render", yf]]),
  Zr = re({
    props: {
      columnCount: { type: Number, default: 3 },
      imageRatio: { type: String, default: "original" },
    },
  }),
  bl = () => {
    rt((e) => ({ "01ae45c2": e.columnCount }));
  },
  _l = Zr.setup;
Zr.setup = _l ? (e, n) => (bl(), _l(e, n)) : bl;
const Rs = (e) => (Rt("data-v-520c25c1"), (e = e()), Ht(), e),
  _f = { class: "skeleton-loader" },
  wf = Rs(() => E("div", { class: "skeleton-loader__text" }, null, -1)),
  kf = Rs(() => E("div", { class: "skeleton-loader__text" }, null, -1));
function Sf(e, n, a, t, o, i) {
  return (
    c(),
    f("div", _f, [
      (c(!0),
      f(
        ge,
        null,
        we(
          e.columnCount,
          (r) => (
            c(),
            f("div", { key: r, class: "skeleton-loader__item" }, [
              E(
                "div",
                {
                  class: Z([
                    "skeleton-loader__image-placeholder",
                    `skeleton-loader__image-placeholder--${e.imageRatio}`,
                  ]),
                },
                null,
                2
              ),
              wf,
              kf,
            ])
          )
        ),
        128
      )),
    ])
  );
}
const Tf = oe(Zr, [
    ["render", Sf],
    ["__scopeId", "data-v-520c25c1"],
  ]),
  Cf = re({
    props: {
      textColorVars: { type: Object, default: () => ({}) },
      emptyPageMessage: { type: String, required: !0 },
    },
    computed: {
      computedStyles() {
        return { ...Vt(this.textColorVars) };
      },
    },
  }),
  Pf = E(
    "svg",
    {
      class: "product-list-empty-state__icon",
      width: "41",
      height: "40",
      viewBox: "0 0 41 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      E("path", {
        d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      E("path", {
        d: "M5.5 10H35.5",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
      E("path", {
        d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
      }),
    ],
    -1
  );
function If(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      { class: "product-list-empty-state", style: Be(e.computedStyles) },
      [Pf, E("h6", null, X(e.emptyPageMessage), 1)],
      4
    )
  );
}
const Ef = oe(Cf, [["render", If]]),
  Df = {},
  Mf = {
    width: "392",
    height: "392",
    viewBox: "0 0 392 392",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Of = Nr(
    '<g clip-path="url(#clip0_2_420)"><rect width="392" height="392" fill="var(--color-success-light)"></rect><path d="M133.859 223.769C134.843 221.858 137.577 221.858 138.561 223.769L162.649 270.514C163.282 271.741 164.751 272.275 166.023 271.742L214.483 251.437C216.466 250.607 218.558 252.361 218.086 254.458L206.528 305.78C206.225 307.125 207.005 308.477 208.321 308.887L258.489 324.525C260.54 325.164 261.014 327.852 259.306 329.154L217.502 361.032C216.407 361.868 216.136 363.404 216.88 364.564L245.273 408.837C246.433 410.645 245.067 413.006 242.921 412.907L190.444 410.42C189.066 410.354 187.869 411.36 187.694 412.729L181.025 464.906C180.753 467.039 178.185 467.975 176.606 466.517L138.006 430.84C136.992 429.904 135.428 429.904 134.414 430.84L95.8141 466.517C94.2351 467.975 91.6671 467.039 91.3946 464.906L84.7258 412.729C84.5509 411.36 83.3542 410.354 81.9766 410.42L29.4987 412.907C27.3526 413.006 25.9869 410.645 27.1466 408.837L55.5405 364.564C56.2846 363.404 56.0134 361.868 54.9179 361.032L13.1143 329.154C11.4063 327.852 11.8805 325.164 13.931 324.525L64.0988 308.887C65.4146 308.477 66.195 307.125 65.8924 305.78L54.3339 254.458C53.8617 252.361 55.9546 250.607 57.937 251.437L106.397 271.742C107.67 272.275 109.138 271.741 109.771 270.514L133.859 223.769Z" fill="var(--color-gray)"></path><path d="M32.7289 525.562C56.9795 538.816 116.766 483.102 166.267 401.122C215.767 319.141 236.236 241.939 211.986 228.685C187.735 215.431 127.948 271.145 78.448 353.125C28.9475 435.105 8.47843 512.308 32.7289 525.562Z" fill="var(--color-gray-border)"></path><path d="M266.714 528.065C312.959 554.631 379.209 526.102 414.687 464.343C450.165 402.584 441.437 330.982 395.192 304.416C348.947 277.85 282.697 306.38 247.219 368.139C211.74 429.898 220.469 501.499 266.714 528.065Z" fill="var(--color-gray-border)"></path><path d="M169.89 442.88C194.14 456.134 244.767 415.592 282.967 352.326C321.168 289.06 332.477 227.028 308.226 213.774C283.976 200.52 233.349 241.063 195.149 304.329C156.948 367.595 145.639 429.627 169.89 442.88Z" fill="var(--color-gray-border)"></path><path d="M235.035 369.11C250.062 375.748 276.749 351.408 294.642 314.746C312.535 278.083 314.859 242.98 299.831 236.342C284.804 229.704 258.117 254.043 240.224 290.706C222.331 327.369 220.008 362.471 235.035 369.11Z" fill="var(--color-gray)"></path><path d="M285.233 362.514C296.758 367.605 316.693 350.03 329.759 323.258C342.825 296.487 344.073 270.657 332.548 265.565C321.023 260.474 301.088 278.049 288.022 304.821C274.956 331.592 273.708 357.422 285.233 362.514Z" fill="var(--color-gray)"></path><path d="M326.668 344.001C334.199 347.328 346.602 337.118 354.373 321.197C362.143 305.276 362.337 289.672 354.807 286.346C347.276 283.019 334.872 293.229 327.102 309.15C319.332 325.071 319.137 340.675 326.668 344.001Z" fill="var(--color-gray)"></path><path d="M360.481 368.158C367.473 371.28 377.736 363.518 383.403 350.822C389.071 338.126 387.998 325.303 381.006 322.182C374.013 319.061 363.751 326.822 358.083 339.518C352.415 352.214 353.489 365.037 360.481 368.158Z" fill="var(--color-gray)"></path><path d="M85.3546 149.427C96.7914 145.844 102.551 131.729 98.2183 117.901C93.8859 104.072 81.1024 95.7667 69.6656 99.3498C58.2287 102.933 52.4694 117.048 56.8018 130.876C61.1342 144.705 73.9177 153.01 85.3546 149.427Z" fill="var(--color-gray)"></path></g><defs><clipPath id="clip0_2_420"><rect width="392" height="392" fill="var(--color-light)"></rect></clipPath></defs>',
    2
  ),
  Af = [Of];
function Bf(e, n) {
  return c(), f("svg", Mf, Af);
}
const Hs = oe(Df, [["render", Bf]]),
  Lf = {
    props: {
      text: { type: String, default: "" },
      ribbonStyle: { type: Object, default: () => ({}) },
    },
    computed: {
      computedStyles() {
        return { ...Vt(this.ribbonStyle) };
      },
    },
  },
  xf = { class: "ecommerce-product-ribbon__text" };
function Rf(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      { class: "ecommerce-product-ribbon", style: Be(i.computedStyles) },
      [E("p", xf, X(a.text), 1)],
      4
    )
  );
}
const Hf = oe(Lf, [["render", Rf]]),
  Nf = re({
    __name: "ProductListItem",
    props: {
      image: { default: "" },
      secondaryImage: {},
      title: {},
      price: { default: null },
      isCentered: { type: Boolean, default: !1 },
      isEager: { type: Boolean, default: !1 },
      imageWidth: {},
      duration: {},
      productType: { default: "" },
      translations: { default: () => ({}) },
      isStoreQuantityTracked: { type: Boolean },
      quantity: {},
      isButtonEnabled: { type: Boolean, default: !1 },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      isPriceRangeShown: { type: Boolean },
      ribbon: { default: "" },
      ribbonStyle: { default: () => ({}) },
      siteId: { default: "" },
      isPurchasable: { type: Boolean },
      imageRatio: { default: Lt.COVER },
      imageHoverEffect: {},
      isMobileView: { type: Boolean },
    },
    emits: ["button-click"],
    setup(e, { expose: n }) {
      n(), rt((_) => ({ "7fe64b59": v.value }));
      const a = { [pa]: gn },
        t = e,
        o = M(),
        i = M(!1),
        r = u(() =>
          t.imageHoverEffect === ka.SWAP_IMAGE ? t.secondaryImage : null
        ),
        l = u(() => !t.isStoreQuantityTracked || t.quantity > 0),
        s = u(() => t.buttonText || t.translations?.addToBag || "Add to bag"),
        m = u(() => ({
          normal: t.buttonStyle[`grid-button-${t.buttonType}-border-color`],
          hover:
            t.buttonStyle[`grid-button-${t.buttonType}-border-color-hover`],
        })),
        g = u(() => ({
          normal: t.buttonStyle[`grid-button-${t.buttonType}-background-color`],
          hover:
            t.buttonStyle[`grid-button-${t.buttonType}-background-color-hover`],
        })),
        d = u(() => ({ ...Vt(t.buttonStyle) })),
        v = u(() => {
          switch (t.imageRatio) {
            case Lt.COVER:
            case Lt.LANDSCAPE:
            case Lt.PORTRAIT:
              return "cover";
            default:
              return "contain";
          }
        }),
        h = u(() =>
          t.imageRatio === Lt.PORTRAIT || t.imageRatio === Lt.LANDSCAPE
            ? "none"
            : ""
        ),
        y = u(() =>
          t.secondaryImage && i.value && t.imageHoverEffect === ka.SWAP_IMAGE
            ? t.secondaryImage
            : t.image || ""
        ),
        k = u(() => t.imageHoverEffect === ka.ZOOM && i.value);
      Le(
        () => t.imageHoverEffect,
        (_) => {
          t.isMobileView ||
            (clearTimeout(o.value),
            _ === ka.SWAP_IMAGE
              ? ((i.value = !0),
                (o.value = setTimeout(() => {
                  i.value = !1;
                }, 1e3)))
              : _ === ka.ZOOM
              ? ((i.value = !0),
                (o.value = setTimeout(() => {
                  i.value = !1;
                }, 1e3)))
              : (i.value = !1));
        }
      );
      const T = {
        CUSTOM_ATTRIBUTES: a,
        props: t,
        animationTimeout: o,
        isProductHovered: i,
        secondaryImageSrc: r,
        isInStock: l,
        blockButtonText: s,
        buttonBorderColor: m,
        buttonBackgroundColor: g,
        computedStyles: d,
        objectFit: v,
        placeholderPreserveAspectRatio: h,
        imageSrc: y,
        isImageZoomedIn: k,
        GridButton: Ya,
        get PRODUCT_TYPE_BOOKING() {
          return Yt;
        },
        get formatPrice() {
          return Ta;
        },
        ProductImage: bo,
        ProductImagePlaceholder: Hs,
        ProductRibbon: Hf,
        get ImageHoverEffect() {
          return ka;
        },
      };
      return (
        Object.defineProperty(T, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        T
      );
    },
  }),
  $f = { class: "product-list-item__title" },
  Vf = { key: 0, class: "product-list-item__price-wrapper" },
  Uf = { key: 0, class: "product-list-item__price-range" },
  Yf = { key: 0, class: "product-list-item__price-content" },
  Ff = { key: 1, class: "product-list-item__duration" },
  Wf = { key: 1, class: "product-list-item__text" };
function qf(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "div",
      Ge(
        {
          class: [
            "product-list-item",
            { "product-list-item--centered": a.isCentered },
          ],
          style: t.computedStyles,
        },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        E(
          "div",
          {
            class: "product-list-item__content",
            onMouseenter:
              n[0] || (n[0] = (l) => (t.isProductHovered = !a.isMobileView)),
            onMouseleave: n[1] || (n[1] = (l) => (t.isProductHovered = !1)),
          },
          [
            ue(
              (c(),
              f(
                "div",
                {
                  class: Z(`
					product-list-item__image-wrapper
					product-list-item__image-wrapper--${a.imageRatio}
					${
            a.imageHoverEffect === t.ImageHoverEffect.NO_EFFECT
              ? "product-list-item__image-wrapper--bg-animation"
              : ""
          }
				`),
                },
                [
                  a.image
                    ? (c(),
                      q(
                        t.ProductImage,
                        {
                          key: 0,
                          src: t.imageSrc,
                          "secondary-image-src": t.secondaryImageSrc,
                          alt: a.title,
                          class: Z(`
						product-list-item__image
						product-list-item__image ${
              t.isImageZoomedIn ? "product-list-item__image--zoomed-in" : ""
            }
						${
              a.imageHoverEffect === t.ImageHoverEffect.ZOOM
                ? "product-list-item__image--zoom-animation"
                : ""
            }
					`),
                          "is-eager": a.isEager,
                          width: a.imageWidth,
                          height: a.imageWidth,
                          "site-id": a.siteId,
                          "object-fit": t.objectFit,
                          "enable-srcset": "",
                          "is-lossless": !0,
                        },
                        null,
                        8,
                        [
                          "src",
                          "secondary-image-src",
                          "alt",
                          "class",
                          "is-eager",
                          "width",
                          "height",
                          "site-id",
                          "object-fit",
                        ]
                      ))
                    : (c(),
                      q(
                        t.ProductImagePlaceholder,
                        {
                          key: 1,
                          preserveAspectRatio: t.placeholderPreserveAspectRatio,
                          class: Z(`
						product-list-item__image ${
              t.isImageZoomedIn ? "product-list-item__image--zoomed-in" : ""
            }
						${
              a.imageHoverEffect === t.ImageHoverEffect.ZOOM
                ? "product-list-item__image--zoom-animation"
                : ""
            }
					`),
                        },
                        null,
                        8,
                        ["preserveAspectRatio", "class"]
                      )),
                  a.ribbon
                    ? (c(),
                      q(
                        t.ProductRibbon,
                        {
                          key: 2,
                          text: a.ribbon,
                          "ribbon-style": a.ribbonStyle,
                        },
                        null,
                        8,
                        ["text", "ribbon-style"]
                      ))
                    : O("", !0),
                ],
                2
              )),
              [[r, "product-list-section-item-image"]]
            ),
            ue((c(), f("h6", $f, [Re(X(a.title), 1)])), [
              [r, "product-list-section-item-title"],
            ]),
            a.price
              ? ue(
                  (c(),
                  f("div", Vf, [
                    t.isInStock
                      ? (c(),
                        f(
                          ge,
                          { key: 0 },
                          [
                            E("p", null, [
                              a.isPriceRangeShown && !a.price.sale_amount
                                ? (c(),
                                  f("span", Uf, X(a.translations.from), 1))
                                : O("", !0),
                              E(
                                "span",
                                {
                                  class: Z({
                                    "product-list-item__price":
                                      a.price.sale_amount,
                                  }),
                                },
                                X(
                                  t.formatPrice({
                                    amount: a.price.amount,
                                    currency: a.price.currency,
                                  })
                                ),
                                3
                              ),
                            ]),
                            a.price.sale_amount
                              ? (c(),
                                f("p", Yf, [
                                  a.isPriceRangeShown
                                    ? (c(),
                                      f(
                                        ge,
                                        { key: 0 },
                                        [Re(X(a.translations.from), 1)],
                                        64
                                      ))
                                    : O("", !0),
                                  Re(
                                    " " +
                                      X(
                                        t.formatPrice({
                                          amount: a.price.sale_amount,
                                          currency: a.price.currency,
                                        })
                                      ),
                                    1
                                  ),
                                ]))
                              : O("", !0),
                            a.productType === t.PRODUCT_TYPE_BOOKING
                              ? (c(), f("p", Ff, X(a.duration), 1))
                              : O("", !0),
                          ],
                          64
                        ))
                      : (c(), f("p", Wf, X(a.translations.soldOut), 1)),
                  ])),
                  [[r, "product-list-section-item-price"]]
                )
              : O("", !0),
          ],
          32
        ),
        a.isButtonEnabled && a.isPurchasable
          ? (c(),
            f(
              "div",
              {
                key: 0,
                class: Z([
                  "product-list-item__button-wrapper",
                  {
                    "product-list-item__button-wrapper--hidden": !t.isInStock,
                    "product-list-item__button-wrapper--with-hover":
                      a.buttonDisplay === "hover",
                  },
                ]),
                onClick: n[3] || (n[3] = Me(() => {}, ["prevent", "stop"])),
              },
              [
                ue(
                  Oe(
                    t.GridButton,
                    {
                      type: a.buttonType,
                      content: t.blockButtonText,
                      class: Z([
                        "product-list-item__button",
                        `product-list-item__button--${a.buttonType}`,
                      ]),
                      "tag-name": "button",
                      "border-width": a.buttonBorderWidth,
                      "border-color": t.buttonBorderColor.normal,
                      "border-color-hover": t.buttonBorderColor.hover,
                      "background-color": t.buttonBackgroundColor.normal,
                      "background-color-hover": t.buttonBackgroundColor.hover,
                      onClick: n[2] || (n[2] = (l) => e.$emit("button-click")),
                    },
                    null,
                    8,
                    [
                      "type",
                      "content",
                      "class",
                      "border-width",
                      "border-color",
                      "border-color-hover",
                      "background-color",
                      "background-color-hover",
                    ]
                  ),
                  [[r, "productlistsection-btn-addtobag"]]
                ),
              ],
              2
            ))
          : O("", !0),
      ],
      16
    )
  );
}
const Gf = oe(Nf, [
    ["render", qf],
    ["__scopeId", "data-v-9b6d505f"],
  ]),
  Sr = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t < o ? n : a;
    }),
  jf = (e) =>
    e.variants.reduce((n, a) => {
      const t = n.prices[0]?.sale_amount || n.prices[0]?.amount,
        o = a.prices[0]?.sale_amount || a.prices[0]?.amount;
      return t > o ? n : a;
    }),
  Wo = 24,
  zf = re({
    __name: "BlockEcommerceProductList",
    props: {
      blockId: {},
      pageCount: {},
      currentPage: {},
      products: {},
      productPages: { default: () => ({}) },
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      isProductListShown: { type: Boolean, default: !0 },
      isLoading: { type: Boolean },
      isEager: { type: Boolean },
      columnCount: { default: 3 },
      translations: {},
      productCategoryId: { default: "" },
      isButtonEnabled: { type: Boolean },
      buttonDisplay: { default: "" },
      buttonText: { default: "" },
      buttonStyle: { default: () => ({}) },
      buttonType: { default: "primary" },
      buttonBorderWidth: { default: 0 },
      ribbonStyle: { default: () => ({}) },
      isProductListItemLinkDisabled: { type: Boolean },
      siteId: {},
      variantsQuantity: {},
      productSorting: { default: () => ({ enabled: !1 }) },
      sorting: { default: jd[Qa.DEFAULT] },
      imageRatio: { default: Lt.COVER },
      imageHoverEffect: { default: ka.NO_EFFECT },
      isMobileView: { type: Boolean },
    },
    emits: ["product-click", "button-click", "page-changed", "sort-changed"],
    setup(e, { expose: n, emit: a }) {
      n(), rt((I) => ({ "412c65a5": I.columnCount, "09be7f7a": d.value }));
      const t = e,
        o = a,
        i = Dc(),
        r = M(!1),
        l = u(() => ({ [Hn]: r.value ? Rn : null })),
        s = u(
          () =>
            t.translations.onlineStoreNoProducts ||
            "No publicly visible products"
        ),
        m = u(() => t.blockStyle?.textAlign === "center"),
        g = u(() => {
          const I = (t.columnCount - 1) * Wo,
            R = Lc - I;
          return Math.floor(R / t.columnCount);
        }),
        d = u(() => `${Wo}px`),
        v = u(() => Vt(t.textColorVars)),
        h = u(() => ({ color: t.productSorting.textColor || "#000" })),
        y = async (I) => {
          (r.value = !1), o("page-changed", I), await Dt(), (r.value = !0);
          const R = document.getElementById(t.blockId),
            L = R?.getBoundingClientRect();
          (L && L.top >= 0 && L.bottom <= window.innerHeight) ||
            R?.scrollIntoView({ behavior: "smooth" });
        },
        k = (I) => Object.values(t.productPages).find((R) => R.productId === I),
        D = {
          GAP_SIZE: Wo,
          props: t,
          emit: o,
          route: i,
          isAnimationActive: r,
          customAttributes: l,
          emptyPageMessage: s,
          isCentered: m,
          imageWidth: g,
          gapSize: d,
          computedStyles: v,
          computedSelectStyles: h,
          handlePageChange: y,
          getItemProductPage: k,
          getItemProductPageTo: (I) => {
            if (t.isProductListItemLinkDisabled) return i;
            const R = k(I);
            return R ? { path: `/${R.slug}` } : { path: "/" };
          },
          getSmallestProductPrice: (I) =>
            Mn(I) ? Sr(I).prices[0] : I.variants[0].prices[0],
          getProductImage: (I) => (Mn(I) && Sr(I).image_url) || I.thumbnail,
          getSecondaryProductImage: (I) => I.images[1]?.url,
          ListSkeletonLoader: Tf,
          ZyroPagination: xs,
          ProductListEmptyState: Ef,
          ProductListItem: Gf,
          get getFormattedBookingDuration() {
            return Qr;
          },
          get isProductPriceRangeShown() {
            return Mn;
          },
          get getFullProductQuantity() {
            return Bs;
          },
        };
      return (
        Object.defineProperty(D, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        D
      );
    },
  }),
  Kf = ["id"],
  Qf = { key: 0, class: "block-product-list__sorting" },
  Zf = ["value"],
  Xf = ["value"],
  Jf = { key: 2, ref: "productList", class: "block-product-list" },
  eh = { class: "block-product-list__content" };
function th(e, n, a, t, o, i) {
  const r = He("RouterLink");
  return (
    c(),
    f(
      "div",
      {
        id: a.blockId,
        class: "block-product-list-wrapper",
        style: Be(t.computedStyles),
      },
      [
        a.productSorting.enabled && a.productSorting.sortingOptions?.length
          ? (c(),
            f("div", Qf, [
              E(
                "label",
                {
                  for: "sorting-options",
                  style: Be(t.computedSelectStyles),
                  class: "block-product-list__sorting-label",
                },
                X(a.translations.sortBy) + ": ",
                5
              ),
              E(
                "select",
                {
                  id: "sorting-options",
                  class: "block-product-list__sorting-select",
                  value: t.props.sorting,
                  style: Be(t.computedSelectStyles),
                  onChange: n[0] || (n[0] = (l) => t.emit("sort-changed", l)),
                },
                [
                  (c(!0),
                  f(
                    ge,
                    null,
                    we(
                      a.productSorting.sortingOptions,
                      (l) => (
                        c(),
                        f(
                          "option",
                          { key: l.id, value: l.value },
                          X(l.label),
                          9,
                          Xf
                        )
                      )
                    ),
                    128
                  )),
                ],
                44,
                Zf
              ),
            ]))
          : O("", !0),
        a.isLoading
          ? (c(),
            q(
              t.ListSkeletonLoader,
              {
                key: 1,
                "column-count": a.columnCount,
                "image-ratio": a.imageRatio,
              },
              null,
              8,
              ["column-count", "image-ratio"]
            ))
          : a.isProductListShown
          ? (c(),
            f(
              "div",
              Jf,
              [
                E("div", eh, [
                  (c(!0),
                  f(
                    ge,
                    null,
                    we(
                      a.products,
                      (l, s) => (
                        c(),
                        q(
                          r,
                          {
                            key: `product-${s}-${l.id}`,
                            to: t.getItemProductPageTo(l.id),
                            class: "block-product-list__link",
                          },
                          {
                            default: fe(() => [
                              Oe(
                                t.ProductListItem,
                                Ge(t.customAttributes, {
                                  image: t.getProductImage(l),
                                  "secondary-image":
                                    t.getSecondaryProductImage(l),
                                  title: l.title,
                                  ribbon: l.ribbon_text,
                                  price: t.getSmallestProductPrice(l),
                                  "is-centered": t.isCentered,
                                  "is-eager": a.isEager && s === 0,
                                  duration: t.getFormattedBookingDuration(
                                    l,
                                    a.translations
                                  ),
                                  "image-width": t.imageWidth,
                                  "image-ratio": a.imageRatio,
                                  "image-hover-effect": a.imageHoverEffect,
                                  "is-store-quantity-tracked":
                                    l.variants[0].manage_inventory,
                                  "is-price-range-shown":
                                    t.isProductPriceRangeShown(l),
                                  quantity: t.getFullProductQuantity({
                                    product: l,
                                    variantsQuantity: a.variantsQuantity,
                                  }),
                                  "product-type": l.type.value,
                                  translations: a.translations,
                                  "is-mobile-view": a.isMobileView,
                                  "is-button-enabled": a.isButtonEnabled,
                                  "button-display": a.buttonDisplay,
                                  "button-text": a.buttonText,
                                  "button-style": a.buttonStyle,
                                  "button-type": a.buttonType,
                                  "button-border-width": a.buttonBorderWidth,
                                  "ribbon-style": a.ribbonStyle,
                                  "is-purchasable": l.purchasable ?? !0,
                                  "site-id": a.siteId,
                                  onClick: (m) => e.$emit("product-click", l),
                                  onButtonClick: (m) =>
                                    e.$emit("button-click", l),
                                }),
                                null,
                                16,
                                [
                                  "image",
                                  "secondary-image",
                                  "title",
                                  "ribbon",
                                  "price",
                                  "is-centered",
                                  "is-eager",
                                  "duration",
                                  "image-width",
                                  "image-ratio",
                                  "image-hover-effect",
                                  "is-store-quantity-tracked",
                                  "is-price-range-shown",
                                  "quantity",
                                  "product-type",
                                  "translations",
                                  "is-mobile-view",
                                  "is-button-enabled",
                                  "button-display",
                                  "button-text",
                                  "button-style",
                                  "button-type",
                                  "button-border-width",
                                  "ribbon-style",
                                  "is-purchasable",
                                  "site-id",
                                  "onClick",
                                  "onButtonClick",
                                ]
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          ["to"]
                        )
                      )
                    ),
                    128
                  )),
                ]),
                Oe(
                  t.ZyroPagination,
                  {
                    "current-page": a.currentPage,
                    "page-count": a.pageCount,
                    class: "block-product-list__pagination",
                    color: "var(--body-color)",
                    onChangePage: n[1] || (n[1] = (l) => t.handlePageChange(l)),
                  },
                  null,
                  8,
                  ["current-page", "page-count"]
                ),
              ],
              512
            ))
          : (c(),
            q(
              t.ProductListEmptyState,
              {
                key: 3,
                "text-color-vars": a.textColorVars,
                "empty-page-message": t.emptyPageMessage,
              },
              null,
              8,
              ["text-color-vars", "empty-page-message"]
            )),
      ],
      12,
      Kf
    )
  );
}
const ah = oe(zf, [
    ["render", th],
    ["__scopeId", "data-v-f1f37827"],
  ]),
  wl = (e) => {
    const n = u(() => e.data.settings?.styles),
      a = u(() => e.data.settings?.imageHoverEffect),
      t = u(() => e.data.textColorVars),
      o = u(() => e.data.columnCount),
      i = u(() => e.data.productCategoryId),
      r = u(() => e.data.isButtonEnabled ?? !1),
      l = u(() => e.data.buttonDisplay),
      s = u(() => e.data.buttonText),
      m = u(() => e.data.buttonStyle),
      g = u(() => e.data.buttonType),
      d = u(() => e.data.buttonBorderWidth),
      v = u(() => e.data.ribbonStyle),
      h = u(() => e.data.imageRatio),
      y = u(() => ({
        ...e.data.productSorting,
        sortingOptions: e.data.productSorting?.sortingOptions?.filter(
          (T) => T.isEnabled
        ),
      })),
      k = u(() => e.data.productsPerPage || Op[o.value || As]);
    return {
      textColorVars: t,
      blockStyle: n,
      imageHoverEffect: a,
      columnCount: o,
      productsPerPage: k,
      productCategoryId: i,
      isButtonEnabled: r,
      buttonDisplay: l,
      buttonText: s,
      buttonStyle: m,
      buttonType: g,
      buttonBorderWidth: d,
      ribbonStyle: v,
      imageRatio: h,
      productSorting: y,
    };
  },
  nh = {
    __name: "BlockEcommerceProductListProviderUser",
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      lcp: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Zt },
      blocks: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { meta: t, siteId: o } = Ze(),
        {
          isLoading: i,
          productPages: r,
          isShoppingCartOpen: l,
          shoppingCartItems: s,
          variantsQuantity: m,
          updateVariantsQuantity: g,
          setIsLoading: d,
          setIsLoaded: v,
          setStoreProducts: h,
          setShoppingCartOpen: y,
          setShoppingCartItems: k,
          setIsCheckoutLoading: T,
          setSelectedBookingId: _,
        } = Ft({ blockId: a.blockId }),
        {
          openEcommerceModal: b,
          closeEcommerceModal: A,
          setProductPreviewData: D,
        } = Ut(),
        { initiateCheckout: I } = nn(),
        R = M(0),
        L = M(1),
        K = M([]),
        W = M(
          (a.data.productSorting?.enabled &&
            a.data.productSorting?.sortingOptions?.find(
              ({ isEnabled: Pe }) => Pe
            )?.value) ||
            ""
        ),
        C = u(() => a.blocks[a.blockId]?.productIds),
        {
          blockStyle: H,
          textColorVars: F,
          columnCount: Q,
          productsPerPage: B,
          productCategoryId: P,
          isButtonEnabled: V,
          buttonDisplay: U,
          buttonText: G,
          buttonStyle: S,
          buttonType: p,
          buttonBorderWidth: Y,
          ribbonStyle: j,
          imageRatio: ee,
          productSorting: J,
          imageHoverEffect: N,
        } = wl(a),
        w = async ({ sort: Pe, page: ze }) => {
          const Xe = so(t.value);
          if (Xe) {
            v(!1), d(!0);
            try {
              const ct = await br(Xe, {
                  productIds: C.value,
                  offset: (ze - 1) * B.value,
                  limit: B.value,
                  collectionId: P.value,
                  sort:
                    !Pe && P.value ? "order=ASC&sort_by=collection_order" : Pe,
                }),
                Bt = ct.products.map((bt) => bt.id);
              h(ct.products),
                await g(Bt),
                (K.value = ct.products),
                (R.value = Math.ceil(ct.count / ct.limit));
            } catch (ct) {
              console.error(ct);
            } finally {
              d(!1), v(!0);
            }
          }
        },
        ae = M(!1),
        ve = u(() => `store-page-${a.blockId}`),
        se = u(() => !!K.value?.length),
        be = u(() => i.value || !ae.value),
        de = (Pe) => {
          (L.value = Pe), w({ page: Pe, sort: W.value });
        },
        z = (Pe) => {
          const ze = Pe.target.value;
          (W.value = ze), w({ sort: ze, page: L.value });
        },
        ie = async (Pe) => {
          if (a.isInPreviewMode) {
            b("EcommerceMessageButtonDisabled");
            return;
          }
          if (Pe.options.length) {
            const Xe = Object.values(r.value).find(
                (bt) => bt.productId === Pe.id
              ),
              Bt = Object.keys(a.blocks)
                .filter((bt) => a.blocks[bt].type === "BlockEcommerceProduct")
                .find((bt) => Xe.blocks.includes(bt));
            if (!Bt) {
              if (!Xe) {
                window.location.assign("/");
                return;
              }
              window.location.assign(`/${Xe.slug}`);
              return;
            }
            D(a.blocks[Bt]), b("EcommerceProductPreview");
            return;
          }
          const ze = [{ ...Pe, variants: [Pe.variants[0]] }];
          if ((await A(), Pe.type.value === Yt)) {
            _(Pe.id), b("EcommerceBookingEventSelect");
            return;
          }
          if (a.isCartVisible) {
            if ((k([...s.value, ...ze]), l.value)) return;
            y(!0);
          } else
            T(!0),
              await I(ze).then(() => {
                T(!1);
              });
        },
        De = () => {
          const ze =
              new URLSearchParams(window.location.search).get(ve.value) || "1",
            Xe = Number.parseInt(ze, 10);
          Xe !== L.value && (L.value = Xe);
        };
      Ee(() => {
        ae.value = !0;
        const ze =
            new URLSearchParams(window.location.search).get(ve.value) || "1",
          Xe = Number.parseInt(ze, 10);
        Xe !== L.value && ((L.value = Xe), de(Xe)),
          window.addEventListener("popstate", () => {
            De();
          });
      }),
        kt(() => {
          window.removeEventListener("popstate", De);
        }),
        w({ sort: W.value, page: L.value });
      const me = {
        props: a,
        meta: t,
        siteId: o,
        isEcommerceLoading: i,
        productPages: r,
        isShoppingCartOpen: l,
        shoppingCartItems: s,
        variantsQuantity: m,
        updateVariantsQuantity: g,
        setIsLoading: d,
        setIsLoaded: v,
        setStoreProducts: h,
        setShoppingCartOpen: y,
        setShoppingCartItems: k,
        setIsCheckoutLoading: T,
        setSelectedBookingId: _,
        openEcommerceModal: b,
        closeEcommerceModal: A,
        setProductPreviewData: D,
        initiateCheckout: I,
        pageCount: R,
        currentPage: L,
        products: K,
        sorting: W,
        productIds: C,
        blockStyle: H,
        textColorVars: F,
        columnCount: Q,
        productsPerPage: B,
        productCategoryId: P,
        isButtonEnabled: V,
        buttonDisplay: U,
        buttonText: G,
        buttonStyle: S,
        buttonType: p,
        buttonBorderWidth: Y,
        ribbonStyle: j,
        imageRatio: ee,
        productSorting: J,
        imageHoverEffect: N,
        fetchProducts: w,
        isClientLoaded: ae,
        blockStorePageQuery: ve,
        isProductListShown: se,
        isLoading: be,
        handlePageChange: de,
        handleSortChange: z,
        handleButtonClick: ie,
        handleBrowserNavigationPageChange: De,
        computed: u,
        ref: M,
        onMounted: Ee,
        onBeforeUnmount: kt,
        get getStoreProducts() {
          return br;
        },
        get useSiteGlobal() {
          return Ze;
        },
        get getStoreId() {
          return so;
        },
        get isAppPrerendering() {
          return ps;
        },
        BlockEcommerceProductList: ah,
        get useBlockEcommerceProductList() {
          return wl;
        },
        get SYSTEM_LOCALE() {
          return Zt;
        },
        get useEcommerceModal() {
          return Ut;
        },
        get useEcommerce() {
          return nn;
        },
        get PRODUCT_TYPE_BOOKING() {
          return Yt;
        },
        get useEcommerceGlobal() {
          return Ft;
        },
      };
      return (
        Object.defineProperty(me, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        me
      );
    },
  };
function oh(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.BlockEcommerceProductList,
      {
        "block-id": a.blockId,
        "block-style": t.blockStyle,
        "text-color-vars": t.textColorVars,
        "is-product-list-shown": t.isProductListShown,
        "products-per-page": t.productsPerPage,
        "column-count": t.columnCount,
        "page-count": t.pageCount,
        "current-page": t.currentPage,
        "product-pages": t.productPages,
        "product-category-id": t.productCategoryId,
        "is-button-enabled": t.isButtonEnabled,
        "button-display": t.buttonDisplay,
        "button-text": t.buttonText,
        "button-style": t.buttonStyle,
        "button-type": t.buttonType,
        "button-border-width": t.buttonBorderWidth,
        "is-loading": t.isLoading,
        "ribbon-style": t.ribbonStyle,
        products: t.products,
        translations: a.ecommerceTranslations,
        "image-ratio": t.imageRatio,
        "image-hover-effect": t.imageHoverEffect,
        "is-eager":
          a.lcp.type === "block-ecommerce-product-list" &&
          a.lcp.id === a.blockId,
        "site-id": t.siteId,
        "variants-quantity": t.variantsQuantity,
        "product-sorting": t.productSorting,
        sorting: t.sorting,
        onPageChanged: t.handlePageChange,
        onSortChanged: t.handleSortChange,
        onButtonClick: t.handleButtonClick,
      },
      null,
      8,
      [
        "block-id",
        "block-style",
        "text-color-vars",
        "is-product-list-shown",
        "products-per-page",
        "column-count",
        "page-count",
        "current-page",
        "product-pages",
        "product-category-id",
        "is-button-enabled",
        "button-display",
        "button-text",
        "button-style",
        "button-type",
        "button-border-width",
        "is-loading",
        "ribbon-style",
        "products",
        "translations",
        "image-ratio",
        "image-hover-effect",
        "is-eager",
        "site-id",
        "variants-quantity",
        "product-sorting",
        "sorting",
      ]
    )
  );
}
const rh = oe(nh, [["render", oh]]),
  Ns = ({
    move: e = { swipe: !1, drag: !1 },
    onMoveLeft: n = () => {},
    onMoveRight: a = () => {},
    onMoveUp: t = () => {},
    onMoveDown: o = () => {},
  }) => {
    let i = null,
      r = null;
    const l = e.swipe && e.drag,
      s = e.swipe || e.drag;
    function m(T) {
      return T.touches;
    }
    function g(T) {
      const _ = m(T)[0];
      (i = _.clientX), (r = _.clientY);
    }
    function d(T) {
      const _ = new Image();
      (_.src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="),
        T.dataTransfer.setDragImage(_, 0, 0),
        (i = T.clientX),
        (r = T.clientY);
    }
    const v = (T, _) => {
        Math.abs(T) > Math.abs(_) ? (T > 0 ? n() : a()) : _ > 0 ? t() : o(),
          (i = null),
          (r = null);
      },
      h = (T) => {
        if (!i || !r) return;
        const _ = T.touches[0].clientX,
          b = T.touches[0].clientY,
          A = i - _,
          D = r - b;
        v(A, D);
      },
      y = (T) => {
        if (!i || !r) return;
        const _ = i - T.clientX,
          b = r - T.clientY;
        v(_, b);
      };
    return {
      enableMoveEvents: (T = !0, _ = null) => {
        const b = _ === null ? document : _,
          A = T ? "addEventListener" : "removeEventListener";
        if (l)
          b[A]("touchstart", g, !1),
            b[A]("touchmove", h, !1),
            b[A]("dragstart", d, !1),
            b[A]("drag", y, !1);
        else if (s) {
          const D = e.swipe ? g : d,
            I = e.swipe ? h : y;
          b[A](e.swipe ? "touchstart" : "dragstart", D, !1),
            b[A](e.swipe ? "touchmove" : "drag", I, !1);
        }
      },
    };
  },
  ih = re({
    __name: "Carousel",
    props: {
      images: {},
      productTitle: {},
      arrowsColor: { default: "unset" },
      navigationThumbnailArrowsColor: { default: "unset" },
      galleryPlacement: { default: "left" },
      imageRatio: { default: "unset" },
      imageBorderRadius: { default: "unset" },
      isEager: { type: Boolean, default: !1 },
      variantImage: { default: null },
      isQuickPreview: { type: Boolean, default: !1 },
      isVariantImagePreselected: { type: Boolean, default: !1 },
      siteId: { default: "" },
    },
    emits: ["image-click"],
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(),
        o = M(0),
        i = M(""),
        r = M(0),
        l = M(0),
        s = u(() => a.galleryPlacement === "left"),
        m = u(() => {
          let B = 0;
          switch (!0) {
            case o.value < (s.value ? 920 : 900):
              B = 4;
              break;
            case o.value < (s.value ? 1060 : 1020):
              B = 5;
              break;
            case o.value < (s.value ? 1250 : 1160):
              B = 6;
              break;
            case o.value < (s.value ? 1400 : 1320):
              B = 7;
              break;
            default:
              B = s.value ? 7 : 8;
          }
          return l.value !== 0 && l.value + B < a.images.length ? B - 1 : B;
        }),
        g = u(() => a.images.slice(l.value, l.value + m.value)),
        d = u(() => g.value.some((B) => B.url === a.images[r.value].url)),
        v = u(() => a.images.length > 1),
        h = u(() => v.value && !a.isQuickPreview),
        y = u(() =>
          a.images.length < m.value ? !1 : l.value + m.value < a.images.length
        ),
        k = u(() => {
          switch (a.imageRatio) {
            case Lt.COVER:
            case Lt.LANDSCAPE:
            case Lt.PORTRAIT:
              return "cover";
            default:
              return "contain";
          }
        }),
        T = u(() => (a.isQuickPreview ? uc : cc)),
        _ = u(() => {
          const B = s.value ? dc : T.value;
          switch (a.imageRatio) {
            case Lt.LANDSCAPE:
              return B * 0.75;
            case Lt.PORTRAIT:
              return B * 1.333;
            default:
              return;
          }
        }),
        b = u(() => ({
          "--image-max-width": `${T.value}px`,
          "--image-max-width-small": `${Mi}px`,
          "--image-object-fit": k.value,
          "--image-border-radius":
            k.value === "cover" ? a.imageBorderRadius : 0,
          "--arrow-color": a.arrowsColor,
          "--thumbnail-arrow-color": a.navigationThumbnailArrowsColor,
        })),
        A = () => {
          a.images.length - r.value < m.value
            ? (l.value = a.images.length - m.value)
            : (l.value = r.value);
        },
        D = () => {
          (o.value = window.innerWidth), m.value < a.images.length && A();
        },
        I = (B) => g.value[B].url === a.images[r.value].url,
        R = (B) => {
          r.value = a.images.findIndex((P) => P.url === g.value[B].url);
        },
        L = () => {
          (i.value = "right"),
            (r.value = r.value === a.images.length - 1 ? 0 : r.value + 1),
            d.value ||
              (l.value + m.value === a.images.length
                ? (l.value = 0)
                : (A(), m.value !== g.value.length && A()));
        },
        K = () => {
          (i.value = "left"),
            (r.value = r.value === 0 ? a.images.length - 1 : r.value - 1),
            d.value ||
              (l.value === 0 ? (l.value = a.images.length - m.value) : A());
        },
        W = () => {
          const B = m.value;
          l.value += 1;
          const P = m.value;
          B !== P && y.value && W();
        },
        C = () => {
          l.value -= 1;
        },
        H = (B) => {
          if (!v.value) return;
          const { enableMoveEvents: P } = Ns({
            move: { drag: !1, swipe: !0 },
            onMoveLeft: L,
            onMoveRight: K,
          });
          P(B, t.value);
        },
        F = () => {
          const B = a.images.findIndex((P) => P.url === a.variantImage);
          B > -1 && (r.value = B);
        };
      Le(
        () => a.variantImage,
        () => {
          F(), d.value || A();
        }
      ),
        Ee(() => {
          (o.value = window.innerWidth),
            window.addEventListener("resize", D),
            a.isVariantImagePreselected && F(),
            H(!0);
        }),
        kt(() => {
          window.removeEventListener("resize", D), H(!1);
        });
      const Q = {
        props: a,
        carouselRef: t,
        windowWidth: o,
        slideDirection: i,
        currentIndex: r,
        imageListStartIndex: l,
        isGalleryLeft: s,
        imagePreviewAmount: m,
        thumbnails: g,
        isThumbnailVisible: d,
        isMoreThanOneImage: v,
        isArrowsShown: h,
        isRightImageArrowShown: y,
        objectFit: k,
        imageMaxWidth: T,
        imageMaxHeight: _,
        carouselStyle: b,
        presetThumbnailPosition: A,
        resizeEventHandler: D,
        isImageMatch: I,
        handleThumbnailClick: R,
        goToNextSlide: L,
        goToPreviousSlide: K,
        moveImageListRight: W,
        moveImageListLeft: C,
        enableCarouselMoveEvents: H,
        setVariantImage: F,
        ProductImage: bo,
        ProductImagePlaceholder: Hs,
        get PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX() {
          return Mi;
        },
      };
      return (
        Object.defineProperty(Q, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Q
      );
    },
  }),
  lh = E(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--left" },
    null,
    -1
  ),
  sh = [lh],
  uh = E(
    "span",
    { class: "product-carousel__arrow product-carousel__arrow--right" },
    null,
    -1
  ),
  ch = [uh],
  dh = ["onClick"],
  mh = { class: "product-carousel__dots-wrapper" },
  gh = ["onClick"];
function vh(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "div",
      {
        class: Z([
          "product-carousel",
          { "product-carousel--left": t.isGalleryLeft },
        ]),
        style: Be(t.carouselStyle),
      },
      [
        E(
          "div",
          {
            ref: "carouselRef",
            class: Z(`
				product-carousel__image-wrapper
				product-carousel__image-wrapper--${a.imageRatio}${
              t.isGalleryLeft ? "-left" : ""
            }
			`),
          },
          [
            t.isArrowsShown
              ? (c(),
                f(
                  ge,
                  { key: 0 },
                  [
                    ue(
                      (c(),
                      f(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--left",
                          onClick: t.goToPreviousSlide,
                        },
                        sh
                      )),
                      [[r, "product-carousel-button-prev"]]
                    ),
                    ue(
                      (c(),
                      f(
                        "button",
                        {
                          class:
                            "product-carousel__slider-button product-carousel__slider-button--right",
                          onClick: t.goToNextSlide,
                        },
                        ch
                      )),
                      [[r, "product-carousel-button-next"]]
                    ),
                  ],
                  64
                ))
              : O("", !0),
            a.images.length
              ? (c(),
                q(
                  At,
                  {
                    key: 1,
                    name: `slide-${t.slideDirection}`,
                    mode: "out-in",
                    class: "product-carousel__image-content",
                  },
                  {
                    default: fe(() => [
                      (c(),
                      q(
                        t.ProductImage,
                        {
                          key: a.images[t.currentIndex].url,
                          src: a.images[t.currentIndex].url,
                          alt: a.productTitle,
                          class:
                            "product-carousel__image product-carousel__main-image",
                          "is-eager": a.isEager,
                          "object-fit": t.objectFit,
                          width: t.imageMaxWidth,
                          height: t.imageMaxHeight,
                          "enable-srcset": "",
                          onClick:
                            n[0] ||
                            (n[0] = (l) =>
                              e.$emit("image-click", t.currentIndex)),
                        },
                        null,
                        8,
                        [
                          "src",
                          "alt",
                          "is-eager",
                          "object-fit",
                          "width",
                          "height",
                        ]
                      )),
                    ]),
                    _: 1,
                  },
                  8,
                  ["name"]
                ))
              : (c(),
                q(t.ProductImagePlaceholder, {
                  key: 2,
                  class: "product-carousel__image product-carousel__main-image",
                })),
          ],
          2
        ),
        t.isMoreThanOneImage
          ? (c(),
            f(
              ge,
              { key: 0 },
              [
                a.isQuickPreview
                  ? O("", !0)
                  : (c(),
                    f(
                      "div",
                      {
                        key: 0,
                        class: Z([
                          "product-carousel__image-list",
                          {
                            "product-carousel__image-list-left":
                              t.isGalleryLeft,
                          },
                        ]),
                      },
                      [
                        t.imageListStartIndex !== 0
                          ? ue(
                              (c(),
                              f(
                                "button",
                                {
                                  key: 0,
                                  class: Z([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--left":
                                        !t.isGalleryLeft,
                                      "product-carousel__image-arrow--top":
                                        t.isGalleryLeft,
                                    },
                                  ]),
                                  onClick: t.moveImageListLeft,
                                },
                                null,
                                2
                              )),
                              [[r, "product-carousel-image-button-left"]]
                            )
                          : O("", !0),
                        E(
                          "div",
                          {
                            class: Z({
                              "product-carousel__image-list-element-wrapper-left":
                                t.isGalleryLeft,
                            }),
                          },
                          [
                            (c(!0),
                            f(
                              ge,
                              null,
                              we(
                                t.thumbnails,
                                (l, s) => (
                                  c(),
                                  f(
                                    "button",
                                    {
                                      key: `image-${s}-${l.url}`,
                                      class: Z([
                                        "product-carousel__image-list-element",
                                        {
                                          "product-carousel__image-list-element--active":
                                            t.isImageMatch(s),
                                        },
                                      ]),
                                      onClick: (m) => t.handleThumbnailClick(s),
                                    },
                                    [
                                      Oe(
                                        t.ProductImage,
                                        {
                                          src: l.url,
                                          alt: a.productTitle,
                                          class: "product-carousel__image",
                                          "is-eager": a.isEager,
                                          "object-fit": a.imageRatio,
                                          "site-id": a.siteId,
                                          width:
                                            t.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                          height:
                                            t.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
                                        },
                                        null,
                                        8,
                                        [
                                          "src",
                                          "alt",
                                          "is-eager",
                                          "object-fit",
                                          "site-id",
                                          "width",
                                          "height",
                                        ]
                                      ),
                                    ],
                                    10,
                                    dh
                                  )
                                )
                              ),
                              128
                            )),
                          ],
                          2
                        ),
                        t.isRightImageArrowShown
                          ? ue(
                              (c(),
                              f(
                                "button",
                                {
                                  key: 1,
                                  class: Z([
                                    "product-carousel__image-arrow",
                                    {
                                      "product-carousel__image-arrow--right":
                                        !t.isGalleryLeft,
                                      "product-carousel__image-arrow--bottom":
                                        t.isGalleryLeft,
                                    },
                                  ]),
                                  onClick: t.moveImageListRight,
                                },
                                null,
                                2
                              )),
                              [[r, "product-carousel-image-button-right"]]
                            )
                          : O("", !0),
                      ],
                      2
                    )),
                E("div", mh, [
                  (c(!0),
                  f(
                    ge,
                    null,
                    we(
                      a.images,
                      (l, s) => (
                        c(),
                        f(
                          "button",
                          {
                            key: `image-dot-${s}`,
                            class: "product-carousel__dot-button",
                            onClick: (m) => (t.currentIndex = s),
                          },
                          [
                            E(
                              "span",
                              {
                                class: Z([
                                  "product-carousel__dot",
                                  {
                                    "product-carousel__dot--active":
                                      s === t.currentIndex,
                                  },
                                ]),
                              },
                              null,
                              2
                            ),
                          ],
                          8,
                          gh
                        )
                      )
                    ),
                    128
                  )),
                ]),
              ],
              64
            ))
          : O("", !0),
      ],
      6
    )
  );
}
const ph = oe(ih, [["render", vh]]),
  fh = re({
    __name: "OptionSelect",
    props: {
      title: {},
      labelKey: { default: "value" },
      options: { default: () => ({}) },
      value: { default: "" },
    },
    emits: ["set-value"],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = a,
        i = {
          emit: t,
          updateSelectedValue: (r) => {
            const l = r.target?.value;
            t("set-value", l);
          },
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  hh = { class: "option-select" },
  yh = { class: "option-select__label" },
  bh = { class: "option-select__select-wrapper" },
  _h = ["value"],
  wh = ["value"];
function kh(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f("div", hh, [
      E("p", yh, X(a.title), 1),
      E("div", bh, [
        ue(
          (c(),
          f(
            "select",
            {
              value: a.value,
              class: "option-select__select",
              onChange: n[0] || (n[0] = (l) => t.updateSelectedValue(l)),
            },
            [
              (c(!0),
              f(
                ge,
                null,
                we(
                  a.options,
                  (l, s) => (
                    c(),
                    f(
                      "option",
                      { key: `option-${s}`, value: l.id },
                      X(l[a.labelKey]),
                      9,
                      wh
                    )
                  )
                ),
                128
              )),
            ],
            40,
            _h
          )),
          [[r, "product-section-select-button"]]
        ),
      ]),
    ])
  );
}
const Sh = oe(fh, [
    ["render", kh],
    ["__scopeId", "data-v-4f73632f"],
  ]),
  Th = {
    props: {
      imageBorderRadius: { type: String, default: "0" },
      textAlign: { type: String, default: "" },
    },
    computed: {
      computedStyles() {
        return { "--image-border-radius": this.imageBorderRadius };
      },
    },
  },
  $s = (e) => (Rt("data-v-56d737b7"), (e = e()), Ht(), e),
  Ch = $s(() => E("div", { class: "skeleton-loader__image" }, null, -1)),
  Ph = $s(() =>
    E(
      "div",
      { class: "skeleton-loader__title skeleton-loader__text" },
      null,
      -1
    )
  );
function Ih(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      { class: "skeleton-loader", style: Be(i.computedStyles) },
      [
        Ch,
        E(
          "div",
          {
            class: Z([
              "skeleton-loader__wrapper",
              { "skeleton-loader__wrapper--center": a.textAlign === "center" },
            ]),
          },
          [
            Ph,
            (c(),
            f(
              ge,
              null,
              we(10, (r) =>
                E("div", { key: r, class: "skeleton-loader__text" })
              ),
              64
            )),
          ],
          2
        ),
      ],
      4
    )
  );
}
const Eh = oe(Th, [
    ["render", Ih],
    ["__scopeId", "data-v-56d737b7"],
  ]),
  Dh = re({
    name: "QuantityPicker",
    props: {
      qaSelector: { type: String, default: "" },
      isStockAvailable: { type: Boolean, default: !0 },
      quantity: { type: Number, required: !0 },
      size: { type: Number, default: 48 },
      fontSize: { type: Number, default: 16 },
      isCartStyle: { type: Boolean, default: !1 },
      isInputDisabled: { type: Boolean, default: !1 },
      isLimitReached: { type: Boolean, default: !1 },
    },
    emits: ["quantity-change"],
    data() {
      return { inputValue: this.quantity };
    },
    computed: {
      computedStyles() {
        return {
          "--size": `${this.size}px`,
          "--font-size": `${this.fontSize}px`,
        };
      },
      isIncreaseDisabled() {
        return !this.isStockAvailable || this.isLimitReached;
      },
    },
    watch: {
      quantity(e) {
        this.inputValue = e;
      },
    },
    methods: {
      handleQuantityInput(e) {
        const n = e.target?.value;
        if (n.match(Vc)) this.$emit("quantity-change", Number(e.target.value));
        else if (n === "") return;
        this.inputValue = this.quantity;
      },
      handleEmptyInput(e) {
        e.target?.value === "" &&
          (this.$emit("quantity-change", 1), (this.inputValue = 1));
      },
    },
  }),
  Mh = ["disabled"],
  Oh = ["disabled"];
function Ah(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "span",
      {
        class: Z([
          "quantity-picker",
          { "quantity-picker--cart-style": e.isCartStyle },
        ]),
        style: Be(e.computedStyles),
      },
      [
        ue(
          (c(),
          f(
            "button",
            {
              class: Z([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              onClick:
                n[0] ||
                (n[0] = (l) => e.$emit("quantity-change", e.quantity - 1)),
            },
            [Re(" - ")],
            2
          )),
          [[r, `${e.qaSelector}-btn-decrease`]]
        ),
        ue(
          E(
            "input",
            {
              "onUpdate:modelValue": n[1] || (n[1] = (l) => (e.inputValue = l)),
              disabled: e.isInputDisabled,
              class: Z([
                "quantity-picker__amount",
                { "quantity-picker__amount--borderless": e.isCartStyle },
              ]),
              onInput:
                n[2] ||
                (n[2] = (...l) =>
                  e.handleQuantityInput && e.handleQuantityInput(...l)),
              onBlur:
                n[3] ||
                (n[3] = (...l) =>
                  e.handleEmptyInput && e.handleEmptyInput(...l)),
            },
            null,
            42,
            Mh
          ),
          [
            [ts, e.inputValue],
            [r, `${e.qaSelector}-text-qty`],
          ]
        ),
        ue(
          (c(),
          f(
            "button",
            {
              class: Z([
                "quantity-picker__control",
                {
                  "quantity-picker__control--rounded quantity-picker__control--bigger":
                    e.isCartStyle,
                },
              ]),
              disabled: e.isIncreaseDisabled,
              onClick:
                n[4] ||
                (n[4] = (l) => e.$emit("quantity-change", e.quantity + 1)),
            },
            [Re(" + ")],
            10,
            Oh
          )),
          [[r, `${e.qaSelector}-btn-increaseq`]]
        ),
      ],
      6
    )
  );
}
const Vs = oe(Dh, [
    ["render", Ah],
    ["__scopeId", "data-v-9766ec29"],
  ]),
  qo = 5,
  _n = 1,
  Bh = re({
    __name: "BlockEcommerceProduct",
    props: {
      blockId: {},
      productData: {},
      blockStyle: { default: () => ({}) },
      textColorVars: { default: () => ({}) },
      blockButtonText: { default: "" },
      blockButtonStyle: { default: () => ({}) },
      blockButtonType: { default: "primary" },
      blockButtonBorderWidth: { default: 0 },
      navigationArrowsColor: { default: "" },
      navigationThumbnailArrowsColor: { default: "" },
      galleryPlacement: { default: "" },
      imageRatio: { default: "cover" },
      imageBorderRadius: { default: "0%" },
      isLoading: { type: Boolean, default: !1 },
      isCheckoutLoading: { type: Boolean, default: !1 },
      canAddToCart: { type: Function, default: () => !0 },
      isEager: { type: Boolean, default: !1 },
      translations: {},
      quantifiedCartItemsList: { default: () => [] },
      isQuantityPickerEnabled: { type: Boolean },
      productPages: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      siteId: {},
      shoppingCartItems: { default: () => [] },
      variantsQuantity: {},
      currentPageType: { default: "default" },
    },
    emits: ["buy-button-click", "click-more", "image-click"],
    setup(e, { expose: n, emit: a }) {
      n(), rt((w) => ({ "4d27674a": g.value }));
      const t = { [pa]: gn },
        o = e,
        i = a,
        r = M(1),
        l = M(""),
        s = M(!1),
        m = M(da),
        g = u(() => `${Xt}px`),
        d = u(() => o.currentPageType === us),
        v = u(() => ({
          normal:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color`
            ],
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-background-color-hover`
            ],
        })),
        h = u(() => ({
          hover:
            o.blockButtonStyle[
              `grid-button-${o.blockButtonType}-border-color-hover`
            ],
          normal:
            o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color`],
        })),
        y = u(() => o.blockStyle?.textAlign),
        k = u(() => o.productData),
        T = u(() =>
          k.value.options.length
            ? k.value.options.map((w) => ({
                ...w.values.filter(
                  (ae, ve, se) =>
                    se.findIndex((be) => be.value === ae.value) === ve
                ),
              }))
            : []
        ),
        _ = u(() => m.value?.variants[0]),
        b = u(
          () =>
            o.productData.purchasable === void 0 || o.productData.purchasable
        ),
        A = (w) => {
          const ae = _.value?.options.find(
            (ve) => ve.option_id === T.value[w][0].option_id
          );
          return Object.values(T.value[w]).find((ve) => ae?.value === ve.value)
            ?.id;
        },
        D = u(() =>
          m.value.id ? _.value?.prices[0] : k.value?.variants[0].prices[0]
        ),
        I = u(
          () =>
            o.quantifiedCartItemsList.find(
              (w) => w.product.variants[0].id === _.value?.id
            )?.quantity || 0
        ),
        R = u(() => (o.isCartVisible ? r.value + I.value : r.value)),
        L = u(() =>
          _.value?.manage_inventory
            ? R.value <
              Pn({
                variantsQuantity: o.variantsQuantity,
                variantId: _.value?.id,
              })
            : !0
        ),
        K = u(() => ({ ...Vt({ ...o.textColorVars, ...o.blockButtonStyle }) })),
        W = u(
          () => !k.value?.options.length || (k.value?.options.length && m.value)
        ),
        C = u(() => k.value?.type.value === Yt),
        H = u(
          () =>
            C.value && o.shoppingCartItems?.some((w) => w.id === k.value?.id)
        ),
        F = u(
          () => H.value || !o.canAddToCart(k.value?.id, m.value?.variants[0].id)
        ),
        Q = u(() =>
          H.value
            ? `✓ ${o.translations.booked}`
            : o.blockButtonText || o.translations?.addToBag || "Add to bag"
        ),
        B = u(() => k.value?.variants[0].booking_event?.location),
        P = u(() => Qr(k.value, o.translations)),
        V = u(
          () =>
            _.value?.manage_inventory &&
            Pn({
              variantsQuantity: o.variantsQuantity,
              variantId: _.value?.id,
            }) === 0
        ),
        U = u(() => !!_.value?.manage_inventory),
        G = u(() => {
          if (!o.productPages) return "/";
          const w = Object.values(o.productPages).find(
            (ae) => ae.productId === k.value.id
          );
          return w ? `/${w.slug}` : "/";
        }),
        S = u(() => {
          const w = Pn({
            variantsQuantity: o.variantsQuantity,
            variantId: _.value?.id,
          });
          return V.value || I.value === w
            ? o.translations.outOfStock
            : `${w <= qo ? w : `${qo}+`} ${o.translations.inStock} `;
        }),
        p = (w) => ({ ...k.value, variants: [w] }),
        Y = () => {
          if (!k.value) return da;
          if (k.value[Ss] === jr) {
            const ae = k.value.variants.reduce((be, de) => {
                const z = be.prices[0]?.sale_amount || be.prices[0]?.amount,
                  ie = de.prices[0]?.sale_amount || de.prices[0]?.amount;
                return z <= ie ? be : de;
              }),
              ve = T.value.map(
                (be) =>
                  Object.values(be).find((de) =>
                    ae.options.some((z) => z.value === de.value)
                  ) || {}
              ),
              se = { ...ae, options: [...ve] };
            return p(se);
          }
          const w = k.value.variants.find((ae) =>
            ae.options.every((ve) =>
              T.value.some((se) => se[0].value === ve.value)
            )
          );
          return p(w || k.value.variants[0]);
        },
        j = () => {
          const w = new Array(r.value).fill(m.value);
          (r.value = _n), i("buy-button-click", w);
        },
        ee = (w) => {
          r.value = _n;
          const ae =
              k.value.options
                .map((de) => de.values.find((z) => z.id === w))
                .find((de) => de) || {},
            se = [
              ..._.value?.options.filter((de) => de.option_id !== ae.option_id),
              ae,
            ],
            be = k.value.variants.find((de) =>
              de.options.every((z) =>
                se.some(
                  (ie) => ie.value === z.value && ie.option_id === z.option_id
                )
              )
            );
          be && (m.value = p(be));
        },
        J = (w) => {
          const ae = _.value?.manage_inventory;
          if (((s.value = o.shoppingCartItems.length + w >= Za), ae)) {
            const ve = Pn({
              variantsQuantity: o.variantsQuantity,
              variantId: _.value?.id,
            });
            if (I.value + w > ve || s.value) {
              const se = Math.min(
                ve - I.value,
                Za - o.shoppingCartItems.length
              );
              r.value = se;
              return;
            }
          } else if (s.value) {
            r.value = Za - o.shoppingCartItems.length;
            return;
          }
          if (w <= 0) {
            r.value = _n;
            return;
          }
          r.value = w;
        };
      Ee(() => {
        k.value && (m.value = Y());
      }),
        Le(k, (w, ae) => {
          JSON.stringify(w) !== JSON.stringify(ae) && (m.value = Y());
        }),
        Le(m, (w, ae) => {
          (ae?.id === -1 && !w?.site_product_selection) ||
            (JSON.stringify(w) !== JSON.stringify(ae) &&
              w?.variants[0].image_url &&
              (l.value = w.variants[0].image_url));
        }),
        Le(
          () => o.shoppingCartItems,
          (w) => {
            const ae = w?.length || 0;
            (r.value = _n), (s.value = ae + r.value >= Za);
          },
          { immediate: !0 }
        );
      const N = {
        MAX_STOCK_AMOUNT_TO_SHOW: qo,
        DEFAULT_PICKER_VALUE: _n,
        CUSTOM_ATTRIBUTES: t,
        props: o,
        emit: i,
        selectedQuantity: r,
        variantImage: l,
        isLimitReached: s,
        selectedVariant: m,
        mobileMaxWidthCSSVar: g,
        isBlockInProductPage: d,
        buttonBackgroundColor: v,
        buttonBorderColor: h,
        textAlign: y,
        productData: k,
        uniqueOptionSelections: T,
        selectedValueVariant: _,
        isPurchasable: b,
        selectedOption: A,
        priceData: D,
        quantityInCart: I,
        totalQuantitySelected: R,
        isStockAvailable: L,
        computedStyles: K,
        isPriceShown: W,
        isProductTypeBooking: C,
        isBookingProductInCart: H,
        isAddToCartDisabled: F,
        buttonText: Q,
        location: B,
        formattedBookingDuration: P,
        isOutOfStock: V,
        isStockInfoShown: U,
        productPagePath: G,
        stockInfoText: S,
        getProductWithSelectedVariant: p,
        getInitiallySelectedVariant: Y,
        handleButtonClick: j,
        handleVariantOptionChange: ee,
        handleQuantityChange: J,
        Carousel: ph,
        OptionSelect: Sh,
        GridButton: Ya,
        get formatPrice() {
          return Ta;
        },
        get isProductPriceRangeShown() {
          return Mn;
        },
        ProductSkeletonLoader: Eh,
        QuantityPicker: Vs,
      };
      return (
        Object.defineProperty(N, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        N
      );
    },
  }),
  Lh = ["id"],
  xh = { class: "block-product__content-wrapper" },
  Rh = { class: "block-product__price-data-wrapper" },
  Hh = { key: 0, class: "block-product__title" },
  Nh = { key: 1, class: "block-product__title" },
  $h = { class: "block-product__subtitle" },
  Vh = { class: "block-product__additional-info" },
  Uh = { key: 0, class: "block-product__price body-large" },
  Yh = { key: 1, class: "block-product__duration body-large" },
  Fh = { key: 3, class: "block-product__location" },
  Wh = { key: 4, class: "block-product__option-select-wrapper" },
  qh = { key: 0, class: "block-product__stock-text" },
  Gh = { key: 0, class: "block-product__button-wrapper" },
  jh = { key: 0, class: "block-product__notice" },
  zh = ["innerHTML"];
function Kh(e, n, a, t, o, i) {
  const r = He("RouterLink"),
    l = je("qa");
  return (
    c(),
    f(
      "div",
      Ge(
        { id: a.blockId, class: "block-product-wrapper" },
        t.CUSTOM_ATTRIBUTES
      ),
      [
        a.isLoading || !t.productData
          ? (c(),
            q(
              t.ProductSkeletonLoader,
              {
                key: 0,
                "image-border-radius": a.imageBorderRadius,
                "text-align": t.textAlign,
              },
              null,
              8,
              ["image-border-radius", "text-align"]
            ))
          : (c(),
            f(
              "div",
              {
                key: 1,
                class: Z([
                  "block-product",
                  {
                    "block-product--centered": t.textAlign === "center",
                    "block-product--in-preview": a.isQuickPreview,
                  },
                ]),
                style: Be(t.computedStyles),
              },
              [
                Oe(
                  t.Carousel,
                  {
                    images: t.productData.images,
                    "product-title": t.productData.title,
                    "arrows-color": a.navigationArrowsColor,
                    "navigation-thumbnail-arrows-color":
                      a.navigationThumbnailArrowsColor,
                    "gallery-placement": a.galleryPlacement,
                    "image-ratio": a.imageRatio,
                    "image-border-radius": a.imageBorderRadius,
                    "is-eager": a.isEager,
                    "site-id": a.siteId,
                    "variant-image": t.variantImage,
                    "is-quick-preview": a.isQuickPreview,
                    "is-variant-image-preselected": t.isProductPriceRangeShown(
                      t.productData
                    ),
                    onImageClick:
                      n[0] || (n[0] = (s) => e.$emit("image-click", s)),
                  },
                  null,
                  8,
                  [
                    "images",
                    "product-title",
                    "arrows-color",
                    "navigation-thumbnail-arrows-color",
                    "gallery-placement",
                    "image-ratio",
                    "image-border-radius",
                    "is-eager",
                    "site-id",
                    "variant-image",
                    "is-quick-preview",
                    "is-variant-image-preselected",
                  ]
                ),
                E("div", xh, [
                  E("div", Rh, [
                    t.isBlockInProductPage
                      ? ue(
                          (c(), f("h1", Hh, [Re(X(t.productData.title), 1)])),
                          [[l, "builder-product-section-title"]]
                        )
                      : ue(
                          (c(), f("h3", Nh, [Re(X(t.productData.title), 1)])),
                          [[l, "builder-product-section-title"]]
                        ),
                    E("h5", $h, X(t.productData.subtitle), 1),
                    Object.keys(t.priceData || {})?.length
                      ? (c(),
                        f(
                          "div",
                          {
                            key: 2,
                            class: Z([
                              "block-product__price-wrapper",
                              {
                                "block-product__price-wrapper--with-duration":
                                  t.isProductTypeBooking,
                              },
                            ]),
                          },
                          [
                            t.isPriceShown
                              ? (c(),
                                f(
                                  "p",
                                  {
                                    key: 0,
                                    class: Z([
                                      "block-product__price body-large",
                                      {
                                        "block-product__price--sale":
                                          t.priceData.sale_amount,
                                      },
                                    ]),
                                  },
                                  X(
                                    t.formatPrice({
                                      amount: t.priceData.amount,
                                      currency: t.priceData.currency,
                                    })
                                  ),
                                  3
                                ))
                              : O("", !0),
                            E("div", Vh, [
                              t.priceData.sale_amount && t.isPriceShown
                                ? (c(),
                                  f(
                                    "p",
                                    Uh,
                                    X(
                                      t.formatPrice({
                                        amount: t.priceData.sale_amount,
                                        currency: t.priceData.currency,
                                      })
                                    ),
                                    1
                                  ))
                                : O("", !0),
                              t.isProductTypeBooking
                                ? (c(),
                                  f("p", Yh, X(t.formattedBookingDuration), 1))
                                : O("", !0),
                            ]),
                          ],
                          2
                        ))
                      : O("", !0),
                    t.isProductTypeBooking
                      ? (c(), f("p", Fh, X(t.location), 1))
                      : O("", !0),
                    t.productData.options.length
                      ? (c(),
                        f("div", Wh, [
                          (c(!0),
                          f(
                            ge,
                            null,
                            we(
                              t.productData.options,
                              (s, m) => (
                                c(),
                                q(
                                  t.OptionSelect,
                                  {
                                    key: `option-${m}`,
                                    value: t.selectedOption(m),
                                    options: t.uniqueOptionSelections[m],
                                    title: s.title,
                                    class: Z([
                                      "block-product__option-select",
                                      {
                                        "block-product__option-select--centered":
                                          t.textAlign === "center",
                                      },
                                    ]),
                                    "label-key": "value",
                                    onSetValue:
                                      n[1] ||
                                      (n[1] = (g) =>
                                        t.handleVariantOptionChange(g)),
                                  },
                                  null,
                                  8,
                                  ["value", "options", "title", "class"]
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : O("", !0),
                    !t.isProductTypeBooking &&
                    a.isQuantityPickerEnabled &&
                    t.isPurchasable
                      ? (c(),
                        f(
                          "div",
                          {
                            key: 5,
                            class: Z([
                              "block-product__quantity-wrapper",
                              {
                                "block-product__quantity-wrapper--disabled":
                                  t.isOutOfStock || t.isAddToCartDisabled,
                              },
                            ]),
                          },
                          [
                            Oe(
                              t.QuantityPicker,
                              {
                                "qa-selector": "productpage",
                                quantity: t.selectedQuantity,
                                "is-limit-reached": t.isLimitReached,
                                "is-stock-available": t.isStockAvailable,
                                onQuantityChange: t.handleQuantityChange,
                              },
                              null,
                              8,
                              [
                                "quantity",
                                "is-limit-reached",
                                "is-stock-available",
                              ]
                            ),
                            t.isStockInfoShown
                              ? (c(), f("p", qh, X(t.stockInfoText), 1))
                              : O("", !0),
                          ],
                          2
                        ))
                      : O("", !0),
                  ]),
                  t.isPurchasable
                    ? (c(),
                      f("div", Gh, [
                        ue(
                          Oe(
                            t.GridButton,
                            {
                              type: a.blockButtonType,
                              content: t.buttonText,
                              class: Z([
                                "block-product__button",
                                `block-product__button--${a.blockButtonType}`,
                              ]),
                              "is-loading": a.isCheckoutLoading,
                              "tag-name": "button",
                              disabled: t.isAddToCartDisabled,
                              "border-width": a.blockButtonBorderWidth,
                              "border-color": t.buttonBorderColor.normal,
                              "border-color-hover": t.buttonBorderColor.hover,
                              "background-color":
                                t.buttonBackgroundColor.normal,
                              "background-color-hover":
                                t.buttonBackgroundColor.hover,
                              onClick: t.handleButtonClick,
                            },
                            null,
                            8,
                            [
                              "type",
                              "content",
                              "class",
                              "is-loading",
                              "disabled",
                              "border-width",
                              "border-color",
                              "border-color-hover",
                              "background-color",
                              "background-color-hover",
                            ]
                          ),
                          [[l, "productsection-btn-addtobag"]]
                        ),
                      ]))
                    : O("", !0),
                  Oe(At, null, {
                    default: fe(() => [
                      t.isBookingProductInCart
                        ? (c(),
                          f("p", jh, X(a.translations.purchaseToBookAgain), 1))
                        : O("", !0),
                    ]),
                    _: 1,
                  }),
                  t.productData.description && !a.isQuickPreview
                    ? (c(),
                      f(
                        "p",
                        {
                          key: 1,
                          class: "block-product__description",
                          innerHTML: t.productData.description,
                        },
                        null,
                        8,
                        zh
                      ))
                    : a.isQuickPreview
                    ? (c(),
                      q(
                        r,
                        {
                          key: 2,
                          to: { path: t.productPagePath },
                          class: "block-product__link body-large",
                          onClick:
                            n[2] || (n[2] = (s) => e.$emit("click-more")),
                        },
                        {
                          default: fe(() => [
                            Re(X(a.translations.moreDetails), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ))
                    : O("", !0),
                ]),
              ],
              6
            )),
      ],
      16,
      Lh
    )
  );
}
const Qh = oe(Bh, [["render", Kh]]),
  Zh = (e) => {
    const n = u(() => e.data.product.id),
      a = u(() => e.data.settings?.styles),
      t = u(() => e.data.textColorVars),
      o = u(() => e.data.buttonText),
      i = u(() => e.data.buttonStyle),
      r = u(() => e.data.buttonType),
      l = u(() => e.data.buttonBorderWidth),
      s = u(() => e.data.navigationArrowsColor),
      m = u(() => e.data.navigationThumbnailArrowsColor),
      g = u(() => e.data.galleryPlacement),
      d = u(() => e.data.imageRatio),
      v = u(() => e.data.imageBorderRadius),
      h = u(() => e.data.isQuantityPickerEnabled ?? !0);
    return {
      productId: n,
      blockStyle: a,
      blockButtonText: o,
      blockButtonStyle: i,
      blockButtonType: r,
      blockButtonBorderWidth: l,
      textColorVars: t,
      imageBorderRadius: v,
      navigationArrowsColor: s,
      navigationThumbnailArrowsColor: m,
      galleryPlacement: g,
      imageRatio: d,
      isQuantityPickerEnabled: h,
    };
  },
  Xh = (e) => e.replace(/<[^>]*>/g, ""),
  Jh = ({ product: e, pageSlug: n }) => {
    const a = vs(window.location.hostname),
      { variants: t } = e,
      o = t.length > 1,
      i = {
        "@context": "https://schema.org/",
        "@type": "Product",
        name: e.title,
        image: e.images.map((r) => r.url),
        description: e.description ? Xh(e.description) : "",
        offers: {},
      };
    if (o) {
      const l = Sr(e).prices[0],
        s = Ta({
          amount: l.sale_amount || l.amount,
          currency: l.currency,
          isPriceDisplayedWithCurrency: !1,
        }),
        g = jf(e).prices[0],
        d = Ta({
          amount: g.sale_amount || g.amount,
          currency: g.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        "@type": "AggregateOffer",
        url: `https://${a}/${n}`,
        priceCurrency: g.currency.code,
        lowPrice: s,
        highPrice: d,
      };
    } else {
      const l = t[0].prices[0],
        s = Ta({
          amount: l.sale_amount || l.amount,
          currency: l.currency,
          isPriceDisplayedWithCurrency: !1,
        });
      i.offers = {
        "@type": "Offer",
        url: `https://${a}/${n}`,
        priceCurrency: l.currency.code,
        price: s,
        availability: "https://schema.org/InStock",
      };
    }
    return i;
  },
  ey = ({ product: e, pageSlug: n }) => {
    const a = {
      type: "element",
      tagName: "script",
      properties: {
        [mc]: `jsonld-product-${e.id}`,
        type: "application/ld+json",
      },
      children: [],
    };
    (a.children = [
      { type: "text", value: JSON.stringify(Jh({ product: e, pageSlug: n })) },
    ]),
      Cc(a);
  },
  ty = re({
    __name: "BlockEcommerceProductProviderUser",
    props: {
      blockId: { default: "" },
      data: {},
      lcp: { default: () => ({}) },
      ecommerceTranslations: { default: () => ({}) },
      isQuickPreview: { type: Boolean, default: !1 },
      productPages: { default: () => [] },
      isCartVisible: { type: Boolean, default: !1 },
      currentPageType: { default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { siteId: t } = Ze(),
        {
          quantifiedCartItemsList: o,
          canAddToCart: i,
          isShoppingCartOpen: r,
          products: l,
          shoppingCartItems: s,
          variantsQuantity: m,
          isCheckoutLoading: g,
          isLoading: d,
          isLoaded: v,
          setShoppingCartOpen: h,
          setShoppingCartItems: y,
          setIsCheckoutLoading: k,
          setSelectedBookingId: T,
        } = Ft(),
        { openEcommerceModal: _, closeEcommerceModal: b } = Ut(),
        { initiateCheckout: A } = nn(),
        { addImagesToLightbox: D } = on(),
        {
          productId: I,
          blockStyle: R,
          blockButtonText: L,
          blockButtonStyle: K,
          blockButtonType: W,
          blockButtonBorderWidth: C,
          textColorVars: H,
          imageBorderRadius: F,
          navigationArrowsColor: Q,
          navigationThumbnailArrowsColor: B,
          galleryPlacement: P,
          imageRatio: V,
          isQuantityPickerEnabled: U,
        } = Zh(a),
        G = u(() => l.value.find((w) => w.id === I.value) || da),
        S = u(() => a.productPages.find((w) => w.productId === G.value.id)),
        p = M(null),
        Y = () => {
          setTimeout(() => {
            p.value = Rn;
          }, 100);
        },
        j = () => {
          r.value || h(!0);
        },
        ee = (w) => {
          const ae = G.value.images.map((ve) => ({
            alt: G.value.title,
            src: ve.url,
          }));
          D(ae, w);
        },
        J = async (w) => {
          if ((await b(), G.value.type.value === Yt)) {
            T(I.value), _("EcommerceBookingEventSelect");
            return;
          }
          if (Na() || a.isInPreviewMode) {
            _("EcommerceMessageButtonDisabled");
            return;
          }
          a.isCartVisible
            ? (y([...s.value, ...w]), j())
            : (k(!0), await A(w), k(!1));
        };
      Ee(() => {
        Y();
      }),
        kt(() => {
          b();
        }),
        Le(G, () => {
          G.value &&
            S.value &&
            ey({ product: G.value, pageSlug: S.value?.slug });
        });
      const N = {
        props: a,
        siteId: t,
        quantifiedCartItemsList: o,
        canAddToCart: i,
        isShoppingCartOpen: r,
        products: l,
        shoppingCartItems: s,
        variantsQuantity: m,
        isCheckoutLoading: g,
        isLoading: d,
        isLoaded: v,
        setShoppingCartOpen: h,
        setShoppingCartItems: y,
        setIsCheckoutLoading: k,
        setSelectedBookingId: T,
        openEcommerceModal: _,
        closeEcommerceModal: b,
        initiateCheckout: A,
        addImagesToLightbox: D,
        productId: I,
        blockStyle: R,
        blockButtonText: L,
        blockButtonStyle: K,
        blockButtonType: W,
        blockButtonBorderWidth: C,
        textColorVars: H,
        imageBorderRadius: F,
        navigationArrowsColor: Q,
        navigationThumbnailArrowsColor: B,
        galleryPlacement: P,
        imageRatio: V,
        isQuantityPickerEnabled: U,
        product: G,
        productPage: S,
        animationState: p,
        setAnimationState: Y,
        manageCartOpenState: j,
        handleImageClick: ee,
        handleBuyButtonClick: J,
        get DATA_ATTRIBUTE_ANIMATION_STATE() {
          return Hn;
        },
        BlockEcommerceProduct: Qh,
      };
      return (
        Object.defineProperty(N, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        N
      );
    },
  });
function ay(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.BlockEcommerceProduct,
      Ge(
        {
          blockId: a.blockId,
          blockStyle: t.blockStyle,
          blockButtonText: t.blockButtonText,
          blockButtonStyle: t.blockButtonStyle,
          blockButtonType: t.blockButtonType,
          blockButtonBorderWidth: t.blockButtonBorderWidth,
          textColorVars: t.textColorVars,
          imageBorderRadius: t.imageBorderRadius,
          navigationArrowsColor: t.navigationArrowsColor,
          navigationThumbnailArrowsColor: t.navigationThumbnailArrowsColor,
          galleryPlacement: t.galleryPlacement,
          imageRatio: t.imageRatio,
          isQuantityPickerEnabled: t.isQuantityPickerEnabled,
          quantifiedCartItemsList: t.quantifiedCartItemsList,
          isCheckoutLoading: t.isCheckoutLoading,
          productPages: a.productPages,
          isQuickPreview: a.isQuickPreview,
          currentPageType: a.currentPageType,
        },
        {
          "product-data": t.product,
          "can-add-to-cart": t.canAddToCart,
          "is-loading": (t.isLoading || !t.isLoaded) && t.productId !== -1,
          translations: a.ecommerceTranslations,
          "is-cart-visible": a.isCartVisible,
          "is-eager":
            a.lcp.type === "block-ecommerce-product" && a.lcp.id === a.blockId,
          [t.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: t.animationState,
          "site-id": t.siteId,
          "shopping-cart-items": t.shoppingCartItems,
          "variants-quantity": t.variantsQuantity,
          onBuyButtonClick: t.handleBuyButtonClick,
          onClickMore: t.closeEcommerceModal,
          onImageClick: t.handleImageClick,
        }
      ),
      null,
      16,
      [
        "product-data",
        "can-add-to-cart",
        "is-loading",
        "translations",
        "is-cart-visible",
        "is-eager",
        "site-id",
        "shopping-cart-items",
        "variants-quantity",
        "onClickMore",
      ]
    )
  );
}
const Us = oe(ty, [["render", ay]]),
  ny = re({
    components: { ZyroLoader: zr },
    props: {
      blockId: { type: String, required: !0 },
      storeId: { type: String, required: !0 },
      isStoreLoading: { type: Boolean, required: !0 },
      showStore: { type: Boolean, required: !0 },
      loadingText: { type: String, default: "Store is loading" },
    },
  }),
  oy = ["id"],
  ry = { key: 0, class: "block-ecwid-store__loader-block" },
  iy = ["id"];
function ly(e, n, a, t, o, i) {
  const r = He("ZyroLoader"),
    l = je("qa");
  return ue(
    (c(),
    f(
      "div",
      { id: e.blockId, class: "block-ecwid-store" },
      [
        e.isStoreLoading
          ? (c(),
            f("div", ry, [
              Oe(r, {
                size: "44px",
                class: "block-ecwid-store__loader",
                color: "var(--color-dark)",
              }),
              Re(" " + X(e.loadingText), 1),
            ]))
          : O("", !0),
        E(
          "div",
          { class: Z({ "height-0": e.isStoreLoading }) },
          [
            e.showStore
              ? ue(
                  (c(),
                  f(
                    "div",
                    { key: 0, id: `my-store-${e.storeId}` },
                    null,
                    8,
                    iy
                  )),
                  [[l, "onlinestore-section-ecwid"]]
                )
              : O("", !0),
          ],
          2
        ),
      ],
      8,
      oy
    )),
    [[l, "builder-section-onlinestore"]]
  );
}
const sy = oe(ny, [
    ["render", ly],
    ["__scopeId", "data-v-912878a7"],
  ]),
  wn = `${is}/ecwid-app-images`,
  kl = [
    { name: "omniva", logoSource: `${wn}/omniva.svg`, headerText: "Omniva" },
    { name: "dpd", logoSource: `${wn}/dpd.svg`, headerText: "DPD" },
    {
      name: "lpexpress",
      logoSource: `${wn}/lpexpress.svg`,
      headerText: "LPExpress",
    },
    { name: "inpost", logoSource: `${wn}/inpost.svg`, headerText: "InPost" },
    { name: "other", logoSource: `${wn}/other.svg`, headerText: "other" },
  ],
  uy = ({ headerText: e, name: n, logoSource: a }) => {
    const t = n === "other",
      o = rosettaMessages["new-frontend"]["Checkout.LocalDelivery.title"];
    return `
	<div class="ec-form__cell ec-form__cell--4">
		<label>
			<div class="ec-form__title ec-header-h6">${t ? o : e}</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty">
			<label for="${n}">
				<div class="ec-radiogroup__radio">
					<div class="form-control--radio form-control ">
						<div class="form-control__radio-wrap">
							<input class="form-control__radio" type="radio" name="delivery-filter" value="${n}" data-filter="${n}">
							<div class="form-control__radio-view">
								<div class="form-control__radio-view-inner"></div>
							</div>
						</div>
						<div class="form-control__inline-label">
							<img class="filter-logo" src="${a}" alt="${n}" title="${n}" />
							${t ? o : ""}
						</div>
					</div>
				</div>
			</label>
		</div>
	</div>
	`;
  },
  cy = () => `
<div class="zyro-ecwid__search ec-form__row">
	<div class="ec-form__cell ec-form__cell--4">
		<label for="zyro-ecwid-search">
			<div class="ec-form__title ec-header-h6">
				<div class="marker-required marker-required--medium"></div>${rosettaMessages["new-frontend"]["ProductSearch.Breadcrumbs.General"]}
			</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty form-control--type-name">
			<input id="zyro-ecwid-search" class="form-control__text" type="text" name="name" maxlength="255">
			<div class="form-control__placeholder">
				<div class="form-control__placeholder-inner"></div>
			</div>
		</div>
	</div>
</div>
`,
  dy = { attributes: !0, childList: !0, subtree: !0 },
  my = () => {
    let e,
      n = "",
      a,
      t,
      o,
      i;
    const r = (d) => d.some((v) => !!v?.includes(n)),
      l = () => {
        t?.forEach((d) => {
          const { type: v, element: h, title: y, description: k } = d;
          (v !== e || !r([y, k])) &&
            h.classList.add("zyro-ecwid__option--hidden");
        });
      },
      s = () => {
        a = (t?.filter((v) => {
          const { title: h, description: y, element: k, type: T } = v,
            _ = r([h, y]),
            b = T === e && (_ || !n.length);
          return k.classList.toggle("zyro-ecwid__option--hidden", !b), !b;
        })).length;
      },
      m = (d) => {
        let v = !1;
        t = [...d.querySelectorAll(".ec-radiogroup__item")].map((b) => {
          const A = b.querySelector(".ec-radiogroup__title").innerText,
            D = A.split(":")[0].toLowerCase(),
            I = kl.some((L) => L.name === D) ? D : "other",
            R = b.querySelector('input[type="radio"]');
          return (
            R.addEventListener("change", (L) => {
              L.target.checked && s();
            }),
            {
              title: A.toLowerCase(),
              description: b
                .querySelector(".ec-radiogroup__text")
                .innerText.toLowerCase(),
              element: b,
              cost: b.querySelector(".ec-radiogroup__data").innerText,
              selected: b.querySelector("input").checked,
              type: I,
              radio: R,
            }
          );
        });
        const y = d.closest(".ec-cart-step__section"),
          k = y.querySelector(".ec-radiogroup__wrap");
        o || y.insertAdjacentHTML("beforeend", cy()),
          y.classList.add("zyro-ecwid__radio-section"),
          y.querySelector(".zyro-ecwid__search input").addEventListener(
            "input",
            Os((b) => {
              (n = b.target.value.toLowerCase()), s();
            }),
            30
          );
        const T = t.find((b) => b.selected),
          _ = [...new Set(t.map((b) => b.type))];
        o
          ? (i?.classList.remove("ec-radiogroup--hidden"),
            o?.classList.remove("zyro-ecwid__search--hidden"),
            y
              .querySelector(
                ".ec-cart-step--delivery .ec-radiogroup:last-child"
              )
              ?.classList.add("ec-radiogroup--hidden"))
          : _.forEach((b) => {
              if (b === "other" && v) return;
              const A = kl.find((I) => I.name === b),
                D = uy(A);
              b === "other" && (v = !0),
                y
                  .querySelector(".zyro-ecwid__search")
                  .insertAdjacentHTML("afterbegin", D),
                y
                  .querySelector("[data-filter]")
                  .addEventListener("change", (I) => {
                    I.target.checked && ((e = I.target.dataset.filter), s());
                  });
            }),
          (i = y.querySelector(".ec-cart-step--delivery .ec-radiogroup")),
          (o = y.querySelector(".zyro-ecwid__search")),
          (y.querySelector("[data-filter]").checked = !0),
          (e = _[_.length - 1]),
          s(),
          k.scroll(T.element.offsetTop, 0);
      };
    return new MutationObserver(() => {
      if (!document.querySelector(".ec-cart__body")) return;
      const d = document.querySelector(
          ".ec-cart-step--delivery .ec-radiogroup__items"
        ),
        v = !!document.querySelector(
          ".ec-cart-step--delivery .ec-cart-step__icon--done"
        ),
        h = document.querySelectorAll(".zyro-ecwid__option--hidden");
      !!!document.querySelector(
        ".ec-cart-step--address .ec-cart-step__icon--done"
      ) &&
        !d &&
        o &&
        (o = null),
        !v && !t && d && m(d),
        a !== h.length && l(),
        (v || !d) &&
          (i?.classList.contains("ec-radiogroup--hidden") ||
            i?.classList.add("ec-radiogroup--hidden"),
          o?.classList.contains("zyro-ecwid__search--hidden") ||
            o?.classList.add("zyro-ecwid__search--hidden"),
          (t = null),
          n &&
            ((n = ""),
            (document.getElementById("zyro-ecwid-search").value = "")));
    }, dy);
  },
  Tr = "ecwid-loaded",
  gy = () => {
    const e = document.querySelector(".ec-notices");
    if (!e) return;
    const n = document.querySelector(".builder-header")?.clientHeight ?? 0,
      a = document.querySelector(`.${ms}`)?.clientHeight ?? 0,
      t = e.getBoundingClientRect().top + n + a;
    e.style.top = `${t}px`;
  },
  Ys = () => window.dispatchEvent(new Event(Tr)),
  vy = (e) => {
    const { setEcwidCartItems: n } = hs();
    n(e.items);
  },
  py = () => {
    window.ecwid_initial_data.data.storeClosed && Ys();
  },
  fy = () => {
    window.Ecwid.OnAPILoaded.add(py),
      window.Ecwid.OnPageLoaded.add(Ys),
      window.Ecwid.OnPageLoaded.add(gy),
      window.Ecwid.OnCartChanged.add(vy);
  },
  hy = {
    load(e, n) {
      if (
        ((window.ec = window.ec || {}),
        (window.ec.config = window.ec.config || {}),
        (window.ec.config.enable_canonical_urls = !0),
        (window.ec.config.storefrontUrls =
          window.ec.config.storefrontUrls || {}),
        (window.ec.config.storefrontUrls.cleanUrls = !0),
        (window.ec.config.storefrontUrls.queryBasedCleanUrls = !0),
        (window.ecwid_script_defer = !0),
        (window.ecwid_dynamic_widgets = !0),
        typeof Ecwid < "u")
      )
        try {
          window.Ecwid.destroy();
        } catch {}
      if (
        ((window._xnext_initialization_scripts = [
          {
            widgetType: "ProductBrowser",
            id: `my-store-${e}`,
            arg: [
              "id=productBrowser",
              "categoriesPerRow=4",
              "views=grid(4,3) list(10) table(20)",
              "categoryView=grid",
              "searchView=list",
            ],
          },
        ]),
        document.querySelector("#ecwid-script"))
      )
        window.ecwid_onBodyDone(),
          setTimeout(() => {
            !!document.getElementById(`my-store-${e}`)?.innerHTML ||
              this.load(e, n);
          }, 1e3);
      else {
        const a = document.createElement("script");
        (a.defer = !0),
          (a.type = "text/javascript"),
          (a.async = !0),
          (a.src = `https://app.ecwid.com/script.js?${e}`),
          n && n !== Zt && (a.src += `&lang=${n}`),
          (a.id = "ecwid-script"),
          a.addEventListener("load", fy),
          document.body.append(a);
      }
    },
  },
  yy = "26103239",
  by = { attributes: !0, childList: !0, subtree: !0 },
  _y = (e, { ecwidStoreId: n, demoEcwidStoreId: a }) => {
    const t = M(!0),
      o = M(!1),
      i = M(!0),
      r = u(() => e.data.settings.loadingText || "Store is loading"),
      l = u(() => n.value || a.value || yy),
      s = () => {
        hy.load(l.value, e.currentLocale);
      },
      m = () => {
        (o.value = !0),
          window.addEventListener(Tr, () => {
            o.value = !1;
          }),
          s();
      };
    return (
      Ee(() => {
        m(),
          (i.value = my()),
          i.value.observe(document.querySelector(`#my-store-${l.value}`), by);
      }),
      kt(() => {
        i.value.disconnect();
      }),
      Le(l, async (g) => {
        a.value !== g &&
          ((document.querySelector(`#my-store-${l.value}`).innerHTML = ""),
          await Dt(),
          m());
      }),
      {
        storeId: l,
        showStore: t,
        isStoreLoading: o,
        loadStore: s,
        loadingText: r,
        ECWID_LOADED_EVENT: Tr,
      }
    );
  },
  wy = re({
    components: { BlockEcwidStore: sy },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Zt },
    },
    setup(e) {
      const { meta: n } = Ze(),
        a = u(() => n.value.ecwidStoreId),
        t = u(() => n.value.demoEcwidStoreId),
        {
          storeId: o,
          showStore: i,
          isStoreLoading: r,
          loadingText: l,
        } = _y(e, { ecwidStoreId: a, demoEcwidStoreId: t });
      return (
        Ee(() => {
          window?.Ecwid?.getStorefrontLang() &&
            window.Ecwid.getStorefrontLang() !== e.currentLocale &&
            !Na() &&
            window.location.reload();
        }),
        { storeId: o, showStore: i, isStoreLoading: r, loadingText: l }
      );
    },
  });
function ky(e, n, a, t, o, i) {
  const r = He("BlockEcwidStore");
  return (
    c(),
    q(
      r,
      {
        "store-id": e.storeId,
        "block-id": e.blockId,
        "show-store": e.showStore,
        "is-store-loading": e.isStoreLoading,
        "loading-text": e.loadingText,
      },
      null,
      8,
      ["store-id", "block-id", "show-store", "is-store-loading", "loading-text"]
    )
  );
}
const Sy = oe(wy, [["render", ky]]),
  Ty = M({}),
  Cr = "forward",
  Sl = "backward",
  Cy = ({
    isAutoplayEnabled: e,
    isLoopEnabled: n,
    autoplayInterval: a,
    isTransitioning: t,
    slides: o,
  } = {}) => {
    const i = M(0),
      r = M(""),
      l = M(null),
      s = u(() => o.value.length),
      m = u(() => i.value === o.value.length - 1),
      g = u(() => i.value === 0),
      d = u(() => (!m.value || n.value) && s.value > 1 && !t.value),
      v = u(() => (!g.value || n.value) && s.value > 1 && !t.value),
      h = () => {
        if (d.value) {
          if (((r.value = Cr), n.value && m.value)) {
            i.value = 0;
            return;
          }
          i.value += 1;
        }
      },
      y = () => {
        if (v.value) {
          if (((r.value = Sl), n.value && g.value)) {
            i.value = o.value.length - 1;
            return;
          }
          i.value -= 1;
        }
      },
      k = (A) => {
        (r.value = A > i.value ? Cr : Sl), (i.value = A);
      },
      T = () => {
        l.value = setInterval(() => {
          (!n.value && m.value) || h();
        }, a.value * 1e3);
      },
      _ = () => {
        l.value && (clearInterval(l.value), (l.value = null));
      },
      b = () => {
        _(), e.value && T();
      };
    return (
      e &&
        (e.value && T(),
        Le(e, () => {
          e.value ? T() : _();
        }),
        Le(rp(), (A) => {
          A === "visible" ? T() : _();
        })),
      a &&
        Le(a, () => {
          b();
        }),
      {
        slideshowRefs: Ty,
        slideToNext: h,
        slideToPrevious: y,
        slideTo: k,
        slideDirection: r,
        slideCount: s,
        currentSlideIndex: i,
        slides: o,
        isLoopEnabled: n,
        isAutoplayEnabled: e,
        autoplayInterval: a,
        resetAutoplayInterval: b,
        setAutoplayInterval: T,
        clearAutoplayInterval: _,
        canSlideToNext: d,
        canSlideToPrevious: v,
      }
    );
  },
  Xr = re({
    props: {
      slides: { type: Array, required: !0 },
      isLoopEnabled: { type: Boolean, default: !1 },
      currentSlideIndex: { type: Number, default: 0 },
      slideDirection: { type: String, default: Cr },
      arrowColor: { type: String, default: "rgb(255, 255, 255)" },
      dotColor: { type: String, default: "rgb(255, 255, 255)" },
      isNextButtonDisabled: { type: Boolean, default: !1 },
      isPreviousButtonDisabled: { type: Boolean, default: !1 },
      isNavigationArrowsVisible: { type: Boolean, default: !0 },
      isNavigationDotsVisible: { type: Boolean, default: !0 },
      isTransitioning: { type: Boolean, default: !1 },
      desktopMinHeight: { type: Number, required: !0 },
      mobileMinHeight: { type: Number, required: !0 },
      websiteId: { type: String, default: "" },
    },
    emits: [
      "transition-start",
      "transition-end",
      "next-slide",
      "previous-slide",
      "dot-click",
    ],
    setup() {
      return { FULL_WIDTH: fa, getOptimizedSrc: st };
    },
    computed: {
      isNextSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e = this.currentSlideIndex === this.slides.length - 1;
        return this.isNavigationArrowsVisible && !e;
      },
      isPreviousSlideButtonVisible() {
        if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
        const e =
          this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
        return this.isNavigationArrowsVisible && !e;
      },
    },
  }),
  Tl = () => {
    rt((e) => ({
      fd06db1c: e.desktopMinHeight,
      "1f7ca1af": e.arrowColor,
      "56d289af": e.dotColor,
      "3b9747e2": e.mobileMinHeight,
    }));
  },
  Cl = Xr.setup;
Xr.setup = Cl ? (e, n) => (Tl(), Cl(e, n)) : Tl;
const Fs = (e) => (Rt("data-v-f3299b46"), (e = e()), Ht(), e),
  Py = { class: "slideshow" },
  Iy = ["alt", "src"],
  Ey = ["disabled"],
  Dy = Fs(() =>
    E(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  My = [Dy],
  Oy = ["disabled"],
  Ay = Fs(() =>
    E(
      "svg",
      {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M1 25L13 13L1 1",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  By = [Ay],
  Ly = { key: 2, class: "slideshow__dots" },
  xy = ["onClick"];
function Ry(e, n, a, t, o, i) {
  return (
    c(),
    f("div", Py, [
      Oe(
        $u,
        {
          name: `slide-${e.slideDirection}`,
          onLeave: n[0] || (n[0] = (r) => e.$emit("transition-start")),
          onAfterLeave: n[1] || (n[1] = (r) => e.$emit("transition-end")),
        },
        {
          default: fe(() => [
            (c(!0),
            f(
              ge,
              null,
              we(e.slides, (r, l) =>
                ue(
                  (c(),
                  f(
                    "img",
                    {
                      key: `${r.path}-${l}`,
                      alt: r.alt || "",
                      class: "slide",
                      src: e.getOptimizedSrc(r.origin, r.path, e.websiteId, {
                        width: e.FULL_WIDTH,
                      }),
                    },
                    null,
                    8,
                    Iy
                  )),
                  [[$t, e.currentSlideIndex === l]]
                )
              ),
              128
            )),
          ]),
          _: 1,
        },
        8,
        ["name"]
      ),
      e.isNextSlideButtonVisible
        ? (c(),
          f(
            "button",
            {
              key: 0,
              class: Z([
                "slideshow-nav-button slideshow-nav-button--right",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isNextButtonDisabled,
              onClick: n[2] || (n[2] = (r) => e.$emit("next-slide")),
            },
            My,
            10,
            Ey
          ))
        : O("", !0),
      e.isPreviousSlideButtonVisible
        ? (c(),
          f(
            "button",
            {
              key: 1,
              class: Z([
                "slideshow-nav-button slideshow-nav-button--left",
                { "is-transitioning": e.isTransitioning },
              ]),
              disabled: e.isPreviousButtonDisabled,
              onClick: n[3] || (n[3] = (r) => e.$emit("previous-slide")),
            },
            By,
            10,
            Oy
          ))
        : O("", !0),
      e.isNavigationDotsVisible
        ? (c(),
          f("div", Ly, [
            (c(!0),
            f(
              ge,
              null,
              we(
                e.slides,
                (r, l) => (
                  c(),
                  f(
                    "button",
                    {
                      key: `${r.path}-${l}`,
                      class: Z([
                        "dot",
                        { "dot--current": e.currentSlideIndex === l },
                      ]),
                      onClick: (s) => e.$emit("dot-click", l),
                    },
                    null,
                    10,
                    xy
                  )
                )
              ),
              128
            )),
          ]))
        : O("", !0),
    ])
  );
}
const Hy = oe(Xr, [
    ["render", Ry],
    ["__scopeId", "data-v-f3299b46"],
  ]),
  Ny = re({
    components: { BlockImageSlideshow: Hy },
    props: {
      blockId: { type: String, required: !0 },
      data: { type: Object, default: () => ({}) },
      websiteId: { type: String, default: "" },
    },
    setup(e) {
      const { data: n } = sr(e),
        a = M(!1),
        t = u(() => `${n.value.desktop.minHeight}px`),
        o = u(() => `${n.value.mobile.minHeight}px`),
        i = u(() => n.value.settings.styles.navigationDotsColor),
        r = u(() => n.value.settings.styles.navigationArrowsColor),
        l = u(() => n.value.slides),
        s = u(() => n.value.isLoopEnabled),
        m = u(() => n.value.isAutoplayEnabled),
        g = u(() => n.value.autoplayInterval),
        d = u(() => n.value.isNavigationDotsVisible),
        v = u(() => n.value.isNavigationArrowsVisible),
        h = u(() => n.value.desktop.minHeight),
        y = u(() => n.value.mobile.minHeight),
        {
          slideDirection: k,
          currentSlideIndex: T,
          canSlideToNext: _,
          canSlideToPrevious: b,
          slideToNext: A,
          slideToPrevious: D,
          slideTo: I,
          resetAutoplayInterval: R,
          clearAutoplayInterval: L,
        } = Cy({
          isAutoplayEnabled: m,
          isLoopEnabled: s,
          autoplayInterval: g,
          isTransitioning: a,
          slides: l,
        });
      return {
        canSlideToNext: _,
        canSlideToPrevious: b,
        desktopHeight: t,
        mobileHeight: o,
        slides: l,
        currentSlideIndex: T,
        slideDirection: k,
        isLoopEnabled: s,
        isTransitioning: a,
        resetAutoplayInterval: R,
        dotColor: i,
        arrowColor: r,
        isNavigationDotsVisible: d,
        isNavigationArrowsVisible: v,
        clearAutoplayInterval: L,
        slideToNext: A,
        slideToPrevious: D,
        slideTo: I,
        desktopMinHeight: h,
        mobileMinHeight: y,
      };
    },
  });
function $y(e, n, a, t, o, i) {
  const r = He("BlockImageSlideshow");
  return (
    c(),
    q(
      r,
      {
        slides: e.slides,
        "is-loop-enabled": e.isLoopEnabled,
        "current-slide-index": e.currentSlideIndex,
        "slide-direction": e.slideDirection,
        "dot-color": e.dotColor,
        "is-navigation-arrows-visible": e.isNavigationArrowsVisible,
        "is-navigation-dots-visible": e.isNavigationDotsVisible,
        "arrow-color": e.arrowColor,
        "is-next-button-disabled": !e.canSlideToNext,
        "is-previous-button-disabled": !e.canSlideToPrevious,
        "desktop-min-height": e.desktopMinHeight,
        "mobile-min-height": e.mobileMinHeight,
        "website-id": e.websiteId,
        onTransitionStart: n[0] || (n[0] = (l) => (e.isTransitioning = !0)),
        onTransitionEnd: n[1] || (n[1] = (l) => (e.isTransitioning = !1)),
        onMouseenter: e.clearAutoplayInterval,
        onMouseleave: e.resetAutoplayInterval,
        onNextSlide: e.slideToNext,
        onPreviousSlide: e.slideToPrevious,
        onDotClick: e.slideTo,
      },
      null,
      8,
      [
        "slides",
        "is-loop-enabled",
        "current-slide-index",
        "slide-direction",
        "dot-color",
        "is-navigation-arrows-visible",
        "is-navigation-dots-visible",
        "arrow-color",
        "is-next-button-disabled",
        "is-previous-button-disabled",
        "desktop-min-height",
        "mobile-min-height",
        "website-id",
        "onMouseenter",
        "onMouseleave",
        "onNextSlide",
        "onPreviousSlide",
        "onDotClick",
      ]
    )
  );
}
const Vy = oe(Ny, [["render", $y]]),
  Pl = 360,
  Uy = {
    __name: "BlockUser",
    props: {
      id: { type: String, required: !0 },
      data: { type: Object, required: !0 },
      lcp: { type: Object, default: () => ({}) },
      currentLocale: { type: String, default: Zt },
      style: { type: Object, default: () => ({}) },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      isCartVisible: { type: Boolean, default: !1 },
      pageId: { type: String, required: !0 },
      currentPageType: { type: String, default: "default" },
      isInPreviewMode: { type: Boolean, default: !1 },
      screenWidth: { type: Number, default: 0 },
      isFirstVisibleDesktopBlock: { type: Boolean, default: !1 },
      isFirstVisibleMobileBlock: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(null),
        { productPages: o, isLoaded: i } = Ft({ blockId: a.id }),
        {
          blocks: r,
          elements: l,
          pages: s,
          siteId: m,
          blogReadingTimeText: g,
          blogCategories: d,
          siteId: v,
          meta: h,
        } = Ze(),
        {
          addIntersectionObserver: y,
          observe: k,
          intersectionObserver: T,
          animationClass: _,
          shouldMountAnimationsInPreview: b,
        } = rn({ data: a.data }),
        A = u(() => a.currentLocale),
        D = u(() => a.screenWidth <= In),
        I = u(() =>
          a.data.desktop?.isHidden
            ? a.isInPreviewMode
              ? a.screenWidth > In
              : !0
            : !1
        ),
        R = u(() =>
          a.data.mobile?.isHidden ? (a.isInPreviewMode ? D.value : !0) : !1
        ),
        L = u(() => ({ ...a.style, ...Vt(a.data?.settings?.styles) })),
        K = u(() => {
          if (!a.data?.settings?.styles["m-block-padding"]) return !1;
          const { top: U, bottom: G } = an(
            a.data.settings.styles["m-block-padding"]
          );
          return Number.parseInt(U, 10) + Number.parseInt(G, 10) > Pl;
        }),
        W = u(() =>
          st(a.data.background.origin, a.data.background.path, v.value, {
            width: fa,
          })
        ),
        C = u(() =>
          ha(a.data.background.origin, a.data.background.path, v.value, {
            isMobileFullScreen: K.value,
          })
        ),
        H = u(() => a.data.slot === "footer"),
        F = u(() => {
          if (a.data.type !== Oi) return null;
          const [, U] = Object.entries(s.value).find(
            ([G, S]) => S.type === dr && G === a.pageId
          );
          return U;
        }),
        Q = u(() => h.value.stripePublicApiKey),
        B = u(() => a.data.type === Ai),
        P = async () => {
          y(), (!B.value || i.value) && (await k(t.value));
        };
      Ee(async () => {
        await P();
      }),
        kt(() => T.value?.disconnect()),
        Le([A, i], async ([U, G], [S]) => {
          (G || U !== S) && B.value && (await k(t.value));
        }),
        Le(b, async (U) => {
          U && (await P());
        });
      const V = {
        MOBILE_FULL_HEIGT_THRESHOLD: Pl,
        props: a,
        blockRef: t,
        productPages: o,
        isEcommerceProductsLoaded: i,
        siteBlocks: r,
        siteElements: l,
        siteLanguagePages: s,
        websiteId: m,
        blogReadingTimeText: g,
        blogCategories: d,
        siteId: v,
        meta: h,
        addIntersectionObserver: y,
        observe: k,
        intersectionObserver: T,
        animationClass: _,
        shouldMountAnimationsInPreview: b,
        currentSiteLocale: A,
        isMobile: D,
        isDesktopBlockHidden: I,
        isMobileBlockHidden: R,
        computedStyles: L,
        isMobileFullScreen: K,
        backgroundSrc: W,
        backgroundSrcSet: C,
        isBlockFooter: H,
        currentBlogPage: F,
        stripePublicApiKey: Q,
        isEcommerceBlock: B,
        initiateAnimations: P,
        computed: u,
        onMounted: Ee,
        onBeforeUnmount: kt,
        ref: M,
        watch: Le,
        BlockBackground: Wr,
        BlockBlogHeader: Sd,
        get PAGE_TYPE_BLOG() {
          return dr;
        },
        get SYSTEM_LOCALE() {
          return Zt;
        },
        get BLOCK_TYPE_LAYOUT() {
          return gc;
        },
        get BLOCK_TYPE_BLOG_HEADER() {
          return Oi;
        },
        get BLOCK_TYPE_BLOG_LIST() {
          return vc;
        },
        get BLOCK_TYPE_IMAGE_SLIDESHOW() {
          return pc;
        },
        get BLOCK_TYPE_ECWID() {
          return fc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
          return hc;
        },
        get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
          return Ai;
        },
        get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
          return In;
        },
        get FULL_WIDTH() {
          return fa;
        },
        get getFullWidthSrcset() {
          return ha;
        },
        get getOptimizedSrc() {
          return st;
        },
        get useSiteGlobal() {
          return Ze;
        },
        get objectToCssVariables() {
          return Vt;
        },
        get parseCSSSides() {
          return an;
        },
        BlockLayoutProviderUser: qp,
        BlockBlogListProviderUser: bf,
        BlockEcommerceProductListProviderUser: rh,
        BlockEcommerceProductProviderUser: Us,
        BlockEcwidStoreProviderUser: Sy,
        BlockImageSlideshowProviderUser: Vy,
        get useSiteEngineAnimations() {
          return rn;
        },
        get useEcommerceGlobal() {
          return Ft;
        },
      };
      return (
        Object.defineProperty(V, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        V
      );
    },
  },
  Yy = ["id"];
function Fy(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "section",
      {
        id: a.id,
        ref: "blockRef",
        class: Z([
          "block",
          [
            t.animationClass,
            {
              "block--footer": t.isBlockFooter,
              "block--desktop-hidden": t.isDesktopBlockHidden,
              "block--mobile-hidden": t.isMobileBlockHidden,
              "block--desktop-first-visible": a.isFirstVisibleDesktopBlock,
              "block--mobile-first-visible": a.isFirstVisibleMobileBlock,
            },
          ],
        ]),
        style: Be(t.computedStyles),
      },
      [
        a.data.background
          ? (c(),
            q(
              t.BlockBackground,
              {
                key: 0,
                "overlay-opacity": a.data.background["overlay-opacity"],
                type: a.data.background.current,
                color: a.data.background.color,
                gradient: a.data.background.gradient,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                "is-eager":
                  a.lcp.type === "block-background" && a.lcp.id === a.id,
                "is-fixed": a.data.attachment === "fixed",
                alt: a.data.background && a.data.background.alt,
                "is-in-preview-mode": t.props.isInPreviewMode,
                "is-mobile": t.isMobile,
              },
              null,
              8,
              [
                "overlay-opacity",
                "type",
                "color",
                "gradient",
                "src",
                "srcset",
                "is-eager",
                "is-fixed",
                "alt",
                "is-in-preview-mode",
                "is-mobile",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_LAYOUT
          ? (c(),
            q(
              t.BlockLayoutProviderUser,
              {
                key: 1,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                components: t.siteElements,
                "current-locale": a.currentLocale,
                "is-cart-visible": a.isCartVisible,
                "site-language-pages": t.siteLanguagePages,
                "stripe-public-api-key": t.stripePublicApiKey,
                "is-in-preview-mode": t.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "components",
                "current-locale",
                "is-cart-visible",
                "site-language-pages",
                "stripe-public-api-key",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_BLOG_HEADER
          ? (c(),
            q(
              t.BlockBlogHeader,
              {
                key: 2,
                data: a.data,
                "current-blog-page": t.currentBlogPage,
                "blog-categories": t.blogCategories,
                "blog-reading-time-text": t.blogReadingTimeText,
              },
              null,
              8,
              [
                "data",
                "current-blog-page",
                "blog-categories",
                "blog-reading-time-text",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_BLOG_LIST
          ? (c(),
            q(
              t.BlockBlogListProviderUser,
              {
                key: 3,
                data: a.data,
                "block-id": a.id,
                "current-locale": a.currentLocale,
              },
              null,
              8,
              ["data", "block-id", "current-locale"]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_IMAGE_SLIDESHOW
          ? (c(),
            q(
              t.BlockImageSlideshowProviderUser,
              {
                key: 4,
                data: a.data,
                "block-id": a.id,
                "website-id": t.websiteId,
              },
              null,
              8,
              ["data", "block-id", "website-id"]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_ECWID
          ? (c(),
            q(
              t.BlockEcwidStoreProviderUser,
              {
                key: 5,
                data: a.data,
                "block-id": a.id,
                "current-locale": a.currentLocale,
              },
              null,
              8,
              ["data", "block-id", "current-locale"]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT
          ? (c(),
            q(
              t.BlockEcommerceProductProviderUser,
              {
                key: 6,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                "product-pages": t.productPages,
                "is-cart-visible": a.isCartVisible,
                "ecommerce-translations": a.ecommerceTranslations,
                "current-page-type": a.currentPageType,
                "is-in-preview-mode": t.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "product-pages",
                "is-cart-visible",
                "ecommerce-translations",
                "current-page-type",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
        a.data.type === t.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST
          ? (c(),
            q(
              t.BlockEcommerceProductListProviderUser,
              {
                key: 7,
                lcp: a.lcp,
                data: a.data,
                "block-id": a.id,
                blocks: t.siteBlocks,
                "current-locale": a.currentLocale,
                "is-cart-visible": a.isCartVisible,
                "ecommerce-translations": a.ecommerceTranslations,
                "is-in-preview-mode": t.props.isInPreviewMode,
              },
              null,
              8,
              [
                "lcp",
                "data",
                "block-id",
                "blocks",
                "current-locale",
                "is-cart-visible",
                "ecommerce-translations",
                "is-in-preview-mode",
              ]
            ))
          : O("", !0),
      ],
      14,
      Yy
    )
  );
}
const Wy = oe(Uy, [
    ["render", Fy],
    ["__scopeId", "data-v-43d5e18a"],
  ]),
  qy = re({
    __name: "BlockStickyBarLayout",
    props: { blockStyles: {} },
    setup(e, { expose: n }) {
      n(),
        rt((s) => ({
          c718ec72: o.value,
          "387a0b1e": x(gs),
          "720ca36e": t.value,
          "16937fe2": i.value,
        }));
      const a = e,
        t = u(() => `${Xt}px`),
        o = u(() => `${la}px`),
        i = u(() => `0 ${En}px`),
        r = u(() => Vt(a.blockStyles)),
        l = {
          props: a,
          mobileMaxWidthCSSVar: t,
          maxWidthCSSVar: o,
          tabletBlockPaddingCSSVar: i,
          computedStyles: r,
        };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function Gy(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      { class: "block-sticky-bar-layout", style: Be(t.computedStyles) },
      [te(e.$slots, "default", {}, void 0, !0)],
      4
    )
  );
}
const jy = oe(qy, [
    ["render", Gy],
    ["__scopeId", "data-v-a943a874"],
  ]),
  zy = re({
    __name: "BlockStickyBarProviderUser",
    props: {
      data: {},
      components: {},
      isInPreviewMode: { type: Boolean },
      lcp: {},
      screenWidth: { default: 0 },
    },
    setup(e, { expose: n }) {
      n(), rt((R) => ({ "0897617a": x(gs) }));
      const a = { [pa]: gn },
        t = e,
        { siteId: o } = Ze(),
        { layoutCSSVars: i } = pr({
          blockData: u(() => t.data),
          siteElements: u(() => t.components),
          shouldBuildResponsive: !t.isInPreviewMode,
        }),
        {
          addIntersectionObserver: r,
          observe: l,
          intersectionObserver: s,
          animationClass: m,
          shouldMountAnimationsInPreview: g,
        } = rn({
          elementData: null,
          data: t.data,
          elementId: null,
          isParentBlockFooter: !1,
        }),
        d = M(null),
        v = u(() => t.data.background?.origin || null),
        h = u(() => t.data.background?.path || null),
        y = u(() => t.screenWidth <= In),
        k = u(() =>
          t.data.desktop?.isHidden
            ? t.isInPreviewMode
              ? t.screenWidth > In
              : !0
            : !1
        ),
        T = u(() =>
          t.data.mobile?.isHidden ? (t.isInPreviewMode ? y.value : !0) : !1
        ),
        _ = u(() => st(v.value, h.value, o.value, { width: fa })),
        b = u(() => ha(v.value, h.value, o.value, { isMobileFullScreen: !1 })),
        A = u(() => t.data.attachment === "fixed"),
        D = async () => {
          r(), await l(d.value);
        };
      Ee(async () => {
        await D();
      }),
        kt(() => s.value?.disconnect()),
        Le(g, async (R) => {
          R && (await D());
        });
      const I = {
        CUSTOM_ATTRIBUTES: a,
        props: t,
        siteId: o,
        layoutCSSVars: i,
        addIntersectionObserver: r,
        observe: l,
        intersectionObserver: s,
        animationClass: m,
        shouldMountAnimationsInPreview: g,
        blockRef: d,
        backgroundOrigin: v,
        backgroundPath: h,
        isMobile: y,
        isDesktopBlockHidden: k,
        isMobileBlockHidden: T,
        backgroundSrc: _,
        backgroundSrcSet: b,
        isBlockBackgroundFixed: A,
        initiateAnimations: D,
        BlockBackground: Wr,
        BlockStickyBarLayout: jy,
        GridTextBox: Es,
      };
      return (
        Object.defineProperty(I, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        I
      );
    },
  });
function Ky(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "section",
      {
        ref: "blockRef",
        class: Z([
          "block-sticky-bar",
          [
            {
              "block-sticky-bar--desktop-hidden": t.isDesktopBlockHidden,
              "block-sticky-bar--mobile-hidden": t.isMobileBlockHidden,
            },
          ],
        ]),
      },
      [
        a.data.background
          ? (c(),
            q(
              t.BlockBackground,
              {
                key: 0,
                class: "block-sticky-bar__background",
                "overlay-opacity": a.data.background["overlay-opacity"],
                type: a.data.background.current,
                gradient: a.data.background.gradient,
                color: a.data.background.color,
                src: t.backgroundSrc,
                srcset: t.backgroundSrcSet,
                "is-fixed": t.isBlockBackgroundFixed,
                alt: a.data.background && a.data.background.alt,
              },
              null,
              8,
              [
                "overlay-opacity",
                "type",
                "gradient",
                "color",
                "src",
                "srcset",
                "is-fixed",
                "alt",
              ]
            ))
          : O("", !0),
        Oe(
          t.BlockStickyBarLayout,
          {
            "block-styles": a.data.settings.styles,
            style: Be(t.layoutCSSVars),
            class: Z(t.animationClass),
          },
          {
            default: fe(() => [
              (c(!0),
              f(
                ge,
                null,
                we(
                  a.data.items,
                  (r, l) => (
                    c(),
                    q(
                      t.GridTextBox,
                      Ge(
                        {
                          key: `sticky-element-${l}`,
                          class: "block-sticky-bar__element",
                          "text-align": "flex-start",
                          "text-align-mobile": "flex-start",
                          content: r.content,
                        },
                        t.CUSTOM_ATTRIBUTES
                      ),
                      null,
                      16,
                      ["content"]
                    )
                  )
                ),
                128
              )),
            ]),
            _: 1,
          },
          8,
          ["block-styles", "style", "class"]
        ),
      ],
      2
    )
  );
}
const Qy = oe(zy, [
    ["render", Ky],
    ["__scopeId", "data-v-79325842"],
  ]),
  to = M({}),
  Ws = ({ pagePassword: e, locale: n, pageId: a }) => {
    const t = u(() => `${a}-${n}`),
      o = u(() => !e || (e && !!to.value[t.value]));
    return {
      isPageUnlocked: to,
      openUnlockedPage: () => {
        to.value = { ...to.value, [t.value]: !0 };
      },
      isPageOpen: o,
    };
  },
  Zy = async (e) => {
    const n = new TextEncoder().encode(e),
      a = await crypto.subtle.digest("SHA-256", n);
    return [...new Uint8Array(a)]
      .map((i) => i.toString(16).padStart(2, "0"))
      .join("");
  },
  Xy = {
    src: "/_astro-1717146618363/lock.CUuFZ5nx.svg",
    width: 40,
    height: 40,
    format: "svg",
  },
  Jy = re({
    __name: "PasswordPage",
    props: {
      pageId: {},
      locale: {},
      currentPageData: {},
      isCurrentPageHomepage: { type: Boolean, default: !1 },
      inPreviewMode: { type: Boolean, default: !1 },
      defaultLocale: {},
      homepageName: {},
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = M(""),
        o = M(""),
        i = u(() => a.currentPageData?.meta?.passwordDesign ?? ""),
        r = u(() => a.currentPageData?.meta?.password ?? ""),
        l = u(
          () => a.currentPageData?.meta?.passwordHeadingText ?? "Guest Area"
        ),
        s = u(
          () =>
            a.currentPageData?.meta?.passwordSubheadingText ??
            "Please enter the password to access the page"
        ),
        m = u(() => a.currentPageData?.meta?.passwordButtonText ?? "Enter"),
        g = u(
          () =>
            a.currentPageData?.meta?.passwordPlaceholderText ?? "Type password"
        ),
        d = u(() => a.currentPageData?.meta?.passwordBackText ?? "Back to"),
        v = u(() => i.value === yc),
        h = u(() => i.value === bc),
        { openUnlockedPage: y } = Ws({
          pagePassword: r.value,
          locale: a.locale,
          pageId: a.pageId,
        }),
        k = async () => {
          const A = await Zy(t.value);
          if (!t.value || A !== r.value) {
            o.value = "Please enter the correct password";
            return;
          }
          y();
        },
        T = u(() =>
          a.locale && a.locale !== a.defaultLocale ? `/${a.locale}` : "/"
        ),
        _ = u(() => !a.inPreviewMode && !a.isCurrentPageHomepage);
      Ee(() => {
        document.body.style.overflow = "hidden";
      }),
        kt(() => {
          document.body.style.overflow = "";
        });
      const b = {
        props: a,
        password: t,
        errorMessage: o,
        passwordPageStyle: i,
        currentPagePassword: r,
        passwordPageHeading: l,
        passwordPageSubheading: s,
        passwordPageButtonText: m,
        passwordPlaceholder: g,
        passwordBackText: d,
        isCalmTheme: v,
        isPopularTheme: h,
        openUnlockedPage: y,
        unlock: k,
        homepageLink: T,
        isHomepageLinkShown: _,
        get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
          return Fd;
        },
      };
      return (
        Object.defineProperty(b, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        b
      );
    },
  }),
  eb = (e) => (Rt("data-v-5df21e4b"), (e = e()), Ht(), e),
  tb = { key: 0, class: "password-page__background-wave-wrapper" },
  ab = eb(() =>
    E("div", { class: "password-page__background-wave" }, null, -1)
  ),
  nb = [ab],
  ob = ["src"],
  rb = { key: 0, class: "password-page__icon-lock", src: Xy },
  ib = { class: "password-page__heading" },
  lb = { for: "password", class: "password-page__label" },
  sb = ["placeholder"],
  ub = { key: 1, class: "password-page__error-message" },
  cb = { class: "password-page__button", type: "submit" },
  db = { key: 2, class: "password-page__homepage-link" },
  mb = ["href"];
function gb(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "main",
      {
        class: Z([
          "password-page",
          {
            "password-page--calm": t.isCalmTheme,
            "password-page--popular": t.isPopularTheme,
          },
        ]),
      },
      [
        t.isCalmTheme
          ? ue((c(), f("div", tb, nb)), [[r, "password-page-background-calm"]])
          : O("", !0),
        t.isPopularTheme
          ? ue(
              (c(),
              f(
                "img",
                {
                  key: 1,
                  class: "password-page__background-image",
                  src: `${t.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`,
                },
                null,
                8,
                ob
              )),
              [[r, "password-page-background-popular"]]
            )
          : O("", !0),
        E(
          "form",
          { class: "password-page__form", onSubmit: Me(t.unlock, ["prevent"]) },
          [
            t.isCalmTheme ? (c(), f("img", rb)) : O("", !0),
            ue((c(), f("h1", ib, [Re(X(t.passwordPageHeading), 1)])), [
              [r, "password-page-heading"],
            ]),
            ue((c(), f("label", lb, [Re(X(t.passwordPageSubheading), 1)])), [
              [r, "password-page-subheading"],
            ]),
            ue(
              E(
                "input",
                {
                  id: "password",
                  "onUpdate:modelValue":
                    n[0] || (n[0] = (l) => (t.password = l)),
                  type: "password",
                  autocomplete: "off",
                  autocapitalize: "off",
                  autocorrect: "off",
                  name: "password",
                  placeholder: t.passwordPlaceholder,
                  required: "",
                  class: Z([
                    "password-page__input",
                    { "password-page__input--error": t.errorMessage },
                  ]),
                  onBlur: n[1] || (n[1] = (l) => (t.errorMessage = "")),
                },
                null,
                42,
                sb
              ),
              [
                [ts, t.password],
                [r, "password-page-placeholder"],
              ]
            ),
            t.errorMessage
              ? (c(), f("p", ub, X(t.errorMessage), 1))
              : O("", !0),
            ue((c(), f("button", cb, [Re(X(t.passwordPageButtonText), 1)])), [
              [r, "password-page-button"],
            ]),
            t.isHomepageLinkShown
              ? ue(
                  (c(),
                  f("p", db, [
                    Re(X(t.passwordBackText) + " ", 1),
                    E(
                      "a",
                      {
                        href: t.homepageLink,
                        class: "password-page__homepage-link-text",
                      },
                      X(a.homepageName),
                      9,
                      mb
                    ),
                  ])),
                  [[r, "password-page-footer"]]
                )
              : O("", !0),
          ],
          32
        ),
      ],
      2
    )
  );
}
const vb = oe(Jy, [
    ["render", gb],
    ["__scopeId", "data-v-5df21e4b"],
  ]),
  pb = {},
  fb = Nr(
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>',
    1
  ),
  hb = [fb];
function yb(e, n) {
  return (
    c(),
    f(
      "button",
      {
        class: "delete-button",
        onClick: n[0] || (n[0] = (a) => e.$emit("handle-button-click")),
      },
      hb
    )
  );
}
const bb = oe(pb, [
    ["render", yb],
    ["__scopeId", "data-v-334df6f8"],
  ]),
  _b = {},
  wb = (e) => (Rt("data-v-2f9813ef"), (e = e()), Ht(), e),
  kb = { class: "close-button" },
  Sb = wb(() =>
    E(
      "svg",
      {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M12 4L4 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        E("path", {
          d: "M4 4L12 12",
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  Tb = [Sb];
function Cb(e, n) {
  return c(), f("button", kb, Tb);
}
const Jr = oe(_b, [
    ["render", Cb],
    ["__scopeId", "data-v-2f9813ef"],
  ]),
  Pb = re({
    name: "Drawer",
    components: { CloseButton: Jr },
    props: {
      placement: {
        type: String,
        default: "right",
        validator: (e) => ["right", "left"].includes(e),
      },
      width: { type: String, default: "350px" },
      alwaysShowCloseButton: { type: Boolean, default: !0 },
      isOpen: { type: Boolean, default: !1 },
      topPositionMobile: { type: String, default: "0px" },
    },
    emits: ["close-drawer"],
    setup(e, n) {
      const a = M(null);
      return (
        Ee(() => {
          ko(a, () => {
            n.emit("close-drawer");
          });
        }),
        { siteDrawerRef: a }
      );
    },
    computed: {
      computedStyles() {
        return {
          "--sidebar-width": this.width,
          "--sidebar-top-mobile": this.topPositionMobile,
        };
      },
    },
    methods: {
      closeDrawer() {
        this.$emit("close-drawer");
      },
    },
  }),
  Ib = { class: "site-drawer__content" };
function Eb(e, n, a, t, o, i) {
  const r = He("CloseButton"),
    l = je("qa");
  return (
    c(),
    f("div", null, [
      e.isOpen
        ? (c(),
          f(
            "div",
            {
              key: 0,
              class: Z([
                "site-drawer-overlay",
                { "site-drawer-overlay--open": e.isOpen },
              ]),
              onTouchend: n[0] || (n[0] = Me(() => {}, ["stop", "prevent"])),
            },
            null,
            34
          ))
        : O("", !0),
      Oe(
        At,
        {
          name:
            e.placement === "right"
              ? "drawer-slide-right"
              : "drawer-slide-left",
        },
        {
          default: fe(() => [
            e.isOpen
              ? (c(),
                f(
                  "aside",
                  {
                    key: 0,
                    ref: "siteDrawerRef",
                    class: Z([
                      {
                        "site-drawer--left": e.placement === "left",
                        "site-drawer--right": e.placement === "right",
                      },
                      "site-drawer",
                    ]),
                    style: Be(e.computedStyles),
                  },
                  [
                    E("div", Ib, [
                      ue(
                        (c(),
                        f(
                          "span",
                          {
                            class: Z([
                              "site-drawer__close-button",
                              {
                                "site-drawer__close-button--hide-mobile":
                                  !e.alwaysShowCloseButton,
                              },
                            ]),
                            onClick:
                              n[1] ||
                              (n[1] = (...s) =>
                                e.closeDrawer && e.closeDrawer(...s)),
                          },
                          [Oe(r)],
                          2
                        )),
                        [[l, "builder-sitedrawer-btn-close"]]
                      ),
                      te(e.$slots, "default", {}, void 0, !0),
                    ]),
                  ],
                  6
                ))
              : O("", !0),
          ]),
          _: 3,
        },
        8,
        ["name"]
      ),
    ])
  );
}
const Db = oe(Pb, [
    ["render", Eb],
    ["__scopeId", "data-v-12672165"],
  ]),
  Il = 90,
  Mb = re({
    components: {
      Drawer: Db,
      DeleteButton: bb,
      ProductImage: bo,
      QuantityPicker: Vs,
    },
    props: {
      isLoading: { type: Boolean, default: !1 },
      isShoppingCartOpen: { type: Boolean, default: !1 },
      translations: { type: Object, default: null },
      language: { type: String, default: "en" },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      siteId: { type: String, default: null },
      quantifiedCartItemsList: { type: Array, default: () => [] },
      products: { type: Array, default: () => [] },
      shoppingCartItems: { type: Array, default: () => [] },
      variantsQuantity: { type: Array, default: () => [] },
    },
    emits: [
      "close-shopping-cart",
      "checkout-button-click",
      "set-shopping-cart-items",
    ],
    data() {
      return {
        IMAGE_WIDTH_PX: Il,
        isHeaderVisible: !1,
        topPositionMobile: "0px",
        resizeObserver: null,
      };
    },
    computed: {
      totalPrice() {
        return this.quantifiedCartItemsList.reduce(
          (e, n) =>
            e +
            (n.product?.variants[0]?.prices[0]?.sale_amount ||
              n.product?.variants[0]?.prices[0]?.amount ||
              0) *
              n.quantity,
          0
        );
      },
      currencyCode() {
        return this.products[0]?.variants[0]?.prices[0]?.currency;
      },
      computedStyle() {
        return { "--image-width": `${Il}px` };
      },
      isLimitReached() {
        return this.shoppingCartItems.length >= Za;
      },
    },
    watch: {
      isShoppingCartOpen(e) {
        document.documentElement.style.overflow = e ? "hidden" : "auto";
      },
      headerHeight() {
        this.setHeaderVisibilityValues();
      },
    },
    mounted() {
      const e = document.querySelector(".block-header");
      e &&
        ((this.resizeObserver = new ResizeObserver(() => {
          this.setHeaderHeight();
        })),
        this.resizeObserver.observe(e)),
        window.addEventListener("scroll", this.setHeaderVisibilityValues);
    },
    beforeUnmount() {
      this.resizeObserver?.disconnect(),
        window.removeEventListener("scroll", this.setHeaderVisibilityValues);
    },
    methods: {
      getFormattedBookingDuration: Qr,
      formatPrice: Ta,
      isStockAvailable(e) {
        if (e.product.variants[0].manage_inventory) {
          const a =
            this.variantsQuantity.find((t) => t.id === e.product.variants[0].id)
              ?.inventory_quantity || 0;
          return e.quantity < a;
        }
        return !0;
      },
      handleQuantityChange(e, n) {
        if (e > n.quantity) {
          this.increaseQuantity(n);
          return;
        }
        this.decreaseQuantity(n);
      },
      decreaseQuantity(e) {
        const n = [...this.shoppingCartItems],
          a = this.shoppingCartItems.filter(
            (o) => o.variants[0].id === e.product.variants[0].id
          ),
          t = this.shoppingCartItems.lastIndexOf(a[a.length - 1]);
        n.splice(t, 1), this.$emit("set-shopping-cart-items", n);
      },
      increaseQuantity(e) {
        this.$emit("set-shopping-cart-items", [
          ...this.shoppingCartItems,
          e.product,
        ]);
      },
      removeProduct(e) {
        const n = this.shoppingCartItems.filter(
          (a) => a.variants[0].id !== e.variants[0].id
        );
        this.$emit("set-shopping-cart-items", n);
      },
      closeShoppingCart() {
        this.$emit("close-shopping-cart");
      },
      setHeaderVisibility() {
        this.isHeaderVisible =
          this.isHeaderSticky ||
          (this.isNavHidden
            ? !1
            : window.scrollY <= Number(this.headerHeight) * 0.4);
      },
      setTopPositionMobile() {
        const e = this.isHeaderSticky
          ? this.headerHeight
          : this.headerHeight - window.scrollY;
        this.topPositionMobile = `${
          this.isHeaderVisible ? Math.floor(e) - 1 : 0
        }px`;
      },
      setHeaderVisibilityValues() {
        this.setHeaderVisibility(), this.setTopPositionMobile();
      },
      setHeaderHeight() {
        this.headerHeight =
          document.querySelector(".block-header")?.clientHeight;
      },
      getFormattedSelectedDate(e) {
        return (
          new Date(
            e.product?.variants[0]?.booking_event?.date
          ).toLocaleDateString(this.language) || null
        );
      },
      getFormattedTime(e) {
        const n = new Date(e.product?.variants[0]?.booking_event?.time_slot),
          a = n.getTime(),
          t = new Date(a + wr(e.product)),
          o = n.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          }),
          i = t.toLocaleTimeString(this.language, {
            hour: "2-digit",
            minute: "2-digit",
          });
        return `${o} - ${i}`;
      },
      isProductBookingType(e) {
        return e.product?.type.value === Yt;
      },
      getProductImage(e) {
        return e.product.variants[0].image_url || e.product.thumbnail;
      },
    },
  }),
  qs = (e) => (Rt("data-v-688c363e"), (e = e()), Ht(), e),
  Ob = { class: "cart" },
  Ab = { class: "cart__content" },
  Bb = {
    key: 0,
    class: "cart__content-title cart__content-title--with-margin",
  },
  Lb = { key: 1, class: "cart__content-title" },
  xb = { class: "cart__list" },
  Rb = { class: "cart__title" },
  Hb = { key: 0, class: "cart__text" },
  Nb = { key: 1, class: "cart__text cart__sale-price" },
  $b = { class: "cart__text cart__duration" },
  Vb = { class: "cart__time-wrapper" },
  Ub = qs(() =>
    E(
      "svg",
      {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        E("path", {
          d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  Yb = { class: "cart__text cart__text--lighter" },
  Fb = { class: "cart__time-wrapper" },
  Wb = qs(() =>
    E(
      "svg",
      {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon",
      },
      [
        E("path", {
          d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  qb = { class: "cart__text cart__text--lighter" },
  Gb = { key: 3, class: "cart__quantity" },
  jb = { class: "cart__quantity-title" },
  zb = { key: 0, class: "cart__footer" },
  Kb = { class: "cart__title cart__title--with-slot" };
function Qb(e, n, a, t, o, i) {
  const r = He("ProductImage"),
    l = He("QuantityPicker"),
    s = He("DeleteButton"),
    m = He("Drawer"),
    g = je("qa");
  return (
    c(),
    q(
      m,
      {
        "is-open": e.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: Be(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart,
      },
      {
        default: fe(() => [
          E("div", Ob, [
            E("div", Ab, [
              e.quantifiedCartItemsList.length
                ? (c(), f("p", Lb, X(e.translations.shoppingBag), 1))
                : ue(
                    (c(),
                    f("p", Bb, [Re(X(e.translations.shoppingBagEmpty), 1)])),
                    [[g, "shoppingcart-text-emptystate"]]
                  ),
              E("ul", xb, [
                (c(!0),
                f(
                  ge,
                  null,
                  we(
                    e.quantifiedCartItemsList,
                    (d) => (
                      c(),
                      f(
                        "li",
                        {
                          key: d.product.variants[0].id,
                          class: "cart__list-item",
                        },
                        [
                          d.product.thumbnail
                            ? (c(),
                              q(
                                r,
                                {
                                  key: 0,
                                  src: e.getProductImage(d),
                                  alt: d.product.title,
                                  class: "cart__list-item-image",
                                  width: e.IMAGE_WIDTH_PX,
                                  height: e.IMAGE_WIDTH_PX,
                                  "site-id": e.siteId,
                                  "enable-srcset": "",
                                },
                                null,
                                8,
                                ["src", "alt", "width", "height", "site-id"]
                              ))
                            : O("", !0),
                          E("div", null, [
                            ue((c(), f("p", Rb, [Re(X(d.product.title), 1)])), [
                              [g, "shoppingcart-text-product"],
                            ]),
                            d.product.options.length
                              ? ue(
                                  (c(),
                                  f("p", Hb, [
                                    Re(X(d.product.variants[0].title), 1),
                                  ])),
                                  [[g, "shoppingcart-text-variant"]]
                                )
                              : O("", !0),
                            ue(
                              (c(),
                              f(
                                "p",
                                {
                                  class: Z([
                                    "cart__text cart__price",
                                    {
                                      "cart__price--strikethrough":
                                        d.product.variants[0].prices[0]
                                          .sale_amount,
                                    },
                                  ]),
                                },
                                [
                                  Re(
                                    X(
                                      e.formatPrice({
                                        amount:
                                          d.product.variants[0].prices[0]
                                            .amount,
                                        currency:
                                          d.product.variants[0].prices[0]
                                            .currency,
                                      })
                                    ),
                                    1
                                  ),
                                ],
                                2
                              )),
                              [[g, "shoppingcart-text-price"]]
                            ),
                            d.product.variants[0].prices[0].sale_amount
                              ? ue(
                                  (c(),
                                  f("p", Nb, [
                                    Re(
                                      X(
                                        e.formatPrice({
                                          amount:
                                            d.product.variants[0].prices[0]
                                              .sale_amount,
                                          currency:
                                            d.product.variants[0].prices[0]
                                              .currency,
                                        })
                                      ),
                                      1
                                    ),
                                  ])),
                                  [[g, "shoppingcart-text-saleprice"]]
                                )
                              : O("", !0),
                            e.isProductBookingType(d)
                              ? (c(),
                                f(
                                  ge,
                                  { key: 2 },
                                  [
                                    ue(
                                      (c(),
                                      f("p", $b, [
                                        Re(
                                          X(
                                            e.getFormattedBookingDuration(
                                              d.product,
                                              e.translations
                                            )
                                          ),
                                          1
                                        ),
                                      ])),
                                      [[g, "shoppingcart-text-duration"]]
                                    ),
                                    E("div", Vb, [
                                      Ub,
                                      E(
                                        "p",
                                        Yb,
                                        X(e.getFormattedSelectedDate(d)),
                                        1
                                      ),
                                    ]),
                                    E("div", Fb, [
                                      Wb,
                                      E("p", qb, X(e.getFormattedTime(d)), 1),
                                    ]),
                                  ],
                                  64
                                ))
                              : (c(),
                                f("p", Gb, [
                                  E(
                                    "span",
                                    jb,
                                    X(e.translations.quantityShort) + ": ",
                                    1
                                  ),
                                  Oe(
                                    l,
                                    {
                                      "qa-selector": "shoppingcart",
                                      "is-cart-style": "",
                                      size: 26,
                                      "font-size": 14,
                                      quantity: d.quantity,
                                      "is-input-disabled": "",
                                      "is-limit-reached": e.isLimitReached,
                                      "is-stock-available":
                                        e.isStockAvailable(d),
                                      onQuantityChange: (v) =>
                                        e.handleQuantityChange(v, d),
                                    },
                                    null,
                                    8,
                                    [
                                      "quantity",
                                      "is-limit-reached",
                                      "is-stock-available",
                                      "onQuantityChange",
                                    ]
                                  ),
                                ])),
                          ]),
                          ue(
                            Oe(
                              s,
                              {
                                class: "cart__remove-button",
                                onHandleButtonClick: (v) =>
                                  e.removeProduct(d.product),
                              },
                              null,
                              8,
                              ["onHandleButtonClick"]
                            ),
                            [[g, "shoppingcart-btn-delete"]]
                          ),
                        ]
                      )
                    )
                  ),
                  128
                )),
              ]),
            ]),
            e.quantifiedCartItemsList.length
              ? (c(),
                f("div", zb, [
                  ue(
                    (c(),
                    f("p", Kb, [
                      Re(X(e.translations.subtotal) + ": ", 1),
                      E(
                        "span",
                        null,
                        X(
                          e.formatPrice({
                            amount: e.totalPrice,
                            currency: e.currencyCode,
                          })
                        ),
                        1
                      ),
                    ])),
                    [[g, "shoppingcart-text-subtotal"]]
                  ),
                  ue(
                    (c(),
                    f(
                      "button",
                      {
                        class: Z([
                          "cart__text cart__checkout-button",
                          { loading: e.isLoading },
                        ]),
                        onClick:
                          n[0] ||
                          (n[0] = (d) => e.$emit("checkout-button-click")),
                      },
                      [Re(X(e.translations.checkout), 1)],
                      2
                    )),
                    [[g, "shoppingcart-btn-checkout"]]
                  ),
                ]))
              : O("", !0),
          ]),
        ]),
        _: 1,
      },
      8,
      ["is-open", "top-position-mobile", "style", "onCloseDrawer"]
    )
  );
}
const Zb = oe(Mb, [
    ["render", Qb],
    ["__scopeId", "data-v-688c363e"],
  ]),
  Xb = re({
    components: { EcommerceShoppingCart: Zb },
    props: {
      headerHeight: { type: Number, default: 0 },
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentPageEcommerceBlocks: { type: Array, default: () => [] },
      currentPageEcommerceComponents: { type: Array, default: () => [] },
      isHeaderSticky: { type: Boolean, default: !1 },
      isNavHidden: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const { siteId: n } = Ze(),
        {
          quantifiedCartItemsList: a,
          products: t,
          isShoppingCartOpen: o,
          isCheckoutLoading: i,
          shoppingCartItems: r,
          variantsQuantity: l,
          fetchProducts: s,
          setShoppingCartOpen: m,
          setShoppingCartItems: g,
          setIsCheckoutLoading: d,
        } = Ft(),
        { openEcommerceModal: v } = Ut(),
        { initiateCheckout: h } = nn();
      return {
        openEcommerceModal: v,
        initiateCheckout: h,
        quantifiedCartItemsList: a,
        products: t,
        isShoppingCartOpen: o,
        isCheckoutLoading: i,
        shoppingCartItems: r,
        variantsQuantity: l,
        fetchProducts: s,
        setShoppingCartOpen: m,
        setShoppingCartItems: g,
        setIsCheckoutLoading: d,
        siteId: n,
      };
    },
    computed: {
      currentPageEcommerceElements() {
        return [
          ...this.currentPageEcommerceBlocks,
          ...this.currentPageEcommerceComponents,
        ];
      },
      productIds() {
        const n = this.currentPageEcommerceElements
          .reduce((a, t) => {
            let o = [];
            switch (t.type) {
              case "BlockEcommerceProduct":
                o = [...o, t.product?.id];
                break;
              case "GridEcommerceButton":
                o = [...o, t.settings?.productId];
                break;
            }
            return [...a, ...o];
          }, [])
          .filter((a) => a !== -1);
        return [...new Set(n)];
      },
    },
    watch: {
      currentPageEcommerceElements: {
        async handler(e, n) {
          JSON.stringify(e) !== JSON.stringify(n) &&
            (await this.loadProducts());
        },
      },
    },
    mounted() {
      this.loadProducts();
    },
    methods: {
      async loadProducts() {
        await this.fetchProducts(this.productIds);
      },
      async initCheckout() {
        if (Na() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        this.isCheckoutLoading ||
          (this.setIsCheckoutLoading(!0),
          await this.initiateCheckout(this.shoppingCartItems).then(() => {
            this.setShoppingCartOpen(!1), this.setIsCheckoutLoading(!1);
          }));
      },
    },
  });
function Jb(e, n, a, t, o, i) {
  const r = He("EcommerceShoppingCart"),
    l = je("qa");
  return ue(
    (c(),
    q(
      r,
      {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "header-height": e.headerHeight,
        "is-header-sticky": e.isHeaderSticky,
        "is-nav-hidden": e.isNavHidden,
        translations: e.ecommerceTranslations,
        language: e.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        products: e.products,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: n[0] || (n[0] = (s) => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems,
      },
      null,
      8,
      [
        "is-shopping-cart-open",
        "is-loading",
        "header-height",
        "is-header-sticky",
        "is-nav-hidden",
        "translations",
        "language",
        "site-id",
        "quantified-cart-items-list",
        "products",
        "shopping-cart-items",
        "variants-quantity",
        "onCheckoutButtonClick",
        "onSetShoppingCartItems",
      ]
    )),
    [[l, "user-section-zyroecommerceshoppingcart"]]
  );
}
const e_ = oe(Xb, [["render", Jb]]),
  t_ = re({
    components: { CloseButton: Jr },
    props: {
      backgroundColor: { type: String, default: "var(--color-light)" },
      padding: { type: String, default: "16px" },
      width: { type: String, default: "auto" },
      maxWidth: { type: String, default: "unset" },
      overflow: { type: String, default: "unset" },
      height: { type: String, default: "auto" },
      mobileHeight: { type: String, default: "" },
    },
    setup() {
      const { closeEcommerceModal: e } = Ut();
      return { closeEcommerceModal: e };
    },
    computed: {
      modalStyle() {
        return {
          "--modal-background-color": this.backgroundColor,
          "--padding": this.padding,
          "--width": this.width,
          "--max-width": this.maxWidth,
          "--overflow": this.overflow,
          "--height": this.height,
          "--mobile-height": this.mobileHeight || this.height,
        };
      },
    },
    mounted() {
      this.$refs.modal?.focus();
    },
    methods: {
      handleCloseModalAction() {
        this.closeEcommerceModal();
        const e = new URLSearchParams(window.location.search);
        if (!e.get("open-modal")) return;
        e.delete("open-modal"), e.delete("product");
        const n = e.toString();
        n && window.history.pushState(null, null, `?${n}`);
      },
    },
  }),
  a_ = { class: "modal-wrapper" };
function n_(e, n, a, t, o, i) {
  const r = He("CloseButton");
  return (
    c(),
    q(
      At,
      { name: "fade" },
      {
        default: fe(() => [
          E("div", a_, [
            E("div", {
              tabindex: "-1",
              class: "modal-backdrop",
              onClick:
                n[0] ||
                (n[0] = (...l) =>
                  e.handleCloseModalAction && e.handleCloseModalAction(...l)),
            }),
            E(
              "div",
              {
                ref: "modal",
                style: Be(e.modalStyle),
                class: "modal",
                tabindex: "0",
                "aria-modal": "true",
                onKeydown:
                  n[1] ||
                  (n[1] = Ae(
                    (...l) =>
                      e.handleCloseModalAction &&
                      e.handleCloseModalAction(...l),
                    ["esc"]
                  )),
              },
              [
                Oe(
                  r,
                  {
                    class: "modal__close-button",
                    onClick: e.handleCloseModalAction,
                  },
                  null,
                  8,
                  ["onClick"]
                ),
                te(e.$slots, "default", {}, void 0, !0),
              ],
              36
            ),
          ]),
        ]),
        _: 3,
      }
    )
  );
}
const vn = oe(t_, [
    ["render", n_],
    ["__scopeId", "data-v-35831679"],
  ]),
  o_ = {
    __name: "EcommerceProductPreview",
    props: {
      translations: { type: Object, default: () => {} },
      isQuickPreview: { type: Boolean, default: !1 },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { productPreviewData: t } = Ut(),
        { siteId: o } = Ze(),
        { productPages: i } = Ft(),
        r = u(() =>
          st(t.value.background.origin, t.value.background.path, o.value, {
            width: fa,
          })
        ),
        l = u(() =>
          ha(t.value.background.origin, t.value.background.path, o.value, {
            isMobileFullScreen: !1,
          })
        ),
        s = {
          props: a,
          productPreviewData: t,
          siteId: o,
          productPages: i,
          backgroundSrc: r,
          backgroundSrcSet: l,
          BlockBackground: Wr,
          ModalLayout: vn,
          BlockEcommerceProductProviderUser: Us,
          computed: u,
          get useEcommerceModal() {
            return Ut;
          },
          get getFullWidthSrcset() {
            return ha;
          },
          get getOptimizedSrc() {
            return st;
          },
          get FULL_WIDTH() {
            return fa;
          },
          get useEcommerceGlobal() {
            return Ft;
          },
          get useSiteGlobal() {
            return Ze;
          },
        };
      return (
        Object.defineProperty(s, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        s
      );
    },
  },
  r_ = { class: "ecommerce-product-preview__content-wrapper" };
function i_(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    q(
      t.ModalLayout,
      {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview",
      },
      {
        default: fe(() => [
          ue(
            (c(),
            f("div", r_, [
              t.productPreviewData.background
                ? (c(),
                  q(
                    t.BlockBackground,
                    {
                      key: 0,
                      "overlay-opacity":
                        t.productPreviewData.background["overlay-opacity"],
                      type: t.productPreviewData.background.current,
                      color: t.productPreviewData.background.color,
                      gradient: t.productPreviewData.background.gradient,
                      src: t.backgroundSrc,
                      srcset: t.backgroundSrcSet,
                      "is-fixed": t.productPreviewData.attachment === "fixed",
                      alt:
                        t.productPreviewData.background &&
                        t.productPreviewData.background.alt,
                      class: "ecommerce-product-preview__background",
                    },
                    null,
                    8,
                    [
                      "overlay-opacity",
                      "type",
                      "color",
                      "gradient",
                      "src",
                      "srcset",
                      "is-fixed",
                      "alt",
                    ]
                  ))
                : O("", !0),
              Oe(
                t.BlockEcommerceProductProviderUser,
                {
                  class: "ecommerce-product-preview__content",
                  "is-quick-preview": a.isQuickPreview,
                  data: t.productPreviewData,
                  "product-pages": t.productPages,
                  "is-cart-visible": a.isCartVisible,
                  "ecommerce-translations": a.translations,
                },
                null,
                8,
                [
                  "is-quick-preview",
                  "data",
                  "product-pages",
                  "is-cart-visible",
                  "ecommerce-translations",
                ]
              ),
            ])),
            [[r, "productpreview-modal"]]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const l_ = oe(o_, [
  ["render", i_],
  ["__scopeId", "data-v-e0753e53"],
]);
function Wt(e) {
  "@babel/helpers - typeof";
  return (
    (Wt =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (n) {
            return typeof n;
          }
        : function (n) {
            return n &&
              typeof Symbol == "function" &&
              n.constructor === Symbol &&
              n !== Symbol.prototype
              ? "symbol"
              : typeof n;
          }),
    Wt(e)
  );
}
function Ie(e) {
  if (e === null || e === !0 || e === !1) return NaN;
  var n = Number(e);
  return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n);
}
function ye(e, n) {
  if (n.length < e)
    throw new TypeError(
      e +
        " argument" +
        (e > 1 ? "s" : "") +
        " required, but only " +
        n.length +
        " present"
    );
}
function ke(e) {
  ye(1, arguments);
  var n = Object.prototype.toString.call(e);
  return e instanceof Date || (Wt(e) === "object" && n === "[object Date]")
    ? new Date(e.getTime())
    : typeof e == "number" || n === "[object Number]"
    ? new Date(e)
    : ((typeof e == "string" || n === "[object String]") &&
        typeof console < "u" &&
        (console.warn(
          "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
        ),
        console.warn(new Error().stack)),
      new Date(NaN));
}
function ma(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n);
  return isNaN(t) ? new Date(NaN) : (t && a.setDate(a.getDate() + t), a);
}
function zt(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n);
  if (isNaN(t)) return new Date(NaN);
  if (!t) return a;
  var o = a.getDate(),
    i = new Date(a.getTime());
  i.setMonth(a.getMonth() + t + 1, 0);
  var r = i.getDate();
  return o >= r ? i : (a.setFullYear(i.getFullYear(), i.getMonth(), o), a);
}
function Gs(e, n) {
  if ((ye(2, arguments), !n || Wt(n) !== "object")) return new Date(NaN);
  var a = n.years ? Ie(n.years) : 0,
    t = n.months ? Ie(n.months) : 0,
    o = n.weeks ? Ie(n.weeks) : 0,
    i = n.days ? Ie(n.days) : 0,
    r = n.hours ? Ie(n.hours) : 0,
    l = n.minutes ? Ie(n.minutes) : 0,
    s = n.seconds ? Ie(n.seconds) : 0,
    m = ke(e),
    g = t || a ? zt(m, t + a * 12) : m,
    d = i || o ? ma(g, i + o * 7) : g,
    v = l + r * 60,
    h = s + v * 60,
    y = h * 1e3,
    k = new Date(d.getTime() + y);
  return k;
}
function s_(e, n) {
  ye(2, arguments);
  var a = ke(e).getTime(),
    t = Ie(n);
  return new Date(a + t);
}
var u_ = {};
function sa() {
  return u_;
}
function $a(e, n) {
  var a, t, o, i, r, l, s, m;
  ye(1, arguments);
  var g = sa(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (m = s.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = ke(e),
    h = v.getDay(),
    y = (h < d ? 7 : 0) + h - d;
  return v.setDate(v.getDate() - y), v.setHours(0, 0, 0, 0), v;
}
function co(e) {
  return ye(1, arguments), $a(e, { weekStartsOn: 1 });
}
function c_(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getFullYear(),
    t = new Date(0);
  t.setFullYear(a + 1, 0, 4), t.setHours(0, 0, 0, 0);
  var o = co(t),
    i = new Date(0);
  i.setFullYear(a, 0, 4), i.setHours(0, 0, 0, 0);
  var r = co(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function d_(e) {
  ye(1, arguments);
  var n = c_(e),
    a = new Date(0);
  a.setFullYear(n, 0, 4), a.setHours(0, 0, 0, 0);
  var t = co(a);
  return t;
}
function mo(e) {
  var n = new Date(
    Date.UTC(
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds()
    )
  );
  return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime();
}
function El(e) {
  ye(1, arguments);
  var n = ke(e);
  return n.setHours(0, 0, 0, 0), n;
}
var m_ = 864e5;
function g_(e, n) {
  ye(2, arguments);
  var a = El(e),
    t = El(n),
    o = a.getTime() - mo(a),
    i = t.getTime() - mo(t);
  return Math.round((o - i) / m_);
}
function v_(e, n) {
  ye(2, arguments);
  var a = Ie(n),
    t = a * 3;
  return zt(e, t);
}
function ei(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return zt(e, a * 12);
}
var ti = 6e4,
  ai = 36e5,
  p_ = 1e3;
function js(e) {
  return (
    ye(1, arguments),
    e instanceof Date ||
      (Wt(e) === "object" &&
        Object.prototype.toString.call(e) === "[object Date]")
  );
}
function On(e) {
  if ((ye(1, arguments), !js(e) && typeof e != "number")) return !1;
  var n = ke(e);
  return !isNaN(Number(n));
}
function Dl(e) {
  ye(1, arguments);
  var n = ke(e),
    a = Math.floor(n.getMonth() / 3) + 1;
  return a;
}
function zs(e, n) {
  var a;
  ye(1, arguments);
  var t = e || {},
    o = ke(t.start),
    i = ke(t.end),
    r = i.getTime();
  if (!(o.getTime() <= r)) throw new RangeError("Invalid interval");
  var l = [],
    s = o;
  s.setHours(0, 0, 0, 0);
  var m = Number((a = void 0) !== null && a !== void 0 ? a : 1);
  if (m < 1 || isNaN(m))
    throw new RangeError("`options.step` must be a number greater than 1");
  for (; s.getTime() <= r; )
    l.push(ke(s)), s.setDate(s.getDate() + m), s.setHours(0, 0, 0, 0);
  return l;
}
function Un(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getMonth(),
    t = a - (a % 3);
  return n.setMonth(t, 1), n.setHours(0, 0, 0, 0), n;
}
function f_(e) {
  ye(1, arguments);
  var n = e || {},
    a = ke(n.start),
    t = ke(n.end),
    o = t.getTime();
  if (!(a.getTime() <= o)) throw new RangeError("Invalid interval");
  var i = Un(a),
    r = Un(t);
  o = r.getTime();
  for (var l = [], s = i; s.getTime() <= o; ) l.push(ke(s)), (s = v_(s, 1));
  return l;
}
function h_(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getFullYear();
  return n.setFullYear(a + 1, 0, 0), n.setHours(23, 59, 59, 999), n;
}
function y_(e) {
  ye(1, arguments);
  var n = ke(e),
    a = new Date(0);
  return a.setFullYear(n.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function b_(e, n) {
  var a, t, o, i, r, l, s, m;
  ye(1, arguments);
  var g = sa(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (m = s.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = ke(e),
    h = v.getDay(),
    y = (h < d ? -7 : 0) + 6 - (h - d);
  return v.setDate(v.getDate() + y), v.setHours(23, 59, 59, 999), v;
}
function Ml(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getMonth(),
    t = a - (a % 3) + 3;
  return n.setMonth(t, 0), n.setHours(23, 59, 59, 999), n;
}
function Ks(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return s_(e, -a);
}
var __ = 864e5;
function w_(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getTime();
  n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
  var t = n.getTime(),
    o = a - t;
  return Math.floor(o / __) + 1;
}
function ln(e) {
  ye(1, arguments);
  var n = 1,
    a = ke(e),
    t = a.getUTCDay(),
    o = (t < n ? 7 : 0) + t - n;
  return a.setUTCDate(a.getUTCDate() - o), a.setUTCHours(0, 0, 0, 0), a;
}
function Qs(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getUTCFullYear(),
    t = new Date(0);
  t.setUTCFullYear(a + 1, 0, 4), t.setUTCHours(0, 0, 0, 0);
  var o = ln(t),
    i = new Date(0);
  i.setUTCFullYear(a, 0, 4), i.setUTCHours(0, 0, 0, 0);
  var r = ln(i);
  return n.getTime() >= o.getTime()
    ? a + 1
    : n.getTime() >= r.getTime()
    ? a
    : a - 1;
}
function k_(e) {
  ye(1, arguments);
  var n = Qs(e),
    a = new Date(0);
  a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0);
  var t = ln(a);
  return t;
}
var S_ = 6048e5;
function Zs(e) {
  ye(1, arguments);
  var n = ke(e),
    a = ln(n).getTime() - k_(n).getTime();
  return Math.round(a / S_) + 1;
}
function Va(e, n) {
  var a, t, o, i, r, l, s, m;
  ye(1, arguments);
  var g = sa(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.weekStartsOn) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.weekStartsOn) !== null && o !== void 0
            ? o
            : g.weekStartsOn) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (m = s.options) === null ||
            m === void 0
          ? void 0
          : m.weekStartsOn) !== null && a !== void 0
        ? a
        : 0
    );
  if (!(d >= 0 && d <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var v = ke(e),
    h = v.getUTCDay(),
    y = (h < d ? 7 : 0) + h - d;
  return v.setUTCDate(v.getUTCDate() - y), v.setUTCHours(0, 0, 0, 0), v;
}
function ni(e, n) {
  var a, t, o, i, r, l, s, m;
  ye(1, arguments);
  var g = ke(e),
    d = g.getUTCFullYear(),
    v = sa(),
    h = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : v.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = v.locale) === null ||
            s === void 0 ||
            (m = s.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(h >= 1 && h <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var y = new Date(0);
  y.setUTCFullYear(d + 1, 0, h), y.setUTCHours(0, 0, 0, 0);
  var k = Va(y, n),
    T = new Date(0);
  T.setUTCFullYear(d, 0, h), T.setUTCHours(0, 0, 0, 0);
  var _ = Va(T, n);
  return g.getTime() >= k.getTime()
    ? d + 1
    : g.getTime() >= _.getTime()
    ? d
    : d - 1;
}
function T_(e, n) {
  var a, t, o, i, r, l, s, m;
  ye(1, arguments);
  var g = sa(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (m = s.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    v = ni(e, n),
    h = new Date(0);
  h.setUTCFullYear(v, 0, d), h.setUTCHours(0, 0, 0, 0);
  var y = Va(h, n);
  return y;
}
var C_ = 6048e5;
function Xs(e, n) {
  ye(1, arguments);
  var a = ke(e),
    t = Va(a, n).getTime() - T_(a, n).getTime();
  return Math.round(t / C_) + 1;
}
function Qe(e, n) {
  for (var a = e < 0 ? "-" : "", t = Math.abs(e).toString(); t.length < n; )
    t = "0" + t;
  return a + t;
}
var _a = {
    y: function (n, a) {
      var t = n.getUTCFullYear(),
        o = t > 0 ? t : 1 - t;
      return Qe(a === "yy" ? o % 100 : o, a.length);
    },
    M: function (n, a) {
      var t = n.getUTCMonth();
      return a === "M" ? String(t + 1) : Qe(t + 1, 2);
    },
    d: function (n, a) {
      return Qe(n.getUTCDate(), a.length);
    },
    a: function (n, a) {
      var t = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (a) {
        case "a":
        case "aa":
          return t.toUpperCase();
        case "aaa":
          return t;
        case "aaaaa":
          return t[0];
        case "aaaa":
        default:
          return t === "am" ? "a.m." : "p.m.";
      }
    },
    h: function (n, a) {
      return Qe(n.getUTCHours() % 12 || 12, a.length);
    },
    H: function (n, a) {
      return Qe(n.getUTCHours(), a.length);
    },
    m: function (n, a) {
      return Qe(n.getUTCMinutes(), a.length);
    },
    s: function (n, a) {
      return Qe(n.getUTCSeconds(), a.length);
    },
    S: function (n, a) {
      var t = a.length,
        o = n.getUTCMilliseconds(),
        i = Math.floor(o * Math.pow(10, t - 3));
      return Qe(i, a.length);
    },
  },
  ja = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  P_ = {
    G: function (n, a, t) {
      var o = n.getUTCFullYear() > 0 ? 1 : 0;
      switch (a) {
        case "G":
        case "GG":
        case "GGG":
          return t.era(o, { width: "abbreviated" });
        case "GGGGG":
          return t.era(o, { width: "narrow" });
        case "GGGG":
        default:
          return t.era(o, { width: "wide" });
      }
    },
    y: function (n, a, t) {
      if (a === "yo") {
        var o = n.getUTCFullYear(),
          i = o > 0 ? o : 1 - o;
        return t.ordinalNumber(i, { unit: "year" });
      }
      return _a.y(n, a);
    },
    Y: function (n, a, t, o) {
      var i = ni(n, o),
        r = i > 0 ? i : 1 - i;
      if (a === "YY") {
        var l = r % 100;
        return Qe(l, 2);
      }
      return a === "Yo"
        ? t.ordinalNumber(r, { unit: "year" })
        : Qe(r, a.length);
    },
    R: function (n, a) {
      var t = Qs(n);
      return Qe(t, a.length);
    },
    u: function (n, a) {
      var t = n.getUTCFullYear();
      return Qe(t, a.length);
    },
    Q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case "Q":
          return String(o);
        case "QQ":
          return Qe(o, 2);
        case "Qo":
          return t.ordinalNumber(o, { unit: "quarter" });
        case "QQQ":
          return t.quarter(o, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return t.quarter(o, { width: "narrow", context: "formatting" });
        case "QQQQ":
        default:
          return t.quarter(o, { width: "wide", context: "formatting" });
      }
    },
    q: function (n, a, t) {
      var o = Math.ceil((n.getUTCMonth() + 1) / 3);
      switch (a) {
        case "q":
          return String(o);
        case "qq":
          return Qe(o, 2);
        case "qo":
          return t.ordinalNumber(o, { unit: "quarter" });
        case "qqq":
          return t.quarter(o, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return t.quarter(o, { width: "narrow", context: "standalone" });
        case "qqqq":
        default:
          return t.quarter(o, { width: "wide", context: "standalone" });
      }
    },
    M: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case "M":
        case "MM":
          return _a.M(n, a);
        case "Mo":
          return t.ordinalNumber(o + 1, { unit: "month" });
        case "MMM":
          return t.month(o, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return t.month(o, { width: "narrow", context: "formatting" });
        case "MMMM":
        default:
          return t.month(o, { width: "wide", context: "formatting" });
      }
    },
    L: function (n, a, t) {
      var o = n.getUTCMonth();
      switch (a) {
        case "L":
          return String(o + 1);
        case "LL":
          return Qe(o + 1, 2);
        case "Lo":
          return t.ordinalNumber(o + 1, { unit: "month" });
        case "LLL":
          return t.month(o, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return t.month(o, { width: "narrow", context: "standalone" });
        case "LLLL":
        default:
          return t.month(o, { width: "wide", context: "standalone" });
      }
    },
    w: function (n, a, t, o) {
      var i = Xs(n, o);
      return a === "wo"
        ? t.ordinalNumber(i, { unit: "week" })
        : Qe(i, a.length);
    },
    I: function (n, a, t) {
      var o = Zs(n);
      return a === "Io"
        ? t.ordinalNumber(o, { unit: "week" })
        : Qe(o, a.length);
    },
    d: function (n, a, t) {
      return a === "do"
        ? t.ordinalNumber(n.getUTCDate(), { unit: "date" })
        : _a.d(n, a);
    },
    D: function (n, a, t) {
      var o = w_(n);
      return a === "Do"
        ? t.ordinalNumber(o, { unit: "dayOfYear" })
        : Qe(o, a.length);
    },
    E: function (n, a, t) {
      var o = n.getUTCDay();
      switch (a) {
        case "E":
        case "EE":
        case "EEE":
          return t.day(o, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return t.day(o, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return t.day(o, { width: "short", context: "formatting" });
        case "EEEE":
        default:
          return t.day(o, { width: "wide", context: "formatting" });
      }
    },
    e: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case "e":
          return String(r);
        case "ee":
          return Qe(r, 2);
        case "eo":
          return t.ordinalNumber(r, { unit: "day" });
        case "eee":
          return t.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return t.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return t.day(i, { width: "short", context: "formatting" });
        case "eeee":
        default:
          return t.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (n, a, t, o) {
      var i = n.getUTCDay(),
        r = (i - o.weekStartsOn + 8) % 7 || 7;
      switch (a) {
        case "c":
          return String(r);
        case "cc":
          return Qe(r, a.length);
        case "co":
          return t.ordinalNumber(r, { unit: "day" });
        case "ccc":
          return t.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return t.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return t.day(i, { width: "short", context: "standalone" });
        case "cccc":
        default:
          return t.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (n, a, t) {
      var o = n.getUTCDay(),
        i = o === 0 ? 7 : o;
      switch (a) {
        case "i":
          return String(i);
        case "ii":
          return Qe(i, a.length);
        case "io":
          return t.ordinalNumber(i, { unit: "day" });
        case "iii":
          return t.day(o, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return t.day(o, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return t.day(o, { width: "short", context: "formatting" });
        case "iiii":
        default:
          return t.day(o, { width: "wide", context: "formatting" });
      }
    },
    a: function (n, a, t) {
      var o = n.getUTCHours(),
        i = o / 12 >= 1 ? "pm" : "am";
      switch (a) {
        case "a":
        case "aa":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return t
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "aaaa":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    b: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o === 12
          ? (i = ja.noon)
          : o === 0
          ? (i = ja.midnight)
          : (i = o / 12 >= 1 ? "pm" : "am"),
        a)
      ) {
        case "b":
        case "bb":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return t
            .dayPeriod(i, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "bbbb":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    B: function (n, a, t) {
      var o = n.getUTCHours(),
        i;
      switch (
        (o >= 17
          ? (i = ja.evening)
          : o >= 12
          ? (i = ja.afternoon)
          : o >= 4
          ? (i = ja.morning)
          : (i = ja.night),
        a)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return t.dayPeriod(i, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return t.dayPeriod(i, { width: "narrow", context: "formatting" });
        case "BBBB":
        default:
          return t.dayPeriod(i, { width: "wide", context: "formatting" });
      }
    },
    h: function (n, a, t) {
      if (a === "ho") {
        var o = n.getUTCHours() % 12;
        return o === 0 && (o = 12), t.ordinalNumber(o, { unit: "hour" });
      }
      return _a.h(n, a);
    },
    H: function (n, a, t) {
      return a === "Ho"
        ? t.ordinalNumber(n.getUTCHours(), { unit: "hour" })
        : _a.H(n, a);
    },
    K: function (n, a, t) {
      var o = n.getUTCHours() % 12;
      return a === "Ko"
        ? t.ordinalNumber(o, { unit: "hour" })
        : Qe(o, a.length);
    },
    k: function (n, a, t) {
      var o = n.getUTCHours();
      return (
        o === 0 && (o = 24),
        a === "ko" ? t.ordinalNumber(o, { unit: "hour" }) : Qe(o, a.length)
      );
    },
    m: function (n, a, t) {
      return a === "mo"
        ? t.ordinalNumber(n.getUTCMinutes(), { unit: "minute" })
        : _a.m(n, a);
    },
    s: function (n, a, t) {
      return a === "so"
        ? t.ordinalNumber(n.getUTCSeconds(), { unit: "second" })
        : _a.s(n, a);
    },
    S: function (n, a) {
      return _a.S(n, a);
    },
    X: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      if (r === 0) return "Z";
      switch (a) {
        case "X":
          return Al(r);
        case "XXXX":
        case "XX":
          return Oa(r);
        case "XXXXX":
        case "XXX":
        default:
          return Oa(r, ":");
      }
    },
    x: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "x":
          return Al(r);
        case "xxxx":
        case "xx":
          return Oa(r);
        case "xxxxx":
        case "xxx":
        default:
          return Oa(r, ":");
      }
    },
    O: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + Ol(r, ":");
        case "OOOO":
        default:
          return "GMT" + Oa(r, ":");
      }
    },
    z: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTimezoneOffset();
      switch (a) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + Ol(r, ":");
        case "zzzz":
        default:
          return "GMT" + Oa(r, ":");
      }
    },
    t: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = Math.floor(i.getTime() / 1e3);
      return Qe(r, a.length);
    },
    T: function (n, a, t, o) {
      var i = o._originalDate || n,
        r = i.getTime();
      return Qe(r, a.length);
    },
  };
function Ol(e, n) {
  var a = e > 0 ? "-" : "+",
    t = Math.abs(e),
    o = Math.floor(t / 60),
    i = t % 60;
  if (i === 0) return a + String(o);
  var r = n;
  return a + String(o) + r + Qe(i, 2);
}
function Al(e, n) {
  if (e % 60 === 0) {
    var a = e > 0 ? "-" : "+";
    return a + Qe(Math.abs(e) / 60, 2);
  }
  return Oa(e, n);
}
function Oa(e, n) {
  var a = n || "",
    t = e > 0 ? "-" : "+",
    o = Math.abs(e),
    i = Qe(Math.floor(o / 60), 2),
    r = Qe(o % 60, 2);
  return t + i + a + r;
}
var Bl = function (n, a) {
    switch (n) {
      case "P":
        return a.date({ width: "short" });
      case "PP":
        return a.date({ width: "medium" });
      case "PPP":
        return a.date({ width: "long" });
      case "PPPP":
      default:
        return a.date({ width: "full" });
    }
  },
  Js = function (n, a) {
    switch (n) {
      case "p":
        return a.time({ width: "short" });
      case "pp":
        return a.time({ width: "medium" });
      case "ppp":
        return a.time({ width: "long" });
      case "pppp":
      default:
        return a.time({ width: "full" });
    }
  },
  I_ = function (n, a) {
    var t = n.match(/(P+)(p+)?/) || [],
      o = t[1],
      i = t[2];
    if (!i) return Bl(n, a);
    var r;
    switch (o) {
      case "P":
        r = a.dateTime({ width: "short" });
        break;
      case "PP":
        r = a.dateTime({ width: "medium" });
        break;
      case "PPP":
        r = a.dateTime({ width: "long" });
        break;
      case "PPPP":
      default:
        r = a.dateTime({ width: "full" });
        break;
    }
    return r.replace("{{date}}", Bl(o, a)).replace("{{time}}", Js(i, a));
  },
  Pr = { p: Js, P: I_ },
  E_ = ["D", "DD"],
  D_ = ["YY", "YYYY"];
function eu(e) {
  return E_.indexOf(e) !== -1;
}
function tu(e) {
  return D_.indexOf(e) !== -1;
}
function go(e, n, a) {
  if (e === "YYYY")
    throw new RangeError(
      "Use `yyyy` instead of `YYYY` (in `"
        .concat(n, "`) for formatting years to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "YY")
    throw new RangeError(
      "Use `yy` instead of `YY` (in `"
        .concat(n, "`) for formatting years to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "D")
    throw new RangeError(
      "Use `d` instead of `D` (in `"
        .concat(n, "`) for formatting days of the month to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
  if (e === "DD")
    throw new RangeError(
      "Use `dd` instead of `DD` (in `"
        .concat(n, "`) for formatting days of the month to the input `")
        .concat(
          a,
          "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
        )
    );
}
var M_ = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  },
  O_ = function (n, a, t) {
    var o,
      i = M_[n];
    return (
      typeof i == "string"
        ? (o = i)
        : a === 1
        ? (o = i.one)
        : (o = i.other.replace("{{count}}", a.toString())),
      t != null && t.addSuffix
        ? t.comparison && t.comparison > 0
          ? "in " + o
          : o + " ago"
        : o
    );
  };
function Go(e) {
  return function () {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      a = n.width ? String(n.width) : e.defaultWidth,
      t = e.formats[a] || e.formats[e.defaultWidth];
    return t;
  };
}
var A_ = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
  },
  B_ = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
  },
  L_ = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
  },
  x_ = {
    date: Go({ formats: A_, defaultWidth: "full" }),
    time: Go({ formats: B_, defaultWidth: "full" }),
    dateTime: Go({ formats: L_, defaultWidth: "full" }),
  },
  R_ = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P",
  },
  H_ = function (n, a, t, o) {
    return R_[n];
  };
function kn(e) {
  return function (n, a) {
    var t = a != null && a.context ? String(a.context) : "standalone",
      o;
    if (t === "formatting" && e.formattingValues) {
      var i = e.defaultFormattingWidth || e.defaultWidth,
        r = a != null && a.width ? String(a.width) : i;
      o = e.formattingValues[r] || e.formattingValues[i];
    } else {
      var l = e.defaultWidth,
        s = a != null && a.width ? String(a.width) : e.defaultWidth;
      o = e.values[s] || e.values[l];
    }
    var m = e.argumentCallback ? e.argumentCallback(n) : n;
    return o[m];
  };
}
var N_ = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"],
  },
  $_ = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
  },
  V_ = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    wide: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  U_ = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
  Y_ = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
    },
  },
  F_ = {
    narrow: {
      am: "a",
      pm: "p",
      midnight: "mi",
      noon: "n",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    abbreviated: {
      am: "AM",
      pm: "PM",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
    wide: {
      am: "a.m.",
      pm: "p.m.",
      midnight: "midnight",
      noon: "noon",
      morning: "in the morning",
      afternoon: "in the afternoon",
      evening: "in the evening",
      night: "at night",
    },
  },
  W_ = function (n, a) {
    var t = Number(n),
      o = t % 100;
    if (o > 20 || o < 10)
      switch (o % 10) {
        case 1:
          return t + "st";
        case 2:
          return t + "nd";
        case 3:
          return t + "rd";
      }
    return t + "th";
  },
  q_ = {
    ordinalNumber: W_,
    era: kn({ values: N_, defaultWidth: "wide" }),
    quarter: kn({
      values: $_,
      defaultWidth: "wide",
      argumentCallback: function (n) {
        return n - 1;
      },
    }),
    month: kn({ values: V_, defaultWidth: "wide" }),
    day: kn({ values: U_, defaultWidth: "wide" }),
    dayPeriod: kn({
      values: Y_,
      defaultWidth: "wide",
      formattingValues: F_,
      defaultFormattingWidth: "wide",
    }),
  };
function Sn(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = a.width,
      o = (t && e.matchPatterns[t]) || e.matchPatterns[e.defaultMatchWidth],
      i = n.match(o);
    if (!i) return null;
    var r = i[0],
      l = (t && e.parsePatterns[t]) || e.parsePatterns[e.defaultParseWidth],
      s = Array.isArray(l)
        ? j_(l, function (d) {
            return d.test(r);
          })
        : G_(l, function (d) {
            return d.test(r);
          }),
      m;
    (m = e.valueCallback ? e.valueCallback(s) : s),
      (m = a.valueCallback ? a.valueCallback(m) : m);
    var g = n.slice(r.length);
    return { value: m, rest: g };
  };
}
function G_(e, n) {
  for (var a in e) if (e.hasOwnProperty(a) && n(e[a])) return a;
}
function j_(e, n) {
  for (var a = 0; a < e.length; a++) if (n(e[a])) return a;
}
function z_(e) {
  return function (n) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      t = n.match(e.matchPattern);
    if (!t) return null;
    var o = t[0],
      i = n.match(e.parsePattern);
    if (!i) return null;
    var r = e.valueCallback ? e.valueCallback(i[0]) : i[0];
    r = a.valueCallback ? a.valueCallback(r) : r;
    var l = n.slice(o.length);
    return { value: r, rest: l };
  };
}
var K_ = /^(\d+)(th|st|nd|rd)?/i,
  Q_ = /\d+/i,
  Z_ = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i,
  },
  X_ = { any: [/^b/i, /^(a|c)/i] },
  J_ = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i,
  },
  e0 = { any: [/1/i, /2/i, /3/i, /4/i] },
  t0 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
  },
  a0 = {
    narrow: [
      /^j/i,
      /^f/i,
      /^m/i,
      /^a/i,
      /^m/i,
      /^j/i,
      /^j/i,
      /^a/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
    any: [
      /^ja/i,
      /^f/i,
      /^mar/i,
      /^ap/i,
      /^may/i,
      /^jun/i,
      /^jul/i,
      /^au/i,
      /^s/i,
      /^o/i,
      /^n/i,
      /^d/i,
    ],
  },
  n0 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
  },
  o0 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
  },
  r0 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
  },
  i0 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i,
    },
  },
  l0 = {
    ordinalNumber: z_({
      matchPattern: K_,
      parsePattern: Q_,
      valueCallback: function (n) {
        return parseInt(n, 10);
      },
    }),
    era: Sn({
      matchPatterns: Z_,
      defaultMatchWidth: "wide",
      parsePatterns: X_,
      defaultParseWidth: "any",
    }),
    quarter: Sn({
      matchPatterns: J_,
      defaultMatchWidth: "wide",
      parsePatterns: e0,
      defaultParseWidth: "any",
      valueCallback: function (n) {
        return n + 1;
      },
    }),
    month: Sn({
      matchPatterns: t0,
      defaultMatchWidth: "wide",
      parsePatterns: a0,
      defaultParseWidth: "any",
    }),
    day: Sn({
      matchPatterns: n0,
      defaultMatchWidth: "wide",
      parsePatterns: o0,
      defaultParseWidth: "any",
    }),
    dayPeriod: Sn({
      matchPatterns: r0,
      defaultMatchWidth: "any",
      parsePatterns: i0,
      defaultParseWidth: "any",
    }),
  },
  au = {
    code: "en-US",
    formatDistance: O_,
    formatLong: x_,
    formatRelative: H_,
    localize: q_,
    match: l0,
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  },
  s0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  u0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  c0 = /^'([^]*?)'?$/,
  d0 = /''/g,
  m0 = /[a-zA-Z]/;
function Ca(e, n, a) {
  var t, o, i, r, l, s, m, g, d, v, h, y, k, T, _, b, A, D;
  ye(2, arguments);
  var I = String(n),
    R = sa(),
    L =
      (t = (o = a?.locale) !== null && o !== void 0 ? o : R.locale) !== null &&
      t !== void 0
        ? t
        : au,
    K = Ie(
      (i =
        (r =
          (l =
            (s = a?.firstWeekContainsDate) !== null && s !== void 0
              ? s
              : a == null ||
                (m = a.locale) === null ||
                m === void 0 ||
                (g = m.options) === null ||
                g === void 0
              ? void 0
              : g.firstWeekContainsDate) !== null && l !== void 0
            ? l
            : R.firstWeekContainsDate) !== null && r !== void 0
          ? r
          : (d = R.locale) === null ||
            d === void 0 ||
            (v = d.options) === null ||
            v === void 0
          ? void 0
          : v.firstWeekContainsDate) !== null && i !== void 0
        ? i
        : 1
    );
  if (!(K >= 1 && K <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var W = Ie(
    (h =
      (y =
        (k =
          (T = a?.weekStartsOn) !== null && T !== void 0
            ? T
            : a == null ||
              (_ = a.locale) === null ||
              _ === void 0 ||
              (b = _.options) === null ||
              b === void 0
            ? void 0
            : b.weekStartsOn) !== null && k !== void 0
          ? k
          : R.weekStartsOn) !== null && y !== void 0
        ? y
        : (A = R.locale) === null ||
          A === void 0 ||
          (D = A.options) === null ||
          D === void 0
        ? void 0
        : D.weekStartsOn) !== null && h !== void 0
      ? h
      : 0
  );
  if (!(W >= 0 && W <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (!L.localize)
    throw new RangeError("locale must contain localize property");
  if (!L.formatLong)
    throw new RangeError("locale must contain formatLong property");
  var C = ke(e);
  if (!On(C)) throw new RangeError("Invalid time value");
  var H = mo(C),
    F = Ks(C, H),
    Q = {
      firstWeekContainsDate: K,
      weekStartsOn: W,
      locale: L,
      _originalDate: C,
    },
    B = I.match(u0)
      .map(function (P) {
        var V = P[0];
        if (V === "p" || V === "P") {
          var U = Pr[V];
          return U(P, L.formatLong);
        }
        return P;
      })
      .join("")
      .match(s0)
      .map(function (P) {
        if (P === "''") return "'";
        var V = P[0];
        if (V === "'") return g0(P);
        var U = P_[V];
        if (U)
          return (
            !(a != null && a.useAdditionalWeekYearTokens) &&
              tu(P) &&
              go(P, n, String(e)),
            !(a != null && a.useAdditionalDayOfYearTokens) &&
              eu(P) &&
              go(P, n, String(e)),
            U(F, P, L.localize, Q)
          );
        if (V.match(m0))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              V +
              "`"
          );
        return P;
      })
      .join("");
  return B;
}
function g0(e) {
  var n = e.match(c0);
  return n ? n[1].replace(d0, "'") : e;
}
function v0(e, n) {
  if (e == null)
    throw new TypeError(
      "assign requires that input parameter not be null or undefined"
    );
  for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
  return e;
}
function p0(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getDay();
  return a;
}
function f0(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getFullYear(),
    t = n.getMonth(),
    o = new Date(0);
  return o.setFullYear(a, t + 1, 0), o.setHours(0, 0, 0, 0), o.getDate();
}
function Kt(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getHours();
  return a;
}
var h0 = 6048e5;
function y0(e) {
  ye(1, arguments);
  var n = ke(e),
    a = co(n).getTime() - d_(n).getTime();
  return Math.round(a / h0) + 1;
}
function ia(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getMinutes();
  return a;
}
function Ue(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getMonth();
  return a;
}
function sn(e) {
  ye(1, arguments);
  var n = ke(e),
    a = n.getSeconds();
  return a;
}
function b0(e, n) {
  var a, t, o, i, r, l, s, m;
  ye(1, arguments);
  var g = ke(e),
    d = g.getFullYear(),
    v = sa(),
    h = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : v.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = v.locale) === null ||
            s === void 0 ||
            (m = s.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    );
  if (!(h >= 1 && h <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var y = new Date(0);
  y.setFullYear(d + 1, 0, h), y.setHours(0, 0, 0, 0);
  var k = $a(y, n),
    T = new Date(0);
  T.setFullYear(d, 0, h), T.setHours(0, 0, 0, 0);
  var _ = $a(T, n);
  return g.getTime() >= k.getTime()
    ? d + 1
    : g.getTime() >= _.getTime()
    ? d
    : d - 1;
}
function _0(e, n) {
  var a, t, o, i, r, l, s, m;
  ye(1, arguments);
  var g = sa(),
    d = Ie(
      (a =
        (t =
          (o =
            (i = n?.firstWeekContainsDate) !== null && i !== void 0
              ? i
              : n == null ||
                (r = n.locale) === null ||
                r === void 0 ||
                (l = r.options) === null ||
                l === void 0
              ? void 0
              : l.firstWeekContainsDate) !== null && o !== void 0
            ? o
            : g.firstWeekContainsDate) !== null && t !== void 0
          ? t
          : (s = g.locale) === null ||
            s === void 0 ||
            (m = s.options) === null ||
            m === void 0
          ? void 0
          : m.firstWeekContainsDate) !== null && a !== void 0
        ? a
        : 1
    ),
    v = b0(e, n),
    h = new Date(0);
  h.setFullYear(v, 0, d), h.setHours(0, 0, 0, 0);
  var y = $a(h, n);
  return y;
}
var w0 = 6048e5;
function k0(e, n) {
  ye(1, arguments);
  var a = ke(e),
    t = $a(a, n).getTime() - _0(a, n).getTime();
  return Math.round(t / w0) + 1;
}
function Ne(e) {
  return ye(1, arguments), ke(e).getFullYear();
}
function Yn(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = ke(n);
  return a.getTime() > t.getTime();
}
function Fn(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = ke(n);
  return a.getTime() < t.getTime();
}
function Xa(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = ke(n);
  return a.getTime() === t.getTime();
}
function Ll(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var a = 0, t = new Array(n); a < n; a++) t[a] = e[a];
  return t;
}
function S0(e, n) {
  if (e) {
    if (typeof e == "string") return Ll(e, n);
    var a = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (a === "Object" && e.constructor && (a = e.constructor.name),
      a === "Map" || a === "Set")
    )
      return Array.from(e);
    if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
      return Ll(e, n);
  }
}
function xl(e, n) {
  var a = (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (!a) {
    if (Array.isArray(e) || (a = S0(e)) || n) {
      a && (e = a);
      var t = 0,
        o = function () {};
      return {
        s: o,
        n: function () {
          return t >= e.length ? { done: !0 } : { done: !1, value: e[t++] };
        },
        e: function (m) {
          throw m;
        },
        f: o,
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0,
    r = !1,
    l;
  return {
    s: function () {
      a = a.call(e);
    },
    n: function () {
      var m = a.next();
      return (i = m.done), m;
    },
    e: function (m) {
      (r = !0), (l = m);
    },
    f: function () {
      try {
        !i && a.return != null && a.return();
      } finally {
        if (r) throw l;
      }
    },
  };
}
function he(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ir(e, n) {
  return (
    (Ir = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (t, o) {
          return (t.__proto__ = o), t;
        }),
    Ir(e, n)
  );
}
function Ye(e, n) {
  if (typeof n != "function" && n !== null)
    throw new TypeError("Super expression must either be null or a function");
  (e.prototype = Object.create(n && n.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    n && Ir(e, n);
}
function vo(e) {
  return (
    (vo = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (a) {
          return a.__proto__ || Object.getPrototypeOf(a);
        }),
    vo(e)
  );
}
function nu() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch {}
  return (nu = function () {
    return !!e;
  })();
}
function T0(e, n) {
  if (n && (Wt(n) === "object" || typeof n == "function")) return n;
  if (n !== void 0)
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  return he(e);
}
function Fe(e) {
  var n = nu();
  return function () {
    var t = vo(e),
      o;
    if (n) {
      var i = vo(this).constructor;
      o = Reflect.construct(t, arguments, i);
    } else o = t.apply(this, arguments);
    return T0(this, o);
  };
}
function $e(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function C0(e, n) {
  if (Wt(e) != "object" || !e) return e;
  var a = e[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(e, n);
    if (Wt(t) != "object") return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function ou(e) {
  var n = C0(e, "string");
  return Wt(n) == "symbol" ? n : String(n);
}
function P0(e, n) {
  for (var a = 0; a < n.length; a++) {
    var t = n[a];
    (t.enumerable = t.enumerable || !1),
      (t.configurable = !0),
      "value" in t && (t.writable = !0),
      Object.defineProperty(e, ou(t.key), t);
  }
}
function Ve(e, n, a) {
  return (
    n && P0(e.prototype, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function pe(e, n, a) {
  return (
    (n = ou(n)),
    n in e
      ? Object.defineProperty(e, n, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[n] = a),
    e
  );
}
var I0 = 10,
  ru = (function () {
    function e() {
      $e(this, e), pe(this, "priority", void 0), pe(this, "subPriority", 0);
    }
    return (
      Ve(e, [
        {
          key: "validate",
          value: function (a, t) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  E0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a(t, o, i, r, l) {
      var s;
      return (
        $e(this, a),
        (s = n.call(this)),
        (s.value = t),
        (s.validateValue = o),
        (s.setValue = i),
        (s.priority = r),
        l && (s.subPriority = l),
        s
      );
    }
    return (
      Ve(a, [
        {
          key: "validate",
          value: function (o, i) {
            return this.validateValue(o, this.value, i);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return this.setValue(o, i, this.value, r);
          },
        },
      ]),
      a
    );
  })(ru),
  D0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", I0),
        pe(he(t), "subPriority", -1),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "set",
          value: function (o, i) {
            if (i.timestampIsSet) return o;
            var r = new Date(0);
            return (
              r.setFullYear(
                o.getUTCFullYear(),
                o.getUTCMonth(),
                o.getUTCDate()
              ),
              r.setHours(
                o.getUTCHours(),
                o.getUTCMinutes(),
                o.getUTCSeconds(),
                o.getUTCMilliseconds()
              ),
              r
            );
          },
        },
      ]),
      a
    );
  })(ru),
  qe = (function () {
    function e() {
      $e(this, e),
        pe(this, "incompatibleTokens", void 0),
        pe(this, "priority", void 0),
        pe(this, "subPriority", void 0);
    }
    return (
      Ve(e, [
        {
          key: "run",
          value: function (a, t, o, i) {
            var r = this.parse(a, t, o, i);
            return r
              ? {
                  setter: new E0(
                    r.value,
                    this.validate,
                    this.set,
                    this.priority,
                    this.subPriority
                  ),
                  rest: r.rest,
                }
              : null;
          },
        },
        {
          key: "validate",
          value: function (a, t, o) {
            return !0;
          },
        },
      ]),
      e
    );
  })(),
  M0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 140),
        pe(he(t), "incompatibleTokens", ["R", "u", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "G":
              case "GG":
              case "GGG":
                return (
                  r.era(o, { width: "abbreviated" }) ||
                  r.era(o, { width: "narrow" })
                );
              case "GGGGG":
                return r.era(o, { width: "narrow" });
              case "GGGG":
              default:
                return (
                  r.era(o, { width: "wide" }) ||
                  r.era(o, { width: "abbreviated" }) ||
                  r.era(o, { width: "narrow" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return (
              (i.era = r),
              o.setUTCFullYear(r, 0, 1),
              o.setUTCHours(0, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  dt = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/,
  },
  aa = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/,
  };
function mt(e, n) {
  return e && { value: n(e.value), rest: e.rest };
}
function it(e, n) {
  var a = n.match(e);
  return a ? { value: parseInt(a[0], 10), rest: n.slice(a[0].length) } : null;
}
function na(e, n) {
  var a = n.match(e);
  if (!a) return null;
  if (a[0] === "Z") return { value: 0, rest: n.slice(1) };
  var t = a[1] === "+" ? 1 : -1,
    o = a[2] ? parseInt(a[2], 10) : 0,
    i = a[3] ? parseInt(a[3], 10) : 0,
    r = a[5] ? parseInt(a[5], 10) : 0;
  return { value: t * (o * ai + i * ti + r * p_), rest: n.slice(a[0].length) };
}
function iu(e) {
  return it(dt.anyDigitsSigned, e);
}
function ut(e, n) {
  switch (e) {
    case 1:
      return it(dt.singleDigit, n);
    case 2:
      return it(dt.twoDigits, n);
    case 3:
      return it(dt.threeDigits, n);
    case 4:
      return it(dt.fourDigits, n);
    default:
      return it(new RegExp("^\\d{1," + e + "}"), n);
  }
}
function po(e, n) {
  switch (e) {
    case 1:
      return it(dt.singleDigitSigned, n);
    case 2:
      return it(dt.twoDigitsSigned, n);
    case 3:
      return it(dt.threeDigitsSigned, n);
    case 4:
      return it(dt.fourDigitsSigned, n);
    default:
      return it(new RegExp("^-?\\d{1," + e + "}"), n);
  }
}
function oi(e) {
  switch (e) {
    case "morning":
      return 4;
    case "evening":
      return 17;
    case "pm":
    case "noon":
    case "afternoon":
      return 12;
    case "am":
    case "midnight":
    case "night":
    default:
      return 0;
  }
}
function lu(e, n) {
  var a = n > 0,
    t = a ? n : 1 - n,
    o;
  if (t <= 50) o = e || 100;
  else {
    var i = t + 50,
      r = Math.floor(i / 100) * 100,
      l = e >= i % 100;
    o = e + r - (l ? 100 : 0);
  }
  return a ? o : 1 - o;
}
function su(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
var O0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 130),
        pe(he(t), "incompatibleTokens", [
          "Y",
          "R",
          "u",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (m) {
              return { year: m, isTwoDigitYear: i === "yy" };
            };
            switch (i) {
              case "y":
                return mt(ut(4, o), l);
              case "yo":
                return mt(r.ordinalNumber(o, { unit: "year" }), l);
              default:
                return mt(ut(i.length, o), l);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = o.getUTCFullYear();
            if (r.isTwoDigitYear) {
              var s = lu(r.year, l);
              return o.setUTCFullYear(s, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
            }
            var m = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return o.setUTCFullYear(m, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  A0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 130),
        pe(he(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (m) {
              return { year: m, isTwoDigitYear: i === "YY" };
            };
            switch (i) {
              case "Y":
                return mt(ut(4, o), l);
              case "Yo":
                return mt(r.ordinalNumber(o, { unit: "year" }), l);
              default:
                return mt(ut(i.length, o), l);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i.isTwoDigitYear || i.year > 0;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            var s = ni(o, l);
            if (r.isTwoDigitYear) {
              var m = lu(r.year, s);
              return (
                o.setUTCFullYear(m, 0, l.firstWeekContainsDate),
                o.setUTCHours(0, 0, 0, 0),
                Va(o, l)
              );
            }
            var g = !("era" in i) || i.era === 1 ? r.year : 1 - r.year;
            return (
              o.setUTCFullYear(g, 0, l.firstWeekContainsDate),
              o.setUTCHours(0, 0, 0, 0),
              Va(o, l)
            );
          },
        },
      ]),
      a
    );
  })(qe),
  B0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 130),
        pe(he(t), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i) {
            return po(i === "R" ? 4 : i.length, o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = new Date(0);
            return l.setUTCFullYear(r, 0, 4), l.setUTCHours(0, 0, 0, 0), ln(l);
          },
        },
      ]),
      a
    );
  })(qe),
  L0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 130),
        pe(he(t), "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "R",
          "w",
          "I",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i) {
            return po(i === "u" ? 4 : i.length, o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCFullYear(r, 0, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  x0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 120),
        pe(he(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "Q":
              case "QQ":
                return ut(i.length, o);
              case "Qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "QQQ":
                return (
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) || r.quarter(o, { width: "narrow", context: "formatting" })
                );
              case "QQQQQ":
                return r.quarter(o, { width: "narrow", context: "formatting" });
              case "QQQQ":
              default:
                return (
                  r.quarter(o, { width: "wide", context: "formatting" }) ||
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.quarter(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  R0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 120),
        pe(he(t), "incompatibleTokens", [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "q":
              case "qq":
                return ut(i.length, o);
              case "qo":
                return r.ordinalNumber(o, { unit: "quarter" });
              case "qqq":
                return (
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "standalone",
                  }) || r.quarter(o, { width: "narrow", context: "standalone" })
                );
              case "qqqqq":
                return r.quarter(o, { width: "narrow", context: "standalone" });
              case "qqqq":
              default:
                return (
                  r.quarter(o, { width: "wide", context: "standalone" }) ||
                  r.quarter(o, {
                    width: "abbreviated",
                    context: "standalone",
                  }) ||
                  r.quarter(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 4;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth((r - 1) * 3, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  H0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        pe(he(t), "priority", 110),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (m) {
              return m - 1;
            };
            switch (i) {
              case "M":
                return mt(it(dt.month, o), l);
              case "MM":
                return mt(ut(2, o), l);
              case "Mo":
                return mt(r.ordinalNumber(o, { unit: "month" }), l);
              case "MMM":
                return (
                  r.month(o, { width: "abbreviated", context: "formatting" }) ||
                  r.month(o, { width: "narrow", context: "formatting" })
                );
              case "MMMMM":
                return r.month(o, { width: "narrow", context: "formatting" });
              case "MMMM":
              default:
                return (
                  r.month(o, { width: "wide", context: "formatting" }) ||
                  r.month(o, { width: "abbreviated", context: "formatting" }) ||
                  r.month(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  N0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 110),
        pe(he(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (m) {
              return m - 1;
            };
            switch (i) {
              case "L":
                return mt(it(dt.month, o), l);
              case "LL":
                return mt(ut(2, o), l);
              case "Lo":
                return mt(r.ordinalNumber(o, { unit: "month" }), l);
              case "LLL":
                return (
                  r.month(o, { width: "abbreviated", context: "standalone" }) ||
                  r.month(o, { width: "narrow", context: "standalone" })
                );
              case "LLLLL":
                return r.month(o, { width: "narrow", context: "standalone" });
              case "LLLL":
              default:
                return (
                  r.month(o, { width: "wide", context: "standalone" }) ||
                  r.month(o, { width: "abbreviated", context: "standalone" }) ||
                  r.month(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(r, 1), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function $0(e, n, a) {
  ye(2, arguments);
  var t = ke(e),
    o = Ie(n),
    i = Xs(t, a) - o;
  return t.setUTCDate(t.getUTCDate() - i * 7), t;
}
var V0 = (function (e) {
  Ye(a, e);
  var n = Fe(a);
  function a() {
    var t;
    $e(this, a);
    for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
      i[r] = arguments[r];
    return (
      (t = n.call.apply(n, [this].concat(i))),
      pe(he(t), "priority", 100),
      pe(he(t), "incompatibleTokens", [
        "y",
        "R",
        "u",
        "q",
        "Q",
        "M",
        "L",
        "I",
        "d",
        "D",
        "i",
        "t",
        "T",
      ]),
      t
    );
  }
  return (
    Ve(a, [
      {
        key: "parse",
        value: function (o, i, r) {
          switch (i) {
            case "w":
              return it(dt.week, o);
            case "wo":
              return r.ordinalNumber(o, { unit: "week" });
            default:
              return ut(i.length, o);
          }
        },
      },
      {
        key: "validate",
        value: function (o, i) {
          return i >= 1 && i <= 53;
        },
      },
      {
        key: "set",
        value: function (o, i, r, l) {
          return Va($0(o, r, l), l);
        },
      },
    ]),
    a
  );
})(qe);
function U0(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n),
    o = Zs(a) - t;
  return a.setUTCDate(a.getUTCDate() - o * 7), a;
}
var Y0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 100),
        pe(he(t), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "I":
                return it(dt.week, o);
              case "Io":
                return r.ordinalNumber(o, { unit: "week" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 53;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return ln(U0(o, r));
          },
        },
      ]),
      a
    );
  })(qe),
  F0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  W0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  q0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 90),
        pe(he(t), "subPriority", 1),
        pe(he(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "d":
                return it(dt.date, o);
              case "do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              l = su(r),
              s = o.getUTCMonth();
            return l ? i >= 1 && i <= W0[s] : i >= 1 && i <= F0[s];
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCDate(r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  G0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 90),
        pe(he(t), "subpriority", 1),
        pe(he(t), "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "E",
          "i",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "D":
              case "DD":
                return it(dt.dayOfYear, o);
              case "Do":
                return r.ordinalNumber(o, { unit: "date" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            var r = o.getUTCFullYear(),
              l = su(r);
            return l ? i >= 1 && i <= 366 : i >= 1 && i <= 365;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMonth(0, r), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function ri(e, n, a) {
  var t, o, i, r, l, s, m, g;
  ye(2, arguments);
  var d = sa(),
    v = Ie(
      (t =
        (o =
          (i =
            (r = a?.weekStartsOn) !== null && r !== void 0
              ? r
              : a == null ||
                (l = a.locale) === null ||
                l === void 0 ||
                (s = l.options) === null ||
                s === void 0
              ? void 0
              : s.weekStartsOn) !== null && i !== void 0
            ? i
            : d.weekStartsOn) !== null && o !== void 0
          ? o
          : (m = d.locale) === null ||
            m === void 0 ||
            (g = m.options) === null ||
            g === void 0
          ? void 0
          : g.weekStartsOn) !== null && t !== void 0
        ? t
        : 0
    );
  if (!(v >= 0 && v <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  var h = ke(e),
    y = Ie(n),
    k = h.getUTCDay(),
    T = y % 7,
    _ = (T + 7) % 7,
    b = (_ < v ? 7 : 0) + y - k;
  return h.setUTCDate(h.getUTCDate() + b), h;
}
var j0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 90),
        pe(he(t), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "E":
              case "EE":
              case "EEE":
                return (
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "EEEEE":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return (
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "EEEE":
              default:
                return (
                  r.day(o, { width: "wide", context: "formatting" }) ||
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            return (o = ri(o, r, l)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  z0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 90),
        pe(he(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r, l) {
            var s = function (g) {
              var d = Math.floor((g - 1) / 7) * 7;
              return ((g + l.weekStartsOn + 6) % 7) + d;
            };
            switch (i) {
              case "e":
              case "ee":
                return mt(ut(i.length, o), s);
              case "eo":
                return mt(r.ordinalNumber(o, { unit: "day" }), s);
              case "eee":
                return (
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "eeeee":
                return r.day(o, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return (
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
              case "eeee":
              default:
                return (
                  r.day(o, { width: "wide", context: "formatting" }) ||
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                  r.day(o, { width: "short", context: "formatting" }) ||
                  r.day(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            return (o = ri(o, r, l)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  K0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 90),
        pe(he(t), "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r, l) {
            var s = function (g) {
              var d = Math.floor((g - 1) / 7) * 7;
              return ((g + l.weekStartsOn + 6) % 7) + d;
            };
            switch (i) {
              case "c":
              case "cc":
                return mt(ut(i.length, o), s);
              case "co":
                return mt(r.ordinalNumber(o, { unit: "day" }), s);
              case "ccc":
                return (
                  r.day(o, { width: "abbreviated", context: "standalone" }) ||
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
              case "ccccc":
                return r.day(o, { width: "narrow", context: "standalone" });
              case "cccccc":
                return (
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
              case "cccc":
              default:
                return (
                  r.day(o, { width: "wide", context: "standalone" }) ||
                  r.day(o, { width: "abbreviated", context: "standalone" }) ||
                  r.day(o, { width: "short", context: "standalone" }) ||
                  r.day(o, { width: "narrow", context: "standalone" })
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 6;
          },
        },
        {
          key: "set",
          value: function (o, i, r, l) {
            return (o = ri(o, r, l)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe);
function Q0(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  a % 7 === 0 && (a = a - 7);
  var t = 1,
    o = ke(e),
    i = o.getUTCDay(),
    r = a % 7,
    l = (r + 7) % 7,
    s = (l < t ? 7 : 0) + a - i;
  return o.setUTCDate(o.getUTCDate() + s), o;
}
var Z0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 90),
        pe(he(t), "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T",
        ]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            var l = function (m) {
              return m === 0 ? 7 : m;
            };
            switch (i) {
              case "i":
              case "ii":
                return ut(i.length, o);
              case "io":
                return r.ordinalNumber(o, { unit: "day" });
              case "iii":
                return mt(
                  r.day(o, { width: "abbreviated", context: "formatting" }) ||
                    r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
              case "iiiii":
                return mt(
                  r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
              case "iiiiii":
                return mt(
                  r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
              case "iiii":
              default:
                return mt(
                  r.day(o, { width: "wide", context: "formatting" }) ||
                    r.day(o, { width: "abbreviated", context: "formatting" }) ||
                    r.day(o, { width: "short", context: "formatting" }) ||
                    r.day(o, { width: "narrow", context: "formatting" }),
                  l
                );
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 7;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return (o = Q0(o, r)), o.setUTCHours(0, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  X0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 80),
        pe(he(t), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "a":
              case "aa":
              case "aaa":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "aaaaa":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "aaaa":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(oi(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  J0 = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 80),
        pe(he(t), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "b":
              case "bb":
              case "bbb":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "bbbbb":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "bbbb":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(oi(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  ew = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 80),
        pe(he(t), "incompatibleTokens", ["a", "b", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "B":
              case "BB":
              case "BBB":
                return (
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
              case "BBBBB":
                return r.dayPeriod(o, {
                  width: "narrow",
                  context: "formatting",
                });
              case "BBBB":
              default:
                return (
                  r.dayPeriod(o, { width: "wide", context: "formatting" }) ||
                  r.dayPeriod(o, {
                    width: "abbreviated",
                    context: "formatting",
                  }) ||
                  r.dayPeriod(o, { width: "narrow", context: "formatting" })
                );
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(oi(r), 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  tw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 70),
        pe(he(t), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "h":
                return it(dt.hour12h, o);
              case "ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 12;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = o.getUTCHours() >= 12;
            return (
              l && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : !l && r === 12
                ? o.setUTCHours(0, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  aw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 70),
        pe(he(t), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "H":
                return it(dt.hour23h, o);
              case "Ho":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 23;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCHours(r, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  nw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 70),
        pe(he(t), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "K":
                return it(dt.hour11h, o);
              case "Ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 11;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = o.getUTCHours() >= 12;
            return (
              l && r < 12
                ? o.setUTCHours(r + 12, 0, 0, 0)
                : o.setUTCHours(r, 0, 0, 0),
              o
            );
          },
        },
      ]),
      a
    );
  })(qe),
  ow = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 70),
        pe(he(t), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "k":
                return it(dt.hour24h, o);
              case "ko":
                return r.ordinalNumber(o, { unit: "hour" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 1 && i <= 24;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            var l = r <= 24 ? r % 24 : r;
            return o.setUTCHours(l, 0, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  rw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 60),
        pe(he(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "m":
                return it(dt.minute, o);
              case "mo":
                return r.ordinalNumber(o, { unit: "minute" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMinutes(r, 0, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  iw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 50),
        pe(he(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i, r) {
            switch (i) {
              case "s":
                return it(dt.second, o);
              case "so":
                return r.ordinalNumber(o, { unit: "second" });
              default:
                return ut(i.length, o);
            }
          },
        },
        {
          key: "validate",
          value: function (o, i) {
            return i >= 0 && i <= 59;
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCSeconds(r, 0), o;
          },
        },
      ]),
      a
    );
  })(qe),
  lw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 30),
        pe(he(t), "incompatibleTokens", ["t", "T"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i) {
            var r = function (s) {
              return Math.floor(s * Math.pow(10, -i.length + 3));
            };
            return mt(ut(i.length, o), r);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return o.setUTCMilliseconds(r), o;
          },
        },
      ]),
      a
    );
  })(qe),
  sw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 10),
        pe(he(t), "incompatibleTokens", ["t", "T", "x"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i) {
            switch (i) {
              case "X":
                return na(aa.basicOptionalMinutes, o);
              case "XX":
                return na(aa.basic, o);
              case "XXXX":
                return na(aa.basicOptionalSeconds, o);
              case "XXXXX":
                return na(aa.extendedOptionalSeconds, o);
              case "XXX":
              default:
                return na(aa.extended, o);
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  uw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 10),
        pe(he(t), "incompatibleTokens", ["t", "T", "X"]),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o, i) {
            switch (i) {
              case "x":
                return na(aa.basicOptionalMinutes, o);
              case "xx":
                return na(aa.basic, o);
              case "xxxx":
                return na(aa.basicOptionalSeconds, o);
              case "xxxxx":
                return na(aa.extendedOptionalSeconds, o);
              case "xxx":
              default:
                return na(aa.extended, o);
            }
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return i.timestampIsSet ? o : new Date(o.getTime() - r);
          },
        },
      ]),
      a
    );
  })(qe),
  cw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 40),
        pe(he(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o) {
            return iu(o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return [new Date(r * 1e3), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  dw = (function (e) {
    Ye(a, e);
    var n = Fe(a);
    function a() {
      var t;
      $e(this, a);
      for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++)
        i[r] = arguments[r];
      return (
        (t = n.call.apply(n, [this].concat(i))),
        pe(he(t), "priority", 20),
        pe(he(t), "incompatibleTokens", "*"),
        t
      );
    }
    return (
      Ve(a, [
        {
          key: "parse",
          value: function (o) {
            return iu(o);
          },
        },
        {
          key: "set",
          value: function (o, i, r) {
            return [new Date(r), { timestampIsSet: !0 }];
          },
        },
      ]),
      a
    );
  })(qe),
  mw = {
    G: new M0(),
    y: new O0(),
    Y: new A0(),
    R: new B0(),
    u: new L0(),
    Q: new x0(),
    q: new R0(),
    M: new H0(),
    L: new N0(),
    w: new V0(),
    I: new Y0(),
    d: new q0(),
    D: new G0(),
    E: new j0(),
    e: new z0(),
    c: new K0(),
    i: new Z0(),
    a: new X0(),
    b: new J0(),
    B: new ew(),
    h: new tw(),
    H: new aw(),
    K: new nw(),
    k: new ow(),
    m: new rw(),
    s: new iw(),
    S: new lw(),
    X: new sw(),
    x: new uw(),
    t: new cw(),
    T: new dw(),
  },
  gw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  vw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  pw = /^'([^]*?)'?$/,
  fw = /''/g,
  hw = /\S/,
  yw = /[a-zA-Z]/;
function Er(e, n, a, t) {
  var o, i, r, l, s, m, g, d, v, h, y, k, T, _;
  ye(3, arguments);
  var b = String(e),
    A = String(n),
    D = sa(),
    I =
      (o = (i = void 0) !== null && i !== void 0 ? i : D.locale) !== null &&
      o !== void 0
        ? o
        : au;
  if (!I.match) throw new RangeError("locale must contain match property");
  var R = Ie(
    (r =
      (l =
        (s = (m = void 0) !== null && m !== void 0 ? m : void 0) !== null &&
        s !== void 0
          ? s
          : D.firstWeekContainsDate) !== null && l !== void 0
        ? l
        : (g = D.locale) === null ||
          g === void 0 ||
          (d = g.options) === null ||
          d === void 0
        ? void 0
        : d.firstWeekContainsDate) !== null && r !== void 0
      ? r
      : 1
  );
  if (!(R >= 1 && R <= 7))
    throw new RangeError(
      "firstWeekContainsDate must be between 1 and 7 inclusively"
    );
  var L = Ie(
    (v =
      (h =
        (y = (k = void 0) !== null && k !== void 0 ? k : void 0) !== null &&
        y !== void 0
          ? y
          : D.weekStartsOn) !== null && h !== void 0
        ? h
        : (T = D.locale) === null ||
          T === void 0 ||
          (_ = T.options) === null ||
          _ === void 0
        ? void 0
        : _.weekStartsOn) !== null && v !== void 0
      ? v
      : 0
  );
  if (!(L >= 0 && L <= 6))
    throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if (A === "") return b === "" ? ke(a) : new Date(NaN);
  var K = { firstWeekContainsDate: R, weekStartsOn: L, locale: I },
    W = [new D0()],
    C = A.match(vw)
      .map(function (J) {
        var N = J[0];
        if (N in Pr) {
          var w = Pr[N];
          return w(J, I.formatLong);
        }
        return J;
      })
      .join("")
      .match(gw),
    H = [],
    F = xl(C),
    Q;
  try {
    var B = function () {
      var N = Q.value;
      !(t != null && t.useAdditionalWeekYearTokens) && tu(N) && go(N, A, e),
        !(t != null && t.useAdditionalDayOfYearTokens) && eu(N) && go(N, A, e);
      var w = N[0],
        ae = mw[w];
      if (ae) {
        var ve = ae.incompatibleTokens;
        if (Array.isArray(ve)) {
          var se = H.find(function (de) {
            return ve.includes(de.token) || de.token === w;
          });
          if (se)
            throw new RangeError(
              "The format string mustn't contain `"
                .concat(se.fullToken, "` and `")
                .concat(N, "` at the same time")
            );
        } else if (ae.incompatibleTokens === "*" && H.length > 0)
          throw new RangeError(
            "The format string mustn't contain `".concat(
              N,
              "` and any other token at the same time"
            )
          );
        H.push({ token: w, fullToken: N });
        var be = ae.run(b, N, I.match, K);
        if (!be) return { v: new Date(NaN) };
        W.push(be.setter), (b = be.rest);
      } else {
        if (w.match(yw))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              w +
              "`"
          );
        if (
          (N === "''" ? (N = "'") : w === "'" && (N = bw(N)),
          b.indexOf(N) === 0)
        )
          b = b.slice(N.length);
        else return { v: new Date(NaN) };
      }
    };
    for (F.s(); !(Q = F.n()).done; ) {
      var P = B();
      if (Wt(P) === "object") return P.v;
    }
  } catch (J) {
    F.e(J);
  } finally {
    F.f();
  }
  if (b.length > 0 && hw.test(b)) return new Date(NaN);
  var V = W.map(function (J) {
      return J.priority;
    })
      .sort(function (J, N) {
        return N - J;
      })
      .filter(function (J, N, w) {
        return w.indexOf(J) === N;
      })
      .map(function (J) {
        return W.filter(function (N) {
          return N.priority === J;
        }).sort(function (N, w) {
          return w.subPriority - N.subPriority;
        });
      })
      .map(function (J) {
        return J[0];
      }),
    U = ke(a);
  if (isNaN(U.getTime())) return new Date(NaN);
  var G = Ks(U, mo(U)),
    S = {},
    p = xl(V),
    Y;
  try {
    for (p.s(); !(Y = p.n()).done; ) {
      var j = Y.value;
      if (!j.validate(G, K)) return new Date(NaN);
      var ee = j.set(G, S, K);
      Array.isArray(ee) ? ((G = ee[0]), v0(S, ee[1])) : (G = ee);
    }
  } catch (J) {
    p.e(J);
  } finally {
    p.f();
  }
  return G;
}
function bw(e) {
  return e.match(pw)[1].replace(fw, "'");
}
function Rl(e, n) {
  ye(2, arguments);
  var a = Un(e),
    t = Un(n);
  return a.getTime() === t.getTime();
}
function _w(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return ma(e, -a);
}
function ww(e, n) {
  var a;
  ye(1, arguments);
  var t = Ie((a = void 0) !== null && a !== void 0 ? a : 2);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var o = Cw(e),
    i;
  if (o.date) {
    var r = Pw(o.date, t);
    i = Iw(r.restDateString, r.year);
  }
  if (!i || isNaN(i.getTime())) return new Date(NaN);
  var l = i.getTime(),
    s = 0,
    m;
  if (o.time && ((s = Ew(o.time)), isNaN(s))) return new Date(NaN);
  if (o.timezone) {
    if (((m = Dw(o.timezone)), isNaN(m))) return new Date(NaN);
  } else {
    var g = new Date(l + s),
      d = new Date(0);
    return (
      d.setFullYear(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate()),
      d.setHours(
        g.getUTCHours(),
        g.getUTCMinutes(),
        g.getUTCSeconds(),
        g.getUTCMilliseconds()
      ),
      d
    );
  }
  return new Date(l + s + m);
}
var ao = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/,
  },
  kw = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
  Sw =
    /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
  Tw = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function Cw(e) {
  var n = {},
    a = e.split(ao.dateTimeDelimiter),
    t;
  if (a.length > 2) return n;
  if (
    (/:/.test(a[0])
      ? (t = a[0])
      : ((n.date = a[0]),
        (t = a[1]),
        ao.timeZoneDelimiter.test(n.date) &&
          ((n.date = e.split(ao.timeZoneDelimiter)[0]),
          (t = e.substr(n.date.length, e.length)))),
    t)
  ) {
    var o = ao.timezone.exec(t);
    o ? ((n.time = t.replace(o[1], "")), (n.timezone = o[1])) : (n.time = t);
  }
  return n;
}
function Pw(e, n) {
  var a = new RegExp(
      "^(?:(\\d{4}|[+-]\\d{" +
        (4 + n) +
        "})|(\\d{2}|[+-]\\d{" +
        (2 + n) +
        "})$)"
    ),
    t = e.match(a);
  if (!t) return { year: NaN, restDateString: "" };
  var o = t[1] ? parseInt(t[1]) : null,
    i = t[2] ? parseInt(t[2]) : null;
  return {
    year: i === null ? o : i * 100,
    restDateString: e.slice((t[1] || t[2]).length),
  };
}
function Iw(e, n) {
  if (n === null) return new Date(NaN);
  var a = e.match(kw);
  if (!a) return new Date(NaN);
  var t = !!a[4],
    o = Tn(a[1]),
    i = Tn(a[2]) - 1,
    r = Tn(a[3]),
    l = Tn(a[4]),
    s = Tn(a[5]) - 1;
  if (t) return Lw(n, l, s) ? Mw(n, l, s) : new Date(NaN);
  var m = new Date(0);
  return !Aw(n, i, r) || !Bw(n, o)
    ? new Date(NaN)
    : (m.setUTCFullYear(n, i, Math.max(o, r)), m);
}
function Tn(e) {
  return e ? parseInt(e) : 1;
}
function Ew(e) {
  var n = e.match(Sw);
  if (!n) return NaN;
  var a = jo(n[1]),
    t = jo(n[2]),
    o = jo(n[3]);
  return xw(a, t, o) ? a * ai + t * ti + o * 1e3 : NaN;
}
function jo(e) {
  return (e && parseFloat(e.replace(",", "."))) || 0;
}
function Dw(e) {
  if (e === "Z") return 0;
  var n = e.match(Tw);
  if (!n) return 0;
  var a = n[1] === "+" ? -1 : 1,
    t = parseInt(n[2]),
    o = (n[3] && parseInt(n[3])) || 0;
  return Rw(t, o) ? a * (t * ai + o * ti) : NaN;
}
function Mw(e, n, a) {
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = (n - 1) * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var Ow = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function uu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Aw(e, n, a) {
  return n >= 0 && n <= 11 && a >= 1 && a <= (Ow[n] || (uu(e) ? 29 : 28));
}
function Bw(e, n) {
  return n >= 1 && n <= (uu(e) ? 366 : 365);
}
function Lw(e, n, a) {
  return n >= 1 && n <= 53 && a >= 0 && a <= 6;
}
function xw(e, n, a) {
  return e === 24
    ? n === 0 && a === 0
    : a >= 0 && a < 60 && n >= 0 && n < 60 && e >= 0 && e < 25;
}
function Rw(e, n) {
  return n >= 0 && n <= 59;
}
function cu(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n),
    o = a.getFullYear(),
    i = a.getDate(),
    r = new Date(0);
  r.setFullYear(o, t, 15), r.setHours(0, 0, 0, 0);
  var l = f0(r);
  return a.setMonth(t, Math.min(i, l)), a;
}
function at(e, n) {
  if ((ye(2, arguments), Wt(n) !== "object" || n === null))
    throw new RangeError("values parameter must be an object");
  var a = ke(e);
  return isNaN(a.getTime())
    ? new Date(NaN)
    : (n.year != null && a.setFullYear(n.year),
      n.month != null && (a = cu(a, n.month)),
      n.date != null && a.setDate(Ie(n.date)),
      n.hours != null && a.setHours(Ie(n.hours)),
      n.minutes != null && a.setMinutes(Ie(n.minutes)),
      n.seconds != null && a.setSeconds(Ie(n.seconds)),
      n.milliseconds != null && a.setMilliseconds(Ie(n.milliseconds)),
      a);
}
function du(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n);
  return a.setHours(t), a;
}
function ii(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n);
  return a.setMilliseconds(t), a;
}
function mu(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n);
  return a.setMinutes(t), a;
}
function li(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n);
  return a.setSeconds(t), a;
}
function ra(e, n) {
  ye(2, arguments);
  var a = ke(e),
    t = Ie(n);
  return isNaN(a.getTime()) ? new Date(NaN) : (a.setFullYear(t), a);
}
function un(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return zt(e, -a);
}
function Hw(e, n) {
  if ((ye(2, arguments), !n || Wt(n) !== "object")) return new Date(NaN);
  var a = n.years ? Ie(n.years) : 0,
    t = n.months ? Ie(n.months) : 0,
    o = n.weeks ? Ie(n.weeks) : 0,
    i = n.days ? Ie(n.days) : 0,
    r = n.hours ? Ie(n.hours) : 0,
    l = n.minutes ? Ie(n.minutes) : 0,
    s = n.seconds ? Ie(n.seconds) : 0,
    m = un(e, t + a * 12),
    g = _w(m, i + o * 7),
    d = l + r * 60,
    v = s + d * 60,
    h = v * 1e3,
    y = new Date(g.getTime() - h);
  return y;
}
function gu(e, n) {
  ye(2, arguments);
  var a = Ie(n);
  return ei(e, -a);
}
function pn() {
  return (
    c(),
    f(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z",
        }),
        E("path", {
          d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        E("path", {
          d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
        E("path", {
          d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z",
        }),
      ]
    )
  );
}
pn.compatConfig = { MODE: 3 };
function vu() {
  return (
    c(),
    f(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z",
        }),
        E("path", {
          d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
vu.compatConfig = { MODE: 3 };
function si() {
  return (
    c(),
    f(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
si.compatConfig = { MODE: 3 };
function ui() {
  return (
    c(),
    f(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z",
        }),
      ]
    )
  );
}
ui.compatConfig = { MODE: 3 };
function ci() {
  return (
    c(),
    f(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z",
        }),
        E("path", {
          d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z",
        }),
      ]
    )
  );
}
ci.compatConfig = { MODE: 3 };
function di() {
  return (
    c(),
    f(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z",
        }),
      ]
    )
  );
}
di.compatConfig = { MODE: 3 };
function mi() {
  return (
    c(),
    f(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon",
      },
      [
        E("path", {
          d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z",
        }),
      ]
    )
  );
}
mi.compatConfig = { MODE: 3 };
function gi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var pu = { exports: {} };
(function (e) {
  function n(a) {
    return a && a.__esModule ? a : { default: a };
  }
  (e.exports = n), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(pu);
var Nw = pu.exports,
  Dr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t) {
    if (t === null || t === !0 || t === !1) return NaN;
    var o = Number(t);
    return isNaN(o) ? o : o < 0 ? Math.ceil(o) : Math.floor(o);
  }
  e.exports = n.default;
})(Dr, Dr.exports);
var $w = Dr.exports;
const Vw = gi($w);
var Mr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t) {
    var o = new Date(
      Date.UTC(
        t.getFullYear(),
        t.getMonth(),
        t.getDate(),
        t.getHours(),
        t.getMinutes(),
        t.getSeconds(),
        t.getMilliseconds()
      )
    );
    return o.setUTCFullYear(t.getFullYear()), t.getTime() - o.getTime();
  }
  e.exports = n.default;
})(Mr, Mr.exports);
var Uw = Mr.exports;
const Hl = gi(Uw);
function Yw(e, n) {
  var a = Gw(n);
  return a.formatToParts ? Ww(a, e) : qw(a, e);
}
var Fw = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 };
function Ww(e, n) {
  try {
    for (var a = e.formatToParts(n), t = [], o = 0; o < a.length; o++) {
      var i = Fw[a[o].type];
      i >= 0 && (t[i] = parseInt(a[o].value, 10));
    }
    return t;
  } catch (r) {
    if (r instanceof RangeError) return [NaN];
    throw r;
  }
}
function qw(e, n) {
  var a = e.format(n).replace(/\u200E/g, ""),
    t = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
  return [t[3], t[1], t[2], t[4], t[5], t[6]];
}
var zo = {};
function Gw(e) {
  if (!zo[e]) {
    var n = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: "America/New_York",
        year: "numeric",
        month: "numeric",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }).format(new Date("2014-06-25T04:00:00.123Z")),
      a =
        n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
    zo[e] = a
      ? new Intl.DateTimeFormat("en-US", {
          hour12: !1,
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      : new Intl.DateTimeFormat("en-US", {
          hourCycle: "h23",
          timeZone: e,
          year: "numeric",
          month: "numeric",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
  }
  return zo[e];
}
function vi(e, n, a, t, o, i, r) {
  var l = new Date(0);
  return l.setUTCFullYear(e, n, a), l.setUTCHours(t, o, i, r), l;
}
var Nl = 36e5,
  jw = 6e4,
  Ko = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/,
  };
function pi(e, n, a) {
  var t, o;
  if (e === "" || ((t = Ko.timezoneZ.exec(e)), t)) return 0;
  var i;
  if (((t = Ko.timezoneHH.exec(e)), t))
    return (i = parseInt(t[1], 10)), $l(i) ? -(i * Nl) : NaN;
  if (((t = Ko.timezoneHHMM.exec(e)), t)) {
    i = parseInt(t[1], 10);
    var r = parseInt(t[2], 10);
    return $l(i, r) ? ((o = Math.abs(i) * Nl + r * jw), i > 0 ? -o : o) : NaN;
  }
  if (Qw(e)) {
    n = new Date(n || Date.now());
    var l = a ? n : zw(n),
      s = Or(l, e),
      m = a ? s : Kw(n, s, e);
    return -m;
  }
  return NaN;
}
function zw(e) {
  return vi(
    e.getFullYear(),
    e.getMonth(),
    e.getDate(),
    e.getHours(),
    e.getMinutes(),
    e.getSeconds(),
    e.getMilliseconds()
  );
}
function Or(e, n) {
  var a = Yw(e, n),
    t = vi(a[0], a[1] - 1, a[2], a[3] % 24, a[4], a[5], 0).getTime(),
    o = e.getTime(),
    i = o % 1e3;
  return (o -= i >= 0 ? i : 1e3 + i), t - o;
}
function Kw(e, n, a) {
  var t = e.getTime(),
    o = t - n,
    i = Or(new Date(o), a);
  if (n === i) return n;
  o -= i - n;
  var r = Or(new Date(o), a);
  return i === r ? i : Math.max(i, r);
}
function $l(e, n) {
  return -23 <= e && e <= 23 && (n == null || (0 <= n && n <= 59));
}
var Vl = {};
function Qw(e) {
  if (Vl[e]) return !0;
  try {
    return new Intl.DateTimeFormat(void 0, { timeZone: e }), (Vl[e] = !0), !0;
  } catch {
    return !1;
  }
}
var fu =
    /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
  Qo = 36e5,
  Ul = 6e4,
  Zw = 2,
  It = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: fu,
  };
function Ar(e, n) {
  if (arguments.length < 1)
    throw new TypeError(
      "1 argument required, but only " + arguments.length + " present"
    );
  if (e === null) return new Date(NaN);
  var a = n || {},
    t = a.additionalDigits == null ? Zw : Vw(a.additionalDigits);
  if (t !== 2 && t !== 1 && t !== 0)
    throw new RangeError("additionalDigits must be 0, 1 or 2");
  if (
    e instanceof Date ||
    (typeof e == "object" &&
      Object.prototype.toString.call(e) === "[object Date]")
  )
    return new Date(e.getTime());
  if (
    typeof e == "number" ||
    Object.prototype.toString.call(e) === "[object Number]"
  )
    return new Date(e);
  if (
    !(
      typeof e == "string" ||
      Object.prototype.toString.call(e) === "[object String]"
    )
  )
    return new Date(NaN);
  var o = Xw(e),
    i = Jw(o.date, t),
    r = i.year,
    l = i.restDateString,
    s = e1(l, r);
  if (isNaN(s)) return new Date(NaN);
  if (s) {
    var m = s.getTime(),
      g = 0,
      d;
    if (o.time && ((g = t1(o.time)), isNaN(g))) return new Date(NaN);
    if (o.timeZone || a.timeZone) {
      if (((d = pi(o.timeZone || a.timeZone, new Date(m + g))), isNaN(d)))
        return new Date(NaN);
    } else (d = Hl(new Date(m + g))), (d = Hl(new Date(m + g + d)));
    return new Date(m + g + d);
  } else return new Date(NaN);
}
function Xw(e) {
  var n = {},
    a = It.dateTimePattern.exec(e),
    t;
  if (
    (a
      ? ((n.date = a[1]), (t = a[3]))
      : ((a = It.datePattern.exec(e)),
        a ? ((n.date = a[1]), (t = a[2])) : ((n.date = null), (t = e))),
    t)
  ) {
    var o = It.timeZone.exec(t);
    o
      ? ((n.time = t.replace(o[1], "")), (n.timeZone = o[1].trim()))
      : (n.time = t);
  }
  return n;
}
function Jw(e, n) {
  var a = It.YYY[n],
    t = It.YYYYY[n],
    o;
  if (((o = It.YYYY.exec(e) || t.exec(e)), o)) {
    var i = o[1];
    return { year: parseInt(i, 10), restDateString: e.slice(i.length) };
  }
  if (((o = It.YY.exec(e) || a.exec(e)), o)) {
    var r = o[1];
    return { year: parseInt(r, 10) * 100, restDateString: e.slice(r.length) };
  }
  return { year: null };
}
function e1(e, n) {
  if (n === null) return null;
  var a, t, o, i;
  if (e.length === 0) return (t = new Date(0)), t.setUTCFullYear(n), t;
  if (((a = It.MM.exec(e)), a))
    return (
      (t = new Date(0)),
      (o = parseInt(a[1], 10) - 1),
      Fl(n, o) ? (t.setUTCFullYear(n, o), t) : new Date(NaN)
    );
  if (((a = It.DDD.exec(e)), a)) {
    t = new Date(0);
    var r = parseInt(a[1], 10);
    return o1(n, r) ? (t.setUTCFullYear(n, 0, r), t) : new Date(NaN);
  }
  if (((a = It.MMDD.exec(e)), a)) {
    (t = new Date(0)), (o = parseInt(a[1], 10) - 1);
    var l = parseInt(a[2], 10);
    return Fl(n, o, l) ? (t.setUTCFullYear(n, o, l), t) : new Date(NaN);
  }
  if (((a = It.Www.exec(e)), a))
    return (i = parseInt(a[1], 10) - 1), Wl(n, i) ? Yl(n, i) : new Date(NaN);
  if (((a = It.WwwD.exec(e)), a)) {
    i = parseInt(a[1], 10) - 1;
    var s = parseInt(a[2], 10) - 1;
    return Wl(n, i, s) ? Yl(n, i, s) : new Date(NaN);
  }
  return null;
}
function t1(e) {
  var n, a, t;
  if (((n = It.HH.exec(e)), n))
    return (
      (a = parseFloat(n[1].replace(",", "."))), Zo(a) ? (a % 24) * Qo : NaN
    );
  if (((n = It.HHMM.exec(e)), n))
    return (
      (a = parseInt(n[1], 10)),
      (t = parseFloat(n[2].replace(",", "."))),
      Zo(a, t) ? (a % 24) * Qo + t * Ul : NaN
    );
  if (((n = It.HHMMSS.exec(e)), n)) {
    (a = parseInt(n[1], 10)), (t = parseInt(n[2], 10));
    var o = parseFloat(n[3].replace(",", "."));
    return Zo(a, t, o) ? (a % 24) * Qo + t * Ul + o * 1e3 : NaN;
  }
  return null;
}
function Yl(e, n, a) {
  (n = n || 0), (a = a || 0);
  var t = new Date(0);
  t.setUTCFullYear(e, 0, 4);
  var o = t.getUTCDay() || 7,
    i = n * 7 + a + 1 - o;
  return t.setUTCDate(t.getUTCDate() + i), t;
}
var a1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  n1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function hu(e) {
  return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function Fl(e, n, a) {
  if (n < 0 || n > 11) return !1;
  if (a != null) {
    if (a < 1) return !1;
    var t = hu(e);
    if ((t && a > n1[n]) || (!t && a > a1[n])) return !1;
  }
  return !0;
}
function o1(e, n) {
  if (n < 1) return !1;
  var a = hu(e);
  return !((a && n > 366) || (!a && n > 365));
}
function Wl(e, n, a) {
  return !(n < 0 || n > 52 || (a != null && (a < 0 || a > 6)));
}
function Zo(e, n, a) {
  return !(
    (e != null && (e < 0 || e >= 25)) ||
    (n != null && (n < 0 || n >= 60)) ||
    (a != null && (a < 0 || a >= 60))
  );
}
var Br = { exports: {} },
  Lr = { exports: {} };
(function (e, n) {
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = a);
  function a(t, o) {
    if (t == null)
      throw new TypeError(
        "assign requires that input parameter not be null or undefined"
      );
    for (var i in o)
      Object.prototype.hasOwnProperty.call(o, i) && (t[i] = o[i]);
    return t;
  }
  e.exports = n.default;
})(Lr, Lr.exports);
var r1 = Lr.exports;
(function (e, n) {
  var a = Nw.default;
  Object.defineProperty(n, "__esModule", { value: !0 }), (n.default = o);
  var t = a(r1);
  function o(i) {
    return (0, t.default)({}, i);
  }
  e.exports = n.default;
})(Br, Br.exports);
var i1 = Br.exports;
const l1 = gi(i1);
function s1(e, n, a) {
  var t = Ar(e, a),
    o = pi(n, t, !0),
    i = new Date(t.getTime() - o),
    r = new Date(0);
  return (
    r.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()),
    r.setHours(
      i.getUTCHours(),
      i.getUTCMinutes(),
      i.getUTCSeconds(),
      i.getUTCMilliseconds()
    ),
    r
  );
}
function u1(e, n, a) {
  if (typeof e == "string" && !e.match(fu)) {
    var t = l1(a);
    return (t.timeZone = n), Ar(e, t);
  }
  var o = Ar(e, a),
    i = vi(
      o.getFullYear(),
      o.getMonth(),
      o.getDate(),
      o.getHours(),
      o.getMinutes(),
      o.getSeconds(),
      o.getMilliseconds()
    ).getTime(),
    r = pi(n, new Date(i));
  return new Date(i + r);
}
function ql(e) {
  return (n) =>
    new Intl.DateTimeFormat(e, { weekday: "short", timeZone: "UTC" })
      .format(new Date(`2017-01-0${n}T00:00:00+00:00`))
      .slice(0, 2);
}
function c1(e) {
  return (n) =>
    Ca(new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", { locale: e });
}
const d1 = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7];
    let o;
    if (e !== null)
      try {
        o = t.map(c1(e));
      } catch {
        o = t.map(ql(n));
      }
    else o = t.map(ql(n));
    const i = o.slice(0, a),
      r = o.slice(a + 1, o.length);
    return [o[a]].concat(...r).concat(...i);
  },
  fi = (e, n) => {
    const a = [];
    for (let t = +e[0]; t <= +e[1]; t++) a.push({ value: +t, text: `${t}` });
    return n ? a.reverse() : a;
  },
  yu = (e, n, a) => {
    const t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
      const r = i < 10 ? `0${i}` : i;
      return new Date(`2017-${r}-01T00:00:00+00:00`);
    });
    if (e !== null)
      try {
        const i = a === "long" ? "MMMM" : "MMM";
        return t.map((r, l) => {
          const s = Ca(r, i, { locale: e });
          return { text: s.charAt(0).toUpperCase() + s.substring(1), value: l };
        });
      } catch {}
    const o = new Intl.DateTimeFormat(n, { month: a, timeZone: "UTC" });
    return t.map((i, r) => {
      const l = o.format(i);
      return { text: l.charAt(0).toUpperCase() + l.substring(1), value: r };
    });
  },
  m1 = (e) =>
    [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ][e],
  ft = (e) => {
    const n = x(e);
    return n != null && n.$el ? n?.$el : n;
  },
  g1 = (e) => Object.assign({ type: "dot" }, e),
  bu = (e) => (Array.isArray(e) ? !!e[0] && !!e[1] : !1),
  fo = {
    prop: (e) => `"${e}" prop must be enabled!`,
    dateArr: (e) =>
      `You need to use array as "model-value" binding in order to support "${e}"`,
  },
  yt = (e) => e,
  Gl = (e) => (e === 0 ? e : !e || isNaN(+e) ? null : +e),
  jl = (e) => e === null,
  v1 = (e) => {
    if (e)
      return [
        ...e.querySelectorAll("input, button, select, textarea, a[href]"),
      ][0];
  },
  p1 = (e) => {
    const n = [],
      a = (t) => t.filter((o) => o);
    for (let t = 0; t < e.length; t += 3) {
      const o = [e[t], e[t + 1], e[t + 2]];
      n.push(a(o));
    }
    return n;
  },
  Wn = (e, n, a) => {
    const t = a != null,
      o = n != null;
    if (!t && !o) return !1;
    const i = +a,
      r = +n;
    return t && o ? +e > i || +e < r : t ? +e > i : o ? +e < r : !1;
  },
  cn = (e, n) =>
    p1(e).map((a) =>
      a.map((t) => {
        const { active: o, disabled: i, isBetween: r, highlighted: l } = n(t);
        return {
          ...t,
          active: o,
          disabled: i,
          className: {
            dp__overlay_cell_active: o,
            dp__overlay_cell: !o,
            dp__overlay_cell_disabled: i,
            dp__overlay_cell_pad: !0,
            dp__overlay_cell_active_disabled: i && o,
            dp__cell_in_between: r,
            "dp--highlighted": l,
          },
        };
      })
    ),
  Pa = (e, n, a = !1) => {
    e &&
      n.allowStopPropagation &&
      (a && e.stopImmediatePropagation(), e.stopPropagation());
  },
  f1 = () =>
    [
      "a[href]",
      "area[href]",
      "input:not([disabled]):not([type='hidden'])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "button:not([disabled])",
      "[tabindex]:not([tabindex='-1'])",
      "[data-datepicker-instance]",
    ].join(", ");
function h1(e, n) {
  let a = [...document.querySelectorAll(f1())];
  a = a.filter(
    (o) => !e.contains(o) || o.hasAttribute("data-datepicker-instance")
  );
  const t = a.indexOf(e);
  if (t >= 0 && (n ? t - 1 >= 0 : t + 1 <= a.length))
    return a[t + (n ? -1 : 1)];
}
const y1 = (e, n) => {
    let a;
    return function (...t) {
      clearTimeout(a),
        (a = setTimeout(() => {
          e(...t);
        }, n));
    };
  },
  zl = (e, n, a, t, o) => {
    const i = Er(e, n.slice(0, e.length), new Date());
    return On(i) && js(i)
      ? t || o
        ? i
        : at(i, {
            hours: +a.hours,
            minutes: +a?.minutes,
            seconds: +a?.seconds,
            milliseconds: 0,
          })
      : null;
  },
  b1 = (e, n, a, t, o) => {
    const i = Array.isArray(a) ? a[0] : a;
    if (typeof n == "string") return zl(e, n, i, t, o);
    if (Array.isArray(n)) {
      let r = null;
      for (const l of n) if (((r = zl(e, l, i, t, o)), r)) break;
      return r;
    }
    return typeof n == "function" ? n(e) : null;
  },
  ne = (e) => (e ? new Date(e) : new Date()),
  _1 = (e, n, a) => {
    if (n) {
      const o = (e.getMonth() + 1).toString().padStart(2, "0"),
        i = e.getDate().toString().padStart(2, "0"),
        r = e.getHours().toString().padStart(2, "0"),
        l = e.getMinutes().toString().padStart(2, "0"),
        s = a ? e.getSeconds().toString().padStart(2, "0") : "00";
      return `${e.getFullYear()}-${o}-${i}T${r}:${l}:${s}.000Z`;
    }
    const t = Date.UTC(
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds()
    );
    return new Date(t).toISOString();
  },
  Ct = (e) => {
    let n = ne(JSON.parse(JSON.stringify(e)));
    return (n = du(n, 0)), (n = mu(n, 0)), (n = li(n, 0)), (n = ii(n, 0)), n;
  },
  Ia = (e, n, a, t) => {
    let o = e ? ne(e) : ne();
    return (
      (n || n === 0) && (o = du(o, +n)),
      (a || a === 0) && (o = mu(o, +a)),
      (t || t === 0) && (o = li(o, +t)),
      ii(o, 0)
    );
  },
  wt = (e, n) => (!e || !n ? !1 : Fn(Ct(e), Ct(n))),
  We = (e, n) => (!e || !n ? !1 : Xa(Ct(e), Ct(n))),
  Tt = (e, n) => (!e || !n ? !1 : Yn(Ct(e), Ct(n))),
  So = (e, n, a) =>
    e != null && e[0] && e != null && e[1]
      ? Tt(a, e[0]) && wt(a, e[1])
      : e != null && e[0] && n
      ? (Tt(a, e[0]) && wt(a, n)) || (wt(a, e[0]) && Tt(a, n))
      : !1,
  jt = (e) => {
    const n = at(new Date(e), { date: 1 });
    return Ct(n);
  },
  Xo = (e, n, a) =>
    n && (a || a === 0)
      ? Object.fromEntries(
          ["hours", "minutes", "seconds"].map((t) =>
            t === n ? [t, a] : [t, isNaN(+e[t]) ? void 0 : +e[t]]
          )
        )
      : {
          hours: isNaN(+e.hours) ? void 0 : +e.hours,
          minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
          seconds: isNaN(+e.seconds) ? void 0 : +e.seconds,
        },
  Ra = (e) => ({ hours: Kt(e), minutes: ia(e), seconds: sn(e) }),
  _u = (e, n) => {
    if (n) {
      const a = Ne(ne(n));
      if (a > e) return 12;
      if (a === e) return Ue(ne(n));
    }
  },
  wu = (e, n) => {
    if (n) {
      const a = Ne(ne(n));
      return a < e ? -1 : a === e ? Ue(ne(n)) : void 0;
    }
  },
  dn = (e) => {
    if (e) return Ne(ne(e));
  },
  Qt = (e, n) => (n ? s1(e, n) : e),
  ku = (e, n) => (n ? u1(e, n) : e),
  w1 = (e) => (e instanceof Date ? e : ww(e)),
  Su = (e, n) => {
    const a = Tt(e, n) ? n : e,
      t = Tt(n, e) ? n : e;
    return zs({ start: a, end: t });
  },
  k1 = (e) => {
    const n = zt(e, 1);
    return { month: Ue(n), year: Ne(n) };
  },
  ro = (e, n, a) => {
    const t = $a(Qt(e, n), { weekStartsOn: +a }),
      o = b_(Qt(e, n), { weekStartsOn: +a });
    return [t, o];
  },
  Tu = (e, n) => {
    const a = { hours: Kt(ne()), minutes: ia(ne()), seconds: n ? sn(ne()) : 0 };
    return Object.assign(a, e);
  },
  Sa = (e, n, a) => [
    at(ne(e), { date: 1 }),
    at(ne(), { month: n, year: a, date: 1 }),
  ],
  ga = (e, n, a) => {
    let t = e ? ne(e) : ne();
    return (n || n === 0) && (t = cu(t, n)), a && (t = ra(t, a)), t;
  },
  Cu = (e, n, a, t, o) => {
    if (!t || (o && !n) || (!o && !a)) return !1;
    const i = o ? zt(e, 1) : un(e, 1),
      r = [Ue(i), Ne(i)];
    return o ? !T1(...r, n) : !S1(...r, a);
  },
  S1 = (e, n, a) => wt(...Sa(a, e, n)) || We(...Sa(a, e, n)),
  T1 = (e, n, a) => Tt(...Sa(a, e, n)) || We(...Sa(a, e, n)),
  Pu = (e, n, a, t, o, i, r) => {
    if (typeof n == "function" && !r) return n(e);
    const l = a ? { locale: a } : void 0;
    return Array.isArray(e)
      ? `${Ca(e[0], i, l)}${o && !e[1] ? "" : t}${e[1] ? Ca(e[1], i, l) : ""}`
      : Ca(e, i, l);
  },
  za = (e) => {
    if (e) return null;
    throw new Error(fo.prop("partial-range"));
  },
  no = (e, n) => {
    if (n) return e();
    throw new Error(fo.prop("range"));
  },
  xr = (e) =>
    Array.isArray(e) ? On(e[0]) && (e[1] ? On(e[1]) : !0) : e ? On(e) : !1,
  C1 = (e, n) =>
    at(n ?? ne(), {
      hours: +e.hours || 0,
      minutes: +e.minutes || 0,
      seconds: +e.seconds || 0,
    }),
  Jo = (e, n, a, t) => {
    if (!e) return !0;
    if (t) {
      const o = a === "max" ? Fn(e, n) : Yn(e, n),
        i = { seconds: 0, milliseconds: 0 };
      return o || Xa(at(e, i), at(n, i));
    }
    return a === "max"
      ? e.getTime() <= n.getTime()
      : e.getTime() >= n.getTime();
  },
  er = (e, n, a) => (e ? C1(e, n) : ne(a ?? n)),
  Kl = (e, n, a, t, o) => {
    if (Array.isArray(t)) {
      const r = er(e, t[0], n),
        l = er(e, t[1], n);
      return Jo(t[0], r, a, !!n) && Jo(t[1], l, a, !!n) && o;
    }
    const i = er(e, t, n);
    return Jo(t, i, a, !!n) && o;
  },
  tr = (e) => at(ne(), Ra(e)),
  P1 = (e, n) =>
    Array.isArray(e)
      ? e
          .map((a) => ne(a))
          .filter((a) => Ne(ne(a)) === n)
          .map((a) => Ue(a))
      : [],
  Iu = (e, n, a) =>
    typeof e == "function"
      ? e({ month: n, year: a })
      : !!e.months.find((t) => t.month === n && t.year === a),
  hi = (e, n) => (typeof e == "function" ? e(n) : e.years.includes(n)),
  Cn = va({ menuFocused: !1, shiftKeyInMenu: !1 }),
  Eu = () => {
    const e = (a) => {
        Cn.menuFocused = a;
      },
      n = (a) => {
        Cn.shiftKeyInMenu !== a && (Cn.shiftKeyInMenu = a);
      };
    return {
      control: u(() => ({
        shiftKeyInMenu: Cn.shiftKeyInMenu,
        menuFocused: Cn.menuFocused,
      })),
      setMenuFocused: e,
      setShiftKey: n,
    };
  },
  tt = va({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: { 0: [], 1: [] },
    monthPicker: [],
  }),
  ar = M(null),
  oo = M(!1),
  nr = M(!1),
  or = M(!1),
  rr = M(!1),
  Pt = M(0),
  _t = M(0),
  Ea = () => {
    const e = u(() =>
        oo.value
          ? [...tt.selectionGrid, tt.actionRow].filter((d) => d.length)
          : nr.value
          ? [
              ...tt.timePicker[0],
              ...tt.timePicker[1],
              rr.value ? [] : [ar.value],
              tt.actionRow,
            ].filter((d) => d.length)
          : or.value
          ? [...tt.monthPicker, tt.actionRow]
          : [tt.monthYear, ...tt.calendar, tt.time, tt.actionRow].filter(
              (d) => d.length
            )
      ),
      n = (d) => {
        Pt.value = d ? Pt.value + 1 : Pt.value - 1;
        let v = null;
        e.value[_t.value] && (v = e.value[_t.value][Pt.value]),
          v || (Pt.value = d ? Pt.value - 1 : Pt.value + 1);
      },
      a = (d) => {
        (_t.value === 0 && !d) ||
          (_t.value === e.value.length && d) ||
          ((_t.value = d ? _t.value + 1 : _t.value - 1),
          e.value[_t.value]
            ? e.value[_t.value] &&
              !e.value[_t.value][Pt.value] &&
              Pt.value !== 0 &&
              (Pt.value = e.value[_t.value].length - 1)
            : (_t.value = d ? _t.value - 1 : _t.value + 1));
      },
      t = (d) => {
        let v = null;
        e.value[_t.value] && (v = e.value[_t.value][Pt.value]),
          v
            ? v.focus({ preventScroll: !oo.value })
            : (Pt.value = d ? Pt.value - 1 : Pt.value + 1);
      },
      o = () => {
        n(!0), t(!0);
      },
      i = () => {
        n(!1), t(!1);
      },
      r = () => {
        a(!1), t(!0);
      },
      l = () => {
        a(!0), t(!0);
      },
      s = (d, v) => {
        tt[v] = d;
      },
      m = (d, v) => {
        tt[v] = d;
      },
      g = () => {
        (Pt.value = 0), (_t.value = 0);
      };
    return {
      buildMatrix: s,
      buildMultiLevelMatrix: m,
      setTimePickerBackRef: (d) => {
        ar.value = d;
      },
      setSelectionGrid: (d) => {
        (oo.value = d), g(), d || (tt.selectionGrid = []);
      },
      setTimePicker: (d, v = !1) => {
        (nr.value = d),
          (rr.value = v),
          g(),
          d || ((tt.timePicker[0] = []), (tt.timePicker[1] = []));
      },
      setTimePickerElements: (d, v = 0) => {
        tt.timePicker[v] = d;
      },
      arrowRight: o,
      arrowLeft: i,
      arrowUp: r,
      arrowDown: l,
      clearArrowNav: () => {
        (tt.monthYear = []),
          (tt.calendar = []),
          (tt.time = []),
          (tt.actionRow = []),
          (tt.selectionGrid = []),
          (tt.timePicker[0] = []),
          (tt.timePicker[1] = []),
          (oo.value = !1),
          (nr.value = !1),
          (rr.value = !1),
          (or.value = !1),
          g(),
          (ar.value = null);
      },
      setMonthPicker: (d) => {
        (or.value = d), g();
      },
      refSets: tt,
    };
  },
  Ql = (e) => ({
    menuAppearTop: "dp-menu-appear-top",
    menuAppearBottom: "dp-menu-appear-bottom",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down",
    ...(e ?? {}),
  }),
  I1 = (e) => ({
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: (n) => `Increment ${n}`,
    decrementValue: (n) => `Decrement ${n}`,
    openTpOverlay: (n) => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    nextYear: "Next year",
    prevYear: "Previous year",
    day: () => "",
    ...(e ?? {}),
  }),
  Zl = (e) =>
    e ? (typeof e == "boolean" ? (e ? 2 : 0) : +e >= 2 ? +e : 2) : 0,
  E1 = (e) => {
    const n = typeof e == "object" && e,
      a = { static: !0, solo: !1 };
    if (!e) return { ...a, count: Zl(!1) };
    const t = n ? e : {},
      o = n ? t.count ?? !0 : e,
      i = Zl(o);
    return Object.assign(a, t, { count: i });
  },
  D1 = (e, n, a) => e || (typeof a == "string" ? a : n),
  M1 = (e) => (typeof e == "boolean" ? (e ? Ql({}) : !1) : Ql(e)),
  O1 = (e) => {
    const n = {
      enterSubmit: !0,
      tabSubmit: !0,
      openMenu: !0,
      selectOnFocus: !1,
      rangeSeparator: " - ",
    };
    return typeof e == "object"
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { ...n, enabled: e };
  },
  A1 = (e) => ({
    months: [],
    years: [],
    times: { hours: [], minutes: [], seconds: [] },
    ...(e ?? {}),
  }),
  B1 = (e) => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...(e ?? {}),
  }),
  L1 = (e) => {
    const n = { input: !1 };
    return typeof e == "object"
      ? { ...n, ...(e ?? {}), enabled: !0 }
      : { enabled: e, ...n };
  },
  x1 = (e) => ({
    allowStopPropagation: !0,
    closeOnScroll: !1,
    modeHeight: 255,
    allowPreventDefault: !1,
    closeOnClearValue: !0,
    closeOnAutoApply: !0,
    noSwipe: !1,
    keepActionRow: !1,
    onClickOutside: void 0,
    tabOutClosesMenu: !0,
    ...(e ?? {}),
  }),
  R1 = (e, n, a) => {
    const t = {
      dates: Array.isArray(e) ? e.map((o) => ne(o)) : [],
      years: [],
      months: [],
      quarters: [],
      weeks: [],
      weekdays: n,
      options: { highlightDisabled: a },
    };
    return typeof e == "function" ? e : { ...t, ...(e ?? {}) };
  },
  H1 = (e) =>
    typeof e == "object"
      ? { type: e.type, hideOnOffsetDates: e.hideOnOffsetDates ?? !1 }
      : { type: e, hideOnOffsetDates: !1 },
  gt = (e) => {
    const n = () => {
        const _ = e.enableSeconds ? ":ss" : "";
        return e.is24 ? `HH:mm${_}` : `hh:mm${_} aa`;
      },
      a = () =>
        e.format
          ? e.format
          : e.monthPicker
          ? "MM/yyyy"
          : e.timePicker
          ? n()
          : e.weekPicker
          ? "MM/dd/yyyy"
          : e.yearPicker
          ? "yyyy"
          : e.quarterPicker
          ? "QQQ/yyyy"
          : e.enableTimePicker
          ? `MM/dd/yyyy, ${n()}`
          : "MM/dd/yyyy",
      t = (_) => Tu(_, e.enableSeconds),
      o = () =>
        e.range
          ? e.startTime && Array.isArray(e.startTime)
            ? [t(e.startTime[0]), t(e.startTime[1])]
            : null
          : e.startTime && !Array.isArray(e.startTime)
          ? t(e.startTime)
          : null,
      i = u(() => E1(e.multiCalendars)),
      r = u(() => o()),
      l = u(() => I1(e.ariaLabels)),
      s = u(() => A1(e.filters)),
      m = u(() => M1(e.transitions)),
      g = u(() => B1(e.actionRow)),
      d = u(() => D1(e.previewFormat, e.format, a())),
      v = u(() => O1(e.textInput)),
      h = u(() => L1(e.inline)),
      y = u(() => x1(e.config)),
      k = u(() =>
        R1(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)
      ),
      T = u(() => H1(e.weekNumbers));
    return {
      defaultedTransitions: m,
      defaultedMultiCalendars: i,
      defaultedStartTime: r,
      defaultedAriaLabels: l,
      defaultedFilters: s,
      defaultedActionRow: g,
      defaultedPreviewFormat: d,
      defaultedTextInput: v,
      defaultedInline: h,
      defaultedConfig: y,
      defaultedHighlight: k,
      defaultedWeekNumbers: T,
      getDefaultPattern: a,
      getDefaultStartTime: o,
    };
  },
  N1 = (e, n, a) => {
    const t = M(),
      { defaultedTextInput: o, getDefaultPattern: i } = gt(n),
      r = M(""),
      l = xn(n, "format");
    Le(t, () => {
      e("internal-model-change", t.value);
    }),
      Le(l, () => {
        B();
      });
    const s = (p) => ku(p, n.timezone),
      m = (p) => Qt(p, n.timezone),
      g = (p, Y, j = !1) =>
        Pu(
          p,
          n.format,
          n.formatLocale,
          o.value.rangeSeparator,
          n.modelAuto,
          Y ?? i(),
          j
        ),
      d = (p) =>
        p
          ? n.modelType
            ? V(p)
            : {
                hours: Kt(p),
                minutes: ia(p),
                seconds: n.enableSeconds ? sn(p) : 0,
              }
          : null,
      v = (p) => (n.modelType ? V(p) : { month: Ue(p), year: Ne(p) }),
      h = (p) =>
        Array.isArray(p)
          ? n.multiDates
            ? p.map((Y) => y(Y, ra(ne(), Y)))
            : no(
                () => [
                  ra(ne(), p[0]),
                  p[1] ? ra(ne(), p[1]) : za(n.partialRange),
                ],
                n.range
              )
          : ra(ne(), +p),
      y = (p, Y) =>
        (typeof p == "string" || typeof p == "number") && n.modelType
          ? P(p)
          : Y,
      k = (p) =>
        Array.isArray(p)
          ? [
              y(p[0], Ia(null, +p[0].hours, +p[0].minutes, p[0].seconds)),
              y(p[1], Ia(null, +p[1].hours, +p[1].minutes, p[1].seconds)),
            ]
          : y(p, Ia(null, p.hours, p.minutes, p.seconds)),
      T = (p) =>
        Array.isArray(p)
          ? n.multiDates
            ? p.map((Y) => y(Y, ga(null, +Y.month, +Y.year)))
            : no(
                () => [
                  y(p[0], ga(null, +p[0].month, +p[0].year)),
                  y(
                    p[1],
                    p[1]
                      ? ga(null, +p[1].month, +p[1].year)
                      : za(n.partialRange)
                  ),
                ],
                n.range
              )
          : y(p, ga(null, +p.month, +p.year)),
      _ = (p) => {
        if (Array.isArray(p)) return p.map((Y) => P(Y));
        throw new Error(fo.dateArr("multi-dates"));
      },
      b = (p) => {
        if (Array.isArray(p)) return [ne(p[0]), ne(p[1])];
        throw new Error(fo.dateArr("week-picker"));
      },
      A = (p) =>
        n.modelAuto
          ? Array.isArray(p)
            ? [P(p[0]), P(p[1])]
            : n.autoApply
            ? [P(p)]
            : [P(p), null]
          : Array.isArray(p)
          ? no(() => [P(p[0]), p[1] ? P(p[1]) : za(n.partialRange)], n.range)
          : P(p),
      D = () => {
        Array.isArray(t.value) &&
          n.range &&
          t.value.length === 1 &&
          t.value.push(za(n.partialRange));
      },
      I = () => {
        const p = t.value;
        return [V(p[0]), p[1] ? V(p[1]) : za(n.partialRange)];
      },
      R = () => (t.value[1] ? I() : V(yt(t.value[0]))),
      L = () => (t.value || []).map((p) => V(p)),
      K = () => (
        D(),
        n.modelAuto
          ? R()
          : n.multiDates
          ? L()
          : Array.isArray(t.value)
          ? no(() => I(), n.range)
          : V(yt(t.value))
      ),
      W = (p) =>
        !p || (Array.isArray(p) && !p.length)
          ? null
          : n.timePicker
          ? k(yt(p))
          : n.monthPicker
          ? T(yt(p))
          : n.yearPicker
          ? h(yt(p))
          : n.multiDates
          ? _(yt(p))
          : n.weekPicker
          ? b(yt(p))
          : A(yt(p)),
      C = (p) => {
        const Y = W(p);
        xr(yt(Y))
          ? ((t.value = yt(Y)), B())
          : ((t.value = null), (r.value = ""));
      },
      H = () => {
        const p = (Y) => Ca(Y, o.value.format);
        return `${p(t.value[0])} ${o.value.rangeSeparator} ${
          t.value[1] ? p(t.value[1]) : ""
        }`;
      },
      F = () =>
        a.value && t.value
          ? Array.isArray(t.value)
            ? H()
            : Ca(t.value, o.value.format)
          : g(t.value),
      Q = () =>
        t.value
          ? n.multiDates
            ? t.value.map((p) => g(p)).join("; ")
            : o.value.enabled && typeof o.value.format == "string"
            ? F()
            : g(t.value)
          : "",
      B = () => {
        !n.format ||
        typeof n.format == "string" ||
        (o.value.enabled && typeof o.value.format == "string")
          ? (r.value = Q())
          : (r.value = n.format(t.value));
      },
      P = (p) => {
        if (n.utc) {
          const Y = new Date(p);
          return n.utc === "preserve"
            ? new Date(Y.getTime() + Y.getTimezoneOffset() * 6e4)
            : Y;
        }
        return n.modelType
          ? n.modelType === "date" || n.modelType === "timestamp"
            ? m(new Date(p))
            : n.modelType === "format" &&
              (typeof n.format == "string" || !n.format)
            ? Er(p, i(), new Date())
            : m(Er(p, n.modelType, new Date()))
          : m(new Date(p));
      },
      V = (p) =>
        p
          ? n.utc
            ? _1(p, n.utc === "preserve", n.enableSeconds)
            : n.modelType
            ? n.modelType === "timestamp"
              ? +s(p)
              : n.modelType === "format" &&
                (typeof n.format == "string" || !n.format)
              ? g(s(p))
              : g(s(p), n.modelType, !0)
            : s(p)
          : "",
      U = (p, Y = !1) => {
        if ((e("update:model-value", p), n.emitTimezone && Y)) {
          const j = Array.isArray(p)
            ? p.map((ee) => Qt(yt(ee)), n.emitTimezone)
            : Qt(yt(p), n.emitTimezone);
          e("update:model-timezone-value", j);
        }
      },
      G = (p) =>
        Array.isArray(t.value)
          ? n.multiDates
            ? t.value.map((Y) => p(Y))
            : [p(t.value[0]), t.value[1] ? p(t.value[1]) : za(n.partialRange)]
          : p(yt(t.value)),
      S = (p) => U(yt(G(p)));
    return {
      inputValue: r,
      internalModelValue: t,
      checkBeforeEmit: () =>
        t.value
          ? n.range
            ? n.partialRange
              ? t.value.length >= 1
              : t.value.length === 2
            : !!t.value
          : !1,
      parseExternalModelValue: C,
      formatInputValue: B,
      emitModelValue: () => (
        B(),
        n.monthPicker
          ? S(v)
          : n.timePicker
          ? S(d)
          : n.yearPicker
          ? S(Ne)
          : n.weekPicker
          ? U(
              t.value.map((p) => V(p)),
              !0
            )
          : U(K(), !0)
      ),
    };
  },
  $1 = (e, n) => {
    const { defaultedFilters: a } = gt(e),
      { validateMonthYearInRange: t } = Fa(e),
      o = (m, g) => {
        let d = m;
        return a.value.months.includes(Ue(d))
          ? ((d = g ? zt(m, 1) : un(m, 1)), o(d, g))
          : d;
      },
      i = (m, g) => {
        let d = m;
        return a.value.years.includes(Ne(d))
          ? ((d = g ? ei(m, 1) : gu(m, 1)), i(d, g))
          : d;
      },
      r = (m, g = !1) => {
        const d = at(new Date(), { month: e.month, year: e.year });
        let v = m ? zt(d, 1) : un(d, 1);
        e.disableYearSelect && (v = ra(v, e.year));
        let h = Ue(v),
          y = Ne(v);
        a.value.months.includes(h) && ((v = o(v, m)), (h = Ue(v)), (y = Ne(v))),
          a.value.years.includes(y) && ((v = i(v, m)), (y = Ne(v))),
          t(h, y, m, e.preventMinMaxNavigation) && l(h, y, g);
      },
      l = (m, g, d) => {
        n("update-month-year", { month: m, year: g, fromNav: d });
      },
      s = u(
        () => (m) =>
          Cu(
            at(new Date(), { month: e.month, year: e.year }),
            e.maxDate,
            e.minDate,
            e.preventMinMaxNavigation,
            m
          )
      );
    return { handleMonthYearChange: r, isDisabled: s, updateMonthYear: l };
  };
var Ka = ((e) => (
    (e.center = "center"), (e.left = "left"), (e.right = "right"), e
  ))(Ka || {}),
  qt = ((e) => ((e.month = "month"), (e.year = "year"), e))(qt || {}),
  Aa = ((e) => ((e.top = "top"), (e.bottom = "bottom"), e))(Aa || {}),
  Ha = ((e) => (
    (e.header = "header"),
    (e.calendar = "calendar"),
    (e.timePicker = "timePicker"),
    e
  ))(Ha || {}),
  ea = ((e) => (
    (e.month = "month"),
    (e.year = "year"),
    (e.calendar = "calendar"),
    (e.time = "time"),
    (e.minutes = "minutes"),
    (e.hours = "hours"),
    (e.seconds = "seconds"),
    e
  ))(ea || {});
const V1 = ({
    menuRef: e,
    menuRefInner: n,
    inputRef: a,
    pickerWrapperRef: t,
    inline: o,
    emit: i,
    props: r,
    slots: l,
  }) => {
    const s = M({}),
      m = M(!1),
      g = M({ top: "0", left: "0" }),
      d = M(!1),
      v = xn(r, "teleportCenter");
    Le(v, () => {
      (g.value = JSON.parse(JSON.stringify({}))), D();
    });
    const h = (P) => {
        if (r.teleport) {
          const V = P.getBoundingClientRect();
          return { left: V.left + window.scrollX, top: V.top + window.scrollY };
        }
        return { top: 0, left: 0 };
      },
      y = (P, V) => {
        g.value.left = `${P + V - s.value.width}px`;
      },
      k = (P) => {
        g.value.left = `${P}px`;
      },
      T = (P, V) => {
        r.position === Ka.left && k(P),
          r.position === Ka.right && y(P, V),
          r.position === Ka.center &&
            (g.value.left = `${P + V / 2 - s.value.width / 2}px`);
      },
      _ = (P) => {
        const { width: V, height: U } = P.getBoundingClientRect(),
          { top: G, left: S } = r.altPosition ? r.altPosition(P) : h(P);
        return { top: +G, left: +S, width: V, height: U };
      },
      b = () => {
        (g.value.left = "50%"),
          (g.value.top = "50%"),
          (g.value.transform = "translate(-50%, -50%)"),
          (g.value.position = "fixed"),
          delete g.value.opacity;
      },
      A = () => {
        const P = ft(a),
          { top: V, left: U, transform: G } = r.altPosition(P);
        g.value = { top: `${V}px`, left: `${U}px`, transform: G ?? "" };
      },
      D = (P = !0) => {
        var V;
        if (!o.value.enabled) {
          if (v.value) return b();
          if (r.altPosition !== null) return A();
          if (P) {
            const U = r.teleport
              ? (V = n.value) == null
                ? void 0
                : V.$el
              : e.value;
            U && (s.value = U.getBoundingClientRect()),
              i("recalculate-position");
          }
          return H();
        }
      },
      I = ({ inputEl: P, left: V, width: U }) => {
        window.screen.width > 768 && !m.value && T(V, U), K(P);
      },
      R = (P) => {
        const { top: V, left: U, height: G, width: S } = _(P);
        (g.value.top = `${G + V + +r.offset}px`),
          (d.value = !1),
          m.value || (g.value.left = `${U + S / 2 - s.value.width / 2}px`),
          I({ inputEl: P, left: U, width: S });
      },
      L = (P) => {
        const { top: V, left: U, width: G } = _(P);
        (g.value.top = `${V - +r.offset - s.value.height}px`),
          (d.value = !0),
          I({ inputEl: P, left: U, width: G });
      },
      K = (P) => {
        if (r.autoPosition) {
          const { left: V, width: U } = _(P),
            { left: G, right: S } = s.value;
          if (!m.value) {
            if (Math.abs(G) !== Math.abs(S)) {
              if (G <= 0) return (m.value = !0), k(V);
              if (S >= document.documentElement.clientWidth)
                return (m.value = !0), y(V, U);
            }
            return T(V, U);
          }
        }
      },
      W = () => {
        const P = ft(a);
        if (P) {
          const { height: V } = s.value,
            { top: U, height: G } = P.getBoundingClientRect(),
            S = window.innerHeight - U - G,
            p = U;
          return V <= S
            ? Aa.bottom
            : V > S && V <= p
            ? Aa.top
            : S >= p
            ? Aa.bottom
            : Aa.top;
        }
        return Aa.bottom;
      },
      C = (P) => (W() === Aa.bottom ? R(P) : L(P)),
      H = () => {
        const P = ft(a);
        if (P) return r.autoPosition ? C(P) : R(P);
      },
      F = function (P) {
        if (P) {
          const V = P.scrollHeight > P.clientHeight,
            U = window.getComputedStyle(P).overflowY.indexOf("hidden") !== -1;
          return V && !U;
        }
        return !0;
      },
      Q = function (P) {
        return !P ||
          P === document.body ||
          P.nodeType === Node.DOCUMENT_FRAGMENT_NODE
          ? window
          : F(P)
          ? P
          : Q(P.parentNode);
      },
      B = (P) => {
        if (P)
          switch (r.position) {
            case Ka.left:
              return { left: 0, transform: "translateX(0)" };
            case Ka.right:
              return { left: `${P.width}px`, transform: "translateX(-100%)" };
            default:
              return {
                left: `${P.width / 2}px`,
                transform: "translateX(-50%)",
              };
          }
        return {};
      };
    return {
      openOnTop: d,
      menuStyle: g,
      xCorrect: m,
      setMenuPosition: D,
      getScrollableParent: Q,
      shadowRender: (P, V) => {
        var U, G, S;
        const p = document.createElement("div"),
          Y = (U = ft(a)) == null ? void 0 : U.getBoundingClientRect();
        p.setAttribute("id", "dp--temp-container");
        const j =
          (G = t.value) != null && G.clientWidth ? t.value : document.body;
        j.append(p);
        const ee = B(Y),
          J = Fu(
            P,
            {
              ...V,
              shadow: !0,
              style: { opacity: 0, position: "absolute", ...ee },
            },
            Object.fromEntries(
              Object.keys(l)
                .filter((N) => ["right-sidebar", "left-sidebar"].includes(N))
                .map((N) => [N, l[N]])
            )
          );
        Ti(J, p),
          (s.value = (S = J.el) == null ? void 0 : S.getBoundingClientRect()),
          Ti(null, p),
          j.removeChild(p);
      },
    };
  },
  wa = [
    { name: "clock-icon", use: ["time", "calendar", "shared"] },
    {
      name: "arrow-left",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    {
      name: "arrow-right",
      use: ["month-year", "calendar", "shared", "year-mode"],
    },
    { name: "arrow-up", use: ["time", "calendar", "month-year", "shared"] },
    { name: "arrow-down", use: ["time", "calendar", "month-year", "shared"] },
    {
      name: "calendar-icon",
      use: ["month-year", "time", "calendar", "shared", "year-mode"],
    },
    { name: "day", use: ["calendar", "shared"] },
    { name: "month-overlay-value", use: ["calendar", "month-year", "shared"] },
    {
      name: "year-overlay-value",
      use: ["calendar", "month-year", "shared", "year-mode"],
    },
    { name: "year-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay", use: ["month-year", "shared"] },
    { name: "month-overlay-header", use: ["month-year", "shared"] },
    { name: "year-overlay-header", use: ["month-year", "shared"] },
    { name: "hours-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "minutes-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "seconds-overlay-value", use: ["calendar", "time", "shared"] },
    { name: "hours", use: ["calendar", "time", "shared"] },
    { name: "minutes", use: ["calendar", "time", "shared"] },
    { name: "month", use: ["calendar", "month-year", "shared"] },
    { name: "year", use: ["calendar", "month-year", "shared", "year-mode"] },
    { name: "action-buttons", use: ["action"] },
    { name: "action-preview", use: ["action"] },
    { name: "calendar-header", use: ["calendar", "shared"] },
    { name: "marker-tooltip", use: ["calendar", "shared"] },
    { name: "action-extra", use: ["menu"] },
    { name: "time-picker-overlay", use: ["calendar", "time", "shared"] },
    { name: "am-pm-button", use: ["calendar", "time", "shared"] },
    { name: "left-sidebar", use: ["menu"] },
    { name: "right-sidebar", use: ["menu"] },
    { name: "month-year", use: ["month-year", "shared"] },
    { name: "time-picker", use: ["menu", "shared"] },
    { name: "action-row", use: ["action"] },
    { name: "marker", use: ["calendar", "shared"] },
    { name: "quarter", use: ["shared"] },
  ],
  U1 = [
    { name: "trigger" },
    { name: "input-icon" },
    { name: "clear-icon" },
    { name: "dp-input" },
  ],
  Y1 = {
    all: () => wa,
    monthYear: () => wa.filter((e) => e.use.includes("month-year")),
    input: () => U1,
    timePicker: () => wa.filter((e) => e.use.includes("time")),
    action: () => wa.filter((e) => e.use.includes("action")),
    calendar: () => wa.filter((e) => e.use.includes("calendar")),
    menu: () => wa.filter((e) => e.use.includes("menu")),
    shared: () => wa.filter((e) => e.use.includes("shared")),
    yearMode: () => wa.filter((e) => e.use.includes("year-mode")),
  },
  xt = (e, n, a) => {
    const t = [];
    return (
      Y1[n]().forEach((o) => {
        e[o.name] && t.push(o.name);
      }),
      a != null &&
        a.length &&
        a.forEach((o) => {
          o.slot && t.push(o.slot);
        }),
      t
    );
  },
  zn = (e) => {
    const n = u(() => (t) => e.value ? (t ? e.value.open : e.value.close) : ""),
      a = u(
        () => (t) =>
          e.value ? (t ? e.value.menuAppearTop : e.value.menuAppearBottom) : ""
      );
    return { transitionName: n, showTransition: !!e.value, menuTransition: a };
  },
  Kn = (e, n) => {
    const a = ne(Qt(new Date(), e.timezone)),
      t = M([{ month: Ue(a), year: Ne(a) }]),
      o = va({
        hours: e.range ? [Kt(a), Kt(a)] : Kt(a),
        minutes: e.range ? [ia(a), ia(a)] : ia(a),
        seconds: e.range ? [0, 0] : 0,
      }),
      i = u({
        get: () => e.internalModelValue,
        set: (s) => {
          !e.readonly && !e.disabled && n("update:internal-model-value", s);
        },
      }),
      r = u(() => (s) => t.value[s] ? t.value[s].month : 0),
      l = u(() => (s) => t.value[s] ? t.value[s].year : 0);
    return { calendars: t, time: o, modelValue: i, month: r, year: l };
  },
  F1 = (e, n) => {
    const { defaultedMultiCalendars: a, defaultedHighlight: t } = gt(n),
      { isDisabled: o, matchDate: i } = Fa(n),
      r = M(null),
      l = M(ne(Qt(new Date(), n.timezone))),
      s = (S) => {
        (!S.current && n.hideOffsetDates) || (r.value = S.value);
      },
      m = () => {
        r.value = null;
      },
      g = (S) =>
        Array.isArray(e.value) && n.range && e.value[0] && r.value
          ? S
            ? Tt(r.value, e.value[0])
            : wt(r.value, e.value[0])
          : !0,
      d = (S, p) => {
        const Y = () =>
            e.value ? (p ? e.value[0] || null : e.value[1]) : null,
          j = e.value && Array.isArray(e.value) ? Y() : null;
        return We(ne(S.value), j);
      },
      v = (S) => {
        const p = Array.isArray(e.value) ? e.value[0] : null;
        return S ? !wt(r.value ?? null, p) : !0;
      },
      h = (S, p = !0) =>
        (n.range || n.weekPicker) &&
        Array.isArray(e.value) &&
        e.value.length === 2
          ? n.hideOffsetDates && !S.current
            ? !1
            : We(ne(S.value), e.value[p ? 0 : 1])
          : n.range
          ? (d(S, p) && v(p)) ||
            (We(S.value, Array.isArray(e.value) ? e.value[0] : null) && g(p))
          : !1,
      y = (S, p, Y) =>
        Array.isArray(e.value) && e.value[0] && e.value.length === 1
          ? S
            ? !1
            : Y
            ? Tt(e.value[0], p.value)
            : wt(e.value[0], p.value)
          : !1,
      k = (S) =>
        !e.value || (n.hideOffsetDates && !S.current)
          ? !1
          : n.range
          ? n.modelAuto && Array.isArray(e.value)
            ? We(S.value, e.value[0] ? e.value[0] : l.value)
            : !1
          : n.multiDates && Array.isArray(e.value)
          ? e.value.some((p) => We(p, S.value))
          : We(S.value, e.value ? e.value : l.value),
      T = (S) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !S.current) return !1;
            const p = ma(r.value, +n.autoRange),
              Y = ro(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(Y[1], ne(S.value)) : We(p, ne(S.value));
          }
          return !1;
        }
        return !1;
      },
      _ = (S) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            const p = ma(r.value, +n.autoRange);
            if (n.hideOffsetDates && !S.current) return !1;
            const Y = ro(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker
              ? Tt(S.value, Y[0]) && wt(S.value, Y[1])
              : Tt(S.value, r.value) && wt(S.value, p);
          }
          return !1;
        }
        return !1;
      },
      b = (S) => {
        if (n.autoRange || n.weekPicker) {
          if (r.value) {
            if (n.hideOffsetDates && !S.current) return !1;
            const p = ro(ne(r.value), n.timezone, n.weekStart);
            return n.weekPicker ? We(p[0], S.value) : We(r.value, S.value);
          }
          return !1;
        }
        return !1;
      },
      A = (S) => So(e.value, r.value, S.value),
      D = () =>
        n.modelAuto && Array.isArray(n.internalModelValue)
          ? !!n.internalModelValue[0]
          : !1,
      I = () => (n.modelAuto ? bu(n.internalModelValue) : !0),
      R = (S) => {
        if ((Array.isArray(e.value) && e.value.length) || n.weekPicker)
          return !1;
        const p = n.range ? !h(S) && !h(S, !1) : !0;
        return !o(S.value) && !k(S) && !(!S.current && n.hideOffsetDates) && p;
      },
      L = (S) => (n.range ? (n.modelAuto ? D() && k(S) : !1) : k(S)),
      K = (S) => {
        var p;
        return t.value
          ? typeof t.value == "function"
            ? t.value(S.value)
            : i(
                S.value,
                (p = n.arrMapValues) != null && p.highlightedDates
                  ? n.arrMapValues.highlightedDates
                  : t.value.dates
              )
          : !1;
      },
      W = (S) => {
        const p = o(S.value);
        return (
          p &&
          (typeof t.value == "function"
            ? !t.value(S.value, p)
            : !t.value.options.highlightDisabled)
        );
      },
      C = (S) => {
        var p;
        return typeof t.value == "function"
          ? t.value(S.value)
          : (p = t.value.weekdays) == null
          ? void 0
          : p.includes(S.value.getDay());
      },
      H = (S) =>
        (n.range || n.weekPicker) &&
        (!(a.value.count > 0) || S.current) &&
        I() &&
        !(!S.current && n.hideOffsetDates) &&
        !k(S)
          ? A(S)
          : !1,
      F = (S) => {
        const { isRangeStart: p, isRangeEnd: Y } = P(S),
          j = n.range ? p || Y : !1;
        return {
          dp__cell_offset: !S.current,
          dp__pointer:
            !n.disabled && !(!S.current && n.hideOffsetDates) && !o(S.value),
          dp__cell_disabled: o(S.value),
          dp__cell_highlight:
            !W(S) &&
            (K(S) || C(S)) &&
            !L(S) &&
            !j &&
            !b(S) &&
            !(H(S) && n.weekPicker) &&
            !Y,
          dp__cell_highlight_active: !W(S) && (K(S) || C(S)) && L(S),
          dp__today: !n.noToday && We(S.value, l.value) && S.current,
        };
      },
      Q = (S) => ({ dp__active_date: L(S), dp__date_hover: R(S) }),
      B = (S) => ({
        ...V(S),
        ...U(S),
        dp__range_between_week: H(S) && n.weekPicker,
      }),
      P = (S) => {
        const p = a.value.count > 0 ? S.current && h(S) && I() : h(S) && I(),
          Y =
            a.value.count > 0 ? S.current && h(S, !1) && I() : h(S, !1) && I();
        return { isRangeStart: p, isRangeEnd: Y };
      },
      V = (S) => {
        const { isRangeStart: p, isRangeEnd: Y } = P(S);
        return {
          dp__range_start: p,
          dp__range_end: Y,
          dp__range_between: H(S) && !n.weekPicker,
          dp__date_hover_start: y(R(S), S, !0),
          dp__date_hover_end: y(R(S), S, !1),
        };
      },
      U = (S) => ({
        ...V(S),
        dp__cell_auto_range: _(S),
        dp__cell_auto_range_start: b(S),
        dp__cell_auto_range_end: T(S),
      }),
      G = (S) =>
        n.range
          ? n.autoRange
            ? U(S)
            : n.modelAuto
            ? { ...Q(S), ...V(S) }
            : V(S)
          : n.weekPicker
          ? B(S)
          : Q(S);
    return {
      setHoverDate: s,
      clearHoverDate: m,
      getDayClassData: (S) =>
        n.hideOffsetDates && !S.current
          ? {}
          : {
              ...F(S),
              ...G(S),
              [n.dayClass ? n.dayClass(S.value) : ""]: !0,
              [n.calendarCellClassName]: !!n.calendarCellClassName,
            },
    };
  },
  Fa = (e) => {
    const { defaultedFilters: n, defaultedHighlight: a } = gt(e),
      t = () => {
        if (e.timezone) return e.timezone;
        if (e.utc) return "UTC";
      },
      o = (C) => {
        const H = Ct(i(ne(C))).toISOString(),
          [F] = H.split("T");
        return F;
      },
      i = (C) => (e.utc === "preserve" ? ku(C, t()) : Qt(C, t())),
      r = (C) => {
        var H;
        const F = e.maxDate ? Tt(C, i(ne(e.maxDate))) : !1,
          Q = e.minDate ? wt(C, i(ne(e.minDate))) : !1,
          B = g(
            i(C),
            (H = e.arrMapValues) != null && H.disabledDates
              ? e.arrMapValues.disabledDates
              : e.disabledDates
          ),
          P = n.value.months.map((p) => +p).includes(Ue(C)),
          V = e.disabledWeekDays.length
            ? e.disabledWeekDays.some((p) => +p === p0(C))
            : !1,
          U = v(C),
          G = Ne(C),
          S = G < +e.yearRange[0] || G > +e.yearRange[1];
        return !(F || Q || B || P || S || V || U);
      },
      l = (C, H) => wt(...Sa(e.minDate, C, H)) || We(...Sa(e.minDate, C, H)),
      s = (C, H) => Tt(...Sa(e.maxDate, C, H)) || We(...Sa(e.maxDate, C, H)),
      m = (C, H, F) => {
        let Q = !1;
        return (
          e.maxDate && F && s(C, H) && (Q = !0),
          e.minDate && !F && l(C, H) && (Q = !0),
          Q
        );
      },
      g = (C, H) =>
        C
          ? H instanceof Map
            ? !!H.get(o(C))
            : Array.isArray(H)
            ? H.some((F) => We(i(ne(F)), C))
            : H
            ? H(ne(JSON.parse(JSON.stringify(C))))
            : !1
          : !0,
      d = (C, H, F, Q) => {
        let B = !1;
        return (
          Q
            ? e.minDate && e.maxDate
              ? (B = m(C, H, F))
              : ((e.minDate && l(C, H)) || (e.maxDate && s(C, H))) && (B = !0)
            : (B = !0),
          B
        );
      },
      v = (C) => {
        var H, F, Q, B, P;
        return Array.isArray(e.allowedDates) &&
          !((H = e.allowedDates) != null && H.length)
          ? !0
          : (F = e.arrMapValues) != null && F.allowedDates
          ? !g(C, (Q = e.arrMapValues) == null ? void 0 : Q.allowedDates)
          : (B = e.allowedDates) != null && B.length
          ? !(
              (P = e.allowedDates) != null && P.some((V) => We(Ct(V), i(Ct(C))))
            )
          : !1;
      },
      h = (C) => !r(C),
      y = (C) =>
        e.noDisabledRange
          ? !zs({ start: C[0], end: C[1] }).some((H) => h(H))
          : !0,
      k = (C, H, F = 0) => {
        if (Array.isArray(H) && H[F]) {
          const Q = g_(C, H[F]),
            B = Su(H[F], C),
            P = B.length === 1 ? 0 : B.filter((U) => h(U)).length,
            V = Math.abs(Q) - P;
          if (e.minRange && e.maxRange)
            return V >= +e.minRange && V <= +e.maxRange;
          if (e.minRange) return V >= +e.minRange;
          if (e.maxRange) return V <= +e.maxRange;
        }
        return !0;
      },
      T = (C) => new Map(C.map((H) => [o(H), !0])),
      _ = (C) => Array.isArray(C) && C.length > 0,
      b = () => {
        const C = {
          disabledDates: null,
          allowedDates: null,
          highlightedDates: null,
        };
        return (
          _(e.allowedDates) && (C.allowedDates = T(e.allowedDates)),
          typeof a.value != "function" &&
            _(a.value.dates) &&
            (C.highlightedDates = T(a.value.dates)),
          _(e.disabledDates) && (C.disabledDates = T(e.disabledDates)),
          C
        );
      },
      A = () =>
        !e.enableTimePicker ||
        e.monthPicker ||
        e.yearPicker ||
        e.ignoreTimeValidation,
      D = (C) =>
        Array.isArray(C)
          ? [C[0] ? tr(C[0]) : null, C[1] ? tr(C[1]) : null]
          : tr(C),
      I = (C, H, F) =>
        C.find((Q) =>
          +Q.hours === Kt(H) && Q.minutes === "*"
            ? !0
            : +Q.minutes === ia(H) && +Q.hours === Kt(H)
        ) && F,
      R = (C, H, F) => {
        const [Q, B] = C,
          [P, V] = H;
        return !I(Q, P, F) && !I(B, V, F) && F;
      },
      L = (C, H) => {
        const F = Array.isArray(H) ? H : [H];
        return Array.isArray(e.disabledTimes)
          ? Array.isArray(e.disabledTimes[0])
            ? R(e.disabledTimes, F, C)
            : !F.some((Q) => I(e.disabledTimes, Q, C))
          : C;
      },
      K = (C, H) => {
        const F = Array.isArray(H)
            ? [Ra(H[0]), H[1] ? Ra(H[1]) : void 0]
            : Ra(H),
          Q = !e.disabledTimes(F);
        return C && Q;
      },
      W = (C, H) =>
        e.disabledTimes
          ? Array.isArray(e.disabledTimes)
            ? L(H, C)
            : K(H, C)
          : H;
    return {
      isDisabled: h,
      validateDate: r,
      validateMonthYearInRange: d,
      isDateRangeAllowed: y,
      checkMinMaxRange: k,
      matchDate: g,
      mapDatesArrToMap: b,
      isValidTime: (C) => {
        let H = !0;
        if (!C || A()) return !0;
        const F = !e.minDate && !e.maxDate ? D(C) : C;
        return (
          (e.maxTime || e.maxDate) &&
            (H = Kl(e.maxTime, e.maxDate, "max", yt(F), H)),
          (e.minTime || e.minDate) &&
            (H = Kl(e.minTime, e.minDate, "min", yt(F), H)),
          W(C, H)
        );
      },
    };
  },
  To = () => {
    const e = u(() => (t, o) => t?.includes(o)),
      n = u(() => (t, o) => t.count ? (t.solo ? !0 : o === 0) : !0),
      a = u(() => (t, o) => t.count ? (t.solo ? !0 : o === t.count - 1) : !0);
    return { hideNavigationButtons: e, showLeftIcon: n, showRightIcon: a };
  },
  W1 = (e, n, a) => {
    const t = M(0),
      o = va({
        [Ha.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
        [Ha.calendar]: !1,
        [Ha.header]: !1,
      }),
      i = u(() => e.monthPicker),
      r = (d) => {
        var v;
        if ((v = e.flow) != null && v.length) {
          if (!d && i.value) return g();
          (o[d] = !0), Object.keys(o).filter((h) => !o[h]).length || g();
        }
      },
      l = () => {
        var d;
        (d = e.flow) != null &&
          d.length &&
          t.value !== -1 &&
          ((t.value += 1), n("flow-step", t.value), g());
      },
      s = () => {
        t.value = -1;
      },
      m = (d, v, ...h) => {
        e.flow[t.value] === d && a.value && a.value[v](...h);
      },
      g = () => {
        m(ea.month, "toggleMonthPicker", !0),
          m(ea.year, "toggleYearPicker", !0),
          m(ea.calendar, "toggleTimePicker", !1, !0),
          m(ea.time, "toggleTimePicker", !0, !0);
        const d = e.flow[t.value];
        (d === ea.hours || d === ea.minutes || d === ea.seconds) &&
          m(d, "toggleTimePicker", !0, !0, d);
      };
    return { childMount: r, updateFlowStep: l, resetFlow: s, flowStep: t };
  },
  Co = {
    multiCalendars: {
      type: [Boolean, Number, String, Object],
      default: void 0,
    },
    modelValue: { type: [String, Date, Array, Object, Number], default: null },
    modelType: { type: String, default: null },
    position: { type: String, default: "center" },
    dark: { type: Boolean, default: !1 },
    format: { type: [String, Function], default: () => null },
    autoPosition: { type: Boolean, default: !0 },
    altPosition: { type: Function, default: null },
    transitions: { type: [Boolean, Object], default: !0 },
    formatLocale: { type: Object, default: null },
    utc: { type: [Boolean, String], default: !1 },
    ariaLabels: { type: Object, default: () => ({}) },
    offset: { type: [Number, String], default: 10 },
    hideNavigation: { type: Array, default: () => [] },
    timezone: { type: String, default: null },
    emitTimezone: { type: String, default: null },
    vertical: { type: Boolean, default: !1 },
    disableMonthYearSelect: { type: Boolean, default: !1 },
    disableYearSelect: { type: Boolean, default: !1 },
    menuClassName: { type: String, default: null },
    dayClass: { type: Function, default: null },
    yearRange: { type: Array, default: () => [1900, 2100] },
    calendarCellClassName: { type: String, default: null },
    enableTimePicker: { type: Boolean, default: !0 },
    autoApply: { type: Boolean, default: !1 },
    disabledDates: { type: [Array, Function], default: () => [] },
    monthNameFormat: { type: String, default: "short" },
    startDate: { type: [Date, String], default: null },
    startTime: { type: [Object, Array], default: null },
    hideOffsetDates: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: null },
    noToday: { type: Boolean, default: !1 },
    disabledWeekDays: { type: Array, default: () => [] },
    allowedDates: { type: Array, default: null },
    nowButtonLabel: { type: String, default: "Now" },
    markers: { type: Array, default: () => [] },
    escClose: { type: Boolean, default: !0 },
    spaceConfirm: { type: Boolean, default: !0 },
    monthChangeOnArrows: { type: Boolean, default: !0 },
    presetDates: { type: Array, default: () => [] },
    flow: { type: Array, default: () => [] },
    partialFlow: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    minRange: { type: [Number, String], default: null },
    maxRange: { type: [Number, String], default: null },
    multiDatesLimit: { type: [Number, String], default: null },
    reverseYears: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    filters: { type: Object, default: () => ({}) },
    arrowNavigation: { type: Boolean, default: !1 },
    disableTimeRangeValidation: { type: Boolean, default: !1 },
    highlight: { type: [Array, Function, Object], default: null },
    highlightWeekDays: { type: Array, default: null },
    highlightDisabledDays: { type: Boolean, default: !1 },
    teleport: { type: [String, Boolean, Object], default: null },
    teleportCenter: { type: Boolean, default: !1 },
    locale: { type: String, default: "en-Us" },
    weekNumName: { type: String, default: "W" },
    weekStart: { type: [Number, String], default: 1 },
    weekNumbers: { type: [String, Function, Object], default: null },
    calendarClassName: { type: String, default: null },
    monthChangeOnScroll: { type: [Boolean, String], default: !0 },
    dayNames: { type: [Function, Array], default: null },
    monthPicker: { type: Boolean, default: !1 },
    customProps: { type: Object, default: null },
    yearPicker: { type: Boolean, default: !1 },
    modelAuto: { type: Boolean, default: !1 },
    selectText: { type: String, default: "Select" },
    cancelText: { type: String, default: "Cancel" },
    previewFormat: { type: [String, Function], default: () => "" },
    multiDates: { type: Boolean, default: !1 },
    partialRange: { type: Boolean, default: !0 },
    ignoreTimeValidation: { type: Boolean, default: !1 },
    minDate: { type: [Date, String], default: null },
    maxDate: { type: [Date, String], default: null },
    minTime: { type: Object, default: null },
    maxTime: { type: Object, default: null },
    name: { type: String, default: null },
    placeholder: { type: String, default: "" },
    hideInputIcon: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !0 },
    state: { type: Boolean, default: null },
    required: { type: Boolean, default: !1 },
    autocomplete: { type: String, default: "off" },
    inputClassName: { type: String, default: null },
    fixedStart: { type: Boolean, default: !1 },
    fixedEnd: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    enableSeconds: { type: Boolean, default: !1 },
    is24: { type: Boolean, default: !0 },
    noHoursOverlay: { type: Boolean, default: !1 },
    noMinutesOverlay: { type: Boolean, default: !1 },
    noSecondsOverlay: { type: Boolean, default: !1 },
    hoursGridIncrement: { type: [String, Number], default: 1 },
    minutesGridIncrement: { type: [String, Number], default: 5 },
    secondsGridIncrement: { type: [String, Number], default: 5 },
    hoursIncrement: { type: [Number, String], default: 1 },
    minutesIncrement: { type: [Number, String], default: 1 },
    secondsIncrement: { type: [Number, String], default: 1 },
    range: { type: Boolean, default: !1 },
    uid: { type: String, default: null },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    inline: { type: [Boolean, Object], default: !1 },
    textInput: { type: [Boolean, Object], default: !1 },
    noDisabledRange: { type: Boolean, default: !1 },
    sixWeeks: { type: [Boolean, String], default: !1 },
    actionRow: { type: Object, default: () => ({}) },
    focusStartDate: { type: Boolean, default: !1 },
    disabledTimes: { type: [Function, Array], default: void 0 },
    showLastInRange: { type: Boolean, default: !0 },
    timePickerInline: { type: Boolean, default: !1 },
    calendar: { type: Function, default: null },
    config: { type: Object, default: void 0 },
    quarterPicker: { type: Boolean, default: !1 },
    yearFirst: { type: Boolean, default: !1 },
  },
  Jt = {
    ...Co,
    shadow: { type: Boolean, default: !1 },
    flowStep: { type: Number, default: 0 },
    internalModelValue: { type: [Date, Array], default: null },
    arrMapValues: { type: Object, default: () => ({}) },
    noOverlayFocus: { type: Boolean, default: !1 },
  },
  q1 = { key: 1, class: "dp__input_wrap" },
  G1 = [
    "id",
    "name",
    "inputmode",
    "placeholder",
    "disabled",
    "readonly",
    "required",
    "value",
    "autocomplete",
    "aria-label",
    "aria-disabled",
    "aria-invalid",
  ],
  j1 = { key: 2, class: "dp__clear_icon" },
  z1 = re({
    compatConfig: { MODE: 3 },
    __name: "DatepickerInput",
    props: {
      isMenuOpen: { type: Boolean, default: !1 },
      inputValue: { type: String, default: "" },
      ...Co,
    },
    emits: [
      "clear",
      "open",
      "update:input-value",
      "set-input-date",
      "close",
      "select-date",
      "set-empty-date",
      "toggle",
      "focus-prev",
      "focus",
      "blur",
      "real-blur",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTextInput: i,
          defaultedAriaLabels: r,
          defaultedInline: l,
          defaultedConfig: s,
          getDefaultPattern: m,
          getDefaultStartTime: g,
        } = gt(o),
        { checkMinMaxRange: d } = Fa(o),
        v = M(),
        h = M(null),
        y = M(!1),
        k = M(!1),
        T = u(() => ({
          dp__pointer: !o.disabled && !o.readonly && !i.value.enabled,
          dp__disabled: o.disabled,
          dp__input_readonly: !i.value.enabled,
          dp__input: !0,
          dp__input_icon_pad: !o.hideInputIcon,
          dp__input_valid: !!o.state,
          dp__input_invalid: o.state === !1,
          dp__input_focus: y.value || o.isMenuOpen,
          dp__input_reg: !i.value.enabled,
          [o.inputClassName]: !!o.inputClassName,
        })),
        _ = () => {
          t("set-input-date", null),
            o.autoApply && (t("set-empty-date"), (v.value = null));
        },
        b = (B) => {
          const P = g();
          return b1(
            B,
            i.value.format ?? m(),
            P ?? Tu({}, o.enableSeconds),
            o.inputValue,
            k.value
          );
        },
        A = (B) => {
          const { rangeSeparator: P } = i.value,
            [V, U] = B.split(`${P}`);
          if (V) {
            const G = b(V.trim()),
              S = U ? b(U.trim()) : null,
              p = G && S ? [G, S] : [G];
            d(S, p, 0) && (v.value = G ? p : null);
          }
        },
        D = () => {
          k.value = !0;
        },
        I = (B) => {
          if (o.range) A(B);
          else if (o.multiDates) {
            const P = B.split(";");
            v.value = P.map((V) => b(V.trim())).filter((V) => V);
          } else v.value = b(B);
        },
        R = (B) => {
          var P;
          const V =
            typeof B == "string"
              ? B
              : (P = B.target) == null
              ? void 0
              : P.value;
          V !== ""
            ? (i.value.openMenu && !o.isMenuOpen && t("open"),
              I(V),
              t("set-input-date", v.value))
            : _(),
            (k.value = !1),
            t("update:input-value", V);
        },
        L = (B) => {
          i.value.enabled
            ? (I(B.target.value),
              i.value.enterSubmit && xr(v.value) && o.inputValue !== ""
                ? (t("set-input-date", v.value, !0), (v.value = null))
                : i.value.enterSubmit &&
                  o.inputValue === "" &&
                  ((v.value = null), t("clear")))
            : C(B);
        },
        K = (B) => {
          i.value.enabled && i.value.tabSubmit && I(B.target.value),
            i.value.tabSubmit && xr(v.value) && o.inputValue !== ""
              ? (t("set-input-date", v.value, !0, !0), (v.value = null))
              : i.value.tabSubmit &&
                o.inputValue === "" &&
                ((v.value = null), t("clear", !0));
        },
        W = () => {
          var B;
          (y.value = !0),
            t("focus"),
            i.value.enabled &&
              i.value.selectOnFocus &&
              ((B = h.value) == null || B.select());
        },
        C = (B) => {
          B.preventDefault(),
            Pa(B, s.value, !0),
            i.value.enabled &&
            i.value.openMenu &&
            !l.value.input &&
            !o.isMenuOpen
              ? t("open")
              : i.value.enabled || t("toggle");
        },
        H = () => {
          t("real-blur"),
            (y.value = !1),
            (!o.isMenuOpen || (l.value.enabled && l.value.input)) && t("blur"),
            o.autoApply &&
              i.value.enabled &&
              v.value &&
              !o.isMenuOpen &&
              (t("set-input-date", v.value),
              t("select-date"),
              (v.value = null));
        },
        F = (B) => {
          Pa(B, s.value, !0), t("clear");
        },
        Q = (B) => {
          if (!i.value.enabled) {
            if (B.code === "Tab") return;
            B.preventDefault();
          }
        };
      return (
        n({
          focusInput: () => {
            var B;
            (B = h.value) == null || B.focus({ preventScroll: !0 });
          },
          setParsedDate: (B) => {
            v.value = B;
          },
        }),
        (B, P) => {
          var V;
          return (
            c(),
            f("div", { onClick: C }, [
              B.$slots.trigger && !B.$slots["dp-input"] && !x(l).enabled
                ? te(B.$slots, "trigger", { key: 0 })
                : O("", !0),
              !B.$slots.trigger && (!x(l).enabled || x(l).input)
                ? (c(),
                  f("div", q1, [
                    B.$slots["dp-input"] && !B.$slots.trigger && !x(l).enabled
                      ? te(B.$slots, "dp-input", {
                          key: 0,
                          value: e.inputValue,
                          isMenuOpen: e.isMenuOpen,
                          onInput: R,
                          onEnter: L,
                          onTab: K,
                          onClear: F,
                          onBlur: H,
                          onKeypress: Q,
                          onPaste: D,
                          openMenu: () => B.$emit("open"),
                          closeMenu: () => B.$emit("close"),
                          toggleMenu: () => B.$emit("toggle"),
                        })
                      : O("", !0),
                    B.$slots["dp-input"]
                      ? O("", !0)
                      : (c(),
                        f(
                          "input",
                          {
                            key: 1,
                            id: B.uid ? `dp-input-${B.uid}` : void 0,
                            ref_key: "inputRef",
                            ref: h,
                            name: B.name,
                            class: Z(T.value),
                            inputmode: x(i).enabled ? "text" : "none",
                            placeholder: B.placeholder,
                            disabled: B.disabled,
                            readonly: B.readonly,
                            required: B.required,
                            value: e.inputValue,
                            autocomplete: B.autocomplete,
                            "aria-label": (V = x(r)) == null ? void 0 : V.input,
                            "aria-disabled": B.disabled || void 0,
                            "aria-invalid": B.state === !1 ? !0 : void 0,
                            onInput: R,
                            onKeydown: [Ae(L, ["enter"]), Ae(K, ["tab"]), Q],
                            onBlur: H,
                            onFocus: W,
                            onKeypress: Q,
                            onPaste: D,
                          },
                          null,
                          42,
                          G1
                        )),
                    E("div", { onClick: P[2] || (P[2] = (U) => t("toggle")) }, [
                      B.$slots["input-icon"] && !B.hideInputIcon
                        ? (c(),
                          f(
                            "span",
                            {
                              key: 0,
                              class: "dp__input_icon",
                              onClick: P[0] || (P[0] = (U) => t("toggle")),
                            },
                            [te(B.$slots, "input-icon")]
                          ))
                        : O("", !0),
                      !B.$slots["input-icon"] &&
                      !B.hideInputIcon &&
                      !B.$slots["dp-input"]
                        ? (c(),
                          q(x(pn), {
                            key: 1,
                            class: "dp__input_icon dp__input_icons",
                            onClick: P[1] || (P[1] = (U) => t("toggle")),
                          }))
                        : O("", !0),
                    ]),
                    B.$slots["clear-icon"] &&
                    e.inputValue &&
                    B.clearable &&
                    !B.disabled &&
                    !B.readonly
                      ? (c(),
                        f("span", j1, [
                          te(B.$slots, "clear-icon", { clear: F }),
                        ]))
                      : O("", !0),
                    B.clearable &&
                    !B.$slots["clear-icon"] &&
                    e.inputValue &&
                    !B.disabled &&
                    !B.readonly
                      ? (c(),
                        q(x(vu), {
                          key: 3,
                          class: "dp__clear_icon dp__input_icons",
                          onClick:
                            P[3] || (P[3] = Me((U) => F(U), ["prevent"])),
                        }))
                      : O("", !0),
                  ]))
                : O("", !0),
            ])
          );
        }
      );
    },
  }),
  K1 = ["title"],
  Q1 = { class: "dp__action_buttons" },
  Z1 = ["disabled"],
  X1 = re({
    compatConfig: { MODE: 3 },
    __name: "ActionRow",
    props: {
      menuMount: { type: Boolean, default: !1 },
      calendarWidth: { type: Number, default: 0 },
      ...Jt,
    },
    emits: ["close-picker", "select-date", "select-now", "invalid-select"],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        {
          defaultedActionRow: o,
          defaultedPreviewFormat: i,
          defaultedMultiCalendars: r,
          defaultedTextInput: l,
          defaultedInline: s,
          getDefaultPattern: m,
        } = gt(t),
        { isValidTime: g } = Fa(t),
        { buildMatrix: d } = Ea(),
        v = M(null),
        h = M(null);
      Ee(() => {
        t.arrowNavigation && d([ft(v), ft(h)], "actionRow");
      });
      const y = u(() =>
          t.range && !t.partialRange && t.internalModelValue
            ? t.internalModelValue.length === 2
            : !0
        ),
        k = u(() => !T.value || !_.value || !y.value),
        T = u(() =>
          !t.enableTimePicker || t.ignoreTimeValidation
            ? !0
            : g(t.internalModelValue)
        ),
        _ = u(() =>
          t.monthPicker
            ? t.range && Array.isArray(t.internalModelValue)
              ? !t.internalModelValue.filter((C) => !K(C)).length
              : K(t.internalModelValue)
            : !0
        ),
        b = () => {
          const C = i.value;
          return t.timePicker || t.monthPicker, C(yt(t.internalModelValue));
        },
        A = () => {
          const C = t.internalModelValue;
          return r.value.count > 0
            ? `${D(C[0])} - ${D(C[1])}`
            : [D(C[0]), D(C[1])];
        },
        D = (C) =>
          Pu(
            C,
            i.value,
            t.formatLocale,
            l.value.rangeSeparator,
            t.modelAuto,
            m()
          ),
        I = u(() =>
          !t.internalModelValue || !t.menuMount
            ? ""
            : typeof i.value == "string"
            ? Array.isArray(t.internalModelValue)
              ? t.internalModelValue.length === 2 && t.internalModelValue[1]
                ? A()
                : t.multiDates
                ? t.internalModelValue.map((C) => `${D(C)}`)
                : t.modelAuto
                ? `${D(t.internalModelValue[0])}`
                : `${D(t.internalModelValue[0])} -`
              : D(t.internalModelValue)
            : b()
        ),
        R = () => (t.multiDates ? "; " : " - "),
        L = u(() => (Array.isArray(I.value) ? I.value.join(R()) : I.value)),
        K = (C) => {
          if (!t.monthPicker) return !0;
          let H = !0;
          const F = ne(jt(C));
          if (t.minDate && t.maxDate) {
            const Q = ne(jt(t.minDate)),
              B = ne(jt(t.maxDate));
            return (Tt(F, Q) && wt(F, B)) || We(F, Q) || We(F, B);
          }
          if (t.minDate) {
            const Q = ne(jt(t.minDate));
            H = Tt(F, Q) || We(F, Q);
          }
          if (t.maxDate) {
            const Q = ne(jt(t.maxDate));
            H = wt(F, Q) || We(F, Q);
          }
          return H;
        },
        W = () => {
          T.value && _.value && y.value
            ? a("select-date")
            : a("invalid-select");
        };
      return (C, H) => (
        c(),
        f(
          "div",
          {
            class: "dp__action_row",
            style: Be(e.calendarWidth ? { width: `${e.calendarWidth}px` } : {}),
          },
          [
            C.$slots["action-row"]
              ? te(
                  C.$slots,
                  "action-row",
                  nt(
                    Ge(
                      { key: 0 },
                      {
                        internalModelValue: C.internalModelValue,
                        disabled: k.value,
                        selectDate: () => C.$emit("select-date"),
                        closePicker: () => C.$emit("close-picker"),
                      }
                    )
                  )
                )
              : (c(),
                f(
                  ge,
                  { key: 1 },
                  [
                    x(o).showPreview
                      ? (c(),
                        f(
                          "div",
                          {
                            key: 0,
                            class: "dp__selection_preview",
                            title: L.value,
                          },
                          [
                            C.$slots["action-preview"]
                              ? te(C.$slots, "action-preview", {
                                  key: 0,
                                  value: C.internalModelValue,
                                })
                              : O("", !0),
                            C.$slots["action-preview"]
                              ? O("", !0)
                              : (c(),
                                f(ge, { key: 1 }, [Re(X(L.value), 1)], 64)),
                          ],
                          8,
                          K1
                        ))
                      : O("", !0),
                    E("div", Q1, [
                      C.$slots["action-buttons"]
                        ? te(C.$slots, "action-buttons", {
                            key: 0,
                            value: C.internalModelValue,
                          })
                        : O("", !0),
                      C.$slots["action-buttons"]
                        ? O("", !0)
                        : (c(),
                          f(
                            ge,
                            { key: 1 },
                            [
                              !x(s).enabled && x(o).showCancel
                                ? (c(),
                                  f(
                                    "button",
                                    {
                                      key: 0,
                                      ref_key: "cancelButtonRef",
                                      ref: v,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        H[0] ||
                                        (H[0] = (F) => C.$emit("close-picker")),
                                      onKeydown: [
                                        H[1] ||
                                          (H[1] = Ae(
                                            (F) => C.$emit("close-picker"),
                                            ["enter"]
                                          )),
                                        H[2] ||
                                          (H[2] = Ae(
                                            (F) => C.$emit("close-picker"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    X(C.cancelText),
                                    545
                                  ))
                                : O("", !0),
                              x(o).showNow
                                ? (c(),
                                  f(
                                    "button",
                                    {
                                      key: 1,
                                      ref_key: "cancelButtonRef",
                                      ref: v,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_cancel",
                                      onClick:
                                        H[3] ||
                                        (H[3] = (F) => C.$emit("select-now")),
                                      onKeydown: [
                                        H[4] ||
                                          (H[4] = Ae(
                                            (F) => C.$emit("select-now"),
                                            ["enter"]
                                          )),
                                        H[5] ||
                                          (H[5] = Ae(
                                            (F) => C.$emit("select-now"),
                                            ["space"]
                                          )),
                                      ],
                                    },
                                    X(C.nowButtonLabel),
                                    545
                                  ))
                                : O("", !0),
                              x(o).showSelect
                                ? (c(),
                                  f(
                                    "button",
                                    {
                                      key: 2,
                                      ref_key: "selectButtonRef",
                                      ref: h,
                                      type: "button",
                                      class:
                                        "dp__action_button dp__action_select",
                                      disabled: k.value,
                                      onKeydown: [
                                        Ae(W, ["enter"]),
                                        Ae(W, ["space"]),
                                      ],
                                      onClick: W,
                                    },
                                    X(C.selectText),
                                    41,
                                    Z1
                                  ))
                                : O("", !0),
                            ],
                            64
                          )),
                    ]),
                  ],
                  64
                )),
          ],
          4
        )
      );
    },
  }),
  J1 = ["onKeydown"],
  ek = { class: "dp__selection_grid_header" },
  tk = [
    "aria-selected",
    "aria-disabled",
    "onClick",
    "onKeydown",
    "onMouseover",
  ],
  ak = ["aria-label"],
  Qn = re({
    __name: "SelectionOverlay",
    props: {
      items: {},
      type: {},
      isLast: { type: Boolean },
      arrowNavigation: { type: Boolean },
      skipButtonRef: { type: Boolean },
      headerRefs: {},
      hideNavigation: {},
      escClose: { type: Boolean },
      useRelative: { type: Boolean },
      height: {},
      textInput: { type: [Boolean, Object] },
      config: {},
      noOverlayFocus: { type: Boolean },
      focusValue: {},
    },
    emits: ["selected", "toggle", "reset-flow", "hover-value"],
    setup(e, { expose: n, emit: a }) {
      const {
          setSelectionGrid: t,
          buildMultiLevelMatrix: o,
          setMonthPicker: i,
        } = Ea(),
        r = a,
        l = e,
        {
          defaultedAriaLabels: s,
          defaultedTextInput: m,
          defaultedConfig: g,
        } = gt(l),
        { hideNavigationButtons: d } = To(),
        v = M(!1),
        h = M(null),
        y = M(null),
        k = M([]),
        T = M(),
        _ = M(null),
        b = M(0),
        A = M(null);
      Wu(() => {
        h.value = null;
      }),
        Ee(() => {
          Dt().then(() => H()), l.noOverlayFocus || I(), D(!0);
        }),
        qn(() => D(!1));
      const D = (S) => {
          var p;
          l.arrowNavigation &&
            ((p = l.headerRefs) != null && p.length ? i(S) : t(S));
        },
        I = () => {
          var S;
          const p = ft(y);
          p &&
            (m.value.enabled ||
              (h.value
                ? (S = h.value) == null || S.focus({ preventScroll: !0 })
                : p.focus({ preventScroll: !0 })),
            (v.value = p.clientHeight < p.scrollHeight));
        },
        R = u(() => ({
          dp__overlay: !0,
          "dp--overlay-absolute": !l.useRelative,
          "dp--overlay-relative": l.useRelative,
        })),
        L = u(() =>
          l.useRelative ? { height: `${l.height}px`, width: "260px" } : void 0
        ),
        K = u(() => ({ dp__overlay_col: !0 })),
        W = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__overlay_action: !0,
          dp__over_action_scroll: v.value,
          dp__button_bottom: l.isLast,
        })),
        C = u(() => {
          var S, p;
          return {
            dp__overlay_container: !0,
            dp__container_flex:
              ((S = l.items) == null ? void 0 : S.length) <= 6,
            dp__container_block:
              ((p = l.items) == null ? void 0 : p.length) > 6,
          };
        });
      Le(
        () => l.items,
        () => H(),
        { deep: !0 }
      );
      const H = () => {
          Dt().then(() => {
            const S = ft(h),
              p = ft(y),
              Y = ft(_),
              j = ft(A),
              ee = Y ? Y.getBoundingClientRect().height : 0;
            p &&
              (p.getBoundingClientRect().height
                ? (b.value = p.getBoundingClientRect().height - ee)
                : (b.value = g.value.modeHeight - ee)),
              S &&
                j &&
                (j.scrollTop =
                  S.offsetTop -
                  j.offsetTop -
                  (b.value / 2 - S.getBoundingClientRect().height) -
                  ee);
          });
        },
        F = (S) => {
          S.disabled || r("selected", S.value);
        },
        Q = () => {
          r("toggle"), r("reset-flow");
        },
        B = () => {
          l.escClose && Q();
        },
        P = (S, p, Y, j) => {
          S &&
            ((p.active || p.value === l.focusValue) && (h.value = S),
            l.arrowNavigation &&
              (Array.isArray(k.value[Y])
                ? (k.value[Y][j] = S)
                : (k.value[Y] = [S]),
              V()));
        },
        V = () => {
          var S, p;
          const Y =
            (S = l.headerRefs) != null && S.length
              ? [l.headerRefs].concat(k.value)
              : k.value.concat([l.skipButtonRef ? [] : [_.value]]);
          o(
            yt(Y),
            (p = l.headerRefs) != null && p.length
              ? "monthPicker"
              : "selectionGrid"
          );
        },
        U = (S) => {
          l.arrowNavigation || Pa(S, g.value, !0);
        },
        G = (S) => {
          (T.value = S), r("hover-value", S);
        };
      return (
        n({ focusGrid: I }),
        (S, p) => {
          var Y;
          return (
            c(),
            f(
              "div",
              {
                ref_key: "gridWrapRef",
                ref: y,
                class: Z(R.value),
                style: Be(L.value),
                role: "dialog",
                tabindex: "0",
                onKeydown: [
                  Ae(Me(B, ["prevent"]), ["esc"]),
                  p[0] ||
                    (p[0] = Ae(
                      Me((j) => U(j), ["prevent"]),
                      ["left"]
                    )),
                  p[1] ||
                    (p[1] = Ae(
                      Me((j) => U(j), ["prevent"]),
                      ["up"]
                    )),
                  p[2] ||
                    (p[2] = Ae(
                      Me((j) => U(j), ["prevent"]),
                      ["down"]
                    )),
                  p[3] ||
                    (p[3] = Ae(
                      Me((j) => U(j), ["prevent"]),
                      ["right"]
                    )),
                ],
              },
              [
                E(
                  "div",
                  {
                    ref_key: "containerRef",
                    ref: A,
                    class: Z(C.value),
                    role: "grid",
                    style: Be({ height: `${b.value}px` }),
                  },
                  [
                    E("div", ek, [te(S.$slots, "header")]),
                    S.$slots.overlay
                      ? te(S.$slots, "overlay", { key: 0 })
                      : (c(!0),
                        f(
                          ge,
                          { key: 1 },
                          we(
                            S.items,
                            (j, ee) => (
                              c(),
                              f(
                                "div",
                                {
                                  key: ee,
                                  class: Z([
                                    "dp__overlay_row",
                                    { dp__flex_row: S.items.length >= 3 },
                                  ]),
                                  role: "row",
                                },
                                [
                                  (c(!0),
                                  f(
                                    ge,
                                    null,
                                    we(
                                      j,
                                      (J, N) => (
                                        c(),
                                        f(
                                          "div",
                                          {
                                            key: J.value,
                                            ref_for: !0,
                                            ref: (w) => P(w, J, ee, N),
                                            role: "gridcell",
                                            class: Z(K.value),
                                            "aria-selected": J.active,
                                            "aria-disabled":
                                              J.disabled || void 0,
                                            tabindex: "0",
                                            onClick: (w) => F(J),
                                            onKeydown: [
                                              Ae(
                                                Me((w) => F(J), ["prevent"]),
                                                ["enter"]
                                              ),
                                              Ae(
                                                Me((w) => F(J), ["prevent"]),
                                                ["space"]
                                              ),
                                            ],
                                            onMouseover: (w) => G(J.value),
                                          },
                                          [
                                            E(
                                              "div",
                                              { class: Z(J.className) },
                                              [
                                                S.$slots.item
                                                  ? te(S.$slots, "item", {
                                                      key: 0,
                                                      item: J,
                                                    })
                                                  : O("", !0),
                                                S.$slots.item
                                                  ? O("", !0)
                                                  : (c(),
                                                    f(
                                                      ge,
                                                      { key: 1 },
                                                      [Re(X(J.text), 1)],
                                                      64
                                                    )),
                                              ],
                                              2
                                            ),
                                          ],
                                          42,
                                          tk
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                ],
                                2
                              )
                            )
                          ),
                          128
                        )),
                  ],
                  6
                ),
                S.$slots["button-icon"]
                  ? ue(
                      (c(),
                      f(
                        "button",
                        {
                          key: 0,
                          ref_key: "toggleButton",
                          ref: _,
                          type: "button",
                          "aria-label":
                            (Y = x(s)) == null ? void 0 : Y.toggleOverlay,
                          class: Z(W.value),
                          tabindex: "0",
                          onClick: Q,
                          onKeydown: [Ae(Q, ["enter"]), Ae(Q, ["tab"])],
                        },
                        [te(S.$slots, "button-icon")],
                        42,
                        ak
                      )),
                      [[$t, !x(d)(S.hideNavigation, S.type)]]
                    )
                  : O("", !0),
              ],
              46,
              J1
            )
          );
        }
      );
    },
  }),
  Po = re({
    __name: "InstanceWrap",
    props: { multiCalendars: {}, stretch: { type: Boolean } },
    setup(e) {
      const n = e,
        a = u(() =>
          n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]
        ),
        t = u(() => ({ dp__instance_calendar: n.multiCalendars > 0 }));
      return (o, i) => (
        c(),
        f(
          "div",
          {
            class: Z({
              dp__menu_inner: !o.stretch,
              "dp--menu--inner-stretched": o.stretch,
              dp__flex_display: o.multiCalendars > 0,
            }),
          },
          [
            (c(!0),
            f(
              ge,
              null,
              we(
                a.value,
                (r, l) => (
                  c(),
                  f(
                    "div",
                    { key: r, class: Z(t.value) },
                    [te(o.$slots, "default", { instance: r, index: l })],
                    2
                  )
                )
              ),
              128
            )),
          ],
          2
        )
      );
    },
  }),
  nk = ["aria-label", "aria-disabled"],
  An = re({
    compatConfig: { MODE: 3 },
    __name: "ArrowBtn",
    props: { ariaLabel: {}, disabled: { type: Boolean } },
    emits: ["activate", "set-ref"],
    setup(e, { emit: n }) {
      const a = n,
        t = M(null);
      return (
        Ee(() => a("set-ref", t)),
        (o, i) => (
          c(),
          f(
            "button",
            {
              ref_key: "elRef",
              ref: t,
              type: "button",
              class: "dp__btn dp--arrow-btn-nav",
              tabindex: "0",
              "aria-label": o.ariaLabel,
              "aria-disabled": o.disabled || void 0,
              onClick: i[0] || (i[0] = (r) => o.$emit("activate")),
              onKeydown: [
                i[1] ||
                  (i[1] = Ae(
                    Me((r) => o.$emit("activate"), ["prevent"]),
                    ["enter"]
                  )),
                i[2] ||
                  (i[2] = Ae(
                    Me((r) => o.$emit("activate"), ["prevent"]),
                    ["space"]
                  )),
              ],
            },
            [
              E(
                "span",
                {
                  class: Z([
                    "dp__inner_nav",
                    { dp__inner_nav_disabled: o.disabled },
                  ]),
                },
                [te(o.$slots, "default")],
                2
              ),
            ],
            40,
            nk
          )
        )
      );
    },
  }),
  ok = { class: "dp--year-mode-picker" },
  rk = ["aria-label"],
  Du = re({
    __name: "YearModePicker",
    props: {
      ...Jt,
      showYearPicker: { type: Boolean, default: !1 },
      items: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      isDisabled: { type: Function, default: () => !1 },
    },
    emits: ["toggle-year-picker", "year-select", "handle-year"],
    setup(e, { emit: n }) {
      const a = n,
        t = e,
        { showRightIcon: o, showLeftIcon: i } = To(),
        {
          defaultedConfig: r,
          defaultedMultiCalendars: l,
          defaultedAriaLabels: s,
          defaultedTransitions: m,
        } = gt(t),
        { showTransition: g, transitionName: d } = zn(m),
        v = (k = !1, T) => {
          a("toggle-year-picker", { flow: k, show: T });
        },
        h = (k) => {
          a("year-select", k);
        },
        y = (k = !1) => {
          a("handle-year", k);
        };
      return (k, T) => {
        var _, b, A;
        return (
          c(),
          f("div", ok, [
            x(i)(x(l), e.instance)
              ? (c(),
                q(
                  An,
                  {
                    key: 0,
                    ref: "mpPrevIconRef",
                    "aria-label": (_ = x(s)) == null ? void 0 : _.prevYear,
                    disabled: e.isDisabled(!1),
                    onActivate: T[0] || (T[0] = (D) => y(!1)),
                  },
                  {
                    default: fe(() => [
                      k.$slots["arrow-left"]
                        ? te(k.$slots, "arrow-left", { key: 0 })
                        : O("", !0),
                      k.$slots["arrow-left"]
                        ? O("", !0)
                        : (c(), q(x(si), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : O("", !0),
            E(
              "button",
              {
                ref: "mpYearButtonRef",
                class: "dp__btn dp--year-select",
                type: "button",
                "aria-label": (b = x(s)) == null ? void 0 : b.openYearsOverlay,
                onClick: T[1] || (T[1] = () => v(!1)),
                onKeydown: T[2] || (T[2] = Ae(() => v(!1), ["enter"])),
              },
              [
                k.$slots.year
                  ? te(k.$slots, "year", { key: 0, year: e.year })
                  : O("", !0),
                k.$slots.year
                  ? O("", !0)
                  : (c(), f(ge, { key: 1 }, [Re(X(e.year), 1)], 64)),
              ],
              40,
              rk
            ),
            x(o)(x(l), e.instance)
              ? (c(),
                q(
                  An,
                  {
                    key: 1,
                    ref: "mpNextIconRef",
                    "aria-label": (A = x(s)) == null ? void 0 : A.nextYear,
                    disabled: e.isDisabled(!0),
                    onActivate: T[3] || (T[3] = (D) => y(!0)),
                  },
                  {
                    default: fe(() => [
                      k.$slots["arrow-right"]
                        ? te(k.$slots, "arrow-right", { key: 0 })
                        : O("", !0),
                      k.$slots["arrow-right"]
                        ? O("", !0)
                        : (c(), q(x(ui), { key: 1 })),
                    ]),
                    _: 3,
                  },
                  8,
                  ["aria-label", "disabled"]
                ))
              : O("", !0),
            Oe(
              At,
              { name: x(d)(e.showYearPicker), css: x(g) },
              {
                default: fe(() => [
                  e.showYearPicker
                    ? (c(),
                      q(
                        Qn,
                        {
                          key: 0,
                          items: e.items,
                          "text-input": k.textInput,
                          "esc-close": k.escClose,
                          config: k.config,
                          "is-last": k.autoApply && !x(r).keepActionRow,
                          "hide-navigation": k.hideNavigation,
                          type: "year",
                          onToggle: v,
                          onSelected: T[4] || (T[4] = (D) => h(D)),
                        },
                        Et(
                          {
                            "button-icon": fe(() => [
                              k.$slots["calendar-icon"]
                                ? te(k.$slots, "calendar-icon", { key: 0 })
                                : O("", !0),
                              k.$slots["calendar-icon"]
                                ? O("", !0)
                                : (c(), q(x(pn), { key: 1 })),
                            ]),
                            _: 2,
                          },
                          [
                            k.$slots["year-overlay-value"]
                              ? {
                                  name: "item",
                                  fn: fe(({ item: D }) => [
                                    te(k.$slots, "year-overlay-value", {
                                      text: D.text,
                                      value: D.value,
                                    }),
                                  ]),
                                  key: "0",
                                }
                              : void 0,
                          ]
                        ),
                        1032,
                        [
                          "items",
                          "text-input",
                          "esc-close",
                          "config",
                          "is-last",
                          "hide-navigation",
                        ]
                      ))
                    : O("", !0),
                ]),
                _: 3,
              },
              8,
              ["name", "css"]
            ),
          ])
        );
      };
    },
  }),
  yi = (e, n, a) => {
    if (n.value && Array.isArray(n.value))
      if (n.value.some((t) => We(e, t))) {
        const t = n.value.filter((o) => !We(o, e));
        n.value = t.length ? t : null;
      } else ((a && +a > n.value.length) || !a) && n.value.push(e);
    else n.value = [e];
  },
  bi = (e, n, a) => {
    let t = e.value ? e.value.slice() : [];
    return (
      t.length === 2 && t[1] !== null && (t = []),
      t.length
        ? wt(n, t[0])
          ? (t.unshift(n), a("range-start", t[0]), a("range-start", t[1]))
          : ((t[1] = n), a("range-end", n))
        : ((t = [n]), a("range-start", n)),
      (e.value = t),
      t
    );
  },
  Io = (e, n, a, t) => {
    e[0] && e[1] && a && n("auto-apply"),
      e[0] && !e[1] && t && a && n("auto-apply");
  },
  Mu = (e) => {
    Array.isArray(e.value) && e.value.length <= 2 && e.range
      ? (e.modelValue.value = e.value.map((n) => Qt(ne(n), e.timezone)))
      : Array.isArray(e.value) ||
        (e.modelValue.value = Qt(ne(e.value), e.timezone));
  },
  Ou = ({
    multiCalendars: e,
    highlight: n,
    calendars: a,
    modelValue: t,
    props: o,
    year: i,
    month: r,
    emit: l,
  }) => {
    const s = u(() => fi(o.yearRange, o.reverseYears)),
      m = M([!1]),
      g = u(() => (D, I) => {
        const R = at(jt(new Date()), { month: r.value(D), year: i.value(D) });
        return Cu(R, o.maxDate, o.minDate, o.preventMinMaxNavigation, I);
      }),
      d = () => {
        for (let D = 0; D < e.value.count; D++)
          if (D === 0) a.value[D] = a.value[0];
          else {
            const I = at(ne(), a.value[D - 1]);
            a.value[D] = { month: Ue(I), year: Ne(ei(I, 1)) };
          }
      },
      v = (D) => {
        if (!D) return d();
        const I = at(ne(), a.value[D]);
        return (a.value[0].year = Ne(gu(I, e.value.count - 1))), d();
      },
      h = (D) => (o.focusStartDate ? D[0] : D[1] ? D[1] : D[0]),
      y = () => {
        if (t.value) {
          const D = Array.isArray(t.value) ? h(t.value) : t.value;
          a.value[0] = { month: Ue(D), year: Ne(D) };
        }
      };
    Ee(() => {
      y(), e.value.count && d();
    });
    const k = (D, I) => {
        (a.value[I].year = D), e.value.count && !e.value.solo && v(I);
      },
      T = u(
        () => (D) =>
          cn(s.value, (I) => {
            const R = i.value(D) === I.value,
              L = Wn(I.value, dn(o.minDate), dn(o.maxDate)),
              K = hi(n.value, I.value);
            return { active: R, disabled: L, highlighted: K };
          })
      ),
      _ = (D, I) => {
        k(D, I), A(I);
      },
      b = (D, I = !1) => {
        if (!g.value(D, I)) {
          const R = I ? i.value(D) + 1 : i.value(D) - 1;
          k(R, D);
        }
      },
      A = (D, I = !1, R) => {
        I || l("reset-flow"),
          R !== void 0 ? (m.value[D] = R) : (m.value[D] = !m.value[D]),
          m.value || l("overlay-closed");
      };
    return {
      isDisabled: g,
      groupedYears: T,
      showYearPicker: m,
      selectYear: k,
      toggleYearPicker: A,
      handleYearSelect: _,
      handleYear: b,
    };
  },
  ik = (e, n) => {
    const {
        defaultedMultiCalendars: a,
        defaultedAriaLabels: t,
        defaultedTransitions: o,
        defaultedConfig: i,
        defaultedHighlight: r,
      } = gt(e),
      { modelValue: l, year: s, month: m, calendars: g } = Kn(e, n),
      d = u(() => yu(e.formatLocale, e.locale, e.monthNameFormat)),
      v = M(null),
      {
        selectYear: h,
        groupedYears: y,
        showYearPicker: k,
        toggleYearPicker: T,
        handleYearSelect: _,
        handleYear: b,
        isDisabled: A,
      } = Ou({
        modelValue: l,
        multiCalendars: a,
        highlight: r,
        calendars: g,
        year: s,
        month: m,
        props: e,
        emit: n,
      });
    Ee(() => {
      e.startDate &&
        ((l.value && e.focusStartDate) || !l.value) &&
        h(Ne(ne(e.startDate)), 0);
    });
    const D = (U) =>
        U ? { month: Ue(U), year: Ne(U) } : { month: null, year: null },
      I = () =>
        l.value
          ? Array.isArray(l.value)
            ? l.value.map((U) => D(U))
            : D(l.value)
          : D(),
      R = (U, G) => {
        const S = g.value[U],
          p = I();
        return Array.isArray(p)
          ? p.some((Y) => Y.year === S?.year && Y.month === G)
          : S?.year === p.year && G === p.month;
      },
      L = (U, G, S) => {
        var p, Y;
        const j = I();
        return Array.isArray(j)
          ? s.value(G) === ((p = j[S]) == null ? void 0 : p.year) &&
              U === ((Y = j[S]) == null ? void 0 : Y.month)
          : !1;
      },
      K = (U, G) => {
        if (e.range) {
          const S = I();
          if (Array.isArray(l.value) && Array.isArray(S)) {
            const p = L(U, G, 0) || L(U, G, 1),
              Y = ga(jt(ne()), U, s.value(G));
            return So(l.value, v.value, Y) && !p;
          }
          return !1;
        }
        return !1;
      },
      W = u(
        () => (U) =>
          cn(d.value, (G) => {
            const S = R(U, G.value),
              p =
                Wn(
                  G.value,
                  _u(s.value(U), e.minDate),
                  wu(s.value(U), e.maxDate)
                ) || P1(e.disabledDates, s.value(U)).includes(G.value),
              Y = K(G.value, U),
              j = Iu(r.value, G.value, s.value(U));
            return { active: S, disabled: p, isBetween: Y, highlighted: j };
          })
      ),
      C = (U, G) => ga(jt(ne()), U, s.value(G)),
      H = (U, G) => {
        const S = l.value ? l.value : jt(new Date());
        (l.value = ga(S, U, s.value(G))), n("auto-apply");
      },
      F = (U, G) => {
        const S = bi(l, C(U, G), n);
        Io(S, n, e.autoApply, e.modelAuto);
      },
      Q = (U, G) => {
        yi(C(U, G), l, e.multiDatesLimit), n("auto-apply", !0);
      },
      B = (U, G) => (
        (g.value[G].month = U),
        V(G, g.value[G].year, U),
        e.multiDates ? Q(U, G) : e.range ? F(U, G) : H(U, G)
      ),
      P = (U, G) => {
        h(U, G), V(G, U, null);
      },
      V = (U, G, S) => {
        let p = S;
        if (!p && p !== 0) {
          const Y = I();
          p = Array.isArray(Y) ? Y[U].month : Y.month;
        }
        n("update-month-year", { instance: U, year: G, month: p });
      };
    return {
      groupedMonths: W,
      groupedYears: y,
      year: s,
      isDisabled: A,
      defaultedMultiCalendars: a,
      defaultedAriaLabels: t,
      defaultedTransitions: o,
      defaultedConfig: i,
      showYearPicker: k,
      modelValue: l,
      presetDate: (U, G) => {
        Mu({
          value: U,
          modelValue: l,
          range: e.range,
          timezone: G ? void 0 : e.timezone,
        }),
          n("auto-apply");
      },
      setHoverDate: (U, G) => {
        v.value = C(U, G);
      },
      selectMonth: B,
      selectYear: P,
      toggleYearPicker: T,
      handleYearSelect: _,
      handleYear: b,
      getModelMonthYear: I,
    };
  },
  lk = re({
    compatConfig: { MODE: 3 },
    __name: "MonthPicker",
    props: { ...Jt },
    emits: [
      "update:internal-model-value",
      "overlay-closed",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
      "update-month-year",
      "mount",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = Ua(),
        i = xt(o, "yearMode"),
        r = e;
      Ee(() => {
        r.shadow || t("mount", null);
      });
      const {
        groupedMonths: l,
        groupedYears: s,
        year: m,
        isDisabled: g,
        defaultedMultiCalendars: d,
        defaultedConfig: v,
        showYearPicker: h,
        modelValue: y,
        presetDate: k,
        setHoverDate: T,
        selectMonth: _,
        selectYear: b,
        toggleYearPicker: A,
        handleYearSelect: D,
        handleYear: I,
        getModelMonthYear: R,
      } = ik(r, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: y,
            year: m,
            getModelMonthYear: R,
            selectMonth: _,
            selectYear: b,
            handleYear: I,
          }),
          presetDate: k,
          toggleYearPicker: (L) => A(0, L),
        }),
        (L, K) => (
          c(),
          q(
            Po,
            { "multi-calendars": x(d).count, stretch: "" },
            {
              default: fe(({ instance: W }) => [
                L.$slots["month-year"]
                  ? te(
                      L.$slots,
                      "month-year",
                      nt(
                        Ge(
                          { key: 0 },
                          {
                            year: x(m),
                            months: x(l)(W),
                            years: x(s)(W),
                            selectMonth: x(_),
                            selectYear: x(b),
                            instance: W,
                          }
                        )
                      )
                    )
                  : (c(),
                    q(
                      Qn,
                      {
                        key: 1,
                        items: x(l)(W),
                        "arrow-navigation": L.arrowNavigation,
                        "is-last": L.autoApply && !x(v).keepActionRow,
                        "esc-close": L.escClose,
                        height: x(v).modeHeight,
                        config: L.config,
                        "no-overlay-focus": !!(L.noOverlayFocus || L.textInput),
                        "use-relative": "",
                        type: "month",
                        onSelected: (C) => x(_)(C, W),
                        onHoverValue: (C) => x(T)(C, W),
                      },
                      {
                        header: fe(() => [
                          Oe(
                            Du,
                            Ge(L.$props, {
                              items: x(s)(W),
                              instance: W,
                              "show-year-picker": x(h)[W],
                              year: x(m)(W),
                              "is-disabled": (C) => x(g)(W, C),
                              onHandleYear: (C) => x(I)(W, C),
                              onYearSelect: (C) => x(D)(C, W),
                              onToggleYearPicker: (C) =>
                                x(A)(W, C?.flow, C?.show),
                            }),
                            Et({ _: 2 }, [
                              we(x(i), (C, H) => ({
                                name: C,
                                fn: fe((F) => [te(L.$slots, C, nt(St(F)))]),
                              })),
                            ]),
                            1040,
                            [
                              "items",
                              "instance",
                              "show-year-picker",
                              "year",
                              "is-disabled",
                              "onHandleYear",
                              "onYearSelect",
                              "onToggleYearPicker",
                            ]
                          ),
                        ]),
                        _: 2,
                      },
                      1032,
                      [
                        "items",
                        "arrow-navigation",
                        "is-last",
                        "esc-close",
                        "height",
                        "config",
                        "no-overlay-focus",
                        "onSelected",
                        "onHoverValue",
                      ]
                    )),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  sk = (e, n) => {
    const { modelValue: a } = Kn(e, n),
      t = M(null),
      { defaultedHighlight: o, defaultedFilters: i } = gt(e),
      r = M();
    Ee(() => {
      e.startDate &&
        ((a.value && e.focusStartDate) || !a.value) &&
        (r.value = Ne(ne(e.startDate)));
    });
    const l = (d) =>
        Array.isArray(a.value)
          ? a.value.some((v) => Ne(v) === d)
          : a.value
          ? Ne(a.value) === d
          : !1,
      s = (d) =>
        e.range && Array.isArray(a.value) ? So(a.value, t.value, g(d)) : !1,
      m = u(() =>
        cn(fi(e.yearRange, e.reverseYears), (d) => {
          const v = l(d.value),
            h =
              Wn(d.value, dn(e.minDate), dn(e.maxDate)) ||
              i.value.years.includes(d.value),
            y = s(d.value) && !v,
            k = hi(o.value, d.value);
          return { active: v, disabled: h, isBetween: y, highlighted: k };
        })
      ),
      g = (d) => ra(jt(new Date()), d);
    return {
      groupedYears: m,
      modelValue: a,
      focusYear: r,
      setHoverValue: (d) => {
        t.value = ra(jt(new Date()), d);
      },
      selectYear: (d) => {
        var v;
        if (e.multiDates)
          return (
            a.value
              ? Array.isArray(a.value) &&
                (((v = a.value) == null
                  ? void 0
                  : v.map((h) => Ne(h))
                ).includes(d)
                  ? (a.value = a.value.filter((h) => Ne(h) !== d))
                  : a.value.push(ra(Ct(ne()), d)))
              : (a.value = [ra(Ct(ne()), d)]),
            n("auto-apply", !0)
          );
        if (e.range) {
          const h = bi(a, g(d), n);
          return Io(h, n, e.autoApply, e.modelAuto);
        }
        (a.value = g(d)), n("auto-apply");
      },
    };
  },
  uk = re({
    compatConfig: { MODE: 3 },
    __name: "YearPicker",
    props: { ...Jt },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "range-start",
      "range-end",
      "auto-apply",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          groupedYears: i,
          modelValue: r,
          focusYear: l,
          selectYear: s,
          setHoverValue: m,
        } = sk(o, t),
        { defaultedConfig: g } = gt(o);
      return (
        n({ getSidebarProps: () => ({ modelValue: r, selectYear: s }) }),
        (d, v) => (
          c(),
          f("div", null, [
            d.$slots["month-year"]
              ? te(
                  d.$slots,
                  "month-year",
                  nt(Ge({ key: 0 }, { years: x(i), selectYear: x(s) }))
                )
              : (c(),
                q(
                  Qn,
                  {
                    key: 1,
                    items: x(i),
                    "is-last": d.autoApply && !x(g).keepActionRow,
                    height: x(g).modeHeight,
                    config: d.config,
                    "no-overlay-focus": !!(d.noOverlayFocus || d.textInput),
                    "focus-value": x(l),
                    type: "year",
                    "use-relative": "",
                    onSelected: x(s),
                    onHoverValue: x(m),
                  },
                  Et({ _: 2 }, [
                    d.$slots["year-overlay-value"]
                      ? {
                          name: "item",
                          fn: fe(({ item: h }) => [
                            te(d.$slots, "year-overlay-value", {
                              text: h.text,
                              value: h.value,
                            }),
                          ]),
                          key: "0",
                        }
                      : void 0,
                  ]),
                  1032,
                  [
                    "items",
                    "is-last",
                    "height",
                    "config",
                    "no-overlay-focus",
                    "focus-value",
                    "onSelected",
                    "onHoverValue",
                  ]
                )),
          ])
        )
      );
    },
  }),
  ck = { key: 0, class: "dp__time_input" },
  dk = ["aria-label", "onKeydown", "onClick"],
  mk = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  gk = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  vk = ["aria-label", "disabled", "onKeydown", "onClick"],
  pk = ["aria-label", "onKeydown", "onClick"],
  fk = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_l" }, null, -1),
  hk = E("span", { class: "dp__tp_inline_btn_bar dp__tp_btn_in_r" }, null, -1),
  yk = { key: 0 },
  bk = ["aria-label", "onKeydown"],
  _k = re({
    compatConfig: { MODE: 3 },
    __name: "TimeInput",
    props: {
      hours: { type: Number, default: 0 },
      minutes: { type: Number, default: 0 },
      seconds: { type: Number, default: 0 },
      closeTimePickerBtn: { type: Object, default: null },
      order: { type: Number, default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...Jt,
    },
    emits: [
      "set-hours",
      "set-minutes",
      "update:hours",
      "update:minutes",
      "update:seconds",
      "reset-flow",
      "mounted",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { setTimePickerElements: i, setTimePickerBackRef: r } = Ea(),
        {
          defaultedAriaLabels: l,
          defaultedTransitions: s,
          defaultedFilters: m,
          defaultedConfig: g,
        } = gt(o),
        { transitionName: d, showTransition: v } = zn(s),
        h = va({ hours: !1, minutes: !1, seconds: !1 }),
        y = M("AM"),
        k = M(null),
        T = M([]);
      Ee(() => {
        t("mounted");
      });
      const _ = (w) =>
          at(new Date(), {
            hours: w.hours,
            minutes: w.minutes,
            seconds: o.enableSeconds ? w.seconds : 0,
            milliseconds: 0,
          }),
        b = u(() => (w) => B(w, o[w]) || D(w, o[w])),
        A = u(() => ({
          hours: o.hours,
          minutes: o.minutes,
          seconds: o.seconds,
        })),
        D = (w, ae) =>
          o.range && !o.disableTimeRangeValidation
            ? !o.validateTime(w, ae)
            : !1,
        I = (w, ae) => {
          if (o.range && !o.disableTimeRangeValidation) {
            const ve = ae ? +o[`${w}Increment`] : -+o[`${w}Increment`],
              se = o[w] + ve;
            return !o.validateTime(w, se);
          }
          return !1;
        },
        R = u(() => (w) => !V(+o[w] + +o[`${w}Increment`], w) || I(w, !0)),
        L = u(() => (w) => !V(+o[w] - +o[`${w}Increment`], w) || I(w, !1)),
        K = (w, ae) => Gs(at(ne(), w), ae),
        W = (w, ae) => Hw(at(ne(), w), ae),
        C = u(() => ({
          dp__time_col: !0,
          dp__time_col_block: !o.timePickerInline,
          dp__time_col_reg_block:
            !o.enableSeconds && o.is24 && !o.timePickerInline,
          dp__time_col_reg_inline:
            !o.enableSeconds && o.is24 && o.timePickerInline,
          dp__time_col_reg_with_button: !o.enableSeconds && !o.is24,
          dp__time_col_sec: o.enableSeconds && o.is24,
          dp__time_col_sec_with_button: o.enableSeconds && !o.is24,
        })),
        H = u(() => {
          const w = [
            { type: "hours" },
            { type: "", separator: !0 },
            { type: "minutes" },
          ];
          return o.enableSeconds
            ? w.concat([{ type: "", separator: !0 }, { type: "seconds" }])
            : w;
        }),
        F = u(() => H.value.filter((w) => !w.separator)),
        Q = u(() => (w) => {
          if (w === "hours") {
            const ae = Y(+o.hours);
            return { text: ae < 10 ? `0${ae}` : `${ae}`, value: ae };
          }
          return { text: o[w] < 10 ? `0${o[w]}` : `${o[w]}`, value: o[w] };
        }),
        B = (w, ae) => {
          var ve;
          if (!o.disabledTimesConfig) return !1;
          const se = o.disabledTimesConfig(
            o.order,
            w === "hours" ? ae : void 0
          );
          return se[w] ? !!((ve = se[w]) != null && ve.includes(ae)) : !0;
        },
        P = (w) => {
          const ae = o.is24 ? 24 : 12,
            ve = w === "hours" ? ae : 60,
            se = +o[`${w}GridIncrement`],
            be = w === "hours" && !o.is24 ? se : 0,
            de = [];
          for (let z = be; z < ve; z += se)
            de.push({ value: z, text: z < 10 ? `0${z}` : `${z}` });
          return (
            w === "hours" && !o.is24 && de.push({ value: 0, text: "12" }),
            cn(de, (z) => ({
              active: !1,
              disabled:
                m.value.times[w].includes(z.value) ||
                !V(z.value, w) ||
                B(w, z.value) ||
                D(w, z.value),
            }))
          );
        },
        V = (w, ae) => {
          const ve = o.minTime ? _(Xo(o.minTime)) : null,
            se = o.maxTime ? _(Xo(o.maxTime)) : null,
            be = _(Xo(A.value, ae, w));
          return ve && se
            ? (Fn(be, se) || Xa(be, se)) && (Yn(be, ve) || Xa(be, ve))
            : ve
            ? Yn(be, ve) || Xa(be, ve)
            : se
            ? Fn(be, se) || Xa(be, se)
            : !0;
        },
        U = (w) => o[`no${w[0].toUpperCase() + w.slice(1)}Overlay`],
        G = (w) => {
          U(w) || ((h[w] = !h[w]), h[w] || t("overlay-closed"));
        },
        S = (w) => (w === "hours" ? Kt : w === "minutes" ? ia : sn),
        p = (w, ae = !0) => {
          const ve = ae ? K : W,
            se = ae ? +o[`${w}Increment`] : -+o[`${w}Increment`];
          V(+o[w] + se, w) &&
            t(
              `update:${w}`,
              S(w)(ve({ [w]: +o[w] }, { [w]: +o[`${w}Increment`] }))
            );
        },
        Y = (w) =>
          o.is24 ? w : (w >= 12 ? (y.value = "PM") : (y.value = "AM"), m1(w)),
        j = () => {
          y.value === "PM"
            ? ((y.value = "AM"), t("update:hours", o.hours - 12))
            : ((y.value = "PM"), t("update:hours", o.hours + 12)),
            t("am-pm-change", y.value);
        },
        ee = (w) => {
          h[w] = !0;
        },
        J = (w, ae, ve) => {
          if (w && o.arrowNavigation) {
            Array.isArray(T.value[ae])
              ? (T.value[ae][ve] = w)
              : (T.value[ae] = [w]);
            const se = T.value.reduce(
              (be, de) => de.map((z, ie) => [...(be[ie] || []), de[ie]]),
              []
            );
            r(o.closeTimePickerBtn),
              k.value && (se[1] = se[1].concat(k.value)),
              i(se, o.order);
          }
        },
        N = (w, ae) => (
          G(w),
          w === "hours" && !o.is24
            ? t(`update:${w}`, y.value === "PM" ? ae + 12 : ae)
            : t(`update:${w}`, ae)
        );
      return (
        n({ openChildCmp: ee }),
        (w, ae) => {
          var ve;
          return w.disabled
            ? O("", !0)
            : (c(),
              f("div", ck, [
                (c(!0),
                f(
                  ge,
                  null,
                  we(H.value, (se, be) => {
                    var de, z, ie;
                    return (
                      c(),
                      f(
                        "div",
                        { key: be, class: Z(C.value) },
                        [
                          se.separator
                            ? (c(), f(ge, { key: 0 }, [Re(" : ")], 64))
                            : (c(),
                              f(
                                ge,
                                { key: 1 },
                                [
                                  E(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (De) => J(De, be, 0),
                                      type: "button",
                                      class: Z({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !w.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          w.timePickerInline,
                                        dp__tp_inline_btn_top:
                                          w.timePickerInline,
                                        dp__inc_dec_button_disabled: R.value(
                                          se.type
                                        ),
                                      }),
                                      "aria-label":
                                        (de = x(l)) == null
                                          ? void 0
                                          : de.incrementValue(se.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Ae(
                                          Me((De) => p(se.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Ae(
                                          Me((De) => p(se.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (De) => p(se.type),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), f(ge, { key: 1 }, [mk, gk], 64))
                                        : (c(),
                                          f(
                                            ge,
                                            { key: 0 },
                                            [
                                              w.$slots["arrow-up"]
                                                ? te(w.$slots, "arrow-up", {
                                                    key: 0,
                                                  })
                                                : O("", !0),
                                              w.$slots["arrow-up"]
                                                ? O("", !0)
                                                : (c(), q(x(di), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    dk
                                  ),
                                  E(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (De) => J(De, be, 1),
                                      type: "button",
                                      "aria-label":
                                        (z = x(l)) == null
                                          ? void 0
                                          : z.openTpOverlay(se.type),
                                      class: Z({
                                        dp__time_display: !0,
                                        dp__time_display_block:
                                          !w.timePickerInline,
                                        dp__time_display_inline:
                                          w.timePickerInline,
                                        "dp--time-invalid": b.value(se.type),
                                        "dp--time-overlay-btn": !b.value(
                                          se.type
                                        ),
                                      }),
                                      disabled: U(se.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Ae(
                                          Me((De) => G(se.type), ["prevent"]),
                                          ["enter"]
                                        ),
                                        Ae(
                                          Me((De) => G(se.type), ["prevent"]),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (De) => G(se.type),
                                    },
                                    [
                                      w.$slots[se.type]
                                        ? te(w.$slots, se.type, {
                                            key: 0,
                                            text: Q.value(se.type).text,
                                            value: Q.value(se.type).value,
                                          })
                                        : O("", !0),
                                      w.$slots[se.type]
                                        ? O("", !0)
                                        : (c(),
                                          f(
                                            ge,
                                            { key: 1 },
                                            [Re(X(Q.value(se.type).text), 1)],
                                            64
                                          )),
                                    ],
                                    42,
                                    vk
                                  ),
                                  E(
                                    "button",
                                    {
                                      ref_for: !0,
                                      ref: (De) => J(De, be, 2),
                                      type: "button",
                                      class: Z({
                                        dp__btn: !0,
                                        dp__inc_dec_button: !w.timePickerInline,
                                        dp__inc_dec_button_inline:
                                          w.timePickerInline,
                                        dp__tp_inline_btn_bottom:
                                          w.timePickerInline,
                                        dp__inc_dec_button_disabled: L.value(
                                          se.type
                                        ),
                                      }),
                                      "aria-label":
                                        (ie = x(l)) == null
                                          ? void 0
                                          : ie.decrementValue(se.type),
                                      tabindex: "0",
                                      onKeydown: [
                                        Ae(
                                          Me(
                                            (De) => p(se.type, !1),
                                            ["prevent"]
                                          ),
                                          ["enter"]
                                        ),
                                        Ae(
                                          Me(
                                            (De) => p(se.type, !1),
                                            ["prevent"]
                                          ),
                                          ["space"]
                                        ),
                                      ],
                                      onClick: (De) => p(se.type, !1),
                                    },
                                    [
                                      o.timePickerInline
                                        ? (c(), f(ge, { key: 1 }, [fk, hk], 64))
                                        : (c(),
                                          f(
                                            ge,
                                            { key: 0 },
                                            [
                                              w.$slots["arrow-down"]
                                                ? te(w.$slots, "arrow-down", {
                                                    key: 0,
                                                  })
                                                : O("", !0),
                                              w.$slots["arrow-down"]
                                                ? O("", !0)
                                                : (c(), q(x(mi), { key: 1 })),
                                            ],
                                            64
                                          )),
                                    ],
                                    42,
                                    pk
                                  ),
                                ],
                                64
                              )),
                        ],
                        2
                      )
                    );
                  }),
                  128
                )),
                w.is24
                  ? O("", !0)
                  : (c(),
                    f("div", yk, [
                      w.$slots["am-pm-button"]
                        ? te(w.$slots, "am-pm-button", {
                            key: 0,
                            toggle: j,
                            value: y.value,
                          })
                        : O("", !0),
                      w.$slots["am-pm-button"]
                        ? O("", !0)
                        : (c(),
                          f(
                            "button",
                            {
                              key: 1,
                              ref_key: "amPmButton",
                              ref: k,
                              type: "button",
                              class: "dp__pm_am_button",
                              role: "button",
                              "aria-label":
                                (ve = x(l)) == null ? void 0 : ve.amPmButton,
                              tabindex: "0",
                              onClick: j,
                              onKeydown: [
                                Ae(Me(j, ["prevent"]), ["enter"]),
                                Ae(Me(j, ["prevent"]), ["space"]),
                              ],
                            },
                            X(y.value),
                            41,
                            bk
                          )),
                    ])),
                (c(!0),
                f(
                  ge,
                  null,
                  we(
                    F.value,
                    (se, be) => (
                      c(),
                      q(
                        At,
                        { key: be, name: x(d)(h[se.type]), css: x(v) },
                        {
                          default: fe(() => [
                            h[se.type]
                              ? (c(),
                                q(
                                  Qn,
                                  {
                                    key: 0,
                                    items: P(se.type),
                                    "is-last":
                                      w.autoApply && !x(g).keepActionRow,
                                    "esc-close": w.escClose,
                                    type: se.type,
                                    "text-input": w.textInput,
                                    config: w.config,
                                    "arrow-navigation": w.arrowNavigation,
                                    onSelected: (de) => N(se.type, de),
                                    onToggle: (de) => G(se.type),
                                    onResetFlow:
                                      ae[0] ||
                                      (ae[0] = (de) => w.$emit("reset-flow")),
                                  },
                                  Et(
                                    {
                                      "button-icon": fe(() => [
                                        w.$slots["clock-icon"]
                                          ? te(w.$slots, "clock-icon", {
                                              key: 0,
                                            })
                                          : O("", !0),
                                        w.$slots["clock-icon"]
                                          ? O("", !0)
                                          : (c(),
                                            q(
                                              mn(
                                                w.timePickerInline
                                                  ? x(pn)
                                                  : x(ci)
                                              ),
                                              { key: 1 }
                                            )),
                                      ]),
                                      _: 2,
                                    },
                                    [
                                      w.$slots[`${se.type}-overlay-value`]
                                        ? {
                                            name: "item",
                                            fn: fe(({ item: de }) => [
                                              te(
                                                w.$slots,
                                                `${se.type}-overlay-value`,
                                                {
                                                  text: de.text,
                                                  value: de.value,
                                                }
                                              ),
                                            ]),
                                            key: "0",
                                          }
                                        : void 0,
                                    ]
                                  ),
                                  1032,
                                  [
                                    "items",
                                    "is-last",
                                    "esc-close",
                                    "type",
                                    "text-input",
                                    "config",
                                    "arrow-navigation",
                                    "onSelected",
                                    "onToggle",
                                  ]
                                ))
                              : O("", !0),
                          ]),
                          _: 2,
                        },
                        1032,
                        ["name", "css"]
                      )
                    )
                  ),
                  128
                )),
              ]));
        }
      );
    },
  }),
  wk = { class: "dp--tp-wrap" },
  kk = ["aria-label", "tabindex"],
  Sk = ["tabindex"],
  Tk = ["aria-label"],
  Au = re({
    compatConfig: { MODE: 3 },
    __name: "TimePicker",
    props: {
      hours: { type: [Number, Array], default: 0 },
      minutes: { type: [Number, Array], default: 0 },
      seconds: { type: [Number, Array], default: 0 },
      disabledTimesConfig: { type: Function, default: null },
      validateTime: { type: Function, default: () => !1 },
      ...Jt,
    },
    emits: [
      "update:hours",
      "update:minutes",
      "update:seconds",
      "mount",
      "reset-flow",
      "overlay-opened",
      "overlay-closed",
      "am-pm-change",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMatrix: i, setTimePicker: r } = Ea(),
        l = Ua(),
        {
          defaultedTransitions: s,
          defaultedAriaLabels: m,
          defaultedTextInput: g,
          defaultedConfig: d,
        } = gt(o),
        { transitionName: v, showTransition: h } = zn(s),
        { hideNavigationButtons: y } = To(),
        k = M(null),
        T = M(null),
        _ = M([]),
        b = M(null);
      Ee(() => {
        t("mount"),
          !o.timePicker && o.arrowNavigation
            ? i([ft(k.value)], "time")
            : r(!0, o.timePicker);
      });
      const A = u(() =>
          o.range && o.modelAuto ? bu(o.internalModelValue) : !0
        ),
        D = M(!1),
        I = (P) => ({
          hours: Array.isArray(o.hours) ? o.hours[P] : o.hours,
          minutes: Array.isArray(o.minutes) ? o.minutes[P] : o.minutes,
          seconds: Array.isArray(o.seconds) ? o.seconds[P] : o.seconds,
        }),
        R = u(() => {
          const P = [];
          if (o.range) for (let V = 0; V < 2; V++) P.push(I(V));
          else P.push(I(0));
          return P;
        }),
        L = (P, V = !1, U = "") => {
          V || t("reset-flow"),
            (D.value = P),
            t(P ? "overlay-opened" : "overlay-closed"),
            o.arrowNavigation && r(P),
            Dt(() => {
              U !== "" && _.value[0] && _.value[0].openChildCmp(U);
            });
        },
        K = u(() => ({
          dp__btn: !0,
          dp__button: !0,
          dp__button_bottom: o.autoApply && !d.value.keepActionRow,
        })),
        W = xt(l, "timePicker"),
        C = (P, V, U) =>
          o.range ? (V === 0 ? [P, R.value[1][U]] : [R.value[0][U], P]) : P,
        H = (P) => {
          t("update:hours", P);
        },
        F = (P) => {
          t("update:minutes", P);
        },
        Q = (P) => {
          t("update:seconds", P);
        },
        B = () => {
          if (b.value && !g.value.enabled && !o.noOverlayFocus) {
            const P = v1(b.value);
            P && P.focus({ preventScroll: !0 });
          }
        };
      return (
        n({ toggleTimePicker: L }),
        (P, V) => {
          var U;
          return (
            c(),
            f("div", wk, [
              !P.timePicker && !P.timePickerInline
                ? ue(
                    (c(),
                    f(
                      "button",
                      {
                        key: 0,
                        ref_key: "openTimePickerBtn",
                        ref: k,
                        type: "button",
                        class: Z(K.value),
                        "aria-label":
                          (U = x(m)) == null ? void 0 : U.openTimePicker,
                        tabindex: P.noOverlayFocus ? void 0 : 0,
                        onKeydown: [
                          V[0] || (V[0] = Ae((G) => L(!0), ["enter"])),
                          V[1] || (V[1] = Ae((G) => L(!0), ["space"])),
                        ],
                        onClick: V[2] || (V[2] = (G) => L(!0)),
                      },
                      [
                        P.$slots["clock-icon"]
                          ? te(P.$slots, "clock-icon", { key: 0 })
                          : O("", !0),
                        P.$slots["clock-icon"]
                          ? O("", !0)
                          : (c(), q(x(ci), { key: 1 })),
                      ],
                      42,
                      kk
                    )),
                    [[$t, !x(y)(P.hideNavigation, "time")]]
                  )
                : O("", !0),
              Oe(
                At,
                { name: x(v)(D.value), css: x(h) && !P.timePickerInline },
                {
                  default: fe(() => {
                    var G;
                    return [
                      D.value || P.timePicker || P.timePickerInline
                        ? (c(),
                          f(
                            "div",
                            {
                              key: 0,
                              ref_key: "overlayRef",
                              ref: b,
                              class: Z({
                                dp__overlay: !P.timePickerInline,
                                "dp--overlay-absolute":
                                  !o.timePicker && !P.timePickerInline,
                                "dp--overlay-relative": o.timePicker,
                              }),
                              style: Be(
                                P.timePicker
                                  ? { height: `${x(d).modeHeight}px` }
                                  : void 0
                              ),
                              tabindex: P.timePickerInline ? void 0 : 0,
                            },
                            [
                              E(
                                "div",
                                {
                                  class: Z(
                                    P.timePickerInline
                                      ? "dp__time_picker_inline_container"
                                      : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"
                                  ),
                                  style: { display: "flex" },
                                },
                                [
                                  P.$slots["time-picker-overlay"]
                                    ? te(P.$slots, "time-picker-overlay", {
                                        key: 0,
                                        hours: e.hours,
                                        minutes: e.minutes,
                                        seconds: e.seconds,
                                        setHours: H,
                                        setMinutes: F,
                                        setSeconds: Q,
                                      })
                                    : O("", !0),
                                  P.$slots["time-picker-overlay"]
                                    ? O("", !0)
                                    : (c(),
                                      f(
                                        "div",
                                        {
                                          key: 1,
                                          class: Z(
                                            P.timePickerInline
                                              ? "dp__flex"
                                              : "dp__overlay_row dp__flex_row"
                                          ),
                                        },
                                        [
                                          (c(!0),
                                          f(
                                            ge,
                                            null,
                                            we(R.value, (S, p) =>
                                              ue(
                                                (c(),
                                                q(
                                                  _k,
                                                  Ge(
                                                    { key: p },
                                                    {
                                                      ...P.$props,
                                                      order: p,
                                                      hours: S.hours,
                                                      minutes: S.minutes,
                                                      seconds: S.seconds,
                                                      closeTimePickerBtn:
                                                        T.value,
                                                      disabledTimesConfig:
                                                        e.disabledTimesConfig,
                                                      disabled:
                                                        p === 0
                                                          ? P.fixedStart
                                                          : P.fixedEnd,
                                                    },
                                                    {
                                                      ref_for: !0,
                                                      ref_key: "timeInputRefs",
                                                      ref: _,
                                                      "validate-time": (Y, j) =>
                                                        e.validateTime(
                                                          Y,
                                                          C(j, p, Y)
                                                        ),
                                                      "onUpdate:hours": (Y) =>
                                                        H(C(Y, p, "hours")),
                                                      "onUpdate:minutes": (Y) =>
                                                        F(C(Y, p, "minutes")),
                                                      "onUpdate:seconds": (Y) =>
                                                        Q(C(Y, p, "seconds")),
                                                      onMounted: B,
                                                      onOverlayClosed: B,
                                                      onAmPmChange:
                                                        V[3] ||
                                                        (V[3] = (Y) =>
                                                          P.$emit(
                                                            "am-pm-change",
                                                            Y
                                                          )),
                                                    }
                                                  ),
                                                  Et({ _: 2 }, [
                                                    we(x(W), (Y, j) => ({
                                                      name: Y,
                                                      fn: fe((ee) => [
                                                        te(
                                                          P.$slots,
                                                          Y,
                                                          nt(St(ee))
                                                        ),
                                                      ]),
                                                    })),
                                                  ]),
                                                  1040,
                                                  [
                                                    "validate-time",
                                                    "onUpdate:hours",
                                                    "onUpdate:minutes",
                                                    "onUpdate:seconds",
                                                  ]
                                                )),
                                                [[$t, p === 0 ? !0 : A.value]]
                                              )
                                            ),
                                            128
                                          )),
                                        ],
                                        2
                                      )),
                                  !P.timePicker && !P.timePickerInline
                                    ? ue(
                                        (c(),
                                        f(
                                          "button",
                                          {
                                            key: 2,
                                            ref_key: "closeTimePickerBtn",
                                            ref: T,
                                            type: "button",
                                            class: Z(K.value),
                                            "aria-label":
                                              (G = x(m)) == null
                                                ? void 0
                                                : G.closeTimePicker,
                                            tabindex: "0",
                                            onKeydown: [
                                              V[4] ||
                                                (V[4] = Ae(
                                                  (S) => L(!1),
                                                  ["enter"]
                                                )),
                                              V[5] ||
                                                (V[5] = Ae(
                                                  (S) => L(!1),
                                                  ["space"]
                                                )),
                                            ],
                                            onClick:
                                              V[6] || (V[6] = (S) => L(!1)),
                                          },
                                          [
                                            P.$slots["calendar-icon"]
                                              ? te(P.$slots, "calendar-icon", {
                                                  key: 0,
                                                })
                                              : O("", !0),
                                            P.$slots["calendar-icon"]
                                              ? O("", !0)
                                              : (c(), q(x(pn), { key: 1 })),
                                          ],
                                          42,
                                          Tk
                                        )),
                                        [[$t, !x(y)(P.hideNavigation, "time")]]
                                      )
                                    : O("", !0),
                                ],
                                2
                              ),
                            ],
                            14,
                            Sk
                          ))
                        : O("", !0),
                    ];
                  }),
                  _: 3,
                },
                8,
                ["name", "css"]
              ),
            ])
          );
        }
      );
    },
  }),
  Bu = (e, n, a, t) => {
    const o = (_, b) => (Array.isArray(n[_]) ? n[_][b] : n[_]),
      i = (_) =>
        e.enableSeconds
          ? Array.isArray(n.seconds)
            ? n.seconds[_]
            : n.seconds
          : 0,
      r = (_, b) =>
        _
          ? b !== void 0
            ? Ia(_, o("hours", b), o("minutes", b), i(b))
            : Ia(_, n.hours, n.minutes, i())
          : li(ne(), i(b)),
      l = (_, b) => {
        n[_] = b;
      },
      s = (_, b) => {
        const A = Object.fromEntries(
          Object.keys(n).map((D) => (D === _ ? [D, b] : [D, n[D]].slice()))
        );
        if (e.range && !e.disableTimeRangeValidation) {
          const D = (R) =>
              a.value
                ? Ia(a.value[R], A.hours[R], A.minutes[R], A.seconds[R])
                : null,
            I = (R) => ii(a.value[R], 0);
          return !(We(D(0), D(1)) && (Yn(D(0), I(1)) || Fn(D(1), I(0))));
        }
        return !0;
      },
      m = (_, b) => {
        s(_, b) && (l(_, b), t && t());
      },
      g = (_) => {
        m("hours", _);
      },
      d = (_) => {
        m("minutes", _);
      },
      v = (_) => {
        m("seconds", _);
      },
      h = (_, b, A, D) => {
        b && g(_), !b && !A && d(_), A && v(_), a.value && D(a.value);
      },
      y = (_) => {
        if (_) {
          const b = Array.isArray(_),
            A = b ? [+_[0].hours, +_[1].hours] : +_.hours,
            D = b ? [+_[0].minutes, +_[1].minutes] : +_.minutes,
            I = b ? [+_[0].seconds, +_[1].seconds] : +_.seconds;
          l("hours", A), l("minutes", D), e.enableSeconds && l("seconds", I);
        }
      },
      k = (_, b) => {
        const A = {
          hours: Array.isArray(n.hours) ? n.hours[_] : n.hours,
          disabledArr: [],
        };
        return (
          (b || b === 0) && (A.hours = b),
          Array.isArray(e.disabledTimes) &&
            (A.disabledArr =
              e.range && Array.isArray(e.disabledTimes[_])
                ? e.disabledTimes[_]
                : e.disabledTimes),
          A
        );
      },
      T = u(() => (_, b) => {
        var A;
        if (Array.isArray(e.disabledTimes)) {
          const { disabledArr: D, hours: I } = k(_, b),
            R = D.filter((L) => +L.hours === I);
          return ((A = R[0]) == null ? void 0 : A.minutes) === "*"
            ? { hours: [I], minutes: void 0, seconds: void 0 }
            : {
                hours: [],
                minutes: R?.map((L) => +L.minutes) ?? [],
                seconds: R?.map((L) => (L.seconds ? +L.seconds : void 0)) ?? [],
              };
        }
        return { hours: [], minutes: [], seconds: [] };
      });
    return {
      setTime: l,
      updateHours: g,
      updateMinutes: d,
      updateSeconds: v,
      getSetDateTime: r,
      updateTimeValues: h,
      getSecondsValue: i,
      assignStartTime: y,
      validateTime: s,
      disabledTimesConfig: T,
    };
  },
  Ck = (e, n) => {
    const { modelValue: a, time: t } = Kn(e, n),
      { defaultedStartTime: o } = gt(e),
      {
        updateTimeValues: i,
        getSetDateTime: r,
        setTime: l,
        assignStartTime: s,
        disabledTimesConfig: m,
        validateTime: g,
      } = Bu(e, t, a),
      d = (b) => {
        const { hours: A, minutes: D, seconds: I } = b;
        return { hours: +A, minutes: +D, seconds: I ? +I : 0 };
      },
      v = () => {
        if (e.startTime) {
          if (Array.isArray(e.startTime)) {
            const A = d(e.startTime[0]),
              D = d(e.startTime[1]);
            return [at(ne(), A), at(ne(), D)];
          }
          const b = d(e.startTime);
          return at(ne(), b);
        }
        return e.range ? [null, null] : null;
      },
      h = () => {
        if (e.range) {
          const [b, A] = v();
          a.value = [r(b, 0), r(A, 1)];
        } else a.value = r(v());
      },
      y = (b) =>
        Array.isArray(b) ? [Ra(ne(b[0])), Ra(ne(b[1]))] : [Ra(b ?? ne())],
      k = (b, A, D) => {
        l("hours", b), l("minutes", A), l("seconds", e.enableSeconds ? D : 0);
      },
      T = () => {
        const [b, A] = y(a.value);
        return e.range
          ? k(
              [b.hours, A.hours],
              [b.minutes, A.minutes],
              [b.seconds, A.minutes]
            )
          : k(b.hours, b.minutes, b.seconds);
      };
    Ee(() => {
      if (!e.shadow) return s(o.value), a.value ? T() : h();
    });
    const _ = () => {
      Array.isArray(a.value)
        ? (a.value = a.value.map((b, A) => b && r(b, A)))
        : (a.value = r(a.value)),
        n("time-update");
    };
    return {
      modelValue: a,
      time: t,
      disabledTimesConfig: m,
      updateTime: (b, A = !0, D = !1) => {
        i(b, A, D, _);
      },
      validateTime: g,
    };
  },
  Pk = re({
    compatConfig: { MODE: 3 },
    __name: "TimePickerSolo",
    props: { ...Jt },
    emits: ["update:internal-model-value", "time-update", "am-pm-change"],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Ua(),
        r = xt(i, "timePicker"),
        {
          time: l,
          modelValue: s,
          disabledTimesConfig: m,
          updateTime: g,
          validateTime: d,
        } = Ck(o, t);
      return (
        n({
          getSidebarProps: () => ({ modelValue: s, time: l, updateTime: g }),
        }),
        (v, h) => (
          c(),
          q(
            Po,
            { "multi-calendars": 0, stretch: "" },
            {
              default: fe(() => [
                Oe(
                  Au,
                  Ge(v.$props, {
                    hours: x(l).hours,
                    minutes: x(l).minutes,
                    seconds: x(l).seconds,
                    "internal-model-value": v.internalModelValue,
                    "disabled-times-config": x(m),
                    "validate-time": x(d),
                    "onUpdate:hours": h[0] || (h[0] = (y) => x(g)(y)),
                    "onUpdate:minutes": h[1] || (h[1] = (y) => x(g)(y, !1)),
                    "onUpdate:seconds": h[2] || (h[2] = (y) => x(g)(y, !1, !0)),
                    onAmPmChange:
                      h[3] || (h[3] = (y) => v.$emit("am-pm-change", y)),
                  }),
                  Et({ _: 2 }, [
                    we(x(r), (y, k) => ({
                      name: y,
                      fn: fe((T) => [te(v.$slots, y, nt(St(T)))]),
                    })),
                  ]),
                  1040,
                  [
                    "hours",
                    "minutes",
                    "seconds",
                    "internal-model-value",
                    "disabled-times-config",
                    "validate-time",
                  ]
                ),
              ]),
              _: 3,
            }
          )
        )
      );
    },
  }),
  Ik = { class: "dp__month_year_row" },
  Ek = ["aria-label", "onClick", "onKeydown"],
  Dk = re({
    compatConfig: { MODE: 3 },
    __name: "DpHeader",
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      instance: { type: Number, default: 0 },
      years: { type: Array, default: () => [] },
      months: { type: Array, default: () => [] },
      ...Jt,
    },
    emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          defaultedTransitions: i,
          defaultedAriaLabels: r,
          defaultedMultiCalendars: l,
          defaultedFilters: s,
          defaultedConfig: m,
          defaultedHighlight: g,
        } = gt(o),
        { transitionName: d, showTransition: v } = zn(i),
        { buildMatrix: h } = Ea(),
        {
          handleMonthYearChange: y,
          isDisabled: k,
          updateMonthYear: T,
        } = $1(o, t),
        { showLeftIcon: _, showRightIcon: b } = To(),
        A = M(!1),
        D = M(!1),
        I = M([null, null, null, null]);
      Ee(() => {
        t("mount");
      });
      const R = (p) => ({
          get: () => o[p],
          set: (Y) => {
            const j = p === qt.month ? qt.year : qt.month;
            t("update-month-year", { [p]: Y, [j]: o[j] }),
              p === qt.month ? B(!0) : P(!0);
          },
        }),
        L = u(R(qt.month)),
        K = u(R(qt.year)),
        W = u(() => (p) => ({
          month: o.month,
          year: o.year,
          items: p === qt.month ? o.months : o.years,
          instance: o.instance,
          updateMonthYear: T,
          toggle: p === qt.month ? B : P,
        })),
        C = u(
          () =>
            o.months.find((Y) => Y.value === o.month) || { text: "", value: 0 }
        ),
        H = u(() =>
          cn(o.months, (p) => {
            const Y = o.month === p.value,
              j =
                Wn(p.value, _u(o.year, o.minDate), wu(o.year, o.maxDate)) ||
                s.value.months.includes(p.value),
              ee = Iu(g.value, p.value, o.year);
            return { active: Y, disabled: j, highlighted: ee };
          })
        ),
        F = u(() =>
          cn(o.years, (p) => {
            const Y = o.year === p.value,
              j =
                Wn(p.value, dn(o.minDate), dn(o.maxDate)) ||
                s.value.years.includes(p.value),
              ee = hi(g.value, p.value);
            return { active: Y, disabled: j, highlighted: ee };
          })
        ),
        Q = (p, Y) => {
          Y !== void 0 ? (p.value = Y) : (p.value = !p.value),
            p.value || t("overlay-closed");
        },
        B = (p = !1, Y) => {
          V(p), Q(A, Y);
        },
        P = (p = !1, Y) => {
          V(p), Q(D, Y);
        },
        V = (p) => {
          p || t("reset-flow");
        },
        U = (p, Y) => {
          o.arrowNavigation && ((I.value[Y] = ft(p)), h(I.value, "monthYear"));
        },
        G = u(() => {
          var p, Y;
          return [
            {
              type: qt.month,
              index: 1,
              toggle: B,
              modelValue: L.value,
              updateModelValue: (j) => (L.value = j),
              text: C.value.text,
              showSelectionGrid: A.value,
              items: H.value,
              ariaLabel: (p = r.value) == null ? void 0 : p.openMonthsOverlay,
            },
            {
              type: qt.year,
              index: 2,
              toggle: P,
              modelValue: K.value,
              updateModelValue: (j) => (K.value = j),
              text: o.year,
              showSelectionGrid: D.value,
              items: F.value,
              ariaLabel: (Y = r.value) == null ? void 0 : Y.openYearsOverlay,
            },
          ];
        }),
        S = u(() =>
          o.disableYearSelect
            ? [G.value[0]]
            : o.yearFirst
            ? [...G.value].reverse()
            : G.value
        );
      return (
        n({
          toggleMonthPicker: B,
          toggleYearPicker: P,
          handleMonthYearChange: y,
        }),
        (p, Y) => {
          var j, ee, J;
          return (
            c(),
            f("div", Ik, [
              p.$slots["month-year"]
                ? te(
                    p.$slots,
                    "month-year",
                    nt(
                      Ge(
                        { key: 0 },
                        {
                          month: e.month,
                          year: e.year,
                          months: e.months,
                          years: e.years,
                          updateMonthYear: x(T),
                          handleMonthYearChange: x(y),
                          instance: e.instance,
                        }
                      )
                    )
                  )
                : (c(),
                  f(
                    ge,
                    { key: 1 },
                    [
                      x(_)(x(l), e.instance) && !p.vertical
                        ? (c(),
                          q(
                            An,
                            {
                              key: 0,
                              "aria-label":
                                (j = x(r)) == null ? void 0 : j.prevMonth,
                              disabled: x(k)(!1),
                              onActivate: Y[0] || (Y[0] = (N) => x(y)(!1, !0)),
                              onSetRef: Y[1] || (Y[1] = (N) => U(N, 0)),
                            },
                            {
                              default: fe(() => [
                                p.$slots["arrow-left"]
                                  ? te(p.$slots, "arrow-left", { key: 0 })
                                  : O("", !0),
                                p.$slots["arrow-left"]
                                  ? O("", !0)
                                  : (c(), q(x(si), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : O("", !0),
                      E(
                        "div",
                        {
                          class: Z([
                            "dp__month_year_wrap",
                            { dp__year_disable_select: p.disableYearSelect },
                          ]),
                        },
                        [
                          (c(!0),
                          f(
                            ge,
                            null,
                            we(
                              S.value,
                              (N, w) => (
                                c(),
                                f(
                                  ge,
                                  { key: N.type },
                                  [
                                    E(
                                      "button",
                                      {
                                        ref_for: !0,
                                        ref: (ae) => U(ae, w + 1),
                                        type: "button",
                                        class: "dp__btn dp__month_year_select",
                                        tabindex: "0",
                                        "aria-label": N.ariaLabel,
                                        onClick: N.toggle,
                                        onKeydown: [
                                          Ae(Me(N.toggle, ["prevent"]), [
                                            "enter",
                                          ]),
                                          Ae(Me(N.toggle, ["prevent"]), [
                                            "space",
                                          ]),
                                        ],
                                      },
                                      [
                                        p.$slots[N.type]
                                          ? te(p.$slots, N.type, {
                                              key: 0,
                                              text: N.text,
                                              value: o[N.type],
                                            })
                                          : O("", !0),
                                        p.$slots[N.type]
                                          ? O("", !0)
                                          : (c(),
                                            f(
                                              ge,
                                              { key: 1 },
                                              [Re(X(N.text), 1)],
                                              64
                                            )),
                                      ],
                                      40,
                                      Ek
                                    ),
                                    Oe(
                                      At,
                                      {
                                        name: x(d)(N.showSelectionGrid),
                                        css: x(v),
                                      },
                                      {
                                        default: fe(() => [
                                          N.showSelectionGrid
                                            ? (c(),
                                              q(
                                                Qn,
                                                {
                                                  key: 0,
                                                  items: N.items,
                                                  "arrow-navigation":
                                                    p.arrowNavigation,
                                                  "hide-navigation":
                                                    p.hideNavigation,
                                                  "is-last":
                                                    p.autoApply &&
                                                    !x(m).keepActionRow,
                                                  "skip-button-ref": !1,
                                                  config: p.config,
                                                  type: N.type,
                                                  "header-refs": [],
                                                  "esc-close": p.escClose,
                                                  "text-input": p.textInput,
                                                  onSelected:
                                                    N.updateModelValue,
                                                  onToggle: N.toggle,
                                                },
                                                Et(
                                                  {
                                                    "button-icon": fe(() => [
                                                      p.$slots["calendar-icon"]
                                                        ? te(
                                                            p.$slots,
                                                            "calendar-icon",
                                                            { key: 0 }
                                                          )
                                                        : O("", !0),
                                                      p.$slots["calendar-icon"]
                                                        ? O("", !0)
                                                        : (c(),
                                                          q(x(pn), { key: 1 })),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  [
                                                    p.$slots[
                                                      `${N.type}-overlay-value`
                                                    ]
                                                      ? {
                                                          name: "item",
                                                          fn: fe(
                                                            ({ item: ae }) => [
                                                              te(
                                                                p.$slots,
                                                                `${N.type}-overlay-value`,
                                                                {
                                                                  text: ae.text,
                                                                  value:
                                                                    ae.value,
                                                                }
                                                              ),
                                                            ]
                                                          ),
                                                          key: "0",
                                                        }
                                                      : void 0,
                                                    p.$slots[
                                                      `${N.type}-overlay`
                                                    ]
                                                      ? {
                                                          name: "overlay",
                                                          fn: fe(() => [
                                                            te(
                                                              p.$slots,
                                                              `${N.type}-overlay`,
                                                              nt(
                                                                St(
                                                                  W.value(
                                                                    N.type
                                                                  )
                                                                )
                                                              )
                                                            ),
                                                          ]),
                                                          key: "1",
                                                        }
                                                      : void 0,
                                                    p.$slots[
                                                      `${N.type}-overlay-header`
                                                    ]
                                                      ? {
                                                          name: "header",
                                                          fn: fe(() => [
                                                            te(
                                                              p.$slots,
                                                              `${N.type}-overlay-header`,
                                                              {
                                                                toggle:
                                                                  N.toggle,
                                                              }
                                                            ),
                                                          ]),
                                                          key: "2",
                                                        }
                                                      : void 0,
                                                  ]
                                                ),
                                                1032,
                                                [
                                                  "items",
                                                  "arrow-navigation",
                                                  "hide-navigation",
                                                  "is-last",
                                                  "config",
                                                  "type",
                                                  "esc-close",
                                                  "text-input",
                                                  "onSelected",
                                                  "onToggle",
                                                ]
                                              ))
                                            : O("", !0),
                                        ]),
                                        _: 2,
                                      },
                                      1032,
                                      ["name", "css"]
                                    ),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ],
                        2
                      ),
                      x(_)(x(l), e.instance) && p.vertical
                        ? (c(),
                          q(
                            An,
                            {
                              key: 1,
                              "aria-label":
                                (ee = x(r)) == null ? void 0 : ee.prevMonth,
                              disabled: x(k)(!1),
                              onActivate: Y[2] || (Y[2] = (N) => x(y)(!1, !0)),
                            },
                            {
                              default: fe(() => [
                                p.$slots["arrow-up"]
                                  ? te(p.$slots, "arrow-up", { key: 0 })
                                  : O("", !0),
                                p.$slots["arrow-up"]
                                  ? O("", !0)
                                  : (c(), q(x(di), { key: 1 })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["aria-label", "disabled"]
                          ))
                        : O("", !0),
                      x(b)(x(l), e.instance)
                        ? (c(),
                          q(
                            An,
                            {
                              key: 2,
                              ref: "rightIcon",
                              disabled: x(k)(!0),
                              "aria-label":
                                (J = x(r)) == null ? void 0 : J.nextMonth,
                              onActivate: Y[3] || (Y[3] = (N) => x(y)(!0, !0)),
                              onSetRef:
                                Y[4] ||
                                (Y[4] = (N) =>
                                  U(N, p.disableYearSelect ? 2 : 3)),
                            },
                            {
                              default: fe(() => [
                                p.$slots[
                                  p.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? te(
                                      p.$slots,
                                      p.vertical ? "arrow-down" : "arrow-right",
                                      { key: 0 }
                                    )
                                  : O("", !0),
                                p.$slots[
                                  p.vertical ? "arrow-down" : "arrow-right"
                                ]
                                  ? O("", !0)
                                  : (c(),
                                    q(mn(p.vertical ? x(mi) : x(ui)), {
                                      key: 1,
                                    })),
                              ]),
                              _: 3,
                            },
                            8,
                            ["disabled", "aria-label"]
                          ))
                        : O("", !0),
                    ],
                    64
                  )),
            ])
          );
        }
      );
    },
  }),
  Mk = ["aria-label"],
  Ok = { class: "dp__calendar_header", role: "row" },
  Ak = { key: 0, class: "dp__calendar_header_item", role: "gridcell" },
  Bk = E("div", { class: "dp__calendar_header_separator" }, null, -1),
  Lk = ["aria-label"],
  xk = { key: 0, role: "gridcell", class: "dp__calendar_item dp__week_num" },
  Rk = { class: "dp__cell_inner" },
  Hk = [
    "id",
    "aria-selected",
    "aria-disabled",
    "aria-label",
    "onClick",
    "onKeydown",
    "onMouseenter",
    "onMouseleave",
  ],
  Nk = re({
    compatConfig: { MODE: 3 },
    __name: "DpCalendar",
    props: {
      mappedDates: { type: Array, default: () => [] },
      instance: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      ...Jt,
    },
    emits: [
      "select-date",
      "set-hover-date",
      "handle-scroll",
      "mount",
      "handle-swipe",
      "handle-space",
      "tooltip-open",
      "tooltip-close",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        { buildMultiLevelMatrix: i } = Ea(),
        {
          defaultedTransitions: r,
          defaultedConfig: l,
          defaultedAriaLabels: s,
          defaultedMultiCalendars: m,
          defaultedWeekNumbers: g,
        } = gt(o),
        d = M(null),
        v = M({ bottom: "", left: "", transform: "" }),
        h = M([]),
        y = M(null),
        k = M(!0),
        T = M(""),
        _ = M({ startX: 0, endX: 0, startY: 0, endY: 0 }),
        b = M([]),
        A = M({ left: "50%" }),
        D = u(() => (o.calendar ? o.calendar(o.mappedDates) : o.mappedDates)),
        I = u(() =>
          o.dayNames
            ? Array.isArray(o.dayNames)
              ? o.dayNames
              : o.dayNames(o.locale, +o.weekStart)
            : d1(o.formatLocale, o.locale, +o.weekStart)
        );
      Ee(() => {
        t("mount", { cmp: "calendar", refs: h }),
          l.value.noSwipe ||
            (y.value &&
              (y.value.addEventListener("touchstart", P, { passive: !1 }),
              y.value.addEventListener("touchend", V, { passive: !1 }),
              y.value.addEventListener("touchmove", U, { passive: !1 }))),
          o.monthChangeOnScroll &&
            y.value &&
            y.value.addEventListener("wheel", p, { passive: !1 });
      });
      const R = (N) =>
          N
            ? o.vertical
              ? "vNext"
              : "next"
            : o.vertical
            ? "vPrevious"
            : "previous",
        L = (N, w) => {
          if (o.transitions) {
            const ae = Ct(ga(ne(), o.month, o.year));
            (T.value = Tt(Ct(ga(ne(), N, w)), ae)
              ? r.value[R(!0)]
              : r.value[R(!1)]),
              (k.value = !1),
              Dt(() => {
                k.value = !0;
              });
          }
        },
        K = u(() => ({ [o.calendarClassName]: !!o.calendarClassName })),
        W = u(() => (N) => {
          const w = g1(N);
          return {
            dp__marker_dot: w.type === "dot",
            dp__marker_line: w.type === "line",
          };
        }),
        C = u(() => (N) => We(N, d.value)),
        H = u(() => ({
          dp__calendar: !0,
          dp__calendar_next: m.value.count > 0 && o.instance !== 0,
        })),
        F = u(() => (N) => o.hideOffsetDates ? N.current : !0),
        Q = async (N, w, ae) => {
          var ve, se;
          if (
            (t("set-hover-date", N),
            (se = (ve = N.marker) == null ? void 0 : ve.tooltip) != null &&
              se.length)
          ) {
            const be = ft(h.value[w][ae]);
            if (be) {
              const { width: de, height: z } = be.getBoundingClientRect();
              d.value = N.value;
              let ie = { left: `${de / 2}px` },
                De = -50;
              if ((await Dt(), b.value[0])) {
                const { left: me, width: Pe } =
                  b.value[0].getBoundingClientRect();
                me < 0 &&
                  ((ie = { left: "0" }),
                  (De = 0),
                  (A.value.left = `${de / 2}px`)),
                  window.innerWidth < me + Pe &&
                    ((ie = { right: "0" }),
                    (De = 0),
                    (A.value.left = `${Pe - de / 2}px`));
              }
              (v.value = {
                bottom: `${z}px`,
                ...ie,
                transform: `translateX(${De}%)`,
              }),
                t("tooltip-open", N.marker);
            }
          }
        },
        B = (N) => {
          d.value &&
            ((d.value = null),
            (v.value = JSON.parse(
              JSON.stringify({ bottom: "", left: "", transform: "" })
            )),
            t("tooltip-close", N.marker));
        },
        P = (N) => {
          (_.value.startX = N.changedTouches[0].screenX),
            (_.value.startY = N.changedTouches[0].screenY);
        },
        V = (N) => {
          (_.value.endX = N.changedTouches[0].screenX),
            (_.value.endY = N.changedTouches[0].screenY),
            G();
        },
        U = (N) => {
          o.vertical && !o.inline && N.preventDefault();
        },
        G = () => {
          const N = o.vertical ? "Y" : "X";
          Math.abs(_.value[`start${N}`] - _.value[`end${N}`]) > 10 &&
            t(
              "handle-swipe",
              _.value[`start${N}`] > _.value[`end${N}`] ? "right" : "left"
            );
        },
        S = (N, w, ae) => {
          N &&
            (Array.isArray(h.value[w])
              ? (h.value[w][ae] = N)
              : (h.value[w] = [N])),
            o.arrowNavigation && i(h.value, "calendar");
        },
        p = (N) => {
          o.monthChangeOnScroll && (N.preventDefault(), t("handle-scroll", N));
        },
        Y = (N) =>
          g.value.type === "local"
            ? k0(N.value, { weekStartsOn: +o.weekStart })
            : g.value.type === "iso"
            ? y0(N.value)
            : typeof g.value.type == "function"
            ? g.value.type(N.value)
            : "",
        j = (N) => {
          const w = N[0];
          return g.value.hideOnOffsetDates
            ? N.some((ae) => ae.current)
              ? Y(w)
              : ""
            : Y(w);
        },
        ee = (N, w) => {
          Pa(N, l.value), t("select-date", w);
        },
        J = (N) => {
          Pa(N, l.value);
        };
      return (
        n({ triggerTransition: L }),
        (N, w) => {
          var ae;
          return (
            c(),
            f(
              "div",
              { class: Z(H.value) },
              [
                E(
                  "div",
                  {
                    ref_key: "calendarWrapRef",
                    ref: y,
                    role: "grid",
                    class: Z(K.value),
                    "aria-label":
                      (ae = x(s)) == null ? void 0 : ae.calendarWrap,
                  },
                  [
                    (c(),
                    f(
                      ge,
                      { key: 0 },
                      [
                        E("div", Ok, [
                          N.weekNumbers
                            ? (c(), f("div", Ak, X(N.weekNumName), 1))
                            : O("", !0),
                          (c(!0),
                          f(
                            ge,
                            null,
                            we(
                              I.value,
                              (ve, se) => (
                                c(),
                                f(
                                  "div",
                                  {
                                    key: se,
                                    class: "dp__calendar_header_item",
                                    role: "gridcell",
                                  },
                                  [
                                    N.$slots["calendar-header"]
                                      ? te(N.$slots, "calendar-header", {
                                          key: 0,
                                          day: ve,
                                          index: se,
                                        })
                                      : O("", !0),
                                    N.$slots["calendar-header"]
                                      ? O("", !0)
                                      : (c(),
                                        f(ge, { key: 1 }, [Re(X(ve), 1)], 64)),
                                  ]
                                )
                              )
                            ),
                            128
                          )),
                        ]),
                        Bk,
                        Oe(
                          At,
                          { name: T.value, css: !!N.transitions },
                          {
                            default: fe(() => {
                              var ve;
                              return [
                                k.value
                                  ? (c(),
                                    f(
                                      "div",
                                      {
                                        key: 0,
                                        class: "dp__calendar",
                                        role: "rowgroup",
                                        "aria-label":
                                          ((ve = x(s)) == null
                                            ? void 0
                                            : ve.calendarDays) || void 0,
                                      },
                                      [
                                        (c(!0),
                                        f(
                                          ge,
                                          null,
                                          we(
                                            D.value,
                                            (se, be) => (
                                              c(),
                                              f(
                                                "div",
                                                {
                                                  key: be,
                                                  class: "dp__calendar_row",
                                                  role: "row",
                                                },
                                                [
                                                  N.weekNumbers
                                                    ? (c(),
                                                      f("div", xk, [
                                                        E(
                                                          "div",
                                                          Rk,
                                                          X(j(se.days)),
                                                          1
                                                        ),
                                                      ]))
                                                    : O("", !0),
                                                  (c(!0),
                                                  f(
                                                    ge,
                                                    null,
                                                    we(se.days, (de, z) => {
                                                      var ie, De, me;
                                                      return (
                                                        c(),
                                                        f(
                                                          "div",
                                                          {
                                                            id: de.value
                                                              .toISOString()
                                                              .split("T")[0],
                                                            ref_for: !0,
                                                            ref: (Pe) =>
                                                              S(Pe, be, z),
                                                            key: z + be,
                                                            role: "gridcell",
                                                            class:
                                                              "dp__calendar_item",
                                                            "aria-selected":
                                                              de.classData
                                                                .dp__active_date ||
                                                              de.classData
                                                                .dp__range_start ||
                                                              de.classData
                                                                .dp__range_start,
                                                            "aria-disabled":
                                                              de.classData
                                                                .dp__cell_disabled ||
                                                              void 0,
                                                            "aria-label":
                                                              (De =
                                                                (ie = x(s)) ==
                                                                null
                                                                  ? void 0
                                                                  : ie.day) ==
                                                              null
                                                                ? void 0
                                                                : De.call(
                                                                    ie,
                                                                    de
                                                                  ),
                                                            tabindex: "0",
                                                            onClick: Me(
                                                              (Pe) =>
                                                                ee(Pe, de),
                                                              ["prevent"]
                                                            ),
                                                            onKeydown: [
                                                              Ae(
                                                                (Pe) =>
                                                                  N.$emit(
                                                                    "select-date",
                                                                    de
                                                                  ),
                                                                ["enter"]
                                                              ),
                                                              Ae(
                                                                (Pe) =>
                                                                  N.$emit(
                                                                    "handle-space",
                                                                    de
                                                                  ),
                                                                ["space"]
                                                              ),
                                                            ],
                                                            onMouseenter: (
                                                              Pe
                                                            ) => Q(de, be, z),
                                                            onMouseleave: (
                                                              Pe
                                                            ) => B(de),
                                                          },
                                                          [
                                                            E(
                                                              "div",
                                                              {
                                                                class: Z([
                                                                  "dp__cell_inner",
                                                                  de.classData,
                                                                ]),
                                                              },
                                                              [
                                                                N.$slots.day &&
                                                                F.value(de)
                                                                  ? te(
                                                                      N.$slots,
                                                                      "day",
                                                                      {
                                                                        key: 0,
                                                                        day: +de.text,
                                                                        date: de.value,
                                                                      }
                                                                    )
                                                                  : O("", !0),
                                                                N.$slots.day
                                                                  ? O("", !0)
                                                                  : (c(),
                                                                    f(
                                                                      ge,
                                                                      {
                                                                        key: 1,
                                                                      },
                                                                      [
                                                                        Re(
                                                                          X(
                                                                            de.text
                                                                          ),
                                                                          1
                                                                        ),
                                                                      ],
                                                                      64
                                                                    )),
                                                                de.marker &&
                                                                F.value(de)
                                                                  ? (c(),
                                                                    f(
                                                                      ge,
                                                                      {
                                                                        key: 2,
                                                                      },
                                                                      [
                                                                        N.$slots
                                                                          .marker
                                                                          ? te(
                                                                              N.$slots,
                                                                              "marker",
                                                                              {
                                                                                key: 0,
                                                                                marker:
                                                                                  de.marker,
                                                                                day: +de.text,
                                                                                date: de.value,
                                                                              }
                                                                            )
                                                                          : (c(),
                                                                            f(
                                                                              "div",
                                                                              {
                                                                                key: 1,
                                                                                class:
                                                                                  Z(
                                                                                    W.value(
                                                                                      de.marker
                                                                                    )
                                                                                  ),
                                                                                style:
                                                                                  Be(
                                                                                    de
                                                                                      .marker
                                                                                      .color
                                                                                      ? {
                                                                                          backgroundColor:
                                                                                            de
                                                                                              .marker
                                                                                              .color,
                                                                                        }
                                                                                      : {}
                                                                                  ),
                                                                              },
                                                                              null,
                                                                              6
                                                                            )),
                                                                      ],
                                                                      64
                                                                    ))
                                                                  : O("", !0),
                                                                C.value(
                                                                  de.value
                                                                )
                                                                  ? (c(),
                                                                    f(
                                                                      "div",
                                                                      {
                                                                        key: 3,
                                                                        ref_for:
                                                                          !0,
                                                                        ref_key:
                                                                          "activeTooltip",
                                                                        ref: b,
                                                                        class:
                                                                          "dp__marker_tooltip",
                                                                        style:
                                                                          Be(
                                                                            v.value
                                                                          ),
                                                                      },
                                                                      [
                                                                        (me =
                                                                          de.marker) !=
                                                                          null &&
                                                                        me.tooltip
                                                                          ? (c(),
                                                                            f(
                                                                              "div",
                                                                              {
                                                                                key: 0,
                                                                                class:
                                                                                  "dp__tooltip_content",
                                                                                onClick:
                                                                                  J,
                                                                              },
                                                                              [
                                                                                (c(
                                                                                  !0
                                                                                ),
                                                                                f(
                                                                                  ge,
                                                                                  null,
                                                                                  we(
                                                                                    de
                                                                                      .marker
                                                                                      .tooltip,
                                                                                    (
                                                                                      Pe,
                                                                                      ze
                                                                                    ) => (
                                                                                      c(),
                                                                                      f(
                                                                                        "div",
                                                                                        {
                                                                                          key: ze,
                                                                                          class:
                                                                                            "dp__tooltip_text",
                                                                                        },
                                                                                        [
                                                                                          N
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? te(
                                                                                                N.$slots,
                                                                                                "marker-tooltip",
                                                                                                {
                                                                                                  key: 0,
                                                                                                  tooltip:
                                                                                                    Pe,
                                                                                                  day: de.value,
                                                                                                }
                                                                                              )
                                                                                            : O(
                                                                                                "",
                                                                                                !0
                                                                                              ),
                                                                                          N
                                                                                            .$slots[
                                                                                            "marker-tooltip"
                                                                                          ]
                                                                                            ? O(
                                                                                                "",
                                                                                                !0
                                                                                              )
                                                                                            : (c(),
                                                                                              f(
                                                                                                ge,
                                                                                                {
                                                                                                  key: 1,
                                                                                                },
                                                                                                [
                                                                                                  E(
                                                                                                    "div",
                                                                                                    {
                                                                                                      class:
                                                                                                        "dp__tooltip_mark",
                                                                                                      style:
                                                                                                        Be(
                                                                                                          Pe.color
                                                                                                            ? {
                                                                                                                backgroundColor:
                                                                                                                  Pe.color,
                                                                                                              }
                                                                                                            : {}
                                                                                                        ),
                                                                                                    },
                                                                                                    null,
                                                                                                    4
                                                                                                  ),
                                                                                                  E(
                                                                                                    "div",
                                                                                                    null,
                                                                                                    X(
                                                                                                      Pe.text
                                                                                                    ),
                                                                                                    1
                                                                                                  ),
                                                                                                ],
                                                                                                64
                                                                                              )),
                                                                                        ]
                                                                                      )
                                                                                    )
                                                                                  ),
                                                                                  128
                                                                                )),
                                                                                E(
                                                                                  "div",
                                                                                  {
                                                                                    class:
                                                                                      "dp__arrow_bottom_tp",
                                                                                    style:
                                                                                      Be(
                                                                                        A.value
                                                                                      ),
                                                                                  },
                                                                                  null,
                                                                                  4
                                                                                ),
                                                                              ]
                                                                            ))
                                                                          : O(
                                                                              "",
                                                                              !0
                                                                            ),
                                                                      ],
                                                                      4
                                                                    ))
                                                                  : O("", !0),
                                                              ],
                                                              2
                                                            ),
                                                          ],
                                                          40,
                                                          Hk
                                                        )
                                                      );
                                                    }),
                                                    128
                                                  )),
                                                ]
                                              )
                                            )
                                          ),
                                          128
                                        )),
                                      ],
                                      8,
                                      Lk
                                    ))
                                  : O("", !0),
                              ];
                            }),
                            _: 3,
                          },
                          8,
                          ["name", "css"]
                        ),
                      ],
                      64
                    )),
                  ],
                  10,
                  Mk
                ),
              ],
              2
            )
          );
        }
      );
    },
  }),
  Xl = (e) => Array.isArray(e),
  $k = (e, n, a, t) => {
    const o = M([]),
      { modelValue: i, calendars: r, time: l } = Kn(e, n),
      { defaultedMultiCalendars: s, defaultedStartTime: m } = gt(e),
      {
        validateMonthYearInRange: g,
        isDisabled: d,
        isDateRangeAllowed: v,
        checkMinMaxRange: h,
      } = Fa(e),
      {
        updateTimeValues: y,
        getSetDateTime: k,
        setTime: T,
        assignStartTime: _,
        validateTime: b,
        disabledTimesConfig: A,
      } = Bu(e, l, i, t),
      D = u(() => ($) => r.value[$] ? r.value[$].month : 0),
      I = u(() => ($) => r.value[$] ? r.value[$].year : 0),
      R = ($, le, Te) => {
        var xe, Ke;
        r.value[$] || (r.value[$] = { month: 0, year: 0 }),
          (r.value[$].month = jl(le)
            ? (xe = r.value[$]) == null
              ? void 0
              : xe.month
            : le),
          (r.value[$].year = jl(Te)
            ? (Ke = r.value[$]) == null
              ? void 0
              : Ke.year
            : Te);
      },
      L = () => {
        e.autoApply && n("select-date");
      };
    Le(i, ($, le) => {
      JSON.stringify($) !== JSON.stringify(le) && C();
    }),
      Ee(() => {
        e.shadow ||
          (i.value || (p(), m.value && _(m.value)),
          C(!0),
          e.focusStartDate && e.startDate && p());
      });
    const K = u(() => {
        var $;
        return ($ = e.flow) != null && $.length && !e.partialFlow
          ? e.flowStep === e.flow.length
          : !0;
      }),
      W = () => {
        e.autoApply && K.value && n("auto-apply", e.partialFlow);
      },
      C = ($ = !1) => {
        if (i.value)
          return Array.isArray(i.value)
            ? ((o.value = i.value), V($))
            : F(i.value, $);
        if (s.value.count && $ && !e.startDate) return H(ne(), $);
      },
      H = ($, le = !1) => {
        if (
          ((!s.value.count || !s.value.static || le) && R(0, Ue($), Ne($)),
          s.value.count && (!s.value.solo || !i.value))
        )
          for (let Te = 1; Te < s.value.count; Te++) {
            const xe = at(ne(), {
                month: D.value(Te - 1),
                year: I.value(Te - 1),
              }),
              Ke = Gs(xe, { months: 1 });
            r.value[Te] = { month: Ue(Ke), year: Ne(Ke) };
          }
      },
      F = ($, le) => {
        H($),
          T("hours", Kt($)),
          T("minutes", ia($)),
          T("seconds", sn($)),
          s.value.count && le && S();
      },
      Q = ($) => {
        if (s.value.count) {
          if (s.value.solo) return 0;
          const le = Ue($[0]),
            Te = Ue($[1]);
          return Math.abs(Te - le) < s.value.count ? 0 : 1;
        }
        return 1;
      },
      B = ($, le) => {
        $[1] && e.showLastInRange ? H($[Q($)], le) : H($[0], le);
        const Te = (xe, Ke) => [xe($[0]), $[1] ? xe($[1]) : l[Ke][1]];
        T("hours", Te(Kt, "hours")),
          T("minutes", Te(ia, "minutes")),
          T("seconds", Te(sn, "seconds"));
      },
      P = ($, le) => {
        if ((e.range || e.weekPicker) && !e.multiDates) return B($, le);
        if (e.multiDates && le) {
          const Te = $[$.length - 1];
          return F(Te, le);
        }
      },
      V = ($) => {
        const le = i.value;
        P(le, $), s.value.count && s.value.solo && S();
      },
      U = ($, le) => {
        const Te = at(ne(), { month: D.value(le), year: I.value(le) }),
          xe = $ < 0 ? zt(Te, 1) : un(Te, 1);
        g(Ue(xe), Ne(xe), $ < 0, e.preventMinMaxNavigation) &&
          (R(le, Ue(xe), Ne(xe)),
          n("update-month-year", { instance: le, month: Ue(xe), year: Ne(xe) }),
          s.value.count && !s.value.solo && G(le),
          a());
      },
      G = ($) => {
        for (let le = $ - 1; le >= 0; le--) {
          const Te = un(
            at(ne(), { month: D.value(le + 1), year: I.value(le + 1) }),
            1
          );
          R(le, Ue(Te), Ne(Te));
        }
        for (let le = $ + 1; le <= s.value.count - 1; le++) {
          const Te = zt(
            at(ne(), { month: D.value(le - 1), year: I.value(le - 1) }),
            1
          );
          R(le, Ue(Te), Ne(Te));
        }
      },
      S = () => {
        if (Array.isArray(i.value) && i.value.length === 2) {
          const $ = ne(ne(i.value[1] ? i.value[1] : zt(i.value[0], 1))),
            [le, Te] = [Ue(i.value[0]), Ne(i.value[0])],
            [xe, Ke] = [Ue(i.value[1]), Ne(i.value[1])];
          (le !== xe || (le === xe && Te !== Ke)) &&
            s.value.solo &&
            R(1, Ue($), Ne($));
        } else
          i.value &&
            !Array.isArray(i.value) &&
            (R(0, Ue(i.value), Ne(i.value)), H(ne()));
      },
      p = () => {
        e.startDate &&
          (R(0, Ue(ne(e.startDate)), Ne(ne(e.startDate))),
          s.value.count && G(0));
      },
      Y = y1(($, le) => {
        e.monthChangeOnScroll &&
          U(e.monthChangeOnScroll !== "inverse" ? -$.deltaY : $.deltaY, le);
      }, 50),
      j = ($, le, Te = !1) => {
        e.monthChangeOnArrows && e.vertical === Te && ee($, le);
      },
      ee = ($, le) => {
        U($ === "right" ? -1 : 1, le);
      },
      J = ($) =>
        e.markers.find((le) => We(w1($.value), Qt(ne(le.date), e.timezone))),
      N = ($, le) => {
        switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
          case "prepend":
            return [!0, !1];
          case "center":
            return [$ == 0, !0];
          case "fair":
            return [$ == 0 || le > $, !0];
          case "append":
            return [!1, !1];
          default:
            return [!1, !1];
        }
      },
      w = ($, le, Te, xe) => {
        if (e.sixWeeks && $.length < 6) {
          const Ke = 6 - $.length,
            Se = (le.getDay() + 7 - xe) % 7,
            Je = 6 - ((Te.getDay() + 7 - xe) % 7),
            [ce, Ce] = N(Se, Je);
          for (let _e = 1; _e <= Ke; _e++)
            if (Ce ? !!(_e % 2) == ce : ce) {
              const pt = $[0].days[0],
                Mt = ae(ma(pt.value, -7), Ue(le));
              $.unshift({ days: Mt });
            } else {
              const pt = $[$.length - 1],
                Mt = pt.days[pt.days.length - 1],
                Wa = ae(ma(Mt.value, 1), Ue(le));
              $.push({ days: Wa });
            }
        }
        return $;
      },
      ae = ($, le) => {
        const Te = ne($),
          xe = [];
        for (let Ke = 0; Ke < 7; Ke++) {
          const Se = ma(Te, Ke),
            Je = Ue(Se) !== le;
          xe.push({
            text: e.hideOffsetDates && Je ? "" : Se.getDate(),
            value: Se,
            current: !Je,
            classData: {},
          });
        }
        return xe;
      },
      ve = ($, le) => {
        const Te = [],
          xe = new Date(le, $),
          Ke = new Date(le, $ + 1, 0),
          Se = e.weekStart,
          Je = $a(xe, { weekStartsOn: Se }),
          ce = (Ce) => {
            const _e = ae(Ce, $);
            if (
              (Te.push({ days: _e }),
              !Te[Te.length - 1].days.some((pt) => We(Ct(pt.value), Ct(Ke))))
            ) {
              const pt = ma(Ce, 7);
              ce(pt);
            }
          };
        return ce(Je), w(Te, xe, Ke, Se);
      },
      se = ($) => (
        (i.value = ro(ne($.value), e.timezone, e.weekStart)),
        n("date-update", $.value),
        W()
      ),
      be = ($) => {
        const le = Ia(ne($.value), l.hours, l.minutes, Xe());
        n("date-update", le),
          e.multiDates ? yi(le, i, e.multiDatesLimit) : (i.value = le),
          t(),
          Dt().then(() => {
            W();
          });
      },
      de = ($) =>
        e.noDisabledRange ? Su(o.value[0], $).some((le) => d(le)) : !1,
      z = () => {
        (o.value = i.value ? i.value.slice() : []),
          o.value.length === 2 &&
            !(e.fixedStart || e.fixedEnd) &&
            (o.value = []);
      },
      ie = ($, le) => {
        const Te = [ne($.value), ma(ne($.value), +e.autoRange)];
        v(Te)
          ? (le && De($.value), (o.value = Te))
          : n("invalid-date", $.value);
      },
      De = ($) => {
        const le = Ue(ne($)),
          Te = Ne(ne($));
        if ((R(0, le, Te), s.value.count > 0))
          for (let xe = 1; xe < s.value.count; xe++) {
            const Ke = k1(
              at(ne($), { year: D.value(xe - 1), month: I.value(xe - 1) })
            );
            R(xe, Ke.month, Ke.year);
          }
      },
      me = ($) =>
        Array.isArray(i.value) && i.value.length === 2
          ? e.fixedStart && (Tt($, i.value[0]) || We($, i.value[0]))
            ? [i.value[0], $]
            : e.fixedEnd && (wt($, i.value[1]) || We($, i.value[1]))
            ? [$, i.value[1]]
            : (n("invalid-fixed-range", $), i.value)
          : [],
      Pe = ($) => {
        if (de($.value) || !h($.value, i.value, e.fixedStart ? 0 : 1))
          return n("invalid-date", $.value);
        o.value = me(ne($.value));
      },
      ze = ($, le) => {
        if ((z(), e.autoRange)) return ie($, le);
        if (e.fixedStart || e.fixedEnd) return Pe($);
        o.value[0]
          ? h(ne($.value), i.value) && !de($.value)
            ? wt(ne($.value), ne(o.value[0]))
              ? (o.value.unshift(ne($.value)), n("range-end", o.value[0]))
              : ((o.value[1] = ne($.value)), n("range-end", o.value[1]))
            : (e.autoApply && n("auto-apply-invalid", $.value),
              n("invalid-date", $.value))
          : ((o.value[0] = ne($.value)), n("range-start", o.value[0]));
      },
      Xe = ($ = !0) =>
        e.enableSeconds
          ? Array.isArray(l.seconds)
            ? $
              ? l.seconds[0]
              : l.seconds[1]
            : l.seconds
          : 0,
      ct = ($) => {
        o.value[$] = Ia(o.value[$], l.hours[$], l.minutes[$], Xe($ !== 1));
      },
      Bt = () => {
        var $, le;
        o.value[0] &&
          o.value[1] &&
          +(($ = o.value) == null ? void 0 : $[0]) >
            +((le = o.value) == null ? void 0 : le[1]) &&
          (o.value.reverse(),
          n("range-start", o.value[0]),
          n("range-end", o.value[1]));
      },
      bt = () => {
        o.value.length &&
          (o.value[0] && !o.value[1] ? ct(0) : (ct(0), ct(1), t()),
          Bt(),
          (i.value = o.value.slice()),
          Io(o.value, n, e.autoApply, e.modelAuto));
      },
      ya = ($, le = !1) => {
        if (d($.value) || (!$.current && e.hideOffsetDates))
          return n("invalid-date", $.value);
        if (e.weekPicker) return se($);
        if (!e.range) return be($);
        Xl(l.hours) && Xl(l.minutes) && !e.multiDates && (ze($, le), bt());
      },
      vt = ($, le) => {
        var Te;
        R($, le.month, le.year),
          s.value.count && !s.value.solo && G($),
          n("update-month-year", {
            instance: $,
            month: le.month,
            year: le.year,
          }),
          a(s.value.solo ? $ : void 0);
        const xe =
          (Te = e.flow) != null && Te.length ? e.flow[e.flowStep] : void 0;
        !le.fromNav && (xe === ea.month || xe === ea.year) && t();
      },
      ht = ($, le) => {
        Mu({
          value: $,
          modelValue: i,
          range: e.range,
          timezone: le ? void 0 : e.timezone,
        }),
          L(),
          e.multiCalendars && Dt().then(() => C(!0));
      },
      ua = () => {
        e.range
          ? i.value && Array.isArray(i.value) && i.value[0]
            ? (i.value = wt(ne(), i.value[0])
                ? [ne(), i.value[0]]
                : [i.value[0], ne()])
            : (i.value = [ne()])
          : (i.value = ne()),
          L();
      },
      ca = () => {
        if (Array.isArray(i.value))
          if (e.multiDates) {
            const $ = ba();
            i.value[i.value.length - 1] = k($);
          } else i.value = i.value.map(($, le) => $ && k($, le));
        else i.value = k(i.value);
        n("time-update");
      },
      ba = () =>
        Array.isArray(i.value) && i.value.length
          ? i.value[i.value.length - 1]
          : null;
    return {
      calendars: r,
      modelValue: i,
      month: D,
      year: I,
      time: l,
      disabledTimesConfig: A,
      validateTime: b,
      getCalendarDays: ve,
      getMarker: J,
      handleScroll: Y,
      handleSwipe: ee,
      handleArrow: j,
      selectDate: ya,
      updateMonthYear: vt,
      presetDate: ht,
      selectCurrentDate: ua,
      updateTime: ($, le = !0, Te = !1) => {
        y($, le, Te, ca);
      },
    };
  },
  Vk = { key: 0 },
  Uk = re({
    __name: "DatePicker",
    props: { ...Jt },
    emits: [
      "tooltip-open",
      "tooltip-close",
      "mount",
      "update:internal-model-value",
      "update-flow-step",
      "reset-flow",
      "auto-apply",
      "focus-menu",
      "select-date",
      "range-start",
      "range-end",
      "invalid-fixed-range",
      "time-update",
      "am-pm-change",
      "time-picker-open",
      "time-picker-close",
      "recalculate-position",
      "update-month-year",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        {
          calendars: i,
          month: r,
          year: l,
          modelValue: s,
          time: m,
          disabledTimesConfig: g,
          validateTime: d,
          getCalendarDays: v,
          getMarker: h,
          handleArrow: y,
          handleScroll: k,
          handleSwipe: T,
          selectDate: _,
          updateMonthYear: b,
          presetDate: A,
          selectCurrentDate: D,
          updateTime: I,
        } = $k(o, t, S, p),
        R = Ua(),
        { setHoverDate: L, getDayClassData: K, clearHoverDate: W } = F1(s, o),
        { defaultedMultiCalendars: C } = gt(o),
        H = M([]),
        F = M([]),
        Q = M(null),
        B = xt(R, "calendar"),
        P = xt(R, "monthYear"),
        V = xt(R, "timePicker"),
        U = (j) => {
          o.shadow || t("mount", j);
        };
      Le(
        i,
        () => {
          o.shadow ||
            setTimeout(() => {
              t("recalculate-position");
            }, 0);
        },
        { deep: !0 }
      );
      const G = u(
        () => (j) =>
          v(r.value(j), l.value(j)).map((ee) => ({
            ...ee,
            days: ee.days.map(
              (J) => ((J.marker = h(J)), (J.classData = K(J)), J)
            ),
          }))
      );
      function S(j) {
        var ee;
        j || j === 0
          ? (ee = F.value[j]) == null ||
            ee.triggerTransition(r.value(j), l.value(j))
          : F.value.forEach((J, N) =>
              J.triggerTransition(r.value(N), l.value(N))
            );
      }
      function p() {
        t("update-flow-step");
      }
      const Y = (j, ee = !1) => {
        _(j, ee), o.spaceConfirm && t("select-date");
      };
      return (
        n({
          clearHoverDate: W,
          presetDate: A,
          selectCurrentDate: D,
          toggleMonthPicker: (j, ee, J = 0) => {
            var N;
            (N = H.value[J]) == null || N.toggleMonthPicker(j, ee);
          },
          toggleYearPicker: (j, ee, J = 0) => {
            var N;
            (N = H.value[J]) == null || N.toggleYearPicker(j, ee);
          },
          toggleTimePicker: (j, ee, J) => {
            var N;
            (N = Q.value) == null || N.toggleTimePicker(j, ee, J);
          },
          handleArrow: y,
          updateMonthYear: b,
          getSidebarProps: () => ({
            modelValue: s,
            month: r,
            year: l,
            time: m,
            updateTime: I,
            updateMonthYear: b,
            selectDate: _,
            presetDate: A,
          }),
        }),
        (j, ee) => (
          c(),
          f(
            ge,
            null,
            [
              Oe(
                Po,
                { "multi-calendars": x(C).count },
                {
                  default: fe(({ instance: J, index: N }) => [
                    j.disableMonthYearSelect
                      ? O("", !0)
                      : (c(),
                        q(
                          Dk,
                          Ge(
                            {
                              key: 0,
                              ref: (w) => {
                                w && (H.value[N] = w);
                              },
                              months: x(yu)(
                                j.formatLocale,
                                j.locale,
                                j.monthNameFormat
                              ),
                              years: x(fi)(j.yearRange, j.reverseYears),
                              month: x(r)(J),
                              year: x(l)(J),
                              instance: J,
                            },
                            j.$props,
                            {
                              onMount:
                                ee[0] || (ee[0] = (w) => U(x(Ha).header)),
                              onResetFlow:
                                ee[1] || (ee[1] = (w) => j.$emit("reset-flow")),
                              onUpdateMonthYear: (w) => x(b)(J, w),
                              onOverlayClosed:
                                ee[2] || (ee[2] = (w) => j.$emit("focus-menu")),
                            }
                          ),
                          Et({ _: 2 }, [
                            we(x(P), (w, ae) => ({
                              name: w,
                              fn: fe((ve) => [te(j.$slots, w, nt(St(ve)))]),
                            })),
                          ]),
                          1040,
                          [
                            "months",
                            "years",
                            "month",
                            "year",
                            "instance",
                            "onUpdateMonthYear",
                          ]
                        )),
                    Oe(
                      Nk,
                      Ge(
                        {
                          ref: (w) => {
                            w && (F.value[N] = w);
                          },
                          "mapped-dates": G.value(J),
                          month: x(r)(J),
                          year: x(l)(J),
                          instance: J,
                        },
                        j.$props,
                        {
                          onSelectDate: (w) => x(_)(w, J !== 1),
                          onHandleSpace: (w) => Y(w, J !== 1),
                          onSetHoverDate: ee[3] || (ee[3] = (w) => x(L)(w)),
                          onHandleScroll: (w) => x(k)(w, J),
                          onHandleSwipe: (w) => x(T)(w, J),
                          onMount: ee[4] || (ee[4] = (w) => U(x(Ha).calendar)),
                          onResetFlow:
                            ee[5] || (ee[5] = (w) => j.$emit("reset-flow")),
                          onTooltipOpen:
                            ee[6] ||
                            (ee[6] = (w) => j.$emit("tooltip-open", w)),
                          onTooltipClose:
                            ee[7] ||
                            (ee[7] = (w) => j.$emit("tooltip-close", w)),
                        }
                      ),
                      Et({ _: 2 }, [
                        we(x(B), (w, ae) => ({
                          name: w,
                          fn: fe((ve) => [te(j.$slots, w, nt(St({ ...ve })))]),
                        })),
                      ]),
                      1040,
                      [
                        "mapped-dates",
                        "month",
                        "year",
                        "instance",
                        "onSelectDate",
                        "onHandleSpace",
                        "onHandleScroll",
                        "onHandleSwipe",
                      ]
                    ),
                  ]),
                  _: 3,
                },
                8,
                ["multi-calendars"]
              ),
              j.enableTimePicker
                ? (c(),
                  f("div", Vk, [
                    j.$slots["time-picker"]
                      ? te(
                          j.$slots,
                          "time-picker",
                          nt(Ge({ key: 0 }, { time: x(m), updateTime: x(I) }))
                        )
                      : (c(),
                        q(
                          Au,
                          Ge(
                            { key: 1, ref_key: "timePickerRef", ref: Q },
                            j.$props,
                            {
                              hours: x(m).hours,
                              minutes: x(m).minutes,
                              seconds: x(m).seconds,
                              "internal-model-value": j.internalModelValue,
                              "disabled-times-config": x(g),
                              "validate-time": x(d),
                              onMount:
                                ee[8] || (ee[8] = (J) => U(x(Ha).timePicker)),
                              "onUpdate:hours":
                                ee[9] || (ee[9] = (J) => x(I)(J)),
                              "onUpdate:minutes":
                                ee[10] || (ee[10] = (J) => x(I)(J, !1)),
                              "onUpdate:seconds":
                                ee[11] || (ee[11] = (J) => x(I)(J, !1, !0)),
                              onResetFlow:
                                ee[12] ||
                                (ee[12] = (J) => j.$emit("reset-flow")),
                              onOverlayClosed:
                                ee[13] ||
                                (ee[13] = (J) => j.$emit("time-picker-close")),
                              onOverlayOpened:
                                ee[14] ||
                                (ee[14] = (J) =>
                                  j.$emit("time-picker-open", J)),
                              onAmPmChange:
                                ee[15] ||
                                (ee[15] = (J) => j.$emit("am-pm-change", J)),
                            }
                          ),
                          Et({ _: 2 }, [
                            we(x(V), (J, N) => ({
                              name: J,
                              fn: fe((w) => [te(j.$slots, J, nt(St(w)))]),
                            })),
                          ]),
                          1040,
                          [
                            "hours",
                            "minutes",
                            "seconds",
                            "internal-model-value",
                            "disabled-times-config",
                            "validate-time",
                          ]
                        )),
                  ]))
                : O("", !0),
            ],
            64
          )
        )
      );
    },
  }),
  Yk = (e, n) => {
    const a = M(),
      {
        defaultedMultiCalendars: t,
        defaultedConfig: o,
        defaultedHighlight: i,
      } = gt(e),
      { modelValue: r, year: l, month: s, calendars: m } = Kn(e, n),
      { isDisabled: g } = Fa(e),
      {
        selectYear: d,
        groupedYears: v,
        showYearPicker: h,
        isDisabled: y,
        toggleYearPicker: k,
        handleYearSelect: T,
        handleYear: _,
      } = Ou({
        modelValue: r,
        multiCalendars: t,
        highlight: i,
        calendars: m,
        month: s,
        year: l,
        props: e,
        emit: n,
      }),
      b = (W, C) =>
        [W, C].map((H) => Ca(H, "MMMM", { locale: e.formatLocale })).join("-"),
      A = u(
        () => (W) =>
          r.value
            ? Array.isArray(r.value)
              ? r.value.some((C) => Rl(W, C))
              : Rl(r.value, W)
            : !1
      ),
      D = (W) => {
        if (e.range) {
          if (Array.isArray(r.value)) {
            const C = We(W, r.value[0]) || We(W, r.value[1]);
            return So(r.value, a.value, W) && !C;
          }
          return !1;
        }
        return !1;
      },
      I = u(() => (W) => {
        const C = at(new Date(), { year: l.value(W) });
        return f_({ start: y_(C), end: h_(C) }).map((H) => {
          const F = Un(H),
            Q = Ml(H),
            B = g(H),
            P = D(F),
            V =
              typeof i.value == "function"
                ? i.value({ quarter: Dl(F), year: Ne(F) })
                : !!i.value.quarters.find(
                    (U) => U.quarter === Dl(F) && U.year === Ne(F)
                  );
          return {
            text: b(F, Q),
            value: F,
            active: A.value(F),
            highlighted: V,
            disabled: B,
            isBetween: P,
          };
        });
      }),
      R = (W) => {
        yi(W, r, e.multiDatesLimit), n("auto-apply", !0);
      },
      L = (W) => {
        const C = bi(r, W, n);
        Io(C, n, e.autoApply, e.modelAuto);
      },
      K = (W) => {
        (r.value = W), n("auto-apply");
      };
    return {
      defaultedConfig: o,
      defaultedMultiCalendars: t,
      groupedYears: v,
      year: l,
      isDisabled: y,
      quarters: I,
      showYearPicker: h,
      modelValue: r,
      setHoverDate: (W) => {
        a.value = W;
      },
      selectYear: d,
      selectQuarter: (W, C, H) => {
        if (!H)
          return (
            (m.value[C].month = Ue(Ml(W))),
            e.multiDates ? R(W) : e.range ? L(W) : K(W)
          );
      },
      toggleYearPicker: k,
      handleYearSelect: T,
      handleYear: _,
    };
  },
  Fk = { class: "dp--quarter-items" },
  Wk = ["disabled", "onClick", "onMouseover"],
  qk = re({
    compatConfig: { MODE: 3 },
    __name: "QuarterPicker",
    props: { ...Jt },
    emits: [
      "update:internal-model-value",
      "reset-flow",
      "overlay-closed",
      "auto-apply",
      "range-start",
      "range-end",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Ua(),
        r = xt(i, "yearMode"),
        {
          defaultedMultiCalendars: l,
          defaultedConfig: s,
          groupedYears: m,
          year: g,
          isDisabled: d,
          quarters: v,
          modelValue: h,
          showYearPicker: y,
          setHoverDate: k,
          selectQuarter: T,
          toggleYearPicker: _,
          handleYearSelect: b,
          handleYear: A,
        } = Yk(o, t);
      return (
        n({
          getSidebarProps: () => ({
            modelValue: h,
            year: g,
            selectQuarter: T,
            handleYearSelect: b,
            handleYear: A,
          }),
        }),
        (D, I) => (
          c(),
          q(
            Po,
            { "multi-calendars": x(l).count, stretch: "" },
            {
              default: fe(({ instance: R }) => [
                E(
                  "div",
                  {
                    class: "dp-quarter-picker-wrap",
                    style: Be({ minHeight: `${x(s).modeHeight}px` }),
                  },
                  [
                    E("div", null, [
                      Oe(
                        Du,
                        Ge(D.$props, {
                          items: x(m)(R),
                          instance: R,
                          "show-year-picker": x(y)[R],
                          year: x(g)(R),
                          "is-disabled": (L) => x(d)(R, L),
                          onHandleYear: (L) => x(A)(R, L),
                          onYearSelect: (L) => x(b)(L, R),
                          onToggleYearPicker: (L) => x(_)(R, L?.flow, L?.show),
                        }),
                        Et({ _: 2 }, [
                          we(x(r), (L, K) => ({
                            name: L,
                            fn: fe((W) => [te(D.$slots, L, nt(St(W)))]),
                          })),
                        ]),
                        1040,
                        [
                          "items",
                          "instance",
                          "show-year-picker",
                          "year",
                          "is-disabled",
                          "onHandleYear",
                          "onYearSelect",
                          "onToggleYearPicker",
                        ]
                      ),
                    ]),
                    E("div", Fk, [
                      (c(!0),
                      f(
                        ge,
                        null,
                        we(
                          x(v)(R),
                          (L, K) => (
                            c(),
                            f("div", { key: K }, [
                              E(
                                "button",
                                {
                                  type: "button",
                                  class: Z([
                                    "dp--qr-btn",
                                    {
                                      "dp--qr-btn-active": L.active,
                                      "dp--qr-btn-between": L.isBetween,
                                      "dp--qr-btn-disabled": L.disabled,
                                      "dp--highlighted": L.highlighted,
                                    },
                                  ]),
                                  disabled: L.disabled,
                                  onClick: (W) => x(T)(L.value, R, L.disabled),
                                  onMouseover: (W) => x(k)(L.value),
                                },
                                [
                                  D.$slots.quarter
                                    ? te(D.$slots, "quarter", {
                                        key: 0,
                                        value: L.value,
                                        text: L.text,
                                      })
                                    : (c(),
                                      f(
                                        ge,
                                        { key: 1 },
                                        [Re(X(L.text), 1)],
                                        64
                                      )),
                                ],
                                42,
                                Wk
                              ),
                            ])
                          )
                        ),
                        128
                      )),
                    ]),
                  ],
                  4
                ),
              ]),
              _: 3,
            },
            8,
            ["multi-calendars"]
          )
        )
      );
    },
  }),
  Gk = ["id"],
  jk = { key: 0, class: "dp__sidebar_left" },
  zk = { key: 1, class: "dp--preset-dates" },
  Kk = ["onClick", "onKeydown"],
  Qk = { key: 2, class: "dp__sidebar_right" },
  Zk = { key: 3, class: "dp__action_extra" },
  Jl = re({
    compatConfig: { MODE: 3 },
    __name: "DatepickerMenu",
    props: {
      ...Co,
      shadow: { type: Boolean, default: !1 },
      openOnTop: { type: Boolean, default: !1 },
      internalModelValue: { type: [Date, Array], default: null },
      arrMapValues: { type: Object, default: () => ({}) },
      noOverlayFocus: { type: Boolean, default: !1 },
    },
    emits: [
      "close-picker",
      "select-date",
      "auto-apply",
      "time-update",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "update:internal-model-value",
      "recalculate-position",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "auto-apply-invalid",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = u(() => {
          const { openOnTop: z, ...ie } = o;
          return { ...ie, flowStep: K.value, noOverlayFocus: o.noOverlayFocus };
        }),
        { setMenuFocused: r, setShiftKey: l, control: s } = Eu(),
        m = Ua(),
        {
          defaultedTextInput: g,
          defaultedInline: d,
          defaultedConfig: v,
        } = gt(o),
        h = M(null),
        y = M(0),
        k = M(null),
        T = M(null),
        _ = M(!1),
        b = M(null);
      Ee(() => {
        if (!o.shadow) {
          (_.value = !0), A(), window.addEventListener("resize", A);
          const z = ft(k);
          if ((z && !g.value.enabled && !d.value.enabled && (r(!0), Q()), z)) {
            const ie = (De) => {
              v.value.allowPreventDefault && De.preventDefault(),
                Pa(De, v.value, !0);
            };
            z.addEventListener("pointerdown", ie),
              z.addEventListener("mousedown", ie);
          }
        }
      }),
        qn(() => {
          window.removeEventListener("resize", A);
        });
      const A = () => {
          const z = ft(T);
          z && (y.value = z.getBoundingClientRect().width);
        },
        { arrowRight: D, arrowLeft: I, arrowDown: R, arrowUp: L } = Ea(),
        {
          flowStep: K,
          updateFlowStep: W,
          childMount: C,
          resetFlow: H,
        } = W1(o, t, b),
        F = u(() =>
          o.monthPicker
            ? lk
            : o.yearPicker
            ? uk
            : o.timePicker
            ? Pk
            : o.quarterPicker
            ? qk
            : Uk
        ),
        Q = () => {
          const z = ft(k);
          z && z.focus({ preventScroll: !0 });
        },
        B = u(() => {
          var z;
          return ((z = b.value) == null ? void 0 : z.getSidebarProps()) || {};
        }),
        P = () => {
          o.openOnTop && t("recalculate-position");
        },
        V = xt(m, "action"),
        U = u(() =>
          o.monthPicker || o.yearPicker
            ? xt(m, "monthYear")
            : o.timePicker
            ? xt(m, "timePicker")
            : xt(m, "shared")
        ),
        G = u(() => (o.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top")),
        S = u(() => ({
          dp__menu_disabled: o.disabled,
          dp__menu_readonly: o.readonly,
        })),
        p = u(() => ({
          dp__menu: !0,
          dp__menu_index: !d.value.enabled,
          dp__relative: d.value.enabled,
          [o.menuClassName]: !!o.menuClassName,
        })),
        Y = (z) => {
          Pa(z, v.value, !0);
        },
        j = () => {
          o.escClose && t("close-picker");
        },
        ee = (z) => {
          if (o.arrowNavigation) {
            if (z === "up") return L();
            if (z === "down") return R();
            if (z === "left") return I();
            if (z === "right") return D();
          } else
            z === "left" || z === "up"
              ? ve("handleArrow", "left", 0, z === "up")
              : ve("handleArrow", "right", 0, z === "down");
        },
        J = (z) => {
          l(z.shiftKey),
            !o.disableMonthYearSelect &&
              z.code === "Tab" &&
              z.target.classList.contains("dp__menu") &&
              s.value.shiftKeyInMenu &&
              (z.preventDefault(), Pa(z, v.value, !0), t("close-picker"));
        },
        N = () => {
          Q(), t("time-picker-close");
        },
        w = (z) => {
          var ie, De, me;
          (ie = b.value) == null || ie.toggleTimePicker(!1, !1),
            (De = b.value) == null || De.toggleMonthPicker(!1, !1, z),
            (me = b.value) == null || me.toggleYearPicker(!1, !1, z);
        },
        ae = (z, ie = 0) => {
          var De, me, Pe;
          return z === "month"
            ? (De = b.value) == null
              ? void 0
              : De.toggleMonthPicker(!1, !0, ie)
            : z === "year"
            ? (me = b.value) == null
              ? void 0
              : me.toggleYearPicker(!1, !0, ie)
            : z === "time"
            ? (Pe = b.value) == null
              ? void 0
              : Pe.toggleTimePicker(!0, !1)
            : w(ie);
        },
        ve = (z, ...ie) => {
          var De, me;
          (De = b.value) != null &&
            De[z] &&
            ((me = b.value) == null || me[z](...ie));
        },
        se = () => {
          ve("selectCurrentDate");
        },
        be = (z, ie) => {
          ve("presetDate", z, ie);
        },
        de = () => {
          ve("clearHoverDate");
        };
      return (
        n({
          updateMonthYear: (z, ie) => {
            ve("updateMonthYear", z, ie);
          },
          switchView: ae,
        }),
        (z, ie) => {
          var De;
          return (
            c(),
            f(
              "div",
              {
                id: z.uid ? `dp-menu-${z.uid}` : void 0,
                ref_key: "dpMenuRef",
                ref: k,
                tabindex: "0",
                role: "dialog",
                class: Z(p.value),
                onMouseleave: de,
                onClick: Y,
                onKeydown: [
                  Ae(j, ["esc"]),
                  ie[18] ||
                    (ie[18] = Ae(
                      Me((me) => ee("left"), ["prevent"]),
                      ["left"]
                    )),
                  ie[19] ||
                    (ie[19] = Ae(
                      Me((me) => ee("up"), ["prevent"]),
                      ["up"]
                    )),
                  ie[20] ||
                    (ie[20] = Ae(
                      Me((me) => ee("down"), ["prevent"]),
                      ["down"]
                    )),
                  ie[21] ||
                    (ie[21] = Ae(
                      Me((me) => ee("right"), ["prevent"]),
                      ["right"]
                    )),
                  J,
                ],
              },
              [
                (z.disabled || z.readonly) && x(d).enabled
                  ? (c(), f("div", { key: 0, class: Z(S.value) }, null, 2))
                  : O("", !0),
                !x(d).enabled && !z.teleportCenter
                  ? (c(), f("div", { key: 1, class: Z(G.value) }, null, 2))
                  : O("", !0),
                E(
                  "div",
                  {
                    ref_key: "innerMenuRef",
                    ref: T,
                    class: Z({
                      dp__menu_content_wrapper:
                        ((De = z.presetDates) == null ? void 0 : De.length) ||
                        !!z.$slots["left-sidebar"] ||
                        !!z.$slots["right-sidebar"],
                    }),
                    style: Be({ "--dp-menu-width": `${y.value}px` }),
                  },
                  [
                    z.$slots["left-sidebar"]
                      ? (c(),
                        f("div", jk, [
                          te(z.$slots, "left-sidebar", nt(St(B.value))),
                        ]))
                      : O("", !0),
                    z.presetDates.length
                      ? (c(),
                        f("div", zk, [
                          (c(!0),
                          f(
                            ge,
                            null,
                            we(
                              z.presetDates,
                              (me, Pe) => (
                                c(),
                                f(
                                  ge,
                                  { key: Pe },
                                  [
                                    me.slot
                                      ? te(z.$slots, me.slot, {
                                          key: 0,
                                          presetDate: be,
                                          label: me.label,
                                          value: me.value,
                                        })
                                      : (c(),
                                        f(
                                          "button",
                                          {
                                            key: 1,
                                            type: "button",
                                            style: Be(me.style || {}),
                                            class: "dp__btn dp--preset-range",
                                            onClick: Me(
                                              (ze) => be(me.value, me.noTz),
                                              ["prevent"]
                                            ),
                                            onKeydown: [
                                              Ae(
                                                Me(
                                                  (ze) => be(me.value, me.noTz),
                                                  ["prevent"]
                                                ),
                                                ["enter"]
                                              ),
                                              Ae(
                                                Me(
                                                  (ze) => be(me.value, me.noTz),
                                                  ["prevent"]
                                                ),
                                                ["space"]
                                              ),
                                            ],
                                          },
                                          X(me.label),
                                          45,
                                          Kk
                                        )),
                                  ],
                                  64
                                )
                              )
                            ),
                            128
                          )),
                        ]))
                      : O("", !0),
                    E(
                      "div",
                      {
                        ref_key: "calendarWrapperRef",
                        ref: h,
                        class: "dp__instance_calendar",
                        role: "document",
                      },
                      [
                        (c(),
                        q(
                          mn(F.value),
                          Ge({ ref_key: "dynCmpRef", ref: b }, i.value, {
                            "flow-step": x(K),
                            onMount: x(C),
                            onUpdateFlowStep: x(W),
                            onResetFlow: x(H),
                            onFocusMenu: Q,
                            onSelectDate:
                              ie[0] || (ie[0] = (me) => z.$emit("select-date")),
                            onDateUpdate:
                              ie[1] ||
                              (ie[1] = (me) => z.$emit("date-update", me)),
                            onTooltipOpen:
                              ie[2] ||
                              (ie[2] = (me) => z.$emit("tooltip-open", me)),
                            onTooltipClose:
                              ie[3] ||
                              (ie[3] = (me) => z.$emit("tooltip-close", me)),
                            onAutoApply:
                              ie[4] ||
                              (ie[4] = (me) => z.$emit("auto-apply", me)),
                            onRangeStart:
                              ie[5] ||
                              (ie[5] = (me) => z.$emit("range-start", me)),
                            onRangeEnd:
                              ie[6] ||
                              (ie[6] = (me) => z.$emit("range-end", me)),
                            onInvalidFixedRange:
                              ie[7] ||
                              (ie[7] = (me) =>
                                z.$emit("invalid-fixed-range", me)),
                            onTimeUpdate:
                              ie[8] || (ie[8] = (me) => z.$emit("time-update")),
                            onAmPmChange:
                              ie[9] ||
                              (ie[9] = (me) => z.$emit("am-pm-change", me)),
                            onTimePickerOpen:
                              ie[10] ||
                              (ie[10] = (me) =>
                                z.$emit("time-picker-open", me)),
                            onTimePickerClose: N,
                            onRecalculatePosition: P,
                            onUpdateMonthYear:
                              ie[11] ||
                              (ie[11] = (me) =>
                                z.$emit("update-month-year", me)),
                            onAutoApplyInvalid:
                              ie[12] ||
                              (ie[12] = (me) =>
                                z.$emit("auto-apply-invalid", me)),
                            onInvalidDate:
                              ie[13] ||
                              (ie[13] = (me) => z.$emit("invalid-date", me)),
                            "onUpdate:internalModelValue":
                              ie[14] ||
                              (ie[14] = (me) =>
                                z.$emit("update:internal-model-value", me)),
                          }),
                          Et({ _: 2 }, [
                            we(U.value, (me, Pe) => ({
                              name: me,
                              fn: fe((ze) => [
                                te(z.$slots, me, nt(St({ ...ze }))),
                              ]),
                            })),
                          ]),
                          1040,
                          [
                            "flow-step",
                            "onMount",
                            "onUpdateFlowStep",
                            "onResetFlow",
                          ]
                        )),
                      ],
                      512
                    ),
                    z.$slots["right-sidebar"]
                      ? (c(),
                        f("div", Qk, [
                          te(z.$slots, "right-sidebar", nt(St(B.value))),
                        ]))
                      : O("", !0),
                    z.$slots["action-extra"]
                      ? (c(),
                        f("div", Zk, [
                          z.$slots["action-extra"]
                            ? te(z.$slots, "action-extra", {
                                key: 0,
                                selectCurrentDate: se,
                              })
                            : O("", !0),
                        ]))
                      : O("", !0),
                  ],
                  6
                ),
                !z.autoApply || x(v).keepActionRow
                  ? (c(),
                    q(
                      X1,
                      Ge({ key: 2, "menu-mount": _.value }, i.value, {
                        "calendar-width": y.value,
                        onClosePicker:
                          ie[15] || (ie[15] = (me) => z.$emit("close-picker")),
                        onSelectDate:
                          ie[16] || (ie[16] = (me) => z.$emit("select-date")),
                        onInvalidSelect:
                          ie[17] ||
                          (ie[17] = (me) => z.$emit("invalid-select")),
                        onSelectNow: se,
                      }),
                      Et({ _: 2 }, [
                        we(x(V), (me, Pe) => ({
                          name: me,
                          fn: fe((ze) => [te(z.$slots, me, nt(St({ ...ze })))]),
                        })),
                      ]),
                      1040,
                      ["menu-mount", "calendar-width"]
                    ))
                  : O("", !0),
              ],
              42,
              Gk
            )
          );
        }
      );
    },
  }),
  Xk = typeof window < "u" ? window : void 0,
  ir = () => {},
  Jk = (e) => (os() ? (rs(e), !0) : !1),
  eS = (e, n, a, t) => {
    if (!e) return ir;
    let o = ir;
    const i = Le(
        () => x(e),
        (l) => {
          o(),
            l &&
              (l.addEventListener(n, a, t),
              (o = () => {
                l.removeEventListener(n, a, t), (o = ir);
              }));
        },
        { immediate: !0, flush: "post" }
      ),
      r = () => {
        i(), o();
      };
    return Jk(r), r;
  },
  tS = (e, n, a, t = {}) => {
    const { window: o = Xk, event: i = "pointerdown" } = t;
    return o
      ? eS(
          o,
          i,
          (r) => {
            const l = ft(e),
              s = ft(n);
            !l ||
              !s ||
              l === r.target ||
              r.composedPath().includes(l) ||
              r.composedPath().includes(s) ||
              a(r);
          },
          { passive: !0 }
        )
      : void 0;
  },
  aS = re({
    compatConfig: { MODE: 3 },
    __name: "VueDatePicker",
    props: { ...Co },
    emits: [
      "update:model-value",
      "update:model-timezone-value",
      "text-submit",
      "closed",
      "cleared",
      "open",
      "focus",
      "blur",
      "internal-model-change",
      "recalculate-position",
      "flow-step",
      "update-month-year",
      "invalid-select",
      "invalid-fixed-range",
      "tooltip-open",
      "tooltip-close",
      "time-picker-open",
      "time-picker-close",
      "am-pm-change",
      "range-start",
      "range-end",
      "date-update",
      "invalid-date",
    ],
    setup(e, { expose: n, emit: a }) {
      const t = a,
        o = e,
        i = Ua(),
        r = M(!1),
        l = xn(o, "modelValue"),
        s = xn(o, "timezone"),
        m = M(null),
        g = M(null),
        d = M(null),
        v = M(!1),
        h = M(null),
        y = M(!1),
        k = M(!1),
        { setMenuFocused: T, setShiftKey: _ } = Eu(),
        { clearArrowNav: b } = Ea(),
        { mapDatesArrToMap: A, validateDate: D, isValidTime: I } = Fa(o),
        {
          defaultedTransitions: R,
          defaultedTextInput: L,
          defaultedInline: K,
          defaultedConfig: W,
        } = gt(o),
        { menuTransition: C, showTransition: H } = zn(R);
      Ee(() => {
        ee(o.modelValue),
          Dt().then(() => {
            if (!K.value.enabled) {
              const ce = S(h.value);
              ce?.addEventListener("scroll", z),
                window?.addEventListener("resize", ie);
            }
          }),
          K.value.enabled && (r.value = !0),
          window?.addEventListener("keyup", De),
          window?.addEventListener("keydown", me);
      });
      const F = u(() => A());
      qn(() => {
        if (!K.value.enabled) {
          const ce = S(h.value);
          ce?.removeEventListener("scroll", z),
            window?.removeEventListener("resize", ie);
        }
        window?.removeEventListener("keyup", De),
          window?.removeEventListener("keydown", me);
      });
      const Q = xt(i, "all", o.presetDates),
        B = xt(i, "input");
      Le(
        [l, s],
        () => {
          ee(l.value);
        },
        { deep: !0 }
      );
      const {
          openOnTop: P,
          menuStyle: V,
          xCorrect: U,
          setMenuPosition: G,
          getScrollableParent: S,
          shadowRender: p,
        } = V1({
          menuRef: m,
          menuRefInner: g,
          inputRef: d,
          pickerWrapperRef: h,
          inline: K,
          emit: t,
          props: o,
          slots: i,
        }),
        {
          inputValue: Y,
          internalModelValue: j,
          parseExternalModelValue: ee,
          emitModelValue: J,
          formatInputValue: N,
          checkBeforeEmit: w,
        } = N1(t, o, v),
        ae = u(() => ({
          dp__main: !0,
          dp__theme_dark: o.dark,
          dp__theme_light: !o.dark,
          dp__flex_display: K.value.enabled,
          dp__flex_display_with_input: K.value.input,
        })),
        ve = u(() => (o.dark ? "dp__theme_dark" : "dp__theme_light")),
        se = u(() => ({
          to: typeof o.teleport == "boolean" ? "body" : o.teleport,
          disabled: !o.teleport || K.value.enabled,
        })),
        be = u(() => ({ class: "dp__outer_menu_wrap" })),
        de = u(
          () =>
            K.value.enabled &&
            (o.timePicker || o.monthPicker || o.yearPicker || o.quarterPicker)
        ),
        z = () => {
          r.value && (W.value.closeOnScroll ? ht() : G());
        },
        ie = () => {
          r.value && G();
        },
        De = (ce) => {
          ce.key === "Tab" &&
            !K.value.enabled &&
            !o.teleport &&
            W.value.tabOutClosesMenu &&
            (h.value.contains(document.activeElement) || ht()),
            (k.value = ce.shiftKey);
        },
        me = (ce) => {
          k.value = ce.shiftKey;
        },
        Pe = () => {
          !o.disabled &&
            !o.readonly &&
            (p(Jl, o),
            G(!1),
            (r.value = !0),
            r.value && t("open"),
            r.value || vt(),
            ee(o.modelValue));
        },
        ze = () => {
          var ce;
          (Y.value = ""),
            vt(),
            (ce = d.value) == null || ce.setParsedDate(null),
            t("update:model-value", null),
            t("update:model-timezone-value", null),
            t("cleared"),
            W.value.closeOnClearValue && ht();
        },
        Xe = () => {
          const ce = j.value;
          return !ce || (!Array.isArray(ce) && D(ce))
            ? !0
            : Array.isArray(ce)
            ? o.multiDates || (ce.length === 2 && D(ce[0]) && D(ce[1]))
              ? !0
              : o.partialRange && !o.timePicker
              ? D(ce[0])
              : !1
            : !1;
        },
        ct = () => {
          w() && Xe() ? (J(), ht()) : t("invalid-select", j.value);
        },
        Bt = (ce) => {
          bt(), J(), W.value.closeOnAutoApply && !ce && ht();
        },
        bt = () => {
          d.value && L.value.enabled && d.value.setParsedDate(j.value);
        },
        ya = (ce = !1) => {
          o.autoApply &&
            I(j.value) &&
            Xe() &&
            (o.range && Array.isArray(j.value)
              ? (o.partialRange || j.value.length === 2) && Bt(ce)
              : Bt(ce));
        },
        vt = () => {
          L.value.enabled || (j.value = null);
        },
        ht = () => {
          K.value.enabled ||
            (r.value &&
              ((r.value = !1),
              (U.value = !1),
              T(!1),
              _(!1),
              b(),
              t("closed"),
              Y.value && ee(l.value)),
            vt(),
            t("blur"));
        },
        ua = (ce, Ce, _e = !1) => {
          if (!ce) {
            j.value = null;
            return;
          }
          const pt = Array.isArray(ce) ? !ce.some((Wa) => !D(Wa)) : D(ce),
            Mt = I(ce);
          pt &&
            Mt &&
            ((j.value = ce), Ce && ((y.value = _e), ct(), t("text-submit")));
        },
        ca = () => {
          o.autoApply && I(j.value) && J(), bt();
        },
        ba = () => (r.value ? ht() : Pe()),
        $ = (ce) => {
          j.value = ce;
        },
        le = () => {
          L.value.enabled && ((v.value = !0), N()), t("focus");
        },
        Te = () => {
          if (L.value.enabled && ((v.value = !1), ee(o.modelValue), y.value)) {
            const ce = h1(h.value, k.value);
            ce?.focus();
          }
          t("blur");
        },
        xe = (ce) => {
          g.value &&
            g.value.updateMonthYear(0, {
              month: Gl(ce.month),
              year: Gl(ce.year),
            });
        },
        Ke = (ce) => {
          ee(ce ?? o.modelValue);
        },
        Se = (ce, Ce) => {
          var _e;
          (_e = g.value) == null || _e.switchView(ce, Ce);
        },
        Je = (ce) =>
          W.value.onClickOutside ? W.value.onClickOutside(ce) : ht();
      return (
        tS(m, d, () => Je(Xe)),
        n({
          closeMenu: ht,
          selectDate: ct,
          clearValue: ze,
          openMenu: Pe,
          onScroll: z,
          formatInputValue: N,
          updateInternalModelValue: $,
          setMonthYear: xe,
          parseModel: Ke,
          switchView: Se,
          toggleMenu: ba,
        }),
        (ce, Ce) => (
          c(),
          f(
            "div",
            {
              ref_key: "pickerWrapperRef",
              ref: h,
              class: Z(ae.value),
              "data-datepicker-instance": "",
            },
            [
              Oe(
                z1,
                Ge(
                  {
                    ref_key: "inputRef",
                    ref: d,
                    "input-value": x(Y),
                    "onUpdate:inputValue":
                      Ce[0] ||
                      (Ce[0] = (_e) => (Ci(Y) ? (Y.value = _e) : null)),
                    "is-menu-open": r.value,
                  },
                  ce.$props,
                  {
                    onClear: ze,
                    onOpen: Pe,
                    onSetInputDate: ua,
                    onSetEmptyDate: x(J),
                    onSelectDate: ct,
                    onToggle: ba,
                    onClose: ht,
                    onFocus: le,
                    onBlur: Te,
                    onRealBlur: Ce[1] || (Ce[1] = (_e) => (v.value = !1)),
                  }
                ),
                Et({ _: 2 }, [
                  we(x(B), (_e, pt) => ({
                    name: _e,
                    fn: fe((Mt) => [te(ce.$slots, _e, nt(St(Mt)))]),
                  })),
                ]),
                1040,
                ["input-value", "is-menu-open", "onSetEmptyDate"]
              ),
              Oe(
                Yu,
                nt(St(se.value)),
                {
                  default: fe(() => [
                    Oe(
                      At,
                      { name: x(C)(x(P)), css: x(H) && !x(K).enabled },
                      {
                        default: fe(() => [
                          r.value
                            ? (c(),
                              f(
                                "div",
                                Ge(
                                  { key: 0, ref_key: "dpWrapMenuRef", ref: m },
                                  be.value,
                                  {
                                    class: {
                                      "dp--menu-wrapper": !x(K).enabled,
                                    },
                                    style: x(K).enabled ? void 0 : x(V),
                                  }
                                ),
                                [
                                  Oe(
                                    Jl,
                                    Ge(
                                      { ref_key: "dpMenuRef", ref: g },
                                      ce.$props,
                                      {
                                        "internal-model-value": x(j),
                                        "onUpdate:internalModelValue":
                                          Ce[2] ||
                                          (Ce[2] = (_e) =>
                                            Ci(j) ? (j.value = _e) : null),
                                        class: {
                                          [ve.value]: !0,
                                          "dp--menu-wrapper": ce.teleport,
                                        },
                                        "open-on-top": x(P),
                                        "arr-map-values": F.value,
                                        "no-overlay-focus": de.value,
                                        onClosePicker: ht,
                                        onSelectDate: ct,
                                        onAutoApply: ya,
                                        onTimeUpdate: ca,
                                        onFlowStep:
                                          Ce[3] ||
                                          (Ce[3] = (_e) =>
                                            ce.$emit("flow-step", _e)),
                                        onUpdateMonthYear:
                                          Ce[4] ||
                                          (Ce[4] = (_e) =>
                                            ce.$emit("update-month-year", _e)),
                                        onInvalidSelect:
                                          Ce[5] ||
                                          (Ce[5] = (_e) =>
                                            ce.$emit("invalid-select", x(j))),
                                        onAutoApplyInvalid:
                                          Ce[6] ||
                                          (Ce[6] = (_e) =>
                                            ce.$emit("invalid-select", _e)),
                                        onInvalidFixedRange:
                                          Ce[7] ||
                                          (Ce[7] = (_e) =>
                                            ce.$emit(
                                              "invalid-fixed-range",
                                              _e
                                            )),
                                        onRecalculatePosition: x(G),
                                        onTooltipOpen:
                                          Ce[8] ||
                                          (Ce[8] = (_e) =>
                                            ce.$emit("tooltip-open", _e)),
                                        onTooltipClose:
                                          Ce[9] ||
                                          (Ce[9] = (_e) =>
                                            ce.$emit("tooltip-close", _e)),
                                        onTimePickerOpen:
                                          Ce[10] ||
                                          (Ce[10] = (_e) =>
                                            ce.$emit("time-picker-open", _e)),
                                        onTimePickerClose:
                                          Ce[11] ||
                                          (Ce[11] = (_e) =>
                                            ce.$emit("time-picker-close", _e)),
                                        onAmPmChange:
                                          Ce[12] ||
                                          (Ce[12] = (_e) =>
                                            ce.$emit("am-pm-change", _e)),
                                        onRangeStart:
                                          Ce[13] ||
                                          (Ce[13] = (_e) =>
                                            ce.$emit("range-start", _e)),
                                        onRangeEnd:
                                          Ce[14] ||
                                          (Ce[14] = (_e) =>
                                            ce.$emit("range-end", _e)),
                                        onDateUpdate:
                                          Ce[15] ||
                                          (Ce[15] = (_e) =>
                                            ce.$emit("date-update", _e)),
                                        onInvalidDate:
                                          Ce[16] ||
                                          (Ce[16] = (_e) =>
                                            ce.$emit("invalid-date", _e)),
                                      }
                                    ),
                                    Et({ _: 2 }, [
                                      we(x(Q), (_e, pt) => ({
                                        name: _e,
                                        fn: fe((Mt) => [
                                          te(ce.$slots, _e, nt(St({ ...Mt }))),
                                        ]),
                                      })),
                                    ]),
                                    1040,
                                    [
                                      "internal-model-value",
                                      "class",
                                      "open-on-top",
                                      "arr-map-values",
                                      "no-overlay-focus",
                                      "onRecalculatePosition",
                                    ]
                                  ),
                                ],
                                16
                              ))
                            : O("", !0),
                        ]),
                        _: 3,
                      },
                      8,
                      ["name", "css"]
                    ),
                  ]),
                  _: 3,
                },
                16
              ),
            ],
            2
          )
        )
      );
    },
  }),
  _i = (() => {
    const e = aS;
    return (
      (e.install = (n) => {
        n.component("Vue3DatePicker", e);
      }),
      e
    );
  })(),
  nS = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: _i },
      Symbol.toStringTag,
      { value: "Module" }
    )
  );
Object.entries(nS).forEach(([e, n]) => {
  e !== "default" && (_i[e] = n);
});
const oS = {
    props: {
      month: { type: Number, default: 0 },
      year: { type: Number, default: 0 },
      customProps: { type: Object, default: null },
    },
    emits: ["update-month-year"],
    computed: {
      getLanguage() {
        return this.customProps.language === "br"
          ? "pt-BR"
          : this.customProps.language;
      },
      calendarTitle() {
        return new Date(this.year, this.month).toLocaleDateString(
          this.getLanguage,
          { year: "numeric", month: "long" }
        );
      },
    },
    methods: {
      onNextClick() {
        let e = this.month,
          n = this.year;
        this.month === 11 ? ((e = 0), (n = this.year + 1)) : (e += 1),
          this.updateDate(e, n);
      },
      onPreviousClick() {
        let e = this.month,
          n = this.year;
        this.month === 0 ? ((e = 11), (n = this.year - 1)) : (e -= 1),
          this.updateDate(e, n);
      },
      updateDate(e, n) {
        this.$emit("update-month-year", { instance: 0, month: e, year: n });
      },
    },
  },
  Lu = (e) => (Rt("data-v-707c7e3f"), (e = e()), Ht(), e),
  rS = { class: "date-picker-header" },
  iS = Lu(() =>
    E(
      "div",
      { class: "date-picker-header__arrow" },
      [
        E(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            E("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  lS = [iS],
  sS = Lu(() =>
    E(
      "div",
      { class: "date-picker-header__arrow date-picker-header__arrow--next" },
      [
        E(
          "svg",
          {
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            E("path", {
              d: "M12.5 5L7.5 10L12.5 15",
              stroke: "black",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  uS = [sS];
function cS(e, n, a, t, o, i) {
  return (
    c(),
    f("div", rS, [
      E(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[0] ||
            (n[0] = (...r) => i.onPreviousClick && i.onPreviousClick(...r)),
        },
        lS
      ),
      Re(" " + X(i.calendarTitle) + " ", 1),
      E(
        "button",
        {
          class: "date-picker-header__button",
          onClick:
            n[1] || (n[1] = (...r) => i.onNextClick && i.onNextClick(...r)),
        },
        uS
      ),
    ])
  );
}
const dS = oe(oS, [
    ["render", cS],
    ["__scopeId", "data-v-707c7e3f"],
  ]),
  mS = re({
    components: { ModalLayout: vn, DatePicker: _i },
    props: {
      translations: { type: Object, default: () => {} },
      language: { type: String, default: "en" },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup(e) {
      const {
          isStoreTypeZyro: n,
          products: a,
          selectedBookingProductId: t,
          shoppingCartItems: o,
          setShoppingCartOpen: i,
          setShoppingCartItems: r,
          setSelectedBookingId: l,
        } = Ft(),
        { openEcommerceModal: s } = Ut(),
        { initiateCheckout: m } = nn(),
        g = u(() => dS);
      return {
        initiateCheckout: m,
        openEcommerceModal: s,
        datePickerHeader: g,
        isStoreTypeZyro: n,
        products: a,
        selectedBookingProductId: t,
        shoppingCartItems: o,
        setShoppingCartOpen: i,
        setShoppingCartItems: r,
        setSelectedBookingId: l,
      };
    },
    data() {
      return {
        isTimeSelected: !1,
        selectedTimeSlot: null,
        selectedDate: new Date(),
        timeSlots: [],
        isSlotsLoading: !1,
        isCalendarLoading: !1,
        isCheckoutLoading: !1,
        disabledDates: [],
      };
    },
    computed: {
      isModalEnabled() {
        return this.isStoreTypeZyro && !!this.selectedBookingProductId;
      },
      selectedBookingProduct() {
        return this.products?.find(
          (e) => e.id === this.selectedBookingProductId
        );
      },
      bookingEvent() {
        return this.selectedBookingProduct?.variants[0].booking_event;
      },
      title() {
        return this.selectedBookingProduct?.title;
      },
      location() {
        return this.bookingEvent?.location;
      },
      duration() {
        return this.bookingEvent?.length || null;
      },
      durationUnit() {
        return this.bookingEvent?.length_unit;
      },
      aggregatedDuration() {
        const e =
            this.durationUnit === hr
              ? this.duration / 1e3 / 60 / 60
              : this.duration / 1e3 / 60,
          n =
            this.durationUnit === hr
              ? this.translations.hourShort
              : this.translations.minuteShort;
        return `${e} ${n}`;
      },
      eventStartDate() {
        return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null;
      },
      eventEndDate() {
        if (!this.selectedTimeSlot) return null;
        const n = this.eventStartDate.getTime() + this.duration;
        return new Date(n);
      },
      calculatedTime() {
        if (!this.selectedTimeSlot) return "--:--";
        const e = this.getVisibleDate(this.eventStartDate),
          n = this.getVisibleDate(this.eventEndDate);
        return `${e} - ${n}`;
      },
      dayNames() {
        const e = [],
          n = new Date();
        n.setDate(n.getDate() - n.getDay());
        for (let a = 0; a < 7; a += 1)
          n.setDate(n.getDate() + 1),
            e.push(
              new Date(n).toLocaleDateString(this.getLanguage, {
                weekday: "short",
              })
            );
        return e;
      },
      formattedSelectedDate() {
        const e = this.selectedDate?.toLocaleDateString(this.language);
        if (
          this.eventStartDate?.toDateString() !==
          this.eventEndDate?.toDateString()
        ) {
          const n = this.eventEndDate.toLocaleDateString(this.language);
          return `${e} - ${n}`;
        }
        return e;
      },
      selectedMonthAndWeekday() {
        if (!this.selectedDate) return null;
        const e = this.selectedDate?.toLocaleDateString(this.getLanguage, {
          month: "long",
          day: "numeric",
        });
        return `${this.selectedDate?.toLocaleDateString(this.getLanguage, {
          weekday: "long",
        })}, ${e}`;
      },
      getLanguage() {
        return this.language === "br" ? "pt-BR" : this.language;
      },
    },
    watch: {
      async selectedDate() {
        (this.selectedTimeSlot = null),
          (this.isTimeSelected = !1),
          await this.loadTimeSlots();
      },
    },
    async mounted() {
      this.isModalEnabled && this.setDefaultData();
    },
    methods: {
      closeEcommerceModal() {
        this.setSelectedBookingId(null),
          this.$refs.modal.handleCloseModalAction();
      },
      async setDefaultData() {
        if (
          (await this.loadAvailability(),
          this.disabledDates.some(
            (e) => e.toDateString() === this.selectedDate.toDateString()
          ))
        ) {
          const n = this.getAllDaysInCurrentMonth()
            .filter(
              (a) =>
                !this.disabledDates.some(
                  (t) => t.toDateString() === a.toDateString()
                )
            )
            .sort((a, t) => new Date(a.date) - new Date(t.date));
          this.selectedDate = n.shift();
        }
        await this.loadTimeSlots();
      },
      async handleSubmit() {
        if (Na() || this.isInPreviewMode) {
          this.openEcommerceModal("EcommerceMessageButtonDisabled");
          return;
        }
        const e = { ...this.selectedBookingProduct },
          { timeZone: n } = Intl.DateTimeFormat().resolvedOptions();
        (e.variants[0].booking_event = {
          ...e.variants[0].booking_event,
          time_slot: this.selectedTimeSlot,
          time_zone: n,
          length: e.variants[0].booking_event.length,
          length_unit: e.variants[0].booking_event.length_unit,
          date: this.selectedDate,
        }),
          this.isCartVisible
            ? ((this.isCheckoutLoading = !0),
              this.setShoppingCartItems([...this.shoppingCartItems, e]),
              this.setShoppingCartOpen(!0),
              this.closeEcommerceModal())
            : await this.initiateCheckout([e]).then(() => {
                (this.isCheckoutLoading = !1), this.closeEcommerceModal();
              });
      },
      selectTimeSlot(e) {
        (this.isTimeSelected = !0), (this.selectedTimeSlot = e);
      },
      async loadTimeSlots() {
        this.isSlotsLoading = !0;
        const e = new Intl.DateTimeFormat("lt").format(this.selectedDate);
        this.timeSlots = await Qd(this.bookingEvent.id, e).then(
          (n) => ((this.isSlotsLoading = !1), n)
        );
      },
      async loadAvailability({ data: e = {} } = {}) {
        this.isCalendarLoading = !0;
        const n = Object.keys(e).length
            ? new Date(e.year, e.month)
            : this.selectedDate,
          a = new Date(n.getFullYear(), n.getMonth() + 1, 0);
        this.disabledDates = await Zd({
          bookingId: this.bookingEvent.id,
          fromDate: new Intl.DateTimeFormat("lt").format(n),
          toDate: new Intl.DateTimeFormat("lt").format(a),
        }).then(
          (t) => (
            (this.isCalendarLoading = !1),
            t.map((o) => {
              const i = o.split("-");
              return new Date(i[0], i[1] - 1, i[2]);
            })
          )
        );
      },
      getAllDaysInCurrentMonth() {
        const e = new Date().getMonth(),
          n = new Date(new Date().getFullYear(), e, new Date().getDate()),
          a = [];
        for (; n.getMonth() === e; )
          a.push(new Date(n)), n.setDate(n.getDate() + 1);
        return a;
      },
      getVisibleDate(e) {
        return e.toLocaleTimeString(this.language, {
          hour: "2-digit",
          minute: "2-digit",
        });
      },
    },
  }),
  gS = { class: "ecommerce-booking-modal" },
  vS = { class: "ecommerce-booking-modal__content" },
  pS = { class: "ecommerce-booking-modal__info" },
  fS = { class: "ecommerce-booking-modal__title" },
  hS = { class: "ecommerce-booking-modal__icons" },
  yS = { class: "ecommerce-booking-modal__text-wrapper" },
  bS = E(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      E(
        "svg",
        {
          width: "16",
          height: "18",
          viewBox: "0 0 16 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          E("path", {
            d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  _S = { class: "ecommerce-booking-modal__text" },
  wS = { class: "ecommerce-booking-modal__text-wrapper" },
  kS = E(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      E(
        "svg",
        {
          width: "18",
          height: "18",
          viewBox: "0 0 18 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          E("path", {
            d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  SS = { class: "ecommerce-booking-modal__text" },
  TS = { class: "ecommerce-booking-modal__text-wrapper" },
  CS = E(
    "div",
    { class: "ecommerce-booking-modal__icon" },
    [
      E(
        "svg",
        {
          width: "12",
          height: "18",
          viewBox: "0 0 12 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        [
          E("path", {
            d: "M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z",
            fill: "#474B4F",
          }),
        ]
      ),
    ],
    -1
  ),
  PS = { class: "ecommerce-booking-modal__text" },
  IS = { class: "ecommerce-booking-modal__availability" },
  ES = { class: "ecommerce-booking-modal__time-title" },
  DS = { class: "ecommerce-booking-modal__calendar-wrapper" },
  MS = { class: "ecommerce-booking-modal__time-wrapper" },
  OS = { class: "ecommerce-booking-modal__selected-day" },
  AS = { class: "ecommerce-booking-modal__time-slot-wrapper" },
  BS = { key: 0, class: "ecommerce-booking-modal__time-slot-loader" },
  LS = ["onClick"],
  xS = { class: "ecommerce-booking-modal__buttons" },
  RS = ["disabled"];
function HS(e, n, a, t, o, i) {
  const r = He("DatePicker"),
    l = He("ModalLayout");
  return e.isModalEnabled
    ? (c(),
      q(
        l,
        {
          key: 0,
          ref: "modal",
          padding: "0",
          "max-width": "1048px",
          "mobile-height": "100%",
          width: "100vw",
          "background-color": "transparent",
        },
        {
          default: fe(() => [
            E("div", gS, [
              E("div", vS, [
                E("div", pS, [
                  E("p", fS, X(e.title), 1),
                  E("div", hS, [
                    E("div", yS, [
                      bS,
                      E("p", _S, X(e.formattedSelectedDate), 1),
                    ]),
                    E("div", wS, [
                      kS,
                      E(
                        "p",
                        SS,
                        X(e.calculatedTime) +
                          " (" +
                          X(e.aggregatedDuration) +
                          ") ",
                        1
                      ),
                    ]),
                  ]),
                  E("div", TS, [CS, E("p", PS, X(e.location), 1)]),
                ]),
                E("div", IS, [
                  E("p", ES, X(e.translations.selectDateAndTime), 1),
                  E("div", DS, [
                    Oe(
                      r,
                      {
                        modelValue: e.selectedDate,
                        "onUpdate:modelValue":
                          n[0] || (n[0] = (s) => (e.selectedDate = s)),
                        inline: "",
                        "hide-offset-dates": "",
                        "auto-apply": "",
                        class: Z([
                          "ecommerce-booking-modal-calendar",
                          {
                            "ecommerce-booking-modal-calendar--loading":
                              e.isCalendarLoading,
                          },
                        ]),
                        "disabled-dates": e.disabledDates,
                        "min-date": new Date(),
                        locale: e.getLanguage,
                        "no-swipe": "",
                        "month-change-on-scroll": !1,
                        "enable-time-picker": !1,
                        "custom-props": { language: e.getLanguage },
                        "month-year-component": e.datePickerHeader,
                        onUpdateMonthYear:
                          n[1] ||
                          (n[1] = (s) => e.loadAvailability({ data: s })),
                      },
                      {
                        "calendar-header": fe(({ index: s }) => [
                          E("div", null, X(e.dayNames[s]), 1),
                        ]),
                        _: 1,
                      },
                      8,
                      [
                        "modelValue",
                        "class",
                        "disabled-dates",
                        "min-date",
                        "locale",
                        "custom-props",
                        "month-year-component",
                      ]
                    ),
                    E("div", MS, [
                      E("div", null, [
                        E("p", OS, X(e.selectedMonthAndWeekday), 1),
                      ]),
                      E("div", AS, [
                        e.isSlotsLoading
                          ? (c(), f("div", BS))
                          : (c(!0),
                            f(
                              ge,
                              { key: 1 },
                              we(
                                e.timeSlots,
                                (s, m) => (
                                  c(),
                                  f(
                                    "button",
                                    {
                                      key: `time-${m}`,
                                      class: Z([
                                        "ecommerce-booking-modal__time-slot",
                                        {
                                          "ecommerce-booking-modal__time-slot--active":
                                            e.selectedTimeSlot === s,
                                        },
                                      ]),
                                      onClick: (g) => e.selectTimeSlot(s),
                                    },
                                    X(e.getVisibleDate(new Date(s))),
                                    11,
                                    LS
                                  )
                                )
                              ),
                              128
                            )),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
              E("div", xS, [
                E(
                  "button",
                  {
                    class: "ecommerce-booking-modal__button",
                    onClick:
                      n[2] ||
                      (n[2] = (...s) =>
                        e.closeEcommerceModal && e.closeEcommerceModal(...s)),
                  },
                  X(e.translations.cancel),
                  1
                ),
                E(
                  "button",
                  {
                    class: Z([
                      "ecommerce-booking-modal__button ecommerce-booking-modal__button--save",
                      { loading: e.isCheckoutLoading },
                    ]),
                    disabled: !e.isTimeSelected,
                    onClick:
                      n[3] ||
                      (n[3] = (...s) => e.handleSubmit && e.handleSubmit(...s)),
                  },
                  X(e.translations.book),
                  11,
                  RS
                ),
              ]),
            ]),
          ]),
          _: 1,
        },
        512
      ))
    : O("", !0);
}
const NS = oe(mS, [["render", HS]]),
  $S = re({
    name: "EcommerceModalContent",
    props: {
      title: { type: String, required: !0 },
      text: { type: String, required: !0 },
      buttonText: { type: String, required: !0 },
      qaSelector: { type: String, default: "success" },
    },
    emits: ["handle-close"],
  }),
  VS = { class: "payment-info" },
  US = { class: "payment-info__content" },
  YS = { class: "payment-info__title" },
  FS = { class: "payment-info__text body-large" };
function WS(e, n, a, t, o, i) {
  const r = je("qa");
  return ue(
    (c(),
    f("div", VS, [
      E("div", US, [
        E("h5", YS, X(e.title), 1),
        E("p", FS, X(e.text), 1),
        E(
          "button",
          {
            class: "payment-info__button",
            type: "primary",
            onClick: n[0] || (n[0] = (l) => e.$emit("handle-close")),
          },
          X(e.buttonText),
          1
        ),
      ]),
    ])),
    [[r, `ecommerce-modal-checkout-${e.qaSelector}`]]
  );
}
const Eo = oe($S, [
    ["render", WS],
    ["__scopeId", "data-v-98b20e5c"],
  ]),
  qS = re({
    components: { ModalLayout: vn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function GS(e, n, a, t, o, i) {
  const r = He("ModalContent"),
    l = He("ModalLayout");
  return (
    c(),
    q(
      l,
      { ref: "modal" },
      {
        default: fe(() => [
          Oe(
            r,
            {
              "qa-selector": "booking-unavailable",
              title: e.translations.checkoutModalBookingUnavailable,
              text: e.translations.checkoutModalChooseDifferentTime,
              "button-text": e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (s) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const jS = oe(qS, [["render", GS]]),
  zS = re({
    components: { ModalLayout: vn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function KS(e, n, a, t, o, i) {
  const r = He("ModalContent"),
    l = He("ModalLayout");
  return (
    c(),
    q(
      l,
      { ref: "modal" },
      {
        default: fe(() => [
          Oe(
            r,
            {
              "qa-selector": "failed",
              title: e.translations.checkoutModalCantAcceptOrders,
              text: e.translations.checkoutModalPleaseContact,
              "button-text": e.translations.close,
              onHandleClose:
                n[0] || (n[0] = (s) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const QS = oe(zS, [["render", KS]]),
  ZS = re({
    __name: "EcommerceCheckoutSuccess",
    props: { translations: { default: () => ({}) } },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { isEcommerceStoreCreated: t, setShoppingCartItems: o } = Ft(),
        i = M({
          title: a.translations.checkoutModalThanksForOrder,
          text: a.translations.checkoutModalOrderReceived,
          buttonText: a.translations.gotIt,
          modalType: "success-order",
        }),
        r = M(null);
      Ee(() => {
        o([]);
        const m = new URLSearchParams(window.location.search).get("product");
        m === Yt
          ? (i.value = {
              title: a.translations.checkoutModalThanksForOrder,
              text: a.translations.checkoutModalSuccessfullyBooked,
              buttonText: a.translations.gotIt,
              modalType: "success-orderbooking",
            })
          : m === fr &&
            (i.value = {
              title: a.translations.checkoutModalThanksForDonation,
              text: a.translations.checkoutModalDonationReceived,
              buttonText: a.translations.gotIt,
              modalType: "success-orderdonation",
            });
      });
      const l = {
        props: a,
        isEcommerceStoreCreated: t,
        setShoppingCartItems: o,
        modalContent: i,
        modalRef: r,
        ModalContent: Eo,
        ModalLayout: vn,
      };
      return (
        Object.defineProperty(l, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        l
      );
    },
  });
function XS(e, n, a, t, o, i) {
  return t.isEcommerceStoreCreated
    ? (c(),
      q(
        t.ModalLayout,
        { key: 0, ref: "modalRef" },
        {
          default: fe(() => [
            Oe(
              t.ModalContent,
              {
                title: t.modalContent.title,
                text: t.modalContent.text,
                "button-text": t.modalContent.buttonText,
                "qa-selector": t.modalContent.modalType,
                onHandleClose:
                  n[0] || (n[0] = (r) => t.modalRef.handleCloseModalAction()),
              },
              null,
              8,
              ["title", "text", "button-text", "qa-selector"]
            ),
          ]),
          _: 1,
        },
        512
      ))
    : O("", !0);
}
const JS = oe(ZS, [["render", XS]]),
  eT = re({
    components: { CloseButton: Jr },
    props: { translations: { type: Object, default: () => {} } },
    setup() {
      const { closeEcommerceModal: e } = Ut(),
        n = setTimeout(() => {
          e();
        }, 6e3);
      return (
        kt(() => {
          clearTimeout(n);
        }),
        { closeEcommerceModal: e }
      );
    },
  }),
  tT = (e) => (Rt("data-v-2b2551b7"), (e = e()), Ht(), e),
  aT = { class: "notification" },
  nT = tT(() =>
    E(
      "svg",
      {
        class: "notification__icon",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      [
        E("path", {
          d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        E("path", {
          d: "M12.01 16L12.01 12",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
        E("path", {
          d: "M12.01 8L12 8",
          stroke: "currentColor",
          "stroke-width": "2",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
        }),
      ],
      -1
    )
  ),
  oT = { class: "notification__content" };
function rT(e, n, a, t, o, i) {
  const r = He("CloseButton"),
    l = je("qa");
  return (
    c(),
    q(
      At,
      { name: "fade" },
      {
        default: fe(() => [
          ue(
            (c(),
            f("div", aT, [
              nT,
              E("p", oT, X(e.translations.checkoutModalDisabledPreview), 1),
              Oe(r, {
                class: "notification__close",
                title: "Close",
                onClick: n[0] || (n[0] = (s) => e.closeEcommerceModal()),
              }),
            ])),
            [[l, "builder-message-ecommercedisabled"]]
          ),
        ]),
        _: 1,
      }
    )
  );
}
const iT = oe(eT, [
    ["render", rT],
    ["__scopeId", "data-v-2b2551b7"],
  ]),
  lT = re({
    components: { ModalLayout: vn, ModalContent: Eo },
    props: { translations: { type: Object, default: () => {} } },
  });
function sT(e, n, a, t, o, i) {
  const r = He("ModalContent"),
    l = He("ModalLayout");
  return (
    c(),
    q(
      l,
      { ref: "modal" },
      {
        default: fe(() => [
          Oe(
            r,
            {
              "qa-selector": "outofstock",
              title: e.translations.checkoutModalOutOfStock,
              text: e.translations.checkoutModalTryOrChoose,
              "button-text": e.translations.gotIt,
              onHandleClose:
                n[0] || (n[0] = (s) => e.$refs.modal.handleCloseModalAction()),
            },
            null,
            8,
            ["title", "text", "button-text"]
          ),
        ]),
        _: 1,
      },
      512
    )
  );
}
const uT = oe(lT, [["render", sT]]),
  cT = "open-modal",
  dT = re({
    components: {
      EcommerceProductPreview: l_,
      EcommerceBookingEventSelect: NS,
      EcommerceBookingUnavailable: jS,
      EcommerceCheckoutFailed: QS,
      EcommerceCheckoutSuccess: JS,
      EcommerceMessageButtonDisabled: iT,
      EcommerceOutOfStock: uT,
    },
    props: {
      ecommerceTranslations: { type: Object, default: () => ({}) },
      language: { type: String, default: "en" },
      currentLocale: { type: String, required: !0 },
      isCartVisible: { type: Boolean, default: !1 },
      isInPreviewMode: { type: Boolean, default: !1 },
    },
    setup() {
      const {
        openEcommerceModal: e,
        closeEcommerceModal: n,
        openEcommerceModalName: a,
      } = Ut();
      return (
        Ee(() => {
          const o = new URLSearchParams(window.location.search).get(cT);
          o && e(o);
        }),
        {
          openEcommerceModal: e,
          closeEcommerceModal: n,
          openEcommerceModalName: a,
        }
      );
    },
  });
function mT(e, n, a, t, o, i) {
  return e.openEcommerceModalName
    ? (c(),
      q(
        mn(e.openEcommerceModalName),
        {
          key: 0,
          translations: e.ecommerceTranslations,
          language: e.language,
          "current-locale": e.currentLocale,
          "is-cart-visible": e.isCartVisible,
          "is-in-preview-mode": e.isInPreviewMode,
          "is-quick-preview": "",
        },
        null,
        8,
        [
          "translations",
          "language",
          "current-locale",
          "is-cart-visible",
          "is-in-preview-mode",
        ]
      ))
    : O("", !0);
}
const gT = oe(dT, [["render", mT]]),
  vT = re({
    __name: "Flag",
    props: { alt: {}, src: { default: void 0 } },
    setup(e, { expose: n }) {
      n();
      const a = {};
      return (
        Object.defineProperty(a, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        a
      );
    },
  }),
  pT = { class: "flag" },
  fT = ["src", "alt"],
  hT = E("div", { class: "flag__shadow" }, null, -1);
function yT(e, n, a, t, o, i) {
  return (
    c(),
    f("div", pT, [
      E("img", { class: "flag__img", src: a.src, alt: a.alt }, null, 8, fT),
      hT,
    ])
  );
}
const bT = oe(vT, [["render", yT]]),
  _T = re({
    __name: "LanguageSwitcher",
    props: { languages: {}, currentLocale: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(() =>
          a.languages
            .filter(({ isHidden: r }) => !r)
            .map((r) => ({
              ...r,
              src: `${_c}/${r.flagPath}`,
              alt: `${r.locale} flag`,
            }))
        ),
        o = u(() => t.value.find(({ locale: r }) => r === a.currentLocale)),
        i = {
          props: a,
          languageSwitcherLanguages: t,
          selectedLanguage: o,
          Flag: bT,
        };
      return (
        Object.defineProperty(i, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        i
      );
    },
  }),
  wT = { ref: "languageSwitcher", class: "language-switcher", tabindex: "0" },
  kT = { class: "language-switcher__button" },
  ST = { key: 1, class: "language-switcher__locale" },
  TT = E(
    "svg",
    {
      class: "language-switcher__icon",
      width: "10",
      height: "7",
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      E("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor",
      }),
    ],
    -1
  ),
  CT = { class: "language-switcher__dropdown-area" },
  PT = { class: "language-switcher__dropdown" },
  IT = ["href"];
function ET(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "div",
      wT,
      [
        ue(
          (c(),
          f("div", kT, [
            t.selectedLanguage?.country
              ? ue(
                  (c(),
                  q(
                    t.Flag,
                    {
                      key: 0,
                      class: "language-switcher__flag",
                      src: t.selectedLanguage.src,
                      alt: t.selectedLanguage.alt,
                    },
                    null,
                    8,
                    ["src", "alt"]
                  )),
                  [
                    [
                      r,
                      `navigation-selected-language-${t.selectedLanguage.name}`,
                    ],
                  ]
                )
              : (c(), f("div", ST, X(t.selectedLanguage?.locale), 1)),
            TT,
          ])),
          [[r, "navigation-language-switcher"]]
        ),
        E("div", CT, [
          E("ul", PT, [
            (c(!0),
            f(
              ge,
              null,
              we(t.languageSwitcherLanguages, (l) =>
                ue(
                  (c(),
                  f(
                    "li",
                    {
                      key: l.locale,
                      class: "language-switcher__dropdown-item",
                    },
                    [
                      E(
                        "a",
                        {
                          href: l.href,
                          class: Z([
                            "language-switcher__dropdown-link",
                            { "--current": l.locale === a.currentLocale },
                          ]),
                        },
                        [
                          l.country
                            ? (c(),
                              q(
                                t.Flag,
                                {
                                  key: 0,
                                  class: "language-switcher__dropdown-flag",
                                  src: l.src,
                                  alt: l.alt,
                                },
                                null,
                                8,
                                ["src", "alt"]
                              ))
                            : O("", !0),
                          Re(" " + X(l.name), 1),
                        ],
                        10,
                        IT
                      ),
                    ]
                  )),
                  [[r, `navigation-language-switcher-${l.locale}`]]
                )
              ),
              128
            )),
          ]),
        ]),
      ],
      512
    )
  );
}
const DT = oe(_T, [["render", ET]]),
  MT = re({
    __name: "ZyroHamburger",
    props: {
      title: { type: String, default: "Menu" },
      isOpen: { type: Boolean, required: !0 },
      color: { type: String, default: "var(--nav-link-text-color)" },
    },
    setup(e, { expose: n }) {
      n(), rt((i) => ({ "165ebbac": t.value }));
      const a = e,
        t = u(() => a.color),
        o = { props: a, burgerColor: t };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  wi = (e) => (Rt("data-v-ccf9b649"), (e = e()), Ht(), e),
  OT = ["title"],
  AT = wi(() => E("span", { class: "burger__bun" }, null, -1)),
  BT = wi(() => E("span", { class: "burger__meat" }, null, -1)),
  LT = wi(() => E("span", { class: "burger__bun" }, null, -1)),
  xT = [AT, BT, LT];
function RT(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "button",
      {
        type: "button",
        class: Z(["burger", { "burger--open": a.isOpen }]),
        title: a.title,
      },
      xT,
      10,
      OT
    )
  );
}
const HT = oe(MT, [
    ["render", RT],
    ["__scopeId", "data-v-ccf9b649"],
  ]),
  NT = re({
    name: "BlockHeaderBackground",
    props: {
      type: { type: String, default: "color" },
      imageUrl: { type: String, default: null },
      color: { type: String, default: "" },
      isTransparent: { type: Boolean, default: !1 },
      overlayOpacity: { type: Number, default: 0 },
    },
    computed: {
      backgroundImage() {
        return this.type === "image" && this.imageUrl;
      },
      backgroundColor() {
        return this.type === "color" ? this.color : "transparent";
      },
      backgroundCSSVars() {
        return {
          "--background-color": this.isTransparent
            ? "transparent"
            : this.backgroundColor,
          ...(!!this.backgroundImage && {
            "--background-image": `url(${this.backgroundImage})`,
          }),
          ...(!!this.overlayOpacity && {
            "--overlay-opacity": this.overlayOpacity,
          }),
        };
      },
    },
  });
function $T(e, n, a, t, o, i) {
  return (
    c(),
    f(
      "div",
      {
        class: Z([
          "background",
          { "background--with-image": e.backgroundImage },
        ]),
        style: Be(e.backgroundCSSVars),
      },
      null,
      6
    )
  );
}
const VT = oe(NT, [["render", $T]]),
  UT = re({
    __name: "BlockHeaderCart",
    props: { cartIconSize: {}, cartText: {}, itemsInCart: {}, cartUrl: {} },
    emits: ["cart-click"],
    setup(e, { expose: n, emit: a }) {
      n(), rt((l) => ({ "0869983e": i.value }));
      const t = e,
        o = a,
        i = u(() => t.cartIconSize),
        r = { props: t, emit: o, cartIconSize: i };
      return (
        Object.defineProperty(r, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        r
      );
    },
  }),
  YT = (e) => (Rt("data-v-8511a203"), (e = e()), Ht(), e),
  FT = { class: "block-header-cart-wrapper" },
  WT = ["href"],
  qT = { class: "block-header-cart__icon-container" },
  GT = YT(() =>
    E(
      "svg",
      {
        width: "19",
        height: "24",
        viewBox: "0 0 19 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "block-header-cart__icon",
      },
      [
        E("path", {
          "fill-rule": "evenodd",
          "clip-rule": "evenodd",
          d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
          fill: "currentColor",
        }),
      ],
      -1
    )
  ),
  jT = { class: "block-header-cart__cart-text" };
function zT(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f("div", FT, [
      E(
        "a",
        { href: a.cartUrl, class: "block-header-cart" },
        [
          ue(
            (c(),
            f(
              "button",
              {
                class: "block-header-cart__button",
                title: "Go to cart",
                onClick: n[0] || (n[0] = (l) => t.emit("cart-click")),
              },
              [
                E("div", qT, [
                  GT,
                  E("span", null, [
                    E("span", jT, X(a.cartText), 1),
                    Re(" (" + X(a.itemsInCart) + ")", 1),
                  ]),
                ]),
              ]
            )),
            [[r, "header-btn-shoppingbag"]]
          ),
        ],
        8,
        WT
      ),
    ])
  );
}
const KT = oe(UT, [
    ["render", zT],
    ["__scopeId", "data-v-8511a203"],
  ]),
  QT = re({
    __name: "BlockHeaderItemContent",
    props: { item: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        t = u(
          () =>
            `${
              a.item.isCurrent
                ? "navigationblock-page-active-"
                : "navigationblock-page-"
            }${a.item.name}`
        ),
        o = { props: a, linkDataQa: t };
      return (
        Object.defineProperty(o, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        o
      );
    },
  }),
  ZT = (e) => (Rt("data-v-04741be4"), (e = e()), Ht(), e),
  XT = ["target", "rel", "href", "textContent"],
  JT = ["textContent"],
  eC = { key: 2, class: "item-content__icon-container-wrapper" },
  tC = ZT(() =>
    E(
      "span",
      { class: "item-content__icon-container" },
      [
        E(
          "svg",
          {
            class: "item-content__icon",
            width: "10",
            height: "7",
            viewBox: "0 0 10 7",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          [
            E("path", {
              d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
              fill: "currentColor",
            }),
          ]
        ),
      ],
      -1
    )
  ),
  aC = [tC];
function nC(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "div",
      {
        class: Z([
          "item-content-wrapper",
          { "item-content-wrapper--active": a.item.isCurrent },
        ]),
      },
      [
        a.item.href
          ? ue(
              (c(),
              f(
                "a",
                {
                  key: 0,
                  class: "item-content",
                  target: a.item.target,
                  rel: a.item.rel,
                  href: a.item.href,
                  textContent: X(a.item.name),
                },
                null,
                8,
                XT
              )),
              [[r, t.linkDataQa]]
            )
          : ue(
              (c(),
              f(
                "span",
                { key: 1, class: "item-content", textContent: X(a.item.name) },
                null,
                8,
                JT
              )),
              [[r, t.linkDataQa]]
            ),
        a.item.hasDropdown ? (c(), f("div", eC, aC)) : O("", !0),
      ],
      2
    )
  );
}
const oC = oe(QT, [
    ["render", nC],
    ["__scopeId", "data-v-04741be4"],
  ]),
  rC = re({
    __name: "BlockHeaderItem",
    props: { item: {}, areDropdownsHidden: { type: Boolean } },
    setup(e, { expose: n }) {
      n();
      const t = { props: e, BlockHeaderItemContent: oC };
      return (
        Object.defineProperty(t, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        t
      );
    },
  }),
  iC = { class: "block-header-item" },
  lC = { class: "block-header-item__label" },
  sC = {
    key: 0,
    type: "checkbox",
    class: "block-header-item__mobile-dropdown-trigger",
  },
  uC = { key: 1, class: "block-header-item__dropdown-area" },
  cC = { class: "block-header-item__dropdown" };
function dC(e, n, a, t, o, i) {
  const r = He("BlockHeaderItem", !0),
    l = je("qa");
  return (
    c(),
    f("li", iC, [
      E("label", lC, [
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(), f("input", sC))
          : O("", !0),
        ue(
          Oe(
            t.BlockHeaderItemContent,
            {
              item: a.item,
              class: "block-header-item__item",
              "aria-haspopup": a.item.hasDropdown,
            },
            null,
            8,
            ["item", "aria-haspopup"]
          ),
          [[l, `navigation-item-${a.item.name}`]]
        ),
        !t.props.areDropdownsHidden && t.props.item.hasDropdown
          ? (c(),
            f("div", uC, [
              E("ul", cC, [
                (c(!0),
                f(
                  ge,
                  null,
                  we(
                    t.props.item.subItems,
                    (s) => (
                      c(), q(r, { key: s.id, item: s }, null, 8, ["item"])
                    )
                  ),
                  128
                )),
              ]),
            ]))
          : O("", !0),
      ]),
    ])
  );
}
const mC = oe(rC, [
    ["render", dC],
    ["__scopeId", "data-v-e35d3004"],
  ]),
  gC = re({
    __name: "BlockHeaderLogo",
    props: {
      logoSrc: {},
      logoSvg: {},
      href: {},
      height: {},
      heightMobile: {},
      maxWidth: {},
      maxWidthMobile: {},
      objectPosition: {},
      objectPositionMobile: {},
      siteName: {},
    },
    setup(e, { expose: n }) {
      n(),
        rt((d) => ({
          aa8eed20: r.value,
          daecaa86: o.value,
          e799d5c4: s.value,
          cb66da22: l.value,
          d5125dc4: i.value,
          aeef6b02: m.value,
        }));
      const a = e,
        t = u(() => (a.siteName ? `${a.siteName} logo` : "")),
        o = u(() => `${a.height}px`),
        i = u(() => `${a.heightMobile}px`),
        r = u(() => a.maxWidth),
        l = u(() => a.maxWidthMobile || r.value),
        s = u(() => a.objectPosition),
        m = u(() => a.objectPositionMobile),
        g = {
          props: a,
          logoAltTag: t,
          height: o,
          mHeight: i,
          width: r,
          mWidth: l,
          objectPosition: s,
          mObjectPosition: m,
        };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  vC = ["href"],
  pC = ["innerHTML"],
  fC = ["src", "alt"];
function hC(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "a",
      { class: "block-header-logo", href: t.props.href },
      [
        t.props.logoSvg
          ? (c(),
            f(
              "div",
              {
                key: 0,
                class: "block-header-logo__image",
                innerHTML: t.props.logoSvg,
              },
              null,
              8,
              pC
            ))
          : t.props.logoSrc
          ? ue(
              (c(),
              f(
                "img",
                {
                  key: 1,
                  class: "block-header-logo__image",
                  src: t.props.logoSrc,
                  alt: t.logoAltTag,
                },
                null,
                8,
                fC
              )),
              [[r, "builder-siteheader-img-logo"]]
            )
          : O("", !0),
      ],
      8,
      vC
    )
  );
}
const yC = oe(gC, [
    ["render", hC],
    ["__scopeId", "data-v-525b292a"],
  ]),
  bC = re({
    __name: "BlockHeaderLayout",
    props: {
      layout: {},
      mobileLayout: {},
      isLogoVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      areSocialIconLinksVisible: { type: Boolean },
      isCartVisible: { type: Boolean },
      isButtonVisible: { type: Boolean },
      isMobileMenuDropdownOpen: { type: Boolean },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    setup(e, { expose: n }) {
      n(), rt((d) => ({ "3c28effe": m.value, b96ef066: l.value }));
      const a = e,
        t = M(null),
        o = M(null),
        i = M(0),
        r = up(o),
        l = u(() => `${i.value}px`),
        s = u(
          () =>
            [
              a.isLanguageSwitcherVisible,
              a.areSocialIconLinksVisible,
              a.isCartVisible,
              a.isButtonVisible,
            ].filter(Boolean).length
        ),
        m = u(
          () =>
            `${a.isLogoVisible ? "min-content" : ""} auto ${
              s.value > 0 ? `repeat(${s.value}, min-content)` : ""
            }`
        );
      Ee(() => {
        (o.value = document.body),
          (i.value =
            document.querySelector(".block-sticky-bar")?.clientHeight ?? 0);
      }),
        Le(
          () => a.isMobileMenuDropdownOpen,
          (d) => {
            d
              ? (t?.value && (t.value.scrollTop = 0), (r.value = !0))
              : (r.value = !1);
          }
        );
      const g = {
        props: a,
        dropdownRef: t,
        bodyElement: o,
        stickyBarHeight: i,
        isBodyScrollLocked: r,
        stickyBarHeightPx: l,
        visibleNonCenteredRightElementsCount: s,
        nonCenteredLayoutColumns: m,
        get BLOCK_HEADER_LAYOUTS() {
          return wc;
        },
      };
      return (
        Object.defineProperty(g, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        g
      );
    },
  }),
  _C = {
    key: 1,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-3",
  },
  wC = { class: "block-header-layout-desktop__right-side" },
  kC = {
    key: 2,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-4",
  },
  SC = { class: "block-header-layout-desktop__right-side" },
  TC = {
    key: 3,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-5",
  },
  CC = { class: "block-header-layout-desktop__right-side" };
function PC(e, n, a, t, o, i) {
  return (
    c(),
    f(
      ge,
      null,
      [
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_1 ||
        t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_2
          ? (c(),
            f(
              "div",
              {
                key: 0,
                class: Z(
                  `block-header-layout-desktop block-header-layout-desktop--${t.props.layout}`
                ),
              },
              [
                te(e.$slots, "logo", {}, void 0, !0),
                te(e.$slots, "nav", {}, void 0, !0),
                te(e.$slots, "language-switcher", {}, void 0, !0),
                te(e.$slots, "social-icons", {}, void 0, !0),
                te(e.$slots, "cart", {}, void 0, !0),
                te(e.$slots, "button", {}, void 0, !0),
              ],
              2
            ))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_3
          ? (c(),
            f("div", _C, [
              te(e.$slots, "logo", {}, void 0, !0),
              te(e.$slots, "nav", {}, void 0, !0),
              E("div", wC, [
                te(e.$slots, "language-switcher", {}, void 0, !0),
                te(e.$slots, "social-icons", {}, void 0, !0),
                te(e.$slots, "cart", {}, void 0, !0),
                te(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_4
          ? (c(),
            f("div", kC, [
              te(e.$slots, "nav", {}, void 0, !0),
              te(e.$slots, "logo", {}, void 0, !0),
              E("div", SC, [
                te(e.$slots, "language-switcher", {}, void 0, !0),
                te(e.$slots, "social-icons", {}, void 0, !0),
                te(e.$slots, "cart", {}, void 0, !0),
                te(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : t.props.layout === t.BLOCK_HEADER_LAYOUTS.DESKTOP_5
          ? (c(),
            f("div", TC, [
              te(e.$slots, "logo", {}, void 0, !0),
              te(e.$slots, "social-icons", {}, void 0, !0),
              te(e.$slots, "nav", {}, void 0, !0),
              E("div", CC, [
                te(e.$slots, "language-switcher", {}, void 0, !0),
                te(e.$slots, "cart", {}, void 0, !0),
                te(e.$slots, "button", {}, void 0, !0),
              ]),
            ]))
          : O("", !0),
        E(
          "div",
          {
            class: Z([
              "block-header-layout-mobile",
              `block-header-layout-mobile--${t.props.mobileLayout}`,
            ]),
          },
          [
            te(e.$slots, "logo", {}, void 0, !0),
            te(e.$slots, "cart", {}, void 0, !0),
            te(e.$slots, "hamburger-menu", {}, void 0, !0),
            E(
              "div",
              {
                ref: "dropdownRef",
                class: Z([
                  "block-header-layout-mobile__dropdown",
                  [
                    `block-header-layout-mobile__dropdown--link-align-${t.props.mobileLinksAlignment}`,
                    {
                      "block-header-layout-mobile__dropdown--open":
                        t.props.isMobileMenuDropdownOpen,
                    },
                    {
                      "block-header-layout-mobile__dropdown--full-screen":
                        t.props.isMobileMenuDropdownFullScreen,
                    },
                  ],
                ]),
              },
              [
                te(e.$slots, "nav", {}, void 0, !0),
                te(e.$slots, "language-switcher", {}, void 0, !0),
                te(e.$slots, "social-icons", {}, void 0, !0),
                te(e.$slots, "button", {}, void 0, !0),
              ],
              2
            ),
          ],
          2
        ),
      ],
      64
    )
  );
}
const IC = oe(bC, [
    ["render", PC],
    ["__scopeId", "data-v-3b3f462d"],
  ]),
  EC = re({
    __name: "BlockHeaderButton",
    props: { elementId: {}, data: {} },
    setup(e, { expose: n }) {
      n();
      const a = e,
        { getButtonHref: t } = Ze(),
        {
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          content: m,
          fontSizeMobile: g,
          fontSizeDesktop: d,
          fontFamily: v,
          fontWeight: h,
          borderWidth: y,
          borderRadius: k,
          backgroundColor: T,
          fontColor: _,
          borderColor: b,
          backgroundColorHover: A,
          fontColorHover: D,
          borderColorHover: I,
          mobileElementWidth: R,
          mobileElementHeight: L,
        } = Vn(a, {
          href: u(() =>
            t({
              isFormButton: !1,
              linkedPageId: a.data.linkedPageId,
              linkType: a.data.linkType,
              href: a.data.href,
            })
          ),
        }),
        K = {
          props: a,
          getButtonHref: t,
          tagName: o,
          href: i,
          target: r,
          rel: l,
          type: s,
          content: m,
          fontSizeMobile: g,
          fontSizeDesktop: d,
          fontFamily: v,
          fontWeight: h,
          borderWidth: y,
          borderRadius: k,
          backgroundColor: T,
          fontColor: _,
          borderColor: b,
          backgroundColorHover: A,
          fontColorHover: D,
          borderColorHover: I,
          mobileElementWidth: R,
          mobileElementHeight: L,
          GridButton: Ya,
        };
      return (
        Object.defineProperty(K, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        K
      );
    },
  });
function DC(e, n, a, t, o, i) {
  return (
    c(),
    q(
      t.GridButton,
      {
        "data-element-ref": a.elementId,
        "tag-name": t.tagName,
        href: t.href,
        target: t.target,
        rel: t.rel,
        type: t.type,
        content: t.content,
        "font-size-mobile": t.fontSizeMobile,
        "font-size-desktop": t.fontSizeDesktop,
        "font-family": t.fontFamily,
        "font-weight": t.fontWeight,
        "border-width": t.borderWidth,
        "border-radius": t.borderRadius,
        "background-color": t.backgroundColor,
        "font-color": t.fontColor,
        "border-color": t.borderColor,
        "background-color-hover": t.backgroundColorHover,
        "font-color-hover": t.fontColorHover,
        "border-color-hover": t.borderColorHover,
        "mobile-element-width": t.mobileElementWidth,
        "mobile-element-height": t.mobileElementHeight,
        onClick: n[0] || (n[0] = Me(() => {}, ["prevent"])),
        onDrag: n[1] || (n[1] = Me(() => {}, ["prevent"])),
        onDragstart: n[2] || (n[2] = Me(() => {}, ["prevent"])),
      },
      null,
      8,
      [
        "data-element-ref",
        "tag-name",
        "href",
        "target",
        "rel",
        "type",
        "content",
        "font-size-mobile",
        "font-size-desktop",
        "font-family",
        "font-weight",
        "border-width",
        "border-radius",
        "background-color",
        "font-color",
        "border-color",
        "background-color-hover",
        "font-color-hover",
        "border-color-hover",
        "mobile-element-width",
        "mobile-element-height",
      ]
    )
  );
}
const MC = oe(EC, [["render", DC]]),
  OC = re({
    __name: "BlockHeader",
    props: {
      siteName: { default: "" },
      headerLayout: {},
      mHeaderLayout: {},
      languageSwitcherLanguages: {},
      items: {},
      logoHref: {},
      logoSrc: { default: "" },
      logoSvg: { default: "" },
      backgroundImageUrl: {},
      isOpen: { type: Boolean, default: !1 },
      isSticky: { type: Boolean },
      isTransparent: { type: Boolean },
      isLogoVisible: { type: Boolean, default: !1 },
      isCartVisible: { type: Boolean },
      isLanguageSwitcherVisible: { type: Boolean },
      currentLocale: { default: "" },
      backgroundColor: { default: "" },
      navLinkTextColor: { default: "" },
      navLinkTextColorHover: { default: "" },
      cartText: { default: "" },
      cartUrl: { default: "" },
      itemsInCart: { default: 0 },
      areDropdownsHidden: { type: Boolean },
      background: {},
      cartIconSize: {},
      logoMaxWidth: {},
      heightMobile: {},
      logoHeight: {},
      logoHeightMobile: {},
      logoMaxWidthMobile: {},
      logoObjectPosition: {},
      logoObjectPositionMobile: {},
      fontFamily: {},
      fontWeight: {},
      socialIconsLinks: { default: () => [] },
      socialIconsStyles: { default: () => ({}) },
      buttonElementId: {},
      buttonElementData: { default: () => ({}) },
      isMobileMenuDropdownFullScreen: { type: Boolean },
      mobileLinksAlignment: {},
    },
    emits: [
      "toggle-visibility",
      "cart-click",
      "logo-click",
      "button-click",
      "navigation-click",
      "social-icons-click",
      "language-switcher-click",
    ],
    setup(e, { expose: n, emit: a }) {
      n();
      const t = e,
        o = a,
        { hasUserScrolled: i } = fs(),
        r = M(null),
        l = u(() => t.socialIconsLinks.length > 0),
        s = u(() => !!Object.keys(t.buttonElementData).length),
        m = u(() => i.value && t.isSticky),
        g = u(() => (t.isSticky && !i.value) || !t.isSticky),
        d = u(() => t.isTransparent && g.value && !t.isOpen),
        v = u(() => ({
          "--text-font-family": t.fontFamily,
          "--text-font-weight": t.fontWeight,
          "--nav-link-text-color":
            t.navLinkTextColor || "var(--nav-link-color)",
          "--nav-link-text-color-hover":
            t.navLinkTextColorHover || "var(--nav-link-color-hover)",
          "--header-height-mobile": `${t.heightMobile}px`,
          ...(l.value && {
            "--space-between-icons": "16px",
            "--icon-color": t.socialIconsStyles["icon-color"],
            "--icon-size": t.socialIconsStyles["icon-size"],
            "--icon-color-hover": t.socialIconsStyles["icon-color-hover"],
          }),
        }));
      Ee(() => {
        ko(r, () => {
          t.isOpen && o("toggle-visibility");
        });
      });
      const h = {
        props: t,
        emit: o,
        hasUserScrolled: i,
        headerRef: r,
        isSocialIconsLinksVisible: l,
        isButtonVisible: s,
        isWithShadow: m,
        shouldForceTransparency: g,
        isCurrentlyTransparent: d,
        computedStyles: v,
        LanguageSwitcher: DT,
        ZyroHamburger: HT,
        BlockHeaderBackground: VT,
        BlockHeaderCart: KT,
        BlockHeaderItem: mC,
        BlockHeaderLogo: yC,
        BlockHeaderLayout: IC,
        get BLOCK_HEADER_CLASS() {
          return ms;
        },
        GridSocialIcons: Is,
        BlockHeaderButton: MC,
      };
      return (
        Object.defineProperty(h, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        h
      );
    },
  }),
  AC = { class: "block-header__nav-links" };
function BC(e, n, a, t, o, i) {
  const r = je("qa");
  return (
    c(),
    f(
      "header",
      {
        ref: "headerRef",
        class: Z({
          [t.BLOCK_HEADER_CLASS]: !0,
          "block-header--with-shadow": t.isWithShadow,
        }),
        style: Be(t.computedStyles),
      },
      [
        t.props.background
          ? (c(),
            q(
              t.BlockHeaderBackground,
              {
                key: 0,
                type: t.props.background.current,
                "image-url": t.props.backgroundImageUrl,
                color: t.props.background.color,
                "overlay-opacity": Number(
                  t.props.background["overlay-opacity"]
                ),
                "is-transparent": t.isCurrentlyTransparent,
              },
              null,
              8,
              [
                "type",
                "image-url",
                "color",
                "overlay-opacity",
                "is-transparent",
              ]
            ))
          : O("", !0),
        Oe(
          t.BlockHeaderLayout,
          {
            layout: t.props.headerLayout,
            "mobile-layout": t.props.mHeaderLayout,
            "is-logo-visible": t.props.isLogoVisible,
            "is-language-switcher-visible": t.props.isLanguageSwitcherVisible,
            "are-social-icon-links-visible": t.isSocialIconsLinksVisible,
            "is-cart-visible": t.props.isCartVisible,
            "is-button-visible": t.isButtonVisible,
            "is-mobile-menu-dropdown-open": t.props.isOpen,
            "is-mobile-menu-dropdown-full-screen":
              t.props.isMobileMenuDropdownFullScreen,
            "mobile-links-alignment": t.props.mobileLinksAlignment,
          },
          {
            "hamburger-menu": fe(() => [
              t.props.items.length || t.props.isLanguageSwitcherVisible
                ? ue(
                    (c(),
                    q(
                      t.ZyroHamburger,
                      {
                        key: 0,
                        class: "block-header__hamburger-menu",
                        "is-open": t.props.isOpen,
                        onClick:
                          n[0] ||
                          (n[0] = Me(
                            (l) => e.$emit("toggle-visibility"),
                            ["stop"]
                          )),
                      },
                      null,
                      8,
                      ["is-open"]
                    )),
                    [[r, "builder-siteheader-btn-hamburger"]]
                  )
                : O("", !0),
            ]),
            logo: fe(() => [
              t.props.isLogoVisible
                ? (c(),
                  q(
                    t.BlockHeaderLogo,
                    {
                      key: 0,
                      class: "block-header__logo",
                      "logo-src": t.props.logoSrc,
                      "logo-svg": t.props.logoSvg,
                      href: t.props.logoHref,
                      "site-name": t.props.siteName,
                      "max-width": t.props.logoMaxWidth,
                      "max-width-mobile": t.props.logoMaxWidthMobile,
                      height: t.props.logoHeight,
                      "height-mobile": t.props.logoHeightMobile,
                      "object-position": t.props.logoObjectPosition,
                      "object-position-mobile":
                        t.props.logoObjectPositionMobile,
                      onClick: n[1] || (n[1] = (l) => e.$emit("logo-click")),
                    },
                    null,
                    8,
                    [
                      "logo-src",
                      "logo-svg",
                      "href",
                      "site-name",
                      "max-width",
                      "max-width-mobile",
                      "height",
                      "height-mobile",
                      "object-position",
                      "object-position-mobile",
                    ]
                  ))
                : O("", !0),
            ]),
            nav: fe(() => [
              E(
                "nav",
                {
                  class: "block-header__nav",
                  onClick: n[2] || (n[2] = (l) => t.emit("navigation-click")),
                },
                [
                  ue(
                    (c(),
                    f("ul", AC, [
                      (c(!0),
                      f(
                        ge,
                        null,
                        we(
                          t.props.items,
                          (l) => (
                            c(),
                            q(
                              t.BlockHeaderItem,
                              {
                                key: l.id,
                                item: l,
                                "are-dropdowns-hidden":
                                  t.props.areDropdownsHidden,
                              },
                              null,
                              8,
                              ["item", "are-dropdowns-hidden"]
                            )
                          )
                        ),
                        128
                      )),
                    ])),
                    [[r, "builder-siteheader-emptyspace"]]
                  ),
                ]
              ),
            ]),
            "social-icons": fe(() => [
              t.props.socialIconsLinks.length
                ? (c(),
                  q(
                    t.GridSocialIcons,
                    {
                      key: 0,
                      class: "block-header__social-icons",
                      links: t.props.socialIconsLinks,
                    },
                    null,
                    8,
                    ["links"]
                  ))
                : O("", !0),
            ]),
            "language-switcher": fe(() => [
              t.props.isLanguageSwitcherVisible
                ? (c(),
                  q(
                    t.LanguageSwitcher,
                    {
                      key: 0,
                      class: Z([
                        "block-header__language-switcher",
                        { "mouse-disabled": t.props.areDropdownsHidden },
                      ]),
                      languages: t.props.languageSwitcherLanguages,
                      "current-locale": t.props.currentLocale,
                    },
                    null,
                    8,
                    ["class", "languages", "current-locale"]
                  ))
                : O("", !0),
            ]),
            cart: fe(() => [
              t.props.isCartVisible
                ? (c(),
                  q(
                    t.BlockHeaderCart,
                    {
                      key: 0,
                      class: "block-header__cart",
                      "cart-text": t.props.cartText,
                      "cart-url": t.props.cartUrl,
                      "items-in-cart": t.props.itemsInCart,
                      "cart-icon-size": t.props.cartIconSize,
                      onCartClick:
                        n[3] || (n[3] = (l) => e.$emit("cart-click")),
                    },
                    null,
                    8,
                    ["cart-text", "cart-url", "items-in-cart", "cart-icon-size"]
                  ))
                : O("", !0),
            ]),
            button: fe(() => [
              t.isButtonVisible && t.props.buttonElementId
                ? (c(),
                  q(
                    t.BlockHeaderButton,
                    {
                      key: 0,
                      class: "block-header__button",
                      "element-id": t.props.buttonElementId,
                      data: t.props.buttonElementData,
                    },
                    null,
                    8,
                    ["element-id", "data"]
                  ))
                : O("", !0),
            ]),
            _: 1,
          },
          8,
          [
            "layout",
            "mobile-layout",
            "is-logo-visible",
            "is-language-switcher-visible",
            "are-social-icon-links-visible",
            "is-cart-visible",
            "is-button-visible",
            "is-mobile-menu-dropdown-open",
            "is-mobile-menu-dropdown-full-screen",
            "mobile-links-alignment",
          ]
        ),
      ],
      6
    )
  );
}
const LC = oe(OC, [
    ["render", BC],
    ["__scopeId", "data-v-b847aeba"],
  ]),
  xC = (e) => {
    const a = e.current === "image" ? `url(${e[e.current]})` : e[e.current];
    return { [`--background-${e.current}`]: a };
  },
  RC = (e) => e && Object.values(e).some((n) => Wd.includes(n.type)),
  HC = (e) =>
    e && Object.values(e).some((n) => n?.type === "GridEcommerceButton"),
  xu = ({ blocks: e, elements: n }) => HC(n) || RC(e),
  NC = ({
    siteId: e,
    meta: n,
    blocks: a,
    nav: t,
    pages: o,
    elements: i,
    languageMetaTitle: r,
    languageSwitcherLanguages: l,
    currentLocale: s,
    currentPageId: m,
    shoppingCartItems: g,
    ecwidCartItemCount: d,
    isOpen: v,
    getPagePathFromId: h,
    ecwidPages: y,
    isEcommerceWebsite: k,
  }) => {
    const { defaultLocale: T } = n,
      {
        background: _,
        settings: b,
        fontWeight: A,
        fontFamily: D,
        navLinkTextColor: I,
        navLinkTextColorHover: R,
        mobile: L,
        desktop: K,
      } = a.header,
      { imageOrigin: W, imagePath: C } = _,
      {
        cartText: H,
        isCartVisible: F,
        isLanguageSwitcherHidden: Q,
        isSticky: B,
        logoPlacement: P,
        navigationPlacement: V,
        showLogo: U,
        styles: G,
        logoImageOrigin: S,
        logoImagePath: p,
        logoSvg: Y,
        headerLayout: j,
        mHeaderLayout: ee,
        isMobileMenuDropdownFullScreen: J,
        mobileLinksAlignment: N,
      } = b,
      w = Object.keys(y).length > 0,
      ae = xu({ blocks: a, elements: i }),
      ve = { ...Vt(G), ...xC(_) },
      se = () => {
        const vt = Number.parseInt(G["logo-width"], 10);
        return st(S, p, e, { width: vt * 2, quality: 95 });
      },
      be = () => st(W, C, e, { width: fa }),
      de = (vt) => {
        const {
          navItemId: ht,
          linkType: ua,
          linkedPageId: ca,
          isHidden: ba,
          rel: $,
          href: le,
          target: Te,
          name: xe,
          subItems: Ke = [],
        } = vt;
        return {
          navItemId: ht,
          hasDropdown: !!Ke.length,
          isCurrent: m === ca,
          subItems: Ke.map(de),
          target: Te,
          name: ua === Bi ? o[ca]?.name : xe,
          isHidden: ba,
          rel: $,
          href: ua === Bi ? h({ pageId: ca }) : le,
          locale: s,
        };
      },
      z = t.filter(({ isHidden: vt }) => !vt).map(de),
      ie = F && (w || ae),
      De = !!l.length && !Q && s !== Zt,
      me = () => (k || ae ? g.length : F ? d : 0),
      Pe = () => {
        if (!y || !Object.keys(y).length) return null;
        const [vt] = Object.keys(y);
        return `${h({ pageId: vt })}?store-page=cart`;
      },
      ze = r ?? n.metaTitle,
      Xe = a.header.components.find((vt) => i[vt].type === ds),
      ct = i[Xe]?.links || [],
      Bt = i[Xe]?.settings?.styles || {},
      bt = a.header.components.find((vt) => i[vt].type === cs),
      ya = i[bt];
    return {
      background: _,
      backgroundColor: _.color,
      backgroundImageUrl: be(),
      backgroundColorContrast: G.contrastBackgroundColor,
      cartText: H,
      cartIconSize: G.cartIconSize,
      cartUrl: Pe(),
      currentLocale: s,
      height: K.height,
      heightMobile: L.height,
      fontFamily: D,
      navLinkTextColor: I,
      navLinkTextColorHover: R,
      fontWeight: A,
      isTransparent: _.isTransparent,
      items: z,
      isCartVisible: ie,
      itemsInCart: me(),
      isSticky: B,
      isLanguageSwitcherVisible: De,
      isLogoVisible: U,
      isOpen: v,
      languageSwitcherLanguages: l,
      logoHeight: K.logoHeight,
      logoHeightMobile: L.logoHeight,
      logoHref: s !== T && s !== Zt ? `/${s}` : "/",
      logoMaxWidth: G["logo-width"],
      logoMaxWidthMobile: G["m-logo-width"],
      logoObjectPosition: G["logo-image-object-position"],
      logoObjectPositionMobile: G["m-logo-image-object-position"],
      logoPlacement: P,
      logoPlacementMobile: b["m-logoPlacement"] || P,
      logoSrc: se(),
      logoSvg: Y,
      style: ve,
      siteName: ze,
      socialIconsLinks: ct,
      socialIconsStyles: Bt,
      buttonElementId: bt,
      buttonElementData: ya,
      navigationPlacement: V,
      navigationPlacementMobile: b["m-navigationPlacement"] || V,
      headerLayout: j,
      mHeaderLayout: ee,
      isMobileMenuDropdownFullScreen: J,
      mobileLinksAlignment: N,
    };
  };
function $C(e) {
  if (Array.isArray(e)) {
    for (var n = 0, a = Array(e.length); n < e.length; n++) a[n] = e[n];
    return a;
  } else return Array.from(e);
}
var ki = !1;
if (typeof window < "u") {
  var es = {
    get passive() {
      ki = !0;
    },
  };
  window.addEventListener("testPassive", null, es),
    window.removeEventListener("testPassive", null, es);
}
var Ru =
    typeof window < "u" &&
    window.navigator &&
    window.navigator.platform &&
    (/iP(ad|hone|od)/.test(window.navigator.platform) ||
      (window.navigator.platform === "MacIntel" &&
        window.navigator.maxTouchPoints > 1)),
  tn = [],
  ho = !1,
  Si = -1,
  Bn = void 0,
  Ln = void 0,
  Hu = function (n) {
    return tn.some(function (a) {
      return !!(a.options.allowTouchMove && a.options.allowTouchMove(n));
    });
  },
  yo = function (n) {
    var a = n || window.event;
    return Hu(a.target) || a.touches.length > 1
      ? !0
      : (a.preventDefault && a.preventDefault(), !1);
  },
  VC = function (n) {
    if (Ln === void 0) {
      var a = !!n,
        t = window.innerWidth - document.documentElement.clientWidth;
      a &&
        t > 0 &&
        ((Ln = document.body.style.paddingRight),
        (document.body.style.paddingRight = t + "px"));
    }
    Bn === void 0 &&
      ((Bn = document.body.style.overflow),
      (document.body.style.overflow = "hidden"));
  },
  UC = function () {
    Ln !== void 0 && ((document.body.style.paddingRight = Ln), (Ln = void 0)),
      Bn !== void 0 && ((document.body.style.overflow = Bn), (Bn = void 0));
  },
  YC = function (n) {
    return n ? n.scrollHeight - n.scrollTop <= n.clientHeight : !1;
  },
  FC = function (n, a) {
    var t = n.targetTouches[0].clientY - Si;
    return Hu(n.target)
      ? !1
      : (a && a.scrollTop === 0 && t > 0) || (YC(a) && t < 0)
      ? yo(n)
      : (n.stopPropagation(), !0);
  },
  WC = function (n, a) {
    if (!n) {
      console.error(
        "disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices."
      );
      return;
    }
    if (
      !tn.some(function (o) {
        return o.targetElement === n;
      })
    ) {
      var t = { targetElement: n, options: {} };
      (tn = [].concat($C(tn), [t])),
        Ru
          ? ((n.ontouchstart = function (o) {
              o.targetTouches.length === 1 && (Si = o.targetTouches[0].clientY);
            }),
            (n.ontouchmove = function (o) {
              o.targetTouches.length === 1 && FC(o, n);
            }),
            ho ||
              (document.addEventListener(
                "touchmove",
                yo,
                ki ? { passive: !1 } : void 0
              ),
              (ho = !0)))
          : VC(a);
    }
  },
  qC = function () {
    Ru
      ? (tn.forEach(function (n) {
          (n.targetElement.ontouchstart = null),
            (n.targetElement.ontouchmove = null);
        }),
        ho &&
          (document.removeEventListener(
            "touchmove",
            yo,
            ki ? { passive: !1 } : void 0
          ),
          (ho = !1)),
        (Si = -1))
      : UC(),
      (tn = []);
  };
const GC = re({
    name: "Lightbox",
    setup() {
      const {
          lightboxImages: e,
          currentLightboxImageIndex: n,
          currentLightboxImage: a,
          closeLightbox: t,
          isLightboxOpen: o,
          isFirstImage: i,
          isLastImage: r,
          isImageGalleryMode: l,
          onLightboxClickOutside: s,
          handleLightboxNav: m,
          goToNextImage: g,
          goToPreviousImage: d,
        } = on(),
        v = M(null),
        { enableMoveEvents: h } = Ns({
          move: { drag: !0, swipe: !0 },
          onMoveLeft: g,
          onMoveRight: d,
        });
      return (
        Ee(() => {
          ko(v, (y) => {
            y.target.matches("[data-lightbox-button],[data-lightbox-nav]") ||
              t();
          }),
            h(),
            window.document.addEventListener("keydown", m);
        }),
        kt(() => {
          t(), h(!1), document.removeEventListener("keydown", m);
        }),
        {
          lightboxImages: e,
          currentLightboxImageIndex: n,
          currentLightboxImage: a,
          closeLightbox: t,
          isImageGalleryMode: l,
          isFirstImage: i,
          isLastImage: r,
          isLightboxOpen: o,
          onLightboxClickOutside: s,
          goToNextImage: g,
          goToPreviousImage: d,
          lightboxRef: v,
        }
      );
    },
    async mounted() {
      await this.$nextTick(), WC(this.$refs.lightboxRef);
    },
    beforeUnmount() {
      qC();
    },
  }),
  jC = { key: 0, class: "lightbox", role: "dialog", "aria-modal": "true" },
  zC = { class: "lightbox__container" },
  KC = E(
    "button",
    {
      class: "lightbox__button lightbox__button--nav lightbox__button--prev",
      "data-lightbox-button": "",
    },
    null,
    -1
  ),
  QC = [KC],
  ZC = ["src", "alt"],
  XC = E(
    "button",
    {
      "data-lightbox-button": "",
      class: "lightbox__button lightbox__button--nav lightbox__button--next",
    },
    null,
    -1
  ),
  JC = [XC];
function eP(e, n, a, t, o, i) {
  return (
    c(),
    q(
      At,
      { name: "fade", appear: "" },
      {
        default: fe(() => [
          e.isLightboxOpen
            ? (c(),
              f("div", jC, [
                E("button", {
                  class: "lightbox__button lightbox__button--close",
                  title: "close-ligthbox-button",
                  "data-lightbox-button": "",
                  onClick:
                    n[0] ||
                    (n[0] = (...r) => e.closeLightbox && e.closeLightbox(...r)),
                }),
                E("div", zC, [
                  E(
                    "div",
                    {
                      class: Z([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": e.isImageGalleryMode,
                          "lightbox__nav--single": !e.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        n[1] ||
                        (n[1] = (...r) =>
                          e.goToPreviousImage && e.goToPreviousImage(...r)),
                    },
                    QC,
                    2
                  ),
                  Oe(
                    At,
                    { name: "fade", mode: "out-in" },
                    {
                      default: fe(() => [
                        (c(),
                        f(
                          "img",
                          {
                            key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                            ref: "lightboxRef",
                            class: Z([
                              "lightbox__image",
                              {
                                "lightbox__image--multiple":
                                  e.isImageGalleryMode,
                                "lightbox__image--single":
                                  !e.isImageGalleryMode,
                              },
                            ]),
                            src: e.currentLightboxImage.src,
                            alt: e.currentLightboxImage.alt,
                          },
                          null,
                          10,
                          ZC
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                  E(
                    "div",
                    {
                      class: Z([
                        "lightbox__nav",
                        {
                          "lightbox__nav--multiple": e.isImageGalleryMode,
                          "lightbox__nav--single": !e.isImageGalleryMode,
                        },
                      ]),
                      "data-lightbox-nav": "",
                      onClick:
                        n[2] ||
                        (n[2] = (...r) =>
                          e.goToNextImage && e.goToNextImage(...r)),
                    },
                    JC,
                    2
                  ),
                ]),
              ]))
            : O("", !0),
        ]),
        _: 1,
      }
    )
  );
}
const tP = oe(GC, [["render", eP]]),
  aP = re({
    __name: "Page",
    props: {
      pageData: { type: Object, required: !0 },
      isInPreviewMode: { type: Boolean, default: !1 },
      isPreviewMobileView: { type: Boolean, default: !1 },
    },
    setup(e, { expose: n }) {
      n(), rt((Se) => ({ "20f9e822": De.value }));
      const a = e,
        {
          pages: t,
          blocks: o,
          elements: i,
          nav: r,
          meta: l,
          metaTitle: s,
          ecommerceShoppingCart: m,
          cookieBannerDisclaimer: g,
          cookieBannerAcceptText: d,
          cookieBannerDeclineText: v,
          currentLocale: h,
          ecwidPages: y,
          languageSwitcherLanguages: k,
          siteId: T,
          homePageId: _,
          styles: b,
          isNavHidden: A,
          currentPageId: D,
          currentPageData: I,
          getPagePathFromId: R,
          setPageData: L,
        } = Ze(),
        {
          isStoreTypeZyro: K,
          shoppingCartItems: W,
          setShoppingCartOpen: C,
        } = Ft(),
        { ecwidCartItemCount: H } = hs(),
        { isLightboxOpen: F } = on(),
        Q = Ec(),
        { shouldMountAnimationsInPreview: B } = rn(),
        P = M(!1),
        V = M(null),
        U = M(0),
        { width: G } = lp(V),
        S = u(() => a.pageData.siteBlocks || {}),
        p = u(() => I.value.type),
        Y = u(() => p.value === kc),
        j = u(() => Vt(b.value)),
        ee = u(() => !A.value && !Y.value),
        J = u(() => S.value[Lo] && !Y.value),
        N = u(() => D.value === _.value),
        w = u(() => t.value?.[_.value]?.name ?? ""),
        ae = u(() => o.value.header.settings.isSticky),
        ve = u(() => {
          if (!I.value?.meta?.password || a.isInPreviewMode) return !0;
          const { isPageOpen: Se } = Ws({
            pagePassword: I.value?.meta?.password ?? "",
            locale: h.value,
            pageId: D.value,
          });
          return Se.value;
        }),
        se = u(() => {
          if (!I.value || I.value.footerSlotIsHidden) return [];
          const Se = Object.keys(o.value).find(
            (Je) => o.value[Je].slot === "footer"
          );
          return Se ? [Se] : [];
        }),
        be = u(() =>
          I.value
            ? [...I.value.blocks.filter((Se) => Se !== Lo), ...se.value]
            : []
        ),
        de = u(() =>
          NC({
            siteId: T.value,
            meta: l.value,
            blocks: o.value,
            nav: r.value,
            pages: t.value,
            elements: i.value,
            languageMetaTitle: s.value,
            currentLocale: h.value,
            currentPageId: D.value,
            languageSwitcherLanguages: k.value,
            shoppingCartItems: W.value,
            ecwidCartItemCount: H.value,
            getPagePathFromId: ({ pageId: Se }) => R({ pageId: Se }),
            isOpen: P.value,
            ecwidPages: y.value,
          })
        ),
        z = u(() => de.value.height),
        ie = u(() => de.value.heightMobile),
        De = u(() => `${ie.value + U.value}px`),
        me = u(() => be.value.map((Se) => o.value[Se])),
        Pe = u(() => xu({ blocks: o.value, elements: i.value })),
        ze = u(() => l.value.defaultLocale ?? Zt),
        Xe = u(() => (K.value ? m.value?.translations ?? {} : {})),
        ct = u(() => (K.value ? m.value?.lang ?? "en" : null)),
        Bt = u(() =>
          Pe.value
            ? me.value.filter((Se) =>
                ["BlockEcommerceProduct", "BlockEcommerceProductList"].includes(
                  Se.type
                )
              )
            : []
        ),
        bt = u(() =>
          Pe.value
            ? Object.keys(i.value)
                ?.filter((Je) => i.value[Je].type === "GridEcommerceButton")
                .filter((Je) =>
                  me.value.some((ce) => ce.components?.includes(Je))
                )
                .map((Je) => i.value[Je])
            : []
        ),
        ya = u(() => be.value.find((Se) => !o.value[Se][Ba]?.isHidden)),
        vt = u(() => be.value.find((Se) => !o.value[Se][ta]?.isHidden)),
        ht = u(() => {
          const { isTransparent: Se } = o.value.header.background ?? {};
          if (Se && ee.value && ie.value) return `${ie.value}px`;
        }),
        ua = u(() => {
          const { isTransparent: Se } = o.value.header.background ?? {};
          if (Se && ee.value && z.value) return `${z.value}px`;
        }),
        ca = (Se) => ({
          ...(ya.value === Se && { "--header-height": ua.value }),
          ...(vt.value === Se && { "--header-height-mobile": ht.value }),
        }),
        ba = u(() => {
          const [Se] = I.value?.blocks ?? [];
          if (o.value?.[Se]?.background?.current === "image")
            return { type: "block-background", id: Se };
          if (o.value?.[Se]?.type === "BlockBlogList")
            return { type: "block-blog-list", id: Se };
          if (o.value?.[Se]?.type === "BlockEcommerceProduct")
            return { type: "block-ecommerce-product", id: Se };
          if (o.value?.[Se]?.type === "BlockEcommerceProductList")
            return { type: "block-ecommerce-product-list", id: Se };
          const ce = be.value
            .filter((Ce) => o.value[Ce]?.components?.length > 0)
            .flatMap((Ce) =>
              o.value[Ce].components.map((_e) => ({
                blockId: Ce,
                elementId: _e,
              }))
            )
            .filter(({ elementId: Ce }) => i.value[Ce]?.type === "GridImage")
            .map(({ blockId: Ce, elementId: _e }) => {
              const pt = i.value[_e],
                Mt = pt.mobile ?? pt.desktop,
                { width: Wa, height: Do } =
                  Mt ?? xc(o.value[Ce], pt.settings.styles.position);
              return { elementId: _e, imageRatio: Do / Wa };
            })[0];
          return ce ? { type: "grid-image", id: ce?.elementId } : {};
        }),
        $ = ({ hash: Se, isPreviewMode: Je }) => {
          Se || window.scrollTo({ top: 0, left: 0, behavior: "smooth" }),
            lr({ linkToSection: Se, isPreviewMode: Je });
        },
        le = () => {
          Pe.value && C(!0);
        },
        Te = (Se) => {
          const { target: Je, href: ce } = Se,
            _e =
              Je === "_blank" || Na() || a.isInPreviewMode ? "_blank" : "_self";
          window.open(ce, _e);
        },
        xe = async (Se) => {
          if (!Se.target) return;
          const Je = Se.target.closest("a");
          if (!Je) return;
          const {
            href: ce,
            pathname: Ce,
            origin: _e,
            hash: pt,
            target: Mt,
          } = Je;
          if (!ce) return;
          if ((Se.preventDefault(), window.location.origin !== _e)) {
            Te(Je);
            return;
          }
          const Do = window.location.pathname === Ce,
            Mo = Mt === "_blank",
            Oo = ce.replace(_e, ""),
            Nu = `${window.location.pathname}${window.location.search}${window.location.hash}`;
          Do && !Mo && $({ hash: pt, isPreviewMode: a.isInPreviewMode }),
            Mo && !a.isInPreviewMode && !Na()
              ? window.open(ce, Mt)
              : ((Mo && a.isInPreviewMode) || Nu !== Oo) &&
                (a.isInPreviewMode ? Q.push(Oo) : window.location.assign(Oo),
                pt && $({ hash: pt, isPreviewMode: a.isInPreviewMode }),
                (P.value = !1));
        };
      Le(
        () => a.pageData,
        (Se) => {
          L(Se);
        },
        { immediate: !0 }
      ),
        Le(
          () => a.pageData,
          async () => {
            a.isInPreviewMode && (B.value = !0);
          }
        ),
        Ee(() => {
          (U.value =
            document.querySelector(".block-sticky-bar")?.clientHeight ?? 0),
            $({ hash: window.location.hash, isPreviewMode: a.isInPreviewMode });
        });
      const Ke = {
        props: a,
        pages: t,
        blocks: o,
        elements: i,
        nav: r,
        meta: l,
        metaTitle: s,
        ecommerceShoppingCart: m,
        cookieBannerDisclaimer: g,
        cookieBannerAcceptText: d,
        cookieBannerDeclineText: v,
        currentLocale: h,
        ecwidPages: y,
        languageSwitcherLanguages: k,
        siteId: T,
        homePageId: _,
        styles: b,
        isNavHidden: A,
        currentPageId: D,
        currentPage: I,
        getPagePathFromId: R,
        setPageData: L,
        isStoreTypeZyro: K,
        shoppingCartItems: W,
        setShoppingCartOpen: C,
        ecwidCartItemCount: H,
        isLightboxOpen: F,
        router: Q,
        shouldMountAnimationsInPreview: B,
        isNavOpen: P,
        blockListRef: V,
        stickyBarHeight: U,
        screenWidth: G,
        siteBlocks: S,
        currentPageType: p,
        isCurrentPagePrivate: Y,
        pageCSSVars: j,
        isHeaderVisible: ee,
        isStickyBarVisible: J,
        isCurrentPageHomepage: N,
        homepageName: w,
        isHeaderSettingsSticky: ae,
        shouldRenderPage: ve,
        pageBlocksSlotFooter: se,
        currentPageBlocks: be,
        headerProps: de,
        headerHeight: z,
        headerHeightMobile: ie,
        topBarHeightMobilePx: De,
        currentPageBlockData: me,
        isLocaleWithEcommerceItems: Pe,
        defaultLocale: ze,
        ecommerceTranslations: Xe,
        language: ct,
        currentPageEcommerceBlocks: Bt,
        currentPageEcommerceComponents: bt,
        firstVisibleDesktopBlockId: ya,
        firstVisibleMobileBlockId: vt,
        visibleMobileHeaderHeight: ht,
        visibleDesktopHeaderHeight: ua,
        getHeaderHeightStyles: ca,
        lcp: ba,
        scrollToHash: $,
        handleCartClick: le,
        redirectToThirdPartyLink: Te,
        handleGlobalClick: xe,
        StickyTrigger: Bc,
        CookieBanner: ad,
        BlockUser: Wy,
        BlockStickyBarProviderUser: Qy,
        PasswordPage: vb,
        EcommerceShoppingCartProviderUser: e_,
        EcommerceModalRoot: gT,
        BlockHeader: LC,
        Lightbox: tP,
        get BLOCK_STICKY_BAR_ID() {
          return Lo;
        },
      };
      return (
        Object.defineProperty(Ke, "__isScriptSetup", {
          enumerable: !1,
          value: !0,
        }),
        Ke
      );
    },
  }),
  nP = { ref: "blockListRef", class: "blocks" };
function oP(e, n, a, t, o, i) {
  return (
    c(),
    f(
      ge,
      null,
      [
        t.shouldRenderPage
          ? (c(),
            f(
              "main",
              {
                key: 0,
                style: Be(t.pageCSSVars),
                class: "page",
                onClick: t.handleGlobalClick,
              },
              [
                t.isHeaderSettingsSticky
                  ? (c(), q(t.StickyTrigger, { key: 0 }))
                  : O("", !0),
                !t.isHeaderSettingsSticky && t.isStickyBarVisible
                  ? (c(),
                    q(
                      t.BlockStickyBarProviderUser,
                      {
                        key: 1,
                        "data-block-id": t.BLOCK_STICKY_BAR_ID,
                        data: t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                        components: t.elements,
                        lcp: t.lcp,
                      },
                      null,
                      8,
                      ["data-block-id", "data", "components", "lcp"]
                    ))
                  : O("", !0),
                E(
                  "div",
                  {
                    class: Z([
                      "top-blocks",
                      {
                        "top-blocks--sticky": t.headerProps.isSticky,
                        "top-blocks--preview-mode": t.props.isInPreviewMode,
                      },
                    ]),
                  },
                  [
                    t.isHeaderSettingsSticky && t.isStickyBarVisible
                      ? (c(),
                        q(
                          t.BlockStickyBarProviderUser,
                          {
                            key: 0,
                            "data-block-id": t.BLOCK_STICKY_BAR_ID,
                            data: t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                            components: t.elements,
                            lcp: t.lcp,
                          },
                          null,
                          8,
                          ["data-block-id", "data", "components", "lcp"]
                        ))
                      : O("", !0),
                    t.isHeaderVisible
                      ? (c(),
                        q(
                          t.BlockHeader,
                          Ge({ key: 1 }, t.headerProps, {
                            "is-in-preview-mode": t.props.isInPreviewMode,
                            "is-preview-mobile-view": a.isPreviewMobileView,
                            "block-sticky-bar":
                              t.siteBlocks[t.BLOCK_STICKY_BAR_ID],
                            onToggleVisibility:
                              n[0] ||
                              (n[0] = (r) => (t.isNavOpen = !t.isNavOpen)),
                            onCartClick: t.handleCartClick,
                          }),
                          null,
                          16,
                          [
                            "is-in-preview-mode",
                            "is-preview-mobile-view",
                            "block-sticky-bar",
                          ]
                        ))
                      : O("", !0),
                  ],
                  2
                ),
                E(
                  "div",
                  nP,
                  [
                    (c(!0),
                    f(
                      ge,
                      null,
                      we(
                        t.currentPageBlocks,
                        (r) => (
                          c(),
                          q(
                            t.BlockUser,
                            {
                              id: t.blocks[r].htmlId || r,
                              key: r,
                              data: t.blocks[r],
                              blocks: t.blocks,
                              lcp: t.lcp,
                              "page-id": t.currentPageId,
                              "ecommerce-translations": t.ecommerceTranslations,
                              "current-page-type": t.currentPageType,
                              components: t.elements,
                              "screen-width": t.screenWidth,
                              style: Be(t.getHeaderHeightStyles(r)),
                              "current-locale": t.currentLocale,
                              "is-cart-visible": t.headerProps.isCartVisible,
                              "is-in-preview-mode": t.props.isInPreviewMode,
                              "is-first-visible-desktop-block":
                                t.firstVisibleDesktopBlockId === r,
                              "is-first-visible-mobile-block":
                                t.firstVisibleMobileBlockId === r,
                            },
                            null,
                            8,
                            [
                              "id",
                              "data",
                              "blocks",
                              "lcp",
                              "page-id",
                              "ecommerce-translations",
                              "current-page-type",
                              "components",
                              "screen-width",
                              "style",
                              "current-locale",
                              "is-cart-visible",
                              "is-in-preview-mode",
                              "is-first-visible-desktop-block",
                              "is-first-visible-mobile-block",
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ],
                  512
                ),
                t.meta.isCookieBarEnabled
                  ? (c(),
                    q(
                      t.CookieBanner,
                      {
                        key: 2,
                        disclaimer: t.cookieBannerDisclaimer || "",
                        "accept-text": t.cookieBannerAcceptText,
                        "decline-text": t.cookieBannerDeclineText,
                        "site-meta": t.meta,
                      },
                      null,
                      8,
                      ["disclaimer", "accept-text", "decline-text", "site-meta"]
                    ))
                  : O("", !0),
                t.isLocaleWithEcommerceItems
                  ? (c(),
                    q(
                      t.EcommerceShoppingCartProviderUser,
                      {
                        key: 3,
                        "ecommerce-translations": t.ecommerceTranslations,
                        language: t.language,
                        "is-header-sticky": t.headerProps.isSticky,
                        "is-nav-hidden": !t.isHeaderVisible,
                        "current-page-ecommerce-blocks":
                          t.currentPageEcommerceBlocks,
                        "current-page-ecommerce-components":
                          t.currentPageEcommerceComponents,
                        "is-in-preview-mode": t.props.isInPreviewMode,
                      },
                      null,
                      8,
                      [
                        "ecommerce-translations",
                        "language",
                        "is-header-sticky",
                        "is-nav-hidden",
                        "current-page-ecommerce-blocks",
                        "current-page-ecommerce-components",
                        "is-in-preview-mode",
                      ]
                    ))
                  : O("", !0),
                Oe(
                  t.EcommerceModalRoot,
                  {
                    "ecommerce-translations": t.ecommerceTranslations,
                    language: t.language,
                    "current-locale": t.currentLocale,
                    "is-cart-visible": t.headerProps.isCartVisible,
                    "is-in-preview-mode": t.props.isInPreviewMode,
                  },
                  null,
                  8,
                  [
                    "ecommerce-translations",
                    "language",
                    "current-locale",
                    "is-cart-visible",
                    "is-in-preview-mode",
                  ]
                ),
              ],
              4
            ))
          : (c(),
            q(
              t.PasswordPage,
              {
                key: 1,
                "page-id": t.currentPageId,
                locale: t.currentLocale,
                "default-locale": t.defaultLocale,
                "in-preview-mode": a.isInPreviewMode,
                "current-page-data": t.currentPage,
                "homepage-name": t.homepageName,
                "is-current-page-homepage": t.isCurrentPageHomepage,
              },
              null,
              8,
              [
                "page-id",
                "locale",
                "default-locale",
                "in-preview-mode",
                "current-page-data",
                "homepage-name",
                "is-current-page-homepage",
              ]
            )),
        t.isLightboxOpen ? (c(), q(t.Lightbox, { key: 2 })) : O("", !0),
      ],
      64
    )
  );
}
const cP = oe(aP, [["render", oP]]);
export { cP as default };
