var instafeedApp = (function instafeedLoad() {
    const appDomain = "instafeed.nfcube.com",
        cssVer = "4.5.0";
    var Instafeed = function() {
        function a(a) {
            var b, c;
            for (b in this.options = {
                    target: "insta-feed",
                    feedLoaded: !1,
                    account: "",
                    hash: "",
                    forceUpdate: !1,
                    picturesLoaded: 0,
                    slider: !0,
                    sliderPage: 1,
                    admin: window.location.hostname === appDomain,
                    title: "",
                    columns: 5
                }, a) c = a[b], this.options[b] = c
        }
        return a.prototype.run = function(a) {
            var b;
            if (b = this.options.target, b = document.getElementById(b), "" === this.options.accessToken && 4 === this.options.apiVersion) return b.innerHTML = "<div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div><div class='instafeed-container' style='width:25%;padding-top:25%;'><img class='js-lazy-image' style='width:98%;height:98%;' src='//instafeed.nfcube.com/assets/img/pixel.gif' /></div></div>", b.innerHTML += "<div><em><b>Connect your Instagram account to see your feed</b></em></div>", !1;
            b.innerHTML = "<img src='//instafeed.nfcube.com/assets/img/loader.gif' style='position:relative;height:11px;width:16px;' alt='loading bar' />";
            var c = this;
            const d = new XMLHttpRequest;
            return d.open("GET", a || this._buildUrl(), !0), d.onreadystatechange = function() {
                if (4 === d.readyState) {
                    var a = d.status;
                    0 === a || 200 >= a && 400 > a ? c.parse(JSON.parse(d.responseText)) : console.log("error")
                }
            }, d.send(), !0
        }, a.prototype.parse = function(a) {
            var b, c, d, e, f, g, h, k, l, m, n, o, p, q, r, s, t, u, v;
            if (u = this.options.target, u = document.getElementById(u), "object" != typeof a) throw new Error("Invalid JSON response");
            if (200 !== a.meta.code) throw u.innerHTML = "<em>" + a.meta.error_message + "</em>", new Error("Error from API: " + a.meta.error_message);
            if (0 === a.data.length) throw u.innerHTML = "<em>No images were returned from this Instagram account</em>", new Error("No images were returned from Instagram");
            if (null === u) throw e = "No element with id=\"" + this.options.target + "\" on page.", new Error(e);
            if (null !== this.options.success && "function" == typeof this.options.success && this.options.success.call(this, a), "undefined" != typeof document && null !== document) {
                o = a.data, f = document.createDocumentFragment(), g = "", m = "", p = "", v = document.createElement("div");
                var w = u.clientWidth / this.options.columns * window.devicePixelRatio,
                    x = "standard_resolution",
                    y = this.options.limit,
                    z = parseFloat(100 / this.options.columns).toFixed(6),
                    A = parseInt(100 - this.options.space);
                isMobileDevice() && validateCharge(this.options.charge) && (w = u.clientWidth / this.options.columnsMobile * window.devicePixelRatio, z = parseFloat(100 / this.options.columnsMobile).toFixed(6), y = this.options.limitMobile), 150 >= w ? x = "thumbnail" : 320 >= w && (x = "low_resolution");
                var B = "",
                    C = "";
                validateCharge(this.options.charge) && 0 < parseInt(this.options.likes) && 4 !== parseInt(this.options.apiVersion) && (B = "<div class='likes'><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='white'></path></svg></span>{{likes}}<!--<span style='width: 10px;padding-right: 5px;padding-left: 5px;'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'><path d='M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z' fill='white'></path></svg></span> {{comments}}--></div>", C = "<span><span style='padding-right: 5px;'><svg width='10' height='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z' fill='grey'></path></svg> {{likes}}</span> <!--<span>&#10078; {{comments}}</span>-->");
                var D = "<div style='width:" + A + "%;height:" + A + "%;' class='instafeed-overlay {{video}}'>" + B + "</div>",
                    E = "<div class='instafeed-container' style='width:" + z + "%;padding-top:" + z + "%;'><img class='js-lazy-image' style='width:" + A + "%;height:" + A + "%;' src='//" + appDomain + "/assets/img/pixel.gif' data-src='{{image}}' alt='{{captionAlt}}' />" + D + "</div>",
                    F = "";
                for (1 === parseInt(this.options.openIg) ? E = "<a href='{{link}}' target='_blank' rel='noopener'>" + E + "</a>" : 2 === parseInt(this.options.openIg) ? this.options.admin ? E = "<a href='" + this.options.shopOrigin + "/collections/all' target='_blank' rel='noopener'>" + E + "</a>" : E = "<a href='//" + window.location.hostname + "/collections/all'>" + E + "</a>" : 3 === parseInt(this.options.openIg) && (this.options.admin && (F = "<div class='products-tagging'><object><a href='#{{id}}-" + this.options.target + "' id='search' data-picture-id='{{fullId}}'><b><button class='primary'>Tag Product</button></b></a></object></div><em id='tagging-{{fullId}}'></em>"), E = "<a href='#{{id}}-" + this.options.target + "'>" + E + "</a><div class='instafeed-lightbox' id='{{id}}-" + this.options.target + "'><div class='lightbox-instagram' role='dialog' aria-labelledby='{{fullName}} Instagram post {{id}}' aria-modal='true'><div class='instafeed-post-image'>{{imageFullHtml}}</div><div class='description'><div class='instafeed-header'><div class='close-button'><a style='height:25px;width:25px;display:block!important;position:relative;' href='#_'></a></div><object><a href='https://www.instagram.com/{{username}}' target='_blank' rel='noopener'><img src='//" + appDomain + "/assets/img/instagram-logo.png' data-feed-id='" + this.options.target + "' class='profile-picture js-lazy-image' data-src='{{userPicture}}' alt='instagram profile picture' /></a></object><object class='name-section'><a class='fullname' href='https://www.instagram.com/{{username}}/' target='_blank' rel='noopener'><div class='fullname instafeed-text' data-feed-id='" + this.options.target + "'>{{fullName}}</div><div class='username'>@{{username}}</div></a></object></div><hr><div class='box-content'><div class='sub-header'><div class='post-engagement'>" + C + "</div><div class='arrows'><object><a href='#{{minusId}}-" + this.options.target + "'><img src='//" + appDomain + "/assets/img/pixel.gif' alt='previous image' /></a></object><object><a href='#{{plusId}}-" + this.options.target + "'><img src='//" + appDomain + "/assets/img/pixel.gif' alt='next image' /></a></object></div></div>" + F + " {{taggedProduct}}<div class='instafeed-caption'>{{caption}}</div><div class='post-date'>{{date}} \u2022 <object><a href='{{link}}' target='_blank' rel='noopener' class='follow'>View on Instagram</a></object></div></div></div></div></div>"), h = 0, r = o.length; h < r; h++) {
                    var G = "";
                    if (k = o[h], l = k.images[x], "object" != typeof l) throw e = "No image found for resolution: " + x + ".", new Error(e);
                    if (k.hasOwnProperty("tagged_products") && 0 < k.tagged_products.length && validateCharge(this.options.charge)) {
                        var H = this.options.admin,
                            I = this.options.shopOrigin,
                            J = this.options.target;
                        k.tagged_products.forEach(function(a) {
                            H ? (taggedProductUrl = "<object class='product-title'><a href='https://" + I + "/products/" + a.handle + "/' target='_blank' rel='noopener'>" + a.title + "</a><a href='#{{id}}-" + J + "' id='delete-product' data-picture-id='{{fullId}}' data-tagging-id='" + a.id + "'><button class='tagged-buy-button'>Delete</button></a></object>", productImageUrl = "<object><a href='https://" + I + "/products/" + a.handle + "/' target='_blank' rel='noopener'><img class='js-lazy-image' src='https://" + appDomain + "/assets/img/pixel.gif' data-src='" + a.image + "' alt='product image' /></a></object>") : !H && (taggedProductUrl = "<object class='product-title'><a href='//" + window.location.hostname + "/products/" + a.handle + "/'>" + a.title + "</a><a href='//" + window.location.hostname + "/products/" + a.handle + "/'><button class='tagged-buy-button'>Shop Now</button></a></object>", productImageUrl = "<object><a href='//" + window.location.hostname + "/products/" + a.handle + "/'><img class='js-lazy-image' src='https://" + appDomain + "/assets/img/pixel.gif' data-src='" + a.image + "' alt='product image' /></a></object>"), G += "<div class='tagged-products' id='{{fullId}}-" + a.id + "'>" + productImageUrl + " " + taggedProductUrl + "</div>"
                        })
                    }
                    var K = "";
                    "video" === k.type && k.hasOwnProperty("videos") ? (K = "instafeed-video", imageFullHtml = "<video controls autoplay playsinline muted id=\"video-{{id}}-instafeed\" preload=\"auto\" src=\"" + k.videos.standard_resolution.url + "\"</video>") : imageFullHtml = "<a href='#_'><img class='js-lazy-image' src='//instafeed.nfcube.com/assets/img/pixel.gif' data-src='" + k.images.standard_resolution.url + "' alt='{{captionAlt}}'></a>", n = l.url, this.options.picturesLoaded++;
                    var L = 1 === this.options.picturesLoaded ? y : this.options.picturesLoaded - 1,
                        M = this.options.picturesLoaded === y ? 1 : this.options.picturesLoaded + 1;
                    if (0 < this.options.slider) {
                        var N = isMobileDevice() && validateCharge(this.options.charge) ? this.options.columnsMobile : this.options.columns,
                            O = Math.ceil(this.options.picturesLoaded / N);
                        let a = O * N,
                            b = (O - 1) * N + 1;
                        var L = this.options.picturesLoaded === b ? a : this.options.picturesLoaded - 1,
                            M = this.options.picturesLoaded === a ? b : this.options.picturesLoaded + 1
                    }
                    if (m = this._makeTemplate(E, {
                            model: k,
                            id: this.options.picturesLoaded,
                            fullId: k.id,
                            minusId: L,
                            plusId: M,
                            link: k.link,
                            image: n,
                            video: K,
                            slider: this.options.slider ? "display:none;" : "",
                            username: k.user.username,
                            fullName: k.user.full_name,
                            userPicture: k.user.profile_picture,
                            imageFullHtml: imageFullHtml,
                            taggedProduct: G,
                            date: timeConverter(k.created_time),
                            caption: escapeHtml(this._getObjectProperty(k, "caption.text")),
                            captionAlt: escapeHtml(this._getObjectProperty(k, "caption.text").substring(0, 100)),
                            likes: shortenLargeNumber(k.likes.count, 1),
                            comments: shortenLargeNumber(k.comments.count, 1),
                            location: this._getObjectProperty(k, "location.name")
                        }), 0 < this.options.slider) {
                        let a = "";
                        1 === this.options.picturesLoaded && (a = "<div style='position:relative;'>"), m = a + "<span class=\"slide-page\" data-slide-page=\"" + O + "\" >" + m + "</span>"
                    }
                    if (g += m, this.options.picturesLoaded >= y) {
                        0 < this.options.slider && y > N && (g += "<div class=\"slider-arrow\" onclick=\"instafeedSlide(1)\" style=\"right:-20px;\">&#10095;</div>", g += "<div class=\"slider-arrow\" onclick=\"instafeedSlide(-1)\" style=\"left:-20px;\">&#10094;</div>", g += "</div>");
                        break
                    }
                }
                for (v.innerHTML = g, d = [], c = 0, b = v.childNodes.length; c < b;) d.push(v.childNodes[c]), c += 1;
                for (q = 0, s = d.length; q < s; q++) t = d[q], f.appendChild(t);
                if (u.innerHTML = "", 0 < this.options.title.length) {
                    var P = document.createElement("h2");
                    P.innerHTML = this.options.title, u.insertBefore(P, u.firstChild)
                }
                u.appendChild(f)
            }
            return lazyLoading(), 0 < this.options.slider && instafeedSlide(0), !0
        }, a.prototype._buildUrl = function() {
            var a, b;
            if (b = this.options.forceUpdate ? 1 : 0, 2 === this.options.apiVersion) {
                var c = this.options.limitMobile > this.options.limit ? this.options.limitMobile : this.options.limit;
                a = "https://instafeed.nfcube.com/api/v" + this.options.apiVersion + "?charge=" + this.options.charge + "&fu=" + b + "&limit=" + c + "&filter=" + parseInt(this.options.filter.length) + "&account=" + this.options.account + "&tags=" + this.options.filter + "&public=" + this.options.public + "&hash=" + this.options.hash + "&callback=cache.parse"
            } else if (4 === this.options.apiVersion) {
                var c = this.options.limitMobile > this.options.limit ? this.options.limitMobile : this.options.limit;
                a = "https://instafeed.nfcube.com/feed/v4?charge=" + this.options.charge + "&fu=" + b + "&limit=" + c + "&account=" + this.options.shopOrigin + "&fid=" + this.options.feedId + "&hash=" + this.options.hash + "&callback=cache.parse"
            } else if (5 === this.options.apiVersion) {
                var c = this.options.limitMobile > this.options.limit ? this.options.limitMobile : this.options.limit;
                a = "https://instafeed.nfcube.com/feed/v5?charge=" + this.options.charge + "&fu=" + b + "&limit=" + c + "&account=" + this.options.shopOrigin + "&fid=" + this.options.feedId + "&hash=" + this.options.hash + "&callback=cache.parse"
            }
            return a
        }, a.prototype._makeTemplate = function(a, b) {
            var c, d, e, f, g;
            for (d = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, c = a; d.test(c);) f = c.match(d)[1], g = null === (e = this._getObjectProperty(b, f)) ? "" : e, c = c.replace(d, function() {
                return "" + g
            });
            return c
        }, a.prototype._getObjectProperty = function(a, b) {
            var c, d;
            for (b = b.replace(/\[(\w+)\]/g, ".$1"), d = b.split("."); d.length;)
                if (c = d.shift(), null !== a && c in a) a = a[c];
                else return null;
            return a
        }, a
    }();

    function validateCharge(a) {
        return !!(0 < parseInt(a))
    }

    function getInstagramData(a, b) {
        var c = new XMLHttpRequest;
        c.open("GET", "https://www.instagram.com/" + a + "/?__a=1");
        try {
            c.send()
        } catch (a) {
            return !1
        }
        c.onreadystatechange = function() {
            if (4 == this.readyState && 200 == this.status) {
                try {
                    var a = JSON.parse(this.responseText)
                } catch (a) {
                    return !1
                }
                var c = document.body.querySelectorAll(".profile-picture[data-feed-id=\"" + b + "\"]"),
                    d = document.body.querySelectorAll(".fullname instafeed-text[data-feed-id=\"" + b + "\"]");
                for (let b of c) b.src = a.graphql.user.profile_pic_url_hd;
                for (let b of d) b.innerHTML = a.graphql.user.full_name
            }
        }
    }

    function escapeHtml(a) {
        return a && (a = a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")), a
    }

    function shortenLargeNumber(a, b) {
        for (var c, d = ["k", "M", "G", "T", "P", "E", "Z", "Y"], e = d.length - 1; 0 <= e; e--)
            if (c = Math.pow(1e3, e + 1), a <= -c || a >= c) return +(a / c).toFixed(b) + d[e];
        return a
    }

    function timeConverter(b) {
        var c = new Date(1e3 * b),
            a = c.toLocaleDateString(navigator.language, {
                month: "long",
                day: "numeric"
            });
        return a.toUpperCase()
    }

    function isMobileDevice() {
        return window.matchMedia("only screen and (max-width: 760px)").matches
    }

    function printableChars(a) {
        return a.replace(/[^\x20-\x7E]+/g, "")
    }

    function lazyLoading() {
        function a(a) {
            return new Promise((b, c) => {
                const d = new Image;
                d.src = a, d.onload = b, d.onerror = c
            })
        }

        function b(b) {
            const c = b.dataset.src;
            return c.includes("https://") ? a(c).then(() => {
                d(b, c)
            }).catch(a => {
                console.log(a)
            }) : void 0
        }

        function c(a) {
            0 === g && f.disconnect();
            for (let c, d = 0; d < a.length; d++) c = a[d], 0 < c.intersectionRatio && (g--, f.unobserve(c.target), b(c.target))
        }

        function d(a, b) {
            a.classList.add("js-lazy-image--handled"), a.src = b
        }
        const e = document.querySelectorAll(".js-lazy-image");
        let f, g = e.length;
        if (!("IntersectionObserver" in window))(function(a) {
            for (let c, d = 0; d < a.length; d++) c = a[d], b(c)
        })(e);
        else {
            f = new IntersectionObserver(c, {
                rootMargin: "100px 0px",
                threshold: .01
            });
            for (let a, b = 0; b < e.length; b++)(a = e[b], !a.classList.contains("js-lazy-image--handled")) && f.observe(a)
        }
    }(function(a, b) {
        return "function" == typeof define && define.amd ? define([], b) : "object" == typeof module && module.exports ? (module.exports = b(), module.exports) : (a.Instafeed = b(), a.Instafeed)
    })(this, function() {
        return Instafeed
    }),
    function() {
        if (null !== document.currentScript && !document.currentScript.src.includes(appDomain)) return !1;
        var a = document.createElement("link");
        a.href = "https://instafeed.nfcube.com/cdn/instafeed-" + cssVer + ".css", a.type = "text/css", a.rel = "stylesheet", a.media = "screen,print", document.getElementsByTagName("head")[0].appendChild(a)
    }(),
    function() {
        function a() {
            var a = location.hash.split("!").pop().replace("/", "");
            if (b = document.getElementById("video-" + c.substring(c.lastIndexOf("#") + 1, c.lastIndexOf("-insta-feed")) + "-instafeed"), b && (b.pause(), b.onplay = function() {
                    "#_" === a && b.pause()
                }), c = a, "#_" === a || 0 === a.length) document.body.style.overflow = "visible", e && (!0 === d && (e.style.webkitTransform = "translate3d(0, 0, 0)"), e.style.overflow = "visible");
            else if (a.includes("-feed")) {
                if (e) {
                    const a = getComputedStyle(e);
                    "none" !== a.webkitTransform && (e.style.webkitTransform = "initial", d = !0), e.style.overflow = "hidden"
                }
                document.querySelectorAll("#" + CSS.escape(a.substr(1)) + " .close-button");
                document.body.style.overflow = "hidden"
            }
        }
        var b, c = "",
            d = !1,
            e = document.getElementById("PageContainer");
        window.instafeedSlidePage = 1, window.instafeedSlide = function(a = 0) {
            instafeedSlidePage = parseInt(instafeedSlidePage) + parseInt(a);
            let b = document.body.querySelectorAll("#insta-feed");
            b[0].style.padding = "0 20px 0 20px";
            var c = document.body.querySelectorAll(".slide-page"),
                d = 0;
            for (let b = 0; b < c.length; b++) {
                var e = c[b].getAttribute("data-slide-page");
                d < e && (d = e)
            }
            0 >= instafeedSlidePage && (instafeedSlidePage = d), instafeedSlidePage > d && (instafeedSlidePage = 1);
            let f = document.body.querySelectorAll("[data-slide-page=\"" + instafeedSlidePage + "\"]");
            c.forEach(a => {
                a.style.display = "none"
            }), f.forEach(a => {
                a.style.display = "initial"
            })
        }, window.addEventListener("hashchange", a, !1)
    }();
    if (document.getElementById('insta-feed') !== null) {
        var feed = new Instafeed({
            account: '',
            hash: '2c1f5b8e5aa3a907b44fd25a19018a3c',
            apiVersion: 4,
            shopOrigin: 'kimaye-store.myshopify.com',
            title: '',
            openIg: 3,
            space: 5,
            likes: 1,
            slider: 0,
            filter: '',
            public: 0,
            columns: 4,
            feedId: 0,
            columnsMobile: 4,
            limit: 4,
            limitMobile: 4,
            charge: '0'
        });
        feed.run();
    }
    return instafeedLoad;
})();
document.addEventListener('shopify:section:load', () => {
    instafeedApp()
});