(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{14:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__1LEDw",imageGalleryItemimg:"ImageGalleryItem_imageGalleryItemimg__3CdaQ"}},15:function(e,t,a){e.exports={overlay:"Modal_overlay__2GjdW",modal:"Modal_modal__P3_V5"}},25:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__gboaM"}},27:function(e,t,a){e.exports={btn:"Button_btn__3xaJM",Button:"Button_Button__3R1xi",hidden:"Button_hidden__3EsLl"}},29:function(e,t,a){e.exports={containerLoader:"Spinner_containerLoader__1lEzy"}},34:function(e,t,a){},35:function(e,t,a){},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__jo466",form:"Searchbar_form__XuKjc","SearchForm-button":"Searchbar_SearchForm-button__3u-rY","SearchForm-button-label":"Searchbar_SearchForm-button-label__2bzU3",input:"Searchbar_input__2C4aO"}},76:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(5),r=a.n(o),i=(a(34),a(16)),l=a(4),s=(a(35),a(6)),u=(a(13),a(7)),b=a.n(u),m=a(1);var j=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],o=a[1];return Object(m.jsx)("header",{className:b.a.searchbar,children:Object(m.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c.trim()?(e.onSubmit(c),o("")):s.b.error("Put name picture")},className:b.a.form,children:[Object(m.jsx)("button",{type:"submit",className:b.a.button,children:Object(m.jsx)("span",{className:b.a.buttonLabel,children:"Search"})}),Object(m.jsx)("input",{name:"query",className:b.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})},d=a(14),h=a.n(d);var f=function(e){var t=e.onClick,a=e.image;return Object(m.jsx)("li",{className:h.a.imageGalleryItem,children:Object(m.jsx)("img",{className:h.a.imageGalleryItemimg,src:a.webformatURL,alt:a.tags,onClick:function(){t(a.largeImageURL)}})})},g=a(25),O=a.n(g),_=function(e){var t=e.openModal,a=e.images,n=e.getImageModal;return Object(m.jsx)("ul",{className:O.a.gallery,onClick:t,children:a.map((function(e){return Object(m.jsx)(f,{image:e,onClick:n},e.id)}))})},p=a(26),x=a.n(p);var v=function(e,t){return e?x.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23543549-635b4a8d9e20c5ded331689b0","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits})):Promise.resolve([])},y=a(27),S=a.n(y),C=function(e){var t=e.onClick;return Object(m.jsx)("button",{className:S.a.btn,onClick:t,children:"Load more"})};var I=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},k=a(28),w=a.n(k),N=(a(75),a(29)),L=a.n(N),E=function(){return Object(m.jsx)("div",{className:L.a.containerLoader,children:Object(m.jsx)(w.a,{type:"Rings",color:"#3f51b5",height:80,width:80})})},G=a(15),M=a.n(G),B=document.querySelector("#modal-root");var F=function(e){function t(t){"Escape"===t.key&&e.onClose()}return Object(n.useEffect)((function(){return window.addEventListener("keydown",t),function(){window.removeEventListener("keydown",t)}}),[]),Object(o.createPortal)(Object(m.jsx)("div",{className:M.a.overlay,onClick:function(t){t.currentTarget===t.target&&e.onClose()},children:Object(m.jsx)("div",{className:M.a.modal,children:Object(m.jsx)("img",{src:e.largeImageUrl,alt:e.tags})})}),B)};var U=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(1),r=Object(l.a)(o,2),u=r[0],b=r[1],d=Object(n.useState)([]),h=Object(l.a)(d,2),f=h[0],g=h[1],O=Object(n.useState)(""),p=Object(l.a)(O,2),x=p[0],y=p[1],S=Object(n.useState)(!1),k=Object(l.a)(S,2),w=k[0],N=k[1],L=Object(n.useState)(!1),G=Object(l.a)(L,2),M=G[0],B=G[1];function U(){B(!0),v(a,u).then((function(e){I(),g((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e))}))})).finally((function(){B(!1)})).catch((function(){s.b.error("Server error")}))}Object(n.useEffect)((function(){g([]),b(1),U()}),[a]),Object(n.useEffect)((function(){return U()}),[u]);var P=function(){N(!w)};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(j,{onSubmit:c}),0!==f.length&&Object(m.jsx)(_,{images:f,getImageModal:function(e){y(e)},openModal:P}),w&&Object(m.jsx)(F,{largeImageUrl:x,onClose:P}),M&&Object(m.jsx)(E,{}),f.length>0&&Object(m.jsx)(C,{onClick:function(){b(u+1)}}),Object(m.jsx)(s.a,{autoClose:3e3})]})};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(U,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.712cb73b.chunk.js.map