(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[695],{2866:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var r,o,i,c=t(4942),a=t(1413),s=t(7762),u=t(9439),l=t(168),d=t(7225),p=d.ZP.input(r||(r=(0,l.Z)(["\n  width: inherit;\n\n  font-family: Inter;\n  font-size: 14px;\n  line-height: normal;\n  font-weight: 400;\n  letter-spacing: 0.56px;\n  border: none;\n  border-radius: 24px;\n  box-shadow: ",";\n  padding: 10px 12px;\n  outline: none;\n  background-color: ",";\n  :focus {\n    box-shadow: ",";\n  }\n  @media screen and (min-width: 768px) {\n    font-size: 20px;\n    letter-spacing: 0.8px;\n    padding: 10px 20px;\n  }\n"])),(function(n){return n.theme.boxShadow}),(function(n){return n.theme.color.cardBG}),(function(n){return n.theme.boxShadowHover})),x=d.ZP.div(o||(o=(0,l.Z)(["\n  margin-top: 24px;\n  width: 100%;\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  @media screen and (min-width: 768px) {\n    width: 608px;\n    margin-top: 40px;\n  }\n"]))),h=d.ZP.button(i||(i=(0,l.Z)(["\n  padding: 0;\n  border: none;\n  font: inherit;\n  color: inherit;\n  background-color: transparent;\n  cursor: pointer;\n\n  position: absolute;\n  top: 8px;\n  right: 12px;\n  @media screen and (min-width: 768px) {\n    top: 10px;\n    right: 20px;\n  }\n"]))),f=t(1646),g=t(7029),m=t(9899),w=t(1087),b=t(8343),Z=t(184),y=function(){var n=(0,w.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=t.get("query"),i=(0,m.aC)().currentTheme,l=function(n,e){r((function(t){var r,o={},i=(0,s.Z)(t.entries());try{for(i.s();!(r=i.n()).done;){var l=(0,u.Z)(r.value,2),d=l[0],p=l[1];o[d]=p}}catch(x){i.e(x)}finally{i.f()}return(0,a.Z)((0,a.Z)({},o),{},(0,c.Z)({},n,e))}))};return(0,Z.jsxs)(x,{children:[(0,Z.jsx)(p,{placeholder:"Search",value:o||"",onChange:function(n){return function(n){l("query",n.target.value)}(n)}}),o?(0,Z.jsx)(h,{onClick:function(){return l("query","")},children:(0,Z.jsx)(b.Z,{fill:g.Z[i].color.btnDark})}):(0,Z.jsx)(h,{onClick:function(){return l("query","")},children:(0,Z.jsx)(f.Z,{fill:g.Z[i].color.btnDark})})]})}},9695:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return S}});var r=t(4942),o=t(1413),i=t(7762),c=t(9439),a=t(5715),s=t(7029),u=t(9899),l=t(4270),d=t(6300),p=t(1779),x=t(9603),h=t(184),f=function(n){var e=n.newsList;return(0,h.jsx)(p.IH,{children:e.map((function(n){return(0,h.jsxs)(p.ns,{children:[(0,h.jsx)(p.Ae,{}),(0,h.jsxs)(p.Zb,{children:[(0,h.jsx)(p.Oq,{children:(0,h.jsx)(p.Ee,{src:n.imgUrl,onError:function(n){n.target.src="https://loremflickr.com/400/252"}})}),(0,h.jsxs)(p.$4,{children:[(0,h.jsxs)(p.dk,{children:[(0,h.jsx)(p.ll,{children:n.title}),(0,h.jsx)(p.SK,{children:n.text})]}),(0,h.jsxs)(p.im,{children:[(0,h.jsx)(p.Vw,{children:(0,x.ZP)(n.date,"dd/mm/yyyy")}),(0,h.jsx)(p.yL,{target:"_blank",href:n.url,children:"Read more"})]})]})]})]},n._id)}))})},g=t(2791),m=t(8711),w=t(2866),b=t(3853),Z=t(1087),y=t(2853),v=t(5662),j=t(2752),k=t(4616),P=t(1802),q=t(347),z=t(3006),S=function(){var n=(0,g.useState)(null),e=(0,c.Z)(n,2),t=e[0],p=e[1],x=(0,u.aC)().currentTheme,S=(0,g.useState)([]),C=(0,c.Z)(S,2),D=C[0],N=C[1],L=(0,g.useState)(null),_=(0,c.Z)(L,2),E=_[0],O=_[1],T=(0,Z.lr)(),M=(0,c.Z)(T,2),H=M[0],I=M[1],K=H.get("query"),A=H.get("page");(0,g.useEffect)((function(){0===D.length&&p(!0)}),[D]),(0,g.useEffect)((function(){p(null),(0,y.getNews)({page:A,limit:6,query:K||""}).then((function(n){var e=n.totalNews,t=n.news;N(t),O(e)})).catch((function(n){return p(n)}))}),[A,K]);return(0,h.jsxs)(d.hs,{children:[(0,h.jsx)(l.q,{children:(0,h.jsx)("title",{children:"News"})}),(0,h.jsx)(a.Z,{color:s.Z[x].color.secondary,children:"News"}),(0,h.jsx)(w.Z,{}),t&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{children:"Ooops! Nothing found :("}),(0,h.jsx)(b.KT,{srcSet:"".concat(v," 280w, ").concat(j," 560w, ").concat(k," 704w, ").concat(P," 1408w, ").concat(q," 822w, ").concat(z," 1644w"),sizes:"(min-width: 1280px) 1644px, (min-width: 1280px) 822px, (min-width: 768px) 1408px, (min-width: 768px) 704px,  100vw",alt:"not found page",loading:"lazy"})]}),!t&&(0,h.jsx)(f,{newsList:D}),!t&&(0,h.jsx)(m.t,{currentPage:A,totalPages:Math.ceil(E/6),onPageChange:function(n){return e="page",t=n,void I((function(n){var a,s={},u=(0,i.Z)(n.entries());try{for(u.s();!(a=u.n()).done;){var l=(0,c.Z)(a.value,2),d=l[0],p=l[1];s[d]=p}}catch(x){u.e(x)}finally{u.f()}return(0,o.Z)((0,o.Z)({},s),{},(0,r.Z)({},e,t))}));var e,t},paginationLength:6})]})}},6300:function(n,e,t){"use strict";t.d(e,{Px:function(){return p},hs:function(){return d},lT:function(){return f},pr:function(){return h},zY:function(){return x}});var r,o,i,c,a,s=t(168),u=t(1087),l=t(7225),d=l.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 20px;\n  align-items: center;\n\n  @media screen and (min-width: 768px) {\n    padding: 0 32px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding: 0 16px;\n  }\n"]))),p=l.ZP.div(o||(o=(0,s.Z)(["\n  margin-top: 43px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]))),x=l.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  column-gap: 12px;\n"]))),h=(0,l.ZP)(u.OL)(c||(c=(0,s.Z)(["\n  @media screen and (max-width: 767px) {\n    display: none;\n  }\n  display: flex;\n\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 0.64px;\n\n  width: 129px;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 8px 8px;\n  gap: 8px;\n  font-weight: 700;\n\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 40px;\n  border: 2px solid ",";\n\n  ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.color.btnDark}),(function(n){var e=n.theme;return n.transparent?"color: ".concat(e.color.btnDark,"; background-color: transparent;"):"color: ".concat(e.color.background,"; background: ").concat(e.color.btnDark)}),(function(n){return n.theme.color.gradient}),(function(n){return n.theme.color.background}),(function(n){return n.theme.boxShadow})),f=(0,l.ZP)(u.OL)(a||(a=(0,s.Z)(["\n  display: flex;\n  font-family: Manrope;\n  font-size: 16px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  letter-spacing: 0.64px;\n  width: 129px;\n  height: 40px;\n  box-sizing: border-box;\n  padding: 8px 8px;\n  gap: 8px;\n  font-weight: 700;\n  justify-content: center;\n  align-items: center;\n  border-radius: 40px;\n  border: 2px solid ",";\n\n  ",";\n\n  &:hover {\n    background: ",";\n    color: ",";\n  }\n\n  display: flex;\n  flex-direction: column-reverse;\n  width: 80px;\n  height: 80px;\n  position: absolute;\n  font-size: 12px;\n  top: 55%;\n  right: 5%;\n\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"])),(function(n){return n.theme.color.btnDark}),(function(n){var e=n.theme;return n.transparent?"color: ".concat(e.color.btnDark,"; background-color: transparent;"):"color: ".concat(e.color.background,"; background: ").concat(e.color.btnDark)}),(function(n){return n.theme.color.gradient}),(function(n){return n.theme.color.background}))},9186:function(n,e,t){"use strict";t.r(e),t.d(e,{getNews:function(){return c}});var r=t(4165),o=t(5861),i=t(1243),c=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o,c,a,s;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.page,o=e.limit,c=e.query,a=void 0===c?"":c,n.next=3,i.Z.get("api/news?query=".concat(a,"&page=").concat(t,"&limit=").concat(o));case 3:return s=n.sent,n.abrupt("return",s.data);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},2853:function(n,e,t){var r=t(9186).getNews;n.exports={getNews:r}}}]);
//# sourceMappingURL=695.dd1ca3a7.chunk.js.map