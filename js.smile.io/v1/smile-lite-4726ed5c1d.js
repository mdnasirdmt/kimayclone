(async () => {
    let e = (() => {
            let e = navigator && navigator.userAgent;
            if ("string" != typeof e) return !1;
            let t = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series[46]0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e);
            return !t && navigator && navigator.maxTouchPoints > 1 && -1 !== e.indexOf("Macintosh") && -1 !== e.indexOf("Safari") && (t = !0), t
        })(),
        t = () => e ? "mobile" : "desktop",
        i = {
            square: 0,
            shaved: 5,
            rounded: 10,
            circular: 30
        },
        o = () => {
            ["smile-shopify-877f50a35520dc0ddfed.modern.js", "vendor-be430a0268d0f387524b.modern.js"].map((e => window.dispatchEvent(new CustomEvent("smile:load-async-script", {
                detail: e
            }))))
        },
        [n, a] = await Promise.all([window.__smile_ui_init_data__, window.__smile_ui_customer_data__]);
    if ((e => {
            if (!e || e.account.load_js_sdk_at_launch) return !0;
            let t = document.getElementsByClassName("sweettooth-points-balance").length > 0,
                i = e && e.nudges && e.nudges.length > 0,
                o = new URLSearchParams(window.location.search),
                n = o.get("smile_deep_link") || o.get("st_intent") || document.querySelector("[data-smile-deep-link]") || window.location.hash.includes("smile-"),
                a = "earn_and_redeem" === e.account.candidate_participation && o.get("smile_status");
            return n || t || i || a
        })(n) || !((e, i) => (!i || "disabled" !== i.customer.state) && (e.launcher.is_visible && e.launcher.visibility_setting.includes(t()) && e.launcher.hidden_url_paths.every((e => -1 === window.location.pathname.indexOf(e)))))(n, a)) return o();
    window.addEventListener("hashchange", (e => {
        new URL(e.newURL).hash.startsWith("#smile-") && o()
    })), (n => {
        let {
            display_setting: a,
            launcher: r
        } = n, l = `smile_ui_${t()}_`, s = `border:0;outline:0;position:fixed;height:60px;z-index:0;overflow:hidden;box-shadow:0 0 25px 0 rgb(0 0 0 / 5%);${a[`${l}position`]}:${a[`${l}side_margin`]};bottom:${a[`${l}bottom_margin`]};border-radius:${i[r.border_radius_style]}px !important;`, d = document.createRange().createContextualFragment('<div id="smile-ui-lite-container"style="position:fixed;width:0;height:0;bottom:0;right:0;z-index:2147483647!important"aria-live="polite"><style>@keyframes smileLiteFadeInOut{from{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}#smile-ui-lite-launcher-frame-container{animation:smileLiteFadeInOut .2s ease-in-out!important;animation-delay:150ms!important;animation-fill-mode:forwards!important;transition:all .2s ease-in-out!important;opacity:0}#smile-ui-lite-launcher-frame-container.smile-improved-mobile-launcher{height:44px!important}</style><div id="smile-ui-lite-launcher-frame-container"><iframe title="Smile.io Rewards Program Launcher"id="smile-lite-launcher-frame"style="position:absolute;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;border:0;outline:0;top:0;right:0;bottom:0;left:0"></iframe></div></div>');
        d.getElementById("smile-ui-lite-launcher-frame-container").style.cssText = s, document.body.appendChild(d), (t => {
            let {
                launcher: n,
                account: a
            } = t, r = e && "text" === n.mobile_layout || !e && n.layout.includes("text"), l = e && "text" !== n.mobile_layout || !e && ("image" === n.layout || "text_and_icon" === n.layout), s = e && a.uses_improved_mobile_launcher ? "smile-improved-mobile-launcher" : "", d = e && a.uses_improved_mobile_launcher ? n.mobile_text : n.text, m = "<!doctypehtml><html lang=\"en-US\"><head><meta charset=\"utf-8\"><meta content=\"width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no\"name=\"viewport\"><style>@font-face{font-family:'Proxima Nova';font-style:normal;font-weight:400;font-display:block;src:local('Proxima Nova'),url('https://js.smile.io/v1/assets/fonts/proximanova-regular.woff2') format('woff2'),url('https://js.smile.io/v1/assets/fonts/proximanova-regular.woff') format('woff');unicode-range:U+000-5FF}*,::after,::before{box-sizing:border-box}:root{-moz-tab-size:4;tab-size:4}body,html{height:100%}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0;font-family:'Proxima Nova',arial,sans-serif;font-size:14px}button::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring{outline:1px dotted ButtonText}button{font-family:inherit;margin:0;text-transform:none;-webkit-appearance:button;height:60px;max-height:60px;line-height:30px;min-width:60px;display:inline-flex;align-items:center;position:fixed;bottom:0;text-align:center;font-size:16px;padding:15px;border:none;outline:0;user-select:none;cursor:pointer;white-space:nowrap}button.smile-improved-mobile-launcher{height:44px;min-width:44px;padding:12px}button img{width:30px;height:30px}button.smile-improved-mobile-launcher img{width:20px;height:20px}button img+span{margin-left:15px}button:focus{position:relative;box-shadow:inset 0 0 0 4px Highlight}.close-icon{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M11.06 10l3.713 3.712a.75.75 0 0 1-1.06 1.061L10 11.061l-3.712 3.712a.75.75 0 0 1-1.061-1.06L8.939 10 5.227 6.288a.75.75 0 1 1 1.06-1.061L10 8.939l3.712-3.712a.75.75 0 0 1 1.061 1.06L11.061 10z'/%3E%3C/svg%3E\");height:26px;width:26px;padding:6px;margin:17px;position:absolute;top:0;right:0;left:0;bottom:0;background-size:100%;background-repeat:no-repeat;background-position:50%}</style><title></title></head><body></body></html>".replace("</body>", `<button aria-label="Open Smile.io Rewards Program" class="${s}" style="background-color:${n.color};color:${n.text_color};border-radius:${i[n.border_radius_style]}px;">\n        ${(l?`<img src="${n.icon_url}?color=${encodeURIComponent(n.text_color)}" role="presentation">`:"")+(r?`<span>${d}</span>`:"")}\n      </button></body>`), c = t.display_setting && t.display_setting.customer_locale;
            c && m.replace('lang="en-US"', `lang="${c}"`);
            let u = document.getElementById("smile-lite-launcher-frame");
            u.addEventListener("load", (() => {
                let e = u.contentDocument.querySelector("button"),
                    t = document.getElementById("smile-ui-lite-launcher-frame-container");
                t.style.width = `${e.offsetWidth}px`, s && t.classList.add(s), e.addEventListener("click", o, {
                    once: !0
                })
            })), u.srcdoc = m
        })(n), document.addEventListener("smile-ui-loaded", (() => {
            new MutationObserver((function(e, t) {
                if (!e.find((e => e.target && "smile-ui-container" === e.target.id))) return;
                window.SmileUI && window.SmileUI.openPanel({
                    data: {
                        trigger: "launcher"
                    }
                });
                let i = document.getElementById("smile-ui-lite-container");
                i.parentNode.removeChild(i), t.disconnect()
            })).observe(document.body, {
                attributes: !1,
                childList: !0,
                subtree: !0
            })
        }))
    })(n), (() => {
        let e = document.createElement("link").relList,
            t = !!(e && e.supports && e.supports("prefetch"));

        function i(e) {
            let i = document.createElement("link");
            i.href = "https://js.smile.io/v1/" + e, i.setAttribute("crossorigin", ""), t ? i.rel = "prefetch" : (i.rel = "preload", i.as = "script"), document.querySelector("head").appendChild(i)
        }
        i("smile-shopify-877f50a35520dc0ddfed.modern.js"), i("vendor-be430a0268d0f387524b.modern.js")
    })()
})();