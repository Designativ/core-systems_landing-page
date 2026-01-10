module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/Core-Design/Website 2.0/src/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "My Website";
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
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
        label: "FAQ"
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
    linkedin: "#"
};
}),
"[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
Button.displayName = "Button";
;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Logo({ className = "", variant = "default" }) {
    const isFooter = variant === "footer";
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/",
        onClick: handleLogoClick,
        className: `flex items-center gap-2 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: isFooter ? "32" : "28",
                        height: isFooter ? "32" : "28",
                        viewBox: "0 0 28 28",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "text-terminal-dark-green",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M8 4L4 8V20L8 24H20L24 20V8L20 4H8Z",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "text-terminal-dark-green"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M10 10L14 14L10 18",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "text-terminal-dark-green"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "18",
                                cy: "10",
                                r: "1.5",
                                fill: "currentColor",
                                className: "text-terminal-dark-green"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-bold tracking-tight ${isFooter ? "text-xl text-white" : "text-lg text-gray-900"}`,
                    children: "Terminal"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx",
                    lineNumber: 78,
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
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-ssr] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Header() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-4 left-0 right-0 z-50 w-full px-4 md:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex h-14 items-center justify-between rounded-xl border border-white/20 bg-white/80 backdrop-blur-md backdrop-saturate-150 px-6 shadow-lg shadow-black/5 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$logo$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Logo"], {}, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden items-center space-x-1 md:flex",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-3 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/nataliia-ivanova-profile/",
                                    target: "_self",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-gray-900",
                                    "aria-label": "LinkedIn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    className: "h-9 rounded-lg bg-terminal-dark-teal-alt px-5 text-sm font-semibold text-terminal-lime shadow-sm transition-all hover:bg-terminal-dark-teal hover:shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/50 md:hidden",
                            onClick: toggleMenu,
                            "aria-label": "Toggle menu",
                            children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-6 w-6"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                lineNumber: 88,
                                columnNumber: 27
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("mx-auto mt-2 max-w-7xl rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md backdrop-saturate-150 shadow-lg transition-all duration-300 md:hidden", isMenuOpen ? "block" : "hidden"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex flex-col space-y-1 p-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: link.href,
                                onClick: (e)=>handleNavClick(e, link.href),
                                className: "rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-white/50 hover:text-gray-900 cursor-pointer",
                                children: link.label
                            }, link.href, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/header.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 flex items-center gap-3 border-t border-gray-200/50 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.linkedin.com/in/nataliia-ivanova-profile/",
                                    target: "_self",
                                    rel: "noopener noreferrer",
                                    className: "flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-white/50 hover:text-gray-900",
                                    onClick: ()=>setIsMenuOpen(false),
                                    "aria-label": "LinkedIn",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    className: "flex-1 h-10 rounded-lg bg-terminal-dark-teal-alt text-sm font-semibold text-terminal-lime shadow-sm transition-all hover:bg-terminal-dark-teal hover:shadow-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/reveal-init.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RevealInit",
    ()=>RevealInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function RevealInit() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if element is already in viewport
        const isElementInViewport = (el)=>{
            const rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
        };
        // Check if element is partially visible
        const isElementPartiallyVisible = (el)=>{
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const windowWidth = window.innerWidth || document.documentElement.clientWidth;
            return rect.top < windowHeight && rect.bottom > 0 && rect.left < windowWidth && rect.right > 0;
        };
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "50px"
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    // Stop observing once revealed to prevent flickering
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        // Function to observe all reveal elements
        const observeRevealElements = ()=>{
            const revealElements = document.querySelectorAll(".reveal");
            revealElements.forEach((el)=>{
                // Skip if already active
                if (el.classList.contains("active")) {
                    return;
                }
                // If element is already visible, activate it immediately
                if (isElementPartiallyVisible(el)) {
                    el.classList.add("active");
                } else {
                    observer.observe(el);
                }
            });
        };
        // Small delay to ensure DOM is ready
        const initTimeout = setTimeout(()=>{
            observeRevealElements();
        }, 100);
        // Use MutationObserver to handle dynamically added content
        const mutationObserver = new MutationObserver(()=>{
            // Debounce to avoid excessive checks
            setTimeout(()=>{
                observeRevealElements();
            }, 50);
        });
        // Observe the document body for changes
        mutationObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
        // Also check on scroll for elements that might have been missed
        const handleScroll = ()=>{
            const revealElements = document.querySelectorAll(".reveal:not(.active)");
            revealElements.forEach((el)=>{
                if (isElementPartiallyVisible(el)) {
                    el.classList.add("active");
                    observer.unobserve(el);
                }
            });
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            clearTimeout(initTimeout);
            observer.disconnect();
            mutationObserver.disconnect();
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return null;
}
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7a0f1fe1._.js.map