(this["webpackJsonpwho-wants-to-be-millionaire"]=this["webpackJsonpwho-wants-to-be-millionaire"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"question":"How many Suns do we have?","answers":["1","4","3","2"],"correctAnswIndex":0,"level":"easy"},{"question":"Who is Klichko?","answers":["actor","president","mayor of Kyiv","ball"],"correctAnswIndex":2,"level":"easy"},{"question":"How many angles are in a triangle?","answers":["1","6","2","3"],"correctAnswIndex":3,"level":"easy"},{"question":"In 1893, what country was the first to grant women the right to vote?","answers":["Canada","Sweden","New Zealand","Denmark"],"correctAnswIndex":2,"level":"easy"},{"question":"The shortest distance between two points lying on a curved or flat surface is what type of line?","answers":["Stochastic","Isometric","Discrete","Geodesic"],"correctAnswIndex":3,"level":"easy"},{"question":"The highest mountain in South America is located in what country?","answers":["Brazil","Peru","Ecuador","Argentina"],"correctAnswIndex":3,"level":"easy"},{"question":"What kind of animal traditionally lives in a sity?","answers":["Cow","Pig","Fox","Teenager"],"correctAnswIndex":1,"level":"easy"},{"question":"Semiotics is the study of what?","answers":["Apes","Word origins","Signs and symbols","Flags"],"correctAnswIndex":2,"level":"easy"},{"question":"The comic strip character Garfield the cat hates what day of the week? ","answers":["Sunday","Monday","Thursday","Friday"],"correctAnswIndex":1,"level":"easy"},{"question":"On a traditional round clock, what number is 180 degrees from the number 5?","answers":["2","6","9","11"],"correctAnswIndex":3,"level":"easy"},{"question":"What continent has the most countries?","answers":["Europe","Asia","Africa","South America"],"correctAnswIndex":2,"level":"easy"},{"question":"Which two countries currently account for more than a third of Earth\'s population?","answers":["China and Russia","India and China","India and Pakistan","China and Brazil"],"correctAnswIndex":1,"level":"easy"}]')},22:function(e){e.exports=JSON.parse('["A","B","C","D"]')},23:function(e,t,n){e.exports={Container:"Spinner_Container__1E4m4"}},26:function(e,t,n){e.exports=n(66)},38:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},6:function(e){e.exports=JSON.parse('["500","1,000","2,000","4,000","8,000","16,000","32,000","64,000","125,000","250,000","500,000","1,000,000"]')},66:function(e,t,n){"use strict";n.r(t);var a,r=n(0),l=n.n(r),c=n(10),o=n.n(c),i=n(4),s=n(19),u=n(5),m=n(7),C=n(20),f=n.n(C),p=n(3),v=n(2),h=Object(u.b)("game/StatusInactive"),d={gameStatusActive:Object(u.b)("game/StatusActive"),gameStatusInactive:h,gameStatusRestart:Object(u.b)("game/StatusRestart"),gameUserCoins:Object(u.b)("game/UserCoins"),gameUserLevel:Object(u.b)("game/UserLevel")},b=n(6),g=Object(u.c)("inactive",(a={},Object(p.a)(a,d.gameStatusActive,(function(e,t){return t.payload})),Object(p.a)(a,d.gameStatusInactive,(function(e,t){return t.payload})),Object(p.a)(a,d.gameStatusRestart,(function(e,t){return t.payload})),a)),E=Object(u.c)(0,Object(p.a)({},d.gameUserCoins,(function(e,t){return t.payload}))),y=Object(u.c)({level:0,amount:b[0]},Object(p.a)({},d.gameUserLevel,(function(e,t){return t.payload}))),O=Object(v.c)({gameStatus:g,userCoins:E,userLevel:y}),w={key:"game",storage:f.a,whitelist:["userCoins"]},L=Object(u.a)({reducer:{game:Object(m.g)(w,O)},middleware:Object(u.d)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}})}),j=Object(m.h)(L),x=function(e){return e.game.gameStatus},S=function(e){return e.game.userCoins},I=function(e){return e.game.userLevel},M=function(){return function(e){e(d.gameStatusActive("active")),e(d.gameUserCoins(0));var t={level:0,amount:b[0]};e(d.gameUserLevel(t))}},N=function(){return function(e){e(d.gameStatusInactive("restart"));var t={level:0,amount:b[0]};e(d.gameUserLevel(t))}},A=function(e){return function(t){return t(d.gameUserCoins(e))}},k=function(e){return function(t){var n={level:e,amount:b[e]};t(d.gameUserLevel(n))}};function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T=l.a.createElement("path",{d:"M433.483 211.523C440.09 187.842 445.375 163.792 449.339 139.523C453.377 130.329 457.928 121.357 462.92 112.679C469.086 102.015 476.354 92.1596 483.107 81.8633C489.127 72.6701 494.559 62.5209 495.22 51.4156C495.734 42.7373 493.825 33.3971 488.026 26.6309C481.639 19.1293 471.802 16.1875 462.186 17.0701C451.762 17.9526 442.292 23.4685 434.217 29.8669C425.481 36.8537 417.333 44.7966 409.625 52.813C394.723 68.331 381.509 85.4669 370.131 103.706C361.762 100.47 353.687 96.5722 345.612 92.7479C333.867 87.1585 321.975 82.231 309.348 78.9214C286.812 73.0378 261.412 70.7579 239.316 79.4362C219.349 87.3056 202.538 105.251 202.245 127.608C202.098 136.434 204.667 144.156 208.925 150.922C199.822 155.923 192.114 163.057 187.343 172.471C182.498 182.032 181.543 193.725 185.507 203.727C186.976 207.405 189.031 210.714 191.527 213.656C184.113 220.422 177.432 229.027 174.349 238.661C171.413 247.781 173.101 256.974 177.946 265.137C179.341 267.417 180.956 269.55 182.718 271.609C174.569 278.743 171.927 290.437 174.349 300.88C177.139 313.162 186.095 322.723 195.711 330.298C203.126 336.108 211.054 341.33 219.276 345.963C223.386 348.537 227.718 350.964 232.049 353.171C236.673 355.451 241.518 357.584 246.437 359.054C249.814 360.084 253.264 360.967 256.714 361.408C259.063 361.702 261.412 361.849 263.761 361.776C264.936 361.776 266.11 361.702 267.212 361.555C270.442 361.261 273.672 360.378 276.828 359.349C279.03 358.613 281.159 357.657 283.215 356.48C284.83 355.598 286.445 354.642 287.913 353.612C297.162 355.818 306.559 357.069 316.102 356.922C336.436 356.554 355.523 348.317 370.939 335.152C387.896 320.737 399.862 301.542 408.964 281.391C419.168 259.033 426.803 235.278 433.483 211.523Z",fill:"#EF9E81"}),P=l.a.createElement("path",{d:"M183.877 273.978C197.93 283.037 212.498 291.36 227.434 298.8C234.791 302.482 242.296 306.018 249.948 309.112C257.526 312.205 265.325 314.857 273.419 316.477C280.924 317.95 289.09 318.687 296.669 317.214C301.378 316.33 306.454 315.151 310.501 312.5C312.929 310.953 314.989 308.964 316.902 306.828C318.594 304.913 320.36 302.851 321.611 300.641C323.598 297.032 324.701 292.981 325.143 288.93C326.393 278.691 323.083 268.085 314.842 261.603C313.665 260.646 312.34 259.762 311.016 259.025C309.986 258.436 309.103 259.983 310.06 260.646C314.842 263.445 318.668 267.422 321.022 272.504C323.009 276.776 323.745 281.638 323.524 286.352C323.303 290.403 322.494 294.454 320.802 298.137C320.066 299.757 319.109 301.23 318.006 302.63C316.019 305.208 313.812 307.638 311.31 309.701C307.779 312.573 303.438 313.826 299.097 314.857C291.886 316.624 284.308 316.403 277.024 315.299C261.279 312.868 246.49 306.092 232.29 299.168C217.722 292.097 203.522 284.216 189.836 275.598C188.144 274.567 186.526 273.462 184.833 272.431C183.803 271.768 182.847 273.388 183.877 273.978Z",fill:"#C4674E"}),B=l.a.createElement("path",{d:"M197.562 216.378C213.969 224.112 230.524 231.625 247.079 238.843C262.971 245.841 279.011 252.838 295.786 257.478C303.879 259.762 312.561 261.898 321.022 260.425C327.276 259.32 333.015 256.153 337.43 251.66C341.918 247.093 345.155 241.2 346.48 234.866C347.289 231.183 346.995 227.353 346.333 223.67C344.346 212.99 337.871 203.341 328.454 197.964C327.056 197.154 325.584 196.491 324.039 195.828C322.935 195.386 322.494 197.154 323.524 197.596C333.751 201.868 341.109 210.707 343.905 221.313C344.861 224.996 345.376 228.9 344.935 232.656C344.346 238.107 341.624 243.631 338.239 247.903C334.34 252.691 329.116 256.3 323.156 257.994C315.284 260.13 307.043 258.51 299.318 256.447C283.057 252.249 267.533 245.693 252.155 238.991C236.116 231.993 220.223 224.849 204.331 217.483C202.344 216.525 200.358 215.642 198.371 214.684C197.415 214.316 196.532 215.936 197.562 216.378Z",fill:"#C4674E"}),F=l.a.createElement("path",{d:"M214.852 153.991C233.467 161.725 251.493 170.785 269.814 178.961C278.863 183.012 288.06 186.842 297.405 190.23C306.896 193.692 316.755 197.08 326.835 198.185C335.59 199.216 344.935 198.038 352.366 192.882C355.75 190.525 358.62 187.431 360.459 183.749C362.372 179.992 363.255 175.72 363.181 171.522C363.181 162.83 359.282 154.802 353.543 148.394C347.289 141.396 339.049 136.535 330.514 132.778C323.23 129.538 315.725 126.886 308.294 124.013C301.01 121.214 293.873 118.268 286.81 115.027C284.529 113.996 282.248 112.965 279.967 111.86C278.937 111.344 277.98 112.965 279.011 113.48C286.662 117.016 294.388 120.404 302.187 123.571C308.735 126.149 315.284 128.654 321.832 131.158C330.587 134.546 339.343 138.45 346.7 144.416C353.175 149.719 358.693 156.79 360.606 165.04C362.519 173.142 360.827 182.275 354.867 188.315C348.908 194.355 340.152 196.712 331.838 196.565C321.832 196.417 311.973 193.177 302.628 190.009C293.284 186.842 284.161 183.159 275.185 179.255C257.232 171.448 239.721 162.609 221.695 154.875C219.561 153.918 217.354 153.034 215.22 152.15C214.264 151.708 213.749 153.549 214.852 153.991Z",fill:"#C4674E"}),H=l.a.createElement("path",{d:"M289.458 349.991C292.181 344.393 293.284 337.985 292.549 331.797C292.181 328.778 291.445 325.758 290.268 322.885C289.238 320.381 287.913 317.066 285.117 316.182C284.014 315.814 283.499 317.582 284.602 317.95C285.853 318.318 286.589 319.571 287.178 320.675C287.84 321.928 288.428 323.18 288.943 324.505C289.9 327.157 290.562 329.882 290.783 332.681C291.298 338.279 290.268 343.951 287.84 349.033C287.325 350.138 288.943 351.095 289.458 349.991Z",fill:"#C4674E"}),q=l.a.createElement("path",{d:"M319.477 184.043C319.845 172.7 324.775 161.725 332.942 153.918C333.825 153.107 332.5 151.782 331.617 152.592C323.082 160.768 318.006 172.184 317.564 183.969C317.638 185.222 319.477 185.222 319.477 184.043Z",fill:"#C4674E"}),U=l.a.createElement("path",{d:"M330.072 156.422C334.193 157.601 338.313 159 342.065 161.136C345.082 162.83 347.878 165.335 348.466 168.944C349.055 172.479 347.436 176.088 344.861 178.445C342.139 181.023 338.313 182.202 334.634 182.496C329.557 182.865 324.554 181.465 319.698 180.066C318.594 179.771 318.079 181.539 319.183 181.834C327.718 184.338 337.945 186.474 345.523 180.287C348.466 177.856 350.453 174.1 350.379 170.196C350.379 166.145 348.025 162.904 344.861 160.694C342.948 159.368 340.814 158.337 338.681 157.453C336.032 156.348 333.31 155.391 330.514 154.581C329.41 154.286 328.969 156.054 330.072 156.422Z",fill:"#C4674E"}),D=l.a.createElement("path",{d:"M297.037 242.526C297.405 230.373 302.702 218.662 311.458 210.265C312.341 209.455 311.016 208.129 310.133 208.939C301.01 217.63 295.565 229.857 295.124 242.526C295.124 243.705 296.963 243.705 297.037 242.526Z",fill:"#C4674E"}),W=l.a.createElement("path",{d:"M308.441 212.916C312.782 214.168 317.196 215.715 321.17 217.925C324.48 219.766 327.571 222.491 328.159 226.469C328.674 230.225 326.982 234.056 324.26 236.56C321.243 239.359 317.123 240.611 313.15 240.906C307.705 241.274 302.408 239.801 297.257 238.328C296.154 238.033 295.639 239.801 296.742 240.095C305.719 242.747 316.608 245.03 324.628 238.622C327.865 236.044 329.999 231.993 329.999 227.795C329.999 223.449 327.424 219.987 324.039 217.557C321.979 216.083 319.698 215.052 317.417 214.095C314.621 212.916 311.752 211.885 308.882 211.075C307.779 210.78 307.264 212.548 308.441 212.916Z",fill:"#C4674E"}),J=l.a.createElement("path",{d:"M277.171 301.82C277.539 289.666 282.837 277.955 291.592 269.558C292.475 268.748 291.151 267.422 290.268 268.232C281.144 276.924 275.7 289.151 275.258 301.82C275.258 302.998 277.098 302.998 277.171 301.82Z",fill:"#C4674E"}),z=l.a.createElement("path",{d:"M288.576 272.136C292.917 273.388 297.331 274.935 301.304 277.145C304.615 278.986 307.705 281.711 308.294 285.689C308.809 289.445 307.117 293.275 304.394 295.78C301.378 298.579 297.258 299.831 293.284 300.125C287.84 300.494 282.542 299.021 277.392 297.547C276.288 297.253 275.773 299.021 276.877 299.315C285.853 301.967 296.742 304.25 304.762 297.842C308 295.264 310.133 291.213 310.133 287.015C310.133 282.669 307.558 279.207 304.174 276.776C302.114 275.303 299.833 274.272 297.552 273.314C294.756 272.136 291.886 271.105 289.017 270.295C287.913 270 287.398 271.841 288.576 272.136Z",fill:"#C4674E"}),_=l.a.createElement("path",{d:"M253.553 346.529C253.847 337.395 257.821 328.557 264.442 322.222C265.325 321.412 264.001 320.086 263.118 320.896C256.128 327.525 252.008 336.88 251.714 346.455C251.714 347.707 253.553 347.707 253.553 346.529Z",fill:"#C4674E"}),G=l.a.createElement("path",{d:"M261.941 324.284C265.178 325.242 268.489 326.347 271.432 328.041C273.86 329.44 276.215 331.429 276.656 334.375C277.098 337.174 275.773 340.121 273.713 341.962C271.432 344.024 268.342 344.908 265.399 345.129C261.352 345.35 257.453 344.319 253.553 343.14C252.45 342.846 251.935 344.614 253.038 344.908C259.954 346.897 268.268 348.665 274.375 343.73C276.877 341.741 278.495 338.647 278.495 335.407C278.495 332.092 276.583 329.367 273.934 327.452C270.549 325.021 266.282 323.622 262.309 322.517C261.279 322.148 260.837 323.916 261.941 324.284Z",fill:"#C4674E"}),K=l.a.createElement("path",{d:"M485.832 267.864L479.726 246.872L474.06 267.864L453.753 274.566L474.06 281.416L479.726 304.176L486.127 281.564L505.698 274.566L485.832 267.864Z",fill:"#FFD62A"}),$=l.a.createElement("path",{d:"M147.898 106.336L141.938 85.7857L136.347 106.262L116.481 112.891L136.347 119.52L141.938 141.838L148.192 119.668L167.396 112.891L147.898 106.336Z",fill:"#FFD62A"}),Q=l.a.createElement("path",{d:"M525.416 213.874L521.737 201.205L518.279 213.874L506.066 217.851L518.279 221.976L521.737 235.75L525.563 222.123L537.409 217.851L525.416 213.874Z",fill:"#FFD62A"}),V=l.a.createElement("path",{d:"M104.783 174.467L101.177 162.093L97.7929 174.467L85.8 178.445L97.7929 182.422L101.177 195.901L104.93 182.496L116.481 178.445L104.783 174.467Z",fill:"#FFD62A"}),X=l.a.createElement("path",{d:"M337.136 15.4439L334.192 5.20567L331.397 15.4439L321.537 18.6848L331.397 21.9993L334.192 33.1214L337.283 22.0729L346.848 18.6848L337.136 15.4439Z",fill:"#FFD62A"}),Y=l.a.createElement("path",{d:"M144.881 331.503L141.938 321.264L139.142 331.503L129.283 334.817L139.142 338.132L141.938 349.18L145.029 338.205L154.593 334.817L144.881 331.503Z",fill:"#FFD62A"}),ee=function(e){var t=e.svgRef,n=e.title,a=Z(e,["svgRef","title"]);return l.a.createElement("svg",R({width:624,height:367,viewBox:"0 0 624 367",fill:"none",ref:t},a),n?l.a.createElement("title",null,n):null,T,P,B,F,H,q,U,D,W,J,z,_,G,K,$,Q,V,X,Y)},te=l.a.forwardRef((function(e,t){return l.a.createElement(ee,R({svgRef:t},e))}));n.p,n(38);function ne(e){var t,n=e.buttonText,a=e.children,r=Object(i.b)();return l.a.createElement("div",{className:"mainWrapTempl"},l.a.createElement(te,{className:"handImg"}),l.a.createElement("div",{className:"titleWrapper"},a,l.a.createElement("button",(t={type:"button",className:"mainButton"},Object(p.a)(t,"type","submit"),Object(p.a)(t,"onClick",(function(){return r(M())})),t),n)))}function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function re(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var le=l.a.createElement("path",{d:"M1440 0V900H0L1440 0Z"}),ce=function(e){var t=e.svgRef,n=e.title,a=re(e,["svgRef","title"]);return l.a.createElement("svg",ae({width:1440,height:900,viewBox:"0 0 1440 900",fill:"#fff3eb",preserveAspectRatio:"none",ref:t},a),n?l.a.createElement("title",null,n):null,le)},oe=l.a.forwardRef((function(e,t){return l.a.createElement(ce,ae({svgRef:t},e))}));n.p,n(39);function ie(){return l.a.createElement("div",{className:"gameStart"},l.a.createElement(oe,{className:"triangIcon"}),l.a.createElement(ne,{buttonText:"Start"},l.a.createElement("h2",{className:"mainTitle"},"Who wants to be a\xa0millionaire?")))}var se=n(8),ue=n(16),me=n.n(ue),Ce=n(21),fe=n(12),pe=n(22);function ve(e,t){var n=e+Math.random()*(t+1-e);return Math.floor(n)}var he=n(25);function de(e,t){for(var n=ve(0,t.length-1),a=0;e.includes(n)&&!(a>t.length);)n=ve(0,t.length-1),a++;return[].concat(Object(he.a)(e),[n]).reverse()}function be(){return(be=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ge(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ee=l.a.createElement("path",{d:"M388 36L405 36",stroke:""}),ye=l.a.createElement("path",{d:"M0 36L17 36",stroke:""}),Oe=l.a.createElement("path",{d:"M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z",fill:"",stroke:""}),we=function(e){var t=e.svgRef,n=e.title,a=ge(e,["svgRef","title"]);return l.a.createElement("svg",be({width:405,height:72,viewBox:"0 0 405 72",fill:"none",preserveAspectRatio:"none",ref:t},a),n?l.a.createElement("title",null,n):null,Ee,ye,Oe)},Le=l.a.forwardRef((function(e,t){return l.a.createElement(we,be({svgRef:t},e))}));n.p,n(41);function je(){var e=Object(i.c)(I),t=Object(r.useState)([ve(0,fe.length-1)]),n=Object(se.a)(t,2),a=n[0],c=n[1],o=fe[a[0]],s=o.question,u=o.answers,m=o.correctAnswIndex,C=Object(r.useState)(),f=Object(se.a)(C,2),p=f[0],v=f[1],h=Object(r.useState)(""),d=Object(se.a)(h,2),g=d[0],E=d[1],y=Object(i.b)(),O=function(){return y(N())},w=function(){var t=Object(Ce.a)(me.a.mark((function t(n){var r;return me.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.target.value,v(parseInt(r)),parseInt(r)!==m){t.next=12;break}return t.next=5,setTimeout((function(){return E("correct")}),500);case 5:return t.next=7,setTimeout((function(){var t,n;t=e.amount,y(A(t)),n=e.level+1,y(k(n)),c(de(a,fe)),v(),E("")}),2e3);case 7:if(e.amount!==b[b.length-1]){t.next=10;break}return t.next=10,setTimeout((function(){return O()}),2e3);case 10:t.next=16;break;case 12:return t.next=14,setTimeout((function(){return E("wrong")}),500);case 14:return t.next=16,setTimeout((function(){O(),c([]),E("")}),2e3);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"playZone"},l.a.createElement("h3",{className:"questionName"},s),l.a.createElement("form",{className:"answersWrapper"},u.map((function(e,t){return l.a.createElement("label",{className:"answerItem",key:t+e},l.a.createElement("input",{type:"radio",value:t,checked:t===p,onChange:w,className:"answButton",key:e}),l.a.createElement(Le,{className:"borderQuestIcon ".concat(t===p?g:"")}),l.a.createElement("div",{className:"answerItemTitle"},l.a.createElement("span",{className:"answerLabel"},pe[t]),l.a.createElement("p",{className:"answerName"},e)))}))))}function xe(){return(xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Se(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Ie=l.a.createElement("path",{d:"M69 20H0",stroke:""}),Me=l.a.createElement("path",{d:"M376 20H307",stroke:""}),Ne=l.a.createElement("path",{d:"M81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5H285.713C289.126 0.5 292.362 2.01597 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6376 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788Z",fill:"",stroke:""}),Ae=function(e){var t=e.svgRef,n=e.title,a=Se(e,["svgRef","title"]);return l.a.createElement("svg",xe({width:"",height:"",viewBox:"0 0 376 40",fill:"none",preserveAspectRatio:"none",ref:t},a),n?l.a.createElement("title",null,n):null,Ie,Me,Ne)},ke=l.a.forwardRef((function(e,t){return l.a.createElement(Ae,xe({svgRef:t},e))}));n.p,n(42);function Re(){var e=Object(i.c)(I).level;return l.a.createElement("ul",{className:"menu"},b.map((function(t,n){return l.a.createElement("li",{key:"menuItem"+t,className:"menuItem"},l.a.createElement("p",{className:"menuText ".concat(Ze(e,n))},"$".concat(t)),l.a.createElement(ke,{className:"menuIcons ".concat(Ze(e,n))}))})).reverse())}function Ze(e,t){return t===e?"currentLevel":t<e?"passedLevel":void 0}function Te(){return(Te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function Pe(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Be=l.a.createElement("path",{d:"M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1Z",fill:"#1C1C21"}),Fe=l.a.createElement("path",{d:"M0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7Z",fill:"#1C1C21"}),He=l.a.createElement("path",{d:"M1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H1Z",fill:"#1C1C21"}),qe=function(e){var t=e.svgRef,n=e.title,a=Pe(e,["svgRef","title"]);return l.a.createElement("svg",Te({width:16,height:14,viewBox:"0 0 16 14",fill:"none",ref:t},a),n?l.a.createElement("title",null,n):null,Be,Fe,He)},Ue=l.a.forwardRef((function(e,t){return l.a.createElement(qe,Te({svgRef:t},e))}));n.p;function De(){return(De=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function We(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Je=l.a.createElement("path",{d:"M13.364 2.05025C13.7545 1.65972 13.7545 1.02656 13.364 0.636033C12.9734 0.245508 12.3403 0.245509 11.9497 0.636033L6.99999 5.58579L2.05026 0.636061C1.65974 0.245537 1.02657 0.245537 0.63605 0.636061C0.245526 1.02659 0.245526 1.65975 0.63605 2.05028L5.58577 7L0.636033 11.9497C0.245509 12.3403 0.245508 12.9734 0.636033 13.364C1.02656 13.7545 1.65972 13.7545 2.05025 13.364L6.99999 8.41421L11.9498 13.364C12.3403 13.7545 12.9734 13.7545 13.364 13.364C13.7545 12.9735 13.7545 12.3403 13.364 11.9498L8.4142 7L13.364 2.05025Z",fill:"#1C1C21"}),ze=function(e){var t=e.svgRef,n=e.title,a=We(e,["svgRef","title"]);return l.a.createElement("svg",De({width:14,height:14,viewBox:"0 0 14 14",fill:"none",ref:t},a),n?l.a.createElement("title",null,n):null,Je)},_e=l.a.forwardRef((function(e,t){return l.a.createElement(ze,De({svgRef:t},e))}));n.p,n(43);function Ge(){var e,t,n=Object(r.useState)(!1),a=Object(se.a)(n,2),c=a[0],o=a[1],i=function(){o(!c)};return l.a.createElement("div",{className:"game"},l.a.createElement("nav",{className:"mobileMenu"},!c&&l.a.createElement("div",{className:"bamburgIcon"},l.a.createElement("button",(e={type:"button",className:"menuButton openMenuButton"},Object(p.a)(e,"type","submit"),Object(p.a)(e,"onClick",i),e),l.a.createElement(Ue,null))),c&&l.a.createElement("div",{className:"crossIcon"},l.a.createElement("button",(t={type:"button",className:"menuButton closeMenuButton"},Object(p.a)(t,"type","submit"),Object(p.a)(t,"onClick",i),t),l.a.createElement(_e,null)))),l.a.createElement(je,null),l.a.createElement("div",{className:"gameMenuWrapp ".concat(c&&"showMenu")},l.a.createElement(Re,null)))}n(44);function Ke(){var e=Object(i.c)(S);return l.a.createElement("div",{className:"gameOver"},l.a.createElement(ne,{buttonText:"Try again"},l.a.createElement("h3",{className:"secondaryTitle"},"Total score"),l.a.createElement("h2",{className:"mainTitle"},"$".concat(e," earned"))))}n(45);var $e=function(){var e=Object(i.c)(x);return l.a.createElement("div",{className:"app"},"inactive"===e&&l.a.createElement(ie,null),"active"===e&&l.a.createElement(Ge,null),"restart"===e&&l.a.createElement(Ke,null))},Qe=n(23),Ve=n.n(Qe),Xe=n(24),Ye=n.n(Xe);n(65);var et=function(){return l.a.createElement("div",{className:Ve.a.Container},l.a.createElement(Ye.a,{type:"ThreeDots",color:"#ff6c00",height:144,width:144}))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i.a,{store:L},l.a.createElement(s.a,{loading:l.a.createElement(et,null),persistor:j},l.a.createElement($e,null)))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ca77db5f.chunk.js.map