"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7409], {
    5526: function(e, t, s) {
        s.r(t),
        s.d(t, {
            default: function() {
                return i
            }
        });
        var l = s(7437)
          , a = s(2265);
        function i() {
            let[e,t] = (0,
            a.useState)(()=>JSON.parse(localStorage.getItem("toggleTheme")) || "light-theme");
            return (0,
            a.useEffect)(()=>(localStorage.setItem("toggleTheme", JSON.stringify(e)),
            document.body.classList.add(e),
            ()=>{
                document.body.classList.remove(e)
            }
            ), [e]),
            (0,
            l.jsx)(l.Fragment, {
                children: (0,
                l.jsxs)("div", {
                    className: "dark-light-toggle",
                    onClick: ()=>{
                        t(e=>"light-theme" === e ? "dark-theme" : "light-theme")
                    }
                    ,
                    children: [(0,
                    l.jsx)("span", {
                        className: "dark",
                        children: (0,
                        l.jsx)("i", {
                            className: "fi fi-rr-eclipse-alt"
                        })
                    }), (0,
                    l.jsx)("span", {
                        className: "light",
                        children: (0,
                        l.jsx)("i", {
                            className: "fi fi-rr-eclipse-alt"
                        })
                    })]
                })
            })
        }
    }
}]);
