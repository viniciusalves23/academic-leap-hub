(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4109], {
    7318: function(a, e, n) {
        Promise.resolve().then(n.bind(n, 6621)),
        Promise.resolve().then(n.bind(n, 3328)),
        Promise.resolve().then(n.bind(n, 6865))
    },
    6621: function(a, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            default: function() {
                return c
            }
        });
        var s = n(7437);
        n(500);
        var r = n(105);
        function c() {
            return (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsx)(r.$Q, {
                    data: {
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                        datasets: [{
                            label: "a",
                            data: [2, 12, 17, 14, 9, 5, 11, 18, 10, 13, 16, 20, 6, 7, 3, 15, 8, 19],
                            backgroundColor: "rgba(217, 70, 239, 1)"
                        }, {
                            label: "b",
                            data: [7, 12, 19, 13, 17, 8, 5, 11, 6, 10, 18, 15, 14, 16, 3, 2, 20, 4],
                            backgroundColor: "rgba(168, 85, 247, 1)"
                        }, {
                            label: "c",
                            data: [11, 18, 5, 17, 19, 7, 9, 14, 20, 15, 12, 6, 16, 13, 4, 8, 3, 10],
                            backgroundColor: "rgba(139, 92, 246, 1)"
                        }, {
                            label: "c",
                            data: [8, 4, 20, 10, 12, 7, 18, 3, 17, 2, 19, 13, 15, 5, 14, 6, 11, 9],
                            backgroundColor: "rgba(99, 102, 241, 1)"
                        }, {
                            label: "c",
                            data: [20, 5, 14, 10, 16, 12, 2, 17, 8, 7, 4, 11, 15, 9, 18, 19, 13, 6],
                            backgroundColor: "rgba(59, 130, 246, 1)"
                        }]
                    },
                    height: 300,
                    options: {
                        responsive: !0,
                        maintainAspectRatio: !1,
                        plugins: {
                            legend: {
                                display: !1
                            }
                        },
                        scales: {
                            x: {
                                stacked: !0,
                                grid: {
                                    display: !0,
                                    drawBorder: !1,
                                    color: "rgba(0,0,0,0.05)"
                                }
                            },
                            y: {
                                stacked: !0,
                                grid: {
                                    display: !1,
                                    drawBorder: !1
                                }
                            }
                        }
                    },
                    id: "chartjsWeeklyExpenses"
                })
            })
        }
    },
    3328: function(a, e, n) {
        "use strict";
        n.r(e),
        n.d(e, {
            default: function() {
                return i
            }
        });
        var s = n(7437)
          , r = n(1396)
          , c = n.n(r)
          , t = n(4033);
        function i() {
            let a = (0,
            t.usePathname)();
            return (0,
            s.jsx)(s.Fragment, {
                children: (0,
                s.jsxs)("div", {
                    className: "settings-menu",
                    children: [(0,
                    s.jsx)(c(), {
                        className: "/analytics" == a ? "active" : "",
                        href: "/analytics",
                        children: "Analytics"
                    }), (0,
                    s.jsx)(c(), {
                        className: "/analytics-expenses" == a ? "active" : "",
                        href: "/analytics-expenses",
                        children: "Expenses"
                    }), (0,
                    s.jsx)(c(), {
                        className: "/analytics-income" == a ? "active" : "",
                        href: "/analytics-income",
                        children: "Income"
                    }), (0,
                    s.jsx)(c(), {
                        className: "/analytics-income-vs-expenses" == a ? "active" : "",
                        href: "/analytics-income-vs-expenses",
                        children: "Income vs Expenses"
                    }), (0,
                    s.jsx)(c(), {
                        className: "/analytics-balance" == a ? "active" : "",
                        href: "/analytics-balance",
                        children: "Balance"
                    }), (0,
                    s.jsx)(c(), {
                        className: "/analytics-transaction-history" == a ? "active" : "",
                        href: "/analytics-transaction-history",
                        children: "Transaction History"
                    })]
                })
            })
        }
    }
}, function(a) {
    a.O(0, [7674, 5250, 1288, 2811, 6865, 2971, 4938, 1744], function() {
        return a(a.s = 7318)
    }),
    _N_E = a.O()
}
]);
