(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Core-Design/Website 2.0/src/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Application-wide constants
 * Centralize configuration values here for easy updates
 */ __turbopack_context__.s([
    "APP_NAME",
    ()=>APP_NAME,
    "APP_URL",
    ()=>APP_URL,
    "FOOTER_LINKS",
    ()=>FOOTER_LINKS,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const APP_NAME = ("TURBOPACK compile-time value", "Core Systems") || "My Website";
const APP_URL = ("TURBOPACK compile-time value", "http://localhost:3000") || "http://localhost:3000";
const NAV_LINKS = [
    {
        href: "#services",
        label: "Services"
    },
    {
        href: "#process",
        label: "Process"
    },
    {
        href: "#faq",
        label: "FAQs"
    }
];
const FOOTER_LINKS = [
    {
        href: "/privacy",
        label: "Privacy"
    },
    {
        href: "/terms",
        label: "Terms"
    },
    {
        href: "/contact",
        label: "Contact"
    }
];
const SOCIAL_LINKS = {
    twitter: "#",
    github: "#",
    linkedin: "https://www.linkedin.com/in/nataliia-ivanova-profile/"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/button.tsx",
        lineNumber: 45,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Logo({ className = "", variant = "default" }) {
    _s();
    const isFooter = variant === "footer";
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const handleLogoClick = (e)=>{
        if (isFooter) {
            // Footer logo: scroll to top
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            // Header logo: navigate to homepage and refresh if already there
            if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                router.refresh();
            } else {
                // Navigate to homepage
                e.preventDefault();
                router.push("/");
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        onClick: handleLogoClick,
        className: `flex items-center gap-2 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                !isFooter && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "28",
                        height: "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            color: 'rgb(48, 58, 74)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "10",
                                r: "3",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "8",
                                cy: "18",
                                r: "3",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "20",
                                cy: "18",
                                r: "3",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "14",
                                y1: "13",
                                x2: "10.5",
                                y2: "16.5",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "14",
                                y1: "13",
                                x2: "17.5",
                                y2: "16.5",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "14",
                                cy: "10",
                                r: "1.5",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-bold tracking-tight ${isFooter ? "text-xl text-white" : "text-lg"}`,
                    style: !isFooter ? {
                        color: 'rgb(48, 58, 74)'
                    } : undefined,
                    children: "Core Systems"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(Logo, "gA9e4WsoP6a20xDgQgrFkfMP8lc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Logo;
var _c;
__turbopack_context__.k.register(_c, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsMenuOpen(!isMenuOpen);
    const handleNavClick = (e, href)=>{
        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                setIsMenuOpen(false);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-4 left-0 right-0 z-50 w-full px-4 md:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex h-14 items-center justify-between rounded-xl border border-white/20 bg-white/80 backdrop-blur-md backdrop-saturate-150 px-6 shadow-lg shadow-black/5 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center space-x-1 md:flex",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    onClick: (e)=>handleNavClick(e, link.href),
                                    className: "group relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white/50 hover:text-gray-900 cursor-pointer",
                                    children: link.label
                                }, link.href, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-3 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/nataliia-ivanova-profile/",
                                    target: "_self",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-gray-900",
                                    "aria-label": "LinkedIn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    className: "h-9 rounded-lg bg-terminal-dark-teal-alt px-5 text-sm font-semibold text-terminal-lime shadow-sm transition-all hover:bg-terminal-dark-teal hover:shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        onClick: (e)=>handleNavClick(e, "#contact"),
                                        children: "CONTACT"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/50 md:hidden",
                            onClick: toggleMenu,
                            "aria-label": "Toggle menu",
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                lineNumber: 88,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                lineNumber: 88,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto mt-2 max-w-7xl rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md backdrop-saturate-150 shadow-lg transition-all duration-300 md:hidden", isMenuOpen ? "block" : "hidden"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col space-y-1 p-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: (e)=>handleNavClick(e, link.href),
                                className: "rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-white/50 hover:text-gray-900 cursor-pointer",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center gap-3 border-t border-gray-200/50 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/nataliia-ivanova-profile/",
                                    target: "_self",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-gray-900",
                                    onClick: ()=>setIsMenuOpen(false),
                                    "aria-label": "LinkedIn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                        className: "h-5 w-5"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    className: "flex-1 h-10 rounded-lg bg-terminal-dark-teal-alt text-sm font-semibold text-terminal-lime shadow-sm transition-all hover:bg-terminal-dark-teal hover:shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        onClick: (e)=>{
                                            handleNavClick(e, "#contact");
                                            setIsMenuOpen(false);
                                        },
                                        children: "CONTACT"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(Header, "vK10R+uCyHfZ4DZVnxbYkMWJB8g=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/reveal-init.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevealInit",
    ()=>RevealInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function RevealInit() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RevealInit.useEffect": ()=>{
            // Check if element is already in viewport
            const isElementInViewport = {
                "RevealInit.useEffect.isElementInViewport": (el)=>{
                    const rect = el.getBoundingClientRect();
                    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
                }
            }["RevealInit.useEffect.isElementInViewport"];
            // Check if element is partially visible
            const isElementPartiallyVisible = {
                "RevealInit.useEffect.isElementPartiallyVisible": (el)=>{
                    const rect = el.getBoundingClientRect();
                    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                    const windowWidth = window.innerWidth || document.documentElement.clientWidth;
                    return rect.top < windowHeight && rect.bottom > 0 && rect.left < windowWidth && rect.right > 0;
                }
            }["RevealInit.useEffect.isElementPartiallyVisible"];
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "50px"
            };
            const observer = new IntersectionObserver({
                "RevealInit.useEffect": (entries)=>{
                    entries.forEach({
                        "RevealInit.useEffect": (entry)=>{
                            if (entry.isIntersecting) {
                                entry.target.classList.add("active");
                                // Stop observing once revealed to prevent flickering
                                observer.unobserve(entry.target);
                            }
                        }
                    }["RevealInit.useEffect"]);
                }
            }["RevealInit.useEffect"], observerOptions);
            // Function to observe all reveal elements
            const observeRevealElements = {
                "RevealInit.useEffect.observeRevealElements": ()=>{
                    const revealElements = document.querySelectorAll(".reveal");
                    revealElements.forEach({
                        "RevealInit.useEffect.observeRevealElements": (el)=>{
                            // Skip if already active
                            if (el.classList.contains("active")) {
                                return;
                            }
                            // Don't activate immediately on first render to prevent hydration mismatch
                            // Always use IntersectionObserver, even for visible elements
                            observer.observe(el);
                        }
                    }["RevealInit.useEffect.observeRevealElements"]);
                }
            }["RevealInit.useEffect.observeRevealElements"];
            // Wait for hydration to complete before adding active classes
            // This prevents hydration mismatch errors
            const initTimeout = setTimeout({
                "RevealInit.useEffect.initTimeout": ()=>{
                    observeRevealElements();
                }
            }["RevealInit.useEffect.initTimeout"], 300);
            // Use MutationObserver to handle dynamically added content
            const mutationObserver = new MutationObserver({
                "RevealInit.useEffect": ()=>{
                    // Debounce to avoid excessive checks
                    setTimeout({
                        "RevealInit.useEffect": ()=>{
                            observeRevealElements();
                        }
                    }["RevealInit.useEffect"], 50);
                }
            }["RevealInit.useEffect"]);
            // Observe the document body for changes
            mutationObserver.observe(document.body, {
                childList: true,
                subtree: true
            });
            // Also check on scroll for elements that might have been missed
            const handleScroll = {
                "RevealInit.useEffect.handleScroll": ()=>{
                    const revealElements = document.querySelectorAll(".reveal:not(.active)");
                    revealElements.forEach({
                        "RevealInit.useEffect.handleScroll": (el)=>{
                            if (isElementPartiallyVisible(el)) {
                                el.classList.add("active");
                                observer.unobserve(el);
                            }
                        }
                    }["RevealInit.useEffect.handleScroll"]);
                }
            }["RevealInit.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            return ({
                "RevealInit.useEffect": ()=>{
                    clearTimeout(initTimeout);
                    observer.disconnect();
                    mutationObserver.disconnect();
                    window.removeEventListener("scroll", handleScroll);
                }
            })["RevealInit.useEffect"];
        }
    }["RevealInit.useEffect"], []);
    return null;
}
_s(RevealInit, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = RevealInit;
var _c;
__turbopack_context__.k.register(_c, "RevealInit");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CookieConsent",
    ()=>CookieConsent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/cookie.js [app-client] (ecmascript) <export default as Cookie>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CookieConsent() {
    _s();
    const [showBanner, setShowBanner] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CookieConsent.useEffect": ()=>{
            // Check if user has already accepted cookies
            const cookieConsent = localStorage.getItem("cookieConsent");
            if (!cookieConsent) {
                // Show banner after a short delay
                setTimeout({
                    "CookieConsent.useEffect": ()=>{
                        setShowBanner(true);
                    }
                }["CookieConsent.useEffect"], 1000);
            }
        }
    }["CookieConsent.useEffect"], []);
    const acceptCookies = ()=>{
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };
    const declineCookies = ()=>{
        localStorage.setItem("cookieConsent", "declined");
        setShowBanner(false);
    };
    if (!showBanner) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-0 right-0 z-50 p-4 sm:p-6 max-w-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-2xl p-4 sm:p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Cookie$3e$__["Cookie"], {
                                        className: "h-5 w-5 text-terminal-dark-green"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-semibold text-terminal-text-primary sm:text-lg",
                                        children: "Cookie Consent"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-terminal-text-secondary sm:text-base",
                                children: [
                                    'We use cookies to enhance your experience. By clicking "Accept All", you consent to our use of cookies. Learn more in our',
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/privacy",
                                        className: "text-terminal-dark-teal hover:underline font-medium",
                                        children: "Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: declineCookies,
                                className: "rounded-lg border border-terminal-border-light bg-white px-4 py-2 text-sm font-medium text-terminal-text-primary transition-colors hover:bg-terminal-light-gray",
                                children: "Decline"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: acceptCookies,
                                className: "rounded-lg bg-terminal-lime px-4 py-2 text-sm font-semibold text-terminal-dark-teal transition-colors hover:bg-terminal-lime-hover",
                                children: "Accept All"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/cookie-consent.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(CookieConsent, "1grwDPkfvitbAJm4HZFczy8eoqw=");
_c = CookieConsent;
var _c;
__turbopack_context__.k.register(_c, "CookieConsent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/recaptcha-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReCaptchaProvider",
    ()=>ReCaptchaProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$google$2d$recaptcha$2d$v3$2f$dist$2f$react$2d$google$2d$recaptcha$2d$v3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js [app-client] (ecmascript)");
"use client";
;
;
function ReCaptchaProvider({ children }) {
    const recaptchaSiteKey = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
    // If no site key is configured, render children without reCAPTCHA
    if (!recaptchaSiteKey) {
        console.warn("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not configured. reCAPTCHA is disabled.");
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$google$2d$recaptcha$2d$v3$2f$dist$2f$react$2d$google$2d$recaptcha$2d$v3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GoogleReCaptchaProvider"], {
        reCaptchaKey: recaptchaSiteKey,
        scriptProps: {
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/recaptcha-provider.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ReCaptchaProvider;
var _c;
__turbopack_context__.k.register(_c, "ReCaptchaProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Core-Design_Website%202_0_src_8a5f6fb7._.js.map