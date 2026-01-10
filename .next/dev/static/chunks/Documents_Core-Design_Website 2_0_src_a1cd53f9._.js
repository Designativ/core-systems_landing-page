(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroSection() {
    _s();
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0.5,
        y: 0.5
    });
    const [highlightedService, setHighlightedService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const spot1Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spot2Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spot3Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const spot4Ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const services = [
        "UX+SEO Audit",
        "AI Strategy & Roadmap",
        "AI Automation",
        "Websites & Apps"
    ];
    // Auto-highlight services one by one
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const interval = setInterval({
                "HeroSection.useEffect.interval": ()=>{
                    setHighlightedService({
                        "HeroSection.useEffect.interval": (prev)=>(prev + 1) % services.length
                    }["HeroSection.useEffect.interval"]);
                }
            }["HeroSection.useEffect.interval"], 2500); // Change every 2.5 seconds for smoother transitions
            return ({
                "HeroSection.useEffect": ()=>clearInterval(interval)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        services.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleMouseMove = {
                "HeroSection.useEffect.handleMouseMove": (e)=>{
                    const x = e.clientX / window.innerWidth;
                    const y = e.clientY / window.innerHeight;
                    setMousePosition({
                        x,
                        y
                    });
                    // Apply mouse-responsive transforms
                    const offsetX1 = (x - 0.5) * 40;
                    const offsetY1 = (y - 0.5) * 40;
                    const offsetX2 = (x - 0.5) * -35;
                    const offsetY2 = (y - 0.5) * -35;
                    const offsetX3 = (x - 0.5) * 30;
                    const offsetY3 = (y - 0.5) * 50;
                    const offsetX4 = (x - 0.5) * -45;
                    const offsetY4 = (y - 0.5) * 45;
                    if (spot1Ref.current) {
                        spot1Ref.current.style.setProperty("--mouse-offset-x", `${offsetX1}px`);
                        spot1Ref.current.style.setProperty("--mouse-offset-y", `${offsetY1}px`);
                    }
                    if (spot2Ref.current) {
                        spot2Ref.current.style.setProperty("--mouse-offset-x", `${offsetX2}px`);
                        spot2Ref.current.style.setProperty("--mouse-offset-y", `${offsetY2}px`);
                    }
                    if (spot3Ref.current) {
                        spot3Ref.current.style.setProperty("--mouse-offset-x", `${offsetX3}px`);
                        spot3Ref.current.style.setProperty("--mouse-offset-y", `${offsetY3}px`);
                    }
                    if (spot4Ref.current) {
                        spot4Ref.current.style.setProperty("--mouse-offset-x", `${offsetX4}px`);
                        spot4Ref.current.style.setProperty("--mouse-offset-y", `${offsetY4}px`);
                    }
                }
            }["HeroSection.useEffect.handleMouseMove"];
            window.addEventListener("mousemove", handleMouseMove);
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener("mousemove", handleMouseMove)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative isolate flex min-h-[90vh] flex-col bg-terminal-dark-teal px-6 pt-0 lg:px-8 overflow-hidden",
        style: {
            "--mouse-x": mousePosition.x,
            "--mouse-y": mousePosition.y
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: spot1Ref,
                className: "gradient-spot gradient-spot-1",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: spot2Ref,
                className: "gradient-spot gradient-spot-2",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: spot3Ref,
                className: "gradient-spot gradient-spot-3",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: spot4Ref,
                className: "gradient-spot gradient-spot-4",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto w-full max-w-[900px] pt-10 sm:pt-12 pb-24 relative z-10 flex flex-col justify-center min-h-[calc(90vh-80px)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 hidden justify-center sm:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative rounded-full px-3 py-1 text-sm leading-6 text-white/60 ring-1 ring-white/10 hover:ring-white/20",
                            children: "AI-powered automation for growing BC businesses"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl",
                                children: "Put Agentic AI to Work — Today"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-8 text-lg font-medium text-pretty text-white/90 sm:text-xl leading-8",
                                children: "We create targeted intelligent systems that reduce financial overhead, optimize leadership decisions, and transform every layer of your operational workflow."
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-10 flex justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    asChild: true,
                                    size: "lg",
                                    className: "h-12 rounded-md bg-terminal-lime px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-terminal-lime-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-lime",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#contact",
                                        onClick: (e)=>{
                                            e.preventDefault();
                                            const element = document.querySelector("#contact");
                                            if (element) {
                                                element.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start"
                                                });
                                            }
                                        },
                                        children: [
                                            "Talk With Our Team",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                className: "ml-2 h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 px-6 lg:px-8 py-4 bg-terminal-dark-teal flex flex-wrap items-center justify-center gap-3 z-20",
                children: services.map((service, index)=>{
                    const isHighlighted = highlightedService === index;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#services",
                        onClick: (e)=>{
                            e.preventDefault();
                            const element = document.querySelector("#services");
                            if (element) {
                                element.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start"
                                });
                            }
                        },
                        className: `rounded-full border px-4 py-2 text-base font-medium transition-all duration-700 ease-in-out hover:border-terminal-lime hover:bg-terminal-lime/10 hover:text-terminal-lime ${isHighlighted ? "border-terminal-lime bg-terminal-lime/10 text-terminal-lime" : "border-white/30 bg-transparent text-white"}`,
                        children: service
                    }, index, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                        lineNumber: 129,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/hero-section.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "qf94Bzh0m31Fc+xDaKlS4o//EAM=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CoreProblems",
    ()=>CoreProblems
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-client] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const problems = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
        title: "Our website has visitors but they don't convert",
        description: "We find what's stopping visitors from becoming customers - and help you fix it."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"],
        title: "My team wastes hours on the same tasks every week",
        description: "Custom automation built for your exact workflow - give your team back 10+ hours per week - time savings + productivity gains."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
        title: "Our projects keep going over budget and we don't see it coming",
        description: "Real-time budget tracking with early warning systems - catch overruns before they kill your margins."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        title: "Important emails and follow-ups keep falling through the cracks",
        description: "AI that tracks every conversation, drafts responses, and ensures nothing gets dropped - saving you money in lost opportunities annually."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "Our CFO/leadership team is drowning and becoming the bottleneck",
        description: "AI that handles the administrative load so your executives can focus on strategy - worth $$$$ in leadership time."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: "I need an AI strategy but don't know where to start",
        description: "Get a clear, prioritized roadmap showing what to automate, in what order, and the expected ROI."
    }
];
function CoreProblems() {
    _s();
    const [activeCard, setActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [activeIcon, setActiveIcon] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const totalCards = problems.length;
    const cardDuration = 3000; // 3 seconds per card
    const iconDuration = 2000; // 2 seconds per icon
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoreProblems.useEffect": ()=>{
            const interval = setInterval({
                "CoreProblems.useEffect.interval": ()=>{
                    setActiveCard({
                        "CoreProblems.useEffect.interval": (prev)=>(prev + 1) % totalCards
                    }["CoreProblems.useEffect.interval"]);
                }
            }["CoreProblems.useEffect.interval"], cardDuration);
            return ({
                "CoreProblems.useEffect": ()=>clearInterval(interval)
            })["CoreProblems.useEffect"];
        }
    }["CoreProblems.useEffect"], [
        totalCards
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CoreProblems.useEffect": ()=>{
            const interval = setInterval({
                "CoreProblems.useEffect.interval": ()=>{
                    setActiveIcon({
                        "CoreProblems.useEffect.interval": (prev)=>(prev + 1) % totalCards
                    }["CoreProblems.useEffect.interval"]);
                }
            }["CoreProblems.useEffect.interval"], iconDuration);
            return ({
                "CoreProblems.useEffect": ()=>clearInterval(interval)
            })["CoreProblems.useEffect"];
        }
    }["CoreProblems.useEffect"], [
        totalCards
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative isolate py-16 md:py-20 reveal fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden blur-3xl -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-terminal-lime/30 to-terminal-lime/15 opacity-25 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-1/4 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[45deg] bg-gradient-to-tr from-terminal-lime/35 to-terminal-lime/18 opacity-25 sm:left-[calc(50%+45rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto max-w-7xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-20 max-w-3xl text-center reveal fade-up",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-base font-semibold leading-7 text-terminal-text-secondary mb-2",
                                    children: "How We Help"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl",
                                    children: "Core Problems We Solve"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl leading-relaxed text-terminal-text-primary",
                                    children: "We understand the challenges growing businesses face. Here's how we help."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: problems.map((problem, index)=>{
                                const Icon = problem.icon;
                                const delayClass = `delay-${Math.min(Math.floor(index / 2) + 1, 6)}`;
                                const directionClass = `direction-${index % 6 + 1}`;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `group relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-terminal-lime/30 hover:shadow-md reveal fade-up ${delayClass} animated-border ${directionClass}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `relative mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-terminal-dark-teal transition-all duration-500 group-hover:bg-terminal-dark-teal z-10 ${activeIcon === index ? 'scale-110 shadow-lg shadow-terminal-lime/50' : 'scale-100'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: `h-6 w-6 text-terminal-lime transition-all duration-500 z-10 ${activeIcon === index ? 'scale-110 drop-shadow-[0_0_8px_rgba(212,255,0,0.6)]' : 'scale-100'}`
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                            lineNumber: 155,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative z-10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-4 text-xl font-semibold leading-tight text-terminal-text-primary",
                                                    children: problem.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-base leading-relaxed text-terminal-text-primary",
                                                    children: problem.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                            lineNumber: 164,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                                    lineNumber: 150,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/core-problems.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(CoreProblems, "Defb3gpYs3HFaU1ET9zEXFIZSGA=");
_c = CoreProblems;
var _c;
__turbopack_context__.k.register(_c, "CoreProblems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatWeDo",
    ()=>WhatWeDo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        title: "UX+SEO Audit",
        description: "We identify what's stopping visitors from converting—usability issues, technical problems, and conversion blockers. You'll get a detailed report with screenshots and a prioritized action plan."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        title: "AI Strategy & Roadmap",
        description: "We analyze your business processes to identify high-impact automation opportunities and create a pragmatic implementation roadmap— just proven strategies that deliver measurable results."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"],
        title: "AI Automation, Websites & Apps",
        description: "We build AI-powered automation systems, conversion-focused websites, and custom applications designed for your exact needs. We deliver measurable ROI with solutions your team will actually use. Every project includes training, support, and ongoing optimization."
    }
];
function WhatWeDo() {
    _s();
    const [activeCard, setActiveCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const totalCards = services.length;
    const cardDuration = 3000; // 3 seconds per card
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatWeDo.useEffect": ()=>{
            const interval = setInterval({
                "WhatWeDo.useEffect.interval": ()=>{
                    setActiveCard({
                        "WhatWeDo.useEffect.interval": (prev)=>(prev + 1) % totalCards
                    }["WhatWeDo.useEffect.interval"]);
                }
            }["WhatWeDo.useEffect.interval"], cardDuration);
            return ({
                "WhatWeDo.useEffect": ()=>clearInterval(interval)
            })["WhatWeDo.useEffect"];
        }
    }["WhatWeDo.useEffect"], [
        totalCards
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "relative isolate bg-terminal-dark-teal py-16 sm:py-24 reveal fade-up",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden blur-3xl -translate-y-1/2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-terminal-lime/30 to-terminal-lime/15 opacity-25 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-1/4 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[45deg] bg-gradient-to-tr from-terminal-lime/35 to-terminal-lime/18 opacity-25 sm:left-[calc(50%+45rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-3/4 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%-20rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[45deg] bg-gradient-to-tr from-terminal-lime/35 to-terminal-lime/18 opacity-25 sm:left-[calc(50%-50rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-1/3 -z-10 transform-gpu overflow-hidden blur-3xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                    },
                    className: "relative left-[calc(50%+15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[60deg] bg-gradient-to-tr from-terminal-lime/30 to-terminal-lime/15 opacity-20 sm:left-[calc(50%+50rem)] sm:w-[72.1875rem]"
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "reveal fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-base font-semibold leading-7 text-terminal-lime",
                                children: "Our Services"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl",
                                children: "What We Do"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3",
                        children: services.map((service, index)=>{
                            const Icon = service.icon;
                            const delayClass = `delay-${Math.min(index + 1, 6)}`;
                            const directionClass = `direction-${index % 6 + 1}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group relative min-h-[500px] rounded-lg bg-terminal-dark-teal-alt p-8 transition-all duration-300 reveal fade-up ${delayClass} animated-border ${directionClass}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-terminal-lime/10 z-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            className: "h-7 w-7 text-terminal-lime z-10"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                            lineNumber: 137,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "mt-2 text-xl font-medium tracking-tight text-white",
                                                children: service.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                lineNumber: 142,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-6 text-white/90",
                                                children: service.description
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                lineNumber: 145,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                        lineNumber: 141,
                                        columnNumber: 17
                                    }, this),
                                    index === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative min-h-[220px] w-full grow mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 overflow-hidden rounded-2xl border border-terminal-border-teal/30 bg-gradient-to-br from-terminal-dark-teal/90 via-terminal-dark-teal/70 to-terminal-dark-teal/90 backdrop-blur-sm shadow-2xl shadow-terminal-lime/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 rounded-2xl bg-gradient-to-br from-terminal-lime/5 via-transparent to-terminal-lime/5 blur-xl"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative border-b border-terminal-border-teal/20 bg-terminal-dark-teal/30 px-4 py-2.5 rounded-t-2xl backdrop-blur-sm",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 rounded-full bg-terminal-lime/70 shadow-sm shadow-terminal-lime/50"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 rounded-full bg-terminal-lime/50 shadow-sm shadow-terminal-lime/40"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-2 w-2 rounded-full bg-terminal-lime/40 shadow-sm shadow-terminal-lime/30"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 162,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-2 flex-1 text-xs font-medium text-white/50",
                                                                children: "UX+SEO Audit"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative p-4 space-y-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-baseline gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-3xl font-bold bg-gradient-to-r from-terminal-lime via-terminal-lime/90 to-terminal-lime/70 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(179,255,0,0.4)]",
                                                                            children: "87"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 172,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute inset-0 text-3xl font-bold bg-gradient-to-r from-terminal-lime via-terminal-lime/90 to-terminal-lime/70 bg-clip-text text-transparent blur-sm opacity-50",
                                                                            children: "87"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 175,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "px-2.5 py-1 rounded-lg bg-terminal-lime/10 border border-terminal-lime/30 shadow-lg shadow-terminal-lime/20 backdrop-blur-sm",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs font-semibold text-terminal-lime/90",
                                                                        children: "+12%"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 179,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-white/50 font-medium",
                                                                    children: "Issues Found"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 186,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-end gap-2 h-14",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/70 via-terminal-lime/50 to-terminal-lime/30",
                                                                            style: {
                                                                                height: '55%',
                                                                                boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.3)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 188,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/75 via-terminal-lime/55 to-terminal-lime/35",
                                                                            style: {
                                                                                height: '80%',
                                                                                boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.35)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/65 via-terminal-lime/45 to-terminal-lime/25",
                                                                            style: {
                                                                                height: '40%',
                                                                                boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.25)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 190,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/70 via-terminal-lime/50 to-terminal-lime/30",
                                                                            style: {
                                                                                height: '65%',
                                                                                boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.3)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 191,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/60 via-terminal-lime/40 to-terminal-lime/20",
                                                                            style: {
                                                                                height: '50%',
                                                                                boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.25)'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 187,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2.5 pt-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                            className: "h-3.5 w-3.5 text-terminal-lime/70 drop-shadow-[0_0_4px_rgba(179,255,0,0.5)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 199,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex-1 h-1 bg-gradient-to-r from-terminal-lime/30 to-terminal-lime/10 rounded-full"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 200,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 198,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            className: "h-3.5 w-3.5 text-terminal-lime/60 drop-shadow-[0_0_4px_rgba(179,255,0,0.4)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-1 bg-gradient-to-r from-terminal-lime/25 to-terminal-lime/5 rounded-full",
                                                                            style: {
                                                                                width: '75%'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 204,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 202,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2.5",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                                            className: "h-3.5 w-3.5 text-terminal-lime/50 drop-shadow-[0_0_4px_rgba(179,255,0,0.3)]"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "h-1 bg-gradient-to-r from-terminal-lime/20 to-terminal-lime/5 rounded-full",
                                                                            style: {
                                                                                width: '60%'
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-5 px-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-full h-10 opacity-30",
                                                                viewBox: "0 0 140 24",
                                                                fill: "none",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M15 12 L125 12",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: "1.5",
                                                                    className: "text-terminal-lime drop-shadow-[0_0_4px_rgba(179,255,0,0.6)]",
                                                                    strokeLinecap: "round"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 218,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 217,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 216,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-9 w-9 rounded-xl border border-terminal-lime/50 bg-terminal-dark-teal/70 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-terminal-lime/20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                                    className: "h-4.5 w-4.5 text-terminal-lime/60 drop-shadow-[0_0_4px_rgba(179,255,0,0.4)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 224,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 222,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-9 w-9 rounded-xl border border-terminal-lime/50 bg-terminal-dark-teal/70 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-terminal-lime/20",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {
                                                                    className: "h-4.5 w-4.5 text-terminal-lime/60 drop-shadow-[0_0_4px_rgba(179,255,0,0.4)]"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-9 w-9 rounded-xl border-2 border-terminal-lime/60 bg-terminal-lime/15 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-terminal-lime/30",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        className: "h-4.5 w-4.5 text-terminal-lime/70 drop-shadow-[0_0_6px_rgba(179,255,0,0.6)]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                        lineNumber: 234,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-terminal-lime/70 border-2 border-terminal-dark-teal shadow-lg shadow-terminal-lime/50"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                        lineNumber: 235,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 232,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                            lineNumber: 153,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                        lineNumber: 152,
                                        columnNumber: 19
                                    }, this),
                                    index === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-1 items-center justify-center px-8 pb-6 sm:px-10 sm:pb-8 mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                            className: "h-20 w-20 text-terminal-lime/40"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                            lineNumber: 244,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                        lineNumber: 243,
                                        columnNumber: 19
                                    }, this),
                                    index === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative min-h-[180px] w-full grow mt-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-6 right-6 bottom-6 left-6 overflow-hidden rounded-lg border-2 border-terminal-border-teal bg-terminal-dark-teal/60 outline outline-white/10",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex bg-terminal-dark-teal/80 outline outline-white/5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "-mb-px flex text-sm leading-6 font-medium text-white/60",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white",
                                                                children: "Automation.jsx"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 252,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-r border-white/10 px-4 py-2",
                                                                children: "App.jsx"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                        lineNumber: 251,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "px-6 pt-6 pb-8",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                            className: "h-16 w-16 text-terminal-lime/40"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                        lineNumber: 259,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                            lineNumber: 249,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                        lineNumber: 248,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                                lineNumber: 131,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/what-we-do.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(WhatWeDo, "HE/fbR4+c+vkkFCUct/mWm9Y1SI=");
_c = WhatWeDo;
var _c;
__turbopack_context__.k.register(_c, "WhatWeDo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/hooks/use-reveal.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useReveal",
    ()=>useReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useReveal(options = {}) {
    _s();
    const { threshold = 0.1, rootMargin = "0px", once = true } = options;
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useReveal.useEffect": ()=>{
            const element = ref.current;
            if (!element) return;
            const observer = new IntersectionObserver({
                "useReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (once) {
                            observer.unobserve(element);
                        }
                    } else if (!once) {
                        setIsVisible(false);
                    }
                }
            }["useReveal.useEffect"], {
                threshold,
                rootMargin
            });
            observer.observe(element);
            return ({
                "useReveal.useEffect": ()=>{
                    observer.disconnect();
                }
            })["useReveal.useEffect"];
        }
    }["useReveal.useEffect"], [
        threshold,
        rootMargin,
        once
    ]);
    return {
        ref,
        isVisible
    };
}
_s(useReveal, "7N8EcRPlcY6o9kzg5IgMZgWhyLI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$hooks$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/hooks/use-reveal.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Reveal({ children, animation = "fade-up", delay, className, threshold = 0.1, rootMargin = "0px", once = true }) {
    _s();
    const { ref, isVisible } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$hooks$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"])({
        threshold,
        rootMargin,
        once
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("reveal", animation, delay && `delay-${delay}`, isVisible && "active", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/reveal.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(Reveal, "ee2EZaw9NeA/o3wgHstTFxOHyVw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$hooks$2f$use$2d$reveal$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReveal"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HowItWorks",
    ()=>HowItWorks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/shared/reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const steps = [
    {
        number: "1",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"],
        title: "Discovery",
        description: "We listen first, prescribe second. We start with a conversation about your business challenges, goals, and where you want to go. This helps us understand if we're the right fit and which solutions will deliver the most value."
    },
    {
        number: "2",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        title: "Proposal",
        description: "No guesswork, just clarity. You receive a tailored proposal outlining the scope, timeline, deliverables, and investment—no surprises, just clarity on what to expect and how we'll work together."
    },
    {
        number: "3",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        title: "Analysis",
        description: "Deep work, zero interruptions. We roll up our sleeves and get to work—analyzing your current state, identifying opportunities, and developing solutions tailored to your specific needs. You'll have access to a live project dashboard where you can track progress anytime."
    },
    {
        number: "4",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
        title: "Strategy",
        description: "Actionable insights, not generic advice. You receive a comprehensive report with findings, prioritized recommendations, and key metrics—everything you need to make informed decisions."
    },
    {
        number: "5",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        title: "Execution",
        description: "From plan to performance. We create your implementation roadmap, build and deploy solutions, train your team, provide ongoing optimization and support, and serve as your long-term strategic partner."
    }
];
function HowItWorks() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "process",
        className: "py-16 md:py-20 reveal fade-up",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        animation: "fade-up",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-12 max-w-3xl text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-base font-semibold leading-7 text-terminal-text-secondary mb-2",
                                    children: "Process"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl",
                                    children: "How It Works"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl leading-relaxed text-terminal-text-primary",
                                    children: "A streamlined process designed to deliver maximum value at every stage"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative mb-10 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "tablist",
                            className: "relative flex items-center justify-center gap-3 overflow-x-auto pb-2 w-full",
                            children: steps.map((step, index)=>{
                                const isActive = activeTab === index;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        role: "tab",
                                        "aria-selected": isActive,
                                        onClick: ()=>setActiveTab(index),
                                        className: `flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${isActive ? "bg-terminal-lime text-black hover:bg-terminal-lime-hover scale-105 shadow-lg shadow-terminal-lime/30" : "bg-white border-2 border-gray-200 text-terminal-text-tertiary hover:border-gray-300 hover:text-terminal-text-secondary hover:bg-gray-50"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `font-mono text-base font-bold ${isActive ? "text-black" : "text-terminal-text-tertiary"}`,
                                                children: step.number
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                                lineNumber: 87,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "uppercase tracking-wider",
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                                lineNumber: 90,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                        lineNumber: 77,
                                        columnNumber: 21
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                    lineNumber: 76,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        animation: "fade-up",
                        delay: 2,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            role: "tabpanel",
                            className: "mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mb-6 flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-terminal-dark-teal shadow-md",
                                                children: (()=>{
                                                    const Icon = steps[activeTab].icon;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-7 w-7 text-terminal-lime icon-animate"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 30
                                                    }, this);
                                                })()
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold leading-tight text-terminal-text-primary",
                                                children: steps[activeTab].title
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                                lineNumber: 109,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                        lineNumber: 102,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-relaxed text-terminal-text-primary",
                                        children: steps[activeTab].description
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/how-it-works.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(HowItWorks, "9RTnV4k8xQ8Z7mmUeyiKoXdA+A8=");
_c = HowItWorks;
var _c;
__turbopack_context__.k.register(_c, "HowItWorks");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FAQSection",
    ()=>FAQSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const faqs = [
    {
        question: "What happens on the free discovery call?",
        answer: "We discuss your current situation, goals, and challenges. We'll ask about your website performance, team capabilities, and what you've already tried. You'll leave with a clear understanding of whether we're a fit and what next steps might look like. No sales pressure."
    },
    {
        question: "How quickly can we get started?",
        answer: "After our free discovery call, we typically deliver a custom proposal within 1-3 business days. Deep-dive audits usually take 1-2 weeks, and we can begin implementation immediately after that if you choose to move forward."
    },
    {
        question: "Is there a minimum commitment?",
        answer: "Just the initial project scope we agree on. Many clients start with an audit to validate the relationship and potential before committing to larger initiatives."
    },
    {
        question: "Can you just do the strategy, or do we need implementation too?",
        answer: "Both options work. Many clients start with strategy and audit, then choose whether to implement themselves, use their existing team, or partner with us for execution. We're flexible based on your capabilities and preferences."
    },
    {
        question: "Do you build custom AI solutions or use existing tools?",
        answer: "Both. We leverage proven platforms when appropriate (reducing cost and risk) and build custom solutions when your needs require it. Our recommendations are always based on what will deliver ROI fastest, not what's most technically impressive."
    },
    {
        question: "What kind of ROI should we expect?",
        answer: "This depends on your starting point, but clients typically see 20-40% improvements in conversion rates from UX/SEO fixes, and 10-30 hours per week saved from initial automation implementations. We establish clear success metrics during the discovery phase."
    },
    {
        question: "Do we need technical expertise on our team?",
        answer: "No. We translate technical concepts into business language and can handle implementation without requiring engineering resources on your side. That said, we're happy to collaborate with technical teams if you have them."
    },
    {
        question: "What if we need ongoing support after the initial project?",
        answer: "We offer flexible partnership models including monthly retainers, project-based work, or advisory arrangements. Most clients evolve into an ongoing relationship, but there's no pressure or requirement."
    }
];
function FAQSection() {
    _s();
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const toggleQuestion = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "faq",
        className: "py-16 md:py-20 reveal fade-up",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16 text-center reveal fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-base font-semibold leading-7 text-terminal-text-secondary mb-2",
                                children: "FAQs"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl",
                                children: "FAQs"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                lineNumber: 66,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl leading-relaxed text-terminal-text-primary",
                                children: "Common questions about working with us"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: faqs.map((faq, index)=>{
                            const delayClass = `delay-${Math.min(Math.floor(index / 2) + 1, 6)}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group rounded-lg border border-terminal-border-light bg-white transition-all duration-300 hover:border-terminal-lime/30 hover:shadow-lg reveal fade-up ${delayClass}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>toggleQuestion(index),
                                        className: "flex w-full items-center justify-between p-8 text-left transition-colors",
                                        "aria-expanded": openIndex === index,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "pr-8 text-lg font-semibold leading-tight text-terminal-text-primary sm:text-xl",
                                                children: faq.question
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                                lineNumber: 88,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-6 w-6 shrink-0 text-terminal-text-secondary transition-transform duration-300", openIndex === index && "rotate-180")
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this),
                                    openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-t border-terminal-border-light px-8 pb-8 pt-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base leading-relaxed text-terminal-text-primary",
                                            children: faq.answer
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                            lineNumber: 100,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                        lineNumber: 99,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                                lineNumber: 79,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
                lineNumber: 60,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/sections/faq-section.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(FAQSection, "6UZ+mnQ9sKC06YXeyhrfGXQCT10=");
_c = FAQSection;
var _c;
__turbopack_context__.k.register(_c, "FAQSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/ui/textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/textarea.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Textarea;
Textarea.displayName = "Textarea";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Textarea$React.forwardRef");
__turbopack_context__.k.register(_c1, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/@radix-ui/react-label/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
;
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/label.tsx",
        lineNumber: 15,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Label;
Label.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"].displayName;
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Form",
    ()=>Form,
    "FormControl",
    ()=>FormControl,
    "FormDescription",
    ()=>FormDescription,
    "FormField",
    ()=>FormField,
    "FormItem",
    ()=>FormItem,
    "FormLabel",
    ()=>FormLabel,
    "FormMessage",
    ()=>FormMessage,
    "useFormField",
    ()=>useFormField
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/lib/utils/cn.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/label.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
;
;
;
const Form = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormProvider"];
const FormFieldContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const FormField = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormFieldContext.Provider, {
        value: {
            name: props.name
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FormField;
const useFormField = ()=>{
    _s();
    const fieldContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormFieldContext);
    const itemContext = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](FormItemContext);
    const { getFieldState, formState } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"])();
    const fieldState = getFieldState(fieldContext.name, formState);
    if (!fieldContext) {
        throw new Error("useFormField should be used within <FormField>");
    }
    const { id } = itemContext;
    return {
        id,
        name: fieldContext.name,
        formItemId: `${id}-form-item`,
        formDescriptionId: `${id}-form-item-description`,
        formMessageId: `${id}-form-item-message`,
        ...fieldState
    };
};
_s(useFormField, "eRzki+X5SldVDcAh3BokmSZW9NU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFormContext"]
    ];
});
const FormItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]({});
const FormItem = /*#__PURE__*/ _s1(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c1 = _s1(({ className, ...props }, ref)=>{
    _s1();
    const id = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FormItemContext.Provider, {
        value: {
            id
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-2", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "WhsuKpSQZEWeFcB7gWlfDRQktoQ=")), "WhsuKpSQZEWeFcB7gWlfDRQktoQ=");
_c2 = FormItem;
FormItem.displayName = "FormItem";
const FormLabel = /*#__PURE__*/ _s2(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c3 = _s2(({ className, ...props }, ref)=>{
    _s2();
    const { error, formItemId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(error && "text-destructive", className),
        htmlFor: formItemId,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
})), "Z4R+rKjylfAcqmbRnqWEg1TfTcg=", false, function() {
    return [
        useFormField
    ];
});
_c4 = FormLabel;
FormLabel.displayName = "FormLabel";
const FormControl = /*#__PURE__*/ _s3(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c5 = _s3(({ ...props }, ref)=>{
    _s3();
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"], {
        ref: ref,
        id: formItemId,
        "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
        "aria-invalid": !!error,
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
})), "mI3rlmONcPPBVtOc6UefMrXAJ6w=", false, function() {
    return [
        useFormField
    ];
});
_c6 = FormControl;
FormControl.displayName = "FormControl";
const FormDescription = /*#__PURE__*/ _s4(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c7 = _s4(({ className, ...props }, ref)=>{
    _s4();
    const { formDescriptionId } = useFormField();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formDescriptionId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
})), "573aRXA8dloSrMaQM9SdAF4A9NI=", false, function() {
    return [
        useFormField
    ];
});
_c8 = FormDescription;
FormDescription.displayName = "FormDescription";
const FormMessage = /*#__PURE__*/ _s5(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c9 = _s5(({ className, children, ...props }, ref)=>{
    _s5();
    const { error, formMessageId } = useFormField();
    const body = error ? String(error?.message) : children;
    if (!body) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        id: formMessageId,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$lib$2f$utils$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium text-destructive", className),
        ...props,
        children: body
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
}, "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
})), "WONNS8VCMr8LShuUovb8QgOmMVY=", false, function() {
    return [
        useFormField
    ];
});
_c10 = FormMessage;
FormMessage.displayName = "FormMessage";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "FormField");
__turbopack_context__.k.register(_c1, "FormItem$React.forwardRef");
__turbopack_context__.k.register(_c2, "FormItem");
__turbopack_context__.k.register(_c3, "FormLabel$React.forwardRef");
__turbopack_context__.k.register(_c4, "FormLabel");
__turbopack_context__.k.register(_c5, "FormControl$React.forwardRef");
__turbopack_context__.k.register(_c6, "FormControl");
__turbopack_context__.k.register(_c7, "FormDescription$React.forwardRef");
__turbopack_context__.k.register(_c8, "FormDescription");
__turbopack_context__.k.register(_c9, "FormMessage$React.forwardRef");
__turbopack_context__.k.register(_c10, "FormMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/zod/v3/types.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$google$2d$recaptcha$2d$v3$2f$dist$2f$react$2d$google$2d$recaptcha$2d$v3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/react-google-recaptcha-v3/dist/react-google-recaptcha-v3.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/ui/form.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const contactFormSchema = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(2, "Name must be at least 2 characters"),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().email("Please enter a valid email address"),
    company: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().optional(),
    website: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().optional(),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$zod$2f$v3$2f$types$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().min(10, "Message must be at least 10 characters")
});
function ContactForm() {
    _s();
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Try to get reCAPTCHA hook, but handle gracefully if not available
    let executeRecaptcha;
    try {
        const recaptcha = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$google$2d$recaptcha$2d$v3$2f$dist$2f$react$2d$google$2d$recaptcha$2d$v3$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGoogleReCaptcha"])();
        executeRecaptcha = recaptcha.executeRecaptcha;
    } catch (error) {
        // reCAPTCHA provider not available - form will work without it
        console.log("reCAPTCHA not available - form will work without spam protection");
    }
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            company: "",
            website: "",
            message: ""
        }
    });
    const onSubmit = async (data)=>{
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage(null);
        try {
            // Get reCAPTCHA token (optional - form works without it)
            let recaptchaToken = "";
            if (executeRecaptcha) {
                try {
                    recaptchaToken = await executeRecaptcha("contact_form");
                } catch (recaptchaError) {
                    console.warn("reCAPTCHA error:", recaptchaError);
                // Continue without token if reCAPTCHA fails (allows testing without setup)
                }
            }
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    company: data.company || "",
                    website: data.website || "",
                    message: data.message,
                    recaptchaToken
                })
            });
            // Check if response is JSON before parsing
            const contentType = response.headers.get("content-type") || "";
            // Try to parse as JSON regardless of content-type header
            let result;
            try {
                const text = await response.text();
                // Check if it looks like HTML
                if (text.trim().startsWith("<!DOCTYPE") || text.trim().startsWith("<html")) {
                    console.error("API returned HTML instead of JSON. This usually means the API route failed or Next.js returned an error page.");
                    console.error("Response preview:", text.substring(0, 300));
                    setSubmitStatus("error");
                    setErrorMessage("The server returned an error page. Please check the console for details or try again later.");
                    return;
                }
                // Try to parse as JSON
                result = JSON.parse(text);
            } catch (parseError) {
                console.error("Failed to parse API response:", parseError);
                console.error("Response content-type:", contentType);
                setSubmitStatus("error");
                setErrorMessage("Unable to process server response. Please try again.");
                return;
            }
            if (response.ok) {
                setSubmitStatus("success");
                form.reset();
            } else {
                setSubmitStatus("error");
                setErrorMessage(result.error || "Something went wrong. Please try again.");
                console.error("Form submission error:", result.error);
            }
        } catch (error) {
            setSubmitStatus("error");
            const errorMsg = error instanceof Error ? error.message : "Network error. Please check your connection and try again.";
            setErrorMessage(errorMsg);
            console.error("Form submission error:", error);
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Form"], {
        ...form,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: form.handleSubmit(onSubmit),
            className: "mx-auto max-w-xl space-y-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                            control: form.control,
                            name: "name",
                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                            className: "block text-sm font-semibold leading-6 text-white",
                                            children: "Name *"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Your name",
                                                        className: "block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                                                    className: "text-terminal-lime"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                    lineNumber: 141,
                                    columnNumber: 15
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                            control: form.control,
                            name: "email",
                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                            className: "block text-sm font-semibold leading-6 text-white",
                                            children: "Email *"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "email",
                                                        placeholder: "your@email.com",
                                                        className: "block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                                                    className: "text-terminal-lime"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 166,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                    lineNumber: 162,
                                    columnNumber: 15
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                            control: form.control,
                            name: "company",
                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                    className: "sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                            className: "block text-sm font-semibold leading-6 text-white",
                                            children: "Company (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Your company name",
                                                        className: "block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 189,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                                                    className: "text-terminal-lime"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 188,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                    lineNumber: 184,
                                    columnNumber: 15
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                            control: form.control,
                            name: "website",
                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                    className: "sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                            className: "block text-sm font-semibold leading-6 text-white",
                                            children: "Website (Optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                        type: "url",
                                                        placeholder: "https://yourwebsite.com",
                                                        className: "block w-full h-10 rounded-md bg-white/5 px-3.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 210,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                                                    className: "text-terminal-lime"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 209,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                    lineNumber: 205,
                                    columnNumber: 15
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormField"], {
                            control: form.control,
                            name: "message",
                            render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormItem"], {
                                    className: "sm:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormLabel"], {
                                            className: "block text-sm font-semibold leading-6 text-white",
                                            children: "Message *"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 228,
                                            columnNumber: 17
                                        }, void 0),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormControl"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                        placeholder: "Tell us about your project or questions...",
                                                        rows: 4,
                                                        className: "block w-full min-h-[2.5rem] rounded-md bg-white/5 px-3.5 py-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-terminal-lime focus-visible:ring-0 border-0 resize-none",
                                                        ...field
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, void 0),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormMessage"], {
                                                    className: "text-terminal-lime"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 19
                                                }, void 0)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                            lineNumber: 231,
                                            columnNumber: 17
                                        }, void 0)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        className: "block w-full rounded-md bg-terminal-lime px-3.5 py-2.5 text-center text-sm font-semibold text-black shadow-sm hover:bg-terminal-lime-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-lime transition-colors",
                        disabled: isSubmitting,
                        children: isSubmitting ? "Sending..." : "Let's talk"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, this),
                submitStatus === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-base text-terminal-lime",
                    children: "Thank you! We'll get back to you soon."
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, this),
                submitStatus === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-base text-terminal-lime",
                    children: errorMessage || "Something went wrong. Please try again or email us directly."
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
                    lineNumber: 261,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
            lineNumber: 135,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/shared/contact-form.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(ContactForm, "CrZZgc9bS+jBrcm1iiIMbyyHq4Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ContactForm;
var _c;
__turbopack_context__.k.register(_c, "ContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Core-Design/Website 2.0/src/components/shared/logo.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const footerSections = {
    services: [
        {
            href: "#services",
            label: "UX+SEO Audit"
        },
        {
            href: "#services",
            label: "AI Strategy & Roadmap"
        },
        {
            href: "#services",
            label: "AI Automation, Websites & Apps"
        }
    ],
    legal: [
        {
            href: "/privacy",
            label: "Privacy Policy"
        },
        {
            href: "/terms",
            label: "Terms of Service"
        }
    ]
};
function Footer() {
    const currentYear = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "relative text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container relative mx-auto px-4 pt-12 pb-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$src$2f$components$2f$shared$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                        variant: "footer"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6",
                    children: footerSections.services.map((link, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            onClick: (e)=>{
                                e.preventDefault();
                                const element = document.querySelector(link.href);
                                if (element) {
                                    element.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    });
                                }
                            },
                            className: "text-sm text-white transition-colors hover:text-terminal-lime cursor-pointer",
                            children: link.label
                        }, index, false, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                            lineNumber: 33,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 text-sm text-white/80",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.linkedin.com/in/nataliia-ivanova-profile/",
                            target: "_self",
                            rel: "noopener noreferrer",
                            className: "flex items-center gap-2 transition-colors hover:text-terminal-lime",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "LinkedIn"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Vancouver, BC"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Mon-Fri 8am to 5pm"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 border-t border-white/10 pt-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-between gap-4 md:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-white/60",
                                children: [
                                    "© ",
                                    currentYear,
                                    ". All rights reserved."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: footerSections.legal.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Core$2d$Design$2f$Website__2$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "text-sm text-white/60 transition-colors hover:text-white",
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                        lineNumber: 79,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Core-Design/Website 2.0/src/components/layout/footer.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Documents_Core-Design_Website%202_0_src_a1cd53f9._.js.map