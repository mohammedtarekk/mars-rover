(this.webpackJsonprover=this.webpackJsonprover||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(6),a=n.n(s),o=n(2),i=n.n(o),u=n(5),j=n(3),h=n(0),d=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),a=Object(j.a)(s,2),o=a[0],d=a[1],l=Object(c.useState)(""),p=Object(j.a)(l,2),b=p[0],x=p[1];function v(){return(v=Object(u.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://marsroverapi.herokuapp.com/start");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d({x:n[0],y:n[1],heading:n[2],isStopped:""});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(u.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://marsroverapi.herokuapp.com/moverover/".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:1===(c=e.sent).length?x(c):(x(""),d({x:c[0],y:c[1],heading:c[2],isStopped:c[3]}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){v.apply(this,arguments)}()}),[]),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Welcome to Mars Rover!"}),Object(h.jsx)("h2",{children:"Move rover on mars"}),Object(h.jsxs)("div",{className:"instructions",children:["Type a sequence of the following instructions:",Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:"F: Move forward on current heading"}),Object(h.jsx)("li",{children:"B: Move backwards on current heading"}),Object(h.jsx)("li",{children:"L: Rotate left by 90 degrees"}),Object(h.jsx)("li",{children:"R: Rotate right by 90 degrees"})]})]}),Object(h.jsx)("input",{type:"text",placeholder:"Enter movement command",id:"commandText",value:n,onChange:function(e){return r(e.target.value)}}),Object(h.jsx)("button",{onClick:function(e){!function(){f.apply(this,arguments)}()},children:"Execute"}),Object(h.jsx)("div",{className:"result",children:"Position of Rover now is: (".concat(o.x,", ").concat(o.y,") ").concat(o.heading," ").concat(o.isStopped)}),Object(h.jsx)("div",{className:"warning",children:"".concat(b)})]})};a.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(d,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.5663eb20.chunk.js.map