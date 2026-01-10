module.exports = [
"[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/loading-spinner.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-rsc] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-rsc] (ecmascript)");
;
;
;
const sizeMap = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8"
};
function LoadingSpinner({ size = "md", className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("animate-spin text-muted-foreground", sizeMap[size], className),
        "aria-label": "Loading"
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/loading-spinner.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/app/loading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$loading$2d$spinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/shared/loading-spinner.tsx [app-rsc] (ecmascript)");
;
;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex min-h-screen items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$loading$2d$spinner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoadingSpinner"], {
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/app/loading.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/app/loading.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Documents_Core-Design_Website%202_0_src_5a625f9e._.js.map