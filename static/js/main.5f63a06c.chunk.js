(this.webpackJsonptemlpate=this.webpackJsonptemlpate||[]).push([[0],{10:function(e,t,a){e.exports={detail:"video_detail_detail__3v6gY"}},24:function(e,t,a){e.exports={videoList:"video_list_videoList__Lm6fR"}},3:function(e,t,a){e.exports={header:"header_header__1e8C9",logo:"header_logo__2fQFe",bars:"header_bars__27WAh",header_title:"header_header_title__JNTyZ",searchBox:"header_searchBox__1G-Vu",search:"header_search__17NId",searchBtn:"header_searchBtn__3XA87",btnImg:"header_btnImg__xVnYi",link:"header_link__66Gst",github:"header_github__234M6",notion:"header_notion__NsGlm"}},32:function(e,t,a){},4:function(e,t,a){e.exports={video:"video_item_video__e4ucS",list:"video_item_list__3Lntg",grid:"video_item_grid__3IC60",content:"video_item_content__2HCTV",txtbox:"video_item_txtbox__2Z6P5",title:"video_item_title__1GJ67",thumbnails:"video_item_thumbnails__P9d5c",subtitle:"video_item_subtitle__20HOC"}},5:function(e,t,a){e.exports={nav:"nav_nav__2bHST"}},55:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(23),i=a.n(c),r=(a(32),a(12)),o=a(6),l=a.n(o),d=a(4),u=a.n(d),h=a(0),b=Object(s.memo)((function(e){var t=e.video,a=e.video.snippet,s=e.onVideoClick,n="list"===e.display?u.a.list:u.a.grid;return Object(h.jsx)("li",{className:"".concat(u.a.video," ").concat(n),onClick:function(){s(t)},children:Object(h.jsxs)("div",{className:u.a.content,children:[Object(h.jsx)("img",{className:u.a.thumbnails,src:a.thumbnails.medium.url,alt:"thummbnails"}),Object(h.jsxs)("div",{className:u.a.txtbox,children:[Object(h.jsx)("h3",{className:u.a.title,children:a.title}),Object(h.jsx)("p",{className:u.a.subtitle,children:a.channelTitle})]})]})})})),j=a(24),m=a.n(j),p=Object(s.memo)((function(e){return Object(h.jsx)("ul",{className:m.a.videoList,children:e.videos.map((function(t){return Object(h.jsx)(b,{video:t,onVideoClick:e.onVideoClick,display:e.display},t.id)}))})})),_=a(3),x=a.n(_),O=Object(s.memo)((function(e){var t=Object(s.useRef)(),a=function(){var a=t.current.value;e.onSearch(a)};return Object(h.jsxs)("header",{className:x.a.header,children:[Object(h.jsxs)("div",{className:x.a.logo,children:[Object(h.jsx)("button",{className:x.a.bars,children:Object(h.jsx)("i",{className:"fas fa-bars"})}),Object(h.jsx)("img",{src:"images/logo.png",alt:"logo"}),Object(h.jsx)("h1",{className:x.a.header_title,children:"Youtube"})]}),Object(h.jsxs)("div",{className:x.a.searchBox,children:[Object(h.jsx)("input",{ref:t,type:"text",placeholder:"search",onKeyPress:function(e){"Enter"===e.key&&a()},className:x.a.search}),Object(h.jsx)("button",{className:x.a.searchBtn,onClick:function(){a()},children:Object(h.jsx)("img",{src:"images/search.png",alt:"search",className:x.a.btnImg})})]}),Object(h.jsxs)("div",{className:x.a.link,children:[Object(h.jsx)("a",{href:"https://github.com/jinhee196/youtube-clone2",target:"_blank",rel:"noopener noreferrer",className:x.a.github,children:Object(h.jsx)("i",{className:"fab fa-github"})}),Object(h.jsx)("a",{href:"https://www.notion.so/Javascript-f6514efff28d4b988004ffc961416185",target:"_blank",rel:"noopener noreferrer",className:x.a.notion,children:Object(h.jsx)("img",{src:"images/notion.png",alt:"notion"})})]})]})})),f=a(10),v=a.n(f),g=function(e){return Object(h.jsxs)("section",{className:v.a.seletedVideo,children:[Object(h.jsx)("iframe",{className:v.a.detail,id:e.showVideo.snippet.title,type:"text/html",title:"youtube",width:"100%",height:"500",src:"https://www.youtube.com/embed/".concat(e.showVideo.id),frameBorder:"0",allowFullScreen:!0}),Object(h.jsx)("h2",{children:e.showVideo.snippet.title}),Object(h.jsx)("h3",{children:e.showVideo.snippet.channelTitle}),Object(h.jsx)("p",{children:e.showVideo.snippet.description})]})},N=a(5),y=a.n(N),k=function(){return Object(h.jsxs)("nav",{className:y.a.nav,children:[Object(h.jsxs)("button",{className:y.a.home,children:[Object(h.jsx)("i",{className:"fas fa-home"}),Object(h.jsx)("span",{children:"\ud648"})]}),Object(h.jsxs)("button",{className:y.a.compass,children:[Object(h.jsx)("i",{className:"fas fa-compass"}),Object(h.jsx)("span",{children:"\ud0d0\uc0c9"})]}),Object(h.jsxs)("button",{className:y.a.video,children:[Object(h.jsx)("i",{className:"fas fa-video"}),Object(h.jsx)("span",{children:"\uc5c5\ub85c\ub4dc"})]}),Object(h.jsxs)("button",{className:y.a.cabinet,children:[Object(h.jsx)("i",{className:"fas fa-layer-group"}),Object(h.jsx)("span",{children:"\ubcf4\uad00\ud568"})]})]})};var w=function(e){var t=e.youtube,a=Object(s.useState)([]),n=Object(r.a)(a,2),c=n[0],i=n[1],o=Object(s.useState)(null),d=Object(r.a)(o,2),u=d[0],b=d[1],j=Object(s.useCallback)((function(e){b(e)})),m=Object(s.useCallback)((function(e){t.search(e).then((function(e){return i(e)})),b(null)}),[t]);return Object(s.useEffect)((function(){t.mostPopular().then((function(e){return i(e)}))}),[t]),Object(h.jsxs)("div",{className:l.a.app,children:[Object(h.jsx)(O,{onSearch:m}),Object(h.jsxs)("section",{className:l.a.content,children:[Object(h.jsx)(k,{}),u&&Object(h.jsx)("div",{className:l.a.detail,children:Object(h.jsx)(g,{showVideo:u})}),Object(h.jsx)("div",{className:l.a.list,children:Object(h.jsx)(p,{videos:c,onVideoClick:j,display:u?"list":"grid"})})]})]})},V=a(13),C=a(7),B=a.n(C),S=a(11),I=a(25),L=a(26),P=function(){function e(t){Object(I.a)(this,e),this.youtube=t}return Object(L.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(B.a.mark((function e(t){var a;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",type:"video",q:t,maxResults:25}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(V.a)(Object(V.a)({},e),{},{id:e.id.videoId})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=(a(35),a(27)),E=new P(a.n(T).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyDLywHKXEhmr2x6ikNEUiT8UijZhU0xvdg"}}));i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(w,{youtube:E})}),document.getElementById("root"))},6:function(e,t,a){e.exports={app:"app_app__3Z-BZ",content:"app_content__1dUM0",detail:"app_detail__1zfOB",list:"app_list__2i92W"}}},[[55,1,2]]]);
//# sourceMappingURL=main.5f63a06c.chunk.js.map