(()=>{"use strict";var n,A={756:(n,A,r)=>{r.d(A,{Z:()=>B});var t=r(537),e=r.n(t),i=r(645),a=r.n(i),o=r(667),p=r.n(o),d=new URL(r(236),r.b),l=a()(e());l.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap);"]);var C=p()(d);l.push([n.id,`*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: "Montserrat";\n}\n\na, button, input, input[type='text'], textarea {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/* Skip-link */\n\n.skip-link {\n\tposition: absolute;\n\ttop: -45px;\n\tleft: 0;\n  background-color: #405F8D;\n\tcolor: white;\n\tpadding: 10px;\n  border-radius: 5px;\n\tfont-size: 15px;\n\tz-index: 100;\n\ttext-decoration: none\n}\n.skip-link:focus {\n\ttop: 0;\n}\n\n/* Navbar */\n\n.navbar {\n  width: 100%;\n  margin-inline: auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: white;\n  top: 0;\n  gap: 50%;\n\n  padding-block: 1rem;\n  z-index: 999;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.logo img{\n  width: 60px;\n  border-radius: 50px;\n}\n\n.logo a{\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 10px;\n  color: black;\n  letter-spacing: 2.5px;\n}\n\n\nnav ul {\n  padding: auto;\n  display: flex;\n  gap: 2rem 1rem;\n}\n\nnav li {\n  list-style-type: none;\n}\n\nnav li a {\n  text-decoration: none;\n  font-size: 1.05rem;\n  font-weight: 500;\n  color: black;\n  padding: .5rem 1.5rem;\n}\n\n/* Toggle/Hamburger */\n\n.hamburger{\n  display: none;\n  background-color: white;\n  border: 0px;\n  width: 44px;\n  height: 44px;\n}\n.hamburger div {\n  width: 34px;\n  height: 5px;\n  background-color: #405F8D;\n  border-radius: 5px;\n  margin: 5px;\n  transition: all 0.3s ease;\n}\n\n\n/***Toggle Line Burger***/\n.toggle .line1 {\n  transform: rotateZ(-405deg) translate(-8px, 6px);\n}\n\n.toggle .line2 {\n  opacity: 0;\n}\n\n.toggle .line3 {\n  transform: rotateZ(405deg) translate(-8px, -6px);\n}\n\n\n\n/***Keyframe Animation Slider***/\n@keyframes navLinkFade{\n  from{\n      opacity: 0;\n      transform: translateX(50px);\n  }\n  to{\n      opacity: 1;\n      transform: translateX(0px);\n  }\n}\n\n/* Hero/Jumbotron */\n\n.hero {\n  align-items: center;\n  min-height: 500px;\n  min-width: 1000px;\n  padding: 200px;\n  background: url(${C}), linear-gradient(0deg, rgba(0, 0, 0, 0.50) 100%, rgba(0, 0, 0, 0.50) 0%), lightgray 50%/ cover no-repeat;\n  background-position: bottom;\n  object-fit: fill;\n  color: white;\n}\n\n.hero p {\n  font-size: 2.5rem;\n  font-weight: 500px;\n}\n\n.hero h1 {\n  font-size: 4rem;\n  margin-block: 1rem;\n}\n\n\n/* Latest */\n\n.latest {\n  text-align: center;\n}\n\n.latest-label {\n  color: black;\n  font-size: 18px;\n  font-weight: bolder;\n  letter-spacing: 1.5px;\n  padding: 20px;\n  border: dotted 2px rgba(0, 0, 0, 0.034);\n  border-width: 50%;\n}\n\n.latest-label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 3px solid rgba(0, 0, 0, 0.034);\n}\n\n\n/*** Post ***/\nmain {\n  width: 100%;\n  min-height: 100vh;\n  margin: auto;\n  max-width: 1300px;\n}\n\n.post {\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1200px;\n}\n\n/*** Post Item ***/\n\n.card {\n  margin: 20px;\n  width: 30%;\n  height: auto;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n  background-color: white;\n  border: solid rgba(107, 103, 103, 0.185) 1px;\n}\n\n.content {\n  padding: 20px;\n}\n\n/* Post Location */\n\n.location {\n  position: absolute;\n  color: #405F8D;\n  margin-top: 8px;\n  margin-left: 8px;\n  padding: 6px;\n\n  font-weight: 500;\n  font-size: 14px;\n  background-color: white;\n  border-radius: 6px;\n}\n\n.card .thumbnail {\n  width: 100%;\n  padding: 11px;\n  border-radius: 20px 20px 0px 0px;\n  height: 200px;\n}\n\n.rating {\n  font-weight: 500;\n  font-size: 13px;\n  color: white;\n  background-color: #405F8D;\n  max-width: 103px;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: left;\n  margin-top: -10px;\n}\n\n.title {\n  font-weight: 700;\n  font-size: 20px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.card .description {\n  margin-top: 10px ;\n  font-size: 12px;\n  line-height: 1.5em;\n  text-align: justify;\n}\n\n.detail-a {\n  margin-top: 20px;\n  padding: 14px 20px;\n  background-color: #405F8D;\n  color: #fff;\n  text-decoration: none;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.detail-a:hover {\n  background-color: white;\n  color: #405F8D;\n  outline: 1px solid #405F8D;\n}\n\n.restaurants {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* Footer */\n\nfooter{\n  margin-top: 20px;\n  padding: 20px;\n  width: 100%;\n  color: white;\n  background-color: #405F8D;\n  text-align: center;\n  font-weight: bold;\n}\n\n.restaurant-empty {\n  align-items: center;\n  padding: 50px;\n}\n\n/* detail */\n.detail_item {\n  padding: 10px;\n  display: flex;\n  flex: 2 1;\n}\n.detail_header {\n  padding-top: 100px;\n}\n.detail_info {\n  padding: 20px;\n  margin: 10px;\n  gap: 1rem;\n  text-align: justify;\n}\n.detail_info h3 {\n  font-size: 26px;\n}\n.detail_info h4 {\n  margin-top: 10px;\n  gap: 1rem;\n}\n.detail_info p {\n  margin-top: 5px;\n}\n.detail_name {\n  letter-spacing: 2px;\n  font-weight: 600;\n  padding-top: 10px;\n  padding-bottom: 30px;\n  font-size: 30px;\n  text-align: center;\n}\n.detail_poster {\n  border-radius: 20px;\n  width: 50%;\n  height: 30%;\n  display: flex;\n  align-self: center;\n}\n.detail_review {\n  background-color: #405F8D;\n  border-radius: 20px;\n  margin-top: 10px;\n  padding: 10px;\n}\n.detail_review h3 {\n  color: white;\n  padding: 10px;\n}\n\n.detail_review_item {\n  background-color: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin: 10px;\n}\n.detail_review_item h4 {\n  margin-top: 10px;\n}\n.detail_description {\n  text-align: justify;\n  padding: 10px;\n  margin: 10px;\n  line-height: 25px;\n}\n\n.content__heading {\n  text-align: center;\n}\n\n/* like */\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #405F8D;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  margin-right: 20px;\n  margin-bottom: 30px;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}`,"",{version:3,sources:["webpack://./src/styles/main.css"],names:[],mappings:"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AAEA;EACE,mBAAmB;EACnB,aAAa;AACf;;AAEA,WAAW;AACX;EACE,aAAa;EACb,aAAa;EACb,SAAS;AACX;AACA;EACE,kBAAkB;AACpB;AACA;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,SAAS;AACX;AACA;EACE,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,mBAAmB;EACnB,UAAU;EACV,WAAW;EACX,aAAa;EACb,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;AACf;AACA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;AACd;AACA;EACE,gBAAgB;AAClB;AACA;EACE,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,SAAS;;AAET;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;;EAEzB,eAAe;EACf,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,SAAS;;EAET,kBAAkB;EAClB,mBAAmB;;EAEnB,eAAe;EACf,YAAY;EACZ,eAAe;AACjB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');\n\n*, *::before, *::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  font-family: \"Montserrat\";\n}\n\na, button, input, input[type='text'], textarea {\n  display: inline-block;\n  min-width: 44px;\n  min-height: 44px;\n}\n\n/* Skip-link */\n\n.skip-link {\n\tposition: absolute;\n\ttop: -45px;\n\tleft: 0;\n  background-color: #405F8D;\n\tcolor: white;\n\tpadding: 10px;\n  border-radius: 5px;\n\tfont-size: 15px;\n\tz-index: 100;\n\ttext-decoration: none\n}\n.skip-link:focus {\n\ttop: 0;\n}\n\n/* Navbar */\n\n.navbar {\n  width: 100%;\n  margin-inline: auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: white;\n  top: 0;\n  gap: 50%;\n\n  padding-block: 1rem;\n  z-index: 999;\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.logo img{\n  width: 60px;\n  border-radius: 50px;\n}\n\n.logo a{\n  text-decoration: none;\n  font-weight: 500;\n  font-size: 30px;\n  text-align: center;\n  margin-top: 10px;\n  color: black;\n  letter-spacing: 2.5px;\n}\n\n\nnav ul {\n  padding: auto;\n  display: flex;\n  gap: 2rem 1rem;\n}\n\nnav li {\n  list-style-type: none;\n}\n\nnav li a {\n  text-decoration: none;\n  font-size: 1.05rem;\n  font-weight: 500;\n  color: black;\n  padding: .5rem 1.5rem;\n}\n\n/* Toggle/Hamburger */\n\n.hamburger{\n  display: none;\n  background-color: white;\n  border: 0px;\n  width: 44px;\n  height: 44px;\n}\n.hamburger div {\n  width: 34px;\n  height: 5px;\n  background-color: #405F8D;\n  border-radius: 5px;\n  margin: 5px;\n  transition: all 0.3s ease;\n}\n\n\n/***Toggle Line Burger***/\n.toggle .line1 {\n  transform: rotateZ(-405deg) translate(-8px, 6px);\n}\n\n.toggle .line2 {\n  opacity: 0;\n}\n\n.toggle .line3 {\n  transform: rotateZ(405deg) translate(-8px, -6px);\n}\n\n\n\n/***Keyframe Animation Slider***/\n@keyframes navLinkFade{\n  from{\n      opacity: 0;\n      transform: translateX(50px);\n  }\n  to{\n      opacity: 1;\n      transform: translateX(0px);\n  }\n}\n\n/* Hero/Jumbotron */\n\n.hero {\n  align-items: center;\n  min-height: 500px;\n  min-width: 1000px;\n  padding: 200px;\n  background: url(\"../public/images/heros/hero-image_large.jpg\"), linear-gradient(0deg, rgba(0, 0, 0, 0.50) 100%, rgba(0, 0, 0, 0.50) 0%), lightgray 50%/ cover no-repeat;\n  background-position: bottom;\n  object-fit: fill;\n  color: white;\n}\n\n.hero p {\n  font-size: 2.5rem;\n  font-weight: 500px;\n}\n\n.hero h1 {\n  font-size: 4rem;\n  margin-block: 1rem;\n}\n\n\n/* Latest */\n\n.latest {\n  text-align: center;\n}\n\n.latest-label {\n  color: black;\n  font-size: 18px;\n  font-weight: bolder;\n  letter-spacing: 1.5px;\n  padding: 20px;\n  border: dotted 2px rgba(0, 0, 0, 0.034);\n  border-width: 50%;\n}\n\n.latest-label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 3px solid rgba(0, 0, 0, 0.034);\n}\n\n\n/*** Post ***/\nmain {\n  width: 100%;\n  min-height: 100vh;\n  margin: auto;\n  max-width: 1300px;\n}\n\n.post {\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 1200px;\n}\n\n/*** Post Item ***/\n\n.card {\n  margin: 20px;\n  width: 30%;\n  height: auto;\n  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 20px;\n  background-color: white;\n  border: solid rgba(107, 103, 103, 0.185) 1px;\n}\n\n.content {\n  padding: 20px;\n}\n\n/* Post Location */\n\n.location {\n  position: absolute;\n  color: #405F8D;\n  margin-top: 8px;\n  margin-left: 8px;\n  padding: 6px;\n\n  font-weight: 500;\n  font-size: 14px;\n  background-color: white;\n  border-radius: 6px;\n}\n\n.card .thumbnail {\n  width: 100%;\n  padding: 11px;\n  border-radius: 20px 20px 0px 0px;\n  height: 200px;\n}\n\n.rating {\n  font-weight: 500;\n  font-size: 13px;\n  color: white;\n  background-color: #405F8D;\n  max-width: 103px;\n  padding: 5px;\n  border-radius: 5px;\n  text-align: left;\n  margin-top: -10px;\n}\n\n.title {\n  font-weight: 700;\n  font-size: 20px;\n  margin-top: 20px;\n  text-align: center;\n}\n\n.card .description {\n  margin-top: 10px ;\n  font-size: 12px;\n  line-height: 1.5em;\n  text-align: justify;\n}\n\n.detail-a {\n  margin-top: 20px;\n  padding: 14px 20px;\n  background-color: #405F8D;\n  color: #fff;\n  text-decoration: none;\n  border: none;\n  border-radius: 4px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.detail-a:hover {\n  background-color: white;\n  color: #405F8D;\n  outline: 1px solid #405F8D;\n}\n\n.restaurants {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* Footer */\n\nfooter{\n  margin-top: 20px;\n  padding: 20px;\n  width: 100%;\n  color: white;\n  background-color: #405F8D;\n  text-align: center;\n  font-weight: bold;\n}\n\n.restaurant-empty {\n  align-items: center;\n  padding: 50px;\n}\n\n/* detail */\n.detail_item {\n  padding: 10px;\n  display: flex;\n  flex: 2 1;\n}\n.detail_header {\n  padding-top: 100px;\n}\n.detail_info {\n  padding: 20px;\n  margin: 10px;\n  gap: 1rem;\n  text-align: justify;\n}\n.detail_info h3 {\n  font-size: 26px;\n}\n.detail_info h4 {\n  margin-top: 10px;\n  gap: 1rem;\n}\n.detail_info p {\n  margin-top: 5px;\n}\n.detail_name {\n  letter-spacing: 2px;\n  font-weight: 600;\n  padding-top: 10px;\n  padding-bottom: 30px;\n  font-size: 30px;\n  text-align: center;\n}\n.detail_poster {\n  border-radius: 20px;\n  width: 50%;\n  height: 30%;\n  display: flex;\n  align-self: center;\n}\n.detail_review {\n  background-color: #405F8D;\n  border-radius: 20px;\n  margin-top: 10px;\n  padding: 10px;\n}\n.detail_review h3 {\n  color: white;\n  padding: 10px;\n}\n\n.detail_review_item {\n  background-color: white;\n  border-radius: 20px;\n  padding: 20px;\n  margin: 10px;\n}\n.detail_review_item h4 {\n  margin-top: 10px;\n}\n.detail_description {\n  text-align: justify;\n  padding: 10px;\n  margin: 10px;\n  line-height: 25px;\n}\n\n.content__heading {\n  text-align: center;\n}\n\n/* like */\n\n.like {\n  width: 55px;\n  height: 55px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #405F8D;\n  \n  position: fixed;\n  bottom: 16px;\n  right: 16px;\n  border-radius: 50%;\n  border: 0;\n  \n  margin-right: 20px;\n  margin-bottom: 30px;\n\n  font-size: 18px;\n  color: white;\n  cursor: pointer;\n}"],sourceRoot:""}]);const B=l},948:(n,A,r)=>{r.d(A,{Z:()=>o});var t=r(537),e=r.n(t),i=r(645),a=r.n(i)()(e());a.push([n.id,"@media screen and (max-width:1200px) {\n    body, html {\n        position: relative;\n        overflow-x: hidden;\n    }\n    .navbar{\n        width: 100%;\n    }\n    .logo{\n        margin-left: 30px;\n    }\n    .nav_list{\n        margin-left: -20%;\n    }\n    .hero{\n        width: 100%;\n    }\n\n    .hero h1{\n        width: fit-content;\n    }\n    .hero p{\n        width: fit-content;\n    }\n    main {\n        width: 100%;\n        margin: 0 auto;\n    }\n\n    .card {\n        margin: 10px auto 10px auto;\n        width: 30%;\n        height: auto;\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\n        border-radius: 20px;\n        background-color: white;\n    }\n\n}\n\n/* Ipad Air */\n@media screen and (max-width: 820px) {\n    body, html {\n        position: relative;\n        overflow-x: hidden;\n    }\n    .nav_list li a {\n        color: white;\n        font-size: 20px;\n    }\n    .nav_list {\n        width: 30%;\n        height: 35vh;\n        position: absolute;\n        right: 0px;\n        top: 92px;\n        line-height: 60px;\n        align-items: center;\n        padding: 20px;\n        border-radius: 0 0 0 20px;\n        background-color: #405F8D;\n        display: inline-block;\n        flex-direction: column;\n        transform: translateX(100%);\n        transition: transform 0.5s ease-in;\n    }\n\n    \n    .hamburger{\n        display: block;\n        margin-left: -53%;        \n    }\n    .thumbnail {\n        width: 100%;\n        height: auto;\n    }\n    .nav-active{\n        transform: translateX(0%);\n    }\n\n}\n\n/* Ipad Mini (768) */\n@media screen and (max-width: 770px) {\n    main {\n        width: 100%;\n        margin: 0 auto\n    \n    }\n    .card {\n        margin: 10px auto 10px auto;\n        width: 48%;\n        height: auto;\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\n        border-radius: 20px;\n        background-color: white;\n    }\n    .thumbnail {\n        width: 100%;\n        height: auto;\n    }\n    .nav-active{\n        transform: translateX(0%);\n    }\n}\n\n\n@media screen and (max-width:500px) {\n    body, html {\n        position: relative;\n        overflow-x: hidden;\n    }\n    .nav_list li a {\n        color: white;\n        font-size: 20px;\n    }\n    .nav_list {\n        width: 50%;\n        height: 40vh;\n        position: absolute;\n        right: 0px;\n        top: 92px;\n        line-height: 50px;\n        align-items: center;\n        padding: 20px;\n        border-radius: 0 0 0 20px;\n        background-color: #405F8D;\n        display: flex;\n        flex-direction: column;\n        transition: transform 0.5s ease-in;\n\n    }\n    \n    .hamburger{\n        display: block;\n        margin-left: -90%;\n    }\n    .hero{\n        width: 100%;\n        padding-left: 50px;\n    }\n    .hero p{\n        font-size: 26px;\n    }\n    .hero h1{\n        font-size: 30px;\n    }\n    .card {\n        margin: 10px auto 10px auto;\n        width: 67%;\n        height: auto;\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\n        border-radius: 20px;\n        background-color: white;\n    }\n}\n\n/* Samsung Galaxy A51/A71 */\n@media screen and (max-width:412px) {\n    body, html {\n        position: relative;\n        overflow-x: hidden;\n    }\n    .hero{\n        width: 100%;\n        padding-left: 20px;\n    }\n    .hero p{\n        font-size: 26px;\n    }\n    .hero h1{\n        font-size: 28px;\n    }\n    .hamburger{\n        display: block;\n        margin-left: -95%;\n    }\n    .card {\n        margin: 10px auto 10px auto;\n        width: 80%;\n        height: auto;\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\n        border-radius: 20px;\n        background-color: white;\n    }\n\n    \n}\n\n/* Iphone 12 Pro */\n@media screen and (max-width:390px){\n    .hero{\n        width: 100%;\n        padding-left: 20px;\n    }\n    .hero p{\n        font-size: 24px;\n    }\n    .hero h1{\n        font-size: 26px;\n    }\n    .hamburger{\n        display: block;\n    }\n}\n\n","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;QACI,kBAAkB;QAClB,kBAAkB;IACtB;IACA;QACI,WAAW;IACf;IACA;QACI,iBAAiB;IACrB;IACA;QACI,iBAAiB;IACrB;IACA;QACI,WAAW;IACf;;IAEA;QACI,kBAAkB;IACtB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,WAAW;QACX,cAAc;IAClB;;IAEA;QACI,2BAA2B;QAC3B,UAAU;QACV,YAAY;QACZ,0CAA0C;QAC1C,mBAAmB;QACnB,uBAAuB;IAC3B;;AAEJ;;AAEA,aAAa;AACb;IACI;QACI,kBAAkB;QAClB,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,eAAe;IACnB;IACA;QACI,UAAU;QACV,YAAY;QACZ,kBAAkB;QAClB,UAAU;QACV,SAAS;QACT,iBAAiB;QACjB,mBAAmB;QACnB,aAAa;QACb,yBAAyB;QACzB,yBAAyB;QACzB,qBAAqB;QACrB,sBAAsB;QACtB,2BAA2B;QAC3B,kCAAkC;IACtC;;;IAGA;QACI,cAAc;QACd,iBAAiB;IACrB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,yBAAyB;IAC7B;;AAEJ;;AAEA,oBAAoB;AACpB;IACI;QACI,WAAW;QACX;;IAEJ;IACA;QACI,2BAA2B;QAC3B,UAAU;QACV,YAAY;QACZ,0CAA0C;QAC1C,mBAAmB;QACnB,uBAAuB;IAC3B;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,yBAAyB;IAC7B;AACJ;;;AAGA;IACI;QACI,kBAAkB;QAClB,kBAAkB;IACtB;IACA;QACI,YAAY;QACZ,eAAe;IACnB;IACA;QACI,UAAU;QACV,YAAY;QACZ,kBAAkB;QAClB,UAAU;QACV,SAAS;QACT,iBAAiB;QACjB,mBAAmB;QACnB,aAAa;QACb,yBAAyB;QACzB,yBAAyB;QACzB,aAAa;QACb,sBAAsB;QACtB,kCAAkC;;IAEtC;;IAEA;QACI,cAAc;QACd,iBAAiB;IACrB;IACA;QACI,WAAW;QACX,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,2BAA2B;QAC3B,UAAU;QACV,YAAY;QACZ,0CAA0C;QAC1C,mBAAmB;QACnB,uBAAuB;IAC3B;AACJ;;AAEA,2BAA2B;AAC3B;IACI;QACI,kBAAkB;QAClB,kBAAkB;IACtB;IACA;QACI,WAAW;QACX,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,cAAc;QACd,iBAAiB;IACrB;IACA;QACI,2BAA2B;QAC3B,UAAU;QACV,YAAY;QACZ,0CAA0C;QAC1C,mBAAmB;QACnB,uBAAuB;IAC3B;;;AAGJ;;AAEA,kBAAkB;AAClB;IACI;QACI,WAAW;QACX,kBAAkB;IACtB;IACA;QACI,eAAe;IACnB;IACA;QACI,eAAe;IACnB;IACA;QACI,cAAc;IAClB;AACJ",sourcesContent:["@media screen and (max-width:1200px) {\r\n    body, html {\r\n        position: relative;\r\n        overflow-x: hidden;\r\n    }\r\n    .navbar{\r\n        width: 100%;\r\n    }\r\n    .logo{\r\n        margin-left: 30px;\r\n    }\r\n    .nav_list{\r\n        margin-left: -20%;\r\n    }\r\n    .hero{\r\n        width: 100%;\r\n    }\r\n\r\n    .hero h1{\r\n        width: fit-content;\r\n    }\r\n    .hero p{\r\n        width: fit-content;\r\n    }\r\n    main {\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .card {\r\n        margin: 10px auto 10px auto;\r\n        width: 30%;\r\n        height: auto;\r\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\r\n        border-radius: 20px;\r\n        background-color: white;\r\n    }\r\n\r\n}\r\n\r\n/* Ipad Air */\r\n@media screen and (max-width: 820px) {\r\n    body, html {\r\n        position: relative;\r\n        overflow-x: hidden;\r\n    }\r\n    .nav_list li a {\r\n        color: white;\r\n        font-size: 20px;\r\n    }\r\n    .nav_list {\r\n        width: 30%;\r\n        height: 35vh;\r\n        position: absolute;\r\n        right: 0px;\r\n        top: 92px;\r\n        line-height: 60px;\r\n        align-items: center;\r\n        padding: 20px;\r\n        border-radius: 0 0 0 20px;\r\n        background-color: #405F8D;\r\n        display: inline-block;\r\n        flex-direction: column;\r\n        transform: translateX(100%);\r\n        transition: transform 0.5s ease-in;\r\n    }\r\n\r\n    \r\n    .hamburger{\r\n        display: block;\r\n        margin-left: -53%;        \r\n    }\r\n    .thumbnail {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .nav-active{\r\n        transform: translateX(0%);\r\n    }\r\n\r\n}\r\n\r\n/* Ipad Mini (768) */\r\n@media screen and (max-width: 770px) {\r\n    main {\r\n        width: 100%;\r\n        margin: 0 auto\r\n    \r\n    }\r\n    .card {\r\n        margin: 10px auto 10px auto;\r\n        width: 48%;\r\n        height: auto;\r\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\r\n        border-radius: 20px;\r\n        background-color: white;\r\n    }\r\n    .thumbnail {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .nav-active{\r\n        transform: translateX(0%);\r\n    }\r\n}\r\n\r\n\r\n@media screen and (max-width:500px) {\r\n    body, html {\r\n        position: relative;\r\n        overflow-x: hidden;\r\n    }\r\n    .nav_list li a {\r\n        color: white;\r\n        font-size: 20px;\r\n    }\r\n    .nav_list {\r\n        width: 50%;\r\n        height: 40vh;\r\n        position: absolute;\r\n        right: 0px;\r\n        top: 92px;\r\n        line-height: 50px;\r\n        align-items: center;\r\n        padding: 20px;\r\n        border-radius: 0 0 0 20px;\r\n        background-color: #405F8D;\r\n        display: flex;\r\n        flex-direction: column;\r\n        transition: transform 0.5s ease-in;\r\n\r\n    }\r\n    \r\n    .hamburger{\r\n        display: block;\r\n        margin-left: -90%;\r\n    }\r\n    .hero{\r\n        width: 100%;\r\n        padding-left: 50px;\r\n    }\r\n    .hero p{\r\n        font-size: 26px;\r\n    }\r\n    .hero h1{\r\n        font-size: 30px;\r\n    }\r\n    .card {\r\n        margin: 10px auto 10px auto;\r\n        width: 67%;\r\n        height: auto;\r\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\r\n        border-radius: 20px;\r\n        background-color: white;\r\n    }\r\n}\r\n\r\n/* Samsung Galaxy A51/A71 */\r\n@media screen and (max-width:412px) {\r\n    body, html {\r\n        position: relative;\r\n        overflow-x: hidden;\r\n    }\r\n    .hero{\r\n        width: 100%;\r\n        padding-left: 20px;\r\n    }\r\n    .hero p{\r\n        font-size: 26px;\r\n    }\r\n    .hero h1{\r\n        font-size: 28px;\r\n    }\r\n    .hamburger{\r\n        display: block;\r\n        margin-left: -95%;\r\n    }\r\n    .card {\r\n        margin: 10px auto 10px auto;\r\n        width: 80%;\r\n        height: auto;\r\n        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);\r\n        border-radius: 20px;\r\n        background-color: white;\r\n    }\r\n\r\n    \r\n}\r\n\r\n/* Iphone 12 Pro */\r\n@media screen and (max-width:390px){\r\n    .hero{\r\n        width: 100%;\r\n        padding-left: 20px;\r\n    }\r\n    .hero p{\r\n        font-size: 24px;\r\n    }\r\n    .hero h1{\r\n        font-size: 26px;\r\n    }\r\n    .hamburger{\r\n        display: block;\r\n    }\r\n}\r\n\r\n"],sourceRoot:""}]);const o=a},46:(n,A,r)=>{var t=r(379),e=r.n(t),i=r(795),a=r.n(i),o=r(569),p=r.n(o),d=r(565),l=r.n(d),C=r(216),B=r.n(C),g=r(589),s=r.n(g),x=r(756),h={};h.styleTagTransform=s(),h.setAttributes=l(),h.insert=p().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=B(),e()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals},362:(n,A,r)=>{var t=r(379),e=r.n(t),i=r(795),a=r.n(i),o=r(569),p=r.n(o),d=r(565),l=r.n(d),C=r(216),B=r.n(C),g=r(589),s=r.n(g),x=r(948),h={};h.styleTagTransform=s(),h.setAttributes=l(),h.insert=p().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=B(),e()(x.Z,h),x.Z&&x.Z.locals&&x.Z.locals}},r={};function t(n){var e=r[n];if(void 0!==e)return e.exports;var i=r[n]={id:n,exports:{}};return A[n](i,i.exports,t),i.exports}t.m=A,n=[],t.O=(A,r,e,i)=>{if(!r){var a=1/0;for(l=0;l<n.length;l++){for(var[r,e,i]=n[l],o=!0,p=0;p<r.length;p++)(!1&i||a>=i)&&Object.keys(t.O).every((n=>t.O[n](r[p])))?r.splice(p--,1):(o=!1,i<a&&(a=i));if(o){n.splice(l--,1);var d=e();void 0!==d&&(A=d)}}return A}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,e,i]},t.n=n=>{var A=n&&n.__esModule?()=>n.default:()=>n;return t.d(A,{a:A}),A},t.d=(n,A)=>{for(var r in A)t.o(A,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:A[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,A)=>Object.prototype.hasOwnProperty.call(n,A),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var A=t.g.document;if(!n&&A&&(A.currentScript&&(n=A.currentScript.src),!n)){var r=A.getElementsByTagName("script");if(r.length)for(var e=r.length-1;e>-1&&!n;)n=r[e--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),(()=>{t.b=document.baseURI||self.location.href;var n={954:0};t.O.j=A=>0===n[A];var A=(A,r)=>{var e,i,[a,o,p]=r,d=0;if(a.some((A=>0!==n[A]))){for(e in o)t.o(o,e)&&(t.m[e]=o[e]);if(p)var l=p(t)}for(A&&A(r);d<a.length;d++)i=a[d],t.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return t.O(l)},r=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];r.forEach(A.bind(null,0)),r.push=A.bind(null,r.push.bind(r))})(),t.nc=void 0;var e=t.O(void 0,[192,2,193,337,268],(()=>t(253)));e=t.O(e)})();
//# sourceMappingURL=app~d1658f4b.bundle.js.map