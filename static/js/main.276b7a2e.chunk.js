(this.webpackJsonpnewsmoney=this.webpackJsonpnewsmoney||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(12),r=a.n(s),l=(a(19),a(4)),i=(a(20),a(5)),o=a(6),j=a(8),b=a(7),d=a(0),h=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.ChangeMode,a=e.bgColor,c=e.DarkText,n=e.TextColor;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(a," bg-").concat(a," sticky-top"),children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)("a",{className:"navbar-brand",children:"NewsMoney"}),Object(d.jsx)("button",{style:{boxShadow:"none"},className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/sports",children:"Sports"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/science",children:"Science"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/technology",children:"Technology"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/health",children:"Health"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/entertainment",children:"Entertainment"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)("a",{className:"nav-link",href:"/business",children:"Business"})})]}),Object(d.jsxs)("div",{className:"form-check form-switch",children:[Object(d.jsx)("input",{onClick:t,className:"form-check-input",type:"checkbox",style:{boxShadow:"none"},id:"flexSwitchCheckDefault"}),Object(d.jsxs)("label",{style:n,className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:["Enable ",c," Mode"]})]})]})]})})})}}]),a}(c.Component),x=h,m=a(11),u=a.n(m),O=a(13),g=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.description,c=e.urlToImage,n=e.newsUrl,s=e.author,r=e.date,l=e.dark,i=e.light;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"card mb-3 mx-2",style:{padding:"0px",maxWidth:"540px",border:"none"},children:Object(d.jsxs)("div",{className:"row g-0",children:[Object(d.jsx)("div",{className:"col-md-4 d-flex",children:Object(d.jsx)("img",{src:c,style:{objectFit:"cover"},className:"img-fluid rounded-start",alt:"..."})}),Object(d.jsx)("div",{className:"col-md-8",children:Object(d.jsxs)("div",{className:"card-body bg-".concat(l," text-").concat(i),children:[Object(d.jsx)("h5",{className:"card-title",children:t}),Object(d.jsx)("p",{className:"card-text",children:a}),Object(d.jsx)("p",{className:"card-text my-0",children:Object(d.jsx)("small",{className:"text-muted",children:s})}),Object(d.jsxs)("p",{className:"card-text",children:[Object(d.jsxs)("small",{className:"text-muted",children:["Publish at ",new Date(r).toGMTString().slice(0,new Date(r).toGMTString().length-3)]})," ",Object(d.jsxs)("button",{className:"btn-sm btn-dark",children:[" ",Object(d.jsx)("a",{href:n,style:{boxShadow:"none",textDecoration:"none"},target:"_blank",className:"btn-sm btn-dark",children:"Read More"})]})]})]})})]})})})}}]),a}(c.Component),p=g,v=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={articles:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(O.a)(u.a.mark((function e(){var t,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CDM"),t="https://saurav.tech/NewsAPI/top-headlines/category/".concat(this.props.category,"/in.json"),e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:c=e.sent,console.log(c),this.setState({articles:c.articles,totalResult:c.totalResult});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.TextColor,a=e.dark,c=e.light;return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"container ",children:[Object(d.jsx)("h2",{className:"text-center mt-2",style:t,children:"NewsMoney - Latest News"}),Object(d.jsx)("div",{className:"row d-flex  justify-content-center",children:this.state.articles.map((function(e){return Object(d.jsx)(p,{dark:a,light:c,title:e.title?e.title.slice(0,50)+"...":"Unknown",description:e.description?e.description.slice(0,171)+"...":"Description in not found",urlToImage:e.urlToImage?e.urlToImage:"https://i.pinimg.com/originals/fd/78/c4/fd78c47f2a009df65b5b5a46f4437399.png",url:e.url,newsUrl:e.url,author:e.author?e.author:"Author name not found",date:e.publishedAt},e.url)}))})]})})}}]),a}(c.Component);v.defaulProps={};var f=v,k=a(14),y=a(2);var N=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("Dark"),r=Object(l.a)(s,2),i=r[0],o=r[1],j=Object(c.useState)({color:"black"}),b=Object(l.a)(j,2),h=b[0],m=b[1],u=Object(c.useState)("light"),O=Object(l.a)(u,2),g=O[0],p=O[1],v=Object(c.useState)("dark"),N=Object(l.a)(v,2),C=N[0],w=N[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(x,{bgColor:a,TextColor:h,DarkText:i,ChangeMode:function(){"light"===a?(n("dark"),o("Light"),m({color:"white"}),document.body.style.backgroundColor="black",p("dark"),w("light")):(n("light"),o("Dark"),m({color:"black"}),document.body.style.backgroundColor="white",p("light"),w("dark"))}}),Object(d.jsxs)(k.a,{children:[Object(d.jsx)(y.c,{children:Object(d.jsx)(y.a,{exact:!0,path:"/",element:Object(d.jsx)(f,{dark:g,light:C,TextColor:h,category:"general"},"general")})}),Object(d.jsx)(y.c,{children:Object(d.jsx)(y.a,{exact:!0,path:"/sports",element:Object(d.jsx)(f,{dark:g,light:C,TextColor:h,category:"sports"},"sports")})}),Object(d.jsx)(y.c,{children:Object(d.jsx)(y.a,{exact:!0,path:"/science",element:Object(d.jsx)(f,{dark:g,light:C,TextColor:h,category:"science"},"science")})}),Object(d.jsx)(y.c,{children:Object(d.jsx)(y.a,{exact:!0,path:"/technology",element:Object(d.jsx)(f,{dark:g,light:C,TextColor:h,category:"technology"},"technology")})}),Object(d.jsx)(y.c,{children:Object(d.jsx)(y.a,{exact:!0,path:"/business",element:Object(d.jsx)(f,{dark:g,light:C,TextColor:h,category:"business"},"technology")})}),Object(d.jsx)(y.c,{children:Object(d.jsx)(y.a,{exact:!0,path:"/business",element:Object(d.jsx)(f,{dark:g,light:C,TextColor:h,category:"business"},"technology")})}),Object(d.jsx)(y.c,{children:Object(d.jsx)(y.a,{exact:!0,path:"/entertainment",element:Object(d.jsx)(f,{dark:g,light:C,TextColor:h,category:"entertainment"},"technology")})})]})]})},C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),C()}},[[23,1,2]]]);
//# sourceMappingURL=main.276b7a2e.chunk.js.map