(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Header = ()=>{
    _s();
    // toggler menu
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toggleMenu = ()=>setIsOpen(!isOpen);
    // contact form
    const [contactFormOpen, setContactFormOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openContactForm = ()=>setContactFormOpen(true);
    const closeContactForm = ()=>setContactFormOpen(false);
    const navLinks = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0",
        children: [
            "Home",
            "About",
            "Project",
            "experience",
            "Contact"
        ].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.7 + index * 0.2
                },
                className: "relative text-[var(--secondary-color-3)] dark:text-[var(--primary-color-3)] hover:text-[var(--primary-color-4)] dark:hover:text-[var(--secondary-color-4)] font-medium    transition-colors duration-300 group",
                href: "#",
                children: [
                    item,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-color-3)] dark:bg-[var(--primary-color-3)] group-hover:w-full transition-all duration-300"
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 41,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, item, true, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                lineNumber: 26,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const icons = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex space-x-4",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiTwitter"],
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiInstagram"],
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFacebook"],
            __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiLinkedin"]
        ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                initial: {
                    opacity: 0,
                    scale: 0.5
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                transition: {
                    delay: 1.5,
                    duration: 0.8
                },
                className: "text-[var(--secondary-color-3)] dark:text-[var(--primary-color-3)] hover:text-[var(--primary-color-4)] dark:hover:text-[var(--secondary-color-4)] transition-colors duration-300",
                href: "#",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    className: "w-5 h-5"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, i, false, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                lineNumber: 51,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const hireMe = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
        onClick: openContactForm,
        initial: {
            opacity: 0,
            scale: 0.8
        },
        animate: {
            opacity: 1,
            scale: 1
        },
        transition: {
            delay: 1.6,
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
        },
        className: "ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] flex items-center justify-center text-[var(--secondary-color-5)] dark:text-[var(--primary-color-5)] font-bold  hover:bg-gradient-to-r hover:from-[var(--secondary-color-2)]  hover:to-[var(--secondary-color-3)]  hover:text-[var(--secondary-color)] dark:hover:bg-gradient-to-r dark:hover:from-[var(--secondary-color-2)]  dark:hover:to-[var(--secondary-color-3)]  dark:hover:text-[var(--primary-color)] transition-all duration-500",
        children: "Hire Me"
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
        lineNumber: 69,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "absolute w-full z-50 transition-all duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -100
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            type: "spring",
                            stiffness: 100,
                            damping: 25,
                            delay: 0.3,
                            duration: 1.2
                        },
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-10 w-10 rounded-3xl bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] flex items-center justify-center text-[var(--primary-color)] dark:text-[var(--secondary-color)] font-bold text-xl mr-3",
                                children: "M-Y"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] bg-clip-text text-transparent",
                                children: "FullName"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden  lg:flex items-center space-x-8",
                        children: [
                            navLinks,
                            icons,
                            hireMe
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex lg:hidden items-center space-x-4",
                        children: [
                            icons,
                            hireMe,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: toggleMenu,
                                className: "text-[#0FA4AF] ",
                                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                    lineNumber: 125,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleMenu,
                            className: "text-[#0FA4AF]",
                            children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMenu"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                lineNumber: 88,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    height: 0,
                    opacity: 0
                },
                animate: {
                    height: "auto",
                    opacity: 1
                },
                exit: {
                    height: 0,
                    opacity: 0
                },
                className: "bg-[var(--secondary-color-2)] text-[var(--secondary-color-4)] dark:bg-[var(--primary-color-5)] p-4 lg:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:block",
                        children: navLinks
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "block md:hidden space-y-4",
                        children: [
                            navLinks,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4 border-t border-[var(--primary-color-2)] dark:border-t dark:border-[var(--secondary-color-2)] ",
                                children: icons
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full flex items-center justify-center ",
                                children: hireMe
                            }, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                lineNumber: 144,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: contactFormOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    className: "fixed inset-0 bg-black/50 background-blur-sm z-50 flex items-center justify-center p-4 ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scale: 0.8,
                            opacity: 0,
                            y: 30
                        },
                        animate: {
                            scale: 1,
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            scale: 0.8,
                            opacity: 0,
                            y: 30
                        },
                        transition: {
                            type: "spring",
                            damping: 30,
                            stiffness: 200,
                            duration: 0.8
                        },
                        className: "bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] p-4 rounded-xl shadow-xl w-full max-w-md p-6 ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-2xl font-bold bg-gradient-to-r from-[var(--secondary-color-4)] ] to-[var(--secondary-color-3)] bg-gradient-to-r dark:from-[var(--primary-color-4)] dark:to-[var(--primary-color-3)] bg-clip-text text-transparent",
                                        children: "Get In Touch"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                        lineNumber: 185,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: closeContactForm,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {
                                            className: "w-6 h-6 text-[var(--primary-color-2)] dark:text-[var(--secondary-color-2)] font-extrabold "
                                        }, void 0, false, {
                                            fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 184,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "Name",
                                                className: "Block text-sm font-medium text-[var(--accent-color-4)] dark:text-[var(--accent-color-2)] mb-1",
                                                children: "Name:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                                lineNumber: 195,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "name",
                                                placeholder: "Enter your name",
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-[var(--accent-color-3)]  bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] text-[var(--accent-color-3)] dark:text-[var(--accent-color)]  "
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                                lineNumber: 201,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "Block text-sm font-medium text-[var(--accent-color-4)] dark:text-[var(--accent-color-2)] mb-1",
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                                lineNumber: 209,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "email",
                                                placeholder: "Enter your Email",
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-[var(--accent-color-3)]  bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] text-[var(--accent-color-3)] dark:text-[var(--accent-color)]  "
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                                lineNumber: 215,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "Block text-sm font-medium text-[var(--accent-color-4)] dark:text-[var(--accent-color-2)] mb-1",
                                                children: "Message:"
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                rows: "4",
                                                id: "message",
                                                placeholder: "How can We help you?",
                                                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--accent-color)] focus:border-[var(--accent-color-3)]  bg-[var(--accent-color-2)] dark:bg-[var(--accent-color-3)] text-[var(--accent-color-3)] dark:text-[var(--accent-color)] "
                                            }, void 0, false, {
                                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                                lineNumber: 229,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                        lineNumber: 222,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        type: "submit",
                                        whileHover: {
                                            scale: 1.03
                                        },
                                        whileTap: {
                                            scale: 0.97
                                        },
                                        className: "w-full px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--secondary-color-2)] to-[var(--secondary-color-3)] text-[var(--secondary-color-5)] font-bold  hover:bg-gradient-to-r hover:from-[var(--primary-color-2)] hover:to-[var(--secondary-color)] hover:text-[var(--secondary-color)]    dark:bg-gradient-to-r dark:from-[var(--primary-color-2)] dark:to-[var(--secondary-color)] dark:text-[var(--primary-color)]   dark:hover:bg-gradient-to-r dark:hover:from-[var(--secondary-color-2)] dark:hover:to-[var(--secondary-color-3)] dark:hover:text-[var(--primary-color-5)]   transition-all duration-500 ",
                                        children: "Send Message"
                                    }, void 0, false, {
                                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                                lineNumber: 193,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                    lineNumber: 166,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
                lineNumber: 164,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/Header.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Header, "D7fnPVzsf9HUeZ26ugNzsKhOqv4=");
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/app/ThemeToggler.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ThemeToggler() {
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "outline",
        size: "icon",
        className: "rounded-full bottom-2 right-2 fixed",
        onClick: ()=>setTheme(theme === "light" ? "dark" : "light"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSun"], {
                className: "fixed h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/app/ThemeToggler.tsx",
                lineNumber: 15,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMoon"], {
                className: "fixed  h-10 w-10rotate-90 scale-0 dark:rotate-0 dark:scale-100"
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/app/ThemeToggler.tsx",
                lineNumber: 17,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/app/ThemeToggler.tsx",
        lineNumber: 9,
        columnNumber: 6
    }, this);
}
_s(ThemeToggler, "5ABGV54qnXKp6rHn7MS/8MjwRhQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggler;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$react$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/node_modules/@splinetool/react-spline/dist/react-spline.js [app-client] (ecmascript)");
"use client";
;
;
;
const HeroSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "h-screen bg-gradient-to-br from-[var(--secondary-color-5)] to-[var(--secondary-color-3)]   dark:bg-gradient-to-br dark:from-[var(--primary-color-5)] dark:to-[var(--primary-color-4)]   flex items-center justify-start lg:px-24 px-10    relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-40 xl:mb-0 mb-[10%] lg:w-1/2 md:w-2/3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            x: -200,
                            opacity: 0
                        },
                        animate: {
                            x: 0,
                            opacity: 1
                        },
                        transition: {
                            type: "tween",
                            ease: "easeOut",
                            delay: 1.3,
                            duration: 1.5
                        },
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold    text-[var(--secondary-color-4)] dark:text-[var(--primary-color-3)]    z-10 mb-6",
                        children: [
                            "Design With Purpose,",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Creativity With Impact"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            y: 80,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        transition: {
                            type: "spring",
                            stiffness: 40,
                            damping: 25,
                            delay: 1.8,
                            duration: 1.5
                        },
                        // initial={{ x: -200, opacity: 0 }}
                        // animate={{ x: 0, opacity: 1 }}
                        // transition={{
                        //   type: "tween",
                        //   ease: "easeOut",
                        //   delay: 1.3,
                        //   duration: 1.5,
                        // }}
                        className: "text-xl md:text-1xl lg:text-2xl text-[var(--secondary-color-2)] dark:text-[var(--primary-color-2)]",
                        children: "Hey, I’m [Me]. My work focuses on blending creativity with strategy—whether it’s logos, marketing campaigns, or social media graphics. I believe design is not just about looking good, but about communicating effectively and building strong identities."
                    }, void 0, false, {
                        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-[-30%] w-full h-full flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$python__library$2f$assignments$2f$copy__darkmode$2f$darkMode$2f$my$2d$app$2f$node_modules$2f40$splinetool$2f$react$2d$spline$2f$dist$2f$react$2d$spline$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    scene: "https://prod.spline.design/pgozU9VM9w7ysfct/scene.splinecode"
                }, void 0, false, {
                    fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx",
                lineNumber: 61,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/OneDrive/Desktop/python library/assignments/copy darkmode/darkMode/my-app/src/components/HeroSection.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=13466_Desktop_python%20library_assignments_copy%20darkmode_darkMode_my-app_src_527fa2fd._.js.map